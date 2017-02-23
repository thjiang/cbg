webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "G:\\cbg\\src\\components\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c724ba70", Component.options)
  } else {
    hotAPI.reload("data-v-c724ba70", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    el: "#app",
    data() {
        return {
            name: "122211",
            age: "222212"
        };
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\nbody {\n  background-color: #FF704F;\n}\nbody h1 {\n  background-color: #eee;\n  color: red;\n  transform: translate(10%, 10%);\n  /*测试自动添加前缀*/\n}\nbody a {\n  display: flex;\n}\nbody h2 {\n  background-color: #ccc;\n}\nbody #qwe {\n  background-image: url(" + __webpack_require__(6) + ");\n}\nbody #asd {\n  background-image: url(" + __webpack_require__(5) + ");\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/5.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0VBMkJENEQ0ODlFNTExQjY0OEEyRDU4RTA0NkJEMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MTFFN0U5Mjg3NzgxMUU2OThCOUFCNDJEMDJGOUUwNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MTFFN0U5MTg3NzgxMUU2OThCOUFCNDJEMDJGOUUwNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNUVFNUYxNTA4NEU2MTE5NzUzQzFCNDI5MTU2OTFGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlDRUEyQkQ0RDQ4OUU1MTFCNjQ4QTJENThFMDQ2QkQyIi8+IDwvcmRmOkRlc2NyaXB0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"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('h1', [_vm._v("姓名：" + _vm._s(_vm.name))]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.age))]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "qwe"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "asd"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c724ba70", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("1e423a96", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-c724ba70\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-c724ba70\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(11)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.debug = true; //开启错误提示

new _vue2.default(_app2.default);

/***/ })
],[13]);