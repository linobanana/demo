parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"b7K8":[function(require,module,exports) {
"use strict";function e(e,a){return n(e)||r(e,a)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,c=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw c}}return r}}function n(e){if(Array.isArray(e))return e}function a(e){var t,r,n;return regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:return"e7085d7b9f940ceb950f950cc8c4108e56165596aa1a6917f91b24c32d355b8f",t="https://api.unsplash.com/photos/random?query=".concat(e,"&client_id=").concat("e7085d7b9f940ceb950f950cc8c4108e56165596aa1a6917f91b24c32d355b8f","&orientation=landscape"),a.next=4,regeneratorRuntime.awrap(fetch(t));case 4:return r=a.sent,a.next=7,regeneratorRuntime.awrap(r.json());case 7:return n=a.sent,a.abrupt("return",n.urls.regular);case 9:case"end":return a.stop()}})}function c(){var e,t,r;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return"46b6395b209527",e="https://ipinfo.io/json?token=".concat("46b6395b209527"),n.next=4,regeneratorRuntime.awrap(fetch(e));case 4:return t=n.sent,n.next=7,regeneratorRuntime.awrap(t.json());case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}})}function o(e,t,r){var n,a,c;return regeneratorRuntime.async(function(o){for(;;)switch(o.prev=o.next){case 0:return"1d0a4cc831ef2ef6f5536de6237d027e",n="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&lang=").concat(r,"&units=metric&APPID=").concat("1d0a4cc831ef2ef6f5536de6237d027e"),o.next=4,regeneratorRuntime.awrap(fetch(n));case 4:return a=o.sent,o.next=7,regeneratorRuntime.awrap(a.json());case 7:return c=o.sent,o.abrupt("return",c);case 9:case"end":return o.stop()}})}function s(e,t){var r,n,a;return regeneratorRuntime.async(function(c){for(;;)switch(c.prev=c.next){case 0:return"trnsl.1.1.20191211T132413Z.36bf9ba7e614085c.663578f929dd26fdede9a6967785c46cad70f0b8",r="https://translate.yandex.net/api/v1.5/tr.json/translate?key=".concat("trnsl.1.1.20191211T132413Z.36bf9ba7e614085c.663578f929dd26fdede9a6967785c46cad70f0b8","&lang=").concat(t,"&format=plain&text=").concat(e),c.next=4,regeneratorRuntime.awrap(fetch(r));case 4:return n=c.sent,c.next=7,regeneratorRuntime.awrap(n.json());case 7:return a=c.sent,c.abrupt("return",a);case 9:case"end":return c.stop()}})}function u(t){var r,n,a,c,o,s,u,i;return regeneratorRuntime.async(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,"8338b440-d1bb-4b21-b067-6d0cb727c2ea",r="https://geocode-maps.yandex.ru/1.x?geocode=".concat(t,"&apikey=").concat("8338b440-d1bb-4b21-b067-6d0cb727c2ea","&sco=longlat&format=json&results=1&lang=en_US"),f.next=5,regeneratorRuntime.awrap(fetch(r));case 5:return n=f.sent,f.next=8,regeneratorRuntime.awrap(n.json());case 8:return a=f.sent,c=a.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" "),o=e(c,2),s=o[0],u=o[1],i="".concat(a.response.GeoObjectCollection.featureMember[0].GeoObject.name),f.abrupt("return",{lat:s,lon:u,name:i});case 14:f.prev=14,f.t0=f.catch(0),f.t0 instanceof TypeError&&alert("Incorrect name of city/country. Please try again.");case 17:case"end":return f.stop()}},null,null,[[0,14]])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLinkToImage=a,exports.getUserLocation=c,exports.getForecast=o,exports.translate=s,exports.getCoordinates=u;
},{}],"HxdU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setUserSettings=t,exports.refreshBackground=r,exports.createQueryString=n,exports.locationString=o,exports.fillUnits=a,exports.convertDegrees=u;var e=require("./requests");function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"°C";localStorage.setItem("lang",e),localStorage.setItem("units",t)}function r(t){var r;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap((0,e.getLinkToImage)(t));case 2:r=n.sent,document.querySelector(".main").style.backgroundImage="url(".concat(r,")");case 4:case"end":return n.stop()}})}function n(e){var t="",r=new Date,n=r.getMonth();n>=2&&n<=4&&(t+="spring-"),n>=5&&n<=7&&(t+="summer-"),n>=8&&n<=10&&(t+="autumn-"),11!==n&&0!==n&&1!==n||(t+="winter-");var o=r.getHours();return o>=0&&o<=6&&(t+="night-"),o>6&&o<=12&&(t+="morning-"),o>12&&o<=18&&(t+="day-"),o>18&&o<=23&&(t+="evening-"),t+=e.list[0].weather[0].description.split(" ").join("-")}function o(e){var t=Math.trunc(Number(e)),r=Math.trunc(60*(+e-t));return r<0&&(r*=-1),"".concat(t,"° ").concat(r,"'")}function a(e){document.querySelectorAll(".units").forEach(function(t){return t.innerText=e})}function u(e){if("°F"===localStorage.getItem("units")){var t=9*Number(e)/5+32;return"".concat(Math.round(t))}if("°C"===localStorage.getItem("units")){var r=5*(Number(e)-32)/9;return"".concat(Math.round(r))}}
},{"./requests":"b7K8"}],"mUxj":[function(require,module,exports) {
"use strict";function e(e,t){var n=new ymaps.Map("map",{center:[Number(e),Number(t)],zoom:7});n.controls.remove("mediumMapDefaultSet"),document.getElementById("search-city-input").addEventListener("keypress",function(e){13===e.keyCode&&n.destroy()}),document.getElementById("search-btn").addEventListener("click",function(){n.destroy()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.initMap=e;
},{}],"kGLp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.monthsEN=exports.dayOfWeekENFull=exports.dayOfWeekEN=void 0;var e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];exports.dayOfWeekEN=e;var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];exports.dayOfWeekENFull=r;var a=["January","February","March","April","May","June","July","August","September","October","November","December"];exports.monthsEN=a;
},{}],"W6ZL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.monthsRU=exports.dayOfWeekRUFull=exports.dayOfWeekRU=void 0;var e=["Вск","Пнд","Втр","Срд","Чтв","Птн","Сбт"];exports.dayOfWeekRU=e;var r=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];exports.dayOfWeekRUFull=r;var t=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];exports.monthsRU=t;
},{}],"CyyI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.monthsBE=exports.dayOfWeekBEFull=exports.dayOfWeekBE=void 0;var e=["Няд","Пнд","Аўт","Сер","Чцв","Пят","Суб"];exports.dayOfWeekBE=e;var r=["Нядзеля","Панядзелак","Аўторак","Серада","Чацвер","Пятнiца","Субота"];exports.dayOfWeekBEFull=r;var t=["Студзень","Люты","Сакавiк","Красавiк","Май","Чэрвень","Лiпень","Жнiвень","Верасень","Кастрычнiк","Лiстапад","Снежань"];exports.monthsBE=t;
},{}],"ff6P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showDate=i,exports.clock=u,exports.convertToLocalTime=l,exports.setLocalClock=s,exports.updateClock=m;var t=require("./locale/date_time_en"),e=require("./locale/date_time_ru"),n=require("./locale/date_time_be");function c(t,e){return r(t)||a(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],c=!0,o=!1,a=void 0;try{for(var r,i=t[Symbol.iterator]();!(c=(r=i.next()).done)&&(n.push(r.value),!e||n.length!==e);c=!0);}catch(u){o=!0,a=u}finally{try{c||null==i.return||i.return()}finally{if(o)throw a}}return n}}function r(t){if(Array.isArray(t))return t}function i(c){var o,a,r,i,u="";switch(c?c&&(a=(o=new Date(c)).getUTCDate(),r=o.getUTCMonth(),i=o.getUTCDay()):(a=(o=new Date).getDate(),r=o.getMonth(),i=o.getDay()),a<=9&&(a="0".concat(a)),localStorage.getItem("lang")){case"en":u="".concat(t.dayOfWeekEN[i]," ").concat(a," ").concat(t.monthsEN[r]);break;case"ru":u="".concat(e.dayOfWeekRU[i]," ").concat(a," ").concat(e.monthsRU[r]);break;case"be":u="".concat(n.dayOfWeekBE[i]," ").concat(a," ").concat(n.monthsBE[r])}return u}function u(){var t=new Date,e=t.getHours(),n=t.getMinutes();return e<=9&&(e="0".concat(e)),n<=9&&(n="0".concat(n)),document.getElementById("time").innerText="".concat(e,":").concat(n),"".concat(e,":").concat(n)}function l(t){var e=(new Date).toUTCString(),n=Date.parse(e)+1e3*Number(t);return new Date(n).toUTCString()}function s(t){var e=new Date(t),n=e.getUTCHours(),c=e.getUTCMinutes();return n<=9&&(n="0".concat(n)),c<=9&&(c="0".concat(c)),document.getElementById("time").innerText="".concat(n,":").concat(c),"".concat(n,":").concat(c)}function m(){var t=document.getElementById("time"),e=c(t.innerText.split(":"),2),n=e[0],o=e[1],a=Number(n),r=Number(o);r<59?r+=1:a<23&&59===r?(a+=1,r=0):23===a&&59===r&&(a=0,r=0),t.innerText="".concat(a>9?"".concat(a):"0".concat(a),":").concat(r>9?"".concat(r):"0".concat(r))}
},{"./locale/date_time_en":"kGLp","./locale/date_time_ru":"W6ZL","./locale/date_time_be":"CyyI"}],"qGI7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fieldsEN=void 0;var e={change_location:"Change location",city:"City",search:"Search",wind_speed_label:"Wind speed",wind_metric:"m/s",humidity_label:"Humidity",feels_like_label:"Feels like"};exports.fieldsEN=e;
},{}],"ngpH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fieldsRU=void 0;var e={change_location:"Изменить местоположение",city:"Город",search:"Поиск",wind_speed_label:"Скорость ветра",wind_metric:"м/с",humidity_label:"Влажность",feels_like_label:"Ощущается как"};exports.fieldsRU=e;
},{}],"cGbM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fieldsBE=void 0;var e={change_location:"Змяніць месцазнаходжанне",city:"Горад",search:"Пошук",wind_speed_label:"Хуткасць ветру",wind_metric:"м/с",humidity_label:"Вільготнасць",feels_like_label:"Адчуваецца як"};exports.fieldsBE=e;
},{}],"EpLS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderDom=g,exports.changeDOM=y,exports.searchCity=b;var e=require("./settings"),t=require("./requests"),n=require("./date_time"),a=require("./locale/date_time_en"),r=require("./locale/date_time_ru"),i=require("./locale/date_time_be"),c=require("./locale/en"),o=require("./locale/ru"),s=require("./locale/be"),d=require("./map");function l(e,t){return p(e)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}}function p(e){if(Array.isArray(e))return e}function g(d,l,u,m,p,g,y){var b,f,h,v,w,x,E,k,T,S,B,I,q,M,_,L,F,R,D,O,H,U,W,N,C,A,j,z,P,Q,G;return regeneratorRuntime.async(function(J){for(;;)switch(J.prev=J.next){case 0:if((b=document.createElement("div")).className="wrapper",b.innerHTML='\n  <section class="main">\n    <div class="current-weather">\n    </div>\n    <div class="settings">\n    </div>\n    <div class="detailed-forecast">\n    </div>\n    <div class="future-forecast">\n    </div>\n    <div class="location">\n    </div>\n  </section>',document.body.prepend(b),f=document.querySelector(".current-weather"),h=g.list[0],(v=document.createElement("div")).id="weather-icon",v.style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(g.list[0].weather[0].icon,"@2x.png')"),(w=document.createElement("h2")).id="weather-status",x=g.list[0].weather[0].description,E="".concat(x[0].toUpperCase()).concat(x.slice(1)),"be"!==u){J.next=20;break}return J.next=16,regeneratorRuntime.awrap((0,t.translate)(E,"en-be"));case 16:k=J.sent,w.innerText=k.text.toString(),J.next=21;break;case 20:w.innerText=E;case 21:if((T=document.createElement("h5")).id="location","en"===u){J.next=30;break}return J.next=26,regeneratorRuntime.awrap((0,t.translate)(m,"en-".concat(u)));case 26:S=J.sent,T.innerText="".concat(S.text.toString(),", ").concat(p),J.next=31;break;case 30:T.innerText="".concat(m,", ").concat(p);case 31:(B=document.createElement("h5")).id="date",B.innerText=(0,n.showDate)(),(I=document.createElement("h2")).id="time",(q=document.createElement("h2")).className="current-degrees",q.innerHTML='<span class="degrees"></span><span class="units"></span>',(M=document.createElement("div")).innerHTML='<div id="change-location-block">\n    <button id="change-location-btn" class="btn btn-light" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">\n    <i class="fas fa-map-marker-alt"></i><span id="changeLoc"></span></button>\n    <div class="collapse" id="collapseExample">\n    <div class="input-group">\n    <input id="search-city-input" type="text" class="form-control" aria-label="Search city" aria-describedby="button-addon4">\n    <div class="input-group-append">\n    <button class="btn btn-light" id="micro" type="button"><i class="fas fa-microphone"></i></button>\n    <button class="btn btn btn-info" id="search-btn" type="button"></button>\n    </div>\n    </div>\n    </div>\n    </div>',_="",L="",F="",R="",D="",O="",H="",J.t0=u,J.next="en"===J.t0?51:"ru"===J.t0?59:"be"===J.t0?67:75;break;case 51:return _=c.fieldsEN.change_location,L=c.fieldsEN.city,F=c.fieldsEN.search,R=c.fieldsEN.wind_speed_label,D=c.fieldsEN.wind_metric,O=c.fieldsEN.humidity_label,H=c.fieldsEN.feels_like_label,J.abrupt("break",76);case 59:return _=o.fieldsRU.change_location,L=o.fieldsRU.city,F=o.fieldsRU.search,R=o.fieldsRU.wind_speed_label,D=o.fieldsRU.wind_metric,O=o.fieldsRU.humidity_label,H=o.fieldsRU.feels_like_label,J.abrupt("break",76);case 67:return _=s.fieldsBE.change_location,L=s.fieldsBE.city,F=s.fieldsBE.search,R=s.fieldsBE.wind_speed_label,D=s.fieldsBE.wind_metric,O=s.fieldsBE.humidity_label,H=s.fieldsBE.feels_like_label,J.abrupt("break",76);case 75:return J.abrupt("break",76);case 76:for(f.append(v,w,T,B,I,q,M),I.innerText=(0,n.clock)(),f.querySelector(".degrees").innerText="".concat(Math.round(h.main.temp)),document.getElementById("changeLoc").innerText=_,document.getElementById("search-city-input").placeholder=L,document.getElementById("search-btn").innerText=F,document.querySelector(".settings").innerHTML='<div class="settings">\n    <div class="menu">\n    <button type="button" class="btn btn-secondary" id="refresh-bg-btn"></button>\n    <div class="btn-group dropdown">\n    <button id="language-btn" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      EN\n    </button>\n    <div class="dropdown-menu" id="lang-list">\n    <span class="dropdown-item">EN</span>\n    <div class="dropdown-divider"></div>\n    <span class="dropdown-item">RU</span>\n    <div class="dropdown-divider"></div>\n    <span class="dropdown-item"">BE</span>\n    </div>\n    </div>\n    <div id="units" class="btn-group">\n    <button type="button" class="btn btn-secondary celsius">°C</button>\n    <button type="button" class="btn btn-secondary fahrenheit">°F</button>\n    </div>\n    <button type="button" class="btn btn-light" id="show-location-btn"></button>\n    </div></div>',document.getElementById("language-btn").innerText=u.toUpperCase(),"°C"===y?document.querySelector(".celsius").classList.add("active-unit"):"°F"===y&&document.querySelector(".fahrenheit").classList.add("active-unit"),document.querySelector(".detailed-forecast").innerHTML='<div>\n    <i class="fas fa-wind"></i><span id="wind-label"></span>\n    <p id="wind"></p></div><div>\n    <i class="fas fa-tint"></i><span id="humidity-label"></span>\n    <p id="humidity"></p></div><div>\n    <i class="far fa-hand-point-right"></i><span id="feels-label"></span>\n    <p id="feels-like"><span class="degrees"></span><span class="units"></span></p></div>',document.getElementById("wind-label").innerText=R,document.getElementById("wind").innerText="".concat(Math.round(h.wind.speed)," ").concat(D),document.getElementById("humidity-label").innerText=O,document.getElementById("humidity").innerText="".concat(h.main.humidity,"%"),document.getElementById("feels-label").innerText=H,document.getElementById("feels-like").querySelector(".degrees").innerText="".concat(Math.round(h.main.feels_like)),document.querySelector(".future-forecast").innerHTML='<div class="cards-wrapper"><div id="tommorow"><h2 class="day">\n    </h2>\n      <div class="forecast">\n        <span class="degrees"></span>\n        <span class="units"></span>\n        <div class="icon"></div>\n      </div>\n    </div>\n    <div id="day-after-tommorow">\n      <h2 class="day">\n      </h2>\n      <div class="forecast">\n        <span class="degrees"></span>\n        <span class="units"></span>\n        <div class="icon"></div>\n      </div>\n    </div>\n    <div id="after-the-day-after-tomorrow">\n      <h2 class="day">\n      </h2>\n      <div class="forecast">\n        <span class="degrees"></span>\n        <span class="units"></span>\n        <div class="icon"></div>\n      </div>\n    </div>\n    </div>',U=document.getElementById("tommorow"),W=document.getElementById("day-after-tommorow"),N=document.getElementById("after-the-day-after-tomorrow"),C=[],g.list.map(function(e){var t=new Date,n=new Date(1e3*e.dt);return 15===n.getHours()&&n.getDay()!==t.getDay()&&C.push(e),e});C.length>3;)C.pop();A="",j="",z="",C.forEach(function(e,t){var n=new Date(1e3*e.dt);return 0===t&&(P=n.getDay()),1===t&&(Q=n.getDay()),2===t&&(G=n.getDay()),e}),J.t1=u,J.next="en"===J.t1?109:"ru"===J.t1?113:"be"===J.t1?117:121;break;case 109:return A=a.dayOfWeekENFull[P],j=a.dayOfWeekENFull[Q],z=a.dayOfWeekENFull[G],J.abrupt("break",122);case 113:return A=r.dayOfWeekRUFull[P],j=r.dayOfWeekRUFull[Q],z=r.dayOfWeekRUFull[G],J.abrupt("break",122);case 117:return A=i.dayOfWeekBEFull[P],j=i.dayOfWeekBEFull[Q],z=i.dayOfWeekBEFull[G],J.abrupt("break",122);case 121:return J.abrupt("break",122);case 122:U.querySelector(".day").innerHTML=A,W.querySelector(".day").innerHTML=j,N.querySelector(".day").innerHTML=z,U.querySelector(".degrees").innerHTML="".concat(Math.round(C[0].main.temp)),W.querySelector(".degrees").innerHTML="".concat(Math.round(C[1].main.temp)),N.querySelector(".degrees").innerHTML="".concat(Math.round(C[2].main.temp)),U.querySelector(".icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(C[0].weather[0].icon,"@2x.png')"),W.querySelector(".icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(C[1].weather[0].icon,"@2x.png')"),N.querySelector(".icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(C[2].weather[0].icon,"@2x.png')"),document.querySelector(".location").innerHTML='<div class="coordinates">\n    <p class="latitude-icon"></p><span id="latitude"></span>\n    <p class="longitude-icon"></p><span id="longitude"></span>\n    </div>\n    <div id="map"></div>',document.getElementById("latitude").innerText=(0,e.locationString)(d),document.getElementById("longitude").innerText=(0,e.locationString)(l),(0,e.fillUnits)(y),"°F"===y&&document.querySelectorAll(".degrees").forEach(function(t){var n=t.innerText;return t.innerText=(0,e.convertDegrees)(n),t});case 137:case"end":return J.stop()}})}function y(c,o,s,d,u,m,p,g){var y,b,f,h,v,w,x,E,k,T,S,B,I,q,M,_,L,F,R,D,O;return regeneratorRuntime.async(function(H){for(;;)switch(H.prev=H.next){case 0:if(y=document.querySelector(".current-weather"),b=p.list[0],document.getElementById("weather-icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(p.list[0].weather[0].icon,"@2x.png')"),f=document.getElementById("weather-status"),h=p.list[0].weather[0].description,v="".concat(h[0].toUpperCase()).concat(h.slice(1)),"be"!==s){H.next=13;break}return H.next=9,regeneratorRuntime.awrap((0,t.translate)(v,"en-be"));case 9:w=H.sent,f.innerText=w.text.toString(),H.next=14;break;case 13:f.innerText=v;case 14:if("en"===s){H.next=21;break}return H.next=17,regeneratorRuntime.awrap((0,t.translate)(d,"en-".concat(s)));case 17:x=H.sent,document.getElementById("location").innerText="".concat(x.text.toString(),", ").concat(u),H.next=22;break;case 21:document.getElementById("location").innerText="".concat(d,", ").concat(u);case 22:for(E=(0,n.showDate)(m),document.getElementById("date").innerText=E,document.getElementById("time").innerText=(0,n.setLocalClock)(m),y.querySelector(".degrees").innerText="".concat(Math.round(b.main.temp)),k=document.getElementById("wind").innerText.split(" "),T=l(k,2),S=T[1],document.getElementById("wind").innerText="".concat(Math.round(b.wind.speed)," ").concat(S),document.getElementById("humidity").innerText="".concat(b.main.humidity,"%"),document.getElementById("feels-like").querySelector(".degrees").innerText="".concat(Math.round(b.main.feels_like)),B=document.getElementById("tommorow"),I=document.getElementById("day-after-tommorow"),q=document.getElementById("after-the-day-after-tomorrow"),M=[],p.list.map(function(e){var t=new Date(m),n=new Date(1e3*e.dt);return 15===n.getHours()&&n.getDay()!==t.getUTCDay()&&M.push(e),e});M.length>3;)M.pop();_="",L="",F="",M.forEach(function(e,t){var n=new Date(1e3*e.dt);return 0===t&&(R=n.getDay()),1===t&&(D=n.getDay()),2===t&&(O=n.getDay()),e}),H.t0=s,H.next="en"===H.t0?43:"ru"===H.t0?47:"be"===H.t0?51:55;break;case 43:return _=a.dayOfWeekENFull[R],L=a.dayOfWeekENFull[D],F=a.dayOfWeekENFull[O],H.abrupt("break",56);case 47:return _=r.dayOfWeekRUFull[R],L=r.dayOfWeekRUFull[D],F=r.dayOfWeekRUFull[O],H.abrupt("break",56);case 51:return _=i.dayOfWeekBEFull[R],L=i.dayOfWeekBEFull[D],F=i.dayOfWeekBEFull[O],H.abrupt("break",56);case 55:return H.abrupt("break",56);case 56:B.querySelector(".day").innerHTML=_,I.querySelector(".day").innerHTML=L,q.querySelector(".day").innerHTML=F,B.querySelector(".degrees").innerHTML="".concat(Math.round(M[0].main.temp)),I.querySelector(".degrees").innerHTML="".concat(Math.round(M[1].main.temp)),q.querySelector(".degrees").innerHTML="".concat(Math.round(M[2].main.temp)),B.querySelector(".icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(M[0].weather[0].icon,"@2x.png')"),I.querySelector(".icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(M[1].weather[0].icon,"@2x.png')"),q.querySelector(".icon").style.backgroundImage="url('http://openweathermap.org/img/wn/".concat(M[2].weather[0].icon,"@2x.png')"),document.getElementById("latitude").innerText=(0,e.locationString)(o),document.getElementById("longitude").innerText=(0,e.locationString)(c),"°F"===g&&document.querySelectorAll(".degrees").forEach(function(t){var n=t.innerText;return t.innerText=(0,e.convertDegrees)(n),t});case 68:case"end":return H.stop()}})}function b(){var a,r,i,c,o,s,l,u,m,p,g,b,f,h;return regeneratorRuntime.async(function(v){for(;;)switch(v.prev=v.next){case 0:return a=document.getElementById("search-city-input").value,v.next=3,regeneratorRuntime.awrap((0,t.getCoordinates)(a));case 3:if(r=v.sent,i=r.lat,c=r.lon,o=r.name,s=(0,d.initMap)(c,i),ymaps.ready(s),l=localStorage.getItem("units"),"be"!==(u=localStorage.getItem("lang"))){v.next=15;break}return v.next=12,regeneratorRuntime.awrap((0,t.getForecast)(c,i,"en"));case 12:m=v.sent,v.next=18;break;case 15:return v.next=17,regeneratorRuntime.awrap((0,t.getForecast)(c,i,u));case 17:m=v.sent;case 18:p=m.city,g=p.timezone,b=p.country,f=(0,n.convertToLocalTime)(g),h=(0,e.createQueryString)(m),localStorage.setItem("currentWeatherDescription",h),y(i,c,u,o,b,f,m,l),(0,e.refreshBackground)(h),document.getElementById("search-city-input").value="";case 25:case"end":return v.stop()}})}
},{"./settings":"HxdU","./requests":"b7K8","./date_time":"ff6P","./locale/date_time_en":"kGLp","./locale/date_time_ru":"W6ZL","./locale/date_time_be":"CyyI","./locale/en":"qGI7","./locale/ru":"ngpH","./locale/be":"cGbM","./map":"mUxj"}],"nUSU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.translateDOM=s;var e=require("./locale/en"),t=require("./locale/ru"),n=require("./locale/be"),r=require("./locale/date_time_en"),a=require("./locale/date_time_ru"),c=require("./locale/date_time_be"),l=require("./requests");function i(e,t){return d(e)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}function d(e){if(Array.isArray(e))return e}function s(u,o){var d,s,m,y,b,f,p,x,E,k,h,g,O,B,T,_,w,W,I,v,R,q,N,U,F;return regeneratorRuntime.async(function(S){for(;;)switch(S.prev=S.next){case 0:S.t0=u,S.next="en"===S.t0?3:"ru"===S.t0?7:"be"===S.t0?11:15;break;case 3:return d=r.dayOfWeekEN,s=r.monthsEN,m=r.dayOfWeekENFull,S.abrupt("break",16);case 7:return d=a.dayOfWeekRU,s=a.monthsRU,m=a.dayOfWeekRUFull,S.abrupt("break",16);case 11:return d=c.dayOfWeekBE,s=c.monthsBE,m=c.dayOfWeekBEFull,S.abrupt("break",16);case 15:return S.abrupt("break",16);case 16:S.t1=o,S.next="en"===S.t1?19:"ru"===S.t1?24:"be"===S.t1?29:34;break;case 19:return y=r.dayOfWeekEN,b=r.monthsEN,p=e.fieldsEN,f=r.dayOfWeekENFull,S.abrupt("break",35);case 24:return y=a.dayOfWeekRU,b=a.monthsRU,p=t.fieldsRU,f=a.dayOfWeekRUFull,S.abrupt("break",35);case 29:return y=c.dayOfWeekBE,b=c.monthsBE,p=n.fieldsBE,f=c.dayOfWeekBEFull,S.abrupt("break",35);case 34:return S.abrupt("break",35);case 35:return x=document.getElementById("weather-status"),S.next=38,regeneratorRuntime.awrap((0,l.translate)(x.innerText,"".concat(u,"-").concat(o)));case 38:return E=S.sent,x.innerText=E.text.toString(),k=document.getElementById("location"),h=k.innerText.split(","),g=i(h,2),O=g[0],B=g[1],S.next=44,regeneratorRuntime.awrap((0,l.translate)(O,"".concat(u,"-").concat(o)));case 44:T=S.sent,k.innerText="".concat(T.text.toString(),",").concat(B),_=document.getElementById("date"),w=_.innerText.split(" "),W=i(w,3),I=W[0],v=W[1],R=W[2],_.innerText="".concat(y[d.indexOf(I)]," ").concat(v," ").concat(b[s.indexOf(R)]),document.getElementById("changeLoc").innerText=p.change_location,document.getElementById("search-city-input").placeholder=p.city,document.getElementById("search-btn").innerText=p.search,document.getElementById("wind-label").innerText=p.wind_speed_label,q=document.getElementById("wind"),N=q.innerText.split(" "),U=i(N,1),F=U[0],q.innerText="".concat(F," ").concat(p.wind_metric),document.getElementById("humidity-label").innerText=p.humidity_label,document.getElementById("feels-label").innerText=p.feels_like_label,document.querySelectorAll(".cards-wrapper > div > .day").forEach(function(e){return e.innerText=f[m.indexOf(e.innerText)],e});case 66:case"end":return S.stop()}})}
},{"./locale/en":"qGI7","./locale/ru":"ngpH","./locale/be":"cGbM","./locale/date_time_en":"kGLp","./locale/date_time_ru":"W6ZL","./locale/date_time_be":"CyyI","./requests":"b7K8"}],"QvaY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d;var e,t=require("./settings"),r=require("./requests"),n=require("./map"),a=require("./dom"),c=require("./date_time"),o=require("./translate");function i(e,t){return l(e)||u(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,c=s}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}}function l(e){if(Array.isArray(e))return e}var g=new webkitSpeechRecognition;function m(){g.start()}function d(){clearInterval(e)}!function(){var o,s,u,l,g,m,d,f,p,y,x,h,v;regeneratorRuntime.async(function(I){for(;;)switch(I.prev=I.next){case 0:return localStorage.getItem("lang")||localStorage.getItem("units")||(0,t.setUserSettings)(),o=localStorage.getItem("units"),s=localStorage.getItem("lang"),I.next=5,regeneratorRuntime.awrap((0,r.getUserLocation)());case 5:if(u=I.sent,l=u.loc,g=u.city,m=l.split(","),d=i(m,2),f=d[0],p=d[1],"be"!==s){I.next=16;break}return I.next=13,regeneratorRuntime.awrap((0,r.getForecast)(f,p,"en"));case 13:y=I.sent,I.next=19;break;case 16:return I.next=18,regeneratorRuntime.awrap((0,r.getForecast)(f,p,s));case 18:y=I.sent;case 19:return x=y.city.country,h=(0,t.createQueryString)(y),localStorage.setItem("currentWeatherDescription",h),I.next=24,regeneratorRuntime.awrap((0,a.renderDom)(f,p,s,g,x,y,o));case 24:e=setInterval(c.clock,1e3),(0,t.refreshBackground)(h),v=(0,n.initMap)(f,p),ymaps.ready(v);case 28:case"end":return I.stop()}})}(),document.addEventListener("click",function(r){var n,i,s,u,l;return regeneratorRuntime.async(function(g){for(;;)switch(g.prev=g.next){case 0:if("refresh-bg-btn"!==r.target.id){g.next=4;break}return n=localStorage.getItem("currentWeatherDescription"),g.next=4,regeneratorRuntime.awrap((0,t.refreshBackground)(n));case 4:if((r.target.classList.contains("celsius")||r.target.classList.contains("fahrenheit"))&&r.target.innerText!==localStorage.getItem("units")&&(localStorage.setItem("units",r.target.innerText),document.getElementById("units").querySelectorAll("button").forEach(function(e){return e.classList.toggle("active-unit")}),i=document.querySelectorAll(".units"),s=document.querySelectorAll(".degrees"),i.forEach(function(e){e.innerText=localStorage.getItem("units")}),s.forEach(function(e){var r=e.innerText;e.innerText=(0,t.convertDegrees)(r)})),!r.target.classList.contains("dropdown-item")||r.target.innerText.toLowerCase()===localStorage.getItem("lang")){g.next=12;break}return u=localStorage.getItem("lang"),localStorage.setItem("lang",r.target.innerText.toLowerCase()),l=localStorage.getItem("lang"),document.getElementById("language-btn").innerText=l.toUpperCase(),g.next=12,regeneratorRuntime.awrap((0,o.translateDOM)(u,l));case 12:if("search-btn"!==r.target.id){g.next=22;break}if(0===document.getElementById("search-city-input").value.trim().length){g.next=21;break}return d(),g.next=18,regeneratorRuntime.awrap((0,a.searchCity)());case 18:e=setInterval(c.updateClock,6e4),g.next=22;break;case 21:alert("First enter the city");case 22:("micro"===r.target.id||r.target.classList.contains("fa-microphone"))&&m();case 23:case"end":return g.stop()}})}),document.addEventListener("keypress",function(t){var r;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=document.getElementById("search-city-input").value,13!==t.keyCode||0===r.trim().length){n.next=8;break}return d(),n.next=5,regeneratorRuntime.awrap((0,a.searchCity)());case 5:e=setInterval(c.updateClock,6e4),n.next=9;break;case 8:alert("First enter the city");case 9:case"end":return n.stop()}})}),g.onresult=function(e){var t=e.results[e.resultIndex];t.isFinal&&(document.getElementById("search-city-input").value=t[0].transcript)};
},{"./settings":"HxdU","./requests":"b7K8","./map":"mUxj","./dom":"EpLS","./date_time":"ff6P","./translate":"nUSU"}]},{},["QvaY"], null)
//# sourceMappingURL=js.1835893a.js.map