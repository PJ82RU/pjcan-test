"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[288],{

/***/ 71241:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 85851:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hU: function() { return /* binding */ createI18n; },
/* harmony export */   s9: function() { return /* binding */ useI18n; }
/* harmony export */ });
/* unused harmony exports DatetimeFormat, I18nD, I18nInjectionKey, I18nN, I18nT, NumberFormat, Translation, VERSION, castToVueI18n, vTDirective */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var _intlify_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27641);
/* harmony import */ var _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32759);
/* harmony import */ var _intlify_core_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56751);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56768);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90144);

/*!
  * vue-i18n v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */





/**
 * Vue I18n Version
 *
 * @remarks
 * Semver format. Same format as the package.json `version` field.
 *
 * @VueI18nGeneral
 */
const VERSION = '9.14.0';
/**
 * This is only called in esm-bundler builds.
 * istanbul-ignore-next
 */
function initFeatureFlags() {
  if (false) {}
  if (false) {}
  if (typeof __INTLIFY_JIT_COMPILATION__ !== 'boolean') {
    (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .getGlobalThis */ .We)().__INTLIFY_JIT_COMPILATION__ = false;
  }
  if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== 'boolean') {
    (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .getGlobalThis */ .We)().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
  }
  if (false) {}
}
const code$1 = _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .CoreWarnCodes */ .ID.__EXTEND_POINT__;
const inc$1 = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .incrementer */ .Je)(code$1);
const I18nWarnCodes = {
  FALLBACK_TO_ROOT: code$1,
  // 9
  NOT_SUPPORTED_PRESERVE: inc$1(),
  // 10
  NOT_SUPPORTED_FORMATTER: inc$1(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: inc$1(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: inc$1(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: inc$1(),
  // 14
  NOT_FOUND_PARENT_SCOPE: inc$1(),
  // 15
  IGNORE_OBJ_FLATTEN: inc$1(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: inc$1(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: inc$1() // 18
};
const warnMessages = {
  [I18nWarnCodes.FALLBACK_TO_ROOT]: `Fall back to {type} '{key}' with root locale.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE]: `Not supported 'preserve'.`,
  [I18nWarnCodes.NOT_SUPPORTED_FORMATTER]: `Not supported 'formatter'.`,
  [I18nWarnCodes.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: `Not supported 'preserveDirectiveContent'.`,
  [I18nWarnCodes.NOT_SUPPORTED_GET_CHOICE_INDEX]: `Not supported 'getChoiceIndex'.`,
  [I18nWarnCodes.COMPONENT_NAME_LEGACY_COMPATIBLE]: `Component name legacy compatible: '{name}' -> 'i18n'`,
  [I18nWarnCodes.NOT_FOUND_PARENT_SCOPE]: `Not found parent scope. use the global scope.`,
  [I18nWarnCodes.IGNORE_OBJ_FLATTEN]: `Ignore object flatten: '{key}' key has an string value`,
  [I18nWarnCodes.NOTICE_DROP_ALLOW_COMPOSITION]: `'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze`,
  [I18nWarnCodes.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: `'translateExistCompatible' option will be dropped in the next major version.`
};
function getWarnMessage(code, ...args) {
  return format(warnMessages[code], ...args);
}
const code = _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .CoreErrorCodes */ .a9.__EXTEND_POINT__;
const inc = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .incrementer */ .Je)(code);
const I18nErrorCodes = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: code,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: inc(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: inc(),
  // 26
  NOT_INSTALLED: inc(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  // 28
  // directive module errors
  REQUIRED_VALUE: inc(),
  // 29
  INVALID_VALUE: inc(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: inc(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: inc(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: inc(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: inc(),
  // 37
  // for enhancement
  __EXTEND_POINT__: inc() // 38
};
function createI18nError(code, ...args) {
  return (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_3__/* .createCompileError */ .gN)(code, null,  false ? 0 : undefined);
}
const errorMessages = {
  [I18nErrorCodes.UNEXPECTED_RETURN_TYPE]: 'Unexpected return type in composer',
  [I18nErrorCodes.INVALID_ARGUMENT]: 'Invalid argument',
  [I18nErrorCodes.MUST_BE_CALL_SETUP_TOP]: 'Must be called at the top of a `setup` function',
  [I18nErrorCodes.NOT_INSTALLED]: 'Need to install with `app.use` function',
  [I18nErrorCodes.UNEXPECTED_ERROR]: 'Unexpected error',
  [I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE]: 'Not available in legacy mode',
  [I18nErrorCodes.REQUIRED_VALUE]: `Required in value: {0}`,
  [I18nErrorCodes.INVALID_VALUE]: `Invalid value`,
  [I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: `Cannot setup vue-devtools plugin`,
  [I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE]: 'Need to install with `provide` function',
  [I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N]: 'Not compatible legacy VueI18n.',
  [I18nErrorCodes.BRIDGE_SUPPORT_VUE_2_ONLY]: 'vue-i18n-bridge support Vue 2.x only',
  [I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: 'Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode',
  [I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: 'Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly'
};
const TranslateVNodeSymbol = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__translateVNode');
const DatetimePartsSymbol = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__datetimeParts');
const NumberPartsSymbol = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__numberParts');
const EnableEmitter = /* #__PURE__*/(/* unused pure expression or super */ null && (makeSymbol('__enableEmitter')));
const DisableEmitter = /* #__PURE__*/(/* unused pure expression or super */ null && (makeSymbol('__disableEmitter')));
const SetPluralRulesSymbol = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__setPluralRules');
(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__intlifyMeta');
const InejctWithOptionSymbol = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__injectWithOption');
const DisposeSymbol = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('__dispose');
const __VUE_I18N_BRIDGE__ = '__VUE_I18N_BRIDGE__';

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Transform flat json in obj to normal json in obj
 */
function handleFlatJson(obj) {
  // check obj
  if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(obj)) {
    return obj;
  }
  for (const key in obj) {
    // check key
    if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .$3)(obj, key)) {
      continue;
    }
    // handle for normal json
    if (!key.includes('.')) {
      // recursive process value if value is also a object
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(obj[key])) {
        handleFlatJson(obj[key]);
      }
    }
    // handle for flat json, transform to normal json
    else {
      // go to the last object
      const subKeys = key.split('.');
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      let hasStringValue = false;
      for (let i = 0; i < lastIndex; i++) {
        if (!(subKeys[i] in currentObj)) {
          currentObj[subKeys[i]] = {};
        }
        if (!(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(currentObj[subKeys[i]])) {
           false && 0;
          hasStringValue = true;
          break;
        }
        currentObj = currentObj[subKeys[i]];
      }
      // update last object value, delete old property
      if (!hasStringValue) {
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
      }
      // recursive process value if value is also a object
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const {
    messages,
    __i18n,
    messageResolver,
    flatJson
  } = options;
  // prettier-ignore
  const ret = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(messages) ? messages : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(__i18n) ? {} : {
    [locale]: {}
  };
  // merge locale messages of i18n custom block
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(__i18n)) {
    __i18n.forEach(custom => {
      if ('locale' in custom && 'resource' in custom) {
        const {
          locale,
          resource
        } = custom;
        if (locale) {
          ret[locale] = ret[locale] || {};
          (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .deepCopy */ .A4)(resource, ret[locale]);
        } else {
          (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .deepCopy */ .A4)(resource, ret);
        }
      } else {
        (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(custom) && (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .deepCopy */ .A4)(JSON.parse(custom), ret);
      }
    });
  }
  // handle messages for flat json
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .$3)(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getComponentOptions(instance) {
  return instance.type;
}
function adjustI18nResources(gl, options, componentOptions // eslint-disable-line @typescript-eslint/no-explicit-any
) {
  let messages = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(options.messages) ? options.messages : {};
  if ('__i18nGlobal' in componentOptions) {
    messages = getLocaleMessages(gl.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  // merge locale messages
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach(locale => {
      gl.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    // merge datetime formats
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(options.datetimeFormats)) {
      const locales = Object.keys(options.datetimeFormats);
      if (locales.length) {
        locales.forEach(locale => {
          gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    // merge number formats
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(options.numberFormats)) {
      const locales = Object.keys(options.numberFormats);
      if (locales.length) {
        locales.forEach(locale => {
          gl.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function createTextNode(key) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .EY, null, key, 0);
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
// extend VNode interface
const DEVTOOLS_META = '__INTLIFY_META__';
const NOOP_RETURN_ARRAY = () => [];
const NOOP_RETURN_FALSE = () => false;
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentInstance */ .nI)() || undefined, type);
  };
}
// for Intlify DevTools
/* #__NO_SIDE_EFFECTS__ */
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null; // eslint-disable-line @typescript-eslint/no-explicit-any
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? {
    [DEVTOOLS_META]: meta
  } // eslint-disable-line @typescript-eslint/no-explicit-any
  : null;
};
/**
 * Create composer interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createComposer(options = {}, VueI18nLegacy) {
  const {
    __root,
    __injectWithOption
  } = options;
  const _isGlobal = __root === undefined;
  const flatJson = options.flatJson;
  const _ref = _intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .inBrowser */ .M ? vue__WEBPACK_IMPORTED_MODULE_5__/* .ref */ .KR : vue__WEBPACK_IMPORTED_MODULE_5__/* .shallowRef */ .IJ;
  const translateExistCompatible = !!options.translateExistCompatible;
  if (false) {}
  let _inheritLocale = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = _ref(
  // prettier-ignore
  __root && _inheritLocale ? __root.locale.value : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(options.locale) ? options.locale : _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .DEFAULT_LOCALE */ .Xn);
  const _fallbackLocale = _ref(
  // prettier-ignore
  __root && _inheritLocale ? __root.fallbackLocale.value : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(options.fallbackLocale) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(options.fallbackLocale) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = _ref(getLocaleMessages(_locale.value, options));
  // prettier-ignore
  const _datetimeFormats = _ref((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(options.datetimeFormats) ? options.datetimeFormats : {
    [_locale.value]: {}
  });
  // prettier-ignore
  const _numberFormats = _ref((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(options.numberFormats) ? options.numberFormats : {
    [_locale.value]: {}
  });
  // warning suppress options
  // prettier-ignore
  let _missingWarn = __root ? __root.missingWarn : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(options.missingWarn) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isRegExp */ .gd)(options.missingWarn) ? options.missingWarn : true;
  // prettier-ignore
  let _fallbackWarn = __root ? __root.fallbackWarn : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(options.fallbackWarn) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isRegExp */ .gd)(options.fallbackWarn) ? options.fallbackWarn : true;
  // prettier-ignore
  let _fallbackRoot = __root ? __root.fallbackRoot : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(options.fallbackRoot) ? options.fallbackRoot : true;
  // configure fall back to root
  let _fallbackFormat = !!options.fallbackFormat;
  // runtime missing
  let _missing = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(options.missing) ? options.missing : null;
  let _runtimeMissing = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  // postTranslation handler
  let _postTranslation = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(options.postTranslation) ? options.postTranslation : null;
  // prettier-ignore
  let _warnHtmlMessage = __root ? __root.warnHtmlMessage : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  // custom linked modifiers
  // prettier-ignore
  const _modifiers = __root ? __root.modifiers : (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(options.modifiers) ? options.modifiers : {};
  // pluralRules
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  // runtime context
  // eslint-disable-next-line prefer-const
  let _context;
  const getCoreContext = () => {
    _isGlobal && (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .setFallbackContext */ .q)(null);
    const ctxOptions = {
      version: VERSION,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? undefined : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? undefined : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      messageCompiler: options.messageCompiler,
      __meta: {
        framework: 'vue'
      }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(_context) ? _context.__datetimeFormatters : undefined;
      ctxOptions.__numberFormatters = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(_context) ? _context.__numberFormatters : undefined;
    }
    if (false) {}
    const ctx = (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .createCoreContext */ .Lf)(ctxOptions);
    _isGlobal && (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .setFallbackContext */ .q)(ctx);
    return ctx;
  };
  _context = getCoreContext();
  (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .updateFallbackLocale */ .qY)(_context, _locale.value, _fallbackLocale.value);
  // track reactivity
  function trackReactivityValues() {
    return [_locale.value, _fallbackLocale.value, _messages.value, _datetimeFormats.value, _numberFormats.value];
  }
  // locale
  const locale = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)({
    get: () => _locale.value,
    set: val => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  // fallbackLocale
  const fallbackLocale = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)({
    get: () => _fallbackLocale.value,
    set: val => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .updateFallbackLocale */ .qY)(_context, _locale.value, val);
    }
  });
  // messages
  const messages = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(() => _messages.value);
  // datetimeFormats
  const datetimeFormats = /* #__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(() => _datetimeFormats.value);
  // numberFormats
  const numberFormats = /* #__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_4__/* .computed */ .EW)(() => _numberFormats.value);
  // getPostTranslationHandler
  function getPostTranslationHandler() {
    return (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .Tn)(_postTranslation) ? _postTranslation : null;
  }
  // setPostTranslationHandler
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  // getMissingHandler
  function getMissingHandler() {
    return _missing;
  }
  // setMissingHandler
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function isResolvedTranslateMessage(type, arg // eslint-disable-line @typescript-eslint/no-explicit-any
  ) {
    return type !== 'translate' || !arg.resolvedMessage;
  }
  const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
    trackReactivityValues(); // track reactive dependency
    // NOTE: experimental !!
    let ret;
    try {
      if (false) {}
      if (!_isGlobal) {
        _context.fallbackContext = __root ? (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .getFallbackContext */ .k3)() : undefined;
      }
      ret = fn(_context);
    } finally {
      if (false) {}
      if (!_isGlobal) {
        _context.fallbackContext = undefined;
      }
    }
    if (warnType !== 'translate exists' &&
    // for not `te` (e.g `t`)
    (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .Et)(ret) && ret === _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .NOT_REOSLVED */ .fS || warnType === 'translate exists' && !ret // for `te`
    ) {
      const [key, arg2] = argumentParser();
      if (false) {}
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      /* istanbul ignore next */
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  };
  // t
  function t(...args) {
    return wrapWithDeps(context => Reflect.apply(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .Tl, null, [context, ...args]), () => (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .parseTranslateArgs */ .XS)(...args), 'translate', root => Reflect.apply(root.t, root, [...args]), key => key, val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(val));
  }
  // rt
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t(...[arg1, arg2, (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({
      resolvedMessage: true
    }, arg3 || {})]);
  }
  // d
  function d(...args) {
    return wrapWithDeps(context => Reflect.apply(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .datetime */ .w$, null, [context, ...args]), () => (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .parseDateTimeArgs */ .YL)(...args), 'datetime format', root => Reflect.apply(root.d, root, [...args]), () => _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .MISSING_RESOLVE_VALUE */ .E6, val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(val));
  }
  // n
  function n(...args) {
    return wrapWithDeps(context => Reflect.apply(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .number */ .ai, null, [context, ...args]), () => (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .parseNumberArgs */ .sx)(...args), 'number format', root => Reflect.apply(root.n, root, [...args]), () => _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .MISSING_RESOLVE_VALUE */ .E6, val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(val));
  }
  // for custom processor
  function normalize(values) {
    return values.map(val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(val) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .Et)(val) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(val) ? createTextNode(String(val)) : val);
  }
  const interpolate = val => val;
  const processor = {
    normalize,
    interpolate,
    type: 'vnode'
  };
  // translateVNode, using for `i18n-t` component
  function translateVNode(...args) {
    return wrapWithDeps(context => {
      let ret;
      const _context = context;
      try {
        _context.processor = processor;
        ret = Reflect.apply(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .translate */ .Tl, null, [_context, ...args]);
      } finally {
        _context.processor = null;
      }
      return ret;
    }, () => (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .parseTranslateArgs */ .XS)(...args), 'translate',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    root => root[TranslateVNodeSymbol](...args), key => [createTextNode(key)], val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(val));
  }
  // numberParts, using for `i18n-n` component
  function numberParts(...args) {
    return wrapWithDeps(context => Reflect.apply(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .number */ .ai, null, [context, ...args]), () => (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .parseNumberArgs */ .sx)(...args), 'number format',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    root => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(val) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(val));
  }
  // datetimeParts, using for `i18n-d` component
  function datetimeParts(...args) {
    return wrapWithDeps(context => Reflect.apply(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .datetime */ .w$, null, [context, ...args]), () => (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .parseDateTimeArgs */ .YL)(...args), 'datetime format',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    root => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(val) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  // te
  function te(key, locale) {
    return wrapWithDeps(() => {
      if (!key) {
        return false;
      }
      const targetLocale = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(locale) ? locale : _locale.value;
      const message = getLocaleMessage(targetLocale);
      const resolved = _context.messageResolver(message, key);
      return !translateExistCompatible ? (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .isMessageAST */ .i8)(resolved) || (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .isMessageFunction */ .C8)(resolved) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(resolved) : resolved != null;
    }, () => [key], 'translate exists', root => {
      return Reflect.apply(root.te, root, [key, locale]);
    }, NOOP_RETURN_FALSE, val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(val));
  }
  function resolveMessages(key) {
    let messages = null;
    const locales = (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .fallbackWithLocaleChain */ .kK)(_context, _fallbackLocale.value, _locale.value);
    for (let i = 0; i < locales.length; i++) {
      const targetLocaleMessages = _messages.value[locales[i]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages = messageValue;
        break;
      }
    }
    return messages;
  }
  // tm
  function tm(key) {
    const messages = resolveMessages(key);
    // prettier-ignore
    return messages != null ? messages : __root ? __root.tm(key) || {} : {};
  }
  // getLocaleMessage
  function getLocaleMessage(locale) {
    return _messages.value[locale] || {};
  }
  // setLocaleMessage
  function setLocaleMessage(locale, message) {
    if (flatJson) {
      const _message = {
        [locale]: message
      };
      for (const key in _message) {
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .$3)(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
      message = _message[locale];
    }
    _messages.value[locale] = message;
    _context.messages = _messages.value;
  }
  // mergeLocaleMessage
  function mergeLocaleMessage(locale, message) {
    _messages.value[locale] = _messages.value[locale] || {};
    const _message = {
      [locale]: message
    };
    if (flatJson) {
      for (const key in _message) {
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .$3)(_message, key)) {
          handleFlatJson(_message[key]);
        }
      }
    }
    message = _message[locale];
    (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .deepCopy */ .A4)(message, _messages.value[locale]);
    _context.messages = _messages.value;
  }
  // getDateTimeFormat
  function getDateTimeFormat(locale) {
    return _datetimeFormats.value[locale] || {};
  }
  // setDateTimeFormat
  function setDateTimeFormat(locale, format) {
    _datetimeFormats.value[locale] = format;
    _context.datetimeFormats = _datetimeFormats.value;
    (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .clearDateTimeFormat */ .cz)(_context, locale, format);
  }
  // mergeDateTimeFormat
  function mergeDateTimeFormat(locale, format) {
    _datetimeFormats.value[locale] = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)(_datetimeFormats.value[locale] || {}, format);
    _context.datetimeFormats = _datetimeFormats.value;
    (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .clearDateTimeFormat */ .cz)(_context, locale, format);
  }
  // getNumberFormat
  function getNumberFormat(locale) {
    return _numberFormats.value[locale] || {};
  }
  // setNumberFormat
  function setNumberFormat(locale, format) {
    _numberFormats.value[locale] = format;
    _context.numberFormats = _numberFormats.value;
    (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .clearNumberFormat */ .cX)(_context, locale, format);
  }
  // mergeNumberFormat
  function mergeNumberFormat(locale, format) {
    _numberFormats.value[locale] = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)(_numberFormats.value[locale] || {}, format);
    _context.numberFormats = _numberFormats.value;
    (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .clearNumberFormat */ .cX)(_context, locale, format);
  }
  // for debug
  composerID++;
  // watch root locale & fallbackLocale
  if (__root && _intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .inBrowser */ .M) {
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .wB)(__root.locale, val => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .updateFallbackLocale */ .qY)(_context, _locale.value, _fallbackLocale.value);
      }
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .wB)(__root.fallbackLocale, val => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .updateFallbackLocale */ .qY)(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  // define basic composition API!
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .updateFallbackLocale */ .qY)(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOptionSymbol] = __injectWithOption;
    composer[TranslateVNodeSymbol] = translateVNode;
    composer[DatetimePartsSymbol] = datetimeParts;
    composer[NumberPartsSymbol] = numberParts;
  }
  // for vue-devtools timeline event
  if (false) {}
  return composer;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Convert to I18n Composer Options from VueI18n Options
 *
 * @internal
 */
function convertComposerOptions(options) {
  const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const missing = isFunction(options.missing) ? options.missing : undefined;
  const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
  const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
  const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  const fallbackFormat = !!options.formatFallbackMessages;
  const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
  const pluralizationRules = options.pluralizationRules;
  const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : undefined;
  const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== 'off' : true;
  const escapeParameter = !!options.escapeParameterHtml;
  const inheritLocale = isBoolean(options.sync) ? options.sync : true;
  if (false) {}
  if (false) {}
  let messages = options.messages;
  if (isPlainObject(options.sharedMessages)) {
    const sharedMessages = options.sharedMessages;
    const locales = Object.keys(sharedMessages);
    messages = locales.reduce((messages, locale) => {
      const message = messages[locale] || (messages[locale] = {});
      assign(message, sharedMessages[locale]);
      return messages;
    }, messages || {});
  }
  const {
    __i18n,
    __root,
    __injectWithOption
  } = options;
  const datetimeFormats = options.datetimeFormats;
  const numberFormats = options.numberFormats;
  const flatJson = options.flatJson;
  const translateExistCompatible = options.translateExistCompatible;
  return {
    locale,
    fallbackLocale,
    messages,
    flatJson,
    datetimeFormats,
    numberFormats,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackRoot,
    fallbackFormat,
    modifiers,
    pluralRules: pluralizationRules,
    postTranslation,
    warnHtmlMessage,
    escapeParameter,
    messageResolver: options.messageResolver,
    inheritLocale,
    translateExistCompatible,
    __i18n,
    __root,
    __injectWithOption
  };
}
/**
 * create VueI18n interface factory
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createVueI18n(options = {}, VueI18nLegacy) {
  {
    const composer = createComposer(convertComposerOptions(options));
    const {
      __extender
    } = options;
    // defines VueI18n
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
         false && 0;
        // dummy
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
         false && 0;
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? 'warn' : 'off';
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== 'off';
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
         false && 0;
        return true;
      },
      set preserveDirectiveContent(val) {
         false && 0;
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        // return composer.t(key, (list || named || {}) as any, options)
        return Reflect.apply(composer.t, composer, [key, list || named || {}, options]);
      },
      rt(...args) {
        return Reflect.apply(composer.rt, composer, [...args]);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options = {
          plural: 1
        };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
        }
        const key = arg1;
        if (isString(arg2)) {
          options.locale = arg2;
        } else if (isNumber(arg2)) {
          options.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        // return composer.t(key, (list || named || {}) as any, options)
        return Reflect.apply(composer.t, composer, [key, list || named || {}, options]);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return Reflect.apply(composer.d, composer, [...args]);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format) {
        composer.setDateTimeFormat(locale, format);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format) {
        composer.mergeDateTimeFormat(locale, format);
      },
      // n
      n(...args) {
        return Reflect.apply(composer.n, composer, [...args]);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format) {
        composer.setNumberFormat(locale, format);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format) {
        composer.mergeNumberFormat(locale, format);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
         false && 0;
        return -1;
      }
    };
    vueI18n.__extender = __extender;
    // for vue-devtools timeline event
    if (false) {}
    return vueI18n;
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (val /* ComponentI18nScope */) => val === 'parent' || val === 'global',
    default: 'parent' /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function getInterpolateArg(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{
  slots
},
// SetupContext,
keys) {
  if (keys.length === 1 && keys[0] === 'default') {
    // default slot with list
    const ret = slots.default ? slots.default() : [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ret.reduce((slot, current) => {
      return [...slot,
      // prettier-ignore
      ...(current.type === vue__WEBPACK_IMPORTED_MODULE_4__/* .Fragment */ .FK ? current.children : [current])];
    }, []);
  } else {
    // named slots
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getFragmentableTag(tag) {
  return vue__WEBPACK_IMPORTED_MODULE_4__/* .Fragment */ .FK;
}
const TranslationImpl = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_4__/* .defineComponent */ .pM)({
  /* eslint-disable */
  name: 'i18n-t',
  props: (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: val => (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .Et)(val) || !isNaN(val)
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const {
      slots,
      attrs
    } = context;
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return () => {
      const keys = Object.keys(slots).filter(key => key !== '_');
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== undefined) {
        options.plural = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({}, attrs);
      const tag = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(props.tag) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(props.tag) ? props.tag : getFragmentableTag();
      return (0,vue__WEBPACK_IMPORTED_MODULE_4__.h)(tag, assignedAttrs, children);
    };
  }
});
/**
 * export the public type for h/tsx inference
 * also to avoid inline import() in generated d.ts files
 */
/**
 * Translation Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [TranslationProps](component#translationprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Component Interpolation](../guide/advanced/component)
 *
 * @example
 * ```html
 * <div id="app">
 *   <!-- ... -->
 *   <i18n keypath="term" tag="label" for="tos">
 *     <a :href="url" target="_blank">{{ $t('tos') }}</a>
 *   </i18n>
 *   <!-- ... -->
 * </div>
 * ```
 * ```js
 * import { createApp } from 'vue'
 * import { createI18n } from 'vue-i18n'
 *
 * const messages = {
 *   en: {
 *     tos: 'Term of Service',
 *     term: 'I accept xxx {0}.'
 *   },
 *   ja: {
 *     tos: '利用規約',
 *     term: '私は xxx の{0}に同意します。'
 *   }
 * }
 *
 * const i18n = createI18n({
 *   locale: 'en',
 *   messages
 * })
 *
 * const app = createApp({
 *   data: {
 *     url: '/term'
 *   }
 * }).use(i18n).mount('#app')
 * ```
 *
 * @VueI18nComponent
 */
const Translation = TranslationImpl;
const I18nT = (/* unused pure expression or super */ null && (Translation));
function isVNode(target) {
  return (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(target) && !(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const {
    slots,
    attrs
  } = context;
  return () => {
    const options = {
      part: true
    };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(props.format)) {
      options.key = props.format;
    } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(props.format)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(props.format.key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options.key = props.format.key;
      }
      // Filter out number format options only
      overrides = Object.keys(props.format).reduce((options, prop) => {
        return slotKeys.includes(prop) ? (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({}, options, {
          [prop]: props.format[prop]
        }) // eslint-disable-line @typescript-eslint/no-explicit-any
        : options;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        const node = slot ? slot({
          [part.type]: part.value,
          index,
          parts
        }) : [part.value];
        if (isVNode(node)) {
          node[0].key = `${part.type}-${index}`;
        }
        return node;
      });
    } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(parts)) {
      children = [parts];
    }
    const assignedAttrs = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({}, attrs);
    const tag = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(props.tag) || (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Gv)(props.tag) ? props.tag : getFragmentableTag();
    return (0,vue__WEBPACK_IMPORTED_MODULE_4__.h)(tag, assignedAttrs, children);
  };
}
const NumberFormatImpl = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_4__/* .defineComponent */ .pM)({
  /* eslint-disable */
  name: 'i18n-n',
  props: (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .NUMBER_FORMAT_OPTIONS_KEYS */ .Up, (...args) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i18n[NumberPartsSymbol](...args));
  }
});
/**
 * export the public type for h/tsx inference
 * also to avoid inline import() in generated d.ts files
 */
/**
 * Number Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
 *
 * @VueI18nComponent
 */
const NumberFormat = NumberFormatImpl;
const I18nN = (/* unused pure expression or super */ null && (NumberFormat));
const DatetimeFormatImpl = /* #__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_4__/* .defineComponent */ .pM)({
  /* eslint-disable */
  name: 'i18n-d',
  props: (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context) {
    const i18n = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    return renderFormatter(props, context, _intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .DATETIME_FORMAT_OPTIONS_KEYS */ .w7, (...args) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i18n[DatetimePartsSymbol](...args));
  }
});
/**
 * Datetime Format Component
 *
 * @remarks
 * See the following items for property about details
 *
 * @VueI18nSee [FormattableProps](component#formattableprops)
 * @VueI18nSee [BaseFormatProps](component#baseformatprops)
 * @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
 *
 * @VueI18nDanger
 * Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
 *
 * If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
 *
 * @VueI18nComponent
 */
const DatetimeFormat = DatetimeFormatImpl;
const I18nD = (/* unused pure expression or super */ null && (DatetimeFormat));
function getComposer$2(i18n, instance) {
  const i18nInternal = i18n;
  if (i18n.mode === 'composition') {
    return i18nInternal.__getInstance(instance) || i18n.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
  }
}
function vTDirective(i18n) {
  const _process = binding => {
    const {
      instance,
      modifiers,
      value
    } = binding;
    /* istanbul ignore if */
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n, instance.$);
    if (false) {}
    const parsedValue = parseValue(value);
    return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
  };
  const register = (el, binding) => {
    const [textContent, composer] = _process(binding);
    if (_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .inBrowser */ .M && i18n.global === composer) {
      // global scope only
      el.__i18nWatcher = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .wB)(composer.locale, () => {
        binding.instance && binding.instance.$forceUpdate();
      });
    }
    el.__composer = composer;
    el.textContent = textContent;
  };
  const unregister = el => {
    if (_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .inBrowser */ .M && el.__i18nWatcher) {
      el.__i18nWatcher();
      el.__i18nWatcher = undefined;
      delete el.__i18nWatcher;
    }
    if (el.__composer) {
      el.__composer = undefined;
      delete el.__composer;
    }
  };
  const update = (el, {
    value
  }) => {
    if (el.__composer) {
      const composer = el.__composer;
      const parsedValue = parseValue(value);
      el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
    }
  };
  const getSSRProps = binding => {
    const [textContent] = _process(binding);
    return {
      textContent
    };
  };
  return {
    created: register,
    unmounted: unregister,
    beforeUpdate: update,
    getSSRProps
  };
}
function parseValue(value) {
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(value)) {
    return {
      path: value
    };
  } else if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(value)) {
    if (!('path' in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, 'path');
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const {
    path,
    locale,
    args,
    choice,
    plural
  } = value;
  const options = {};
  const named = args || {};
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .Kg)(locale)) {
    options.locale = locale;
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .Et)(choice)) {
    options.plural = choice;
  }
  if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isNumber */ .Et)(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n, ...options) {
  const pluginOptions = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (false) {}
  if (globalInstall) {
    [!useI18nComponentName ? Translation.name : 'i18n', 'I18nT'].forEach(name => app.component(name, Translation));
    [NumberFormat.name, 'I18nN'].forEach(name => app.component(name, NumberFormat));
    [DatetimeFormat.name, 'I18nD'].forEach(name => app.component(name, DatetimeFormat));
  }
  // install directive
  {
    app.directive('t', vTDirective(i18n));
  }
}
const VueDevToolsLabels = {
  ["vue-devtools-plugin-vue-i18n" /* VueDevToolsIDs.PLUGIN */]: 'Vue I18n devtools',
  ["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */]: 'I18n Resources',
  ["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */]: 'Vue I18n'
};
const VueDevToolsPlaceholders = {
  ["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */]: 'Search for scopes ...'
};
const VueDevToolsTimelineColors = {
  ["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */]: 0xffcd19
};
const VUE_I18N_COMPONENT_TYPES = 'vue-i18n: composer properties';
let devtoolsApi;
async function enableDevTools(app, i18n) {
  return new Promise((resolve, reject) => {
    try {
      setupDevtoolsPlugin({
        id: "vue-devtools-plugin-vue-i18n" /* VueDevToolsIDs.PLUGIN */,
        label: VueDevToolsLabels["vue-devtools-plugin-vue-i18n" /* VueDevToolsIDs.PLUGIN */],
        packageName: 'vue-i18n',
        homepage: 'https://vue-i18n.intlify.dev',
        logo: 'https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png',
        componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
        app: app // eslint-disable-line @typescript-eslint/no-explicit-any
      }, api => {
        devtoolsApi = api;
        api.on.visitComponentTree(({
          componentInstance,
          treeNode
        }) => {
          updateComponentTreeTags(componentInstance, treeNode, i18n);
        });
        api.on.inspectComponent(({
          componentInstance,
          instanceData
        }) => {
          if (componentInstance.vnode.el && componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
            if (i18n.mode === 'legacy') {
              // ignore global scope on legacy mode
              if (componentInstance.vnode.el.__VUE_I18N__ !== i18n.global.__composer) {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            } else {
              inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
            }
          }
        });
        api.addInspector({
          id: "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */,
          label: VueDevToolsLabels["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */],
          icon: 'language',
          treeFilterPlaceholder: VueDevToolsPlaceholders["vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */]
        });
        api.on.getInspectorTree(payload => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */) {
            registerScope(payload, i18n);
          }
        });
        const roots = new Map();
        api.on.getInspectorState(async payload => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */) {
            api.unhighlightElement();
            inspectScope(payload, i18n);
            if (payload.nodeId === 'global') {
              if (!roots.has(payload.app)) {
                const [root] = await api.getComponentInstances(payload.app);
                roots.set(payload.app, root);
              }
              api.highlightElement(roots.get(payload.app));
            } else {
              const instance = getComponentInstance(payload.nodeId, i18n);
              instance && api.highlightElement(instance);
            }
          }
        });
        api.on.editInspectorState(payload => {
          if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector" /* VueDevToolsIDs.CUSTOM_INSPECTOR */) {
            editScope(payload, i18n);
          }
        });
        api.addTimelineLayer({
          id: "vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */,
          label: VueDevToolsLabels["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */],
          color: VueDevToolsTimelineColors["vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */]
        });
        resolve(true);
      });
    } catch (e) {
      console.error(e);
      reject(false);
    }
  });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getI18nScopeLable(instance) {
  return instance.type.name || instance.type.displayName || instance.type.__file || 'Anonymous';
}
function updateComponentTreeTags(instance,
// eslint-disable-line @typescript-eslint/no-explicit-any
treeNode, i18n) {
  // prettier-ignore
  const global = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  if (instance && instance.vnode.el && instance.vnode.el.__VUE_I18N__) {
    // add custom tags local scope only
    if (instance.vnode.el.__VUE_I18N__ !== global) {
      const tag = {
        label: `i18n (${getI18nScopeLable(instance)} Scope)`,
        textColor: 0x000000,
        backgroundColor: 0xffcd19
      };
      treeNode.tags.push(tag);
    }
  }
}
function inspectComposer(instanceData, composer) {
  const type = VUE_I18N_COMPONENT_TYPES;
  instanceData.state.push({
    type,
    key: 'locale',
    editable: true,
    value: composer.locale.value
  });
  instanceData.state.push({
    type,
    key: 'availableLocales',
    editable: false,
    value: composer.availableLocales
  });
  instanceData.state.push({
    type,
    key: 'fallbackLocale',
    editable: true,
    value: composer.fallbackLocale.value
  });
  instanceData.state.push({
    type,
    key: 'inheritLocale',
    editable: true,
    value: composer.inheritLocale
  });
  instanceData.state.push({
    type,
    key: 'messages',
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  });
  {
    instanceData.state.push({
      type,
      key: 'datetimeFormats',
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: 'numberFormats',
      editable: false,
      value: composer.numberFormats.value
    });
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getLocaleMessageValue(messages) {
  const value = {};
  Object.keys(messages).forEach(key => {
    const v = messages[key];
    if (isFunction(v) && 'source' in v) {
      value[key] = getMessageFunctionDetails(v);
    } else if (isMessageAST(v) && v.loc && v.loc.source) {
      value[key] = v.loc.source;
    } else if (isObject(v)) {
      value[key] = getLocaleMessageValue(v);
    } else {
      value[key] = v;
    }
  });
  return value;
}
const ESC = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
};
function escape(s) {
  return s.replace(/[<>"&]/g, escapeChar);
}
function escapeChar(a) {
  return ESC[a] || a;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMessageFunctionDetails(func) {
  const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
  return {
    _custom: {
      type: 'function',
      display: `<span>ƒ</span> ${argString}`
    }
  };
}
function registerScope(payload, i18n) {
  payload.rootNodes.push({
    id: 'global',
    label: 'Global Scope'
  });
  // prettier-ignore
  const global = i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  for (const [keyInstance, instance] of i18n.__instances) {
    // prettier-ignore
    const composer = i18n.mode === 'composition' ? instance : instance.__composer;
    if (global === composer) {
      continue;
    }
    payload.rootNodes.push({
      id: composer.id.toString(),
      label: `${getI18nScopeLable(keyInstance)} Scope`
    });
  }
}
function getComponentInstance(nodeId, i18n) {
  let instance = null;
  if (nodeId !== 'global') {
    for (const [component, composer] of i18n.__instances.entries()) {
      if (composer.id.toString() === nodeId) {
        instance = component;
        break;
      }
    }
  }
  return instance;
}
function getComposer$1(nodeId, i18n) {
  if (nodeId === 'global') {
    return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
  } else {
    const instance = Array.from(i18n.__instances.values()).find(item => item.id.toString() === nodeId);
    if (instance) {
      return i18n.mode === 'composition' ? instance : instance.__composer;
    } else {
      return null;
    }
  }
}
function inspectScope(payload, i18n
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    // TODO:
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload.state = makeScopeInspectState(composer);
  }
  return null;
}
function makeScopeInspectState(composer) {
  const state = {};
  const localeType = 'Locale related info';
  const localeStates = [{
    type: localeType,
    key: 'locale',
    editable: true,
    value: composer.locale.value
  }, {
    type: localeType,
    key: 'fallbackLocale',
    editable: true,
    value: composer.fallbackLocale.value
  }, {
    type: localeType,
    key: 'availableLocales',
    editable: false,
    value: composer.availableLocales
  }, {
    type: localeType,
    key: 'inheritLocale',
    editable: true,
    value: composer.inheritLocale
  }];
  state[localeType] = localeStates;
  const localeMessagesType = 'Locale messages info';
  const localeMessagesStates = [{
    type: localeMessagesType,
    key: 'messages',
    editable: false,
    value: getLocaleMessageValue(composer.messages.value)
  }];
  state[localeMessagesType] = localeMessagesStates;
  {
    const datetimeFormatsType = 'Datetime formats info';
    const datetimeFormatsStates = [{
      type: datetimeFormatsType,
      key: 'datetimeFormats',
      editable: false,
      value: composer.datetimeFormats.value
    }];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = 'Datetime formats info';
    const numberFormatsStates = [{
      type: numberFormatsType,
      key: 'numberFormats',
      editable: false,
      value: composer.numberFormats.value
    }];
    state[numberFormatsType] = numberFormatsStates;
  }
  return state;
}
function addTimelineEvent(event, payload) {
  if (devtoolsApi) {
    let groupId;
    if (payload && 'groupId' in payload) {
      groupId = payload.groupId;
      delete payload.groupId;
    }
    devtoolsApi.addTimelineEvent({
      layerId: "vue-i18n-timeline" /* VueDevToolsIDs.TIMELINE */,
      event: {
        title: event,
        groupId,
        time: Date.now(),
        meta: {},
        data: payload || {},
        logType: event === "compile-error" /* VueDevToolsTimelineEvents.COMPILE_ERROR */ ? 'error' : event === "fallback" /* VueDevToolsTimelineEvents.FALBACK */ || event === "missing" /* VueDevToolsTimelineEvents.MISSING */ ? 'warning' : 'default'
      }
    });
  }
}
function editScope(payload, i18n) {
  const composer = getComposer$1(payload.nodeId, i18n);
  if (composer) {
    const [field] = payload.path;
    if (field === 'locale' && isString(payload.state.value)) {
      composer.locale.value = payload.state.value;
    } else if (field === 'fallbackLocale' && (isString(payload.state.value) || isArray(payload.state.value) || isObject(payload.state.value))) {
      composer.fallbackLocale.value = payload.state.value;
    } else if (field === 'inheritLocale' && isBoolean(payload.state.value)) {
      composer.inheritLocale = payload.state.value;
    }
  }
}

/**
 * Supports compatibility for legacy vue-i18n APIs
 * This mixin is used when we use vue-i18n@v9.x or later
 */
function defineMixin(vuei18n, composer, i18n) {
  return {
    beforeCreate() {
      const instance = getCurrentInstance();
      /* istanbul ignore if */
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const options = this.$options;
      if (options.i18n) {
        const optionsI18n = options.i18n;
        if (options.__i18n) {
          optionsI18n.__i18n = options.__i18n;
        }
        optionsI18n.__root = composer;
        if (this === this.$root) {
          // merge option and gttach global
          this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
        } else {
          optionsI18n.__injectWithOption = true;
          optionsI18n.__extender = i18n.__vueI18nExtend;
          // atttach local VueI18n instance
          this.$i18n = createVueI18n(optionsI18n);
          // extend VueI18n instance
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else if (options.__i18n) {
        if (this === this.$root) {
          // merge option and gttach global
          this.$i18n = mergeToGlobal(vuei18n, options);
        } else {
          // atttach local VueI18n instance
          this.$i18n = createVueI18n({
            __i18n: options.__i18n,
            __injectWithOption: true,
            __extender: i18n.__vueI18nExtend,
            __root: composer
          });
          // extend VueI18n instance
          const _vueI18n = this.$i18n;
          if (_vueI18n.__extender) {
            _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
          }
        }
      } else {
        // attach global VueI18n instance
        this.$i18n = vuei18n;
      }
      if (options.__i18nGlobal) {
        adjustI18nResources(composer, options, options);
      }
      // defines vue-i18n legacy APIs
      this.$t = (...args) => this.$i18n.t(...args);
      this.$rt = (...args) => this.$i18n.rt(...args);
      this.$tc = (...args) => this.$i18n.tc(...args);
      this.$te = (key, locale) => this.$i18n.te(key, locale);
      this.$d = (...args) => this.$i18n.d(...args);
      this.$n = (...args) => this.$i18n.n(...args);
      this.$tm = key => this.$i18n.tm(key);
      i18n.__setInstance(instance, this.$i18n);
    },
    mounted() {
      /* istanbul ignore if */
      if (false) {}
    },
    unmounted() {
      const instance = getCurrentInstance();
      /* istanbul ignore if */
      if (!instance) {
        throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
      }
      const _vueI18n = this.$i18n;
      /* istanbul ignore if */
      if (false) {}
      delete this.$t;
      delete this.$rt;
      delete this.$tc;
      delete this.$te;
      delete this.$d;
      delete this.$n;
      delete this.$tm;
      if (_vueI18n.__disposer) {
        _vueI18n.__disposer();
        delete _vueI18n.__disposer;
        delete _vueI18n.__extender;
      }
      i18n.__deleteInstance(instance);
      delete this.$i18n;
    }
  };
}
function mergeToGlobal(g, options) {
  g.locale = options.locale || g.locale;
  g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
  g.missing = options.missing || g.missing;
  g.silentTranslationWarn = options.silentTranslationWarn || g.silentFallbackWarn;
  g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
  g.formatFallbackMessages = options.formatFallbackMessages || g.formatFallbackMessages;
  g.postTranslation = options.postTranslation || g.postTranslation;
  g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
  g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
  g.sync = options.sync || g.sync;
  g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
  const messages = getLocaleMessages(g.locale, {
    messages: options.messages,
    __i18n: options.__i18n
  });
  Object.keys(messages).forEach(locale => g.mergeLocaleMessage(locale, messages[locale]));
  if (options.datetimeFormats) {
    Object.keys(options.datetimeFormats).forEach(locale => g.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
  }
  if (options.numberFormats) {
    Object.keys(options.numberFormats).forEach(locale => g.mergeNumberFormat(locale, options.numberFormats[locale]));
  }
  return g;
}

/**
 * Injection key for {@link useI18n}
 *
 * @remarks
 * The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
 * Specify the i18n instance created by {@link createI18n} together with `provide` function.
 *
 * @VueI18nGeneral
 */
const I18nInjectionKey = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)('global-vue-i18n');
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function createI18n(options = {}, VueI18nLegacy) {
  // prettier-ignore
  const __legacyMode =  false ? 0 : false;
  // prettier-ignore
  const __globalInjection = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isBoolean */ .Lm)(options.globalInjection) ? options.globalInjection : true;
  // prettier-ignore
  const __allowComposition =  false ? 0 : true;
  const __instances = new Map();
  const [globalScope, __global] = createGlobal(options, __legacyMode);
  const symbol = /* #__PURE__*/(0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .makeSymbol */ .f4)( false ? 0 : '');
  if (false) {}
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n = {
      // mode
      get mode() {
        return  false ? 0 : 'composition';
      },
      // allowComposition
      get allowComposition() {
        return __allowComposition;
      },
      // install plugin
      async install(app, ...options) {
        if (false) {}
        // setup global provider
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n);
        // set composer & vuei18n extend hook options from plugin options
        if ((0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Qd)(options[0])) {
          const opts = options[0];
          i18n.__composerExtend = opts.__composerExtend;
          i18n.__vueI18nExtend = opts.__vueI18nExtend;
        }
        // global method and properties injection for Composition API
        let globalReleaseHandler = null;
        if (!__legacyMode && __globalInjection) {
          globalReleaseHandler = injectGlobalFields(app, i18n.global);
        }
        // install built-in components and directive
        if (true) {
          apply(app, i18n, ...options);
        }
        // setup mixin for Legacy API
        if (false) {}
        // release global scope
        const unmountApp = app.unmount;
        app.unmount = () => {
          globalReleaseHandler && globalReleaseHandler();
          i18n.dispose();
          unmountApp();
        };
        // setup vue-devtools plugin
        if (false) {}
      },
      // global accessor
      get global() {
        return __global;
      },
      dispose() {
        globalScope.stop();
      },
      // @internal
      __instances,
      // @internal
      __getInstance,
      // @internal
      __setInstance,
      // @internal
      __deleteInstance
    };
    return i18n;
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useI18n(options = {}) {
  const instance = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .getCurrentInstance */ .nI)();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
  }
  const i18n = getI18nInstance(instance);
  const gl = getGlobalComposer(i18n);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (false) {}
  if (scope === 'global') {
    adjustI18nResources(gl, options, componentOptions);
    return gl;
  }
  if (scope === 'parent') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let composer = getComposer(i18n, instance, options.__useComponent);
    if (composer == null) {
      if (false) {}
      composer = gl;
    }
    return composer;
  }
  const i18nInternal = i18n;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .assign */ .kp)({}, options);
    if ('__i18n' in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (gl) {
      composerOptions.__root = gl;
    }
    composer = createComposer(composerOptions);
    if (i18nInternal.__composerExtend) {
      composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
    }
    setupLifeCycle(i18nInternal, instance, composer);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
/**
 * Cast to VueI18n legacy compatible type
 *
 * @remarks
 * This API is provided only with [vue-i18n-bridge](https://vue-i18n.intlify.dev/guide/migration/ways.html#what-is-vue-i18n-bridge).
 *
 * The purpose of this function is to convert an {@link I18n} instance created with {@link createI18n | createI18n(legacy: true)} into a `vue-i18n@v8.x` compatible instance of `new VueI18n` in a TypeScript environment.
 *
 * @param i18n - An instance of {@link I18n}
 * @returns A i18n instance which is casted to {@link VueI18n} type
 *
 * @VueI18nTip
 * :new: provided by **vue-i18n-bridge only**
 *
 * @VueI18nGeneral
 */
/* #__NO_SIDE_EFFECTS__ */
const castToVueI18n = (i18n
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  if (!(__VUE_I18N_BRIDGE__ in i18n)) {
    throw createI18nError(I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N);
  }
  return i18n;
};
function createGlobal(options, legacyMode, VueI18nLegacy // eslint-disable-line @typescript-eslint/no-explicit-any
) {
  const scope = (0,vue__WEBPACK_IMPORTED_MODULE_5__/* .effectScope */ .uY)();
  {
    const obj =  false ? 0 : scope.run(() => createComposer(options));
    if (obj == null) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    return [scope, obj];
  }
}
function getI18nInstance(instance) {
  {
    const i18n = (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .inject */ .WQ)(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    /* istanbul ignore if */
    if (!i18n) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
    }
    return i18n;
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScope(options, componentOptions) {
  // prettier-ignore
  return (0,_intlify_shared__WEBPACK_IMPORTED_MODULE_1__/* .isEmptyObject */ .RI)(options) ? '__i18n' in componentOptions ? 'local' : 'global' : !options.useScope ? 'local' : options.useScope;
}
function getGlobalComposer(i18n) {
  // prettier-ignore
  return i18n.mode === 'composition' ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
  let composer = null;
  const root = target.root;
  let current = getParentComponentInstance(target, useComponent);
  while (current != null) {
    const i18nInternal = i18n;
    if (i18n.mode === 'composition') {
      composer = i18nInternal.__getInstance(current);
    } else {
      if (false) {}
    }
    if (composer != null) {
      break;
    }
    if (root === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function getParentComponentInstance(target, useComponent = false) {
  if (target == null) {
    return null;
  }
  {
    // if `useComponent: true` will be specified, we get lexical scope owner instance for use-case slots
    return !useComponent ? target.parent : target.vnode.ctx || target.parent; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}
function setupLifeCycle(i18n, target, composer) {
  let emitter = null;
  {
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .onMounted */ .sV)(() => {
      // inject composer instance to DOM for intlify-devtools
      if (false) {}
    }, target);
    (0,vue__WEBPACK_IMPORTED_MODULE_4__/* .onUnmounted */ .hi)(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _composer = composer;
      // remove composer instance from DOM for intlify-devtools
      if (false) {}
      i18n.__deleteInstance(target);
      // dispose extended resources
      const dispose = _composer[DisposeSymbol];
      if (dispose) {
        dispose();
        delete _composer[DisposeSymbol];
      }
    }, target);
  }
}
function useI18nForLegacy(instance, scope, root, options = {} // eslint-disable-line @typescript-eslint/no-explicit-any
) {
  const isLocalScope = scope === 'local';
  const _composer = shallowRef(null);
  if (isLocalScope && instance.proxy && !(instance.proxy.$options.i18n || instance.proxy.$options.__i18n)) {
    throw createI18nError(I18nErrorCodes.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  }
  const _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : !isString(options.locale);
  const _locale = ref(
  // prettier-ignore
  !isLocalScope || _inheritLocale ? root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
  const _fallbackLocale = ref(
  // prettier-ignore
  !isLocalScope || _inheritLocale ? root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = ref(getLocaleMessages(_locale.value, options));
  // prettier-ignore
  const _datetimeFormats = ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : {
    [_locale.value]: {}
  });
  // prettier-ignore
  const _numberFormats = ref(isPlainObject(options.numberFormats) ? options.numberFormats : {
    [_locale.value]: {}
  });
  // prettier-ignore
  const _missingWarn = isLocalScope ? root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  // prettier-ignore
  const _fallbackWarn = isLocalScope ? root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  // prettier-ignore
  const _fallbackRoot = isLocalScope ? root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
  // configure fall back to root
  const _fallbackFormat = !!options.fallbackFormat;
  // runtime missing
  const _missing = isFunction(options.missing) ? options.missing : null;
  // postTranslation handler
  const _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
  // prettier-ignore
  const _warnHtmlMessage = isLocalScope ? root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const _escapeParameter = !!options.escapeParameter;
  // prettier-ignore
  const _modifiers = isLocalScope ? root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
  // pluralRules
  const _pluralRules = options.pluralRules || isLocalScope && root.pluralRules;
  // track reactivity
  function trackReactivityValues() {
    return [_locale.value, _fallbackLocale.value, _messages.value, _datetimeFormats.value, _numberFormats.value];
  }
  // locale
  const locale = computed({
    get: () => {
      return _composer.value ? _composer.value.locale.value : _locale.value;
    },
    set: val => {
      if (_composer.value) {
        _composer.value.locale.value = val;
      }
      _locale.value = val;
    }
  });
  // fallbackLocale
  const fallbackLocale = computed({
    get: () => {
      return _composer.value ? _composer.value.fallbackLocale.value : _fallbackLocale.value;
    },
    set: val => {
      if (_composer.value) {
        _composer.value.fallbackLocale.value = val;
      }
      _fallbackLocale.value = val;
    }
  });
  // messages
  const messages = computed(() => {
    if (_composer.value) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return _composer.value.messages.value;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return _messages.value;
    }
  });
  const datetimeFormats = computed(() => _datetimeFormats.value);
  const numberFormats = computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return _composer.value ? _composer.value.getPostTranslationHandler() : _postTranslation;
  }
  function setPostTranslationHandler(handler) {
    if (_composer.value) {
      _composer.value.setPostTranslationHandler(handler);
    }
  }
  function getMissingHandler() {
    return _composer.value ? _composer.value.getMissingHandler() : _missing;
  }
  function setMissingHandler(handler) {
    if (_composer.value) {
      _composer.value.setMissingHandler(handler);
    }
  }
  function warpWithDeps(fn) {
    trackReactivityValues();
    return fn();
  }
  function t(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.t, null, [...args])) : warpWithDeps(() => '');
  }
  function rt(...args) {
    return _composer.value ? Reflect.apply(_composer.value.rt, null, [...args]) : '';
  }
  function d(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.d, null, [...args])) : warpWithDeps(() => '');
  }
  function n(...args) {
    return _composer.value ? warpWithDeps(() => Reflect.apply(_composer.value.n, null, [...args])) : warpWithDeps(() => '');
  }
  function tm(key) {
    return _composer.value ? _composer.value.tm(key) : {};
  }
  function te(key, locale) {
    return _composer.value ? _composer.value.te(key, locale) : false;
  }
  function getLocaleMessage(locale) {
    return _composer.value ? _composer.value.getLocaleMessage(locale) : {};
  }
  function setLocaleMessage(locale, message) {
    if (_composer.value) {
      _composer.value.setLocaleMessage(locale, message);
      _messages.value[locale] = message;
    }
  }
  function mergeLocaleMessage(locale, message) {
    if (_composer.value) {
      _composer.value.mergeLocaleMessage(locale, message);
    }
  }
  function getDateTimeFormat(locale) {
    return _composer.value ? _composer.value.getDateTimeFormat(locale) : {};
  }
  function setDateTimeFormat(locale, format) {
    if (_composer.value) {
      _composer.value.setDateTimeFormat(locale, format);
      _datetimeFormats.value[locale] = format;
    }
  }
  function mergeDateTimeFormat(locale, format) {
    if (_composer.value) {
      _composer.value.mergeDateTimeFormat(locale, format);
    }
  }
  function getNumberFormat(locale) {
    return _composer.value ? _composer.value.getNumberFormat(locale) : {};
  }
  function setNumberFormat(locale, format) {
    if (_composer.value) {
      _composer.value.setNumberFormat(locale, format);
      _numberFormats.value[locale] = format;
    }
  }
  function mergeNumberFormat(locale, format) {
    if (_composer.value) {
      _composer.value.mergeNumberFormat(locale, format);
    }
  }
  const wrapper = {
    get id() {
      return _composer.value ? _composer.value.id : -1;
    },
    locale,
    fallbackLocale,
    messages,
    datetimeFormats,
    numberFormats,
    get inheritLocale() {
      return _composer.value ? _composer.value.inheritLocale : _inheritLocale;
    },
    set inheritLocale(val) {
      if (_composer.value) {
        _composer.value.inheritLocale = val;
      }
    },
    get availableLocales() {
      return _composer.value ? _composer.value.availableLocales : Object.keys(_messages.value);
    },
    get modifiers() {
      return _composer.value ? _composer.value.modifiers : _modifiers;
    },
    get pluralRules() {
      return _composer.value ? _composer.value.pluralRules : _pluralRules;
    },
    get isGlobal() {
      return _composer.value ? _composer.value.isGlobal : false;
    },
    get missingWarn() {
      return _composer.value ? _composer.value.missingWarn : _missingWarn;
    },
    set missingWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackWarn() {
      return _composer.value ? _composer.value.fallbackWarn : _fallbackWarn;
    },
    set fallbackWarn(val) {
      if (_composer.value) {
        _composer.value.missingWarn = val;
      }
    },
    get fallbackRoot() {
      return _composer.value ? _composer.value.fallbackRoot : _fallbackRoot;
    },
    set fallbackRoot(val) {
      if (_composer.value) {
        _composer.value.fallbackRoot = val;
      }
    },
    get fallbackFormat() {
      return _composer.value ? _composer.value.fallbackFormat : _fallbackFormat;
    },
    set fallbackFormat(val) {
      if (_composer.value) {
        _composer.value.fallbackFormat = val;
      }
    },
    get warnHtmlMessage() {
      return _composer.value ? _composer.value.warnHtmlMessage : _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      if (_composer.value) {
        _composer.value.warnHtmlMessage = val;
      }
    },
    get escapeParameter() {
      return _composer.value ? _composer.value.escapeParameter : _escapeParameter;
    },
    set escapeParameter(val) {
      if (_composer.value) {
        _composer.value.escapeParameter = val;
      }
    },
    t,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    rt,
    d,
    n,
    tm,
    te,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getDateTimeFormat,
    setDateTimeFormat,
    mergeDateTimeFormat,
    getNumberFormat,
    setNumberFormat,
    mergeNumberFormat
  };
  function sync(composer) {
    composer.locale.value = _locale.value;
    composer.fallbackLocale.value = _fallbackLocale.value;
    Object.keys(_messages.value).forEach(locale => {
      composer.mergeLocaleMessage(locale, _messages.value[locale]);
    });
    Object.keys(_datetimeFormats.value).forEach(locale => {
      composer.mergeDateTimeFormat(locale, _datetimeFormats.value[locale]);
    });
    Object.keys(_numberFormats.value).forEach(locale => {
      composer.mergeNumberFormat(locale, _numberFormats.value[locale]);
    });
    composer.escapeParameter = _escapeParameter;
    composer.fallbackFormat = _fallbackFormat;
    composer.fallbackRoot = _fallbackRoot;
    composer.fallbackWarn = _fallbackWarn;
    composer.missingWarn = _missingWarn;
    composer.warnHtmlMessage = _warnHtmlMessage;
  }
  onBeforeMount(() => {
    if (instance.proxy == null || instance.proxy.$i18n == null) {
      throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const composer = _composer.value = instance.proxy.$i18n.__composer;
    if (scope === 'global') {
      _locale.value = composer.locale.value;
      _fallbackLocale.value = composer.fallbackLocale.value;
      _messages.value = composer.messages.value;
      _datetimeFormats.value = composer.datetimeFormats.value;
      _numberFormats.value = composer.numberFormats.value;
    } else if (isLocalScope) {
      sync(composer);
    }
  });
  return wrapper;
}
const globalExportProps = ['locale', 'fallbackLocale', 'availableLocales'];
const globalExportMethods = ['t', 'rt', 'd', 'n', 'tm', 'te'];
function injectGlobalFields(app, composer) {
  const i18n = Object.create(null);
  globalExportProps.forEach(prop => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap = (0,vue__WEBPACK_IMPORTED_MODULE_5__/* .isRef */ .i9)(desc.value) // check computed props
    ? {
      get() {
        return desc.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n, prop, wrap);
  });
  app.config.globalProperties.$i18n = i18n;
  globalExportMethods.forEach(method => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
  const dispose = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete app.config.globalProperties.$i18n;
    globalExportMethods.forEach(method => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete app.config.globalProperties[`$${method}`];
    });
  };
  return dispose;
}
{
  initFeatureFlags();
}
// register message compiler at vue-i18n
if (__INTLIFY_JIT_COMPILATION__) {
  (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .registerMessageCompiler */ .gS)(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .compile */ .wE);
} else {
  (0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .registerMessageCompiler */ .gS)(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .compileToFunction */ .fw);
}
// register message resolver at vue-i18n
(0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .registerMessageResolver */ .FA)(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .resolveValue */ .g$);
// register fallback locale at vue-i18n
(0,_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .registerLocaleFallbacker */ .XI)(_intlify_core_base__WEBPACK_IMPORTED_MODULE_2__/* .fallbackWithLocaleChain */ .kK);
// NOTE: experimental !!
if (false) {}
if (false) {}


/***/ }),

/***/ 81387:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LA: function() { return /* binding */ createWebHistory; },
/* harmony export */   aE: function() { return /* binding */ createRouter; }
/* harmony export */ });
/* unused harmony exports NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouterMatcher, createWebHashHistory, isNavigationFailure, loadRouteLocation, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17642);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58004);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33853);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45876);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32475);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15024);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31698);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56768);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90144);








/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */


const isBrowser = typeof document !== 'undefined';

/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */
function isRouteComponent(component) {
  return typeof component === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
}
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === 'Module' ||
  // support CF with dynamic imports that do not
  // add the Module string tag
  obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
const noop = () => {};
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */
const isArray = Array.isArray;
function warn(msg) {
  // avoid using ...args as it breaks in older Edge builds
  const args = Array.from(arguments).slice(1);
  console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

/**
 * Encoding Rules (␣ = Space)
 * - Path: ␣ " < > # ? { }
 * - Query: ␣ " < > # & =
 * - Hash: ␣ " < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query, but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
  return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryValue(text) {
  return commonEncode(text)
  // Encode the space as +, encode the + to differentiate it from the space
  .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
  return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
  try {
    return decodeURIComponent('' + text);
  } catch (err) {
     false && 0;
  }
  return '' + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = path => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
  let path,
    query = {},
    searchString = '',
    hash = '';
  // Could use URL and URLSearchParams but IE 11 doesn't support it
  // TODO: move to new URL()
  const hashPos = location.indexOf('#');
  let searchPos = location.indexOf('?');
  // the hash appears before the search, so it's not part of the search string
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location.slice(0, searchPos);
    searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
    query = parseQuery(searchString);
  }
  if (hashPos > -1) {
    path = path || location.slice(0, hashPos);
    // keep the # character
    hash = location.slice(hashPos, location.length);
  }
  // no search and no query
  path = resolveRelativePath(path != null ? path : location, currentLocation);
  // empty path means a relative query or hash `?foo=f`, `#thing`
  return {
    fullPath: path + (searchString && '?') + searchString + hash,
    path,
    query,
    hash: decode(hash)
  };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
  const query = location.query ? stringifyQuery(location.query) : '';
  return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
  // no base or base is not found at the beginning
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
  return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */
function isSameRouteLocation(stringifyQuery, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
  // since the original record has an undefined value for aliasOf
  // but all aliases point to the original record, this will always compare
  // the original record
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */
function isEquivalentArray(a, b) {
  return isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */
function resolveRelativePath(to, from) {
  if (to.startsWith('/')) return to;
  if (false) {}
  if (!to) return from;
  const fromSegments = from.split('/');
  const toSegments = to.split('/');
  const lastToSegment = toSegments[toSegments.length - 1];
  // make . and ./ the same (../ === .., ../../ === ../..)
  // this is the same behavior as new URL()
  if (lastToSegment === '..' || lastToSegment === '.') {
    toSegments.push('');
  }
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    // we stay on the same position
    if (segment === '.') continue;
    // go up in the from array
    if (segment === '..') {
      // we can't go below zero, but we still need to increment toPosition
      if (position > 1) position--;
      // continue
    }
    // we reached a non-relative path, we stop here
    else break;
  }
  return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition).join('/');
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */
const START_LOCATION_NORMALIZED = {
  path: '/',
  // TODO: could we use a symbol in the future?
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined
};
var NavigationType;
(function (NavigationType) {
  NavigationType["pop"] = "pop";
  NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
  NavigationDirection["back"] = "back";
  NavigationDirection["forward"] = "forward";
  NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */
const START = '';
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      // respect <base> tag
      const baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
      // strip full URL origin
      base = base.replace(/^\w+:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // ensure leading slash when it was removed by the regex above avoid leading
  // slash with hash because the file could be read from the disk like file://
  // and the leading slash would cause problems
  if (base[0] !== '/' && base[0] !== '#') base = '/' + base;
  // remove the trailing slash so all other method can just do `base + fullPath`
  // to build an href
  return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
  return base.replace(BEFORE_HASH_RE, '#') + location;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ('el' in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
    /**
     * `id`s can accept pretty much any characters, including CSS combinators
     * like `>` or `~`. It's still possible to retrieve elements using
     * `document.getElementById('~')` but it needs to be escaped when using
     * `document.querySelector('#\\~')` for it to be valid. The only
     * requirements for `id`s are them to be unique on the page and to not be
     * empty (`id=""`). Because of that, when passing an id selector, it should
     * be properly escaped for it to work with `querySelector`. We could check
     * for the id selector to be simple (no CSS combinators `+ >~`) but that
     * would make things inconsistent since they are valid characters for an
     * `id` but would need to be escaped when using `querySelector`, breaking
     * their usage and ending up in no selector returned. Selectors need to be
     * escaped:
     *
     * - `#1-thing` becomes `#\31 -thing`
     * - `#with~symbols` becomes `#with\\~symbols`
     *
     * - More information about  the topic can be found at
     *   https://mathiasbynens.be/notes/html5-id-class.
     * - Practical example: https://mathiasbynens.be/demo/html5-id
     */
    if (false) {}
    const el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
       false && 0;
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  // consume it so it's not used again
  scrollPositions.delete(key);
  return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

let createBaseLocation = () => location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param base - The base path
 * @param location - The window.location object
 */
function createCurrentLocation(base, location) {
  const {
    pathname,
    search,
    hash
  } = location;
  // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
  const hashPos = base.indexOf('#');
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    // prepend the starting slash to hash so the url starts with /#
    if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
    return stripBase(pathFromHash, '');
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  // TODO: should it be a stack? a Dict. Check if the popstate listener
  // can trigger twice
  let pauseState = null;
  const popStateHandler = ({
    state
  }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      // ignore the popstate and reset the pauseState
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    // Here we could also revert the navigation by calling history.go(-delta)
    // this listener will have to be adapted to not trigger again and to wait for the url
    // to be updated before triggering the listeners. Some kind of validation function would also
    // need to be passed to the listeners so the navigation can be accepted
    // call all listeners
    listeners.forEach(listener => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    // set up the listener and prepare teardown callbacks
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1) listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const {
      history
    } = window;
    if (!history.state) return;
    history.replaceState(assign({}, history.state, {
      scroll: computeScrollPosition()
    }), '');
  }
  function destroy() {
    for (const teardown of teardowns) teardown();
    teardowns = [];
    window.removeEventListener('popstate', popStateHandler);
    window.removeEventListener('beforeunload', beforeUnloadListener);
  }
  // set up the listeners and prepare teardown callbacks
  window.addEventListener('popstate', popStateHandler);
  // TODO: could we use 'pagehide' or 'visibilitychange' instead?
  // https://developer.chrome.com/blog/page-lifecycle-api/
  window.addEventListener('beforeunload', beforeUnloadListener, {
    passive: true
  });
  return {
    pauseListeners,
    listen,
    destroy
  };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const {
    history,
    location
  } = window;
  // private variables
  const currentLocation = {
    value: createCurrentLocation(base, location)
  };
  const historyState = {
    value: history.state
  };
  // build current history entry as this is a fresh navigation
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: history.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace) {
    /**
     * if a base tag is provided, and we are on a normal domain, we have to
     * respect the provided `base` attribute because pushState() will use it and
     * potentially erase anything before the `#` like at
     * https://github.com/vuejs/router/issues/685 where a base of
     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
     * there is no host, the `<base>` tag makes no sense and if there isn't a
     * base tag we can just use everything after the `#`.
     */
    const hashIndex = base.indexOf('#');
    const url = hashIndex > -1 ? (location.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      // BROWSER QUIRK
      // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
      history[replace ? 'replaceState' : 'pushState'](state, '', url);
      historyState.value = state;
    } catch (err) {
      if (false) {} else {
        console.error(err);
      }
      // Force the navigation, this also resets the call count
      location[replace ? 'replace' : 'assign'](url);
    }
  }
  function replace(to, data) {
    const state = assign({}, history.state, buildState(historyState.value.back,
    // keep back and forward entries but override current position
    to, historyState.value.forward, true), data, {
      position: historyState.value.position
    });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data) {
    // Add to current entry the information of where we are going
    // as well as saving the current position
    const currentState = assign({},
    // use current history state to gracefully handle a wrong call to
    // history.replaceState
    // https://github.com/vuejs/router/issues/366
    historyState.value, history.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    if (false) {}
    changeLocation(currentState.current, currentState, true);
    const state = assign({}, buildState(currentLocation.value, to, null), {
      position: currentState.position + 1
    }, data);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners) historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign({
    // it's overridden right after
    location: '',
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, 'state', {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}

/**
 * Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
function createMemoryHistory(base = '') {
  let listeners = [];
  let queue = [START];
  let position = 0;
  base = normalizeBase(base);
  function setLocation(location) {
    position++;
    if (position !== queue.length) {
      // we are in the middle, we remove everything from here in the queue
      queue.splice(position);
    }
    queue.push(location);
  }
  function triggerListeners(to, from, {
    direction,
    delta
  }) {
    const info = {
      direction,
      delta,
      type: NavigationType.pop
    };
    for (const callback of listeners) {
      callback(to, from, info);
    }
  }
  const routerHistory = {
    // rewritten by Object.defineProperty
    location: START,
    // TODO: should be kept in queue
    state: {},
    base,
    createHref: createHref.bind(null, base),
    replace(to) {
      // remove current entry and decrement position
      queue.splice(position--, 1);
      setLocation(to);
    },
    push(to, data) {
      setLocation(to);
    },
    listen(callback) {
      listeners.push(callback);
      return () => {
        const index = listeners.indexOf(callback);
        if (index > -1) listeners.splice(index, 1);
      };
    },
    destroy() {
      listeners = [];
      queue = [START];
      position = 0;
    },
    go(delta, shouldTrigger = true) {
      const from = this.location;
      const direction =
      // we are considering delta === 0 going forward, but in abstract mode
      // using 0 for the delta doesn't make sense like it does in html5 where
      // it reloads the page
      delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
      position = Math.max(0, Math.min(position + delta, queue.length - 1));
      if (shouldTrigger) {
        triggerListeners(this.location, from, {
          direction,
          delta
        });
      }
    }
  };
  Object.defineProperty(routerHistory, 'location', {
    enumerable: true,
    get: () => queue[position]
  });
  return routerHistory;
}

/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */
function createWebHashHistory(base) {
  // Make sure this implementation is fine in terms of encoding, specially for IE11
  // for `file://`, directly use the pathname and ignore the base
  // location.pathname contains an initial `/` even at the root: `https://example.com`
  base = location.host ? base || location.pathname + location.search : '';
  // allow the user to provide a `#` in the middle: `/base/#/app`
  if (!base.includes('#')) base += '#';
  if (false) {}
  return createWebHistory(base);
}
function isRouteLocation(route) {
  return typeof route === 'string' || route && typeof route === 'object';
}
function isRouteName(name) {
  return typeof name === 'string' || typeof name === 'symbol';
}
const NavigationFailureSymbol = Symbol( false ? 0 : '');
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var NavigationFailureType;
(function (NavigationFailureType) {
  /**
   * An aborted navigation is a navigation that failed because a navigation
   * guard returned `false` or called `next(false)`
   */
  NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
  /**
   * A cancelled navigation is a navigation that failed because a more recent
   * navigation finished started (not necessarily finished).
   */
  NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
  /**
   * A duplicated navigation is a navigation that failed because it was
   * initiated while already being at the exact same location.
   */
  NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
  [1 /* ErrorTypes.MATCHER_NOT_FOUND */]({
    location,
    currentLocation
  }) {
    return `No match for\n ${JSON.stringify(location)}${currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : ''}`;
  },
  [2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */]({
    from,
    to
  }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [4 /* ErrorTypes.NAVIGATION_ABORTED */]({
    from,
    to
  }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [8 /* ErrorTypes.NAVIGATION_CANCELLED */]({
    from,
    to
  }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [16 /* ErrorTypes.NAVIGATION_DUPLICATED */]({
    from,
    to
  }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
/**
 * Creates a typed NavigationFailure object.
 * @internal
 * @param type - NavigationFailureType
 * @param params - { from, to }
 */
function createRouterError(type, params) {
  // keep full error messages in cjs versions
  if (false) {} else {
    return assign(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
  if (typeof to === 'string') return to;
  if (to.path != null) return to.path;
  const location = {};
  for (const key of propertiesToLog) {
    if (key in to) location[key] = to[key];
  }
  return JSON.stringify(location, null, 2);
}

// default pattern for a param: non-greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
  const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  // the amount of scores is the same as the length of segments except for the root segment "/"
  const score = [];
  // the regexp as a string
  let pattern = options.start ? '^' : '';
  // extracted keys
  const keys = [];
  for (const segment of segments) {
    // the root segment needs special treatment
    const segmentScores = segment.length ? [] : [90 /* PathScore.Root */];
    // allow trailing slash
    if (options.strict && !segment.length) pattern += '/';
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      // resets the score if we are inside a sub-segment /:a-other-:b
      let subSegmentScore = 40 /* PathScore.Segment */ + (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */ : 0);
      if (token.type === 0 /* TokenType.Static */) {
        // prepend the slash if we are starting a new segment
        if (!tokenIndex) pattern += '/';
        pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
        subSegmentScore += 40 /* PathScore.Static */;
      } else if (token.type === 1 /* TokenType.Param */) {
        const {
          value,
          repeatable,
          optional,
          regexp
        } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re = regexp ? regexp : BASE_PARAM_PATTERN;
        // the user provided a custom regexp /:id(\\d+)
        if (re !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10 /* PathScore.BonusCustomRegExp */;
          // make sure the regexp is valid before using it
          try {
            new RegExp(`(${re})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
          }
        }
        // when we repeat we must take care of the repeating leading slash
        let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
        // prepend the slash if we are starting a new segment
        if (!tokenIndex) subPattern =
        // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        optional && segment.length < 2 ? `(?:/${subPattern})` : '/' + subPattern;
        if (optional) subPattern += '?';
        pattern += subPattern;
        subSegmentScore += 20 /* PathScore.Dynamic */;
        if (optional) subSegmentScore += -8 /* PathScore.BonusOptional */;
        if (repeatable) subSegmentScore += -20 /* PathScore.BonusRepeatable */;
        if (re === '.*') subSegmentScore += -50 /* PathScore.BonusWildcard */;
      }
      segmentScores.push(subSegmentScore);
    }
    // an empty array like /home/ -> [[{home}], []]
    // if (!segment.length) pattern += '/'
    score.push(segmentScores);
  }
  // only apply the strict bonus to the last score
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */;
  }
  // TODO: dev only warn double trailing slash
  if (!options.strict) pattern += '/?';
  if (options.end) pattern += '$';
  // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
  else if (options.strict) pattern += '(?:/|$)';
  const re = new RegExp(pattern, options.sensitive ? '' : 'i');
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match) return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || '';
      const key = keys[i - 1];
      params[key.name] = value && key.repeatable ? value.split('/') : value;
    }
    return params;
  }
  function stringify(params) {
    let path = '';
    // for optional parameters to allow to be empty
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0 /* TokenType.Static */) {
          path += token.value;
        } else if (token.type === 1 /* TokenType.Param */) {
          const {
            value,
            repeatable,
            optional
          } = token;
          const param = value in params ? params[value] : '';
          if (isArray(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray(param) ? param.join('/') : param;
          if (!text) {
            if (optional) {
              // if we have more than one optional param like /:a?-static we don't need to care about the optional param
              if (segment.length < 2) {
                // remove the last slash as we could be at the end
                if (path.endsWith('/')) path = path.slice(0, -1);
                // do not append a slash on the next iteration
                else avoidDuplicatedSlash = true;
              }
            } else throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    // avoid empty path when we have multiple optional params
    return path || '/';
  }
  return {
    re,
    score,
    keys,
    parse,
    stringify
  };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    // only keep going if diff === 0
    if (diff) return diff;
    i++;
  }
  // if the last subsegment was Static, the shorter segments should be sorted first
  // otherwise sort the longest segment first
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */ ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */ ? 1 : -1;
  }
  return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    // do not return if both are equal
    if (comp) return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore)) return 1;
    if (isLastScoreNegative(bScore)) return -1;
  }
  // if a and b share the same score entries but b has more, sort b first
  return bScore.length - aScore.length;
  // this is the ternary version
  // return aScore.length < bScore.length
  //   ? 1
  //   : aScore.length > bScore.length
  //   ? -1
  //   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0 /* TokenType.Static */,
  value: ''
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
  if (!path) return [[]];
  if (path === '/') return [[ROOT_TOKEN]];
  if (!path.startsWith('/')) {
    throw new Error( false ? 0 : `Invalid path "${path}"`);
  }
  // if (tokenCache.has(path)) return tokenCache.get(path)!
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0 /* TokenizerState.Static */;
  let previousState = state;
  const tokens = [];
  // the segment will always be valid because we get into the initial state
  // with the leading /
  let segment;
  function finalizeSegment() {
    if (segment) tokens.push(segment);
    segment = [];
  }
  // index on the path
  let i = 0;
  // char at index
  let char;
  // buffer of the value read
  let buffer = '';
  // custom regexp for a param
  let customRe = '';
  function consumeBuffer() {
    if (!buffer) return;
    if (state === 0 /* TokenizerState.Static */) {
      segment.push({
        type: 0 /* TokenType.Static */,
        value: buffer
      });
    } else if (state === 1 /* TokenizerState.Param */ || state === 2 /* TokenizerState.ParamRegExp */ || state === 3 /* TokenizerState.ParamRegExpEnd */) {
      if (segment.length > 1 && (char === '*' || char === '+')) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1 /* TokenType.Param */,
        value: buffer,
        regexp: customRe,
        repeatable: char === '*' || char === '+',
        optional: char === '*' || char === '?'
      });
    } else {
      crash('Invalid state to consume buffer');
    }
    buffer = '';
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === '\\' && state !== 2 /* TokenizerState.ParamRegExp */) {
      previousState = state;
      state = 4 /* TokenizerState.EscapeNext */;
      continue;
    }
    switch (state) {
      case 0 /* TokenizerState.Static */:
        if (char === '/') {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ':') {
          consumeBuffer();
          state = 1 /* TokenizerState.Param */;
        } else {
          addCharToBuffer();
        }
        break;
      case 4 /* TokenizerState.EscapeNext */:
        addCharToBuffer();
        state = previousState;
        break;
      case 1 /* TokenizerState.Param */:
        if (char === '(') {
          state = 2 /* TokenizerState.ParamRegExp */;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0 /* TokenizerState.Static */;
          // go back one character if we were not modifying
          if (char !== '*' && char !== '?' && char !== '+') i--;
        }
        break;
      case 2 /* TokenizerState.ParamRegExp */:
        // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
        // it already works by escaping the closing )
        // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
        // is this really something people need since you can also write
        // /prefix_:p()_suffix
        if (char === ')') {
          // handle the escaped )
          if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;else state = 3 /* TokenizerState.ParamRegExpEnd */;
        } else {
          customRe += char;
        }
        break;
      case 3 /* TokenizerState.ParamRegExpEnd */:
        // same as finalizing a param
        consumeBuffer();
        state = 0 /* TokenizerState.Static */;
        // go back one character if we were not modifying
        if (char !== '*' && char !== '?' && char !== '+') i--;
        customRe = '';
        break;
      default:
        crash('Unknown state');
        break;
    }
  }
  if (state === 2 /* TokenizerState.ParamRegExp */) crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  // tokenCache.set(path, tokens)
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  // warn against params with the same name
  if (false) {}
  const matcher = assign(parser, {
    record,
    parent,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  if (parent) {
    // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
  }
  return matcher;
}

/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */
function createRouterMatcher(routes, globalOptions) {
  // normalized ordered array of matchers
  const matchers = [];
  const matcherMap = new Map();
  globalOptions = mergeOptions({
    strict: false,
    end: true,
    sensitive: false
  }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    // used later on to remove by name
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    if (false) {}
    // we might be the child of an alias
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    // generate an array of records to correctly handle aliases
    const normalizedRecords = [mainNormalizedRecord];
    if ('alias' in record) {
      const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(
        // we need to normalize again to ensure the `mods` property
        // being non enumerable
        normalizeRouteRecord(assign({}, mainNormalizedRecord, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          // we might be the child of an alias
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        })));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const {
        path
      } = normalizedRecord;
      // Build up the path for nested routes if the child isn't an absolute
      // route. Only add the / delimiter if the child path isn't empty and if the
      // parent path doesn't have a trailing slash
      if (parent && path[0] !== '/') {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      if (false) {}
      // create the object beforehand, so it can be passed to children
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (false) {}
      // if we are an alias we must tell the original record that we exist,
      // so we can be removed
      if (originalRecord) {
        originalRecord.alias.push(matcher);
        if (false) {}
      } else {
        // otherwise, the first record is the original and others are aliases
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
        // remove the route if named and only for the top record (avoid in nested calls)
        // this works because the original record is the first one
        if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
      }
      // Avoid adding a record that doesn't display anything. This allows passing through records without a component to
      // not be reached and pass through the catch all route
      if (isMatchable(matcher)) {
        insertMatcher(matcher);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      // if there was no original record, then the first one was not an alias and all
      // other aliases (if any) need to reference this record when adding children
      originalRecord = originalRecord || matcher;
      // TODO: add normalized records for more flexibility
      // if (parent && isAliasRecord(originalRecord)) {
      //   parent.children.push(originalRecord)
      // }
    }
    return originalMatcher ? () => {
      // since other matchers are aliases, they should be removed by the original matcher
      removeRoute(originalMatcher);
    } : noop;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    const index = findInsertionIndex(matcher, matchers);
    matchers.splice(index, 0, matcher);
    // only add the original record to the name map
    if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
  }
  function resolve(location, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ('name' in location && location.name) {
      matcher = matcherMap.get(location.name);
      if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
        location
      });
      // warn if the user is passing invalid params so they can debug it better when they get removed
      if (false) {}
      name = matcher.record.name;
      params = assign(
      // paramsFromLocation is a new object
      paramsFromLocation(currentLocation.params,
      // only keep params that exist in the resolved location
      // only keep optional params coming from a parent record
      matcher.keys.filter(k => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter(k => k.optional) : []).map(k => k.name)),
      // discard any existing params in the current location that do not exist here
      // #1497 this ensures better active/exact matching
      location.params && paramsFromLocation(location.params, matcher.keys.map(k => k.name)));
      // throws if cannot be stringified
      path = matcher.stringify(params);
    } else if (location.path != null) {
      // no need to resolve the path with the matcher as it was provided
      // this also allows the user to control the encoding
      path = location.path;
      if (false) {}
      matcher = matchers.find(m => m.re.test(path));
      // matcher should have a value after the loop
      if (matcher) {
        // we know the matcher works because we tested the regexp
        params = matcher.parse(path);
        name = matcher.record.name;
      }
      // location is a relative path
    } else {
      // match by name or path of current route
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find(m => m.re.test(currentLocation.path));
      if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
        location,
        currentLocation
      });
      name = matcher.record.name;
      // since we are navigating to the same location, we don't need to pick the
      // params like when `name` is provided
      params = assign({}, currentLocation.params, location.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      // reversed order so parents are at the beginning
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  // add initial routes
  routes.forEach(route => addRoute(route));
  function clearRoutes() {
    matchers.length = 0;
    matcherMap.clear();
  }
  return {
    addRoute,
    resolve,
    removeRoute,
    clearRoutes,
    getRoutes,
    getRecordMatcher
  };
}
function paramsFromLocation(params, keys) {
  const newParams = {};
  for (const key of keys) {
    if (key in params) newParams[key] = params[key];
  }
  return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
  const normalized = {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: record.aliasOf,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: 'components' in record ? record.components || null : record.component && {
      default: record.component
    }
  };
  // mods contain modules and shouldn't be copied,
  // logged or anything. It's just used for internal
  // advanced use cases like data loaders
  Object.defineProperty(normalized, 'mods', {
    value: {}
  });
  return normalized;
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */
function normalizeRecordProps(record) {
  const propsObject = {};
  // props does not exist on redirect records, but we can set false directly
  const props = record.props || false;
  if ('component' in record) {
    propsObject.default = props;
  } else {
    // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for (const name in record.components) propsObject[name] = typeof props === 'object' ? props[name] : props;
  }
  return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf) return true;
    record = record.parent;
  }
  return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
  const options = {};
  for (const key in defaults) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
  }
  return options;
}
function isSameParam(a, b) {
  return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */
function checkSameParams(a, b) {
  for (const key of a.keys) {
    if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
  for (const key of b.keys) {
    if (!key.optional && !a.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
  }
}
/**
 * A route with a name and a child with an empty path without a name should warn when adding the route
 *
 * @param mainNormalizedRecord - RouteRecordNormalized
 * @param parent - RouteRecordMatcher
 */
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
  if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) {
    warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
  }
}
function checkMissingParamsInAbsolutePath(record, parent) {
  for (const key of parent.keys) {
    if (!record.keys.find(isSameParam.bind(null, key))) return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
  }
}
/**
 * Performs a binary search to find the correct insertion index for a new matcher.
 *
 * Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
 * with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
 *
 * @param matcher - new matcher to be inserted
 * @param matchers - existing matchers
 */
function findInsertionIndex(matcher, matchers) {
  // First phase: binary search based on score
  let lower = 0;
  let upper = matchers.length;
  while (lower !== upper) {
    const mid = lower + upper >> 1;
    const sortOrder = comparePathParserScore(matcher, matchers[mid]);
    if (sortOrder < 0) {
      upper = mid;
    } else {
      lower = mid + 1;
    }
  }
  // Second phase: check for an ancestor with the same score
  const insertionAncestor = getInsertionAncestor(matcher);
  if (insertionAncestor) {
    upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
    if (false) {}
  }
  return upper;
}
function getInsertionAncestor(matcher) {
  let ancestor = matcher;
  while (ancestor = ancestor.parent) {
    if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) {
      return ancestor;
    }
  }
  return;
}
/**
 * Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
 * a component, or name, or redirect, are just used to group other routes.
 * @param matcher
 * @param matcher.record record of the matcher
 * @returns
 */
function isMatchable({
  record
}) {
  return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
  const query = {};
  // avoid creating an object with an empty key and empty value
  // because of split('&')
  if (search === '' || search === '?') return query;
  const hasLeadingIM = search[0] === '?';
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
  for (let i = 0; i < searchParams.length; ++i) {
    // pre decode the + into space
    const searchParam = searchParams[i].replace(PLUS_RE, ' ');
    // allow the = character
    const eqPos = searchParam.indexOf('=');
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      // an extra variable for ts types
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
  let search = '';
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      // only null adds the value
      if (value !== undefined) {
        search += (search.length ? '&' : '') + key;
      }
      continue;
    }
    // keep null values
    const values = isArray(value) ? value.map(v => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach(value => {
      // skip undefined values in arrays as if they were not present
      // smaller code than using filter
      if (value !== undefined) {
        // only append & with non-empty search
        search += (search.length ? '&' : '') + key;
        if (value != null) search += '=' + value;
      }
    });
  }
  return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== undefined) {
      normalizedQuery[key] = isArray(value) ? value.map(v => v == null ? null : '' + v) : value == null ? value : '' + value;
    }
  }
  return normalizedQuery;
}

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */
const matchedRouteKey = Symbol( false ? 0 : '');
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */
const viewDepthKey = Symbol( false ? 0 : '');
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
const routerKey = Symbol( false ? 0 : '');
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
const routeLocationKey = Symbol( false ? 0 : '');
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */
const routerViewLocationKey = Symbol( false ? 0 : '');

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
  let handlers = [];
  function add(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1) handlers.splice(i, 1);
    };
  }
  function reset() {
    handlers = [];
  }
  return {
    add,
    list: () => handlers.slice(),
    reset
  };
}
function registerGuard(record, name, guard) {
  const removeFromList = () => {
    record[name].delete(guard);
  };
  onUnmounted(removeFromList);
  onDeactivated(removeFromList);
  onActivated(() => {
    record[name].add(guard);
  });
  record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */
function onBeforeRouteLeave(leaveGuard) {
  if (false) {}
  const activeRecord = inject(matchedRouteKey,
  // to avoid warning
  {}).value;
  if (!activeRecord) {
     false && 0;
    return;
  }
  registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */
function onBeforeRouteUpdate(updateGuard) {
  if (false) {}
  const activeRecord = inject(matchedRouteKey,
  // to avoid warning
  {}).value;
  if (!activeRecord) {
     false && 0;
    return;
  }
  registerGuard(activeRecord, 'updateGuards', updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = fn => fn()) {
  // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
  const enterCallbackArray = record && (
  // name is defined if record is because of the function overload
  record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve, reject) => {
    const next = valid => {
      if (valid === false) {
        reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray &&
        // since enterCallbackArray is truthy, both record and name also are
        record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') {
          enterCallbackArray.push(valid);
        }
        resolve();
      }
    };
    // wrapping with Promise.resolve allows it to work with both async and sync guards
    const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from,  false ? 0 : next));
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3) guardCall = guardCall.then(next);
    if (false) {}
    guardCall.catch(err => reject(err));
  });
}
function canOnlyBeCalledOnce(next, to, from) {
  let called = 0;
  return function () {
    if (called++ === 1) warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
    // @ts-expect-error: we put it in the original one because it's easier to check
    next._called = true;
    if (called === 1) next.apply(null, arguments);
  };
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = fn => fn()) {
  const guards = [];
  for (const record of matched) {
    if (false) {}
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (false) {}
      // skip update and leave guards if the route component is not mounted
      if (guardType !== 'beforeRouteEnter' && !record.instances[name]) continue;
      if (isRouteComponent(rawComponent)) {
        // __vccOpts is added by vue-class-component and contain the regular options
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
      } else {
        // start requesting the chunk already
        let componentPromise = rawComponent();
        if (false) {}
        guards.push(() => componentPromise.then(resolved => {
          if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          // keep the resolved module for plugins like data loaders
          record.mods[name] = resolved;
          // replace the function with the resolved component
          // cannot be null or undefined because we went into the for loop
          record.components[name] = resolvedComponent;
          // __vccOpts is added by vue-class-component and contain the regular options
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
        }));
      }
    }
  }
  return guards;
}
/**
 * Ensures a route is loaded, so it can be passed as o prop to `<RouterView>`.
 *
 * @param route - resolved route to load
 */
function loadRouteLocation(route) {
  return route.matched.every(record => record.redirect) ? Promise.reject(new Error('Cannot load a route that redirects.')) : Promise.all(route.matched.map(record => record.components && Promise.all(Object.keys(record.components).reduce((promises, name) => {
    const rawComponent = record.components[name];
    if (typeof rawComponent === 'function' && !('displayName' in rawComponent)) {
      promises.push(rawComponent().then(resolved => {
        if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
        const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
        // keep the resolved module for plugins like data loaders
        record.mods[name] = resolved;
        // replace the function with the resolved component
        // cannot be null or undefined because we went into the for loop
        record.components[name] = resolvedComponent;
        return;
      }));
    }
    return promises;
  }, [])))).then(() => route);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
/**
 * Returns the internal behavior of a {@link RouterLink} without the rendering part.
 *
 * @param props - a `to` location and an optional `replace` flag
 */
function useLink(props) {
  const router = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .inject */ .WQ)(routerKey);
  const currentRoute = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .inject */ .WQ)(routeLocationKey);
  let hasPrevious = false;
  let previousTo = null;
  const route = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => {
    const to = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .unref */ .R1)(props.to);
    if (false) {}
    return router.resolve(to);
  });
  const activeRecordIndex = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => {
    const {
      matched
    } = route.value;
    const {
      length
    } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length) return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1) return index;
    // possible parent record
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return (
      // we are dealing with nested routes
      length > 1 &&
      // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      getOriginalPath(routeMatched) === parentRecordPath &&
      // avoid comparing the child with its parent
      currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index
    );
  });
  const isActive = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router[(0,vue__WEBPACK_IMPORTED_MODULE_9__/* .unref */ .R1)(props.replace) ? 'replace' : 'push']((0,vue__WEBPACK_IMPORTED_MODULE_9__/* .unref */ .R1)(props.to)
      // avoid uncaught errors are they are logged anyway
      ).catch(noop);
    }
    return Promise.resolve();
  }
  // devtools only
  if (false) {}
  /**
   * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
   */
  return {
    route,
    href: (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_8__/* .defineComponent */ .pM)({
  name: 'RouterLink',
  compatConfig: {
    MODE: 3
  },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    }
  },
  useLink,
  setup(props, {
    slots
  }) {
    const link = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .reactive */ .Kh)(useLink(props));
    const {
      options
    } = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .inject */ .WQ)(routerKey);
    const elClass = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : (0,vue__WEBPACK_IMPORTED_MODULE_8__.h)('a', {
        'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
  // don't redirect when preventDefault called
  if (e.defaultPrevented) return;
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) return;
  // don't redirect if `target="_blank"`
  // @ts-expect-error getAttribute does exist
  if (e.currentTarget && e.currentTarget.getAttribute) {
    // @ts-expect-error getAttribute exists
    const target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) return;
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === 'string') {
      if (innerValue !== outerValue) return false;
    } else {
      if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
    }
  }
  return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_8__/* .defineComponent */ .pM)({
  name: 'RouterView',
  // #674 we manually inherit them
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'default'
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: {
    MODE: 3
  },
  setup(props, {
    attrs,
    slots
  }) {
     false && 0;
    const injectedRoute = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .inject */ .WQ)(routerViewLocationKey);
    const routeToDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => props.route || injectedRoute.value);
    const injectedDepth = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .inject */ .WQ)(viewDepthKey, 0);
    // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
    // that are used to reuse the `path` property
    const depth = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => {
      let initialDepth = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .unref */ .R1)(injectedDepth);
      const {
        matched
      } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => routeToDisplay.value.matched[depth.value]);
    (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .provide */ .Gt)(viewDepthKey, (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .computed */ .EW)(() => depth.value + 1));
    (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .provide */ .Gt)(matchedRouteKey, matchedRouteRef);
    (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .provide */ .Gt)(routerViewLocationKey, routeToDisplay);
    const viewRef = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .ref */ .KR)();
    // watch at the same time the component instance, the route record we are
    // rendering, and the name
    (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .watch */ .wB)(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      // copy reused instances
      if (to) {
        // this will update the instance for new instances as well as reused
        // instances when navigating to a new route
        to.instances[name] = instance;
        // the component instance is reused for a different route or name, so
        // we copy any saved update or leave guards. With async setup, the
        // mounting component will mount before the matchedRoute changes,
        // making instance === oldInstance, so we check if guards have been
        // added before. This works because we remove guards when
        // unmounting/deactivating components
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      // trigger beforeRouteEnter next callbacks
      if (instance && to && (
      // if there is no instance but to and from are the same this might be
      // the first visit
      !from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
      }
    }, {
      flush: 'post'
    });
    return () => {
      const route = routeToDisplay.value;
      // we need the value at the time we render because when we unmount, we
      // navigated to a different location so the value is different
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, {
          Component: ViewComponent,
          route
        });
      }
      // props from route configuration
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = vnode => {
        // remove the instance reference to prevent leak
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = (0,vue__WEBPACK_IMPORTED_MODULE_8__.h)(ViewComponent, assign({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      if (false) {}
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        normalizeSlot(slots.default, {
          Component: component,
          route
        }) || component
      );
    };
  }
});
function normalizeSlot(slot, data) {
  if (!slot) return null;
  const slotContent = slot(data);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */
const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
  const instance = getCurrentInstance();
  const parentName = instance.parent && instance.parent.type.name;
  const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
  if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition')) && typeof parentSubTreeType === 'object' && parentSubTreeType.name === 'RouterView') {
    const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
    warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` + `Use slot props instead:\n\n` + `<router-view v-slot="{ Component }">\n` + `  <${comp}>\n` + `    <component :is="Component" />\n` + `  </${comp}>\n` + `</router-view>`);
  }
}

/**
 * Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
 *
 * @param routeLocation - routeLocation to format
 * @param tooltip - optional tooltip
 * @returns a copy of the routeLocation
 */
function formatRouteLocation(routeLocation, tooltip) {
  const copy = assign({}, routeLocation, {
    // remove variables that can contain vue instances
    matched: routeLocation.matched.map(matched => omit(matched, ['instances', 'children', 'aliasOf']))
  });
  return {
    _custom: {
      type: null,
      readOnly: true,
      display: routeLocation.fullPath,
      tooltip,
      value: copy
    }
  };
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
  // Take over router.beforeEach and afterEach
  // make sure we are not registering the devtool twice
  if (router.__hasDevtools) return;
  router.__hasDevtools = true;
  // increment to support multiple router instances
  const id = routerId++;
  setupDevtoolsPlugin({
    id: 'org.vuejs.router' + (id ? '.' + id : ''),
    label: 'Vue Router',
    packageName: 'vue-router',
    homepage: 'https://router.vuejs.org',
    logo: 'https://router.vuejs.org/logo.png',
    componentStateTypes: ['Routing'],
    app
  }, api => {
    if (typeof api.now !== 'function') {
      console.warn('[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.');
    }
    // display state added by the router
    api.on.inspectComponent((payload, ctx) => {
      if (payload.instanceData) {
        payload.instanceData.state.push({
          type: 'Routing',
          key: '$route',
          editable: false,
          value: formatRouteLocation(router.currentRoute.value, 'Current Route')
        });
      }
    });
    // mark router-link as active and display tags on router views
    api.on.visitComponentTree(({
      treeNode: node,
      componentInstance
    }) => {
      if (componentInstance.__vrv_devtools) {
        const info = componentInstance.__vrv_devtools;
        node.tags.push({
          label: (info.name ? `${info.name.toString()}: ` : '') + info.path,
          textColor: 0,
          tooltip: 'This component is rendered by &lt;router-view&gt;',
          backgroundColor: PINK_500
        });
      }
      // if multiple useLink are used
      if (isArray(componentInstance.__vrl_devtools)) {
        componentInstance.__devtoolsApi = api;
        componentInstance.__vrl_devtools.forEach(devtoolsData => {
          let label = devtoolsData.route.path;
          let backgroundColor = ORANGE_400;
          let tooltip = '';
          let textColor = 0;
          if (devtoolsData.error) {
            label = devtoolsData.error;
            backgroundColor = RED_100;
            textColor = RED_700;
          } else if (devtoolsData.isExactActive) {
            backgroundColor = LIME_500;
            tooltip = 'This is exactly active';
          } else if (devtoolsData.isActive) {
            backgroundColor = BLUE_600;
            tooltip = 'This link is active';
          }
          node.tags.push({
            label,
            textColor,
            tooltip,
            backgroundColor
          });
        });
      }
    });
    watch(router.currentRoute, () => {
      // refresh active state
      refreshRoutesView();
      api.notifyComponentUpdate();
      api.sendInspectorTree(routerInspectorId);
      api.sendInspectorState(routerInspectorId);
    });
    const navigationsLayerId = 'router:navigations:' + id;
    api.addTimelineLayer({
      id: navigationsLayerId,
      label: `Router${id ? ' ' + id : ''} Navigations`,
      color: 0x40a8c4
    });
    // const errorsLayerId = 'router:errors'
    // api.addTimelineLayer({
    //   id: errorsLayerId,
    //   label: 'Router Errors',
    //   color: 0xea5455,
    // })
    router.onError((error, to) => {
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'Error during Navigation',
          subtitle: to.fullPath,
          logType: 'error',
          time: api.now(),
          data: {
            error
          },
          groupId: to.meta.__navigationId
        }
      });
    });
    // attached to `meta` and used to group events
    let navigationId = 0;
    router.beforeEach((to, from) => {
      const data = {
        guard: formatDisplay('beforeEach'),
        from: formatRouteLocation(from, 'Current Location during this navigation'),
        to: formatRouteLocation(to, 'Target location')
      };
      // Used to group navigations together, hide from devtools
      Object.defineProperty(to.meta, '__navigationId', {
        value: navigationId++
      });
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          time: api.now(),
          title: 'Start of navigation',
          subtitle: to.fullPath,
          data,
          groupId: to.meta.__navigationId
        }
      });
    });
    router.afterEach((to, from, failure) => {
      const data = {
        guard: formatDisplay('afterEach')
      };
      if (failure) {
        data.failure = {
          _custom: {
            type: Error,
            readOnly: true,
            display: failure ? failure.message : '',
            tooltip: 'Navigation Failure',
            value: failure
          }
        };
        data.status = formatDisplay('❌');
      } else {
        data.status = formatDisplay('✅');
      }
      // we set here to have the right order
      data.from = formatRouteLocation(from, 'Current Location during this navigation');
      data.to = formatRouteLocation(to, 'Target location');
      api.addTimelineEvent({
        layerId: navigationsLayerId,
        event: {
          title: 'End of navigation',
          subtitle: to.fullPath,
          time: api.now(),
          data,
          logType: failure ? 'warning' : 'default',
          groupId: to.meta.__navigationId
        }
      });
    });
    /**
     * Inspector of Existing routes
     */
    const routerInspectorId = 'router-inspector:' + id;
    api.addInspector({
      id: routerInspectorId,
      label: 'Routes' + (id ? ' ' + id : ''),
      icon: 'book',
      treeFilterPlaceholder: 'Search routes'
    });
    function refreshRoutesView() {
      // the routes view isn't active
      if (!activeRoutesPayload) return;
      const payload = activeRoutesPayload;
      // children routes will appear as nested
      let routes = matcher.getRoutes().filter(route => !route.parent ||
      // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !route.parent.record.components);
      // reset match state to false
      routes.forEach(resetMatchStateOnRouteRecord);
      // apply a match state if there is a payload
      if (payload.filter) {
        routes = routes.filter(route =>
        // save matches state based on the payload
        isRouteMatching(route, payload.filter.toLowerCase()));
      }
      // mark active routes
      routes.forEach(route => markRouteRecordActive(route, router.currentRoute.value));
      payload.rootNodes = routes.map(formatRouteRecordForInspector);
    }
    let activeRoutesPayload;
    api.on.getInspectorTree(payload => {
      activeRoutesPayload = payload;
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        refreshRoutesView();
      }
    });
    /**
     * Display information about the currently selected route record
     */
    api.on.getInspectorState(payload => {
      if (payload.app === app && payload.inspectorId === routerInspectorId) {
        const routes = matcher.getRoutes();
        const route = routes.find(route => route.record.__vd_id === payload.nodeId);
        if (route) {
          payload.state = {
            options: formatRouteRecordMatcherForStateInspector(route)
          };
        }
      }
    });
    api.sendInspectorTree(routerInspectorId);
    api.sendInspectorState(routerInspectorId);
  });
}
function modifierForKey(key) {
  if (key.optional) {
    return key.repeatable ? '*' : '?';
  } else {
    return key.repeatable ? '+' : '';
  }
}
function formatRouteRecordMatcherForStateInspector(route) {
  const {
    record
  } = route;
  const fields = [{
    editable: false,
    key: 'path',
    value: record.path
  }];
  if (record.name != null) {
    fields.push({
      editable: false,
      key: 'name',
      value: record.name
    });
  }
  fields.push({
    editable: false,
    key: 'regexp',
    value: route.re
  });
  if (route.keys.length) {
    fields.push({
      editable: false,
      key: 'keys',
      value: {
        _custom: {
          type: null,
          readOnly: true,
          display: route.keys.map(key => `${key.name}${modifierForKey(key)}`).join(' '),
          tooltip: 'Param keys',
          value: route.keys
        }
      }
    });
  }
  if (record.redirect != null) {
    fields.push({
      editable: false,
      key: 'redirect',
      value: record.redirect
    });
  }
  if (route.alias.length) {
    fields.push({
      editable: false,
      key: 'aliases',
      value: route.alias.map(alias => alias.record.path)
    });
  }
  if (Object.keys(route.record.meta).length) {
    fields.push({
      editable: false,
      key: 'meta',
      value: route.record.meta
    });
  }
  fields.push({
    key: 'score',
    editable: false,
    value: {
      _custom: {
        type: null,
        readOnly: true,
        display: route.score.map(score => score.join(', ')).join(' | '),
        tooltip: 'Score used to sort routes',
        value: route.score
      }
    }
  });
  return fields;
}
/**
 * Extracted from tailwind palette
 */
const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
const RED_100 = 0xfee2e2;
const RED_700 = 0xb91c1c;
function formatRouteRecordForInspector(route) {
  const tags = [];
  const {
    record
  } = route;
  if (record.name != null) {
    tags.push({
      label: String(record.name),
      textColor: 0,
      backgroundColor: CYAN_400
    });
  }
  if (record.aliasOf) {
    tags.push({
      label: 'alias',
      textColor: 0,
      backgroundColor: ORANGE_400
    });
  }
  if (route.__vd_match) {
    tags.push({
      label: 'matches',
      textColor: 0,
      backgroundColor: PINK_500
    });
  }
  if (route.__vd_exactActive) {
    tags.push({
      label: 'exact',
      textColor: 0,
      backgroundColor: LIME_500
    });
  }
  if (route.__vd_active) {
    tags.push({
      label: 'active',
      textColor: 0,
      backgroundColor: BLUE_600
    });
  }
  if (record.redirect) {
    tags.push({
      label: typeof record.redirect === 'string' ? `redirect: ${record.redirect}` : 'redirects',
      textColor: 0xffffff,
      backgroundColor: DARK
    });
  }
  // add an id to be able to select it. Using the `path` is not possible because
  // empty path children would collide with their parents
  let id = record.__vd_id;
  if (id == null) {
    id = String(routeRecordId++);
    record.__vd_id = id;
  }
  return {
    id,
    label: record.path,
    tags,
    children: route.children.map(formatRouteRecordForInspector)
  };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
  // no route will be active if matched is empty
  // reset the matching state
  const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
  route.__vd_exactActive = route.__vd_active = isExactActive;
  if (!isExactActive) {
    route.__vd_active = currentRoute.matched.some(match => isSameRouteRecord(match, route.record));
  }
  route.children.forEach(childRoute => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
  route.__vd_match = false;
  route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
  const found = String(route.re).match(EXTRACT_REGEXP_RE);
  route.__vd_match = false;
  if (!found || found.length < 3) {
    return false;
  }
  // use a regexp without $ at the end to match nested routes better
  const nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
  if (nonEndingRE.test(filter)) {
    // mark children as matches
    route.children.forEach(child => isRouteMatching(child, filter));
    // exception case: `/`
    if (route.record.path !== '/' || filter === '/') {
      route.__vd_match = route.re.test(filter);
      return true;
    }
    // hide the / route
    return false;
  }
  const path = route.record.path.toLowerCase();
  const decodedPath = decode(path);
  // also allow partial matching on the path
  if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
  if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
  if (route.record.name && String(route.record.name).includes(filter)) return true;
  return route.children.some(child => isRouteMatching(child, filter));
}
function omit(obj, keys) {
  const ret = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      // @ts-expect-error
      ret[key] = obj[key];
    }
  }
  return ret;
}

/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  if (false) {}
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .shallowRef */ .IJ)(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  // leave the scrollRestoration if no scrollBehavior is provided
  if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams =
  // @ts-expect-error: intentionally avoid the type check
  applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      if (false) {}
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    } else if (false) {}
  }
  function getRoutes() {
    return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve(rawLocation, currentLocation) {
    // const resolve: Router['resolve'] = (rawLocation: RouteLocationRaw, currentLocation) => {
    // const objectLocation = routerLocationAsObject(rawLocation)
    // we create a copy to modify it later
    currentLocation = assign({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === 'string') {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute = matcher.resolve({
        path: locationNormalized.path
      }, currentLocation);
      const href = routerHistory.createHref(locationNormalized.fullPath);
      if (false) {}
      // locationNormalized is always a new object
      return assign(locationNormalized, matchedRoute, {
        params: decodeParams(matchedRoute.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: undefined,
        href
      });
    }
    if (false) {}
    let matcherLocation;
    // path could be relative in object as well
    if (rawLocation.path != null) {
      if (false) {}
      matcherLocation = assign({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      // remove any nullish param
      const targetParams = assign({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      // pass encoded values to the matcher, so it can produce encoded path and fullPath
      matcherLocation = assign({}, rawLocation, {
        params: encodeParams(targetParams)
      });
      // current location params are decoded, we need to encode them in case the
      // matcher merges the params
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || '';
    if (false) {}
    // the matcher might have merged current location params, so
    // we need to run the decoding again
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    if (false) {}
    return assign({
      fullPath,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash,
      query:
      // if the user is using a custom query lib like qs, we might have
      // nested objects, so we keep the query as is, meaning it can contain
      // numbers at `$route.query`, but at the point, the user will have to
      // use their own type anyway.
      // https://github.com/vuejs/router/issues/328#issuecomment-649481567
      stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: undefined,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign(locationAsObject(to), {
      replace: true
    }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const {
        redirect
      } = lastMatched;
      let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
      if (typeof newTargetLocation === 'string') {
        newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) :
        // force empty params
        {
          path: newTargetLocation
        };
        // @ts-expect-error: force empty params when a string is passed to let
        // the router parse them again
        newTargetLocation.params = {};
      }
      if (false) {}
      return assign({
        query: to.query,
        hash: to.hash,
        // avoid transferring params if the redirect has a path
        params: newTargetLocation.path != null ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve(to);
    const from = currentRoute.value;
    const data = to.state;
    const force = to.force;
    // to could be a string where `replace` is a function
    const replace = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
      state: typeof shouldRedirect === 'object' ? assign({}, data, shouldRedirect.state) : data,
      force,
      replace
    }),
    // keep original redirectedFrom if it exists
    redirectedFrom || targetLocation);
    // if it was a redirect we already called `pushWithRedirect` above
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */, {
        to: toLocation,
        from
      });
      // trigger scroll to allow scrolling to the same anchor
      handleScroll(from, from,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      true,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch(error => isNavigationFailure(error) ?
    // navigation redirects still mark the router as ready
    isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */) ? error : markAsReady(error) // also returns the error
    :
    // reject any unknown error
    triggerError(error, toLocation, from)).then(failure => {
      if (failure) {
        if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
          if (false) {}
          return pushWithRedirect(
          // keep options
          assign({
            // preserve an existing replacement but allow the redirect to override it
            replace
          }, locationAsObject(failure.to), {
            state: typeof failure.to === 'object' ? assign({}, data, failure.to.state) : data,
            force
          }),
          // preserve the original redirectedFrom if any
          redirectedFrom || toLocation);
        }
      } else {
        // if we fail we don't finalize the navigation
        failure = finalizeNavigation(toLocation, from, true, replace, data);
      }
      triggerAfterEach(toLocation, from, failure);
      return failure;
    });
  }
  /**
   * Helper to reject and skip all navigation guards if a new navigation happened
   * @param to
   * @param from
   */
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function runWithContext(fn) {
    const app = installedApps.values().next().value;
    // support Vue < 3.3
    return app && typeof app.runWithContext === 'function' ? app.runWithContext(fn) : fn();
  }
  // TODO: refactor the whole before guards by internally using router.beforeEach
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    // all components here have been resolved once because we are leaving
    guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
    // leavingRecords is already reversed
    for (const record of leavingRecords) {
      record.leaveGuards.forEach(guard => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    // run the queue of per route beforeRouteLeave guards
    return runGuardQueue(guards).then(() => {
      // check global guards beforeEach
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      // check in components beforeRouteUpdate
      guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach(guard => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      // run the queue of per route beforeEnter guards
      return runGuardQueue(guards);
    }).then(() => {
      // check the route beforeEnter
      guards = [];
      for (const record of enteringRecords) {
        // do not trigger beforeEnter on reused views
        if (record.beforeEnter) {
          if (isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      // run the queue of per route beforeEnter guards
      return runGuardQueue(guards);
    }).then(() => {
      // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
      // clear existing enterCallbacks, these are added by extractComponentsGuards
      to.matched.forEach(record => record.enterCallbacks = {});
      // check in-component beforeRouteEnter
      guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from, runWithContext);
      guards.push(canceledNavigationCheck);
      // run the queue of per route beforeEnter guards
      return runGuardQueue(guards);
    }).then(() => {
      // check global guards beforeResolve
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    })
    // catch any navigation canceled
    .catch(err => isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    // navigation is confirmed, call afterGuards
    // TODO: wrap with error handlers
    afterGuards.list().forEach(guard => runWithContext(() => guard(to, from, failure)));
  }
  /**
   * - Cleans up any navigation guards
   * - Changes the url if necessary
   * - Calls the scrollBehavior
   */
  function finalizeNavigation(toLocation, from, isPush, replace, data) {
    // a more recent navigation took place
    const error = checkCanceledNavigation(toLocation, from);
    if (error) return error;
    // only consider as push if it's not the first navigation
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    // change URL only if the user did a push/replace and if it's not the initial navigation because
    // it's just reflecting the url
    if (isPush) {
      // on the initial navigation, we want to reuse the scroll position from
      // history state if it exists
      if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
        scroll: isFirstNavigation && state && state.scroll
      }, data));else routerHistory.push(toLocation.fullPath, data);
    }
    // accept current navigation
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  // attach listener to history to trigger navigations
  function setupListeners() {
    // avoid setting up listeners twice due to an invalid first navigation
    if (removeHistoryListener) return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router.listening) return;
      // cannot be a redirect route because it was in history
      const toLocation = resolve(to);
      // due to dynamic routing, and to hash history with manual navigation
      // (manually changing the url or calling history.hash = '#/somewhere'),
      // there could be a redirect record in history
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign(shouldRedirect, {
          replace: true
        }), toLocation).catch(noop);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      // TODO: should be moved to web history?
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch(error => {
        if (isNavigationFailure(error, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
          return error;
        }
        if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
          // Here we could call if (info.delta) routerHistory.go(-info.delta,
          // false) but this is bug prone as we have no way to wait the
          // navigation to be finished before calling pushWithRedirect. Using
          // a setTimeout of 16ms seems to work but there is no guarantee for
          // it to work on every browser. So instead we do not restore the
          // history entry and trigger a new navigation as requested by the
          // navigation guard.
          // the error is already handled by router.push we just want to avoid
          // logging the error
          pushWithRedirect(error.to, toLocation
          // avoid an uncaught rejection, let push call triggerError
          ).then(failure => {
            // manual change in hash history #916 ending up in the URL not
            // changing, but it was changed by the manual url change, so we
            // need to manually change it ourselves
            if (isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop);
          // avoid the then branch
          return Promise.reject();
        }
        // do not restore history on unknown direction
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        // unrecognized error, transfer to the global handler
        return triggerError(error, toLocation, from);
      }).then(failure => {
        failure = failure || finalizeNavigation(
        // after navigation, all matched components are resolved
        toLocation, from, false);
        // revert the navigation
        if (failure) {
          if (info.delta &&
          // a new navigation has been triggered, so we do not want to revert, that will change the current history
          // entry while a different route is displayed
          !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */)) {
            // manual change in hash history #916
            // it's like a push but lacks the information of the direction
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      })
      // avoid warnings in the console about uncaught rejections, they are logged by triggerErrors
      .catch(noop);
    });
  }
  // Initialization and Errors
  let readyHandlers = useCallbacks();
  let errorListeners = useCallbacks();
  let ready;
  /**
   * Trigger errorListeners added via onError and throws the error as well
   *
   * @param error - error to throw
   * @param to - location we were navigating to when the error happened
   * @param from - location we were navigating from when the error happened
   * @returns the error as a rejected promise
   */
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorListeners.list();
    if (list.length) {
      list.forEach(handler => handler(error, to, from));
    } else {
      if (false) {}
      console.error(error);
    }
    // reject the error no matter there were error listeners or not
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
    return new Promise((resolve, reject) => {
      readyHandlers.add([resolve, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      // still not ready if an error happened
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
      readyHandlers.reset();
    }
    return err;
  }
  // Scroll behavior
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const {
      scrollBehavior
    } = options;
    if (!isBrowser || !scrollBehavior) return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return (0,vue__WEBPACK_IMPORTED_MODULE_8__/* .nextTick */ .dY)().then(() => scrollBehavior(to, from, scrollPosition)).then(position => position && scrollToPosition(position)).catch(err => triggerError(err, to, from));
  }
  const go = delta => routerHistory.go(delta);
  let started;
  const installedApps = new Set();
  const router = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    clearRoutes: matcher.clearRoutes,
    hasRoute,
    getRoutes,
    resolve,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorListeners.add,
    isReady,
    install(app) {
      const router = this;
      app.component('RouterLink', RouterLink);
      app.component('RouterView', RouterView);
      app.config.globalProperties.$router = router;
      Object.defineProperty(app.config.globalProperties, '$route', {
        enumerable: true,
        get: () => (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .unref */ .R1)(currentRoute)
      });
      // this initial navigation is only necessary on client, on server it doesn't
      // make sense because it will create an extra unnecessary navigation and could
      // lead to problems
      if (isBrowser &&
      // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        // see above
        started = true;
        push(routerHistory.location).catch(err => {
          if (false) {}
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        Object.defineProperty(reactiveRoute, key, {
          get: () => currentRoute.value[key],
          enumerable: true
        });
      }
      app.provide(routerKey, router);
      app.provide(routeLocationKey, (0,vue__WEBPACK_IMPORTED_MODULE_9__/* .shallowReactive */ .Gc)(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function () {
        installedApps.delete(app);
        // the router is not attached to an app anymore
        if (installedApps.size < 1) {
          // invalidate the current navigation
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
      // TODO: this probably needs to be updated so it can be used by vue-termui
      if (false) {}
    }
  };
  // TODO: type this as NavigationGuardReturn or similar instead of any
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
  }
  return router;
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find(record => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      // the type doesn't matter because we are comparing per reference
      if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
  return inject(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
function useRoute(_name) {
  return inject(routeLocationKey);
}


/***/ })

}]);