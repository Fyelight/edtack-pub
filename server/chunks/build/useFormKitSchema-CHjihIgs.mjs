function useFormKitSchema() {
  const addComponent = (component = "Button", props = {}, render = true, formKitAttrs = {}) => {
    return {
      $cmp: component,
      if: render.toString(),
      props,
      ...formKitAttrs
    };
  };
  const addElement = (element = "div", children = [], attrs = {}, render = true, formKitAttrs = {}) => {
    return {
      $el: element,
      if: render.toString(),
      attrs,
      children,
      ...formKitAttrs
    };
  };
  const addGroup = (name, children = [], render = true, formKitAttrs = {}) => {
    return {
      $formkit: "group",
      if: render.toString(),
      name,
      children,
      ...formKitAttrs
    };
  };
  const addList = (name, children = [], dynamic = true, render = true, formKitAttrs = {}) => {
    return {
      $formkit: "list",
      if: render.toString(),
      name,
      dynamic,
      children,
      ...formKitAttrs
    };
  };
  const addListGroup = (children = [], render = true, formKitAttrs = {}) => {
    return {
      $formkit: "group",
      if: render.toString(),
      for: ["item", "index", "$items"],
      // 👈 $items is in the slot’s scope
      key: "$item",
      index: "$index",
      children,
      ...formKitAttrs
    };
  };
  const addElementsInOuterDiv = (children = [], innerClass = "", outerClass = "", label = "", help = "", render = true) => {
    const inner = addElement("div", children, { class: `formkit-inner ${innerClass}`, style: "position: relative;" });
    const labelDiv = addElement("label", [label], { class: "formkit-label" });
    const wrapperDiv = addElement("div", [labelDiv, inner], { class: "formkit-wrapper" });
    const helpDiv = addElement("div", [help], { class: "formkit-help" });
    return addElement("div", [wrapperDiv, helpDiv], { class: `formkit-outer ${outerClass}`, style: "position: relative;" }, render);
  };
  return { addComponent, addElement, addGroup, addList, addListGroup, addElementsInOuterDiv };
}

export { useFormKitSchema as u };
