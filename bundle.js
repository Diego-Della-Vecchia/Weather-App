(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(202),t.b),l=new URL(t(681),t.b),u=new URL(t(18),t.b),p=new URL(t(678),t.b),m=new URL(t(828),t.b),h=new URL(t(449),t.b),f=i()(o()),x=s()(d),v=s()(l),g=s()(u),y=s()(p),b=s()(m),w=s()(h);f.push([e.id,`:root {\n  --light-blue: #0098f1;\n  --light-grey: #e1e0e0;\n  --dark-blue: #001d64;\n}\n\n@font-face {\n  font-family: 'roboto';\n  src: url(${x});\n  src: url(${v});\n  src: url(${g});\n  src: url(${y});\n  src: url(${b});\n  src: url(${w});\n  font-display: swap;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n::selection {\n  background-color: var(--dark-blue);\n  color: white;\n}\n\nbody {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: white;\n  padding-bottom: 10vh;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n}\n\nheader.header {\n  width: 90vw;\n  height: min(8vh, 100px);\n  background-color: white;\n  display: flex;\n  position: sticky;\n  top: 0px;\n  justify-content: center;\n  align-items: center;\n  border-bottom: var(--dark-blue) 3px solid;\n  margin-left: 5vw;\n  margin-right: 5vw;\n}\n\ninput {\n  background-color: transparent;\n  border-radius: 25px 0px 0px 25px;\n  height: 4vh;\n  max-height: 45px;\n  border: 3px solid var(--dark-blue);\n  width: min(35vw, 500px);\n  font-family: 'roboto';\n  color: var(--dark-blue);\n  font-size: min(3.5vw, 3vh);\n  padding-left: 2vw;\n  text-align: center;\n}\ninput:focus-visible {\n  outline: none;\n}\n\nbutton.searchIcon {\n  border-radius: 0px 25px 25px 0px;\n  height: 4vh;\n  max-height: 45px;\n  width: 8vw;\n  max-width: 50px;\n  background-color: transparent;\n  border: 3px solid var(--dark-blue);\n  border-left: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg.searchIcon {\n  width: min(4vw, 25px);\n}\n\ndiv.search {\n  display: flex;\n  justify-content: center;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n}\n\n.wrapper {\n  margin-top: 5vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.firstBlock,\n.stats,\n.forecast {\n  background-color: var(--light-blue);\n  border-radius: 25px;\n  width: 90vw;\n  max-width: 600px;\n  margin: 2vw;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  color: white;\n  font-family: 'roboto';\n  height: min(65vh, 850px);\n}\n\n.stats {\n  border-radius: 25px 25px 10px 10px;\n}\n\n.location {\n  text-align: center;\n}\n.stats {\n  height: min(42vh, 570px);\n  margin-top: 0px;\n}\n\n.forecast {\n  height: min(30vh, 300px);\n  margin-bottom: 0px;\n  border-radius: 10px 10px 25px 25px;\n}\n\n@media screen and (max-width: 1429px) {\n  .firstBlock {\n    border-radius: 25px 25px 10px 10px;\n  }\n  .stats {\n    border-radius: 10px;\n  }\n}\n\n.location {\n  font-size: min(8vw, 50px);\n}\n\n.temperature {\n  width: 60%;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font-size: min(8vw, 50px);\n  gap: 2vw;\n  background-color: #001d64;\n}\n\n.currentTemperature {\n  margin: 0px;\n}\n\n.wrapper > .weatherIcon {\n  width: 100px;\n}\n\n.moreInfo {\n  font-size: min(4vw, 20px);\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: center;\n  gap: 2vw;\n  margin-bottom: min(3.5vw, 1.5vh);\n  align-items: center;\n}\n.weatherCondition {\n  font-weight: 900;\n  font-size: min(5vw, 35px);\n}\n\nimg {\n  width: min(64px, 10vw);\n}\n\n.maxMinTemperature {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.minTemperature,\n.maxTemperature {\n  font-size: min(6vw, 40px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-area: 2vw;\n}\n\ndiv.sunrise,\ndiv.sunset {\n  font-size: min(2vw, 15px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.riseSet {\n  width: 90%;\n  border-radius: 25px;\n  height: 13%;\n  display: flex;\n  justify-content: space-around;\n  background-color: white;\n  color: var(--light-blue);\n  margin-bottom: 1vw;\n}\n\ndiv.container {\n  width: 85%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background-color: white;\n  border-radius: 25px;\n}\n\nh1.moreDetails {\n  margin: 0;\n}\n\n.statElement {\n  width: 100%;\n  height: min(5vh, 70px);\n  border-bottom: 1px solid var(--light-grey);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--light-blue);\n  padding: 1.5vw;\n  padding-right: 2.5vw;\n  font-size: min(3vw, 20px);\n}\n\n.value {\n  font-size: min(4vw, 25px);\n}\n\n.last {\n  border: none;\n}\n\n.unit {\n  width: 85%;\n  display: flex;\n  justify-content: space-between;\n}\n\nbutton {\n  width: min(30vw, 150px);\n  height: min(7vw, 50px);\n  border-radius: 25px;\n  border: none;\n  background-color: white;\n  color: var(--light-blue);\n  font-size: min(4vw, 20px);\n}\nbutton:hover {\n  background-color: var(--light-grey);\n}\n\nbutton.active {\n  background-color: var(--dark-blue);\n  color: white;\n}\n\nimg.statShowcase {\n  height: min(4vh, 50px);\n  flex-grow: 0;\n}\n\n.noMargin {\n  margin: 0px;\n}\n\n.container.spaceBetween {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-around;\n  background-color: var(--light-blue);\n  color: white;\n}\n\n.spaceBetween button {\n  width: min(20vw, 100px);\n}\n\n.scrollcontainer {\n  overflow-x: auto;\n  width: 85%;\n  height: min(16vh, 160px);\n  background-color: white;\n  border-radius: 25px;\n  margin-bottom: 1vh;\n  border: none;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 2vw;\n}\n\n.scrollcontainer::-webkit-scrollbar {\n  width: 4px;\n  background-color: var(--light-grey);\n  border-radius: 50px;\n  border: none;\n}\n\n.scrollcontainer::-webkit-scrollbar-thumb {\n  width: 4px;\n  background-color: var(--dark-blue);\n  border-radius: 50px;\n  border: none;\n}\n\n.card {\n  background-color: var(--light-grey);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: min(13vh, 125px);\n  border-radius: 25px;\n  color: var(--light-blue);\n  padding: min(1vw, 4px);\n  margin-left: min(2vw, 15px);\n  margin-right: min(2vw, 15px);\n  width: min(30vw, 125px);\n  flex-shrink: 0;\n  text-align: center;\n}\n\n.card p {\n  margin: 0px;\n}\n\n.error {\n  position: fixed;\n  top: 20vh;\n  width: 90vw;\n  max-width: 500px;\n  background-color: var(--dark-blue);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  border: min(1vw, 4px) solid white;\n  color: white;\n  border-radius: 25px;\n  font-family: 'roboto';\n}\n\n.loadingScreenBackground {\n  width: 100vw;\n  height: 10vh;\n  position: absolute;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.load {\n  background-color: var(--light-blue);\n  width: 90vw;\n  height: 50vh;\n  margin-top: 20vh;\n}\n`,""]);const C=f},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},385:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},505:(e,n,t)=>{e.exports=t.p+"assets/arrowDown.svg"},686:(e,n,t)=>{e.exports=t.p+"assets/arrowUp.svg"},80:(e,n,t)=>{e.exports=t.p+"assets/rain.svg"},246:(e,n,t)=>{e.exports=t.p+"assets/search.svg"},868:(e,n,t)=>{e.exports=t.p+"assets/sun.svg"},915:(e,n,t)=>{e.exports=t.p+"assets/sunrise.svg"},116:(e,n,t)=>{e.exports=t.p+"assets/sunset.svg"},588:(e,n,t)=>{e.exports=t.p+"assets/waterDrop.svg"},184:(e,n,t)=>{e.exports=t.p+"assets/wind.svg"},828:(e,n,t)=>{e.exports=t.p+"fonts/Roboto-Black.ttf"},202:(e,n,t)=>{e.exports=t.p+"fonts/Roboto-Bold.ttf"},681:(e,n,t)=>{e.exports=t.p+"fonts/Roboto-Light.ttf"},18:(e,n,t)=>{e.exports=t.p+"fonts/Roboto-Medium.ttf"},449:(e,n,t)=>{e.exports=t.p+"fonts/Roboto-Regular.ttf"},678:(e,n,t)=>{e.exports=t.p+"fonts/Roboto-Thin.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),l=t.n(d),u=t(113),p=t.n(u),m=t(208),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;var f=t(385),x=t.n(f),v=new URL(t(868),t.b),g=new URL(t(246),t.b),y=new URL(t(505),t.b),b=new URL(t(686),t.b),w=new URL(t(915),t.b),C=new URL(t(116),t.b),L=new URL(t(588),t.b),k=new URL(t(80),t.b),S=new URL(t(184),t.b);x()(v);x()(g),x()(y),x()(b),x()(w),x()(C),x()(L),x()(k),x()(S);const T={response:null,location:null,unit:"metric",userTyping:!1,forecastMode:"daily",get:e=>fetch(`https://api.weatherapi.com/v1/forecast.json?key=ac9c75817a644c16976152742241204&q=${e}&days=3`,{mode:"cors"}),convertTime(e){let n=e.replace("PM","");const t=n.split(":");return t[0]=parseInt(t[0],10)+12,t[0]>24&&(t[0]-=24),n=t.join(":"),n}},$={searchbar:document.querySelector("#searchbar"),search:document.querySelector(".searchIcon"),city:document.querySelector(".city"),country:document.querySelector(".country"),weatherIcon:document.querySelector(".weatherIcon"),currentTemperature:document.querySelector(".currentTemperature"),weatherCondition:document.querySelector(".weatherCondition"),feelsLike:document.querySelector(".feelsLike"),minTemperature:document.querySelector("h2.minTemperature"),maxTemperature:document.querySelector("h2.maxTemperature"),sunrise:document.querySelector("span.sunrise"),sunset:document.querySelector("span.sunset"),imperial:document.querySelector(".imperial"),metric:document.querySelector(".metric"),humidity:document.querySelector(".humidity"),rainChance:document.querySelector(".rainChance"),speedUnit:document.querySelector(".speedUnit"),windSpeed:document.querySelector(".windSpeed"),uvIndex:document.querySelector(".uvIndex"),hourly:document.querySelector(".hourlyForecast"),daily:document.querySelector(".dailyForecast"),forecast:document.querySelector(".scrollcontainer")},E=(e,n)=>{let t,r;"imperial"===e?($.speedUnit.textContent="mph",t="mph",r="f",$.feelsLike.textContent=`${n.current[`feelslike_${r}`]}f°`,$.minTemperature.textContent=`${n.forecast.forecastday[0].day[`mintemp_${r}`]}f°`,$.maxTemperature.textContent=`${n.forecast.forecastday[0].day[`maxtemp_${r}`]}f°`):($.speedUnit.textContent="km/h",t="kph",r="c",$.feelsLike.textContent=`${n.current[`feelslike_${r}`]}c°`,$.minTemperature.textContent=`${n.forecast.forecastday[0].day[`mintemp_${r}`]}c°`,$.maxTemperature.textContent=`${n.forecast.forecastday[0].day[`maxtemp_${r}`]}c°`),$.city.textContent=n.location.name,$.country.textContent=n.location.country,$.currentTemperature.textContent=`${n.current[`temp_${r}`]+r}°`;const o=`https:${n.current.condition.icon}`;$.weatherIcon.src=o,$.weatherCondition.textContent=n.current.condition.text,$.sunrise.textContent=n.forecast.forecastday[0].astro.sunrise.replace("AM",""),$.sunset.textContent=T.convertTime(n.forecast.forecastday[0].astro.sunset),$.humidity.textContent=`${n.current.humidity}%`,$.windSpeed.textContent=n.current[`wind_${t}`],$.rainChance.textContent=`${n.forecast.forecastday[0].day.daily_chance_of_rain}%`,$.uvIndex.textContent=n.forecast.forecastday[0].day.uv},j=(e,n)=>{let t;t="imperial"===n?"f":"c",$.forecast.innerHTML="";for(let n=0;n<3;n+=1)for(let r=0;r<24;r+=1){const o=document.createElement("div");o.classList.add("card");const a=document.createElement("p");a.textContent=e.forecast.forecastday[n].hour[r].time,a.classList.add("when");const i=document.createElement("img");i.classList.add("weatherIcon");const c=`https:${e.forecast.forecastday[n].hour[r].condition.icon}`;i.src=c;const s=document.createElement("div");s.classList.add("forecastTemperature"),s.textContent=`${e.forecast.forecastday[n].hour[r][`temp_${t}`]}${t}°`,$.forecast.appendChild(o),o.appendChild(a),o.appendChild(i),o.appendChild(s)}},R=(e,n)=>{let t;t="imperial"===n?"f":"c",$.forecast.innerHTML="";for(let n=0;n<3;n+=1){const r=document.createElement("div");r.classList.add("card");const o=document.createElement("p");o.textContent=e.forecast.forecastday[n].date,o.classList.add("when");const a=document.createElement("img");a.classList.add("weatherIcon");const i=`https:${e.forecast.forecastday[n].day.condition.icon}`;a.src=i;const c=document.createElement("div");c.classList.add("forecastTemperature");const s=document.createElement("span");s.textContent=`${e.forecast.forecastday[n].day[`mintemp_${t}`]}${t}°/`,s.classList.add("minForecast");const d=document.createElement("span");d.textContent=`${e.forecast.forecastday[n].day[`maxtemp_${t}`]}${t}°`,d.classList.add("maxForecast"),$.forecast.appendChild(r),r.appendChild(o),r.appendChild(a),r.appendChild(c),c.appendChild(s),c.appendChild(d)}},q=()=>{const e=document.createElement("div");console.log("test"),e.classList.add("loadingScreenBackground");const n=document.createElement("div");n.classList.add("loading"),document.body.appendChild(e),e.appendChild(n),setTimeout((()=>{document.body.removeChild(e)}),1e4)};function I(e){T.get(e).then((e=>e.json())).then((e=>(T.response=e,T.location=e.location.name,E(T.unit,e),e))).then((e=>{"hourly"===T.forecastMode?j(e,T.unit):R(e,T.unit)})).then((()=>{localStorage.setItem("location",T.location)})).catch((()=>{const e=document.createElement("div"),n=document.createElement("h2");e.classList.add("error"),n.textContent="Oops, something went wrong! Try again",document.body.appendChild(e),e.appendChild(n),setTimeout((()=>{document.body.removeChild(e)}),3e3)}))}!function(){q();I(localStorage.getItem("location")||"London")}(),$.imperial.addEventListener("click",(()=>{T.unit="imperial",E(T.unit,T.response),"hourly"===T.forecastMode?j(T.response,T.unit):R(T.response,T.unit),$.metric.classList.remove("active"),$.imperial.classList.add("active")})),$.metric.addEventListener("click",(()=>{T.unit="metric",E(T.unit,T.response),"hourly"===T.forecastMode?j(T.response,T.unit):R(T.response,T.unit),$.imperial.classList.remove("active"),$.metric.classList.add("active")})),$.searchbar.addEventListener("focus",(()=>{T.userTyping=!0})),$.searchbar.addEventListener("blur",(()=>{T.userTyping=!1})),document.addEventListener("keydown",(e=>{"Enter"===e.code&&!0===T.userTyping&&""!==$.searchbar.value&&(I($.searchbar.value),$.searchbar.value="")})),$.search.addEventListener("click",(()=>{""!==$.searchbar.value&&(I($.searchbar.value),$.searchbar.value="")})),$.hourly.addEventListener("click",(()=>{T.forecastMode="hourly",j(T.response,T.unit),$.hourly.classList.add("active"),$.daily.classList.remove("active")})),$.daily.addEventListener("click",(()=>{T.forecastMode="daily",R(T.response,T.unit),$.hourly.classList.remove("active"),$.daily.classList.add("active")}))})()})();