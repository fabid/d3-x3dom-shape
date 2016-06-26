export function makeSolid(selection, color) {
  selection.append("appearance").append("material").attr("diffuseColor", color || "black");
  return selection;
}
