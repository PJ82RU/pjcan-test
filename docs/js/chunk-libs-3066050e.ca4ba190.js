"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[841],{

/***/ 63262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: function() { return /* binding */ src_default; },
/* harmony export */   oR: function() { return /* binding */ toast_default; }
/* harmony export */ });
/* unused harmony exports AnimationStep, Bounce, Event, Flip, Slide, ToastifyContainer, Zoom, addOne, cacheRenderInstance, clearAll, containerInstances, eventManager, getAllToast, getContainerId, getToast, globalOptions, removeOne, toastMap, unmountAllContainer, unmountContainer, updateGlobalOptions, updateToast, useCssTransition, useToastContainer */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90144);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56768);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45130);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js"(exports, module) {
    var check = function (it) {
      return it && it.Math == Math && it;
    };
    module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__.g == "object" && __webpack_require__.g) || function () {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function () {
      return Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function () {
      var test = function () {}.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var call5 = Function.prototype.call;
    module.exports = NATIVE_BIND ? call5.bind(call5) : function () {
      return call5.apply(call5, arguments);
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";

    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var bind8 = FunctionPrototype.bind;
    var call5 = FunctionPrototype.call;
    var uncurryThis = NATIVE_BIND && bind8.bind(call5, call5);
    module.exports = NATIVE_BIND ? function (fn) {
      return fn && uncurryThis(fn);
    } : function (fn) {
      return fn && function () {
        return call5.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function (it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails(function () {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function (it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    module.exports = function (it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError3 = TypeError;
    module.exports = function (it) {
      if (isNullOrUndefined(it)) throw $TypeError3("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/document-all.js
var require_document_all = __commonJS({
  "node_modules/core-js/internals/document-all.js"(exports, module) {
    var documentAll = typeof document == "object" && document.all;
    var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
    module.exports = {
      all: documentAll,
      IS_HTMLDDA
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module) {
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function (argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module) {
    var isCallable = require_is_callable();
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function (it) {
      return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
    } : function (it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function (argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
    var getBuiltIn4 = require_get_built_in();
    module.exports = getBuiltIn4("navigator", "userAgent") || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module) {
    var getBuiltIn4 = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function (it) {
      return typeof it == "symbol";
    } : function (it) {
      var $Symbol = getBuiltIn4("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module) {
    var $String = String;
    module.exports = function (argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module) {
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError3 = TypeError;
    module.exports = function (argument) {
      if (isCallable(argument)) return argument;
      throw $TypeError3(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module) {
    var aCallable7 = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function (V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable7(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    var call5 = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError3 = TypeError;
    module.exports = function (input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call5(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call5(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call5(fn, input))) return val;
      throw $TypeError3("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module) {
    module.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module) {
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module.exports = function (key, value) {
      try {
        defineProperty(global2, key, {
          value,
          configurable: true,
          writable: true
        });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module) {
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.25.2",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module) {
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function (argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module.exports = function (key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global2.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function (name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module) {
    var call5 = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError3 = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function (input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call5(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError3("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module) {
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function (argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module) {
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module.exports = function (it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement("div"), "a", {
        get: function () {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var call5 = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {}
      if (hasOwn(O, P)) return createPropertyDescriptor(!call5(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module.exports = DESCRIPTORS && fails(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module) {
    var isObject = require_is_object();
    var $String = String;
    var $TypeError3 = TypeError;
    module.exports = function (argument) {
      if (isObject(argument)) return argument;
      throw $TypeError3($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject13 = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError3 = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject13(O);
      P = toPropertyKey(P);
      anObject13(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject13(O);
      P = toPropertyKey(P);
      anObject13(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {}
      if ("get" in Attributes || "set" in Attributes) throw $TypeError3("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {}.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function (it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js"(exports, module) {
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js"(exports, module) {
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function (it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function (TYPE2) {
      return function (it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE2) {
          throw TypeError2("Incompatible receiver, " + TYPE2 + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      wmget = uncurryThis(store.get);
      wmhas = uncurryThis(store.has);
      wmset = uncurryThis(store.set);
      set = function (it, metadata) {
        if (wmhas(store, it)) throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };
      get = function (it) {
        return wmget(store, it) || {};
      };
      has = function (it) {
        return wmhas(store, it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function (it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function (it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function (it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var wmget;
    var wmhas;
    var wmset;
    var STATE;
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js"(exports, module) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var defineProperty = Object.defineProperty;
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
      return defineProperty(function () {}, "length", {
        value: 8
      }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function (value, name, options) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
          value: name,
          configurable: true
        });else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", {
          value: options.arity
        });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", {
            writable: false
          });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {}
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js"(exports, module) {
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function (O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    var trunc = require_math_trunc();
    module.exports = function (argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function (index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function (argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    var toLength = require_to_length();
    module.exports = function (obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js"(exports, module) {
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          if (value != value) return true;
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module.exports = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    module.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js"(exports, module) {
    var getBuiltIn4 = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject13 = require_an_object();
    var concat = uncurryThis([].concat);
    module.exports = getBuiltIn4("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject13(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function (target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js"(exports, module) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function (feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js"(exports, module) {
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module.exports = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global2[TARGET] || {}).prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/core-js/internals/collection-delete-all.js
var require_collection_delete_all = __commonJS({
  "node_modules/core-js/internals/collection-delete-all.js"(exports, module) {
    "use strict";

    var call5 = require_function_call();
    var aCallable7 = require_a_callable();
    var anObject13 = require_an_object();
    module.exports = function deleteAll2() {
      var collection = anObject13(this);
      var remover = aCallable7(collection["delete"]);
      var allDeleted = true;
      var wasDeleted;
      for (var k = 0, len = arguments.length; k < len; k++) {
        wasDeleted = call5(remover, collection, arguments[k]);
        allDeleted = allDeleted && wasDeleted;
      }
      return !!allDeleted;
    };
  }
});

// node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var aCallable7 = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind8 = uncurryThis(uncurryThis.bind);
    module.exports = function (fn, that) {
      aCallable7(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind8(fn, that) : function () {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/get-map-iterator.js
var require_get_map_iterator = __commonJS({
  "node_modules/core-js/internals/get-map-iterator.js"(exports, module) {
    var call5 = require_function_call();
    module.exports = function (it) {
      return call5(Map.prototype.entries, it);
    };
  }
});

// node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/internals/iterators.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module.exports = function (it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js"(exports, module) {
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function () {
      return arguments;
    }()) == "Arguments";
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (error) {}
    };
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module.exports = function (it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/internals/get-iterator.js"(exports, module) {
    var call5 = require_function_call();
    var aCallable7 = require_a_callable();
    var anObject13 = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError3 = TypeError;
    module.exports = function (argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable7(iteratorMethod)) return anObject13(call5(iteratorMethod, argument));
      throw $TypeError3(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/core-js/internals/iterator-close.js"(exports, module) {
    var call5 = require_function_call();
    var anObject13 = require_an_object();
    var getMethod = require_get_method();
    module.exports = function (iterator, kind, value) {
      var innerResult, innerError;
      anObject13(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call5(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject13(innerResult);
      return value;
    };
  }
});

// node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/core-js/internals/iterate.js"(exports, module) {
    var bind8 = require_function_bind_context();
    var call5 = require_function_call();
    var anObject13 = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError3 = TypeError;
    var Result = function (stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module.exports = function (iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind8(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function (condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function (value) {
        if (AS_ENTRIES) {
          anObject13(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw $TypeError3(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call5(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js/internals/is-constructor.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn4 = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function () {};
    var empty = [];
    var construct = getBuiltIn4("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument)) return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct || fails(function () {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "node_modules/core-js/internals/a-constructor.js"(exports, module) {
    var isConstructor = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError3 = TypeError;
    module.exports = function (argument) {
      if (isConstructor(argument)) return argument;
      throw $TypeError3(tryToString(argument) + " is not a constructor");
    };
  }
});

// node_modules/core-js/internals/species-constructor.js
var require_species_constructor = __commonJS({
  "node_modules/core-js/internals/species-constructor.js"(exports, module) {
    var anObject13 = require_an_object();
    var aConstructor = require_a_constructor();
    var isNullOrUndefined = require_is_null_or_undefined();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    module.exports = function (O, defaultConstructor) {
      var C = anObject13(O).constructor;
      var S;
      return C === void 0 || isNullOrUndefined(S = anObject13(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
    };
  }
});

// node_modules/core-js/internals/same-value-zero.js
var require_same_value_zero = __commonJS({
  "node_modules/core-js/internals/same-value-zero.js"(exports, module) {
    module.exports = function (x, y) {
      return x === y || x != x && y != y;
    };
  }
});

// src/utils/constant.ts
var POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
};
var THEME = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
};
var TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};
var TRANSITIONS = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FLIP: "flip",
  ZOOM: "zoom"
};
var defaultOptions = {
  position: POSITION.TOP_RIGHT,
  autoClose: 5e3,
  transition: "bounce",
  hideProgressBar: false,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  className: "",
  bodyClassName: "",
  style: {},
  progressClassName: "",
  progressStyle: {},
  role: "alert",
  theme: "light"
};
var defaultToastContainerOptions = {
  rtl: false,
  newestOnTop: false,
  toastClassName: ""
};
var defaultGlobalOptions = __spreadValues(__spreadValues({}, defaultOptions), defaultToastContainerOptions);
var defaultToastOptions = __spreadProps(__spreadValues({}, defaultOptions), {
  data: {},
  type: TYPE.DEFAULT,
  icon: false
});
var Default;
(function (Default2) {
  Default2[Default2["COLLAPSE_DURATION"] = 300] = "COLLAPSE_DURATION";
  Default2[Default2["DEBOUNCE_DURATION"] = 50] = "DEBOUNCE_DURATION";
  Default2["CSS_NAMESPACE"] = "Toastify";
})(Default || (Default = {}));
var SyntheticEvent;
(function (SyntheticEvent2) {
  SyntheticEvent2["ENTRANCE_ANIMATION_END"] = "d";
})(SyntheticEvent || (SyntheticEvent = {}));
var Bounce = {
  enter: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__bounce-enter`,
  exit: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__bounce-exit`,
  appendPosition: true
};
var Slide = {
  enter: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__slide-enter`,
  exit: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__slide-exit`,
  appendPosition: true
};
var Zoom = {
  enter: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__zoom-enter`,
  exit: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__zoom-exit`
};
var Flip = {
  enter: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__flip-enter`,
  exit: `${Default.CSS_NAMESPACE}--animate ${Default.CSS_NAMESPACE}__flip-exit`
};
function getDefaultTransition(type) {
  let result = Bounce;
  if (!type || typeof type === "string") {
    switch (type) {
      case "flip":
        result = Flip;
        break;
      case "zoom":
        result = Zoom;
        break;
      case "slide":
        result = Slide;
        break;
      default:
        break;
    }
  } else {
    result = type;
  }
  return result;
}

// src/store/containerInstances.tsx


// src/composables/useToastContainer.ts

var toastMap = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .reactive */ .Kh)({});
function getAllToast() {
  const rawMap = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(toastMap);
  return Object.values(rawMap).reduce((t, v) => [...t, ...v], []);
}
function getToast(toastId) {
  const toasts = getAllToast();
  return toasts.find(v => v.toastId === toastId);
}
function getContainerId(id) {
  const all = getAllToast();
  const toast2 = all.find(v => v.toastId === id);
  return toast2 === null || toast2 === void 0 ? void 0 : toast2.containerId;
}
function removeOne(id) {
  if (id) {
    const containerId = getContainerId(id);
    if (containerId) {
      const toasts = toastMap[containerId];
      let item = toasts.find(v => v.toastId === id);
      toastMap[containerId] = toasts.filter(v => v.toastId !== id);
      if (!toastMap[containerId].length) {
        unmountContainer(containerId);
      }
      (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .nextTick */ .dY)(() => {
        var _item;
        if ((_item = item) !== null && _item !== void 0 && _item.onClose) {
          item.onClose();
          item = void 0;
        }
      });
    }
  }
}
function addOne(_, opts) {
  const {
    containerId = ""
  } = opts;
  if (containerId) {
    toastMap[containerId] = toastMap[containerId] || [];
    if (!toastMap[containerId].find(v => v.toastId === opts.toastId)) {
      setTimeout(() => {
        if (opts.newestOnTop) {
          toastMap[containerId].unshift(opts);
        } else {
          toastMap[containerId].push(opts);
        }
        if (opts.onOpen) {
          opts.onOpen();
        }
      }, opts.delay || 0);
    }
  }
}
function updateToast() {
  let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    containerId = ""
  } = opts;
  if (containerId && opts.updateId) {
    toastMap[containerId] = toastMap[containerId] || [];
    const item = toastMap[containerId].find(v => v.toastId === opts.toastId);
    if (item) {
      setTimeout(() => {
        for (const optName in opts) {
          if (Object.prototype.hasOwnProperty.call(opts, optName)) {
            const value = opts[optName];
            item[optName] = value;
          }
        }
      }, opts.delay || 0);
    }
  }
}
function clearAll(containerId) {
  if (!containerId) {
    unmountAllContainer();
  } else {
    unmountContainer(containerId);
  }
}
function useToastContainer() {
  let props3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .onMounted */ .sV)(() => {
    eventManager.off(Event2.Add, addOne).off(Event2.Remove, addOne).off(Event2.Update, updateToast).off(Event2.ClearAll, clearAll).on(Event2.Add, addOne).on(Event2.Update, updateToast).on(Event2.Remove, removeOne).on(Event2.ClearAll, clearAll);
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .onUnmounted */ .hi)(() => {
    eventManager.off(Event2.Add, addOne).off(Event2.ClearAll, clearAll).off(Event2.Remove, removeOne);
  });
  return {
    toastMap
  };
}

// src/composables/useCssTransition.ts


// src/types.ts
var AnimationStep;
(function (AnimationStep2) {
  AnimationStep2[AnimationStep2["Enter"] = 0] = "Enter";
  AnimationStep2[AnimationStep2["Exit"] = 1] = "Exit";
})(AnimationStep || (AnimationStep = {}));

// src/composables/useCssTransition.ts
var NullCallback = () => {};
var ExitDuration = 300;
function collapseToast(node, done) {
  let duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Default.COLLAPSE_DURATION;
  const {
    scrollHeight,
    style
  } = node;
  const delay = duration;
  requestAnimationFrame(() => {
    style.minHeight = "initial";
    style.height = scrollHeight + "px";
    style.transition = `all ${delay}ms`;
    requestAnimationFrame(() => {
      style.height = "0";
      style.padding = "0";
      style.margin = "0";
      setTimeout(done, delay);
    });
  });
}
function useCssTransition(props3) {
  const isRunning = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(false);
  const isIn = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(false);
  const preventExitTransition = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(false);
  const animationStep = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)(AnimationStep.Enter);
  const options = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .reactive */ .Kh)(__spreadProps(__spreadValues({}, props3), {
    appendPosition: props3.appendPosition || false,
    collapse: typeof props3.collapse === "undefined" ? true : props3.collapse,
    collapseDuration: props3.collapseDuration || Default.COLLAPSE_DURATION
  }));
  const doneHandler = options.done || NullCallback;
  const enterClassName = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => options.appendPosition ? `${options.enter}--${options.position}` : options.enter);
  const exitClassName = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => options.appendPosition ? `${options.exit}--${options.position}` : options.exit);
  const eventHandlers = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => props3.pauseOnHover ? {
    onMouseenter: pauseToast,
    onMouseleave: playToast
  } : {});
  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener("focus", playToast);
    window.addEventListener("blur", pauseToast);
  }
  function unbindFocusEvents() {
    window.removeEventListener("focus", playToast);
    window.removeEventListener("blur", pauseToast);
  }
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .watchEffect */ .nT)(() => {
    if (props3.isLoading !== void 0) {
      if (props3.loading.value) {
        pauseToast();
      } else {
        playToast();
      }
    }
  });
  function playToast() {
    if (!props3.loading.value || props3.isLoading === void 0) {
      isRunning.value = true;
    }
  }
  function pauseToast() {
    isRunning.value = false;
  }
  function hideToast(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    isIn.value = false;
  }
  function onExitHandler() {
    const node = props3.toastRef.value;
    if (!node) return;
    const onExited = () => {
      if (options.collapse) {
        setTimeout(() => {
          node.removeEventListener("animationend", onExited);
          collapseToast(node, doneHandler, options.collapseDuration);
        }, ExitDuration);
      } else {
        doneHandler();
      }
    };
    const onExit = () => {
      animationStep.value = AnimationStep.Exit;
      node.className += ` ${exitClassName.value}`;
      node.addEventListener("animationend", onExited);
    };
    if (!isIn.value) preventExitTransition.value ? onExited() : onExit();
  }
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .watchEffect */ .nT)(() => {
    const all = getAllToast();
    isIn.value = all.findIndex(v => v.toastId === options.toastId) > -1;
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .watchEffect */ .nT)(onExitHandler);
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .onMounted */ .sV)(() => {
    const node = props3.toastRef.value;
    const classToToken = enterClassName.value.split(" ");
    node.addEventListener(SyntheticEvent.ENTRANCE_ANIMATION_END, playToast, {
      once: true
    });
    const onEntered = e => {
      if (e.target !== props3.toastRef.value) return;
      node.dispatchEvent(new Event(SyntheticEvent.ENTRANCE_ANIMATION_END));
      node.removeEventListener("animationend", onEntered);
      node.removeEventListener("animationcancel", onEntered);
      if (animationStep.value === AnimationStep.Enter && e.type !== "animationcancel") {
        node.classList.remove(...classToToken);
      }
    };
    const onEnter = () => {
      node.classList.add(...classToToken);
      node.addEventListener("animationend", onEntered);
      node.addEventListener("animationcancel", onEntered);
    };
    onEnter();
    if (props3.pauseOnFocusLoss) {
      bindFocusEvents();
    }
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .onUnmounted */ .hi)(() => {
    if (props3.pauseOnFocusLoss) {
      unbindFocusEvents();
    }
  });
  return {
    isIn,
    isRunning,
    hideToast,
    eventHandlers
  };
}

// src/store/containerInstances.tsx
var containerInstances = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .reactive */ .Kh)({});
function cacheRenderInstance(app, id) {
  const container = document.getElementById(String(id));
  if (container) {
    containerInstances[container.id] = app;
  }
}
function unmountContainer(containerId) {
  var _document$getElementB;
  const id = String(containerId);
  if (!containerInstances[id]) return;
  containerInstances[id].unmount();
  (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.remove();
  delete containerInstances[id];
  if (Object.prototype.hasOwnProperty.call(toastMap, id)) {
    delete toastMap[id];
  }
}
function unmountAllContainer() {
  for (const id in containerInstances) {
    unmountContainer(id);
  }
  for (const id in toastMap) {
    if (Object.prototype.hasOwnProperty.call(toastMap, id)) {
      delete toastMap[id];
    }
  }
}

// src/store/globalOptions.ts

var globalOptions = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .reactive */ .Kh)({});

// src/utils/tools.ts

function generateToastId() {
  return Math.random().toString(36).substring(2, 9);
}
function isNum(v) {
  return typeof v === "number" && !isNaN(v);
}
function isStr(v) {
  return typeof v === "string";
}
function isFn(v) {
  return typeof v === "function";
}
function mergeOptions() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)(...args);
}
function isComponent(content) {
  return typeof content === "object" && (!!(content !== null && content !== void 0 && content.render) || !!(content !== null && content !== void 0 && content.setup) || typeof (content === null || content === void 0 ? void 0 : content.type) === "object");
}
function saveGlobalOptions() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  globalOptions[`${Default.CSS_NAMESPACE}-default-options`] = options;
}
function getGlobalOptions() {
  return globalOptions[`${Default.CSS_NAMESPACE}-default-options`] || defaultGlobalOptions;
}
function getSystemThem() {
  return document.documentElement.className || "light";
}

// src/components/toastify-container/index.tsx


// src/components/toastify-container/prop.ts
var props = {
  containerId: {
    type: String,
    required: false,
    default: ""
  },
  position: {
    type: String,
    required: false,
    default: POSITION.TOP_LEFT
  },
  bodyClassName: {
    type: String,
    required: false,
    default: ""
  },
  autoClose: {
    type: [Number, Boolean],
    required: false,
    default: false
  },
  closeButton: {
    type: [Boolean, Function, Object],
    required: false,
    default: void 0
  },
  transition: {
    type: [String, Object],
    required: false,
    default: "bounce"
  },
  hideProgressBar: {
    type: Boolean,
    required: false,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    required: false,
    default: true
  },
  pauseOnFocusLoss: {
    type: Boolean,
    required: false,
    default: true
  },
  closeOnClick: {
    type: Boolean,
    required: false,
    default: true
  },
  progress: {
    type: Number,
    required: false,
    default: void 0
  },
  progressClassName: {
    type: String,
    required: false,
    default: ""
  },
  toastStyle: {
    type: Object,
    required: false,
    default() {
      return {};
    }
  },
  progressStyle: {
    type: Object,
    required: false,
    default() {
      return {};
    }
  },
  role: {
    type: String,
    required: false,
    default: "alert"
  },
  theme: {
    type: String,
    required: false,
    default: THEME.AUTO
  },
  content: {
    type: [String, Object, Function],
    required: false,
    default: ""
  },
  toastId: {
    type: [String, Number],
    required: false,
    default: ""
  },
  data: {
    type: [Object, String],
    required: false,
    default() {
      return {};
    }
  },
  type: {
    type: String,
    required: false,
    default: TYPE.DEFAULT
  },
  icon: {
    type: [Boolean, String, Number, Object, Function],
    required: false,
    default: void 0
  },
  delay: {
    type: Number,
    required: false,
    default: void 0
  },
  onOpen: {
    type: Function,
    required: false,
    default: void 0
  },
  onClose: {
    type: Function,
    required: false,
    default: void 0
  },
  onClick: {
    type: Function,
    required: false,
    default: void 0
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: false,
    default: false
  },
  toastClassName: {
    type: String,
    required: false,
    default: ""
  },
  updateId: {
    type: String,
    required: false,
    default: ""
  }
};
var prop_default = props;

// src/components/ToastItem.tsx


// src/components/progress-bar/ProgressBar.tsx


// src/components/progress-bar/prop.ts
var props2 = {
  autoClose: {
    type: [Number, Boolean],
    required: true
  },
  isRunning: {
    type: Boolean,
    required: false,
    default: void 0
  },
  type: {
    type: String,
    required: false,
    default: TYPE.DEFAULT
  },
  theme: {
    type: String,
    required: false,
    default: THEME.AUTO
  },
  hide: {
    type: Boolean,
    required: false,
    default: void 0
  },
  className: {
    type: [String, Function],
    required: false,
    default: ""
  },
  controlledProgress: {
    type: Boolean,
    required: false,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: false,
    default: void 0
  },
  isIn: {
    type: Boolean,
    required: false,
    default: void 0
  },
  progress: {
    type: Number,
    required: false,
    default: void 0
  },
  closeToast: {
    type: Function,
    required: false,
    default: void 0
  }
};

// src/components/progress-bar/ProgressBar.tsx

var ProgressBar = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .defineComponent */ .pM)({
  name: "ProgressBar",
  props: props2,
  setup(props3, _ref) {
    let {
      attrs
    } = _ref;
    const nodeRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)();
    const ariaHidden = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => props3.hide ? "true" : "false");
    const style = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => __spreadProps(__spreadValues({}, attrs.style || {}), {
      animationDuration: `${props3.autoClose === true ? 5e3 : props3.autoClose}ms`,
      animationPlayState: props3.isRunning ? "running" : "paused",
      opacity: props3.hide ? 0 : 1,
      transform: props3.controlledProgress ? `scaleX(${props3.progress})` : "none"
    }));
    const defaultClassName = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => [`${Default.CSS_NAMESPACE}__progress-bar`, props3.controlledProgress ? `${Default.CSS_NAMESPACE}__progress-bar--controlled` : `${Default.CSS_NAMESPACE}__progress-bar--animated`, `${Default.CSS_NAMESPACE}__progress-bar-theme--${props3.theme}`, `${Default.CSS_NAMESPACE}__progress-bar--${props3.type}`, props3.rtl ? `${Default.CSS_NAMESPACE}__progress-bar--rtl` : null].filter(Boolean).join(" "));
    const classNames = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => `${defaultClassName.value} ${(attrs === null || attrs === void 0 ? void 0 : attrs.class) || ""}`);
    const removeEventListener = () => {
      if (nodeRef.value) {
        nodeRef.value.onanimationend = null;
        nodeRef.value.ontransitionend = null;
      }
    };
    const eventCallback = () => {
      if (props3.isIn && props3.closeToast && props3.autoClose !== false) {
        props3.closeToast();
        removeEventListener();
      }
    };
    const animationendEventHandler = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => props3.controlledProgress ? null : eventCallback);
    const transitionendEventHandler = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => !props3.controlledProgress ? null : eventCallback);
    (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .watchEffect */ .nT)(() => {
      if (nodeRef.value) {
        removeEventListener();
        nodeRef.value.onanimationend = animationendEventHandler.value;
        nodeRef.value.ontransitionend = transitionendEventHandler.value;
      }
    });
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "ref": nodeRef,
      "role": "progressbar",
      "aria-hidden": ariaHidden.value,
      "aria-label": "notification timer",
      "class": classNames.value,
      "style": style.value
    }, null);
  }
});
var ProgressBar_default = ProgressBar;

// src/components/ToastItem.tsx


// src/components/CloseButton.tsx


var CloseButton = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .defineComponent */ .pM)({
  name: "CloseButton",
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      required: false,
      default: THEME.AUTO
    },
    type: {
      type: String,
      required: false,
      default: THEME.LIGHT
    },
    ariaLabel: {
      type: String,
      required: false,
      default: "close"
    },
    closeToast: {
      type: Function,
      required: false,
      default: void 0
    }
  },
  setup(props3) {
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("button", {
      "class": `${Default.CSS_NAMESPACE}__close-button ${Default.CSS_NAMESPACE}__close-button--${props3.theme}`,
      "type": "button",
      "onClick": e => {
        e.stopPropagation();
        if (props3.closeToast) props3.closeToast(e);
      },
      "aria-label": props3.ariaLabel
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("svg", {
      "aria-hidden": "true",
      "viewBox": "0 0 14 16"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("path", {
      "fill-rule": "evenodd",
      "d": "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
});

// src/components/Icons.tsx


var Svg = _ref => {
  let _a = _ref,
    {
      theme,
      type,
      path
    } = _a,
    rest = __objRest(_a, ["theme", "type", "path"]);
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)({
    "viewBox": "0 0 24 24",
    "width": "100%",
    "height": "100%",
    "fill": theme === "colored" ? "currentColor" : `var(--toastify-icon-color-${type})`
  }, rest), [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("path", {
    "d": path
  }, null)]);
};
function Warning(props3) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(Svg, (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)(props3, {
    "path": "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function Info(props3) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(Svg, (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)(props3, {
    "path": "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function Success(props3) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(Svg, (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)(props3, {
    "path": "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function Error2(props3) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(Svg, (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)(props3, {
    "path": "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function Spinner() {
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
    "class": `${Default.CSS_NAMESPACE}__spinner`
  }, null);
}
var Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error2,
  spinner: Spinner
};
var maybeIcon = type => type in Icons;
function getIcon(_ref2) {
  let {
    theme,
    type,
    isLoading,
    icon
  } = _ref2;
  let Icon;
  const iconProps = {
    theme,
    type
  };
  if (isLoading) {
    Icon = Icons.spinner();
  } else if (icon === false) {
    Icon = void 0;
  } else if (isComponent(icon)) {
    Icon = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(icon);
  } else if (isFn(icon)) {
    const iconCreator = icon;
    Icon = iconCreator(iconProps);
  } else if ((0,vue__WEBPACK_IMPORTED_MODULE_2__/* .isVNode */ .vv)(icon)) {
    Icon = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .cloneVNode */ .E3)(icon, iconProps);
  } else if (isStr(icon) || isNum(icon)) {
    Icon = icon;
  } else if (maybeIcon(type)) {
    Icon = Icons[type](iconProps);
  }
  return Icon;
}

// src/components/ToastItem.tsx
var ToastItem = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .defineComponent */ .pM)({
  name: "ToastItem",
  inheritAttrs: false,
  props: prop_default,
  setup(item) {
    const toastRef = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .ref */ .KR)();
    const loading = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => !!item.isLoading);
    const isProgressControlled = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => item.progress !== void 0 && item.progress !== null);
    const toastIcon = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => getIcon(item));
    const className = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => [`${Default.CSS_NAMESPACE}__toast`, `${Default.CSS_NAMESPACE}__toast-theme--${item.theme}`, `${Default.CSS_NAMESPACE}__toast--${item.type}`, item.rtl ? `${Default.CSS_NAMESPACE}__toast--rtl` : void 0, item.toastClassName || ""].filter(Boolean).join(" "));
    const {
      isRunning,
      isIn,
      hideToast,
      eventHandlers
    } = useCssTransition(__spreadValues(__spreadValues({
      toastRef,
      loading,
      done: () => {
        removeOne(item.toastId);
      }
    }, getDefaultTransition(item.transition)), item));
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)({
      "id": item.toastId,
      "class": className.value,
      "style": item.toastStyle || {},
      "ref": toastRef,
      "onClick": e => {
        if (item.closeOnClick) {
          hideToast();
        }
      }
    }, eventHandlers.value), [(0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "role": item.role,
      "class": `${Default.CSS_NAMESPACE}__toast-body ${item.bodyClassName || ""}`
    }, [toastIcon.value != null && (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "class": [`${Default.CSS_NAMESPACE}__toast-icon`, !item.isLoading ? `${Default.CSS_NAMESPACE}--animate-icon ${Default.CSS_NAMESPACE}__zoom-enter` : ""].join(" ")
    }, [isComponent(toastIcon.value) ? (0,vue__WEBPACK_IMPORTED_MODULE_2__.h)((0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(toastIcon.value), {
      theme: item.theme,
      type: item.type
    }) : isFn(toastIcon.value) ? toastIcon.value({
      theme: item.theme,
      type: item.type
    }) : toastIcon.value]), (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)("div", {
      "data-testid": "toast-content"
    }, [isComponent(item.content) ? (0,vue__WEBPACK_IMPORTED_MODULE_2__.h)((0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(item.content), {
      toastProps: (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(item),
      closeToast: hideToast,
      data: item.data
    }) : isFn(item.content) ? item.content({
      toastProps: (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(item),
      closeToast: hideToast,
      data: item.data
    }) : item.content])]), (item.closeButton === void 0 || item.closeButton === true) && (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(CloseButton, {
      "theme": item.theme,
      "closeToast": e => {
        e.stopPropagation();
        e.preventDefault();
        hideToast();
      }
    }, null), isComponent(item.closeButton) ? (0,vue__WEBPACK_IMPORTED_MODULE_2__.h)((0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(item.closeButton), {
      closeToast: hideToast,
      type: item.type,
      theme: item.theme
    }) : isFn(item.closeButton) ? item.closeButton({
      closeToast: hideToast,
      type: item.type,
      theme: item.theme
    }) : null, (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(ProgressBar_default, {
      "className": item.progressClassName,
      "style": item.progressStyle,
      "rtl": item.rtl,
      "theme": item.theme,
      "isIn": isIn.value,
      "type": item.type,
      "hide": item.hideProgressBar,
      "isRunning": isRunning.value,
      "autoClose": item.autoClose,
      "controlledProgress": isProgressControlled.value,
      "progress": item.progress,
      "closeToast": item.isLoading ? void 0 : hideToast
    }, null)]);
  }
});
var ToastItem_default = ToastItem;

// src/components/toastify-container/index.tsx

var ToastifyContainer = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .defineComponent */ .pM)({
  name: "ToastifyContainer",
  inheritAttrs: false,
  props: prop_default,
  setup(_props) {
    const {
      toastMap: toastMap2
    } = useToastContainer(_props);
    const containerId = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => _props.containerId);
    const allToasts = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => toastMap2[containerId.value] || []);
    const toasts = (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .computed */ .EW)(() => allToasts.value.filter(v => v.position === _props.position));
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(vue__WEBPACK_IMPORTED_MODULE_2__/* .Fragment */ .FK, null, [toasts.value.map(item => {
      const {
        toastId = ""
      } = item;
      return (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .createVNode */ .bF)(ToastItem_default, (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .v6)({
        "key": toastId
      }, item), null);
    })]);
  }
});
var toastify_container_default = ToastifyContainer;

// src/core/toast.tsx


// src/utils/render.ts
function toastContainerInScreen() {
  let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : POSITION.TOP_RIGHT;
  return !!document.querySelector(`.${Default.CSS_NAMESPACE}__toast-container--${position}`);
}
function getToastPosClassName() {
  let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : POSITION.TOP_RIGHT;
  return `${Default.CSS_NAMESPACE}__toast-container--${position}`;
}
function getContainerClassName(position, className) {
  let rtl = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  const defaultClassName = [`${Default.CSS_NAMESPACE}__toast-container`, `${Default.CSS_NAMESPACE}__toast-container--${position}`, rtl ? `${Default.CSS_NAMESPACE}__toast-container--rtl` : null].filter(Boolean).join(" ");
  return isFn(className) ? className({
    position,
    rtl,
    defaultClassName
  }) : `${defaultClassName} ${className || ""}`;
}
function getContainerId2(options) {
  return options.containerId || String(options.position);
}
function generateRenderRoot(options) {
  const {
    position,
    containerClassName,
    rtl = false,
    style = {}
  } = options;
  const rootClass = Default.CSS_NAMESPACE;
  const toastPosClassName = getToastPosClassName(position);
  const existRoot = !!document.querySelector(`.${rootClass}`);
  const existRenderRoot = !!document.querySelector(`.${toastPosClassName}`);
  const container = document.querySelector(`.${rootClass}`) || document.createElement("div");
  const renderRoot = document.createElement("div");
  renderRoot.className = getContainerClassName(position, containerClassName, rtl);
  renderRoot.id = getContainerId2(options);
  for (const name in style) {
    if (Object.prototype.hasOwnProperty.call(style, name)) {
      const val = style[name];
      renderRoot.style[name] = val;
    }
  }
  if (!existRoot) {
    container.className = Default.CSS_NAMESPACE;
    document.body.appendChild(container);
  }
  if (!existRenderRoot) {
    container.appendChild(renderRoot);
  }
  return renderRoot;
}

// src/core/toast.tsx
function openToast(content, type) {
  var _options;
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  options = mergeOptions(getGlobalOptions(), {
    type
  }, options);
  if (!options.toastId || typeof options.toastId !== "string" && typeof options.toastId !== "number") {
    options.toastId = generateToastId();
  }
  options = __spreadProps(__spreadValues({}, options), {
    content,
    containerId: options.containerId || String(options.position)
  });
  const progress = Number((_options = options) === null || _options === void 0 ? void 0 : _options.progress);
  if (progress < 0) {
    options.progress = 0;
  }
  if (progress > 1) {
    options.progress = 1;
  }
  if (options.theme === "auto") {
    options.theme = getSystemThem();
  }
  if (!toastContainerInScreen(options.position)) {
    const rootDom = generateRenderRoot(options);
    const app = (0,vue__WEBPACK_IMPORTED_MODULE_3__/* .createApp */ .Ef)(toastify_container_default, options);
    app.mount(rootDom);
    cacheRenderInstance(app, rootDom.id);
  }
  (0,vue__WEBPACK_IMPORTED_MODULE_2__/* .nextTick */ .dY)(() => {
    if (options.updateId) {
      eventManager.emit(Event2.Update, options);
    } else {
      eventManager.emit(Event2.Add, content, options);
    }
  });
  return options.toastId;
}
var toast = (content, options) => openToast(content, TYPE.DEFAULT, options);
toast.info = (content, options) => openToast(content, TYPE.INFO, options);
toast.error = (content, options) => openToast(content, TYPE.ERROR, options);
toast.warning = (content, options) => openToast(content, TYPE.WARNING, options);
toast.warn = toast.warning;
toast.success = (content, options) => openToast(content, TYPE.SUCCESS, options);
toast.loading = (content, options) => openToast(content, TYPE.DEFAULT, mergeOptions(options, {
  isLoading: true,
  autoClose: false,
  closeOnClick: false,
  closeButton: false,
  draggable: false
}));
toast.dark = (content, options) => openToast(content, TYPE.DEFAULT, mergeOptions(options, {
  theme: THEME.DARK
}));
toast.remove = toastId => {
  if (toastId) {
    eventManager.emit(Event2.Remove, toastId);
  } else {
    eventManager.emit(Event2.ClearAll);
  }
};
toast.clearAll = containerId => {
  eventManager.emit(Event2.ClearAll, containerId);
};
toast.isActive = toastId => {
  let isToastActive = false;
  const all = getAllToast();
  isToastActive = all.findIndex(v => v.toastId === toastId) > -1;
  return isToastActive;
};
toast.update = function (toastId) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  setTimeout(() => {
    const item = getToast(toastId);
    if (item) {
      const oldOptions = (0,vue__WEBPACK_IMPORTED_MODULE_1__/* .toRaw */ .ux)(item);
      const {
        content: oldContent
      } = oldOptions;
      const nextOptions = __spreadProps(__spreadValues(__spreadValues({}, oldOptions), options), {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });
      const content = nextOptions.render || oldContent;
      delete nextOptions.render;
      openToast(content, nextOptions.type, nextOptions);
    }
  }, 0);
};
toast.done = id => {
  toast.update(id, {
    isLoading: false,
    progress: 1
  });
};
toast.promise = handlePromise;
function handlePromise(promise, _ref, options) {
  let {
    pending,
    error,
    success
  } = _ref;
  let id;
  if (pending) {
    id = isStr(pending) ? toast.loading(pending, options) : toast.loading(pending.render, __spreadValues(__spreadValues({}, options), pending));
  }
  const resetParams = {
    isLoading: void 0,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null,
    delay: 100
  };
  const resolver = (type, input, result) => {
    if (input == null) {
      toast.remove(id);
      return;
    }
    const baseParams = __spreadProps(__spreadValues(__spreadValues({
      type
    }, resetParams), options), {
      data: result
    });
    const params = isStr(input) ? {
      render: input
    } : input;
    if (id) {
      toast.update(id, __spreadProps(__spreadValues(__spreadValues({}, baseParams), params), {
        isLoading: false,
        autoClose: true
      }));
    } else {
      toast(params.render, __spreadProps(__spreadValues(__spreadValues({}, baseParams), params), {
        isLoading: false,
        autoClose: true
      }));
    }
    return result;
  };
  const p = isFn(promise) ? promise() : promise;
  p.then(result => resolver("success", success, result)).catch(err => resolver("error", error, err));
  return p;
}
toast.POSITION = POSITION;
toast.THEME = THEME;
toast.TYPE = TYPE;
toast.TRANSITIONS = TRANSITIONS;
var toast_default = toast;

// node_modules/core-js/modules/esnext.map.delete-all.js
var $ = require_export();
var deleteAll = require_collection_delete_all();
$({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  deleteAll
});

// node_modules/core-js/modules/esnext.map.every.js
var $2 = require_export();
var anObject = require_an_object();
var bind = require_function_bind_context();
var getMapIterator = require_get_map_iterator();
var iterate = require_iterate();
$2({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  every: function every(callbackfn) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    return !iterate(iterator, function (key, value, stop) {
      if (!boundFunction(value, key, map)) return stop();
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).stopped;
  }
});

// node_modules/core-js/modules/esnext.map.filter.js
var $3 = require_export();
var getBuiltIn = require_get_built_in();
var bind2 = require_function_bind_context();
var call = require_function_call();
var aCallable = require_a_callable();
var anObject2 = require_an_object();
var speciesConstructor = require_species_constructor();
var getMapIterator2 = require_get_map_iterator();
var iterate2 = require_iterate();
$3({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  filter: function filter(callbackfn) {
    var map = anObject2(this);
    var iterator = getMapIterator2(map);
    var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    var newMap = new (speciesConstructor(map, getBuiltIn("Map")))();
    var setter = aCallable(newMap.set);
    iterate2(iterator, function (key, value) {
      if (boundFunction(value, key, map)) call(setter, newMap, key, value);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    return newMap;
  }
});

// node_modules/core-js/modules/esnext.map.find.js
var $4 = require_export();
var anObject3 = require_an_object();
var bind3 = require_function_bind_context();
var getMapIterator3 = require_get_map_iterator();
var iterate3 = require_iterate();
$4({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  find: function find(callbackfn) {
    var map = anObject3(this);
    var iterator = getMapIterator3(map);
    var boundFunction = bind3(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    return iterate3(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop(value);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).result;
  }
});

// node_modules/core-js/modules/esnext.map.find-key.js
var $5 = require_export();
var anObject4 = require_an_object();
var bind4 = require_function_bind_context();
var getMapIterator4 = require_get_map_iterator();
var iterate4 = require_iterate();
$5({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  findKey: function findKey(callbackfn) {
    var map = anObject4(this);
    var iterator = getMapIterator4(map);
    var boundFunction = bind4(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    return iterate4(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop(key);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).result;
  }
});

// node_modules/core-js/modules/esnext.map.includes.js
var $6 = require_export();
var anObject5 = require_an_object();
var getMapIterator5 = require_get_map_iterator();
var sameValueZero = require_same_value_zero();
var iterate5 = require_iterate();
$6({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  includes: function includes(searchElement) {
    return iterate5(getMapIterator5(anObject5(this)), function (key, value, stop) {
      if (sameValueZero(value, searchElement)) return stop();
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).stopped;
  }
});

// node_modules/core-js/modules/esnext.map.key-of.js
var $7 = require_export();
var anObject6 = require_an_object();
var getMapIterator6 = require_get_map_iterator();
var iterate6 = require_iterate();
$7({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  keyOf: function keyOf(searchElement) {
    return iterate6(getMapIterator6(anObject6(this)), function (key, value, stop) {
      if (value === searchElement) return stop(key);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).result;
  }
});

// node_modules/core-js/modules/esnext.map.map-keys.js
var $8 = require_export();
var getBuiltIn2 = require_get_built_in();
var bind5 = require_function_bind_context();
var call2 = require_function_call();
var aCallable2 = require_a_callable();
var anObject7 = require_an_object();
var speciesConstructor2 = require_species_constructor();
var getMapIterator7 = require_get_map_iterator();
var iterate7 = require_iterate();
$8({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  mapKeys: function mapKeys(callbackfn) {
    var map = anObject7(this);
    var iterator = getMapIterator7(map);
    var boundFunction = bind5(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    var newMap = new (speciesConstructor2(map, getBuiltIn2("Map")))();
    var setter = aCallable2(newMap.set);
    iterate7(iterator, function (key, value) {
      call2(setter, newMap, boundFunction(value, key, map), value);
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    return newMap;
  }
});

// node_modules/core-js/modules/esnext.map.map-values.js
var $9 = require_export();
var getBuiltIn3 = require_get_built_in();
var bind6 = require_function_bind_context();
var call3 = require_function_call();
var aCallable3 = require_a_callable();
var anObject8 = require_an_object();
var speciesConstructor3 = require_species_constructor();
var getMapIterator8 = require_get_map_iterator();
var iterate8 = require_iterate();
$9({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  mapValues: function mapValues(callbackfn) {
    var map = anObject8(this);
    var iterator = getMapIterator8(map);
    var boundFunction = bind6(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    var newMap = new (speciesConstructor3(map, getBuiltIn3("Map")))();
    var setter = aCallable3(newMap.set);
    iterate8(iterator, function (key, value) {
      call3(setter, newMap, key, boundFunction(value, key, map));
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    return newMap;
  }
});

// node_modules/core-js/modules/esnext.map.merge.js
var $10 = require_export();
var aCallable4 = require_a_callable();
var anObject9 = require_an_object();
var iterate9 = require_iterate();
$10({
  target: "Map",
  proto: true,
  real: true,
  arity: 1,
  forced: true
}, {
  merge: function merge(iterable) {
    var map = anObject9(this);
    var setter = aCallable4(map.set);
    var argumentsLength = arguments.length;
    var i = 0;
    while (i < argumentsLength) {
      iterate9(arguments[i++], setter, {
        that: map,
        AS_ENTRIES: true
      });
    }
    return map;
  }
});

// node_modules/core-js/modules/esnext.map.reduce.js
var $11 = require_export();
var anObject10 = require_an_object();
var aCallable5 = require_a_callable();
var getMapIterator9 = require_get_map_iterator();
var iterate10 = require_iterate();
var $TypeError = TypeError;
$11({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  reduce: function reduce(callbackfn) {
    var map = anObject10(this);
    var iterator = getMapIterator9(map);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? void 0 : arguments[1];
    aCallable5(callbackfn);
    iterate10(iterator, function (key, value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true
    });
    if (noInitial) throw $TypeError("Reduce of empty map with no initial value");
    return accumulator;
  }
});

// node_modules/core-js/modules/esnext.map.some.js
var $12 = require_export();
var anObject11 = require_an_object();
var bind7 = require_function_bind_context();
var getMapIterator10 = require_get_map_iterator();
var iterate11 = require_iterate();
$12({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  some: function some(callbackfn) {
    var map = anObject11(this);
    var iterator = getMapIterator10(map);
    var boundFunction = bind7(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    return iterate11(iterator, function (key, value, stop) {
      if (boundFunction(value, key, map)) return stop();
    }, {
      AS_ENTRIES: true,
      IS_ITERATOR: true,
      INTERRUPTED: true
    }).stopped;
  }
});

// node_modules/core-js/modules/esnext.map.update.js
var $13 = require_export();
var call4 = require_function_call();
var anObject12 = require_an_object();
var aCallable6 = require_a_callable();
var $TypeError2 = TypeError;
$13({
  target: "Map",
  proto: true,
  real: true,
  forced: true
}, {
  update: function update(key, callback) {
    var map = anObject12(this);
    var get = aCallable6(map.get);
    var has = aCallable6(map.has);
    var set = aCallable6(map.set);
    var length = arguments.length;
    aCallable6(callback);
    var isPresentInMap = call4(has, map, key);
    if (!isPresentInMap && length < 3) {
      throw $TypeError2("Updating absent value");
    }
    var value = isPresentInMap ? call4(get, map, key) : aCallable6(length > 2 ? arguments[2] : void 0)(key, map);
    call4(set, map, key, callback(value, key, map));
    return map;
  }
});

// src/core/eventManager.ts
var Event2;
(function (Event3) {
  Event3[Event3["Add"] = 0] = "Add";
  Event3[Event3["Remove"] = 1] = "Remove";
  Event3[Event3["Update"] = 2] = "Update";
  Event3[Event3["ClearAll"] = 3] = "ClearAll";
})(Event2 || (Event2 = {}));
var eventManager = {
  list: /* @__PURE__ */new Map(),
  emitQueue: /* @__PURE__ */new Map(),
  on(event, callback) {
    if (!this.list.has(event)) {
      this.list.set(event, []);
    }
    const callbacks = this.list.get(event);
    callbacks.push(callback);
    return this;
  },
  off(event, callback) {
    if (callback) {
      const callbacks = this.list.get(event);
      if (callbacks) {
        const cb = callbacks.filter(v => v !== callback);
        this.list.set(event, cb);
      }
      return this;
    }
    this.list.delete(event);
    return this;
  },
  cancelEmit(event) {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }
    return this;
  },
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.list.has(event)) {
      const callbacks = this.list.get(event);
      callbacks.forEach(callback => {
        const timer = setTimeout(() => {
          callback(...args);
        }, 0);
        if (!this.emitQueue.has(event)) {
          this.emitQueue.set(event, []);
        }
        const emitQueues = this.emitQueue.get(event);
        emitQueues.push(timer);
      });
    }
  }
};

// src/index.ts
var Vue3Toastify = {
  install(app) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    updateGlobalOptions(options);
  }
};
if (typeof window !== "undefined") {
  window.Vue3Toastify = Vue3Toastify;
}
function updateGlobalOptions() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const globalOptions2 = mergeOptions(defaultGlobalOptions, options);
  saveGlobalOptions(globalOptions2);
}
var src_default = Vue3Toastify;


/***/ })

}]);