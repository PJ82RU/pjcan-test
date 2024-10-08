(self["webpackChunkpjcan"] = self["webpackChunkpjcan"] || []).push([[962],{

/***/ 52844:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Indonesian [id]
//! author : Mohammad Satrio Utomo : https://github.com/tyok
//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var id = moment.defineLocale('id', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'siang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sore' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'siang';
      } else if (hours < 19) {
        return 'sore';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Besok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kemarin pukul] LT',
      lastWeek: 'dddd [lalu pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lalu',
      s: 'beberapa detik',
      ss: '%d detik',
      m: 'semenit',
      mm: '%d menit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return id;
});

/***/ }),

/***/ 97353:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Icelandic [is]
//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(n) {
    if (n % 100 === 11) {
      return true;
    } else if (n % 10 === 1) {
      return false;
    }
    return true;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
      case 'ss':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
        }
        return result + 'sekúnda';
      case 'm':
        return withoutSuffix ? 'mínúta' : 'mínútu';
      case 'mm':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
        } else if (withoutSuffix) {
          return result + 'mínúta';
        }
        return result + 'mínútu';
      case 'hh':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
        }
        return result + 'klukkustund';
      case 'd':
        if (withoutSuffix) {
          return 'dagur';
        }
        return isFuture ? 'dag' : 'degi';
      case 'dd':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'dagar';
          }
          return result + (isFuture ? 'daga' : 'dögum');
        } else if (withoutSuffix) {
          return result + 'dagur';
        }
        return result + (isFuture ? 'dag' : 'degi');
      case 'M':
        if (withoutSuffix) {
          return 'mánuður';
        }
        return isFuture ? 'mánuð' : 'mánuði';
      case 'MM':
        if (plural(number)) {
          if (withoutSuffix) {
            return result + 'mánuðir';
          }
          return result + (isFuture ? 'mánuði' : 'mánuðum');
        } else if (withoutSuffix) {
          return result + 'mánuður';
        }
        return result + (isFuture ? 'mánuð' : 'mánuði');
      case 'y':
        return withoutSuffix || isFuture ? 'ár' : 'ári';
      case 'yy':
        if (plural(number)) {
          return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
        }
        return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
    }
  }
  var is = moment.defineLocale('is', {
    months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar: {
      sameDay: '[í dag kl.] LT',
      nextDay: '[á morgun kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[í gær kl.] LT',
      lastWeek: '[síðasta] dddd [kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'eftir %s',
      past: 'fyrir %s síðan',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: 'klukkustund',
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return is;
});

/***/ }),

/***/ 20774:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Italian (Switzerland) [it-ch]
//! author : xfh : https://github.com/xfh

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var itCh = moment.defineLocale('it-ch', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[la scorsa] dddd [alle] LT';
          default:
            return '[lo scorso] dddd [alle] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: function (s) {
        return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
      },
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: "un'ora",
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return itCh;
});

/***/ }),

/***/ 6364:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
//! author: Marco : https://github.com/Manfre98

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var it = moment.defineLocale('it', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: function () {
        return '[Oggi a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      nextDay: function () {
        return '[Domani a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      nextWeek: function () {
        return 'dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      lastDay: function () {
        return '[Ieri a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
      },
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[La scorsa] dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
          default:
            return '[Lo scorso] dddd [a' + (this.hours() > 1 ? 'lle ' : this.hours() === 0 ? ' ' : "ll'") + ']LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'tra %s',
      past: '%s fa',
      s: 'alcuni secondi',
      ss: '%d secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: "un'ora",
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      w: 'una settimana',
      ww: '%d settimane',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return it;
});

/***/ }),

/***/ 6008:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ja = moment.defineLocale('ja', {
    eras: [{
      since: '2019-05-01',
      offset: 1,
      name: '令和',
      narrow: '㋿',
      abbr: 'R'
    }, {
      since: '1989-01-08',
      until: '2019-04-30',
      offset: 1,
      name: '平成',
      narrow: '㍻',
      abbr: 'H'
    }, {
      since: '1926-12-25',
      until: '1989-01-07',
      offset: 1,
      name: '昭和',
      narrow: '㍼',
      abbr: 'S'
    }, {
      since: '1912-07-30',
      until: '1926-12-24',
      offset: 1,
      name: '大正',
      narrow: '㍽',
      abbr: 'T'
    }, {
      since: '1873-01-01',
      until: '1912-07-29',
      offset: 6,
      name: '明治',
      narrow: '㍾',
      abbr: 'M'
    }, {
      since: '0001-01-01',
      until: '1873-12-31',
      offset: 1,
      name: '西暦',
      narrow: 'AD',
      abbr: 'AD'
    }, {
      since: '0000-12-31',
      until: -Infinity,
      offset: 1,
      name: '紀元前',
      narrow: 'BC',
      abbr: 'BC'
    }],
    eraYearOrdinalRegex: /(元|\d+)年/,
    eraYearOrdinalParse: function (input, match) {
      return match[1] === '元' ? 1 : parseInt(match[1] || input, 10);
    },
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日 dddd HH:mm',
      l: 'YYYY/MM/DD',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日(ddd) HH:mm'
    },
    meridiemParse: /午前|午後/i,
    isPM: function (input) {
      return input === '午後';
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return '午前';
      } else {
        return '午後';
      }
    },
    calendar: {
      sameDay: '[今日] LT',
      nextDay: '[明日] LT',
      nextWeek: function (now) {
        if (now.week() !== this.week()) {
          return '[来週]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      lastDay: '[昨日] LT',
      lastWeek: function (now) {
        if (this.week() !== now.week()) {
          return '[先週]dddd LT';
        } else {
          return 'dddd LT';
        }
      },
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: function (number, period) {
      switch (period) {
        case 'y':
          return number === 1 ? '元年' : number + '年';
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '数秒',
      ss: '%d秒',
      m: '1分',
      mm: '%d分',
      h: '1時間',
      hh: '%d時間',
      d: '1日',
      dd: '%d日',
      M: '1ヶ月',
      MM: '%dヶ月',
      y: '1年',
      yy: '%d年'
    }
  });
  return ja;
});

/***/ }),

/***/ 68221:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Javanese [jv]
//! author : Rony Lantip : https://github.com/lantip
//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var jv = moment.defineLocale('jv', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'enjing') {
        return hour;
      } else if (meridiem === 'siyang') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
        return hour + 12;
      }
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours < 11) {
        return 'enjing';
      } else if (hours < 15) {
        return 'siyang';
      } else if (hours < 19) {
        return 'sonten';
      } else {
        return 'ndalu';
      }
    },
    calendar: {
      sameDay: '[Dinten puniko pukul] LT',
      nextDay: '[Mbenjang pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kala wingi pukul] LT',
      lastWeek: 'dddd [kepengker pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'wonten ing %s',
      past: '%s ingkang kepengker',
      s: 'sawetawis detik',
      ss: '%d detik',
      m: 'setunggal menit',
      mm: '%d menit',
      h: 'setunggal jam',
      hh: '%d jam',
      d: 'sedinten',
      dd: '%d dinten',
      M: 'sewulan',
      MM: '%d wulan',
      y: 'setaun',
      yy: '%d taun'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return jv;
});

/***/ }),

/***/ 92417:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Georgian [ka]
//! author : Irakli Janiashvili : https://github.com/IrakliJani

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ka = moment.defineLocale('ka', {
    months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
    monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays: {
      standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
      format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
      isFormat: /(წინა|შემდეგ)/
    },
    weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[დღეს] LT[-ზე]',
      nextDay: '[ხვალ] LT[-ზე]',
      lastDay: '[გუშინ] LT[-ზე]',
      nextWeek: '[შემდეგ] dddd LT[-ზე]',
      lastWeek: '[წინა] dddd LT-ზე',
      sameElse: 'L'
    },
    relativeTime: {
      future: function (s) {
        return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function ($0, $1, $2) {
          return $2 === 'ი' ? $1 + 'ში' : $1 + $2 + 'ში';
        });
      },
      past: function (s) {
        if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
          return s.replace(/(ი|ე)$/, 'ის წინ');
        }
        if (/წელი/.test(s)) {
          return s.replace(/წელი$/, 'წლის წინ');
        }
        return s;
      },
      s: 'რამდენიმე წამი',
      ss: '%d წამი',
      m: 'წუთი',
      mm: '%d წუთი',
      h: 'საათი',
      hh: '%d საათი',
      d: 'დღე',
      dd: '%d დღე',
      M: 'თვე',
      MM: '%d თვე',
      y: 'წელი',
      yy: '%d წელი'
    },
    dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal: function (number) {
      if (number === 0) {
        return number;
      }
      if (number === 1) {
        return number + '-ლი';
      }
      if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
        return 'მე-' + number;
      }
      return number + '-ე';
    },
    week: {
      dow: 1,
      doy: 7
    }
  });
  return ka;
});

/***/ }),

/***/ 42071:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kazakh [kk]
//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    0: '-ші',
    1: '-ші',
    2: '-ші',
    3: '-ші',
    4: '-ші',
    5: '-ші',
    6: '-шы',
    7: '-ші',
    8: '-ші',
    9: '-шы',
    10: '-шы',
    20: '-шы',
    30: '-шы',
    40: '-шы',
    50: '-ші',
    60: '-шы',
    70: '-ші',
    80: '-ші',
    90: '-шы',
    100: '-ші'
  };
  var kk = moment.defineLocale('kk', {
    months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
    weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Бүгін сағат] LT',
      nextDay: '[Ертең сағат] LT',
      nextWeek: 'dddd [сағат] LT',
      lastDay: '[Кеше сағат] LT',
      lastWeek: '[Өткен аптаның] dddd [сағат] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ішінде',
      past: '%s бұрын',
      s: 'бірнеше секунд',
      ss: '%d секунд',
      m: 'бір минут',
      mm: '%d минут',
      h: 'бір сағат',
      hh: '%d сағат',
      d: 'бір күн',
      dd: '%d күн',
      M: 'бір ай',
      MM: '%d ай',
      y: 'бір жыл',
      yy: '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    ordinal: function (number) {
      var a = number % 10,
        b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return kk;
});

/***/ }),

/***/ 76149:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Cambodian [km]
//! author : Kruy Vanna : https://github.com/kruyvanna

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '១',
      2: '២',
      3: '៣',
      4: '៤',
      5: '៥',
      6: '៦',
      7: '៧',
      8: '៨',
      9: '៩',
      0: '០'
    },
    numberMap = {
      '១': '1',
      '២': '2',
      '៣': '3',
      '៤': '4',
      '៥': '5',
      '៦': '6',
      '៧': '7',
      '៨': '8',
      '៩': '9',
      '០': '0'
    };
  var km = moment.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
    weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /ព្រឹក|ល្ងាច/,
    isPM: function (input) {
      return input === 'ល្ងាច';
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'ព្រឹក';
      } else {
        return 'ល្ងាច';
      }
    },
    calendar: {
      sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
      nextDay: '[ស្អែក ម៉ោង] LT',
      nextWeek: 'dddd [ម៉ោង] LT',
      lastDay: '[ម្សិលមិញ ម៉ោង] LT',
      lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sទៀត',
      past: '%sមុន',
      s: 'ប៉ុន្មានវិនាទី',
      ss: '%d វិនាទី',
      m: 'មួយនាទី',
      mm: '%d នាទី',
      h: 'មួយម៉ោង',
      hh: '%d ម៉ោង',
      d: 'មួយថ្ងៃ',
      dd: '%d ថ្ងៃ',
      M: 'មួយខែ',
      MM: '%d ខែ',
      y: 'មួយឆ្នាំ',
      yy: '%d ឆ្នាំ'
    },
    dayOfMonthOrdinalParse: /ទី\d{1,2}/,
    ordinal: 'ទី%d',
    preparse: function (string) {
      return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return km;
});

/***/ }),

/***/ 94572:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kannada [kn]
//! author : Rajeev Naik : https://github.com/rajeevnaikte

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '೧',
      2: '೨',
      3: '೩',
      4: '೪',
      5: '೫',
      6: '೬',
      7: '೭',
      8: '೮',
      9: '೯',
      0: '೦'
    },
    numberMap = {
      '೧': '1',
      '೨': '2',
      '೩': '3',
      '೪': '4',
      '೫': '5',
      '೬': '6',
      '೭': '7',
      '೮': '8',
      '೯': '9',
      '೦': '0'
    };
  var kn = moment.defineLocale('kn', {
    months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
    monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
    monthsParseExact: true,
    weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
    weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
    weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
      sameDay: '[ಇಂದು] LT',
      nextDay: '[ನಾಳೆ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ನಿನ್ನೆ] LT',
      lastWeek: '[ಕೊನೆಯ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ನಂತರ',
      past: '%s ಹಿಂದೆ',
      s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
      ss: '%d ಸೆಕೆಂಡುಗಳು',
      m: 'ಒಂದು ನಿಮಿಷ',
      mm: '%d ನಿಮಿಷ',
      h: 'ಒಂದು ಗಂಟೆ',
      hh: '%d ಗಂಟೆ',
      d: 'ಒಂದು ದಿನ',
      dd: '%d ದಿನ',
      M: 'ಒಂದು ತಿಂಗಳು',
      MM: '%d ತಿಂಗಳು',
      y: 'ಒಂದು ವರ್ಷ',
      yy: '%d ವರ್ಷ'
    },
    preparse: function (string) {
      return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ರಾತ್ರಿ') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
        return hour;
      } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'ಸಂಜೆ') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'ರಾತ್ರಿ';
      } else if (hour < 10) {
        return 'ಬೆಳಿಗ್ಗೆ';
      } else if (hour < 17) {
        return 'ಮಧ್ಯಾಹ್ನ';
      } else if (hour < 20) {
        return 'ಸಂಜೆ';
      } else {
        return 'ರಾತ್ರಿ';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
    ordinal: function (number) {
      return number + 'ನೇ';
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return kn;
});

