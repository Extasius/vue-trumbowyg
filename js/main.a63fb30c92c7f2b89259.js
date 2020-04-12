!function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],f=0,b=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&b.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(e);b.length;)b.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={0:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([16,1]),n()}({1:function(t,e,n){},15:function(t,e,n){"use strict";var r=n(1);n.n(r).a},16:function(t,e,n){"use strict";n.r(e);var r=n(2),a=(n(9),n(0)),o=n.n(a),s=(n(10),n(4)),i=["init","focus","blur","change","resize","paste","openfullscreen","closefullscreen","close","modalopen","modalclose"],l={name:"trumbowyg",render:function(t){return t("textarea")},props:{value:{default:null,required:!0,validator:function(t){return null===t||"string"==typeof t||t instanceof String}},config:{type:Object,default:function(){return{}}},svgPath:{type:[String,Boolean],default:s.a},disabled:{type:Boolean,default:!1}},data:function(){return{el:null}},mounted:function(){this.el||(this.el=o()(this.$el),this.el.trumbowyg(o.a.extend(!0,{},{svgPath:this.svgPath},this.config)),this.el.trumbowyg("html",this.value),this.el.on("".concat("tbw","change"),this.onChange),this.el.on("".concat("tbw","blur"),this.onBlur),this.registerEvents())},watch:{value:function(t){this.el&&t!==this.el.trumbowyg("html")&&this.el.trumbowyg("html",t)},disabled:function(t){var e=t?"disable":"enable";this.el.trumbowyg(e)}},methods:{onChange:function(t){this.$emit("input",t.target.value)},onBlur:function(t){this.$emit("blur",t.target.value)},registerEvents:function(){var t=this;i.forEach((function(e){t.el.on("".concat("tbw").concat(e),(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];t.$emit.apply(t,["".concat("tbw","-").concat(e)].concat(r))}))}))}},beforeDestroy:function(){this.el&&(this.el.trumbowyg("destroy"),this.el=null)}};l.install=function(t,e){var n="trumbowyg";"string"==typeof e&&(n=e),t.component(n,l)};var c=l,u=(n(11),n(12),n(13),n(14),{name:"app",data:function(){return{form:{content:"<h1>Preloaded content</h1>",body:null},configs:{basic:{autogrow:!1},advanced:{autogrow:!0,removeformatPasted:!0,btnsAdd:["foreColor","backColor"],btns:[["bold","italic"],["formatting"],["link"],["foreColor"],["backColor"]]}}}},components:{Trumbowyg:c},methods:{submit:function(){alert("Form submitted.")},setNewValue:function(){this.form.content='<h3 class="bg-success">New content inserted</h3>'},listenToBlurEvent:function(t){},listenToInitEvent:function(t){}}}),f=(n(15),n(5)),b=Object(f.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("main",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 mb-3"},[n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"card-body"},[n("button",{staticClass:"btn btn-secondary",on:{click:function(e){return e.preventDefault(),t.setNewValue()}}},[t._v("Set new value pragmatically")])])]),t._v(" "),n("form",{attrs:{method:"post",action:"/"},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[n("div",{staticClass:"form-group"},[n("label",[t._v("Basic example")]),t._v(" "),n("trumbowyg",{staticClass:"form-control",attrs:{config:t.configs.basic},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Advanced example")]),t._v(" "),n("trumbowyg",{staticClass:"form-control",attrs:{name:"body",config:t.configs.advanced,placeholder:"Enter your content here"},on:{"tbw-blur":t.listenToBlurEvent,"tbw-init":t.listenToInitEvent},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}})],1),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3"},[e("span",{staticClass:"navbar-brand mb-0"},[this._v("Vue.js Trumbowyg")]),this._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://github.com/ankurk91/vue-trumbowyg",target:"_blank"}},[this._v(" GitHub")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Submit form\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"col-md-4 mb-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[this._v("\n            Links\n          ")]),this._v(" "),e("div",{staticClass:"card-body"},[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ankurk91/vue-trumbowyg",target:"_blank"}},[this._v("Github")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.npmjs.com/package/vue-trumbowyg",target:"_blank"}},[this._v("npm")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://alex-d.github.io/Trumbowyg/",rel:"noreferrer",target:"_blank"}},[this._v("Trumbowyg docs")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"text-center text-muted small mb-3"},[this._v("\n    Created by "),e("a",{attrs:{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"}},[this._v("@ankurk91")])])}],!1,null,null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",render:function(t){return t(b)},created:function(){},mounted:function(){}})}});