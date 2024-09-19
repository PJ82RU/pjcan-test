"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[774],{

/***/ 59682:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(45130);
// EXTERNAL MODULE: ./src/App.vue + 3 modules
var App = __webpack_require__(21855);
// EXTERNAL MODULE: ./src/router/index.ts
var router = __webpack_require__(81459);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(81052);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/styles/main.css
var main = __webpack_require__(35524);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.mjs
var framework = __webpack_require__(37768);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/index.mjs + 27 modules
var components = __webpack_require__(17562);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/index.mjs + 4 modules
var directives = __webpack_require__(10406);
;// CONCATENATED MODULE: ./src/plugins/vuetify.ts
// Styles



// Vuetify



const customDarkTheme = {
  ...components,
  ...directives,
  dark: true,
  colors: {
    background: "#121517",
    surface: "#21262a",
    primary: "#0b677b",
    secondary: "#25323e",
    accent: "#9c27b0",
    error: "#ef5350",
    info: "#78909c",
    success: "#66bb6a",
    warning: "#ffee58",
    menu: "#3f6e90",
    disable: "#676b6d"
  }
};
/* harmony default export */ var vuetify = ((0,framework/* createVuetify */.$N)({
  theme: {
    defaultTheme: "customDarkTheme",
    themes: {
      customDarkTheme
    }
  }
}));
// EXTERNAL MODULE: ./src/lang/index.ts + 2 modules
var lang = __webpack_require__(96188);
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/esm/index.js
var esm = __webpack_require__(63262);
// EXTERNAL MODULE: ./node_modules/@egjs/vue3-flicking/dist/flicking.css
var flicking = __webpack_require__(86635);
;// CONCATENATED MODULE: ./src/main.ts






// шрифты


// уведомления Vue3Toasity


const Vue3ToasityOptions = {
  autoClose: 3000,
  theme: esm/* toast */.oR.THEME.COLORED,
  hideProgressBar: true,
  position: esm/* toast */.oR.POSITION.BOTTOM_RIGHT,
  pauseOnHover: true,
  newestOnTop: true
};
// vue3-flicking

(0,runtime_dom_esm_bundler/* createApp */.Ef)(App/* default */.A).use(router/* default */.A).use(store/* default */.A).use(vuetify).use(lang/* default */.Ay).use(esm/* default */.Ay, Vue3ToasityOptions).mount("#app");

/***/ }),

/***/ 22575:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ API_CANBUS_EVENT; },
/* harmony export */   t: function() { return /* binding */ BaseModel; }
/* harmony export */ });
/* harmony import */ var D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91114);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16573);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78100);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77936);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_2__);




const API_CANBUS_EVENT = "Canbus";
/** Базовая модель */
class BaseModel {
  constructor(exec, highPriority = false, protocol = 41) {
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "exec", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "highPriority", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "protocol", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "skipActivationCheck", false);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "id", 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "isData", false);
    this.exec = exec;
    this.highPriority = highPriority;
    this.protocol = protocol;
  }
  /**
   * Запись данных
   * @param {any} th Объект модели
   * @param {number} exec Команда API
   * @param {number} size Размер данных
   * @param {IBluetoothStruct} struct Структура данных
   * @param {DataView} buf Буфер данных
   * @protected
   */
  _set(th, exec, size, struct, buf) {
    const offset = this.protocol === 40 ? 1 : 3;
    const id = buf.getUint8(0);
    const result = this.protocol === 40 ? id === exec : id === exec && (buf.byteLength >= 3 ? buf.getUint16(1, true) : 0) === size;
    if (result) {
      try {
        struct.decode(buf, th, offset);
        this.isData = true;
      } catch (e) {
        console.log(e);
      }
    }
    return result;
  }
  /**
   * Чтение данных
   * @param {any} th Объект модели
   * @param {number} exec Команда API
   * @param {number} size Длина данных
   * @param {IBluetoothStruct} struct Структура данных
   */
  _get(th, exec, size = 0, struct) {
    const offset = this.protocol === 40 ? 1 : 3;
    const buf = new DataView(new ArrayBuffer(size + offset));
    buf.setUint8(0, exec);
    if (offset === 3) buf.setUint16(1, size, true);
    if (size > 0) {
      try {
        struct?.encode(buf, th, offset);
      } catch (e) {
        console.log(e);
        if (offset === 3) buf.setUint16(1, 0, true);
      }
    }
    return buf;
  }
}

/***/ }),

/***/ 30449:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: function() { return /* reexport safe */ _BaseModel__WEBPACK_IMPORTED_MODULE_0__.t; }
/* harmony export */ });
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22575);



/***/ }),

/***/ 89100:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zV: function() { return /* reexport */ API_BOSE_CONFIG_EVENT; },
  YG: function() { return /* reexport */ API_BOSE_CONFIG_EXEC; },
  qJ: function() { return /* reexport */ API_BOSE_VIEW_EVENT; },
  xT: function() { return /* reexport */ API_BOSE_VIEW_EXEC; },
  gh: function() { return /* reexport */ BoseConfig; },
  k1: function() { return /* reexport */ TCenterPoint; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/bose/TCenterPoint.ts
/* eslint-disable */
var TCenterPoint;
(function (TCenterPoint) {
  TCenterPoint[TCenterPoint["CENTERPOINT_OFF"] = 0] = "CENTERPOINT_OFF";
  TCenterPoint[TCenterPoint["CENTERPOINT_MIN"] = 1] = "CENTERPOINT_MIN";
  TCenterPoint[TCenterPoint["CENTERPOINT_LOW"] = 2] = "CENTERPOINT_LOW";
  TCenterPoint[TCenterPoint["CENTERPOINT_MID"] = 3] = "CENTERPOINT_MID";
  TCenterPoint[TCenterPoint["CENTERPOINT_HI"] = 4] = "CENTERPOINT_HI";
  TCenterPoint[TCenterPoint["CENTERPOINT_MAX"] = 5] = "CENTERPOINT_MAX";
})(TCenterPoint || (TCenterPoint = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/bose/BoseConfig.ts




const API_BOSE_CONFIG_EXEC = 0x60;
const API_BOSE_CONFIG_EVENT = "BoseConfig";
const API_BOSE_VIEW_EXEC = 0x63;
const API_BOSE_VIEW_EVENT = "BoseView";
/** Модель параметров Bose */
class BoseConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_BOSE_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "on", false);
    (0,defineProperty/* default */.A)(this, "audioPlt", false);
    (0,defineProperty/* default */.A)(this, "radioFM", false);
    (0,defineProperty/* default */.A)(this, "wow", false);
    (0,defineProperty/* default */.A)(this, "press", false);
    (0,defineProperty/* default */.A)(this, "balance", 0);
    (0,defineProperty/* default */.A)(this, "bass", 0);
    (0,defineProperty/* default */.A)(this, "fade", 0);
    (0,defineProperty/* default */.A)(this, "treble", 0);
    (0,defineProperty/* default */.A)(this, "centerPoint", TCenterPoint.CENTERPOINT_OFF);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, BoseConfig.size, new bluetooth/* BluetoothStruct */.iy(BoseConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, BoseConfig.size, new bluetooth/* BluetoothStruct */.iy(BoseConfig.struct));
  }
}
(0,defineProperty/* default */.A)(BoseConfig, "struct", {
  on: bluetooth/* BluetoothStruct */.iy.bit(),
  audioPlt: bluetooth/* BluetoothStruct */.iy.bit(),
  radioFM: bluetooth/* BluetoothStruct */.iy.bit(),
  wow: bluetooth/* BluetoothStruct */.iy.bit(),
  press: bluetooth/* BluetoothStruct */.iy.bit(),
  balance: bluetooth/* BluetoothStruct */.iy.int8(),
  bass: bluetooth/* BluetoothStruct */.iy.int8(),
  fade: bluetooth/* BluetoothStruct */.iy.int8(),
  treble: bluetooth/* BluetoothStruct */.iy.int8(),
  centerPoint: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(BoseConfig, "size", 6);
;// CONCATENATED MODULE: ./src/models/pjcan/bose/index.ts




/***/ }),

/***/ 8871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dE: function() { return /* reexport */ API_BUTTONS_SW1_CONFIG_EVENT; },
  ed: function() { return /* reexport */ API_BUTTONS_SW1_CONFIG_EXEC; },
  Dg: function() { return /* reexport */ API_BUTTONS_SW3_CONFIG_EVENT; },
  SI: function() { return /* reexport */ API_BUTTONS_SW3_CONFIG_EXEC; },
  Du: function() { return /* reexport */ API_BUTTON_SW1_VALUE_EVENT; },
  IF: function() { return /* reexport */ API_BUTTON_SW1_VALUE_EXEC; },
  fB: function() { return /* reexport */ API_BUTTON_SW3_VALUE_EVENT; },
  UK: function() { return /* reexport */ API_BUTTON_SW3_VALUE_EXEC; },
  GV: function() { return /* reexport */ ButtonValue; },
  Ab: function() { return /* reexport */ ButtonsConfig; },
  su: function() { return /* reexport */ TButtonExec; },
  hB: function() { return /* reexport */ TButtonType; }
});

// UNUSED EXPORTS: API_BUTTONS_SW1_ACTION_EVENT, API_BUTTONS_SW1_ACTION_EXEC, API_BUTTONS_SW3_ACTION_EVENT, API_BUTTONS_SW3_ACTION_EXEC, ButtonsAction, TButtonItem, TButtonPress

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/ButtonsConfig.ts