/***/ }),

/***/ 60659:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ko = moment.defineLocale('ko', {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY년 MMMM D일',
      LLL: 'YYYY년 MMMM D일 A h:mm',
      LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
      l: 'YYYY.MM.DD.',
      ll: 'YYYY년 MMMM D일',
      lll: 'YYYY년 MMMM D일 A h:mm',
      llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
      sameDay: '오늘 LT',
      nextDay: '내일 LT',
      nextWeek: 'dddd LT',
      lastDay: '어제 LT',
      lastWeek: '지난주 dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s 후',
      past: '%s 전',
      s: '몇 초',
      ss: '%d초',
      m: '1분',
      mm: '%d분',
      h: '한 시간',
      hh: '%d시간',
      d: '하루',
      dd: '%d일',
      M: '한 달',
      MM: '%d달',
      y: '일 년',
      yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '일';
        case 'M':
          return number + '월';
        case 'w':
        case 'W':
          return number + '주';
        default:
          return number;
      }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
      return token === '오후';
    },
    meridiem: function (hour, minute, isUpper) {
      return hour < 12 ? '오전' : '오후';
    }
  });
  return ko;
});

/***/ }),

/***/ 59398:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Northern Kurdish [ku-kmr]
//! authors : Mazlum Özdogan : https://github.com/mergehez

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(num, withoutSuffix, key, isFuture) {
    var format = {
      s: ['çend sanîye', 'çend sanîyeyan'],
      ss: [num + ' sanîye', num + ' sanîyeyan'],
      m: ['deqîqeyek', 'deqîqeyekê'],
      mm: [num + ' deqîqe', num + ' deqîqeyan'],
      h: ['saetek', 'saetekê'],
      hh: [num + ' saet', num + ' saetan'],
      d: ['rojek', 'rojekê'],
      dd: [num + ' roj', num + ' rojan'],
      w: ['hefteyek', 'hefteyekê'],
      ww: [num + ' hefte', num + ' hefteyan'],
      M: ['mehek', 'mehekê'],
      MM: [num + ' meh', num + ' mehan'],
      y: ['salek', 'salekê'],
      yy: [num + ' sal', num + ' salan']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
  }
  // function obliqueNumSuffix(num) {
  //     if(num.includes(':'))
  //         num = parseInt(num.split(':')[0]);
  //     else
  //         num = parseInt(num);
  //     return num == 0 || num % 10 == 1 ? 'ê'
  //                         : (num > 10 && num % 10 == 0 ? 'î' : 'an');
  // }
  function ezafeNumSuffix(num) {
    num = '' + num;
    var l = num.substring(num.length - 1),
      ll = num.length > 1 ? num.substring(num.length - 2) : '';
    if (!(ll == 12 || ll == 13) && (l == '2' || l == '3' || ll == '50' || l == '70' || l == '80')) return 'yê';
    return 'ê';
  }
  var kuKmr = moment.defineLocale('ku-kmr', {
    // According to the spelling rules defined by the work group of Weqfa Mezopotamyayê (Mesopotamia Foundation)
    // this should be: 'Kanûna Paşîn_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Çirîya Pêşîn_Çirîya Paşîn_Kanûna Pêşîn'
    // But the names below are more well known and handy
    months: 'Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar'.split('_'),
    monthsShort: 'Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber'.split('_'),
    monthsParseExact: true,
    weekdays: 'Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî'.split('_'),
    weekdaysShort: 'Yek_Du_Sê_Çar_Pên_În_Şem'.split('_'),
    weekdaysMin: 'Ye_Du_Sê_Ça_Pê_În_Şe'.split('_'),
    meridiem: function (hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'bn' : 'BN';
      } else {
        return isLower ? 'pn' : 'PN';
      }
    },
    meridiemParse: /bn|BN|pn|PN/,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM[a] YYYY[an]',
      LLL: 'Do MMMM[a] YYYY[an] HH:mm',
      LLLL: 'dddd, Do MMMM[a] YYYY[an] HH:mm',
      ll: 'Do MMM[.] YYYY[an]',
      lll: 'Do MMM[.] YYYY[an] HH:mm',
      llll: 'ddd[.], Do MMM[.] YYYY[an] HH:mm'
    },
    calendar: {
      sameDay: '[Îro di saet] LT [de]',
      nextDay: '[Sibê di saet] LT [de]',
      nextWeek: 'dddd [di saet] LT [de]',
      lastDay: '[Duh di saet] LT [de]',
      lastWeek: 'dddd[a borî di saet] LT [de]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'di %s de',
      past: 'berî %s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      w: processRelativeTime,
      ww: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}(?:yê|ê|\.)/,
    ordinal: function (num, period) {
      var p = period.toLowerCase();
      if (p.includes('w') || p.includes('m')) return num + '.';
      return num + ezafeNumSuffix(num);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return kuKmr;
});

/***/ }),

/***/ 66285:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kurdish [ku]
//! author : Shahram Mebashar : https://github.com/ShahramMebashar

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '١',
      2: '٢',
      3: '٣',
      4: '٤',
      5: '٥',
      6: '٦',
      7: '٧',
      8: '٨',
      9: '٩',
      0: '٠'
    },
    numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
    },
    months = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];
  var ku = moment.defineLocale('ku', {
    months: months,
    monthsShort: months,
    weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
    weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /ئێواره‌|به‌یانی/,
    isPM: function (input) {
      return /ئێواره‌/.test(input);
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'به‌یانی';
      } else {
        return 'ئێواره‌';
      }
    },
    calendar: {
      sameDay: '[ئه‌مرۆ كاتژمێر] LT',
      nextDay: '[به‌یانی كاتژمێر] LT',
      nextWeek: 'dddd [كاتژمێر] LT',
      lastDay: '[دوێنێ كاتژمێر] LT',
      lastWeek: 'dddd [كاتژمێر] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'له‌ %s',
      past: '%s',
      s: 'چه‌ند چركه‌یه‌ك',
      ss: 'چركه‌ %d',
      m: 'یه‌ك خوله‌ك',
      mm: '%d خوله‌ك',
      h: 'یه‌ك كاتژمێر',
      hh: '%d كاتژمێر',
      d: 'یه‌ك ڕۆژ',
      dd: '%d ڕۆژ',
      M: 'یه‌ك مانگ',
      MM: '%d مانگ',
      y: 'یه‌ك ساڵ',
      yy: '%d ساڵ'
    },
    preparse: function (string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });
  return ku;
});

/***/ }),

/***/ 81609:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Kyrgyz [ky]
//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    0: '-чү',
    1: '-чи',
    2: '-чи',
    3: '-чү',
    4: '-чү',
    5: '-чи',
    6: '-чы',
    7: '-чи',
    8: '-чи',
    9: '-чу',
    10: '-чу',
    20: '-чы',
    30: '-чу',
    40: '-чы',
    50: '-чү',
    60: '-чы',
    70: '-чи',
    80: '-чи',
    90: '-чу',
    100: '-чү'
  };
  var ky = moment.defineLocale('ky', {
    months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
    weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
    weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Бүгүн саат] LT',
      nextDay: '[Эртең саат] LT',
      nextWeek: 'dddd [саат] LT',
      lastDay: '[Кечээ саат] LT',
      lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ичинде',
      past: '%s мурун',
      s: 'бирнече секунд',
      ss: '%d секунд',
      m: 'бир мүнөт',
      mm: '%d мүнөт',
      h: 'бир саат',
      hh: '%d саат',
      d: 'бир күн',
      dd: '%d күн',
      M: 'бир ай',
      MM: '%d ай',
      y: 'бир жыл',
      yy: '%d жыл'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
    ordinal: function (number) {
      var a = number % 10,
        b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return ky;
});

/***/ }),

/***/ 119:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Luxembourgish [lb]
//! author : mweimerskirch : https://github.com/mweimerskirch
//! author : David Raison : https://github.com/kwisatz

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      m: ['eng Minutt', 'enger Minutt'],
      h: ['eng Stonn', 'enger Stonn'],
      d: ['een Dag', 'engem Dag'],
      M: ['ee Mount', 'engem Mount'],
      y: ['ee Joer', 'engem Joer']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
  }
  function processFutureTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'a ' + string;
    }
    return 'an ' + string;
  }
  function processPastTime(string) {
    var number = string.substr(0, string.indexOf(' '));
    if (eifelerRegelAppliesToNumber(number)) {
      return 'viru ' + string;
    }
    return 'virun ' + string;
  }
  /**
   * Returns true if the word before the given number loses the '-n' ending.
   * e.g. 'an 10 Deeg' but 'a 5 Deeg'
   *
   * @param number {integer}
   * @returns {boolean}
   */
  function eifelerRegelAppliesToNumber(number) {
    number = parseInt(number, 10);
    if (isNaN(number)) {
      return false;
    }
    if (number < 0) {
      // Negative Number --> always true
      return true;
    } else if (number < 10) {
      // Only 1 digit
      if (4 <= number && number <= 7) {
        return true;
      }
      return false;
    } else if (number < 100) {
      // 2 digits
      var lastDigit = number % 10,
        firstDigit = number / 10;
      if (lastDigit === 0) {
        return eifelerRegelAppliesToNumber(firstDigit);
      }
      return eifelerRegelAppliesToNumber(lastDigit);
    } else if (number < 10000) {
      // 3 or 4 digits --> recursively check first digit
      while (number >= 10) {
        number = number / 10;
      }
      return eifelerRegelAppliesToNumber(number);
    } else {
      // Anything larger than 4 digits: recursively check first n-3 digits
      number = number / 1000;
      return eifelerRegelAppliesToNumber(number);
    }
  }
  var lb = moment.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm [Auer]',
      LTS: 'H:mm:ss [Auer]',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm [Auer]',
      LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
      sameDay: '[Haut um] LT',
      sameElse: 'L',
      nextDay: '[Muer um] LT',
      nextWeek: 'dddd [um] LT',
      lastDay: '[Gëschter um] LT',
      lastWeek: function () {
        // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
        switch (this.day()) {
          case 2:
          case 4:
            return '[Leschten] dddd [um] LT';
          default:
            return '[Leschte] dddd [um] LT';
        }
      }
    },
    relativeTime: {
      future: processFutureTime,
      past: processPastTime,
      s: 'e puer Sekonnen',
      ss: '%d Sekonnen',
      m: processRelativeTime,
      mm: '%d Minutten',
      h: processRelativeTime,
      hh: '%d Stonnen',
      d: processRelativeTime,
      dd: '%d Deeg',
      M: processRelativeTime,
      MM: '%d Méint',
      y: processRelativeTime,
      yy: '%d Joer'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return lb;
});

/***/ }),

/***/ 81748:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lao [lo]
//! author : Ryan Hart : https://github.com/ryanhart2

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var lo = moment.defineLocale('lo', {
    months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
    weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
    weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
    isPM: function (input) {
      return input === 'ຕອນແລງ';
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'ຕອນເຊົ້າ';
      } else {
        return 'ຕອນແລງ';
      }
    },
    calendar: {
      sameDay: '[ມື້ນີ້ເວລາ] LT',
      nextDay: '[ມື້ອື່ນເວລາ] LT',
      nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
      lastDay: '[ມື້ວານນີ້ເວລາ] LT',
      lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ອີກ %s',
      past: '%sຜ່ານມາ',
      s: 'ບໍ່ເທົ່າໃດວິນາທີ',
      ss: '%d ວິນາທີ',
      m: '1 ນາທີ',
      mm: '%d ນາທີ',
      h: '1 ຊົ່ວໂມງ',
      hh: '%d ຊົ່ວໂມງ',
      d: '1 ມື້',
      dd: '%d ມື້',
      M: '1 ເດືອນ',
      MM: '%d ເດືອນ',
      y: '1 ປີ',
      yy: '%d ປີ'
    },
    dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
    ordinal: function (number) {
      return 'ທີ່' + number;
    }
  });
  return lo;
});

