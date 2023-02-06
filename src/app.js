import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({
  container,
  backgroundColor: new Color(0xffffff),
});
viewer.axes.setAxes();
viewer.grid.setGrid();

window.ondblclick = async () => await viewer.IFC.selector.pickIfcItem(true);
window.onmousemove = async () => await viewer.IFC.selector.prePickIfcItem();

async function loadIfc(url) {
  await viewer.IFC.setWasmPath("../");
  const model = await viewer.IFC.loadIfcUrl(url);
  await viewer.shadowDropper.renderShadow(model.modelID);
}

// Button to load IFC file.
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