const API_BUTTONS_SW1_CONFIG_EXEC = 0x30;
const API_BUTTONS_SW1_CONFIG_EVENT = "ButtonsSW1Config";
const API_BUTTONS_SW3_CONFIG_EXEC = 0x3a;
const API_BUTTONS_SW3_CONFIG_EVENT = "ButtonsSW3Config";
/** Модель конфигурации кнопок */
class ButtonsConfig extends base/* BaseModel */.t {
  constructor(exec = API_BUTTONS_SW1_CONFIG_EXEC, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "enabled", false);
    (0,defineProperty/* default */.A)(this, "programming", false);
    (0,defineProperty/* default */.A)(this, "items", []);
    for (let i = 0; i < 7; i++) {
      const item = {
        extended: false,
        hold: 0,
        resistanceMin: 0,
        resistanceMax: 0,
        exec: new Array(5),
        execMode: new Array(5)
      };
      this.items.push(item);
    }
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, ButtonsConfig.size, new bluetooth/* BluetoothStruct */.iy(ButtonsConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, ButtonsConfig.size, new bluetooth/* BluetoothStruct */.iy(ButtonsConfig.struct));
  }
  /**
   * Запись параметров кнопки
   * @param {IButtonConfigItem} value Новое значение
   */
  setItem(value) {
    const index = this.items.findIndex(x => x.id === value.id);
    if (index < 0) return false;
    const item = this.items[index];
    item.extended = value.extended;
    item.id = value.id;
    item.hold = value.hold;
    item.resistanceMin = value.resistanceMin;
    item.resistanceMax = value.resistanceMax;
    item.exec = [...value.exec];
    item.execMode = [...value.execMode];
    return true;
  }
}
(0,defineProperty/* default */.A)(ButtonsConfig, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.bit(),
  programming: bluetooth/* BluetoothStruct */.iy.bit(),
  items: bluetooth/* BluetoothStruct */.iy.struct({
    extended: bluetooth/* BluetoothStruct */.iy.bit(),
    id: bluetooth/* BluetoothStruct */.iy.uint8(),
    hold: bluetooth/* BluetoothStruct */.iy.uint8(),
    resistanceMin: bluetooth/* BluetoothStruct */.iy.uint16(),
    resistanceMax: bluetooth/* BluetoothStruct */.iy.uint16(),
    exec: bluetooth/* BluetoothStruct */.iy.uint8(5),
    execMode: bluetooth/* BluetoothStruct */.iy.uint8(5)
  }, 7)
});
(0,defineProperty/* default */.A)(ButtonsConfig, "size", 120);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/TButtonType.ts
/* eslint-disable */
var TButtonType;
(function (TButtonType) {
  TButtonType[TButtonType["PRESS_RELEASE"] = 0] = "PRESS_RELEASE";
  TButtonType[TButtonType["PRESS_SINGLE"] = 1] = "PRESS_SINGLE";
  TButtonType[TButtonType["PRESS_DUAL"] = 2] = "PRESS_DUAL";
  TButtonType[TButtonType["PRESS_TRIPLE"] = 3] = "PRESS_TRIPLE";
  TButtonType[TButtonType["PRESS_HOLD"] = 4] = "PRESS_HOLD";
})(TButtonType || (TButtonType = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/TButtonExec.ts
/* eslint-disable */
/** Список ID функций кнопки */
var TButtonExec;
(function (TButtonExec) {
  TButtonExec[TButtonExec["BUTTON_EXEC_NONE"] = 0] = "BUTTON_EXEC_NONE";
  TButtonExec[TButtonExec["BUTTON_EXEC_ENTERING_MODE"] = 1] = "BUTTON_EXEC_ENTERING_MODE";
  TButtonExec[TButtonExec["BUTTON_EXEC_EXITING_MODE"] = 2] = "BUTTON_EXEC_EXITING_MODE";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_MODE"] = 3] = "BUTTON_EXEC_PRESS_MODE";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_SET_UP"] = 4] = "BUTTON_EXEC_PRESS_SET_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_SET_DOWN"] = 5] = "BUTTON_EXEC_PRESS_SET_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_VOLUME_UP"] = 6] = "BUTTON_EXEC_PRESS_VOLUME_UP";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_VOLUME_DOWN"] = 7] = "BUTTON_EXEC_PRESS_VOLUME_DOWN";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_MUTE"] = 8] = "BUTTON_EXEC_PRESS_MUTE";
  TButtonExec[TButtonExec["BUTTON_EXEC_HOLD_CLOCK"] = 9] = "BUTTON_EXEC_HOLD_CLOCK";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_CLOCK"] = 10] = "BUTTON_EXEC_PRESS_CLOCK";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_CLOCK_H"] = 11] = "BUTTON_EXEC_PRESS_CLOCK_H";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_CLOCK_M"] = 12] = "BUTTON_EXEC_PRESS_CLOCK_M";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_CLOCK_24"] = 13] = "BUTTON_EXEC_PRESS_CLOCK_24";
  TButtonExec[TButtonExec["BUTTON_EXEC_HOLD_INFO"] = 14] = "BUTTON_EXEC_HOLD_INFO";
  TButtonExec[TButtonExec["BUTTON_EXEC_PRESS_INFO"] = 15] = "BUTTON_EXEC_PRESS_INFO";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_ENGINE"] = 16] = "BUTTON_EXEC_VIEW_ENGINE";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_FUEL"] = 17] = "BUTTON_EXEC_VIEW_FUEL";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_MOVEMENT"] = 18] = "BUTTON_EXEC_VIEW_MOVEMENT";
  TButtonExec[TButtonExec["BUTTON_EXEC_VIEW_TEMPERATURE"] = 19] = "BUTTON_EXEC_VIEW_TEMPERATURE";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_VOICE"] = 20] = "BUTTON_EXEC_TEYES_VOICE";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_RADIO"] = 21] = "BUTTON_EXEC_TEYES_RADIO";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_CAMERA"] = 22] = "BUTTON_EXEC_TEYES_CAMERA";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_RADIO_SEARCH"] = 23] = "BUTTON_EXEC_TEYES_RADIO_SEARCH";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_EQUALIZER"] = 24] = "BUTTON_EXEC_TEYES_EQUALIZER";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_DISPLAY_ON_OFF"] = 25] = "BUTTON_EXEC_TEYES_DISPLAY_ON_OFF";
  TButtonExec[TButtonExec["BUTTON_EXEC_TEYES_PHONE"] = 26] = "BUTTON_EXEC_TEYES_PHONE"; // телефон ГУ
})(TButtonExec || (TButtonExec = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/ButtonValue.ts





const API_BUTTON_SW1_VALUE_EXEC = 0x31;
const API_BUTTON_SW1_VALUE_EVENT = "ButtonSW1Value";
const API_BUTTON_SW3_VALUE_EXEC = 0x3b;
const API_BUTTON_SW3_VALUE_EVENT = "ButtonSW3Value";
/** Модель значений кнопок */
class ButtonValue extends base/* BaseModel */.t {
  constructor(exec = API_BUTTON_SW1_VALUE_EXEC, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "layered", false);
    (0,defineProperty/* default */.A)(this, "id", 0);
    (0,defineProperty/* default */.A)(this, "btnExec", TButtonExec.BUTTON_EXEC_NONE);
    (0,defineProperty/* default */.A)(this, "btnExecMode", TButtonExec.BUTTON_EXEC_NONE);
    (0,defineProperty/* default */.A)(this, "count", 0);
    (0,defineProperty/* default */.A)(this, "type", TButtonType.PRESS_RELEASE);
    (0,defineProperty/* default */.A)(this, "resistance", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, ButtonValue.size, new bluetooth/* BluetoothStruct */.iy(ButtonValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(ButtonValue, "struct", {
  layered: bluetooth/* BluetoothStruct */.iy.bit(),
  id: bluetooth/* BluetoothStruct */.iy.uint8(),
  btnExec: bluetooth/* BluetoothStruct */.iy.uint8(),
  btnExecMode: bluetooth/* BluetoothStruct */.iy.uint8(),
  count: bluetooth/* BluetoothStruct */.iy.uint8(),
  type: bluetooth/* BluetoothStruct */.iy.uint8(),
  resistance: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(ButtonValue, "size", 8);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/ButtonsAction.ts



const API_BUTTONS_SW1_ACTION_EXEC = 0x32;
const API_BUTTONS_SW1_ACTION_EVENT = "ButtonsSW1Action";
const API_BUTTONS_SW3_ACTION_EXEC = 0x3c;
const API_BUTTONS_SW3_ACTION_EVENT = "ButtonsSW3Action";
/** Модель конфигурации кнопок */
class ButtonsAction extends base/* BaseModel */.t {
  constructor(exec = API_BUTTONS_SW1_ACTION_EXEC) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "empty", false);
    (0,defineProperty/* default */.A)(this, "defaultMazda3", false);
    (0,defineProperty/* default */.A)(this, "defaultMazdaCX7", false);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, ButtonsAction.size, new bluetooth/* BluetoothStruct */.iy(ButtonsAction.struct));
  }
}
(0,defineProperty/* default */.A)(ButtonsAction, "struct", {
  empty: bluetooth/* BluetoothStruct */.iy.bit(),
  defaultMazda3: bluetooth/* BluetoothStruct */.iy.bit(),
  defaultMazdaCX7: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(ButtonsAction, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/TButtonItem.ts
/* eslint-disable */
/** Список ID кнопки */
var TButtonItem;
(function (TButtonItem) {
  TButtonItem[TButtonItem["BUTTON_MODE"] = 0] = "BUTTON_MODE";
  TButtonItem[TButtonItem["BUTTON_SET_UP"] = 1] = "BUTTON_SET_UP";
  TButtonItem[TButtonItem["BUTTON_SET_DOWN"] = 2] = "BUTTON_SET_DOWN";
  TButtonItem[TButtonItem["BUTTON_VOL_UP"] = 3] = "BUTTON_VOL_UP";
  TButtonItem[TButtonItem["BUTTON_VOL_DOWN"] = 4] = "BUTTON_VOL_DOWN";
  TButtonItem[TButtonItem["BUTTON_VOL_MUTE"] = 5] = "BUTTON_VOL_MUTE"; // кнопка выкл. звука
})(TButtonItem || (TButtonItem = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/TButtonPress.ts
/* eslint-disable */
/** Список ID действий кнопки */
var TButtonPress;
(function (TButtonPress) {
  TButtonPress[TButtonPress["RELEASE"] = 0] = "RELEASE";
  TButtonPress[TButtonPress["PRESS_SINGLE"] = 1] = "PRESS_SINGLE";
  TButtonPress[TButtonPress["PRESS_DUAL"] = 2] = "PRESS_DUAL";
  TButtonPress[TButtonPress["PRESS_TRIPLE"] = 3] = "PRESS_TRIPLE";
  TButtonPress[TButtonPress["PRESS_HOLD"] = 4] = "PRESS_HOLD";
})(TButtonPress || (TButtonPress = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/buttons/index.ts









/***/ }),

/***/ 19103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: function() { return /* reexport */ API_CHOICE_EXEC; },
  L: function() { return /* reexport */ ChoiceValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(16573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(78100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(77936);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/choice/ChoiceValue.ts





const API_CHOICE_EXEC = 0x10;
/** Модель выборочного запроса данных */
class ChoiceValue extends base/* BaseModel */.t {
  constructor(data, fn) {
    super(API_CHOICE_EXEC);
    (0,defineProperty/* default */.A)(this, "listID", []);
    if (data && fn) this.parse(data, fn);
  }
  /**
   * Разбор выборочных данных
   * @param {DataView} data Данные
   * @param {function} fn Метод входящих данных
   */
  parse(data, fn) {
    const data_size = data.getUint16(1, true);
    if (data_size === 0 || data_size + 3 > data.byteLength) return;
    let offset = 3;
    while (offset < data_size) {
      const id = data.getUint8(offset);
      const size = data.getUint16(offset + 1, true);
      const frame_size = size + 3;
      if (offset + frame_size > data.byteLength) break;
      if (id !== this.exec) fn(new DataView(data.buffer.slice(offset, offset + frame_size)));
      offset += frame_size;
    }
  }
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    const buf = new DataView(new ArrayBuffer(this.listID.length + 3));
    buf.setUint8(0, this.exec);
    buf.setUint16(1, this.listID.length, true);
    this.listID.forEach((id, index) => buf.setUint8(3 + index, id));
    return buf;
  }
}
;// CONCATENATED MODULE: ./src/models/pjcan/choice/index.ts



/***/ }),

/***/ 72418:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Yu: function() { return /* reexport */ API_CLIMATE_VALUE_EVENT; },
  Z$: function() { return /* reexport */ API_CLIMATE_VALUE_EXEC; },
  yt: function() { return /* reexport */ API_CLIMATE_VIEW_EVENT; },
  zE: function() { return /* reexport */ API_CLIMATE_VIEW_EXEC; },
  lA: function() { return /* reexport */ ClimateValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/climate/ClimateValue.ts



const API_CLIMATE_VALUE_EXEC = 0x71;
const API_CLIMATE_VALUE_EVENT = "ClimateValue";
const API_CLIMATE_VIEW_EXEC = 0x73;
const API_CLIMATE_VIEW_EVENT = "ClimateView";
/** Модель значений климата */
class ClimateValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_CLIMATE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "on", false);
    (0,defineProperty/* default */.A)(this, "automode", false);
    (0,defineProperty/* default */.A)(this, "ac", false);
    (0,defineProperty/* default */.A)(this, "eco", false);
    (0,defineProperty/* default */.A)(this, "airDLegs", false);
    (0,defineProperty/* default */.A)(this, "airDBody", false);
    (0,defineProperty/* default */.A)(this, "airDWindshield", false);
    (0,defineProperty/* default */.A)(this, "dBackWin", false);
    (0,defineProperty/* default */.A)(this, "airInside", false);
    (0,defineProperty/* default */.A)(this, "airOutside", false);
    (0,defineProperty/* default */.A)(this, "temperatureSettable", false);
    (0,defineProperty/* default */.A)(this, "temperatureAmb", false);
    (0,defineProperty/* default */.A)(this, "temperatureCelsius", false);
    (0,defineProperty/* default */.A)(this, "temperatureFahrenheit", false);
    (0,defineProperty/* default */.A)(this, "airRate", 0);
    (0,defineProperty/* default */.A)(this, "temperature", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, ClimateValue.size, new bluetooth/* BluetoothStruct */.iy(ClimateValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(ClimateValue, "struct", {
  on: bluetooth/* BluetoothStruct */.iy.bit(),
  automode: bluetooth/* BluetoothStruct */.iy.bit(),
  ac: bluetooth/* BluetoothStruct */.iy.bit(),
  eco: bluetooth/* BluetoothStruct */.iy.bit(),
  airDLegs: bluetooth/* BluetoothStruct */.iy.bit(),
  airDBody: bluetooth/* BluetoothStruct */.iy.bit(),
  airDWindshield: bluetooth/* BluetoothStruct */.iy.bit(),
  dBackWin: bluetooth/* BluetoothStruct */.iy.bit(),
  airInside: bluetooth/* BluetoothStruct */.iy.bit(),
  airOutside: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureSettable: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureAmb: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureCelsius: bluetooth/* BluetoothStruct */.iy.bit(),
  temperatureFahrenheit: bluetooth/* BluetoothStruct */.iy.bit(),
  airRate: bluetooth/* BluetoothStruct */.iy.uint8(),
  temperature: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(ClimateValue, "size", 5);
;// CONCATENATED MODULE: ./src/models/pjcan/climate/index.ts



/***/ }),

/***/ 9917:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  JR: function() { return /* reexport */ API_DATETIME_CONFIG_EVENT; },
  GI: function() { return /* reexport */ API_DATETIME_CONFIG_EXEC; },
  kP: function() { return /* reexport */ API_DATETIME_VIEW_EVENT; },
  Bm: function() { return /* reexport */ API_DATETIME_VIEW_EXEC; },
  Cv: function() { return /* reexport */ DatetimeConfig; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/datetime/DatetimeConfig.ts



const API_DATETIME_CONFIG_EXEC = 0x4a;
const API_DATETIME_CONFIG_EVENT = "DatetimeConfig";
const API_DATETIME_VIEW_EXEC = 0x4d;
const API_DATETIME_VIEW_EVENT = "DatetimeView";
/** Модель значения часов */
class DatetimeConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DATETIME_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "showDate", false);
    (0,defineProperty/* default */.A)(this, "showTime", false);
    (0,defineProperty/* default */.A)(this, "showDayWeek", false);
    (0,defineProperty/* default */.A)(this, "showDateAndDayWeek", false);
    (0,defineProperty/* default */.A)(this, "showTimeAndDayWeek", false);
    (0,defineProperty/* default */.A)(this, "showFullDatetime", false);
    (0,defineProperty/* default */.A)(this, "timezone", 0);
    (0,defineProperty/* default */.A)(this, "unixtime", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DatetimeConfig.size, new bluetooth/* BluetoothStruct */.iy(DatetimeConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, DatetimeConfig.size, new bluetooth/* BluetoothStruct */.iy(DatetimeConfig.struct));
  }
  /** Обновить текущее время */
  updateUnixtime() {
    const now = new Date();
    this.unixtime = Math.round(now.getTime() / 1000);
    this.timezone = now.getTimezoneOffset() / 60;
  }
}
(0,defineProperty/* default */.A)(DatetimeConfig, "struct", {
  showDate: bluetooth/* BluetoothStruct */.iy.bit(),
  showTime: bluetooth/* BluetoothStruct */.iy.bit(),
  showDayWeek: bluetooth/* BluetoothStruct */.iy.bit(),
  showDateAndDayWeek: bluetooth/* BluetoothStruct */.iy.bit(),
  showTimeAndDayWeek: bluetooth/* BluetoothStruct */.iy.bit(),
  showFullDatetime: bluetooth/* BluetoothStruct */.iy.bit(),
  timezone: bluetooth/* BluetoothStruct */.iy.int8(),
  unixtime: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(DatetimeConfig, "size", 6);
;// CONCATENATED MODULE: ./src/models/pjcan/datetime/index.ts



/***/ }),

/***/ 80314:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ EDeviceUpdateError; }
/* harmony export */ });
var EDeviceUpdateError;
(function (EDeviceUpdateError) {
  EDeviceUpdateError[EDeviceUpdateError["UPD_OK"] = 0] = "UPD_OK";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_NODATA"] = 1] = "UPD_ERROR_NODATA";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_NODATA_BEGIN"] = 2] = "UPD_ERROR_NODATA_BEGIN";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_BEGIN"] = 3] = "UPD_ERROR_BEGIN";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_WRITE"] = 4] = "UPD_ERROR_WRITE";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_END"] = 5] = "UPD_ERROR_END";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_NOT_FOUND_IV"] = 6] = "UPD_ERROR_NOT_FOUND_IV";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_SETKEY"] = 7] = "UPD_ERROR_SETKEY";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_DECRYPT"] = 8] = "UPD_ERROR_DECRYPT";
  EDeviceUpdateError[EDeviceUpdateError["UPD_ERROR_TIMEOUT"] = 9] = "UPD_ERROR_TIMEOUT"; // Остановка обновления по таймауту
})(EDeviceUpdateError || (EDeviceUpdateError = {}));

/***/ }),

/***/ 94027:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gj: function() { return /* reexport */ API40_DEVICE_UPDATE_EXEC; },
  iX: function() { return /* reexport */ API_DEVICE_CONFIG_EVENT; },
  z8: function() { return /* reexport */ API_DEVICE_CONFIG_EXEC; },
  Os: function() { return /* reexport */ API_DEVICE_INFO_EVENT; },
  x: function() { return /* reexport */ API_DEVICE_INFO_EXEC; },
  eb: function() { return /* reexport */ API_DEVICE_SCANNER_VALUE_EVENT; },
  nG: function() { return /* reexport */ API_DEVICE_SCANNER_VALUE_EXEC; },
  BO: function() { return /* reexport */ API_DEVICE_UPDATE_EVENT; },
  S: function() { return /* reexport */ API_DEVICE_UPDATE_EVENT_ERROR; },
  K5: function() { return /* reexport */ API_DEVICE_UPDATE_EXEC; },
  dX: function() { return /* reexport */ API_DEVICE_VALUE_EVENT; },
  ID: function() { return /* reexport */ API_DEVICE_VALUE_EXEC; },
  CN: function() { return /* reexport */ API_DEVICE_VIEW_VOLTMETER_EVENT; },
  ru: function() { return /* reexport */ API_DEVICE_VIEW_VOLTMETER_EXEC; },
  K: function() { return /* reexport */ API_DEVICE_VIEW_WORKTIME_EVENT; },
  J2: function() { return /* reexport */ API_DEVICE_VIEW_WORKTIME_EXEC; },
  nX: function() { return /* reexport */ DeviceAction; },
  pM: function() { return /* reexport */ DeviceConfig; },
  Vj: function() { return /* reexport */ DeviceInfo; },
  Z: function() { return /* reexport */ DeviceScannerAction; },
  G4: function() { return /* reexport */ DeviceScannerValue; },
  iD: function() { return /* reexport */ DeviceUpdate; },
  In: function() { return /* reexport */ DeviceValue; }
});

// UNUSED EXPORTS: API_DEVICE_ACTION_EVENT, API_DEVICE_ACTION_EXEC, API_DEVICE_SCANNER_CONFIG_EVENT, API_DEVICE_SCANNER_CONFIG_EXEC

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceConfig.ts



const API_DEVICE_CONFIG_EXEC = 0x02;
const API_DEVICE_CONFIG_EVENT = "DeviceConfig";
const API_DEVICE_VIEW_WORKTIME_EXEC = 0x0a;
const API_DEVICE_VIEW_WORKTIME_EVENT = "DeviceWorktime";
const API_DEVICE_VIEW_VOLTMETER_EXEC = 0x0b;
const API_DEVICE_VIEW_VOLTMETER_EVENT = "DeviceVoltmeter";
/** Модель параметров устройства */
class DeviceConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "serial", "");
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceConfig.size, new bluetooth/* BluetoothStruct */.iy(DeviceConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, DeviceConfig.size, new bluetooth/* BluetoothStruct */.iy(DeviceConfig.struct));
  }
}
(0,defineProperty/* default */.A)(DeviceConfig, "struct", {
  serial: bluetooth/* BluetoothStruct */.iy.char(64)
});
(0,defineProperty/* default */.A)(DeviceConfig, "size", 64);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceInfo.ts