/***/ }),

/***/ 71973:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Mindaugas Mozūras : https://github.com/mmozuras

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
  };
  function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
      return 'kelios sekundės';
    } else {
      return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
  }
  function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
  }
  function special(number) {
    return number % 10 === 0 || number > 10 && number < 20;
  }
  function forms(key) {
    return units[key].split('_');
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
      return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
      return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
      if (isFuture) {
        return result + forms(key)[1];
      } else {
        return result + (special(number) ? forms(key)[1] : forms(key)[2]);
      }
    }
  }
  var lt = moment.defineLocale('lt', {
    months: {
      format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
      standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
      isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
      format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
      standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
      isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY [m.] MMMM D [d.]',
      LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
      l: 'YYYY-MM-DD',
      ll: 'YYYY [m.] MMMM D [d.]',
      lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
      sameDay: '[Šiandien] LT',
      nextDay: '[Rytoj] LT',
      nextWeek: 'dddd LT',
      lastDay: '[Vakar] LT',
      lastWeek: '[Praėjusį] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'po %s',
      past: 'prieš %s',
      s: translateSeconds,
      ss: translate,
      m: translateSingular,
      mm: translate,
      h: translateSingular,
      hh: translate,
      d: translateSingular,
      dd: translate,
      M: translateSingular,
      MM: translate,
      y: translateSingular,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: function (number) {
      return number + '-oji';
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return lt;
});

/***/ }),

/***/ 81347:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Latvian [lv]
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : Jānis Elmeris : https://github.com/JanisE

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var units = {
    ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
    m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    h: 'stundas_stundām_stunda_stundas'.split('_'),
    hh: 'stundas_stundām_stunda_stundas'.split('_'),
    d: 'dienas_dienām_diena_dienas'.split('_'),
    dd: 'dienas_dienām_diena_dienas'.split('_'),
    M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    y: 'gada_gadiem_gads_gadi'.split('_'),
    yy: 'gada_gadiem_gads_gadi'.split('_')
  };
  /**
   * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
   */
  function format(forms, number, withoutSuffix) {
    if (withoutSuffix) {
      // E.g. "21 minūte", "3 minūtes".
      return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
    } else {
      // E.g. "21 minūtes" as in "pēc 21 minūtes".
      // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
      return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
    }
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    return number + ' ' + format(units[key], number, withoutSuffix);
  }
  function relativeTimeWithSingular(number, withoutSuffix, key) {
    return format(units[key], number, withoutSuffix);
  }
  function relativeSeconds(number, withoutSuffix) {
    return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
  }
  var lv = moment.defineLocale('lv', {
    months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY.',
      LL: 'YYYY. [gada] D. MMMM',
      LLL: 'YYYY. [gada] D. MMMM, HH:mm',
      LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
    },
    calendar: {
      sameDay: '[Šodien pulksten] LT',
      nextDay: '[Rīt pulksten] LT',
      nextWeek: 'dddd [pulksten] LT',
      lastDay: '[Vakar pulksten] LT',
      lastWeek: '[Pagājušā] dddd [pulksten] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'pēc %s',
      past: 'pirms %s',
      s: relativeSeconds,
      ss: relativeTimeWithPlural,
      m: relativeTimeWithSingular,
      mm: relativeTimeWithPlural,
      h: relativeTimeWithSingular,
      hh: relativeTimeWithPlural,
      d: relativeTimeWithSingular,
      dd: relativeTimeWithPlural,
      M: relativeTimeWithSingular,
      MM: relativeTimeWithPlural,
      y: relativeTimeWithSingular,
      yy: relativeTimeWithPlural
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return lv;
});

/***/ }),

/***/ 53023:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Montenegrin [me]
//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var translator = {
    words: {
      //Different grammatical cases
      ss: ['sekund', 'sekunda', 'sekundi'],
      m: ['jedan minut', 'jednog minuta'],
      mm: ['minut', 'minuta', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      dd: ['dan', 'dana', 'dana'],
      MM: ['mjesec', 'mjeseca', 'mjeseci'],
      yy: ['godina', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
      return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
    },
    translate: function (number, withoutSuffix, key) {
      var wordKey = translator.words[key];
      if (key.length === 1) {
        return withoutSuffix ? wordKey[0] : wordKey[1];
      } else {
        return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
      }
    }
  };
  var me = moment.defineLocale('me', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sjutra u] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';
        }
      },
      lastDay: '[juče u] LT',
      lastWeek: function () {
        var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
        return lastWeekDays[this.day()];
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: 'dan',
      dd: translator.translate,
      M: 'mjesec',
      MM: translator.translate,
      y: 'godinu',
      yy: translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return me;
});

/***/ }),

/***/ 65747:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maori [mi]
//! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var mi = moment.defineLocale('mi', {
    months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
    monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
    weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
    weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [i] HH:mm',
      LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
    },
    calendar: {
      sameDay: '[i teie mahana, i] LT',
      nextDay: '[apopo i] LT',
      nextWeek: 'dddd [i] LT',
      lastDay: '[inanahi i] LT',
      lastWeek: 'dddd [whakamutunga i] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'i roto i %s',
      past: '%s i mua',
      s: 'te hēkona ruarua',
      ss: '%d hēkona',
      m: 'he meneti',
      mm: '%d meneti',
      h: 'te haora',
      hh: '%d haora',
      d: 'he ra',
      dd: '%d ra',
      M: 'he marama',
      MM: '%d marama',
      y: 'he tau',
      yy: '%d tau'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return mi;
});

/***/ }),

/***/ 64341:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Macedonian [mk]
//! author : Borislav Mickov : https://github.com/B0k0
//! author : Sashko Todorov : https://github.com/bkyceh

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var mk = moment.defineLocale('mk', {
    months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Денес во] LT',
      nextDay: '[Утре во] LT',
      nextWeek: '[Во] dddd [во] LT',
      lastDay: '[Вчера во] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[Изминатата] dddd [во] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[Изминатиот] dddd [во] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: 'пред %s',
      s: 'неколку секунди',
      ss: '%d секунди',
      m: 'една минута',
      mm: '%d минути',
      h: 'еден час',
      hh: '%d часа',
      d: 'еден ден',
      dd: '%d дена',
      M: 'еден месец',
      MM: '%d месеци',
      y: 'една година',
      yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (number) {
      var lastDigit = number % 10,
        last2Digits = number % 100;
      if (number === 0) {
        return number + '-ев';
      } else if (last2Digits === 0) {
        return number + '-ен';
      } else if (last2Digits > 10 && last2Digits < 20) {
        return number + '-ти';
      } else if (lastDigit === 1) {
        return number + '-ви';
      } else if (lastDigit === 2) {
        return number + '-ри';
      } else if (lastDigit === 7 || lastDigit === 8) {
        return number + '-ми';
      } else {
        return number + '-ти';
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return mk;
});

/***/ }),

/***/ 63840:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malayalam [ml]
//! author : Floyd Pink : https://github.com/floydpink

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ml = moment.defineLocale('ml', {
    months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    monthsParseExact: true,
    weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm -നു',
      LTS: 'A h:mm:ss -നു',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm -നു',
      LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
    },
    calendar: {
      sameDay: '[ഇന്ന്] LT',
      nextDay: '[നാളെ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ഇന്നലെ] LT',
      lastWeek: '[കഴിഞ്ഞ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s കഴിഞ്ഞ്',
      past: '%s മുൻപ്',
      s: 'അൽപ നിമിഷങ്ങൾ',
      ss: '%d സെക്കൻഡ്',
      m: 'ഒരു മിനിറ്റ്',
      mm: '%d മിനിറ്റ്',
      h: 'ഒരു മണിക്കൂർ',
      hh: '%d മണിക്കൂർ',
      d: 'ഒരു ദിവസം',
      dd: '%d ദിവസം',
      M: 'ഒരു മാസം',
      MM: '%d മാസം',
      y: 'ഒരു വർഷം',
      yy: '%d വർഷം'
    },
    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'രാത്രി' && hour >= 4 || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {
        return hour + 12;
      } else {
        return hour;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'രാത്രി';
      } else if (hour < 12) {
        return 'രാവിലെ';
      } else if (hour < 17) {
        return 'ഉച്ച കഴിഞ്ഞ്';
      } else if (hour < 20) {
        return 'വൈകുന്നേരം';
      } else {
        return 'രാത്രി';
      }
    }
  });
  return ml;
});

/***/ }),

/***/ 62058:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function translate(number, withoutSuffix, key, isFuture) {
    switch (key) {
      case 's':
        return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
      case 'ss':
        return number + (withoutSuffix ? ' секунд' : ' секундын');
      case 'm':
      case 'mm':
        return number + (withoutSuffix ? ' минут' : ' минутын');
      case 'h':
      case 'hh':
        return number + (withoutSuffix ? ' цаг' : ' цагийн');
      case 'd':
      case 'dd':
        return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
      case 'M':
      case 'MM':
        return number + (withoutSuffix ? ' сар' : ' сарын');
      case 'y':
      case 'yy':
        return number + (withoutSuffix ? ' жил' : ' жилийн');
      default:
        return number;
    }
  }
  var mn = moment.defineLocale('mn', {
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY оны MMMMын D',
      LLL: 'YYYY оны MMMMын D HH:mm',
      LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function (input) {
      return input === 'ҮХ';
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'ҮӨ';
      } else {
        return 'ҮХ';
      }
    },
    calendar: {
      sameDay: '[Өнөөдөр] LT',
      nextDay: '[Маргааш] LT',
      nextWeek: '[Ирэх] dddd LT',
      lastDay: '[Өчигдөр] LT',
      lastWeek: '[Өнгөрсөн] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s дараа',
      past: '%s өмнө',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + ' өдөр';
        default:
          return number;
      }
    }
  });
  return mn;
});

/***/ }),

/***/ 19182:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Marathi [mr]
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
      0: '०'
    },
    numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
    };
  function relativeTimeMr(number, withoutSuffix, string, isFuture) {
    var output = '';
    if (withoutSuffix) {
      switch (string) {
        case 's':
          output = 'काही सेकंद';
          break;
        case 'ss':
          output = '%d सेकंद';
          break;
        case 'm':
          output = 'एक मिनिट';
          break;
        case 'mm':
          output = '%d मिनिटे';
          break;
        case 'h':
          output = 'एक तास';
          break;
        case 'hh':
          output = '%d तास';
          break;
        case 'd':
          output = 'एक दिवस';
          break;
        case 'dd':
          output = '%d दिवस';
          break;
        case 'M':
          output = 'एक महिना';
          break;
        case 'MM':
          output = '%d महिने';
          break;
        case 'y':
          output = 'एक वर्ष';
          break;
        case 'yy':
          output = '%d वर्षे';
          break;
      }
    } else {
      switch (string) {
        case 's':
          output = 'काही सेकंदां';
          break;
        case 'ss':
          output = '%d सेकंदां';
          break;
        case 'm':
          output = 'एका मिनिटा';
          break;
        case 'mm':
          output = '%d मिनिटां';
          break;
        case 'h':
          output = 'एका तासा';
          break;
        case 'hh':
          output = '%d तासां';
          break;
        case 'd':
          output = 'एका दिवसा';
          break;
        case 'dd':
          output = '%d दिवसां';
          break;
        case 'M':
          output = 'एका महिन्या';
          break;
        case 'MM':
          output = '%d महिन्यां';
          break;
        case 'y':
          output = 'एका वर्षा';
          break;
        case 'yy':
          output = '%d वर्षां';
          break;
      }
    }
    return output.replace(/%d/i, number);
  }
  var mr = moment.defineLocale('mr', {
    months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm वाजता',
      LTS: 'A h:mm:ss वाजता',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm वाजता',
      LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[उद्या] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[काल] LT',
      lastWeek: '[मागील] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sमध्ये',
      past: '%sपूर्वी',
      s: relativeTimeMr,
      ss: relativeTimeMr,
      m: relativeTimeMr,
      mm: relativeTimeMr,
      h: relativeTimeMr,
      hh: relativeTimeMr,
      d: relativeTimeMr,
      dd: relativeTimeMr,
      M: relativeTimeMr,
      MM: relativeTimeMr,
      y: relativeTimeMr,
      yy: relativeTimeMr
    },
    preparse: function (string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'पहाटे' || meridiem === 'सकाळी') {
        return hour;
      } else if (meridiem === 'दुपारी' || meridiem === 'सायंकाळी' || meridiem === 'रात्री') {
        return hour >= 12 ? hour : hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour >= 0 && hour < 6) {
        return 'पहाटे';
      } else if (hour < 12) {
        return 'सकाळी';
      } else if (hour < 17) {
        return 'दुपारी';
      } else if (hour < 20) {
        return 'सायंकाळी';
      } else {
        return 'रात्री';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return mr;
});

/***/ }),

