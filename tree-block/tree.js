class ObjectTree {
    constructor(options) {
        this._el = options.el;
        this._data = options.data;

        this._render();
    }

    _render() {
        this._el.innerHTML = this._getListHtml(this._data);
    }

    _getListHtml(data) {
        let html = '<ul>';

        for (let key in data) {
           html += `<li>${key}`;

           if (Object.keys(data[key]).length) {
               html += this._getListHtml(data[key]);
           }
           html +='</li>';
        }

        html += '</ul>';

        return html;
    }

}
let objData = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};