const API_DEVICE_INFO_EXEC = 0x01;
const API_DEVICE_INFO_EVENT = "DeviceInfo";
/** Модель характеристик устройства */
class DeviceInfo extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_INFO_EXEC);
    (0,defineProperty/* default */.A)(this, "chipCores", 0);
    (0,defineProperty/* default */.A)(this, "chipModel", "");
    (0,defineProperty/* default */.A)(this, "chipRevision", 0);
    (0,defineProperty/* default */.A)(this, "cpuFreqMHz", 0);
    (0,defineProperty/* default */.A)(this, "cycleCount", 0);
    (0,defineProperty/* default */.A)(this, "efuseMac", BigInt(0));
    (0,defineProperty/* default */.A)(this, "flashChipMode", 0);
    (0,defineProperty/* default */.A)(this, "flashChipSize", 0);
    (0,defineProperty/* default */.A)(this, "flashChipSpeed", 0);
    (0,defineProperty/* default */.A)(this, "freeHeap", 0);
    (0,defineProperty/* default */.A)(this, "freePsram", 0);
    (0,defineProperty/* default */.A)(this, "freeSketchSpace", 0);
    (0,defineProperty/* default */.A)(this, "heapSize", 0);
    (0,defineProperty/* default */.A)(this, "maxAllocHeap", 0);
    (0,defineProperty/* default */.A)(this, "maxAllocPsram", 0);
    (0,defineProperty/* default */.A)(this, "minFreeHeap", 0);
    (0,defineProperty/* default */.A)(this, "minFreePsram", 0);
    (0,defineProperty/* default */.A)(this, "psramSize", 0);
    (0,defineProperty/* default */.A)(this, "sdkVersion", "");
    (0,defineProperty/* default */.A)(this, "sketchMD5", "");
    (0,defineProperty/* default */.A)(this, "sketchSize", 0);
    (0,defineProperty/* default */.A)(this, "temperatureChip", 0);
    (0,defineProperty/* default */.A)(this, "sha", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    (0,defineProperty/* default */.A)(this, "hardware", "");
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceInfo.size, new bluetooth/* BluetoothStruct */.iy(DeviceInfo.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(DeviceInfo, "struct", {
  chipCores: bluetooth/* BluetoothStruct */.iy.uint8(),
  chipModel: bluetooth/* BluetoothStruct */.iy.char(16),
  chipRevision: bluetooth/* BluetoothStruct */.iy.uint8(),
  cpuFreqMHz: bluetooth/* BluetoothStruct */.iy.uint32(),
  cycleCount: bluetooth/* BluetoothStruct */.iy.uint32(),
  efuseMac: bluetooth/* BluetoothStruct */.iy.uint64(),
  flashChipMode: bluetooth/* BluetoothStruct */.iy.uint8(),
  flashChipSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  flashChipSpeed: bluetooth/* BluetoothStruct */.iy.uint32(),
  freeHeap: bluetooth/* BluetoothStruct */.iy.uint32(),
  freePsram: bluetooth/* BluetoothStruct */.iy.uint32(),
  freeSketchSpace: bluetooth/* BluetoothStruct */.iy.uint32(),
  heapSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  maxAllocHeap: bluetooth/* BluetoothStruct */.iy.uint32(),
  maxAllocPsram: bluetooth/* BluetoothStruct */.iy.uint32(),
  minFreeHeap: bluetooth/* BluetoothStruct */.iy.uint32(),
  minFreePsram: bluetooth/* BluetoothStruct */.iy.uint32(),
  psramSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  sdkVersion: bluetooth/* BluetoothStruct */.iy.char(8),
  sketchMD5: bluetooth/* BluetoothStruct */.iy.char(16),
  sketchSize: bluetooth/* BluetoothStruct */.iy.uint32(),
  temperatureChip: bluetooth/* BluetoothStruct */.iy.uint32(),
  sha: bluetooth/* BluetoothStruct */.iy.uint8(32),
  hardware: bluetooth/* BluetoothStruct */.iy.char(32)
});
(0,defineProperty/* default */.A)(DeviceInfo, "size", 175);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceValue.ts

var _DeviceValue;


const API_DEVICE_VALUE_EXEC = 0x03;
const API_DEVICE_VALUE_EVENT = "DeviceValue";
/** Модель значений устройства */
class DeviceValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "activation", false);
    (0,defineProperty/* default */.A)(this, "state_led_work", false);
    (0,defineProperty/* default */.A)(this, "state_reverse", false);
    (0,defineProperty/* default */.A)(this, "state_r_position", false);
    (0,defineProperty/* default */.A)(this, "state_amp_illum", false);
    (0,defineProperty/* default */.A)(this, "hardware", {
      major: 0,
      minor: 0,
      build: 0,
      revision: 0
    });
    (0,defineProperty/* default */.A)(this, "led", 0);
    (0,defineProperty/* default */.A)(this, "voltmeter", 0);
    (0,defineProperty/* default */.A)(this, "worktime", 0);
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceValue.size, new bluetooth/* BluetoothStruct */.iy(DeviceValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
_DeviceValue = DeviceValue;
(0,defineProperty/* default */.A)(DeviceValue, "structHardware", {
  major: bluetooth/* BluetoothStruct */.iy.uint8(),
  minor: bluetooth/* BluetoothStruct */.iy.uint8(),
  build: bluetooth/* BluetoothStruct */.iy.uint8(),
  revision: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(DeviceValue, "struct", {
  activation: bluetooth/* BluetoothStruct */.iy.bit(),
  state_led_work: bluetooth/* BluetoothStruct */.iy.bit(),
  state_reverse: bluetooth/* BluetoothStruct */.iy.bit(),
  state_r_position: bluetooth/* BluetoothStruct */.iy.bit(),
  state_amp_illum: bluetooth/* BluetoothStruct */.iy.bit(),
  hardware: bluetooth/* BluetoothStruct */.iy.struct(_DeviceValue.structHardware),
  led: bluetooth/* BluetoothStruct */.iy.uint8(),
  voltmeter: bluetooth/* BluetoothStruct */.iy.uint16(),
  worktime: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(DeviceValue, "size", 12);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceAction.ts



const API_DEVICE_ACTION_EXEC = 0x04;
const API_DEVICE_ACTION_EVENT = "DeviceAction";
/** Модель действий устройства */
class DeviceAction extends base/* BaseModel */.t {
  constructor() {
    super(API_DEVICE_ACTION_EXEC);
    (0,defineProperty/* default */.A)(this, "reboot", false);
    (0,defineProperty/* default */.A)(this, "resetConfig", false);
    (0,defineProperty/* default */.A)(this, "resetView", false);
    (0,defineProperty/* default */.A)(this, "save", false);
    (0,defineProperty/* default */.A)(this, "format", false);
    this.skipActivationCheck = true;
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, DeviceAction.size, new bluetooth/* BluetoothStruct */.iy(DeviceAction.struct));
  }
}
(0,defineProperty/* default */.A)(DeviceAction, "struct", {
  reboot: bluetooth/* BluetoothStruct */.iy.bit(),
  resetConfig: bluetooth/* BluetoothStruct */.iy.bit(),
  resetView: bluetooth/* BluetoothStruct */.iy.bit(),
  save: bluetooth/* BluetoothStruct */.iy.bit(),
  format: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(DeviceAction, "size", 1);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(16573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(78100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(77936);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__(37467);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__(44732);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__(79577);
// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(33529);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
// EXTERNAL MODULE: ./src/models/pjcan/device/EDeviceUpdateError.ts
var EDeviceUpdateError = __webpack_require__(80314);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceUpdate.ts










const API_DEVICE_UPDATE_EXEC = 0x05;
const API40_DEVICE_UPDATE_EXEC = 0x5a;
const API_DEVICE_UPDATE_EVENT = "DeviceUpdate";
const API_DEVICE_UPDATE_EVENT_ERROR = "DeviceUpdateError";
/** Модель обновления прошивки */
class DeviceUpdate extends (eventemitter3_default()) {
  get uploading() {
    return this.offset > 0 ? this.offset / this.total : 0;
  }
  constructor(data) {
    super();
    (0,defineProperty/* default */.A)(this, "protocol", 41);
    (0,defineProperty/* default */.A)(this, "firmwareUrl", "");
    (0,defineProperty/* default */.A)(this, "firmwareData", new Uint8Array(0));
    (0,defineProperty/* default */.A)(this, "offset", 0);
    (0,defineProperty/* default */.A)(this, "error", EDeviceUpdateError/* EDeviceUpdateError */.D.UPD_OK);
    (0,defineProperty/* default */.A)(this, "encrypt", false);
    (0,defineProperty/* default */.A)(this, "iv", false);
    (0,defineProperty/* default */.A)(this, "ivData", new Uint8Array(0));
    (0,defineProperty/* default */.A)(this, "begin", false);
    (0,defineProperty/* default */.A)(this, "end", false);
    (0,defineProperty/* default */.A)(this, "abort", false);
    (0,defineProperty/* default */.A)(this, "total", 0);
    (0,defineProperty/* default */.A)(this, "size", 0);
    (0,defineProperty/* default */.A)(this, "highPriority", true);
    if (data) this.set(data);
  }
  /** Очистить данные */
  clear() {
    this.firmwareData = new Uint8Array(0);
    this.offset = 0;
    this.error = 0;
    this.begin = false;
    this.end = false;
    this.abort = false;
    this.encrypt = false;
    this.total = 0;
    this.size = 0;
  }
  /**
   * Записать значение IV
   * @param res
   */
  setIV(res) {
    this.iv = !!res && res?.length % 2 === 0 && /^[a-f\d]+$/i.test(res);
    if (this.iv) {
      this.ivData = new Uint8Array(res.length / 2);
      let pos = 0;
      for (let i = 0; i < res.length; i += 2) {
        this.ivData[pos] = parseInt(res.substring(i, i + 2), 16);
        pos++;
      }
    }
    return this.iv;
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const offset = this.protocol === 40 ? 1 : 3;
    const id = buf.getUint8(0);
    const result = this.protocol === 40 ? id === API40_DEVICE_UPDATE_EXEC : id === API_DEVICE_UPDATE_EXEC && (buf.byteLength >= 3 ? buf.getUint16(1, true) : 0) === 1;
    if (result) {
      this.error = buf.getUint8(offset);
      this.emit(API_DEVICE_UPDATE_EVENT, this.error);
    }
  }
  /** Чтение данных */
  get() {
    const offset = this.protocol === 40 ? 1 : 3;
    const buf = new DataView(new ArrayBuffer(DeviceUpdate.size + offset));
    buf.setUint8(0, this.protocol === 40 ? API40_DEVICE_UPDATE_EXEC : API_DEVICE_UPDATE_EXEC);
    if (offset === 3) buf.setUint16(1, DeviceUpdate.size, true);
    try {
      this.begin = !this.begin && this.offset === 0;
      if (this.begin && this.encrypt && this.iv) {
        this.size = this.ivData.length;
        for (let i = 0; i < this.size; i++) {
          buf.setUint8(7 + offset + i, this.ivData[i]);
        }
      } else {
        this.size = this.total - this.offset;
        if (this.size > 496) this.size = 496;else if (this.size < 0) this.size = 0;
        for (let i = 0; i < this.size; i++) {
          buf.setUint8(7 + offset + i, this.firmwareData[this.offset]);
          this.offset++;
        }
      }
      this.end = this.offset >= this.total;
      new bluetooth/* BluetoothStruct */.iy(DeviceUpdate.struct)?.encode(buf, this, offset);
    } catch (e) {
      console.log(e);
      if (offset === 3) buf.setUint16(1, 0, true);
    }
    return buf;
  }
}
(0,defineProperty/* default */.A)(DeviceUpdate, "struct", {
  begin: bluetooth/* BluetoothStruct */.iy.bit(),
  end: bluetooth/* BluetoothStruct */.iy.bit(),
  abort: bluetooth/* BluetoothStruct */.iy.bit(),
  encrypt: bluetooth/* BluetoothStruct */.iy.bit(),
  iv: bluetooth/* BluetoothStruct */.iy.bit(),
  total: bluetooth/* BluetoothStruct */.iy.uint32(),
  size: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(DeviceUpdate, "size", 503);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceScannerAction.ts



const API_DEVICE_SCANNER_CONFIG_EXEC = 0x07;
const API_DEVICE_SCANNER_CONFIG_EVENT = "DeviceScannerAction";
class DeviceScannerAction extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_SCANNER_CONFIG_EXEC, true);
    (0,defineProperty/* default */.A)(this, "enabled", false);
    (0,defineProperty/* default */.A)(this, "shutdown", 5);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, DeviceScannerAction.size, new bluetooth/* BluetoothStruct */.iy(DeviceScannerAction.struct));
  }
}
(0,defineProperty/* default */.A)(DeviceScannerAction, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.bit(),
  shutdown: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(DeviceScannerAction, "size", 2);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
;// CONCATENATED MODULE: ./src/models/pjcan/device/DeviceScannerValue.ts







const API_DEVICE_SCANNER_VALUE_EXEC = 0x06;
const API_DEVICE_SCANNER_VALUE_EVENT = "DeviceScannerValue";
class DeviceScannerValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DEVICE_SCANNER_VALUE_EXEC, true);
    (0,defineProperty/* default */.A)(this, "count", 0);
    (0,defineProperty/* default */.A)(this, "frames", []);
    for (let i = 0; i < 16; i++) {
      this.frames.push({
        receive: true,
        send: false,
        id: 0,
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        length: 0,
        timestamp: BigInt(0)
      });
    }
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DeviceScannerValue.size, new bluetooth/* BluetoothStruct */.iy(DeviceScannerValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    const buf = new DataView(new ArrayBuffer(3));
    buf.setUint8(0, this.exec);
    buf.setUint16(1, 0, true);
    return buf;
  }
}
(0,defineProperty/* default */.A)(DeviceScannerValue, "struct", {
  count: bluetooth/* BluetoothStruct */.iy.uint8(),
  frames: bluetooth/* BluetoothStruct */.iy.struct({
    id: bluetooth/* BluetoothStruct */.iy.uint32(),
    data: bluetooth/* BluetoothStruct */.iy.uint8(8),
    length: bluetooth/* BluetoothStruct */.iy.uint8(),
    timestamp: bluetooth/* BluetoothStruct */.iy.uint64()
  }, 16)
});
(0,defineProperty/* default */.A)(DeviceScannerValue, "size", 337);
;// CONCATENATED MODULE: ./src/models/pjcan/device/index.ts









/***/ }),

/***/ 84582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lP: function() { return /* reexport */ API_DOORS_CONFIG_EVENT; },
  CY: function() { return /* reexport */ API_DOORS_CONFIG_EXEC; },
  kN: function() { return /* reexport */ API_DOORS_VALUE_EVENT; },
  Hz: function() { return /* reexport */ API_DOORS_VALUE_EXEC; },
  Ww: function() { return /* reexport */ API_DOORS_VIEW_EVENT; },
  zD: function() { return /* reexport */ API_DOORS_VIEW_EXEC; },
  O4: function() { return /* reexport */ DoorsConfig; },
  VT: function() { return /* reexport */ DoorsValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/doors/DoorsConfig.ts



const API_DOORS_CONFIG_EXEC = 0x80;
const API_DOORS_CONFIG_EVENT = "DoorsConfig";
const API_DOORS_VIEW_EXEC = 0x83;
const API_DOORS_VIEW_EVENT = "DoorsView";
class DoorsConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DOORS_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "frontReverse", false);
    (0,defineProperty/* default */.A)(this, "backReverse", false);
    (0,defineProperty/* default */.A)(this, "frontBackReverse", false);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DoorsConfig.size, new bluetooth/* BluetoothStruct */.iy(DoorsConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, DoorsConfig.size, new bluetooth/* BluetoothStruct */.iy(DoorsConfig.struct));
  }
}
(0,defineProperty/* default */.A)(DoorsConfig, "struct", {
  frontReverse: bluetooth/* BluetoothStruct */.iy.bit(),
  backReverse: bluetooth/* BluetoothStruct */.iy.bit(),
  frontBackReverse: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(DoorsConfig, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/doors/DoorsValue.ts



const API_DOORS_VALUE_EXEC = 0x81;
const API_DOORS_VALUE_EVENT = "DoorsValue";
const DoorsValue_API_DOORS_VIEW_EXEC = 0x83;
const DoorsValue_API_DOORS_VIEW_EVENT = "DoorsView";
/** Модель значений дверей */
class DoorsValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_DOORS_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "frontLeft", false);
    (0,defineProperty/* default */.A)(this, "frontRight", false);
    (0,defineProperty/* default */.A)(this, "backLeft", false);
    (0,defineProperty/* default */.A)(this, "backRight", false);
    (0,defineProperty/* default */.A)(this, "trunk", false);
    (0,defineProperty/* default */.A)(this, "bonnet", false);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, DoorsValue.size, new bluetooth/* BluetoothStruct */.iy(DoorsValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(DoorsValue, "struct", {
  frontLeft: bluetooth/* BluetoothStruct */.iy.bit(),
  frontRight: bluetooth/* BluetoothStruct */.iy.bit(),
  backLeft: bluetooth/* BluetoothStruct */.iy.bit(),
  backRight: bluetooth/* BluetoothStruct */.iy.bit(),
  trunk: bluetooth/* BluetoothStruct */.iy.bit(),
  bonnet: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(DoorsValue, "size", 1);
;// CONCATENATED MODULE: ./src/models/pjcan/doors/index.ts




/***/ }),

/***/ 76300:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s_: function() { return /* reexport */ API_ENGINE_CONFIG_EVENT; },
  D6: function() { return /* reexport */ API_ENGINE_CONFIG_EXEC; },
  P8: function() { return /* reexport */ API_ENGINE_VALUE_EVENT; },
  Oq: function() { return /* reexport */ API_ENGINE_VALUE_EXEC; },
  EX: function() { return /* reexport */ API_ENGINE_VIEW_COOLANT_EVENT; },
  Pv: function() { return /* reexport */ API_ENGINE_VIEW_COOLANT_EXEC; },
  tn: function() { return /* reexport */ API_ENGINE_VIEW_ENABLED_EVENT; },
  Cc: function() { return /* reexport */ API_ENGINE_VIEW_ENABLED_EXEC; },
  Zw: function() { return /* reexport */ API_ENGINE_VIEW_EVENT; },
  Em: function() { return /* reexport */ API_ENGINE_VIEW_EXEC; },
  Ud: function() { return /* reexport */ API_ENGINE_VIEW_LOAD_EVENT; },
  L9: function() { return /* reexport */ API_ENGINE_VIEW_LOAD_EXEC; },
  f0: function() { return /* reexport */ API_ENGINE_VIEW_RPM_EVENT; },
  k3: function() { return /* reexport */ API_ENGINE_VIEW_RPM_EXEC; },
  wN: function() { return /* reexport */ API_ENGINE_VIEW_THROTTLE_EVENT; },
  jh: function() { return /* reexport */ API_ENGINE_VIEW_THROTTLE_EXEC; },
  w0: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT; },
  xx: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC; },
  DM: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT; },
  Yj: function() { return /* reexport */ API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC; },
  zZ: function() { return /* reexport */ EngineConfig; },
  mI: function() { return /* reexport */ EngineValue; },
  Du: function() { return /* reexport */ EngineViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/EngineConfig.ts



const API_ENGINE_CONFIG_EXEC = 0x90;
const API_ENGINE_CONFIG_EVENT = "EngineConfig";
/** Модель конфигурации ДВС */
class EngineConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ENGINE_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "showDays", false);
    (0,defineProperty/* default */.A)(this, "totalWorktime", BigInt(0));
    (0,defineProperty/* default */.A)(this, "totalCountRPM", BigInt(0));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, EngineConfig.size, new bluetooth/* BluetoothStruct */.iy(EngineConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, EngineConfig.size, new bluetooth/* BluetoothStruct */.iy(EngineConfig.struct));
  }
}
(0,defineProperty/* default */.A)(EngineConfig, "struct", {
  showDays: bluetooth/* BluetoothStruct */.iy.bit(),
  totalWorktime: bluetooth/* BluetoothStruct */.iy.uint64(),
  totalCountRPM: bluetooth/* BluetoothStruct */.iy.uint64()
});
(0,defineProperty/* default */.A)(EngineConfig, "size", 17);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/EngineValue.ts



