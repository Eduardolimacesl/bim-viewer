import { Color } from 'three'
import { IFCBUILDINGSTOREY } from 'web-ifc'
import { IfcViewerAPI } from 'web-ifc-viewer'

const container = document.getElementById('viewer-container')
const viewer = new IfcViewerAPI({
  container,
  backgroundColor: new Color(0xffffff),
})

// Create grid and axes
viewer.grid.setGrid()
viewer.axes.setAxes()
init()

async function init() {
  await viewer.IFC.setWasmPath('../../node_modules/web-ifc/')
}

async function loadIfc(url) {
  // Load the model
  const model = await viewer.IFC.loadIfcUrl(url)
  await viewer.shadowDropper.renderShadow(model.modelID)
  viewer.context.renderer.postProduction.active = true
}

loadIfc('../../ifcSamples/TESTED_Simple_project_01.ifc')

//Select elements and highlight them with any material
window.ondblclick = async () => await viewer.IFC.selector.pickIfcItem()
window.onmousemove = async () => await viewer.IFC.selector.prePickIfcItem()

async function edit(event) {
  const manager = viewer.IFC.loader.ifcManager
  const storeysIDs = await manager.getAllItemsOfType(
    0,
    IFCBUILDINGSTOREY,
    false
  )
  const storeyID = storeysIDs[0]
  const storey = await manager.getItemProperties(0, storeyID)
  console.log(storey)

  storey.LongName.value = 'Nivel 1 - Editado'
  manager.ifcAPI.WriteLine(0, storey)

  const data = await manager.ifcAPI.ExportFileAsIFC(0)
  const blob = new Blob([data])
  const file = new File([blob], 'modified.ifc')

  const link = document.createElement('a')
  link.download = 'modified.ifc'
  link.href = URL.createObjectURL(file)
  document.body.appendChild(link)
  link.click()
  link.remove()
}

window.onkeydown = (event) => {
  if (event.code === 'KeyP') {
    edit()
  }
}
