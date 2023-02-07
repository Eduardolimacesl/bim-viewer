import { Color } from 'three'
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

  const model = await viewer.IFC.loadIfcUrl(
    '../../ifcSamples/TESTED_Simple_project_01.ifc'
  )

  await viewer.shadowDropper.renderShadow(model.modelID)
  viewer.context.renderer.postProduction.active = true

  viewer.dimensions.active = true
  viewer.dimensions.previewActive = true

  window.ondblclick = () => {
    viewer.dimensions.create()
  }

  window.onkeydown = (event) => {
    if (event.code === 'Delete') {
      viewer.dimensions.delete()
    }
  }
}

//Select elements and highlight them with any material
window.onmousemove = async () => await viewer.IFC.selector.prePickIfcItem()
