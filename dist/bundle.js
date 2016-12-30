/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/app.js */1);


/***/ },
/* 1 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mockjs = __webpack_require__(/*! mockjs */ 5);
	
	var _mockjs2 = _interopRequireDefault(_mockjs);
	
	var _jquery = __webpack_require__(/*! jquery */ 4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(/*! ./style/main.scss */ 7);
	
	// 测试用 mockApi 上线时删除
	__webpack_require__(/*! ./js/mockApi */ 8);
	
	// 获取每个 video 模块的模板
	var video_tpl = (0, _jquery2.default)('#video-item-tpl').html().trim();
	
	// ajax 请求
	_jquery2.default.ajax({
		url: '/test',
		method: 'POST',
		beforeSend: function beforeSend() {
			(0, _jquery2.default)('.loading').text('请求资源中…');
		},
		success: function success(response) {
			var data = JSON.parse(response).data;
	
			var _html = '';
			// 遍历数组
			data.forEach(function (item, index) {
				_html += video_tpl.replace(/{{index}}/g, index + 1).replace(/{{title}}/g, item.title).replace(/{{fileUrl}}/g, item.fileUrl).replace(/{{id}}/g, item.id).replace(/{{poster}}/g, item.poster || '').replace(/{{score}}/g, item.score);
			});
	
			(0, _jquery2.default)('#container').empty().append(_html);
		},
		error: function error() {
			(0, _jquery2.default)('.loading').text('网络错误');
		}
	});
	
	// 视频播放暂停
	(0, _jquery2.default)('#container').on('click', '.main_video', function () {
	
		var video = (0, _jquery2.default)(this)[0];
	
		video.paused ? video.play() : video.pause();
	});
	
	// 初始化总体排序按钮
	(0, _jquery2.default)(function () {
		var search = window.location.search || '';
		search = search.replace('?', '');
	
		// 未开启
		if (!search || /order=false/.test(search)) {
			(0, _jquery2.default)('.sort-wrap').attr('title', '进行总体排序').attr('href', '?order=true');
			(0, _jquery2.default)('.sort-text').text('总体排序');
		} else if (/order=true/.test(search)) {
			// 已开启
			(0, _jquery2.default)('.sort-wrap').attr('href', '?order=false').addClass('open');
			(0, _jquery2.default)('.sort-text').text('取消排序');
		}
	
		(0, _jquery2.default)('.sort-wrap').on('click', function () {
			(0, _jquery2.default)(this).toggleClass('open');
		});
	});

/***/ },
/* 2 */
/*!************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/style/main.scss ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "#sidebar {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box; }\n\n* {\n  padding: 0;\n  margin: 0; }\n\nbody {\n  font-family: Lato, \"Microsoft Jhenghei\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif;\n  background-color: #f1f1f1; }\n\nul {\n  list-style-type: none; }\n\nbutton, input, textarea {\n  font-family: inherit; }\n\n#sidebar {\n  position: fixed;\n  width: 230px;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 10px 10px;\n  z-index: 100;\n  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -webkit-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out; }\n  #sidebar.close {\n    right: -229px; }\n    #sidebar.close + #main {\n      margin-right: 1px; }\n\n.handle .sort-wrap {\n  display: block;\n  position: relative;\n  height: 50px;\n  width: 50px;\n  border-radius: 25px;\n  background-color: #ccc;\n  transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -webkit-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out; }\n  .handle .sort-wrap.open {\n    background-color: #16c2c2; }\n  .handle .sort-wrap:hover {\n    width: 210px; }\n  .handle .sort-wrap .icon {\n    position: absolute;\n    left: 9px;\n    top: 9px; }\n  .handle .sort-wrap .sort-text {\n    position: absolute;\n    display: block;\n    top: 10px;\n    left: 0;\n    width: 210px;\n    text-align: center;\n    color: #fff;\n    white-space: nowrap;\n    font-size: 20px; }\n\n#main {\n  padding: 0 20px 40px;\n  margin-right: 230px;\n  transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -webkit-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out; }\n  #main .loading {\n    margin-top: 30px;\n    text-align: center;\n    font-style: 20px;\n    color: #666; }\n\n.grey {\n  color: #999; }\n\n.widget {\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  margin: 15px 15px 0 0;\n  width: 256px;\n  padding: 23px 0 15px;\n  background-color: #fff;\n  transition: all 0.2s ease-out;\n  -moz-transition: all 0.2s ease-out;\n  -webkit-transition: all 0.2s ease-out;\n  -o-transition: all 0.2s ease-out; }\n  .widget:hover {\n    box-shadow: 0px 5px 17px rgba(0, 0, 0, 0.1); }\n  .widget i {\n    position: absolute;\n    padding: 3px 10px;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 23px;\n    color: #999;\n    font-size: 12px;\n    font-style: normal;\n    cursor: pointer; }\n    .widget i:hover {\n      background-color: #f6f6f6; }\n  .widget .category {\n    font-weight: 800;\n    color: #4285F4; }\n\nvideo {\n  width: 100%;\n  height: 144px;\n  cursor: pointer;\n  background-color: #000; }\n\n.info {\n  padding: 0 10px; }\n  .info-title {\n    margin: 5px 0;\n    font-size: 13px;\n    line-height: 20px;\n    font-weight: 800;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n    .info-title a {\n      color: inherit;\n      text-decoration: none;\n      transition: all 0.2s ease-out;\n      -moz-transition: all 0.2s ease-out;\n      -webkit-transition: all 0.2s ease-out;\n      -o-transition: all 0.2s ease-out; }\n      .info-title a:hover {\n        color: #4285F4;\n        text-decoration: underline; }\n  .info-item {\n    float: left;\n    margin: 0 10px 2px 0;\n    font-size: 12px;\n    line-height: 10px;\n    word-wrap: break-word;\n    word-break: normal; }\n    .info-item:last-child {\n      margin-right: 0; }\n\n.icon {\n  display: inline-block; }\n  .icon-sort {\n    display: inline-block;\n    height: 0;\n    width: 32px;\n    padding-top: 32px;\n    text-indent: -9999px;\n    overflow: hidden;\n    background: url(" + __webpack_require__(/*! ../img/icon-sort.png */ 9) + ") transparent no-repeat center top; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/*!*********************************!*\
  !*** ./~/jquery/dist/jquery.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 5 */