/***/ 89136:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms-my]
//! note : DEPRECATED, the correct one is [ms]
//! author : Weldan Jamili : https://github.com/weldan

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var msMy = moment.defineLocale('ms-my', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return msMy;
});

/***/ }),

/***/ 45197:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Malay [ms]
//! author : Weldan Jamili : https://github.com/weldan

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ms = moment.defineLocale('ms', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'pagi') {
        return hour;
      } else if (meridiem === 'tengahari') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'petang' || meridiem === 'malam') {
        return hour + 12;
      }
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours < 11) {
        return 'pagi';
      } else if (hours < 15) {
        return 'tengahari';
      } else if (hours < 19) {
        return 'petang';
      } else {
        return 'malam';
      }
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      ss: '%d saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return ms;
});

/***/ }),

/***/ 36408:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Maltese (Malta) [mt]
//! author : Alessandro Maruccia : https://github.com/alesma

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var mt = moment.defineLocale('mt', {
    months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
    monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
    weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
    weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
    weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Illum fil-]LT',
      nextDay: '[Għada fil-]LT',
      nextWeek: 'dddd [fil-]LT',
      lastDay: '[Il-bieraħ fil-]LT',
      lastWeek: 'dddd [li għadda] [fil-]LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'f’ %s',
      past: '%s ilu',
      s: 'ftit sekondi',
      ss: '%d sekondi',
      m: 'minuta',
      mm: '%d minuti',
      h: 'siegħa',
      hh: '%d siegħat',
      d: 'ġurnata',
      dd: '%d ġranet',
      M: 'xahar',
      MM: '%d xhur',
      y: 'sena',
      yy: '%d sni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return mt;
});

/***/ }),

/***/ 51683:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Burmese [my]
//! author : Squar team, mysquar.com
//! author : David Rossellat : https://github.com/gholadr
//! author : Tin Aung Lin : https://github.com/thanyawzinmin

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '၁',
      2: '၂',
      3: '၃',
      4: '၄',
      5: '၅',
      6: '၆',
      7: '၇',
      8: '၈',
      9: '၉',
      0: '၀'
    },
    numberMap = {
      '၁': '1',
      '၂': '2',
      '၃': '3',
      '၄': '4',
      '၅': '5',
      '၆': '6',
      '၇': '7',
      '၈': '8',
      '၉': '9',
      '၀': '0'
    };
  var my = moment.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ယနေ.] LT [မှာ]',
      nextDay: '[မနက်ဖြန်] LT [မှာ]',
      nextWeek: 'dddd LT [မှာ]',
      lastDay: '[မနေ.က] LT [မှာ]',
      lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'လာမည့် %s မှာ',
      past: 'လွန်ခဲ့သော %s က',
      s: 'စက္ကန်.အနည်းငယ်',
      ss: '%d စက္ကန့်',
      m: 'တစ်မိနစ်',
      mm: '%d မိနစ်',
      h: 'တစ်နာရီ',
      hh: '%d နာရီ',
      d: 'တစ်ရက်',
      dd: '%d ရက်',
      M: 'တစ်လ',
      MM: '%d လ',
      y: 'တစ်နှစ်',
      yy: '%d နှစ်'
    },
    preparse: function (string) {
      return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return my;
});

/***/ }),

/***/ 53141:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
//!           Stephen Ramthun : https://github.com/stephenramthun

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var nb = moment.defineLocale('nb', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[i går kl.] LT',
      lastWeek: '[forrige] dddd [kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'noen sekunder',
      ss: '%d sekunder',
      m: 'ett minutt',
      mm: '%d minutter',
      h: 'én time',
      hh: '%d timer',
      d: 'én dag',
      dd: '%d dager',
      w: 'én uke',
      ww: '%d uker',
      M: 'én måned',
      MM: '%d måneder',
      y: 'ett år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return nb;
});

/***/ }),

/***/ 29344:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nepalese [ne]
//! author : suvash : https://github.com/suvash

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
      0: '०'
    },
    numberMap = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
    };
  var ne = moment.defineLocale('ne', {
    months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    monthsParseExact: true,
    weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'Aको h:mm बजे',
      LTS: 'Aको h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, Aको h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
    },
    preparse: function (string) {
      return string.replace(/[१२३४५६७८९०]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'राति') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'बिहान') {
        return hour;
      } else if (meridiem === 'दिउँसो') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'साँझ') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 3) {
        return 'राति';
      } else if (hour < 12) {
        return 'बिहान';
      } else if (hour < 16) {
        return 'दिउँसो';
      } else if (hour < 20) {
        return 'साँझ';
      } else {
        return 'राति';
      }
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[भोलि] LT',
      nextWeek: '[आउँदो] dddd[,] LT',
      lastDay: '[हिजो] LT',
      lastWeek: '[गएको] dddd[,] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sमा',
      past: '%s अगाडि',
      s: 'केही क्षण',
      ss: '%d सेकेण्ड',
      m: 'एक मिनेट',
      mm: '%d मिनेट',
      h: 'एक घण्टा',
      hh: '%d घण्टा',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महिना',
      MM: '%d महिना',
      y: 'एक बर्ष',
      yy: '%d बर्ष'
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return ne;
});

/***/ }),

/***/ 84641:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    monthsParse = [/^jan/i, /^feb/i, /^(maart|mrt\.?)$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
    monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  var nlBe = moment.defineLocale('nl-be', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function (m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return nlBe;
});

/***/ }),

/***/ 44703:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    monthsParse = [/^jan/i, /^feb/i, /^(maart|mrt\.?)$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
    monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  var nl = moment.defineLocale('nl', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function (m, format) {
      if (!m) {
        return monthsShortWithDots;
      } else if (/-MMM-/.test(format)) {
        return monthsShortWithoutDots[m.month()];
      } else {
        return monthsShortWithDots[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      ss: '%d seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      w: 'één week',
      ww: '%d weken',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (number) {
      return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return nl;
});

/***/ }),

/***/ 79873:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Nynorsk [nn]
//! authors : https://github.com/mechuwind
//!           Stephen Ramthun : https://github.com/stephenramthun

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var nn = moment.defineLocale('nn', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
    weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
      sameDay: '[I dag klokka] LT',
      nextDay: '[I morgon klokka] LT',
      nextWeek: 'dddd [klokka] LT',
      lastDay: '[I går klokka] LT',
      lastWeek: '[Føregåande] dddd [klokka] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: '%s sidan',
      s: 'nokre sekund',
      ss: '%d sekund',
      m: 'eit minutt',
      mm: '%d minutt',
      h: 'ein time',
      hh: '%d timar',
      d: 'ein dag',
      dd: '%d dagar',
      w: 'ei veke',
      ww: '%d veker',
      M: 'ein månad',
      MM: '%d månader',
      y: 'eit år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return nn;
});

/***/ }),

/***/ 61217:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Occitan, lengadocian dialecte [oc-lnc]
//! author : Quentin PAGÈS : https://github.com/Quenty31

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ocLnc = moment.defineLocale('oc-lnc', {
    months: {
      standalone: 'genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split('_'),
      format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split('_'),
      isFormat: /D[oD]?(\s)+MMMM/
    },
    monthsShort: 'gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split('_'),
    weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [de] YYYY',
      ll: 'D MMM YYYY',
      LLL: 'D MMMM [de] YYYY [a] H:mm',
      lll: 'D MMM YYYY, H:mm',
      LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
      llll: 'ddd D MMM YYYY, H:mm'
    },
    calendar: {
      sameDay: '[uèi a] LT',
      nextDay: '[deman a] LT',
      nextWeek: 'dddd [a] LT',
      lastDay: '[ièr a] LT',
      lastWeek: 'dddd [passat a] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: "d'aquí %s",
      past: 'fa %s',
      s: 'unas segondas',
      ss: '%d segondas',
      m: 'una minuta',
      mm: '%d minutas',
      h: 'una ora',
      hh: '%d oras',
      d: 'un jorn',
      dd: '%d jorns',
      M: 'un mes',
      MM: '%d meses',
      y: 'un an',
      yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal: function (number, period) {
      var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';
      if (period === 'w' || period === 'W') {
        output = 'a';
      }
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4
    }
  });
  return ocLnc;
});

/***/ }),

/***/ 24612:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Punjabi (India) [pa-in]
//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '੧',
      2: '੨',
      3: '੩',
      4: '੪',
      5: '੫',
      6: '੬',
      7: '੭',
      8: '੮',
      9: '੯',
      0: '੦'
    },
    numberMap = {
      '੧': '1',
      '੨': '2',
      '੩': '3',
      '੪': '4',
      '੫': '5',
      '੬': '6',
      '੭': '7',
      '੮': '8',
      '੯': '9',
      '੦': '0'
    };
  var paIn = moment.defineLocale('pa-in', {
    // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
    months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
    weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
    weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm ਵਜੇ',
      LTS: 'A h:mm:ss ਵਜੇ',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
      LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
    },
    calendar: {
      sameDay: '[ਅਜ] LT',
      nextDay: '[ਕਲ] LT',
      nextWeek: '[ਅਗਲਾ] dddd, LT',
      lastDay: '[ਕਲ] LT',
      lastWeek: '[ਪਿਛਲੇ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ਵਿੱਚ',
      past: '%s ਪਿਛਲੇ',
      s: 'ਕੁਝ ਸਕਿੰਟ',
      ss: '%d ਸਕਿੰਟ',
      m: 'ਇਕ ਮਿੰਟ',
      mm: '%d ਮਿੰਟ',
      h: 'ਇੱਕ ਘੰਟਾ',
      hh: '%d ਘੰਟੇ',
      d: 'ਇੱਕ ਦਿਨ',
      dd: '%d ਦਿਨ',
      M: 'ਇੱਕ ਮਹੀਨਾ',
      MM: '%d ਮਹੀਨੇ',
      y: 'ਇੱਕ ਸਾਲ',
      yy: '%d ਸਾਲ'
    },
    preparse: function (string) {
      return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
    meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ਰਾਤ') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ਸਵੇਰ') {
        return hour;
      } else if (meridiem === 'ਦੁਪਹਿਰ') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'ਸ਼ਾਮ') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'ਰਾਤ';
      } else if (hour < 10) {
        return 'ਸਵੇਰ';
      } else if (hour < 17) {
        return 'ਦੁਪਹਿਰ';
      } else if (hour < 20) {
        return 'ਸ਼ਾਮ';
      } else {
        return 'ਰਾਤ';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return paIn;
});

/***/ }),

/***/ 24457:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
    monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_'),
    monthsParse = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
  function plural(n) {
    return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
  }
  function translate(number, withoutSuffix, key) {
    var result = number + ' ';
    switch (key) {
      case 'ss':
        return result + (plural(number) ? 'sekundy' : 'sekund');
      case 'm':
        return withoutSuffix ? 'minuta' : 'minutę';
      case 'mm':
        return result + (plural(number) ? 'minuty' : 'minut');
      case 'h':
        return withoutSuffix ? 'godzina' : 'godzinę';
      case 'hh':
        return result + (plural(number) ? 'godziny' : 'godzin');
      case 'ww':
        return result + (plural(number) ? 'tygodnie' : 'tygodni');
      case 'MM':
        return result + (plural(number) ? 'miesiące' : 'miesięcy');
      case 'yy':
        return result + (plural(number) ? 'lata' : 'lat');
    }
  }
  var pl = moment.defineLocale('pl', {
    months: function (momentToFormat, format) {
      if (!momentToFormat) {
        return monthsNominative;
      } else if (/D MMMM/.test(format)) {
        return monthsSubjective[momentToFormat.month()];
      } else {
        return monthsNominative[momentToFormat.month()];
      }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Dziś o] LT',
      nextDay: '[Jutro o] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[W niedzielę o] LT';
          case 2:
            return '[We wtorek o] LT';
          case 3:
            return '[W środę o] LT';
          case 6:
            return '[W sobotę o] LT';
          default:
            return '[W] dddd [o] LT';
        }
      },
      lastDay: '[Wczoraj o] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[W zeszłą niedzielę o] LT';
          case 3:
            return '[W zeszłą środę o] LT';
          case 6:
            return '[W zeszłą sobotę o] LT';
          default:
            return '[W zeszły] dddd [o] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: '%s temu',
      s: 'kilka sekund',
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: '1 dzień',
      dd: '%d dni',
      w: 'tydzień',
      ww: translate,
      M: 'miesiąc',
      MM: translate,
      y: 'rok',
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return pl;
});

/***/ }),

/***/ 79146:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ptBr = moment.defineLocale('pt-br', {
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
    weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
        : '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'poucos segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    invalidDate: 'Data inválida'
  });
  return ptBr;
});

/***/ }),

/***/ 1089:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese [pt]
//! author : Jefferson : https://github.com/jalex79

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var pt = moment.defineLocale('pt', {
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
        : '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      w: 'uma semana',
      ww: '%d semanas',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return pt;
});

/***/ }),

