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

  async function exportJson(event) {
    // Serialize properties
    const result = await viewer.IFC.properties.serializeAllProperties(
      model,
      undefined,
      (current, total) => {
        const progress = current / total
        const formatted = Math.trunc(progress * 100)
        console.log(formatted + '%')
      }
    )

    // Download the properties as JSON file
    const file = new File(result, 'properties')

    const link = document.createElement('a')
    document.body.appendChild(link)
    link.href = URL.createObjectURL(file)
    link.download = 'properties.json'
    link.click()
    link.remove()
  }

  window.onkeydown = (event) => {
    if (event.code === 'KeyP') {
      exportJson()
    }
  }
}

//Select elements and highlight them with any material
window.onmousemove = async () => await viewer.IFC.selector.prePickIfcItem()