const API_ENGINE_VALUE_EXEC = 0x91;
const API_ENGINE_VALUE_EVENT = "EngineValue";
/** Модель значений ДВС */
class EngineValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ENGINE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "on", false);
    (0,defineProperty/* default */.A)(this, "coolant", 0);
    (0,defineProperty/* default */.A)(this, "rpm", 0);
    (0,defineProperty/* default */.A)(this, "worktime", 0);
    (0,defineProperty/* default */.A)(this, "countRPM", 0);
    (0,defineProperty/* default */.A)(this, "load", 0);
    (0,defineProperty/* default */.A)(this, "throttle", 0);
    (0,defineProperty/* default */.A)(this, "viewDays", 0);
    (0,defineProperty/* default */.A)(this, "viewHours", 0);
    (0,defineProperty/* default */.A)(this, "viewMinutes", 0);
    (0,defineProperty/* default */.A)(this, "viewSeconds", 0);
    (0,defineProperty/* default */.A)(this, "viewCountRPM", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, EngineValue.size, new bluetooth/* BluetoothStruct */.iy(EngineValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(EngineValue, "struct", {
  on: bluetooth/* BluetoothStruct */.iy.bit(),
  coolant: bluetooth/* BluetoothStruct */.iy.int8(),
  rpm: bluetooth/* BluetoothStruct */.iy.uint16(),
  worktime: bluetooth/* BluetoothStruct */.iy.uint32(),
  countRPM: bluetooth/* BluetoothStruct */.iy.uint32(),
  load: bluetooth/* BluetoothStruct */.iy.uint16(),
  throttle: bluetooth/* BluetoothStruct */.iy.uint16(),
  viewDays: bluetooth/* BluetoothStruct */.iy.uint16(),
  viewHours: bluetooth/* BluetoothStruct */.iy.uint8(),
  viewMinutes: bluetooth/* BluetoothStruct */.iy.uint8(),
  viewSeconds: bluetooth/* BluetoothStruct */.iy.uint8(),
  viewCountRPM: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(EngineValue, "size", 25);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/EngineViews.ts




const API_ENGINE_VIEW_EXEC = 0x93;
const API_ENGINE_VIEW_EVENT = "EngineView";
const API_ENGINE_VIEW_ENABLED_EXEC = 0x94;
const API_ENGINE_VIEW_ENABLED_EVENT = "EngineViewEnabled";
const API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC = 0x95;
const API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT = "EngineViewTotalWorktime";
const API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC = 0x96;
const API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT = "EngineViewTotalCountRPM";
const API_ENGINE_VIEW_COOLANT_EXEC = 0x97;
const API_ENGINE_VIEW_COOLANT_EVENT = "EngineViewCoolant";
const API_ENGINE_VIEW_RPM_EXEC = 0x98;
const API_ENGINE_VIEW_RPM_EVENT = "EngineViewRPM";
const API_ENGINE_VIEW_LOAD_EXEC = 0x99;
const API_ENGINE_VIEW_LOAD_EVENT = "EngineViewLoad";
const API_ENGINE_VIEW_THROTTLE_EXEC = 0x9a;
const API_ENGINE_VIEW_THROTTLE_EVENT = "EngineViewThrottle";
/** Модель параметров отображения данных ДВС */
class EngineViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_ENGINE_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "enabled", new view/* ViewConfig */.i(API_ENGINE_VIEW_ENABLED_EXEC));
    (0,defineProperty/* default */.A)(this, "totalWorktime", new view/* ViewConfig */.i(API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC));
    (0,defineProperty/* default */.A)(this, "totalCountRPM", new view/* ViewConfig */.i(API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC));
    (0,defineProperty/* default */.A)(this, "coolant", new view/* ViewConfig */.i(API_ENGINE_VIEW_COOLANT_EXEC));
    (0,defineProperty/* default */.A)(this, "rpm", new view/* ViewConfig */.i(API_ENGINE_VIEW_RPM_EXEC));
    (0,defineProperty/* default */.A)(this, "load", new view/* ViewConfig */.i(API_ENGINE_VIEW_LOAD_EXEC));
    (0,defineProperty/* default */.A)(this, "throttle", new view/* ViewConfig */.i(API_ENGINE_VIEW_THROTTLE_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, EngineViews.size, new bluetooth/* BluetoothStruct */.iy(EngineViews.struct), buf);
    if (result) {
      this.enabled.isData = true;
      this.totalWorktime.isData = true;
      this.totalCountRPM.isData = true;
      this.coolant.isData = true;
      this.rpm.isData = true;
      this.load.isData = true;
      this.throttle.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(EngineViews, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  totalWorktime: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  totalCountRPM: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  coolant: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  rpm: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  load: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  throttle: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(EngineViews, "size", 28);
;// CONCATENATED MODULE: ./src/models/pjcan/engine/index.ts





/***/ }),

/***/ 59461:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KC: function() { return /* reexport */ API_FUEL_CONFIG_EVENT; },
  n7: function() { return /* reexport */ API_FUEL_CONFIG_EXEC; },
  tS: function() { return /* reexport */ API_FUEL_VALUE_EVENT; },
  qV: function() { return /* reexport */ API_FUEL_VALUE_EXEC; },
  Cc: function() { return /* reexport */ API_FUEL_VIEW_AVG_EVENT; },
  Ng: function() { return /* reexport */ API_FUEL_VIEW_AVG_EXEC; },
  jh: function() { return /* reexport */ API_FUEL_VIEW_CURRENT_EVENT; },
  yx: function() { return /* reexport */ API_FUEL_VIEW_CURRENT_EXEC; },
  jC: function() { return /* reexport */ API_FUEL_VIEW_EVENT; },
  OG: function() { return /* reexport */ API_FUEL_VIEW_EXEC; },
  ll: function() { return /* reexport */ FuelConfig; },
  Sh: function() { return /* reexport */ FuelValue; },
  hM: function() { return /* reexport */ FuelViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/FuelConfig.ts



const API_FUEL_CONFIG_EXEC = 0xa0;
const API_FUEL_CONFIG_EVENT = "FuelConfig";
/** Модель конфигурации расхода топлива */
class FuelConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_FUEL_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "ratio", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, FuelConfig.size, new bluetooth/* BluetoothStruct */.iy(FuelConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, FuelConfig.size, new bluetooth/* BluetoothStruct */.iy(FuelConfig.struct));
  }
}
(0,defineProperty/* default */.A)(FuelConfig, "struct", {
  ratio: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(FuelConfig, "size", 2);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/FuelValue.ts



const API_FUEL_VALUE_EXEC = 0xa1;
const API_FUEL_VALUE_EVENT = "FuelValue";
/** Модель значений расхода топлива */
class FuelValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_FUEL_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "current", 0);
    (0,defineProperty/* default */.A)(this, "avg", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, FuelValue.size, new bluetooth/* BluetoothStruct */.iy(FuelValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(FuelValue, "struct", {
  current: bluetooth/* BluetoothStruct */.iy.uint16(),
  avg: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(FuelValue, "size", 4);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/FuelViews.ts




const API_FUEL_VIEW_EXEC = 0xa3;
const API_FUEL_VIEW_EVENT = "FuelView";
const API_FUEL_VIEW_CURRENT_EXEC = 0xa4;
const API_FUEL_VIEW_CURRENT_EVENT = "FuelViewCurrent";
const API_FUEL_VIEW_AVG_EXEC = 0xa5;
const API_FUEL_VIEW_AVG_EVENT = "FuelViewAVG";
/** Модель параметров отображения данных расхода топлива */
class FuelViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_FUEL_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "current", new view/* ViewConfig */.i(API_FUEL_VIEW_CURRENT_EXEC));
    (0,defineProperty/* default */.A)(this, "avg", new view/* ViewConfig */.i(API_FUEL_VIEW_AVG_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, FuelViews.size, new bluetooth/* BluetoothStruct */.iy(FuelViews.struct), buf);
    if (result) {
      this.current.isData = true;
      this.avg.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(FuelViews, "struct", {
  current: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  avg: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(FuelViews, "size", 8);
;// CONCATENATED MODULE: ./src/models/pjcan/fuel/index.ts





/***/ }),

/***/ 19164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fz: function() { return /* reexport */ API_MAZDA_CONFIG_EVENT; },
  Es: function() { return /* reexport */ API_MAZDA_CONFIG_EXEC; },
  UI: function() { return /* reexport */ API_MAZDA_VIEW_EVENT; },
  N5: function() { return /* reexport */ API_MAZDA_VIEW_EXEC; },
  M_: function() { return /* reexport */ MazdaAction; },
  AU: function() { return /* reexport */ MazdaConfig; },
  oB: function() { return /* reexport */ TCarModel; },
  c2: function() { return /* reexport */ TMazdaButton; }
});

// UNUSED EXPORTS: API_MAZDA_ACTION_EVENT, API_MAZDA_ACTION_EXEC

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/mazda/TCarModel.ts
/* eslint-disable no-unused-vars */
var TCarModel;
(function (TCarModel) {
  TCarModel[TCarModel["CAR_MODEL_UNKNOWN"] = 0] = "CAR_MODEL_UNKNOWN";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_3_BK"] = 1] = "CAR_MODEL_MAZDA_3_BK";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_3_BL"] = 2] = "CAR_MODEL_MAZDA_3_BL";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_6_GG"] = 3] = "CAR_MODEL_MAZDA_6_GG";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_6_GH"] = 4] = "CAR_MODEL_MAZDA_6_GH";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX7"] = 5] = "CAR_MODEL_MAZDA_CX7";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX7_REST"] = 6] = "CAR_MODEL_MAZDA_CX7_REST";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX9"] = 7] = "CAR_MODEL_MAZDA_CX9";
  TCarModel[TCarModel["CAR_MODEL_MAZDA_CX9_REST"] = 8] = "CAR_MODEL_MAZDA_CX9_REST";
})(TCarModel || (TCarModel = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/mazda/MazdaConfig.ts




const API_MAZDA_CONFIG_EXEC = 0x40;
const API_MAZDA_CONFIG_EVENT = "MazdaConfig";
const API_MAZDA_VIEW_EXEC = 0x43;
const API_MAZDA_VIEW_EVENT = "MazdaView";
/** Модель параметров автомобиля */
class MazdaConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_MAZDA_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "lcd", false);
    (0,defineProperty/* default */.A)(this, "carModel", TCarModel.CAR_MODEL_UNKNOWN);
    (0,defineProperty/* default */.A)(this, "logo", "");
    (0,defineProperty/* default */.A)(this, "hello", "");
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, MazdaConfig.size, new bluetooth/* BluetoothStruct */.iy(MazdaConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, MazdaConfig.size, new bluetooth/* BluetoothStruct */.iy(MazdaConfig.struct));
  }
}
(0,defineProperty/* default */.A)(MazdaConfig, "struct", {
  lcd: bluetooth/* BluetoothStruct */.iy.bit(),
  carModel: bluetooth/* BluetoothStruct */.iy.uint8(),
  logo: bluetooth/* BluetoothStruct */.iy.char(12),
  hello: bluetooth/* BluetoothStruct */.iy.char(32)
});
(0,defineProperty/* default */.A)(MazdaConfig, "size", 46);
;// CONCATENATED MODULE: ./src/models/pjcan/mazda/TMazdaButton.ts
/* eslint-disable no-unused-vars */
var TMazdaButton;
(function (TMazdaButton) {
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_NONE"] = 0] = "MAZDA_BUTTON_NONE";
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_CLOCK"] = 1] = "MAZDA_BUTTON_CLOCK";
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_INFO"] = 2] = "MAZDA_BUTTON_INFO";
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_CLOCK_H"] = 3] = "MAZDA_BUTTON_CLOCK_H";
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_CLOCK_M"] = 4] = "MAZDA_BUTTON_CLOCK_M";
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_CLOCK_RM"] = 5] = "MAZDA_BUTTON_CLOCK_RM";
  TMazdaButton[TMazdaButton["MAZDA_BUTTON_CLOCK_24"] = 6] = "MAZDA_BUTTON_CLOCK_24";
})(TMazdaButton || (TMazdaButton = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/mazda/MazdaAction.ts




const API_MAZDA_ACTION_EXEC = 0x42;
const API_MAZDA_ACTION_EVENT = "MazdaAction";
/** Модель действий устройства */
class MazdaAction extends base/* BaseModel */.t {
  constructor() {
    super(API_MAZDA_ACTION_EXEC);
    (0,defineProperty/* default */.A)(this, "btnPress", false);
    (0,defineProperty/* default */.A)(this, "btnSimulation", false);
    (0,defineProperty/* default */.A)(this, "btnType", TMazdaButton.MAZDA_BUTTON_NONE);
    (0,defineProperty/* default */.A)(this, "timePress", 0);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return false;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, MazdaAction.size, new bluetooth/* BluetoothStruct */.iy(MazdaAction.struct));
  }
}
(0,defineProperty/* default */.A)(MazdaAction, "struct", {
  btnPress: bluetooth/* BluetoothStruct */.iy.bit(),
  btnSimulation: bluetooth/* BluetoothStruct */.iy.bit(),
  btnType: bluetooth/* BluetoothStruct */.iy.uint8(),
  timePress: bluetooth/* BluetoothStruct */.iy.uint16()
});
(0,defineProperty/* default */.A)(MazdaAction, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/mazda/index.ts






/***/ }),

