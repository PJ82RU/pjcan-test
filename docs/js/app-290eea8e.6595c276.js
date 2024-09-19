"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[348],{

/***/ 77503:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cp: function() { return /* binding */ arrayToHex; },
/* harmony export */   hL: function() { return /* binding */ toMac; },
/* harmony export */   nj: function() { return /* binding */ toHex; }
/* harmony export */ });
/**
 * Конвертирование числа в HEX
 * @param {number|BigInt} value Значение
 */
const toHex = value => {
  const res = value.toString(16);
  return res.length % 2 > 0 ? "0" + res : res;
};
/**
 * Конвертирование массива чисел в HEX
 * @param {(number|BigInt)[]} value Массив значений
 */
const arrayToHex = value => {
  let sha = "";
  value?.forEach(x => sha += toHex(x));
  return sha;
};
/**
 * Чтение mac-адреса
 * @param {BigInt} value Значение mac-адреса в числовом формате
 */
const toMac = value => {
  let result = "";
  let mac = toHex(value);
  if (mac.length < 12) mac = "0".repeat(12 - mac.length) + mac;
  for (let i = mac.length - 2; i >= 0; i -= 2) result += mac[i] + mac[i + 1] + (i > 0 ? ":" : "");
  return result;
};


/***/ }),

/***/ 1560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ createDebounce; }
/* harmony export */ });
/** Создать debounce */
const createDebounce = () => {
  let timeout;
  return (fn, delay) => {
    clearTimeout(timeout);
    if (delay > 0) timeout = setTimeout(() => fn(), delay);
  };
};


/***/ }),

/***/ 4322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94373);

// create an axios instance
const service = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: "/pjcan-test/",
  timeout: 30000
});
// request interceptor
service.interceptors.request.use(config => {
  config.params = config.params ?? {};
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});
// response interceptor
service.interceptors.response.use(response => {
  const data = response.data;
  if (!data) return Promise.reject(new Error("No data"));
  return data;
}, error => {
  console.log(error);
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__.A = (service);

/***/ }),

/***/ 22918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ RemainingTime; },
/* harmony export */   n: function() { return /* binding */ getFormatTime; }
/* harmony export */ });
/* harmony import */ var D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Чтение форматированного времени типа hh:mm:ss
 * @param {number|bigint} value Значение
 * @param {boolean} msec Миллисекунды или секунды
 */
const getFormatTime = (value, msec = true) => {
  let _msec = typeof value === "number" ? msec ? value / 1000 : value : msec ? Number(value / BigInt(1000)) : Number(value);
  const second = Math.floor(_msec % 60);
  _msec /= 60;
  const minute = Math.floor(_msec % 60);
  _msec /= 60;
  const _second = second < 10 ? "0" + second.toString() : second.toString();
  const _minute = minute < 10 ? "0" + minute.toString() : minute.toString();
  const _hour = _msec < 10 ? "0" + Math.floor(_msec).toString() : Math.floor(_msec).toString();
  return `${_hour}:${_minute}:${_second}`;
};
class RemainingTime {
  /** Текущая дата */
  get now() {
    return this._now;
  }
  /** Итого */
  get total() {
    return this._total;
  }
  /** Текущая позиция */
  get offset() {
    return this._offset;
  }
  /** Изменить текущую позицию */
  set offset(val) {
    const now = Date.now();
    const value = Math.floor((this._total - val) / (val - this._offset) * (now - this._now));
    if (value !== Infinity) {
      this._index++;
      if (this._index > this._countValues) this._index = 0;
      if (this._values.length <= this._index) this._values.push(value);else this._values[this._index] = value;
      this._offset = val;
      this._now = now;
    }
  }
  /** Последнее значение */
  get value() {
    return this._values[this._index];
  }
  /** Среднее значение */
  get avg() {
    if (this._values.length === 0) return 0;
    let result = 0;
    this._values.forEach(x => result += x);
    return Math.floor(result / this._values.length);
  }
  constructor(total, countValues = 10) {
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_now", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_total", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_offset", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_values", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_index", void 0);
    (0,D_Projects_PJ82_PJCAN_pjcan_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, "_countValues", void 0);
    this._now = Date.now();
    this._offset = 0;
    this._total = total;
    this._values = [];
    this._index = -1;
    this._countValues = countValues;
  }
  get() {
    return getFormatTime(this.avg);
  }
}


/***/ }),

/***/ 28481:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ views_buttons; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/index.vue?vue&type=template&id=d21e585a&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_settings_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("settings-card");
  const _component_flicking = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("flicking");
  const _component_button_definition_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("button-definition-dialog");
  const _component_button_edit_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("button-edit-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [$setup.configLoaded ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_flicking, {
    key: 0,
    ref: "flicking",
    class: "listSW1",
    options: {
      bound: true,
      align: 'prev'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.listWithoutEmpty, (item, index) => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: `button-item_${index}`,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(["mr-4", `flicking-${$setup.display}`])
      }, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_settings_card, {
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(`settings-card-${index}`),
        title: item.title,
        icon: item.icon,
        config: item.config,
        mode: $setup.isMode,
        onUpdate: $setup.onButtonConfigUpdate,
        onClick: $event => $setup.onButtonEdit(item)
      }, null, 8, ["class", "title", "icon", "config", "mode", "onUpdate", "onClick"])], 2);
    }), 128))]),
    _: 1
  }, 512)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_button_definition_dialog, {
    modelValue: $setup.definitionDialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.definitionDialog = $event),
    types: $setup.list,
    "value-id": $setup.value?.id,
    "value-resistance": $setup.value?.resistance,
    "onClick:apply": $setup.onButtonDefinitionApply
  }, null, 8, ["modelValue", "types", "value-id", "value-resistance", "onClick:apply"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_button_edit_dialog, {
    modelValue: $setup.addDialog,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.addDialog = $event),
    name: $setup.selectedItem?.title,
    press: $setup.selectedItem?.config?.exec[1],
    "value-resistance": $setup.value?.resistance,
    "resistance-min": $setup.selectedItem?.config?.resistanceMin,
    "resistance-max": $setup.selectedItem?.config?.resistanceMax,
    "onClick:apply": $setup.onButtonAddApply
  }, null, 8, ["modelValue", "name", "press", "value-resistance", "resistance-min", "resistance-max", "onClick:apply"])], 64);
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/display.mjs
var composables_display = __webpack_require__(68353);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/esm/index.js
var esm = __webpack_require__(63262);
// EXTERNAL MODULE: ./src/router/index.ts
var router = __webpack_require__(81459);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(81052);
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
// EXTERNAL MODULE: ./node_modules/@egjs/vue3-flicking/dist/flicking.esm.js + 1 modules
var flicking_esm = __webpack_require__(22180);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/SettingsCard.vue?vue&type=template&id=fabd0d36&scoped=true&ts=true

const _hoisted_1 = {
  class: "settings-card__mode-title"
};
function SettingsCardvue_type_template_id_fabd0d36_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("input-card-item");
                                                      
                                                            
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_card, {
    class: "settings-card",
    title: $props.title,
    custom: $props.icon,
    "onClick:custom": _cache[11] || (_cache[11] = $event => _ctx.$emit('click', $event))
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.resistanceMax > 0 ? $setup.resistanceMin + ' - ' + $setup.resistanceMax : '',
          title: _ctx.$t('buttons.resistance.title'),
          description: _ctx.$t('buttons.resistance.description'),
          disabled: !$props.config
        }, null, 8, ["value", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.pressSingle,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.pressSingle = $event),
          label: _ctx.$t('buttons.pressSingle.title'),
          items: $setup.functionsListWithoutMode,
          hint: _ctx.$t('buttons.pressSingle.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.extended,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.extended = $event),
          title: _ctx.$t('buttons.extended.title'),
          description: _ctx.$t('buttons.extended.description'),
          color: "primary",
          disabled: !$props.config
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.pressDual,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.pressDual = $event),
          label: _ctx.$t('buttons.pressDual.title'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressDual.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$setup.extended
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.pressTriple,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.pressTriple = $event),
          label: _ctx.$t('buttons.pressTriple.title'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressTriple.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$setup.extended
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.pressHold,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.pressHold = $event),
          label: _ctx.$t('buttons.pressHold.title'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressHold.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$setup.extended
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.hold,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.hold = $event),
          label: _ctx.$t('buttons.pressHold.time.title'),
          hint: _ctx.$t('buttons.pressHold.time.description'),
          min: 1,
          max: 255,
          disabled: !$props.config || !$setup.extended,
          onChange: _cache[6] || (_cache[6] = $event => _ctx.$emit('update', $props.config))
        }, null, 8, ["modelValue", "label", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-6"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("buttons.extendedMode")), 1)]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.modePressSingle,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $setup.modePressSingle = $event),
          label: _ctx.$t('buttons.pressSingle.title') + _ctx.$t('buttons.hintMode'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressSingle.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$props.mode
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.modePressDual,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $setup.modePressDual = $event),
          label: _ctx.$t('buttons.pressDual.title') + _ctx.$t('buttons.hintMode'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressDual.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$props.mode
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.modePressTriple,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $setup.modePressTriple = $event),
          label: _ctx.$t('buttons.pressTriple.title') + _ctx.$t('buttons.hintMode'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressTriple.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$props.mode
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.modePressHold,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => $setup.modePressHold = $event),
          label: _ctx.$t('buttons.pressHold.title') + _ctx.$t('buttons.hintMode'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressHold.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$props.config || !$props.mode
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "custom"]);
}

/* Vuetify */




;// CONCATENATED MODULE: ./src/views/buttons/components/SettingsCard.vue?vue&type=template&id=fabd0d36&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/components/cards/Card.vue + 6 modules
var Card = __webpack_require__(97361);
// EXTERNAL MODULE: ./src/components/cards/InputCardItem.vue + 6 modules
var InputCardItem = __webpack_require__(49243);
// EXTERNAL MODULE: ./src/components/common/NumberField.vue + 3 modules
var NumberField = __webpack_require__(20633);
// EXTERNAL MODULE: ./src/components/cards/SwitchCardItem.vue + 6 modules
var SwitchCardItem = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/models/pjcan/buttons/index.ts + 7 modules
var buttons = __webpack_require__(8871);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(21907);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/SettingsCard.vue?vue&type=script&lang=ts









/* harmony default export */ var SettingsCardvue_type_script_lang_ts = ({
  name: "SettingsCard",
  components: {
    IconCustom: IconCustom/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    Card: Card/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Заголовок */
    title: {
      type: String,
      required: true
    },
    /** Иконка */
    icon: String,
    /** Конфигурация кнопки */
    config: Object,
    /** Показывать параметры режима Mode */
    mode: Boolean
  },
  emits: ["update", "click"],
  setup(props, {
    emit
  }) {
    const {
      config
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      tm
    } = (0,vue_i18n/* useI18n */.s9)();
    const __config = (0,reactivity_esm_bundler/* ref */.KR)({});
    const copyConfig = () => {
      __config.value = {
        extended: config.value.extended,
        id: config.value.id,
        hold: config.value.hold,
        resistanceMin: config.value.resistanceMin,
        resistanceMax: config.value.resistanceMax,
        exec: [...config.value.exec],
        execMode: [...config.value.execMode]
      };
    };
    if (config.value) copyConfig();
    (0,runtime_core_esm_bundler/* watch */.wB)(config, () => copyConfig());
    /** Расширенный функционал кнопок */
    const extended = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.extended ?? false,
      set: val => {
        if (config.value) {
          __config.value.extended = val;
          emit("update", __config.value);
        }
      }
    });
    /** Время удержания кнопки, сек. */
    const hold = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.hold ?? 0,
      set: val => {
        if (config.value) __config.value.hold = val;
      }
    });
    /** Минимальное сопротивление кнопки */
    const resistanceMin = (0,runtime_core_esm_bundler/* computed */.EW)(() => __config.value?.resistanceMin ?? 0);
    /** Максимальное сопротивление кнопки */
    const resistanceMax = (0,runtime_core_esm_bundler/* computed */.EW)(() => __config.value?.resistanceMax ?? 0);
    /** Кнопка нажата один раз */
    const pressSingle = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.exec?.[buttons/* TButtonType */.hB.PRESS_SINGLE] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.exec[buttons/* TButtonType */.hB.PRESS_SINGLE] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Кнопка нажата два раза */
    const pressDual = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.exec?.[buttons/* TButtonType */.hB.PRESS_DUAL] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.exec[buttons/* TButtonType */.hB.PRESS_DUAL] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Кнопка нажата три раза */
    const pressTriple = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.exec?.[buttons/* TButtonType */.hB.PRESS_TRIPLE] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.exec[buttons/* TButtonType */.hB.PRESS_TRIPLE] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Удержание кнопки */
    const pressHold = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.exec?.[buttons/* TButtonType */.hB.PRESS_HOLD] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.exec[buttons/* TButtonType */.hB.PRESS_HOLD] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Кнопка нажата один раз в режиме Mode */
    const modePressSingle = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.execMode?.[buttons/* TButtonType */.hB.PRESS_SINGLE] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.execMode[buttons/* TButtonType */.hB.PRESS_SINGLE] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Кнопка нажата два раза в режиме Mode */
    const modePressDual = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.execMode?.[buttons/* TButtonType */.hB.PRESS_DUAL] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.execMode[buttons/* TButtonType */.hB.PRESS_DUAL] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Кнопка нажата три раза в режиме Mode */
    const modePressTriple = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.execMode?.[buttons/* TButtonType */.hB.PRESS_TRIPLE] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.execMode[buttons/* TButtonType */.hB.PRESS_TRIPLE] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Удержание кнопки в режиме Mode */
    const modePressHold = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => __config.value?.execMode?.[buttons/* TButtonType */.hB.PRESS_HOLD] ?? 0,
      set: val => {
        if (config.value) {
          __config.value.execMode[buttons/* TButtonType */.hB.PRESS_HOLD] = val;
          emit("update", __config.value);
        }
      }
    });
    /** Список функций без режима Mode */
    const functionsListWithoutMode = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const list = tm("buttons.functions");
      const result = [];
      for (const key in list) {
        if (key !== "1" && key !== "2") result.push({
          label: list[key],
          value: Number(key)
        });
      }
      return result;
    });
    /** Список функций */
    const functionsList = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const list = tm("buttons.functions");
      const result = [];
      for (const key in list) result.push({
        label: list[key],
        value: Number(key)
      });
      return result;
    });
    return {
      functionsListWithoutMode,
      functionsList,
      extended,
      hold,
      resistanceMin,
      resistanceMax,
      pressSingle,
      pressDual,
      pressTriple,
      pressHold,
      modePressSingle,
      modePressDual,
      modePressTriple,
      modePressHold
    };
  }
});
;// CONCATENATED MODULE: ./src/views/buttons/components/SettingsCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/SettingsCard.vue?vue&type=style&index=0&id=fabd0d36&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/buttons/components/SettingsCard.vue?vue&type=style&index=0&id=fabd0d36&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/views/buttons/components/SettingsCard.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(SettingsCardvue_type_script_lang_ts, [['render',SettingsCardvue_type_template_id_fabd0d36_scoped_true_ts_true_render],['__scopeId',"data-v-fabd0d36"]])