/***/ 45950:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
//! author : Emanuel Cepoi : https://github.com/cepem

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        ww: 'săptămâni',
        MM: 'luni',
        yy: 'ani'
      },
      separator = ' ';
    if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
      separator = ' de ';
    }
    return number + separator + format[key];
  }
  var ro = moment.defineLocale('ro', {
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[azi la] LT',
      nextDay: '[mâine la] LT',
      nextWeek: 'dddd [la] LT',
      lastDay: '[ieri la] LT',
      lastWeek: '[fosta] dddd [la] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'peste %s',
      past: '%s în urmă',
      s: 'câteva secunde',
      ss: relativeTimeWithPlural,
      m: 'un minut',
      mm: relativeTimeWithPlural,
      h: 'o oră',
      hh: relativeTimeWithPlural,
      d: 'o zi',
      dd: relativeTimeWithPlural,
      w: 'o săptămână',
      ww: relativeTimeWithPlural,
      M: 'o lună',
      MM: relativeTimeWithPlural,
      y: 'un an',
      yy: relativeTimeWithPlural
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return ro;
});

/***/ }),

/***/ 27292:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
      mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
      hh: 'час_часа_часов',
      dd: 'день_дня_дней',
      ww: 'неделя_недели_недель',
      MM: 'месяц_месяца_месяцев',
      yy: 'год_года_лет'
    };
    if (key === 'm') {
      return withoutSuffix ? 'минута' : 'минуту';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

  // http://new.gramota.ru/spravka/rules/139-prop : § 103
  // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
  // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
  var ru = moment.defineLocale('ru', {
    months: {
      format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
      standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
      // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
      format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
      standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
      standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
      format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
      isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соответствует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., H:mm',
      LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
      sameDay: '[Сегодня, в] LT',
      nextDay: '[Завтра, в] LT',
      lastDay: '[Вчера, в] LT',
      nextWeek: function (now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[В следующее] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В следующий] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В следующую] dddd, [в] LT';
          }
        } else {
          if (this.day() === 2) {
            return '[Во] dddd, [в] LT';
          } else {
            return '[В] dddd, [в] LT';
          }
        }
      },
      lastWeek: function (now) {
        if (now.week() !== this.week()) {
          switch (this.day()) {
            case 0:
              return '[В прошлое] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В прошлый] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В прошлую] dddd, [в] LT';
          }
        } else {
          if (this.day() === 2) {
            return '[Во] dddd, [в] LT';
          } else {
            return '[В] dddd, [в] LT';
          }
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'через %s',
      past: '%s назад',
      s: 'несколько секунд',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'час',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      w: 'неделя',
      ww: relativeTimeWithPlural,
      M: 'месяц',
      MM: relativeTimeWithPlural,
      y: 'год',
      yy: relativeTimeWithPlural
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function (input) {
      return /^(дня|вечера)$/.test(input);
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'ночи';
      } else if (hour < 12) {
        return 'утра';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечера';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
          return number + '-й';
        case 'D':
          return number + '-го';
        case 'w':
        case 'W':
          return number + '-я';
        default:
          return number;
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return ru;
});

/***/ }),

/***/ 56774:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'],
    days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
  var sd = moment.defineLocale('sd', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM: function (input) {
      return 'شام' === input;
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'صبح';
      }
      return 'شام';
    },
    calendar: {
      sameDay: '[اڄ] LT',
      nextDay: '[سڀاڻي] LT',
      nextWeek: 'dddd [اڳين هفتي تي] LT',
      lastDay: '[ڪالهه] LT',
      lastWeek: '[گزريل هفتي] dddd [تي] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s پوء',
      past: '%s اڳ',
      s: 'چند سيڪنڊ',
      ss: '%d سيڪنڊ',
      m: 'هڪ منٽ',
      mm: '%d منٽ',
      h: 'هڪ ڪلاڪ',
      hh: '%d ڪلاڪ',
      d: 'هڪ ڏينهن',
      dd: '%d ڏينهن',
      M: 'هڪ مهينو',
      MM: '%d مهينا',
      y: 'هڪ سال',
      yy: '%d سال'
    },
    preparse: function (string) {
      return string.replace(/،/g, ',');
    },
    postformat: function (string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return sd;
});

/***/ }),

/***/ 87493:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : Bård Rolstad Henriksen : https://github.com/karamell

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var se = moment.defineLocale('se', {
    months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
    monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
    weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
    weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
    weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'MMMM D. [b.] YYYY',
      LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
      LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
    },
    calendar: {
      sameDay: '[otne ti] LT',
      nextDay: '[ihttin ti] LT',
      nextWeek: 'dddd [ti] LT',
      lastDay: '[ikte ti] LT',
      lastWeek: '[ovddit] dddd [ti] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s geažes',
      past: 'maŋit %s',
      s: 'moadde sekunddat',
      ss: '%d sekunddat',
      m: 'okta minuhta',
      mm: '%d minuhtat',
      h: 'okta diimmu',
      hh: '%d diimmut',
      d: 'okta beaivi',
      dd: '%d beaivvit',
      M: 'okta mánnu',
      MM: '%d mánut',
      y: 'okta jahki',
      yy: '%d jagit'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return se;
});

/***/ }),

/***/ 3761:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Sinhalese [si]
//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration

  /*jshint -W100*/
  var si = moment.defineLocale('si', {
    months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
    weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'a h:mm',
      LTS: 'a h:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY MMMM D',
      LLL: 'YYYY MMMM D, a h:mm',
      LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
    },
    calendar: {
      sameDay: '[අද] LT[ට]',
      nextDay: '[හෙට] LT[ට]',
      nextWeek: 'dddd LT[ට]',
      lastDay: '[ඊයේ] LT[ට]',
      lastWeek: '[පසුගිය] dddd LT[ට]',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sකින්',
      past: '%sකට පෙර',
      s: 'තත්පර කිහිපය',
      ss: 'තත්පර %d',
      m: 'මිනිත්තුව',
      mm: 'මිනිත්තු %d',
      h: 'පැය',
      hh: 'පැය %d',
      d: 'දිනය',
      dd: 'දින %d',
      M: 'මාසය',
      MM: 'මාස %d',
      y: 'වසර',
      yy: 'වසර %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
    ordinal: function (number) {
      return number + ' වැනි';
    },
    meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
    isPM: function (input) {
      return input === 'ප.ව.' || input === 'පස් වරු';
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'ප.ව.' : 'පස් වරු';
      } else {
        return isLower ? 'පෙ.ව.' : 'පෙර වරු';
      }
    }
  });
  return si;
});

/***/ }),

/***/ 49711:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Martin Minka : https://github.com/k2s
//! based on work of petrbela : https://github.com/petrbela

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
    monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
  function plural(n) {
    return n > 1 && n < 5;
  }
  function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        // a few seconds / in a few seconds / a few seconds ago
        return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';
      case 'ss':
        // 9 seconds / in 9 seconds / 9 seconds ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'sekundy' : 'sekúnd');
        } else {
          return result + 'sekundami';
        }
      case 'm':
        // a minute / in a minute / a minute ago
        return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';
      case 'mm':
        // 9 minutes / in 9 minutes / 9 minutes ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'minúty' : 'minút');
        } else {
          return result + 'minútami';
        }
      case 'h':
        // an hour / in an hour / an hour ago
        return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';
      case 'hh':
        // 9 hours / in 9 hours / 9 hours ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'hodiny' : 'hodín');
        } else {
          return result + 'hodinami';
        }
      case 'd':
        // a day / in a day / a day ago
        return withoutSuffix || isFuture ? 'deň' : 'dňom';
      case 'dd':
        // 9 days / in 9 days / 9 days ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'dni' : 'dní');
        } else {
          return result + 'dňami';
        }
      case 'M':
        // a month / in a month / a month ago
        return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';
      case 'MM':
        // 9 months / in 9 months / 9 months ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'mesiace' : 'mesiacov');
        } else {
          return result + 'mesiacmi';
        }
      case 'y':
        // a year / in a year / a year ago
        return withoutSuffix || isFuture ? 'rok' : 'rokom';
      case 'yy':
        // 9 years / in 9 years / 9 years ago
        if (withoutSuffix || isFuture) {
          return result + (plural(number) ? 'roky' : 'rokov');
        } else {
          return result + 'rokmi';
        }
    }
  }
  var sk = moment.defineLocale('sk', {
    months: months,
    monthsShort: monthsShort,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[dnes o] LT',
      nextDay: '[zajtra o] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[v nedeľu o] LT';
          case 1:
          case 2:
            return '[v] dddd [o] LT';
          case 3:
            return '[v stredu o] LT';
          case 4:
            return '[vo štvrtok o] LT';
          case 5:
            return '[v piatok o] LT';
          case 6:
            return '[v sobotu o] LT';
        }
      },
      lastDay: '[včera o] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[minulú nedeľu o] LT';
          case 1:
          case 2:
            return '[minulý] dddd [o] LT';
          case 3:
            return '[minulú stredu o] LT';
          case 4:
          case 5:
            return '[minulý] dddd [o] LT';
          case 6:
            return '[minulú sobotu o] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'pred %s',
      s: translate,
      ss: translate,
      m: translate,
      mm: translate,
      h: translate,
      hh: translate,
      d: translate,
      dd: translate,
      M: translate,
      MM: translate,
      y: translate,
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return sk;
});

/***/ }),

/***/ 88558:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : Robert Sedovšek : https://github.com/sedovsek

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
      case 's':
        return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
      case 'ss':
        if (number === 1) {
          result += withoutSuffix ? 'sekundo' : 'sekundi';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
        } else {
          result += 'sekund';
        }
        return result;
      case 'm':
        return withoutSuffix ? 'ena minuta' : 'eno minuto';
      case 'mm':
        if (number === 1) {
          result += withoutSuffix ? 'minuta' : 'minuto';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'minute' : 'minutami';
        } else {
          result += withoutSuffix || isFuture ? 'minut' : 'minutami';
        }
        return result;
      case 'h':
        return withoutSuffix ? 'ena ura' : 'eno uro';
      case 'hh':
        if (number === 1) {
          result += withoutSuffix ? 'ura' : 'uro';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'uri' : 'urama';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'ure' : 'urami';
        } else {
          result += withoutSuffix || isFuture ? 'ur' : 'urami';
        }
        return result;
      case 'd':
        return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
      case 'dd':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'dan' : 'dnem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
        } else {
          result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
        }
        return result;
      case 'M':
        return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
      case 'MM':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
        } else {
          result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
        }
        return result;
      case 'y':
        return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
      case 'yy':
        if (number === 1) {
          result += withoutSuffix || isFuture ? 'leto' : 'letom';
        } else if (number === 2) {
          result += withoutSuffix || isFuture ? 'leti' : 'letoma';
        } else if (number < 5) {
          result += withoutSuffix || isFuture ? 'leta' : 'leti';
        } else {
          result += withoutSuffix || isFuture ? 'let' : 'leti';
        }
        return result;
    }
  }
  var sl = moment.defineLocale('sl', {
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danes ob] LT',
      nextDay: '[jutri ob] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[v] [nedeljo] [ob] LT';
          case 3:
            return '[v] [sredo] [ob] LT';
          case 6:
            return '[v] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[v] dddd [ob] LT';
        }
      },
      lastDay: '[včeraj ob] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[prejšnjo] [nedeljo] [ob] LT';
          case 3:
            return '[prejšnjo] [sredo] [ob] LT';
          case 6:
            return '[prejšnjo] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prejšnji] dddd [ob] LT';
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'čez %s',
      past: 'pred %s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return sl;
});

/***/ }),

/***/ 8633:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Albanian [sq]
//! author : Flakërim Ismani : https://github.com/flakerimi
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Oerd Cukalla : https://github.com/oerd

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var sq = moment.defineLocale('sq', {
    months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Sot në] LT',
      nextDay: '[Nesër në] LT',
      nextWeek: 'dddd [në] LT',
      lastDay: '[Dje në] LT',
      lastWeek: 'dddd [e kaluar në] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'në %s',
      past: '%s më parë',
      s: 'disa sekonda',
      ss: '%d sekonda',
      m: 'një minutë',
      mm: '%d minuta',
      h: 'një orë',
      hh: '%d orë',
      d: 'një ditë',
      dd: '%d ditë',
      M: 'një muaj',
      MM: '%d muaj',
      y: 'një vit',
      yy: '%d vite'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return sq;
});

/***/ }),

