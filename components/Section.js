export default class Section {
  constructor({ items, renderer }, styleSelector) {
    this._items = items;
    this._renderer = renderer;
    this._styleSelector = styleSelector;
  }
  renderer() {
    this._items.forEach((item) => {
      const renderItem = this._renderer(item);
      this.addItem(renderItem);
    });
  }
  addItem(element) {
    this._styleSelector.append(element);
  }
}