/* harmony default export */ var SettingsCard = (__exports__);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/ButtonDefinitionDialog.vue?vue&type=template&id=ac5b1bd4&scoped=true&ts=true

function ButtonDefinitionDialogvue_type_template_id_ac5b1bd4_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
                                                            
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visible = $event),
    "content-class": "button-definition-dialog",
    icon: "mdi-gesture-tap-button",
    title: _ctx.$t('buttons.definition.title'),
    width: "550px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          "model-value": $props.valueResistance,
          label: _ctx.$t('buttons.resistance.cur.title'),
          hint: _ctx.$t('buttons.resistance.cur.description'),
          readonly: ""
        }, null, 8, ["model-value", "label", "hint"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.id,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.id = $event),
          label: _ctx.$t('buttons.definition.type.title'),
          items: $setup.types,
          hint: _ctx.$t('buttons.definition.type.description'),
          variant: "underlined",
          "item-title": "title",
          "item-value": "id",
          "persistent-hint": ""
        }, null, 8, ["modelValue", "label", "items", "hint"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.resistanceMin,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.resistanceMin = $event),
          label: _ctx.$t('buttons.resistance.min.title'),
          hint: _ctx.$t('buttons.resistance.min.description')
        }, null, 8, ["modelValue", "label", "hint"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.resistanceMax,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.resistanceMax = $event),
          label: _ctx.$t('buttons.resistance.max.title'),
          hint: _ctx.$t('buttons.resistance.max.description')
        }, null, 8, ["modelValue", "label", "hint"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick,
      disabled: $setup.disabled
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1)]),
      _: 1
    }, 8, ["onClick", "disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[3] || (_cache[3] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(29761);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/ButtonDefinitionDialog.vue?vue&type=script&lang=ts



/* harmony default export */ var ButtonDefinitionDialogvue_type_script_lang_ts = ({
  name: "ButtonDefinitionDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Список типов/наименований кнопок */
    types: {
      type: Array,
      required: true
    },
    /** ID нажатой кнопки */
    valueId: Number,
    /** Сопротивление нажатой кнопки */
    valueResistance: Number
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      types,
      valueId,
      valueResistance
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const id = (0,reactivity_esm_bundler/* ref */.KR)(undefined);
    const resistanceMin = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const resistanceMax = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const disabled = (0,runtime_core_esm_bundler/* computed */.EW)(() => id.value === undefined);
    /** Обновление данных */
    const updateData = () => {
      id.value = valueId.value;
      const selectedType = types.value?.find(x => x.id === id.value);
      resistanceMin.value = selectedType?.config?.resistanceMin ?? 0;
      resistanceMax.value = selectedType?.config?.resistanceMax ?? 0;
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, () => updateData());
    (0,runtime_core_esm_bundler/* watch */.wB)(valueResistance, () => updateData());
    /** Применить */
    const onApplyClick = () => {
      visible.value = false;
      emit("click:apply", id.value, resistanceMin.value, resistanceMax.value);
    };
    return {
      visible,
      types,
      id,
      resistanceMin,
      resistanceMax,
      disabled,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/buttons/components/ButtonDefinitionDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/ButtonDefinitionDialog.vue?vue&type=style&index=0&id=ac5b1bd4&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/buttons/components/ButtonDefinitionDialog.vue?vue&type=style&index=0&id=ac5b1bd4&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/views/buttons/components/ButtonDefinitionDialog.vue




;


const ButtonDefinitionDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ButtonDefinitionDialogvue_type_script_lang_ts, [['render',ButtonDefinitionDialogvue_type_template_id_ac5b1bd4_scoped_true_ts_true_render],['__scopeId',"data-v-ac5b1bd4"]])

/* harmony default export */ var ButtonDefinitionDialog = (ButtonDefinitionDialog_exports_);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/ButtonEditDialog.vue?vue&type=template&id=5d8a23c3&ts=true

function ButtonEditDialogvue_type_template_id_5d8a23c3_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                                                                    
                                                      
                                                            
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.visible = $event),
    "content-class": "button-edit-dialog",
    icon: "mdi-plus-box",
    title: _ctx.$t($props.name?.length ? 'buttons.edit' : 'buttons.adding'),
    width: "550px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
          modelValue: $setup.modelName,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.modelName = $event),
          label: _ctx.$t('buttons.name'),
          variant: "underlined",
          "persistent-hint": ""
        }, null, 8, ["modelValue", "label"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.modelPress,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.modelPress = $event),
          label: _ctx.$t('buttons.pressSingle.title'),
          items: $setup.functionsList,
          hint: _ctx.$t('buttons.pressSingle.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": ""
        }, null, 8, ["modelValue", "label", "items", "hint"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.modelResistanceMin,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.modelResistanceMin = $event),
          label: _ctx.$t('buttons.resistance.min.title'),
          hint: _ctx.$t('buttons.resistance.min.description')
        }, null, 8, ["modelValue", "label", "hint"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.modelResistanceMax,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.modelResistanceMax = $event),
          label: _ctx.$t('buttons.resistance.max.title'),
          hint: _ctx.$t('buttons.resistance.max.description')
        }, null, 8, ["modelValue", "label", "hint"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick,
      disabled: $setup.disabled
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1)]),
      _: 1
    }, 8, ["onClick", "disabled"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[4] || (_cache[4] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1)]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */






;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/components/ButtonEditDialog.vue?vue&type=script&lang=ts






/* harmony default export */ var ButtonEditDialogvue_type_script_lang_ts = ({
  name: "ButtonEditDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Наименование кнопки */
    name: {
      type: String,
      default: ""
    },
    /** Функция нажатой кнопки */
    press: {
      type: Number,
      default: 0
    },
    /** Сопротивление нажатой кнопки */
    valueResistance: {
      type: Number,
      default: 0
    },
    /** Минимальное сопротивление */
    resistanceMin: {
      type: Number,
      default: 0
    },
    /** Максимальное сопротивление */
    resistanceMax: {
      type: Number,
      default: 0
    }
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, {
    emit
  }) {
    const {
      modelValue,
      name,
      press,
      valueResistance,
      resistanceMin,
      resistanceMax
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const {
      tm
    } = (0,vue_i18n/* useI18n */.s9)();
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => emit("update:modelValue", val)
    });
    const modelName = (0,reactivity_esm_bundler/* ref */.KR)("");
    const modelPress = (0,reactivity_esm_bundler/* ref */.KR)(buttons/* TButtonExec */.su.BUTTON_EXEC_NONE);
    const modelResistanceMin = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const modelResistanceMax = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const disabled = (0,runtime_core_esm_bundler/* computed */.EW)(() => !(modelName.value?.length > 0 && modelPress.value > 0 && modelResistanceMin.value < modelResistanceMax.value));
    (0,runtime_core_esm_bundler/* watch */.wB)(modelValue, val => {
      if (val) {
        modelName.value = name.value;
        modelPress.value = press.value;
        modelResistanceMin.value = resistanceMin.value;
        modelResistanceMax.value = resistanceMax.value;
        if (modelResistanceMin.value === 0 && modelResistanceMax.value === 0) {
          modelResistanceMin.value = valueResistance.value - 150;
          if (modelResistanceMin.value < 0) modelResistanceMin.value = 0;
          modelResistanceMax.value = valueResistance.value + 150;
        }
      }
    });
    /** Применить */
    const onApplyClick = () => {
      visible.value = false;
      emit("click:apply", modelName.value, modelPress.value, modelResistanceMin.value, modelResistanceMax.value);
    };
    /** Список функций */
    const functionsList = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const list = tm("buttons.functions");
      const result = [];
      for (const key in list) result.push({
        label: list[key],
        value: Number(key)
      });
      return result;
    });
    return {
      visible,
      disabled,
      modelName,
      modelPress,
      modelResistanceMin,
      modelResistanceMax,
      functionsList,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/buttons/components/ButtonEditDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/buttons/components/ButtonEditDialog.vue




;
const ButtonEditDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ButtonEditDialogvue_type_script_lang_ts, [['render',ButtonEditDialogvue_type_template_id_5d8a23c3_ts_true_render]])

/* harmony default export */ var ButtonEditDialog = (ButtonEditDialog_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/index.vue?vue&type=script&lang=ts












/* harmony default export */ var buttonsvue_type_script_lang_ts = ({
  name: "Buttons",
  components: {
    Flicking: flicking_esm/* default */.Ay,
    SettingsCard: SettingsCard,
    ButtonDefinitionDialog: ButtonDefinitionDialog,
    ButtonEditDialog: ButtonEditDialog
  },
  setup() {
    const {
      name: display
    } = (0,composables_display/* useDisplay */._F)();
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const flicking = (0,reactivity_esm_bundler/* ref */.KR)(null);
    (0,runtime_core_esm_bundler/* provide */.Gt)("flicking", flicking);
    const __type = (0,runtime_core_esm_bundler/* computed */.EW)(() => router/* default */.A.currentRoute.value.query?.type);
    const __getKey = type => {
      switch (type) {
        case "sw1":
          return {
            app: "app/sw1",
            set: "app/setSW1",
            read: "app/readSW1",
            write: "app/writeSW1",
            config: "config/sw1",
            setItem: "config/setSW1Item",
            setResistance: "config/setSW1Resistance",
            setProgramming: "config/setSW1Programming",
            value: "value/sw1"
          };
      }
    };
    const keys = (0,runtime_core_esm_bundler/* computed */.EW)(() => __getKey(__type.value));
    const configLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => keys.value && store/* default */.A.getters[keys.value.config].isData);
    const value = (0,runtime_core_esm_bundler/* computed */.EW)(() => keys.value ? store/* default */.A.getters[keys.value.value] : undefined);
    const isMode = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return keys.value && (store/* default */.A.getters[keys.value.config].items?.filter(x => x.extended)?.findIndex(x => x.exec.findIndex(y => y === buttons/* TButtonExec */.su.BUTTON_EXEC_ENTERING_MODE) >= 0) >= 0 ?? false);
    });
    const list = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const listWithoutEmpty = (0,runtime_core_esm_bundler/* computed */.EW)(() => list.value?.filter(x => x.title?.length));
    const definitionDialog = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const addDialog = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const selectedItem = (0,reactivity_esm_bundler/* ref */.KR)(undefined);
    /** Загрузка списка кнопок */
    const loadButtons = type => {
      const key = __getKey(type);
      if (key) {
        store/* default */.A.dispatch(key.read);
        list.value = store/* default */.A.getters[key.config].items.map(config => ({
          ...(store/* default */.A.getters[key.app]?.find(x => x.id === config.id) ?? {
            id: config.id,
            title: "",
            icon: ""
          }),
          config: {
            ...config
          }
        }));
      }
      return key;
    };
    // loadButtons(__type.value);
    /** Сохранить список кнопок */
    const saveButtons = () => {
      if (keys.value) {
        store/* default */.A.commit(keys.value.set, list.value);
        store/* default */.A.dispatch(keys.value.write);
      }
    };
    /** Изменение значений конфигурации кнопок */
    const onButtonConfigUpdate = item => {
      if (keys.value) store/* default */.A.commit(keys.value.setItem, item);
    };
    /**
     * Применить конфигурацию определенной кнопки
     * @param {number | undefined} id ID кнопки
     * @param {number} min Минимальное сопротивление кнопки
     * @param {number} max Максимальное сопротивление кнопки
     */
    const onButtonDefinitionApply = (id, min, max) => {
      if (id && keys.value) store/* default */.A.commit(keys.value?.setResistance, {
        id,
        min,
        max
      });
    };
    /**
     * Применить создание кнопки
     * @param {string} name Наименование/тип кнопки
     * @param {TButtonExec} press Функция кнопки
     * @param {number} min Минимальное значение сопротивления
     * @param {number} max Максимальное значение сопротивления
     */
    const onButtonAddApply = (name, press, min, max) => {
      if (selectedItem.value) {
        selectedItem.value.title = name;
        if (!selectedItem.value.icon?.length) selectedItem.value.icon = "mdi-card-outline";
        if (selectedItem.value.config) {
          const exec = [...selectedItem.value.config.exec];
          exec[1] = press;
          selectedItem.value.config = {
            ...selectedItem.value.config,
            exec,
            resistanceMin: min,
            resistanceMax: max
          };
        }
        saveButtons();
      }
    };
    /**
     * Редактирование кнопки
     * @param {IButtonCard} item Значения кнопки
     */
    const onButtonEdit = item => {
      selectedItem.value = item;
      addDialog.value = true;
    };
    /** Событие входящей конфигурации */
    const onButtonsConfigReceive = () => {
      if (keys.value) loadButtons(__type.value);
    };
    /** Событие нажатия кнопки */
    const onButtonsValueReceive = () => {
      if (keys.value) {
        const res = store/* default */.A.getters[keys.value.value];
        if (res.isData) {
          selectedItem.value = list.value?.find(x => x.id === res.id);
          if (selectedItem.value) {
            if (selectedItem.value.title?.length) definitionDialog.value = true;else addDialog.value = true;
          }
        }
      }
    };
    const onBegin = type => {
      const key = loadButtons(type);
      if (key) {
        canbus/* default */.A.addListener(buttons/* API_BUTTONS_SW1_CONFIG_EVENT */.dE, onButtonsConfigReceive);
        canbus/* default */.A.addListener(buttons/* API_BUTTON_SW1_VALUE_EVENT */.Du, onButtonsValueReceive);
        store/* default */.A.commit(key.setProgramming, true);
        setTimeout(() => esm/* toast */.oR.warning(t("help.buttons.notify"), {
          autoClose: false
        }), 1000);
      }
    };
    const onEnd = () => {
      canbus/* default */.A.removeListener(buttons/* API_BUTTONS_SW1_CONFIG_EVENT */.dE, onButtonsConfigReceive);
      canbus/* default */.A.removeListener(buttons/* API_BUTTON_SW1_VALUE_EVENT */.Du, onButtonsValueReceive);
      store/* default */.A.commit("config/setSW1Programming", false);
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(configLoaded, () => onBegin(__type.value));
    (0,runtime_core_esm_bundler/* watch */.wB)(__type, val => {
      if (val.name === "Buttons") {
        onEnd();
        onBegin(val);
      }
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      if (configLoaded.value) onBegin(__type.value);
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
      onEnd();
      esm/* toast */.oR.clearAll();
    });
    return {
      flicking,
      display,
      configLoaded,
      value,
      isMode,
      list,
      listWithoutEmpty,
      definitionDialog,
      addDialog,
      selectedItem,
      onButtonConfigUpdate,
      onButtonDefinitionApply,
      onButtonAddApply,
      onButtonEdit
    };
  }
});
;// CONCATENATED MODULE: ./src/views/buttons/index.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/buttons/index.vue?vue&type=style&index=0&id=d21e585a&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/buttons/index.vue?vue&type=style&index=0&id=d21e585a&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/views/buttons/index.vue