/*!*******************************!*\
  !*** ./~/mockjs/dist/mock.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Mock"] = factory();
		else
			root["Mock"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* global require, module, window */
		var Handler = __webpack_require__(1)
		var Util = __webpack_require__(3)
		var Random = __webpack_require__(5)
		var RE = __webpack_require__(20)
		var toJSONSchema = __webpack_require__(23)
		var valid = __webpack_require__(25)
	
		var XHR
		if (typeof window !== 'undefined') XHR = __webpack_require__(27)
	
		/*!
		    Mock - 模拟请求 & 模拟数据
		    https://github.com/nuysoft/Mock
		    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
		*/
		var Mock = {
		    Handler: Handler,
		    Random: Random,
		    Util: Util,
		    XHR: XHR,
		    RE: RE,
		    toJSONSchema: toJSONSchema,
		    valid: valid,
		    heredoc: Util.heredoc,
		    setup: function(settings) {
		        return XHR.setup(settings)
		    },
		    _mocked: {}
		}
	
		Mock.version = '1.0.1-beta3'
	
		// 避免循环依赖
		if (XHR) XHR.Mock = Mock
	
		/*
		    * Mock.mock( template )
		    * Mock.mock( function() )
		    * Mock.mock( rurl, template )
		    * Mock.mock( rurl, function(options) )
		    * Mock.mock( rurl, rtype, template )
		    * Mock.mock( rurl, rtype, function(options) )
	
		    根据数据模板生成模拟数据。
		*/
		Mock.mock = function(rurl, rtype, template) {
		    // Mock.mock(template)
		    if (arguments.length === 1) {
		        return Handler.gen(rurl)
		    }
		    // Mock.mock(rurl, template)
		    if (arguments.length === 2) {
		        template = rtype
		        rtype = undefined
		    }
		    // 拦截 XHR
		    if (XHR) window.XMLHttpRequest = XHR
		    Mock._mocked[rurl + (rtype || '')] = {
		        rurl: rurl,
		        rtype: rtype,
		        template: template
		    }
		    return Mock
		}
	
		module.exports = Mock
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* 
		    ## Handler
	
		    处理数据模板。
		    
		    * Handler.gen( template, name?, context? )
	
		        入口方法。
	
		    * Data Template Definition, DTD
		        
		        处理数据模板定义。
	
		        * Handler.array( options )
		        * Handler.object( options )
		        * Handler.number( options )
		        * Handler.boolean( options )
		        * Handler.string( options )
		        * Handler.function( options )
		        * Handler.regexp( options )
		        
		        处理路径（相对和绝对）。
	
		        * Handler.getValueByKeyPath( key, options )
	
		    * Data Placeholder Definition, DPD
	
		        处理数据占位符定义
	
		        * Handler.placeholder( placeholder, context, templateContext, options )
	
		*/
	
		var Constant = __webpack_require__(2)
		var Util = __webpack_require__(3)
		var Parser = __webpack_require__(4)
		var Random = __webpack_require__(5)
		var RE = __webpack_require__(20)
	
		var Handler = {
		    extend: Util.extend
		}
	
		/*
		    template        属性值（即数据模板）
		    name            属性名
		    context         数据上下文，生成后的数据
		    templateContext 模板上下文，
	
		    Handle.gen(template, name, options)
		    context
		        currentContext, templateCurrentContext, 
		        path, templatePath
		        root, templateRoot
		*/
		Handler.gen = function(template, name, context) {
		    /* jshint -W041 */
		    name = name == undefined ? '' : (name + '')
	
		    context = context || {}
		    context = {
		            // 当前访问路径，只有属性名，不包括生成规则
		            path: context.path || [Constant.GUID],
		            templatePath: context.templatePath || [Constant.GUID++],
		            // 最终属性值的上下文
		            currentContext: context.currentContext,
		            // 属性值模板的上下文
		            templateCurrentContext: context.templateCurrentContext || template,
		            // 最终值的根
		            root: context.root || context.currentContext,
		            // 模板的根
		            templateRoot: context.templateRoot || context.templateCurrentContext || template
		        }
		        // console.log('path:', context.path.join('.'), template)
	
		    var rule = Parser.parse(name)
		    var type = Util.type(template)
		    var data
	
		    if (Handler[type]) {
		        data = Handler[type]({
		            // 属性值类型
		            type: type,
		            // 属性值模板
		            template: template,
		            // 属性名 + 生成规则
		            name: name,
		            // 属性名
		            parsedName: name ? name.replace(Constant.RE_KEY, '$1') : name,
	
		            // 解析后的生成规则
		            rule: rule,
		            // 相关上下文
		            context: context
		        })
	
		        if (!context.root) context.root = data
		        return data
		    }
	
		    return template
		}
	
		Handler.extend({
		    array: function(options) {
		        var result = [],
		            i, ii;
	
		        // 'name|1': []
		        // 'name|count': []
		        // 'name|min-max': []
		        if (options.template.length === 0) return result
	
		        // 'arr': [{ 'email': '@EMAIL' }, { 'email': '@EMAIL' }]
		        if (!options.rule.parameters) {
		            for (i = 0; i < options.template.length; i++) {
		                options.context.path.push(i)
		                options.context.templatePath.push(i)
		                result.push(
		                    Handler.gen(options.template[i], i, {
		                        path: options.context.path,
		                        templatePath: options.context.templatePath,
		                        currentContext: result,
		                        templateCurrentContext: options.template,
		                        root: options.context.root || result,
		                        templateRoot: options.context.templateRoot || options.template
		                    })
		                )
		                options.context.path.pop()
		                options.context.templatePath.pop()
		            }
		        } else {
		            // 'method|1': ['GET', 'POST', 'HEAD', 'DELETE']
		            if (options.rule.min === 1 && options.rule.max === undefined) {
		                // fix #17
		                options.context.path.push(options.name)
		                options.context.templatePath.push(options.name)
		                result = Random.pick(
		                    Handler.gen(options.template, undefined, {
		                        path: options.context.path,
		                        templatePath: options.context.templatePath,
		                        currentContext: result,
		                        templateCurrentContext: options.template,
		                        root: options.context.root || result,
		                        templateRoot: options.context.templateRoot || options.template
		                    })
		                )
		                options.context.path.pop()
		                options.context.templatePath.pop()
		            } else {
		                // 'data|+1': [{}, {}]
		                if (options.rule.parameters[2]) {
		                    options.template.__order_index = options.template.__order_index || 0
	
		                    options.context.path.push(options.name)
		                    options.context.templatePath.push(options.name)
		                    result = Handler.gen(options.template, undefined, {
		                        path: options.context.path,
		                        templatePath: options.context.templatePath,
		                        currentContext: result,
		                        templateCurrentContext: options.template,
		                        root: options.context.root || result,
		                        templateRoot: options.context.templateRoot || options.template
		                    })[
		                        options.template.__order_index % options.template.length
		                    ]
	
		                    options.template.__order_index += +options.rule.parameters[2]
	
		                    options.context.path.pop()
		                    options.context.templatePath.pop()
	
		                } else {
		                    // 'data|1-10': [{}]
		                    for (i = 0; i < options.rule.count; i++) {
		                        // 'data|1-10': [{}, {}]
		                        for (ii = 0; ii < options.template.length; ii++) {
		                            options.context.path.push(result.length)
		                            options.context.templatePath.push(ii)
		                            result.push(
		                                Handler.gen(options.template[ii], result.length, {
		                                    path: options.context.path,
		                                    templatePath: options.context.templatePath,
		                                    currentContext: result,
		                                    templateCurrentContext: options.template,
		                                    root: options.context.root || result,
		                                    templateRoot: options.context.templateRoot || options.template
		                                })
		                            )
		                            options.context.path.pop()
		                            options.context.templatePath.pop()
		                        }
		                    }
		                }
		            }
		        }
		        return result
		    },
		    object: function(options) {
		        var result = {},
		            keys, fnKeys, key, parsedKey, inc, i;
	
		        // 'obj|min-max': {}
		        /* jshint -W041 */
		        if (options.rule.min != undefined) {
		            keys = Util.keys(options.template)
		            keys = Random.shuffle(keys)
		            keys = keys.slice(0, options.rule.count)
		            for (i = 0; i < keys.length; i++) {
		                key = keys[i]
		                parsedKey = key.replace(Constant.RE_KEY, '$1')
		                options.context.path.push(parsedKey)
		                options.context.templatePath.push(key)
		                result[parsedKey] = Handler.gen(options.template[key], key, {
		                    path: options.context.path,
		                    templatePath: options.context.templatePath,
		                    currentContext: result,
		                    templateCurrentContext: options.template,
		                    root: options.context.root || result,
		                    templateRoot: options.context.templateRoot || options.template
		                })
		                options.context.path.pop()
		                options.context.templatePath.pop()
		            }
	
		        } else {
		            // 'obj': {}
		            keys = []
		            fnKeys = [] // #25 改变了非函数属性的顺序，查找起来不方便
		            for (key in options.template) {
		                (typeof options.template[key] === 'function' ? fnKeys : keys).push(key)
		            }
		            keys = keys.concat(fnKeys)
	
		            /*
		                会改变非函数属性的顺序
		                keys = Util.keys(options.template)
		                keys.sort(function(a, b) {
		                    var afn = typeof options.template[a] === 'function'
		                    var bfn = typeof options.template[b] === 'function'
		                    if (afn === bfn) return 0
		                    if (afn && !bfn) return 1
		                    if (!afn && bfn) return -1
		                })
		            */
	
		            for (i = 0; i < keys.length; i++) {
		                key = keys[i]
		                parsedKey = key.replace(Constant.RE_KEY, '$1')
		                options.context.path.push(parsedKey)
		                options.context.templatePath.push(key)
		                result[parsedKey] = Handler.gen(options.template[key], key, {
		                    path: options.context.path,
		                    templatePath: options.context.templatePath,
		                    currentContext: result,
		                    templateCurrentContext: options.template,
		                    root: options.context.root || result,
		                    templateRoot: options.context.templateRoot || options.template
		                })
		                options.context.path.pop()
		                options.context.templatePath.pop()
		                    // 'id|+1': 1
		                inc = key.match(Constant.RE_KEY)
		                if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
		                    options.template[key] += parseInt(inc[2], 10)
		                }
		            }
		        }
		        return result
		    },
		    number: function(options) {
		        var result, parts;
		        if (options.rule.decimal) { // float
		            options.template += ''
		            parts = options.template.split('.')
		                // 'float1|.1-10': 10,
		                // 'float2|1-100.1-10': 1,
		                // 'float3|999.1-10': 1,
		                // 'float4|.3-10': 123.123,
		            parts[0] = options.rule.range ? options.rule.count : parts[0]
		            parts[1] = (parts[1] || '').slice(0, options.rule.dcount)
		            while (parts[1].length < options.rule.dcount) {
		                parts[1] += (
		                    // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
		                    (parts[1].length < options.rule.dcount - 1) ? Random.character('number') : Random.character('123456789')
		                )
		            }
		            result = parseFloat(parts.join('.'), 10)
		        } else { // integer
		            // 'grade1|1-100': 1,
		            result = options.rule.range && !options.rule.parameters[2] ? options.rule.count : options.template
		        }
		        return result
		    },
		    boolean: function(options) {
		        var result;
		        // 'prop|multiple': false, 当前值是相反值的概率倍数
		        // 'prop|probability-probability': false, 当前值与相反值的概率
		        result = options.rule.parameters ? Random.bool(options.rule.min, options.rule.max, options.template) : options.template
		        return result
		    },
		    string: function(options) {
		        var result = '',
		            i, placeholders, ph, phed;
		        if (options.template.length) {
	
		            //  'foo': '★',
		            /* jshint -W041 */
		            if (options.rule.count == undefined) {
		                result += options.template
		            }
	
		            // 'star|1-5': '★',
		            for (i = 0; i < options.rule.count; i++) {
		                result += options.template
		            }
		            // 'email|1-10': '@EMAIL, ',
		            placeholders = result.match(Constant.RE_PLACEHOLDER) || [] // A-Z_0-9 > \w_
		            for (i = 0; i < placeholders.length; i++) {
		                ph = placeholders[i]
	
		                // 遇到转义斜杠，不需要解析占位符
		                if (/^\\/.test(ph)) {
		                    placeholders.splice(i--, 1)
		                    continue
		                }
	
		                phed = Handler.placeholder(ph, options.context.currentContext, options.context.templateCurrentContext, options)
	
		                // 只有一个占位符，并且没有其他字符
		                if (placeholders.length === 1 && ph === result && typeof phed !== typeof result) { // 
		                    result = phed
		                    break
	
		                    if (Util.isNumeric(phed)) {
		                        result = parseFloat(phed, 10)
		                        break
		                    }
		                    if (/^(true|false)$/.test(phed)) {
		                        result = phed === 'true' ? true :
		                            phed === 'false' ? false :
		                            phed // 已经是布尔值
		                        break
		                    }
		                }
		                result = result.replace(ph, phed)
		            }
	
		        } else {
		            // 'ASCII|1-10': '',
		            // 'ASCII': '',
		            result = options.rule.range ? Random.string(options.rule.count) : options.template
		        }
		        return result
		    },
		    'function': function(options) {
		        // ( context, options )
		        return options.template.call(options.context.currentContext, options)
		    },
		    'regexp': function(options) {
		        var source = ''
	
		        // 'name': /regexp/,
		        /* jshint -W041 */
		        if (options.rule.count == undefined) {
		            source += options.template.source // regexp.source
		        }
	
		        // 'name|1-5': /regexp/,
		        for (var i = 0; i < options.rule.count; i++) {
		            source += options.template.source
		        }
	
		        return RE.Handler.gen(
		            RE.Parser.parse(
		                source
		            )
		        )
		    }
		})
	
		Handler.extend({
		    _all: function() {
		        var re = {};
		        for (var key in Random) re[key.toLowerCase()] = key
		        return re
		    },
		    // 处理占位符，转换为最终值
		    placeholder: function(placeholder, obj, templateContext, options) {
		        // console.log(options.context.path)
		        // 1 key, 2 params
		        Constant.RE_PLACEHOLDER.exec('')
		        var parts = Constant.RE_PLACEHOLDER.exec(placeholder),
		            key = parts && parts[1],
		            lkey = key && key.toLowerCase(),
		            okey = this._all()[lkey],
		            params = parts && parts[2] || ''
		        var pathParts = this.splitPathToArray(key)
	
		        // 解析占位符的参数
		        try {
		            // 1. 尝试保持参数的类型
		            /*
		                #24 [Window Firefox 30.0 引用 占位符 抛错](https://github.com/nuysoft/Mock/issues/24)
		                [BX9056: 各浏览器下 window.eval 方法的执行上下文存在差异](http://www.w3help.org/zh-cn/causes/BX9056)
		                应该属于 Window Firefox 30.0 的 BUG
		            */
		            /* jshint -W061 */
		            params = eval('(function(){ return [].splice.call(arguments, 0 ) })(' + params + ')')
		        } catch (error) {
		            // 2. 如果失败，只能解析为字符串
		            // console.error(error)
		            // if (error instanceof ReferenceError) params = parts[2].split(/,\s*/);
		            // else throw error
		            params = parts[2].split(/,\s*/)
		        }
	
		        // 占位符优先引用数据模板中的属性
		        if (obj && (key in obj)) return obj[key]
	
		        // @index @key
		        // if (Constant.RE_INDEX.test(key)) return +options.name
		        // if (Constant.RE_KEY.test(key)) return options.name
	
		        // 绝对路径 or 相对路径
		        if (
		            key.charAt(0) === '/' ||
		            pathParts.length > 1
		        ) return this.getValueByKeyPath(key, options)
	
		        // 递归引用数据模板中的属性
		        if (templateContext &&
		            (typeof templateContext === 'object') &&
		            (key in templateContext) &&
		            (placeholder !== templateContext[key]) // fix #15 避免自己依赖自己
		        ) {
		            // 先计算被引用的属性值
		            templateContext[key] = Handler.gen(templateContext[key], key, {
		                currentContext: obj,
		                templateCurrentContext: templateContext
		            })
		            return templateContext[key]
		        }
	
		        // 如果未找到，则原样返回
		        if (!(key in Random) && !(lkey in Random) && !(okey in Random)) return placeholder
	
		        // 递归解析参数中的占位符
		        for (var i = 0; i < params.length; i++) {
		            Constant.RE_PLACEHOLDER.exec('')
		            if (Constant.RE_PLACEHOLDER.test(params[i])) {
		                params[i] = Handler.placeholder(params[i], obj, templateContext, options)
		            }
		        }
	
		        var handle = Random[key] || Random[lkey] || Random[okey]
		        switch (Util.type(handle)) {
		            case 'array':
		                // 自动从数组中取一个，例如 @areas
		                return Random.pick(handle)
		            case 'function':
		                // 执行占位符方法（大多数情况）
		                handle.options = options
		                var re = handle.apply(Random, params)
		                if (re === undefined) re = '' // 因为是在字符串中，所以默认为空字符串。
		                delete handle.options
		                return re
		        }
		    },
		    getValueByKeyPath: function(key, options) {
		        var originalKey = key
		        var keyPathParts = this.splitPathToArray(key)
		        var absolutePathParts = []
	
		        // 绝对路径
		        if (key.charAt(0) === '/') {
		            absolutePathParts = [options.context.path[0]].concat(
		                this.normalizePath(keyPathParts)
		            )
		        } else {
		            // 相对路径
		            if (keyPathParts.length > 1) {
		                absolutePathParts = options.context.path.slice(0)
		                absolutePathParts.pop()
		                absolutePathParts = this.normalizePath(
		                    absolutePathParts.concat(keyPathParts)
		                )
	
		            }
		        }
	
		        key = keyPathParts[keyPathParts.length - 1]
		        var currentContext = options.context.root
		        var templateCurrentContext = options.context.templateRoot
		        for (var i = 1; i < absolutePathParts.length - 1; i++) {
		            currentContext = currentContext[absolutePathParts[i]]
		            templateCurrentContext = templateCurrentContext[absolutePathParts[i]]
		        }
		        // 引用的值已经计算好
		        if (currentContext && (key in currentContext)) return currentContext[key]
	
		        // 尚未计算，递归引用数据模板中的属性
		        if (templateCurrentContext &&
		            (typeof templateCurrentContext === 'object') &&
		            (key in templateCurrentContext) &&
		            (originalKey !== templateCurrentContext[key]) // fix #15 避免自己依赖自己
		        ) {
		            // 先计算被引用的属性值
		            templateCurrentContext[key] = Handler.gen(templateCurrentContext[key], key, {
		                currentContext: currentContext,
		                templateCurrentContext: templateCurrentContext
		            })
		            return templateCurrentContext[key]
		        }
		    },
		    // https://github.com/kissyteam/kissy/blob/master/src/path/src/path.js
		    normalizePath: function(pathParts) {
		        var newPathParts = []
		        for (var i = 0; i < pathParts.length; i++) {
		            switch (pathParts[i]) {
		                case '..':
		                    newPathParts.pop()
		                    break
		                case '.':
		                    break
		                default:
		                    newPathParts.push(pathParts[i])
		            }
		        }
		        return newPathParts
		    },
		    splitPathToArray: function(path) {
		        var parts = path.split(/\/+/);
		        if (!parts[parts.length - 1]) parts = parts.slice(0, -1)
		        if (!parts[0]) parts = parts.slice(1)
		        return parts;
		    }
		})
	
		module.exports = Handler
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		/*
		    ## Constant
	
		    常量集合。
		 */
		/*
		    RE_KEY
		        'name|min-max': value
		        'name|count': value
		        'name|min-max.dmin-dmax': value
		        'name|min-max.dcount': value
		        'name|count.dmin-dmax': value
		        'name|count.dcount': value
		        'name|+step': value
	
		        1 name, 2 step, 3 range [ min, max ], 4 drange [ dmin, dmax ]
	
		    RE_PLACEHOLDER
		        placeholder(*)
	
		    [正则查看工具](http://www.regexper.com/)
	
		    #26 生成规则 支持 负数，例如 number|-100-100
		*/
		module.exports = {
		    GUID: 1,
		    RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
		    RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
		    RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
		    // /\\*@([^@#%&()\?\s\/\.]+)(?:\((.*?)\))?/g
		    // RE_INDEX: /^index$/,
		    // RE_KEY: /^key$/
		}
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		/*
		    ## Utilities
		*/
		var Util = {}
	
		Util.extend = function extend() {
		    var target = arguments[0] || {},
		        i = 1,
		        length = arguments.length,
		        options, name, src, copy, clone
	
		    if (length === 1) {
		        target = this
		        i = 0
		    }
	
		    for (; i < length; i++) {
		        options = arguments[i]
		        if (!options) continue
	
		        for (name in options) {
		            src = target[name]
		            copy = options[name]
	
		            if (target === copy) continue
		            if (copy === undefined) continue
	
		            if (Util.isArray(copy) || Util.isObject(copy)) {
		                if (Util.isArray(copy)) clone = src && Util.isArray(src) ? src : []
		                if (Util.isObject(copy)) clone = src && Util.isObject(src) ? src : {}
	
		                target[name] = Util.extend(clone, copy)
		            } else {
		                target[name] = copy
		            }
		        }
		    }
	
		    return target
		}
	
		Util.each = function each(obj, iterator, context) {
		    var i, key
		    if (this.type(obj) === 'number') {
		        for (i = 0; i < obj; i++) {
		            iterator(i, i)
		        }
		    } else if (obj.length === +obj.length) {
		        for (i = 0; i < obj.length; i++) {
		            if (iterator.call(context, obj[i], i, obj) === false) break
		        }
		    } else {
		        for (key in obj) {
		            if (iterator.call(context, obj[key], key, obj) === false) break
		        }
		    }
		}
	
		Util.type = function type(obj) {
		    return (obj === null || obj === undefined) ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase()
		}
	
		Util.each('String Object Array RegExp Function'.split(' '), function(value) {
		    Util['is' + value] = function(obj) {
		        return Util.type(obj) === value.toLowerCase()
		    }
		})
	
		Util.isObjectOrArray = function(value) {
		    return Util.isObject(value) || Util.isArray(value)
		}
	
		Util.isNumeric = function(value) {
		    return !isNaN(parseFloat(value)) && isFinite(value)
		}
	
		Util.keys = function(obj) {
		    var keys = [];
		    for (var key in obj) {
		        if (obj.hasOwnProperty(key)) keys.push(key)
		    }
		    return keys;
		}
		Util.values = function(obj) {
		    var values = [];
		    for (var key in obj) {
		        if (obj.hasOwnProperty(key)) values.push(obj[key])
		    }
		    return values;
		}
	
		/*
		    ### Mock.heredoc(fn)
	
		    * Mock.heredoc(fn)
	
		    以直观、安全的方式书写（多行）HTML 模板。
	
		    **使用示例**如下所示：
	
		        var tpl = Mock.heredoc(function() {
		            /*!
		        {{email}}{{age}}
		        <!-- Mock { 
		            email: '@EMAIL',
		            age: '@INT(1,100)'
		        } -->
		            *\/
		        })
		    
		    **相关阅读**
		    * [Creating multiline strings in JavaScript](http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript)、
		*/
		Util.heredoc = function heredoc(fn) {
		    // 1. 移除起始的 function(){ /*!
		    // 2. 移除末尾的 */ }
		    // 3. 移除起始和末尾的空格
		    return fn.toString()
		        .replace(/^[^\/]+\/\*!?/, '')
		        .replace(/\*\/[^\/]+$/, '')
		        .replace(/^[\s\xA0]+/, '').replace(/[\s\xA0]+$/, '') // .trim()
		}
	
		Util.noop = function() {}
	
		module.exports = Util
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
			## Parser
	
			解析数据模板（属性名部分）。
	
			* Parser.parse( name )
				
				```json
				{
					parameters: [ name, inc, range, decimal ],
					rnage: [ min , max ],
	
					min: min,
					max: max,
					count : count,
	
					decimal: decimal,
					dmin: dmin,
					dmax: dmax,
					dcount: dcount
				}
				```
		 */
	
		var Constant = __webpack_require__(2)
		var Random = __webpack_require__(5)
	
		/* jshint -W041 */
		module.exports = {
			parse: function(name) {
				name = name == undefined ? '' : (name + '')
	
				var parameters = (name || '').match(Constant.RE_KEY)
	
				var range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE)
				var min = range && range[1] && parseInt(range[1], 10) // || 1
				var max = range && range[2] && parseInt(range[2], 10) // || 1
					// repeat || min-max || 1
					// var count = range ? !range[2] && parseInt(range[1], 10) || Random.integer(min, max) : 1
				var count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined
	
				var decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE)
				var dmin = decimal && decimal[1] && parseInt(decimal[1], 10) // || 0,
				var dmax = decimal && decimal[2] && parseInt(decimal[2], 10) // || 0,
					// int || dmin-dmax || 0
				var dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined
	
				var result = {
					// 1 name, 2 inc, 3 range, 4 decimal
					parameters: parameters,
					// 1 min, 2 max
					range: range,
					min: min,
					max: max,
					// min-max
					count: count,
					// 是否有 decimal
					decimal: decimal,
					dmin: dmin,
					dmax: dmax,
					// dmin-dimax
					dcount: dcount
				}
	
				for (var r in result) {
					if (result[r] != undefined) return result
				}
	
				return {}
			}
		}
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Mock.Random
		    
		    工具类，用于生成各种随机数据。
		*/
	
		var Util = __webpack_require__(3)
	
		var Random = {
		    extend: Util.extend
		}
	
		Random.extend(__webpack_require__(6))
		Random.extend(__webpack_require__(7))
		Random.extend(__webpack_require__(8))
		Random.extend(__webpack_require__(10))
		Random.extend(__webpack_require__(13))
		Random.extend(__webpack_require__(15))
		Random.extend(__webpack_require__(16))
		Random.extend(__webpack_require__(17))
		Random.extend(__webpack_require__(14))
		Random.extend(__webpack_require__(19))
	
		module.exports = Random
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		/*
		    ## Basics
		*/
		module.exports = {
		    // 返回一个随机的布尔值。
		    boolean: function(min, max, cur) {
		        if (cur !== undefined) {
		            min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1
		            max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1
		            return Math.random() > 1.0 / (min + max) * min ? !cur : cur
		        }
	
		        return Math.random() >= 0.5
		    },
		    bool: function(min, max, cur) {
		        return this.boolean(min, max, cur)
		    },
		    // 返回一个随机的自然数（大于等于 0 的整数）。
		    natural: function(min, max) {
		        min = typeof min !== 'undefined' ? parseInt(min, 10) : 0
		        max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
		        return Math.round(Math.random() * (max - min)) + min
		    },
		    // 返回一个随机的整数。
		    integer: function(min, max) {
		        min = typeof min !== 'undefined' ? parseInt(min, 10) : -9007199254740992
		        max = typeof max !== 'undefined' ? parseInt(max, 10) : 9007199254740992 // 2^53
		        return Math.round(Math.random() * (max - min)) + min
		    },
		    int: function(min, max) {
		        return this.integer(min, max)
		    },
		    // 返回一个随机的浮点数。
		    float: function(min, max, dmin, dmax) {
		        dmin = dmin === undefined ? 0 : dmin
		        dmin = Math.max(Math.min(dmin, 17), 0)
		        dmax = dmax === undefined ? 17 : dmax
		        dmax = Math.max(Math.min(dmax, 17), 0)
		        var ret = this.integer(min, max) + '.';
		        for (var i = 0, dcount = this.natural(dmin, dmax); i < dcount; i++) {
		            ret += (
		                // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
		                (i < dcount - 1) ? this.character('number') : this.character('123456789')
		            )
		        }
		        return parseFloat(ret, 10)
		    },
		    // 返回一个随机字符。
		    character: function(pool) {
		        var pools = {
		            lower: 'abcdefghijklmnopqrstuvwxyz',
		            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		            number: '0123456789',
		            symbol: '!@#$%^&*()[]'
		        }
		        pools.alpha = pools.lower + pools.upper
		        pools['undefined'] = pools.lower + pools.upper + pools.number + pools.symbol
	
		        pool = pools[('' + pool).toLowerCase()] || pool
		        return pool.charAt(this.natural(0, pool.length - 1))
		    },
		    char: function(pool) {
		        return this.character(pool)
		    },
		    // 返回一个随机字符串。
		    string: function(pool, min, max) {
		        var len
		        switch (arguments.length) {
		            case 0: // ()
		                len = this.natural(3, 7)
		                break
		            case 1: // ( length )
		                len = pool
		                pool = undefined
		                break
		            case 2:
		                // ( pool, length )
		                if (typeof arguments[0] === 'string') {
		                    len = min
		                } else {
		                    // ( min, max )
		                    len = this.natural(pool, min)
		                    pool = undefined
		                }
		                break
		            case 3:
		                len = this.natural(min, max)
		                break
		        }
	
		        var text = ''
		        for (var i = 0; i < len; i++) {
		            text += this.character(pool)
		        }
	
		        return text
		    },
		    str: function( /*pool, min, max*/ ) {
		        return this.string.apply(this, arguments)
		    },
		    // 返回一个整型数组。
		    range: function(start, stop, step) {
		        // range( stop )
		        if (arguments.length <= 1) {
		            stop = start || 0;
		            start = 0;
		        }
		        // range( start, stop )
		        step = arguments[2] || 1;
	
		        start = +start
		        stop = +stop
		        step = +step
	
		        var len = Math.max(Math.ceil((stop - start) / step), 0);
		        var idx = 0;
		        var range = new Array(len);
	
		        while (idx < len) {
		            range[idx++] = start;
		            start += step;
		        }
	
		        return range;
		    }
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		/*
		    ## Date
		*/
		var patternLetters = {
		    yyyy: 'getFullYear',
		    yy: function(date) {
		        return ('' + date.getFullYear()).slice(2)
		    },
		    y: 'yy',
	
		    MM: function(date) {
		        var m = date.getMonth() + 1
		        return m < 10 ? '0' + m : m
		    },
		    M: function(date) {
		        return date.getMonth() + 1
		    },
	
		    dd: function(date) {
		        var d = date.getDate()
		        return d < 10 ? '0' + d : d
		    },
		    d: 'getDate',
	
		    HH: function(date) {
		        var h = date.getHours()
		        return h < 10 ? '0' + h : h
		    },
		    H: 'getHours',
		    hh: function(date) {
		        var h = date.getHours() % 12
		        return h < 10 ? '0' + h : h
		    },
		    h: function(date) {
		        return date.getHours() % 12
		    },
	
		    mm: function(date) {
		        var m = date.getMinutes()
		        return m < 10 ? '0' + m : m
		    },
		    m: 'getMinutes',
	
		    ss: function(date) {
		        var s = date.getSeconds()
		        return s < 10 ? '0' + s : s
		    },
		    s: 'getSeconds',
	
		    SS: function(date) {
		        var ms = date.getMilliseconds()
		        return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms
		    },
		    S: 'getMilliseconds',
	
		    A: function(date) {
		        return date.getHours() < 12 ? 'AM' : 'PM'
		    },
		    a: function(date) {
		        return date.getHours() < 12 ? 'am' : 'pm'
		    },
		    T: 'getTime'
		}
		module.exports = {
		    // 日期占位符集合。
		    _patternLetters: patternLetters,
		    // 日期占位符正则。
		    _rformat: new RegExp((function() {
		        var re = []
		        for (var i in patternLetters) re.push(i)
		        return '(' + re.join('|') + ')'
		    })(), 'g'),
		    // 格式化日期。
		    _formatDate: function(date, format) {
		        return format.replace(this._rformat, function creatNewSubString($0, flag) {
		            return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) :
		                patternLetters[flag] in patternLetters ? creatNewSubString($0, patternLetters[flag]) :
		                date[patternLetters[flag]]()
		        })
		    },
		    // 生成一个随机的 Date 对象。
		    _randomDate: function(min, max) { // min, max
		        min = min === undefined ? new Date(0) : min
		        max = max === undefined ? new Date() : max
		        return new Date(Math.random() * (max.getTime() - min.getTime()))
		    },
		    // 返回一个随机的日期字符串。
		    date: function(format) {
		        format = format || 'yyyy-MM-dd'
		        return this._formatDate(this._randomDate(), format)
		    },
		    // 返回一个随机的时间字符串。
		    time: function(format) {
		        format = format || 'HH:mm:ss'
		        return this._formatDate(this._randomDate(), format)
		    },
		    // 返回一个随机的日期和时间字符串。
		    datetime: function(format) {
		        format = format || 'yyyy-MM-dd HH:mm:ss'
		        return this._formatDate(this._randomDate(), format)
		    },
		    // 返回当前的日期和时间字符串。
		    now: function(unit, format) {
		        // now(unit) now(format)
		        if (arguments.length === 1) {
		            // now(format)
		            if (!/year|month|day|hour|minute|second|week/.test(unit)) {
		                format = unit
		                unit = ''
		            }
		        }
		        unit = (unit || '').toLowerCase()
		        format = format || 'yyyy-MM-dd HH:mm:ss'
	
		        var date = new Date()
	
		        /* jshint -W086 */
		        // 参考自 http://momentjs.cn/docs/#/manipulating/start-of/
		        switch (unit) {
		            case 'year':
		                date.setMonth(0)
		            case 'month':
		                date.setDate(1)
		            case 'week':
		            case 'day':
		                date.setHours(0)
		            case 'hour':
		                date.setMinutes(0)
		            case 'minute':
		                date.setSeconds(0)
		            case 'second':
		                date.setMilliseconds(0)
		        }
		        switch (unit) {
		            case 'week':
		                date.setDate(date.getDate() - date.getDay())
		        }
	
		        return this._formatDate(date, format)
		    }
		}
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(module) {/* global document  */
		/*
		    ## Image
		*/
		module.exports = {
		    // 常见的广告宽高
		    _adSize: [
		        '300x250', '250x250', '240x400', '336x280', '180x150',
		        '720x300', '468x60', '234x60', '88x31', '120x90',
		        '120x60', '120x240', '125x125', '728x90', '160x600',
		        '120x600', '300x600'
		    ],
		    // 常见的屏幕宽高
		    _screenSize: [
		        '320x200', '320x240', '640x480', '800x480', '800x480',
		        '1024x600', '1024x768', '1280x800', '1440x900', '1920x1200',
		        '2560x1600'
		    ],
		    // 常见的视频宽高
		    _videoSize: ['720x480', '768x576', '1280x720', '1920x1080'],
		    /*
		        生成一个随机的图片地址。
	
		        替代图片源
		            http://fpoimg.com/
		        参考自 
		            http://rensanning.iteye.com/blog/1933310
		            http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
		    */
		    image: function(size, background, foreground, format, text) {
		        // Random.image( size, background, foreground, text )
		        if (arguments.length === 4) {
		            text = format
		            format = undefined
		        }
		        // Random.image( size, background, text )
		        if (arguments.length === 3) {
		            text = foreground
		            foreground = undefined
		        }
		        // Random.image()
		        if (!size) size = this.pick(this._adSize)
	
		        if (background && ~background.indexOf('#')) background = background.slice(1)
		        if (foreground && ~foreground.indexOf('#')) foreground = foreground.slice(1)
	
		        // http://dummyimage.com/600x400/cc00cc/470047.png&text=hello
		        return 'http://dummyimage.com/' + size +
		            (background ? '/' + background : '') +
		            (foreground ? '/' + foreground : '') +
		            (format ? '.' + format : '') +
		            (text ? '&text=' + text : '')
		    },
		    img: function() {
		        return this.image.apply(this, arguments)
		    },
	
		    /*
		        BrandColors
		        http://brandcolors.net/
		        A collection of major brand color codes curated by Galen Gidman.
		        大牌公司的颜色集合
	
		        // 获取品牌和颜色
		        $('h2').each(function(index, item){
		            item = $(item)
		            console.log('\'' + item.text() + '\'', ':', '\'' + item.next().text() + '\'', ',')
		        })
		    */
		    _brandColors: {
		        '4ormat': '#fb0a2a',
		        '500px': '#02adea',
		        'About.me (blue)': '#00405d',
		        'About.me (yellow)': '#ffcc33',
		        'Addvocate': '#ff6138',
		        'Adobe': '#ff0000',
		        'Aim': '#fcd20b',
		        'Amazon': '#e47911',
		        'Android': '#a4c639',
		        'Angie\'s List': '#7fbb00',
		        'AOL': '#0060a3',
		        'Atlassian': '#003366',
		        'Behance': '#053eff',
		        'Big Cartel': '#97b538',
		        'bitly': '#ee6123',
		        'Blogger': '#fc4f08',
		        'Boeing': '#0039a6',
		        'Booking.com': '#003580',
		        'Carbonmade': '#613854',
		        'Cheddar': '#ff7243',
		        'Code School': '#3d4944',
		        'Delicious': '#205cc0',
		        'Dell': '#3287c1',
		        'Designmoo': '#e54a4f',
		        'Deviantart': '#4e6252',
		        'Designer News': '#2d72da',
		        'Devour': '#fd0001',
		        'DEWALT': '#febd17',
		        'Disqus (blue)': '#59a3fc',
		        'Disqus (orange)': '#db7132',
		        'Dribbble': '#ea4c89',
		        'Dropbox': '#3d9ae8',
		        'Drupal': '#0c76ab',
		        'Dunked': '#2a323a',
		        'eBay': '#89c507',
		        'Ember': '#f05e1b',
		        'Engadget': '#00bdf6',
		        'Envato': '#528036',
		        'Etsy': '#eb6d20',
		        'Evernote': '#5ba525',
		        'Fab.com': '#dd0017',
		        'Facebook': '#3b5998',
		        'Firefox': '#e66000',
		        'Flickr (blue)': '#0063dc',
		        'Flickr (pink)': '#ff0084',
		        'Forrst': '#5b9a68',
		        'Foursquare': '#25a0ca',
		        'Garmin': '#007cc3',
		        'GetGlue': '#2d75a2',
		        'Gimmebar': '#f70078',
		        'GitHub': '#171515',
		        'Google Blue': '#0140ca',
		        'Google Green': '#16a61e',
		        'Google Red': '#dd1812',
		        'Google Yellow': '#fcca03',
		        'Google+': '#dd4b39',
		        'Grooveshark': '#f77f00',
		        'Groupon': '#82b548',
		        'Hacker News': '#ff6600',
		        'HelloWallet': '#0085ca',
		        'Heroku (light)': '#c7c5e6',
		        'Heroku (dark)': '#6567a5',
		        'HootSuite': '#003366',
		        'Houzz': '#73ba37',
		        'HTML5': '#ec6231',
		        'IKEA': '#ffcc33',
		        'IMDb': '#f3ce13',
		        'Instagram': '#3f729b',
		        'Intel': '#0071c5',
		        'Intuit': '#365ebf',
		        'Kickstarter': '#76cc1e',
		        'kippt': '#e03500',
		        'Kodery': '#00af81',
		        'LastFM': '#c3000d',
		        'LinkedIn': '#0e76a8',
		        'Livestream': '#cf0005',
		        'Lumo': '#576396',
		        'Mixpanel': '#a086d3',
		        'Meetup': '#e51937',
		        'Nokia': '#183693',
		        'NVIDIA': '#76b900',
		        'Opera': '#cc0f16',
		        'Path': '#e41f11',
		        'PayPal (dark)': '#1e477a',
		        'PayPal (light)': '#3b7bbf',
		        'Pinboard': '#0000e6',
		        'Pinterest': '#c8232c',
		        'PlayStation': '#665cbe',
		        'Pocket': '#ee4056',
		        'Prezi': '#318bff',
		        'Pusha': '#0f71b4',
		        'Quora': '#a82400',
		        'QUOTE.fm': '#66ceff',
		        'Rdio': '#008fd5',
		        'Readability': '#9c0000',
		        'Red Hat': '#cc0000',
		        'Resource': '#7eb400',
		        'Rockpack': '#0ba6ab',
		        'Roon': '#62b0d9',
		        'RSS': '#ee802f',
		        'Salesforce': '#1798c1',
		        'Samsung': '#0c4da2',
		        'Shopify': '#96bf48',
		        'Skype': '#00aff0',
		        'Snagajob': '#f47a20',
		        'Softonic': '#008ace',
		        'SoundCloud': '#ff7700',
		        'Space Box': '#f86960',
		        'Spotify': '#81b71a',
		        'Sprint': '#fee100',
		        'Squarespace': '#121212',
		        'StackOverflow': '#ef8236',
		        'Staples': '#cc0000',
		        'Status Chart': '#d7584f',
		        'Stripe': '#008cdd',
		        'StudyBlue': '#00afe1',
		        'StumbleUpon': '#f74425',
		        'T-Mobile': '#ea0a8e',
		        'Technorati': '#40a800',
		        'The Next Web': '#ef4423',
		        'Treehouse': '#5cb868',
		        'Trulia': '#5eab1f',
		        'Tumblr': '#34526f',
		        'Twitch.tv': '#6441a5',
		        'Twitter': '#00acee',
		        'TYPO3': '#ff8700',
		        'Ubuntu': '#dd4814',
		        'Ustream': '#3388ff',
		        'Verizon': '#ef1d1d',
		        'Vimeo': '#86c9ef',
		        'Vine': '#00a478',
		        'Virb': '#06afd8',
		        'Virgin Media': '#cc0000',
		        'Wooga': '#5b009c',
		        'WordPress (blue)': '#21759b',
		        'WordPress (orange)': '#d54e21',
		        'WordPress (grey)': '#464646',
		        'Wunderlist': '#2b88d9',
		        'XBOX': '#9bc848',
		        'XING': '#126567',
		        'Yahoo!': '#720e9e',
		        'Yandex': '#ffcc00',
		        'Yelp': '#c41200',
		        'YouTube': '#c4302b',
		        'Zalongo': '#5498dc',
		        'Zendesk': '#78a300',
		        'Zerply': '#9dcc7a',
		        'Zootool': '#5e8b1d'
		    },
		    _brandNames: function() {
		        var brands = [];
		        for (var b in this._brandColors) {
		            brands.push(b)
		        }
		        return brands
		    },
		    /*
		        生成一段随机的 Base64 图片编码。
	
		        https://github.com/imsky/holder
		        Holder renders image placeholders entirely on the client side.
	
		        dataImageHolder: function(size) {
		            return 'holder.js/' + size
		        },
		    */
		    dataImage: function(size, text) {
		        var canvas
		        if (typeof document !== 'undefined') {
		            canvas = document.createElement('canvas')
		        } else {
		            /*
		                https://github.com/Automattic/node-canvas
		                    npm install canvas --save
		                安装问题：
		                * http://stackoverflow.com/questions/22953206/gulp-issues-with-cario-install-command-not-found-when-trying-to-installing-canva
		                * https://github.com/Automattic/node-canvas/issues/415
		                * https://github.com/Automattic/node-canvas/wiki/_pages
	
		                PS：node-canvas 的安装过程实在是太繁琐了，所以不放入 package.json 的 dependencies。
		             */
		            var Canvas = module.require('canvas')
		            canvas = new Canvas()
		        }
	
		        var ctx = canvas && canvas.getContext && canvas.getContext("2d")
		        if (!canvas || !ctx) return ''
	
		        if (!size) size = this.pick(this._adSize)
		        text = text !== undefined ? text : size
	
		        size = size.split('x')
	
		        var width = parseInt(size[0], 10),
		            height = parseInt(size[1], 10),
		            background = this._brandColors[this.pick(this._brandNames())],
		            foreground = '#FFF',
		            text_height = 14,
		            font = 'sans-serif';
	
		        canvas.width = width
		        canvas.height = height
		        ctx.textAlign = 'center'
		        ctx.textBaseline = 'middle'
		        ctx.fillStyle = background
		        ctx.fillRect(0, 0, width, height)
		        ctx.fillStyle = foreground
		        ctx.font = 'bold ' + text_height + 'px ' + font
		        ctx.fillText(text, (width / 2), (height / 2), width)
		        return canvas.toDataURL('image/png')
		    }
		}
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Color
	
		    http://llllll.li/randomColor/
		        A color generator for JavaScript.
		        randomColor generates attractive colors by default. More specifically, randomColor produces bright colors with a reasonably high saturation. This makes randomColor particularly useful for data visualizations and generative art.
	
		    http://randomcolour.com/
		        var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
		        bg_colour = "#" + ("000000" + bg_colour).slice(-6);
		        document.bgColor = bg_colour;
		    
		    http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
		        Creating random colors is actually more difficult than it seems. The randomness itself is easy, but aesthetically pleasing randomness is more difficult.
		        https://github.com/devongovett/color-generator
	
		    http://www.paulirish.com/2009/random-hex-color-code-snippets/
		        Random Hex Color Code Generator in JavaScript
	
		    http://chancejs.com/#color
		        chance.color()
		        // => '#79c157'
		        chance.color({format: 'hex'})
		        // => '#d67118'
		        chance.color({format: 'shorthex'})
		        // => '#60f'
		        chance.color({format: 'rgb'})
		        // => 'rgb(110,52,164)'
	
		    http://tool.c7sky.com/webcolor
		        网页设计常用色彩搭配表
		    
		    https://github.com/One-com/one-color
		        An OO-based JavaScript color parser/computation toolkit with support for RGB, HSV, HSL, CMYK, and alpha channels.
		        API 很赞
	
		    https://github.com/harthur/color
		        JavaScript color conversion and manipulation library
	
		    https://github.com/leaverou/css-colors
		        Share & convert CSS colors
		    http://leaverou.github.io/css-colors/#slategray
		        Type a CSS color keyword, #hex, hsl(), rgba(), whatever:
	
		    色调 hue
		        http://baike.baidu.com/view/23368.htm
		        色调指的是一幅画中画面色彩的总体倾向，是大的色彩效果。
		    饱和度 saturation
		        http://baike.baidu.com/view/189644.htm
		        饱和度是指色彩的鲜艳程度，也称色彩的纯度。饱和度取决于该色中含色成分和消色成分（灰色）的比例。含色成分越大，饱和度越大；消色成分越大，饱和度越小。
		    亮度 brightness
		        http://baike.baidu.com/view/34773.htm
		        亮度是指发光体（反光体）表面发光（反光）强弱的物理量。
		    照度 luminosity
		        物体被照亮的程度,采用单位面积所接受的光通量来表示,表示单位为勒[克斯](Lux,lx) ,即 1m / m2 。
	
		    http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
		        var letters = '0123456789ABCDEF'.split('')
		        var color = '#'
		        for (var i = 0; i < 6; i++) {
		            color += letters[Math.floor(Math.random() * 16)]
		        }
		        return color
		    
		        // 随机生成一个无脑的颜色，格式为 '#RRGGBB'。
		        // _brainlessColor()
		        var color = Math.floor(
		            Math.random() *
		            (16 * 16 * 16 * 16 * 16 * 16 - 1)
		        ).toString(16)
		        color = "#" + ("000000" + color).slice(-6)
		        return color.toUpperCase()
		*/
	
		var Convert = __webpack_require__(11)
		var DICT = __webpack_require__(12)
	
		module.exports = {
		    // 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。
		    color: function(name) {
		        if (name || DICT[name]) return DICT[name].nicer
		        return this.hex()
		    },
		    // #DAC0DE
		    hex: function() {
		        var hsv = this._goldenRatioColor()
		        var rgb = Convert.hsv2rgb(hsv)
		        var hex = Convert.rgb2hex(rgb[0], rgb[1], rgb[2])
		        return hex
		    },
		    // rgb(128,255,255)
		    rgb: function() {
		        var hsv = this._goldenRatioColor()
		        var rgb = Convert.hsv2rgb(hsv)
		        return 'rgb(' +
		            parseInt(rgb[0], 10) + ', ' +
		            parseInt(rgb[1], 10) + ', ' +
		            parseInt(rgb[2], 10) + ')'
		    },
		    // rgba(128,255,255,0.3)
		    rgba: function() {
		        var hsv = this._goldenRatioColor()
		        var rgb = Convert.hsv2rgb(hsv)
		        return 'rgba(' +
		            parseInt(rgb[0], 10) + ', ' +
		            parseInt(rgb[1], 10) + ', ' +
		            parseInt(rgb[2], 10) + ', ' +
		            Math.random().toFixed(2) + ')'
		    },
		    // hsl(300,80%,90%)
		    hsl: function() {
		        var hsv = this._goldenRatioColor()
		        var hsl = Convert.hsv2hsl(hsv)
		        return 'hsl(' +
		            parseInt(hsl[0], 10) + ', ' +
		            parseInt(hsl[1], 10) + ', ' +
		            parseInt(hsl[2], 10) + ')'
		    },
		    // http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
		    // https://github.com/devongovett/color-generator/blob/master/index.js
		    // 随机生成一个有吸引力的颜色。
		    _goldenRatioColor: function(saturation, value) {
		        this._goldenRatio = 0.618033988749895
		        this._hue = this._hue || Math.random()
		        this._hue += this._goldenRatio
		        this._hue %= 1
	
		        if (typeof saturation !== "number") saturation = 0.5;
		        if (typeof value !== "number") value = 0.95;
	
		        return [
		            this._hue * 360,
		            saturation * 100,
		            value * 100
		        ]
		    }
		}
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		/*
		    ## Color Convert
	
		    http://blog.csdn.net/idfaya/article/details/6770414
		        颜色空间RGB与HSV(HSL)的转换
		*/
		// https://github.com/harthur/color-convert/blob/master/conversions.js
		module.exports = {
			rgb2hsl: function rgb2hsl(rgb) {
				var r = rgb[0] / 255,
					g = rgb[1] / 255,
					b = rgb[2] / 255,
					min = Math.min(r, g, b),
					max = Math.max(r, g, b),
					delta = max - min,
					h, s, l;
	
				if (max == min)
					h = 0;
				else if (r == max)
					h = (g - b) / delta;
				else if (g == max)
					h = 2 + (b - r) / delta;
				else if (b == max)
					h = 4 + (r - g) / delta;
	
				h = Math.min(h * 60, 360);
	
				if (h < 0)
					h += 360;
	
				l = (min + max) / 2;
	
				if (max == min)
					s = 0;
				else if (l <= 0.5)
					s = delta / (max + min);
				else
					s = delta / (2 - max - min);
	
				return [h, s * 100, l * 100];
			},
			rgb2hsv: function rgb2hsv(rgb) {
				var r = rgb[0],
					g = rgb[1],
					b = rgb[2],
					min = Math.min(r, g, b),
					max = Math.max(r, g, b),
					delta = max - min,
					h, s, v;
	
				if (max === 0)
					s = 0;
				else
					s = (delta / max * 1000) / 10;
	
				if (max == min)
					h = 0;
				else if (r == max)
					h = (g - b) / delta;
				else if (g == max)
					h = 2 + (b - r) / delta;
				else if (b == max)
					h = 4 + (r - g) / delta;
	
				h = Math.min(h * 60, 360);
	
				if (h < 0)
					h += 360;
	
				v = ((max / 255) * 1000) / 10;
	
				return [h, s, v];
			},
			hsl2rgb: function hsl2rgb(hsl) {
				var h = hsl[0] / 360,
					s = hsl[1] / 100,
					l = hsl[2] / 100,
					t1, t2, t3, rgb, val;
	
				if (s === 0) {
					val = l * 255;
					return [val, val, val];
				}
	
				if (l < 0.5)
					t2 = l * (1 + s);
				else
					t2 = l + s - l * s;
				t1 = 2 * l - t2;
	
				rgb = [0, 0, 0];
				for (var i = 0; i < 3; i++) {
					t3 = h + 1 / 3 * -(i - 1);
					if (t3 < 0) t3++;
					if (t3 > 1) t3--;
	
					if (6 * t3 < 1)
						val = t1 + (t2 - t1) * 6 * t3;
					else if (2 * t3 < 1)
						val = t2;
					else if (3 * t3 < 2)
						val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
					else
						val = t1;
	
					rgb[i] = val * 255;
				}
	
				return rgb;
			},
			hsl2hsv: function hsl2hsv(hsl) {
				var h = hsl[0],
					s = hsl[1] / 100,
					l = hsl[2] / 100,
					sv, v;
				l *= 2;
				s *= (l <= 1) ? l : 2 - l;
				v = (l + s) / 2;
				sv = (2 * s) / (l + s);
				return [h, sv * 100, v * 100];
			},
			hsv2rgb: function hsv2rgb(hsv) {
				var h = hsv[0] / 60
				var s = hsv[1] / 100
				var v = hsv[2] / 100
				var hi = Math.floor(h) % 6
	
				var f = h - Math.floor(h)
				var p = 255 * v * (1 - s)
				var q = 255 * v * (1 - (s * f))
				var t = 255 * v * (1 - (s * (1 - f)))
	
				v = 255 * v
	
				switch (hi) {
					case 0:
						return [v, t, p]
					case 1:
						return [q, v, p]
					case 2:
						return [p, v, t]
					case 3:
						return [p, q, v]
					case 4:
						return [t, p, v]
					case 5:
						return [v, p, q]
				}
			},
			hsv2hsl: function hsv2hsl(hsv) {
				var h = hsv[0],
					s = hsv[1] / 100,
					v = hsv[2] / 100,
					sl, l;
	
				l = (2 - s) * v;
				sl = s * v;
				sl /= (l <= 1) ? l : 2 - l;
				l /= 2;
				return [h, sl * 100, l * 100];
			},
			// http://www.140byt.es/keywords/color
			rgb2hex: function(
				a, // red, as a number from 0 to 255
				b, // green, as a number from 0 to 255
				c // blue, as a number from 0 to 255
			) {
				return "#" + ((256 + a << 8 | b) << 8 | c).toString(16).slice(1)
			},
			hex2rgb: function(
				a // take a "#xxxxxx" hex string,
			) {
				a = '0x' + a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&') | 0;
				return [a >> 16, a >> 8 & 255, a & 255]
			}
		}
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		/*
		    ## Color 字典数据
	
		    字典数据来源 [A nicer color palette for the web](http://clrs.cc/)
		*/
		module.exports = {
		    // name value nicer
		    navy: {
		        value: '#000080',
		        nicer: '#001F3F'
		    },
		    blue: {
		        value: '#0000ff',
		        nicer: '#0074D9'
		    },
		    aqua: {
		        value: '#00ffff',
		        nicer: '#7FDBFF'
		    },
		    teal: {
		        value: '#008080',
		        nicer: '#39CCCC'
		    },
		    olive: {
		        value: '#008000',
		        nicer: '#3D9970'
		    },
		    green: {
		        value: '#008000',
		        nicer: '#2ECC40'
		    },
		    lime: {
		        value: '#00ff00',
		        nicer: '#01FF70'
		    },
		    yellow: {
		        value: '#ffff00',
		        nicer: '#FFDC00'
		    },
		    orange: {
		        value: '#ffa500',
		        nicer: '#FF851B'
		    },
		    red: {
		        value: '#ff0000',
		        nicer: '#FF4136'
		    },
		    maroon: {
		        value: '#800000',
		        nicer: '#85144B'
		    },
		    fuchsia: {
		        value: '#ff00ff',
		        nicer: '#F012BE'
		    },
		    purple: {
		        value: '#800080',
		        nicer: '#B10DC9'
		    },
		    silver: {
		        value: '#c0c0c0',
		        nicer: '#DDDDDD'
		    },
		    gray: {
		        value: '#808080',
		        nicer: '#AAAAAA'
		    },
		    black: {
		        value: '#000000',
		        nicer: '#111111'
		    },
		    white: {
		        value: '#FFFFFF',
		        nicer: '#FFFFFF'
		    }
		}
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Text
	
		    http://www.lipsum.com/
		*/
		var Basic = __webpack_require__(6)
		var Helper = __webpack_require__(14)
	
		function range(defaultMin, defaultMax, min, max) {
		    return min === undefined ? Basic.natural(defaultMin, defaultMax) : // ()
		        max === undefined ? min : // ( len )
		        Basic.natural(parseInt(min, 10), parseInt(max, 10)) // ( min, max )
		}
	
		module.exports = {
		    // 随机生成一段文本。
		    paragraph: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.sentence())
		        }
		        return result.join(' ')
		    },
		    // 
		    cparagraph: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.csentence())
		        }
		        return result.join('')
		    },
		    // 随机生成一个句子，第一个单词的首字母大写。
		    sentence: function(min, max) {
		        var len = range(12, 18, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.word())
		        }
		        return Helper.capitalize(result.join(' ')) + '.'
		    },
		    // 随机生成一个中文句子。
		    csentence: function(min, max) {
		        var len = range(12, 18, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.cword())
		        }
	
		        return result.join('') + '。'
		    },
		    // 随机生成一个单词。
		    word: function(min, max) {
		        var len = range(3, 10, min, max)
		        var result = '';
		        for (var i = 0; i < len; i++) {
		            result += Basic.character('lower')
		        }
		        return result
		    },
		    // 随机生成一个或多个汉字。
		    cword: function(pool, min, max) {
		        // 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
		        var DICT_KANZI = '的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞'
	
		        var len
		        switch (arguments.length) {
		            case 0: // ()
		                pool = DICT_KANZI
		                len = 1
		                break
		            case 1: // ( pool )
		                if (typeof arguments[0] === 'string') {
		                    len = 1
		                } else {
		                    // ( length )
		                    len = pool
		                    pool = DICT_KANZI
		                }
		                break
		            case 2:
		                // ( pool, length )
		                if (typeof arguments[0] === 'string') {
		                    len = min
		                } else {
		                    // ( min, max )
		                    len = this.natural(pool, min)
		                    pool = DICT_KANZI
		                }
		                break
		            case 3:
		                len = this.natural(min, max)
		                break
		        }
	
		        var result = ''
		        for (var i = 0; i < len; i++) {
		            result += pool.charAt(this.natural(0, pool.length - 1))
		        }
		        return result
		    },
		    // 随机生成一句标题，其中每个单词的首字母大写。
		    title: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.capitalize(this.word()))
		        }
		        return result.join(' ')
		    },
		    // 随机生成一句中文标题。
		    ctitle: function(min, max) {
		        var len = range(3, 7, min, max)
		        var result = []
		        for (var i = 0; i < len; i++) {
		            result.push(this.cword())
		        }
		        return result.join('')
		    }
		}
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Helpers
		*/
	
		var Util = __webpack_require__(3)
	
		module.exports = {
			// 把字符串的第一个字母转换为大写。
			capitalize: function(word) {
				return (word + '').charAt(0).toUpperCase() + (word + '').substr(1)
			},
			// 把字符串转换为大写。
			upper: function(str) {
				return (str + '').toUpperCase()
			},
			// 把字符串转换为小写。
			lower: function(str) {
				return (str + '').toLowerCase()
			},
			// 从数组中随机选取一个元素，并返回。
			pick: function pick(arr, min, max) {
				// pick( item1, item2 ... )
				if (!Util.isArray(arr)) {
					arr = [].slice.call(arguments)
					min = 1
					max = 1
				} else {
					// pick( [ item1, item2 ... ] )
					if (min === undefined) min = 1
	
					// pick( [ item1, item2 ... ], count )
					if (max === undefined) max = min
				}
	
				if (min === 1 && max === 1) return arr[this.natural(0, arr.length - 1)]
	
				// pick( [ item1, item2 ... ], min, max )
				return this.shuffle(arr, min, max)
	
				// 通过参数个数判断方法签名，扩展性太差！#90
				// switch (arguments.length) {
				// 	case 1:
				// 		// pick( [ item1, item2 ... ] )
				// 		return arr[this.natural(0, arr.length - 1)]
				// 	case 2:
				// 		// pick( [ item1, item2 ... ], count )
				// 		max = min
				// 			/* falls through */
				// 	case 3:
				// 		// pick( [ item1, item2 ... ], min, max )
				// 		return this.shuffle(arr, min, max)
				// }
			},
			/*
			    打乱数组中元素的顺序，并返回。
			    Given an array, scramble the order and return it.
	
			    其他的实现思路：
			        // https://code.google.com/p/jslibs/wiki/JavascriptTips
			        result = result.sort(function() {
			            return Math.random() - 0.5
			        })
			*/
			shuffle: function shuffle(arr, min, max) {
				arr = arr || []
				var old = arr.slice(0),
					result = [],
					index = 0,
					length = old.length;
				for (var i = 0; i < length; i++) {
					index = this.natural(0, old.length - 1)
					result.push(old[index])
					old.splice(index, 1)
				}
				switch (arguments.length) {
					case 0:
					case 1:
						return result
					case 2:
						max = min
							/* falls through */
					case 3:
						min = parseInt(min, 10)
						max = parseInt(max, 10)
						return result.slice(0, this.natural(min, max))
				}
			},
			/*
			    * Random.order(item, item)
			    * Random.order([item, item ...])
	
			    顺序获取数组中的元素
	
			    [JSON导入数组支持数组数据录入](https://github.com/thx/RAP/issues/22)
	
			    不支持单独调用！
			*/
			order: function order(array) {
				order.cache = order.cache || {}
	
				if (arguments.length > 1) array = [].slice.call(arguments, 0)
	
				// options.context.path/templatePath
				var options = order.options
				var templatePath = options.context.templatePath.join('.')
	
				var cache = (
					order.cache[templatePath] = order.cache[templatePath] || {
						index: 0,
						array: array
					}
				)
	
				return cache.array[cache.index++ % cache.array.length]
			}
		}
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		/*
		    ## Name
	
		    [Beyond the Top 1000 Names](http://www.ssa.gov/oact/babynames/limits.html)
		*/
		module.exports = {
			// 随机生成一个常见的英文名。
			first: function() {
				var names = [
					// male
					"James", "John", "Robert", "Michael", "William",
					"David", "Richard", "Charles", "Joseph", "Thomas",
					"Christopher", "Daniel", "Paul", "Mark", "Donald",
					"George", "Kenneth", "Steven", "Edward", "Brian",
					"Ronald", "Anthony", "Kevin", "Jason", "Matthew",
					"Gary", "Timothy", "Jose", "Larry", "Jeffrey",
					"Frank", "Scott", "Eric"
				].concat([
					// female
					"Mary", "Patricia", "Linda", "Barbara", "Elizabeth",
					"Jennifer", "Maria", "Susan", "Margaret", "Dorothy",
					"Lisa", "Nancy", "Karen", "Betty", "Helen",
					"Sandra", "Donna", "Carol", "Ruth", "Sharon",
					"Michelle", "Laura", "Sarah", "Kimberly", "Deborah",
					"Jessica", "Shirley", "Cynthia", "Angela", "Melissa",
					"Brenda", "Amy", "Anna"
				])
				return this.pick(names)
					// or this.capitalize(this.word())
			},
			// 随机生成一个常见的英文姓。
			last: function() {
				var names = [
					"Smith", "Johnson", "Williams", "Brown", "Jones",
					"Miller", "Davis", "Garcia", "Rodriguez", "Wilson",
					"Martinez", "Anderson", "Taylor", "Thomas", "Hernandez",
					"Moore", "Martin", "Jackson", "Thompson", "White",
					"Lopez", "Lee", "Gonzalez", "Harris", "Clark",
					"Lewis", "Robinson", "Walker", "Perez", "Hall",
					"Young", "Allen"
				]
				return this.pick(names)
					// or this.capitalize(this.word())
			},
			// 随机生成一个常见的英文姓名。
			name: function(middle) {
				return this.first() + ' ' +
					(middle ? this.first() + ' ' : '') +
					this.last()
			},
			/*
			    随机生成一个常见的中文姓。
			    [世界常用姓氏排行](http://baike.baidu.com/view/1719115.htm)
			    [玄派网 - 网络小说创作辅助平台](http://xuanpai.sinaapp.com/)
			 */
			cfirst: function() {
				var names = (
					'王 李 张 刘 陈 杨 赵 黄 周 吴 ' +
					'徐 孙 胡 朱 高 林 何 郭 马 罗 ' +
					'梁 宋 郑 谢 韩 唐 冯 于 董 萧 ' +
					'程 曹 袁 邓 许 傅 沈 曾 彭 吕 ' +
					'苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 ' +
					'余 潘 杜 戴 夏 锺 汪 田 任 姜 ' +
					'范 方 石 姚 谭 廖 邹 熊 金 陆 ' +
					'郝 孔 白 崔 康 毛 邱 秦 江 史 ' +
					'顾 侯 邵 孟 龙 万 段 雷 钱 汤 ' +
					'尹 黎 易 常 武 乔 贺 赖 龚 文'
				).split(' ')
				return this.pick(names)
			},
			/*
			    随机生成一个常见的中文名。
			    [中国最常见名字前50名_三九算命网](http://www.name999.net/xingming/xingshi/20131004/48.html)
			 */
			clast: function() {
				var names = (
					'伟 芳 娜 秀英 敏 静 丽 强 磊 军 ' +
					'洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 ' +
					'平 刚 桂英'
				).split(' ')
				return this.pick(names)
			},
			// 随机生成一个常见的中文姓名。
			cname: function() {
				return this.cfirst() + this.clast()
			}
		}
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		/*
		    ## Web
		*/
		module.exports = {
		    /*
		        随机生成一个 URL。
	
		        [URL 规范](http://www.w3.org/Addressing/URL/url-spec.txt)
		            http                    Hypertext Transfer Protocol 
		            ftp                     File Transfer protocol 
		            gopher                  The Gopher protocol 
		            mailto                  Electronic mail address 
		            mid                     Message identifiers for electronic mail 
		            cid                     Content identifiers for MIME body part 
		            news                    Usenet news 
		            nntp                    Usenet news for local NNTP access only 
		            prospero                Access using the prospero protocols 
		            telnet rlogin tn3270    Reference to interactive sessions
		            wais                    Wide Area Information Servers 
		    */
		    url: function(protocol, host) {
		        return (protocol || this.protocol()) + '://' + // protocol?
		            (host || this.domain()) + // host?
		            '/' + this.word()
		    },
		    // 随机生成一个 URL 协议。
		    protocol: function() {
		        return this.pick(
		            // 协议簇
		            'http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais'.split(' ')
		        )
		    },
		    // 随机生成一个域名。
		    domain: function(tld) {
		        return this.word() + '.' + (tld || this.tld())
		    },
		    /*
		        随机生成一个顶级域名。
		        国际顶级域名 international top-level domain-names, iTLDs
		        国家顶级域名 national top-level domainnames, nTLDs
		        [域名后缀大全](http://www.163ns.com/zixun/post/4417.html)
		    */
		    tld: function() { // Top Level Domain
		        return this.pick(
		            (
		                // 域名后缀
		                'com net org edu gov int mil cn ' +
		                // 国内域名
		                'com.cn net.cn gov.cn org.cn ' +
		                // 中文国内域名
		                '中国 中国互联.公司 中国互联.网络 ' +
		                // 新国际域名
		                'tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ' +
		                // 世界各国域名后缀
		                'ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw'
		            ).split(' ')
		        )
		    },
		    // 随机生成一个邮件地址。
		    email: function(domain) {
		        return this.character('lower') + '.' + this.word() + '@' +
		            (
		                domain ||
		                (this.word() + '.' + this.tld())
		            )
		            // return this.character('lower') + '.' + this.last().toLowerCase() + '@' + this.last().toLowerCase() + '.' + this.tld()
		            // return this.word() + '@' + (domain || this.domain())
		    },
		    // 随机生成一个 IP 地址。
		    ip: function() {
		        return this.natural(0, 255) + '.' +
		            this.natural(0, 255) + '.' +
		            this.natural(0, 255) + '.' +
		            this.natural(0, 255)
		    }
		}
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Address
		*/
	
		var DICT = __webpack_require__(18)
		var REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北']
	
		module.exports = {
		    // 随机生成一个大区。
		    region: function() {
		        return this.pick(REGION)
		    },
		    // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
		    province: function() {
		        return this.pick(DICT).name
		    },
		    // 随机生成一个（中国）市。
		    city: function(prefix) {
		        var province = this.pick(DICT)
		        var city = this.pick(province.children)
		        return prefix ? [province.name, city.name].join(' ') : city.name
		    },
		    // 随机生成一个（中国）县。
		    county: function(prefix) {
		        var province = this.pick(DICT)
		        var city = this.pick(province.children)
		        var county = this.pick(city.children) || {
		            name: '-'
		        }
		        return prefix ? [province.name, city.name, county.name].join(' ') : county.name
		    },
		    // 随机生成一个邮政编码（六位数字）。
		    zip: function(len) {
		        var zip = ''
		        for (var i = 0; i < (len || 6); i++) zip += this.natural(0, 9)
		        return zip
		    }
	
		    // address: function() {},
		    // phone: function() {},
		    // areacode: function() {},
		    // street: function() {},
		    // street_suffixes: function() {},
		    // street_suffix: function() {},
		    // states: function() {},
		    // state: function() {},
		}
	
	/***/ },
	/* 18 */
	/***/ function(module, exports) {
	
		/*
		    ## Address 字典数据
	
		    字典数据来源 http://www.atatech.org/articles/30028?rnd=254259856
	
		    国标 省（市）级行政区划码表
	
		    华北   北京市 天津市 河北省 山西省 内蒙古自治区
		    东北   辽宁省 吉林省 黑龙江省
		    华东   上海市 江苏省 浙江省 安徽省 福建省 江西省 山东省
		    华南   广东省 广西壮族自治区 海南省
		    华中   河南省 湖北省 湖南省
		    西南   重庆市 四川省 贵州省 云南省 西藏自治区
		    西北   陕西省 甘肃省 青海省 宁夏回族自治区 新疆维吾尔自治区
		    港澳台 香港特别行政区 澳门特别行政区 台湾省
		    
		    **排序**
		    
		    ```js
		    var map = {}
		    _.each(_.keys(REGIONS),function(id){
		      map[id] = REGIONS[ID]
		    })
		    JSON.stringify(map)
		    ```
		*/
		var DICT = {
		    "110000": "北京",
		    "110100": "北京市",
		    "110101": "东城区",
		    "110102": "西城区",
		    "110105": "朝阳区",
		    "110106": "丰台区",
		    "110107": "石景山区",
		    "110108": "海淀区",
		    "110109": "门头沟区",
		    "110111": "房山区",
		    "110112": "通州区",
		    "110113": "顺义区",
		    "110114": "昌平区",
		    "110115": "大兴区",
		    "110116": "怀柔区",
		    "110117": "平谷区",
		    "110228": "密云县",
		    "110229": "延庆县",
		    "110230": "其它区",
		    "120000": "天津",
		    "120100": "天津市",
		    "120101": "和平区",
		    "120102": "河东区",
		    "120103": "河西区",
		    "120104": "南开区",
		    "120105": "河北区",
		    "120106": "红桥区",
		    "120110": "东丽区",
		    "120111": "西青区",
		    "120112": "津南区",
		    "120113": "北辰区",
		    "120114": "武清区",
		    "120115": "宝坻区",
		    "120116": "滨海新区",
		    "120221": "宁河县",
		    "120223": "静海县",
		    "120225": "蓟县",
		    "120226": "其它区",
		    "130000": "河北省",
		    "130100": "石家庄市",
		    "130102": "长安区",
		    "130103": "桥东区",
		    "130104": "桥西区",
		    "130105": "新华区",
		    "130107": "井陉矿区",
		    "130108": "裕华区",
		    "130121": "井陉县",
		    "130123": "正定县",
		    "130124": "栾城县",
		    "130125": "行唐县",
		    "130126": "灵寿县",
		    "130127": "高邑县",
		    "130128": "深泽县",
		    "130129": "赞皇县",
		    "130130": "无极县",
		    "130131": "平山县",
		    "130132": "元氏县",
		    "130133": "赵县",
		    "130181": "辛集市",
		    "130182": "藁城市",
		    "130183": "晋州市",
		    "130184": "新乐市",
		    "130185": "鹿泉市",
		    "130186": "其它区",
		    "130200": "唐山市",
		    "130202": "路南区",
		    "130203": "路北区",
		    "130204": "古冶区",
		    "130205": "开平区",
		    "130207": "丰南区",
		    "130208": "丰润区",
		    "130223": "滦县",
		    "130224": "滦南县",
		    "130225": "乐亭县",
		    "130227": "迁西县",
		    "130229": "玉田县",
		    "130230": "曹妃甸区",
		    "130281": "遵化市",
		    "130283": "迁安市",
		    "130284": "其它区",
		    "130300": "秦皇岛市",
		    "130302": "海港区",
		    "130303": "山海关区",
		    "130304": "北戴河区",
		    "130321": "青龙满族自治县",
		    "130322": "昌黎县",
		    "130323": "抚宁县",
		    "130324": "卢龙县",
		    "130398": "其它区",
		    "130400": "邯郸市",
		    "130402": "邯山区",
		    "130403": "丛台区",
		    "130404": "复兴区",
		    "130406": "峰峰矿区",
		    "130421": "邯郸县",
		    "130423": "临漳县",
		    "130424": "成安县",
		    "130425": "大名县",
		    "130426": "涉县",
		    "130427": "磁县",
		    "130428": "肥乡县",
		    "130429": "永年县",
		    "130430": "邱县",
		    "130431": "鸡泽县",
		    "130432": "广平县",
		    "130433": "馆陶县",
		    "130434": "魏县",
		    "130435": "曲周县",
		    "130481": "武安市",
		    "130482": "其它区",
		    "130500": "邢台市",
		    "130502": "桥东区",
		    "130503": "桥西区",
		    "130521": "邢台县",
		    "130522": "临城县",
		    "130523": "内丘县",
		    "130524": "柏乡县",
		    "130525": "隆尧县",
		    "130526": "任县",
		    "130527": "南和县",
		    "130528": "宁晋县",
		    "130529": "巨鹿县",
		    "130530": "新河县",
		    "130531": "广宗县",
		    "130532": "平乡县",
		    "130533": "威县",
		    "130534": "清河县",
		    "130535": "临西县",
		    "130581": "南宫市",
		    "130582": "沙河市",
		    "130583": "其它区",
		    "130600": "保定市",
		    "130602": "新市区",
		    "130603": "北市区",
		    "130604": "南市区",
		    "130621": "满城县",
		    "130622": "清苑县",
		    "130623": "涞水县",
		    "130624": "阜平县",
		    "130625": "徐水县",
		    "130626": "定兴县",
		    "130627": "唐县",
		    "130628": "高阳县",
		    "130629": "容城县",
		    "130630": "涞源县",
		    "130631": "望都县",
		    "130632": "安新县",
		    "130633": "易县",
		    "130634": "曲阳县",
		    "130635": "蠡县",
		    "130636": "顺平县",
		    "130637": "博野县",
		    "130638": "雄县",
		    "130681": "涿州市",
		    "130682": "定州市",
		    "130683": "安国市",
		    "130684": "高碑店市",
		    "130699": "其它区",
		    "130700": "张家口市",
		    "130702": "桥东区",
		    "130703": "桥西区",
		    "130705": "宣化区",
		    "130706": "下花园区",
		    "130721": "宣化县",
		    "130722": "张北县",
		    "130723": "康保县",
		    "130724": "沽源县",
		    "130725": "尚义县",
		    "130726": "蔚县",
		    "130727": "阳原县",
		    "130728": "怀安县",
		    "130729": "万全县",
		    "130730": "怀来县",
		    "130731": "涿鹿县",
		    "130732": "赤城县",
		    "130733": "崇礼县",
		    "130734": "其它区",
		    "130800": "承德市",
		    "130802": "双桥区",
		    "130803": "双滦区",
		    "130804": "鹰手营子矿区",
		    "130821": "承德县",
		    "130822": "兴隆县",
		    "130823": "平泉县",
		    "130824": "滦平县",
		    "130825": "隆化县",
		    "130826": "丰宁满族自治县",
		    "130827": "宽城满族自治县",
		    "130828": "围场满族蒙古族自治县",
		    "130829": "其它区",
		    "130900": "沧州市",
		    "130902": "新华区",
		    "130903": "运河区",
		    "130921": "沧县",
		    "130922": "青县",
		    "130923": "东光县",
		    "130924": "海兴县",
		    "130925": "盐山县",
		    "130926": "肃宁县",
		    "130927": "南皮县",
		    "130928": "吴桥县",
		    "130929": "献县",
		    "130930": "孟村回族自治县",
		    "130981": "泊头市",
		    "130982": "任丘市",
		    "130983": "黄骅市",
		    "130984": "河间市",
		    "130985": "其它区",
		    "131000": "廊坊市",
		    "131002": "安次区",
		    "131003": "广阳区",
		    "131022": "固安县",
		    "131023": "永清县",
		    "131024": "香河县",
		    "131025": "大城县",
		    "131026": "文安县",
		    "131028": "大厂回族自治县",
		    "131081": "霸州市",
		    "131082": "三河市",
		    "131083": "其它区",
		    "131100": "衡水市",
		    "131102": "桃城区",
		    "131121": "枣强县",
		    "131122": "武邑县",
		    "131123": "武强县",
		    "131124": "饶阳县",
		    "131125": "安平县",
		    "131126": "故城县",
		    "131127": "景县",
		    "131128": "阜城县",
		    "131181": "冀州市",
		    "131182": "深州市",
		    "131183": "其它区",
		    "140000": "山西省",
		    "140100": "太原市",
		    "140105": "小店区",
		    "140106": "迎泽区",
		    "140107": "杏花岭区",
		    "140108": "尖草坪区",
		    "140109": "万柏林区",
		    "140110": "晋源区",
		    "140121": "清徐县",
		    "140122": "阳曲县",
		    "140123": "娄烦县",
		    "140181": "古交市",
		    "140182": "其它区",
		    "140200": "大同市",
		    "140202": "城区",
		    "140203": "矿区",
		    "140211": "南郊区",
		    "140212": "新荣区",
		    "140221": "阳高县",
		    "140222": "天镇县",
		    "140223": "广灵县",
		    "140224": "灵丘县",
		    "140225": "浑源县",
		    "140226": "左云县",
		    "140227": "大同县",
		    "140228": "其它区",
		    "140300": "阳泉市",
		    "140302": "城区",
		    "140303": "矿区",
		    "140311": "郊区",
		    "140321": "平定县",
		    "140322": "盂县",
		    "140323": "其它区",
		    "140400": "长治市",
		    "140421": "长治县",
		    "140423": "襄垣县",
		    "140424": "屯留县",
		    "140425": "平顺县",
		    "140426": "黎城县",
		    "140427": "壶关县",
		    "140428": "长子县",
		    "140429": "武乡县",
		    "140430": "沁县",
		    "140431": "沁源县",
		    "140481": "潞城市",
		    "140482": "城区",
		    "140483": "郊区",
		    "140485": "其它区",
		    "140500": "晋城市",
		    "140502": "城区",
		    "140521": "沁水县",
		    "140522": "阳城县",
		    "140524": "陵川县",
		    "140525": "泽州县",
		    "140581": "高平市",
		    "140582": "其它区",
		    "140600": "朔州市",
		    "140602": "朔城区",
		    "140603": "平鲁区",
		    "140621": "山阴县",
		    "140622": "应县",
		    "140623": "右玉县",
		    "140624": "怀仁县",
		    "140625": "其它区",
		    "140700": "晋中市",
		    "140702": "榆次区",
		    "140721": "榆社县",
		    "140722": "左权县",
		    "140723": "和顺县",
		    "140724": "昔阳县",
		    "140725": "寿阳县",
		    "140726": "太谷县",
		    "140727": "祁县",
		    "140728": "平遥县",
		    "140729": "灵石县",
		    "140781": "介休市",
		    "140782": "其它区",
		    "140800": "运城市",
		    "140802": "盐湖区",
		    "140821": "临猗县",
		    "140822": "万荣县",
		    "140823": "闻喜县",
		    "140824": "稷山县",
		    "140825": "新绛县",
		    "140826": "绛县",
		    "140827": "垣曲县",
		    "140828": "夏县",
		    "140829": "平陆县",
		    "140830": "芮城县",
		    "140881": "永济市",
		    "140882": "河津市",
		    "140883": "其它区",
		    "140900": "忻州市",
		    "140902": "忻府区",
		    "140921": "定襄县",
		    "140922": "五台县",
		    "140923": "代县",
		    "140924": "繁峙县",
		    "140925": "宁武县",
		    "140926": "静乐县",
		    "140927": "神池县",
		    "140928": "五寨县",
		    "140929": "岢岚县",
		    "140930": "河曲县",
		    "140931": "保德县",
		    "140932": "偏关县",
		    "140981": "原平市",
		    "140982": "其它区",
		    "141000": "临汾市",
		    "141002": "尧都区",
		    "141021": "曲沃县",
		    "141022": "翼城县",
		    "141023": "襄汾县",
		    "141024": "洪洞县",
		    "141025": "古县",
		    "141026": "安泽县",
		    "141027": "浮山县",
		    "141028": "吉县",
		    "141029": "乡宁县",
		    "141030": "大宁县",
		    "141031": "隰县",
		    "141032": "永和县",
		    "141033": "蒲县",
		    "141034": "汾西县",
		    "141081": "侯马市",
		    "141082": "霍州市",
		    "141083": "其它区",
		    "141100": "吕梁市",
		    "141102": "离石区",
		    "141121": "文水县",
		    "141122": "交城县",
		    "141123": "兴县",
		    "141124": "临县",
		    "141125": "柳林县",
		    "141126": "石楼县",
		    "141127": "岚县",
		    "141128": "方山县",
		    "141129": "中阳县",
		    "141130": "交口县",
		    "141181": "孝义市",
		    "141182": "汾阳市",
		    "141183": "其它区",
		    "150000": "内蒙古自治区",
		    "150100": "呼和浩特市",
		    "150102": "新城区",
		    "150103": "回民区",
		    "150104": "玉泉区",
		    "150105": "赛罕区",
		    "150121": "土默特左旗",
		    "150122": "托克托县",
		    "150123": "和林格尔县",
		    "150124": "清水河县",
		    "150125": "武川县",
		    "150126": "其它区",
		    "150200": "包头市",
		    "150202": "东河区",
		    "150203": "昆都仑区",
		    "150204": "青山区",
		    "150205": "石拐区",
		    "150206": "白云鄂博矿区",
		    "150207": "九原区",
		    "150221": "土默特右旗",
		    "150222": "固阳县",
		    "150223": "达尔罕茂明安联合旗",
		    "150224": "其它区",
		    "150300": "乌海市",
		    "150302": "海勃湾区",
		    "150303": "海南区",
		    "150304": "乌达区",
		    "150305": "其它区",
		    "150400": "赤峰市",
		    "150402": "红山区",
		    "150403": "元宝山区",
		    "150404": "松山区",
		    "150421": "阿鲁科尔沁旗",
		    "150422": "巴林左旗",
		    "150423": "巴林右旗",
		    "150424": "林西县",
		    "150425": "克什克腾旗",
		    "150426": "翁牛特旗",
		    "150428": "喀喇沁旗",
		    "150429": "宁城县",
		    "150430": "敖汉旗",
		    "150431": "其它区",
		    "150500": "通辽市",
		    "150502": "科尔沁区",
		    "150521": "科尔沁左翼中旗",
		    "150522": "科尔沁左翼后旗",
		    "150523": "开鲁县",
		    "150524": "库伦旗",
		    "150525": "奈曼旗",
		    "150526": "扎鲁特旗",
		    "150581": "霍林郭勒市",
		    "150582": "其它区",
		    "150600": "鄂尔多斯市",
		    "150602": "东胜区",
		    "150621": "达拉特旗",
		    "150622": "准格尔旗",
		    "150623": "鄂托克前旗",
		    "150624": "鄂托克旗",
		    "150625": "杭锦旗",
		    "150626": "乌审旗",
		    "150627": "伊金霍洛旗",
		    "150628": "其它区",
		    "150700": "呼伦贝尔市",
		    "150702": "海拉尔区",
		    "150703": "扎赉诺尔区",
		    "150721": "阿荣旗",
		    "150722": "莫力达瓦达斡尔族自治旗",
		    "150723": "鄂伦春自治旗",
		    "150724": "鄂温克族自治旗",
		    "150725": "陈巴尔虎旗",
		    "150726": "新巴尔虎左旗",
		    "150727": "新巴尔虎右旗",
		    "150781": "满洲里市",
		    "150782": "牙克石市",
		    "150783": "扎兰屯市",
		    "150784": "额尔古纳市",
		    "150785": "根河市",
		    "150786": "其它区",
		    "150800": "巴彦淖尔市",
		    "150802": "临河区",
		    "150821": "五原县",
		    "150822": "磴口县",
		    "150823": "乌拉特前旗",
		    "150824": "乌拉特中旗",
		    "150825": "乌拉特后旗",
		    "150826": "杭锦后旗",
		    "150827": "其它区",
		    "150900": "乌兰察布市",
		    "150902": "集宁区",
		    "150921": "卓资县",
		    "150922": "化德县",
		    "150923": "商都县",
		    "150924": "兴和县",
		    "150925": "凉城县",
		    "150926": "察哈尔右翼前旗",
		    "150927": "察哈尔右翼中旗",
		    "150928": "察哈尔右翼后旗",
		    "150929": "四子王旗",
		    "150981": "丰镇市",
		    "150982": "其它区",
		    "152200": "兴安盟",
		    "152201": "乌兰浩特市",
		    "152202": "阿尔山市",
		    "152221": "科尔沁右翼前旗",
		    "152222": "科尔沁右翼中旗",
		    "152223": "扎赉特旗",
		    "152224": "突泉县",
		    "152225": "其它区",
		    "152500": "锡林郭勒盟",
		    "152501": "二连浩特市",
		    "152502": "锡林浩特市",
		    "152522": "阿巴嘎旗",
		    "152523": "苏尼特左旗",
		    "152524": "苏尼特右旗",
		    "152525": "东乌珠穆沁旗",
		    "152526": "西乌珠穆沁旗",
		    "152527": "太仆寺旗",
		    "152528": "镶黄旗",
		    "152529": "正镶白旗",
		    "152530": "正蓝旗",
		    "152531": "多伦县",
		    "152532": "其它区",
		    "152900": "阿拉善盟",
		    "152921": "阿拉善左旗",
		    "152922": "阿拉善右旗",
		    "152923": "额济纳旗",
		    "152924": "其它区",
		    "210000": "辽宁省",
		    "210100": "沈阳市",
		    "210102": "和平区",
		    "210103": "沈河区",
		    "210104": "大东区",
		    "210105": "皇姑区",
		    "210106": "铁西区",
		    "210111": "苏家屯区",
		    "210112": "东陵区",
		    "210113": "新城子区",
		    "210114": "于洪区",
		    "210122": "辽中县",
		    "210123": "康平县",
		    "210124": "法库县",
		    "210181": "新民市",
		    "210184": "沈北新区",
		    "210185": "其它区",
		    "210200": "大连市",
		    "210202": "中山区",
		    "210203": "西岗区",
		    "210204": "沙河口区",
		    "210211": "甘井子区",
		    "210212": "旅顺口区",
		    "210213": "金州区",
		    "210224": "长海县",
		    "210281": "瓦房店市",
		    "210282": "普兰店市",
		    "210283": "庄河市",
		    "210298": "其它区",
		    "210300": "鞍山市",
		    "210302": "铁东区",
		    "210303": "铁西区",
		    "210304": "立山区",
		    "210311": "千山区",
		    "210321": "台安县",
		    "210323": "岫岩满族自治县",
		    "210381": "海城市",
		    "210382": "其它区",
		    "210400": "抚顺市",
		    "210402": "新抚区",
		    "210403": "东洲区",
		    "210404": "望花区",
		    "210411": "顺城区",
		    "210421": "抚顺县",
		    "210422": "新宾满族自治县",
		    "210423": "清原满族自治县",
		    "210424": "其它区",
		    "210500": "本溪市",
		    "210502": "平山区",
		    "210503": "溪湖区",
		    "210504": "明山区",
		    "210505": "南芬区",
		    "210521": "本溪满族自治县",
		    "210522": "桓仁满族自治县",
		    "210523": "其它区",
		    "210600": "丹东市",
		    "210602": "元宝区",
		    "210603": "振兴区",
		    "210604": "振安区",
		    "210624": "宽甸满族自治县",
		    "210681": "东港市",
		    "210682": "凤城市",
		    "210683": "其它区",
		    "210700": "锦州市",
		    "210702": "古塔区",
		    "210703": "凌河区",
		    "210711": "太和区",
		    "210726": "黑山县",
		    "210727": "义县",
		    "210781": "凌海市",
		    "210782": "北镇市",
		    "210783": "其它区",
		    "210800": "营口市",
		    "210802": "站前区",
		    "210803": "西市区",
		    "210804": "鲅鱼圈区",
		    "210811": "老边区",
		    "210881": "盖州市",
		    "210882": "大石桥市",
		    "210883": "其它区",
		    "210900": "阜新市",
		    "210902": "海州区",
		    "210903": "新邱区",
		    "210904": "太平区",
		    "210905": "清河门区",
		    "210911": "细河区",
		    "210921": "阜新蒙古族自治县",
		    "210922": "彰武县",
		    "210923": "其它区",
		    "211000": "辽阳市",
		    "211002": "白塔区",
		    "211003": "文圣区",
		    "211004": "宏伟区",
		    "211005": "弓长岭区",
		    "211011": "太子河区",
		    "211021": "辽阳县",
		    "211081": "灯塔市",
		    "211082": "其它区",
		    "211100": "盘锦市",
		    "211102": "双台子区",
		    "211103": "兴隆台区",
		    "211121": "大洼县",
		    "211122": "盘山县",
		    "211123": "其它区",
		    "211200": "铁岭市",
		    "211202": "银州区",
		    "211204": "清河区",
		    "211221": "铁岭县",
		    "211223": "西丰县",
		    "211224": "昌图县",
		    "211281": "调兵山市",
		    "211282": "开原市",
		    "211283": "其它区",
		    "211300": "朝阳市",
		    "211302": "双塔区",
		    "211303": "龙城区",
		    "211321": "朝阳县",
		    "211322": "建平县",
		    "211324": "喀喇沁左翼蒙古族自治县",
		    "211381": "北票市",
		    "211382": "凌源市",
		    "211383": "其它区",
		    "211400": "葫芦岛市",
		    "211402": "连山区",
		    "211403": "龙港区",
		    "211404": "南票区",
		    "211421": "绥中县",
		    "211422": "建昌县",
		    "211481": "兴城市",
		    "211482": "其它区",
		    "220000": "吉林省",
		    "220100": "长春市",
		    "220102": "南关区",
		    "220103": "宽城区",
		    "220104": "朝阳区",
		    "220105": "二道区",
		    "220106": "绿园区",
		    "220112": "双阳区",
		    "220122": "农安县",
		    "220181": "九台市",
		    "220182": "榆树市",
		    "220183": "德惠市",
		    "220188": "其它区",
		    "220200": "吉林市",
		    "220202": "昌邑区",
		    "220203": "龙潭区",
		    "220204": "船营区",
		    "220211": "丰满区",
		    "220221": "永吉县",
		    "220281": "蛟河市",
		    "220282": "桦甸市",
		    "220283": "舒兰市",
		    "220284": "磐石市",
		    "220285": "其它区",
		    "220300": "四平市",
		    "220302": "铁西区",
		    "220303": "铁东区",
		    "220322": "梨树县",
		    "220323": "伊通满族自治县",
		    "220381": "公主岭市",
		    "220382": "双辽市",
		    "220383": "其它区",
		    "220400": "辽源市",
		    "220402": "龙山区",
		    "220403": "西安区",
		    "220421": "东丰县",
		    "220422": "东辽县",
		    "220423": "其它区",
		    "220500": "通化市",
		    "220502": "东昌区",
		    "220503": "二道江区",
		    "220521": "通化县",
		    "220523": "辉南县",
		    "220524": "柳河县",
		    "220581": "梅河口市",
		    "220582": "集安市",
		    "220583": "其它区",
		    "220600": "白山市",
		    "220602": "浑江区",
		    "220621": "抚松县",
		    "220622": "靖宇县",
		    "220623": "长白朝鲜族自治县",
		    "220625": "江源区",
		    "220681": "临江市",
		    "220682": "其它区",
		    "220700": "松原市",
		    "220702": "宁江区",
		    "220721": "前郭尔罗斯蒙古族自治县",
		    "220722": "长岭县",
		    "220723": "乾安县",
		    "220724": "扶余市",
		    "220725": "其它区",
		    "220800": "白城市",
		    "220802": "洮北区",
		    "220821": "镇赉县",
		    "220822": "通榆县",
		    "220881": "洮南市",
		    "220882": "大安市",
		    "220883": "其它区",
		    "222400": "延边朝鲜族自治州",
		    "222401": "延吉市",
		    "222402": "图们市",
		    "222403": "敦化市",
		    "222404": "珲春市",
		    "222405": "龙井市",
		    "222406": "和龙市",
		    "222424": "汪清县",
		    "222426": "安图县",
		    "222427": "其它区",
		    "230000": "黑龙江省",
		    "230100": "哈尔滨市",
		    "230102": "道里区",
		    "230103": "南岗区",
		    "230104": "道外区",
		    "230106": "香坊区",
		    "230108": "平房区",
		    "230109": "松北区",
		    "230111": "呼兰区",
		    "230123": "依兰县",
		    "230124": "方正县",
		    "230125": "宾县",
		    "230126": "巴彦县",
		    "230127": "木兰县",
		    "230128": "通河县",
		    "230129": "延寿县",
		    "230181": "阿城区",
		    "230182": "双城市",
		    "230183": "尚志市",
		    "230184": "五常市",
		    "230186": "其它区",
		    "230200": "齐齐哈尔市",
		    "230202": "龙沙区",
		    "230203": "建华区",
		    "230204": "铁锋区",
		    "230205": "昂昂溪区",
		    "230206": "富拉尔基区",
		    "230207": "碾子山区",
		    "230208": "梅里斯达斡尔族区",
		    "230221": "龙江县",
		    "230223": "依安县",
		    "230224": "泰来县",
		    "230225": "甘南县",
		    "230227": "富裕县",
		    "230229": "克山县",
		    "230230": "克东县",
		    "230231": "拜泉县",
		    "230281": "讷河市",
		    "230282": "其它区",
		    "230300": "鸡西市",
		    "230302": "鸡冠区",
		    "230303": "恒山区",
		    "230304": "滴道区",
		    "230305": "梨树区",
		    "230306": "城子河区",
		    "230307": "麻山区",
		    "230321": "鸡东县",
		    "230381": "虎林市",
		    "230382": "密山市",
		    "230383": "其它区",
		    "230400": "鹤岗市",
		    "230402": "向阳区",
		    "230403": "工农区",
		    "230404": "南山区",
		    "230405": "兴安区",
		    "230406": "东山区",
		    "230407": "兴山区",
		    "230421": "萝北县",
		    "230422": "绥滨县",
		    "230423": "其它区",
		    "230500": "双鸭山市",
		    "230502": "尖山区",
		    "230503": "岭东区",
		    "230505": "四方台区",
		    "230506": "宝山区",
		    "230521": "集贤县",
		    "230522": "友谊县",
		    "230523": "宝清县",
		    "230524": "饶河县",
		    "230525": "其它区",
		    "230600": "大庆市",
		    "230602": "萨尔图区",
		    "230603": "龙凤区",
		    "230604": "让胡路区",
		    "230605": "红岗区",
		    "230606": "大同区",
		    "230621": "肇州县",
		    "230622": "肇源县",
		    "230623": "林甸县",
		    "230624": "杜尔伯特蒙古族自治县",
		    "230625": "其它区",
		    "230700": "伊春市",
		    "230702": "伊春区",
		    "230703": "南岔区",
		    "230704": "友好区",
		    "230705": "西林区",
		    "230706": "翠峦区",
		    "230707": "新青区",
		    "230708": "美溪区",
		    "230709": "金山屯区",
		    "230710": "五营区",
		    "230711": "乌马河区",
		    "230712": "汤旺河区",
		    "230713": "带岭区",
		    "230714": "乌伊岭区",
		    "230715": "红星区",
		    "230716": "上甘岭区",
		    "230722": "嘉荫县",
		    "230781": "铁力市",
		    "230782": "其它区",
		    "230800": "佳木斯市",
		    "230803": "向阳区",
		    "230804": "前进区",
		    "230805": "东风区",
		    "230811": "郊区",
		    "230822": "桦南县",
		    "230826": "桦川县",
		    "230828": "汤原县",
		    "230833": "抚远县",
		    "230881": "同江市",
		    "230882": "富锦市",
		    "230883": "其它区",
		    "230900": "七台河市",
		    "230902": "新兴区",
		    "230903": "桃山区",
		    "230904": "茄子河区",
		    "230921": "勃利县",
		    "230922": "其它区",
		    "231000": "牡丹江市",
		    "231002": "东安区",
		    "231003": "阳明区",
		    "231004": "爱民区",
		    "231005": "西安区",
		    "231024": "东宁县",
		    "231025": "林口县",
		    "231081": "绥芬河市",
		    "231083": "海林市",
		    "231084": "宁安市",
		    "231085": "穆棱市",
		    "231086": "其它区",
		    "231100": "黑河市",
		    "231102": "爱辉区",
		    "231121": "嫩江县",
		    "231123": "逊克县",
		    "231124": "孙吴县",
		    "231181": "北安市",
		    "231182": "五大连池市",
		    "231183": "其它区",
		    "231200": "绥化市",
		    "231202": "北林区",
		    "231221": "望奎县",
		    "231222": "兰西县",
		    "231223": "青冈县",
		    "231224": "庆安县",
		    "231225": "明水县",
		    "231226": "绥棱县",
		    "231281": "安达市",
		    "231282": "肇东市",
		    "231283": "海伦市",
		    "231284": "其它区",
		    "232700": "大兴安岭地区",
		    "232702": "松岭区",
		    "232703": "新林区",
		    "232704": "呼中区",
		    "232721": "呼玛县",
		    "232722": "塔河县",
		    "232723": "漠河县",
		    "232724": "加格达奇区",
		    "232725": "其它区",
		    "310000": "上海",
		    "310100": "上海市",
		    "310101": "黄浦区",
		    "310104": "徐汇区",
		    "310105": "长宁区",
		    "310106": "静安区",
		    "310107": "普陀区",
		    "310108": "闸北区",
		    "310109": "虹口区",
		    "310110": "杨浦区",
		    "310112": "闵行区",
		    "310113": "宝山区",
		    "310114": "嘉定区",
		    "310115": "浦东新区",
		    "310116": "金山区",
		    "310117": "松江区",
		    "310118": "青浦区",
		    "310120": "奉贤区",
		    "310230": "崇明县",
		    "310231": "其它区",
		    "320000": "江苏省",
		    "320100": "南京市",
		    "320102": "玄武区",
		    "320104": "秦淮区",
		    "320105": "建邺区",
		    "320106": "鼓楼区",
		    "320111": "浦口区",
		    "320113": "栖霞区",
		    "320114": "雨花台区",
		    "320115": "江宁区",
		    "320116": "六合区",
		    "320124": "溧水区",
		    "320125": "高淳区",
		    "320126": "其它区",
		    "320200": "无锡市",
		    "320202": "崇安区",
		    "320203": "南长区",
		    "320204": "北塘区",
		    "320205": "锡山区",
		    "320206": "惠山区",
		    "320211": "滨湖区",
		    "320281": "江阴市",
		    "320282": "宜兴市",
		    "320297": "其它区",
		    "320300": "徐州市",
		    "320302": "鼓楼区",
		    "320303": "云龙区",
		    "320305": "贾汪区",
		    "320311": "泉山区",
		    "320321": "丰县",
		    "320322": "沛县",
		    "320323": "铜山区",
		    "320324": "睢宁县",
		    "320381": "新沂市",
		    "320382": "邳州市",
		    "320383": "其它区",
		    "320400": "常州市",
		    "320402": "天宁区",
		    "320404": "钟楼区",
		    "320405": "戚墅堰区",
		    "320411": "新北区",
		    "320412": "武进区",
		    "320481": "溧阳市",
		    "320482": "金坛市",
		    "320483": "其它区",
		    "320500": "苏州市",
		    "320505": "虎丘区",
		    "320506": "吴中区",
		    "320507": "相城区",
		    "320508": "姑苏区",
		    "320581": "常熟市",
		    "320582": "张家港市",
		    "320583": "昆山市",
		    "320584": "吴江区",
		    "320585": "太仓市",
		    "320596": "其它区",
		    "320600": "南通市",
		    "320602": "崇川区",
		    "320611": "港闸区",
		    "320612": "通州区",
		    "320621": "海安县",
		    "320623": "如东县",
		    "320681": "启东市",
		    "320682": "如皋市",
		    "320684": "海门市",
		    "320694": "其它区",
		    "320700": "连云港市",
		    "320703": "连云区",
		    "320705": "新浦区",
		    "320706": "海州区",
		    "320721": "赣榆县",
		    "320722": "东海县",
		    "320723": "灌云县",
		    "320724": "灌南县",
		    "320725": "其它区",
		    "320800": "淮安市",
		    "320802": "清河区",
		    "320803": "淮安区",
		    "320804": "淮阴区",
		    "320811": "清浦区",
		    "320826": "涟水县",
		    "320829": "洪泽县",
		    "320830": "盱眙县",
		    "320831": "金湖县",
		    "320832": "其它区",
		    "320900": "盐城市",
		    "320902": "亭湖区",
		    "320903": "盐都区",
		    "320921": "响水县",
		    "320922": "滨海县",
		    "320923": "阜宁县",
		    "320924": "射阳县",
		    "320925": "建湖县",
		    "320981": "东台市",
		    "320982": "大丰市",
		    "320983": "其它区",
		    "321000": "扬州市",
		    "321002": "广陵区",
		    "321003": "邗江区",
		    "321023": "宝应县",
		    "321081": "仪征市",
		    "321084": "高邮市",
		    "321088": "江都区",
		    "321093": "其它区",
		    "321100": "镇江市",
		    "321102": "京口区",
		    "321111": "润州区",
		    "321112": "丹徒区",
		    "321181": "丹阳市",
		    "321182": "扬中市",
		    "321183": "句容市",
		    "321184": "其它区",
		    "321200": "泰州市",
		    "321202": "海陵区",
		    "321203": "高港区",
		    "321281": "兴化市",
		    "321282": "靖江市",
		    "321283": "泰兴市",
		    "321284": "姜堰区",
		    "321285": "其它区",
		    "321300": "宿迁市",
		    "321302": "宿城区",
		    "321311": "宿豫区",
		    "321322": "沭阳县",
		    "321323": "泗阳县",
		    "321324": "泗洪县",
		    "321325": "其它区",
		    "330000": "浙江省",
		    "330100": "杭州市",
		    "330102": "上城区",
		    "330103": "下城区",
		    "330104": "江干区",
		    "330105": "拱墅区",
		    "330106": "西湖区",
		    "330108": "滨江区",
		    "330109": "萧山区",
		    "330110": "余杭区",
		    "330122": "桐庐县",
		    "330127": "淳安县",
		    "330182": "建德市",
		    "330183": "富阳市",
		    "330185": "临安市",
		    "330186": "其它区",
		    "330200": "宁波市",
		    "330203": "海曙区",
		    "330204": "江东区",
		    "330205": "江北区",
		    "330206": "北仑区",
		    "330211": "镇海区",
		    "330212": "鄞州区",
		    "330225": "象山县",
		    "330226": "宁海县",
		    "330281": "余姚市",
		    "330282": "慈溪市",
		    "330283": "奉化市",
		    "330284": "其它区",
		    "330300": "温州市",
		    "330302": "鹿城区",
		    "330303": "龙湾区",
		    "330304": "瓯海区",
		    "330322": "洞头县",
		    "330324": "永嘉县",
		    "330326": "平阳县",
		    "330327": "苍南县",
		    "330328": "文成县",
		    "330329": "泰顺县",
		    "330381": "瑞安市",
		    "330382": "乐清市",
		    "330383": "其它区",
		    "330400": "嘉兴市",
		    "330402": "南湖区",
		    "330411": "秀洲区",
		    "330421": "嘉善县",
		    "330424": "海盐县",
		    "330481": "海宁市",
		    "330482": "平湖市",
		    "330483": "桐乡市",
		    "330484": "其它区",
		    "330500": "湖州市",
		    "330502": "吴兴区",
		    "330503": "南浔区",
		    "330521": "德清县",
		    "330522": "长兴县",
		    "330523": "安吉县",
		    "330524": "其它区",
		    "330600": "绍兴市",
		    "330602": "越城区",
		    "330621": "绍兴县",
		    "330624": "新昌县",
		    "330681": "诸暨市",
		    "330682": "上虞市",
		    "330683": "嵊州市",
		    "330684": "其它区",
		    "330700": "金华市",
		    "330702": "婺城区",
		    "330703": "金东区",
		    "330723": "武义县",
		    "330726": "浦江县",
		    "330727": "磐安县",
		    "330781": "兰溪市",
		    "330782": "义乌市",
		    "330783": "东阳市",
		    "330784": "永康市",
		    "330785": "其它区",
		    "330800": "衢州市",
		    "330802": "柯城区",
		    "330803": "衢江区",
		    "330822": "常山县",
		    "330824": "开化县",
		    "330825": "龙游县",
		    "330881": "江山市",
		    "330882": "其它区",
		    "330900": "舟山市",
		    "330902": "定海区",
		    "330903": "普陀区",
		    "330921": "岱山县",
		    "330922": "嵊泗县",
		    "330923": "其它区",
		    "331000": "台州市",
		    "331002": "椒江区",
		    "331003": "黄岩区",
		    "331004": "路桥区",
		    "331021": "玉环县",
		    "331022": "三门县",
		    "331023": "天台县",
		    "331024": "仙居县",
		    "331081": "温岭市",
		    "331082": "临海市",
		    "331083": "其它区",
		    "331100": "丽水市",
		    "331102": "莲都区",
		    "331121": "青田县",
		    "331122": "缙云县",
		    "331123": "遂昌县",
		    "331124": "松阳县",
		    "331125": "云和县",
		    "331126": "庆元县",
		    "331127": "景宁畲族自治县",
		    "331181": "龙泉市",
		    "331182": "其它区",
		    "340000": "安徽省",
		    "340100": "合肥市",
		    "340102": "瑶海区",
		    "340103": "庐阳区",
		    "340104": "蜀山区",
		    "340111": "包河区",
		    "340121": "长丰县",
		    "340122": "肥东县",
		    "340123": "肥西县",
		    "340192": "其它区",
		    "340200": "芜湖市",
		    "340202": "镜湖区",
		    "340203": "弋江区",
		    "340207": "鸠江区",
		    "340208": "三山区",
		    "340221": "芜湖县",
		    "340222": "繁昌县",
		    "340223": "南陵县",
		    "340224": "其它区",
		    "340300": "蚌埠市",
		    "340302": "龙子湖区",
		    "340303": "蚌山区",
		    "340304": "禹会区",
		    "340311": "淮上区",
		    "340321": "怀远县",
		    "340322": "五河县",
		    "340323": "固镇县",
		    "340324": "其它区",
		    "340400": "淮南市",
		    "340402": "大通区",
		    "340403": "田家庵区",
		    "340404": "谢家集区",
		    "340405": "八公山区",
		    "340406": "潘集区",
		    "340421": "凤台县",
		    "340422": "其它区",
		    "340500": "马鞍山市",
		    "340503": "花山区",
		    "340504": "雨山区",
		    "340506": "博望区",
		    "340521": "当涂县",
		    "340522": "其它区",
		    "340600": "淮北市",
		    "340602": "杜集区",
		    "340603": "相山区",
		    "340604": "烈山区",
		    "340621": "濉溪县",
		    "340622": "其它区",
		    "340700": "铜陵市",
		    "340702": "铜官山区",
		    "340703": "狮子山区",
		    "340711": "郊区",
		    "340721": "铜陵县",
		    "340722": "其它区",
		    "340800": "安庆市",
		    "340802": "迎江区",
		    "340803": "大观区",
		    "340811": "宜秀区",
		    "340822": "怀宁县",
		    "340823": "枞阳县",
		    "340824": "潜山县",
		    "340825": "太湖县",
		    "340826": "宿松县",
		    "340827": "望江县",
		    "340828": "岳西县",
		    "340881": "桐城市",
		    "340882": "其它区",
		    "341000": "黄山市",
		    "341002": "屯溪区",
		    "341003": "黄山区",
		    "341004": "徽州区",
		    "341021": "歙县",
		    "341022": "休宁县",
		    "341023": "黟县",
		    "341024": "祁门县",
		    "341025": "其它区",
		    "341100": "滁州市",
		    "341102": "琅琊区",
		    "341103": "南谯区",
		    "341122": "来安县",
		    "341124": "全椒县",
		    "341125": "定远县",
		    "341126": "凤阳县",
		    "341181": "天长市",
		    "341182": "明光市",
		    "341183": "其它区",
		    "341200": "阜阳市",
		    "341202": "颍州区",
		    "341203": "颍东区",
		    "341204": "颍泉区",
		    "341221": "临泉县",
		    "341222": "太和县",
		    "341225": "阜南县",
		    "341226": "颍上县",
		    "341282": "界首市",
		    "341283": "其它区",
		    "341300": "宿州市",
		    "341302": "埇桥区",
		    "341321": "砀山县",
		    "341322": "萧县",
		    "341323": "灵璧县",
		    "341324": "泗县",
		    "341325": "其它区",
		    "341400": "巢湖市",
		    "341421": "庐江县",
		    "341422": "无为县",
		    "341423": "含山县",
		    "341424": "和县",
		    "341500": "六安市",
		    "341502": "金安区",
		    "341503": "裕安区",
		    "341521": "寿县",
		    "341522": "霍邱县",
		    "341523": "舒城县",
		    "341524": "金寨县",
		    "341525": "霍山县",
		    "341526": "其它区",
		    "341600": "亳州市",
		    "341602": "谯城区",
		    "341621": "涡阳县",
		    "341622": "蒙城县",
		    "341623": "利辛县",
		    "341624": "其它区",
		    "341700": "池州市",
		    "341702": "贵池区",
		    "341721": "东至县",
		    "341722": "石台县",
		    "341723": "青阳县",
		    "341724": "其它区",
		    "341800": "宣城市",
		    "341802": "宣州区",
		    "341821": "郎溪县",
		    "341822": "广德县",
		    "341823": "泾县",
		    "341824": "绩溪县",
		    "341825": "旌德县",
		    "341881": "宁国市",
		    "341882": "其它区",
		    "350000": "福建省",
		    "350100": "福州市",
		    "350102": "鼓楼区",
		    "350103": "台江区",
		    "350104": "仓山区",
		    "350105": "马尾区",
		    "350111": "晋安区",
		    "350121": "闽侯县",
		    "350122": "连江县",
		    "350123": "罗源县",
		    "350124": "闽清县",
		    "350125": "永泰县",
		    "350128": "平潭县",
		    "350181": "福清市",
		    "350182": "长乐市",
		    "350183": "其它区",
		    "350200": "厦门市",
		    "350203": "思明区",
		    "350205": "海沧区",
		    "350206": "湖里区",
		    "350211": "集美区",
		    "350212": "同安区",
		    "350213": "翔安区",
		    "350214": "其它区",
		    "350300": "莆田市",
		    "350302": "城厢区",
		    "350303": "涵江区",
		    "350304": "荔城区",
		    "350305": "秀屿区",
		    "350322": "仙游县",
		    "350323": "其它区",
		    "350400": "三明市",
		    "350402": "梅列区",
		    "350403": "三元区",
		    "350421": "明溪县",
		    "350423": "清流县",
		    "350424": "宁化县",
		    "350425": "大田县",
		    "350426": "尤溪县",
		    "350427": "沙县",
		    "350428": "将乐县",
		    "350429": "泰宁县",
		    "350430": "建宁县",
		    "350481": "永安市",
		    "350482": "其它区",
		    "350500": "泉州市",
		    "350502": "鲤城区",
		    "350503": "丰泽区",
		    "350504": "洛江区",
		    "350505": "泉港区",
		    "350521": "惠安县",
		    "350524": "安溪县",
		    "350525": "永春县",
		    "350526": "德化县",
		    "350527": "金门县",
		    "350581": "石狮市",
		    "350582": "晋江市",
		    "350583": "南安市",
		    "350584": "其它区",
		    "350600": "漳州市",
		    "350602": "芗城区",
		    "350603": "龙文区",
		    "350622": "云霄县",
		    "350623": "漳浦县",
		    "350624": "诏安县",
		    "350625": "长泰县",
		    "350626": "东山县",
		    "350627": "南靖县",
		    "350628": "平和县",
		    "350629": "华安县",
		    "350681": "龙海市",
		    "350682": "其它区",
		    "350700": "南平市",
		    "350702": "延平区",
		    "350721": "顺昌县",
		    "350722": "浦城县",
		    "350723": "光泽县",
		    "350724": "松溪县",
		    "350725": "政和县",
		    "350781": "邵武市",
		    "350782": "武夷山市",
		    "350783": "建瓯市",
		    "350784": "建阳市",
		    "350785": "其它区",
		    "350800": "龙岩市",
		    "350802": "新罗区",
		    "350821": "长汀县",
		    "350822": "永定县",
		    "350823": "上杭县",
		    "350824": "武平县",
		    "350825": "连城县",
		    "350881": "漳平市",
		    "350882": "其它区",
		    "350900": "宁德市",
		    "350902": "蕉城区",
		    "350921": "霞浦县",
		    "350922": "古田县",
		    "350923": "屏南县",
		    "350924": "寿宁县",
		    "350925": "周宁县",
		    "350926": "柘荣县",
		    "350981": "福安市",
		    "350982": "福鼎市",
		    "350983": "其它区",
		    "360000": "江西省",
		    "360100": "南昌市",
		    "360102": "东湖区",
		    "360103": "西湖区",
		    "360104": "青云谱区",
		    "360105": "湾里区",
		    "360111": "青山湖区",
		    "360121": "南昌县",
		    "360122": "新建县",
		    "360123": "安义县",
		    "360124": "进贤县",
		    "360128": "其它区",
		    "360200": "景德镇市",
		    "360202": "昌江区",
		    "360203": "珠山区",
		    "360222": "浮梁县",
		    "360281": "乐平市",
		    "360282": "其它区",
		    "360300": "萍乡市",
		    "360302": "安源区",
		    "360313": "湘东区",
		    "360321": "莲花县",
		    "360322": "上栗县",
		    "360323": "芦溪县",
		    "360324": "其它区",
		    "360400": "九江市",
		    "360402": "庐山区",
		    "360403": "浔阳区",
		    "360421": "九江县",
		    "360423": "武宁县",
		    "360424": "修水县",
		    "360425": "永修县",
		    "360426": "德安县",
		    "360427": "星子县",
		    "360428": "都昌县",
		    "360429": "湖口县",
		    "360430": "彭泽县",
		    "360481": "瑞昌市",
		    "360482": "其它区",
		    "360483": "共青城市",
		    "360500": "新余市",
		    "360502": "渝水区",
		    "360521": "分宜县",
		    "360522": "其它区",
		    "360600": "鹰潭市",
		    "360602": "月湖区",
		    "360622": "余江县",
		    "360681": "贵溪市",
		    "360682": "其它区",
		    "360700": "赣州市",
		    "360702": "章贡区",
		    "360721": "赣县",
		    "360722": "信丰县",
		    "360723": "大余县",
		    "360724": "上犹县",
		    "360725": "崇义县",
		    "360726": "安远县",
		    "360727": "龙南县",
		    "360728": "定南县",
		    "360729": "全南县",
		    "360730": "宁都县",
		    "360731": "于都县",
		    "360732": "兴国县",
		    "360733": "会昌县",
		    "360734": "寻乌县",
		    "360735": "石城县",
		    "360781": "瑞金市",
		    "360782": "南康市",
		    "360783": "其它区",
		    "360800": "吉安市",
		    "360802": "吉州区",
		    "360803": "青原区",
		    "360821": "吉安县",
		    "360822": "吉水县",
		    "360823": "峡江县",
		    "360824": "新干县",
		    "360825": "永丰县",
		    "360826": "泰和县",
		    "360827": "遂川县",
		    "360828": "万安县",
		    "360829": "安福县",
		    "360830": "永新县",
		    "360881": "井冈山市",
		    "360882": "其它区",
		    "360900": "宜春市",
		    "360902": "袁州区",
		    "360921": "奉新县",
		    "360922": "万载县",
		    "360923": "上高县",
		    "360924": "宜丰县",
		    "360925": "靖安县",
		    "360926": "铜鼓县",
		    "360981": "丰城市",
		    "360982": "樟树市",
		    "360983": "高安市",
		    "360984": "其它区",
		    "361000": "抚州市",
		    "361002": "临川区",
		    "361021": "南城县",
		    "361022": "黎川县",
		    "361023": "南丰县",
		    "361024": "崇仁县",
		    "361025": "乐安县",
		    "361026": "宜黄县",
		    "361027": "金溪县",
		    "361028": "资溪县",
		    "361029": "东乡县",
		    "361030": "广昌县",
		    "361031": "其它区",
		    "361100": "上饶市",
		    "361102": "信州区",
		    "361121": "上饶县",
		    "361122": "广丰县",
		    "361123": "玉山县",
		    "361124": "铅山县",
		    "361125": "横峰县",
		    "361126": "弋阳县",
		    "361127": "余干县",
		    "361128": "鄱阳县",
		    "361129": "万年县",
		    "361130": "婺源县",
		    "361181": "德兴市",
		    "361182": "其它区",
		    "370000": "山东省",
		    "370100": "济南市",
		    "370102": "历下区",
		    "370103": "市中区",
		    "370104": "槐荫区",
		    "370105": "天桥区",
		    "370112": "历城区",
		    "370113": "长清区",
		    "370124": "平阴县",
		    "370125": "济阳县",
		    "370126": "商河县",
		    "370181": "章丘市",
		    "370182": "其它区",
		    "370200": "青岛市",
		    "370202": "市南区",
		    "370203": "市北区",
		    "370211": "黄岛区",
		    "370212": "崂山区",
		    "370213": "李沧区",
		    "370214": "城阳区",
		    "370281": "胶州市",
		    "370282": "即墨市",
		    "370283": "平度市",
		    "370285": "莱西市",
		    "370286": "其它区",
		    "370300": "淄博市",
		    "370302": "淄川区",
		    "370303": "张店区",
		    "370304": "博山区",
		    "370305": "临淄区",
		    "370306": "周村区",
		    "370321": "桓台县",
		    "370322": "高青县",
		    "370323": "沂源县",
		    "370324": "其它区",
		    "370400": "枣庄市",
		    "370402": "市中区",
		    "370403": "薛城区",
		    "370404": "峄城区",
		    "370405": "台儿庄区",
		    "370406": "山亭区",
		    "370481": "滕州市",
		    "370482": "其它区",
		    "370500": "东营市",
		    "370502": "东营区",
		    "370503": "河口区",
		    "370521": "垦利县",
		    "370522": "利津县",
		    "370523": "广饶县",
		    "370591": "其它区",
		    "370600": "烟台市",
		    "370602": "芝罘区",
		    "370611": "福山区",
		    "370612": "牟平区",
		    "370613": "莱山区",
		    "370634": "长岛县",
		    "370681": "龙口市",
		    "370682": "莱阳市",
		    "370683": "莱州市",
		    "370684": "蓬莱市",
		    "370685": "招远市",
		    "370686": "栖霞市",
		    "370687": "海阳市",
		    "370688": "其它区",
		    "370700": "潍坊市",
		    "370702": "潍城区",
		    "370703": "寒亭区",
		    "370704": "坊子区",
		    "370705": "奎文区",
		    "370724": "临朐县",
		    "370725": "昌乐县",
		    "370781": "青州市",
		    "370782": "诸城市",
		    "370783": "寿光市",
		    "370784": "安丘市",
		    "370785": "高密市",
		    "370786": "昌邑市",
		    "370787": "其它区",
		    "370800": "济宁市",
		    "370802": "市中区",
		    "370811": "任城区",
		    "370826": "微山县",
		    "370827": "鱼台县",
		    "370828": "金乡县",
		    "370829": "嘉祥县",
		    "370830": "汶上县",
		    "370831": "泗水县",
		    "370832": "梁山县",
		    "370881": "曲阜市",
		    "370882": "兖州市",
		    "370883": "邹城市",
		    "370884": "其它区",
		    "370900": "泰安市",
		    "370902": "泰山区",
		    "370903": "岱岳区",
		    "370921": "宁阳县",
		    "370923": "东平县",
		    "370982": "新泰市",
		    "370983": "肥城市",
		    "370984": "其它区",
		    "371000": "威海市",
		    "371002": "环翠区",
		    "371081": "文登市",
		    "371082": "荣成市",
		    "371083": "乳山市",
		    "371084": "其它区",
		    "371100": "日照市",
		    "371102": "东港区",
		    "371103": "岚山区",
		    "371121": "五莲县",
		    "371122": "莒县",
		    "371123": "其它区",
		    "371200": "莱芜市",
		    "371202": "莱城区",
		    "371203": "钢城区",
		    "371204": "其它区",
		    "371300": "临沂市",
		    "371302": "兰山区",
		    "371311": "罗庄区",
		    "371312": "河东区",
		    "371321": "沂南县",
		    "371322": "郯城县",
		    "371323": "沂水县",
		    "371324": "苍山县",
		    "371325": "费县",
		    "371326": "平邑县",
		    "371327": "莒南县",
		    "371328": "蒙阴县",
		    "371329": "临沭县",
		    "371330": "其它区",
		    "371400": "德州市",
		    "371402": "德城区",
		    "371421": "陵县",
		    "371422": "宁津县",
		    "371423": "庆云县",
		    "371424": "临邑县",
		    "371425": "齐河县",
		    "371426": "平原县",
		    "371427": "夏津县",
		    "371428": "武城县",
		    "371481": "乐陵市",
		    "371482": "禹城市",
		    "371483": "其它区",
		    "371500": "聊城市",
		    "371502": "东昌府区",
		    "371521": "阳谷县",
		    "371522": "莘县",
		    "371523": "茌平县",
		    "371524": "东阿县",
		    "371525": "冠县",
		    "371526": "高唐县",
		    "371581": "临清市",
		    "371582": "其它区",
		    "371600": "滨州市",
		    "371602": "滨城区",
		    "371621": "惠民县",
		    "371622": "阳信县",
		    "371623": "无棣县",
		    "371624": "沾化县",
		    "371625": "博兴县",
		    "371626": "邹平县",
		    "371627": "其它区",
		    "371700": "菏泽市",
		    "371702": "牡丹区",
		    "371721": "曹县",
		    "371722": "单县",
		    "371723": "成武县",
		    "371724": "巨野县",
		    "371725": "郓城县",
		    "371726": "鄄城县",
		    "371727": "定陶县",
		    "371728": "东明县",
		    "371729": "其它区",
		    "410000": "河南省",
		    "410100": "郑州市",
		    "410102": "中原区",
		    "410103": "二七区",
		    "410104": "管城回族区",
		    "410105": "金水区",
		    "410106": "上街区",
		    "410108": "惠济区",
		    "410122": "中牟县",
		    "410181": "巩义市",
		    "410182": "荥阳市",
		    "410183": "新密市",
		    "410184": "新郑市",
		    "410185": "登封市",
		    "410188": "其它区",
		    "410200": "开封市",
		    "410202": "龙亭区",
		    "410203": "顺河回族区",
		    "410204": "鼓楼区",
		    "410205": "禹王台区",
		    "410211": "金明区",
		    "410221": "杞县",
		    "410222": "通许县",
		    "410223": "尉氏县",
		    "410224": "开封县",
		    "410225": "兰考县",
		    "410226": "其它区",
		    "410300": "洛阳市",
		    "410302": "老城区",
		    "410303": "西工区",
		    "410304": "瀍河回族区",
		    "410305": "涧西区",
		    "410306": "吉利区",
		    "410307": "洛龙区",
		    "410322": "孟津县",
		    "410323": "新安县",
		    "410324": "栾川县",
		    "410325": "嵩县",
		    "410326": "汝阳县",
		    "410327": "宜阳县",
		    "410328": "洛宁县",
		    "410329": "伊川县",
		    "410381": "偃师市",
		    "410400": "平顶山市",
		    "410402": "新华区",
		    "410403": "卫东区",
		    "410404": "石龙区",
		    "410411": "湛河区",
		    "410421": "宝丰县",
		    "410422": "叶县",
		    "410423": "鲁山县",
		    "410425": "郏县",
		    "410481": "舞钢市",
		    "410482": "汝州市",
		    "410483": "其它区",
		    "410500": "安阳市",
		    "410502": "文峰区",
		    "410503": "北关区",
		    "410505": "殷都区",
		    "410506": "龙安区",
		    "410522": "安阳县",
		    "410523": "汤阴县",
		    "410526": "滑县",
		    "410527": "内黄县",
		    "410581": "林州市",
		    "410582": "其它区",
		    "410600": "鹤壁市",
		    "410602": "鹤山区",
		    "410603": "山城区",
		    "410611": "淇滨区",
		    "410621": "浚县",
		    "410622": "淇县",
		    "410623": "其它区",
		    "410700": "新乡市",
		    "410702": "红旗区",
		    "410703": "卫滨区",
		    "410704": "凤泉区",
		    "410711": "牧野区",
		    "410721": "新乡县",
		    "410724": "获嘉县",
		    "410725": "原阳县",
		    "410726": "延津县",
		    "410727": "封丘县",
		    "410728": "长垣县",
		    "410781": "卫辉市",
		    "410782": "辉县市",
		    "410783": "其它区",
		    "410800": "焦作市",
		    "410802": "解放区",
		    "410803": "中站区",
		    "410804": "马村区",
		    "410811": "山阳区",
		    "410821": "修武县",
		    "410822": "博爱县",
		    "410823": "武陟县",
		    "410825": "温县",
		    "410881": "济源市",
		    "410882": "沁阳市",
		    "410883": "孟州市",
		    "410884": "其它区",
		    "410900": "濮阳市",
		    "410902": "华龙区",
		    "410922": "清丰县",
		    "410923": "南乐县",
		    "410926": "范县",
		    "410927": "台前县",
		    "410928": "濮阳县",
		    "410929": "其它区",
		    "411000": "许昌市",
		    "411002": "魏都区",
		    "411023": "许昌县",
		    "411024": "鄢陵县",
		    "411025": "襄城县",
		    "411081": "禹州市",
		    "411082": "长葛市",
		    "411083": "其它区",
		    "411100": "漯河市",
		    "411102": "源汇区",
		    "411103": "郾城区",
		    "411104": "召陵区",
		    "411121": "舞阳县",
		    "411122": "临颍县",
		    "411123": "其它区",
		    "411200": "三门峡市",
		    "411202": "湖滨区",
		    "411221": "渑池县",
		    "411222": "陕县",
		    "411224": "卢氏县",
		    "411281": "义马市",
		    "411282": "灵宝市",
		    "411283": "其它区",
		    "411300": "南阳市",
		    "411302": "宛城区",
		    "411303": "卧龙区",
		    "411321": "南召县",
		    "411322": "方城县",
		    "411323": "西峡县",
		    "411324": "镇平县",
		    "411325": "内乡县",
		    "411326": "淅川县",
		    "411327": "社旗县",
		    "411328": "唐河县",
		    "411329": "新野县",
		    "411330": "桐柏县",
		    "411381": "邓州市",
		    "411382": "其它区",
		    "411400": "商丘市",
		    "411402": "梁园区",
		    "411403": "睢阳区",
		    "411421": "民权县",
		    "411422": "睢县",
		    "411423": "宁陵县",
		    "411424": "柘城县",
		    "411425": "虞城县",
		    "411426": "夏邑县",
		    "411481": "永城市",
		    "411482": "其它区",
		    "411500": "信阳市",
		    "411502": "浉河区",
		    "411503": "平桥区",
		    "411521": "罗山县",
		    "411522": "光山县",
		    "411523": "新县",
		    "411524": "商城县",
		    "411525": "固始县",
		    "411526": "潢川县",
		    "411527": "淮滨县",
		    "411528": "息县",
		    "411529": "其它区",
		    "411600": "周口市",
		    "411602": "川汇区",
		    "411621": "扶沟县",
		    "411622": "西华县",
		    "411623": "商水县",
		    "411624": "沈丘县",
		    "411625": "郸城县",
		    "411626": "淮阳县",
		    "411627": "太康县",
		    "411628": "鹿邑县",
		    "411681": "项城市",
		    "411682": "其它区",
		    "411700": "驻马店市",
		    "411702": "驿城区",
		    "411721": "西平县",
		    "411722": "上蔡县",
		    "411723": "平舆县",
		    "411724": "正阳县",
		    "411725": "确山县",
		    "411726": "泌阳县",
		    "411727": "汝南县",
		    "411728": "遂平县",
		    "411729": "新蔡县",
		    "411730": "其它区",
		    "420000": "湖北省",
		    "420100": "武汉市",
		    "420102": "江岸区",
		    "420103": "江汉区",
		    "420104": "硚口区",
		    "420105": "汉阳区",
		    "420106": "武昌区",
		    "420107": "青山区",
		    "420111": "洪山区",
		    "420112": "东西湖区",
		    "420113": "汉南区",
		    "420114": "蔡甸区",
		    "420115": "江夏区",
		    "420116": "黄陂区",
		    "420117": "新洲区",
		    "420118": "其它区",
		    "420200": "黄石市",
		    "420202": "黄石港区",
		    "420203": "西塞山区",
		    "420204": "下陆区",
		    "420205": "铁山区",
		    "420222": "阳新县",
		    "420281": "大冶市",
		    "420282": "其它区",
		    "420300": "十堰市",
		    "420302": "茅箭区",
		    "420303": "张湾区",
		    "420321": "郧县",
		    "420322": "郧西县",
		    "420323": "竹山县",
		    "420324": "竹溪县",
		    "420325": "房县",
		    "420381": "丹江口市",
		    "420383": "其它区",
		    "420500": "宜昌市",
		    "420502": "西陵区",
		    "420503": "伍家岗区",
		    "420504": "点军区",
		    "420505": "猇亭区",
		    "420506": "夷陵区",
		    "420525": "远安县",
		    "420526": "兴山县",
		    "420527": "秭归县",
		    "420528": "长阳土家族自治县",
		    "420529": "五峰土家族自治县",
		    "420581": "宜都市",
		    "420582": "当阳市",
		    "420583": "枝江市",
		    "420584": "其它区",
		    "420600": "襄阳市",
		    "420602": "襄城区",
		    "420606": "樊城区",
		    "420607": "襄州区",
		    "420624": "南漳县",
		    "420625": "谷城县",
		    "420626": "保康县",
		    "420682": "老河口市",
		    "420683": "枣阳市",
		    "420684": "宜城市",
		    "420685": "其它区",
		    "420700": "鄂州市",
		    "420702": "梁子湖区",
		    "420703": "华容区",
		    "420704": "鄂城区",
		    "420705": "其它区",
		    "420800": "荆门市",
		    "420802": "东宝区",
		    "420804": "掇刀区",
		    "420821": "京山县",
		    "420822": "沙洋县",
		    "420881": "钟祥市",
		    "420882": "其它区",
		    "420900": "孝感市",
		    "420902": "孝南区",
		    "420921": "孝昌县",
		    "420922": "大悟县",
		    "420923": "云梦县",
		    "420981": "应城市",
		    "420982": "安陆市",
		    "420984": "汉川市",
		    "420985": "其它区",
		    "421000": "荆州市",
		    "421002": "沙市区",
		    "421003": "荆州区",
		    "421022": "公安县",
		    "421023": "监利县",
		    "421024": "江陵县",
		    "421081": "石首市",
		    "421083": "洪湖市",
		    "421087": "松滋市",
		    "421088": "其它区",
		    "421100": "黄冈市",
		    "421102": "黄州区",
		    "421121": "团风县",
		    "421122": "红安县",
		    "421123": "罗田县",
		    "421124": "英山县",
		    "421125": "浠水县",
		    "421126": "蕲春县",
		    "421127": "黄梅县",
		    "421181": "麻城市",
		    "421182": "武穴市",
		    "421183": "其它区",
		    "421200": "咸宁市",
		    "421202": "咸安区",
		    "421221": "嘉鱼县",
		    "421222": "通城县",
		    "421223": "崇阳县",
		    "421224": "通山县",
		    "421281": "赤壁市",
		    "421283": "其它区",
		    "421300": "随州市",
		    "421302": "曾都区",
		    "421321": "随县",
		    "421381": "广水市",
		    "421382": "其它区",
		    "422800": "恩施土家族苗族自治州",
		    "422801": "恩施市",
		    "422802": "利川市",
		    "422822": "建始县",
		    "422823": "巴东县",
		    "422825": "宣恩县",
		    "422826": "咸丰县",
		    "422827": "来凤县",
		    "422828": "鹤峰县",
		    "422829": "其它区",
		    "429004": "仙桃市",
		    "429005": "潜江市",
		    "429006": "天门市",
		    "429021": "神农架林区",
		    "430000": "湖南省",
		    "430100": "长沙市",
		    "430102": "芙蓉区",
		    "430103": "天心区",
		    "430104": "岳麓区",
		    "430105": "开福区",
		    "430111": "雨花区",
		    "430121": "长沙县",
		    "430122": "望城区",
		    "430124": "宁乡县",
		    "430181": "浏阳市",
		    "430182": "其它区",
		    "430200": "株洲市",
		    "430202": "荷塘区",
		    "430203": "芦淞区",
		    "430204": "石峰区",
		    "430211": "天元区",
		    "430221": "株洲县",
		    "430223": "攸县",
		    "430224": "茶陵县",
		    "430225": "炎陵县",
		    "430281": "醴陵市",
		    "430282": "其它区",
		    "430300": "湘潭市",
		    "430302": "雨湖区",
		    "430304": "岳塘区",
		    "430321": "湘潭县",
		    "430381": "湘乡市",
		    "430382": "韶山市",
		    "430383": "其它区",
		    "430400": "衡阳市",
		    "430405": "珠晖区",
		    "430406": "雁峰区",
		    "430407": "石鼓区",
		    "430408": "蒸湘区",
		    "430412": "南岳区",
		    "430421": "衡阳县",
		    "430422": "衡南县",
		    "430423": "衡山县",
		    "430424": "衡东县",
		    "430426": "祁东县",
		    "430481": "耒阳市",
		    "430482": "常宁市",
		    "430483": "其它区",
		    "430500": "邵阳市",
		    "430502": "双清区",
		    "430503": "大祥区",
		    "430511": "北塔区",
		    "430521": "邵东县",
		    "430522": "新邵县",
		    "430523": "邵阳县",
		    "430524": "隆回县",
		    "430525": "洞口县",
		    "430527": "绥宁县",
		    "430528": "新宁县",
		    "430529": "城步苗族自治县",
		    "430581": "武冈市",
		    "430582": "其它区",
		    "430600": "岳阳市",
		    "430602": "岳阳楼区",
		    "430603": "云溪区",
		    "430611": "君山区",
		    "430621": "岳阳县",
		    "430623": "华容县",
		    "430624": "湘阴县",
		    "430626": "平江县",
		    "430681": "汨罗市",
		    "430682": "临湘市",
		    "430683": "其它区",
		    "430700": "常德市",
		    "430702": "武陵区",
		    "430703": "鼎城区",
		    "430721": "安乡县",
		    "430722": "汉寿县",
		    "430723": "澧县",
		    "430724": "临澧县",
		    "430725": "桃源县",
		    "430726": "石门县",
		    "430781": "津市市",
		    "430782": "其它区",
		    "430800": "张家界市",
		    "430802": "永定区",
		    "430811": "武陵源区",
		    "430821": "慈利县",
		    "430822": "桑植县",
		    "430823": "其它区",
		    "430900": "益阳市",
		    "430902": "资阳区",
		    "430903": "赫山区",
		    "430921": "南县",
		    "430922": "桃江县",
		    "430923": "安化县",
		    "430981": "沅江市",
		    "430982": "其它区",
		    "431000": "郴州市",
		    "431002": "北湖区",
		    "431003": "苏仙区",
		    "431021": "桂阳县",
		    "431022": "宜章县",
		    "431023": "永兴县",
		    "431024": "嘉禾县",
		    "431025": "临武县",
		    "431026": "汝城县",
		    "431027": "桂东县",
		    "431028": "安仁县",
		    "431081": "资兴市",
		    "431082": "其它区",
		    "431100": "永州市",
		    "431102": "零陵区",
		    "431103": "冷水滩区",
		    "431121": "祁阳县",
		    "431122": "东安县",
		    "431123": "双牌县",
		    "431124": "道县",
		    "431125": "江永县",
		    "431126": "宁远县",
		    "431127": "蓝山县",
		    "431128": "新田县",
		    "431129": "江华瑶族自治县",
		    "431130": "其它区",
		    "431200": "怀化市",
		    "431202": "鹤城区",
		    "431221": "中方县",
		    "431222": "沅陵县",
		    "431223": "辰溪县",
		    "431224": "溆浦县",
		    "431225": "会同县",
		    "431226": "麻阳苗族自治县",
		    "431227": "新晃侗族自治县",
		    "431228": "芷江侗族自治县",
		    "431229": "靖州苗族侗族自治县",
		    "431230": "通道侗族自治县",
		    "431281": "洪江市",
		    "431282": "其它区",
		    "431300": "娄底市",
		    "431302": "娄星区",
		    "431321": "双峰县",
		    "431322": "新化县",
		    "431381": "冷水江市",
		    "431382": "涟源市",
		    "431383": "其它区",
		    "433100": "湘西土家族苗族自治州",
		    "433101": "吉首市",
		    "433122": "泸溪县",
		    "433123": "凤凰县",
		    "433124": "花垣县",
		    "433125": "保靖县",
		    "433126": "古丈县",
		    "433127": "永顺县",
		    "433130": "龙山县",
		    "433131": "其它区",
		    "440000": "广东省",
		    "440100": "广州市",
		    "440103": "荔湾区",
		    "440104": "越秀区",
		    "440105": "海珠区",
		    "440106": "天河区",
		    "440111": "白云区",
		    "440112": "黄埔区",
		    "440113": "番禺区",
		    "440114": "花都区",
		    "440115": "南沙区",
		    "440116": "萝岗区",
		    "440183": "增城市",
		    "440184": "从化市",
		    "440189": "其它区",
		    "440200": "韶关市",
		    "440203": "武江区",
		    "440204": "浈江区",
		    "440205": "曲江区",
		    "440222": "始兴县",
		    "440224": "仁化县",
		    "440229": "翁源县",
		    "440232": "乳源瑶族自治县",
		    "440233": "新丰县",
		    "440281": "乐昌市",
		    "440282": "南雄市",
		    "440283": "其它区",
		    "440300": "深圳市",
		    "440303": "罗湖区",
		    "440304": "福田区",
		    "440305": "南山区",
		    "440306": "宝安区",
		    "440307": "龙岗区",
		    "440308": "盐田区",
		    "440309": "其它区",
		    "440320": "光明新区",
		    "440321": "坪山新区",
		    "440322": "大鹏新区",
		    "440323": "龙华新区",
		    "440400": "珠海市",
		    "440402": "香洲区",
		    "440403": "斗门区",
		    "440404": "金湾区",
		    "440488": "其它区",
		    "440500": "汕头市",
		    "440507": "龙湖区",
		    "440511": "金平区",
		    "440512": "濠江区",
		    "440513": "潮阳区",
		    "440514": "潮南区",
		    "440515": "澄海区",
		    "440523": "南澳县",
		    "440524": "其它区",
		    "440600": "佛山市",
		    "440604": "禅城区",
		    "440605": "南海区",
		    "440606": "顺德区",
		    "440607": "三水区",
		    "440608": "高明区",
		    "440609": "其它区",
		    "440700": "江门市",
		    "440703": "蓬江区",
		    "440704": "江海区",
		    "440705": "新会区",
		    "440781": "台山市",
		    "440783": "开平市",
		    "440784": "鹤山市",
		    "440785": "恩平市",
		    "440786": "其它区",
		    "440800": "湛江市",
		    "440802": "赤坎区",
		    "440803": "霞山区",
		    "440804": "坡头区",
		    "440811": "麻章区",
		    "440823": "遂溪县",
		    "440825": "徐闻县",
		    "440881": "廉江市",
		    "440882": "雷州市",
		    "440883": "吴川市",
		    "440884": "其它区",
		    "440900": "茂名市",
		    "440902": "茂南区",
		    "440903": "茂港区",
		    "440923": "电白县",
		    "440981": "高州市",
		    "440982": "化州市",
		    "440983": "信宜市",
		    "440984": "其它区",
		    "441200": "肇庆市",
		    "441202": "端州区",
		    "441203": "鼎湖区",
		    "441223": "广宁县",
		    "441224": "怀集县",
		    "441225": "封开县",
		    "441226": "德庆县",
		    "441283": "高要市",
		    "441284": "四会市",
		    "441285": "其它区",
		    "441300": "惠州市",
		    "441302": "惠城区",
		    "441303": "惠阳区",
		    "441322": "博罗县",
		    "441323": "惠东县",
		    "441324": "龙门县",
		    "441325": "其它区",
		    "441400": "梅州市",
		    "441402": "梅江区",
		    "441421": "梅县",
		    "441422": "大埔县",
		    "441423": "丰顺县",
		    "441424": "五华县",
		    "441426": "平远县",
		    "441427": "蕉岭县",
		    "441481": "兴宁市",
		    "441482": "其它区",
		    "441500": "汕尾市",
		    "441502": "城区",
		    "441521": "海丰县",
		    "441523": "陆河县",
		    "441581": "陆丰市",
		    "441582": "其它区",
		    "441600": "河源市",
		    "441602": "源城区",
		    "441621": "紫金县",
		    "441622": "龙川县",
		    "441623": "连平县",
		    "441624": "和平县",
		    "441625": "东源县",
		    "441626": "其它区",
		    "441700": "阳江市",
		    "441702": "江城区",
		    "441721": "阳西县",
		    "441723": "阳东县",
		    "441781": "阳春市",
		    "441782": "其它区",
		    "441800": "清远市",
		    "441802": "清城区",
		    "441821": "佛冈县",
		    "441823": "阳山县",
		    "441825": "连山壮族瑶族自治县",
		    "441826": "连南瑶族自治县",
		    "441827": "清新区",
		    "441881": "英德市",
		    "441882": "连州市",
		    "441883": "其它区",
		    "441900": "东莞市",
		    "442000": "中山市",
		    "442101": "东沙群岛",
		    "445100": "潮州市",
		    "445102": "湘桥区",
		    "445121": "潮安区",
		    "445122": "饶平县",
		    "445186": "其它区",
		    "445200": "揭阳市",
		    "445202": "榕城区",
		    "445221": "揭东区",
		    "445222": "揭西县",
		    "445224": "惠来县",
		    "445281": "普宁市",
		    "445285": "其它区",
		    "445300": "云浮市",
		    "445302": "云城区",
		    "445321": "新兴县",
		    "445322": "郁南县",
		    "445323": "云安县",
		    "445381": "罗定市",
		    "445382": "其它区",
		    "450000": "广西壮族自治区",
		    "450100": "南宁市",
		    "450102": "兴宁区",
		    "450103": "青秀区",
		    "450105": "江南区",
		    "450107": "西乡塘区",
		    "450108": "良庆区",
		    "450109": "邕宁区",
		    "450122": "武鸣县",
		    "450123": "隆安县",
		    "450124": "马山县",
		    "450125": "上林县",
		    "450126": "宾阳县",
		    "450127": "横县",
		    "450128": "其它区",
		    "450200": "柳州市",
		    "450202": "城中区",
		    "450203": "鱼峰区",
		    "450204": "柳南区",
		    "450205": "柳北区",
		    "450221": "柳江县",
		    "450222": "柳城县",
		    "450223": "鹿寨县",
		    "450224": "融安县",
		    "450225": "融水苗族自治县",
		    "450226": "三江侗族自治县",
		    "450227": "其它区",
		    "450300": "桂林市",
		    "450302": "秀峰区",
		    "450303": "叠彩区",
		    "450304": "象山区",
		    "450305": "七星区",
		    "450311": "雁山区",
		    "450321": "阳朔县",
		    "450322": "临桂区",
		    "450323": "灵川县",
		    "450324": "全州县",
		    "450325": "兴安县",
		    "450326": "永福县",
		    "450327": "灌阳县",
		    "450328": "龙胜各族自治县",
		    "450329": "资源县",
		    "450330": "平乐县",
		    "450331": "荔浦县",
		    "450332": "恭城瑶族自治县",
		    "450333": "其它区",
		    "450400": "梧州市",
		    "450403": "万秀区",
		    "450405": "长洲区",
		    "450406": "龙圩区",
		    "450421": "苍梧县",
		    "450422": "藤县",
		    "450423": "蒙山县",
		    "450481": "岑溪市",
		    "450482": "其它区",
		    "450500": "北海市",
		    "450502": "海城区",
		    "450503": "银海区",
		    "450512": "铁山港区",
		    "450521": "合浦县",
		    "450522": "其它区",
		    "450600": "防城港市",
		    "450602": "港口区",
		    "450603": "防城区",
		    "450621": "上思县",
		    "450681": "东兴市",
		    "450682": "其它区",
		    "450700": "钦州市",
		    "450702": "钦南区",
		    "450703": "钦北区",
		    "450721": "灵山县",
		    "450722": "浦北县",
		    "450723": "其它区",
		    "450800": "贵港市",
		    "450802": "港北区",
		    "450803": "港南区",
		    "450804": "覃塘区",
		    "450821": "平南县",
		    "450881": "桂平市",
		    "450882": "其它区",
		    "450900": "玉林市",
		    "450902": "玉州区",
		    "450903": "福绵区",
		    "450921": "容县",
		    "450922": "陆川县",
		    "450923": "博白县",
		    "450924": "兴业县",
		    "450981": "北流市",
		    "450982": "其它区",
		    "451000": "百色市",
		    "451002": "右江区",
		    "451021": "田阳县",
		    "451022": "田东县",
		    "451023": "平果县",
		    "451024": "德保县",
		    "451025": "靖西县",
		    "451026": "那坡县",
		    "451027": "凌云县",
		    "451028": "乐业县",
		    "451029": "田林县",
		    "451030": "西林县",
		    "451031": "隆林各族自治县",
		    "451032": "其它区",
		    "451100": "贺州市",
		    "451102": "八步区",
		    "451119": "平桂管理区",
		    "451121": "昭平县",
		    "451122": "钟山县",
		    "451123": "富川瑶族自治县",
		    "451124": "其它区",
		    "451200": "河池市",
		    "451202": "金城江区",
		    "451221": "南丹县",
		    "451222": "天峨县",
		    "451223": "凤山县",
		    "451224": "东兰县",
		    "451225": "罗城仫佬族自治县",
		    "451226": "环江毛南族自治县",
		    "451227": "巴马瑶族自治县",
		    "451228": "都安瑶族自治县",
		    "451229": "大化瑶族自治县",
		    "451281": "宜州市",
		    "451282": "其它区",
		    "451300": "来宾市",
		    "451302": "兴宾区",
		    "451321": "忻城县",
		    "451322": "象州县",
		    "451323": "武宣县",
		    "451324": "金秀瑶族自治县",
		    "451381": "合山市",
		    "451382": "其它区",
		    "451400": "崇左市",
		    "451402": "江州区",
		    "451421": "扶绥县",
		    "451422": "宁明县",
		    "451423": "龙州县",
		    "451424": "大新县",
		    "451425": "天等县",
		    "451481": "凭祥市",
		    "451482": "其它区",
		    "460000": "海南省",
		    "460100": "海口市",
		    "460105": "秀英区",
		    "460106": "龙华区",
		    "460107": "琼山区",
		    "460108": "美兰区",
		    "460109": "其它区",
		    "460200": "三亚市",
		    "460300": "三沙市",
		    "460321": "西沙群岛",
		    "460322": "南沙群岛",
		    "460323": "中沙群岛的岛礁及其海域",
		    "469001": "五指山市",
		    "469002": "琼海市",
		    "469003": "儋州市",
		    "469005": "文昌市",
		    "469006": "万宁市",
		    "469007": "东方市",
		    "469025": "定安县",
		    "469026": "屯昌县",
		    "469027": "澄迈县",
		    "469028": "临高县",
		    "469030": "白沙黎族自治县",
		    "469031": "昌江黎族自治县",
		    "469033": "乐东黎族自治县",
		    "469034": "陵水黎族自治县",
		    "469035": "保亭黎族苗族自治县",
		    "469036": "琼中黎族苗族自治县",
		    "471005": "其它区",
		    "500000": "重庆",
		    "500100": "重庆市",
		    "500101": "万州区",
		    "500102": "涪陵区",
		    "500103": "渝中区",
		    "500104": "大渡口区",
		    "500105": "江北区",
		    "500106": "沙坪坝区",
		    "500107": "九龙坡区",
		    "500108": "南岸区",
		    "500109": "北碚区",
		    "500110": "万盛区",
		    "500111": "双桥区",
		    "500112": "渝北区",
		    "500113": "巴南区",
		    "500114": "黔江区",
		    "500115": "长寿区",
		    "500222": "綦江区",
		    "500223": "潼南县",
		    "500224": "铜梁县",
		    "500225": "大足区",
		    "500226": "荣昌县",
		    "500227": "璧山县",
		    "500228": "梁平县",
		    "500229": "城口县",
		    "500230": "丰都县",
		    "500231": "垫江县",
		    "500232": "武隆县",
		    "500233": "忠县",
		    "500234": "开县",
		    "500235": "云阳县",
		    "500236": "奉节县",
		    "500237": "巫山县",
		    "500238": "巫溪县",
		    "500240": "石柱土家族自治县",
		    "500241": "秀山土家族苗族自治县",
		    "500242": "酉阳土家族苗族自治县",
		    "500243": "彭水苗族土家族自治县",
		    "500381": "江津区",
		    "500382": "合川区",
		    "500383": "永川区",
		    "500384": "南川区",
		    "500385": "其它区",
		    "510000": "四川省",
		    "510100": "成都市",
		    "510104": "锦江区",
		    "510105": "青羊区",
		    "510106": "金牛区",
		    "510107": "武侯区",
		    "510108": "成华区",
		    "510112": "龙泉驿区",
		    "510113": "青白江区",
		    "510114": "新都区",
		    "510115": "温江区",
		    "510121": "金堂县",
		    "510122": "双流县",
		    "510124": "郫县",
		    "510129": "大邑县",
		    "510131": "蒲江县",
		    "510132": "新津县",
		    "510181": "都江堰市",
		    "510182": "彭州市",
		    "510183": "邛崃市",
		    "510184": "崇州市",
		    "510185": "其它区",
		    "510300": "自贡市",
		    "510302": "自流井区",
		    "510303": "贡井区",
		    "510304": "大安区",
		    "510311": "沿滩区",
		    "510321": "荣县",
		    "510322": "富顺县",
		    "510323": "其它区",
		    "510400": "攀枝花市",
		    "510402": "东区",
		    "510403": "西区",
		    "510411": "仁和区",
		    "510421": "米易县",
		    "510422": "盐边县",
		    "510423": "其它区",
		    "510500": "泸州市",
		    "510502": "江阳区",
		    "510503": "纳溪区",
		    "510504": "龙马潭区",
		    "510521": "泸县",
		    "510522": "合江县",
		    "510524": "叙永县",
		    "510525": "古蔺县",
		    "510526": "其它区",
		    "510600": "德阳市",
		    "510603": "旌阳区",
		    "510623": "中江县",
		    "510626": "罗江县",
		    "510681": "广汉市",
		    "510682": "什邡市",
		    "510683": "绵竹市",
		    "510684": "其它区",
		    "510700": "绵阳市",
		    "510703": "涪城区",
		    "510704": "游仙区",
		    "510722": "三台县",
		    "510723": "盐亭县",
		    "510724": "安县",
		    "510725": "梓潼县",
		    "510726": "北川羌族自治县",
		    "510727": "平武县",
		    "510781": "江油市",
		    "510782": "其它区",
		    "510800": "广元市",
		    "510802": "利州区",
		    "510811": "昭化区",
		    "510812": "朝天区",
		    "510821": "旺苍县",
		    "510822": "青川县",
		    "510823": "剑阁县",
		    "510824": "苍溪县",
		    "510825": "其它区",
		    "510900": "遂宁市",
		    "510903": "船山区",
		    "510904": "安居区",
		    "510921": "蓬溪县",
		    "510922": "射洪县",
		    "510923": "大英县",
		    "510924": "其它区",
		    "511000": "内江市",
		    "511002": "市中区",
		    "511011": "东兴区",
		    "511024": "威远县",
		    "511025": "资中县",
		    "511028": "隆昌县",
		    "511029": "其它区",
		    "511100": "乐山市",
		    "511102": "市中区",
		    "511111": "沙湾区",
		    "511112": "五通桥区",
		    "511113": "金口河区",
		    "511123": "犍为县",
		    "511124": "井研县",
		    "511126": "夹江县",
		    "511129": "沐川县",
		    "511132": "峨边彝族自治县",
		    "511133": "马边彝族自治县",
		    "511181": "峨眉山市",
		    "511182": "其它区",
		    "511300": "南充市",
		    "511302": "顺庆区",
		    "511303": "高坪区",
		    "511304": "嘉陵区",
		    "511321": "南部县",
		    "511322": "营山县",
		    "511323": "蓬安县",
		    "511324": "仪陇县",
		    "511325": "西充县",
		    "511381": "阆中市",
		    "511382": "其它区",
		    "511400": "眉山市",
		    "511402": "东坡区",
		    "511421": "仁寿县",
		    "511422": "彭山县",
		    "511423": "洪雅县",
		    "511424": "丹棱县",
		    "511425": "青神县",
		    "511426": "其它区",
		    "511500": "宜宾市",
		    "511502": "翠屏区",
		    "511521": "宜宾县",
		    "511522": "南溪区",
		    "511523": "江安县",
		    "511524": "长宁县",
		    "511525": "高县",
		    "511526": "珙县",
		    "511527": "筠连县",
		    "511528": "兴文县",
		    "511529": "屏山县",
		    "511530": "其它区",
		    "511600": "广安市",
		    "511602": "广安区",
		    "511603": "前锋区",
		    "511621": "岳池县",
		    "511622": "武胜县",
		    "511623": "邻水县",
		    "511681": "华蓥市",
		    "511683": "其它区",
		    "511700": "达州市",
		    "511702": "通川区",
		    "511721": "达川区",
		    "511722": "宣汉县",
		    "511723": "开江县",
		    "511724": "大竹县",
		    "511725": "渠县",
		    "511781": "万源市",
		    "511782": "其它区",
		    "511800": "雅安市",
		    "511802": "雨城区",
		    "511821": "名山区",
		    "511822": "荥经县",
		    "511823": "汉源县",
		    "511824": "石棉县",
		    "511825": "天全县",
		    "511826": "芦山县",
		    "511827": "宝兴县",
		    "511828": "其它区",
		    "511900": "巴中市",
		    "511902": "巴州区",
		    "511903": "恩阳区",
		    "511921": "通江县",
		    "511922": "南江县",
		    "511923": "平昌县",
		    "511924": "其它区",
		    "512000": "资阳市",
		    "512002": "雁江区",
		    "512021": "安岳县",
		    "512022": "乐至县",
		    "512081": "简阳市",
		    "512082": "其它区",
		    "513200": "阿坝藏族羌族自治州",
		    "513221": "汶川县",
		    "513222": "理县",
		    "513223": "茂县",
		    "513224": "松潘县",
		    "513225": "九寨沟县",
		    "513226": "金川县",
		    "513227": "小金县",
		    "513228": "黑水县",
		    "513229": "马尔康县",
		    "513230": "壤塘县",
		    "513231": "阿坝县",
		    "513232": "若尔盖县",
		    "513233": "红原县",
		    "513234": "其它区",
		    "513300": "甘孜藏族自治州",
		    "513321": "康定县",
		    "513322": "泸定县",
		    "513323": "丹巴县",
		    "513324": "九龙县",
		    "513325": "雅江县",
		    "513326": "道孚县",
		    "513327": "炉霍县",
		    "513328": "甘孜县",
		    "513329": "新龙县",
		    "513330": "德格县",
		    "513331": "白玉县",
		    "513332": "石渠县",
		    "513333": "色达县",
		    "513334": "理塘县",
		    "513335": "巴塘县",
		    "513336": "乡城县",
		    "513337": "稻城县",
		    "513338": "得荣县",
		    "513339": "其它区",
		    "513400": "凉山彝族自治州",
		    "513401": "西昌市",
		    "513422": "木里藏族自治县",
		    "513423": "盐源县",
		    "513424": "德昌县",
		    "513425": "会理县",
		    "513426": "会东县",
		    "513427": "宁南县",
		    "513428": "普格县",
		    "513429": "布拖县",
		    "513430": "金阳县",
		    "513431": "昭觉县",
		    "513432": "喜德县",
		    "513433": "冕宁县",
		    "513434": "越西县",
		    "513435": "甘洛县",
		    "513436": "美姑县",
		    "513437": "雷波县",
		    "513438": "其它区",
		    "520000": "贵州省",
		    "520100": "贵阳市",
		    "520102": "南明区",
		    "520103": "云岩区",
		    "520111": "花溪区",
		    "520112": "乌当区",
		    "520113": "白云区",
		    "520121": "开阳县",
		    "520122": "息烽县",
		    "520123": "修文县",
		    "520151": "观山湖区",
		    "520181": "清镇市",
		    "520182": "其它区",
		    "520200": "六盘水市",
		    "520201": "钟山区",
		    "520203": "六枝特区",
		    "520221": "水城县",
		    "520222": "盘县",
		    "520223": "其它区",
		    "520300": "遵义市",
		    "520302": "红花岗区",
		    "520303": "汇川区",
		    "520321": "遵义县",
		    "520322": "桐梓县",
		    "520323": "绥阳县",
		    "520324": "正安县",
		    "520325": "道真仡佬族苗族自治县",
		    "520326": "务川仡佬族苗族自治县",
		    "520327": "凤冈县",
		    "520328": "湄潭县",
		    "520329": "余庆县",
		    "520330": "习水县",
		    "520381": "赤水市",
		    "520382": "仁怀市",
		    "520383": "其它区",
		    "520400": "安顺市",
		    "520402": "西秀区",
		    "520421": "平坝县",
		    "520422": "普定县",
		    "520423": "镇宁布依族苗族自治县",
		    "520424": "关岭布依族苗族自治县",
		    "520425": "紫云苗族布依族自治县",
		    "520426": "其它区",
		    "522200": "铜仁市",
		    "522201": "碧江区",
		    "522222": "江口县",
		    "522223": "玉屏侗族自治县",
		    "522224": "石阡县",
		    "522225": "思南县",
		    "522226": "印江土家族苗族自治县",
		    "522227": "德江县",
		    "522228": "沿河土家族自治县",
		    "522229": "松桃苗族自治县",
		    "522230": "万山区",
		    "522231": "其它区",
		    "522300": "黔西南布依族苗族自治州",
		    "522301": "兴义市",
		    "522322": "兴仁县",
		    "522323": "普安县",
		    "522324": "晴隆县",
		    "522325": "贞丰县",
		    "522326": "望谟县",
		    "522327": "册亨县",
		    "522328": "安龙县",
		    "522329": "其它区",
		    "522400": "毕节市",
		    "522401": "七星关区",
		    "522422": "大方县",
		    "522423": "黔西县",
		    "522424": "金沙县",
		    "522425": "织金县",
		    "522426": "纳雍县",
		    "522427": "威宁彝族回族苗族自治县",
		    "522428": "赫章县",
		    "522429": "其它区",
		    "522600": "黔东南苗族侗族自治州",
		    "522601": "凯里市",
		    "522622": "黄平县",
		    "522623": "施秉县",
		    "522624": "三穗县",
		    "522625": "镇远县",
		    "522626": "岑巩县",
		    "522627": "天柱县",
		    "522628": "锦屏县",
		    "522629": "剑河县",
		    "522630": "台江县",
		    "522631": "黎平县",
		    "522632": "榕江县",
		    "522633": "从江县",
		    "522634": "雷山县",
		    "522635": "麻江县",
		    "522636": "丹寨县",
		    "522637": "其它区",
		    "522700": "黔南布依族苗族自治州",
		    "522701": "都匀市",
		    "522702": "福泉市",
		    "522722": "荔波县",
		    "522723": "贵定县",
		    "522725": "瓮安县",
		    "522726": "独山县",
		    "522727": "平塘县",
		    "522728": "罗甸县",
		    "522729": "长顺县",
		    "522730": "龙里县",
		    "522731": "惠水县",
		    "522732": "三都水族自治县",
		    "522733": "其它区",
		    "530000": "云南省",
		    "530100": "昆明市",
		    "530102": "五华区",
		    "530103": "盘龙区",
		    "530111": "官渡区",
		    "530112": "西山区",
		    "530113": "东川区",
		    "530121": "呈贡区",
		    "530122": "晋宁县",
		    "530124": "富民县",
		    "530125": "宜良县",
		    "530126": "石林彝族自治县",
		    "530127": "嵩明县",
		    "530128": "禄劝彝族苗族自治县",
		    "530129": "寻甸回族彝族自治县",
		    "530181": "安宁市",
		    "530182": "其它区",
		    "530300": "曲靖市",
		    "530302": "麒麟区",
		    "530321": "马龙县",
		    "530322": "陆良县",
		    "530323": "师宗县",
		    "530324": "罗平县",
		    "530325": "富源县",
		    "530326": "会泽县",
		    "530328": "沾益县",
		    "530381": "宣威市",
		    "530382": "其它区",
		    "530400": "玉溪市",
		    "530402": "红塔区",
		    "530421": "江川县",
		    "530422": "澄江县",
		    "530423": "通海县",
		    "530424": "华宁县",
		    "530425": "易门县",
		    "530426": "峨山彝族自治县",
		    "530427": "新平彝族傣族自治县",
		    "530428": "元江哈尼族彝族傣族自治县",
		    "530429": "其它区",
		    "530500": "保山市",
		    "530502": "隆阳区",
		    "530521": "施甸县",
		    "530522": "腾冲县",
		    "530523": "龙陵县",
		    "530524": "昌宁县",
		    "530525": "其它区",
		    "530600": "昭通市",
		    "530602": "昭阳区",
		    "530621": "鲁甸县",
		    "530622": "巧家县",
		    "530623": "盐津县",
		    "530624": "大关县",
		    "530625": "永善县",
		    "530626": "绥江县",
		    "530627": "镇雄县",
		    "530628": "彝良县",
		    "530629": "威信县",
		    "530630": "水富县",
		    "530631": "其它区",
		    "530700": "丽江市",
		    "530702": "古城区",
		    "530721": "玉龙纳西族自治县",
		    "530722": "永胜县",
		    "530723": "华坪县",
		    "530724": "宁蒗彝族自治县",
		    "530725": "其它区",
		    "530800": "普洱市",
		    "530802": "思茅区",
		    "530821": "宁洱哈尼族彝族自治县",
		    "530822": "墨江哈尼族自治县",
		    "530823": "景东彝族自治县",
		    "530824": "景谷傣族彝族自治县",
		    "530825": "镇沅彝族哈尼族拉祜族自治县",
		    "530826": "江城哈尼族彝族自治县",
		    "530827": "孟连傣族拉祜族佤族自治县",
		    "530828": "澜沧拉祜族自治县",
		    "530829": "西盟佤族自治县",
		    "530830": "其它区",
		    "530900": "临沧市",
		    "530902": "临翔区",
		    "530921": "凤庆县",
		    "530922": "云县",
		    "530923": "永德县",
		    "530924": "镇康县",
		    "530925": "双江拉祜族佤族布朗族傣族自治县",
		    "530926": "耿马傣族佤族自治县",
		    "530927": "沧源佤族自治县",
		    "530928": "其它区",
		    "532300": "楚雄彝族自治州",
		    "532301": "楚雄市",
		    "532322": "双柏县",
		    "532323": "牟定县",
		    "532324": "南华县",
		    "532325": "姚安县",
		    "532326": "大姚县",
		    "532327": "永仁县",
		    "532328": "元谋县",
		    "532329": "武定县",
		    "532331": "禄丰县",
		    "532332": "其它区",
		    "532500": "红河哈尼族彝族自治州",
		    "532501": "个旧市",
		    "532502": "开远市",
		    "532522": "蒙自市",
		    "532523": "屏边苗族自治县",
		    "532524": "建水县",
		    "532525": "石屏县",
		    "532526": "弥勒市",
		    "532527": "泸西县",
		    "532528": "元阳县",
		    "532529": "红河县",
		    "532530": "金平苗族瑶族傣族自治县",
		    "532531": "绿春县",
		    "532532": "河口瑶族自治县",
		    "532533": "其它区",
		    "532600": "文山壮族苗族自治州",
		    "532621": "文山市",
		    "532622": "砚山县",
		    "532623": "西畴县",
		    "532624": "麻栗坡县",
		    "532625": "马关县",
		    "532626": "丘北县",
		    "532627": "广南县",
		    "532628": "富宁县",
		    "532629": "其它区",
		    "532800": "西双版纳傣族自治州",
		    "532801": "景洪市",
		    "532822": "勐海县",
		    "532823": "勐腊县",
		    "532824": "其它区",
		    "532900": "大理白族自治州",
		    "532901": "大理市",
		    "532922": "漾濞彝族自治县",
		    "532923": "祥云县",
		    "532924": "宾川县",
		    "532925": "弥渡县",
		    "532926": "南涧彝族自治县",
		    "532927": "巍山彝族回族自治县",
		    "532928": "永平县",
		    "532929": "云龙县",
		    "532930": "洱源县",
		    "532931": "剑川县",
		    "532932": "鹤庆县",
		    "532933": "其它区",
		    "533100": "德宏傣族景颇族自治州",
		    "533102": "瑞丽市",
		    "533103": "芒市",
		    "533122": "梁河县",
		    "533123": "盈江县",
		    "533124": "陇川县",
		    "533125": "其它区",
		    "533300": "怒江傈僳族自治州",
		    "533321": "泸水县",
		    "533323": "福贡县",
		    "533324": "贡山独龙族怒族自治县",
		    "533325": "兰坪白族普米族自治县",
		    "533326": "其它区",
		    "533400": "迪庆藏族自治州",
		    "533421": "香格里拉县",
		    "533422": "德钦县",
		    "533423": "维西傈僳族自治县",
		    "533424": "其它区",
		    "540000": "西藏自治区",
		    "540100": "拉萨市",
		    "540102": "城关区",
		    "540121": "林周县",
		    "540122": "当雄县",
		    "540123": "尼木县",
		    "540124": "曲水县",
		    "540125": "堆龙德庆县",
		    "540126": "达孜县",
		    "540127": "墨竹工卡县",
		    "540128": "其它区",
		    "542100": "昌都地区",
		    "542121": "昌都县",
		    "542122": "江达县",
		    "542123": "贡觉县",
		    "542124": "类乌齐县",
		    "542125": "丁青县",
		    "542126": "察雅县",
		    "542127": "八宿县",
		    "542128": "左贡县",
		    "542129": "芒康县",
		    "542132": "洛隆县",
		    "542133": "边坝县",
		    "542134": "其它区",
		    "542200": "山南地区",
		    "542221": "乃东县",
		    "542222": "扎囊县",
		    "542223": "贡嘎县",
		    "542224": "桑日县",
		    "542225": "琼结县",
		    "542226": "曲松县",
		    "542227": "措美县",
		    "542228": "洛扎县",
		    "542229": "加查县",
		    "542231": "隆子县",
		    "542232": "错那县",
		    "542233": "浪卡子县",
		    "542234": "其它区",
		    "542300": "日喀则地区",
		    "542301": "日喀则市",
		    "542322": "南木林县",
		    "542323": "江孜县",
		    "542324": "定日县",
		    "542325": "萨迦县",
		    "542326": "拉孜县",
		    "542327": "昂仁县",
		    "542328": "谢通门县",
		    "542329": "白朗县",
		    "542330": "仁布县",
		    "542331": "康马县",
		    "542332": "定结县",
		    "542333": "仲巴县",
		    "542334": "亚东县",
		    "542335": "吉隆县",
		    "542336": "聂拉木县",
		    "542337": "萨嘎县",
		    "542338": "岗巴县",
		    "542339": "其它区",
		    "542400": "那曲地区",
		    "542421": "那曲县",
		    "542422": "嘉黎县",
		    "542423": "比如县",
		    "542424": "聂荣县",
		    "542425": "安多县",
		    "542426": "申扎县",
		    "542427": "索县",
		    "542428": "班戈县",
		    "542429": "巴青县",
		    "542430": "尼玛县",
		    "542431": "其它区",
		    "542432": "双湖县",
		    "542500": "阿里地区",
		    "542521": "普兰县",
		    "542522": "札达县",
		    "542523": "噶尔县",
		    "542524": "日土县",
		    "542525": "革吉县",
		    "542526": "改则县",
		    "542527": "措勤县",
		    "542528": "其它区",
		    "542600": "林芝地区",
		    "542621": "林芝县",
		    "542622": "工布江达县",
		    "542623": "米林县",
		    "542624": "墨脱县",
		    "542625": "波密县",
		    "542626": "察隅县",
		    "542627": "朗县",
		    "542628": "其它区",
		    "610000": "陕西省",
		    "610100": "西安市",
		    "610102": "新城区",
		    "610103": "碑林区",
		    "610104": "莲湖区",
		    "610111": "灞桥区",
		    "610112": "未央区",
		    "610113": "雁塔区",
		    "610114": "阎良区",
		    "610115": "临潼区",
		    "610116": "长安区",
		    "610122": "蓝田县",
		    "610124": "周至县",
		    "610125": "户县",
		    "610126": "高陵县",
		    "610127": "其它区",
		    "610200": "铜川市",
		    "610202": "王益区",
		    "610203": "印台区",
		    "610204": "耀州区",
		    "610222": "宜君县",
		    "610223": "其它区",
		    "610300": "宝鸡市",
		    "610302": "渭滨区",
		    "610303": "金台区",
		    "610304": "陈仓区",
		    "610322": "凤翔县",
		    "610323": "岐山县",
		    "610324": "扶风县",
		    "610326": "眉县",
		    "610327": "陇县",
		    "610328": "千阳县",
		    "610329": "麟游县",
		    "610330": "凤县",
		    "610331": "太白县",
		    "610332": "其它区",
		    "610400": "咸阳市",
		    "610402": "秦都区",
		    "610403": "杨陵区",
		    "610404": "渭城区",
		    "610422": "三原县",
		    "610423": "泾阳县",
		    "610424": "乾县",
		    "610425": "礼泉县",
		    "610426": "永寿县",
		    "610427": "彬县",
		    "610428": "长武县",
		    "610429": "旬邑县",
		    "610430": "淳化县",
		    "610431": "武功县",
		    "610481": "兴平市",
		    "610482": "其它区",
		    "610500": "渭南市",
		    "610502": "临渭区",
		    "610521": "华县",
		    "610522": "潼关县",
		    "610523": "大荔县",
		    "610524": "合阳县",
		    "610525": "澄城县",
		    "610526": "蒲城县",
		    "610527": "白水县",
		    "610528": "富平县",
		    "610581": "韩城市",
		    "610582": "华阴市",
		    "610583": "其它区",
		    "610600": "延安市",
		    "610602": "宝塔区",
		    "610621": "延长县",
		    "610622": "延川县",
		    "610623": "子长县",
		    "610624": "安塞县",
		    "610625": "志丹县",
		    "610626": "吴起县",
		    "610627": "甘泉县",
		    "610628": "富县",
		    "610629": "洛川县",
		    "610630": "宜川县",
		    "610631": "黄龙县",
		    "610632": "黄陵县",
		    "610633": "其它区",
		    "610700": "汉中市",
		    "610702": "汉台区",
		    "610721": "南郑县",
		    "610722": "城固县",
		    "610723": "洋县",
		    "610724": "西乡县",
		    "610725": "勉县",
		    "610726": "宁强县",
		    "610727": "略阳县",
		    "610728": "镇巴县",
		    "610729": "留坝县",
		    "610730": "佛坪县",
		    "610731": "其它区",
		    "610800": "榆林市",
		    "610802": "榆阳区",
		    "610821": "神木县",
		    "610822": "府谷县",
		    "610823": "横山县",
		    "610824": "靖边县",
		    "610825": "定边县",
		    "610826": "绥德县",
		    "610827": "米脂县",
		    "610828": "佳县",
		    "610829": "吴堡县",
		    "610830": "清涧县",
		    "610831": "子洲县",
		    "610832": "其它区",
		    "610900": "安康市",
		    "610902": "汉滨区",
		    "610921": "汉阴县",
		    "610922": "石泉县",
		    "610923": "宁陕县",
		    "610924": "紫阳县",
		    "610925": "岚皋县",
		    "610926": "平利县",
		    "610927": "镇坪县",
		    "610928": "旬阳县",
		    "610929": "白河县",
		    "610930": "其它区",
		    "611000": "商洛市",
		    "611002": "商州区",
		    "611021": "洛南县",
		    "611022": "丹凤县",
		    "611023": "商南县",
		    "611024": "山阳县",
		    "611025": "镇安县",
		    "611026": "柞水县",
		    "611027": "其它区",
		    "620000": "甘肃省",
		    "620100": "兰州市",
		    "620102": "城关区",
		    "620103": "七里河区",
		    "620104": "西固区",
		    "620105": "安宁区",
		    "620111": "红古区",
		    "620121": "永登县",
		    "620122": "皋兰县",
		    "620123": "榆中县",
		    "620124": "其它区",
		    "620200": "嘉峪关市",
		    "620300": "金昌市",
		    "620302": "金川区",
		    "620321": "永昌县",
		    "620322": "其它区",
		    "620400": "白银市",
		    "620402": "白银区",
		    "620403": "平川区",
		    "620421": "靖远县",
		    "620422": "会宁县",
		    "620423": "景泰县",
		    "620424": "其它区",
		    "620500": "天水市",
		    "620502": "秦州区",
		    "620503": "麦积区",
		    "620521": "清水县",
		    "620522": "秦安县",
		    "620523": "甘谷县",
		    "620524": "武山县",
		    "620525": "张家川回族自治县",
		    "620526": "其它区",
		    "620600": "武威市",
		    "620602": "凉州区",
		    "620621": "民勤县",
		    "620622": "古浪县",
		    "620623": "天祝藏族自治县",
		    "620624": "其它区",
		    "620700": "张掖市",
		    "620702": "甘州区",
		    "620721": "肃南裕固族自治县",
		    "620722": "民乐县",
		    "620723": "临泽县",
		    "620724": "高台县",
		    "620725": "山丹县",
		    "620726": "其它区",
		    "620800": "平凉市",
		    "620802": "崆峒区",
		    "620821": "泾川县",
		    "620822": "灵台县",
		    "620823": "崇信县",
		    "620824": "华亭县",
		    "620825": "庄浪县",
		    "620826": "静宁县",
		    "620827": "其它区",
		    "620900": "酒泉市",
		    "620902": "肃州区",
		    "620921": "金塔县",
		    "620922": "瓜州县",
		    "620923": "肃北蒙古族自治县",
		    "620924": "阿克塞哈萨克族自治县",
		    "620981": "玉门市",
		    "620982": "敦煌市",
		    "620983": "其它区",
		    "621000": "庆阳市",
		    "621002": "西峰区",
		    "621021": "庆城县",
		    "621022": "环县",
		    "621023": "华池县",
		    "621024": "合水县",
		    "621025": "正宁县",
		    "621026": "宁县",
		    "621027": "镇原县",
		    "621028": "其它区",
		    "621100": "定西市",
		    "621102": "安定区",
		    "621121": "通渭县",
		    "621122": "陇西县",
		    "621123": "渭源县",
		    "621124": "临洮县",
		    "621125": "漳县",
		    "621126": "岷县",
		    "621127": "其它区",
		    "621200": "陇南市",
		    "621202": "武都区",
		    "621221": "成县",
		    "621222": "文县",
		    "621223": "宕昌县",
		    "621224": "康县",
		    "621225": "西和县",
		    "621226": "礼县",
		    "621227": "徽县",
		    "621228": "两当县",
		    "621229": "其它区",
		    "622900": "临夏回族自治州",
		    "622901": "临夏市",
		    "622921": "临夏县",
		    "622922": "康乐县",
		    "622923": "永靖县",
		    "622924": "广河县",
		    "622925": "和政县",
		    "622926": "东乡族自治县",
		    "622927": "积石山保安族东乡族撒拉族自治县",
		    "622928": "其它区",
		    "623000": "甘南藏族自治州",
		    "623001": "合作市",
		    "623021": "临潭县",
		    "623022": "卓尼县",
		    "623023": "舟曲县",
		    "623024": "迭部县",
		    "623025": "玛曲县",
		    "623026": "碌曲县",
		    "623027": "夏河县",
		    "623028": "其它区",
		    "630000": "青海省",
		    "630100": "西宁市",
		    "630102": "城东区",
		    "630103": "城中区",
		    "630104": "城西区",
		    "630105": "城北区",
		    "630121": "大通回族土族自治县",
		    "630122": "湟中县",
		    "630123": "湟源县",
		    "630124": "其它区",
		    "632100": "海东市",
		    "632121": "平安县",
		    "632122": "民和回族土族自治县",
		    "632123": "乐都区",
		    "632126": "互助土族自治县",
		    "632127": "化隆回族自治县",
		    "632128": "循化撒拉族自治县",
		    "632129": "其它区",
		    "632200": "海北藏族自治州",
		    "632221": "门源回族自治县",
		    "632222": "祁连县",
		    "632223": "海晏县",
		    "632224": "刚察县",
		    "632225": "其它区",
		    "632300": "黄南藏族自治州",
		    "632321": "同仁县",
		    "632322": "尖扎县",
		    "632323": "泽库县",
		    "632324": "河南蒙古族自治县",
		    "632325": "其它区",
		    "632500": "海南藏族自治州",
		    "632521": "共和县",
		    "632522": "同德县",
		    "632523": "贵德县",
		    "632524": "兴海县",
		    "632525": "贵南县",
		    "632526": "其它区",
		    "632600": "果洛藏族自治州",
		    "632621": "玛沁县",
		    "632622": "班玛县",
		    "632623": "甘德县",
		    "632624": "达日县",
		    "632625": "久治县",
		    "632626": "玛多县",
		    "632627": "其它区",
		    "632700": "玉树藏族自治州",
		    "632721": "玉树市",
		    "632722": "杂多县",
		    "632723": "称多县",
		    "632724": "治多县",
		    "632725": "囊谦县",
		    "632726": "曲麻莱县",
		    "632727": "其它区",
		    "632800": "海西蒙古族藏族自治州",
		    "632801": "格尔木市",
		    "632802": "德令哈市",
		    "632821": "乌兰县",
		    "632822": "都兰县",
		    "632823": "天峻县",
		    "632824": "其它区",
		    "640000": "宁夏回族自治区",
		    "640100": "银川市",
		    "640104": "兴庆区",
		    "640105": "西夏区",
		    "640106": "金凤区",
		    "640121": "永宁县",
		    "640122": "贺兰县",
		    "640181": "灵武市",
		    "640182": "其它区",
		    "640200": "石嘴山市",
		    "640202": "大武口区",
		    "640205": "惠农区",
		    "640221": "平罗县",
		    "640222": "其它区",
		    "640300": "吴忠市",
		    "640302": "利通区",
		    "640303": "红寺堡区",
		    "640323": "盐池县",
		    "640324": "同心县",
		    "640381": "青铜峡市",
		    "640382": "其它区",
		    "640400": "固原市",
		    "640402": "原州区",
		    "640422": "西吉县",
		    "640423": "隆德县",
		    "640424": "泾源县",
		    "640425": "彭阳县",
		    "640426": "其它区",
		    "640500": "中卫市",
		    "640502": "沙坡头区",
		    "640521": "中宁县",
		    "640522": "海原县",
		    "640523": "其它区",
		    "650000": "新疆维吾尔自治区",
		    "650100": "乌鲁木齐市",
		    "650102": "天山区",
		    "650103": "沙依巴克区",
		    "650104": "新市区",
		    "650105": "水磨沟区",
		    "650106": "头屯河区",
		    "650107": "达坂城区",
		    "650109": "米东区",
		    "650121": "乌鲁木齐县",
		    "650122": "其它区",
		    "650200": "克拉玛依市",
		    "650202": "独山子区",
		    "650203": "克拉玛依区",
		    "650204": "白碱滩区",
		    "650205": "乌尔禾区",
		    "650206": "其它区",
		    "652100": "吐鲁番地区",
		    "652101": "吐鲁番市",
		    "652122": "鄯善县",
		    "652123": "托克逊县",
		    "652124": "其它区",
		    "652200": "哈密地区",
		    "652201": "哈密市",
		    "652222": "巴里坤哈萨克自治县",
		    "652223": "伊吾县",
		    "652224": "其它区",
		    "652300": "昌吉回族自治州",
		    "652301": "昌吉市",
		    "652302": "阜康市",
		    "652323": "呼图壁县",
		    "652324": "玛纳斯县",
		    "652325": "奇台县",
		    "652327": "吉木萨尔县",
		    "652328": "木垒哈萨克自治县",
		    "652329": "其它区",
		    "652700": "博尔塔拉蒙古自治州",
		    "652701": "博乐市",
		    "652702": "阿拉山口市",
		    "652722": "精河县",
		    "652723": "温泉县",
		    "652724": "其它区",
		    "652800": "巴音郭楞蒙古自治州",
		    "652801": "库尔勒市",
		    "652822": "轮台县",
		    "652823": "尉犁县",
		    "652824": "若羌县",
		    "652825": "且末县",
		    "652826": "焉耆回族自治县",
		    "652827": "和静县",
		    "652828": "和硕县",
		    "652829": "博湖县",
		    "652830": "其它区",
		    "652900": "阿克苏地区",
		    "652901": "阿克苏市",
		    "652922": "温宿县",
		    "652923": "库车县",
		    "652924": "沙雅县",
		    "652925": "新和县",
		    "652926": "拜城县",
		    "652927": "乌什县",
		    "652928": "阿瓦提县",
		    "652929": "柯坪县",
		    "652930": "其它区",
		    "653000": "克孜勒苏柯尔克孜自治州",
		    "653001": "阿图什市",
		    "653022": "阿克陶县",
		    "653023": "阿合奇县",
		    "653024": "乌恰县",
		    "653025": "其它区",
		    "653100": "喀什地区",
		    "653101": "喀什市",
		    "653121": "疏附县",
		    "653122": "疏勒县",
		    "653123": "英吉沙县",
		    "653124": "泽普县",
		    "653125": "莎车县",
		    "653126": "叶城县",
		    "653127": "麦盖提县",
		    "653128": "岳普湖县",
		    "653129": "伽师县",
		    "653130": "巴楚县",
		    "653131": "塔什库尔干塔吉克自治县",
		    "653132": "其它区",
		    "653200": "和田地区",
		    "653201": "和田市",
		    "653221": "和田县",
		    "653222": "墨玉县",
		    "653223": "皮山县",
		    "653224": "洛浦县",
		    "653225": "策勒县",
		    "653226": "于田县",
		    "653227": "民丰县",
		    "653228": "其它区",
		    "654000": "伊犁哈萨克自治州",
		    "654002": "伊宁市",
		    "654003": "奎屯市",
		    "654021": "伊宁县",
		    "654022": "察布查尔锡伯自治县",
		    "654023": "霍城县",
		    "654024": "巩留县",
		    "654025": "新源县",
		    "654026": "昭苏县",
		    "654027": "特克斯县",
		    "654028": "尼勒克县",
		    "654029": "其它区",
		    "654200": "塔城地区",
		    "654201": "塔城市",
		    "654202": "乌苏市",
		    "654221": "额敏县",
		    "654223": "沙湾县",
		    "654224": "托里县",
		    "654225": "裕民县",
		    "654226": "和布克赛尔蒙古自治县",
		    "654227": "其它区",
		    "654300": "阿勒泰地区",
		    "654301": "阿勒泰市",
		    "654321": "布尔津县",
		    "654322": "富蕴县",
		    "654323": "福海县",
		    "654324": "哈巴河县",
		    "654325": "青河县",
		    "654326": "吉木乃县",
		    "654327": "其它区",
		    "659001": "石河子市",
		    "659002": "阿拉尔市",
		    "659003": "图木舒克市",
		    "659004": "五家渠市",
		    "710000": "台湾",
		    "710100": "台北市",
		    "710101": "中正区",
		    "710102": "大同区",
		    "710103": "中山区",
		    "710104": "松山区",
		    "710105": "大安区",
		    "710106": "万华区",
		    "710107": "信义区",
		    "710108": "士林区",
		    "710109": "北投区",
		    "710110": "内湖区",
		    "710111": "南港区",
		    "710112": "文山区",
		    "710113": "其它区",
		    "710200": "高雄市",
		    "710201": "新兴区",
		    "710202": "前金区",
		    "710203": "芩雅区",
		    "710204": "盐埕区",
		    "710205": "鼓山区",
		    "710206": "旗津区",
		    "710207": "前镇区",
		    "710208": "三民区",
		    "710209": "左营区",
		    "710210": "楠梓区",
		    "710211": "小港区",
		    "710212": "其它区",
		    "710241": "苓雅区",
		    "710242": "仁武区",
		    "710243": "大社区",
		    "710244": "冈山区",
		    "710245": "路竹区",
		    "710246": "阿莲区",
		    "710247": "田寮区",
		    "710248": "燕巢区",
		    "710249": "桥头区",
		    "710250": "梓官区",
		    "710251": "弥陀区",
		    "710252": "永安区",
		    "710253": "湖内区",
		    "710254": "凤山区",
		    "710255": "大寮区",
		    "710256": "林园区",
		    "710257": "鸟松区",
		    "710258": "大树区",
		    "710259": "旗山区",
		    "710260": "美浓区",
		    "710261": "六龟区",
		    "710262": "内门区",
		    "710263": "杉林区",
		    "710264": "甲仙区",
		    "710265": "桃源区",
		    "710266": "那玛夏区",
		    "710267": "茂林区",
		    "710268": "茄萣区",
		    "710300": "台南市",
		    "710301": "中西区",
		    "710302": "东区",
		    "710303": "南区",
		    "710304": "北区",
		    "710305": "安平区",
		    "710306": "安南区",
		    "710307": "其它区",
		    "710339": "永康区",
		    "710340": "归仁区",
		    "710341": "新化区",
		    "710342": "左镇区",
		    "710343": "玉井区",
		    "710344": "楠西区",
		    "710345": "南化区",
		    "710346": "仁德区",
		    "710347": "关庙区",
		    "710348": "龙崎区",
		    "710349": "官田区",
		    "710350": "麻豆区",
		    "710351": "佳里区",
		    "710352": "西港区",
		    "710353": "七股区",
		    "710354": "将军区",
		    "710355": "学甲区",
		    "710356": "北门区",
		    "710357": "新营区",
		    "710358": "后壁区",
		    "710359": "白河区",
		    "710360": "东山区",
		    "710361": "六甲区",
		    "710362": "下营区",
		    "710363": "柳营区",
		    "710364": "盐水区",
		    "710365": "善化区",
		    "710366": "大内区",
		    "710367": "山上区",
		    "710368": "新市区",
		    "710369": "安定区",
		    "710400": "台中市",
		    "710401": "中区",
		    "710402": "东区",
		    "710403": "南区",
		    "710404": "西区",
		    "710405": "北区",
		    "710406": "北屯区",
		    "710407": "西屯区",
		    "710408": "南屯区",
		    "710409": "其它区",
		    "710431": "太平区",
		    "710432": "大里区",
		    "710433": "雾峰区",
		    "710434": "乌日区",
		    "710435": "丰原区",
		    "710436": "后里区",
		    "710437": "石冈区",
		    "710438": "东势区",
		    "710439": "和平区",
		    "710440": "新社区",
		    "710441": "潭子区",
		    "710442": "大雅区",
		    "710443": "神冈区",
		    "710444": "大肚区",
		    "710445": "沙鹿区",
		    "710446": "龙井区",
		    "710447": "梧栖区",
		    "710448": "清水区",
		    "710449": "大甲区",
		    "710450": "外埔区",
		    "710451": "大安区",
		    "710500": "金门县",
		    "710507": "金沙镇",
		    "710508": "金湖镇",
		    "710509": "金宁乡",
		    "710510": "金城镇",
		    "710511": "烈屿乡",
		    "710512": "乌坵乡",
		    "710600": "南投县",
		    "710614": "南投市",
		    "710615": "中寮乡",
		    "710616": "草屯镇",
		    "710617": "国姓乡",
		    "710618": "埔里镇",
		    "710619": "仁爱乡",
		    "710620": "名间乡",
		    "710621": "集集镇",
		    "710622": "水里乡",
		    "710623": "鱼池乡",
		    "710624": "信义乡",
		    "710625": "竹山镇",
		    "710626": "鹿谷乡",
		    "710700": "基隆市",
		    "710701": "仁爱区",
		    "710702": "信义区",
		    "710703": "中正区",
		    "710704": "中山区",
		    "710705": "安乐区",
		    "710706": "暖暖区",
		    "710707": "七堵区",
		    "710708": "其它区",
		    "710800": "新竹市",
		    "710801": "东区",
		    "710802": "北区",
		    "710803": "香山区",
		    "710804": "其它区",
		    "710900": "嘉义市",
		    "710901": "东区",
		    "710902": "西区",
		    "710903": "其它区",
		    "711100": "新北市",
		    "711130": "万里区",
		    "711131": "金山区",
		    "711132": "板桥区",
		    "711133": "汐止区",
		    "711134": "深坑区",
		    "711135": "石碇区",
		    "711136": "瑞芳区",
		    "711137": "平溪区",
		    "711138": "双溪区",
		    "711139": "贡寮区",
		    "711140": "新店区",
		    "711141": "坪林区",
		    "711142": "乌来区",
		    "711143": "永和区",
		    "711144": "中和区",
		    "711145": "土城区",
		    "711146": "三峡区",
		    "711147": "树林区",
		    "711148": "莺歌区",
		    "711149": "三重区",
		    "711150": "新庄区",
		    "711151": "泰山区",
		    "711152": "林口区",
		    "711153": "芦洲区",
		    "711154": "五股区",
		    "711155": "八里区",
		    "711156": "淡水区",
		    "711157": "三芝区",
		    "711158": "石门区",
		    "711200": "宜兰县",
		    "711214": "宜兰市",
		    "711215": "头城镇",
		    "711216": "礁溪乡",
		    "711217": "壮围乡",
		    "711218": "员山乡",
		    "711219": "罗东镇",
		    "711220": "三星乡",
		    "711221": "大同乡",
		    "711222": "五结乡",
		    "711223": "冬山乡",
		    "711224": "苏澳镇",
		    "711225": "南澳乡",
		    "711226": "钓鱼台",
		    "711300": "新竹县",
		    "711314": "竹北市",
		    "711315": "湖口乡",
		    "711316": "新丰乡",
		    "711317": "新埔镇",
		    "711318": "关西镇",
		    "711319": "芎林乡",
		    "711320": "宝山乡",
		    "711321": "竹东镇",
		    "711322": "五峰乡",
		    "711323": "横山乡",
		    "711324": "尖石乡",
		    "711325": "北埔乡",
		    "711326": "峨眉乡",
		    "711400": "桃园县",
		    "711414": "中坜市",
		    "711415": "平镇市",
		    "711416": "龙潭乡",
		    "711417": "杨梅市",
		    "711418": "新屋乡",
		    "711419": "观音乡",
		    "711420": "桃园市",
		    "711421": "龟山乡",
		    "711422": "八德市",
		    "711423": "大溪镇",
		    "711424": "复兴乡",
		    "711425": "大园乡",
		    "711426": "芦竹乡",
		    "711500": "苗栗县",
		    "711519": "竹南镇",
		    "711520": "头份镇",
		    "711521": "三湾乡",
		    "711522": "南庄乡",
		    "711523": "狮潭乡",
		    "711524": "后龙镇",
		    "711525": "通霄镇",
		    "711526": "苑里镇",
		    "711527": "苗栗市",
		    "711528": "造桥乡",
		    "711529": "头屋乡",
		    "711530": "公馆乡",
		    "711531": "大湖乡",
		    "711532": "泰安乡",
		    "711533": "铜锣乡",
		    "711534": "三义乡",
		    "711535": "西湖乡",
		    "711536": "卓兰镇",
		    "711700": "彰化县",
		    "711727": "彰化市",
		    "711728": "芬园乡",
		    "711729": "花坛乡",
		    "711730": "秀水乡",
		    "711731": "鹿港镇",
		    "711732": "福兴乡",
		    "711733": "线西乡",
		    "711734": "和美镇",
		    "711735": "伸港乡",
		    "711736": "员林镇",
		    "711737": "社头乡",
		    "711738": "永靖乡",
		    "711739": "埔心乡",
		    "711740": "溪湖镇",
		    "711741": "大村乡",
		    "711742": "埔盐乡",
		    "711743": "田中镇",
		    "711744": "北斗镇",
		    "711745": "田尾乡",
		    "711746": "埤头乡",
		    "711747": "溪州乡",
		    "711748": "竹塘乡",
		    "711749": "二林镇",
		    "711750": "大城乡",
		    "711751": "芳苑乡",
		    "711752": "二水乡",
		    "711900": "嘉义县",
		    "711919": "番路乡",
		    "711920": "梅山乡",
		    "711921": "竹崎乡",
		    "711922": "阿里山乡",
		    "711923": "中埔乡",
		    "711924": "大埔乡",
		    "711925": "水上乡",
		    "711926": "鹿草乡",
		    "711927": "太保市",
		    "711928": "朴子市",
		    "711929": "东石乡",
		    "711930": "六脚乡",
		    "711931": "新港乡",
		    "711932": "民雄乡",
		    "711933": "大林镇",
		    "711934": "溪口乡",
		    "711935": "义竹乡",
		    "711936": "布袋镇",
		    "712100": "云林县",
		    "712121": "斗南镇",
		    "712122": "大埤乡",
		    "712123": "虎尾镇",
		    "712124": "土库镇",
		    "712125": "褒忠乡",
		    "712126": "东势乡",
		    "712127": "台西乡",
		    "712128": "仑背乡",
		    "712129": "麦寮乡",
		    "712130": "斗六市",
		    "712131": "林内乡",
		    "712132": "古坑乡",
		    "712133": "莿桐乡",
		    "712134": "西螺镇",
		    "712135": "二仑乡",
		    "712136": "北港镇",
		    "712137": "水林乡",
		    "712138": "口湖乡",
		    "712139": "四湖乡",
		    "712140": "元长乡",
		    "712400": "屏东县",
		    "712434": "屏东市",
		    "712435": "三地门乡",
		    "712436": "雾台乡",
		    "712437": "玛家乡",
		    "712438": "九如乡",
		    "712439": "里港乡",
		    "712440": "高树乡",
		    "712441": "盐埔乡",
		    "712442": "长治乡",
		    "712443": "麟洛乡",
		    "712444": "竹田乡",
		    "712445": "内埔乡",
		    "712446": "万丹乡",
		    "712447": "潮州镇",
		    "712448": "泰武乡",
		    "712449": "来义乡",
		    "712450": "万峦乡",
		    "712451": "崁顶乡",
		    "712452": "新埤乡",
		    "712453": "南州乡",
		    "712454": "林边乡",
		    "712455": "东港镇",
		    "712456": "琉球乡",
		    "712457": "佳冬乡",
		    "712458": "新园乡",
		    "712459": "枋寮乡",
		    "712460": "枋山乡",
		    "712461": "春日乡",
		    "712462": "狮子乡",
		    "712463": "车城乡",
		    "712464": "牡丹乡",
		    "712465": "恒春镇",
		    "712466": "满州乡",
		    "712500": "台东县",
		    "712517": "台东市",
		    "712518": "绿岛乡",
		    "712519": "兰屿乡",
		    "712520": "延平乡",
		    "712521": "卑南乡",
		    "712522": "鹿野乡",
		    "712523": "关山镇",
		    "712524": "海端乡",
		    "712525": "池上乡",
		    "712526": "东河乡",
		    "712527": "成功镇",
		    "712528": "长滨乡",
		    "712529": "金峰乡",
		    "712530": "大武乡",
		    "712531": "达仁乡",
		    "712532": "太麻里乡",
		    "712600": "花莲县",
		    "712615": "花莲市",
		    "712616": "新城乡",
		    "712617": "太鲁阁",
		    "712618": "秀林乡",
		    "712619": "吉安乡",
		    "712620": "寿丰乡",
		    "712621": "凤林镇",
		    "712622": "光复乡",
		    "712623": "丰滨乡",
		    "712624": "瑞穗乡",
		    "712625": "万荣乡",
		    "712626": "玉里镇",
		    "712627": "卓溪乡",
		    "712628": "富里乡",
		    "712700": "澎湖县",
		    "712707": "马公市",
		    "712708": "西屿乡",
		    "712709": "望安乡",
		    "712710": "七美乡",
		    "712711": "白沙乡",
		    "712712": "湖西乡",
		    "712800": "连江县",
		    "712805": "南竿乡",
		    "712806": "北竿乡",
		    "712807": "莒光乡",
		    "712808": "东引乡",
		    "810000": "香港特别行政区",
		    "810100": "香港岛",
		    "810101": "中西区",
		    "810102": "湾仔",
		    "810103": "东区",
		    "810104": "南区",
		    "810200": "九龙",
		    "810201": "九龙城区",
		    "810202": "油尖旺区",
		    "810203": "深水埗区",
		    "810204": "黄大仙区",
		    "810205": "观塘区",
		    "810300": "新界",
		    "810301": "北区",
		    "810302": "大埔区",
		    "810303": "沙田区",
		    "810304": "西贡区",
		    "810305": "元朗区",
		    "810306": "屯门区",
		    "810307": "荃湾区",
		    "810308": "葵青区",
		    "810309": "离岛区",
		    "820000": "澳门特别行政区",
		    "820100": "澳门半岛",
		    "820200": "离岛",
		    "990000": "海外",
		    "990100": "海外"
		}
	
		// id pid/parentId name children
		function tree(list) {
		    var mapped = {}
		    for (var i = 0, item; i < list.length; i++) {
		        item = list[i]
		        if (!item || !item.id) continue
		        mapped[item.id] = item
		    }
	
		    var result = []
		    for (var ii = 0; ii < list.length; ii++) {
		        item = list[ii]
	
		        if (!item) continue
		            /* jshint -W041 */
		        if (item.pid == undefined && item.parentId == undefined) {
		            result.push(item)
		            continue
		        }
		        var parent = mapped[item.pid] || mapped[item.parentId]
		        if (!parent) continue
		        if (!parent.children) parent.children = []
		        parent.children.push(item)
		    }
		    return result
		}
	
		var DICT_FIXED = function() {
		    var fixed = []
		    for (var id in DICT) {
		        var pid = id.slice(2, 6) === '0000' ? undefined :
		            id.slice(4, 6) == '00' ? (id.slice(0, 2) + '0000') :
		            id.slice(0, 4) + '00'
		        fixed.push({
		            id: id,
		            pid: pid,
		            name: DICT[id]
		        })
		    }
		    return tree(fixed)
		}()
	
		module.exports = DICT_FIXED
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## Miscellaneous
		*/
		var DICT = __webpack_require__(18)
		module.exports = {
			// Dice
			d4: function() {
				return this.natural(1, 4)
			},
			d6: function() {
				return this.natural(1, 6)
			},
			d8: function() {
				return this.natural(1, 8)
			},
			d12: function() {
				return this.natural(1, 12)
			},
			d20: function() {
				return this.natural(1, 20)
			},
			d100: function() {
				return this.natural(1, 100)
			},
			/*
			    随机生成一个 GUID。
	
			    http://www.broofa.com/2008/09/javascript-uuid-function/
			    [UUID 规范](http://www.ietf.org/rfc/rfc4122.txt)
			        UUIDs (Universally Unique IDentifier)
			        GUIDs (Globally Unique IDentifier)
			        The formal definition of the UUID string representation is provided by the following ABNF [7]:
			            UUID                   = time-low "-" time-mid "-"
			                                   time-high-and-version "-"
			                                   clock-seq-and-reserved
			                                   clock-seq-low "-" node
			            time-low               = 4hexOctet
			            time-mid               = 2hexOctet
			            time-high-and-version  = 2hexOctet
			            clock-seq-and-reserved = hexOctet
			            clock-seq-low          = hexOctet
			            node                   = 6hexOctet
			            hexOctet               = hexDigit hexDigit
			            hexDigit =
			                "0" / "1" / "2" / "3" / "4" / "5" / "6" / "7" / "8" / "9" /
			                "a" / "b" / "c" / "d" / "e" / "f" /
			                "A" / "B" / "C" / "D" / "E" / "F"
			    
			    https://github.com/victorquinn/chancejs/blob/develop/chance.js#L1349
			*/
			guid: function() {
				var pool = "abcdefABCDEF1234567890",
					guid = this.string(pool, 8) + '-' +
					this.string(pool, 4) + '-' +
					this.string(pool, 4) + '-' +
					this.string(pool, 4) + '-' +
					this.string(pool, 12);
				return guid
			},
			uuid: function() {
				return this.guid()
			},
			/*
			    随机生成一个 18 位身份证。
	
			    [身份证](http://baike.baidu.com/view/1697.htm#4)
			        地址码 6 + 出生日期码 8 + 顺序码 3 + 校验码 1
			    [《中华人民共和国行政区划代码》国家标准(GB/T2260)](http://zhidao.baidu.com/question/1954561.html)
			*/
			id: function() {
				var id,
					sum = 0,
					rank = [
						"7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"
					],
					last = [
						"1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"
					]
	
				id = this.pick(DICT).id +
					this.date('yyyyMMdd') +
					this.string('number', 3)
	
				for (var i = 0; i < id.length; i++) {
					sum += id[i] * rank[i];
				}
				id += last[sum % 11];
	
				return id
			},
	
			/*
			    生成一个全局的自增整数。
			    类似自增主键（auto increment primary key）。
			*/
			increment: function() {
				var key = 0
				return function(step) {
					return key += (+step || 1) // step?
				}
			}(),
			inc: function(step) {
				return this.increment(step)
			}
		}
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Parser = __webpack_require__(21)
		var Handler = __webpack_require__(22)
		module.exports = {
			Parser: Parser,
			Handler: Handler
		}
	
	/***/ },
	/* 21 */
	/***/ function(module, exports) {
	
		// https://github.com/nuysoft/regexp
		// forked from https://github.com/ForbesLindesay/regexp
	
		function parse(n) {
		    if ("string" != typeof n) {
		        var l = new TypeError("The regexp to parse must be represented as a string.");
		        throw l;
		    }
		    return index = 1, cgs = {}, parser.parse(n);
		}
	
		function Token(n) {
		    this.type = n, this.offset = Token.offset(), this.text = Token.text();
		}
	
		function Alternate(n, l) {
		    Token.call(this, "alternate"), this.left = n, this.right = l;
		}
	
		function Match(n) {
		    Token.call(this, "match"), this.body = n.filter(Boolean);
		}
	
		function Group(n, l) {
		    Token.call(this, n), this.body = l;
		}
	
		function CaptureGroup(n) {
		    Group.call(this, "capture-group"), this.index = cgs[this.offset] || (cgs[this.offset] = index++), 
		    this.body = n;
		}
	
		function Quantified(n, l) {
		    Token.call(this, "quantified"), this.body = n, this.quantifier = l;
		}
	
		function Quantifier(n, l) {
		    Token.call(this, "quantifier"), this.min = n, this.max = l, this.greedy = !0;
		}
	
		function CharSet(n, l) {
		    Token.call(this, "charset"), this.invert = n, this.body = l;
		}
	
		function CharacterRange(n, l) {
		    Token.call(this, "range"), this.start = n, this.end = l;
		}
	
		function Literal(n) {
		    Token.call(this, "literal"), this.body = n, this.escaped = this.body != this.text;
		}
	
		function Unicode(n) {
		    Token.call(this, "unicode"), this.code = n.toUpperCase();
		}
	
		function Hex(n) {
		    Token.call(this, "hex"), this.code = n.toUpperCase();
		}
	
		function Octal(n) {
		    Token.call(this, "octal"), this.code = n.toUpperCase();
		}
	
		function BackReference(n) {
		    Token.call(this, "back-reference"), this.code = n.toUpperCase();
		}
	
		function ControlCharacter(n) {
		    Token.call(this, "control-character"), this.code = n.toUpperCase();
		}
	
		var parser = function() {
		    function n(n, l) {
		        function u() {
		            this.constructor = n;
		        }
		        u.prototype = l.prototype, n.prototype = new u();
		    }
		    function l(n, l, u, t, r) {
		        function e(n, l) {
		            function u(n) {
		                function l(n) {
		                    return n.charCodeAt(0).toString(16).toUpperCase();
		                }
		                return n.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(n) {
		                    return "\\x0" + l(n);
		                }).replace(/[\x10-\x1F\x80-\xFF]/g, function(n) {
		                    return "\\x" + l(n);
		                }).replace(/[\u0180-\u0FFF]/g, function(n) {
		                    return "\\u0" + l(n);
		                }).replace(/[\u1080-\uFFFF]/g, function(n) {
		                    return "\\u" + l(n);
		                });
		            }
		            var t, r;
		            switch (n.length) {
		              case 0:
		                t = "end of input";
		                break;
	
		              case 1:
		                t = n[0];
		                break;
	
		              default:
		                t = n.slice(0, -1).join(", ") + " or " + n[n.length - 1];
		            }
		            return r = l ? '"' + u(l) + '"' : "end of input", "Expected " + t + " but " + r + " found.";
		        }
		        this.expected = n, this.found = l, this.offset = u, this.line = t, this.column = r, 
		        this.name = "SyntaxError", this.message = e(n, l);
		    }
		    function u(n) {
		        function u() {
		            return n.substring(Lt, qt);
		        }
		        function t() {
		            return Lt;
		        }
		        function r(l) {
		            function u(l, u, t) {
		                var r, e;
		                for (r = u; t > r; r++) e = n.charAt(r), "\n" === e ? (l.seenCR || l.line++, l.column = 1, 
		                l.seenCR = !1) : "\r" === e || "\u2028" === e || "\u2029" === e ? (l.line++, l.column = 1, 
		                l.seenCR = !0) : (l.column++, l.seenCR = !1);
		            }
		            return Mt !== l && (Mt > l && (Mt = 0, Dt = {
		                line: 1,
		                column: 1,
		                seenCR: !1
		            }), u(Dt, Mt, l), Mt = l), Dt;
		        }
		        function e(n) {
		            Ht > qt || (qt > Ht && (Ht = qt, Ot = []), Ot.push(n));
		        }
		        function o(n) {
		            var l = 0;
		            for (n.sort(); l < n.length; ) n[l - 1] === n[l] ? n.splice(l, 1) : l++;
		        }
		        function c() {
		            var l, u, t, r, o;
		            return l = qt, u = i(), null !== u ? (t = qt, 124 === n.charCodeAt(qt) ? (r = fl, 
		            qt++) : (r = null, 0 === Wt && e(sl)), null !== r ? (o = c(), null !== o ? (r = [ r, o ], 
		            t = r) : (qt = t, t = il)) : (qt = t, t = il), null === t && (t = al), null !== t ? (Lt = l, 
		            u = hl(u, t), null === u ? (qt = l, l = u) : l = u) : (qt = l, l = il)) : (qt = l, 
		            l = il), l;
		        }
		        function i() {
		            var n, l, u, t, r;
		            if (n = qt, l = f(), null === l && (l = al), null !== l) if (u = qt, Wt++, t = d(), 
		            Wt--, null === t ? u = al : (qt = u, u = il), null !== u) {
		                for (t = [], r = h(), null === r && (r = a()); null !== r; ) t.push(r), r = h(), 
		                null === r && (r = a());
		                null !== t ? (r = s(), null === r && (r = al), null !== r ? (Lt = n, l = dl(l, t, r), 
		                null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il);
		            } else qt = n, n = il; else qt = n, n = il;
		            return n;
		        }
		        function a() {
		            var n;
		            return n = x(), null === n && (n = Q(), null === n && (n = B())), n;
		        }
		        function f() {
		            var l, u;
		            return l = qt, 94 === n.charCodeAt(qt) ? (u = pl, qt++) : (u = null, 0 === Wt && e(vl)), 
		            null !== u && (Lt = l, u = wl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function s() {
		            var l, u;
		            return l = qt, 36 === n.charCodeAt(qt) ? (u = Al, qt++) : (u = null, 0 === Wt && e(Cl)), 
		            null !== u && (Lt = l, u = gl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function h() {
		            var n, l, u;
		            return n = qt, l = a(), null !== l ? (u = d(), null !== u ? (Lt = n, l = bl(l, u), 
		            null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, n = il), n;
		        }
		        function d() {
		            var n, l, u;
		            return Wt++, n = qt, l = p(), null !== l ? (u = k(), null === u && (u = al), null !== u ? (Lt = n, 
		            l = Tl(l, u), null === l ? (qt = n, n = l) : n = l) : (qt = n, n = il)) : (qt = n, 
		            n = il), Wt--, null === n && (l = null, 0 === Wt && e(kl)), n;
		        }
		        function p() {
		            var n;
		            return n = v(), null === n && (n = w(), null === n && (n = A(), null === n && (n = C(), 
		            null === n && (n = g(), null === n && (n = b()))))), n;
		        }
		        function v() {
		            var l, u, t, r, o, c;
		            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), 
		            null !== u ? (t = T(), null !== t ? (44 === n.charCodeAt(qt) ? (r = ml, qt++) : (r = null, 
		            0 === Wt && e(Rl)), null !== r ? (o = T(), null !== o ? (125 === n.charCodeAt(qt) ? (c = Fl, 
		            qt++) : (c = null, 0 === Wt && e(Ql)), null !== c ? (Lt = l, u = Sl(t, o), null === u ? (qt = l, 
		            l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function w() {
		            var l, u, t, r;
		            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), 
		            null !== u ? (t = T(), null !== t ? (n.substr(qt, 2) === Ul ? (r = Ul, qt += 2) : (r = null, 
		            0 === Wt && e(El)), null !== r ? (Lt = l, u = Gl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
		        }
		        function A() {
		            var l, u, t, r;
		            return l = qt, 123 === n.charCodeAt(qt) ? (u = xl, qt++) : (u = null, 0 === Wt && e(yl)), 
		            null !== u ? (t = T(), null !== t ? (125 === n.charCodeAt(qt) ? (r = Fl, qt++) : (r = null, 
		            0 === Wt && e(Ql)), null !== r ? (Lt = l, u = Bl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
		        }
		        function C() {
		            var l, u;
		            return l = qt, 43 === n.charCodeAt(qt) ? (u = jl, qt++) : (u = null, 0 === Wt && e($l)), 
		            null !== u && (Lt = l, u = ql()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function g() {
		            var l, u;
		            return l = qt, 42 === n.charCodeAt(qt) ? (u = Ll, qt++) : (u = null, 0 === Wt && e(Ml)), 
		            null !== u && (Lt = l, u = Dl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function b() {
		            var l, u;
		            return l = qt, 63 === n.charCodeAt(qt) ? (u = Hl, qt++) : (u = null, 0 === Wt && e(Ol)), 
		            null !== u && (Lt = l, u = Wl()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function k() {
		            var l;
		            return 63 === n.charCodeAt(qt) ? (l = Hl, qt++) : (l = null, 0 === Wt && e(Ol)), 
		            l;
		        }
		        function T() {
		            var l, u, t;
		            if (l = qt, u = [], zl.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 
		            0 === Wt && e(Il)), null !== t) for (;null !== t; ) u.push(t), zl.test(n.charAt(qt)) ? (t = n.charAt(qt), 
		            qt++) : (t = null, 0 === Wt && e(Il)); else u = il;
		            return null !== u && (Lt = l, u = Jl(u)), null === u ? (qt = l, l = u) : l = u, 
		            l;
		        }
		        function x() {
		            var l, u, t, r;
		            return l = qt, 40 === n.charCodeAt(qt) ? (u = Kl, qt++) : (u = null, 0 === Wt && e(Nl)), 
		            null !== u ? (t = R(), null === t && (t = F(), null === t && (t = m(), null === t && (t = y()))), 
		            null !== t ? (41 === n.charCodeAt(qt) ? (r = Pl, qt++) : (r = null, 0 === Wt && e(Vl)), 
		            null !== r ? (Lt = l, u = Xl(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il)) : (qt = l, l = il), l;
		        }
		        function y() {
		            var n, l;
		            return n = qt, l = c(), null !== l && (Lt = n, l = Yl(l)), null === l ? (qt = n, 
		            n = l) : n = l, n;
		        }
		        function m() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === Zl ? (u = Zl, qt += 2) : (u = null, 0 === Wt && e(_l)), 
		            null !== u ? (t = c(), null !== t ? (Lt = l, u = nu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function R() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === lu ? (u = lu, qt += 2) : (u = null, 0 === Wt && e(uu)), 
		            null !== u ? (t = c(), null !== t ? (Lt = l, u = tu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function F() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === ru ? (u = ru, qt += 2) : (u = null, 0 === Wt && e(eu)), 
		            null !== u ? (t = c(), null !== t ? (Lt = l, u = ou(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function Q() {
		            var l, u, t, r, o;
		            if (Wt++, l = qt, 91 === n.charCodeAt(qt) ? (u = iu, qt++) : (u = null, 0 === Wt && e(au)), 
		            null !== u) if (94 === n.charCodeAt(qt) ? (t = pl, qt++) : (t = null, 0 === Wt && e(vl)), 
		            null === t && (t = al), null !== t) {
		                for (r = [], o = S(), null === o && (o = U()); null !== o; ) r.push(o), o = S(), 
		                null === o && (o = U());
		                null !== r ? (93 === n.charCodeAt(qt) ? (o = fu, qt++) : (o = null, 0 === Wt && e(su)), 
		                null !== o ? (Lt = l, u = hu(t, r), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il)) : (qt = l, l = il);
		            } else qt = l, l = il; else qt = l, l = il;
		            return Wt--, null === l && (u = null, 0 === Wt && e(cu)), l;
		        }
		        function S() {
		            var l, u, t, r;
		            return Wt++, l = qt, u = U(), null !== u ? (45 === n.charCodeAt(qt) ? (t = pu, qt++) : (t = null, 
		            0 === Wt && e(vu)), null !== t ? (r = U(), null !== r ? (Lt = l, u = wu(u, r), null === u ? (qt = l, 
		            l = u) : l = u) : (qt = l, l = il)) : (qt = l, l = il)) : (qt = l, l = il), Wt--, 
		            null === l && (u = null, 0 === Wt && e(du)), l;
		        }
		        function U() {
		            var n, l;
		            return Wt++, n = G(), null === n && (n = E()), Wt--, null === n && (l = null, 0 === Wt && e(Au)), 
		            n;
		        }
		        function E() {
		            var l, u;
		            return l = qt, Cu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 0 === Wt && e(gu)), 
		            null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function G() {
		            var n;
		            return n = L(), null === n && (n = Y(), null === n && (n = H(), null === n && (n = O(), 
		            null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), null === n && (n = J(), 
		            null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), null === n && (n = V(), 
		            null === n && (n = X(), null === n && (n = _(), null === n && (n = nl(), null === n && (n = ll(), 
		            null === n && (n = ul(), null === n && (n = tl()))))))))))))))))), n;
		        }
		        function B() {
		            var n;
		            return n = j(), null === n && (n = q(), null === n && (n = $())), n;
		        }
		        function j() {
		            var l, u;
		            return l = qt, 46 === n.charCodeAt(qt) ? (u = ku, qt++) : (u = null, 0 === Wt && e(Tu)), 
		            null !== u && (Lt = l, u = xu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function $() {
		            var l, u;
		            return Wt++, l = qt, mu.test(n.charAt(qt)) ? (u = n.charAt(qt), qt++) : (u = null, 
		            0 === Wt && e(Ru)), null !== u && (Lt = l, u = bu(u)), null === u ? (qt = l, l = u) : l = u, 
		            Wt--, null === l && (u = null, 0 === Wt && e(yu)), l;
		        }
		        function q() {
		            var n;
		            return n = M(), null === n && (n = D(), null === n && (n = Y(), null === n && (n = H(), 
		            null === n && (n = O(), null === n && (n = W(), null === n && (n = z(), null === n && (n = I(), 
		            null === n && (n = J(), null === n && (n = K(), null === n && (n = N(), null === n && (n = P(), 
		            null === n && (n = V(), null === n && (n = X(), null === n && (n = Z(), null === n && (n = _(), 
		            null === n && (n = nl(), null === n && (n = ll(), null === n && (n = ul(), null === n && (n = tl()))))))))))))))))))), 
		            n;
		        }
		        function L() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), 
		            null !== u && (Lt = l, u = Su()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function M() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Fu ? (u = Fu, qt += 2) : (u = null, 0 === Wt && e(Qu)), 
		            null !== u && (Lt = l, u = Uu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function D() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Eu ? (u = Eu, qt += 2) : (u = null, 0 === Wt && e(Gu)), 
		            null !== u && (Lt = l, u = Bu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function H() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === ju ? (u = ju, qt += 2) : (u = null, 0 === Wt && e($u)), 
		            null !== u && (Lt = l, u = qu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function O() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Lu ? (u = Lu, qt += 2) : (u = null, 0 === Wt && e(Mu)), 
		            null !== u && (Lt = l, u = Du()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function W() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Hu ? (u = Hu, qt += 2) : (u = null, 0 === Wt && e(Ou)), 
		            null !== u && (Lt = l, u = Wu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function z() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === zu ? (u = zu, qt += 2) : (u = null, 0 === Wt && e(Iu)), 
		            null !== u && (Lt = l, u = Ju()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function I() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Ku ? (u = Ku, qt += 2) : (u = null, 0 === Wt && e(Nu)), 
		            null !== u && (Lt = l, u = Pu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function J() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Vu ? (u = Vu, qt += 2) : (u = null, 0 === Wt && e(Xu)), 
		            null !== u && (Lt = l, u = Yu()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function K() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Zu ? (u = Zu, qt += 2) : (u = null, 0 === Wt && e(_u)), 
		            null !== u && (Lt = l, u = nt()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function N() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === lt ? (u = lt, qt += 2) : (u = null, 0 === Wt && e(ut)), 
		            null !== u && (Lt = l, u = tt()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function P() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === rt ? (u = rt, qt += 2) : (u = null, 0 === Wt && e(et)), 
		            null !== u && (Lt = l, u = ot()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function V() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === ct ? (u = ct, qt += 2) : (u = null, 0 === Wt && e(it)), 
		            null !== u && (Lt = l, u = at()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function X() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === ft ? (u = ft, qt += 2) : (u = null, 0 === Wt && e(st)), 
		            null !== u && (Lt = l, u = ht()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function Y() {
		            var l, u, t;
		            return l = qt, n.substr(qt, 2) === dt ? (u = dt, qt += 2) : (u = null, 0 === Wt && e(pt)), 
		            null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), 
		            null !== t ? (Lt = l, u = wt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function Z() {
		            var l, u, t;
		            return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), 
		            null !== u ? (gt.test(n.charAt(qt)) ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(bt)), 
		            null !== t ? (Lt = l, u = kt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        function _() {
		            var l, u, t, r;
		            if (l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), 
		            null !== u) {
		                if (t = [], yt.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(mt)), 
		                null !== r) for (;null !== r; ) t.push(r), yt.test(n.charAt(qt)) ? (r = n.charAt(qt), 
		                qt++) : (r = null, 0 === Wt && e(mt)); else t = il;
		                null !== t ? (Lt = l, u = Rt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il);
		            } else qt = l, l = il;
		            return l;
		        }
		        function nl() {
		            var l, u, t, r;
		            if (l = qt, n.substr(qt, 2) === Ft ? (u = Ft, qt += 2) : (u = null, 0 === Wt && e(Qt)), 
		            null !== u) {
		                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), 
		                null !== r) for (;null !== r; ) t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), 
		                qt++) : (r = null, 0 === Wt && e(Ut)); else t = il;
		                null !== t ? (Lt = l, u = Et(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il);
		            } else qt = l, l = il;
		            return l;
		        }
		        function ll() {
		            var l, u, t, r;
		            if (l = qt, n.substr(qt, 2) === Gt ? (u = Gt, qt += 2) : (u = null, 0 === Wt && e(Bt)), 
		            null !== u) {
		                if (t = [], St.test(n.charAt(qt)) ? (r = n.charAt(qt), qt++) : (r = null, 0 === Wt && e(Ut)), 
		                null !== r) for (;null !== r; ) t.push(r), St.test(n.charAt(qt)) ? (r = n.charAt(qt), 
		                qt++) : (r = null, 0 === Wt && e(Ut)); else t = il;
		                null !== t ? (Lt = l, u = jt(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		                l = il);
		            } else qt = l, l = il;
		            return l;
		        }
		        function ul() {
		            var l, u;
		            return l = qt, n.substr(qt, 2) === Tt ? (u = Tt, qt += 2) : (u = null, 0 === Wt && e(xt)), 
		            null !== u && (Lt = l, u = $t()), null === u ? (qt = l, l = u) : l = u, l;
		        }
		        function tl() {
		            var l, u, t;
		            return l = qt, 92 === n.charCodeAt(qt) ? (u = At, qt++) : (u = null, 0 === Wt && e(Ct)), 
		            null !== u ? (n.length > qt ? (t = n.charAt(qt), qt++) : (t = null, 0 === Wt && e(vt)), 
		            null !== t ? (Lt = l, u = bu(t), null === u ? (qt = l, l = u) : l = u) : (qt = l, 
		            l = il)) : (qt = l, l = il), l;
		        }
		        var rl, el = arguments.length > 1 ? arguments[1] : {}, ol = {
		            regexp: c
		        }, cl = c, il = null, al = "", fl = "|", sl = '"|"', hl = function(n, l) {
		            return l ? new Alternate(n, l[1]) : n;
		        }, dl = function(n, l, u) {
		            return new Match([ n ].concat(l).concat([ u ]));
		        }, pl = "^", vl = '"^"', wl = function() {
		            return new Token("start");
		        }, Al = "$", Cl = '"$"', gl = function() {
		            return new Token("end");
		        }, bl = function(n, l) {
		            return new Quantified(n, l);
		        }, kl = "Quantifier", Tl = function(n, l) {
		            return l && (n.greedy = !1), n;
		        }, xl = "{", yl = '"{"', ml = ",", Rl = '","', Fl = "}", Ql = '"}"', Sl = function(n, l) {
		            return new Quantifier(n, l);
		        }, Ul = ",}", El = '",}"', Gl = function(n) {
		            return new Quantifier(n, 1/0);
		        }, Bl = function(n) {
		            return new Quantifier(n, n);
		        }, jl = "+", $l = '"+"', ql = function() {
		            return new Quantifier(1, 1/0);
		        }, Ll = "*", Ml = '"*"', Dl = function() {
		            return new Quantifier(0, 1/0);
		        }, Hl = "?", Ol = '"?"', Wl = function() {
		            return new Quantifier(0, 1);
		        }, zl = /^[0-9]/, Il = "[0-9]", Jl = function(n) {
		            return +n.join("");
		        }, Kl = "(", Nl = '"("', Pl = ")", Vl = '")"', Xl = function(n) {
		            return n;
		        }, Yl = function(n) {
		            return new CaptureGroup(n);
		        }, Zl = "?:", _l = '"?:"', nu = function(n) {
		            return new Group("non-capture-group", n);
		        }, lu = "?=", uu = '"?="', tu = function(n) {
		            return new Group("positive-lookahead", n);
		        }, ru = "?!", eu = '"?!"', ou = function(n) {
		            return new Group("negative-lookahead", n);
		        }, cu = "CharacterSet", iu = "[", au = '"["', fu = "]", su = '"]"', hu = function(n, l) {
		            return new CharSet(!!n, l);
		        }, du = "CharacterRange", pu = "-", vu = '"-"', wu = function(n, l) {
		            return new CharacterRange(n, l);
		        }, Au = "Character", Cu = /^[^\\\]]/, gu = "[^\\\\\\]]", bu = function(n) {
		            return new Literal(n);
		        }, ku = ".", Tu = '"."', xu = function() {
		            return new Token("any-character");
		        }, yu = "Literal", mu = /^[^|\\\/.[()?+*$\^]/, Ru = "[^|\\\\\\/.[()?+*$\\^]", Fu = "\\b", Qu = '"\\\\b"', Su = function() {
		            return new Token("backspace");
		        }, Uu = function() {
		            return new Token("word-boundary");
		        }, Eu = "\\B", Gu = '"\\\\B"', Bu = function() {
		            return new Token("non-word-boundary");
		        }, ju = "\\d", $u = '"\\\\d"', qu = function() {
		            return new Token("digit");
		        }, Lu = "\\D", Mu = '"\\\\D"', Du = function() {
		            return new Token("non-digit");
		        }, Hu = "\\f", Ou = '"\\\\f"', Wu = function() {
		            return new Token("form-feed");
		        }, zu = "\\n", Iu = '"\\\\n"', Ju = function() {
		            return new Token("line-feed");
		        }, Ku = "\\r", Nu = '"\\\\r"', Pu = function() {
		            return new Token("carriage-return");
		        }, Vu = "\\s", Xu = '"\\\\s"', Yu = function() {
		            return new Token("white-space");
		        }, Zu = "\\S", _u = '"\\\\S"', nt = function() {
		            return new Token("non-white-space");
		        }, lt = "\\t", ut = '"\\\\t"', tt = function() {
		            return new Token("tab");
		        }, rt = "\\v", et = '"\\\\v"', ot = function() {
		            return new Token("vertical-tab");
		        }, ct = "\\w", it = '"\\\\w"', at = function() {
		            return new Token("word");
		        }, ft = "\\W", st = '"\\\\W"', ht = function() {
		            return new Token("non-word");
		        }, dt = "\\c", pt = '"\\\\c"', vt = "any character", wt = function(n) {
		            return new ControlCharacter(n);
		        }, At = "\\", Ct = '"\\\\"', gt = /^[1-9]/, bt = "[1-9]", kt = function(n) {
		            return new BackReference(n);
		        }, Tt = "\\0", xt = '"\\\\0"', yt = /^[0-7]/, mt = "[0-7]", Rt = function(n) {
		            return new Octal(n.join(""));
		        }, Ft = "\\x", Qt = '"\\\\x"', St = /^[0-9a-fA-F]/, Ut = "[0-9a-fA-F]", Et = function(n) {
		            return new Hex(n.join(""));
		        }, Gt = "\\u", Bt = '"\\\\u"', jt = function(n) {
		            return new Unicode(n.join(""));
		        }, $t = function() {
		            return new Token("null-character");
		        }, qt = 0, Lt = 0, Mt = 0, Dt = {
		            line: 1,
		            column: 1,
		            seenCR: !1
		        }, Ht = 0, Ot = [], Wt = 0;
		        if ("startRule" in el) {
		            if (!(el.startRule in ol)) throw new Error("Can't start parsing from rule \"" + el.startRule + '".');
		            cl = ol[el.startRule];
		        }
		        if (Token.offset = t, Token.text = u, rl = cl(), null !== rl && qt === n.length) return rl;
		        throw o(Ot), Lt = Math.max(qt, Ht), new l(Ot, Lt < n.length ? n.charAt(Lt) : null, Lt, r(Lt).line, r(Lt).column);
		    }
		    return n(l, Error), {
		        SyntaxError: l,
		        parse: u
		    };
		}(), index = 1, cgs = {};
	
		module.exports = parser
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## RegExp Handler
	
		    https://github.com/ForbesLindesay/regexp
		    https://github.com/dmajda/pegjs
		    http://www.regexper.com/
	
		    每个节点的结构
		        {
		            type: '',
		            offset: number,
		            text: '',
		            body: {},
		            escaped: true/false
		        }
	
		    type 可选值
		        alternate             |         选择
		        match                 匹配
		        capture-group         ()        捕获组
		        non-capture-group     (?:...)   非捕获组
		        positive-lookahead    (?=p)     零宽正向先行断言
		        negative-lookahead    (?!p)     零宽负向先行断言
		        quantified            a*        重复节点
		        quantifier            *         量词
		        charset               []        字符集
		        range                 {m, n}    范围
		        literal               a         直接量字符
		        unicode               \uxxxx    Unicode
		        hex                   \x        十六进制
		        octal                 八进制
		        back-reference        \n        反向引用
		        control-character     \cX       控制字符
	
		        // Token
		        start               ^       开头
		        end                 $       结尾
		        any-character       .       任意字符
		        backspace           [\b]    退格直接量
		        word-boundary       \b      单词边界
		        non-word-boundary   \B      非单词边界
		        digit               \d      ASCII 数字，[0-9]
		        non-digit           \D      非 ASCII 数字，[^0-9]
		        form-feed           \f      换页符
		        line-feed           \n      换行符
		        carriage-return     \r      回车符
		        white-space         \s      空白符
		        non-white-space     \S      非空白符
		        tab                 \t      制表符
		        vertical-tab        \v      垂直制表符
		        word                \w      ASCII 字符，[a-zA-Z0-9]
		        non-word            \W      非 ASCII 字符，[^a-zA-Z0-9]
		        null-character      \o      NUL 字符
		 */
	
		var Util = __webpack_require__(3)
		var Random = __webpack_require__(5)
		    /*
		        
		    */
		var Handler = {
		    extend: Util.extend
		}
	
		// http://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart
		/*var ASCII_CONTROL_CODE_CHART = {
		    '@': ['\u0000'],
		    A: ['\u0001'],
		    B: ['\u0002'],
		    C: ['\u0003'],
		    D: ['\u0004'],
		    E: ['\u0005'],
		    F: ['\u0006'],
		    G: ['\u0007', '\a'],
		    H: ['\u0008', '\b'],
		    I: ['\u0009', '\t'],
		    J: ['\u000A', '\n'],
		    K: ['\u000B', '\v'],
		    L: ['\u000C', '\f'],
		    M: ['\u000D', '\r'],
		    N: ['\u000E'],
		    O: ['\u000F'],
		    P: ['\u0010'],
		    Q: ['\u0011'],
		    R: ['\u0012'],
		    S: ['\u0013'],
		    T: ['\u0014'],
		    U: ['\u0015'],
		    V: ['\u0016'],
		    W: ['\u0017'],
		    X: ['\u0018'],
		    Y: ['\u0019'],
		    Z: ['\u001A'],
		    '[': ['\u001B', '\e'],
		    '\\': ['\u001C'],
		    ']': ['\u001D'],
		    '^': ['\u001E'],
		    '_': ['\u001F']
		}*/
	
		// ASCII printable code chart
		// var LOWER = 'abcdefghijklmnopqrstuvwxyz'
		// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		// var NUMBER = '0123456789'
		// var SYMBOL = ' !"#$%&\'()*+,-./' + ':;<=>?@' + '[\\]^_`' + '{|}~'
		var LOWER = ascii(97, 122)
		var UPPER = ascii(65, 90)
		var NUMBER = ascii(48, 57)
		var OTHER = ascii(32, 47) + ascii(58, 64) + ascii(91, 96) + ascii(123, 126) // 排除 95 _ ascii(91, 94) + ascii(96, 96)
		var PRINTABLE = ascii(32, 126)
		var SPACE = ' \f\n\r\t\v\u00A0\u2028\u2029'
		var CHARACTER_CLASSES = {
		    '\\w': LOWER + UPPER + NUMBER + '_', // ascii(95, 95)
		    '\\W': OTHER.replace('_', ''),
		    '\\s': SPACE,
		    '\\S': function() {
		        var result = PRINTABLE
		        for (var i = 0; i < SPACE.length; i++) {
		            result = result.replace(SPACE[i], '')
		        }
		        return result
		    }(),
		    '\\d': NUMBER,
		    '\\D': LOWER + UPPER + OTHER
		}
	
		function ascii(from, to) {
		    var result = ''
		    for (var i = from; i <= to; i++) {
		        result += String.fromCharCode(i)
		    }
		    return result
		}
	
		// var ast = RegExpParser.parse(regexp.source)
		Handler.gen = function(node, result, cache) {
		    cache = cache || {
		        guid: 1
		    }
		    return Handler[node.type] ? Handler[node.type](node, result, cache) :
		        Handler.token(node, result, cache)
		}
	
		Handler.extend({
		    /* jshint unused:false */
		    token: function(node, result, cache) {
		        switch (node.type) {
		            case 'start':
		            case 'end':
		                return ''
		            case 'any-character':
		                return Random.character()
		            case 'backspace':
		                return ''
		            case 'word-boundary': // TODO
		                return ''
		            case 'non-word-boundary': // TODO
		                break
		            case 'digit':
		                return Random.pick(
		                    NUMBER.split('')
		                )
		            case 'non-digit':
		                return Random.pick(
		                    (LOWER + UPPER + OTHER).split('')
		                )
		            case 'form-feed':
		                break
		            case 'line-feed':
		                return node.body || node.text
		            case 'carriage-return':
		                break
		            case 'white-space':
		                return Random.pick(
		                    SPACE.split('')
		                )
		            case 'non-white-space':
		                return Random.pick(
		                    (LOWER + UPPER + NUMBER).split('')
		                )
		            case 'tab':
		                break
		            case 'vertical-tab':
		                break
		            case 'word': // \w [a-zA-Z0-9]
		                return Random.pick(
		                    (LOWER + UPPER + NUMBER).split('')
		                )
		            case 'non-word': // \W [^a-zA-Z0-9]
		                return Random.pick(
		                    OTHER.replace('_', '').split('')
		                )
		            case 'null-character':
		                break
		        }
		        return node.body || node.text
		    },
		    /*
		        {
		            type: 'alternate',
		            offset: 0,
		            text: '',
		            left: {
		                boyd: []
		            },
		            right: {
		                boyd: []
		            }
		        }
		    */
		    alternate: function(node, result, cache) {
		        // node.left/right {}
		        return this.gen(
		            Random.boolean() ? node.left : node.right,
		            result,
		            cache
		        )
		    },
		    /*
		        {
		            type: 'match',
		            offset: 0,
		            text: '',
		            body: []
		        }
		    */
		    match: function(node, result, cache) {
		        result = ''
		            // node.body []
		        for (var i = 0; i < node.body.length; i++) {
		            result += this.gen(node.body[i], result, cache)
		        }
		        return result
		    },
		    // ()
		    'capture-group': function(node, result, cache) {
		        // node.body {}
		        result = this.gen(node.body, result, cache)
		        cache[cache.guid++] = result
		        return result
		    },
		    // (?:...)
		    'non-capture-group': function(node, result, cache) {
		        // node.body {}
		        return this.gen(node.body, result, cache)
		    },
		    // (?=p)
		    'positive-lookahead': function(node, result, cache) {
		        // node.body
		        return this.gen(node.body, result, cache)
		    },
		    // (?!p)
		    'negative-lookahead': function(node, result, cache) {
		        // node.body
		        return ''
		    },
		    /*
		        {
		            type: 'quantified',
		            offset: 3,
		            text: 'c*',
		            body: {
		                type: 'literal',
		                offset: 3,
		                text: 'c',
		                body: 'c',
		                escaped: false
		            },
		            quantifier: {
		                type: 'quantifier',
		                offset: 4,
		                text: '*',
		                min: 0,
		                max: Infinity,
		                greedy: true
		            }
		        }
		    */
		    quantified: function(node, result, cache) {
		        result = ''
		            // node.quantifier {}
		        var count = this.quantifier(node.quantifier);
		        // node.body {}
		        for (var i = 0; i < count; i++) {
		            result += this.gen(node.body, result, cache)
		        }
		        return result
		    },
		    /*
		        quantifier: {
		            type: 'quantifier',
		            offset: 4,
		            text: '*',
		            min: 0,
		            max: Infinity,
		            greedy: true
		        }
		    */
		    quantifier: function(node, result, cache) {
		        var min = Math.max(node.min, 0)
		        var max = isFinite(node.max) ? node.max :
		            min + Random.integer(3, 7)
		        return Random.integer(min, max)
		    },
		    /*
		        
		    */
		    charset: function(node, result, cache) {
		        // node.invert
		        if (node.invert) return this['invert-charset'](node, result, cache)
	
		        // node.body []
		        var literal = Random.pick(node.body)
		        return this.gen(literal, result, cache)
		    },
		    'invert-charset': function(node, result, cache) {
		        var pool = PRINTABLE
		        for (var i = 0, item; i < node.body.length; i++) {
		            item = node.body[i]
		            switch (item.type) {
		                case 'literal':
		                    pool = pool.replace(item.body, '')
		                    break
		                case 'range':
		                    var min = this.gen(item.start, result, cache).charCodeAt()
		                    var max = this.gen(item.end, result, cache).charCodeAt()
		                    for (var ii = min; ii <= max; ii++) {
		                        pool = pool.replace(String.fromCharCode(ii), '')
		                    }
		                    /* falls through */
		                default:
		                    var characters = CHARACTER_CLASSES[item.text]
		                    if (characters) {
		                        for (var iii = 0; iii <= characters.length; iii++) {
		                            pool = pool.replace(characters[iii], '')
		                        }
		                    }
		            }
		        }
		        return Random.pick(pool.split(''))
		    },
		    range: function(node, result, cache) {
		        // node.start, node.end
		        var min = this.gen(node.start, result, cache).charCodeAt()
		        var max = this.gen(node.end, result, cache).charCodeAt()
		        return String.fromCharCode(
		            Random.integer(min, max)
		        )
		    },
		    literal: function(node, result, cache) {
		        return node.escaped ? node.body : node.text
		    },
		    // Unicode \u
		    unicode: function(node, result, cache) {
		        return String.fromCharCode(
		            parseInt(node.code, 16)
		        )
		    },
		    // 十六进制 \xFF
		    hex: function(node, result, cache) {
		        return String.fromCharCode(
		            parseInt(node.code, 16)
		        )
		    },
		    // 八进制 \0
		    octal: function(node, result, cache) {
		        return String.fromCharCode(
		            parseInt(node.code, 8)
		        )
		    },
		    // 反向引用
		    'back-reference': function(node, result, cache) {
		        return cache[node.code] || ''
		    },
		    /*
		        http://en.wikipedia.org/wiki/C0_and_C1_control_codes
		    */
		    CONTROL_CHARACTER_MAP: function() {
		        var CONTROL_CHARACTER = '@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _'.split(' ')
		        var CONTROL_CHARACTER_UNICODE = '\u0000 \u0001 \u0002 \u0003 \u0004 \u0005 \u0006 \u0007 \u0008 \u0009 \u000A \u000B \u000C \u000D \u000E \u000F \u0010 \u0011 \u0012 \u0013 \u0014 \u0015 \u0016 \u0017 \u0018 \u0019 \u001A \u001B \u001C \u001D \u001E \u001F'.split(' ')
		        var map = {}
		        for (var i = 0; i < CONTROL_CHARACTER.length; i++) {
		            map[CONTROL_CHARACTER[i]] = CONTROL_CHARACTER_UNICODE[i]
		        }
		        return map
		    }(),
		    'control-character': function(node, result, cache) {
		        return this.CONTROL_CHARACTER_MAP[node.code]
		    }
		})
	
		module.exports = Handler
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(24)
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## toJSONSchema
	
		    把 Mock.js 风格的数据模板转换成 JSON Schema。
	
		    > [JSON Schema](http://json-schema.org/)
		 */
		var Constant = __webpack_require__(2)
		var Util = __webpack_require__(3)
		var Parser = __webpack_require__(4)
	
		function toJSONSchema(template, name, path /* Internal Use Only */ ) {
		    // type rule properties items
		    path = path || []
		    var result = {
		        name: typeof name === 'string' ? name.replace(Constant.RE_KEY, '$1') : name,
		        template: template,
		        type: Util.type(template), // 可能不准确，例如 { 'name|1': [{}, {} ...] }
		        rule: Parser.parse(name)
		    }
		    result.path = path.slice(0)
		    result.path.push(name === undefined ? 'ROOT' : result.name)
	
		    switch (result.type) {
		        case 'array':
		            result.items = []
		            Util.each(template, function(value, index) {
		                result.items.push(
		                    toJSONSchema(value, index, result.path)
		                )
		            })
		            break
		        case 'object':
		            result.properties = []
		            Util.each(template, function(value, name) {
		                result.properties.push(
		                    toJSONSchema(value, name, result.path)
		                )
		            })
		            break
		    }
	
		    return result
	
		}
	
		module.exports = toJSONSchema
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(26)
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
		    ## valid(template, data)
	
		    校验真实数据 data 是否与数据模板 template 匹配。
		    
		    实现思路：
		    1. 解析规则。
		        先把数据模板 template 解析为更方便机器解析的 JSON-Schame
		        name               属性名 
		        type               属性值类型
		        template           属性值模板
		        properties         对象属性数组
		        items              数组元素数组
		        rule               属性值生成规则
		    2. 递归验证规则。
		        然后用 JSON-Schema 校验真实数据，校验项包括属性名、值类型、值、值生成规则。
	
		    提示信息 
		    https://github.com/fge/json-schema-validator/blob/master/src/main/resources/com/github/fge/jsonschema/validator/validation.properties
		    [JSON-Schama validator](http://json-schema-validator.herokuapp.com/)
		    [Regexp Demo](http://demos.forbeslindesay.co.uk/regexp/)
		*/
		var Constant = __webpack_require__(2)
		var Util = __webpack_require__(3)
		var toJSONSchema = __webpack_require__(23)
	
		function valid(template, data) {
		    var schema = toJSONSchema(template)
		    var result = Diff.diff(schema, data)
		    for (var i = 0; i < result.length; i++) {
		        // console.log(template, data)
		        // console.warn(Assert.message(result[i]))
		    }
		    return result
		}
	
		/*
		    ## name
		        有生成规则：比较解析后的 name
		        无生成规则：直接比较
		    ## type
		        无类型转换：直接比较
		        有类型转换：先试着解析 template，然后再检查？
		    ## value vs. template
		        基本类型
		            无生成规则：直接比较
		            有生成规则：
		                number
		                    min-max.dmin-dmax
		                    min-max.dcount
		                    count.dmin-dmax
		                    count.dcount
		                    +step
		                    整数部分
		                    小数部分
		                boolean 
		                string  
		                    min-max
		                    count
		    ## properties
		        对象
		            有生成规则：检测期望的属性个数，继续递归
		            无生成规则：检测全部的属性个数，继续递归
		    ## items
		        数组
		            有生成规则：
		                `'name|1': [{}, {} ...]`            其中之一，继续递归
		                `'name|+1': [{}, {} ...]`           顺序检测，继续递归
		                `'name|min-max': [{}, {} ...]`      检测个数，继续递归
		                `'name|count': [{}, {} ...]`        检测个数，继续递归
		            无生成规则：检测全部的元素个数，继续递归
		*/
		var Diff = {
		    diff: function diff(schema, data, name /* Internal Use Only */ ) {
		        var result = []
	
		        // 先检测名称 name 和类型 type，如果匹配，才有必要继续检测
		        if (
		            this.name(schema, data, name, result) &&
		            this.type(schema, data, name, result)
		        ) {
		            this.value(schema, data, name, result)
		            this.properties(schema, data, name, result)
		            this.items(schema, data, name, result)
		        }
	
		        return result
		    },
		    /* jshint unused:false */
		    name: function(schema, data, name, result) {
		        var length = result.length
	
		        Assert.equal('name', schema.path, name + '', schema.name + '', result)
	
		        return result.length === length
		    },
		    type: function(schema, data, name, result) {
		        var length = result.length
	
		        switch (schema.type) {
		            case 'string':
		                // 跳过含有『占位符』的属性值，因为『占位符』返回值的类型可能和模板不一致，例如 '@int' 会返回一个整形值
		                if (schema.template.match(Constant.RE_PLACEHOLDER)) return true
		                break
		            case 'array':
		                if (schema.rule.parameters) {
		                    // name|count: array
		                    if (schema.rule.min !== undefined && schema.rule.max === undefined) {
		                        // 跳过 name|1: array，因为最终值的类型（很可能）不是数组，也不一定与 `array` 中的类型一致
		                        if (schema.rule.count === 1) return true
		                    }
		                    // 跳过 name|+inc: array
		                    if (schema.rule.parameters[2]) return true
		                }
		                break
		            case 'function':
		                // 跳过 `'name': function`，因为函数可以返回任何类型的值。
		                return true
		        }
	
		        Assert.equal('type', schema.path, Util.type(data), schema.type, result)
	
		        return result.length === length
		    },
		    value: function(schema, data, name, result) {
		        var length = result.length
	
		        var rule = schema.rule
		        var templateType = schema.type
		        if (templateType === 'object' || templateType === 'array' || templateType === 'function') return true
	
		        // 无生成规则
		        if (!rule.parameters) {
		            switch (templateType) {
		                case 'regexp':
		                    Assert.match('value', schema.path, data, schema.template, result)
		                    return result.length === length
		                case 'string':
		                    // 同样跳过含有『占位符』的属性值，因为『占位符』的返回值会通常会与模板不一致
		                    if (schema.template.match(Constant.RE_PLACEHOLDER)) return result.length === length
		                    break
		            }
		            Assert.equal('value', schema.path, data, schema.template, result)
		            return result.length === length
		        }
	
		        // 有生成规则
		        var actualRepeatCount
		        switch (templateType) {
		            case 'number':
		                var parts = (data + '').split('.')
		                parts[0] = +parts[0]
	
		                // 整数部分
		                // |min-max
		                if (rule.min !== undefined && rule.max !== undefined) {
		                    Assert.greaterThanOrEqualTo('value', schema.path, parts[0], Math.min(rule.min, rule.max), result)
		                        // , 'numeric instance is lower than the required minimum (minimum: {expected}, found: {actual})')
		                    Assert.lessThanOrEqualTo('value', schema.path, parts[0], Math.max(rule.min, rule.max), result)
		                }
		                // |count
		                if (rule.min !== undefined && rule.max === undefined) {
		                    Assert.equal('value', schema.path, parts[0], rule.min, result, '[value] ' + name)
		                }
	
		                // 小数部分
		                if (rule.decimal) {
		                    // |dmin-dmax
		                    if (rule.dmin !== undefined && rule.dmax !== undefined) {
		                        Assert.greaterThanOrEqualTo('value', schema.path, parts[1].length, rule.dmin, result)
		                        Assert.lessThanOrEqualTo('value', schema.path, parts[1].length, rule.dmax, result)
		                    }
		                    // |dcount
		                    if (rule.dmin !== undefined && rule.dmax === undefined) {
		                        Assert.equal('value', schema.path, parts[1].length, rule.dmin, result)
		                    }
		                }
	
		                break
	
		            case 'boolean':
		                break
	
		            case 'string':
		                // 'aaa'.match(/a/g)
		                actualRepeatCount = data.match(new RegExp(schema.template, 'g'))
		                actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0
	
		                // |min-max
		                if (rule.min !== undefined && rule.max !== undefined) {
		                    Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                    Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result)
		                }
		                // |count
		                if (rule.min !== undefined && rule.max === undefined) {
		                    Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                }
	
		                break
	
		            case 'regexp':
		                actualRepeatCount = data.match(new RegExp(schema.template.source.replace(/^\^|\$$/g, ''), 'g'))
		                actualRepeatCount = actualRepeatCount ? actualRepeatCount.length : 0
	
		                // |min-max
		                if (rule.min !== undefined && rule.max !== undefined) {
		                    Assert.greaterThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                    Assert.lessThanOrEqualTo('repeat count', schema.path, actualRepeatCount, rule.max, result)
		                }
		                // |count
		                if (rule.min !== undefined && rule.max === undefined) {
		                    Assert.equal('repeat count', schema.path, actualRepeatCount, rule.min, result)
		                }
		                break
		        }
	
		        return result.length === length
		    },
		    properties: function(schema, data, name, result) {
		        var length = result.length
	
		        var rule = schema.rule
		        var keys = Util.keys(data)
		        if (!schema.properties) return
	
		        // 无生成规则
		        if (!schema.rule.parameters) {
		            Assert.equal('properties length', schema.path, keys.length, schema.properties.length, result)
		        } else {
		            // 有生成规则
		            // |min-max
		            if (rule.min !== undefined && rule.max !== undefined) {
		                Assert.greaterThanOrEqualTo('properties length', schema.path, keys.length, Math.min(rule.min, rule.max), result)
		                Assert.lessThanOrEqualTo('properties length', schema.path, keys.length, Math.max(rule.min, rule.max), result)
		            }
		            // |count
		            if (rule.min !== undefined && rule.max === undefined) {
		                // |1, |>1
		                if (rule.count !== 1) Assert.equal('properties length', schema.path, keys.length, rule.min, result)
		            }
		        }
	
		        if (result.length !== length) return false
	
		        for (var i = 0; i < keys.length; i++) {
		            result.push.apply(
		                result,
		                this.diff(
		                    function() {
		                        var property
		                        Util.each(schema.properties, function(item /*, index*/ ) {
		                            if (item.name === keys[i]) property = item
		                        })
		                        return property || schema.properties[i]
		                    }(),
		                    data[keys[i]],
		                    keys[i]
		                )
		            )
		        }
	
		        return result.length === length
		    },
		    items: function(schema, data, name, result) {
		        var length = result.length
	
		        if (!schema.items) return
	
		        var rule = schema.rule
	
		        // 无生成规则
		        if (!schema.rule.parameters) {
		            Assert.equal('items length', schema.path, data.length, schema.items.length, result)
		        } else {
		            // 有生成规则
		            // |min-max
		            if (rule.min !== undefined && rule.max !== undefined) {
		                Assert.greaterThanOrEqualTo('items', schema.path, data.length, (Math.min(rule.min, rule.max) * schema.items.length), result,
		                    '[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements')
		                Assert.lessThanOrEqualTo('items', schema.path, data.length, (Math.max(rule.min, rule.max) * schema.items.length), result,
		                    '[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements')
		            }
		            // |count
		            if (rule.min !== undefined && rule.max === undefined) {
		                // |1, |>1
		                if (rule.count === 1) return result.length === length
		                else Assert.equal('items length', schema.path, data.length, (rule.min * schema.items.length), result)
		            }
		            // |+inc
		            if (rule.parameters[2]) return result.length === length
		        }
	
		        if (result.length !== length) return false
	
		        for (var i = 0; i < data.length; i++) {
		            result.push.apply(
		                result,
		                this.diff(
		                    schema.items[i % schema.items.length],
		                    data[i],
		                    i % schema.items.length
		                )
		            )
		        }
	
		        return result.length === length
		    }
		}
	
		/*
		    完善、友好的提示信息
		    
		    Equal, not equal to, greater than, less than, greater than or equal to, less than or equal to
		    路径 验证类型 描述 
	
		    Expect path.name is less than or equal to expected, but path.name is actual.
	
		    Expect path.name is less than or equal to expected, but path.name is actual.
		    Expect path.name is greater than or equal to expected, but path.name is actual.
	
		*/
		var Assert = {
		    message: function(item) {
		        return (item.message ||
		                '[{utype}] Expect {path}\'{ltype} {action} {expected}, but is {actual}')
		            .replace('{utype}', item.type.toUpperCase())
		            .replace('{ltype}', item.type.toLowerCase())
		            .replace('{path}', Util.isArray(item.path) && item.path.join('.') || item.path)
		            .replace('{action}', item.action)
		            .replace('{expected}', item.expected)
		            .replace('{actual}', item.actual)
		    },
		    equal: function(type, path, actual, expected, result, message) {
		        if (actual === expected) return true
		        switch (type) {
		            case 'type':
		                // 正则模板 === 字符串最终值
		                if (expected === 'regexp' && actual === 'string') return true
		                break
		        }
	
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    // actual matches expected
		    match: function(type, path, actual, expected, result, message) {
		        if (expected.test(actual)) return true
	
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'matches',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    notEqual: function(type, path, actual, expected, result, message) {
		        if (actual !== expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is not equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    greaterThan: function(type, path, actual, expected, result, message) {
		        if (actual > expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is greater than',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    lessThan: function(type, path, actual, expected, result, message) {
		        if (actual < expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is less to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    greaterThanOrEqualTo: function(type, path, actual, expected, result, message) {
		        if (actual >= expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is greater than or equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    },
		    lessThanOrEqualTo: function(type, path, actual, expected, result, message) {
		        if (actual <= expected) return true
		        var item = {
		            path: path,
		            type: type,
		            actual: actual,
		            expected: expected,
		            action: 'is less than or equal to',
		            message: message
		        }
		        item.message = Assert.message(item)
		        result.push(item)
		        return false
		    }
		}
	
		valid.Diff = Diff
		valid.Assert = Assert
	
		module.exports = valid
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(28)
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* global window, document, location, Event, setTimeout */
		/*
		    ## MockXMLHttpRequest
	
		    期望的功能：
		    1. 完整地覆盖原生 XHR 的行为
		    2. 完整地模拟原生 XHR 的行为
		    3. 在发起请求时，自动检测是否需要拦截
		    4. 如果不必拦截，则执行原生 XHR 的行为
		    5. 如果需要拦截，则执行虚拟 XHR 的行为
		    6. 兼容 XMLHttpRequest 和 ActiveXObject
		        new window.XMLHttpRequest()
		        new window.ActiveXObject("Microsoft.XMLHTTP")
	
		    关键方法的逻辑：
		    * new   此时尚无法确定是否需要拦截，所以创建原生 XHR 对象是必须的。
		    * open  此时可以取到 URL，可以决定是否进行拦截。
		    * send  此时已经确定了请求方式。
	
		    规范：
		    http://xhr.spec.whatwg.org/
		    http://www.w3.org/TR/XMLHttpRequest2/
	
		    参考实现：
		    https://github.com/philikon/MockHttpRequest/blob/master/lib/mock.js
		    https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js
		    https://github.com/ilinsky/xmlhttprequest/blob/master/XMLHttpRequest.js
		    https://github.com/firebug/firebug-lite/blob/master/content/lite/xhr.js
		    https://github.com/thx/RAP/blob/master/lab/rap.plugin.xinglie.js
	
		    **需不需要全面重写 XMLHttpRequest？**
		        http://xhr.spec.whatwg.org/#interface-xmlhttprequest
		        关键属性 readyState、status、statusText、response、responseText、responseXML 是 readonly，所以，试图通过修改这些状态，来模拟响应是不可行的。
		        因此，唯一的办法是模拟整个 XMLHttpRequest，就像 jQuery 对事件模型的封装。
	
		    // Event handlers
		    onloadstart         loadstart
		    onprogress          progress
		    onabort             abort
		    onerror             error
		    onload              load
		    ontimeout           timeout
		    onloadend           loadend
		    onreadystatechange  readystatechange
		 */
	
		var Util = __webpack_require__(3)
	
		// 备份原生 XMLHttpRequest
		window._XMLHttpRequest = window.XMLHttpRequest
		window._ActiveXObject = window.ActiveXObject
	
		/*
		    PhantomJS
		    TypeError: '[object EventConstructor]' is not a constructor (evaluating 'new Event("readystatechange")')
	
		    https://github.com/bluerail/twitter-bootstrap-rails-confirm/issues/18
		    https://github.com/ariya/phantomjs/issues/11289
		*/
		try {
		    new window.Event('custom')
		} catch (exception) {
		    window.Event = function(type, bubbles, cancelable, detail) {
		        var event = document.createEvent('CustomEvent') // MUST be 'CustomEvent'
		        event.initCustomEvent(type, bubbles, cancelable, detail)
		        return event
		    }
		}
	
		var XHR_STATES = {
		    // The object has been constructed.
		    UNSENT: 0,
		    // The open() method has been successfully invoked.
		    OPENED: 1,
		    // All redirects (if any) have been followed and all HTTP headers of the response have been received.
		    HEADERS_RECEIVED: 2,
		    // The response's body is being received.
		    LOADING: 3,
		    // The data transfer has been completed or something went wrong during the transfer (e.g. infinite redirects).
		    DONE: 4
		}
	
		var XHR_EVENTS = 'readystatechange loadstart progress abort error load timeout loadend'.split(' ')
		var XHR_REQUEST_PROPERTIES = 'timeout withCredentials'.split(' ')
		var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ')
	
		// https://github.com/trek/FakeXMLHttpRequest/blob/master/fake_xml_http_request.js#L32
		var HTTP_STATUS_CODES = {
		    100: "Continue",
		    101: "Switching Protocols",
		    200: "OK",
		    201: "Created",
		    202: "Accepted",
		    203: "Non-Authoritative Information",
		    204: "No Content",
		    205: "Reset Content",
		    206: "Partial Content",
		    300: "Multiple Choice",
		    301: "Moved Permanently",
		    302: "Found",
		    303: "See Other",
		    304: "Not Modified",
		    305: "Use Proxy",
		    307: "Temporary Redirect",
		    400: "Bad Request",
		    401: "Unauthorized",
		    402: "Payment Required",
		    403: "Forbidden",
		    404: "Not Found",
		    405: "Method Not Allowed",
		    406: "Not Acceptable",
		    407: "Proxy Authentication Required",
		    408: "Request Timeout",
		    409: "Conflict",
		    410: "Gone",
		    411: "Length Required",
		    412: "Precondition Failed",
		    413: "Request Entity Too Large",
		    414: "Request-URI Too Long",
		    415: "Unsupported Media Type",
		    416: "Requested Range Not Satisfiable",
		    417: "Expectation Failed",
		    422: "Unprocessable Entity",
		    500: "Internal Server Error",
		    501: "Not Implemented",
		    502: "Bad Gateway",
		    503: "Service Unavailable",
		    504: "Gateway Timeout",
		    505: "HTTP Version Not Supported"
		}
	
		/*
		    MockXMLHttpRequest
		*/
	
		function MockXMLHttpRequest() {
		    // 初始化 custom 对象，用于存储自定义属性
		    this.custom = {
		        events: {},
		        requestHeaders: {},
		        responseHeaders: {}
		    }
		}
	
		MockXMLHttpRequest._settings = {
		    timeout: '10-100',
		    /*
		        timeout: 50,
		        timeout: '10-100',
		     */
		}
	
		MockXMLHttpRequest.setup = function(settings) {
		    Util.extend(MockXMLHttpRequest._settings, settings)
		    return MockXMLHttpRequest._settings
		}
	
		Util.extend(MockXMLHttpRequest, XHR_STATES)
		Util.extend(MockXMLHttpRequest.prototype, XHR_STATES)
	
		// 标记当前对象为 MockXMLHttpRequest
		MockXMLHttpRequest.prototype.mock = true
	
		// 是否拦截 Ajax 请求
		MockXMLHttpRequest.prototype.match = false
	
		// 初始化 Request 相关的属性和方法
		Util.extend(MockXMLHttpRequest.prototype, {
		    // https://xhr.spec.whatwg.org/#the-open()-method
		    // Sets the request method, request URL, and synchronous flag.
		    open: function(method, url, async, username, password) {
		        var that = this
	
		        Util.extend(this.custom, {
		            method: method,
		            url: url,
		            async: typeof async === 'boolean' ? async : true,
		            username: username,
		            password: password,
		            options: {
		                url: url,
		                type: method
		            }
		        })
	
		        this.custom.timeout = function(timeout) {
		            if (typeof timeout === 'number') return timeout
		            if (typeof timeout === 'string' && !~timeout.indexOf('-')) return parseInt(timeout, 10)
		            if (typeof timeout === 'string' && ~timeout.indexOf('-')) {
		                var tmp = timeout.split('-')
		                var min = parseInt(tmp[0], 10)
		                var max = parseInt(tmp[1], 10)
		                return Math.round(Math.random() * (max - min)) + min
		            }
		        }(MockXMLHttpRequest._settings.timeout)
	
		        // 查找与请求参数匹配的数据模板
		        var item = find(this.custom.options)
	
		        function handle(event) {
		            // 同步属性 NativeXMLHttpRequest => MockXMLHttpRequest
		            for (var i = 0; i < XHR_RESPONSE_PROPERTIES.length; i++) {
		                try {
		                    that[XHR_RESPONSE_PROPERTIES[i]] = xhr[XHR_RESPONSE_PROPERTIES[i]]
		                } catch (e) {}
		            }
		            // 触发 MockXMLHttpRequest 上的同名事件
		            that.dispatchEvent(new Event(event.type /*, false, false, that*/ ))
		        }
	
		        // 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
		        if (!item) {
		            // 创建原生 XHR 对象，调用原生 open()，监听所有原生事件
		            var xhr = createNativeXMLHttpRequest()
		            this.custom.xhr = xhr
	
		            // 初始化所有事件，用于监听原生 XHR 对象的事件
		            for (var i = 0; i < XHR_EVENTS.length; i++) {
		                xhr.addEventListener(XHR_EVENTS[i], handle)
		            }
	
		            // xhr.open()
		            if (username) xhr.open(method, url, async, username, password)
		            else xhr.open(method, url, async)
	
		            // 同步属性 MockXMLHttpRequest => NativeXMLHttpRequest
		            for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
		                try {
		                    xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]]
		                } catch (e) {}
		            }
	
		            return
		        }
	
		        // 找到了匹配的数据模板，开始拦截 XHR 请求
		        this.match = true
		        this.custom.template = item
		        this.readyState = MockXMLHttpRequest.OPENED
		        this.dispatchEvent(new Event('readystatechange' /*, false, false, this*/ ))
		    },
		    // https://xhr.spec.whatwg.org/#the-setrequestheader()-method
		    // Combines a header in author request headers.
		    setRequestHeader: function(name, value) {
		        // 原生 XHR
		        if (!this.match) {
		            this.custom.xhr.setRequestHeader(name, value)
		            return
		        }
	
		        // 拦截 XHR
		        var requestHeaders = this.custom.requestHeaders
		        if (requestHeaders[name]) requestHeaders[name] += ',' + value
		        else requestHeaders[name] = value
		    },
		    timeout: 0,
		    withCredentials: false,
		    upload: {},
		    // https://xhr.spec.whatwg.org/#the-send()-method
		    // Initiates the request.
		    send: function send(data) {
		        var that = this
		        this.custom.options.body = data
	
		        // 原生 XHR
		        if (!this.match) {
		            this.custom.xhr.send(data)
		            return
		        }
	
		        // 拦截 XHR
	
		        // X-Requested-With header
		        this.setRequestHeader('X-Requested-With', 'MockXMLHttpRequest')
	
		        // loadstart The fetch initiates.
		        this.dispatchEvent(new Event('loadstart' /*, false, false, this*/ ))
	
		        if (this.custom.async) setTimeout(done, this.custom.timeout) // 异步
		        else done() // 同步
	
		        function done() {
		            that.readyState = MockXMLHttpRequest.HEADERS_RECEIVED
		            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/ ))
		            that.readyState = MockXMLHttpRequest.LOADING
		            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/ ))
	
		            that.status = 200
		            that.statusText = HTTP_STATUS_CODES[200]
	
		            // fix #92 #93 by @qddegtya
		            that.response = that.responseText = JSON.stringify(
		                convert(that.custom.template, that.custom.options),
		                null, 4
		            )
	
		            that.readyState = MockXMLHttpRequest.DONE
		            that.dispatchEvent(new Event('readystatechange' /*, false, false, that*/ ))
		            that.dispatchEvent(new Event('load' /*, false, false, that*/ ));
		            that.dispatchEvent(new Event('loadend' /*, false, false, that*/ ));
		        }
		    },
		    // https://xhr.spec.whatwg.org/#the-abort()-method
		    // Cancels any network activity.
		    abort: function abort() {
		        // 原生 XHR
		        if (!this.match) {
		            this.custom.xhr.abort()
		            return
		        }
	
		        // 拦截 XHR
		        this.readyState = MockXMLHttpRequest.UNSENT
		        this.dispatchEvent(new Event('abort', false, false, this))
		        this.dispatchEvent(new Event('error', false, false, this))
		    }
		})
	
		// 初始化 Response 相关的属性和方法
		Util.extend(MockXMLHttpRequest.prototype, {
		    responseURL: '',
		    status: MockXMLHttpRequest.UNSENT,
		    statusText: '',
		    // https://xhr.spec.whatwg.org/#the-getresponseheader()-method
		    getResponseHeader: function(name) {
		        // 原生 XHR
		        if (!this.match) {
		            return this.custom.xhr.getResponseHeader(name)
		        }
	
		        // 拦截 XHR
		        return this.custom.responseHeaders[name.toLowerCase()]
		    },
		    // https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method
		    // http://www.utf8-chartable.de/
		    getAllResponseHeaders: function() {
		        // 原生 XHR
		        if (!this.match) {
		            return this.custom.xhr.getAllResponseHeaders()
		        }
	
		        // 拦截 XHR
		        var responseHeaders = this.custom.responseHeaders
		        var headers = ''
		        for (var h in responseHeaders) {
		            if (!responseHeaders.hasOwnProperty(h)) continue
		            headers += h + ': ' + responseHeaders[h] + '\r\n'
		        }
		        return headers
		    },
		    overrideMimeType: function( /*mime*/ ) {},
		    responseType: '', // '', 'text', 'arraybuffer', 'blob', 'document', 'json'
		    response: null,
		    responseText: '',
		    responseXML: null
		})
	
		// EventTarget
		Util.extend(MockXMLHttpRequest.prototype, {
		    addEventListener: function addEventListener(type, handle) {
		        var events = this.custom.events
		        if (!events[type]) events[type] = []
		        events[type].push(handle)
		    },
		    removeEventListener: function removeEventListener(type, handle) {
		        var handles = this.custom.events[type] || []
		        for (var i = 0; i < handles.length; i++) {
		            if (handles[i] === handle) {
		                handles.splice(i--, 1)
		            }
		        }
		    },
		    dispatchEvent: function dispatchEvent(event) {
		        var handles = this.custom.events[event.type] || []
		        for (var i = 0; i < handles.length; i++) {
		            handles[i].call(this, event)
		        }
	
		        var ontype = 'on' + event.type
		        if (this[ontype]) this[ontype](event)
		    }
		})
	
		// Inspired by jQuery
		function createNativeXMLHttpRequest() {
		    var isLocal = function() {
		        var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
		        var rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/
		        var ajaxLocation = location.href
		        var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []
		        return rlocalProtocol.test(ajaxLocParts[1])
		    }()
	
		    return window.ActiveXObject ?
		        (!isLocal && createStandardXHR() || createActiveXHR()) : createStandardXHR()
	
		    function createStandardXHR() {
		        try {
		            return new window._XMLHttpRequest();
		        } catch (e) {}
		    }
	
		    function createActiveXHR() {
		        try {
		            return new window._ActiveXObject("Microsoft.XMLHTTP");
		        } catch (e) {}
		    }
		}
	
	
		// 查找与请求参数匹配的数据模板：URL，Type
		function find(options) {
	
		    for (var sUrlType in MockXMLHttpRequest.Mock._mocked) {
		        var item = MockXMLHttpRequest.Mock._mocked[sUrlType]
		        if (
		            (!item.rurl || match(item.rurl, options.url)) &&
		            (!item.rtype || match(item.rtype, options.type.toLowerCase()))
		        ) {
		            // console.log('[mock]', options.url, '>', item.rurl)
		            return item
		        }
		    }
	
		    function match(expected, actual) {
		        if (Util.type(expected) === 'string') {
		            return expected === actual
		        }
		        if (Util.type(expected) === 'regexp') {
		            return expected.test(actual)
		        }
		    }
	
		}
	
		// 数据模板 ＝> 响应数据
		function convert(item, options) {
		    return Util.isFunction(item.template) ?
		        item.template(options) : MockXMLHttpRequest.Mock.mock(item.template)
		}
	
		module.exports = MockXMLHttpRequest
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./main.scss */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/*!***************************!*\
  !*** ./src/js/mockApi.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mockjs = __webpack_require__(/*! mockjs */ 5);
	
	var _mockjs2 = _interopRequireDefault(_mockjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_mockjs2.default.mock('/test', {
		'data|5-20': [{
			'title': '@cword(5, 25)',
			'fileUrl': 'http://flv2.bn.netease.com/tvmrepo/2016/11/8/5/EC5L8RJ85/SD/EC5L8RJ85-mobile.mp4',
			'id': '@string("lower", 3, 10)',
			'poster': 'http://vimg3.ws.126.net/image/snapshot/2016/12/F/G/VC8K0K9FG.jpg',
			'score|1-100': 100
		}]
	}); /*
	    	mock 配置
	    */
	/*
		response data = [
			{
				title,
				fileUrl,
				id,
				poster,
				score,
			},
		]

	*/

/***/ },
/* 9 */
/*!*******************************!*\
  !*** ./src/img/icon-sort.png ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABF0lEQVRYR+2X0RGCMBBEdzuwBDsQOsAKpAMtTTrQCrQE7MAS6OCcYwKTwQQiSPgJP/wkty93OdgjNn64sT6CAERkB+ABQN85ycYFLiJ7s64hmYccbhLAEs9MwCPJpwegMAAgORlbY4wucojrnjgAHvE4AA7xF4BDlBI4xCsA1662q5dARG4ATua0FcmLiPSXKyZAK64gUQGMYEay7lotOsCwxxNAykDKQMpAysA/MmBi1EM7F2SblgKIiP7OzwDuJEv7U786gCWuuv0ftoNYFWAgrq6qiFYC46JaPwHAKT7pipf4AavOXvEYAKPiawNMigcDGJum05COZl8XySqVjma67g2g9I1wP7dhyIw3d01QG84NHrLvA6YTLjDCShxbAAAAAElFTkSuQmCC"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map