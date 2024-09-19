"use strict";
(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[632],{

/***/ 62774:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ api_canbus; }
});

// UNUSED EXPORTS: Canbus

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(91114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
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
// EXTERNAL MODULE: ./node_modules/vue3-toastify/dist/esm/index.js
var esm = __webpack_require__(63262);
// EXTERNAL MODULE: ./src/lang/index.ts + 2 modules
var lang = __webpack_require__(96188);
// EXTERNAL MODULE: ./src/utils/request.ts
var request = __webpack_require__(4322);
;// CONCATENATED MODULE: ./src/api/firmware.ts

const getFirmwareVersion = () => {
  return (0,request/* default */.A)({
    url: "/firmware/version.json",
    method: "GET"
  });
};
const getFirmware = url => {
  return (0,request/* default */.A)({
    url: url ?? "/firmware/firmware.bin.enc",
    method: "GET",
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "application/gzip"
    }
  });
};
;// CONCATENATED MODULE: ./src/api/hash.ts

const getSerial = sha => {
  return (0,request/* default */.A)({
    url: `/hash/${sha}.json`,
    method: "GET"
  });
};
// EXTERNAL MODULE: ./src/utils/debounce.ts
var debounce = __webpack_require__(1560);
// EXTERNAL MODULE: ./src/utils/conversion.ts
var conversion = __webpack_require__(77503);
// EXTERNAL MODULE: ./src/components/bluetooth/index.ts + 4 modules
var bluetooth = __webpack_require__(52126);
// EXTERNAL MODULE: ./src/models/pjcan/device/index.ts + 7 modules
var pjcan_device = __webpack_require__(94027);
// EXTERNAL MODULE: ./src/models/pjcan/buttons/index.ts + 7 modules
var buttons = __webpack_require__(8871);
// EXTERNAL MODULE: ./src/models/pjcan/teyes/index.ts + 3 modules
var teyes = __webpack_require__(87380);
// EXTERNAL MODULE: ./src/models/pjcan/mazda/index.ts + 4 modules
var mazda = __webpack_require__(19164);
// EXTERNAL MODULE: ./src/models/pjcan/datetime/index.ts + 1 modules
var datetime = __webpack_require__(9917);
// EXTERNAL MODULE: ./src/models/pjcan/bose/index.ts + 2 modules
var bose = __webpack_require__(89100);
// EXTERNAL MODULE: ./src/models/pjcan/climate/index.ts + 1 modules
var climate = __webpack_require__(72418);
// EXTERNAL MODULE: ./src/models/pjcan/doors/index.ts + 2 modules
var doors = __webpack_require__(84582);
// EXTERNAL MODULE: ./src/models/pjcan/engine/index.ts + 3 modules
var engine = __webpack_require__(76300);
// EXTERNAL MODULE: ./src/models/pjcan/fuel/index.ts + 3 modules
var fuel = __webpack_require__(59461);
// EXTERNAL MODULE: ./src/models/pjcan/movement/index.ts + 2 modules
var movement = __webpack_require__(14753);
// EXTERNAL MODULE: ./src/models/pjcan/sensors/index.ts + 2 modules
var sensors = __webpack_require__(57411);
// EXTERNAL MODULE: ./src/models/pjcan/temperature/index.ts + 1 modules
var temperature = __webpack_require__(42570);
// EXTERNAL MODULE: ./src/models/pjcan/volume/index.ts + 1 modules
var volume = __webpack_require__(12619);
// EXTERNAL MODULE: ./src/models/pjcan/version/index.ts + 1 modules
var version = __webpack_require__(55800);
// EXTERNAL MODULE: ./src/models/pjcan/choice/index.ts + 1 modules
var choice = __webpack_require__(19103);
// EXTERNAL MODULE: ./src/models/pjcan/base/BaseModel.ts
var BaseModel = __webpack_require__(22575);
// EXTERNAL MODULE: ./src/models/pjcan/device/EDeviceUpdateError.ts
var EDeviceUpdateError = __webpack_require__(80314);
;// CONCATENATED MODULE: ./src/api/canbus.ts


