;


const buttons_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(buttonsvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-d21e585a"]])

/* harmony default export */ var views_buttons = (buttons_exports_);

/***/ }),

/***/ 71522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ onboard; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/index.vue?vue&type=template&id=f2a414e8&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flicking = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("flicking");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_flicking, {
    ref: "flicking",
    class: "onboard",
    options: {
      bound: true,
      align: 'prev'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.cards, item => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: item.name,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(["mr-4", `flicking-${$setup.display}`])
      }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.$y)(`${item.name}-card`)))], 2);
    }), 128))]),
    _: 1
  }, 512);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/display.mjs
var composables_display = __webpack_require__(68353);
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/esm/index.js
var esm = __webpack_require__(63262);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(81052);
// EXTERNAL MODULE: ./src/api/canbus.ts + 2 modules
var canbus = __webpack_require__(62774);
// EXTERNAL MODULE: ./node_modules/@egjs/vue3-flicking/dist/flicking.esm.js + 1 modules
var flicking_esm = __webpack_require__(22180);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/InfoCard.vue?vue&type=template&id=9e7e5260&ts=true

function InfoCardvue_type_template_id_9e7e5260_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-card-item");
                                                      
  const _component_input_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("input-card-item");
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "info-card",
    title: _ctx.$t('onboard.info.title'),
    menu: $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? $setup.menu : undefined,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.acc],
          title: _ctx.$t('onboard.info.acc.title'),
          description: _ctx.$t('onboard.info.acc.description'),
          "icon-name": ['key'],
          nodata: !$setup.sensorValueLoaded,
          disabled: !$setup.sensorViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.worktime,
          title: _ctx.$t('onboard.info.worktime.title'),
          description: _ctx.$t('onboard.info.worktime.description'),
          type: "time",
          nodata: !$setup.deviceValueLoaded,
          disabled: !$setup.worktimeViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), $setup.isVoltmeter ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 0,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.voltmeter,
          title: _ctx.$t('onboard.info.voltmeter.title'),
          description: _ctx.$t('onboard.info.voltmeter.description'),
          type: "volts",
          nodata: !$setup.deviceValueLoaded,
          disabled: !$setup.voltmeterViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BK || $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BL ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 1,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.temperatureOut,
          title: _ctx.$t('onboard.info.temperatureOut.title'),
          description: _ctx.$t('onboard.info.temperatureOut.description'),
          type: "temperature",
          nodata: !$setup.temperatureValueLoaded || $setup.temperatureOut === 0,
          disabled: !$setup.temperatureViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BK || $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BL ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 2,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.handbrake,
          title: _ctx.$t('onboard.info.handbrake.title'),
          description: _ctx.$t('onboard.info.handbrake.description'),
          color: "error",
          nodata: !$setup.sensorValueLoaded,
          disabled: !$setup.sensorViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.isReverse ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 3,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.reverse,
          title: _ctx.$t('onboard.info.reverse.title'),
          description: _ctx.$t('onboard.info.reverse.description'),
          color: "warning",
          nodata: !$setup.sensorValueLoaded,
          disabled: !$setup.sensorViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BK ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 4,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.seatbeltPassenger, $setup.seatbeltDriver],
          title: _ctx.$t('onboard.info.safetyBelt.title'),
          description: _ctx.$t('onboard.info.safetyBelt.description'),
          "icon-name": ['passenger', 'passenger'],
          colorsTrue: $setup.acc ? {
            primary: 'success'
          } : undefined,
          colorsFalse: $setup.acc ? {
            primary: 'error'
          } : undefined,
          nodata: !$setup.sensorValueLoaded,
          disabled: !$setup.sensorViewLoaded
        }, null, 8, ["model-value", "title", "description", "colorsTrue", "colorsFalse", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BK ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 5,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.signalRight, $setup.signalLeft],
          title: _ctx.$t('onboard.info.signal.title'),
          description: _ctx.$t('onboard.info.signal.description'),
          "icon-name": ['arrow-right', 'arrow-left'],
          colorsTrue: {
            primary: 'success'
          },
          nodata: !$setup.sensorValueLoaded,
          disabled: !$setup.sensorViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */



// EXTERNAL MODULE: ./src/components/cards/Card.vue + 6 modules
var Card = __webpack_require__(97361);
// EXTERNAL MODULE: ./src/components/cards/InputCardItem.vue + 6 modules
var InputCardItem = __webpack_require__(49243);
// EXTERNAL MODULE: ./src/components/cards/SwitchCardItem.vue + 6 modules
var SwitchCardItem = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/cards/IconCardItem.vue + 6 modules
var IconCardItem = __webpack_require__(63918);
// EXTERNAL MODULE: ./src/components/ViewSettingDialog.vue + 5 modules
var ViewSettingDialog = __webpack_require__(55374);
// EXTERNAL MODULE: ./src/models/pjcan/mazda/index.ts + 4 modules
var mazda = __webpack_require__(19164);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/InfoCard.vue?vue&type=script&lang=ts










/* harmony default export */ var InfoCardvue_type_script_lang_ts = ({
  name: "InfoCard",
  computed: {
    TCarModel() {
      return mazda/* TCarModel */.oB;
    }
  },
  components: {
    Card: Card/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    IconCardItem: IconCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const deviceValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/device"].isData);
    const sensorValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].isData);
    const temperatureValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/temperature"].isData);
    const worktimeViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/worktime"].isData);
    const voltmeterViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/voltmeter"].isData);
    const sensorViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/sensors"].isData);
    const temperatureViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/temperature"].isData);
    const isVoltmeter = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const hardware = store/* default */.A.getters["value/device"].hardware;
      return hardware.major === 4 && hardware.minor >= 1 || hardware.major > 4;
    });
    const isReverse = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const carModel = store/* default */.A.getters["config/carModel"];
      return carModel === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK || carModel === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL || carModel === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7 || carModel === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX7_REST || carModel === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9 || carModel === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST;
    });
    const acc = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].acc);
    const worktime = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/device"].worktime);
    const voltmeter = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/device"].voltmeter / 100);
    const temperatureIn = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/temperature"].in / 10);
    const temperatureOut = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/temperature"].out / 10);
    const handbrake = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].handbrake);
    const reverse = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].reverse);
    const seatbeltDriver = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].seatbeltDriver);
    const seatbeltPassenger = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].seatbeltPassenger);
    const signalLeft = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].turnSignalLeft);
    const signalRight = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/sensors"].turnSignalRight);
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = [{
        title: t("onboard.info.worktime.menu"),
        view: store/* default */.A.getters["view/worktime"],
        disabled: !worktimeViewLoaded.value
      }];
      if (isVoltmeter.value) {
        result.push({
          title: t("onboard.info.voltmeter.menu"),
          view: store/* default */.A.getters["view/voltmeter"],
          disabled: !voltmeterViewLoaded.value
        });
      }
      if (carModel.value === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL) {
        result.push({
          title: t("onboard.info.temperatureIn.menu"),
          view: store/* default */.A.getters["view/temperature"],
          disabled: !temperatureViewLoaded.value
        });
      }
      if (carModel.value === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK) {
        result.push({
          title: t("onboard.info.temperatureOut.menu"),
          view: store/* default */.A.getters["view/temperature"],
          disabled: !temperatureViewLoaded.value
        });
      }
      if (carModel.value === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK || carModel.value === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BL) {
        result.push({
          title: t("onboard.info.handbrake.menu"),
          view: store/* default */.A.getters["view/sensors"].handbrake,
          disabled: !sensorViewLoaded.value
        });
      }
      if (isReverse.value) {
        result.push({
          title: t("onboard.info.reverse.menu"),
          view: store/* default */.A.getters["view/sensors"].reverse,
          disabled: !sensorViewLoaded.value
        });
      }
      if (carModel.value === mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_3_BK) {
        result.push({
          title: t("onboard.info.safetyBelt.menu"),
          view: store/* default */.A.getters["view/sensors"].seatbelt,
          disabled: !sensorViewLoaded.value
        });
        result.push({
          title: t("onboard.info.signal.menu"),
          view: store/* default */.A.getters["view/sensors"].turnSignal,
          disabled: !sensorViewLoaded.value
        });
      }
      return result;
    });
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      menuVisible.value = true;
      menuSelected.value = item;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      deviceValueLoaded,
      sensorValueLoaded,
      temperatureValueLoaded,
      worktimeViewLoaded,
      voltmeterViewLoaded,
      sensorViewLoaded,
      temperatureViewLoaded,
      isVoltmeter,
      isReverse,
      acc,
      worktime,
      voltmeter,
      temperatureIn,
      temperatureOut,
      handbrake,
      reverse,
      seatbeltDriver,
      seatbeltPassenger,
      signalLeft,
      signalRight,
      carModel,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/InfoCard.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/views/onboard/components/InfoCard.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InfoCardvue_type_script_lang_ts, [['render',InfoCardvue_type_template_id_9e7e5260_ts_true_render]])

/* harmony default export */ var InfoCard = (__exports__);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/EngineCard.vue?vue&type=template&id=a45bc802&ts=true