/***/ 14753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y1: function() { return /* reexport */ API_MOVEMENT_VALUE_EVENT; },
  vT: function() { return /* reexport */ API_MOVEMENT_VALUE_EXEC; },
  CE: function() { return /* reexport */ API_MOVEMENT_VIEW_EVENT; },
  N6: function() { return /* reexport */ API_MOVEMENT_VIEW_EXEC; },
  rL: function() { return /* reexport */ API_MOVEMENT_VIEW_REST_WAY_EVENT; },
  iH: function() { return /* reexport */ API_MOVEMENT_VIEW_REST_WAY_EXEC; },
  hV: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_AVG_EVENT; },
  GS: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_AVG_EXEC; },
  cJ: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_EVENT; },
  T3: function() { return /* reexport */ API_MOVEMENT_VIEW_SPEED_EXEC; },
  v5: function() { return /* reexport */ MovementValue; },
  UA: function() { return /* reexport */ MovementViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/movement/MovementValue.ts



const API_MOVEMENT_VALUE_EXEC = 0xb1;
const API_MOVEMENT_VALUE_EVENT = "MovementValue";
/** Модель значений движения */
class MovementValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_MOVEMENT_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "speed", 0);
    (0,defineProperty/* default */.A)(this, "speedAVG", 0);
    (0,defineProperty/* default */.A)(this, "restWay", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, MovementValue.size, new bluetooth/* BluetoothStruct */.iy(MovementValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(MovementValue, "struct", {
  speed: bluetooth/* BluetoothStruct */.iy.uint32(),
  speedAVG: bluetooth/* BluetoothStruct */.iy.uint16(),
  restWay: bluetooth/* BluetoothStruct */.iy.uint32()
});
(0,defineProperty/* default */.A)(MovementValue, "size", 10);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/movement/MovementViews.ts




const API_MOVEMENT_VIEW_EXEC = 0xb3;
const API_MOVEMENT_VIEW_EVENT = "MovementView";
const API_MOVEMENT_VIEW_SPEED_EXEC = 0xb4;
const API_MOVEMENT_VIEW_SPEED_EVENT = "MovementViewSpeed";
const API_MOVEMENT_VIEW_SPEED_AVG_EXEC = 0xb5;
const API_MOVEMENT_VIEW_SPEED_AVG_EVENT = "MovementViewSpeedAVG";
const API_MOVEMENT_VIEW_REST_WAY_EXEC = 0xb6;
const API_MOVEMENT_VIEW_REST_WAY_EVENT = "MovementViewRestWay";
/** Модель параметров отображения данных движения */
class MovementViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_MOVEMENT_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "speed", new view/* ViewConfig */.i(API_MOVEMENT_VIEW_SPEED_EXEC));
    (0,defineProperty/* default */.A)(this, "speedAVG", new view/* ViewConfig */.i(API_MOVEMENT_VIEW_SPEED_AVG_EXEC));
    (0,defineProperty/* default */.A)(this, "restWay", new view/* ViewConfig */.i(API_MOVEMENT_VIEW_REST_WAY_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, MovementViews.size, new bluetooth/* BluetoothStruct */.iy(MovementViews.struct), buf);
    if (result) {
      this.speed.isData = true;
      this.speedAVG.isData = true;
      this.restWay.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(MovementViews, "struct", {
  speed: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  speedAVG: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  restWay: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(MovementViews, "size", 12);
;// CONCATENATED MODULE: ./src/models/pjcan/movement/index.ts




/***/ }),

/***/ 57411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Eg: function() { return /* reexport */ API_SENSORS_VALUE_EVENT; },
  H2: function() { return /* reexport */ API_SENSORS_VALUE_EXEC; },
  en: function() { return /* reexport */ API_SENSORS_VIEW_EVENT; },
  fW: function() { return /* reexport */ API_SENSORS_VIEW_EXEC; },
  fN: function() { return /* reexport */ API_SENSORS_VIEW_HANDBRAKE_EVENT; },
  _V: function() { return /* reexport */ API_SENSORS_VIEW_HANDBRAKE_EXEC; },
  Bj: function() { return /* reexport */ API_SENSORS_VIEW_REVERSE_EVENT; },
  Y5: function() { return /* reexport */ API_SENSORS_VIEW_REVERSE_EXEC; },
  rd: function() { return /* reexport */ API_SENSORS_VIEW_SEATBELT_EVENT; },
  MA: function() { return /* reexport */ API_SENSORS_VIEW_SEATBELT_EXEC; },
  he: function() { return /* reexport */ API_SENSORS_VIEW_TURN_SIGNAL_EVENT; },
  WL: function() { return /* reexport */ API_SENSORS_VIEW_TURN_SIGNAL_EXEC; },
  fX: function() { return /* reexport */ SensorsValue; },
  IS: function() { return /* reexport */ SensorsViews; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/sensors/SensorsValue.ts



const API_SENSORS_VALUE_EXEC = 0xc1;
const API_SENSORS_VALUE_EVENT = "SensorsValue";
/** Модель значений датчиков */
class SensorsValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_SENSORS_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "acc", false);
    (0,defineProperty/* default */.A)(this, "handbrake", false);
    (0,defineProperty/* default */.A)(this, "reverse", false);
    (0,defineProperty/* default */.A)(this, "seatbeltDriver", false);
    (0,defineProperty/* default */.A)(this, "seatbeltPassenger", false);
    (0,defineProperty/* default */.A)(this, "turnSignalLeft", false);
    (0,defineProperty/* default */.A)(this, "turnSignalRight", false);
    (0,defineProperty/* default */.A)(this, "highBeam", false);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, SensorsValue.size, new bluetooth/* BluetoothStruct */.iy(SensorsValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(SensorsValue, "struct", {
  acc: bluetooth/* BluetoothStruct */.iy.bit(),
  handbrake: bluetooth/* BluetoothStruct */.iy.bit(),
  reverse: bluetooth/* BluetoothStruct */.iy.bit(),
  seatbeltDriver: bluetooth/* BluetoothStruct */.iy.bit(),
  seatbeltPassenger: bluetooth/* BluetoothStruct */.iy.bit(),
  turnSignalLeft: bluetooth/* BluetoothStruct */.iy.bit(),
  turnSignalRight: bluetooth/* BluetoothStruct */.iy.bit(),
  highBeam: bluetooth/* BluetoothStruct */.iy.bit()
});
(0,defineProperty/* default */.A)(SensorsValue, "size", 1);
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/models/pjcan/sensors/SensorsViews.ts




const API_SENSORS_VIEW_EXEC = 0xc3;
const API_SENSORS_VIEW_EVENT = "SensorsView";
const API_SENSORS_VIEW_HANDBRAKE_EXEC = 0xc4;
const API_SENSORS_VIEW_HANDBRAKE_EVENT = "SensorsViewHandbrake";
const API_SENSORS_VIEW_REVERSE_EXEC = 0xc5;
const API_SENSORS_VIEW_REVERSE_EVENT = "SensorsViewReverse";
const API_SENSORS_VIEW_SEATBELT_EXEC = 0xc6;
const API_SENSORS_VIEW_SEATBELT_EVENT = "SensorsViewSeatbelt";
const API_SENSORS_VIEW_TURN_SIGNAL_EXEC = 0xc7;
const API_SENSORS_VIEW_TURN_SIGNAL_EVENT = "SensorsViewTurnSignal";
/** Модель параметров отображения данных датчиков */
class SensorsViews extends base/* BaseModel */.t {
  constructor(data) {
    super(API_SENSORS_VIEW_EXEC);
    (0,defineProperty/* default */.A)(this, "handbrake", new view/* ViewConfig */.i(API_SENSORS_VIEW_HANDBRAKE_EXEC));
    (0,defineProperty/* default */.A)(this, "reverse", new view/* ViewConfig */.i(API_SENSORS_VIEW_REVERSE_EXEC));
    (0,defineProperty/* default */.A)(this, "seatbelt", new view/* ViewConfig */.i(API_SENSORS_VIEW_SEATBELT_EXEC));
    (0,defineProperty/* default */.A)(this, "turnSignal", new view/* ViewConfig */.i(API_SENSORS_VIEW_TURN_SIGNAL_EXEC));
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    const result = this._set(this, this.exec, SensorsViews.size, new bluetooth/* BluetoothStruct */.iy(SensorsViews.struct), buf);
    if (result) {
      this.handbrake.isData = true;
      this.reverse.isData = true;
      this.seatbelt.isData = true;
      this.turnSignal.isData = true;
    }
    return result;
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(SensorsViews, "struct", {
  handbrake: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  reverse: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  seatbelt: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct),
  turnSignal: bluetooth/* BluetoothStruct */.iy.struct(view/* ViewConfig */.i.struct)
});
(0,defineProperty/* default */.A)(SensorsViews, "size", view/* ViewConfig */.i.size * 4);
;// CONCATENATED MODULE: ./src/models/pjcan/sensors/index.ts




/***/ }),

/***/ 42570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H0: function() { return /* reexport */ API_TEMPERATURE_VALUE_EVENT; },
  i0: function() { return /* reexport */ API_TEMPERATURE_VALUE_EXEC; },
  P5: function() { return /* reexport */ API_TEMPERATURE_VIEW_EVENT; },
  EO: function() { return /* reexport */ API_TEMPERATURE_VIEW_EXEC; },
  sY: function() { return /* reexport */ TemperatureValue; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/temperature/TemperatureValue.ts



const API_TEMPERATURE_VALUE_EXEC = 0xd1;
const API_TEMPERATURE_VALUE_EVENT = "TemperatureValue";
const API_TEMPERATURE_VIEW_EXEC = 0xd3;
const API_TEMPERATURE_VIEW_EVENT = "TemperatureView";
/** Модель значений температуры */
class TemperatureValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_TEMPERATURE_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "in", 0);
    (0,defineProperty/* default */.A)(this, "out", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, TemperatureValue.size, new bluetooth/* BluetoothStruct */.iy(TemperatureValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec);
  }
}
(0,defineProperty/* default */.A)(TemperatureValue, "struct", {
  in: bluetooth/* BluetoothStruct */.iy.int16(),
  out: bluetooth/* BluetoothStruct */.iy.int16()
});
(0,defineProperty/* default */.A)(TemperatureValue, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/temperature/index.ts



/***/ }),

/***/ 62805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K_: function() { return /* reexport */ API_TEST_VIEW_EXEC; },
  SZ: function() { return /* reexport */ TestValue; }
});

// UNUSED EXPORTS: API_TEST_VALUE_EVENT, API_TEST_VALUE_EXEC, API_TEST_VIEW_EVENT

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/test/TestValue.ts



const API_TEST_VALUE_EXEC = 0xf0;
const API_TEST_VALUE_EVENT = "TestValue";
const API_TEST_VIEW_EXEC = 0xf3;
const API_TEST_VIEW_EVENT = "TestView";
/** Модель значений тестирования */
class TestValue extends base/* BaseModel */.t {
  constructor(data) {
    super(API_TEST_VALUE_EXEC);
    (0,defineProperty/* default */.A)(this, "text", " -- TEST -- ");
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, TestValue.size, new bluetooth/* BluetoothStruct */.iy(TestValue.struct), buf);
  }
  /** Чтение данных */
  get() {
    return this._get(this, this.exec, TestValue.size, new bluetooth/* BluetoothStruct */.iy(TestValue.struct));
  }
}
(0,defineProperty/* default */.A)(TestValue, "struct", {
  text: bluetooth/* BluetoothStruct */.iy.char(32)
});
(0,defineProperty/* default */.A)(TestValue, "size", 32);
;// CONCATENATED MODULE: ./src/models/pjcan/test/index.ts



/***/ }),

/***/ 87380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sK: function() { return /* reexport */ API_TEYES_CONFIG_EVENT; },
  Nr: function() { return /* reexport */ API_TEYES_CONFIG_EXEC; },
  HS: function() { return /* reexport */ API_TEYES_TEXT_EVENT; },
  KI: function() { return /* reexport */ API_TEYES_TEXT_EXEC; },
  lb: function() { return /* reexport */ API_TEYES_TEXT_VIEW_EVENT; },
  cH: function() { return /* reexport */ API_TEYES_TEXT_VIEW_EXEC; },
  pn: function() { return /* reexport */ TeyesConfig; }
});

// UNUSED EXPORTS: TProtocol, TeyesText

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/teyes/TProtocol.ts
/* eslint-disable */
var TProtocol;
(function (TProtocol) {
  TProtocol[TProtocol["PROTOCOL_PJCAN"] = 0] = "PROTOCOL_PJCAN";
  TProtocol[TProtocol["PROTOCOL_RAISE_HM_ND00"] = 1] = "PROTOCOL_RAISE_HM_ND00";
  TProtocol[TProtocol["PROTOCOL_RAISE_HM_ND01"] = 2] = "PROTOCOL_RAISE_HM_ND01";
  TProtocol[TProtocol["PROTOCOL_SIMPLE_SOFT_MZ_SS_07A"] = 3] = "PROTOCOL_SIMPLE_SOFT_MZ_SS_07A";
  TProtocol[TProtocol["PROTOCOL_SIMPLE_SOFT_RP5_MZ_002"] = 4] = "PROTOCOL_SIMPLE_SOFT_RP5_MZ_002";
})(TProtocol || (TProtocol = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/teyes/TeyesConfig.ts




const API_TEYES_CONFIG_EXEC = 0x50;
const API_TEYES_CONFIG_EVENT = "TeyesConfig";
/** Модель параметров Teyes */
class TeyesConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_TEYES_CONFIG_EXEC);
    (0,defineProperty/* default */.A)(this, "receiveClock", false);
    (0,defineProperty/* default */.A)(this, "receiveButtons", false);
    (0,defineProperty/* default */.A)(this, "receiveText", false);
    (0,defineProperty/* default */.A)(this, "sendButton", false);
    (0,defineProperty/* default */.A)(this, "sendClimate", false);
    (0,defineProperty/* default */.A)(this, "sendDoors", false);
    (0,defineProperty/* default */.A)(this, "parseVolume", false);
    (0,defineProperty/* default */.A)(this, "lcdShow", false);
    (0,defineProperty/* default */.A)(this, "reverseUart", false);
    (0,defineProperty/* default */.A)(this, "protocol", TProtocol.PROTOCOL_RAISE_HM_ND01);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, TeyesConfig.size, new bluetooth/* BluetoothStruct */.iy(TeyesConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, TeyesConfig.size, new bluetooth/* BluetoothStruct */.iy(TeyesConfig.struct));
  }
}
(0,defineProperty/* default */.A)(TeyesConfig, "struct", {
  receiveClock: bluetooth/* BluetoothStruct */.iy.bit(),
  receiveButtons: bluetooth/* BluetoothStruct */.iy.bit(),
  receiveText: bluetooth/* BluetoothStruct */.iy.bit(),
  sendButton: bluetooth/* BluetoothStruct */.iy.bit(),
  sendClimate: bluetooth/* BluetoothStruct */.iy.bit(),
  sendDoors: bluetooth/* BluetoothStruct */.iy.bit(),
  parseVolume: bluetooth/* BluetoothStruct */.iy.bit(),
  lcdShow: bluetooth/* BluetoothStruct */.iy.bit(),
  reverseUart: bluetooth/* BluetoothStruct */.iy.bit(),
  protocol: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(TeyesConfig, "size", 3);
;// CONCATENATED MODULE: ./src/models/pjcan/teyes/TeyesText.ts



const API_TEYES_TEXT_EXEC = 0x51;
const API_TEYES_TEXT_EVENT = "TeyesText";
const API_TEYES_TEXT_VIEW_EXEC = 0x53;
const API_TEYES_TEXT_VIEW_EVENT = "TeyesTextView";
/** Модель значения текста Teyes */
class TeyesText extends base/* BaseModel */.t {
  constructor(data) {
    super(API_TEYES_TEXT_EXEC);
    (0,defineProperty/* default */.A)(this, "text", "");
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, TeyesText.size, new bluetooth/* BluetoothStruct */.iy(TeyesText.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, TeyesText.size, new bluetooth/* BluetoothStruct */.iy(TeyesText.struct));
  }
}
(0,defineProperty/* default */.A)(TeyesText, "struct", {
  text: bluetooth/* BluetoothStruct */.iy.char(12)
});
(0,defineProperty/* default */.A)(TeyesText, "size", 12);
;// CONCATENATED MODULE: ./src/models/pjcan/teyes/index.ts





/***/ }),