/***/ 47903:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian Cyrillic [sr-cyrl]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
//! author : Stefan Crnjaković <stefan@hotmail.rs> : https://github.com/crnjakovic

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var translator = {
    words: {
      //Different grammatical cases
      ss: ['секунда', 'секунде', 'секунди'],
      m: ['један минут', 'једног минута'],
      mm: ['минут', 'минута', 'минута'],
      h: ['један сат', 'једног сата'],
      hh: ['сат', 'сата', 'сати'],
      d: ['један дан', 'једног дана'],
      dd: ['дан', 'дана', 'дана'],
      M: ['један месец', 'једног месеца'],
      MM: ['месец', 'месеца', 'месеци'],
      y: ['једну годину', 'једне године'],
      yy: ['годину', 'године', 'година']
    },
    correctGrammaticalCase: function (number, wordKey) {
      if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return number % 10 === 1 ? wordKey[0] : wordKey[1];
      }
      return wordKey[2];
    },
    translate: function (number, withoutSuffix, key, isFuture) {
      var wordKey = translator.words[key],
        word;
      if (key.length === 1) {
        // Nominativ
        if (key === 'y' && withoutSuffix) return 'једна година';
        return isFuture || withoutSuffix ? wordKey[0] : wordKey[1];
      }
      word = translator.correctGrammaticalCase(number, wordKey);
      // Nominativ
      if (key === 'yy' && withoutSuffix && word === 'годину') {
        return number + ' година';
      }
      return number + ' ' + word;
    }
  };
  var srCyrl = moment.defineLocale('sr-cyrl', {
    months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
    monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
    monthsParseExact: true,
    weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
    weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
    weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D. M. YYYY.',
      LL: 'D. MMMM YYYY.',
      LLL: 'D. MMMM YYYY. H:mm',
      LLLL: 'dddd, D. MMMM YYYY. H:mm'
    },
    calendar: {
      sameDay: '[данас у] LT',
      nextDay: '[сутра у] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[у] [недељу] [у] LT';
          case 3:
            return '[у] [среду] [у] LT';
          case 6:
            return '[у] [суботу] [у] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[у] dddd [у] LT';
        }
      },
      lastDay: '[јуче у] LT',
      lastWeek: function () {
        var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
        return lastWeekDays[this.day()];
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: 'пре %s',
      s: 'неколико секунди',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: translator.translate,
      dd: translator.translate,
      M: translator.translate,
      MM: translator.translate,
      y: translator.translate,
      yy: translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
  });
  return srCyrl;
});

/***/ }),

/***/ 90688:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Serbian [sr]
//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
//! author : Stefan Crnjaković <stefan@hotmail.rs> : https://github.com/crnjakovic

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var translator = {
    words: {
      //Different grammatical cases
      ss: ['sekunda', 'sekunde', 'sekundi'],
      m: ['jedan minut', 'jednog minuta'],
      mm: ['minut', 'minuta', 'minuta'],
      h: ['jedan sat', 'jednog sata'],
      hh: ['sat', 'sata', 'sati'],
      d: ['jedan dan', 'jednog dana'],
      dd: ['dan', 'dana', 'dana'],
      M: ['jedan mesec', 'jednog meseca'],
      MM: ['mesec', 'meseca', 'meseci'],
      y: ['jednu godinu', 'jedne godine'],
      yy: ['godinu', 'godine', 'godina']
    },
    correctGrammaticalCase: function (number, wordKey) {
      if (number % 10 >= 1 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return number % 10 === 1 ? wordKey[0] : wordKey[1];
      }
      return wordKey[2];
    },
    translate: function (number, withoutSuffix, key, isFuture) {
      var wordKey = translator.words[key],
        word;
      if (key.length === 1) {
        // Nominativ
        if (key === 'y' && withoutSuffix) return 'jedna godina';
        return isFuture || withoutSuffix ? wordKey[0] : wordKey[1];
      }
      word = translator.correctGrammaticalCase(number, wordKey);
      // Nominativ
      if (key === 'yy' && withoutSuffix && word === 'godinu') {
        return number + ' godina';
      }
      return number + ' ' + word;
    }
  };
  var sr = moment.defineLocale('sr', {
    months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D. M. YYYY.',
      LL: 'D. MMMM YYYY.',
      LLL: 'D. MMMM YYYY. H:mm',
      LLLL: 'dddd, D. MMMM YYYY. H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[u] [nedelju] [u] LT';
          case 3:
            return '[u] [sredu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT';
        }
      },
      lastDay: '[juče u] LT',
      lastWeek: function () {
        var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
        return lastWeekDays[this.day()];
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'pre %s',
      s: 'nekoliko sekundi',
      ss: translator.translate,
      m: translator.translate,
      mm: translator.translate,
      h: translator.translate,
      hh: translator.translate,
      d: translator.translate,
      dd: translator.translate,
      M: translator.translate,
      MM: translator.translate,
      y: translator.translate,
      yy: translator.translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return sr;
});

/***/ }),

/***/ 31991:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : siSwati [ss]
//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ss = moment.defineLocale('ss', {
    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
    monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
    weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
    weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
    weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Namuhla nga] LT',
      nextDay: '[Kusasa nga] LT',
      nextWeek: 'dddd [nga] LT',
      lastDay: '[Itolo nga] LT',
      lastWeek: 'dddd [leliphelile] [nga] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'nga %s',
      past: 'wenteka nga %s',
      s: 'emizuzwana lomcane',
      ss: '%d mzuzwana',
      m: 'umzuzu',
      mm: '%d emizuzu',
      h: 'lihora',
      hh: '%d emahora',
      d: 'lilanga',
      dd: '%d emalanga',
      M: 'inyanga',
      MM: '%d tinyanga',
      y: 'umnyaka',
      yy: '%d iminyaka'
    },
    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
    meridiem: function (hours, minutes, isLower) {
      if (hours < 11) {
        return 'ekuseni';
      } else if (hours < 15) {
        return 'emini';
      } else if (hours < 19) {
        return 'entsambama';
      } else {
        return 'ebusuku';
      }
    },
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'ekuseni') {
        return hour;
      } else if (meridiem === 'emini') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
        if (hour === 0) {
          return 0;
        }
        return hour + 12;
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: '%d',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return ss;
});

/***/ }),

/***/ 27020:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var sv = moment.defineLocale('sv', {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [kl.] HH:mm',
      LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Idag] LT',
      nextDay: '[Imorgon] LT',
      lastDay: '[Igår] LT',
      nextWeek: '[På] dddd LT',
      lastWeek: '[I] dddd[s] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: 'för %s sedan',
      s: 'några sekunder',
      ss: '%d sekunder',
      m: 'en minut',
      mm: '%d minuter',
      h: 'en timme',
      hh: '%d timmar',
      d: 'en dag',
      dd: '%d dagar',
      M: 'en månad',
      MM: '%d månader',
      y: 'ett år',
      yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
    ordinal: function (number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? ':e' : b === 1 ? ':a' : b === 2 ? ':a' : b === 3 ? ':e' : ':e';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return sv;
});

/***/ }),

/***/ 15891:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Swahili [sw]
//! author : Fahad Kassim : https://github.com/fadsel

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var sw = moment.defineLocale('sw', {
    months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
    weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
    weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'hh:mm A',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[leo saa] LT',
      nextDay: '[kesho saa] LT',
      nextWeek: '[wiki ijayo] dddd [saat] LT',
      lastDay: '[jana] LT',
      lastWeek: '[wiki iliyopita] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s baadaye',
      past: 'tokea %s',
      s: 'hivi punde',
      ss: 'sekunde %d',
      m: 'dakika moja',
      mm: 'dakika %d',
      h: 'saa limoja',
      hh: 'masaa %d',
      d: 'siku moja',
      dd: 'siku %d',
      M: 'mwezi mmoja',
      MM: 'miezi %d',
      y: 'mwaka mmoja',
      yy: 'miaka %d'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return sw;
});

/***/ }),

/***/ 45714:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tamil [ta]
//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '௧',
      2: '௨',
      3: '௩',
      4: '௪',
      5: '௫',
      6: '௬',
      7: '௭',
      8: '௮',
      9: '௯',
      0: '௦'
    },
    numberMap = {
      '௧': '1',
      '௨': '2',
      '௩': '3',
      '௪': '4',
      '௫': '5',
      '௬': '6',
      '௭': '7',
      '௮': '8',
      '௯': '9',
      '௦': '0'
    };
  var ta = moment.defineLocale('ta', {
    months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, HH:mm',
      LLLL: 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar: {
      sameDay: '[இன்று] LT',
      nextDay: '[நாளை] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[நேற்று] LT',
      lastWeek: '[கடந்த வாரம்] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s இல்',
      past: '%s முன்',
      s: 'ஒரு சில விநாடிகள்',
      ss: '%d விநாடிகள்',
      m: 'ஒரு நிமிடம்',
      mm: '%d நிமிடங்கள்',
      h: 'ஒரு மணி நேரம்',
      hh: '%d மணி நேரம்',
      d: 'ஒரு நாள்',
      dd: '%d நாட்கள்',
      M: 'ஒரு மாதம்',
      MM: '%d மாதங்கள்',
      y: 'ஒரு வருடம்',
      yy: '%d ஆண்டுகள்'
    },
    dayOfMonthOrdinalParse: /\d{1,2}வது/,
    ordinal: function (number) {
      return number + 'வது';
    },
    preparse: function (string) {
      return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
        return numberMap[match];
      });
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      });
    },
    // refer http://ta.wikipedia.org/s/1er1
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem: function (hour, minute, isLower) {
      if (hour < 2) {
        return ' யாமம்';
      } else if (hour < 6) {
        return ' வைகறை'; // வைகறை
      } else if (hour < 10) {
        return ' காலை'; // காலை
      } else if (hour < 14) {
        return ' நண்பகல்'; // நண்பகல்
      } else if (hour < 18) {
        return ' எற்பாடு'; // எற்பாடு
      } else if (hour < 22) {
        return ' மாலை'; // மாலை
      } else {
        return ' யாமம்';
      }
    },
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'யாமம்') {
        return hour < 2 ? hour : hour + 12;
      } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
        return hour;
      } else if (meridiem === 'நண்பகல்') {
        return hour >= 10 ? hour : hour + 12;
      } else {
        return hour + 12;
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return ta;
});

/***/ }),

/***/ 30206:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Telugu [te]
//! author : Krishna Chaitanya Thota : https://github.com/kcthota

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var te = moment.defineLocale('te', {
    months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
    monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
    monthsParseExact: true,
    weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
    weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
    weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
      sameDay: '[నేడు] LT',
      nextDay: '[రేపు] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[నిన్న] LT',
      lastWeek: '[గత] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s లో',
      past: '%s క్రితం',
      s: 'కొన్ని క్షణాలు',
      ss: '%d సెకన్లు',
      m: 'ఒక నిమిషం',
      mm: '%d నిమిషాలు',
      h: 'ఒక గంట',
      hh: '%d గంటలు',
      d: 'ఒక రోజు',
      dd: '%d రోజులు',
      M: 'ఒక నెల',
      MM: '%d నెలలు',
      y: 'ఒక సంవత్సరం',
      yy: '%d సంవత్సరాలు'
    },
    dayOfMonthOrdinalParse: /\d{1,2}వ/,
    ordinal: '%dవ',
    meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'రాత్రి') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'ఉదయం') {
        return hour;
      } else if (meridiem === 'మధ్యాహ్నం') {
        return hour >= 10 ? hour : hour + 12;
      } else if (meridiem === 'సాయంత్రం') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'రాత్రి';
      } else if (hour < 10) {
        return 'ఉదయం';
      } else if (hour < 17) {
        return 'మధ్యాహ్నం';
      } else if (hour < 20) {
        return 'సాయంత్రం';
      } else {
        return 'రాత్రి';
      }
    },
    week: {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.
    }
  });
  return te;
});

/***/ }),

/***/ 24768:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tetun Dili (East Timor) [tet]
//! author : Joshua Brooks : https://github.com/joshbrooks
//! author : Onorio De J. Afonso : https://github.com/marobo
//! author : Sonia Simoes : https://github.com/soniasimoes

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tet = moment.defineLocale('tet', {
    months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
    weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
    weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Ohin iha] LT',
      nextDay: '[Aban iha] LT',
      nextWeek: 'dddd [iha] LT',
      lastDay: '[Horiseik iha] LT',
      lastWeek: 'dddd [semana kotuk] [iha] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'iha %s',
      past: '%s liuba',
      s: 'segundu balun',
      ss: 'segundu %d',
      m: 'minutu ida',
      mm: 'minutu %d',
      h: 'oras ida',
      hh: 'oras %d',
      d: 'loron ida',
      dd: 'loron %d',
      M: 'fulan ida',
      MM: 'fulan %d',
      y: 'tinan ida',
      yy: 'tinan %d'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return tet;
});

/***/ }),

