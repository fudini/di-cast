!function(a){"use strict";function b(){function a(a,b){return-1!==toString.call(a).toLowerCase().indexOf(b.toLowerCase())}function b(b,c,d){if(!a(b,c))throw new TypeError(d)}function c(c){function d(c,d){if(b(c,"function",e),a(i,"function"))throw new Error(h);return d||[]}var f=!1,i=null;this.toFactory=function(a,b){var e=null,f={make:function(){return new e(j.call(arguments,0))}};return b=d(a,b),i=function(){return e=e||function(){function d(a){return e.apply(this,a)}var e=a.apply(a,b.map(function(a){return c.getMappingFor(a)}));return d.prototype=e.prototype,d}(),f},this},this.toType=function(a,b){function e(){return a.apply(this,b.map(function(a){return c.getMappingFor(a)}))}var g=null;return b=d(a,b),e.prototype=a.prototype,i=function(){return f&&(g=g||new e),g||new e},this},this.asSingleton=function(){return f=!0,this},this.resolve=function(){return b(i,"function",g),i()},this.injector=function(){return c}}function d(){function a(a){if(b(a,"string",f),d.hasMappingFor(a))throw new Error(h)}var d=this,e={};this.map=function(b){return a(b),e[b]=new c(d)},this.hasMappingFor=function(a){return e.hasOwnProperty(a)},this.getMappingFor=function(a){if(b(a,"string",f),!d.hasMappingFor(a))throw new Error(i);return e[a].resolve()}}var e="[#001] The mapping must be a function",f="[#002] The key must be a String",g="[#003] No resolver found",h="[#004] A mapping already exists",i="[#005] No mapping found",j=Array.prototype.slice;return d}var c=[];"function"==typeof define&&define.amd?define(c,b):"undefined"!=typeof module&&module.exports?module.exports=b.apply(b,c.map(function(a){return require(a)})):a.Injector=b.apply(b,c.map(function(b){return a[b]}))}(this);