/***/ 55800:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FX: function() { return /* reexport */ API40_VERSION_EVENT; },
  kt: function() { return /* reexport */ API40_VERSION_EXEC; },
  QM: function() { return /* reexport */ API_NEW_VERSION_EVENT; },
  dD: function() { return /* reexport */ API_VERSION_EVENT; },
  uM: function() { return /* reexport */ API_VERSION_EXEC; },
  Rx: function() { return /* reexport */ Version; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/version/Version.ts



const API_VERSION_EXEC = 0x00;
const API_VERSION_EVENT = "Version";
const API_NEW_VERSION_EVENT = "NewVersion";
const API40_VERSION_EXEC = 0x06;
const API40_VERSION_EVENT = "Version40";
/** Модель версии */
class Version extends base/* BaseModel */.t {
  /** Наличие версии */
  get is() {
    return this.major > 0;
  }
  /** Поддерживаемая версия прошивки */
  get supported() {
    return this.major === 4 && this.minor === 1;
  }
  /** Строковое представление */
  get toString() {
    return `${this.major}.${this.minor}.${this.build}.${this.revision}`;
  }
  constructor(data, protocol) {
    if (protocol === 40) {
      super(API40_VERSION_EXEC, true, 40);
      (0,defineProperty/* default */.A)(this, "major", 0);
      (0,defineProperty/* default */.A)(this, "minor", 0);
      (0,defineProperty/* default */.A)(this, "build", 0);
      (0,defineProperty/* default */.A)(this, "revision", 0);
    } else {
      super(API_VERSION_EXEC, true);
      (0,defineProperty/* default */.A)(this, "major", 0);
      (0,defineProperty/* default */.A)(this, "minor", 0);
      (0,defineProperty/* default */.A)(this, "build", 0);
      (0,defineProperty/* default */.A)(this, "revision", 0);
    }
    this.skipActivationCheck = true;
    if (data) this.set(data);
  }
  /**
   * Сравнение версий
   * @param {IVersion} ver Объект версии
   * @param {number} len Длина сравниваемой версии (от 1 до 4)
   */
  compare(ver, len) {
    const verA = [this.major, this.minor, this.build, this.revision];
    const verB = [ver.major, ver.minor, ver.build, ver.revision];
    if (len < 1) len = 1;else if (len > 4) len = 4;
    for (let i = 0; i < len; i++) {
      if (verB[i] > verA[i]) return 1;else if (verB[i] < verA[i]) return -1;
    }
    return 0;
  }
  compareString(ver) {
    if (ver?.length > 0) {
      const verA = [this.major, this.minor, this.build, this.revision];
      const verB = ver.split(".")?.map(x => parseInt(x));
      if (verB?.length > 0) {
        let len = verB.length;
        if (len > 4) len = 4;
        for (let i = 0; i < len; i++) {
          if (verB[i] > verA[i]) return 1;else if (verB[i] < verA[i]) return -1;
        }
      }
    }
    return 0;
  }
  /** Очистить значения версии */
  clear() {
    this.major = 0;
    this.minor = 0;
    this.build = 0;
    this.revision = 0;
  }
  /**
   * Запись версии
   * @param {IVersion} ver Версия
   */
  setVersion(ver) {
    if (this.is || !ver.is) return false;
    this.major = ver.major;
    this.minor = ver.minor;
    this.build = ver.build;
    this.revision = ver.revision;
    return true;
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, Version.size, new bluetooth/* BluetoothStruct */.iy(Version.struct), buf);
  }
  /** Чтение данных */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, Version.size, new bluetooth/* BluetoothStruct */.iy(Version.struct));
  }
}
(0,defineProperty/* default */.A)(Version, "struct", {
  major: bluetooth/* BluetoothStruct */.iy.uint8(),
  minor: bluetooth/* BluetoothStruct */.iy.uint8(),
  build: bluetooth/* BluetoothStruct */.iy.uint8(),
  revision: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(Version, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/version/index.ts



/***/ }),

/***/ 77813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: function() { return /* reexport */ TViewType; },
  i: function() { return /* reexport */ ViewConfig; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/view/TViewType.ts
/* eslint-disable */
/** Тип отображения текста */
var TViewType;
(function (TViewType) {
  TViewType[TViewType["VIEW_TEXT_SIMPLE"] = 0] = "VIEW_TEXT_SIMPLE";
  TViewType[TViewType["VIEW_TEXT_FLICKERING"] = 1] = "VIEW_TEXT_FLICKERING";
  TViewType[TViewType["VIEW_TEXT_TICKER"] = 2] = "VIEW_TEXT_TICKER"; // бегущая строка
})(TViewType || (TViewType = {}));
;// CONCATENATED MODULE: ./src/models/pjcan/view/ViewConfig.ts




/** Модель параметров отображения */
class ViewConfig extends base/* BaseModel */.t {
  constructor(exec = 0, data) {
    super(exec);
    (0,defineProperty/* default */.A)(this, "enabled", false);
    (0,defineProperty/* default */.A)(this, "type", TViewType.VIEW_TEXT_SIMPLE);
    (0,defineProperty/* default */.A)(this, "time", 0);
    (0,defineProperty/* default */.A)(this, "delay", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, ViewConfig.size, new bluetooth/* BluetoothStruct */.iy(ViewConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, ViewConfig.size, new bluetooth/* BluetoothStruct */.iy(ViewConfig.struct));
  }
}
(0,defineProperty/* default */.A)(ViewConfig, "struct", {
  enabled: bluetooth/* BluetoothStruct */.iy.bit(),
  type: bluetooth/* BluetoothStruct */.iy.uint8(),
  time: bluetooth/* BluetoothStruct */.iy.uint8(),
  delay: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(ViewConfig, "size", 4);
;// CONCATENATED MODULE: ./src/models/pjcan/view/index.ts




/***/ }),

/***/ 12619:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u7: function() { return /* reexport */ API_VOLUME_CONFIG_EVENT; },
  fo: function() { return /* reexport */ API_VOLUME_CONFIG_EXEC; },
  fB: function() { return /* reexport */ API_VOLUME_VIEW_EVENT; },
  Kd: function() { return /* reexport */ API_VOLUME_VIEW_EXEC; },
  T$: function() { return /* reexport */ VolumeConfig; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/base/index.ts
var base = __webpack_require__(30449);
;// CONCATENATED MODULE: ./src/models/pjcan/volume/VolumeConfig.ts



const API_VOLUME_CONFIG_EXEC = 0xe0;
const API_VOLUME_CONFIG_EVENT = "VolumeConfig";
const API_VOLUME_VIEW_EXEC = 0xe3;
const API_VOLUME_VIEW_EVENT = "VolumeView";
/** Модель конфигурации уровня звука */
class VolumeConfig extends base/* BaseModel */.t {
  constructor(data) {
    super(API_VOLUME_CONFIG_EXEC, true);
    (0,defineProperty/* default */.A)(this, "mute", false);
    (0,defineProperty/* default */.A)(this, "muteBose", false);
    (0,defineProperty/* default */.A)(this, "start", false);
    (0,defineProperty/* default */.A)(this, "startBose", false);
    (0,defineProperty/* default */.A)(this, "volume", 0);
    (0,defineProperty/* default */.A)(this, "volumeBose", 0);
    (0,defineProperty/* default */.A)(this, "startLevel", 0);
    (0,defineProperty/* default */.A)(this, "startLevelBose", 0);
    if (data) this.set(data);
  }
  /**
   * Запись данных
   * @param {DataView} buf Буфер данных
   */
  set(buf) {
    return this._set(this, this.exec, VolumeConfig.size, new bluetooth/* BluetoothStruct */.iy(VolumeConfig.struct), buf);
  }
  /**
   * Чтение данных
   * @param {boolean} request Только запрос
   */
  get(request) {
    return request ? this._get(this, this.exec) : this._get(this, this.exec, VolumeConfig.size, new bluetooth/* BluetoothStruct */.iy(VolumeConfig.struct));
  }
}
(0,defineProperty/* default */.A)(VolumeConfig, "struct", {
  mute: bluetooth/* BluetoothStruct */.iy.bit(),
  muteBose: bluetooth/* BluetoothStruct */.iy.bit(),
  start: bluetooth/* BluetoothStruct */.iy.bit(),
  startBose: bluetooth/* BluetoothStruct */.iy.bit(),
  volume: bluetooth/* BluetoothStruct */.iy.uint8(),
  volumeBose: bluetooth/* BluetoothStruct */.iy.uint8(),
  startLevel: bluetooth/* BluetoothStruct */.iy.uint8(),
  startLevelBose: bluetooth/* BluetoothStruct */.iy.uint8()
});
(0,defineProperty/* default */.A)(VolumeConfig, "size", 5);
;// CONCATENATED MODULE: ./src/models/pjcan/volume/index.ts



/***/ }),

/***/ 81459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81387);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96188);
/* harmony import */ var _views_onboard_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71522);
/* harmony import */ var _views_buttons_index_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28481);
/* harmony import */ var _views_options_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92063);





const routes = [{
  path: "/",
  name: "Onboard",
  component: _views_onboard_index_vue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  meta: {
    title: "onboard.title"
  }
}, {
  path: "/buttons",
  name: "Buttons",
  component: _views_buttons_index_vue__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  meta: {
    title: "buttons.title"
  }
}, {
  path: "/options",
  name: "Options",
  component: _views_options_index_vue__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  meta: {
    title: "options.title"
  }
}];
const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__/* .createRouter */ .aE)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__/* .createWebHistory */ .LA)("/pjcan-test/"),
  routes
});
router.beforeEach(async (to, from, next) => {
  const title = to.meta?.title;
  document.title = "PJCAN: " + (title?.length > 0 ? (0,_lang__WEBPACK_IMPORTED_MODULE_0__.t)(title) : "");
  next();
});
/* harmony default export */ __webpack_exports__.A = (router);

/***/ }),

/***/ 81052:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ src_store; }
});

// NAMESPACE OBJECT: ./src/store/modules/app/getters.ts
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, {
  language: function() { return language; },
  message: function() { return message; },
  notify: function() { return notify; },
  onboardCardList: function() { return onboardCardList; },
  sw1: function() { return sw1; },
  visibleMessage: function() { return visibleMessage; }
});

// NAMESPACE OBJECT: ./src/store/modules/app/mutations.ts
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, {
  clearMessages: function() { return clearMessages; },
  freeMessage: function() { return freeMessage; },
  setLanguage: function() { return setLanguage; },
  setMessage: function() { return setMessage; },
  setNotify: function() { return setNotify; },
  setOnboardCardList: function() { return setOnboardCardList; },
  setSW1: function() { return setSW1; },
  setVisibleMessage: function() { return setVisibleMessage; }
});

// NAMESPACE OBJECT: ./src/store/modules/app/actions.ts
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, {
  readLanguage: function() { return readLanguage; },
  readOnboardCardList: function() { return readOnboardCardList; },
  readSW1: function() { return readSW1; },
  resetOnboardCardList: function() { return resetOnboardCardList; },
  resetSW1: function() { return resetSW1; },
  writeLanguage: function() { return writeLanguage; },
  writeOnboardCardList: function() { return writeOnboardCardList; },
  writeSW1: function() { return writeSW1; }
});

// NAMESPACE OBJECT: ./src/store/modules/config/getters.ts
var config_getters_namespaceObject = {};
__webpack_require__.r(config_getters_namespaceObject);
__webpack_require__.d(config_getters_namespaceObject, {
  bose: function() { return getters_bose; },
  carModel: function() { return carModel; },
  datetime: function() { return getters_datetime; },
  doors: function() { return getters_doors; },
  engine: function() { return getters_engine; },
  fuel: function() { return getters_fuel; },
  info: function() { return info; },
  mazda: function() { return getters_mazda; },
  sw1: function() { return getters_sw1; },
  teyes: function() { return getters_teyes; },
  version: function() { return getters_version; },
  volume: function() { return getters_volume; }
});

// NAMESPACE OBJECT: ./src/store/modules/config/mutations.ts
var config_mutations_namespaceObject = {};
__webpack_require__.r(config_mutations_namespaceObject);
__webpack_require__.d(config_mutations_namespaceObject, {
  setBose: function() { return setBose; },
  setBoseAudioPlt: function() { return setBoseAudioPlt; },
  setBoseBalance: function() { return setBoseBalance; },
  setBoseBass: function() { return setBoseBass; },
  setBoseCenterPoint: function() { return setBoseCenterPoint; },
  setBoseEnabled: function() { return setBoseEnabled; },
  setBoseFade: function() { return setBoseFade; },
  setBoseRadioFM: function() { return setBoseRadioFM; },
  setBoseTreble: function() { return setBoseTreble; },
  setBoseWow: function() { return setBoseWow; },
  setDatetime: function() { return setDatetime; },
  setDatetimeShowDate: function() { return setDatetimeShowDate; },
  setDatetimeShowDateAndDayWeek: function() { return setDatetimeShowDateAndDayWeek; },
  setDatetimeShowDayWeek: function() { return setDatetimeShowDayWeek; },
  setDatetimeShowFullDatetime: function() { return setDatetimeShowFullDatetime; },
  setDatetimeShowTime: function() { return setDatetimeShowTime; },
  setDatetimeShowTimeAndDayWeek: function() { return setDatetimeShowTimeAndDayWeek; },
  setDoors: function() { return setDoors; },
  setDoorsConfig: function() { return setDoorsConfig; },
  setEngine: function() { return setEngine; },
  setEngineConfig: function() { return setEngineConfig; },
  setFuel: function() { return setFuel; },
  setFuelRatio: function() { return setFuelRatio; },
  setInfo: function() { return setInfo; },
  setMazda: function() { return setMazda; },
  setMazdaCarModel: function() { return setMazdaCarModel; },
  setMazdaHello: function() { return setMazdaHello; },
  setMazdaLcd: function() { return setMazdaLcd; },
  setMazdaLogo: function() { return setMazdaLogo; },
  setSW1: function() { return mutations_setSW1; },
  setSW1Item: function() { return setSW1Item; },
  setSW1Programming: function() { return setSW1Programming; },
  setSW1Resistance: function() { return setSW1Resistance; },
  setTeyes: function() { return setTeyes; },
  setTeyesLcdShow: function() { return setTeyesLcdShow; },
  setTeyesParseVolume: function() { return setTeyesParseVolume; },
  setTeyesProtocol: function() { return setTeyesProtocol; },
  setTeyesReceiveButtons: function() { return setTeyesReceiveButtons; },
  setTeyesReceiveClock: function() { return setTeyesReceiveClock; },
  setTeyesReceiveText: function() { return setTeyesReceiveText; },
  setTeyesReverseUart: function() { return setTeyesReverseUart; },
  setTeyesSendButton: function() { return setTeyesSendButton; },
  setTeyesSendClimate: function() { return setTeyesSendClimate; },
  setTeyesSendDoors: function() { return setTeyesSendDoors; },
  setVersion: function() { return setVersion; },
  setVolume: function() { return setVolume; },
  setVolumeMuteBose: function() { return setVolumeMuteBose; },
  setVolumeStartBose: function() { return setVolumeStartBose; },
  setVolumeValueBose: function() { return setVolumeValueBose; },
  synchDatetime: function() { return synchDatetime; }
});

// NAMESPACE OBJECT: ./src/store/modules/config/actions.ts
var config_actions_namespaceObject = {};
__webpack_require__.r(config_actions_namespaceObject);
__webpack_require__.d(config_actions_namespaceObject, {
  infoUpdateLoop: function() { return infoUpdateLoop; }
});

// NAMESPACE OBJECT: ./src/store/modules/value/getters.ts
var value_getters_namespaceObject = {};
__webpack_require__.r(value_getters_namespaceObject);
__webpack_require__.d(value_getters_namespaceObject, {
  climate: function() { return getters_climate; },
  device: function() { return getters_device; },
  doors: function() { return value_getters_doors; },
  engine: function() { return value_getters_engine; },
  fuel: function() { return value_getters_fuel; },
  movement: function() { return getters_movement; },
  scanner: function() { return scanner; },
  scannerBuffer: function() { return scannerBuffer; },
  scannerBufferRead: function() { return scannerBufferRead; },
  sensors: function() { return getters_sensors; },
  sw1: function() { return value_getters_sw1; },
  temperature: function() { return getters_temperature; },
  test: function() { return getters_test; }
});

// NAMESPACE OBJECT: ./src/store/modules/value/mutations.ts
var value_mutations_namespaceObject = {};
__webpack_require__.r(value_mutations_namespaceObject);
__webpack_require__.d(value_mutations_namespaceObject, {
  nextScannerBuffer: function() { return nextScannerBuffer; },
  setClimate: function() { return setClimate; },
  setDevice: function() { return setDevice; },
  setDoors: function() { return mutations_setDoors; },
  setEngine: function() { return mutations_setEngine; },
  setFuel: function() { return mutations_setFuel; },
  setMovement: function() { return setMovement; },
  setSW1: function() { return value_mutations_setSW1; },
  setScanner: function() { return setScanner; },
  setScannerBuffer: function() { return setScannerBuffer; },
  setScannerBufferTitle: function() { return setScannerBufferTitle; },
  setSensors: function() { return setSensors; },
  setTemperature: function() { return setTemperature; },
  setTestText: function() { return setTestText; }
});

// NAMESPACE OBJECT: ./src/store/modules/view/getters.ts
var view_getters_namespaceObject = {};
__webpack_require__.r(view_getters_namespaceObject);
__webpack_require__.d(view_getters_namespaceObject, {
  bose: function() { return view_getters_bose; },
  climate: function() { return view_getters_climate; },
  datetime: function() { return view_getters_datetime; },
  doors: function() { return view_getters_doors; },
  engine: function() { return view_getters_engine; },
  fuel: function() { return view_getters_fuel; },
  mazda: function() { return view_getters_mazda; },
  movement: function() { return view_getters_movement; },
  sensors: function() { return view_getters_sensors; },
  temperature: function() { return view_getters_temperature; },
  teyesText: function() { return teyesText; },
  voltmeter: function() { return voltmeter; },
  volume: function() { return view_getters_volume; },
  worktime: function() { return worktime; }
});

// NAMESPACE OBJECT: ./src/store/modules/view/mutations.ts
var view_mutations_namespaceObject = {};
__webpack_require__.r(view_mutations_namespaceObject);
__webpack_require__.d(view_mutations_namespaceObject, {
  setBose: function() { return mutations_setBose; },
  setClimate: function() { return mutations_setClimate; },
  setDatetime: function() { return mutations_setDatetime; },
  setDoors: function() { return view_mutations_setDoors; },
  setEngine: function() { return view_mutations_setEngine; },
  setFuel: function() { return view_mutations_setFuel; },
  setMazda: function() { return mutations_setMazda; },
  setMovement: function() { return mutations_setMovement; },
  setSensors: function() { return mutations_setSensors; },
  setTemperature: function() { return mutations_setTemperature; },
  setTeyesText: function() { return setTeyesText; },
  setView: function() { return setView; },
  setVoltmeter: function() { return setVoltmeter; },
  setVolume: function() { return mutations_setVolume; },
  setWorktime: function() { return setWorktime; }
});

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js
var vuex_esm_bundler = __webpack_require__(4249);
// EXTERNAL MODULE: ./src/models/pjcan/mazda/index.ts + 4 modules
var mazda = __webpack_require__(19164);
;// CONCATENATED MODULE: ./src/store/modules/app/onboard-card-list-default.ts

