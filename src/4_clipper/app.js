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
}

async function loadIfc(url) {
  // Load the model
  const model = await viewer.IFC.loadIfcUrl(url)
  await viewer.shadowDropper.renderShadow(model.modelID)
  viewer.context.renderer.postProduction.active = true
}

loadIfc('../../ifcSamples/modified.ifc')

//Select elements and highlight them
window.ondblclick = async () => await viewer.IFC.selector.pickIfcItem()
window.onmousemove = async () => await viewer.IFC.selector.prePickIfcItem()

//Create a cut plane with press "KeyP"
window.onkeydown = (event) => {
  console.log(event.code)
  if (event.code === 'KeyP') {
    viewer.clipper.active = true
    viewer.clipper.createPlane()
  }
  if (event.code === 'Escape') {
    viewer.clipper.deletePlane()
    showAllItems(viewer)
  }
}