function EngineCardvue_type_template_id_a45bc802_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-card-item");
                                                      
  const _component_input_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("input-card-item");
  const _component_progress_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("progress-card-item");
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  const _component_engine_config_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("engine-config-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "engine-card",
    title: _ctx.$t('onboard.engine.title'),
    menu: $setup.menu,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.enabled],
          title: _ctx.$t('onboard.engine.enabled.title'),
          description: _ctx.$t('onboard.engine.enabled.description'),
          "icon-name": ['start-stop'],
          nodata: !$setup.engineValueLoaded,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.rpm,
          title: _ctx.$t('onboard.engine.RPM.title'),
          description: _ctx.$t('onboard.engine.RPM.description'),
          nodata: !$setup.enabled,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.countRPM,
          title: _ctx.$t('onboard.engine.countRPM.title'),
          description: _ctx.$t('onboard.engine.countRPM.description'),
          nodata: !$setup.enabled,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.worktime,
          title: _ctx.$t('onboard.engine.worktime.title'),
          description: _ctx.$t('onboard.engine.worktime.description'),
          nodata: !$setup.enabled,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BK ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 0,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_progress_card_item, {
          value: $setup.load,
          title: _ctx.$t('onboard.engine.load.title'),
          description: _ctx.$t('onboard.engine.load.description'),
          nodata: !$setup.enabled,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_progress_card_item, {
          value: $setup.throttle,
          title: _ctx.$t('onboard.engine.throttle.title'),
          description: _ctx.$t('onboard.engine.throttle.description'),
          nodata: !$setup.enabled,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.coolant,
          title: _ctx.$t('onboard.engine.coolant.title'),
          description: _ctx.$t('onboard.engine.coolant.description'),
          type: "temperature",
          nodata: !$setup.enabled,
          disabled: !$setup.engineViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_engine_config_dialog, {
    modelValue: $setup.engineConfigVisible,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.engineConfigVisible = $event),
    "show-days": $setup.showDays,
    "total-worktime": $setup.totalWorktime,
    "total-count-r-p-m": $setup.totalCountRPM,
    disabled: !$setup.engineConfigLoaded,
    "onClick:apply": $setup.onEngineConfigApply
  }, null, 8, ["modelValue", "show-days", "total-worktime", "total-count-r-p-m", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */



// EXTERNAL MODULE: ./src/components/cards/ProgressCardItem.vue + 6 modules
var ProgressCardItem = __webpack_require__(14044);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.mjs + 1 modules
var VBtn = __webpack_require__(91696);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.mjs + 1 modules
var VIcon = __webpack_require__(79669);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/EngineConfigDialog.vue?vue&type=template&id=27b06bd7&ts=true

const _hoisted_1 = {
  key: 1
};
const _hoisted_2 = {
  key: 1
};
const _hoisted_3 = {
  key: 1
};
function EngineConfigDialogvue_type_template_id_27b06bd7_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
                                                        
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "engine-config",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visible = $event),
    title: _ctx.$t('onboard.engine.settings.title'),
    icon: "engine-statistic",
    width: "500px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.configShowDays,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.configShowDays = $event),
          title: _ctx.$t('onboard.engine.settings.showDays.' + (_ctx.$vuetify.display.xs ? 'titleShort' : 'title')),
          description: _ctx.$t('onboard.engine.settings.showDays.description'),
          disabled: $props.disabled
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.configTotalWorktime,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.configTotalWorktime = $event),
          label: _ctx.$t('onboard.engine.settings.worktime.title'),
          hint: _ctx.$t('onboard.engine.settings.worktime.description'),
          min: 0,
          disabled: $props.disabled
        }, null, 8, ["modelValue", "label", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.configTotalCountRPM,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.configTotalCountRPM = $event),
          label: _ctx.$t('onboard.engine.settings.countRPM.title'),
          hint: _ctx.$t('onboard.engine.settings.countRPM.description'),
          min: 0,
          disabled: $props.disabled
        }, null, 8, ["modelValue", "label", "hint", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "secondary",
      onClick: $setup.onResetClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[5] || (_cache[5] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-restart")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.reset")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[6] || (_cache[6] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-check")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", _hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[3] || (_cache[3] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[7] || (_cache[7] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-close")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1))]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





;// CONCATENATED MODULE: ./src/views/onboard/components/EngineConfigDialog.vue?vue&type=template&id=27b06bd7&ts=true

// EXTERNAL MODULE: ./src/layout/components/DialogTemplate.vue + 6 modules
var DialogTemplate = __webpack_require__(29761);
// EXTERNAL MODULE: ./src/components/common/NumberField.vue + 3 modules
var NumberField = __webpack_require__(20633);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/EngineConfigDialog.vue?vue&type=script&lang=ts




/* harmony default export */ var EngineConfigDialogvue_type_script_lang_ts = ({
  name: "EngineConfigDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Показывать дни в моточасах */
    showDays: Boolean,
    /** Счетчик моточасов, сек. */
    totalWorktime: Number,
    /** Счетчик коленчатого вала (RPM), об. */
    totalCountRPM: Number,
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, context) {
    const {
      modelValue,
      showDays,
      totalWorktime,
      totalCountRPM
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => context.emit("update:modelValue", val)
    });
    const configShowDays = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const configTotalWorktime = (0,reactivity_esm_bundler/* ref */.KR)(0);
    const configTotalCountRPM = (0,reactivity_esm_bundler/* ref */.KR)(0);
    (0,runtime_core_esm_bundler/* watch */.wB)(visible, val => {
      if (val) {
        configShowDays.value = showDays.value ?? false;
        configTotalWorktime.value = totalWorktime.value ?? 0;
        configTotalCountRPM.value = totalCountRPM.value ?? 0;
      }
    });
    /** Сбросить */
    const onResetClick = () => {
      configShowDays.value = false;
      configTotalWorktime.value = 0;
      configTotalCountRPM.value = 0;
    };
    /** Применить изменения и закрыть диалог */
    const onApplyClick = () => {
      visible.value = false;
      context.emit("click:apply", {
        showDays: configShowDays.value,
        totalWorktime: configTotalWorktime.value,
        totalCountRPM: configTotalCountRPM.value
      });
    };
    return {
      visible,
      configShowDays,
      configTotalWorktime,
      configTotalCountRPM,
      onResetClick,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/EngineConfigDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/EngineConfigDialog.vue




;
const EngineConfigDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(EngineConfigDialogvue_type_script_lang_ts, [['render',EngineConfigDialogvue_type_template_id_27b06bd7_ts_true_render]])

/* harmony default export */ var EngineConfigDialog = (EngineConfigDialog_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/EngineCard.vue?vue&type=script&lang=ts










/* harmony default export */ var EngineCardvue_type_script_lang_ts = ({
  name: "EngineCard",
  computed: {
    TCarModel() {
      return mazda/* TCarModel */.oB;
    }
  },
  components: {
    Card: Card/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    IconCardItem: IconCardItem/* default */.A,
    ProgressCardItem: ProgressCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A,
    EngineConfigDialog: EngineConfigDialog
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const engineConfigLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/engine"].isData);
    const engineValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].isData);
    const engineViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/engine"].isData);
    const showDays = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/engine"].showDays);
    const totalWorktime = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["config/engine"];
      return res.totalWorktime > 0 ? Math.round(Number(res.totalWorktime / 60n)) : 0;
    });
    const totalCountRPM = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["config/engine"];
      return res.totalCountRPM > 0 ? Math.round(Number(res.totalCountRPM / 1000n)) : 0;
    });
    const enabled = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].on);
    const rpm = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].rpm.toFixed());
    const countRPM = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].viewCountRPM.toString());
    const load = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].load / 1000);
    const worktime = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["value/engine"];
      const viewHours = !showDays.value ? res.viewHours + res.viewDays * 24 : res.viewHours;
      let result = showDays.value && res.viewDays > 0 ? res.viewDays + "." : "";
      result += (viewHours < 10 ? "0" : "") + viewHours + ":";
      result += (res.viewMinutes < 10 ? "0" : "") + res.viewMinutes + ":";
      result += (res.viewSeconds < 10 ? "0" : "") + res.viewSeconds;
      return result;
    });
    const throttle = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].throttle / 100);
    const coolant = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].coolant);
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("onboard.engine.settings.menu")
    }, {
      title: t("onboard.engine.enabled.menu"),
      view: store/* default */.A.getters["view/engine"].enabled,
      disabled: !engineViewLoaded.value
    }, {
      title: t("onboard.engine.RPM.menu"),
      view: store/* default */.A.getters["view/engine"].rpm,
      disabled: !engineViewLoaded.value
    }, {
      title: t("onboard.engine.countRPM.menu"),
      view: store/* default */.A.getters["view/engine"].totalCountRPM,
      disabled: !engineViewLoaded.value
    }, {
      title: t("onboard.engine.load.menu"),
      view: store/* default */.A.getters["view/engine"].load,
      disabled: !engineViewLoaded.value
    }, {
      title: t("onboard.engine.worktime.menu"),
      view: store/* default */.A.getters["view/engine"].totalWorktime,
      disabled: !engineViewLoaded.value
    }, {
      title: t("onboard.engine.throttle.menu"),
      view: store/* default */.A.getters["view/engine"].throttle,
      disabled: !engineViewLoaded.value
    }, {
      title: t("onboard.engine.coolant.menu"),
      view: store/* default */.A.getters["view/engine"].coolant,
      disabled: !engineViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    const engineConfigVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      if (item.view) {
        menuVisible.value = true;
        menuSelected.value = item;
      } else engineConfigVisible.value = true;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    /** Применить конфигурацию ДВС
     * @param {any} value Новая конфигурация ДВС
     */
    const onEngineConfigApply = value => {
      store/* default */.A.commit("config/setEngineConfig", {
        showDays: value.showDays,
        totalWorktime: BigInt(value.totalWorktime) * 60n,
        totalCountRPM: BigInt(value.totalCountRPM) * 1000n
      });
    };
    return {
      engineConfigLoaded,
      engineValueLoaded,
      engineViewLoaded,
      enabled,
      rpm,
      countRPM,
      load,
      worktime,
      throttle,
      coolant,
      showDays,
      totalWorktime,
      totalCountRPM,
      carModel,
      menu,
      menuVisible,
      menuSelected,
      engineConfigVisible,
      onMenuClick,
      onViewApply,
      onEngineConfigApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/EngineCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/EngineCard.vue




;
const EngineCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(EngineCardvue_type_script_lang_ts, [['render',EngineCardvue_type_template_id_a45bc802_ts_true_render]])

/* harmony default export */ var EngineCard = (EngineCard_exports_);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/FuelCard.vue?vue&type=template&id=93d84b7e&ts=true

function FuelCardvue_type_template_id_93d84b7e_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("input-card-item");
                                                      
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  const _component_fuel_config_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("fuel-config-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "fuel-card",
    title: _ctx.$t('onboard.fuel.title'),
    menu: $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? $setup.menu : undefined,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.current,
          title: _ctx.$t('onboard.fuel.current.title'),
          description: _ctx.$t('onboard.fuel.current.description'),
          nodata: !$setup.fuelValueLoaded || Number($setup.current) <= 0,
          disabled: !$setup.fuelViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.avg,
          title: _ctx.$t('onboard.fuel.avg.title'),
          description: _ctx.$t('onboard.fuel.avg.description'),
          nodata: !$setup.fuelValueLoaded || Number($setup.avg) <= 0,
          disabled: !$setup.fuelViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_view_setting_dialog, {
    key: 0,
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_fuel_config_dialog, {
    modelValue: $setup.fuelConfigVisible,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.fuelConfigVisible = $event),
    ratio: $setup.ratio,
    disabled: !$setup.fuelConfigLoaded,
    "onClick:apply": $setup.onFuelConfigApply
  }, null, 8, ["modelValue", "ratio", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */



;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/FuelConfigDialog.vue?vue&type=template&id=07dc1883&ts=true

const FuelConfigDialogvue_type_template_id_07dc1883_ts_true_hoisted_1 = {
  key: 1
};
const FuelConfigDialogvue_type_template_id_07dc1883_ts_true_hoisted_2 = {
  key: 1
};
const FuelConfigDialogvue_type_template_id_07dc1883_ts_true_hoisted_3 = {
  key: 1
};
function FuelConfigDialogvue_type_template_id_07dc1883_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_number_field = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("number-field");
                                                      
                                                      
                                                        
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "fuel-config",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.visible = $event),
    title: _ctx.$t('onboard.fuel.settings.title'),
    icon: "engine-statistic",
    width: "500px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_number_field, {
          modelValue: $setup.configRatio,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.configRatio = $event),
          label: _ctx.$t('onboard.fuel.settings.ratio.title'),
          hint: _ctx.$t('onboard.fuel.settings.ratio.description'),
          min: 0,
          max: 1,
          disabled: $props.disabled
        }, null, 8, ["modelValue", "label", "hint", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "secondary",
      onClick: $setup.onResetClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[3] || (_cache[3] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-restart")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", FuelConfigDialogvue_type_template_id_07dc1883_ts_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.reset")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[4] || (_cache[4] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-check")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", FuelConfigDialogvue_type_template_id_07dc1883_ts_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[1] || (_cache[1] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[5] || (_cache[5] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-close")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", FuelConfigDialogvue_type_template_id_07dc1883_ts_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1))]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





;// CONCATENATED MODULE: ./src/views/onboard/components/FuelConfigDialog.vue?vue&type=template&id=07dc1883&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/FuelConfigDialog.vue?vue&type=script&lang=ts




/* harmony default export */ var FuelConfigDialogvue_type_script_lang_ts = ({
  name: "FuelConfigDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Коэффициент 0.001 до 1 */
    ratio: Number,
    /** Выкл. */
    disabled: Boolean
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, context) {
    const {
      modelValue,
      ratio
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => context.emit("update:modelValue", val)
    });
    const configRatio = (0,reactivity_esm_bundler/* ref */.KR)(0);
    (0,runtime_core_esm_bundler/* watch */.wB)(visible, val => {
      if (val) configRatio.value = ratio.value ?? 1;
    });
    /** Сбросить */
    const onResetClick = () => {
      configRatio.value = 1;
    };
    /** Применить изменения и закрыть диалог */
    const onApplyClick = () => {
      visible.value = false;
      context.emit("click:apply", configRatio.value);
    };
    return {
      visible,
      configRatio,
      onResetClick,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/FuelConfigDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/FuelConfigDialog.vue




;
const FuelConfigDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(FuelConfigDialogvue_type_script_lang_ts, [['render',FuelConfigDialogvue_type_template_id_07dc1883_ts_true_render]])

/* harmony default export */ var FuelConfigDialog = (FuelConfigDialog_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/FuelCard.vue?vue&type=script&lang=ts








/* harmony default export */ var FuelCardvue_type_script_lang_ts = ({
  name: "FuelCard",
  computed: {
    TCarModel() {
      return mazda/* TCarModel */.oB;
    }
  },
  components: {
    Card: Card/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A,
    FuelConfigDialog: FuelConfigDialog
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const fuelConfigLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/fuel"].isData);
    const fuelValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/fuel"].isData);
    const fuelViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/fuel"].isData);
    const ratio = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/fuel"].ratio / 1000);
    const current = (0,runtime_core_esm_bundler/* computed */.EW)(() => (store/* default */.A.getters["value/fuel"].current / 10).toFixed(1));
    const avg = (0,runtime_core_esm_bundler/* computed */.EW)(() => (store/* default */.A.getters["value/fuel"].avg / 10).toFixed(1));
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("onboard.fuel.settings.menu"),
      disabled: !fuelConfigLoaded.value
    }, {
      title: t("onboard.fuel.current.menu"),
      view: store/* default */.A.getters["view/fuel"].current,
      disabled: !fuelViewLoaded.value
    }, {
      title: t("onboard.fuel.avg.menu"),
      view: store/* default */.A.getters["view/fuel"].avg,
      disabled: !fuelViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    const fuelConfigVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      if (item.view) {
        menuVisible.value = true;
        menuSelected.value = item;
      } else fuelConfigVisible.value = true;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    /** Применить конфигурацию расхода
     * @param {number} ratio Новое значение
     * */
    const onFuelConfigApply = ratio => {
      store/* default */.A.commit("config/setFuelRatio", ratio * 1000);
    };
    return {
      fuelConfigLoaded,
      fuelViewLoaded,
      fuelValueLoaded,
      current,
      avg,
      ratio,
      carModel,
      menu,
      menuVisible,
      menuSelected,
      fuelConfigVisible,
      onMenuClick,
      onViewApply,
      onFuelConfigApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/FuelCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/FuelCard.vue




;
const FuelCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(FuelCardvue_type_script_lang_ts, [['render',FuelCardvue_type_template_id_93d84b7e_ts_true_render]])

/* harmony default export */ var FuelCard = (FuelCard_exports_);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/MovementCard.vue?vue&type=template&id=699d7dc4&ts=true

function MovementCardvue_type_template_id_699d7dc4_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("input-card-item");
                                                      
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "movement-card",
    title: _ctx.$t('onboard.movement.title'),
    menu: $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? $setup.menu : undefined,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.speed,
          title: _ctx.$t('onboard.movement.speed.title'),
          description: _ctx.$t('onboard.movement.speed.description'),
          nodata: !$setup.isSpeed,
          disabled: !$setup.movementViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.speedAVG,
          title: _ctx.$t('onboard.movement.speedAVG.title'),
          description: _ctx.$t('onboard.movement.speedAVG.description'),
          nodata: !$setup.isSpeedAVG,
          disabled: !$setup.movementViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.restWay,
          title: _ctx.$t('onboard.movement.restWay.title'),
          description: _ctx.$t('onboard.movement.restWay.description'),
          nodata: !$setup.isRestWay,
          disabled: !$setup.movementViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_view_setting_dialog, {
    key: 0,
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)], 64);
}

/* Vuetify */



;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/MovementCard.vue?vue&type=script&lang=ts







/* harmony default export */ var MovementCardvue_type_script_lang_ts = ({
  name: "MovementCard",
  computed: {
    TCarModel() {
      return mazda/* TCarModel */.oB;
    }
  },
  components: {
    Card: Card/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const movementValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/movement"].isData);
    const movementViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/movement"].isData);
    const speed = (0,runtime_core_esm_bundler/* computed */.EW)(() => (store/* default */.A.getters["value/movement"].speed / 100).toFixed(2));
    const speedAVG = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/movement"].speedAVG.toFixed(0));
    const restWay = (0,runtime_core_esm_bundler/* computed */.EW)(() => (store/* default */.A.getters["value/movement"].restWay / 100).toFixed(0));
    const isSpeed = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/engine"].on);
    const isSpeedAVG = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/movement"].speedAVG > 0);
    const isRestWay = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/movement"].restWay > 0);
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("onboard.movement.speed.menu"),
      view: store/* default */.A.getters["view/movement"].speed,
      disabled: !movementViewLoaded.value
    }, {
      title: t("onboard.movement.speedAVG.menu"),
      view: store/* default */.A.getters["view/movement"].speedAVG,
      disabled: !movementViewLoaded.value
    }, {
      title: t("onboard.movement.restWay.menu"),
      view: store/* default */.A.getters["view/movement"].restWay,
      disabled: !movementViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      menuVisible.value = true;
      menuSelected.value = item;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      movementViewLoaded,
      movementValueLoaded,
      speed,
      speedAVG,
      restWay,
      isSpeed,
      isSpeedAVG,
      isRestWay,
      carModel,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/MovementCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/MovementCard.vue




;
const MovementCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(MovementCardvue_type_script_lang_ts, [['render',MovementCardvue_type_template_id_699d7dc4_ts_true_render]])

/* harmony default export */ var MovementCard = (MovementCard_exports_);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/DoorsCard.vue?vue&type=template&id=2b511d66&ts=true

function DoorsCardvue_type_template_id_2b511d66_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  const _component_doors_config_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("doors-config-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "doors-card",
    title: _ctx.$t('onboard.doors.title'),
    menu: $setup.menu,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.doorFL,
          title: _ctx.$t('onboard.doors.doorFL.title'),
          description: _ctx.$t('onboard.doors.doorFL.description'),
          color: "error",
          nodata: !$setup.doorsValueLoaded,
          disabled: !$setup.doorsViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.doorFR,
          title: _ctx.$t('onboard.doors.doorFR.title'),
          description: _ctx.$t('onboard.doors.doorFR.description'),
          color: "error",
          nodata: !$setup.doorsValueLoaded,
          disabled: !$setup.doorsViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.doorBL,
          title: _ctx.$t('onboard.doors.doorBL.title'),
          description: _ctx.$t('onboard.doors.doorBL.description'),
          color: "error",
          nodata: !$setup.doorsValueLoaded,
          disabled: !$setup.doorsViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.doorBR,
          title: _ctx.$t('onboard.doors.doorBR.title'),
          description: _ctx.$t('onboard.doors.doorBR.description'),
          color: "error",
          nodata: !$setup.doorsValueLoaded,
          disabled: !$setup.doorsViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.trunk,
          title: _ctx.$t('onboard.doors.trunk.title'),
          description: _ctx.$t('onboard.doors.trunk.description'),
          color: "error",
          nodata: !$setup.doorsValueLoaded,
          disabled: !$setup.doorsViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_doors_config_dialog, {
    modelValue: $setup.doorsConfigVisible,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.doorsConfigVisible = $event),
    "front-reverse": $setup.doorsConfig.frontReverse,
    "back-reverse": $setup.doorsConfig.backReverse,
    "front-back-reverse": $setup.doorsConfig.frontBackReverse,
    "onClick:apply": $setup.onConfigApply
  }, null, 8, ["modelValue", "front-reverse", "back-reverse", "front-back-reverse", "onClick:apply"])], 64);
}

/* Vuetify */



;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/DoorsConfigDialog.vue?vue&type=template&id=6d456e71&ts=true

const DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_hoisted_1 = {
  key: 1
};
const DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_hoisted_2 = {
  key: 1
};
const DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_hoisted_3 = {
  key: 1
};
function DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
                                                      
                                                        
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "doors-config",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.visible = $event),
    title: _ctx.$t('onboard.doors.settings.title'),
    icon: "door",
    width: "500px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.configFrontReverse,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.configFrontReverse = $event),
          title: _ctx.$t('onboard.doors.settings.frontReverse.title'),
          description: _ctx.$t('onboard.doors.settings.frontReverse.description')
        }, null, 8, ["modelValue", "title", "description"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.configBackReverse,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.configBackReverse = $event),
          title: _ctx.$t('onboard.doors.settings.backReverse.title'),
          description: _ctx.$t('onboard.doors.settings.backReverse.description')
        }, null, 8, ["modelValue", "title", "description"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.configFrontBackReverse,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.configFrontBackReverse = $event),
          title: _ctx.$t('onboard.doors.settings.frontBackReverse.title'),
          description: _ctx.$t('onboard.doors.settings.frontBackReverse.description')
        }, null, 8, ["modelValue", "title", "description"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "secondary",
      onClick: $setup.onResetClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[5] || (_cache[5] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-restart")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.reset")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[6] || (_cache[6] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-check")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[3] || (_cache[3] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[7] || (_cache[7] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-close")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1))]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