/* harmony default export */ var onboard_card_list_default = ([{
  name: "info",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GG, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GH, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST]
}, {
  name: "bose",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9]
}, {
  name: "engine",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST]
}, {
  name: "fuel",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST]
}, {
  name: "movement",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST]
}, {
  name: "doors",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL]
}, {
  name: "climate",
  enabled: true,
  car: [mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_6_GG, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7, mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST]
}]);
// EXTERNAL MODULE: ./src/lang/index.ts + 2 modules
var lang = __webpack_require__(96188);
;// CONCATENATED MODULE: ./src/store/modules/app/buttons-default.ts

/* harmony default export */ var buttons_default = ([{
  id: 1,
  title: (0,lang.t)("buttons.mode"),
  icon: "mdi-menu"
}, {
  id: 2,
  title: (0,lang.t)("buttons.setUp"),
  icon: "mdi-play"
}, {
  id: 3,
  title: (0,lang.t)("buttons.setDown"),
  icon: "mdi-play"
}, {
  id: 4,
  title: (0,lang.t)("buttons.volUp"),
  icon: "mdi-volume-plus"
}, {
  id: 5,
  title: (0,lang.t)("buttons.volDown"),
  icon: "mdi-volume-minus"
}, {
  id: 6,
  title: (0,lang.t)("buttons.volMute"),
  icon: "mdi-volume-mute"
}]);
;// CONCATENATED MODULE: ./src/store/modules/app/state.ts


const state = {
  messages: [],
  visibleMessage: false,
  mazda: null,
  onboardCardList: onboard_card_list_default,
  sw1: buttons_default,
  notify: false,
  language: "ru"
};
/* harmony default export */ var app_state = (state);
;// CONCATENATED MODULE: ./src/store/modules/app/getters.ts
/**
 * Сообщение из очереди сообщений
 * @param {any} state
 */
const message = state => state.messages?.[0];
/**
 * Отображение диалога сообщения
 * @param {any} state
 */
const visibleMessage = state => state.visibleMessage;
/**
 * Список карточек бортового компьютера
 * @param {any} state
 */
const onboardCardList = state => state.onboardCardList;
/**
 * Список кнопок SW1
 * @param {any} state
 */
const sw1 = state => state.sw1;
/**
 * Уведомления
 * @param {any} state
 */
const notify = state => state.notify;
/**
 * Язык интерфейса
 * @param state
 */
const language = state => state.language;
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/utils/debounce.ts
var debounce = __webpack_require__(1560);
;// CONCATENATED MODULE: ./src/store/modules/app/mutations.ts



const mutations_debounce = (0,debounce/* createDebounce */.S)();
/**
 * Записать новое сообщение
 * @param state
 * @param {IMessage} msg Сообщение
 */
const setMessage = (state, msg) => {
  state.messages.push(msg);
  state.visibleMessage = true;
};
const setVisibleMessage = (state, value) => {
  state.visibleMessage = value;
  if (!value) {
    mutations_debounce(() => src_store.commit("app/freeMessage"), 400);
  }
};
/**
 * Удалить первое сообщение из очереди сообщений
 * @param state
 */
const freeMessage = state => {
  if (state.messages?.[0]) {
    state.messages.splice(0, 1);
  }
};
/**
 * Очистить очередь сообщений
 * @param state
 */
const clearMessages = state => {
  mutations_debounce(() => {}, 0);
  state.messages = [];
};
/**
 * Изменить список карточек бортового компьютера
 * @param {any} state
 * @param {IOnboardCard[]} value Новый список
 */
const setOnboardCardList = (state, value) => {
  state.onboardCardList = [...value].map(x => ({
    ...x
  }));
};
/**
 * Записать список кнопок SW1
 * @param {any} state
 * @param {IButtonCard[]} value Новый список
 */
const setSW1 = (state, value) => {
  state.sw1 = [...value].map(x => ({
    id: x.id,
    title: x.title,
    icon: x.icon
  }));
};
/**
 * Записать уведомление
 * @param {any} state
 * @param {boolean} value Значение
 */
const setNotify = (state, value) => {
  state.notify = value;
};
/**
 * Записать значение языка интерфейса
 * @param {any} state
 * @param {boolean} value Значение
 */
const setLanguage = (state, value) => {
  state.language = value;
};
;// CONCATENATED MODULE: ./src/store/modules/app/actions.ts


/**
 * Чтение списка onboardCardList из local storage
 * @param {any} commit
 */
const readOnboardCardList = ({
  commit
}) => {
  const res = window.localStorage.getItem("OnboardCardList");
  if (res?.length) {
    try {
      const onboardCardList = JSON.parse(res);
      if (Array.isArray(onboardCardList)) {
        commit("setOnboardCardList", onboardCardList);
      }
    } catch (e) {
      console.log(e);
    }
  }
};
/**
 * Запись списка onboardCardList в local storage
 * @param {any} commit
 */
const writeOnboardCardList = ({
  getters
}) => {
  const res = JSON.stringify(getters.onboardCardList);
  window.localStorage.setItem("OnboardCardList", res);
};
/**
 * Сбросить значения списка onboardCardList по умолчанию
 * @param {any} commit
 * @param {any} dispatch
 */
const resetOnboardCardList = ({
  commit,
  dispatch
}) => {
  commit("setOnboardCardList", onboard_card_list_default);
  dispatch("writeOnboardCardList");
};
/**
 * Чтение списка кнопок SW1 из local storage
 * @param {any} commit
 */
const readSW1 = ({
  commit
}) => {
  const res = window.localStorage.getItem("ListButtonsSW1");
  if (res?.length) {
    try {
      const list = JSON.parse(res);
      if (Array.isArray(list)) {
        commit("setSW1", list);
      }
    } catch (e) {
      console.log(e);
    }
  }
};
/**
 * Запись списка кнопок SW1 в local storage
 * @param {any} commit
 */
const writeSW1 = ({
  getters
}) => {
  const res = JSON.stringify(getters.sw1);
  window.localStorage.setItem("ListButtonsSW1", res);
};
/**
 * Сбросить значения списка кнопок SW1 по умолчанию
 * @param {any} commit
 * @param {any} dispatch
 */
const resetSW1 = ({
  commit,
  dispatch
}) => {
  commit("setSW1", buttons_default);
  dispatch("writeSW1");
};
/**
 * Чтение языка из local storage
 * @param {any} commit
 */
const readLanguage = ({
  commit
}) => {
  const res = window.localStorage.getItem("Language");
  if (res?.length) {
    try {
      const language = JSON.parse(res);
      commit("setLanguage", language);
    } catch (e) {
      console.log(e);
    }
  }
};
/**
 * Запись языка в local storage
 * @param {any} commit
 */
const writeLanguage = ({
  getters
}) => {
  const res = JSON.stringify(getters.language);
  window.localStorage.setItem("Language", res);
};
;// CONCATENATED MODULE: ./src/store/modules/app/index.ts




/* harmony default export */ var app = ({
  namespaced: true,
  state: app_state,
  getters: getters_namespaceObject,
  mutations: mutations_namespaceObject,
  actions: actions_namespaceObject
});
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 7 modules
var device = __webpack_require__(94027);
// EXTERNAL MODULE: ./src/models/pjcan/teyes/index.ts + 3 modules
var teyes = __webpack_require__(87380);
// EXTERNAL MODULE: ./src/models/pjcan/buttons/index.ts + 7 modules
var buttons = __webpack_require__(8871);
// EXTERNAL MODULE: ./src/models/pjcan/bose/index.ts + 2 modules
var bose = __webpack_require__(89100);
// EXTERNAL MODULE: ./src/models/pjcan/doors/index.ts + 2 modules
var doors = __webpack_require__(84582);
// EXTERNAL MODULE: ./src/models/pjcan/engine/index.ts + 3 modules
var engine = __webpack_require__(76300);
// EXTERNAL MODULE: ./src/models/pjcan/fuel/index.ts + 3 modules
var fuel = __webpack_require__(59461);
// EXTERNAL MODULE: ./src/models/pjcan/volume/index.ts + 1 modules
var volume = __webpack_require__(12619);
// EXTERNAL MODULE: ./src/models/pjcan/version/index.ts + 1 modules
var version = __webpack_require__(55800);
// EXTERNAL MODULE: ./src/models/pjcan/datetime/index.ts + 1 modules
var datetime = __webpack_require__(9917);
;// CONCATENATED MODULE: ./src/store/modules/config/state.ts











const state_state = {
  version: new version/* Version */.Rx(),
  info: new device/* DeviceInfo */.Vj(),
  mazda: new mazda/* MazdaConfig */.AU(),
  teyes: new teyes/* TeyesConfig */.pn(),
  sw1: new buttons/* ButtonsConfig */.Ab(),
  bose: new bose/* BoseConfig */.gh(),
  doors: new doors/* DoorsConfig */.O4(),
  engine: new engine/* EngineConfig */.zZ(),
  fuel: new fuel/* FuelConfig */.ll(),
  volume: new volume/* VolumeConfig */.T$(),
  datetime: new datetime/* DatetimeConfig */.Cv()
};
/* harmony default export */ var config_state = (state_state);
;// CONCATENATED MODULE: ./src/store/modules/config/getters.ts

/**
 * Версия прошивки
 * @param {any} state
 */
const getters_version = state => state.version;
/**
 * Информация об устройстве
 * @param {any} state
 */
const info = state => state.info;
/**
 * Конфигурация автомобиля
 * @param {any} state
 */
const getters_mazda = state => state.mazda;
/**
 * Модель автомобиля
 * @param {any} state
 */
const carModel = state => state.mazda.isData ? state.mazda.carModel : mazda/* TCarModel */.oB.CAR_MODEL_UNKNOWN;
/**
 * Конфигурация Teyes
 * @param {any} state
 */
const getters_teyes = state => state.teyes;
/**
 * Конфигурация кнопок sw1
 * @param {any} state
 */
const getters_sw1 = state => state.sw1;
/**
 * Конфигурация Bose
 * @param {any} state
 */
const getters_bose = state => state.bose;
/**
 * Конфигурация дверей
 * @param {any} state
 */
const getters_doors = state => state.doors;
/**
 * Конфигурация ДВС
 * @param {any} state
 */
const getters_engine = state => state.engine;
/**
 * Конфигурация расхода
 * @param {any} state
 */
const getters_fuel = state => state.fuel;
/**
 * Конфигурация уровня звука
 * @param {any} state
 */
const getters_volume = state => state.volume;
/**
 * Конфигурация даты и времени
 * @param {any} state
 */
const getters_datetime = state => state.datetime;
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
;// CONCATENATED MODULE: ./src/store/modules/config/mutations.ts

/**
 * Записать версию прошивки
 * @param {any} state
 * @param {DataView} data Данные
 */
const setVersion = (state, data) => {
  state.version.set(data);
};
/**
 * Изменить информацию об устройстве
 * @param {any} state
 * @param {DataView} data Данные
 */
const setInfo = (state, data) => {
  state.info.set(data);
};
/**
 * Изменить конфигурацию автомобиля
 * @param {any} state
 * @param {DataView} data Данные
 */
const setMazda = (state, data) => {
  state.mazda.set(data);
};
/**
 * Mazda: CarModel
 * @param {any} state
 * @param {TCarModel} value Новое значение
 */
const setMazdaCarModel = (state, value) => {
  if (state.mazda.isData) {
    state.mazda.carModel = value;
    canbus/* default */.A.query(state.mazda);
    canbus/* default */.A.query(state.sw1, true);
  }
};
/**
 * Mazda: LCD
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setMazdaLcd = (state, value) => {
  if (state.mazda.isData) {
    state.mazda.lcd = value;
    canbus/* default */.A.query(state.mazda);
  }
};
/**
 * Mazda: Logo
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setMazdaLogo = (state, value) => {
  if (state.mazda.isData) {
    state.mazda.logo = value;
    canbus/* default */.A.query(state.mazda);
  }
};
/**
 * Mazda: Hello
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setMazdaHello = (state, value) => {
  if (state.mazda.isData) {
    state.mazda.hello = value;
    canbus/* default */.A.query(state.mazda);
  }
};
/**
 * Изменить конфигурацию Teyes
 * @param {any} state
 * @param {DataView} data Данные
 */
const setTeyes = (state, data) => {
  state.teyes.set(data);
};
/**
 * Teyes: Protocol
 * @param {any} state
 * @param {TProtocol} value Новое значение
 */
const setTeyesProtocol = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.protocol = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: ReverseUart
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesReverseUart = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.reverseUart = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: LcdShow
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesLcdShow = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.lcdShow = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: SendButton
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesSendButton = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.sendButton = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: SendClimate
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesSendClimate = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.sendClimate = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: SendDoors
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesSendDoors = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.sendDoors = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: ParseVolume
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesParseVolume = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.parseVolume = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: ReceiveClock
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesReceiveClock = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.receiveClock = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: ReceiveText
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesReceiveText = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.receiveText = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Teyes: ReceiveButtons
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setTeyesReceiveButtons = (state, value) => {
  if (state.teyes.isData) {
    state.teyes.receiveButtons = value;
    canbus/* default */.A.query(state.teyes);
  }
};
/**
 * Изменить конфигурацию кнопок sw1
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setSW1 = (state, data) => {
  state.sw1.set(data);
};
/**
 * SW1: Programming
 * @param {any} state
 * @param {boolean} value Новое значение
 */
const setSW1Programming = (state, value) => {
  if (state.sw1.isData) {
    state.sw1.programming = value;
    canbus/* default */.A.query(state.sw1);
  }
};
/**
 * SW1: Programming
 * @param {any} state
 * @param {IButtonConfigItem} value Новое значение
 */
const setSW1Item = (state, value) => {
  if (state.sw1.isData && state.sw1.setItem(value)) canbus/* default */.A.query(state.sw1);
};
/**
 * SW1: Resistance
 * @param {any} state
 * @param {any} value Новое значение
 */
const setSW1Resistance = (state, {
  id,
  min,
  max
}) => {
  if (state.sw1.isData) {
    const item = state.sw1.items.find(x => x.id === id);
    if (item) {
      item.resistanceMin = min;
      item.resistanceMax = max;
      canbus/* default */.A.query(state.sw1);
    }
  }
};
/**
 * Изменить конфигурацию Bose
 * @param {any} state
 * @param {DataView} data Данные
 */
const setBose = (state, data) => {
  state.bose.set(data);
};
/**
 * Включить/выключить Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseEnabled = (state, value) => {
  if (state.bose.isData) {
    state.bose.on = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: AudioPilot
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseAudioPlt = (state, value) => {
  if (state.bose.isData) {
    state.bose.audioPlt = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: RadioFM
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseRadioFM = (state, value) => {
  if (state.bose.isData) {
    state.bose.radioFM = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Звук wow
 * @param {any} state
 * @param {boolean} value Значение
 */
