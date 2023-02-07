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
  await viewer.IFC.loadIfcUrl('../../ifcSamples/TESTED_Simple_project_01.ifc')
  await viewer.GLTF.load('../../gltfSamples/police_station.glb')
}

//Select elements and highlight them with any material
window.onmousemove = async () => await viewer.IFC.selector.prePickIfcItem()