const dev = "production" === "development";
class Canbus extends (eventemitter3_default()) {
  constructor() {
    super();
    /** Bluetooth */
    (0,defineProperty/* default */.A)(this, "bluetooth", new bluetooth/* Bluetooth */.N4());
    /** Очередь */
    (0,defineProperty/* default */.A)(this, "queue", []);
    /** Ожидание следующей очереди */
    (0,defineProperty/* default */.A)(this, "queueWait", false);
    /** Запрет на отправку данных */
    (0,defineProperty/* default */.A)(this, "queueDisabled", false);
    /** Обновление прошивки */
    (0,defineProperty/* default */.A)(this, "update", new pjcan_device/* DeviceUpdate */.iD());
    /** Таймер */
    (0,defineProperty/* default */.A)(this, "debounce", (0,debounce/* createDebounce */.S)());
    /** Версия прошивки PJCAN */
    (0,defineProperty/* default */.A)(this, "version", new version/* Version */.Rx());
    /** Статус активации устройства */
    (0,defineProperty/* default */.A)(this, "activation", false);
    (0,defineProperty/* default */.A)(this, "__onVersion", ev => canbus.onVersion(ev, false));
    (0,defineProperty/* default */.A)(this, "__onVersion40", ev => canbus.onVersion(ev, true));
    (0,defineProperty/* default */.A)(this, "__onIsActivation", ev => canbus.onIsActivation(ev));
    (0,defineProperty/* default */.A)(this, "__onActivation", ev => canbus.onActivation(ev));
    (0,defineProperty/* default */.A)(this, "scannerInterval", void 0);
    (0,defineProperty/* default */.A)(this, "scannerValue", void 0);
    (0,defineProperty/* default */.A)(this, "loopInterval", void 0);
    (0,defineProperty/* default */.A)(this, "loopChoice", void 0);
    this.bluetooth.addListener(bluetooth/* BLUETOOTH_EVENT_CONNECTED */.Sl, ev => this.onConnected(ev));
    this.bluetooth.addListener(bluetooth/* BLUETOOTH_EVENT_RECEIVE */.Sm, ev => this.onReceive(ev));
  }
  /** Статус работы Canbus */
  get status() {
    return this.bluetooth.connected && this.version.is;
  }
  /** Отправка сообщений из очереди */
  sendBluetoothQueue() {
    if (this.bluetooth.connected) {
      if (this.queueWait) return;
      this.queueWait = true;
      while (this.queue.length) {
        const next = this.queue[0];
        this.queue.shift();
        if (!this.queueDisabled || this.queueDisabled && next.highPriority) {
          this.bluetooth.send(next.data).then(() => {
            next.fn?.(true);
          }).catch(err => {
            next.fn?.(false);
            if (dev) console.log("Query:", err);
          }).finally(() => {
            this.queueWait = false;
            this.sendBluetoothQueue();
          });
          return;
        }
      }
      this.queueWait = false;
    } else if (this.queue.length) {
      this.queue = [];
    }
  }
  /**
   * Запрос/отправка данных
   * @param {IBaseModel} obj Объект данных
   * @param {boolean} request Только запрос данных
   * @param {function} fn Функция обратного вызова
   */
  query(obj, request, fn) {
    if (!this.activation && !obj.skipActivationCheck) return;
    if (this.queue.length) {
      const item = this.queue.find(x => x.exec === obj.exec && x.id === obj.id);
      if (item) {
        if (!request) {
          item.data = obj.get();
          item.fn = fn;
        }
        return;
      }
    }
    this.queue.push({
      exec: obj.exec,
      highPriority: obj.highPriority,
      id: obj.id,
      data: obj.get(request),
      fn
    });
    this.sendBluetoothQueue();
  }
  /**
   * Событие подключения Bluetooth
   * @param {TConnectedStatus} status Статус подключения
   */
  onConnected(status) {
    this.queue = [];
    if (status === bluetooth/* TConnectedStatus */.s5.CONNECT) {
      if (!this.version.is) {
        // Запрос версии прошивки
        this.addListener(version/* API_VERSION_EVENT */.dD, this.__onVersion);
        this.query(new version/* Version */.Rx(), true);
        // Запрос версии прошивки 4.0
        this.addListener(version/* API40_VERSION_EVENT */.FX, this.__onVersion40);
        this.query(new version/* Version */.Rx(undefined, 40), true);
        return;
      }
    }
    this.emit(BaseModel/* API_CANBUS_EVENT */.l, this.status);
  }
  /**
   * Входящее значение версии
   * @param {DataView} data Данные
   * @param {boolean} oldProtocol Старая версия протокола
   */
  onVersion(data, oldProtocol) {
    this.removeListener(version/* API_VERSION_EVENT */.dD, this.__onVersion);
    this.removeListener(version/* API40_VERSION_EVENT */.FX, this.__onVersion40);
    this.queue = [];
    if (oldProtocol) {
      const ver40 = new version/* Version */.Rx(data, 40);
      this.version.major = ver40.major;
      this.version.minor = ver40.minor;
      this.version.build = ver40.build;
      this.version.revision = ver40.revision;
      this.update.protocol = 40;
      this.emit(version/* API_VERSION_EVENT */.dD, this.version.get(false));
    } else this.version.set(data);
    if (this.version.is) {
      const {
        major,
        minor,
        build,
        revision
      } = this.version;
      console.log((0,lang.t)("BLE.server.versionProtocol", {
        mj: major,
        mn: minor,
        bl: build,
        rv: revision
      }));
      // Запрос значения активации устройства
      if (!oldProtocol) {
        this.addListener(pjcan_device/* API_DEVICE_VALUE_EVENT */.dX, this.__onIsActivation);
        this.query(new pjcan_device/* DeviceValue */.In());
      }
      // Проверка наличия новой версии прошивки
      this.checkVersion().then(newVersion => {
        this.emit(version/* API_NEW_VERSION_EVENT */.QM, newVersion);
      }).catch(() => {});
    } else {
      this.emit(BaseModel/* API_CANBUS_EVENT */.l, this.status);
      esm/* toast */.oR.error((0,lang.t)("error.version"));
    }
  }
  /**
   * Проверка активации устройства PJCAN
   * @param {DataView} data Данные
   */
  onIsActivation(data) {
    const device = new pjcan_device/* DeviceValue */.In(data);
    if (device.isData) {
      this.removeListener(pjcan_device/* API_DEVICE_VALUE_EVENT */.dX, this.__onIsActivation);
      this.activation = device.activation;
      if (!this.activation) {
        // для активации устройства получаем хеш устройства
        this.addListener(pjcan_device/* API_DEVICE_INFO_EVENT */.Os, this.__onActivation);
        this.query(new pjcan_device/* DeviceInfo */.Vj());
      } else this.emit(BaseModel/* API_CANBUS_EVENT */.l, this.status);
    }
  }
  /**
   * Активация устройства PJCAN
   * @param {DataView} data Данные
   */
  onActivation(data) {
    const info = new pjcan_device/* DeviceInfo */.Vj(data);
    if (info.isData) {
      this.removeListener(pjcan_device/* API_DEVICE_INFO_EVENT */.Os, this.__onActivation);
      const sha = (0,conversion/* arrayToHex */.cp)(info.sha);
      if (sha?.length) {
        getSerial(sha).then(res => {
          if (res?.sha?.length) {
            const device = new pjcan_device/* DeviceConfig */.pM();
            device.serial = res.sha;
            this.query(device, false, success => {
              if (success) {
                this.rebootDevice(true);
                esm/* toast */.oR.success((0,lang.t)("activation.success"));
              } else esm/* toast */.oR.error((0,lang.t)("activation.error"));
            });
          } else esm/* toast */.oR.error((0,lang.t)("activation.error"));
        }).catch(() => {
          esm/* toast */.oR.error((0,lang.t)("activation.error"));
        });
      }
    }
  }
  /**
   * Входящие данные
   * @param {DataView} data Данные
   */
  onReceive(data) {
    const id = data.getUint8(0);
    switch (id) {
      case version/* API_VERSION_EXEC */.uM:
        {
          // Версия прошивки
          this.emit(version/* API_VERSION_EVENT */.dD, data);
          break;
        }
      case version/* API40_VERSION_EXEC */.kt:
        {
          // Версия прошивки 4.0
          this.emit(version/* API40_VERSION_EVENT */.FX, data);
          break;
        }
      case pjcan_device/* API_DEVICE_INFO_EXEC */.x:
        // Информация об устройстве
        this.emit(pjcan_device/* API_DEVICE_INFO_EVENT */.Os, data);
        break;
      case pjcan_device/* API_DEVICE_CONFIG_EXEC */.z8:
        // Конфигурация устройства
        this.emit(pjcan_device/* API_DEVICE_CONFIG_EVENT */.iX, data);
        break;
      case pjcan_device/* API_DEVICE_VALUE_EXEC */.ID:
        // Значения устройства
        this.emit(pjcan_device/* API_DEVICE_VALUE_EVENT */.dX, data);
        break;
      case pjcan_device/* API_DEVICE_UPDATE_EXEC */.K5: // Обновление прошивки
      case pjcan_device/* API40_DEVICE_UPDATE_EXEC */.Gj:
        this.update.set(data);
        if (this.update.offset < this.update.total) this.updateUpload();
        this.emit(pjcan_device/* API_DEVICE_UPDATE_EVENT */.BO, this.update);
        break;
      case pjcan_device/* API_DEVICE_SCANNER_VALUE_EXEC */.nG:
        // Значения сканирования
        this.emit(pjcan_device/* API_DEVICE_SCANNER_VALUE_EVENT */.eb, data);
        break;
      case pjcan_device/* API_DEVICE_VIEW_WORKTIME_EXEC */.J2:
        // Отображение времени работы устройства
        this.emit(pjcan_device/* API_DEVICE_VIEW_WORKTIME_EVENT */.K, data);
        break;
      case pjcan_device/* API_DEVICE_VIEW_VOLTMETER_EXEC */.ru:
        // Отображение напряжения бортовой сети
        this.emit(pjcan_device/* API_DEVICE_VIEW_VOLTMETER_EVENT */.CN, data);
        break;
      case choice/* API_CHOICE_EXEC */.h:
        // Выборочные данные
        new choice/* ChoiceValue */.L(data, res => this.onReceive(res));
        break;
      case buttons/* API_BUTTONS_SW1_CONFIG_EXEC */.ed:
        // Конфигурация кнопок SW1
        this.emit(buttons/* API_BUTTONS_SW1_CONFIG_EVENT */.dE, data);
        break;
      case buttons/* API_BUTTON_SW1_VALUE_EXEC */.IF:
        // Значения кнопки SW1
        this.emit(buttons/* API_BUTTON_SW1_VALUE_EVENT */.Du, data);
        break;
      case buttons/* API_BUTTONS_SW3_CONFIG_EXEC */.SI:
        // Конфигурация кнопок SW3
        this.emit(buttons/* API_BUTTONS_SW3_CONFIG_EVENT */.Dg, data);
        break;
      case buttons/* API_BUTTON_SW3_VALUE_EXEC */.UK:
        // Значения кнопки SW3
        this.emit(buttons/* API_BUTTON_SW3_VALUE_EVENT */.fB, data);
        break;
      case mazda/* API_MAZDA_CONFIG_EXEC */.Es:
        // Конфигурация автомобиля
        this.emit(mazda/* API_MAZDA_CONFIG_EVENT */.fz, data);
        break;
      case mazda/* API_MAZDA_VIEW_EXEC */.N5:
        // Конфигурация отображения текста приветствия
        this.emit(mazda/* API_MAZDA_VIEW_EVENT */.UI, data);
        break;
      case datetime/* API_DATETIME_CONFIG_EXEC */.GI:
        // Конфигурация времени
        this.emit(datetime/* API_DATETIME_CONFIG_EVENT */.JR, data);
        break;
      case datetime/* API_DATETIME_VIEW_EXEC */.Bm:
        // Конфигурация отображения времени
        this.emit(datetime/* API_DATETIME_VIEW_EVENT */.kP, data);
        break;
      case teyes/* API_TEYES_CONFIG_EXEC */.Nr:
        // Конфигурация Teyes
        this.emit(teyes/* API_TEYES_CONFIG_EVENT */.sK, data);
        break;
      case teyes/* API_TEYES_TEXT_EXEC */.KI:
        // Текст Teyes
        this.emit(teyes/* API_TEYES_TEXT_EVENT */.HS, data);
        break;
      case teyes/* API_TEYES_TEXT_VIEW_EXEC */.cH:
        // Параметры отображения Teyes
        this.emit(teyes/* API_TEYES_TEXT_VIEW_EVENT */.lb, data);
        break;
      case bose/* API_BOSE_CONFIG_EXEC */.YG:
        // Конфигурация Bose
        this.emit(bose/* API_BOSE_CONFIG_EVENT */.zV, data);
        break;
      case bose/* API_BOSE_VIEW_EXEC */.xT:
        // Параметры отображения Bose
        this.emit(bose/* API_BOSE_VIEW_EVENT */.qJ, data);
        break;
      case climate/* API_CLIMATE_VALUE_EXEC */.Z$:
        // Значения климат-контроля
        this.emit(climate/* API_CLIMATE_VALUE_EVENT */.Yu, data);
        break;
      case climate/* API_CLIMATE_VIEW_EXEC */.zE:
        // Параметры отображения климат-контроля
        this.emit(climate/* API_CLIMATE_VIEW_EVENT */.yt, data);
        break;
      case doors/* API_DOORS_CONFIG_EXEC */.CY:
        this.emit(doors/* API_DOORS_CONFIG_EVENT */.lP, data);
        break;
      case doors/* API_DOORS_VALUE_EXEC */.Hz:
        // Значения дверей
        this.emit(doors/* API_DOORS_VALUE_EVENT */.kN, data);
        break;
      case doors/* API_DOORS_VIEW_EXEC */.zD:
        // Параметры отображения дверей
        this.emit(doors/* API_DOORS_VIEW_EVENT */.Ww, data);
        break;
      case engine/* API_ENGINE_CONFIG_EXEC */.D6:
        // Конфигурация ДВС
        this.emit(engine/* API_ENGINE_CONFIG_EVENT */.s_, data);
        break;
      case engine/* API_ENGINE_VALUE_EXEC */.Oq:
        // Значения ДВС
        this.emit(engine/* API_ENGINE_VALUE_EVENT */.P8, data);
        break;
      case engine/* API_ENGINE_VIEW_EXEC */.Em:
        // Параметры отображения ДВС
        this.emit(engine/* API_ENGINE_VIEW_EVENT */.Zw, data);
        break;
      case engine/* API_ENGINE_VIEW_ENABLED_EXEC */.Cc:
        this.emit(engine/* API_ENGINE_VIEW_ENABLED_EVENT */.tn, data);
        break;
      case engine/* API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC */.Yj:
        this.emit(engine/* API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT */.DM, data);
        break;
      case engine/* API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC */.xx:
        this.emit(engine/* API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT */.w0, data);
        break;
      case engine/* API_ENGINE_VIEW_COOLANT_EXEC */.Pv:
        this.emit(engine/* API_ENGINE_VIEW_COOLANT_EVENT */.EX, data);
        break;
      case engine/* API_ENGINE_VIEW_RPM_EXEC */.k3:
        this.emit(engine/* API_ENGINE_VIEW_RPM_EVENT */.f0, data);
        break;
      case engine/* API_ENGINE_VIEW_LOAD_EXEC */.L9:
        this.emit(engine/* API_ENGINE_VIEW_LOAD_EVENT */.Ud, data);
        break;
      case engine/* API_ENGINE_VIEW_THROTTLE_EXEC */.jh:
        this.emit(engine/* API_ENGINE_VIEW_THROTTLE_EVENT */.wN, data);
        break;
      case fuel/* API_FUEL_CONFIG_EXEC */.n7:
        // Конфигурация расхода
        this.emit(fuel/* API_FUEL_CONFIG_EVENT */.KC, data);
        break;
      case fuel/* API_FUEL_VALUE_EXEC */.qV:
        // Значения расхода
        this.emit(fuel/* API_FUEL_VALUE_EVENT */.tS, data);
        break;
      case fuel/* API_FUEL_VIEW_EXEC */.OG:
        // Параметры отображения расхода
        this.emit(fuel/* API_FUEL_VIEW_EVENT */.jC, data);
        break;
      case fuel/* API_FUEL_VIEW_CURRENT_EXEC */.yx:
        this.emit(fuel/* API_FUEL_VIEW_CURRENT_EVENT */.jh, data);
        break;
      case fuel/* API_FUEL_VIEW_AVG_EXEC */.Ng:
        this.emit(fuel/* API_FUEL_VIEW_AVG_EVENT */.Cc, data);
        break;
      case movement/* API_MOVEMENT_VALUE_EXEC */.vT:
        // Значения движения
        this.emit(movement/* API_MOVEMENT_VALUE_EVENT */.Y1, data);
        break;
      case movement/* API_MOVEMENT_VIEW_EXEC */.N6:
        // Параметры отображения движения
        this.emit(movement/* API_MOVEMENT_VIEW_EVENT */.CE, data);
        break;
      case movement/* API_MOVEMENT_VIEW_SPEED_EXEC */.T3:
        this.emit(movement/* API_MOVEMENT_VIEW_SPEED_EVENT */.cJ, data);
        break;
      case movement/* API_MOVEMENT_VIEW_SPEED_AVG_EXEC */.GS:
        this.emit(movement/* API_MOVEMENT_VIEW_SPEED_AVG_EVENT */.hV, data);
        break;
      case movement/* API_MOVEMENT_VIEW_REST_WAY_EXEC */.iH:
        this.emit(movement/* API_MOVEMENT_VIEW_REST_WAY_EVENT */.rL, data);
        break;
      case sensors/* API_SENSORS_VALUE_EXEC */.H2:
        // Значения датчиков
        this.emit(sensors/* API_SENSORS_VALUE_EVENT */.Eg, data);
        break;
      case sensors/* API_SENSORS_VIEW_EXEC */.fW:
        // Параметры отображения датчиков
        this.emit(sensors/* API_SENSORS_VIEW_EVENT */.en, data);
        break;
      case sensors/* API_SENSORS_VIEW_HANDBRAKE_EXEC */._V:
        this.emit(sensors/* API_SENSORS_VIEW_HANDBRAKE_EVENT */.fN, data);
        break;
      case sensors/* API_SENSORS_VIEW_REVERSE_EXEC */.Y5:
        this.emit(sensors/* API_SENSORS_VIEW_REVERSE_EVENT */.Bj, data);
        break;
      case sensors/* API_SENSORS_VIEW_SEATBELT_EXEC */.MA:
        this.emit(sensors/* API_SENSORS_VIEW_SEATBELT_EVENT */.rd, data);
        break;
      case sensors/* API_SENSORS_VIEW_TURN_SIGNAL_EXEC */.WL:
        this.emit(sensors/* API_SENSORS_VIEW_TURN_SIGNAL_EVENT */.he, data);
        break;
      case temperature/* API_TEMPERATURE_VALUE_EXEC */.i0:
        // Значения температуры
        this.emit(temperature/* API_TEMPERATURE_VALUE_EVENT */.H0, data);
        break;
      case temperature/* API_TEMPERATURE_VIEW_EXEC */.EO:
        // Параметры отображения температуры
        this.emit(temperature/* API_TEMPERATURE_VIEW_EVENT */.P5, data);
        break;
      case volume/* API_VOLUME_CONFIG_EXEC */.fo:
        // Конфигурация уровня звука
        this.emit(volume/* API_VOLUME_CONFIG_EVENT */.u7, data);
        break;
      case volume/* API_VOLUME_VIEW_EXEC */.Kd:
        // Параметры отображения уровня звука
        this.emit(volume/* API_VOLUME_VIEW_EVENT */.fB, data);
        break;
    }
  }
  /** Запустить процесс загрузки прошивки на устройство */
  updateStart() {
    getFirmware(this.update.firmwareUrl).then(res => {
      if (res?.byteLength > 0) {
        this.update.firmwareData = new Uint8Array(res);
        this.update.total = res.byteLength;
        this.update.offset = 0;
        this.update.error = EDeviceUpdateError/* EDeviceUpdateError */.D.UPD_OK;
        this.update.encrypt = this.update.iv;
        setTimeout(() => this.updateUpload(), 1000);
      }
    }).catch(() => this.emit(pjcan_device/* API_DEVICE_UPDATE_EVENT_ERROR */.S, (0,lang.t)("update.notify.errorDownload")));
  }
  /** Пишем данные файла прошивки в устройство PJCAN */
  async updateUpload() {
    if (this.bluetooth.connected && this.update.error === 0 && this.update.offset <= this.update.total) {
      this.queueDisabled = true;
      try {
        await this.bluetooth.send(this.update.get());
      } catch (e) {
        console.log(e);
      }
    } else if (this.update.error !== 0) {
      this.queueDisabled = false;
    }
    if (this.update.end) {
      this.debounce(() => this.emit(pjcan_device/* API_DEVICE_UPDATE_EVENT_ERROR */.S, (0,lang.t)("update.notify.errorWaitUpdate")), 60000);
    } else {
      this.debounce(() => this.emit(pjcan_device/* API_DEVICE_UPDATE_EVENT_ERROR */.S, (0,lang.t)("update.notify.errorUpload")), 5000);
    }
  }
  /** Проверить версию прошивки */
  checkVersion() {
    return new Promise((resolve, reject) => {
      getFirmwareVersion().then(res => {
        this.update.firmwareUrl = res?.url ?? "";
        this.update.setIV(res?.iv);
        // проверяем версию прошивки
        if (res.current?.length === 4) {
          const ver = res.current;
          const newVersion = new version/* Version */.Rx();
          newVersion.major = ver[0];
          newVersion.minor = ver[1];
          newVersion.build = ver[2];
          newVersion.revision = ver[3];
          if (this.version.compare(newVersion, 4) > 0) resolve(newVersion);else reject("Current version");
        } else reject("No data");
      }).catch(e => reject(e));
    });
  }
  /**
   * Перезагрузить устройство
   * @param {boolean} save Сохранить настройки перед загрузкой
   * @param {boolean} resetConfig Сбросить конфигурацию устройства
   * @param {boolean} resetView Сбросить параметры отображения
   */
  rebootDevice(save = false, resetConfig = false, resetView = false) {
    this.version.clear();
    this.queue = [];
    const action = new pjcan_device/* DeviceAction */.nX();
    action.reboot = true;
    action.save = save;
    action.resetConfig = resetConfig;
    action.resetView = resetView;
    this.query(action);
  }
  /**
   * Запуск/остановка сканера
   * @param {boolean} status Статус
   * @param {function} fn Функция обратного вызова
   */
  scanner(status, fn) {
    if (status && !this.status) return false;
    const action = new pjcan_device/* DeviceScannerAction */.Z();
    this.queueDisabled = status;
    action.enabled = status;
    this.query(action, false, success => {
      if (success && status) {
        if (!this.scannerValue) this.scannerValue = new pjcan_device/* DeviceScannerValue */.G4();
        if (!this.scannerInterval) {
          this.scannerInterval = setInterval(() => {
            if (this.scannerValue) this.query(this.scannerValue, true);else this.scannerFree();
          }, 500);
        }
      }
      fn(success);
    });
    if (!status) this.scannerFree();
    return true;
  }
  /** Очистить значения сканера */
  scannerFree() {
    clearInterval(this.scannerInterval);
    this.scannerInterval = undefined;
    this.scannerValue = undefined;
  }
  /**
   * Циклический опрос
   * @param {number[]} list Список ChoiceValue
   */
  loop(list) {
    const result = list.length > 0 && this.status;
    if (result) {
      if (!this.loopChoice) this.loopChoice = new choice/* ChoiceValue */.L();
      this.loopChoice.listID = [...list];
      if (!this.loopInterval) {
        this.loopInterval = setInterval(() => {
          if (this.loopChoice) this.query(this.loopChoice, true);else this.loopFree();
        }, 250);
        if (this.loopChoice) this.query(this.loopChoice, true);
      }
    }
    return result;
  }
  /** Очистить цикл */
  loopFree() {
    clearInterval(this.loopInterval);
    this.loopInterval = undefined;
    this.loopChoice = undefined;
  }
}
const canbus = new Canbus();
/* harmony default export */ var api_canbus = (canbus);

/***/ }),

/***/ 27799:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ setScanCan; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4322);

const setScanCan = data => {
  const id = "AKfycbwGEW3y_jz8MwL4h7ffem_Bdrojoo-Wmd1tQ9Ot_Sg-8vt7jjjJNhyqgXHsjT323K4l5w";
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: `https://script.google.com/macros/s/${id}/exec`,
    method: "POST",
    params: {
      data: JSON.stringify(data)
    }
  });
};

/***/ })

}]);