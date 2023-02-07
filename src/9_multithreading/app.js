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

// Set path's
init()
async function init() {
  await viewer.IFC.setWasmPath('../../node_modules/web-ifc/')
  await viewer.IFC.loader.ifcManager.useWebWorkers(
    true,
    '../../node_modules/web-ifc-three/IFCWorker.js'
  )
}

function setupProgressNotification() {
  const text = document.getElementById('progress-text')
  viewer.IFC.loader.ifcManager.setOnProgress((event) => {
    const percent = (event.loaded / event.total) * 100
    const result = Math.trunc(percent)
    text.innerText = result.toString()
  })
}
setupProgressNotification()

async function loadIfc(url) {
  const model = await viewer.IFC.loadIfcUrl(url)
  viewer.shadowDropper.renderShadow(model.modelID)
}

const input = document.getElementById('file-input')

input.addEventListener(
  'change',

  async (changed) => {
    const file = changed.target.files[0]
    const ifcURL = URL.createObjectURL(file)
    loadIfc(ifcURL)
  },

  false
)