;// CONCATENATED MODULE: ./src/views/onboard/components/DoorsConfigDialog.vue?vue&type=template&id=6d456e71&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/DoorsConfigDialog.vue?vue&type=script&lang=ts



/* harmony default export */ var DoorsConfigDialogvue_type_script_lang_ts = ({
  name: "DoorsConfigDialog",
  components: {
    DialogTemplate: DialogTemplate/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Состояние: Поменять местами передние двери */
    frontReverse: Boolean,
    /** Состояние: Поменять местами задние двери */
    backReverse: Boolean,
    /** Состояние: Поменять местами передние и задние двери */
    frontBackReverse: Boolean
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, context) {
    const {
      modelValue,
      frontReverse,
      backReverse,
      frontBackReverse
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => context.emit("update:modelValue", val)
    });
    const configFrontReverse = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const configBackReverse = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const configFrontBackReverse = (0,reactivity_esm_bundler/* ref */.KR)(false);
    (0,runtime_core_esm_bundler/* watch */.wB)(visible, val => {
      if (val) onResetClick();
    });
    /** Сбросить */
    const onResetClick = () => {
      configFrontReverse.value = frontReverse.value;
      configBackReverse.value = backReverse.value;
      configFrontBackReverse.value = frontBackReverse.value;
    };
    /** Применить изменения и закрыть диалог */
    const onApplyClick = () => {
      visible.value = false;
      context.emit("click:apply", configFrontReverse.value, configBackReverse.value, configFrontBackReverse.value);
    };
    return {
      visible,
      configFrontReverse,
      configBackReverse,
      configFrontBackReverse,
      onResetClick,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/DoorsConfigDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/DoorsConfigDialog.vue




;
const DoorsConfigDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DoorsConfigDialogvue_type_script_lang_ts, [['render',DoorsConfigDialogvue_type_template_id_6d456e71_ts_true_render]])

/* harmony default export */ var DoorsConfigDialog = (DoorsConfigDialog_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/DoorsCard.vue?vue&type=script&lang=ts







/* harmony default export */ var DoorsCardvue_type_script_lang_ts = ({
  name: "DoorsCard",
  components: {
    DoorsConfigDialog: DoorsConfigDialog,
    Card: Card/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const doorsValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/doors"].isData);
    const doorsViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/doors"].isData);
    const doorFL = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/doors"].frontLeft);
    const doorFR = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/doors"].frontRight);
    const doorBL = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/doors"].backLeft);
    const doorBR = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/doors"].backRight);
    const trunk = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/doors"].trunk);
    const doorsConfigVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const doorsConfig = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/doors"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("onboard.doors.settings.title")
    }, {
      title: t("onboard.doors.menu"),
      view: store/* default */.A.getters["view/doors"],
      disabled: !doorsViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      if (item.view) {
        menuVisible.value = true;
        menuSelected.value = item;
      } else doorsConfigVisible.value = true;
    };
    /**
     * Применить конфигурацию
     * @param {boolean} frontReverse Поменять местами передние двери
     * @param {boolean} backReverse Поменять местами задние двери
     * @param {boolean} frontBackReverse Поменять местами передние с задними дверьми
     */
    const onConfigApply = (frontReverse, backReverse, frontBackReverse) => {
      store/* default */.A.commit("config/setDoorsConfig", {
        frontReverse,
        backReverse,
        frontBackReverse
      });
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      doorsViewLoaded,
      doorsValueLoaded,
      doorFL,
      doorFR,
      doorBL,
      doorBR,
      trunk,
      doorsConfigVisible,
      doorsConfig,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onConfigApply,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/DoorsCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/DoorsCard.vue




;
const DoorsCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DoorsCardvue_type_script_lang_ts, [['render',DoorsCardvue_type_template_id_2b511d66_ts_true_render]])

/* harmony default export */ var DoorsCard = (DoorsCard_exports_);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/ClimateCard.vue?vue&type=template&id=05320176&ts=true

function ClimateCardvue_type_template_id_05320176_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-card-item");
                                                      
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
  const _component_input_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("input-card-item");
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "climate-card",
    title: _ctx.$t('onboard.climate.title'),
    menu: $setup.menu,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.enabled],
          title: _ctx.$t('onboard.climate.enabled.title'),
          description: _ctx.$t('onboard.climate.enabled.description'),
          "icon-name": ['climate'],
          rotation: $setup.rotation,
          nodata: !$setup.climateValueLoaded,
          disabled: !$setup.climateViewLoaded
        }, null, 8, ["model-value", "title", "description", "rotation", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.autoMode,
          title: _ctx.$t('onboard.climate.autoMode.title'),
          description: _ctx.$t('onboard.climate.autoMode.description'),
          color: "success",
          nodata: !$setup.climateValueLoaded,
          disabled: !$setup.climateViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          "model-value": $setup.ac,
          title: _ctx.$t('onboard.climate.ac.title'),
          description: _ctx.$t('onboard.climate.ac.description'),
          color: "success",
          nodata: !$setup.climateValueLoaded,
          disabled: !$setup.climateViewLoaded
        }, null, 8, ["model-value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_input_card_item, {
          value: $setup.temperature,
          title: _ctx.$t('onboard.climate.temperature.title'),
          description: _ctx.$t('onboard.climate.temperature.description'),
          type: "temperature",
          nodata: !$setup.climateValueLoaded || $setup.temperature <= 0,
          disabled: !$setup.climateViewLoaded
        }, null, 8, ["value", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.airEnabled],
          title: _ctx.$t('onboard.climate.air.title'),
          description: _ctx.$t('onboard.climate.air.description'),
          "icon-name": [$setup.airIconName],
          nodata: !$setup.climateValueLoaded,
          disabled: !$setup.climateViewLoaded
        }, null, 8, ["model-value", "title", "description", "icon-name", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          "model-value": [$setup.blowWindshield, $setup.blowEnabled],
          title: _ctx.$t('onboard.climate.blow.title'),
          description: _ctx.$t('onboard.climate.blow.description'),
          "icon-name": ['blow-windshield', $setup.blowName],
          margin: 10,
          nodata: !$setup.climateValueLoaded,
          disabled: !$setup.climateViewLoaded
        }, null, 8, ["model-value", "title", "description", "icon-name", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */



;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/ClimateCard.vue?vue&type=script&lang=ts








/* harmony default export */ var ClimateCardvue_type_script_lang_ts = ({
  name: "ClimateCard",
  components: {
    Card: Card/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    IconCardItem: IconCardItem/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const climateValueLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/climate"].isData);
    const climateViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/climate"].isData);
    const enabled = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/climate"].on);
    const rotation = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["value/climate"];
      return res.airRate > 0 && res.airRate < 8 ? 7 - res.airRate : 0;
    });
    const autoMode = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/climate"].automode);
    const ac = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/climate"].ac);
    const temperature = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["value/climate"];
      return res.temperature > 0 ? res.temperature / 10 : 0;
    });
    const airEnabled = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["value/climate"];
      return res.airInside || res.airOutside;
    });
    const airIconName = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/climate"].airInside ? "air-inside" : "air-outside");
    const blowEnabled = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["value/climate"];
      return res.airDBody || res.airDLegs;
    });
    const blowName = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const res = store/* default */.A.getters["value/climate"];
      return res.airDLegs && res.airDBody ? "blow-feet-body" : res.airDLegs ? "blow-feet" : res.airDBody ? "blow-body" : "blow-none";
    });
    const blowWindshield = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["value/climate"].airDWindshield);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("onboard.climate.menu"),
      view: store/* default */.A.getters["view/climate"],
      disabled: !climateViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      menuVisible.value = true;
      menuSelected.value = item;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      climateValueLoaded,
      climateViewLoaded,
      enabled,
      rotation,
      autoMode,
      ac,
      temperature,
      airEnabled,
      airIconName,
      blowEnabled,
      blowName,
      blowWindshield,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/ClimateCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/ClimateCard.vue




