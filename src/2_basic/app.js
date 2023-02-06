import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ 
  container, 
  backgroundColor: new Color(0xffffff) 
});

// Create grid and axes
viewer.grid.setGrid();
viewer.axes.setAxes();

// Set path's
init();
async function init() {
  await viewer.IFC.setWasmPath("../../node_modules/web-ifc/");
}

async function loadIfc(url) {
  const model = await viewer.IFC.loadIfcUrl(url);
  viewer.shadowDropper.renderShadow(model.modelID);
}

const input = document.getElementById("file-input");

input.addEventListener(
  "change",

  async (changed) => {
    const file = changed.target.files[0];
    const ifcURL = URL.createObjectURL(file);
    loadIfc(ifcURL);
  },

  false
);