/***/ 28276:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tajik [tg]
//! author : Orif N. Jr. : https://github.com/orif-jr

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    0: '-ум',
    1: '-ум',
    2: '-юм',
    3: '-юм',
    4: '-ум',
    5: '-ум',
    6: '-ум',
    7: '-ум',
    8: '-ум',
    9: '-ум',
    10: '-ум',
    12: '-ум',
    13: '-ум',
    20: '-ум',
    30: '-юм',
    40: '-ум',
    50: '-ум',
    60: '-ум',
    70: '-ум',
    80: '-ум',
    90: '-ум',
    100: '-ум'
  };
  var tg = moment.defineLocale('tg', {
    months: {
      format: 'январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри'.split('_'),
      standalone: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_')
    },
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
    weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
    weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Имрӯз соати] LT',
      nextDay: '[Фардо соати] LT',
      lastDay: '[Дирӯз соати] LT',
      nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
      lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'баъди %s',
      past: '%s пеш',
      s: 'якчанд сония',
      m: 'як дақиқа',
      mm: '%d дақиқа',
      h: 'як соат',
      hh: '%d соат',
      d: 'як рӯз',
      dd: '%d рӯз',
      M: 'як моҳ',
      MM: '%d моҳ',
      y: 'як сол',
      yy: '%d сол'
    },
    meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'шаб') {
        return hour < 4 ? hour : hour + 12;
      } else if (meridiem === 'субҳ') {
        return hour;
      } else if (meridiem === 'рӯз') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === 'бегоҳ') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'шаб';
      } else if (hour < 11) {
        return 'субҳ';
      } else if (hour < 16) {
        return 'рӯз';
      } else if (hour < 19) {
        return 'бегоҳ';
      } else {
        return 'шаб';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
    ordinal: function (number) {
      var a = number % 10,
        b = number >= 100 ? 100 : null;
      return number + (suffixes[number] || suffixes[a] || suffixes[b]);
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1th is the first week of the year.
    }
  });
  return tg;
});

/***/ }),

/***/ 57977:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Thai [th]
//! author : Kridsada Thanabulpong : https://github.com/sirn

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var th = moment.defineLocale('th', {
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY เวลา H:mm',
      LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (input) {
      return input === 'หลังเที่ยง';
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'ก่อนเที่ยง';
      } else {
        return 'หลังเที่ยง';
      }
    },
    calendar: {
      sameDay: '[วันนี้ เวลา] LT',
      nextDay: '[พรุ่งนี้ เวลา] LT',
      nextWeek: 'dddd[หน้า เวลา] LT',
      lastDay: '[เมื่อวานนี้ เวลา] LT',
      lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'อีก %s',
      past: '%sที่แล้ว',
      s: 'ไม่กี่วินาที',
      ss: '%d วินาที',
      m: '1 นาที',
      mm: '%d นาที',
      h: '1 ชั่วโมง',
      hh: '%d ชั่วโมง',
      d: '1 วัน',
      dd: '%d วัน',
      w: '1 สัปดาห์',
      ww: '%d สัปดาห์',
      M: '1 เดือน',
      MM: '%d เดือน',
      y: '1 ปี',
      yy: '%d ปี'
    }
  });
  return th;
});

/***/ }),

/***/ 56928:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkmen [tk]
//! author : Atamyrat Abdyrahmanov : https://github.com/atamyratabdy

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    1: "'inji",
    5: "'inji",
    8: "'inji",
    70: "'inji",
    80: "'inji",
    2: "'nji",
    7: "'nji",
    20: "'nji",
    50: "'nji",
    3: "'ünji",
    4: "'ünji",
    100: "'ünji",
    6: "'njy",
    9: "'unjy",
    10: "'unjy",
    30: "'unjy",
    60: "'ynjy",
    90: "'ynjy"
  };
  var tk = moment.defineLocale('tk', {
    months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split('_'),
    monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),
    weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split('_'),
    weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),
    weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün sagat] LT',
      nextDay: '[ertir sagat] LT',
      nextWeek: '[indiki] dddd [sagat] LT',
      lastDay: '[düýn] LT',
      lastWeek: '[geçen] dddd [sagat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s soň',
      past: '%s öň',
      s: 'birnäçe sekunt',
      m: 'bir minut',
      mm: '%d minut',
      h: 'bir sagat',
      hh: '%d sagat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir aý',
      MM: '%d aý',
      y: 'bir ýyl',
      yy: '%d ýyl'
    },
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'unjy";
          }
          var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return tk;
});

/***/ }),

/***/ 8046:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Tagalog (Philippines) [tl-ph]
//! author : Dan Hagman : https://github.com/hagmandan

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tlPh = moment.defineLocale('tl-ph', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar: {
      sameDay: 'LT [ngayong araw]',
      nextDay: '[Bukas ng] LT',
      nextWeek: 'LT [sa susunod na] dddd',
      lastDay: 'LT [kahapon]',
      lastWeek: 'LT [noong nakaraang] dddd',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      ss: '%d segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (number) {
      return number;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return tlPh;
});

/***/ }),

/***/ 41361:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Klingon [tlh]
//! author : Dominika Kruk : https://github.com/amaranthrose

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
  function translateFuture(output) {
    var time = output;
    time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'leS' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'waQ' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'nem' : time + ' pIq';
    return time;
  }
  function translatePast(output) {
    var time = output;
    time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'Hu’' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'wen' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'ben' : time + ' ret';
    return time;
  }
  function translate(number, withoutSuffix, string, isFuture) {
    var numberNoun = numberAsNoun(number);
    switch (string) {
      case 'ss':
        return numberNoun + ' lup';
      case 'mm':
        return numberNoun + ' tup';
      case 'hh':
        return numberNoun + ' rep';
      case 'dd':
        return numberNoun + ' jaj';
      case 'MM':
        return numberNoun + ' jar';
      case 'yy':
        return numberNoun + ' DIS';
    }
  }
  function numberAsNoun(number) {
    var hundred = Math.floor(number % 1000 / 100),
      ten = Math.floor(number % 100 / 10),
      one = number % 10,
      word = '';
    if (hundred > 0) {
      word += numbersNouns[hundred] + 'vatlh';
    }
    if (ten > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
    }
    if (one > 0) {
      word += (word !== '' ? ' ' : '') + numbersNouns[one];
    }
    return word === '' ? 'pagh' : word;
  }
  var tlh = moment.defineLocale('tlh', {
    months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
    monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
    monthsParseExact: true,
    weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[DaHjaj] LT',
      nextDay: '[wa’leS] LT',
      nextWeek: 'LLL',
      lastDay: '[wa’Hu’] LT',
      lastWeek: 'LLL',
      sameElse: 'L'
    },
    relativeTime: {
      future: translateFuture,
      past: translatePast,
      s: 'puS lup',
      ss: translate,
      m: 'wa’ tup',
      mm: translate,
      h: 'wa’ rep',
      hh: translate,
      d: 'wa’ jaj',
      dd: translate,
      M: 'wa’ jar',
      MM: translate,
      y: 'wa’ DIS',
      yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return tlh;
});

/***/ }),

/***/ 64367:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'üncü",
    4: "'üncü",
    100: "'üncü",
    6: "'ncı",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'ıncı",
    90: "'ıncı"
  };
  var tr = moment.defineLocale('tr', {
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pzt_Sal_Çar_Per_Cum_Cmt'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    meridiem: function (hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'öö' : 'ÖÖ';
      } else {
        return isLower ? 'ös' : 'ÖS';
      }
    },
    meridiemParse: /öö|ÖÖ|ös|ÖS/,
    isPM: function (input) {
      return input === 'ös' || input === 'ÖS';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[yarın saat] LT',
      nextWeek: '[gelecek] dddd [saat] LT',
      lastDay: '[dün] LT',
      lastWeek: '[geçen] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s sonra',
      past: '%s önce',
      s: 'birkaç saniye',
      ss: '%d saniye',
      m: 'bir dakika',
      mm: '%d dakika',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      w: 'bir hafta',
      ww: '%d hafta',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir yıl',
      yy: '%d yıl'
    },
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'ıncı";
          }
          var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return tr;
});

/***/ }),

/***/ 10627:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Talossan [tzl]
//! author : Robin van der Vliet : https://github.com/robin0van0der0v
//! author : Iustì Canun

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration

  // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
  // This is currently too difficult (maybe even impossible) to add.
  var tzl = moment.defineLocale('tzl', {
    months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM [dallas] YYYY',
      LLL: 'D. MMMM [dallas] YYYY HH.mm',
      LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
    },
    meridiemParse: /d\'o|d\'a/i,
    isPM: function (input) {
      return "d'o" === input.toLowerCase();
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? "d'o" : "D'O";
      } else {
        return isLower ? "d'a" : "D'A";
      }
    },
    calendar: {
      sameDay: '[oxhi à] LT',
      nextDay: '[demà à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[ieiri à] LT',
      lastWeek: '[sür el] dddd [lasteu à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'osprei %s',
      past: 'ja%s',
      s: processRelativeTime,
      ss: processRelativeTime,
      m: processRelativeTime,
      mm: processRelativeTime,
      h: processRelativeTime,
      hh: processRelativeTime,
      d: processRelativeTime,
      dd: processRelativeTime,
      M: processRelativeTime,
      MM: processRelativeTime,
      y: processRelativeTime,
      yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  function processRelativeTime(number, withoutSuffix, key, isFuture) {
    var format = {
      s: ['viensas secunds', "'iensas secunds"],
      ss: [number + ' secunds', '' + number + ' secunds'],
      m: ["'n míut", "'iens míut"],
      mm: [number + ' míuts', '' + number + ' míuts'],
      h: ["'n þora", "'iensa þora"],
      hh: [number + ' þoras', '' + number + ' þoras'],
      d: ["'n ziua", "'iensa ziua"],
      dd: [number + ' ziuas', '' + number + ' ziuas'],
      M: ["'n mes", "'iens mes"],
      MM: [number + ' mesen', '' + number + ' mesen'],
      y: ["'n ar", "'iens ar"],
      yy: [number + ' ars', '' + number + ' ars']
    };
    return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
  }
  return tzl;
});

/***/ }),

/***/ 98148:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight Latin [tzm-latn]
//! author : Abdel Said : https://github.com/abdelsaid

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tzmLatn = moment.defineLocale('tzm-latn', {
    months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[asdkh g] LT',
      nextDay: '[aska g] LT',
      nextWeek: 'dddd [g] LT',
      lastDay: '[assant g] LT',
      lastWeek: 'dddd [g] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dadkh s yan %s',
      past: 'yan %s',
      s: 'imik',
      ss: '%d imik',
      m: 'minuḍ',
      mm: '%d minuḍ',
      h: 'saɛa',
      hh: '%d tassaɛin',
      d: 'ass',
      dd: '%d ossan',
      M: 'ayowr',
      MM: '%d iyyirn',
      y: 'asgas',
      yy: '%d isgasn'
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });
  return tzmLatn;
});

/***/ }),

/***/ 12636:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Central Atlas Tamazight [tzm]
//! author : Abdel Said : https://github.com/abdelsaid

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var tzm = moment.defineLocale('tzm', {
    months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
      nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
      nextWeek: 'dddd [ⴴ] LT',
      lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
      lastWeek: 'dddd [ⴴ] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
      past: 'ⵢⴰⵏ %s',
      s: 'ⵉⵎⵉⴽ',
      ss: '%d ⵉⵎⵉⴽ',
      m: 'ⵎⵉⵏⵓⴺ',
      mm: '%d ⵎⵉⵏⵓⴺ',
      h: 'ⵙⴰⵄⴰ',
      hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
      d: 'ⴰⵙⵙ',
      dd: '%d oⵙⵙⴰⵏ',
      M: 'ⴰⵢoⵓⵔ',
      MM: '%d ⵉⵢⵢⵉⵔⵏ',
      y: 'ⴰⵙⴳⴰⵙ',
      yy: '%d ⵉⵙⴳⴰⵙⵏ'
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });
  return tzm;
});

/***/ }),

/***/ 68823:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uyghur (China) [ug-cn]
//! author: boyaq : https://github.com/boyaq

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ugCn = moment.defineLocale('ug-cn', {
    months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
    monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
    weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
    weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
    weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
      LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
      LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
    },
    meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === 'يېرىم كېچە' || meridiem === 'سەھەر' || meridiem === 'چۈشتىن بۇرۇن') {
        return hour;
      } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
        return hour + 12;
      } else {
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return 'يېرىم كېچە';
      } else if (hm < 900) {
        return 'سەھەر';
      } else if (hm < 1130) {
        return 'چۈشتىن بۇرۇن';
      } else if (hm < 1230) {
        return 'چۈش';
      } else if (hm < 1800) {
        return 'چۈشتىن كېيىن';
      } else {
        return 'كەچ';
      }
    },
    calendar: {
      sameDay: '[بۈگۈن سائەت] LT',
      nextDay: '[ئەتە سائەت] LT',
      nextWeek: '[كېلەركى] dddd [سائەت] LT',
      lastDay: '[تۆنۈگۈن] LT',
      lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s كېيىن',
      past: '%s بۇرۇن',
      s: 'نەچچە سېكونت',
      ss: '%d سېكونت',
      m: 'بىر مىنۇت',
      mm: '%d مىنۇت',
      h: 'بىر سائەت',
      hh: '%d سائەت',
      d: 'بىر كۈن',
      dd: '%d كۈن',
      M: 'بىر ئاي',
      MM: '%d ئاي',
      y: 'بىر يىل',
      yy: '%d يىل'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '-كۈنى';
        case 'w':
        case 'W':
          return number + '-ھەپتە';
        default:
          return number;
      }
    },
    preparse: function (string) {
      return string.replace(/،/g, ',');
    },
    postformat: function (string) {
      return string.replace(/,/g, '،');
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
  });
  return ugCn;
});