;
const ClimateCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ClimateCardvue_type_script_lang_ts, [['render',ClimateCardvue_type_template_id_05320176_ts_true_render]])

/* harmony default export */ var ClimateCard = (ClimateCard_exports_);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/BoseCard.vue?vue&type=template&id=64d5de1c&ts=true

function BoseCardvue_type_template_id_64d5de1c_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-card-item");
                                                      
  const _component_slider_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("slider-card-item");
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
  const _component_select_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("select-card-item");
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  const _component_bose_start_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("bose-start-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "climate-card",
    title: _ctx.$t('onboard.bose.title'),
    menu: $setup.menu,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_card_item, {
          modelValue: $setup.enabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.enabled = $event),
          title: _ctx.$t('onboard.bose.enabled.title'),
          description: _ctx.$t('onboard.bose.enabled.description'),
          "icon-name": ['bose'],
          nodata: !$setup.boseConfigLoaded,
          disabled: !$setup.boseViewLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_slider_card_item, {
          modelValue: $setup.volume,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.volume = $event),
          title: _ctx.$t('onboard.volume.level.title'),
          description: _ctx.$t('onboard.volume.level.description'),
          max: 63,
          nodata: !$setup.volumeConfigLoaded,
          disabled: !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.mute,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.mute = $event),
          title: _ctx.$t('onboard.volume.mute.title'),
          description: _ctx.$t('onboard.volume.mute.description'),
          color: "warning",
          nodata: !$setup.volumeConfigLoaded,
          disabled: !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.audioPLT,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.audioPLT = $event),
          title: _ctx.$t('onboard.bose.audioPLT.title'),
          description: _ctx.$t('onboard.bose.audioPLT.description'),
          color: "success",
          nodata: !$setup.boseConfigLoaded,
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_select_card_item, {
          modelValue: $setup.centerPoint,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.centerPoint = $event),
          title: _ctx.$t('onboard.bose.centerPoint.title'),
          description: _ctx.$t('onboard.bose.centerPoint.description'),
          items: $setup.centerPointList,
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "items", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_slider_card_item, {
          modelValue: $setup.balance,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.balance = $event),
          title: _ctx.$t('onboard.bose.balance.title'),
          description: _ctx.$t('onboard.bose.balance.description'),
          min: -8,
          max: 8,
          "prepend-icon": "volume-l",
          "append-icon": "volume-r",
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_slider_card_item, {
          modelValue: $setup.fade,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.fade = $event),
          title: _ctx.$t('onboard.bose.fade.title'),
          description: _ctx.$t('onboard.bose.fade.description'),
          min: -8,
          max: 8,
          "prepend-icon": "volume-fade-r",
          "append-icon": "volume-fade-f",
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_slider_card_item, {
          modelValue: $setup.treble,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $setup.treble = $event),
          title: _ctx.$t('onboard.bose.treble.title'),
          description: _ctx.$t('onboard.bose.treble.description'),
          min: -6,
          max: 6,
          "prepend-icon-mdi": "mdi-volume-medium",
          "append-icon-mdi": "mdi-volume-high",
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_slider_card_item, {
          modelValue: $setup.bass,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $setup.bass = $event),
          title: _ctx.$t('onboard.bose.bass.title'),
          description: _ctx.$t('onboard.bose.bass.description'),
          min: -6,
          max: 6,
          "prepend-icon-mdi": "mdi-volume-medium",
          "append-icon-mdi": "mdi-volume-high",
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.wow,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $setup.wow = $event),
          title: _ctx.$t('onboard.bose.wow.title'),
          description: _ctx.$t('onboard.bose.wow.description'),
          color: "success",
          nodata: !$setup.boseConfigLoaded,
          disabled: !$setup.boseViewLoaded || !$setup.enabled[0]
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_bose_start_dialog, {
    modelValue: $setup.startConfigVisible,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => $setup.startConfigVisible = $event),
    enabled: $setup.startConfig.startBose,
    level: $setup.startConfig.startLevelBose,
    "onClick:apply": $setup.onStartApply
  }, null, 8, ["modelValue", "enabled", "level", "onClick:apply"])], 64);
}

/* Vuetify */



// EXTERNAL MODULE: ./src/components/cards/SliderCardItem.vue + 6 modules
var SliderCardItem = __webpack_require__(24365);
// EXTERNAL MODULE: ./src/components/cards/SelectCardItem.vue + 6 modules
var SelectCardItem = __webpack_require__(17395);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/BoseStartDialog.vue?vue&type=template&id=8adf2d60&ts=true

const BoseStartDialogvue_type_template_id_8adf2d60_ts_true_hoisted_1 = {
  key: 1
};
const BoseStartDialogvue_type_template_id_8adf2d60_ts_true_hoisted_2 = {
  key: 1
};
const BoseStartDialogvue_type_template_id_8adf2d60_ts_true_hoisted_3 = {
  key: 1
};
function BoseStartDialogvue_type_template_id_8adf2d60_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
  const _component_slider_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("slider-card-item");
                                                      
                                                        
                                                      
  const _component_dialog_template = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("dialog-template");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_dialog_template, {
    "content-class": "bose-start",
    modelValue: $setup.visible,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.visible = $event),
    title: _ctx.$t('onboard.bose.volumeConfig.title'),
    icon: "volume-setting",
    width: "500px",
    text: "",
    actions: ""
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, {
      class: "pb-2"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.valueEnabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.valueEnabled = $event),
          title: _ctx.$t('onboard.bose.volumeConfig.start.title'),
          description: _ctx.$t('onboard.bose.volumeConfig.start.description')
        }, null, 8, ["modelValue", "title", "description"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_slider_card_item, {
          modelValue: $setup.valueLevel,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.valueLevel = $event),
          title: _ctx.$t('onboard.bose.volumeConfig.level.title'),
          description: _ctx.$t('onboard.bose.volumeConfig.level.description'),
          max: 63,
          disabled: !$setup.valueEnabled
        }, null, 8, ["modelValue", "title", "description", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    btns: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "secondary",
      onClick: $setup.onResetClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[4] || (_cache[4] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-restart")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", BoseStartDialogvue_type_template_id_8adf2d60_ts_true_hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.reset")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: $setup.onApplyClick
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[5] || (_cache[5] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-check")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", BoseStartDialogvue_type_template_id_8adf2d60_ts_true_hoisted_2, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.apply")), 1))]),
      _: 1
    }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(VBtn/* VBtn */.D, {
      color: "primary",
      onClick: _cache[2] || (_cache[2] = $event => $setup.visible = false)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$vuetify.display.xs ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VIcon/* VIcon */.w, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => _cache[6] || (_cache[6] = [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("mdi-close")])),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("span", BoseStartDialogvue_type_template_id_8adf2d60_ts_true_hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("btn.cancel")), 1))]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "title"]);
}

/* Vuetify */





;// CONCATENATED MODULE: ./src/views/onboard/components/BoseStartDialog.vue?vue&type=template&id=8adf2d60&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/BoseStartDialog.vue?vue&type=script&lang=ts





/* harmony default export */ var BoseStartDialogvue_type_script_lang_ts = ({
  name: "BoseStartDialog",
  components: {
    SliderCardItem: SliderCardItem/* default */.A,
    DialogTemplate: DialogTemplate/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    NumberField: NumberField/* default */.A
  },
  props: {
    /** Отображение диалога */
    modelValue: {
      type: Boolean,
      default: false
    },
    /** Вкл/выкл */
    enabled: Boolean,
    /** Уровень звука */
    level: Number
  },
  emits: ["update:modelValue", "click:apply"],
  setup(props, context) {
    const {
      modelValue,
      enabled,
      level
    } = (0,reactivity_esm_bundler/* toRefs */.QW)(props);
    const visible = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => modelValue.value,
      set: val => context.emit("update:modelValue", val)
    });
    const valueEnabled = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const valueLevel = (0,reactivity_esm_bundler/* ref */.KR)(0);
    /** Сбросить */
    const onResetClick = () => {
      valueEnabled.value = enabled.value;
      valueLevel.value = level.value;
      if (valueLevel.value > 63) valueLevel.value = 63;
    };
    /** Применить изменения и закрыть диалог */
    const onApplyClick = () => {
      visible.value = false;
      if (valueEnabled.value !== enabled.value || valueLevel.value !== level.value) {
        context.emit("click:apply", valueEnabled.value, valueLevel.value);
      }
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(visible, val => {
      if (val) onResetClick();
    });
    return {
      visible,
      valueEnabled,
      valueLevel,
      onResetClick,
      onApplyClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/BoseStartDialog.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/BoseStartDialog.vue




;
const BoseStartDialog_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(BoseStartDialogvue_type_script_lang_ts, [['render',BoseStartDialogvue_type_template_id_8adf2d60_ts_true_render]])

/* harmony default export */ var BoseStartDialog = (BoseStartDialog_exports_);
// EXTERNAL MODULE: ./src/models/pjcan/bose/index.ts + 2 modules
var bose = __webpack_require__(89100);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/components/BoseCard.vue?vue&type=script&lang=ts












/* harmony default export */ var BoseCardvue_type_script_lang_ts = ({
  name: "BoseCard",
  components: {
    ViewSettingDialog: ViewSettingDialog/* default */.A,
    BoseStartDialog: BoseStartDialog,
    IconCardItem: IconCardItem/* default */.A,
    InputCardItem: InputCardItem/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    SliderCardItem: SliderCardItem/* default */.A,
    SelectCardItem: SelectCardItem/* default */.A,
    Card: Card/* default */.A
  },
  props: {
    carModel: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const volumeConfigLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/volume"].isData);
    const boseConfigLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/bose"].isData);
    const boseViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/bose"].isData);
    const enabled = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => [store/* default */.A.getters["config/bose"].on],
      set: val => store/* default */.A.commit("config/setBoseEnabled", val[0])
    });
    const audioPLT = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].audioPlt,
      set: val => store/* default */.A.commit("config/setBoseAudioPlt", val)
    });
    const radioFM = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].radioFM,
      set: val => store/* default */.A.commit("config/setBoseRadioFM", val)
    });
    const wow = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].wow,
      set: val => store/* default */.A.commit("config/setBoseWow", val)
    });
    const balance = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].balance,
      set: val => store/* default */.A.commit("config/setBoseBalance", val)
    });
    const bass = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].bass,
      set: val => store/* default */.A.commit("config/setBoseBass", val)
    });
    const fade = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].fade,
      set: val => store/* default */.A.commit("config/setBoseFade", val)
    });
    const treble = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].treble,
      set: val => store/* default */.A.commit("config/setBoseTreble", val)
    });
    const centerPoint = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/bose"].centerPoint,
      set: val => store/* default */.A.commit("config/setBoseCenterPoint", val)
    });
    const centerPointList = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: "OFF",
      value: bose/* TCenterPoint */.k1.CENTERPOINT_OFF
    }, {
      title: "MIN",
      value: bose/* TCenterPoint */.k1.CENTERPOINT_MIN
    }, {
      title: "LOW",
      value: bose/* TCenterPoint */.k1.CENTERPOINT_LOW
    }, {
      title: "MID",
      value: bose/* TCenterPoint */.k1.CENTERPOINT_MID
    }, {
      title: "HI",
      value: bose/* TCenterPoint */.k1.CENTERPOINT_HI
    }, {
      title: "MAX",
      value: bose/* TCenterPoint */.k1.CENTERPOINT_MAX
    }]);
    const mute = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/volume"].muteBose,
      set: val => store/* default */.A.commit("config/setVolumeMuteBose", val)
    });
    const volume = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/volume"].volumeBose,
      set: val => store/* default */.A.commit("config/setVolumeValueBose", val)
    });
    const startConfigVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const startConfig = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/volume"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      id: 0,
      title: t("onboard.bose.volumeConfig.title")
    }, {
      id: 1,
      title: t("onboard.bose.menu"),
      view: store/* default */.A.getters["view/bose"],
      disabled: !boseViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      if (item.view) {
        menuVisible.value = true;
        menuSelected.value = item;
      } else startConfigVisible.value = true;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    /**
     * Применить настройки запуска
     * @param {boolean} enabled Вкл/выкл
     * @param {number} level Уровень звука
     */
    const onStartApply = (enabled, level) => {
      store/* default */.A.commit("config/setVolumeStartBose", {
        enabled,
        level
      });
    };
    return {
      boseConfigLoaded,
      boseViewLoaded,
      volumeConfigLoaded,
      enabled,
      audioPLT,
      radioFM,
      wow,
      balance,
      bass,
      fade,
      treble,
      centerPoint,
      centerPointList,
      mute,
      volume,
      startConfigVisible,
      startConfig,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onViewApply,
      onStartApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/components/BoseCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/onboard/components/BoseCard.vue




;
const BoseCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(BoseCardvue_type_script_lang_ts, [['render',BoseCardvue_type_template_id_64d5de1c_ts_true_render]])

/* harmony default export */ var BoseCard = (BoseCard_exports_);
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 7 modules
var device = __webpack_require__(94027);
// EXTERNAL MODULE: ./src/models/pjcan/sensors/index.ts + 2 modules
var sensors = __webpack_require__(57411);
// EXTERNAL MODULE: ./src/models/pjcan/temperature/index.ts + 1 modules
var temperature = __webpack_require__(42570);
// EXTERNAL MODULE: ./src/models/pjcan/engine/index.ts + 3 modules
var engine = __webpack_require__(76300);
// EXTERNAL MODULE: ./src/models/pjcan/fuel/index.ts + 3 modules
var fuel = __webpack_require__(59461);
// EXTERNAL MODULE: ./src/models/pjcan/movement/index.ts + 2 modules
var movement = __webpack_require__(14753);
// EXTERNAL MODULE: ./src/models/pjcan/doors/index.ts + 2 modules
var doors = __webpack_require__(84582);
// EXTERNAL MODULE: ./src/models/pjcan/climate/index.ts + 1 modules
var climate = __webpack_require__(72418);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/index.vue?vue&type=script&lang=ts























/* harmony default export */ var onboardvue_type_script_lang_ts = ({
  name: "onboard",
  components: {
    Flicking: flicking_esm/* default */.Ay,
    InfoCard: InfoCard,
    EngineCard: EngineCard,
    FuelCard: FuelCard,
    MovementCard: MovementCard,
    DoorsCard: DoorsCard,
    ClimateCard: ClimateCard,
    BoseCard: BoseCard
  },
  setup() {
    const {
      name: display
    } = (0,composables_display/* useDisplay */._F)();
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const flicking = (0,reactivity_esm_bundler/* ref */.KR)(null);
    (0,runtime_core_esm_bundler/* provide */.Gt)("flicking", flicking);
    store/* default */.A.dispatch("app/readOnboardCardList");
    const cards = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return store/* default */.A.getters["app/onboardCardList"]?.filter(x => x.enabled && x.car?.indexOf(store/* default */.A.getters["config/carModel"]) >= 0);
    });
    const listExec = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const result = [];
      cards.value?.forEach(card => {
        switch (card.name) {
          case "info":
            result.push(device/* API_DEVICE_VALUE_EXEC */.ID);
            result.push(sensors/* API_SENSORS_VALUE_EXEC */.H2);
            result.push(temperature/* API_TEMPERATURE_VALUE_EXEC */.i0);
            break;
          case "engine":
            result.push(engine/* API_ENGINE_VALUE_EXEC */.Oq);
            break;
          case "fuel":
            result.push(fuel/* API_FUEL_VALUE_EXEC */.qV);
            break;
          case "movement":
            result.push(movement/* API_MOVEMENT_VALUE_EXEC */.vT);
            break;
          case "doors":
            result.push(doors/* API_DOORS_VALUE_EXEC */.Hz);
            break;
          case "climate":
            result.push(climate/* API_CLIMATE_VALUE_EXEC */.Z$);
            break;
        }
      });
      return result;
    });
    const notify = () => {
      if (!store/* default */.A.getters["app/notify"]) {
        setTimeout(() => esm/* toast */.oR.info(t("help.onboard.notify")), 5000);
        store/* default */.A.commit("app/setNotify", true);
      }
    };
    (0,runtime_core_esm_bundler/* watch */.wB)(listExec, val => {
      canbus/* default */.A.loop(val);
      if (val?.length > 0) notify();
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      canbus/* default */.A.loop(listExec.value);
      if (listExec.value?.length > 0) notify();
    });
    (0,runtime_core_esm_bundler/* onUnmounted */.hi)(() => {
      canbus/* default */.A.loopFree();
    });
    return {
      flicking,
      cards,
      display
    };
  }
});
;// CONCATENATED MODULE: ./src/views/onboard/index.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/onboard/index.vue?vue&type=style&index=0&id=f2a414e8&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/onboard/index.vue?vue&type=style&index=0&id=f2a414e8&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/views/onboard/index.vue




