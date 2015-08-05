/*! Qoopido.js library 3.7.3, 2015-08-05 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,t){t.register?t.register("polyfill/object/defineproperty",e):(t.modules=t.modules||{})["polyfill/object/defineproperty"]=e()}(function(e,t,r,o,n,i,c){"use strict";if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var p=Object.defineProperty,s=Object.prototype.__defineGetter__,u=Object.prototype.__defineSetter__;Object.defineProperty=function(e,t,r){if(p)try{return p(e,t,r)}catch(o){}if(e!==Object(e))throw new TypeError("Object.defineProperty called on non-object");return s&&"get"in r&&s.call(e,t,r.get),u&&"set"in r&&u.call(e,t,r.set),"value"in r&&(e[t]=r.value),e}}return Object.defineProperty},window.qoopido=window.qoopido||{}),function(e,t){if(t.register){var r=[];Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()||r.push("./defineproperty"),t.register("polyfill/object/defineproperties",e,r)}else(t.modules=t.modules||{})["polyfill/object/defineproperties"]=e()}(function(e,t,r,o,n,i,c){"use strict";return Object.defineProperties||(Object.defineProperties=function(e,t){if(e!==Object(e))throw new TypeError("Object.defineProperties called on non-object");var r;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&Object.defineProperty(e,r,t[r]);return e}),Object.defineProperties},window.qoopido=window.qoopido||{}),function(e,t){if(t.register){var r=[];Object.defineProperties||r.push("./defineproperties"),t.register("polyfill/object/create",e,r)}else(t.modules=t.modules||{})["polyfill/object/create"]=e()}(function(e,t,r,o,n,i,c){"use strict";return Object.create||(Object.create=function(e,t){function r(){}if("object"!=typeof e)throw new TypeError;r.prototype=e;var o=new r;if(e&&(o.constructor=r),arguments.length>1){if(t!==Object(t))throw new TypeError;Object.defineProperties(o,t)}return o}),Object.create},window.qoopido=window.qoopido||{}),function(e,t){t.register?t.register("polyfill/object/getownpropertynames",e):(t.modules=t.modules||{})["polyfill/object/getownpropertynames"]=e()}(function(e,t,r,o,n,i,c){"use strict";return Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}),Object.getOwnPropertyNames},window.qoopido=window.qoopido||{}),function(e,t){t.register?t.register("polyfill/object/getownpropertydescriptor",e):(t.modules=t.modules||{})["polyfill/object/getownpropertydescriptor"]=e()}(function(e,t,r,o,n,i,c){"use strict";if(!Object.getOwnPropertyDescriptor||!function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()){var p=Object.getOwnPropertyDescriptor;Object.getOwnPropertyDescriptor=function(e,t){if(e!==Object(e))throw new TypeError;try{return p.call(Object,e,t)}catch(r){}return Object.prototype.hasOwnProperty.call(e,t)?{value:e[t],enumerable:!0,writable:!0,configurable:!0}:void 0}}return Object.getOwnPropertyDescriptor},window.qoopido=window.qoopido||{}),function(e,t,r,o,n){"use strict";function i(e,i,c,s){var d,a=e.split("/");return f[e]?f[e]:(d=function(){if(c)for(var d,y,b=a.slice(0,-1).join("/"),j=0;(d=c[j])!==n;j++)y=l.test(d),y&&(d=p(b+"/"+d)),!f[d]&&arguments[j]&&(f[d]=arguments[j]),y&&!f[d]&&"undefined"!=typeof console&&console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",d));return f[e]=i(f,u,a,t,r,o,n),s&&s(f[e]),f[e]},void("undefined"!=typeof module&&module.exports?module.exports=define(d):"function"==typeof define&&define.amd?c?define(c,d):define(d):d()))}function c(e,t,r){i(e,t,r,function(t){f[e]=t.create()})}function p(e){for(var t;(t=e.replace(a,""))!==e;)e=t;return e.replace(y,"")}var s=r.qoopido||(r.qoopido={}),u=s.shared||(s.shared={}),f=s.modules||(s.modules={}),d=[],l=new RegExp("^\\.+\\/"),a=new RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),y=new RegExp("(^\\/)|\\.\\/","g");s.register=i,s.registerSingleton=c,Object.create||d.push("./polyfill/object/create"),Object.getOwnPropertyNames||d.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||d.push("./polyfill/object/getownpropertydescriptor"),i("base",e,d)}(function(e,t,r,o,n,i,c){"use strict";function p(e){for(var t,r={},o=Object.getOwnPropertyNames(e),n=0;(t=o[n])!==c;n++)r[t]=Object.getOwnPropertyDescriptor(e,t);return r}function s(){throw new Error("[Qoopido.js] Operation prohibited")}return{create:function(){var e,t=Object.create(this,p(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=s,e||t},extend:function(e,t){var r;return e=e||{},t=t===!0,e._parent=this,r=Object.create(this,p(e)),t===!0&&(r.extend=s),r}}},navigator,this,document);