/***/ }),

/***/ 40461:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Ukrainian [uk]
//! author : zemlanin : https://github.com/zemlanin
//! Author : Menelion Elensúle : https://github.com/Oire

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  function plural(word, num) {
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
  }
  function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
      ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
      mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
      hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
      dd: 'день_дні_днів',
      MM: 'місяць_місяці_місяців',
      yy: 'рік_роки_років'
    };
    if (key === 'm') {
      return withoutSuffix ? 'хвилина' : 'хвилину';
    } else if (key === 'h') {
      return withoutSuffix ? 'година' : 'годину';
    } else {
      return number + ' ' + plural(format[key], +number);
    }
  }
  function weekdaysCaseReplace(m, format) {
    var weekdays = {
        nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
      },
      nounCase;
    if (m === true) {
      return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
    }
    if (!m) {
      return weekdays['nominative'];
    }
    nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
    return weekdays[nounCase][m.day()];
  }
  function processHoursFunction(str) {
    return function () {
      return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
    };
  }
  var uk = moment.defineLocale('uk', {
    months: {
      format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
      standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
    },
    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays: weekdaysCaseReplace,
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY р.',
      LLL: 'D MMMM YYYY р., HH:mm',
      LLLL: 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar: {
      sameDay: processHoursFunction('[Сьогодні '),
      nextDay: processHoursFunction('[Завтра '),
      lastDay: processHoursFunction('[Вчора '),
      nextWeek: processHoursFunction('[У] dddd ['),
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return processHoursFunction('[Минулої] dddd [').call(this);
          case 1:
          case 2:
          case 4:
            return processHoursFunction('[Минулого] dddd [').call(this);
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: '%s тому',
      s: 'декілька секунд',
      ss: relativeTimeWithPlural,
      m: relativeTimeWithPlural,
      mm: relativeTimeWithPlural,
      h: 'годину',
      hh: relativeTimeWithPlural,
      d: 'день',
      dd: relativeTimeWithPlural,
      M: 'місяць',
      MM: relativeTimeWithPlural,
      y: 'рік',
      yy: relativeTimeWithPlural
    },
    // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function (input) {
      return /^(дня|вечора)$/.test(input);
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 4) {
        return 'ночі';
      } else if (hour < 12) {
        return 'ранку';
      } else if (hour < 17) {
        return 'дня';
      } else {
        return 'вечора';
      }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return number + '-й';
        case 'D':
          return number + '-го';
        default:
          return number;
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return uk;
});

/***/ }),

/***/ 41366:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'],
    days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
  var ur = moment.defineLocale('ur', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM: function (input) {
      return 'شام' === input;
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'صبح';
      }
      return 'شام';
    },
    calendar: {
      sameDay: '[آج بوقت] LT',
      nextDay: '[کل بوقت] LT',
      nextWeek: 'dddd [بوقت] LT',
      lastDay: '[گذشتہ روز بوقت] LT',
      lastWeek: '[گذشتہ] dddd [بوقت] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s بعد',
      past: '%s قبل',
      s: 'چند سیکنڈ',
      ss: '%d سیکنڈ',
      m: 'ایک منٹ',
      mm: '%d منٹ',
      h: 'ایک گھنٹہ',
      hh: '%d گھنٹے',
      d: 'ایک دن',
      dd: '%d دن',
      M: 'ایک ماہ',
      MM: '%d ماہ',
      y: 'ایک سال',
      yy: '%d سال'
    },
    preparse: function (string) {
      return string.replace(/،/g, ',');
    },
    postformat: function (string) {
      return string.replace(/,/g, '،');
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return ur;
});

/***/ }),

/***/ 18374:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek Latin [uz-latn]
//! author : Rasulbek Mirzayev : github.com/Rasulbeeek

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var uzLatn = moment.defineLocale('uz-latn', {
    months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
    monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
    weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
    weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
    weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm'
    },
    calendar: {
      sameDay: '[Bugun soat] LT [da]',
      nextDay: '[Ertaga] LT [da]',
      nextWeek: 'dddd [kuni soat] LT [da]',
      lastDay: '[Kecha soat] LT [da]',
      lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
      sameElse: 'L'
    },
    relativeTime: {
      future: 'Yaqin %s ichida',
      past: 'Bir necha %s oldin',
      s: 'soniya',
      ss: '%d soniya',
      m: 'bir daqiqa',
      mm: '%d daqiqa',
      h: 'bir soat',
      hh: '%d soat',
      d: 'bir kun',
      dd: '%d kun',
      M: 'bir oy',
      MM: '%d oy',
      y: 'bir yil',
      yy: '%d yil'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return uzLatn;
});

/***/ }),

/***/ 83454:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Uzbek [uz]
//! author : Sardor Muminov : https://github.com/muminoff

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var uz = moment.defineLocale('uz', {
    months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
    weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
    weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm'
    },
    calendar: {
      sameDay: '[Бугун соат] LT [да]',
      nextDay: '[Эртага] LT [да]',
      nextWeek: 'dddd [куни соат] LT [да]',
      lastDay: '[Кеча соат] LT [да]',
      lastWeek: '[Утган] dddd [куни соат] LT [да]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'Якин %s ичида',
      past: 'Бир неча %s олдин',
      s: 'фурсат',
      ss: '%d фурсат',
      m: 'бир дакика',
      mm: '%d дакика',
      h: 'бир соат',
      hh: '%d соат',
      d: 'бир кун',
      dd: '%d кун',
      M: 'бир ой',
      MM: '%d ой',
      y: 'бир йил',
      yy: '%d йил'
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return uz;
});

/***/ }),

/***/ 78572:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Vietnamese [vi]
//! author : Bang Nguyen : https://github.com/bangnk
//! author : Chien Kira : https://github.com/chienkira

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var vi = moment.defineLocale('vi', {
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split('_'),
    monthsParseExact: true,
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM: function (input) {
      return /^ch$/i.test(input);
    },
    meridiem: function (hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'sa' : 'SA';
      } else {
        return isLower ? 'ch' : 'CH';
      }
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [năm] YYYY',
      LLL: 'D MMMM [năm] YYYY HH:mm',
      LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
      l: 'DD/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hôm nay lúc] LT',
      nextDay: '[Ngày mai lúc] LT',
      nextWeek: 'dddd [tuần tới lúc] LT',
      lastDay: '[Hôm qua lúc] LT',
      lastWeek: 'dddd [tuần trước lúc] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s tới',
      past: '%s trước',
      s: 'vài giây',
      ss: '%d giây',
      m: 'một phút',
      mm: '%d phút',
      h: 'một giờ',
      hh: '%d giờ',
      d: 'một ngày',
      dd: '%d ngày',
      w: 'một tuần',
      ww: '%d tuần',
      M: 'một tháng',
      MM: '%d tháng',
      y: 'một năm',
      yy: '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (number) {
      return number;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return vi;
});

/***/ }),

/***/ 80464:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Pseudo [x-pseudo]
//! author : Andrew Hood : https://github.com/andrewhood125

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var xPseudo = moment.defineLocale('x-pseudo', {
    months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
    monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
    monthsParseExact: true,
    weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
    weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
    weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[T~ódá~ý át] LT',
      nextDay: '[T~ómó~rró~w át] LT',
      nextWeek: 'dddd [át] LT',
      lastDay: '[Ý~ést~érdá~ý át] LT',
      lastWeek: '[L~ást] dddd [át] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'í~ñ %s',
      past: '%s á~gó',
      s: 'á ~féw ~sécó~ñds',
      ss: '%d s~écóñ~ds',
      m: 'á ~míñ~úté',
      mm: '%d m~íñú~tés',
      h: 'á~ñ hó~úr',
      hh: '%d h~óúrs',
      d: 'á ~dáý',
      dd: '%d d~áýs',
      M: 'á ~móñ~th',
      MM: '%d m~óñt~hs',
      y: 'á ~ýéár',
      yy: '%d ý~éárs'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
      var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return xPseudo;
});

/***/ }),

/***/ 93709:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Yoruba Nigeria [yo]
//! author : Atolagbe Abisoye : https://github.com/andela-batolagbe

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var yo = moment.defineLocale('yo', {
    months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
    monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
    weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
    weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
    weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Ònì ni] LT',
      nextDay: '[Ọ̀la ni] LT',
      nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
      lastDay: '[Àna ni] LT',
      lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ní %s',
      past: '%s kọjá',
      s: 'ìsẹjú aayá die',
      ss: 'aayá %d',
      m: 'ìsẹjú kan',
      mm: 'ìsẹjú %d',
      h: 'wákati kan',
      hh: 'wákati %d',
      d: 'ọjọ́ kan',
      dd: 'ọjọ́ %d',
      M: 'osù kan',
      MM: 'osù %d',
      y: 'ọdún kan',
      yy: 'ọdún %d'
    },
    dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
    ordinal: 'ọjọ́ %d',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return yo;
});

/***/ }),

/***/ 65873:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
//! author : uu109 : https://github.com/uu109

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhCn = moment.defineLocale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日Ah点mm分',
      LLLL: 'YYYY年M月D日ddddAh点mm分',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      } else {
        // '中午'
        return hour >= 11 ? hour : hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: function (now) {
        if (now.week() !== this.week()) {
          return '[下]dddLT';
        } else {
          return '[本]dddLT';
        }
      },
      lastDay: '[昨天]LT',
      lastWeek: function (now) {
        if (this.week() !== now.week()) {
          return '[上]dddLT';
        } else {
          return '[本]dddLT';
        }
      },
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '周';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s后',
      past: '%s前',
      s: '几秒',
      ss: '%d 秒',
      m: '1 分钟',
      mm: '%d 分钟',
      h: '1 小时',
      hh: '%d 小时',
      d: '1 天',
      dd: '%d 天',
      w: '1 周',
      ww: '%d 周',
      M: '1 个月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年'
    },
    week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
  });
  return zhCn;
});

/***/ }),

/***/ 17549:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Hong Kong) [zh-hk]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Konstantin : https://github.com/skfd
//! author : Anthony : https://github.com/anthonylau

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhHk = moment.defineLocale('zh-hk', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1200) {
        return '上午';
      } else if (hm === 1200) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: '[下]ddddLT',
      lastDay: '[昨天]LT',
      lastWeek: '[上]ddddLT',
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年'
    }
  });
  return zhHk;
});

/***/ }),

/***/ 52240:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Macau) [zh-mo]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris
//! author : Tan Yuanhong : https://github.com/le0tan

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhMo = moment.defineLocale('zh-mo', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'D/M/YYYY',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天] LT',
      nextDay: '[明天] LT',
      nextWeek: '[下]dddd LT',
      lastDay: '[昨天] LT',
      lastWeek: '[上]dddd LT',
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s內',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年'
    }
  });
  return zhMo;
});

/***/ }),

/***/ 90405:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (Taiwan) [zh-tw]
//! author : Ben : https://github.com/ben-lin
//! author : Chris Lam : https://github.com/hehachris

;
(function (global, factory) {
   true ? factory(__webpack_require__(49148)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var zhTw = moment.defineLocale('zh-tw', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日 HH:mm',
      LLLL: 'YYYY年M月D日dddd HH:mm',
      l: 'YYYY/M/D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
        return hour;
      } else if (meridiem === '中午') {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === '下午' || meridiem === '晚上') {
        return hour + 12;
      }
    },
    meridiem: function (hour, minute, isLower) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return '凌晨';
      } else if (hm < 900) {
        return '早上';
      } else if (hm < 1130) {
        return '上午';
      } else if (hm < 1230) {
        return '中午';
      } else if (hm < 1800) {
        return '下午';
      } else {
        return '晚上';
      }
    },
    calendar: {
      sameDay: '[今天] LT',
      nextDay: '[明天] LT',
      nextWeek: '[下]dddd LT',
      lastDay: '[昨天] LT',
      lastWeek: '[上]dddd LT',
      sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'DDD':
          return number + '日';
        case 'M':
          return number + '月';
        case 'w':
        case 'W':
          return number + '週';
        default:
          return number;
      }
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '幾秒',
      ss: '%d 秒',
      m: '1 分鐘',
      mm: '%d 分鐘',
      h: '1 小時',
      hh: '%d 小時',
      d: '1 天',
      dd: '%d 天',
      M: '1 個月',
      MM: '%d 個月',
      y: '1 年',
      yy: '%d 年'
    }
  });
  return zhTw;
});

/***/ })

}]);