;


const onboard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(onboardvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-f2a414e8"]])

/* harmony default export */ var onboard = (onboard_exports_);

/***/ }),

/***/ 92063:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ options; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(56768);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(24232);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/index.vue?vue&type=template&id=1a90dfba&scoped=true&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_flicking = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("flicking");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_flicking, {
    ref: "flicking",
    class: "setting",
    options: {
      bound: true,
      align: 'prev'
    }
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.cards, name => {
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
        key: name,
        class: (0,shared_esm_bundler/* normalizeClass */.C4)(["mr-4", `flicking-${$setup.display}`])
      }, [((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.$y)(`${name}-card`)))], 2);
    }), 128))]),
    _: 1
  }, 512);
}
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/composables/display.mjs
var composables_display = __webpack_require__(68353);
// EXTERNAL MODULE: ./src/store/index.ts + 20 modules
var store = __webpack_require__(81052);
// EXTERNAL MODULE: ./node_modules/@egjs/vue3-flicking/dist/flicking.esm.js + 1 modules
var flicking_esm = __webpack_require__(22180);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.mjs
var VRow = __webpack_require__(56756);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.mjs
var VCol = __webpack_require__(35526);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var VTextField = __webpack_require__(43948);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/LcdCard.vue?vue&type=template&id=cb991088&ts=true

function LcdCardvue_type_template_id_cb991088_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
                                                                    
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "lcd-card",
    title: _ctx.$t('options.lcd.title'),
    menu: $setup.menu,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.enabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.enabled = $event),
          title: _ctx.$t('options.lcd.enabled.title'),
          description: _ctx.$t('options.lcd.enabled.description'),
          color: "success",
          nodata: !$setup.mazdaConfigLoaded,
          disabled: !$setup.mazdaConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
          modelValue: $setup.logo,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.logo = $event),
          label: _ctx.$t('options.lcd.logo.title'),
          hint: _ctx.$t('options.lcd.logo.description'),
          variant: "underlined",
          disabled: !$setup.mazdaConfigLoaded,
          "persistent-hint": "",
          dense: "",
          onBlur: $setup.setMazdaLogo
        }, null, 8, ["modelValue", "label", "hint", "disabled", "onBlur"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VTextField/* VTextField */.W, {
          modelValue: $setup.hello,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.hello = $event),
          label: _ctx.$t('options.lcd.hello.title'),
          hint: _ctx.$t('options.lcd.hello.description'),
          variant: "underlined",
          disabled: !$setup.mazdaConfigLoaded,
          "persistent-hint": "",
          dense: "",
          onBlur: $setup.setMazdaHello
        }, null, 8, ["modelValue", "label", "hint", "disabled", "onBlur"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "delay-disabled": "",
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */




// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.mjs
var vue_i18n = __webpack_require__(85851);
// EXTERNAL MODULE: ./src/components/cards/Card.vue + 6 modules
var Card = __webpack_require__(97361);
// EXTERNAL MODULE: ./src/components/cards/SwitchCardItem.vue + 6 modules
var SwitchCardItem = __webpack_require__(1791);
// EXTERNAL MODULE: ./src/components/ViewSettingDialog.vue + 5 modules
var ViewSettingDialog = __webpack_require__(55374);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/LcdCard.vue?vue&type=script&lang=ts






/* harmony default export */ var LcdCardvue_type_script_lang_ts = ({
  name: "LcdCard",
  components: {
    Card: Card/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const mazdaConfigLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/mazda"].isData);
    const mazdaViewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/mazda"].isData);
    const enabled = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/mazda"].lcd,
      set: val => store/* default */.A.commit("config/setMazdaLcd", val)
    });
    /**
     * Проверка ввода
     * @param {Ref<string>} input Объект ввода
     * @param {number} max Максимальное количество символов
     */
    const onInput = (input, max) => {
      const {
        value
      } = input;
      const length = value.length;
      if (length > max) input.value = value.substring(0, max);else if (!/^[^а-яА-я]*$/.test(value)) input.value = value.substring(0, length - 1);
    };
    // Логотип
    const __logo = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/mazda"].logo.trim());
    const logo = (0,reactivity_esm_bundler/* ref */.KR)(__logo.value);
    (0,runtime_core_esm_bundler/* watch */.wB)(__logo, val => logo.value = val);
    (0,runtime_core_esm_bundler/* watch */.wB)(logo, () => {
      (0,runtime_core_esm_bundler/* nextTick */.dY)(() => onInput(logo, 12));
    });
    const setMazdaLogo = () => {
      const val = logo.value.trim();
      if (logo.value.length < 12) {
        const countSpace = Math.floor((12 - val.length) / 2);
        if (countSpace > 0) {
          let spaces = "";
          for (let i = 0; i < countSpace; i++) spaces += " ";
          logo.value = spaces + val;
        }
      }
      store/* default */.A.commit("config/setMazdaLogo", logo.value);
    };
    // Текст приветствия
    const __hello = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/mazda"].hello);
    const hello = (0,reactivity_esm_bundler/* ref */.KR)(__hello.value);
    (0,runtime_core_esm_bundler/* watch */.wB)(__hello, val => hello.value = val);
    (0,runtime_core_esm_bundler/* watch */.wB)(hello, () => {
      (0,runtime_core_esm_bundler/* nextTick */.dY)(() => onInput(hello, 32));
    });
    const setMazdaHello = () => store/* default */.A.commit("config/setMazdaHello", hello.value);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("options.lcd.hello.menu"),
      view: store/* default */.A.getters["view/mazda"],
      disabled: !mazdaViewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      menuVisible.value = true;
      menuSelected.value = item;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      mazdaConfigLoaded,
      mazdaViewLoaded,
      enabled,
      logo,
      setMazdaLogo,
      hello,
      setMazdaHello,
      menu,
      menuVisible,
      menuSelected,
      onInput,
      onMenuClick,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/options/components/LcdCard.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(71241);
;// CONCATENATED MODULE: ./src/views/options/components/LcdCard.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(LcdCardvue_type_script_lang_ts, [['render',LcdCardvue_type_template_id_cb991088_ts_true_render]])

/* harmony default export */ var LcdCard = (__exports__);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.mjs + 1 modules
var VSelect = __webpack_require__(20105);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/TeyesCard.vue?vue&type=template&id=050acd0a&ts=true

function TeyesCardvue_type_template_id_050acd0a_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
                                                            
                                                      
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "teyes-card",
    title: _ctx.$t('options.teyes.title'),
    menu: $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? $setup.menu : undefined,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSelect/* VSelect */.d4, {
          modelValue: $setup.protocol,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.protocol = $event),
          label: _ctx.$t('options.teyes.protocol.title'),
          items: $setup.listProtocol,
          hint: _ctx.$t('options.teyes.protocol.description'),
          variant: "underlined",
          "item-title": "label",
          "item-value": "value",
          "persistent-hint": "",
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "label", "items", "hint", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.reverseUart,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.reverseUart = $event),
          title: _ctx.$t('options.teyes.reverseUart.title'),
          description: _ctx.$t('options.teyes.reverseUart.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 0,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.lcdShow,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.lcdShow = $event),
          title: _ctx.$t('options.teyes.lcdShow.title'),
          description: _ctx.$t('options.teyes.lcdShow.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.sendButton,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.sendButton = $event),
          title: _ctx.$t('options.teyes.sendButton.title'),
          description: _ctx.$t('options.teyes.sendButton.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9 && $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 1,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.sendClimate,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.sendClimate = $event),
          title: _ctx.$t('options.teyes.sendClimate.title'),
          description: _ctx.$t('options.teyes.sendClimate.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.carModel === $options.TCarModel.CAR_MODEL_MAZDA_3_BK ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCol/* VCol */.B, {
        key: 2,
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.sendDoors,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.sendDoors = $event),
          title: _ctx.$t('options.teyes.sendDoors.title'),
          description: _ctx.$t('options.teyes.sendDoors.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.parseVolume,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.parseVolume = $event),
          title: _ctx.$t('options.teyes.parseVolume.title'),
          description: _ctx.$t('options.teyes.parseVolume.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.receiveText,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $setup.receiveText = $event),
          title: _ctx.$t('options.teyes.receiveText.title'),
          description: _ctx.$t('options.teyes.receiveText.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.receiveButtons,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => $setup.receiveButtons = $event),
          title: _ctx.$t('options.teyes.receiveButtons.title'),
          description: _ctx.$t('options.teyes.receiveButtons.description'),
          color: "success",
          nodata: !$setup.teyesConfigLoaded,
          disabled: !$setup.teyesConfigLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */




// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/models/pjcan/mazda/index.ts + 4 modules
var mazda = __webpack_require__(19164);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/TeyesCard.vue?vue&type=script&lang=ts








/* harmony default export */ var TeyesCardvue_type_script_lang_ts = ({
  name: "TeyesCard",
  computed: {
    TCarModel() {
      return mazda/* TCarModel */.oB;
    }
  },
  components: {
    Card: Card/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t,
      tm
    } = (0,vue_i18n/* useI18n */.s9)();
    const teyesConfigLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/teyes"].isData);
    const protocol = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].protocol,
      set: val => store/* default */.A.commit("config/setTeyesProtocol", val)
    });
    const reverseUart = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].reverseUart,
      set: val => store/* default */.A.commit("config/setTeyesReverseUart", val)
    });
    const lcdShow = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].lcdShow,
      set: val => store/* default */.A.commit("config/setTeyesLcdShow", val)
    });
    const sendButton = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].sendButton,
      set: val => store/* default */.A.commit("config/setTeyesSendButton", val)
    });
    const sendClimate = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].sendClimate,
      set: val => store/* default */.A.commit("config/setTeyesSendClimate", val)
    });
    const sendDoors = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].sendDoors,
      set: val => store/* default */.A.commit("config/setTeyesSendDoors", val)
    });
    const parseVolume = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].parseVolume,
      set: val => store/* default */.A.commit("config/setTeyesParseVolume", val)
    });
    const receiveClock = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].receiveClock,
      set: val => store/* default */.A.commit("config/setTeyesReceiveClock", val)
    });
    const receiveText = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].receiveText,
      set: val => store/* default */.A.commit("config/setTeyesReceiveText", val)
    });
    const receiveButtons = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/teyes"].receiveButtons,
      set: val => store/* default */.A.commit("config/setTeyesReceiveButtons", val)
    });
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    /** Список протоколов */
    const listProtocol = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const list = tm("options.teyes.protocol.list");
      const result = [];
      for (const key in list) result.push({
        label: list[key],
        value: Number(key)
      });
      return result;
    });
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("options.teyes.lcdShow.menu"),
      view: store/* default */.A.getters["view/teyesText"],
      disabled: !store/* default */.A.getters["view/teyesText"].isData
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      menuVisible.value = true;
      menuSelected.value = item;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      teyesConfigLoaded,
      protocol,
      reverseUart,
      lcdShow,
      sendButton,
      sendClimate,
      sendDoors,
      parseVolume,
      receiveClock,
      receiveText,
      receiveButtons,
      listProtocol,
      carModel,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/options/components/TeyesCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/views/options/components/TeyesCard.vue