const setBoseWow = (state, value) => {
  if (state.bose.isData) {
    state.bose.wow = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Balance
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseBalance = (state, value) => {
  if (state.bose.isData) {
    state.bose.balance = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Bass
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseBass = (state, value) => {
  if (state.bose.isData) {
    state.bose.bass = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Fade
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseFade = (state, value) => {
  if (state.bose.isData) {
    state.bose.fade = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: Treble
 * @param {any} state
 * @param {number} value Значение
 */
const setBoseTreble = (state, value) => {
  if (state.bose.isData) {
    state.bose.treble = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Bose: CenterPoint
 * @param {any} state
 * @param {TCenterPoint} value Значение
 */
const setBoseCenterPoint = (state, value) => {
  if (state.bose.isData) {
    state.bose.centerPoint = value;
    canbus/* default */.A.query(state.bose);
  }
};
/**
 * Изменить конфигурацию дверей
 * @param {any} state
 * @param {DataView} data Данные
 */
const setDoors = (state, data) => {
  state.doors.set(data);
};
/**
 * Doors: FrontReverse, BackReverse, FrontBackReverse
 * @param {any} state
 * @param {any} value Значение
 */
const setDoorsConfig = (state, {
  frontReverse,
  backReverse,
  frontBackReverse
}) => {
  if (state.doors.isData) {
    state.doors.frontReverse = frontReverse;
    state.doors.backReverse = backReverse;
    state.doors.frontBackReverse = frontBackReverse;
    canbus/* default */.A.query(state.doors);
  }
};
/**
 * Изменить конфигурацию ДВС
 * @param {any} state
 * @param {DataView} data Данные
 */
const setEngine = (state, data) => {
  state.engine.set(data);
};
/**
 * Изменить значения конфигурации ДВС
 * @param {any} state
 * @param {IEngineConfig} value Новые значения
 */
const setEngineConfig = (state, {
  showDays,
  totalWorktime,
  totalCountRPM
}) => {
  if (state.engine.isData) {
    state.engine.showDays = showDays;
    state.engine.totalWorktime = totalWorktime;
    state.engine.totalCountRPM = totalCountRPM;
    canbus/* default */.A.query(state.engine);
  }
};
/**
 * Изменить конфигурацию расхода
 * @param {any} state
 * @param {DataView} data Данные
 */
const setFuel = (state, data) => {
  state.fuel.set(data);
};
/**
 * Fuel: Ratio
 * @param {any} state
 * @param {number} value Новое значение
 */
const setFuelRatio = (state, value) => {
  if (state.fuel.isData) {
    state.fuel.ratio = value;
    canbus/* default */.A.query(state.fuel);
  }
};
/**
 * Изменить конфигурацию уровня звука
 * @param {any} state
 * @param {DataView} data Данные
 */
const setVolume = (state, data) => {
  state.volume.set(data);
};
/**
 * Volume: Mute Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setVolumeMuteBose = (state, value) => {
  if (state.volume.isData) {
    state.volume.muteBose = value;
    canbus/* default */.A.query(state.volume);
  }
};
/**
 * Volume: Volume Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setVolumeValueBose = (state, value) => {
  if (state.volume.isData) {
    state.volume.volumeBose = value;
    canbus/* default */.A.query(state.volume);
  }
};
/**
 * Volume: Start Bose
 * @param {any} state
 * @param {boolean} value Значение
 */
const setVolumeStartBose = (state, {
  enabled,
  level
}) => {
  if (state.volume.isData) {
    state.volume.startBose = enabled;
    state.volume.startLevelBose = level;
    canbus/* default */.A.query(state.volume);
  }
};
/**
 * Изменить конфигурацию даты и времени
 * @param {any} state
 * @param {DataView} data Данные
 */
const setDatetime = (state, data) => {
  state.datetime.set(data);
};
/**
 * Синхронизация даты и времени
 * @param {any} state
 */
const synchDatetime = state => {
  state.datetime.updateUnixtime();
  canbus/* default */.A.query(state.datetime);
};
/**
 * Datetime: ShowDate
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowDate = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showDate = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowTime
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowTime = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showTime = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowDayWeek
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowDayWeek = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showDayWeek = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowDateAndDayWeek
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowDateAndDayWeek = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showDateAndDayWeek = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowTimeAndDayWeek
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowTimeAndDayWeek = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showTimeAndDayWeek = value;
    synchDatetime(state);
  }
};
/**
 * Datetime: ShowFullDatetime
 * @param {any} state
 * @param {boolean} value Значение
 */
const setDatetimeShowFullDatetime = (state, value) => {
  if (state.datetime.isData) {
    state.datetime.showFullDatetime = value;
    synchDatetime(state);
  }
};
;// CONCATENATED MODULE: ./src/store/modules/config/actions.ts

let loop;
/**
 * Циклическое обновление информацию об устройстве, каждые 10 сек.
 * @param {any} state
 * @param {boolean} enabled Запустить цикл обновления
 */
const infoUpdateLoop = ({
  getters
}, enabled) => {
  if (enabled) {
    if (!loop) loop = setInterval(() => canbus/* default */.A.query(getters.info, true), 10000);
    canbus/* default */.A.query(getters.info, true);
  } else {
    clearInterval(loop);
    loop = undefined;
  }
};
;// CONCATENATED MODULE: ./src/store/modules/config/index.ts




/* harmony default export */ var config = ({
  namespaced: true,
  state: config_state,
  getters: config_getters_namespaceObject,
  mutations: config_mutations_namespaceObject,
  actions: config_actions_namespaceObject
});
// EXTERNAL MODULE: ./src/models/pjcan/climate/index.ts + 1 modules
var climate = __webpack_require__(72418);
// EXTERNAL MODULE: ./src/models/pjcan/movement/index.ts + 2 modules
var movement = __webpack_require__(14753);
// EXTERNAL MODULE: ./src/models/pjcan/sensors/index.ts + 2 modules
var sensors = __webpack_require__(57411);
// EXTERNAL MODULE: ./src/models/pjcan/temperature/index.ts + 1 modules
var temperature = __webpack_require__(42570);
// EXTERNAL MODULE: ./src/models/pjcan/test/index.ts + 1 modules
var test = __webpack_require__(62805);
;// CONCATENATED MODULE: ./src/store/modules/value/state.ts










const value_state_state = {
  sw1: new buttons/* ButtonValue */.GV(),
  climate: new climate/* ClimateValue */.lA(),
  device: new device/* DeviceValue */.In(),
  doors: new doors/* DoorsValue */.VT(),
  engine: new engine/* EngineValue */.mI(),
  fuel: new fuel/* FuelValue */.Sh(),
  movement: new movement/* MovementValue */.v5(),
  sensors: new sensors/* SensorsValue */.fX(),
  temperature: new temperature/* TemperatureValue */.sY(),
  scanner: new device/* DeviceScannerValue */.G4(),
  scannerBuffer: [],
  scannerBufferReadNumber: 30,
  test: new test/* TestValue */.SZ()
};
/* harmony default export */ var value_state = (value_state_state);
;// CONCATENATED MODULE: ./src/store/modules/value/getters.ts
/**
 * Значения кнопки sw1
 * @param {any} state
 */
const value_getters_sw1 = state => state.sw1;
/**
 * Значения климата
 * @param {any} state
 */
const getters_climate = state => state.climate;
/**
 * Значения устройства
 * @param {any} state
 */
const getters_device = state => state.device;
/**
 * Значения дверей
 * @param {any} state
 */
const value_getters_doors = state => state.doors;
/**
 * Значения ДВС
 * @param {any} state
 */
const value_getters_engine = state => state.engine;
/**
 * Значения расхода
 * @param {any} state
 */
const value_getters_fuel = state => state.fuel;
/**
 * Значения движения
 * @param {any} state
 */
const getters_movement = state => state.movement;
/**
 * Значения датчиков
 * @param {any} state
 */
const getters_sensors = state => state.sensors;
/**
 * Значения температуры
 * @param {any} state
 */
const getters_temperature = state => state.temperature;
/**
 * Значения сканера
 * @param {any} state
 */
const scanner = state => state.scanner;
/**
 * Значения буфера сканера
 * @param {any} state
 */
const scannerBuffer = state => state.scannerBuffer;
/**
 * Чтение 30-ти элементов буфера сканера
 * @param {any} state
 */
const scannerBufferRead = state => state.scannerBuffer.slice(0, state.scannerBufferReadNumber);
/**
 * Значение теста
 * @param {any} state
 */
const getters_test = state => state.test;
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(49148);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/utils/conversion.ts
var conversion = __webpack_require__(77503);
;// CONCATENATED MODULE: ./src/store/modules/value/mutations.ts




/**
 * Записать значения кнопки sw1
 * @param {any} state
 * @param {DataView} data Данные
 */
const value_mutations_setSW1 = (state, data) => {
  state.sw1.set(data);
};
/**
 * Записать значения климата
 * @param {any} state
 * @param {DataView} data Данные
 */
const setClimate = (state, data) => {
  state.climate.set(data);
};
/**
 * Записать значения устройства
 * @param {any} state
 * @param {DataView} data Данные
 */
const setDevice = (state, data) => {
  state.device.set(data);
};
/**
 * Записать значения дверей
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setDoors = (state, data) => {
  state.doors.set(data);
};
/**
 * Записать значения ДВС
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setEngine = (state, data) => {
  state.engine.set(data);
};
/**
 * Записать значения расхода
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setFuel = (state, data) => {
  state.fuel.set(data);
};
/**
 * Записать значения движения
 * @param {any} state
 * @param {DataView} data Данные
 */
const setMovement = (state, data) => {
  state.movement.set(data);
};
/**
 * Записать значения датчиков
 * @param {any} state
 * @param {DataView} data Данные
 */
const setSensors = (state, data) => {
  state.sensors.set(data);
};
/**
 * Записать значения температуры
 * @param {any} state
 * @param {DataView} data Данные
 */
const setTemperature = (state, data) => {
  state.temperature.set(data);
};
/**
 * Записать значения сканера
 * @param {any} state
 * @param {DataView} data Данные
 */
const setScanner = (state, data) => {
  state.scanner.set(data);
  setScannerBuffer(state, false);
};
/**
 * Записать значения сканирования в буфер
 * @param {any} state
 * @param {boolean} free Очистить данные перед записью
 */
const setScannerBuffer = (state, free) => {
  if (free) state.scannerBuffer = [];
  if (state.scanner.isData && state.scanner.count > 0) {
    state.scannerBuffer.push(...state.scanner.frames.slice(0, state.scanner.count).map(x => {
      const mm = moment_default().duration(Number(x.timestamp), "milliseconds");
      const mm_time = {
        hours: mm.hours(),
        minutes: mm.minutes(),
        seconds: mm.seconds(),
        milliseconds: mm.milliseconds()
      };
      return {
        datetime: moment_default()().format("YYYY.MM.DD HH:mm:ss"),
        time: mm_time.hours + ":" + (mm_time.minutes < 10 ? "0" : "") + mm.minutes() + ":" + (mm_time.seconds < 10 ? "0" : "") + mm.seconds() + "." + (mm_time.milliseconds < 10 ? "00" : mm_time.milliseconds < 100 ? "0" : "") + mm.milliseconds(),
        hexId: "0x" + (0,conversion/* toHex */.nj)(x.id),
        hexData: "0x" + x.data.map(x => (0,conversion/* toHex */.nj)(x)).join(":")
      };
    }));
  }
};
/**
 * Записать заголовок в буфер
 * @param {any} state
 * @param {string} value Текст
 */
const setScannerBufferTitle = (state, value) => {
  state.scannerBuffer.push({
    datetime: value,
    time: "",
    hexId: "",
    hexData: ""
  });
};
const nextScannerBuffer = (state, readNumber) => {
  state.scannerBuffer.splice(0, readNumber > 0 ? readNumber : state.scannerBufferReadNumber);
};
/**
 * Записать значения теста
 * @param {any} state
 * @param {string} value Тест
 */
const setTestText = (state, value) => {
  state.test.text = value;
  canbus/* default */.A.query(state.test);
};
;// CONCATENATED MODULE: ./src/store/modules/value/index.ts



// import * as actions from "./actions";
/* harmony default export */ var value = ({
  namespaced: true,
  state: value_state,
  getters: value_getters_namespaceObject,
  mutations: value_mutations_namespaceObject
  // actions
});
// EXTERNAL MODULE: ./src/models/pjcan/view/index.ts + 2 modules
var view = __webpack_require__(77813);
;// CONCATENATED MODULE: ./src/store/modules/view/state.ts














const view_state_state = {
  worktime: new view/* ViewConfig */.i(device/* API_DEVICE_VIEW_WORKTIME_EXEC */.J2),
  voltmeter: new view/* ViewConfig */.i(device/* API_DEVICE_VIEW_VOLTMETER_EXEC */.ru),
  mazda: new view/* ViewConfig */.i(mazda/* API_MAZDA_VIEW_EXEC */.N5),
  teyesText: new view/* ViewConfig */.i(teyes/* API_TEYES_TEXT_VIEW_EXEC */.cH),
  bose: new view/* ViewConfig */.i(bose/* API_BOSE_VIEW_EXEC */.xT),
  climate: new view/* ViewConfig */.i(climate/* API_CLIMATE_VIEW_EXEC */.zE),
  doors: new view/* ViewConfig */.i(doors/* API_DOORS_VIEW_EXEC */.zD),
  engine: new engine/* EngineViews */.Du(),
  fuel: new fuel/* FuelViews */.hM(),
  movement: new movement/* MovementViews */.UA(),
  sensors: new sensors/* SensorsViews */.IS(),
  temperature: new view/* ViewConfig */.i(temperature/* API_TEMPERATURE_VIEW_EXEC */.EO),
  volume: new view/* ViewConfig */.i(volume/* API_VOLUME_VIEW_EXEC */.Kd),
  datetime: new view/* ViewConfig */.i(datetime/* API_DATETIME_VIEW_EXEC */.Bm)
};
/* harmony default export */ var view_state = (view_state_state);
;// CONCATENATED MODULE: ./src/store/modules/view/getters.ts
/**
 * Значения отображения времени работы устройства
 * @param {any} state
 */
const worktime = state => state.worktime;
/**
 * Значения отображения напряжения бортовой сети
 * @param {any} state
 */
const voltmeter = state => state.voltmeter;
/**
 * Значения отображения автомобиля
 * @param {any} state
 */
const view_getters_mazda = state => state.mazda;
/**
 * Значения отображения текста ГУ
 * @param {any} state
 */
const teyesText = state => state.teyesText;
/**
 * Значения отображения Bose
 * @param {any} state
 */
const view_getters_bose = state => state.bose;
/**
 * Значения отображения климата
 * @param {any} state
 */
const view_getters_climate = state => state.climate;
/**
 * Значения отображения дверей
 * @param {any} state
 */
const view_getters_doors = state => state.doors;
/**
 * Значения отображения ДВС
 * @param {any} state
 */
const view_getters_engine = state => state.engine;
/**
 * Значения отображения расхода
 * @param {any} state
 */
const view_getters_fuel = state => state.fuel;
/**
 * Значения отображения движения
 * @param {any} state
 */
const view_getters_movement = state => state.movement;
/**
 * Значения отображения датчиков
 * @param {any} state
 */
const view_getters_sensors = state => state.sensors;
/**
 * Значения отображения температуры
 * @param {any} state
 */
const view_getters_temperature = state => state.temperature;
/**
 * Значения отображения уровня звука
 * @param {any} state
 */
const view_getters_volume = state => state.volume;
/**
 * Значения отображения даты и времени
 * @param {any} state
 */
const view_getters_datetime = state => state.datetime;
;// CONCATENATED MODULE: ./src/store/modules/view/mutations.ts


/**
 * Записать значения отображения
 * @param {any} state
 * @param {IViewConfig} value
 */
const setView = (state, {
  exec,
  enabled,
  type,
  time,
  delay
}) => {
  const res = new view/* ViewConfig */.i(exec);
  res.enabled = enabled;
  res.type = type;
  res.time = time;
  res.delay = delay;
  canbus/* default */.A.query(res);
};
/**
 * Записать значения отображения времени работы устройства
 * @param {any} state
 * @param {DataView} data Данные
 */
const setWorktime = (state, data) => {
  state.worktime.set(data);
};
/**
 * Записать значения отображения напряжения бортовой сети
 * @param {any} state
 * @param {DataView} data Данные
 */
const setVoltmeter = (state, data) => {
  state.voltmeter.set(data);
};
/**
 * Записать значения отображения автомобиля
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setMazda = (state, data) => {
  state.mazda.set(data);
};
/**
 * Записать значения отображения текста ГУ
 * @param {any} state
 * @param {DataView} data Данные
 */
const setTeyesText = (state, data) => {
  state.teyesText.set(data);
};
/**
 * Записать значения отображения Bose
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setBose = (state, data) => {
  state.bose.set(data);
};
/**
 * Записать значения отображения климата
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setClimate = (state, data) => {
  state.climate.set(data);
};
/**
 * Записать значения отображения дверей
 * @param {any} state
 * @param {DataView} data Данные
 */
const view_mutations_setDoors = (state, data) => {
  state.doors.set(data);
};
/**
 * Записать значения отображения ДВС
 * @param {any} state
 * @param {DataView} data Данные
 */
const view_mutations_setEngine = (state, data) => {
  state.engine.set(data);
};
/**
 * Записать значения отображения расхода
 * @param {any} state
 * @param {DataView} data Данные
 */
const view_mutations_setFuel = (state, data) => {
  state.fuel.set(data);
};
/**
 * Записать значения отображения движения
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setMovement = (state, data) => {
  state.movement.set(data);
};
/**
 * Записать значения отображения датчиков
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setSensors = (state, data) => {
  state.sensors.set(data);
};
/**
 * Записать значения отображения температуры
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setTemperature = (state, data) => {
  state.temperature.set(data);
};
/**
 * Записать значения отображения уровня звука
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setVolume = (state, data) => {
  state.volume.set(data);
};
/**
 * Записать значения отображения даты и времени
 * @param {any} state
 * @param {DataView} data Данные
 */
const mutations_setDatetime = (state, data) => {
  state.datetime.set(data);
};
;// CONCATENATED MODULE: ./src/store/modules/view/index.ts



// import * as actions from "./actions";
/* harmony default export */ var modules_view = ({
  namespaced: true,
  state: view_state,
  getters: view_getters_namespaceObject,
  mutations: view_mutations_namespaceObject
  // actions
});
;// CONCATENATED MODULE: ./src/store/index.ts





const store = (0,vuex_esm_bundler/* createStore */.y$)({
  modules: {
    app: app,
    config: config,
    value: value,
    view: modules_view
  },
  strict: "production" === "development"
});
/* harmony default export */ var src_store = (store);

/***/ })

}]);