;
const TeyesCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(TeyesCardvue_type_script_lang_ts, [['render',TeyesCardvue_type_template_id_050acd0a_ts_true_render]])

/* harmony default export */ var TeyesCard = (TeyesCard_exports_);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/DateTimeCard.vue?vue&type=template&id=7d7fa9df&scoped=true&ts=true

function DateTimeCardvue_type_template_id_7d7fa9df_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_switch_card_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("switch-card-item");
                                                      
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  const _component_view_setting_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("view-setting-dialog");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_card, {
    class: "datetime-card",
    title: _ctx.$t('options.datetime.title'),
    menu: $setup.carModel !== $options.TCarModel.CAR_MODEL_MAZDA_CX9_REST ? $setup.menu : undefined,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.showDate,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.showDate = $event),
          title: _ctx.$t('options.datetime.date.title'),
          description: _ctx.$t('options.datetime.date.description'),
          color: "success",
          nodata: !$setup.configLoaded,
          disabled: !$setup.configLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.showTime,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.showTime = $event),
          title: _ctx.$t('options.datetime.time.title'),
          description: _ctx.$t('options.datetime.time.description'),
          color: "success",
          nodata: !$setup.configLoaded,
          disabled: !$setup.configLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.showDayWeek,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.showDayWeek = $event),
          title: _ctx.$t('options.datetime.dayWeek.title'),
          description: _ctx.$t('options.datetime.dayWeek.description'),
          color: "success",
          nodata: !$setup.configLoaded,
          disabled: !$setup.configLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.showDateAndDayWeek,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => $setup.showDateAndDayWeek = $event),
          title: _ctx.$t('options.datetime.dateAndDayWeek.title'),
          description: _ctx.$t('options.datetime.dateAndDayWeek.description'),
          color: "success",
          nodata: !$setup.configLoaded,
          disabled: !$setup.configLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.showTimeAndDayWeek,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $setup.showTimeAndDayWeek = $event),
          title: _ctx.$t('options.datetime.timeAndDayWeek.title'),
          description: _ctx.$t('options.datetime.timeAndDayWeek.description'),
          color: "success",
          nodata: !$setup.configLoaded,
          disabled: !$setup.configLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 pb-0"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_switch_card_item, {
          modelValue: $setup.showFullDatetime,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.showFullDatetime = $event),
          title: _ctx.$t('options.datetime.fullDatetime.title'),
          description: _ctx.$t('options.datetime.fullDatetime.description'),
          color: "success",
          nodata: !$setup.configLoaded,
          disabled: !$setup.configLoaded
        }, null, 8, ["modelValue", "title", "description", "nodata", "disabled"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-5 datetime-card__description"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("options.datetime.description")), 1)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_view_setting_dialog, {
    modelValue: $setup.menuVisible,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => $setup.menuVisible = $event),
    title: $setup.menuSelected.title,
    view: $setup.menuSelected.view,
    disabled: $setup.menuSelected.disabled,
    "onClick:apply": $setup.onViewApply
  }, null, 8, ["modelValue", "title", "view", "disabled", "onClick:apply"])], 64);
}

/* Vuetify */



;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/DateTimeCard.vue?vue&type=script&lang=ts







/* harmony default export */ var DateTimeCardvue_type_script_lang_ts = ({
  name: "DatetimeCard",
  computed: {
    TCarModel() {
      return mazda/* TCarModel */.oB;
    }
  },
  components: {
    Card: Card/* default */.A,
    SwitchCardItem: SwitchCardItem/* default */.A,
    ViewSettingDialog: ViewSettingDialog/* default */.A
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const configLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/datetime"].isData);
    const viewLoaded = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["view/datetime"].isData);
    const showDate = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/datetime"].showDate,
      set: val => store/* default */.A.commit("config/setDatetimeShowDate", val)
    });
    const showTime = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/datetime"].showTime,
      set: val => store/* default */.A.commit("config/setDatetimeShowTime", val)
    });
    const showDayWeek = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/datetime"].showDayWeek,
      set: val => store/* default */.A.commit("config/setDatetimeShowDayWeek", val)
    });
    const showDateAndDayWeek = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/datetime"].showDateAndDayWeek,
      set: val => store/* default */.A.commit("config/setDatetimeShowDateAndDayWeek", val)
    });
    const showTimeAndDayWeek = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/datetime"].showTimeAndDayWeek,
      set: val => store/* default */.A.commit("config/setDatetimeShowTimeAndDayWeek", val)
    });
    const showFullDatetime = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store/* default */.A.getters["config/datetime"].showFullDatetime,
      set: val => store/* default */.A.commit("config/setDatetimeShowFullDatetime", val)
    });
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      title: t("options.datetime.menu"),
      view: store/* default */.A.getters["view/datetime"],
      disabled: !viewLoaded.value
    }]);
    const menuVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const menuSelected = (0,reactivity_esm_bundler/* ref */.KR)({});
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      menuVisible.value = true;
      menuSelected.value = item;
    };
    /**
     * Применить параметры отображения на информационном экране
     * @param {any} value Новые параметры отображения
     */
    const onViewApply = value => {
      store/* default */.A.commit("view/setView", value);
    };
    return {
      configLoaded,
      viewLoaded,
      showDate,
      showTime,
      showDayWeek,
      showDateAndDayWeek,
      showTimeAndDayWeek,
      showFullDatetime,
      carModel,
      menu,
      menuVisible,
      menuSelected,
      onMenuClick,
      onViewApply
    };
  }
});
;// CONCATENATED MODULE: ./src/views/options/components/DateTimeCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/DateTimeCard.vue?vue&type=style&index=0&id=7d7fa9df&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/options/components/DateTimeCard.vue?vue&type=style&index=0&id=7d7fa9df&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/views/options/components/DateTimeCard.vue




;


const DateTimeCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(DateTimeCardvue_type_script_lang_ts, [['render',DateTimeCardvue_type_template_id_7d7fa9df_scoped_true_ts_true_render],['__scopeId',"data-v-7d7fa9df"]])

/* harmony default export */ var DateTimeCard = (DateTimeCard_exports_);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.mjs + 1 modules
var VCard = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCardText.mjs
var VCardText = __webpack_require__(30697);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSwitch/VSwitch.mjs + 1 modules
var VSwitch = __webpack_require__(80594);
;// CONCATENATED MODULE: ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[5]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/OnboardCard.vue?vue&type=template&id=18aac5dd&scoped=true&ts=true

const _hoisted_1 = {
  class: "d-flex align-center"
};
function OnboardCardvue_type_template_id_18aac5dd_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_custom = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("icon-custom");
                                                            
                                                                  
                                                        
  const _component_draggable = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("draggable");
                                                      
                                                      
  const _component_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_card, {
    class: "onboard-card",
    title: _ctx.$t('options.onboard.title'),
    menu: $setup.menu,
    "onClick:menu": $setup.onMenuClick
  }, {
    body: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VRow/* VRow */.L, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_draggable, {
          modelValue: $setup.cardList,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.cardList = $event),
          group: "onboard",
          "item-key": "name",
          move: () => $setup.isLoading,
          onStart: _cache[1] || (_cache[1] = $event => $setup.flicking.disableInput()),
          onEnd: _cache[2] || (_cache[2] = $event => {
            $setup.flicking.enableInput();
            $setup.onCardListChange();
          })
        }, {
          item: (0,runtime_core_esm_bundler/* withCtx */.k6)(({
            element
          }) => [element.visible ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(VCard/* VCard */.J, {
            key: 0,
            class: (0,shared_esm_bundler/* normalizeClass */.C4)(["mt-1 mb-1 onboard-card__item", {
              'onboard-card__item--disabled': element.disabled
            }])
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(VCardText/* VCardText */.O, {
              class: "d-flex align-center justify-space-between"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_icon_custom, {
                class: "mr-2",
                name: "mdi-menu",
                size: "24",
                color: "secondary"
              }), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("onboard." + element.name + ".title")), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(VSwitch/* VSwitch */.N, {
                modelValue: element.enabled,
                "onUpdate:modelValue": $event => element.enabled = $event,
                density: "compact",
                color: "success",
                "hide-details": "",
                disabled: !$setup.isLoading || element.disabled,
                onChange: $setup.onCardListChange
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])])]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1032, ["class"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
          _: 1
        }, 8, ["modelValue", "move"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(VCol/* VCol */.B, {
        cols: "12",
        class: "pt-0 onboard-card__description"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$t("options.onboard.description")), 1)]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["title", "menu", "onClick:menu"]);
}

/* Vuetify */





;// CONCATENATED MODULE: ./src/views/options/components/OnboardCard.vue?vue&type=template&id=18aac5dd&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.umd.js
var vuedraggable_umd = __webpack_require__(61527);
var vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);
// EXTERNAL MODULE: ./src/components/common/icon-custom/IconCustom.vue + 5 modules
var IconCustom = __webpack_require__(21907);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/OnboardCard.vue?vue&type=script&lang=ts







/* harmony default export */ var OnboardCardvue_type_script_lang_ts = ({
  name: "OnboardCard",
  components: {
    IconCustom: IconCustom/* default */.A,
    Card: Card/* default */.A,
    draggable: (vuedraggable_umd_default())
  },
  setup() {
    const {
      t
    } = (0,vue_i18n/* useI18n */.s9)();
    const flicking = (0,runtime_core_esm_bundler/* inject */.WQ)("flicking");
    store/* default */.A.dispatch("app/readOnboardCardList");
    const carModel = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"]);
    const isLoading = (0,runtime_core_esm_bundler/* computed */.EW)(() => carModel.value !== mazda/* TCarModel */.oB.CAR_MODEL_UNKNOWN);
    const cardList = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const setCardList = model => {
      cardList.value = [...store/* default */.A.getters["app/onboardCardList"]].map(x => ({
        ...x,
        disabled: false,
        visible: x.car.indexOf(model) >= 0
      }));
    };
    setCardList(carModel.value);
    (0,runtime_core_esm_bundler/* watch */.wB)(carModel, val => setCardList(val));
    (0,runtime_core_esm_bundler/* watch */.wB)(isLoading, val => {
      if (val) {
        cardList.value.forEach(x => {
          x.disabled = false;
          x.visible = x.car.indexOf(carModel.value) >= 0;
        });
      }
    });
    /** Изменение списка */
    const onCardListChange = () => {
      store/* default */.A.commit("app/setOnboardCardList", cardList.value);
      store/* default */.A.dispatch("app/writeOnboardCardList");
    };
    const menu = (0,runtime_core_esm_bundler/* computed */.EW)(() => [{
      id: 0,
      title: t("options.onboard.reset.menu")
    }]);
    /**
     * Выбор пункта меню отображения на информационном экране
     * @param {IMenuItem} item Элемент меню
     */
    const onMenuClick = item => {
      store/* default */.A.dispatch("app/resetOnboardCardList");
      setCardList(carModel.value);
    };
    return {
      isLoading,
      flicking,
      cardList,
      menu,
      onCardListChange,
      onMenuClick
    };
  }
});
;// CONCATENATED MODULE: ./src/views/options/components/OnboardCard.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/components/OnboardCard.vue?vue&type=style&index=0&id=18aac5dd&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/options/components/OnboardCard.vue?vue&type=style&index=0&id=18aac5dd&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/views/options/components/OnboardCard.vue




;


const OnboardCard_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(OnboardCardvue_type_script_lang_ts, [['render',OnboardCardvue_type_template_id_18aac5dd_scoped_true_ts_true_render],['__scopeId',"data-v-18aac5dd"]])

/* harmony default export */ var OnboardCard = (OnboardCard_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/index.vue?vue&type=script&lang=ts









/* harmony default export */ var optionsvue_type_script_lang_ts = ({
  name: "setting",
  components: {
    Flicking: flicking_esm/* default */.Ay,
    LcdCard: LcdCard,
    TeyesCard: TeyesCard,
    DatetimeCard: DateTimeCard,
    OnboardCard: OnboardCard
  },
  setup() {
    const {
      name: display
    } = (0,composables_display/* useDisplay */._F)();
    const flicking = (0,reactivity_esm_bundler/* ref */.KR)(null);
    (0,runtime_core_esm_bundler/* provide */.Gt)("flicking", flicking);
    const cards = (0,runtime_core_esm_bundler/* computed */.EW)(() => store/* default */.A.getters["config/carModel"] !== mazda/* TCarModel */.oB.CAR_MODEL_MAZDA_CX9_REST ? ["lcd", "teyes", "datetime", "onboard"] : ["teyes", "datetime", "onboard"]);
    return {
      flicking,
      cards,
      display
    };
  }
});
;// CONCATENATED MODULE: ./src/views/options/index.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/options/index.vue?vue&type=style&index=0&id=1a90dfba&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/options/index.vue?vue&type=style&index=0&id=1a90dfba&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/views/options/index.vue




;


const options_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(optionsvue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-1a90dfba"]])

/* harmony default export */ var options = (options_exports_);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [283,800,281,165,987,145,216,922,796,882,947,706,877,580,794,84,641,341,210,656,82,618,962,880,186,528,288,841,224,362,458,552,353,434,632,594,655,241,990,774], function() { return __webpack_exec__(59682); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);