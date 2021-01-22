(function () {
	'use strict';

	var arrowDown = "<symbol id=\"rs-arrow-down\" viewBox=\"0 0 451.847 451.847\"><path d=\"M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z\"/></symbol>";

	var close = "<symbol id=\"rs-close\" viewBox=\"0 0 492 492\"><path d=\"M300.188 246L484.14 62.04c5.06-5.064 7.852-11.82 7.86-19.024 0-7.208-2.792-13.972-7.86-19.028L468.02 7.872C462.952 2.796 456.196.016 448.984.016c-7.2 0-13.956 2.78-19.024 7.856L246.008 191.82 62.048 7.872C56.988 2.796 50.228.016 43.02.016c-7.2 0-13.96 2.78-19.02 7.856L7.872 23.988c-10.496 10.496-10.496 27.568 0 38.052L191.828 246 7.872 429.952C2.808 435.024.02 441.78.02 448.984c0 7.204 2.788 13.96 7.852 19.028l16.124 16.116c5.06 5.072 11.824 7.856 19.02 7.856 7.208 0 13.968-2.784 19.028-7.856l183.96-183.952 183.952 183.952c5.068 5.072 11.824 7.856 19.024 7.856h.008c7.204 0 13.96-2.784 19.028-7.856l16.12-16.116c5.06-5.064 7.852-11.824 7.852-19.028 0-7.204-2.792-13.96-7.852-19.028L300.188 246z\"/></symbol>";

	var github = "<symbol id=\"rs-github\" viewBox=\"0 0 512 512\"><path d=\"M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z\"/></symbol>";

	var logo = "<symbol id=\"rs-logo\" viewBox=\"0 0 429.989 429.989\"><path d=\"M420.989.001H215.122L214.994 0H77.665l-.128.001H9a9 9 0 00-9 9v411.987a9 9 0 009 9h411.99a9 9 0 009-9V9.001c-.001-4.97-4.03-9-9.001-9zm-77.666 155.33V274.66h-50.664v-59.665a9 9 0 00-9-9h-68.665l-.135.001h-59.53v-50.665h187.994zM86.665 18h119.329v119.33H86.665V18zM18 18.001h50.665V146.33c0 .063 0 .128.002.191v59.475H18V18.001zm119.331 393.988H18V292.66h50.667v59.665a9 9 0 009 9h59.664v50.664zm8.998-137.329a9 9 0 00-9 9v59.665H86.667V283.66a9 9 0 00-9-9H18v-50.664h59.667a9 9 0 009-9v-59.665h50.662v59.665a9 9 0 009 9h59.665v50.664h-59.665zm59.665 77.665v59.664h-50.663v-59.664c0-.063 0-.124-.002-.187V292.66h59.665a9 9 0 009-9v-59.665h50.665v119.33h-59.665a9 9 0 00-9 9zm205.995 59.664H223.994v-50.664H411.99v50.664zm0-68.664h-119.33V292.66h59.664a9 9 0 009-9v-59.665h50.667v119.33zm0-137.33h-50.667v-59.664a9 9 0 00-9-9h-59.664V86.665h119.331v119.33zm0-137.33l-128.331.002a9 9 0 00-9 9v59.664h-50.665V18.001h187.996v50.664z\"/></symbol>";

	var menu = "<symbol id=\"rs-menu\" viewBox=\"0 -53 384 384\"><path d=\"M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0\"/></symbol>";

	var settings = "<symbol id=\"rs-settings\" viewBox=\"0 0 512 512\"><path d=\"M272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871a206.698 206.698 0 01-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698A206.714 206.714 0 0158.003 319.2h-10.87C21.145 319.2 0 298.056 0 272.067v-32.134C0 213.944 21.145 192.8 47.134 192.8h10.87a206.755 206.755 0 0113.323-32.097L63.623 153c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697A206.893 206.893 0 01192.8 58.003v-10.87C192.8 21.144 213.944 0 239.934 0h32.133C298.056 0 319.2 21.144 319.2 47.133v10.871a206.698 206.698 0 0132.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698a206.714 206.714 0 0113.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87a206.755 206.755 0 01-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697a206.893 206.893 0 01-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zM165.717 409.17a176.812 176.812 0 0045.831 19.025 14.999 14.999 0 0111.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148a14.999 14.999 0 0111.252-14.524 176.812 176.812 0 0045.831-19.025 15 15 0 0118.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695a15 15 0 01-2.305-18.242 176.78 176.78 0 0019.024-45.831 15 15 0 0114.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133H442.72a15 15 0 01-14.524-11.251 176.815 176.815 0 00-19.024-45.831 15 15 0 012.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695a15 15 0 01-18.243 2.305 176.812 176.812 0 00-45.831-19.025 14.999 14.999 0 01-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148a14.999 14.999 0 01-11.252 14.524 176.812 176.812 0 00-45.831 19.025 15.002 15.002 0 01-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695a15 15 0 012.305 18.242 176.78 176.78 0 00-19.024 45.831 15 15 0 01-14.524 11.251H47.134C37.687 222.8 30 230.486 30 239.933v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147a15 15 0 0114.524 11.251 176.815 176.815 0 0019.024 45.831 15 15 0 01-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z\"/><path d=\"M256 367.4c-61.427 0-111.4-49.974-111.4-111.4S194.573 144.6 256 144.6 367.4 194.574 367.4 256 317.427 367.4 256 367.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z\"/></symbol>";

	var trash = "<symbol id=\"rs-trash\" viewBox=\"0 0 512 512\"><path d=\"M424 64h-88V48c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16H88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283C87.788 491.919 108.848 512 134.512 512h242.976c25.665 0 46.725-20.081 47.945-45.717L439.256 176H448c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zM208 48c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zM80 104c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40H80zm313.469 360.761A15.98 15.98 0 01377.488 480H134.512a15.98 15.98 0 01-15.981-15.239L104.78 176h302.44z\"/><path d=\"M256 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zM336 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16zM176 448c8.836 0 16-7.164 16-16V224c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z\"/></symbol>";

	var sprite = [
	  '<svg class="svg-sprite" style="display: none;">',
	    arrowDown,
	    close,
	    github,
	    logo,
	    menu,
	    settings,
	    trash,
	  '</svg>'
	].join('');

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 * IMPORTANT: all calls of this function must be prefixed with
	 * \/\*#\_\_PURE\_\_\*\/
	 * So that rollup can tree-shake them if necessary.
	 */
	function makeMap(str, expectsLowerCase) {
	    const map = Object.create(null);
	    const list = str.split(',');
	    for (let i = 0; i < list.length; i++) {
	        map[list[i]] = true;
	    }
	    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
	}

	const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
	    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
	    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
	const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

	/**
	 * On the client we only need to offer special cases for boolean attributes that
	 * have different names from their corresponding dom properties:
	 * - itemscope -> N/A
	 * - allowfullscreen -> allowFullscreen
	 * - formnovalidate -> formNoValidate
	 * - ismap -> isMap
	 * - nomodule -> noModule
	 * - novalidate -> noValidate
	 * - readonly -> readOnly
	 */
	const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
	const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);

	function normalizeStyle(value) {
	    if (isArray(value)) {
	        const res = {};
	        for (let i = 0; i < value.length; i++) {
	            const item = value[i];
	            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
	            if (normalized) {
	                for (const key in normalized) {
	                    res[key] = normalized[key];
	                }
	            }
	        }
	        return res;
	    }
	    else if (isObject(value)) {
	        return value;
	    }
	}
	const listDelimiterRE = /;(?![^(]*\))/g;
	const propertyDelimiterRE = /:(.+)/;
	function parseStringStyle(cssText) {
	    const ret = {};
	    cssText.split(listDelimiterRE).forEach(item => {
	        if (item) {
	            const tmp = item.split(propertyDelimiterRE);
	            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
	        }
	    });
	    return ret;
	}
	function normalizeClass(value) {
	    let res = '';
	    if (isString(value)) {
	        res = value;
	    }
	    else if (isArray(value)) {
	        for (let i = 0; i < value.length; i++) {
	            res += normalizeClass(value[i]) + ' ';
	        }
	    }
	    else if (isObject(value)) {
	        for (const name in value) {
	            if (value[name]) {
	                res += name + ' ';
	            }
	        }
	    }
	    return res.trim();
	}

	// These tag configs are shared between compiler-dom and runtime-dom, so they
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
	const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
	    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
	    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
	    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
	    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
	    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
	    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
	    'option,output,progress,select,textarea,details,dialog,menu,' +
	    'summary,template,blockquote,iframe,tfoot';
	// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
	const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
	    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
	    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
	    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
	    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
	    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
	    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
	    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
	    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
	    'text,textPath,title,tspan,unknown,use,view';
	const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
	const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);

	/**
	 * For converting {{ interpolation }} values to displayed strings.
	 * @private
	 */
	const toDisplayString = (val) => {
	    return val == null
	        ? ''
	        : isObject(val)
	            ? JSON.stringify(val, replacer, 2)
	            : String(val);
	};
	const replacer = (_key, val) => {
	    if (isMap(val)) {
	        return {
	            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
	                entries[`${key} =>`] = val;
	                return entries;
	            }, {})
	        };
	    }
	    else if (isSet(val)) {
	        return {
	            [`Set(${val.size})`]: [...val.values()]
	        };
	    }
	    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
	        return String(val);
	    }
	    return val;
	};

	const EMPTY_OBJ =  Object.freeze({})
	    ;
	const EMPTY_ARR =  Object.freeze([]) ;
	const NOOP = () => { };
	/**
	 * Always return false.
	 */
	const NO = () => false;
	const onRE = /^on[^a-z]/;
	const isOn = (key) => onRE.test(key);
	const isModelListener = (key) => key.startsWith('onUpdate:');
	const extend = Object.assign;
	const remove = (arr, el) => {
	    const i = arr.indexOf(el);
	    if (i > -1) {
	        arr.splice(i, 1);
	    }
	};
	const hasOwnProperty = Object.prototype.hasOwnProperty;
	const hasOwn = (val, key) => hasOwnProperty.call(val, key);
	const isArray = Array.isArray;
	const isMap = (val) => toTypeString(val) === '[object Map]';
	const isSet = (val) => toTypeString(val) === '[object Set]';
	const isFunction = (val) => typeof val === 'function';
	const isString = (val) => typeof val === 'string';
	const isSymbol = (val) => typeof val === 'symbol';
	const isObject = (val) => val !== null && typeof val === 'object';
	const isPromise = (val) => {
	    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
	};
	const objectToString = Object.prototype.toString;
	const toTypeString = (value) => objectToString.call(value);
	const toRawType = (value) => {
	    // extract "RawType" from strings like "[object RawType]"
	    return toTypeString(value).slice(8, -1);
	};
	const isPlainObject = (val) => toTypeString(val) === '[object Object]';
	const isIntegerKey = (key) => isString(key) &&
	    key !== 'NaN' &&
	    key[0] !== '-' &&
	    '' + parseInt(key, 10) === key;
	const isReservedProp = /*#__PURE__*/ makeMap(
	// the leading comma is intentional so empty string "" is also included
	',key,ref,' +
	    'onVnodeBeforeMount,onVnodeMounted,' +
	    'onVnodeBeforeUpdate,onVnodeUpdated,' +
	    'onVnodeBeforeUnmount,onVnodeUnmounted');
	const cacheStringFunction = (fn) => {
	    const cache = Object.create(null);
	    return ((str) => {
	        const hit = cache[str];
	        return hit || (cache[str] = fn(str));
	    });
	};
	const camelizeRE = /-(\w)/g;
	/**
	 * @private
	 */
	const camelize = cacheStringFunction((str) => {
	    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
	});
	const hyphenateRE = /\B([A-Z])/g;
	/**
	 * @private
	 */
	const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
	/**
	 * @private
	 */
	const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
	/**
	 * @private
	 */
	const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
	// compare whether a value has changed, accounting for NaN.
	const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
	const invokeArrayFns = (fns, arg) => {
	    for (let i = 0; i < fns.length; i++) {
	        fns[i](arg);
	    }
	};
	const def = (obj, key, value) => {
	    Object.defineProperty(obj, key, {
	        configurable: true,
	        enumerable: false,
	        value
	    });
	};
	const toNumber = (val) => {
	    const n = parseFloat(val);
	    return isNaN(n) ? val : n;
	};
	let _globalThis;
	const getGlobalThis = () => {
	    return (_globalThis ||
	        (_globalThis =
	            typeof globalThis !== 'undefined'
	                ? globalThis
	                : typeof self !== 'undefined'
	                    ? self
	                    : typeof window !== 'undefined'
	                        ? window
	                        : typeof global !== 'undefined'
	                            ? global
	                            : {}));
	};

	const targetMap = new WeakMap();
	const effectStack = [];
	let activeEffect;
	const ITERATE_KEY = Symbol( 'iterate' );
	const MAP_KEY_ITERATE_KEY = Symbol( 'Map key iterate' );
	function isEffect(fn) {
	    return fn && fn._isEffect === true;
	}
	function effect(fn, options = EMPTY_OBJ) {
	    if (isEffect(fn)) {
	        fn = fn.raw;
	    }
	    const effect = createReactiveEffect(fn, options);
	    if (!options.lazy) {
	        effect();
	    }
	    return effect;
	}
	function stop(effect) {
	    if (effect.active) {
	        cleanup(effect);
	        if (effect.options.onStop) {
	            effect.options.onStop();
	        }
	        effect.active = false;
	    }
	}
	let uid = 0;
	function createReactiveEffect(fn, options) {
	    const effect = function reactiveEffect() {
	        if (!effect.active) {
	            return options.scheduler ? undefined : fn();
	        }
	        if (!effectStack.includes(effect)) {
	            cleanup(effect);
	            try {
	                enableTracking();
	                effectStack.push(effect);
	                activeEffect = effect;
	                return fn();
	            }
	            finally {
	                effectStack.pop();
	                resetTracking();
	                activeEffect = effectStack[effectStack.length - 1];
	            }
	        }
	    };
	    effect.id = uid++;
	    effect.allowRecurse = !!options.allowRecurse;
	    effect._isEffect = true;
	    effect.active = true;
	    effect.raw = fn;
	    effect.deps = [];
	    effect.options = options;
	    return effect;
	}
	function cleanup(effect) {
	    const { deps } = effect;
	    if (deps.length) {
	        for (let i = 0; i < deps.length; i++) {
	            deps[i].delete(effect);
	        }
	        deps.length = 0;
	    }
	}
	let shouldTrack = true;
	const trackStack = [];
	function pauseTracking() {
	    trackStack.push(shouldTrack);
	    shouldTrack = false;
	}
	function enableTracking() {
	    trackStack.push(shouldTrack);
	    shouldTrack = true;
	}
	function resetTracking() {
	    const last = trackStack.pop();
	    shouldTrack = last === undefined ? true : last;
	}
	function track(target, type, key) {
	    if (!shouldTrack || activeEffect === undefined) {
	        return;
	    }
	    let depsMap = targetMap.get(target);
	    if (!depsMap) {
	        targetMap.set(target, (depsMap = new Map()));
	    }
	    let dep = depsMap.get(key);
	    if (!dep) {
	        depsMap.set(key, (dep = new Set()));
	    }
	    if (!dep.has(activeEffect)) {
	        dep.add(activeEffect);
	        activeEffect.deps.push(dep);
	        if ( activeEffect.options.onTrack) {
	            activeEffect.options.onTrack({
	                effect: activeEffect,
	                target,
	                type,
	                key
	            });
	        }
	    }
	}
	function trigger(target, type, key, newValue, oldValue, oldTarget) {
	    const depsMap = targetMap.get(target);
	    if (!depsMap) {
	        // never been tracked
	        return;
	    }
	    const effects = new Set();
	    const add = (effectsToAdd) => {
	        if (effectsToAdd) {
	            effectsToAdd.forEach(effect => {
	                if (effect !== activeEffect || effect.allowRecurse) {
	                    effects.add(effect);
	                }
	            });
	        }
	    };
	    if (type === "clear" /* CLEAR */) {
	        // collection being cleared
	        // trigger all effects for target
	        depsMap.forEach(add);
	    }
	    else if (key === 'length' && isArray(target)) {
	        depsMap.forEach((dep, key) => {
	            if (key === 'length' || key >= newValue) {
	                add(dep);
	            }
	        });
	    }
	    else {
	        // schedule runs for SET | ADD | DELETE
	        if (key !== void 0) {
	            add(depsMap.get(key));
	        }
	        // also run for iteration key on ADD | DELETE | Map.SET
	        switch (type) {
	            case "add" /* ADD */:
	                if (!isArray(target)) {
	                    add(depsMap.get(ITERATE_KEY));
	                    if (isMap(target)) {
	                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
	                    }
	                }
	                else if (isIntegerKey(key)) {
	                    // new index added to array -> length changes
	                    add(depsMap.get('length'));
	                }
	                break;
	            case "delete" /* DELETE */:
	                if (!isArray(target)) {
	                    add(depsMap.get(ITERATE_KEY));
	                    if (isMap(target)) {
	                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
	                    }
	                }
	                break;
	            case "set" /* SET */:
	                if (isMap(target)) {
	                    add(depsMap.get(ITERATE_KEY));
	                }
	                break;
	        }
	    }
	    const run = (effect) => {
	        if ( effect.options.onTrigger) {
	            effect.options.onTrigger({
	                effect,
	                target,
	                key,
	                type,
	                newValue,
	                oldValue,
	                oldTarget
	            });
	        }
	        if (effect.options.scheduler) {
	            effect.options.scheduler(effect);
	        }
	        else {
	            effect();
	        }
	    };
	    effects.forEach(run);
	}

	const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
	    .map(key => Symbol[key])
	    .filter(isSymbol));
	const get = /*#__PURE__*/ createGetter();
	const shallowGet = /*#__PURE__*/ createGetter(false, true);
	const readonlyGet = /*#__PURE__*/ createGetter(true);
	const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
	const arrayInstrumentations = {};
	['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
	    const method = Array.prototype[key];
	    arrayInstrumentations[key] = function (...args) {
	        const arr = toRaw(this);
	        for (let i = 0, l = this.length; i < l; i++) {
	            track(arr, "get" /* GET */, i + '');
	        }
	        // we run the method using the original args first (which may be reactive)
	        const res = method.apply(arr, args);
	        if (res === -1 || res === false) {
	            // if that didn't work, run it again using raw values.
	            return method.apply(arr, args.map(toRaw));
	        }
	        else {
	            return res;
	        }
	    };
	});
	['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
	    const method = Array.prototype[key];
	    arrayInstrumentations[key] = function (...args) {
	        pauseTracking();
	        const res = method.apply(this, args);
	        resetTracking();
	        return res;
	    };
	});
	function createGetter(isReadonly = false, shallow = false) {
	    return function get(target, key, receiver) {
	        if (key === "__v_isReactive" /* IS_REACTIVE */) {
	            return !isReadonly;
	        }
	        else if (key === "__v_isReadonly" /* IS_READONLY */) {
	            return isReadonly;
	        }
	        else if (key === "__v_raw" /* RAW */ &&
	            receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
	            return target;
	        }
	        const targetIsArray = isArray(target);
	        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
	            return Reflect.get(arrayInstrumentations, key, receiver);
	        }
	        const res = Reflect.get(target, key, receiver);
	        if (isSymbol(key)
	            ? builtInSymbols.has(key)
	            : key === `__proto__` || key === `__v_isRef`) {
	            return res;
	        }
	        if (!isReadonly) {
	            track(target, "get" /* GET */, key);
	        }
	        if (shallow) {
	            return res;
	        }
	        if (isRef(res)) {
	            // ref unwrapping - does not apply for Array + integer key.
	            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
	            return shouldUnwrap ? res.value : res;
	        }
	        if (isObject(res)) {
	            // Convert returned value into a proxy as well. we do the isObject check
	            // here to avoid invalid value warning. Also need to lazy access readonly
	            // and reactive here to avoid circular dependency.
	            return isReadonly ? readonly(res) : reactive(res);
	        }
	        return res;
	    };
	}
	const set = /*#__PURE__*/ createSetter();
	const shallowSet = /*#__PURE__*/ createSetter(true);
	function createSetter(shallow = false) {
	    return function set(target, key, value, receiver) {
	        const oldValue = target[key];
	        if (!shallow) {
	            value = toRaw(value);
	            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
	                oldValue.value = value;
	                return true;
	            }
	        }
	        const hadKey = isArray(target) && isIntegerKey(key)
	            ? Number(key) < target.length
	            : hasOwn(target, key);
	        const result = Reflect.set(target, key, value, receiver);
	        // don't trigger if target is something up in the prototype chain of original
	        if (target === toRaw(receiver)) {
	            if (!hadKey) {
	                trigger(target, "add" /* ADD */, key, value);
	            }
	            else if (hasChanged(value, oldValue)) {
	                trigger(target, "set" /* SET */, key, value, oldValue);
	            }
	        }
	        return result;
	    };
	}
	function deleteProperty(target, key) {
	    const hadKey = hasOwn(target, key);
	    const oldValue = target[key];
	    const result = Reflect.deleteProperty(target, key);
	    if (result && hadKey) {
	        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
	    }
	    return result;
	}
	function has(target, key) {
	    const result = Reflect.has(target, key);
	    if (!isSymbol(key) || !builtInSymbols.has(key)) {
	        track(target, "has" /* HAS */, key);
	    }
	    return result;
	}
	function ownKeys(target) {
	    track(target, "iterate" /* ITERATE */, isArray(target) ? 'length' : ITERATE_KEY);
	    return Reflect.ownKeys(target);
	}
	const mutableHandlers = {
	    get,
	    set,
	    deleteProperty,
	    has,
	    ownKeys
	};
	const readonlyHandlers = {
	    get: readonlyGet,
	    set(target, key) {
	        {
	            console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
	        }
	        return true;
	    },
	    deleteProperty(target, key) {
	        {
	            console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
	        }
	        return true;
	    }
	};
	const shallowReactiveHandlers = extend({}, mutableHandlers, {
	    get: shallowGet,
	    set: shallowSet
	});
	// Props handlers are special in the sense that it should not unwrap top-level
	// refs (in order to allow refs to be explicitly passed down), but should
	// retain the reactivity of the normal readonly object.
	const shallowReadonlyHandlers = extend({}, readonlyHandlers, {
	    get: shallowReadonlyGet
	});

	const toReactive = (value) => isObject(value) ? reactive(value) : value;
	const toReadonly = (value) => isObject(value) ? readonly(value) : value;
	const toShallow = (value) => value;
	const getProto = (v) => Reflect.getPrototypeOf(v);
	function get$1(target, key, isReadonly = false, isShallow = false) {
	    // #1772: readonly(reactive(Map)) should return readonly + reactive version
	    // of the value
	    target = target["__v_raw" /* RAW */];
	    const rawTarget = toRaw(target);
	    const rawKey = toRaw(key);
	    if (key !== rawKey) {
	        !isReadonly && track(rawTarget, "get" /* GET */, key);
	    }
	    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
	    const { has } = getProto(rawTarget);
	    const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
	    if (has.call(rawTarget, key)) {
	        return wrap(target.get(key));
	    }
	    else if (has.call(rawTarget, rawKey)) {
	        return wrap(target.get(rawKey));
	    }
	}
	function has$1(key, isReadonly = false) {
	    const target = this["__v_raw" /* RAW */];
	    const rawTarget = toRaw(target);
	    const rawKey = toRaw(key);
	    if (key !== rawKey) {
	        !isReadonly && track(rawTarget, "has" /* HAS */, key);
	    }
	    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
	    return key === rawKey
	        ? target.has(key)
	        : target.has(key) || target.has(rawKey);
	}
	function size(target, isReadonly = false) {
	    target = target["__v_raw" /* RAW */];
	    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
	    return Reflect.get(target, 'size', target);
	}
	function add(value) {
	    value = toRaw(value);
	    const target = toRaw(this);
	    const proto = getProto(target);
	    const hadKey = proto.has.call(target, value);
	    const result = target.add(value);
	    if (!hadKey) {
	        trigger(target, "add" /* ADD */, value, value);
	    }
	    return result;
	}
	function set$1(key, value) {
	    value = toRaw(value);
	    const target = toRaw(this);
	    const { has, get } = getProto(target);
	    let hadKey = has.call(target, key);
	    if (!hadKey) {
	        key = toRaw(key);
	        hadKey = has.call(target, key);
	    }
	    else {
	        checkIdentityKeys(target, has, key);
	    }
	    const oldValue = get.call(target, key);
	    const result = target.set(key, value);
	    if (!hadKey) {
	        trigger(target, "add" /* ADD */, key, value);
	    }
	    else if (hasChanged(value, oldValue)) {
	        trigger(target, "set" /* SET */, key, value, oldValue);
	    }
	    return result;
	}
	function deleteEntry(key) {
	    const target = toRaw(this);
	    const { has, get } = getProto(target);
	    let hadKey = has.call(target, key);
	    if (!hadKey) {
	        key = toRaw(key);
	        hadKey = has.call(target, key);
	    }
	    else {
	        checkIdentityKeys(target, has, key);
	    }
	    const oldValue = get ? get.call(target, key) : undefined;
	    // forward the operation before queueing reactions
	    const result = target.delete(key);
	    if (hadKey) {
	        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
	    }
	    return result;
	}
	function clear() {
	    const target = toRaw(this);
	    const hadItems = target.size !== 0;
	    const oldTarget =  isMap(target)
	            ? new Map(target)
	            : new Set(target)
	        ;
	    // forward the operation before queueing reactions
	    const result = target.clear();
	    if (hadItems) {
	        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
	    }
	    return result;
	}
	function createForEach(isReadonly, isShallow) {
	    return function forEach(callback, thisArg) {
	        const observed = this;
	        const target = observed["__v_raw" /* RAW */];
	        const rawTarget = toRaw(target);
	        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
	        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
	        return target.forEach((value, key) => {
	            // important: make sure the callback is
	            // 1. invoked with the reactive map as `this` and 3rd arg
	            // 2. the value received should be a corresponding reactive/readonly.
	            return callback.call(thisArg, wrap(value), wrap(key), observed);
	        });
	    };
	}
	function createIterableMethod(method, isReadonly, isShallow) {
	    return function (...args) {
	        const target = this["__v_raw" /* RAW */];
	        const rawTarget = toRaw(target);
	        const targetIsMap = isMap(rawTarget);
	        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
	        const isKeyOnly = method === 'keys' && targetIsMap;
	        const innerIterator = target[method](...args);
	        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
	        !isReadonly &&
	            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
	        // return a wrapped iterator which returns observed versions of the
	        // values emitted from the real iterator
	        return {
	            // iterator protocol
	            next() {
	                const { value, done } = innerIterator.next();
	                return done
	                    ? { value, done }
	                    : {
	                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
	                        done
	                    };
	            },
	            // iterable protocol
	            [Symbol.iterator]() {
	                return this;
	            }
	        };
	    };
	}
	function createReadonlyMethod(type) {
	    return function (...args) {
	        {
	            const key = args[0] ? `on key "${args[0]}" ` : ``;
	            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
	        }
	        return type === "delete" /* DELETE */ ? false : this;
	    };
	}
	const mutableInstrumentations = {
	    get(key) {
	        return get$1(this, key);
	    },
	    get size() {
	        return size(this);
	    },
	    has: has$1,
	    add,
	    set: set$1,
	    delete: deleteEntry,
	    clear,
	    forEach: createForEach(false, false)
	};
	const shallowInstrumentations = {
	    get(key) {
	        return get$1(this, key, false, true);
	    },
	    get size() {
	        return size(this);
	    },
	    has: has$1,
	    add,
	    set: set$1,
	    delete: deleteEntry,
	    clear,
	    forEach: createForEach(false, true)
	};
	const readonlyInstrumentations = {
	    get(key) {
	        return get$1(this, key, true);
	    },
	    get size() {
	        return size(this, true);
	    },
	    has(key) {
	        return has$1.call(this, key, true);
	    },
	    add: createReadonlyMethod("add" /* ADD */),
	    set: createReadonlyMethod("set" /* SET */),
	    delete: createReadonlyMethod("delete" /* DELETE */),
	    clear: createReadonlyMethod("clear" /* CLEAR */),
	    forEach: createForEach(true, false)
	};
	const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
	iteratorMethods.forEach(method => {
	    mutableInstrumentations[method] = createIterableMethod(method, false, false);
	    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
	    shallowInstrumentations[method] = createIterableMethod(method, false, true);
	});
	function createInstrumentationGetter(isReadonly, shallow) {
	    const instrumentations = shallow
	        ? shallowInstrumentations
	        : isReadonly
	            ? readonlyInstrumentations
	            : mutableInstrumentations;
	    return (target, key, receiver) => {
	        if (key === "__v_isReactive" /* IS_REACTIVE */) {
	            return !isReadonly;
	        }
	        else if (key === "__v_isReadonly" /* IS_READONLY */) {
	            return isReadonly;
	        }
	        else if (key === "__v_raw" /* RAW */) {
	            return target;
	        }
	        return Reflect.get(hasOwn(instrumentations, key) && key in target
	            ? instrumentations
	            : target, key, receiver);
	    };
	}
	const mutableCollectionHandlers = {
	    get: createInstrumentationGetter(false, false)
	};
	const shallowCollectionHandlers = {
	    get: createInstrumentationGetter(false, true)
	};
	const readonlyCollectionHandlers = {
	    get: createInstrumentationGetter(true, false)
	};
	function checkIdentityKeys(target, has, key) {
	    const rawKey = toRaw(key);
	    if (rawKey !== key && has.call(target, rawKey)) {
	        const type = toRawType(target);
	        console.warn(`Reactive ${type} contains both the raw and reactive ` +
	            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
	            `which can lead to inconsistencies. ` +
	            `Avoid differentiating between the raw and reactive versions ` +
	            `of an object and only use the reactive version if possible.`);
	    }
	}

	const reactiveMap = new WeakMap();
	const readonlyMap = new WeakMap();
	function targetTypeMap(rawType) {
	    switch (rawType) {
	        case 'Object':
	        case 'Array':
	            return 1 /* COMMON */;
	        case 'Map':
	        case 'Set':
	        case 'WeakMap':
	        case 'WeakSet':
	            return 2 /* COLLECTION */;
	        default:
	            return 0 /* INVALID */;
	    }
	}
	function getTargetType(value) {
	    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
	        ? 0 /* INVALID */
	        : targetTypeMap(toRawType(value));
	}
	function reactive(target) {
	    // if trying to observe a readonly proxy, return the readonly version.
	    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
	        return target;
	    }
	    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
	}
	// Return a reactive-copy of the original object, where only the root level
	// properties are reactive, and does NOT unwrap refs nor recursively convert
	// returned properties.
	function shallowReactive(target) {
	    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
	}
	function readonly(target) {
	    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
	}
	// Return a reactive-copy of the original object, where only the root level
	// properties are readonly, and does NOT unwrap refs nor recursively convert
	// returned properties.
	// This is used for creating the props proxy object for stateful components.
	function shallowReadonly(target) {
	    return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
	}
	function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
	    if (!isObject(target)) {
	        {
	            console.warn(`value cannot be made reactive: ${String(target)}`);
	        }
	        return target;
	    }
	    // target is already a Proxy, return it.
	    // exception: calling readonly() on a reactive object
	    if (target["__v_raw" /* RAW */] &&
	        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
	        return target;
	    }
	    // target already has corresponding Proxy
	    const proxyMap = isReadonly ? readonlyMap : reactiveMap;
	    const existingProxy = proxyMap.get(target);
	    if (existingProxy) {
	        return existingProxy;
	    }
	    // only a whitelist of value types can be observed.
	    const targetType = getTargetType(target);
	    if (targetType === 0 /* INVALID */) {
	        return target;
	    }
	    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
	    proxyMap.set(target, proxy);
	    return proxy;
	}
	function isReactive(value) {
	    if (isReadonly(value)) {
	        return isReactive(value["__v_raw" /* RAW */]);
	    }
	    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
	}
	function isReadonly(value) {
	    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
	}
	function isProxy(value) {
	    return isReactive(value) || isReadonly(value);
	}
	function toRaw(observed) {
	    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
	}

	const convert = (val) => isObject(val) ? reactive(val) : val;
	function isRef(r) {
	    return Boolean(r && r.__v_isRef === true);
	}
	function ref(value) {
	    return createRef(value);
	}
	function shallowRef(value) {
	    return createRef(value, true);
	}
	class RefImpl {
	    constructor(_rawValue, _shallow = false) {
	        this._rawValue = _rawValue;
	        this._shallow = _shallow;
	        this.__v_isRef = true;
	        this._value = _shallow ? _rawValue : convert(_rawValue);
	    }
	    get value() {
	        track(toRaw(this), "get" /* GET */, 'value');
	        return this._value;
	    }
	    set value(newVal) {
	        if (hasChanged(toRaw(newVal), this._rawValue)) {
	            this._rawValue = newVal;
	            this._value = this._shallow ? newVal : convert(newVal);
	            trigger(toRaw(this), "set" /* SET */, 'value', newVal);
	        }
	    }
	}
	function createRef(rawValue, shallow = false) {
	    if (isRef(rawValue)) {
	        return rawValue;
	    }
	    return new RefImpl(rawValue, shallow);
	}
	function unref(ref) {
	    return isRef(ref) ? ref.value : ref;
	}
	const shallowUnwrapHandlers = {
	    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
	    set: (target, key, value, receiver) => {
	        const oldValue = target[key];
	        if (isRef(oldValue) && !isRef(value)) {
	            oldValue.value = value;
	            return true;
	        }
	        else {
	            return Reflect.set(target, key, value, receiver);
	        }
	    }
	};
	function proxyRefs(objectWithRefs) {
	    return isReactive(objectWithRefs)
	        ? objectWithRefs
	        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
	}

	class ComputedRefImpl {
	    constructor(getter, _setter, isReadonly) {
	        this._setter = _setter;
	        this._dirty = true;
	        this.__v_isRef = true;
	        this.effect = effect(getter, {
	            lazy: true,
	            scheduler: () => {
	                if (!this._dirty) {
	                    this._dirty = true;
	                    trigger(toRaw(this), "set" /* SET */, 'value');
	                }
	            }
	        });
	        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
	    }
	    get value() {
	        if (this._dirty) {
	            this._value = this.effect();
	            this._dirty = false;
	        }
	        track(toRaw(this), "get" /* GET */, 'value');
	        return this._value;
	    }
	    set value(newValue) {
	        this._setter(newValue);
	    }
	}
	function computed(getterOrOptions) {
	    let getter;
	    let setter;
	    if (isFunction(getterOrOptions)) {
	        getter = getterOrOptions;
	        setter =  () => {
	                console.warn('Write operation failed: computed value is readonly');
	            }
	            ;
	    }
	    else {
	        getter = getterOrOptions.get;
	        setter = getterOrOptions.set;
	    }
	    return new ComputedRefImpl(getter, setter, isFunction(getterOrOptions) || !getterOrOptions.set);
	}

	const stack = [];
	function pushWarningContext(vnode) {
	    stack.push(vnode);
	}
	function popWarningContext() {
	    stack.pop();
	}
	function warn(msg, ...args) {
	    // avoid props formatting or warn handler tracking deps that might be mutated
	    // during patch, leading to infinite recursion.
	    pauseTracking();
	    const instance = stack.length ? stack[stack.length - 1].component : null;
	    const appWarnHandler = instance && instance.appContext.config.warnHandler;
	    const trace = getComponentTrace();
	    if (appWarnHandler) {
	        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
	            msg + args.join(''),
	            instance && instance.proxy,
	            trace
	                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
	                .join('\n'),
	            trace
	        ]);
	    }
	    else {
	        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
	        /* istanbul ignore if */
	        if (trace.length &&
	            // avoid spamming console during tests
	            !false) {
	            warnArgs.push(`\n`, ...formatTrace(trace));
	        }
	        console.warn(...warnArgs);
	    }
	    resetTracking();
	}
	function getComponentTrace() {
	    let currentVNode = stack[stack.length - 1];
	    if (!currentVNode) {
	        return [];
	    }
	    // we can't just use the stack because it will be incomplete during updates
	    // that did not start from the root. Re-construct the parent chain using
	    // instance parent pointers.
	    const normalizedStack = [];
	    while (currentVNode) {
	        const last = normalizedStack[0];
	        if (last && last.vnode === currentVNode) {
	            last.recurseCount++;
	        }
	        else {
	            normalizedStack.push({
	                vnode: currentVNode,
	                recurseCount: 0
	            });
	        }
	        const parentInstance = currentVNode.component && currentVNode.component.parent;
	        currentVNode = parentInstance && parentInstance.vnode;
	    }
	    return normalizedStack;
	}
	/* istanbul ignore next */
	function formatTrace(trace) {
	    const logs = [];
	    trace.forEach((entry, i) => {
	        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
	    });
	    return logs;
	}
	function formatTraceEntry({ vnode, recurseCount }) {
	    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
	    const isRoot = vnode.component ? vnode.component.parent == null : false;
	    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
	    const close = `>` + postfix;
	    return vnode.props
	        ? [open, ...formatProps(vnode.props), close]
	        : [open + close];
	}
	/* istanbul ignore next */
	function formatProps(props) {
	    const res = [];
	    const keys = Object.keys(props);
	    keys.slice(0, 3).forEach(key => {
	        res.push(...formatProp(key, props[key]));
	    });
	    if (keys.length > 3) {
	        res.push(` ...`);
	    }
	    return res;
	}
	/* istanbul ignore next */
	function formatProp(key, value, raw) {
	    if (isString(value)) {
	        value = JSON.stringify(value);
	        return raw ? value : [`${key}=${value}`];
	    }
	    else if (typeof value === 'number' ||
	        typeof value === 'boolean' ||
	        value == null) {
	        return raw ? value : [`${key}=${value}`];
	    }
	    else if (isRef(value)) {
	        value = formatProp(key, toRaw(value.value), true);
	        return raw ? value : [`${key}=Ref<`, value, `>`];
	    }
	    else if (isFunction(value)) {
	        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
	    }
	    else {
	        value = toRaw(value);
	        return raw ? value : [`${key}=`, value];
	    }
	}

	const ErrorTypeStrings = {
	    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
	    ["c" /* CREATED */]: 'created hook',
	    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
	    ["m" /* MOUNTED */]: 'mounted hook',
	    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
	    ["u" /* UPDATED */]: 'updated',
	    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
	    ["um" /* UNMOUNTED */]: 'unmounted hook',
	    ["a" /* ACTIVATED */]: 'activated hook',
	    ["da" /* DEACTIVATED */]: 'deactivated hook',
	    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
	    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
	    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
	    [0 /* SETUP_FUNCTION */]: 'setup function',
	    [1 /* RENDER_FUNCTION */]: 'render function',
	    [2 /* WATCH_GETTER */]: 'watcher getter',
	    [3 /* WATCH_CALLBACK */]: 'watcher callback',
	    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
	    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
	    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
	    [7 /* VNODE_HOOK */]: 'vnode hook',
	    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
	    [9 /* TRANSITION_HOOK */]: 'transition hook',
	    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
	    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
	    [12 /* FUNCTION_REF */]: 'ref function',
	    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
	    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
	        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'
	};
	function callWithErrorHandling(fn, instance, type, args) {
	    let res;
	    try {
	        res = args ? fn(...args) : fn();
	    }
	    catch (err) {
	        handleError(err, instance, type);
	    }
	    return res;
	}
	function callWithAsyncErrorHandling(fn, instance, type, args) {
	    if (isFunction(fn)) {
	        const res = callWithErrorHandling(fn, instance, type, args);
	        if (res && isPromise(res)) {
	            res.catch(err => {
	                handleError(err, instance, type);
	            });
	        }
	        return res;
	    }
	    const values = [];
	    for (let i = 0; i < fn.length; i++) {
	        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
	    }
	    return values;
	}
	function handleError(err, instance, type, throwInDev = true) {
	    const contextVNode = instance ? instance.vnode : null;
	    if (instance) {
	        let cur = instance.parent;
	        // the exposed instance is the render proxy to keep it consistent with 2.x
	        const exposedInstance = instance.proxy;
	        // in production the hook receives only the error code
	        const errorInfo =  ErrorTypeStrings[type] ;
	        while (cur) {
	            const errorCapturedHooks = cur.ec;
	            if (errorCapturedHooks) {
	                for (let i = 0; i < errorCapturedHooks.length; i++) {
	                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
	                        return;
	                    }
	                }
	            }
	            cur = cur.parent;
	        }
	        // app-level handling
	        const appErrorHandler = instance.appContext.config.errorHandler;
	        if (appErrorHandler) {
	            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
	            return;
	        }
	    }
	    logError(err, type, contextVNode, throwInDev);
	}
	function logError(err, type, contextVNode, throwInDev = true) {
	    {
	        const info = ErrorTypeStrings[type];
	        if (contextVNode) {
	            pushWarningContext(contextVNode);
	        }
	        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
	        if (contextVNode) {
	            popWarningContext();
	        }
	        // crash in dev by default so it's more noticeable
	        if (throwInDev) {
	            throw err;
	        }
	        else {
	            console.error(err);
	        }
	    }
	}

	let isFlushing = false;
	let isFlushPending = false;
	const queue = [];
	let flushIndex = 0;
	const pendingPreFlushCbs = [];
	let activePreFlushCbs = null;
	let preFlushIndex = 0;
	const pendingPostFlushCbs = [];
	let activePostFlushCbs = null;
	let postFlushIndex = 0;
	const resolvedPromise = Promise.resolve();
	let currentFlushPromise = null;
	let currentPreFlushParentJob = null;
	const RECURSION_LIMIT = 100;
	function nextTick(fn) {
	    const p = currentFlushPromise || resolvedPromise;
	    return fn ? p.then(this ? fn.bind(this) : fn) : p;
	}
	function queueJob(job) {
	    // the dedupe search uses the startIndex argument of Array.includes()
	    // by default the search index includes the current job that is being run
	    // so it cannot recursively trigger itself again.
	    // if the job is a watch() callback, the search will start with a +1 index to
	    // allow it recursively trigger itself - it is the user's responsibility to
	    // ensure it doesn't end up in an infinite loop.
	    if ((!queue.length ||
	        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
	        job !== currentPreFlushParentJob) {
	        queue.push(job);
	        queueFlush();
	    }
	}
	function queueFlush() {
	    if (!isFlushing && !isFlushPending) {
	        isFlushPending = true;
	        currentFlushPromise = resolvedPromise.then(flushJobs);
	    }
	}
	function invalidateJob(job) {
	    const i = queue.indexOf(job);
	    if (i > -1) {
	        queue[i] = null;
	    }
	}
	function queueCb(cb, activeQueue, pendingQueue, index) {
	    if (!isArray(cb)) {
	        if (!activeQueue ||
	            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
	            pendingQueue.push(cb);
	        }
	    }
	    else {
	        // if cb is an array, it is a component lifecycle hook which can only be
	        // triggered by a job, which is already deduped in the main queue, so
	        // we can skip duplicate check here to improve perf
	        pendingQueue.push(...cb);
	    }
	    queueFlush();
	}
	function queuePreFlushCb(cb) {
	    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
	}
	function queuePostFlushCb(cb) {
	    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
	}
	function flushPreFlushCbs(seen, parentJob = null) {
	    if (pendingPreFlushCbs.length) {
	        currentPreFlushParentJob = parentJob;
	        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
	        pendingPreFlushCbs.length = 0;
	        {
	            seen = seen || new Map();
	        }
	        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
	            {
	                checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex]);
	            }
	            activePreFlushCbs[preFlushIndex]();
	        }
	        activePreFlushCbs = null;
	        preFlushIndex = 0;
	        currentPreFlushParentJob = null;
	        // recursively flush until it drains
	        flushPreFlushCbs(seen, parentJob);
	    }
	}
	function flushPostFlushCbs(seen) {
	    if (pendingPostFlushCbs.length) {
	        const deduped = [...new Set(pendingPostFlushCbs)];
	        pendingPostFlushCbs.length = 0;
	        // #1947 already has active queue, nested flushPostFlushCbs call
	        if (activePostFlushCbs) {
	            activePostFlushCbs.push(...deduped);
	            return;
	        }
	        activePostFlushCbs = deduped;
	        {
	            seen = seen || new Map();
	        }
	        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
	        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
	            {
	                checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex]);
	            }
	            activePostFlushCbs[postFlushIndex]();
	        }
	        activePostFlushCbs = null;
	        postFlushIndex = 0;
	    }
	}
	const getId = (job) => job.id == null ? Infinity : job.id;
	function flushJobs(seen) {
	    isFlushPending = false;
	    isFlushing = true;
	    {
	        seen = seen || new Map();
	    }
	    flushPreFlushCbs(seen);
	    // Sort queue before flush.
	    // This ensures that:
	    // 1. Components are updated from parent to child. (because parent is always
	    //    created before the child so its render effect will have smaller
	    //    priority number)
	    // 2. If a component is unmounted during a parent component's update,
	    //    its update can be skipped.
	    // Jobs can never be null before flush starts, since they are only invalidated
	    // during execution of another flushed job.
	    queue.sort((a, b) => getId(a) - getId(b));
	    try {
	        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
	            const job = queue[flushIndex];
	            if (job) {
	                if (true) {
	                    checkRecursiveUpdates(seen, job);
	                }
	                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
	            }
	        }
	    }
	    finally {
	        flushIndex = 0;
	        queue.length = 0;
	        flushPostFlushCbs(seen);
	        isFlushing = false;
	        currentFlushPromise = null;
	        // some postFlushCb queued jobs!
	        // keep flushing until it drains.
	        if (queue.length || pendingPostFlushCbs.length) {
	            flushJobs(seen);
	        }
	    }
	}
	function checkRecursiveUpdates(seen, fn) {
	    if (!seen.has(fn)) {
	        seen.set(fn, 1);
	    }
	    else {
	        const count = seen.get(fn);
	        if (count > RECURSION_LIMIT) {
	            throw new Error(`Maximum recursive updates exceeded. ` +
	                `This means you have a reactive effect that is mutating its own ` +
	                `dependencies and thus recursively triggering itself. Possible sources ` +
	                `include component template, render function, updated hook or ` +
	                `watcher source function.`);
	        }
	        else {
	            seen.set(fn, count + 1);
	        }
	    }
	}

	/* eslint-disable no-restricted-globals */
	let isHmrUpdating = false;
	const hmrDirtyComponents = new Set();
	// Expose the HMR runtime on the global object
	// This makes it entirely tree-shakable without polluting the exports and makes
	// it easier to be used in toolings like vue-loader
	// Note: for a component to be eligible for HMR it also needs the __hmrId option
	// to be set so that its instances can be registered / removed.
	{
	    const globalObject = typeof global !== 'undefined'
	        ? global
	        : typeof self !== 'undefined'
	            ? self
	            : typeof window !== 'undefined'
	                ? window
	                : {};
	    globalObject.__VUE_HMR_RUNTIME__ = {
	        createRecord: tryWrap(createRecord),
	        rerender: tryWrap(rerender),
	        reload: tryWrap(reload)
	    };
	}
	const map = new Map();
	function registerHMR(instance) {
	    const id = instance.type.__hmrId;
	    let record = map.get(id);
	    if (!record) {
	        createRecord(id);
	        record = map.get(id);
	    }
	    record.add(instance);
	}
	function unregisterHMR(instance) {
	    map.get(instance.type.__hmrId).delete(instance);
	}
	function createRecord(id) {
	    if (map.has(id)) {
	        return false;
	    }
	    map.set(id, new Set());
	    return true;
	}
	function rerender(id, newRender) {
	    const record = map.get(id);
	    if (!record)
	        return;
	    // Array.from creates a snapshot which avoids the set being mutated during
	    // updates
	    Array.from(record).forEach(instance => {
	        if (newRender) {
	            instance.render = newRender;
	        }
	        instance.renderCache = [];
	        // this flag forces child components with slot content to update
	        isHmrUpdating = true;
	        instance.update();
	        isHmrUpdating = false;
	    });
	}
	function reload(id, newComp) {
	    const record = map.get(id);
	    if (!record)
	        return;
	    // Array.from creates a snapshot which avoids the set being mutated during
	    // updates
	    Array.from(record).forEach(instance => {
	        const comp = instance.type;
	        if (!hmrDirtyComponents.has(comp)) {
	            // 1. Update existing comp definition to match new one
	            newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
	            extend(comp, newComp);
	            for (const key in comp) {
	                if (!(key in newComp)) {
	                    delete comp[key];
	                }
	            }
	            // 2. Mark component dirty. This forces the renderer to replace the component
	            // on patch.
	            hmrDirtyComponents.add(comp);
	            // 3. Make sure to unmark the component after the reload.
	            queuePostFlushCb(() => {
	                hmrDirtyComponents.delete(comp);
	            });
	        }
	        if (instance.parent) {
	            // 4. Force the parent instance to re-render. This will cause all updated
	            // components to be unmounted and re-mounted. Queue the update so that we
	            // don't end up forcing the same parent to re-render multiple times.
	            queueJob(instance.parent.update);
	        }
	        else if (instance.appContext.reload) {
	            // root instance mounted via createApp() has a reload method
	            instance.appContext.reload();
	        }
	        else if (typeof window !== 'undefined') {
	            // root instance inside tree created via raw render(). Force reload.
	            window.location.reload();
	        }
	        else {
	            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
	        }
	    });
	}
	function tryWrap(fn) {
	    return (id, arg) => {
	        try {
	            return fn(id, arg);
	        }
	        catch (e) {
	            console.error(e);
	            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
	                `Full reload required.`);
	        }
	    };
	}

	let devtools;
	function setDevtoolsHook(hook) {
	    devtools = hook;
	}
	function devtoolsInitApp(app, version) {
	    // TODO queue if devtools is undefined
	    if (!devtools)
	        return;
	    devtools.emit("app:init" /* APP_INIT */, app, version, {
	        Fragment,
	        Text,
	        Comment,
	        Static
	    });
	}
	function devtoolsUnmountApp(app) {
	    if (!devtools)
	        return;
	    devtools.emit("app:unmount" /* APP_UNMOUNT */, app);
	}
	const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
	const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
	const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
	function createDevtoolsComponentHook(hook) {
	    return (component) => {
	        if (!devtools)
	            return;
	        devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined);
	    };
	}
	function devtoolsComponentEmit(component, event, params) {
	    if (!devtools)
	        return;
	    devtools.emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
	}

	function emit(instance, event, ...rawArgs) {
	    const props = instance.vnode.props || EMPTY_OBJ;
	    {
	        const { emitsOptions, propsOptions: [propsOptions] } = instance;
	        if (emitsOptions) {
	            if (!(event in emitsOptions)) {
	                if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
	                    warn(`Component emitted event "${event}" but it is neither declared in ` +
	                        `the emits option nor as an "${toHandlerKey(event)}" prop.`);
	                }
	            }
	            else {
	                const validator = emitsOptions[event];
	                if (isFunction(validator)) {
	                    const isValid = validator(...rawArgs);
	                    if (!isValid) {
	                        warn(`Invalid event arguments: event validation failed for event "${event}".`);
	                    }
	                }
	            }
	        }
	    }
	    let args = rawArgs;
	    const isModelListener = event.startsWith('update:');
	    // for v-model update:xxx events, apply modifiers on args
	    const modelArg = isModelListener && event.slice(7);
	    if (modelArg && modelArg in props) {
	        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
	        const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
	        if (trim) {
	            args = rawArgs.map(a => a.trim());
	        }
	        else if (number) {
	            args = rawArgs.map(toNumber);
	        }
	    }
	    {
	        devtoolsComponentEmit(instance, event, args);
	    }
	    {
	        const lowerCaseEvent = event.toLowerCase();
	        if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
	            warn(`Event "${lowerCaseEvent}" is emitted in component ` +
	                `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` +
	                `Note that HTML attributes are case-insensitive and you cannot use ` +
	                `v-on to listen to camelCase events when using in-DOM templates. ` +
	                `You should probably use "${hyphenate(event)}" instead of "${event}".`);
	        }
	    }
	    // convert handler name to camelCase. See issue #2249
	    let handlerName = toHandlerKey(camelize(event));
	    let handler = props[handlerName];
	    // for v-model update:xxx events, also trigger kebab-case equivalent
	    // for props passed via kebab-case
	    if (!handler && isModelListener) {
	        handlerName = toHandlerKey(hyphenate(event));
	        handler = props[handlerName];
	    }
	    if (handler) {
	        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
	    }
	    const onceHandler = props[handlerName + `Once`];
	    if (onceHandler) {
	        if (!instance.emitted) {
	            (instance.emitted = {})[handlerName] = true;
	        }
	        else if (instance.emitted[handlerName]) {
	            return;
	        }
	        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
	    }
	}
	function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	    if (!appContext.deopt && comp.__emits !== undefined) {
	        return comp.__emits;
	    }
	    const raw = comp.emits;
	    let normalized = {};
	    // apply mixin/extends props
	    let hasExtends = false;
	    if ( !isFunction(comp)) {
	        const extendEmits = (raw) => {
	            hasExtends = true;
	            extend(normalized, normalizeEmitsOptions(raw, appContext, true));
	        };
	        if (!asMixin && appContext.mixins.length) {
	            appContext.mixins.forEach(extendEmits);
	        }
	        if (comp.extends) {
	            extendEmits(comp.extends);
	        }
	        if (comp.mixins) {
	            comp.mixins.forEach(extendEmits);
	        }
	    }
	    if (!raw && !hasExtends) {
	        return (comp.__emits = null);
	    }
	    if (isArray(raw)) {
	        raw.forEach(key => (normalized[key] = null));
	    }
	    else {
	        extend(normalized, raw);
	    }
	    return (comp.__emits = normalized);
	}
	// Check if an incoming prop key is a declared emit event listener.
	// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
	// both considered matched listeners.
	function isEmitListener(options, key) {
	    if (!options || !isOn(key)) {
	        return false;
	    }
	    key = key.replace(/Once$/, '');
	    return (hasOwn(options, key[2].toLowerCase() + key.slice(3)) ||
	        hasOwn(options, key.slice(2)));
	}

	// mark the current rendering instance for asset resolution (e.g.
	// resolveComponent, resolveDirective) during render
	let currentRenderingInstance = null;
	function setCurrentRenderingInstance(instance) {
	    currentRenderingInstance = instance;
	}
	// dev only flag to track whether $attrs was used during render.
	// If $attrs was used during render then the warning for failed attrs
	// fallthrough can be suppressed.
	let accessedAttrs = false;
	function markAttrsAccessed() {
	    accessedAttrs = true;
	}
	function renderComponentRoot(instance) {
	    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx } = instance;
	    let result;
	    currentRenderingInstance = instance;
	    {
	        accessedAttrs = false;
	    }
	    try {
	        let fallthroughAttrs;
	        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
	            // withProxy is a proxy with a different `has` trap only for
	            // runtime-compiled render functions using `with` block.
	            const proxyToUse = withProxy || proxy;
	            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
	            fallthroughAttrs = attrs;
	        }
	        else {
	            // functional
	            const render = Component;
	            // in dev, mark attrs accessed if optional props (attrs === props)
	            if (true && attrs === props) {
	                markAttrsAccessed();
	            }
	            result = normalizeVNode(render.length > 1
	                ? render(props, true
	                    ? {
	                        get attrs() {
	                            markAttrsAccessed();
	                            return attrs;
	                        },
	                        slots,
	                        emit
	                    }
	                    : { attrs, slots, emit })
	                : render(props, null /* we know it doesn't need it */));
	            fallthroughAttrs = Component.props
	                ? attrs
	                : getFunctionalFallthrough(attrs);
	        }
	        // attr merging
	        // in dev mode, comments are preserved, and it's possible for a template
	        // to have comments along side the root element which makes it a fragment
	        let root = result;
	        let setRoot = undefined;
	        if (true) {
	            ;
	            [root, setRoot] = getChildRoot(result);
	        }
	        if (Component.inheritAttrs !== false && fallthroughAttrs) {
	            const keys = Object.keys(fallthroughAttrs);
	            const { shapeFlag } = root;
	            if (keys.length) {
	                if (shapeFlag & 1 /* ELEMENT */ ||
	                    shapeFlag & 6 /* COMPONENT */) {
	                    if (propsOptions && keys.some(isModelListener)) {
	                        // If a v-model listener (onUpdate:xxx) has a corresponding declared
	                        // prop, it indicates this component expects to handle v-model and
	                        // it should not fallthrough.
	                        // related: #1543, #1643, #1989
	                        fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
	                    }
	                    root = cloneVNode(root, fallthroughAttrs);
	                }
	                else if (true && !accessedAttrs && root.type !== Comment) {
	                    const allAttrs = Object.keys(attrs);
	                    const eventAttrs = [];
	                    const extraAttrs = [];
	                    for (let i = 0, l = allAttrs.length; i < l; i++) {
	                        const key = allAttrs[i];
	                        if (isOn(key)) {
	                            // ignore v-model handlers when they fail to fallthrough
	                            if (!isModelListener(key)) {
	                                // remove `on`, lowercase first letter to reflect event casing
	                                // accurately
	                                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
	                            }
	                        }
	                        else {
	                            extraAttrs.push(key);
	                        }
	                    }
	                    if (extraAttrs.length) {
	                        warn(`Extraneous non-props attributes (` +
	                            `${extraAttrs.join(', ')}) ` +
	                            `were passed to component but could not be automatically inherited ` +
	                            `because component renders fragment or text root nodes.`);
	                    }
	                    if (eventAttrs.length) {
	                        warn(`Extraneous non-emits event listeners (` +
	                            `${eventAttrs.join(', ')}) ` +
	                            `were passed to component but could not be automatically inherited ` +
	                            `because component renders fragment or text root nodes. ` +
	                            `If the listener is intended to be a component custom event listener only, ` +
	                            `declare it using the "emits" option.`);
	                    }
	                }
	            }
	        }
	        // inherit directives
	        if (vnode.dirs) {
	            if (true && !isElementRoot(root)) {
	                warn(`Runtime directive used on component with non-element root node. ` +
	                    `The directives will not function as intended.`);
	            }
	            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	        }
	        // inherit transition data
	        if (vnode.transition) {
	            if (true && !isElementRoot(root)) {
	                warn(`Component inside <Transition> renders non-element root node ` +
	                    `that cannot be animated.`);
	            }
	            root.transition = vnode.transition;
	        }
	        if (true && setRoot) {
	            setRoot(root);
	        }
	        else {
	            result = root;
	        }
	    }
	    catch (err) {
	        handleError(err, instance, 1 /* RENDER_FUNCTION */);
	        result = createVNode(Comment);
	    }
	    currentRenderingInstance = null;
	    return result;
	}
	/**
	 * dev only
	 * In dev mode, template root level comments are rendered, which turns the
	 * template into a fragment root, but we need to locate the single element
	 * root for attrs and scope id processing.
	 */
	const getChildRoot = (vnode) => {
	    if (vnode.type !== Fragment) {
	        return [vnode, undefined];
	    }
	    const rawChildren = vnode.children;
	    const dynamicChildren = vnode.dynamicChildren;
	    const childRoot = filterSingleRoot(rawChildren);
	    if (!childRoot) {
	        return [vnode, undefined];
	    }
	    const index = rawChildren.indexOf(childRoot);
	    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
	    const setRoot = (updatedRoot) => {
	        rawChildren[index] = updatedRoot;
	        if (dynamicChildren) {
	            if (dynamicIndex > -1) {
	                dynamicChildren[dynamicIndex] = updatedRoot;
	            }
	            else if (updatedRoot.patchFlag > 0) {
	                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
	            }
	        }
	    };
	    return [normalizeVNode(childRoot), setRoot];
	};
	/**
	 * dev only
	 */
	function filterSingleRoot(children) {
	    const filtered = children.filter(child => {
	        return !(isVNode(child) &&
	            child.type === Comment &&
	            child.children !== 'v-if');
	    });
	    return filtered.length === 1 && isVNode(filtered[0]) ? filtered[0] : null;
	}
	const getFunctionalFallthrough = (attrs) => {
	    let res;
	    for (const key in attrs) {
	        if (key === 'class' || key === 'style' || isOn(key)) {
	            (res || (res = {}))[key] = attrs[key];
	        }
	    }
	    return res;
	};
	const filterModelListeners = (attrs, props) => {
	    const res = {};
	    for (const key in attrs) {
	        if (!isModelListener(key) || !(key.slice(9) in props)) {
	            res[key] = attrs[key];
	        }
	    }
	    return res;
	};
	const isElementRoot = (vnode) => {
	    return (vnode.shapeFlag & 6 /* COMPONENT */ ||
	        vnode.shapeFlag & 1 /* ELEMENT */ ||
	        vnode.type === Comment // potential v-if branch switch
	    );
	};
	function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	    const { props: prevProps, children: prevChildren, component } = prevVNode;
	    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	    const emits = component.emitsOptions;
	    // Parent component's render function was hot-updated. Since this may have
	    // caused the child component's slots content to have changed, we need to
	    // force the child to update as well.
	    if ( (prevChildren || nextChildren) && isHmrUpdating) {
	        return true;
	    }
	    // force child update for runtime directive or transition on component vnode.
	    if (nextVNode.dirs || nextVNode.transition) {
	        return true;
	    }
	    if (optimized && patchFlag > 0) {
	        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
	            // slot content that references values that might have changed,
	            // e.g. in a v-for
	            return true;
	        }
	        if (patchFlag & 16 /* FULL_PROPS */) {
	            if (!prevProps) {
	                return !!nextProps;
	            }
	            // presence of this flag indicates props are always non-null
	            return hasPropsChanged(prevProps, nextProps, emits);
	        }
	        else if (patchFlag & 8 /* PROPS */) {
	            const dynamicProps = nextVNode.dynamicProps;
	            for (let i = 0; i < dynamicProps.length; i++) {
	                const key = dynamicProps[i];
	                if (nextProps[key] !== prevProps[key] &&
	                    !isEmitListener(emits, key)) {
	                    return true;
	                }
	            }
	        }
	    }
	    else {
	        // this path is only taken by manually written render functions
	        // so presence of any children leads to a forced update
	        if (prevChildren || nextChildren) {
	            if (!nextChildren || !nextChildren.$stable) {
	                return true;
	            }
	        }
	        if (prevProps === nextProps) {
	            return false;
	        }
	        if (!prevProps) {
	            return !!nextProps;
	        }
	        if (!nextProps) {
	            return true;
	        }
	        return hasPropsChanged(prevProps, nextProps, emits);
	    }
	    return false;
	}
	function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	    const nextKeys = Object.keys(nextProps);
	    if (nextKeys.length !== Object.keys(prevProps).length) {
	        return true;
	    }
	    for (let i = 0; i < nextKeys.length; i++) {
	        const key = nextKeys[i];
	        if (nextProps[key] !== prevProps[key] &&
	            !isEmitListener(emitsOptions, key)) {
	            return true;
	        }
	    }
	    return false;
	}
	function updateHOCHostEl({ vnode, parent }, el // HostNode
	) {
	    while (parent && parent.subTree === vnode) {
	        (vnode = parent.vnode).el = el;
	        parent = parent.parent;
	    }
	}

	const isSuspense = (type) => type.__isSuspense;
	function normalizeSuspenseChildren(vnode) {
	    const { shapeFlag, children } = vnode;
	    let content;
	    let fallback;
	    if (shapeFlag & 32 /* SLOTS_CHILDREN */) {
	        content = normalizeSuspenseSlot(children.default);
	        fallback = normalizeSuspenseSlot(children.fallback);
	    }
	    else {
	        content = normalizeSuspenseSlot(children);
	        fallback = normalizeVNode(null);
	    }
	    return {
	        content,
	        fallback
	    };
	}
	function normalizeSuspenseSlot(s) {
	    if (isFunction(s)) {
	        s = s();
	    }
	    if (isArray(s)) {
	        const singleChild = filterSingleRoot(s);
	        if ( !singleChild) {
	            warn(`<Suspense> slots expect a single root node.`);
	        }
	        s = singleChild;
	    }
	    return normalizeVNode(s);
	}
	function queueEffectWithSuspense(fn, suspense) {
	    if (suspense && suspense.pendingBranch) {
	        if (isArray(fn)) {
	            suspense.effects.push(...fn);
	        }
	        else {
	            suspense.effects.push(fn);
	        }
	    }
	    else {
	        queuePostFlushCb(fn);
	    }
	}

	let isRenderingCompiledSlot = 0;
	const setCompiledSlotRendering = (n) => (isRenderingCompiledSlot += n);

	/**
	 * Wrap a slot function to memoize current rendering instance
	 * @private
	 */
	function withCtx(fn, ctx = currentRenderingInstance) {
	    if (!ctx)
	        return fn;
	    const renderFnWithContext = (...args) => {
	        // If a user calls a compiled slot inside a template expression (#1745), it
	        // can mess up block tracking, so by default we need to push a null block to
	        // avoid that. This isn't necessary if rendering a compiled `<slot>`.
	        if (!isRenderingCompiledSlot) {
	            openBlock(true /* null block that disables tracking */);
	        }
	        const owner = currentRenderingInstance;
	        setCurrentRenderingInstance(ctx);
	        const res = fn(...args);
	        setCurrentRenderingInstance(owner);
	        if (!isRenderingCompiledSlot) {
	            closeBlock();
	        }
	        return res;
	    };
	    renderFnWithContext._c = true;
	    return renderFnWithContext;
	}

	// SFC scoped style ID management.
	let currentScopeId = null;

	function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
	isSSR = false) {
	    const props = {};
	    const attrs = {};
	    def(attrs, InternalObjectKey, 1);
	    setFullProps(instance, rawProps, props, attrs);
	    // validation
	    {
	        validateProps(props, instance);
	    }
	    if (isStateful) {
	        // stateful
	        instance.props = isSSR ? props : shallowReactive(props);
	    }
	    else {
	        if (!instance.type.props) {
	            // functional w/ optional props, props === attrs
	            instance.props = attrs;
	        }
	        else {
	            // functional w/ declared props
	            instance.props = props;
	        }
	    }
	    instance.attrs = attrs;
	}
	function updateProps(instance, rawProps, rawPrevProps, optimized) {
	    const { props, attrs, vnode: { patchFlag } } = instance;
	    const rawCurrentProps = toRaw(props);
	    const [options] = instance.propsOptions;
	    if (
	    // always force full diff in dev
	    // - #1942 if hmr is enabled with sfc component
	    // - vite#872 non-sfc component used by sfc component
	    !(
	        (instance.type.__hmrId ||
	            (instance.parent && instance.parent.type.__hmrId))) &&
	        (optimized || patchFlag > 0) &&
	        !(patchFlag & 16 /* FULL_PROPS */)) {
	        if (patchFlag & 8 /* PROPS */) {
	            // Compiler-generated props & no keys change, just set the updated
	            // the props.
	            const propsToUpdate = instance.vnode.dynamicProps;
	            for (let i = 0; i < propsToUpdate.length; i++) {
	                const key = propsToUpdate[i];
	                // PROPS flag guarantees rawProps to be non-null
	                const value = rawProps[key];
	                if (options) {
	                    // attr / props separation was done on init and will be consistent
	                    // in this code path, so just check if attrs have it.
	                    if (hasOwn(attrs, key)) {
	                        attrs[key] = value;
	                    }
	                    else {
	                        const camelizedKey = camelize(key);
	                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
	                    }
	                }
	                else {
	                    attrs[key] = value;
	                }
	            }
	        }
	    }
	    else {
	        // full props update.
	        setFullProps(instance, rawProps, props, attrs);
	        // in case of dynamic props, check if we need to delete keys from
	        // the props object
	        let kebabKey;
	        for (const key in rawCurrentProps) {
	            if (!rawProps ||
	                // for camelCase
	                (!hasOwn(rawProps, key) &&
	                    // it's possible the original props was passed in as kebab-case
	                    // and converted to camelCase (#955)
	                    ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey)))) {
	                if (options) {
	                    if (rawPrevProps &&
	                        // for camelCase
	                        (rawPrevProps[key] !== undefined ||
	                            // for kebab-case
	                            rawPrevProps[kebabKey] !== undefined)) {
	                        props[key] = resolvePropValue(options, rawProps || EMPTY_OBJ, key, undefined, instance);
	                    }
	                }
	                else {
	                    delete props[key];
	                }
	            }
	        }
	        // in the case of functional component w/o props declaration, props and
	        // attrs point to the same object so it should already have been updated.
	        if (attrs !== rawCurrentProps) {
	            for (const key in attrs) {
	                if (!rawProps || !hasOwn(rawProps, key)) {
	                    delete attrs[key];
	                }
	            }
	        }
	    }
	    // trigger updates for $attrs in case it's used in component slots
	    trigger(instance, "set" /* SET */, '$attrs');
	    if ( rawProps) {
	        validateProps(props, instance);
	    }
	}
	function setFullProps(instance, rawProps, props, attrs) {
	    const [options, needCastKeys] = instance.propsOptions;
	    if (rawProps) {
	        for (const key in rawProps) {
	            const value = rawProps[key];
	            // key, ref are reserved and never passed down
	            if (isReservedProp(key)) {
	                continue;
	            }
	            // prop option names are camelized during normalization, so to support
	            // kebab -> camel conversion here we need to camelize the key.
	            let camelKey;
	            if (options && hasOwn(options, (camelKey = camelize(key)))) {
	                props[camelKey] = value;
	            }
	            else if (!isEmitListener(instance.emitsOptions, key)) {
	                // Any non-declared (either as a prop or an emitted event) props are put
	                // into a separate `attrs` object for spreading. Make sure to preserve
	                // original key casing
	                attrs[key] = value;
	            }
	        }
	    }
	    if (needCastKeys) {
	        const rawCurrentProps = toRaw(props);
	        for (let i = 0; i < needCastKeys.length; i++) {
	            const key = needCastKeys[i];
	            props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
	        }
	    }
	}
	function resolvePropValue(options, props, key, value, instance) {
	    const opt = options[key];
	    if (opt != null) {
	        const hasDefault = hasOwn(opt, 'default');
	        // default values
	        if (hasDefault && value === undefined) {
	            const defaultValue = opt.default;
	            if (opt.type !== Function && isFunction(defaultValue)) {
	                setCurrentInstance(instance);
	                value = defaultValue(props);
	                setCurrentInstance(null);
	            }
	            else {
	                value = defaultValue;
	            }
	        }
	        // boolean casting
	        if (opt[0 /* shouldCast */]) {
	            if (!hasOwn(props, key) && !hasDefault) {
	                value = false;
	            }
	            else if (opt[1 /* shouldCastTrue */] &&
	                (value === '' || value === hyphenate(key))) {
	                value = true;
	            }
	        }
	    }
	    return value;
	}
	function normalizePropsOptions(comp, appContext, asMixin = false) {
	    if (!appContext.deopt && comp.__props) {
	        return comp.__props;
	    }
	    const raw = comp.props;
	    const normalized = {};
	    const needCastKeys = [];
	    // apply mixin/extends props
	    let hasExtends = false;
	    if ( !isFunction(comp)) {
	        const extendProps = (raw) => {
	            hasExtends = true;
	            const [props, keys] = normalizePropsOptions(raw, appContext, true);
	            extend(normalized, props);
	            if (keys)
	                needCastKeys.push(...keys);
	        };
	        if (!asMixin && appContext.mixins.length) {
	            appContext.mixins.forEach(extendProps);
	        }
	        if (comp.extends) {
	            extendProps(comp.extends);
	        }
	        if (comp.mixins) {
	            comp.mixins.forEach(extendProps);
	        }
	    }
	    if (!raw && !hasExtends) {
	        return (comp.__props = EMPTY_ARR);
	    }
	    if (isArray(raw)) {
	        for (let i = 0; i < raw.length; i++) {
	            if ( !isString(raw[i])) {
	                warn(`props must be strings when using array syntax.`, raw[i]);
	            }
	            const normalizedKey = camelize(raw[i]);
	            if (validatePropName(normalizedKey)) {
	                normalized[normalizedKey] = EMPTY_OBJ;
	            }
	        }
	    }
	    else if (raw) {
	        if ( !isObject(raw)) {
	            warn(`invalid props options`, raw);
	        }
	        for (const key in raw) {
	            const normalizedKey = camelize(key);
	            if (validatePropName(normalizedKey)) {
	                const opt = raw[key];
	                const prop = (normalized[normalizedKey] =
	                    isArray(opt) || isFunction(opt) ? { type: opt } : opt);
	                if (prop) {
	                    const booleanIndex = getTypeIndex(Boolean, prop.type);
	                    const stringIndex = getTypeIndex(String, prop.type);
	                    prop[0 /* shouldCast */] = booleanIndex > -1;
	                    prop[1 /* shouldCastTrue */] =
	                        stringIndex < 0 || booleanIndex < stringIndex;
	                    // if the prop needs boolean casting or default value
	                    if (booleanIndex > -1 || hasOwn(prop, 'default')) {
	                        needCastKeys.push(normalizedKey);
	                    }
	                }
	            }
	        }
	    }
	    return (comp.__props = [normalized, needCastKeys]);
	}
	function validatePropName(key) {
	    if (key[0] !== '$') {
	        return true;
	    }
	    else {
	        warn(`Invalid prop name: "${key}" is a reserved property.`);
	    }
	    return false;
	}
	// use function string name to check type constructors
	// so that it works across vms / iframes.
	function getType(ctor) {
	    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
	    return match ? match[1] : '';
	}
	function isSameType(a, b) {
	    return getType(a) === getType(b);
	}
	function getTypeIndex(type, expectedTypes) {
	    if (isArray(expectedTypes)) {
	        for (let i = 0, len = expectedTypes.length; i < len; i++) {
	            if (isSameType(expectedTypes[i], type)) {
	                return i;
	            }
	        }
	    }
	    else if (isFunction(expectedTypes)) {
	        return isSameType(expectedTypes, type) ? 0 : -1;
	    }
	    return -1;
	}
	/**
	 * dev only
	 */
	function validateProps(props, instance) {
	    const rawValues = toRaw(props);
	    const options = instance.propsOptions[0];
	    for (const key in options) {
	        let opt = options[key];
	        if (opt == null)
	            continue;
	        validateProp(key, rawValues[key], opt, !hasOwn(rawValues, key));
	    }
	}
	/**
	 * dev only
	 */
	function validateProp(name, value, prop, isAbsent) {
	    const { type, required, validator } = prop;
	    // required!
	    if (required && isAbsent) {
	        warn('Missing required prop: "' + name + '"');
	        return;
	    }
	    // missing but optional
	    if (value == null && !prop.required) {
	        return;
	    }
	    // type check
	    if (type != null && type !== true) {
	        let isValid = false;
	        const types = isArray(type) ? type : [type];
	        const expectedTypes = [];
	        // value is valid as long as one of the specified types match
	        for (let i = 0; i < types.length && !isValid; i++) {
	            const { valid, expectedType } = assertType(value, types[i]);
	            expectedTypes.push(expectedType || '');
	            isValid = valid;
	        }
	        if (!isValid) {
	            warn(getInvalidTypeMessage(name, value, expectedTypes));
	            return;
	        }
	    }
	    // custom validator
	    if (validator && !validator(value)) {
	        warn('Invalid prop: custom validator check failed for prop "' + name + '".');
	    }
	}
	const isSimpleType = /*#__PURE__*/ makeMap('String,Number,Boolean,Function,Symbol');
	/**
	 * dev only
	 */
	function assertType(value, type) {
	    let valid;
	    const expectedType = getType(type);
	    if (isSimpleType(expectedType)) {
	        const t = typeof value;
	        valid = t === expectedType.toLowerCase();
	        // for primitive wrapper objects
	        if (!valid && t === 'object') {
	            valid = value instanceof type;
	        }
	    }
	    else if (expectedType === 'Object') {
	        valid = isObject(value);
	    }
	    else if (expectedType === 'Array') {
	        valid = isArray(value);
	    }
	    else {
	        valid = value instanceof type;
	    }
	    return {
	        valid,
	        expectedType
	    };
	}
	/**
	 * dev only
	 */
	function getInvalidTypeMessage(name, value, expectedTypes) {
	    let message = `Invalid prop: type check failed for prop "${name}".` +
	        ` Expected ${expectedTypes.map(capitalize).join(', ')}`;
	    const expectedType = expectedTypes[0];
	    const receivedType = toRawType(value);
	    const expectedValue = styleValue(value, expectedType);
	    const receivedValue = styleValue(value, receivedType);
	    // check if we need to specify expected value
	    if (expectedTypes.length === 1 &&
	        isExplicable(expectedType) &&
	        !isBoolean(expectedType, receivedType)) {
	        message += ` with value ${expectedValue}`;
	    }
	    message += `, got ${receivedType} `;
	    // check if we need to specify received value
	    if (isExplicable(receivedType)) {
	        message += `with value ${receivedValue}.`;
	    }
	    return message;
	}
	/**
	 * dev only
	 */
	function styleValue(value, type) {
	    if (type === 'String') {
	        return `"${value}"`;
	    }
	    else if (type === 'Number') {
	        return `${Number(value)}`;
	    }
	    else {
	        return `${value}`;
	    }
	}
	/**
	 * dev only
	 */
	function isExplicable(type) {
	    const explicitTypes = ['string', 'number', 'boolean'];
	    return explicitTypes.some(elem => type.toLowerCase() === elem);
	}
	/**
	 * dev only
	 */
	function isBoolean(...args) {
	    return args.some(elem => elem.toLowerCase() === 'boolean');
	}

	function injectHook(type, hook, target = currentInstance, prepend = false) {
	    if (target) {
	        const hooks = target[type] || (target[type] = []);
	        // cache the error handling wrapper for injected hooks so the same hook
	        // can be properly deduped by the scheduler. "__weh" stands for "with error
	        // handling".
	        const wrappedHook = hook.__weh ||
	            (hook.__weh = (...args) => {
	                if (target.isUnmounted) {
	                    return;
	                }
	                // disable tracking inside all lifecycle hooks
	                // since they can potentially be called inside effects.
	                pauseTracking();
	                // Set currentInstance during hook invocation.
	                // This assumes the hook does not synchronously trigger other hooks, which
	                // can only be false when the user does something really funky.
	                setCurrentInstance(target);
	                const res = callWithAsyncErrorHandling(hook, target, type, args);
	                setCurrentInstance(null);
	                resetTracking();
	                return res;
	            });
	        if (prepend) {
	            hooks.unshift(wrappedHook);
	        }
	        else {
	            hooks.push(wrappedHook);
	        }
	        return wrappedHook;
	    }
	    else {
	        const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
	        warn(`${apiName} is called when there is no active component instance to be ` +
	            `associated with. ` +
	            `Lifecycle injection APIs can only be used during execution of setup().` +
	            ( ` If you are using async setup(), make sure to register lifecycle ` +
	                    `hooks before the first await statement.`
	                ));
	    }
	}
	const createHook = (lifecycle) => (hook, target = currentInstance) => 
	// post-create lifecycle registrations are noops during SSR
	!isInSSRComponentSetup && injectHook(lifecycle, hook, target);
	const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
	const onMounted = createHook("m" /* MOUNTED */);
	const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
	const onUpdated = createHook("u" /* UPDATED */);
	const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
	const onUnmounted = createHook("um" /* UNMOUNTED */);
	const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
	const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
	const onErrorCaptured = (hook, target = currentInstance) => {
	    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
	};
	// initial value for watchers to trigger on undefined initial values
	const INITIAL_WATCHER_VALUE = {};
	// implementation
	function watch(source, cb, options) {
	    if ( !isFunction(cb)) {
	        warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` +
	            `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
	            `supports \`watch(source, cb, options?) signature.`);
	    }
	    return doWatch(source, cb, options);
	}
	function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ, instance = currentInstance) {
	    if ( !cb) {
	        if (immediate !== undefined) {
	            warn(`watch() "immediate" option is only respected when using the ` +
	                `watch(source, callback, options?) signature.`);
	        }
	        if (deep !== undefined) {
	            warn(`watch() "deep" option is only respected when using the ` +
	                `watch(source, callback, options?) signature.`);
	        }
	    }
	    const warnInvalidSource = (s) => {
	        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
	            `a reactive object, or an array of these types.`);
	    };
	    let getter;
	    let forceTrigger = false;
	    if (isRef(source)) {
	        getter = () => source.value;
	        forceTrigger = !!source._shallow;
	    }
	    else if (isReactive(source)) {
	        getter = () => source;
	        deep = true;
	    }
	    else if (isArray(source)) {
	        getter = () => source.map(s => {
	            if (isRef(s)) {
	                return s.value;
	            }
	            else if (isReactive(s)) {
	                return traverse(s);
	            }
	            else if (isFunction(s)) {
	                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
	            }
	            else {
	                 warnInvalidSource(s);
	            }
	        });
	    }
	    else if (isFunction(source)) {
	        if (cb) {
	            // getter with cb
	            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
	        }
	        else {
	            // no cb -> simple effect
	            getter = () => {
	                if (instance && instance.isUnmounted) {
	                    return;
	                }
	                if (cleanup) {
	                    cleanup();
	                }
	                return callWithErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
	            };
	        }
	    }
	    else {
	        getter = NOOP;
	         warnInvalidSource(source);
	    }
	    if (cb && deep) {
	        const baseGetter = getter;
	        getter = () => traverse(baseGetter());
	    }
	    let cleanup;
	    const onInvalidate = (fn) => {
	        cleanup = runner.options.onStop = () => {
	            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
	        };
	    };
	    let oldValue = isArray(source) ? [] : INITIAL_WATCHER_VALUE;
	    const job = () => {
	        if (!runner.active) {
	            return;
	        }
	        if (cb) {
	            // watch(source, cb)
	            const newValue = runner();
	            if (deep || forceTrigger || hasChanged(newValue, oldValue)) {
	                // cleanup before running cb again
	                if (cleanup) {
	                    cleanup();
	                }
	                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
	                    newValue,
	                    // pass undefined as the old value when it's changed for the first time
	                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
	                    onInvalidate
	                ]);
	                oldValue = newValue;
	            }
	        }
	        else {
	            // watchEffect
	            runner();
	        }
	    };
	    // important: mark the job as a watcher callback so that scheduler knows
	    // it is allowed to self-trigger (#1727)
	    job.allowRecurse = !!cb;
	    let scheduler;
	    if (flush === 'sync') {
	        scheduler = job;
	    }
	    else if (flush === 'post') {
	        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
	    }
	    else {
	        // default: 'pre'
	        scheduler = () => {
	            if (!instance || instance.isMounted) {
	                queuePreFlushCb(job);
	            }
	            else {
	                // with 'pre' option, the first call must happen before
	                // the component is mounted so it is called synchronously.
	                job();
	            }
	        };
	    }
	    const runner = effect(getter, {
	        lazy: true,
	        onTrack,
	        onTrigger,
	        scheduler
	    });
	    recordInstanceBoundEffect(runner);
	    // initial run
	    if (cb) {
	        if (immediate) {
	            job();
	        }
	        else {
	            oldValue = runner();
	        }
	    }
	    else if (flush === 'post') {
	        queuePostRenderEffect(runner, instance && instance.suspense);
	    }
	    else {
	        runner();
	    }
	    return () => {
	        stop(runner);
	        if (instance) {
	            remove(instance.effects, runner);
	        }
	    };
	}
	// this.$watch
	function instanceWatch(source, cb, options) {
	    const publicThis = this.proxy;
	    const getter = isString(source)
	        ? () => publicThis[source]
	        : source.bind(publicThis);
	    return doWatch(getter, cb.bind(publicThis), options, this);
	}
	function traverse(value, seen = new Set()) {
	    if (!isObject(value) || seen.has(value)) {
	        return value;
	    }
	    seen.add(value);
	    if (isRef(value)) {
	        traverse(value.value, seen);
	    }
	    else if (isArray(value)) {
	        for (let i = 0; i < value.length; i++) {
	            traverse(value[i], seen);
	        }
	    }
	    else if (isSet(value) || isMap(value)) {
	        value.forEach((v) => {
	            traverse(v, seen);
	        });
	    }
	    else {
	        for (const key in value) {
	            traverse(value[key], seen);
	        }
	    }
	    return value;
	}

	const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
	function onActivated(hook, target) {
	    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
	}
	function onDeactivated(hook, target) {
	    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
	}
	function registerKeepAliveHook(hook, type, target = currentInstance) {
	    // cache the deactivate branch check wrapper for injected hooks so the same
	    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
	    // deactivation check".
	    const wrappedHook = hook.__wdc ||
	        (hook.__wdc = () => {
	            // only fire the hook if the target instance is NOT in a deactivated branch.
	            let current = target;
	            while (current) {
	                if (current.isDeactivated) {
	                    return;
	                }
	                current = current.parent;
	            }
	            hook();
	        });
	    injectHook(type, wrappedHook, target);
	    // In addition to registering it on the target instance, we walk up the parent
	    // chain and register it on all ancestor instances that are keep-alive roots.
	    // This avoids the need to walk the entire component tree when invoking these
	    // hooks, and more importantly, avoids the need to track child components in
	    // arrays.
	    if (target) {
	        let current = target.parent;
	        while (current && current.parent) {
	            if (isKeepAlive(current.parent.vnode)) {
	                injectToKeepAliveRoot(wrappedHook, type, target, current);
	            }
	            current = current.parent;
	        }
	    }
	}
	function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	    // injectHook wraps the original for error handling, so make sure to remove
	    // the wrapped version.
	    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
	    onUnmounted(() => {
	        remove(keepAliveRoot[type], injected);
	    }, target);
	}

	const isInternalKey = (key) => key[0] === '_' || key === '$stable';
	const normalizeSlotValue = (value) => isArray(value)
	    ? value.map(normalizeVNode)
	    : [normalizeVNode(value)];
	const normalizeSlot = (key, rawSlot, ctx) => withCtx((props) => {
	    if ( currentInstance) {
	        warn(`Slot "${key}" invoked outside of the render function: ` +
	            `this will not track dependencies used in the slot. ` +
	            `Invoke the slot function inside the render function instead.`);
	    }
	    return normalizeSlotValue(rawSlot(props));
	}, ctx);
	const normalizeObjectSlots = (rawSlots, slots) => {
	    const ctx = rawSlots._ctx;
	    for (const key in rawSlots) {
	        if (isInternalKey(key))
	            continue;
	        const value = rawSlots[key];
	        if (isFunction(value)) {
	            slots[key] = normalizeSlot(key, value, ctx);
	        }
	        else if (value != null) {
	            {
	                warn(`Non-function value encountered for slot "${key}". ` +
	                    `Prefer function slots for better performance.`);
	            }
	            const normalized = normalizeSlotValue(value);
	            slots[key] = () => normalized;
	        }
	    }
	};
	const normalizeVNodeSlots = (instance, children) => {
	    if ( !isKeepAlive(instance.vnode)) {
	        warn(`Non-function value encountered for default slot. ` +
	            `Prefer function slots for better performance.`);
	    }
	    const normalized = normalizeSlotValue(children);
	    instance.slots.default = () => normalized;
	};
	const initSlots = (instance, children) => {
	    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
	        const type = children._;
	        if (type) {
	            instance.slots = children;
	            // make compiler marker non-enumerable
	            def(children, '_', type);
	        }
	        else {
	            normalizeObjectSlots(children, (instance.slots = {}));
	        }
	    }
	    else {
	        instance.slots = {};
	        if (children) {
	            normalizeVNodeSlots(instance, children);
	        }
	    }
	    def(instance.slots, InternalObjectKey, 1);
	};
	const updateSlots = (instance, children) => {
	    const { vnode, slots } = instance;
	    let needDeletionCheck = true;
	    let deletionComparisonTarget = EMPTY_OBJ;
	    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
	        const type = children._;
	        if (type) {
	            // compiled slots.
	            if ( isHmrUpdating) {
	                // Parent was HMR updated so slot content may have changed.
	                // force update slots and mark instance for hmr as well
	                extend(slots, children);
	            }
	            else if (type === 1 /* STABLE */) {
	                // compiled AND stable.
	                // no need to update, and skip stale slots removal.
	                needDeletionCheck = false;
	            }
	            else {
	                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
	                // normalization.
	                extend(slots, children);
	            }
	        }
	        else {
	            needDeletionCheck = !children.$stable;
	            normalizeObjectSlots(children, slots);
	        }
	        deletionComparisonTarget = children;
	    }
	    else if (children) {
	        // non slot object children (direct value) passed to a component
	        normalizeVNodeSlots(instance, children);
	        deletionComparisonTarget = { default: 1 };
	    }
	    // delete stale slots
	    if (needDeletionCheck) {
	        for (const key in slots) {
	            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
	                delete slots[key];
	            }
	        }
	    }
	};

	/**
	Runtime helper for applying directives to a vnode. Example usage:

	const comp = resolveComponent('comp')
	const foo = resolveDirective('foo')
	const bar = resolveDirective('bar')

	return withDirectives(h(comp), [
	  [foo, this.x],
	  [bar, this.y]
	])
	*/
	const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');
	function validateDirectiveName(name) {
	    if (isBuiltInDirective(name)) {
	        warn('Do not use built-in directive ids as custom directive id: ' + name);
	    }
	}
	function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	    const bindings = vnode.dirs;
	    const oldBindings = prevVNode && prevVNode.dirs;
	    for (let i = 0; i < bindings.length; i++) {
	        const binding = bindings[i];
	        if (oldBindings) {
	            binding.oldValue = oldBindings[i].value;
	        }
	        const hook = binding.dir[name];
	        if (hook) {
	            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
	                vnode.el,
	                binding,
	                vnode,
	                prevVNode
	            ]);
	        }
	    }
	}

	function createAppContext() {
	    return {
	        app: null,
	        config: {
	            isNativeTag: NO,
	            performance: false,
	            globalProperties: {},
	            optionMergeStrategies: {},
	            isCustomElement: NO,
	            errorHandler: undefined,
	            warnHandler: undefined
	        },
	        mixins: [],
	        components: {},
	        directives: {},
	        provides: Object.create(null)
	    };
	}
	let uid$1 = 0;
	function createAppAPI(render, hydrate) {
	    return function createApp(rootComponent, rootProps = null) {
	        if (rootProps != null && !isObject(rootProps)) {
	             warn(`root props passed to app.mount() must be an object.`);
	            rootProps = null;
	        }
	        const context = createAppContext();
	        const installedPlugins = new Set();
	        let isMounted = false;
	        const app = (context.app = {
	            _uid: uid$1++,
	            _component: rootComponent,
	            _props: rootProps,
	            _container: null,
	            _context: context,
	            version,
	            get config() {
	                return context.config;
	            },
	            set config(v) {
	                {
	                    warn(`app.config cannot be replaced. Modify individual options instead.`);
	                }
	            },
	            use(plugin, ...options) {
	                if (installedPlugins.has(plugin)) {
	                     warn(`Plugin has already been applied to target app.`);
	                }
	                else if (plugin && isFunction(plugin.install)) {
	                    installedPlugins.add(plugin);
	                    plugin.install(app, ...options);
	                }
	                else if (isFunction(plugin)) {
	                    installedPlugins.add(plugin);
	                    plugin(app, ...options);
	                }
	                else {
	                    warn(`A plugin must either be a function or an object with an "install" ` +
	                        `function.`);
	                }
	                return app;
	            },
	            mixin(mixin) {
	                {
	                    if (!context.mixins.includes(mixin)) {
	                        context.mixins.push(mixin);
	                        // global mixin with props/emits de-optimizes props/emits
	                        // normalization caching.
	                        if (mixin.props || mixin.emits) {
	                            context.deopt = true;
	                        }
	                    }
	                    else {
	                        warn('Mixin has already been applied to target app' +
	                            (mixin.name ? `: ${mixin.name}` : ''));
	                    }
	                }
	                return app;
	            },
	            component(name, component) {
	                {
	                    validateComponentName(name, context.config);
	                }
	                if (!component) {
	                    return context.components[name];
	                }
	                if ( context.components[name]) {
	                    warn(`Component "${name}" has already been registered in target app.`);
	                }
	                context.components[name] = component;
	                return app;
	            },
	            directive(name, directive) {
	                {
	                    validateDirectiveName(name);
	                }
	                if (!directive) {
	                    return context.directives[name];
	                }
	                if ( context.directives[name]) {
	                    warn(`Directive "${name}" has already been registered in target app.`);
	                }
	                context.directives[name] = directive;
	                return app;
	            },
	            mount(rootContainer, isHydrate) {
	                if (!isMounted) {
	                    const vnode = createVNode(rootComponent, rootProps);
	                    // store app context on the root VNode.
	                    // this will be set on the root instance on initial mount.
	                    vnode.appContext = context;
	                    // HMR root reload
	                    {
	                        context.reload = () => {
	                            render(cloneVNode(vnode), rootContainer);
	                        };
	                    }
	                    if (isHydrate && hydrate) {
	                        hydrate(vnode, rootContainer);
	                    }
	                    else {
	                        render(vnode, rootContainer);
	                    }
	                    isMounted = true;
	                    app._container = rootContainer;
	                    rootContainer.__vue_app__ = app;
	                    {
	                        devtoolsInitApp(app, version);
	                    }
	                    return vnode.component.proxy;
	                }
	                else {
	                    warn(`App has already been mounted.\n` +
	                        `If you want to remount the same app, move your app creation logic ` +
	                        `into a factory function and create fresh app instances for each ` +
	                        `mount - e.g. \`const createMyApp = () => createApp(App)\``);
	                }
	            },
	            unmount() {
	                if (isMounted) {
	                    render(null, app._container);
	                    {
	                        devtoolsUnmountApp(app);
	                    }
	                }
	                else {
	                    warn(`Cannot unmount an app that is not mounted.`);
	                }
	            },
	            provide(key, value) {
	                if ( key in context.provides) {
	                    warn(`App already provides property with key "${String(key)}". ` +
	                        `It will be overwritten with the new value.`);
	                }
	                // TypeScript doesn't allow symbols as index type
	                // https://github.com/Microsoft/TypeScript/issues/24587
	                context.provides[key] = value;
	                return app;
	            }
	        });
	        return app;
	    };
	}

	let supported;
	let perf;
	function startMeasure(instance, type) {
	    if (instance.appContext.config.performance && isSupported()) {
	        perf.mark(`vue-${type}-${instance.uid}`);
	    }
	}
	function endMeasure(instance, type) {
	    if (instance.appContext.config.performance && isSupported()) {
	        const startTag = `vue-${type}-${instance.uid}`;
	        const endTag = startTag + `:end`;
	        perf.mark(endTag);
	        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
	        perf.clearMarks(startTag);
	        perf.clearMarks(endTag);
	    }
	}
	function isSupported() {
	    if (supported !== undefined) {
	        return supported;
	    }
	    /* eslint-disable no-restricted-globals */
	    if (typeof window !== 'undefined' && window.performance) {
	        supported = true;
	        perf = window.performance;
	    }
	    else {
	        supported = false;
	    }
	    /* eslint-enable no-restricted-globals */
	    return supported;
	}

	function createDevEffectOptions(instance) {
	    return {
	        scheduler: queueJob,
	        allowRecurse: true,
	        onTrack: instance.rtc ? e => invokeArrayFns(instance.rtc, e) : void 0,
	        onTrigger: instance.rtg ? e => invokeArrayFns(instance.rtg, e) : void 0
	    };
	}
	const queuePostRenderEffect =  queueEffectWithSuspense
	    ;
	const setRef = (rawRef, oldRawRef, parentComponent, parentSuspense, vnode) => {
	    if (isArray(rawRef)) {
	        rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentComponent, parentSuspense, vnode));
	        return;
	    }
	    let value;
	    if (!vnode) {
	        value = null;
	    }
	    else {
	        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
	            value = vnode.component.proxy;
	        }
	        else {
	            value = vnode.el;
	        }
	    }
	    const { i: owner, r: ref } = rawRef;
	    if ( !owner) {
	        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` +
	            `A vnode with ref must be created inside the render function.`);
	        return;
	    }
	    const oldRef = oldRawRef && oldRawRef.r;
	    const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
	    const setupState = owner.setupState;
	    // unset old ref
	    if (oldRef != null && oldRef !== ref) {
	        if (isString(oldRef)) {
	            refs[oldRef] = null;
	            if (hasOwn(setupState, oldRef)) {
	                setupState[oldRef] = null;
	            }
	        }
	        else if (isRef(oldRef)) {
	            oldRef.value = null;
	        }
	    }
	    if (isString(ref)) {
	        const doSet = () => {
	            refs[ref] = value;
	            if (hasOwn(setupState, ref)) {
	                setupState[ref] = value;
	            }
	        };
	        // #1789: for non-null values, set them after render
	        // null values means this is unmount and it should not overwrite another
	        // ref with the same key
	        if (value) {
	            doSet.id = -1;
	            queuePostRenderEffect(doSet, parentSuspense);
	        }
	        else {
	            doSet();
	        }
	    }
	    else if (isRef(ref)) {
	        const doSet = () => {
	            ref.value = value;
	        };
	        if (value) {
	            doSet.id = -1;
	            queuePostRenderEffect(doSet, parentSuspense);
	        }
	        else {
	            doSet();
	        }
	    }
	    else if (isFunction(ref)) {
	        callWithErrorHandling(ref, parentComponent, 12 /* FUNCTION_REF */, [
	            value,
	            refs
	        ]);
	    }
	    else {
	        warn('Invalid template ref type:', value, `(${typeof value})`);
	    }
	};
	/**
	 * The createRenderer function accepts two generic arguments:
	 * HostNode and HostElement, corresponding to Node and Element types in the
	 * host environment. For example, for runtime-dom, HostNode would be the DOM
	 * `Node` interface and HostElement would be the DOM `Element` interface.
	 *
	 * Custom renderers can pass in the platform specific types like this:
	 *
	 * ``` js
	 * const { render, createApp } = createRenderer<Node, Element>({
	 *   patchProp,
	 *   ...nodeOps
	 * })
	 * ```
	 */
	function createRenderer(options) {
	    return baseCreateRenderer(options);
	}
	// implementation
	function baseCreateRenderer(options, createHydrationFns) {
	    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
	    // Note: functions inside this closure should use `const xxx = () => {}`
	    // style in order to prevent being inlined by minifiers.
	    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
	        // patching & not same type, unmount old tree
	        if (n1 && !isSameVNodeType(n1, n2)) {
	            anchor = getNextHostNode(n1);
	            unmount(n1, parentComponent, parentSuspense, true);
	            n1 = null;
	        }
	        if (n2.patchFlag === -2 /* BAIL */) {
	            optimized = false;
	            n2.dynamicChildren = null;
	        }
	        const { type, ref, shapeFlag } = n2;
	        switch (type) {
	            case Text:
	                processText(n1, n2, container, anchor);
	                break;
	            case Comment:
	                processCommentNode(n1, n2, container, anchor);
	                break;
	            case Static:
	                if (n1 == null) {
	                    mountStaticNode(n2, container, anchor, isSVG);
	                }
	                else {
	                    patchStaticNode(n1, n2, container, isSVG);
	                }
	                break;
	            case Fragment:
	                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                break;
	            default:
	                if (shapeFlag & 1 /* ELEMENT */) {
	                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                }
	                else if (shapeFlag & 6 /* COMPONENT */) {
	                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                }
	                else if (shapeFlag & 64 /* TELEPORT */) {
	                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
	                }
	                else if ( shapeFlag & 128 /* SUSPENSE */) {
	                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
	                }
	                else {
	                    warn('Invalid VNode type:', type, `(${typeof type})`);
	                }
	        }
	        // set ref
	        if (ref != null && parentComponent) {
	            setRef(ref, n1 && n1.ref, parentComponent, parentSuspense, n2);
	        }
	    };
	    const processText = (n1, n2, container, anchor) => {
	        if (n1 == null) {
	            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
	        }
	        else {
	            const el = (n2.el = n1.el);
	            if (n2.children !== n1.children) {
	                hostSetText(el, n2.children);
	            }
	        }
	    };
	    const processCommentNode = (n1, n2, container, anchor) => {
	        if (n1 == null) {
	            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
	        }
	        else {
	            // there's no support for dynamic comments
	            n2.el = n1.el;
	        }
	    };
	    const mountStaticNode = (n2, container, anchor, isSVG) => {
	        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
	    };
	    /**
	     * Dev / HMR only
	     */
	    const patchStaticNode = (n1, n2, container, isSVG) => {
	        // static nodes are only patched during dev for HMR
	        if (n2.children !== n1.children) {
	            const anchor = hostNextSibling(n1.anchor);
	            // remove existing
	            removeStaticNode(n1);
	            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
	        }
	        else {
	            n2.el = n1.el;
	            n2.anchor = n1.anchor;
	        }
	    };
	    /**
	     * Dev / HMR only
	     */
	    const moveStaticNode = (vnode, container, anchor) => {
	        let cur = vnode.el;
	        const end = vnode.anchor;
	        while (cur && cur !== end) {
	            const next = hostNextSibling(cur);
	            hostInsert(cur, container, anchor);
	            cur = next;
	        }
	        hostInsert(end, container, anchor);
	    };
	    /**
	     * Dev / HMR only
	     */
	    const removeStaticNode = (vnode) => {
	        let cur = vnode.el;
	        while (cur && cur !== vnode.anchor) {
	            const next = hostNextSibling(cur);
	            hostRemove(cur);
	            cur = next;
	        }
	        hostRemove(vnode.anchor);
	    };
	    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        isSVG = isSVG || n2.type === 'svg';
	        if (n1 == null) {
	            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	        }
	        else {
	            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
	        }
	    };
	    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        let el;
	        let vnodeHook;
	        const { type, props, shapeFlag, transition, scopeId, patchFlag, dirs } = vnode;
	        {
	            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
	            // mount children first, since some props may rely on child content
	            // being already rendered, e.g. `<select value>`
	            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
	                hostSetElementText(el, vnode.children);
	            }
	            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
	                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
	            }
	            if (dirs) {
	                invokeDirectiveHook(vnode, null, parentComponent, 'created');
	            }
	            // props
	            if (props) {
	                for (const key in props) {
	                    if (!isReservedProp(key)) {
	                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
	                    }
	                }
	                if ((vnodeHook = props.onVnodeBeforeMount)) {
	                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
	                }
	            }
	            // scopeId
	            setScopeId(el, scopeId, vnode, parentComponent);
	        }
	        {
	            Object.defineProperty(el, '__vnode', {
	                value: vnode,
	                enumerable: false
	            });
	            Object.defineProperty(el, '__vueParentComponent', {
	                value: parentComponent,
	                enumerable: false
	            });
	        }
	        if (dirs) {
	            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
	        }
	        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
	        // #1689 For inside suspense + suspense resolved case, just call it
	        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
	            transition &&
	            !transition.persisted;
	        if (needCallTransitionHooks) {
	            transition.beforeEnter(el);
	        }
	        hostInsert(el, container, anchor);
	        if ((vnodeHook = props && props.onVnodeMounted) ||
	            needCallTransitionHooks ||
	            dirs) {
	            queuePostRenderEffect(() => {
	                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
	                needCallTransitionHooks && transition.enter(el);
	                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
	            }, parentSuspense);
	        }
	    };
	    const setScopeId = (el, scopeId, vnode, parentComponent) => {
	        if (scopeId) {
	            hostSetScopeId(el, scopeId);
	        }
	        if (parentComponent) {
	            const treeOwnerId = parentComponent.type.__scopeId;
	            // vnode's own scopeId and the current patched component's scopeId is
	            // different - this is a slot content node.
	            if (treeOwnerId && treeOwnerId !== scopeId) {
	                hostSetScopeId(el, treeOwnerId + '-s');
	            }
	            let subTree = parentComponent.subTree;
	            if ( subTree.type === Fragment) {
	                subTree =
	                    filterSingleRoot(subTree.children) || subTree;
	            }
	            if (vnode === subTree) {
	                setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
	            }
	        }
	    };
	    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start = 0) => {
	        for (let i = start; i < children.length; i++) {
	            const child = (children[i] = optimized
	                ? cloneIfMounted(children[i])
	                : normalizeVNode(children[i]));
	            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	        }
	    };
	    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
	        const el = (n2.el = n1.el);
	        let { patchFlag, dynamicChildren, dirs } = n2;
	        // #1426 take the old vnode's patch flag into account since user may clone a
	        // compiler-generated vnode, which de-opts to FULL_PROPS
	        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
	        const oldProps = n1.props || EMPTY_OBJ;
	        const newProps = n2.props || EMPTY_OBJ;
	        let vnodeHook;
	        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
	            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
	        }
	        if (dirs) {
	            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
	        }
	        if ( isHmrUpdating) {
	            // HMR updated, force full diff
	            patchFlag = 0;
	            optimized = false;
	            dynamicChildren = null;
	        }
	        if (patchFlag > 0) {
	            // the presence of a patchFlag means this element's render code was
	            // generated by the compiler and can take the fast path.
	            // in this path old node and new node are guaranteed to have the same shape
	            // (i.e. at the exact same position in the source template)
	            if (patchFlag & 16 /* FULL_PROPS */) {
	                // element props contain dynamic keys, full diff needed
	                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
	            }
	            else {
	                // class
	                // this flag is matched when the element has dynamic class bindings.
	                if (patchFlag & 2 /* CLASS */) {
	                    if (oldProps.class !== newProps.class) {
	                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
	                    }
	                }
	                // style
	                // this flag is matched when the element has dynamic style bindings
	                if (patchFlag & 4 /* STYLE */) {
	                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
	                }
	                // props
	                // This flag is matched when the element has dynamic prop/attr bindings
	                // other than class and style. The keys of dynamic prop/attrs are saved for
	                // faster iteration.
	                // Note dynamic keys like :[foo]="bar" will cause this optimization to
	                // bail out and go through a full diff because we need to unset the old key
	                if (patchFlag & 8 /* PROPS */) {
	                    // if the flag is present then dynamicProps must be non-null
	                    const propsToUpdate = n2.dynamicProps;
	                    for (let i = 0; i < propsToUpdate.length; i++) {
	                        const key = propsToUpdate[i];
	                        const prev = oldProps[key];
	                        const next = newProps[key];
	                        if (next !== prev ||
	                            (hostForcePatchProp && hostForcePatchProp(el, key))) {
	                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
	                        }
	                    }
	                }
	            }
	            // text
	            // This flag is matched when the element has only dynamic text children.
	            if (patchFlag & 1 /* TEXT */) {
	                if (n1.children !== n2.children) {
	                    hostSetElementText(el, n2.children);
	                }
	            }
	        }
	        else if (!optimized && dynamicChildren == null) {
	            // unoptimized, full diff
	            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
	        }
	        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
	        if (dynamicChildren) {
	            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
	            if (
	                parentComponent &&
	                parentComponent.type.__hmrId) {
	                traverseStaticChildren(n1, n2);
	            }
	        }
	        else if (!optimized) {
	            // full diff
	            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
	        }
	        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
	            queuePostRenderEffect(() => {
	                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
	                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
	            }, parentSuspense);
	        }
	    };
	    // The fast path for blocks.
	    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
	        for (let i = 0; i < newChildren.length; i++) {
	            const oldVNode = oldChildren[i];
	            const newVNode = newChildren[i];
	            // Determine the container (parent element) for the patch.
	            const container = 
	            // - In the case of a Fragment, we need to provide the actual parent
	            // of the Fragment itself so it can move its children.
	            oldVNode.type === Fragment ||
	                // - In the case of different nodes, there is going to be a replacement
	                // which also requires the correct parent container
	                !isSameVNodeType(oldVNode, newVNode) ||
	                // - In the case of a component, it could contain anything.
	                oldVNode.shapeFlag & 6 /* COMPONENT */ ||
	                oldVNode.shapeFlag & 64 /* TELEPORT */
	                ? hostParentNode(oldVNode.el)
	                : // In other cases, the parent container is not actually used so we
	                    // just pass the block element here to avoid a DOM parentNode call.
	                    fallbackContainer;
	            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
	        }
	    };
	    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
	        if (oldProps !== newProps) {
	            for (const key in newProps) {
	                // empty string is not valid prop
	                if (isReservedProp(key))
	                    continue;
	                const next = newProps[key];
	                const prev = oldProps[key];
	                if (next !== prev ||
	                    (hostForcePatchProp && hostForcePatchProp(el, key))) {
	                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
	                }
	            }
	            if (oldProps !== EMPTY_OBJ) {
	                for (const key in oldProps) {
	                    if (!isReservedProp(key) && !(key in newProps)) {
	                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
	                    }
	                }
	            }
	        }
	    };
	    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
	        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
	        let { patchFlag, dynamicChildren } = n2;
	        if (patchFlag > 0) {
	            optimized = true;
	        }
	        if ( isHmrUpdating) {
	            // HMR updated, force full diff
	            patchFlag = 0;
	            optimized = false;
	            dynamicChildren = null;
	        }
	        if (n1 == null) {
	            hostInsert(fragmentStartAnchor, container, anchor);
	            hostInsert(fragmentEndAnchor, container, anchor);
	            // a fragment can only have array children
	            // since they are either generated by the compiler, or implicitly created
	            // from arrays.
	            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
	        }
	        else {
	            if (patchFlag > 0 &&
	                patchFlag & 64 /* STABLE_FRAGMENT */ &&
	                dynamicChildren) {
	                // a stable fragment (template root or <template v-for>) doesn't need to
	                // patch children order, but it may contain dynamicChildren.
	                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
	                if ( parentComponent && parentComponent.type.__hmrId) {
	                    traverseStaticChildren(n1, n2);
	                }
	                else if (
	                // #2080 if the stable fragment has a key, it's a <template v-for> that may
	                //  get moved around. Make sure all root level vnodes inherit el.
	                // #2134 or if it's a component root, it may also get moved around
	                // as the component is being moved.
	                n2.key != null ||
	                    (parentComponent && n2 === parentComponent.subTree)) {
	                    traverseStaticChildren(n1, n2, true /* shallow */);
	                }
	            }
	            else {
	                // keyed / unkeyed, or manual fragments.
	                // for keyed & unkeyed, since they are compiler generated from v-for,
	                // each child is guaranteed to be a block so the fragment will never
	                // have dynamicChildren.
	                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
	            }
	        }
	    };
	    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        if (n1 == null) {
	            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
	                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
	            }
	            else {
	                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	            }
	        }
	        else {
	            updateComponent(n1, n2, optimized);
	        }
	    };
	    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
	        if ( instance.type.__hmrId) {
	            registerHMR(instance);
	        }
	        {
	            pushWarningContext(initialVNode);
	            startMeasure(instance, `mount`);
	        }
	        // inject renderer internals for keepAlive
	        if (isKeepAlive(initialVNode)) {
	            instance.ctx.renderer = internals;
	        }
	        // resolve props and slots for setup context
	        {
	            startMeasure(instance, `init`);
	        }
	        setupComponent(instance);
	        {
	            endMeasure(instance, `init`);
	        }
	        // setup() is async. This component relies on async logic to be resolved
	        // before proceeding
	        if ( instance.asyncDep) {
	            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
	            // Give it a placeholder if this is not hydration
	            // TODO handle self-defined fallback
	            if (!initialVNode.el) {
	                const placeholder = (instance.subTree = createVNode(Comment));
	                processCommentNode(null, placeholder, container, anchor);
	            }
	            return;
	        }
	        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
	        {
	            popWarningContext();
	            endMeasure(instance, `mount`);
	        }
	    };
	    const updateComponent = (n1, n2, optimized) => {
	        const instance = (n2.component = n1.component);
	        if (shouldUpdateComponent(n1, n2, optimized)) {
	            if (
	                instance.asyncDep &&
	                !instance.asyncResolved) {
	                // async & still pending - just update props and slots
	                // since the component's reactive effect for render isn't set-up yet
	                {
	                    pushWarningContext(n2);
	                }
	                updateComponentPreRender(instance, n2, optimized);
	                {
	                    popWarningContext();
	                }
	                return;
	            }
	            else {
	                // normal update
	                instance.next = n2;
	                // in case the child component is also queued, remove it to avoid
	                // double updating the same child component in the same flush.
	                invalidateJob(instance.update);
	                // instance.update is the reactive effect runner.
	                instance.update();
	            }
	        }
	        else {
	            // no update needed. just copy over properties
	            n2.component = n1.component;
	            n2.el = n1.el;
	            instance.vnode = n2;
	        }
	    };
	    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
	        // create reactive effect for rendering
	        instance.update = effect(function componentEffect() {
	            if (!instance.isMounted) {
	                let vnodeHook;
	                const { el, props } = initialVNode;
	                const { bm, m, parent } = instance;
	                // beforeMount hook
	                if (bm) {
	                    invokeArrayFns(bm);
	                }
	                // onVnodeBeforeMount
	                if ((vnodeHook = props && props.onVnodeBeforeMount)) {
	                    invokeVNodeHook(vnodeHook, parent, initialVNode);
	                }
	                // render
	                {
	                    startMeasure(instance, `render`);
	                }
	                const subTree = (instance.subTree = renderComponentRoot(instance));
	                {
	                    endMeasure(instance, `render`);
	                }
	                if (el && hydrateNode) {
	                    {
	                        startMeasure(instance, `hydrate`);
	                    }
	                    // vnode has adopted host node - perform hydration instead of mount.
	                    hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
	                    {
	                        endMeasure(instance, `hydrate`);
	                    }
	                }
	                else {
	                    {
	                        startMeasure(instance, `patch`);
	                    }
	                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
	                    {
	                        endMeasure(instance, `patch`);
	                    }
	                    initialVNode.el = subTree.el;
	                }
	                // mounted hook
	                if (m) {
	                    queuePostRenderEffect(m, parentSuspense);
	                }
	                // onVnodeMounted
	                if ((vnodeHook = props && props.onVnodeMounted)) {
	                    queuePostRenderEffect(() => {
	                        invokeVNodeHook(vnodeHook, parent, initialVNode);
	                    }, parentSuspense);
	                }
	                // activated hook for keep-alive roots.
	                // #1742 activated hook must be accessed after first render
	                // since the hook may be injected by a child keep-alive
	                const { a } = instance;
	                if (a &&
	                    initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
	                    queuePostRenderEffect(a, parentSuspense);
	                }
	                instance.isMounted = true;
	            }
	            else {
	                // updateComponent
	                // This is triggered by mutation of component's own state (next: null)
	                // OR parent calling processComponent (next: VNode)
	                let { next, bu, u, parent, vnode } = instance;
	                let originNext = next;
	                let vnodeHook;
	                {
	                    pushWarningContext(next || instance.vnode);
	                }
	                if (next) {
	                    next.el = vnode.el;
	                    updateComponentPreRender(instance, next, optimized);
	                }
	                else {
	                    next = vnode;
	                }
	                // beforeUpdate hook
	                if (bu) {
	                    invokeArrayFns(bu);
	                }
	                // onVnodeBeforeUpdate
	                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
	                    invokeVNodeHook(vnodeHook, parent, next, vnode);
	                }
	                // render
	                {
	                    startMeasure(instance, `render`);
	                }
	                const nextTree = renderComponentRoot(instance);
	                {
	                    endMeasure(instance, `render`);
	                }
	                const prevTree = instance.subTree;
	                instance.subTree = nextTree;
	                {
	                    startMeasure(instance, `patch`);
	                }
	                patch(prevTree, nextTree, 
	                // parent may have changed if it's in a teleport
	                hostParentNode(prevTree.el), 
	                // anchor may have changed if it's in a fragment
	                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
	                {
	                    endMeasure(instance, `patch`);
	                }
	                next.el = nextTree.el;
	                if (originNext === null) {
	                    // self-triggered update. In case of HOC, update parent component
	                    // vnode el. HOC is indicated by parent instance's subTree pointing
	                    // to child component's vnode
	                    updateHOCHostEl(instance, nextTree.el);
	                }
	                // updated hook
	                if (u) {
	                    queuePostRenderEffect(u, parentSuspense);
	                }
	                // onVnodeUpdated
	                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
	                    queuePostRenderEffect(() => {
	                        invokeVNodeHook(vnodeHook, parent, next, vnode);
	                    }, parentSuspense);
	                }
	                {
	                    devtoolsComponentUpdated(instance);
	                }
	                {
	                    popWarningContext();
	                }
	            }
	        },  createDevEffectOptions(instance) );
	    };
	    const updateComponentPreRender = (instance, nextVNode, optimized) => {
	        nextVNode.component = instance;
	        const prevProps = instance.vnode.props;
	        instance.vnode = nextVNode;
	        instance.next = null;
	        updateProps(instance, nextVNode.props, prevProps, optimized);
	        updateSlots(instance, nextVNode.children);
	        // props update may have triggered pre-flush watchers.
	        // flush them before the render update.
	        flushPreFlushCbs(undefined, instance.update);
	    };
	    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
	        const c1 = n1 && n1.children;
	        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
	        const c2 = n2.children;
	        const { patchFlag, shapeFlag } = n2;
	        // fast path
	        if (patchFlag > 0) {
	            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
	                // this could be either fully-keyed or mixed (some keyed some not)
	                // presence of patchFlag means children are guaranteed to be arrays
	                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                return;
	            }
	            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
	                // unkeyed
	                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                return;
	            }
	        }
	        // children has 3 possibilities: text, array or no children.
	        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
	            // text children fast path
	            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
	                unmountChildren(c1, parentComponent, parentSuspense);
	            }
	            if (c2 !== c1) {
	                hostSetElementText(container, c2);
	            }
	        }
	        else {
	            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
	                // prev children was array
	                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
	                    // two arrays, cannot assume anything, do full diff
	                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                }
	                else {
	                    // no new children, just unmount old
	                    unmountChildren(c1, parentComponent, parentSuspense, true);
	                }
	            }
	            else {
	                // prev children was text OR null
	                // new children is array OR null
	                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
	                    hostSetElementText(container, '');
	                }
	                // mount new if array
	                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
	                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
	                }
	            }
	        }
	    };
	    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        c1 = c1 || EMPTY_ARR;
	        c2 = c2 || EMPTY_ARR;
	        const oldLength = c1.length;
	        const newLength = c2.length;
	        const commonLength = Math.min(oldLength, newLength);
	        let i;
	        for (i = 0; i < commonLength; i++) {
	            const nextChild = (c2[i] = optimized
	                ? cloneIfMounted(c2[i])
	                : normalizeVNode(c2[i]));
	            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
	        }
	        if (oldLength > newLength) {
	            // remove old
	            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
	        }
	        else {
	            // mount new
	            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
	        }
	    };
	    // can be all-keyed or mixed
	    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
	        let i = 0;
	        const l2 = c2.length;
	        let e1 = c1.length - 1; // prev ending index
	        let e2 = l2 - 1; // next ending index
	        // 1. sync from start
	        // (a b) c
	        // (a b) d e
	        while (i <= e1 && i <= e2) {
	            const n1 = c1[i];
	            const n2 = (c2[i] = optimized
	                ? cloneIfMounted(c2[i])
	                : normalizeVNode(c2[i]));
	            if (isSameVNodeType(n1, n2)) {
	                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
	            }
	            else {
	                break;
	            }
	            i++;
	        }
	        // 2. sync from end
	        // a (b c)
	        // d e (b c)
	        while (i <= e1 && i <= e2) {
	            const n1 = c1[e1];
	            const n2 = (c2[e2] = optimized
	                ? cloneIfMounted(c2[e2])
	                : normalizeVNode(c2[e2]));
	            if (isSameVNodeType(n1, n2)) {
	                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
	            }
	            else {
	                break;
	            }
	            e1--;
	            e2--;
	        }
	        // 3. common sequence + mount
	        // (a b)
	        // (a b) c
	        // i = 2, e1 = 1, e2 = 2
	        // (a b)
	        // c (a b)
	        // i = 0, e1 = -1, e2 = 0
	        if (i > e1) {
	            if (i <= e2) {
	                const nextPos = e2 + 1;
	                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
	                while (i <= e2) {
	                    patch(null, (c2[i] = optimized
	                        ? cloneIfMounted(c2[i])
	                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG);
	                    i++;
	                }
	            }
	        }
	        // 4. common sequence + unmount
	        // (a b) c
	        // (a b)
	        // i = 2, e1 = 2, e2 = 1
	        // a (b c)
	        // (b c)
	        // i = 0, e1 = 0, e2 = -1
	        else if (i > e2) {
	            while (i <= e1) {
	                unmount(c1[i], parentComponent, parentSuspense, true);
	                i++;
	            }
	        }
	        // 5. unknown sequence
	        // [i ... e1 + 1]: a b [c d e] f g
	        // [i ... e2 + 1]: a b [e d c h] f g
	        // i = 2, e1 = 4, e2 = 5
	        else {
	            const s1 = i; // prev starting index
	            const s2 = i; // next starting index
	            // 5.1 build key:index map for newChildren
	            const keyToNewIndexMap = new Map();
	            for (i = s2; i <= e2; i++) {
	                const nextChild = (c2[i] = optimized
	                    ? cloneIfMounted(c2[i])
	                    : normalizeVNode(c2[i]));
	                if (nextChild.key != null) {
	                    if ( keyToNewIndexMap.has(nextChild.key)) {
	                        warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
	                    }
	                    keyToNewIndexMap.set(nextChild.key, i);
	                }
	            }
	            // 5.2 loop through old children left to be patched and try to patch
	            // matching nodes & remove nodes that are no longer present
	            let j;
	            let patched = 0;
	            const toBePatched = e2 - s2 + 1;
	            let moved = false;
	            // used to track whether any node has moved
	            let maxNewIndexSoFar = 0;
	            // works as Map<newIndex, oldIndex>
	            // Note that oldIndex is offset by +1
	            // and oldIndex = 0 is a special value indicating the new node has
	            // no corresponding old node.
	            // used for determining longest stable subsequence
	            const newIndexToOldIndexMap = new Array(toBePatched);
	            for (i = 0; i < toBePatched; i++)
	                newIndexToOldIndexMap[i] = 0;
	            for (i = s1; i <= e1; i++) {
	                const prevChild = c1[i];
	                if (patched >= toBePatched) {
	                    // all new children have been patched so this can only be a removal
	                    unmount(prevChild, parentComponent, parentSuspense, true);
	                    continue;
	                }
	                let newIndex;
	                if (prevChild.key != null) {
	                    newIndex = keyToNewIndexMap.get(prevChild.key);
	                }
	                else {
	                    // key-less node, try to locate a key-less node of the same type
	                    for (j = s2; j <= e2; j++) {
	                        if (newIndexToOldIndexMap[j - s2] === 0 &&
	                            isSameVNodeType(prevChild, c2[j])) {
	                            newIndex = j;
	                            break;
	                        }
	                    }
	                }
	                if (newIndex === undefined) {
	                    unmount(prevChild, parentComponent, parentSuspense, true);
	                }
	                else {
	                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
	                    if (newIndex >= maxNewIndexSoFar) {
	                        maxNewIndexSoFar = newIndex;
	                    }
	                    else {
	                        moved = true;
	                    }
	                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
	                    patched++;
	                }
	            }
	            // 5.3 move and mount
	            // generate longest stable subsequence only when nodes have moved
	            const increasingNewIndexSequence = moved
	                ? getSequence(newIndexToOldIndexMap)
	                : EMPTY_ARR;
	            j = increasingNewIndexSequence.length - 1;
	            // looping backwards so that we can use last patched node as anchor
	            for (i = toBePatched - 1; i >= 0; i--) {
	                const nextIndex = s2 + i;
	                const nextChild = c2[nextIndex];
	                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
	                if (newIndexToOldIndexMap[i] === 0) {
	                    // mount new
	                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
	                }
	                else if (moved) {
	                    // move if:
	                    // There is no stable subsequence (e.g. a reverse)
	                    // OR current node is not among the stable sequence
	                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
	                        move(nextChild, container, anchor, 2 /* REORDER */);
	                    }
	                    else {
	                        j--;
	                    }
	                }
	            }
	        }
	    };
	    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
	        const { el, type, transition, children, shapeFlag } = vnode;
	        if (shapeFlag & 6 /* COMPONENT */) {
	            move(vnode.component.subTree, container, anchor, moveType);
	            return;
	        }
	        if ( shapeFlag & 128 /* SUSPENSE */) {
	            vnode.suspense.move(container, anchor, moveType);
	            return;
	        }
	        if (shapeFlag & 64 /* TELEPORT */) {
	            type.move(vnode, container, anchor, internals);
	            return;
	        }
	        if (type === Fragment) {
	            hostInsert(el, container, anchor);
	            for (let i = 0; i < children.length; i++) {
	                move(children[i], container, anchor, moveType);
	            }
	            hostInsert(vnode.anchor, container, anchor);
	            return;
	        }
	        // static node move can only happen when force updating HMR
	        if ( type === Static) {
	            moveStaticNode(vnode, container, anchor);
	            return;
	        }
	        // single nodes
	        const needTransition = moveType !== 2 /* REORDER */ &&
	            shapeFlag & 1 /* ELEMENT */ &&
	            transition;
	        if (needTransition) {
	            if (moveType === 0 /* ENTER */) {
	                transition.beforeEnter(el);
	                hostInsert(el, container, anchor);
	                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
	            }
	            else {
	                const { leave, delayLeave, afterLeave } = transition;
	                const remove = () => hostInsert(el, container, anchor);
	                const performLeave = () => {
	                    leave(el, () => {
	                        remove();
	                        afterLeave && afterLeave();
	                    });
	                };
	                if (delayLeave) {
	                    delayLeave(el, remove, performLeave);
	                }
	                else {
	                    performLeave();
	                }
	            }
	        }
	        else {
	            hostInsert(el, container, anchor);
	        }
	    };
	    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
	        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
	        // unset ref
	        if (ref != null && parentComponent) {
	            setRef(ref, null, parentComponent, parentSuspense, null);
	        }
	        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
	            parentComponent.ctx.deactivate(vnode);
	            return;
	        }
	        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
	        let vnodeHook;
	        if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
	            invokeVNodeHook(vnodeHook, parentComponent, vnode);
	        }
	        if (shapeFlag & 6 /* COMPONENT */) {
	            unmountComponent(vnode.component, parentSuspense, doRemove);
	        }
	        else {
	            if ( shapeFlag & 128 /* SUSPENSE */) {
	                vnode.suspense.unmount(parentSuspense, doRemove);
	                return;
	            }
	            if (shouldInvokeDirs) {
	                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
	            }
	            if (dynamicChildren &&
	                // #1153: fast path should not be taken for non-stable (v-for) fragments
	                (type !== Fragment ||
	                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
	                // fast path for block nodes: only need to unmount dynamic children.
	                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
	            }
	            else if ((type === Fragment &&
	                (patchFlag & 128 /* KEYED_FRAGMENT */ ||
	                    patchFlag & 256 /* UNKEYED_FRAGMENT */)) ||
	                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
	                unmountChildren(children, parentComponent, parentSuspense);
	            }
	            // an unmounted teleport should always remove its children if not disabled
	            if (shapeFlag & 64 /* TELEPORT */ &&
	                (doRemove || !isTeleportDisabled(vnode.props))) {
	                vnode.type.remove(vnode, internals);
	            }
	            if (doRemove) {
	                remove(vnode);
	            }
	        }
	        if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
	            queuePostRenderEffect(() => {
	                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
	                shouldInvokeDirs &&
	                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
	            }, parentSuspense);
	        }
	    };
	    const remove = vnode => {
	        const { type, el, anchor, transition } = vnode;
	        if (type === Fragment) {
	            removeFragment(el, anchor);
	            return;
	        }
	        if ( type === Static) {
	            removeStaticNode(vnode);
	            return;
	        }
	        const performRemove = () => {
	            hostRemove(el);
	            if (transition && !transition.persisted && transition.afterLeave) {
	                transition.afterLeave();
	            }
	        };
	        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
	            transition &&
	            !transition.persisted) {
	            const { leave, delayLeave } = transition;
	            const performLeave = () => leave(el, performRemove);
	            if (delayLeave) {
	                delayLeave(vnode.el, performRemove, performLeave);
	            }
	            else {
	                performLeave();
	            }
	        }
	        else {
	            performRemove();
	        }
	    };
	    const removeFragment = (cur, end) => {
	        // For fragments, directly remove all contained DOM nodes.
	        // (fragment child nodes cannot have transition)
	        let next;
	        while (cur !== end) {
	            next = hostNextSibling(cur);
	            hostRemove(cur);
	            cur = next;
	        }
	        hostRemove(end);
	    };
	    const unmountComponent = (instance, parentSuspense, doRemove) => {
	        if ( instance.type.__hmrId) {
	            unregisterHMR(instance);
	        }
	        const { bum, effects, update, subTree, um } = instance;
	        // beforeUnmount hook
	        if (bum) {
	            invokeArrayFns(bum);
	        }
	        if (effects) {
	            for (let i = 0; i < effects.length; i++) {
	                stop(effects[i]);
	            }
	        }
	        // update may be null if a component is unmounted before its async
	        // setup has resolved.
	        if (update) {
	            stop(update);
	            unmount(subTree, instance, parentSuspense, doRemove);
	        }
	        // unmounted hook
	        if (um) {
	            queuePostRenderEffect(um, parentSuspense);
	        }
	        queuePostRenderEffect(() => {
	            instance.isUnmounted = true;
	        }, parentSuspense);
	        // A component with async dep inside a pending suspense is unmounted before
	        // its async dep resolves. This should remove the dep from the suspense, and
	        // cause the suspense to resolve immediately if that was the last dep.
	        if (
	            parentSuspense &&
	            parentSuspense.pendingBranch &&
	            !parentSuspense.isUnmounted &&
	            instance.asyncDep &&
	            !instance.asyncResolved &&
	            instance.suspenseId === parentSuspense.pendingId) {
	            parentSuspense.deps--;
	            if (parentSuspense.deps === 0) {
	                parentSuspense.resolve();
	            }
	        }
	        {
	            devtoolsComponentRemoved(instance);
	        }
	    };
	    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
	        for (let i = start; i < children.length; i++) {
	            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	        }
	    };
	    const getNextHostNode = vnode => {
	        if (vnode.shapeFlag & 6 /* COMPONENT */) {
	            return getNextHostNode(vnode.component.subTree);
	        }
	        if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
	            return vnode.suspense.next();
	        }
	        return hostNextSibling((vnode.anchor || vnode.el));
	    };
	    const render = (vnode, container) => {
	        if (vnode == null) {
	            if (container._vnode) {
	                unmount(container._vnode, null, null, true);
	            }
	        }
	        else {
	            patch(container._vnode || null, vnode, container);
	        }
	        flushPostFlushCbs();
	        container._vnode = vnode;
	    };
	    const internals = {
	        p: patch,
	        um: unmount,
	        m: move,
	        r: remove,
	        mt: mountComponent,
	        mc: mountChildren,
	        pc: patchChildren,
	        pbc: patchBlockChildren,
	        n: getNextHostNode,
	        o: options
	    };
	    let hydrate;
	    let hydrateNode;
	    if (createHydrationFns) {
	        [hydrate, hydrateNode] = createHydrationFns(internals);
	    }
	    return {
	        render,
	        hydrate,
	        createApp: createAppAPI(render, hydrate)
	    };
	}
	function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
	        vnode,
	        prevVNode
	    ]);
	}
	/**
	 * #1156
	 * When a component is HMR-enabled, we need to make sure that all static nodes
	 * inside a block also inherit the DOM element from the previous tree so that
	 * HMR updates (which are full updates) can retrieve the element for patching.
	 *
	 * #2080
	 * Inside keyed `template` fragment static children, if a fragment is moved,
	 * the children will always moved so that need inherit el form previous nodes
	 * to ensure correct moved position.
	 */
	function traverseStaticChildren(n1, n2, shallow = false) {
	    const ch1 = n1.children;
	    const ch2 = n2.children;
	    if (isArray(ch1) && isArray(ch2)) {
	        for (let i = 0; i < ch1.length; i++) {
	            // this is only called in the optimized path so array children are
	            // guaranteed to be vnodes
	            const c1 = ch1[i];
	            let c2 = ch2[i];
	            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
	                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
	                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
	                    c2.el = c1.el;
	                }
	                if (!shallow)
	                    traverseStaticChildren(c1, c2);
	            }
	            // also inherit for comment nodes, but not placeholders (e.g. v-if which
	            // would have received .el during block patch)
	            if ( c2.type === Comment && !c2.el) {
	                c2.el = c1.el;
	            }
	        }
	    }
	}
	// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
	function getSequence(arr) {
	    const p = arr.slice();
	    const result = [0];
	    let i, j, u, v, c;
	    const len = arr.length;
	    for (i = 0; i < len; i++) {
	        const arrI = arr[i];
	        if (arrI !== 0) {
	            j = result[result.length - 1];
	            if (arr[j] < arrI) {
	                p[i] = j;
	                result.push(i);
	                continue;
	            }
	            u = 0;
	            v = result.length - 1;
	            while (u < v) {
	                c = ((u + v) / 2) | 0;
	                if (arr[result[c]] < arrI) {
	                    u = c + 1;
	                }
	                else {
	                    v = c;
	                }
	            }
	            if (arrI < arr[result[u]]) {
	                if (u > 0) {
	                    p[i] = result[u - 1];
	                }
	                result[u] = i;
	            }
	        }
	    }
	    u = result.length;
	    v = result[u - 1];
	    while (u-- > 0) {
	        result[u] = v;
	        v = p[v];
	    }
	    return result;
	}

	const isTeleport = (type) => type.__isTeleport;
	const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');

	const COMPONENTS = 'components';
	/**
	 * @private
	 */
	function resolveComponent(name) {
	    return resolveAsset(COMPONENTS, name) || name;
	}
	const NULL_DYNAMIC_COMPONENT = Symbol();
	// implementation
	function resolveAsset(type, name, warnMissing = true) {
	    const instance = currentRenderingInstance || currentInstance;
	    if (instance) {
	        const Component = instance.type;
	        // self name has highest priority
	        if (type === COMPONENTS) {
	            const selfName = Component.displayName || Component.name;
	            if (selfName &&
	                (selfName === name ||
	                    selfName === camelize(name) ||
	                    selfName === capitalize(camelize(name)))) {
	                return Component;
	            }
	        }
	        const res = 
	        // local registration
	        // check instance[type] first for components with mixin or extends.
	        resolve(instance[type] || Component[type], name) ||
	            // global registration
	            resolve(instance.appContext[type], name);
	        if ( warnMissing && !res) {
	            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}`);
	        }
	        return res;
	    }
	    else {
	        warn(`resolve${capitalize(type.slice(0, -1))} ` +
	            `can only be used in render() or setup().`);
	    }
	}
	function resolve(registry, name) {
	    return (registry &&
	        (registry[name] ||
	            registry[camelize(name)] ||
	            registry[capitalize(camelize(name))]));
	}

	const Fragment = Symbol( 'Fragment' );
	const Text = Symbol( 'Text' );
	const Comment = Symbol( 'Comment' );
	const Static = Symbol( 'Static' );
	// Since v-if and v-for are the two possible ways node structure can dynamically
	// change, once we consider v-if branches and each v-for fragment a block, we
	// can divide a template into nested blocks, and within each block the node
	// structure would be stable. This allows us to skip most children diffing
	// and only worry about the dynamic nodes (indicated by patch flags).
	const blockStack = [];
	let currentBlock = null;
	/**
	 * Open a block.
	 * This must be called before `createBlock`. It cannot be part of `createBlock`
	 * because the children of the block are evaluated before `createBlock` itself
	 * is called. The generated code typically looks like this:
	 *
	 * ```js
	 * function render() {
	 *   return (openBlock(),createBlock('div', null, [...]))
	 * }
	 * ```
	 * disableTracking is true when creating a v-for fragment block, since a v-for
	 * fragment always diffs its children.
	 *
	 * @private
	 */
	function openBlock(disableTracking = false) {
	    blockStack.push((currentBlock = disableTracking ? null : []));
	}
	function closeBlock() {
	    blockStack.pop();
	    currentBlock = blockStack[blockStack.length - 1] || null;
	}
	/**
	 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
	 * A block root keeps track of dynamic nodes within the block in the
	 * `dynamicChildren` array.
	 *
	 * @private
	 */
	function createBlock(type, props, children, patchFlag, dynamicProps) {
	    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */);
	    // save current block children on the block vnode
	    vnode.dynamicChildren = currentBlock || EMPTY_ARR;
	    // close block
	    closeBlock();
	    // a block is always going to be patched, so track it as a child of its
	    // parent block
	    if ( currentBlock) {
	        currentBlock.push(vnode);
	    }
	    return vnode;
	}
	function isVNode(value) {
	    return value ? value.__v_isVNode === true : false;
	}
	function isSameVNodeType(n1, n2) {
	    if (
	        n2.shapeFlag & 6 /* COMPONENT */ &&
	        hmrDirtyComponents.has(n2.type)) {
	        // HMR only: if the component has been hot-updated, force a reload.
	        return false;
	    }
	    return n1.type === n2.type && n1.key === n2.key;
	}
	const createVNodeWithArgsTransform = (...args) => {
	    return _createVNode(...( args));
	};
	const InternalObjectKey = `__vInternal`;
	const normalizeKey = ({ key }) => key != null ? key : null;
	const normalizeRef = ({ ref }) => {
	    return (ref != null
	        ? isArray(ref)
	            ? ref
	            : { i: currentRenderingInstance, r: ref }
	        : null);
	};
	const createVNode = ( createVNodeWithArgsTransform
	    );
	function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	    if (!type || type === NULL_DYNAMIC_COMPONENT) {
	        if ( !type) {
	            warn(`Invalid vnode type when creating vnode: ${type}.`);
	        }
	        type = Comment;
	    }
	    if (isVNode(type)) {
	        // createVNode receiving an existing vnode. This happens in cases like
	        // <component :is="vnode"/>
	        // #2078 make sure to merge refs during the clone instead of overwriting it
	        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
	        if (children) {
	            normalizeChildren(cloned, children);
	        }
	        return cloned;
	    }
	    // class component normalization.
	    if (isClassComponent(type)) {
	        type = type.__vccOpts;
	    }
	    // class & style normalization.
	    if (props) {
	        // for reactive or proxy objects, we need to clone it to enable mutation.
	        if (isProxy(props) || InternalObjectKey in props) {
	            props = extend({}, props);
	        }
	        let { class: klass, style } = props;
	        if (klass && !isString(klass)) {
	            props.class = normalizeClass(klass);
	        }
	        if (isObject(style)) {
	            // reactive state objects need to be cloned since they are likely to be
	            // mutated
	            if (isProxy(style) && !isArray(style)) {
	                style = extend({}, style);
	            }
	            props.style = normalizeStyle(style);
	        }
	    }
	    // encode the vnode type information into a bitmap
	    const shapeFlag = isString(type)
	        ? 1 /* ELEMENT */
	        :  isSuspense(type)
	            ? 128 /* SUSPENSE */
	            : isTeleport(type)
	                ? 64 /* TELEPORT */
	                : isObject(type)
	                    ? 4 /* STATEFUL_COMPONENT */
	                    : isFunction(type)
	                        ? 2 /* FUNCTIONAL_COMPONENT */
	                        : 0;
	    if ( shapeFlag & 4 /* STATEFUL_COMPONENT */ && isProxy(type)) {
	        type = toRaw(type);
	        warn(`Vue received a Component which was made a reactive object. This can ` +
	            `lead to unnecessary performance overhead, and should be avoided by ` +
	            `marking the component with \`markRaw\` or using \`shallowRef\` ` +
	            `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
	    }
	    const vnode = {
	        __v_isVNode: true,
	        ["__v_skip" /* SKIP */]: true,
	        type,
	        props,
	        key: props && normalizeKey(props),
	        ref: props && normalizeRef(props),
	        scopeId: currentScopeId,
	        children: null,
	        component: null,
	        suspense: null,
	        ssContent: null,
	        ssFallback: null,
	        dirs: null,
	        transition: null,
	        el: null,
	        anchor: null,
	        target: null,
	        targetAnchor: null,
	        staticCount: 0,
	        shapeFlag,
	        patchFlag,
	        dynamicProps,
	        dynamicChildren: null,
	        appContext: null
	    };
	    // validate key
	    if ( vnode.key !== vnode.key) {
	        warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
	    }
	    normalizeChildren(vnode, children);
	    // normalize suspense children
	    if ( shapeFlag & 128 /* SUSPENSE */) {
	        const { content, fallback } = normalizeSuspenseChildren(vnode);
	        vnode.ssContent = content;
	        vnode.ssFallback = fallback;
	    }
	    if (
	        // avoid a block node from tracking itself
	        !isBlockNode &&
	        // has current parent block
	        currentBlock &&
	        // presence of a patch flag indicates this node needs patching on updates.
	        // component nodes also should always be patched, because even if the
	        // component doesn't need to update, it needs to persist the instance on to
	        // the next vnode so that it can be properly unmounted later.
	        (patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
	        // the EVENTS flag is only for hydration and if it is the only flag, the
	        // vnode should not be considered dynamic due to handler caching.
	        patchFlag !== 32 /* HYDRATE_EVENTS */) {
	        currentBlock.push(vnode);
	    }
	    return vnode;
	}
	function cloneVNode(vnode, extraProps, mergeRef = false) {
	    // This is intentionally NOT using spread or extend to avoid the runtime
	    // key enumeration cost.
	    const { props, ref, patchFlag } = vnode;
	    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	    return {
	        __v_isVNode: true,
	        ["__v_skip" /* SKIP */]: true,
	        type: vnode.type,
	        props: mergedProps,
	        key: mergedProps && normalizeKey(mergedProps),
	        ref: extraProps && extraProps.ref
	            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
	                // if the vnode itself already has a ref, cloneVNode will need to merge
	                // the refs so the single vnode can be set on multiple refs
	                mergeRef && ref
	                    ? isArray(ref)
	                        ? ref.concat(normalizeRef(extraProps))
	                        : [ref, normalizeRef(extraProps)]
	                    : normalizeRef(extraProps)
	            : ref,
	        scopeId: vnode.scopeId,
	        children: vnode.children,
	        target: vnode.target,
	        targetAnchor: vnode.targetAnchor,
	        staticCount: vnode.staticCount,
	        shapeFlag: vnode.shapeFlag,
	        // if the vnode is cloned with extra props, we can no longer assume its
	        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
	        // note: perserve flag for fragments since they use the flag for children
	        // fast paths only.
	        patchFlag: extraProps && vnode.type !== Fragment
	            ? patchFlag === -1 // hoisted node
	                ? 16 /* FULL_PROPS */
	                : patchFlag | 16 /* FULL_PROPS */
	            : patchFlag,
	        dynamicProps: vnode.dynamicProps,
	        dynamicChildren: vnode.dynamicChildren,
	        appContext: vnode.appContext,
	        dirs: vnode.dirs,
	        transition: vnode.transition,
	        // These should technically only be non-null on mounted VNodes. However,
	        // they *should* be copied for kept-alive vnodes. So we just always copy
	        // them since them being non-null during a mount doesn't affect the logic as
	        // they will simply be overwritten.
	        component: vnode.component,
	        suspense: vnode.suspense,
	        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
	        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
	        el: vnode.el,
	        anchor: vnode.anchor
	    };
	}
	/**
	 * @private
	 */
	function createTextVNode(text = ' ', flag = 0) {
	    return createVNode(Text, null, text, flag);
	}
	/**
	 * @private
	 */
	function createCommentVNode(text = '', 
	// when used as the v-else branch, the comment node must be created as a
	// block to ensure correct updates.
	asBlock = false) {
	    return asBlock
	        ? (openBlock(), createBlock(Comment, null, text))
	        : createVNode(Comment, null, text);
	}
	function normalizeVNode(child) {
	    if (child == null || typeof child === 'boolean') {
	        // empty placeholder
	        return createVNode(Comment);
	    }
	    else if (isArray(child)) {
	        // fragment
	        return createVNode(Fragment, null, child);
	    }
	    else if (typeof child === 'object') {
	        // already vnode, this should be the most common since compiled templates
	        // always produce all-vnode children arrays
	        return child.el === null ? child : cloneVNode(child);
	    }
	    else {
	        // strings and numbers
	        return createVNode(Text, null, String(child));
	    }
	}
	// optimized normalization for template-compiled render fns
	function cloneIfMounted(child) {
	    return child.el === null ? child : cloneVNode(child);
	}
	function normalizeChildren(vnode, children) {
	    let type = 0;
	    const { shapeFlag } = vnode;
	    if (children == null) {
	        children = null;
	    }
	    else if (isArray(children)) {
	        type = 16 /* ARRAY_CHILDREN */;
	    }
	    else if (typeof children === 'object') {
	        if (shapeFlag & 1 /* ELEMENT */ || shapeFlag & 64 /* TELEPORT */) {
	            // Normalize slot to plain children for plain element and Teleport
	            const slot = children.default;
	            if (slot) {
	                // _c marker is added by withCtx() indicating this is a compiled slot
	                slot._c && setCompiledSlotRendering(1);
	                normalizeChildren(vnode, slot());
	                slot._c && setCompiledSlotRendering(-1);
	            }
	            return;
	        }
	        else {
	            type = 32 /* SLOTS_CHILDREN */;
	            const slotFlag = children._;
	            if (!slotFlag && !(InternalObjectKey in children)) {
	                children._ctx = currentRenderingInstance;
	            }
	            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
	                // a child component receives forwarded slots from the parent.
	                // its slot type is determined by its parent's slot type.
	                if (currentRenderingInstance.vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */) {
	                    children._ = 2 /* DYNAMIC */;
	                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
	                }
	                else {
	                    children._ = 1 /* STABLE */;
	                }
	            }
	        }
	    }
	    else if (isFunction(children)) {
	        children = { default: children, _ctx: currentRenderingInstance };
	        type = 32 /* SLOTS_CHILDREN */;
	    }
	    else {
	        children = String(children);
	        // force teleport children to array so it can be moved around
	        if (shapeFlag & 64 /* TELEPORT */) {
	            type = 16 /* ARRAY_CHILDREN */;
	            children = [createTextVNode(children)];
	        }
	        else {
	            type = 8 /* TEXT_CHILDREN */;
	        }
	    }
	    vnode.children = children;
	    vnode.shapeFlag |= type;
	}
	function mergeProps(...args) {
	    const ret = extend({}, args[0]);
	    for (let i = 1; i < args.length; i++) {
	        const toMerge = args[i];
	        for (const key in toMerge) {
	            if (key === 'class') {
	                if (ret.class !== toMerge.class) {
	                    ret.class = normalizeClass([ret.class, toMerge.class]);
	                }
	            }
	            else if (key === 'style') {
	                ret.style = normalizeStyle([ret.style, toMerge.style]);
	            }
	            else if (isOn(key)) {
	                const existing = ret[key];
	                const incoming = toMerge[key];
	                if (existing !== incoming) {
	                    ret[key] = existing
	                        ? [].concat(existing, toMerge[key])
	                        : incoming;
	                }
	            }
	            else if (key !== '') {
	                ret[key] = toMerge[key];
	            }
	        }
	    }
	    return ret;
	}

	function provide(key, value) {
	    if (!currentInstance) {
	        {
	            warn(`provide() can only be used inside setup().`);
	        }
	    }
	    else {
	        let provides = currentInstance.provides;
	        // by default an instance inherits its parent's provides object
	        // but when it needs to provide values of its own, it creates its
	        // own provides object using parent provides object as prototype.
	        // this way in `inject` we can simply look up injections from direct
	        // parent and let the prototype chain do the work.
	        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
	        if (parentProvides === provides) {
	            provides = currentInstance.provides = Object.create(parentProvides);
	        }
	        // TS doesn't allow symbol as index type
	        provides[key] = value;
	    }
	}
	function inject(key, defaultValue, treatDefaultAsFactory = false) {
	    // fallback to `currentRenderingInstance` so that this can be called in
	    // a functional component
	    const instance = currentInstance || currentRenderingInstance;
	    if (instance) {
	        // #2400
	        // to support `app.use` plugins,
	        // fallback to appContext's `provides` if the intance is at root
	        const provides = instance.parent == null
	            ? instance.vnode.appContext && instance.vnode.appContext.provides
	            : instance.parent.provides;
	        if (provides && key in provides) {
	            // TS doesn't allow symbol as index type
	            return provides[key];
	        }
	        else if (arguments.length > 1) {
	            return treatDefaultAsFactory && isFunction(defaultValue)
	                ? defaultValue()
	                : defaultValue;
	        }
	        else {
	            warn(`injection "${String(key)}" not found.`);
	        }
	    }
	    else {
	        warn(`inject() can only be used inside setup() or functional components.`);
	    }
	}

	function createDuplicateChecker() {
	    const cache = Object.create(null);
	    return (type, key) => {
	        if (cache[key]) {
	            warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
	        }
	        else {
	            cache[key] = type;
	        }
	    };
	}
	let isInBeforeCreate = false;
	function applyOptions(instance, options, deferredData = [], deferredWatch = [], deferredProvide = [], asMixin = false) {
	    const { 
	    // composition
	    mixins, extends: extendsOptions, 
	    // state
	    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
	    // assets
	    components, directives, 
	    // lifecycle
	    beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured } = options;
	    const publicThis = instance.proxy;
	    const ctx = instance.ctx;
	    const globalMixins = instance.appContext.mixins;
	    if (asMixin && render && instance.render === NOOP) {
	        instance.render = render;
	    }
	    // applyOptions is called non-as-mixin once per instance
	    if (!asMixin) {
	        isInBeforeCreate = true;
	        callSyncHook('beforeCreate', "bc" /* BEFORE_CREATE */, options, instance, globalMixins);
	        isInBeforeCreate = false;
	        // global mixins are applied first
	        applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
	    }
	    // extending a base component...
	    if (extendsOptions) {
	        applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
	    }
	    // local mixins
	    if (mixins) {
	        applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
	    }
	    const checkDuplicateProperties =  createDuplicateChecker() ;
	    {
	        const [propsOptions] = instance.propsOptions;
	        if (propsOptions) {
	            for (const key in propsOptions) {
	                checkDuplicateProperties("Props" /* PROPS */, key);
	            }
	        }
	    }
	    // options initialization order (to be consistent with Vue 2):
	    // - props (already done outside of this function)
	    // - inject
	    // - methods
	    // - data (deferred since it relies on `this` access)
	    // - computed
	    // - watch (deferred since it relies on `this` access)
	    if (injectOptions) {
	        if (isArray(injectOptions)) {
	            for (let i = 0; i < injectOptions.length; i++) {
	                const key = injectOptions[i];
	                ctx[key] = inject(key);
	                {
	                    checkDuplicateProperties("Inject" /* INJECT */, key);
	                }
	            }
	        }
	        else {
	            for (const key in injectOptions) {
	                const opt = injectOptions[key];
	                if (isObject(opt)) {
	                    ctx[key] = inject(opt.from || key, opt.default, true /* treat default function as factory */);
	                }
	                else {
	                    ctx[key] = inject(opt);
	                }
	                {
	                    checkDuplicateProperties("Inject" /* INJECT */, key);
	                }
	            }
	        }
	    }
	    if (methods) {
	        for (const key in methods) {
	            const methodHandler = methods[key];
	            if (isFunction(methodHandler)) {
	                ctx[key] = methodHandler.bind(publicThis);
	                {
	                    checkDuplicateProperties("Methods" /* METHODS */, key);
	                }
	            }
	            else {
	                warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
	                    `Did you reference the function correctly?`);
	            }
	        }
	    }
	    if (!asMixin) {
	        if (deferredData.length) {
	            deferredData.forEach(dataFn => resolveData(instance, dataFn, publicThis));
	        }
	        if (dataOptions) {
	            resolveData(instance, dataOptions, publicThis);
	        }
	        {
	            const rawData = toRaw(instance.data);
	            for (const key in rawData) {
	                checkDuplicateProperties("Data" /* DATA */, key);
	                // expose data on ctx during dev
	                if (key[0] !== '$' && key[0] !== '_') {
	                    Object.defineProperty(ctx, key, {
	                        configurable: true,
	                        enumerable: true,
	                        get: () => rawData[key],
	                        set: NOOP
	                    });
	                }
	            }
	        }
	    }
	    else if (dataOptions) {
	        deferredData.push(dataOptions);
	    }
	    if (computedOptions) {
	        for (const key in computedOptions) {
	            const opt = computedOptions[key];
	            const get = isFunction(opt)
	                ? opt.bind(publicThis, publicThis)
	                : isFunction(opt.get)
	                    ? opt.get.bind(publicThis, publicThis)
	                    : NOOP;
	            if ( get === NOOP) {
	                warn(`Computed property "${key}" has no getter.`);
	            }
	            const set = !isFunction(opt) && isFunction(opt.set)
	                ? opt.set.bind(publicThis)
	                :  () => {
	                        warn(`Write operation failed: computed property "${key}" is readonly.`);
	                    }
	                    ;
	            const c = computed$1({
	                get,
	                set
	            });
	            Object.defineProperty(ctx, key, {
	                enumerable: true,
	                configurable: true,
	                get: () => c.value,
	                set: v => (c.value = v)
	            });
	            {
	                checkDuplicateProperties("Computed" /* COMPUTED */, key);
	            }
	        }
	    }
	    if (watchOptions) {
	        deferredWatch.push(watchOptions);
	    }
	    if (!asMixin && deferredWatch.length) {
	        deferredWatch.forEach(watchOptions => {
	            for (const key in watchOptions) {
	                createWatcher(watchOptions[key], ctx, publicThis, key);
	            }
	        });
	    }
	    if (provideOptions) {
	        deferredProvide.push(provideOptions);
	    }
	    if (!asMixin && deferredProvide.length) {
	        deferredProvide.forEach(provideOptions => {
	            const provides = isFunction(provideOptions)
	                ? provideOptions.call(publicThis)
	                : provideOptions;
	            for (const key in provides) {
	                provide(key, provides[key]);
	            }
	        });
	    }
	    // asset options.
	    // To reduce memory usage, only components with mixins or extends will have
	    // resolved asset registry attached to instance.
	    if (asMixin) {
	        if (components) {
	            extend(instance.components ||
	                (instance.components = extend({}, instance.type.components)), components);
	        }
	        if (directives) {
	            extend(instance.directives ||
	                (instance.directives = extend({}, instance.type.directives)), directives);
	        }
	    }
	    // lifecycle options
	    if (!asMixin) {
	        callSyncHook('created', "c" /* CREATED */, options, instance, globalMixins);
	    }
	    if (beforeMount) {
	        onBeforeMount(beforeMount.bind(publicThis));
	    }
	    if (mounted) {
	        onMounted(mounted.bind(publicThis));
	    }
	    if (beforeUpdate) {
	        onBeforeUpdate(beforeUpdate.bind(publicThis));
	    }
	    if (updated) {
	        onUpdated(updated.bind(publicThis));
	    }
	    if (activated) {
	        onActivated(activated.bind(publicThis));
	    }
	    if (deactivated) {
	        onDeactivated(deactivated.bind(publicThis));
	    }
	    if (errorCaptured) {
	        onErrorCaptured(errorCaptured.bind(publicThis));
	    }
	    if (renderTracked) {
	        onRenderTracked(renderTracked.bind(publicThis));
	    }
	    if (renderTriggered) {
	        onRenderTriggered(renderTriggered.bind(publicThis));
	    }
	    if ( beforeDestroy) {
	        warn(`\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`);
	    }
	    if (beforeUnmount) {
	        onBeforeUnmount(beforeUnmount.bind(publicThis));
	    }
	    if ( destroyed) {
	        warn(`\`destroyed\` has been renamed to \`unmounted\`.`);
	    }
	    if (unmounted) {
	        onUnmounted(unmounted.bind(publicThis));
	    }
	}
	function callSyncHook(name, type, options, instance, globalMixins) {
	    callHookFromMixins(name, type, globalMixins, instance);
	    const { extends: base, mixins } = options;
	    if (base) {
	        callHookFromExtends(name, type, base, instance);
	    }
	    if (mixins) {
	        callHookFromMixins(name, type, mixins, instance);
	    }
	    const selfHook = options[name];
	    if (selfHook) {
	        callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
	    }
	}
	function callHookFromExtends(name, type, base, instance) {
	    if (base.extends) {
	        callHookFromExtends(name, type, base.extends, instance);
	    }
	    const baseHook = base[name];
	    if (baseHook) {
	        callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
	    }
	}
	function callHookFromMixins(name, type, mixins, instance) {
	    for (let i = 0; i < mixins.length; i++) {
	        const chainedMixins = mixins[i].mixins;
	        if (chainedMixins) {
	            callHookFromMixins(name, type, chainedMixins, instance);
	        }
	        const fn = mixins[i][name];
	        if (fn) {
	            callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
	        }
	    }
	}
	function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
	    for (let i = 0; i < mixins.length; i++) {
	        applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
	    }
	}
	function resolveData(instance, dataFn, publicThis) {
	    if ( !isFunction(dataFn)) {
	        warn(`The data option must be a function. ` +
	            `Plain object usage is no longer supported.`);
	    }
	    const data = dataFn.call(publicThis, publicThis);
	    if ( isPromise(data)) {
	        warn(`data() returned a Promise - note data() cannot be async; If you ` +
	            `intend to perform data fetching before component renders, use ` +
	            `async setup() + <Suspense>.`);
	    }
	    if (!isObject(data)) {
	         warn(`data() should return an object.`);
	    }
	    else if (instance.data === EMPTY_OBJ) {
	        instance.data = reactive(data);
	    }
	    else {
	        // existing data: this is a mixin or extends.
	        extend(instance.data, data);
	    }
	}
	function createWatcher(raw, ctx, publicThis, key) {
	    const getter = key.includes('.')
	        ? createPathGetter(publicThis, key)
	        : () => publicThis[key];
	    if (isString(raw)) {
	        const handler = ctx[raw];
	        if (isFunction(handler)) {
	            watch(getter, handler);
	        }
	        else {
	            warn(`Invalid watch handler specified by key "${raw}"`, handler);
	        }
	    }
	    else if (isFunction(raw)) {
	        watch(getter, raw.bind(publicThis));
	    }
	    else if (isObject(raw)) {
	        if (isArray(raw)) {
	            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
	        }
	        else {
	            const handler = isFunction(raw.handler)
	                ? raw.handler.bind(publicThis)
	                : ctx[raw.handler];
	            if (isFunction(handler)) {
	                watch(getter, handler, raw);
	            }
	            else {
	                warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
	            }
	        }
	    }
	    else {
	        warn(`Invalid watch option: "${key}"`, raw);
	    }
	}
	function createPathGetter(ctx, path) {
	    const segments = path.split('.');
	    return () => {
	        let cur = ctx;
	        for (let i = 0; i < segments.length && cur; i++) {
	            cur = cur[segments[i]];
	        }
	        return cur;
	    };
	}
	function resolveMergedOptions(instance) {
	    const raw = instance.type;
	    const { __merged, mixins, extends: extendsOptions } = raw;
	    if (__merged)
	        return __merged;
	    const globalMixins = instance.appContext.mixins;
	    if (!globalMixins.length && !mixins && !extendsOptions)
	        return raw;
	    const options = {};
	    globalMixins.forEach(m => mergeOptions(options, m, instance));
	    mergeOptions(options, raw, instance);
	    return (raw.__merged = options);
	}
	function mergeOptions(to, from, instance) {
	    const strats = instance.appContext.config.optionMergeStrategies;
	    const { mixins, extends: extendsOptions } = from;
	    extendsOptions && mergeOptions(to, extendsOptions, instance);
	    mixins &&
	        mixins.forEach((m) => mergeOptions(to, m, instance));
	    for (const key in from) {
	        if (strats && hasOwn(strats, key)) {
	            to[key] = strats[key](to[key], from[key], instance.proxy, key);
	        }
	        else {
	            to[key] = from[key];
	        }
	    }
	}

	const publicPropertiesMap = extend(Object.create(null), {
	    $: i => i,
	    $el: i => i.vnode.el,
	    $data: i => i.data,
	    $props: i => ( shallowReadonly(i.props) ),
	    $attrs: i => ( shallowReadonly(i.attrs) ),
	    $slots: i => ( shallowReadonly(i.slots) ),
	    $refs: i => ( shallowReadonly(i.refs) ),
	    $parent: i => i.parent && i.parent.proxy,
	    $root: i => i.root && i.root.proxy,
	    $emit: i => i.emit,
	    $options: i => ( resolveMergedOptions(i) ),
	    $forceUpdate: i => () => queueJob(i.update),
	    $nextTick: i => nextTick.bind(i.proxy),
	    $watch: i => ( instanceWatch.bind(i) )
	});
	const PublicInstanceProxyHandlers = {
	    get({ _: instance }, key) {
	        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
	        // let @vue/reactivity know it should never observe Vue public instances.
	        if (key === "__v_skip" /* SKIP */) {
	            return true;
	        }
	        // for internal formatters to know that this is a Vue instance
	        if ( key === '__isVue') {
	            return true;
	        }
	        // data / props / ctx
	        // This getter gets called for every property access on the render context
	        // during render and is a major hotspot. The most expensive part of this
	        // is the multiple hasOwn() calls. It's much faster to do a simple property
	        // access on a plain object, so we use an accessCache object (with null
	        // prototype) to memoize what access type a key corresponds to.
	        let normalizedProps;
	        if (key[0] !== '$') {
	            const n = accessCache[key];
	            if (n !== undefined) {
	                switch (n) {
	                    case 0 /* SETUP */:
	                        return setupState[key];
	                    case 1 /* DATA */:
	                        return data[key];
	                    case 3 /* CONTEXT */:
	                        return ctx[key];
	                    case 2 /* PROPS */:
	                        return props[key];
	                    // default: just fallthrough
	                }
	            }
	            else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
	                accessCache[key] = 0 /* SETUP */;
	                return setupState[key];
	            }
	            else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
	                accessCache[key] = 1 /* DATA */;
	                return data[key];
	            }
	            else if (
	            // only cache other properties when instance has declared (thus stable)
	            // props
	            (normalizedProps = instance.propsOptions[0]) &&
	                hasOwn(normalizedProps, key)) {
	                accessCache[key] = 2 /* PROPS */;
	                return props[key];
	            }
	            else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
	                accessCache[key] = 3 /* CONTEXT */;
	                return ctx[key];
	            }
	            else if ( !isInBeforeCreate) {
	                accessCache[key] = 4 /* OTHER */;
	            }
	        }
	        const publicGetter = publicPropertiesMap[key];
	        let cssModule, globalProperties;
	        // public $xxx properties
	        if (publicGetter) {
	            if (key === '$attrs') {
	                track(instance, "get" /* GET */, key);
	                 markAttrsAccessed();
	            }
	            return publicGetter(instance);
	        }
	        else if (
	        // css module (injected by vue-loader)
	        (cssModule = type.__cssModules) &&
	            (cssModule = cssModule[key])) {
	            return cssModule;
	        }
	        else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
	            // user may set custom properties to `this` that start with `$`
	            accessCache[key] = 3 /* CONTEXT */;
	            return ctx[key];
	        }
	        else if (
	        // global properties
	        ((globalProperties = appContext.config.globalProperties),
	            hasOwn(globalProperties, key))) {
	            return globalProperties[key];
	        }
	        else if (
	            currentRenderingInstance &&
	            (!isString(key) ||
	                // #1091 avoid internal isRef/isVNode checks on component instance leading
	                // to infinite warning loop
	                key.indexOf('__v') !== 0)) {
	            if (data !== EMPTY_OBJ &&
	                (key[0] === '$' || key[0] === '_') &&
	                hasOwn(data, key)) {
	                warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` +
	                    `character ("$" or "_") and is not proxied on the render context.`);
	            }
	            else {
	                warn(`Property ${JSON.stringify(key)} was accessed during render ` +
	                    `but is not defined on instance.`);
	            }
	        }
	    },
	    set({ _: instance }, key, value) {
	        const { data, setupState, ctx } = instance;
	        if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
	            setupState[key] = value;
	        }
	        else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
	            data[key] = value;
	        }
	        else if (key in instance.props) {
	            
	                warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
	            return false;
	        }
	        if (key[0] === '$' && key.slice(1) in instance) {
	            
	                warn(`Attempting to mutate public property "${key}". ` +
	                    `Properties starting with $ are reserved and readonly.`, instance);
	            return false;
	        }
	        else {
	            if ( key in instance.appContext.config.globalProperties) {
	                Object.defineProperty(ctx, key, {
	                    enumerable: true,
	                    configurable: true,
	                    value
	                });
	            }
	            else {
	                ctx[key] = value;
	            }
	        }
	        return true;
	    },
	    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
	        let normalizedProps;
	        return (accessCache[key] !== undefined ||
	            (data !== EMPTY_OBJ && hasOwn(data, key)) ||
	            (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) ||
	            ((normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key)) ||
	            hasOwn(ctx, key) ||
	            hasOwn(publicPropertiesMap, key) ||
	            hasOwn(appContext.config.globalProperties, key));
	    }
	};
	{
	    PublicInstanceProxyHandlers.ownKeys = (target) => {
	        warn(`Avoid app logic that relies on enumerating keys on a component instance. ` +
	            `The keys will be empty in production mode to avoid performance overhead.`);
	        return Reflect.ownKeys(target);
	    };
	}
	const RuntimeCompiledPublicInstanceProxyHandlers = extend({}, PublicInstanceProxyHandlers, {
	    get(target, key) {
	        // fast path for unscopables when using `with` block
	        if (key === Symbol.unscopables) {
	            return;
	        }
	        return PublicInstanceProxyHandlers.get(target, key, target);
	    },
	    has(_, key) {
	        const has = key[0] !== '_' && !isGloballyWhitelisted(key);
	        if ( !has && PublicInstanceProxyHandlers.has(_, key)) {
	            warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
	        }
	        return has;
	    }
	});
	// In dev mode, the proxy target exposes the same properties as seen on `this`
	// for easier console inspection. In prod mode it will be an empty object so
	// these properties definitions can be skipped.
	function createRenderContext(instance) {
	    const target = {};
	    // expose internal instance for proxy handlers
	    Object.defineProperty(target, `_`, {
	        configurable: true,
	        enumerable: false,
	        get: () => instance
	    });
	    // expose public properties
	    Object.keys(publicPropertiesMap).forEach(key => {
	        Object.defineProperty(target, key, {
	            configurable: true,
	            enumerable: false,
	            get: () => publicPropertiesMap[key](instance),
	            // intercepted by the proxy so no need for implementation,
	            // but needed to prevent set errors
	            set: NOOP
	        });
	    });
	    // expose global properties
	    const { globalProperties } = instance.appContext.config;
	    Object.keys(globalProperties).forEach(key => {
	        Object.defineProperty(target, key, {
	            configurable: true,
	            enumerable: false,
	            get: () => globalProperties[key],
	            set: NOOP
	        });
	    });
	    return target;
	}
	// dev only
	function exposePropsOnRenderContext(instance) {
	    const { ctx, propsOptions: [propsOptions] } = instance;
	    if (propsOptions) {
	        Object.keys(propsOptions).forEach(key => {
	            Object.defineProperty(ctx, key, {
	                enumerable: true,
	                configurable: true,
	                get: () => instance.props[key],
	                set: NOOP
	            });
	        });
	    }
	}
	// dev only
	function exposeSetupStateOnRenderContext(instance) {
	    const { ctx, setupState } = instance;
	    Object.keys(toRaw(setupState)).forEach(key => {
	        if (key[0] === '$' || key[0] === '_') {
	            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
	                `which are reserved prefixes for Vue internals.`);
	            return;
	        }
	        Object.defineProperty(ctx, key, {
	            enumerable: true,
	            configurable: true,
	            get: () => setupState[key],
	            set: NOOP
	        });
	    });
	}

	const emptyAppContext = createAppContext();
	let uid$2 = 0;
	function createComponentInstance(vnode, parent, suspense) {
	    const type = vnode.type;
	    // inherit parent app context - or - if root, adopt from root vnode
	    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	    const instance = {
	        uid: uid$2++,
	        vnode,
	        type,
	        parent,
	        appContext,
	        root: null,
	        next: null,
	        subTree: null,
	        update: null,
	        render: null,
	        proxy: null,
	        withProxy: null,
	        effects: null,
	        provides: parent ? parent.provides : Object.create(appContext.provides),
	        accessCache: null,
	        renderCache: [],
	        // local resovled assets
	        components: null,
	        directives: null,
	        // resolved props and emits options
	        propsOptions: normalizePropsOptions(type, appContext),
	        emitsOptions: normalizeEmitsOptions(type, appContext),
	        // emit
	        emit: null,
	        emitted: null,
	        // state
	        ctx: EMPTY_OBJ,
	        data: EMPTY_OBJ,
	        props: EMPTY_OBJ,
	        attrs: EMPTY_OBJ,
	        slots: EMPTY_OBJ,
	        refs: EMPTY_OBJ,
	        setupState: EMPTY_OBJ,
	        setupContext: null,
	        // suspense related
	        suspense,
	        suspenseId: suspense ? suspense.pendingId : 0,
	        asyncDep: null,
	        asyncResolved: false,
	        // lifecycle hooks
	        // not using enums here because it results in computed properties
	        isMounted: false,
	        isUnmounted: false,
	        isDeactivated: false,
	        bc: null,
	        c: null,
	        bm: null,
	        m: null,
	        bu: null,
	        u: null,
	        um: null,
	        bum: null,
	        da: null,
	        a: null,
	        rtg: null,
	        rtc: null,
	        ec: null
	    };
	    {
	        instance.ctx = createRenderContext(instance);
	    }
	    instance.root = parent ? parent.root : instance;
	    instance.emit = emit.bind(null, instance);
	    {
	        devtoolsComponentAdded(instance);
	    }
	    return instance;
	}
	let currentInstance = null;
	const getCurrentInstance = () => currentInstance || currentRenderingInstance;
	const setCurrentInstance = (instance) => {
	    currentInstance = instance;
	};
	const isBuiltInTag = /*#__PURE__*/ makeMap('slot,component');
	function validateComponentName(name, config) {
	    const appIsNativeTag = config.isNativeTag || NO;
	    if (isBuiltInTag(name) || appIsNativeTag(name)) {
	        warn('Do not use built-in or reserved HTML elements as component id: ' + name);
	    }
	}
	let isInSSRComponentSetup = false;
	function setupComponent(instance, isSSR = false) {
	    isInSSRComponentSetup = isSSR;
	    const { props, children, shapeFlag } = instance.vnode;
	    const isStateful = shapeFlag & 4 /* STATEFUL_COMPONENT */;
	    initProps(instance, props, isStateful, isSSR);
	    initSlots(instance, children);
	    const setupResult = isStateful
	        ? setupStatefulComponent(instance, isSSR)
	        : undefined;
	    isInSSRComponentSetup = false;
	    return setupResult;
	}
	function setupStatefulComponent(instance, isSSR) {
	    const Component = instance.type;
	    {
	        if (Component.name) {
	            validateComponentName(Component.name, instance.appContext.config);
	        }
	        if (Component.components) {
	            const names = Object.keys(Component.components);
	            for (let i = 0; i < names.length; i++) {
	                validateComponentName(names[i], instance.appContext.config);
	            }
	        }
	        if (Component.directives) {
	            const names = Object.keys(Component.directives);
	            for (let i = 0; i < names.length; i++) {
	                validateDirectiveName(names[i]);
	            }
	        }
	    }
	    // 0. create render proxy property access cache
	    instance.accessCache = Object.create(null);
	    // 1. create public instance / render proxy
	    // also mark it raw so it's never observed
	    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	    {
	        exposePropsOnRenderContext(instance);
	    }
	    // 2. call setup()
	    const { setup } = Component;
	    if (setup) {
	        const setupContext = (instance.setupContext =
	            setup.length > 1 ? createSetupContext(instance) : null);
	        currentInstance = instance;
	        pauseTracking();
	        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [ shallowReadonly(instance.props) , setupContext]);
	        resetTracking();
	        currentInstance = null;
	        if (isPromise(setupResult)) {
	            if (isSSR) {
	                // return the promise so server-renderer can wait on it
	                return setupResult.then((resolvedResult) => {
	                    handleSetupResult(instance, resolvedResult);
	                });
	            }
	            else {
	                // async setup returned Promise.
	                // bail here and wait for re-entry.
	                instance.asyncDep = setupResult;
	            }
	        }
	        else {
	            handleSetupResult(instance, setupResult);
	        }
	    }
	    else {
	        finishComponentSetup(instance);
	    }
	}
	function handleSetupResult(instance, setupResult, isSSR) {
	    if (isFunction(setupResult)) {
	        // setup returned an inline render function
	        instance.render = setupResult;
	    }
	    else if (isObject(setupResult)) {
	        if ( isVNode(setupResult)) {
	            warn(`setup() should not return VNodes directly - ` +
	                `return a render function instead.`);
	        }
	        // setup returned bindings.
	        // assuming a render function compiled from template is present.
	        {
	            instance.devtoolsRawSetupState = setupResult;
	        }
	        instance.setupState = proxyRefs(setupResult);
	        {
	            exposeSetupStateOnRenderContext(instance);
	        }
	    }
	    else if ( setupResult !== undefined) {
	        warn(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
	    }
	    finishComponentSetup(instance);
	}
	function finishComponentSetup(instance, isSSR) {
	    const Component = instance.type;
	    // template / render function normalization
	    if (!instance.render) {
	        instance.render = (Component.render || NOOP);
	        // for runtime-compiled render functions using `with` blocks, the render
	        // proxy used needs a different `has` handler which is more performant and
	        // also only allows a whitelist of globals to fallthrough.
	        if (instance.render._rc) {
	            instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
	        }
	    }
	    // support for 2.x options
	    {
	        currentInstance = instance;
	        applyOptions(instance, Component);
	        currentInstance = null;
	    }
	    // warn missing template/render
	    if ( !Component.render && instance.render === NOOP) {
	        /* istanbul ignore if */
	        if ( Component.template) {
	            warn(`Component provided template option but ` +
	                `runtime compilation is not supported in this build of Vue.` +
	                (  ` Use "vue.esm-browser.js" instead.`
	                        ) /* should not happen */);
	        }
	        else {
	            warn(`Component is missing template or render function.`);
	        }
	    }
	}
	const attrHandlers = {
	    get: (target, key) => {
	        {
	            markAttrsAccessed();
	        }
	        return target[key];
	    },
	    set: () => {
	        warn(`setupContext.attrs is readonly.`);
	        return false;
	    },
	    deleteProperty: () => {
	        warn(`setupContext.attrs is readonly.`);
	        return false;
	    }
	};
	function createSetupContext(instance) {
	    {
	        // We use getters in dev in case libs like test-utils overwrite instance
	        // properties (overwrites should not be done in prod)
	        return Object.freeze({
	            get attrs() {
	                return new Proxy(instance.attrs, attrHandlers);
	            },
	            get slots() {
	                return shallowReadonly(instance.slots);
	            },
	            get emit() {
	                return (event, ...args) => instance.emit(event, ...args);
	            }
	        });
	    }
	}
	// record effects created during a component's setup() so that they can be
	// stopped when the component unmounts
	function recordInstanceBoundEffect(effect) {
	    if (currentInstance) {
	        (currentInstance.effects || (currentInstance.effects = [])).push(effect);
	    }
	}
	const classifyRE = /(?:^|[-_])(\w)/g;
	const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
	/* istanbul ignore next */
	function formatComponentName(instance, Component, isRoot = false) {
	    let name = isFunction(Component)
	        ? Component.displayName || Component.name
	        : Component.name;
	    if (!name && Component.__file) {
	        const match = Component.__file.match(/([^/\\]+)\.vue$/);
	        if (match) {
	            name = match[1];
	        }
	    }
	    if (!name && instance && instance.parent) {
	        // try to infer the name based on reverse resolution
	        const inferFromRegistry = (registry) => {
	            for (const key in registry) {
	                if (registry[key] === Component) {
	                    return key;
	                }
	            }
	        };
	        name =
	            inferFromRegistry(instance.components ||
	                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
	    }
	    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
	}
	function isClassComponent(value) {
	    return isFunction(value) && '__vccOpts' in value;
	}

	function computed$1(getterOrOptions) {
	    const c = computed(getterOrOptions);
	    recordInstanceBoundEffect(c.effect);
	    return c;
	}

	// implementation, close to no-op
	function defineComponent(options) {
	    return isFunction(options) ? { setup: options, name: options.name } : options;
	}

	// Actual implementation
	function h(type, propsOrChildren, children) {
	    const l = arguments.length;
	    if (l === 2) {
	        if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
	            // single vnode without props
	            if (isVNode(propsOrChildren)) {
	                return createVNode(type, null, [propsOrChildren]);
	            }
	            // props without children
	            return createVNode(type, propsOrChildren);
	        }
	        else {
	            // omit props
	            return createVNode(type, null, propsOrChildren);
	        }
	    }
	    else {
	        if (l > 3) {
	            children = Array.prototype.slice.call(arguments, 2);
	        }
	        else if (l === 3 && isVNode(children)) {
	            children = [children];
	        }
	        return createVNode(type, propsOrChildren, children);
	    }
	}

	function initCustomFormatter() {
	    const vueStyle = { style: 'color:#3ba776' };
	    const numberStyle = { style: 'color:#0b1bc9' };
	    const stringStyle = { style: 'color:#b62e24' };
	    const keywordStyle = { style: 'color:#9d288c' };
	    // custom formatter for Chrome
	    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
	    const formatter = {
	        header(obj) {
	            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
	            if (!isObject(obj)) {
	                return null;
	            }
	            if (obj.__isVue) {
	                return ['div', vueStyle, `VueInstance`];
	            }
	            else if (isRef(obj)) {
	                return [
	                    'div',
	                    {},
	                    ['span', vueStyle, genRefFlag(obj)],
	                    '<',
	                    formatValue(obj.value),
	                    `>`
	                ];
	            }
	            else if (isReactive(obj)) {
	                return [
	                    'div',
	                    {},
	                    ['span', vueStyle, 'Reactive'],
	                    '<',
	                    formatValue(obj),
	                    `>${isReadonly(obj) ? ` (readonly)` : ``}`
	                ];
	            }
	            else if (isReadonly(obj)) {
	                return [
	                    'div',
	                    {},
	                    ['span', vueStyle, 'Readonly'],
	                    '<',
	                    formatValue(obj),
	                    '>'
	                ];
	            }
	            return null;
	        },
	        hasBody(obj) {
	            return obj && obj.__isVue;
	        },
	        body(obj) {
	            if (obj && obj.__isVue) {
	                return [
	                    'div',
	                    {},
	                    ...formatInstance(obj.$)
	                ];
	            }
	        }
	    };
	    function formatInstance(instance) {
	        const blocks = [];
	        if (instance.type.props && instance.props) {
	            blocks.push(createInstanceBlock('props', toRaw(instance.props)));
	        }
	        if (instance.setupState !== EMPTY_OBJ) {
	            blocks.push(createInstanceBlock('setup', instance.setupState));
	        }
	        if (instance.data !== EMPTY_OBJ) {
	            blocks.push(createInstanceBlock('data', toRaw(instance.data)));
	        }
	        const computed = extractKeys(instance, 'computed');
	        if (computed) {
	            blocks.push(createInstanceBlock('computed', computed));
	        }
	        const injected = extractKeys(instance, 'inject');
	        if (injected) {
	            blocks.push(createInstanceBlock('injected', injected));
	        }
	        blocks.push([
	            'div',
	            {},
	            [
	                'span',
	                {
	                    style: keywordStyle.style + ';opacity:0.66'
	                },
	                '$ (internal): '
	            ],
	            ['object', { object: instance }]
	        ]);
	        return blocks;
	    }
	    function createInstanceBlock(type, target) {
	        target = extend({}, target);
	        if (!Object.keys(target).length) {
	            return ['span', {}];
	        }
	        return [
	            'div',
	            { style: 'line-height:1.25em;margin-bottom:0.6em' },
	            [
	                'div',
	                {
	                    style: 'color:#476582'
	                },
	                type
	            ],
	            [
	                'div',
	                {
	                    style: 'padding-left:1.25em'
	                },
	                ...Object.keys(target).map(key => {
	                    return [
	                        'div',
	                        {},
	                        ['span', keywordStyle, key + ': '],
	                        formatValue(target[key], false)
	                    ];
	                })
	            ]
	        ];
	    }
	    function formatValue(v, asRaw = true) {
	        if (typeof v === 'number') {
	            return ['span', numberStyle, v];
	        }
	        else if (typeof v === 'string') {
	            return ['span', stringStyle, JSON.stringify(v)];
	        }
	        else if (typeof v === 'boolean') {
	            return ['span', keywordStyle, v];
	        }
	        else if (isObject(v)) {
	            return ['object', { object: asRaw ? toRaw(v) : v }];
	        }
	        else {
	            return ['span', stringStyle, String(v)];
	        }
	    }
	    function extractKeys(instance, type) {
	        const Comp = instance.type;
	        if (isFunction(Comp)) {
	            return;
	        }
	        const extracted = {};
	        for (const key in instance.ctx) {
	            if (isKeyOfType(Comp, key, type)) {
	                extracted[key] = instance.ctx[key];
	            }
	        }
	        return extracted;
	    }
	    function isKeyOfType(Comp, key, type) {
	        const opts = Comp[type];
	        if ((isArray(opts) && opts.includes(key)) ||
	            (isObject(opts) && key in opts)) {
	            return true;
	        }
	        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
	            return true;
	        }
	        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
	            return true;
	        }
	    }
	    function genRefFlag(v) {
	        if (v._shallow) {
	            return `ShallowRef`;
	        }
	        if (v.effect) {
	            return `ComputedRef`;
	        }
	        return `Ref`;
	    }
	    /* eslint-disable no-restricted-globals */
	    if (window.devtoolsFormatters) {
	        window.devtoolsFormatters.push(formatter);
	    }
	    else {
	        window.devtoolsFormatters = [formatter];
	    }
	}

	/**
	 * Actual implementation
	 */
	function renderList(source, renderItem) {
	    let ret;
	    if (isArray(source) || isString(source)) {
	        ret = new Array(source.length);
	        for (let i = 0, l = source.length; i < l; i++) {
	            ret[i] = renderItem(source[i], i);
	        }
	    }
	    else if (typeof source === 'number') {
	        if ( !Number.isInteger(source)) {
	            warn(`The v-for range expect an integer value but got ${source}.`);
	            return [];
	        }
	        ret = new Array(source);
	        for (let i = 0; i < source; i++) {
	            ret[i] = renderItem(i + 1, i);
	        }
	    }
	    else if (isObject(source)) {
	        if (source[Symbol.iterator]) {
	            ret = Array.from(source, renderItem);
	        }
	        else {
	            const keys = Object.keys(source);
	            ret = new Array(keys.length);
	            for (let i = 0, l = keys.length; i < l; i++) {
	                const key = keys[i];
	                ret[i] = renderItem(source[key], key, i);
	            }
	        }
	    }
	    else {
	        ret = [];
	    }
	    return ret;
	}

	// Core API ------------------------------------------------------------------
	const version = "3.0.2";

	const svgNS = 'http://www.w3.org/2000/svg';
	const doc = (typeof document !== 'undefined' ? document : null);
	let tempContainer;
	let tempSVGContainer;
	const nodeOps = {
	    insert: (child, parent, anchor) => {
	        parent.insertBefore(child, anchor || null);
	    },
	    remove: child => {
	        const parent = child.parentNode;
	        if (parent) {
	            parent.removeChild(child);
	        }
	    },
	    createElement: (tag, isSVG, is) => isSVG
	        ? doc.createElementNS(svgNS, tag)
	        : doc.createElement(tag, is ? { is } : undefined),
	    createText: text => doc.createTextNode(text),
	    createComment: text => doc.createComment(text),
	    setText: (node, text) => {
	        node.nodeValue = text;
	    },
	    setElementText: (el, text) => {
	        el.textContent = text;
	    },
	    parentNode: node => node.parentNode,
	    nextSibling: node => node.nextSibling,
	    querySelector: selector => doc.querySelector(selector),
	    setScopeId(el, id) {
	        el.setAttribute(id, '');
	    },
	    cloneNode(el) {
	        return el.cloneNode(true);
	    },
	    // __UNSAFE__
	    // Reason: innerHTML.
	    // Static content here can only come from compiled templates.
	    // As long as the user only uses trusted templates, this is safe.
	    insertStaticContent(content, parent, anchor, isSVG) {
	        const temp = isSVG
	            ? tempSVGContainer ||
	                (tempSVGContainer = doc.createElementNS(svgNS, 'svg'))
	            : tempContainer || (tempContainer = doc.createElement('div'));
	        temp.innerHTML = content;
	        const first = temp.firstChild;
	        let node = first;
	        let last = node;
	        while (node) {
	            last = node;
	            nodeOps.insert(node, parent, anchor);
	            node = temp.firstChild;
	        }
	        return [first, last];
	    }
	};

	// compiler should normalize class + :class bindings on the same element
	// into a single binding ['staticClass', dynamic]
	function patchClass(el, value, isSVG) {
	    if (value == null) {
	        value = '';
	    }
	    if (isSVG) {
	        el.setAttribute('class', value);
	    }
	    else {
	        // directly setting className should be faster than setAttribute in theory
	        // if this is an element during a transition, take the temporary transition
	        // classes into account.
	        const transitionClasses = el._vtc;
	        if (transitionClasses) {
	            value = (value
	                ? [value, ...transitionClasses]
	                : [...transitionClasses]).join(' ');
	        }
	        el.className = value;
	    }
	}

	function patchStyle(el, prev, next) {
	    const style = el.style;
	    if (!next) {
	        el.removeAttribute('style');
	    }
	    else if (isString(next)) {
	        if (prev !== next) {
	            style.cssText = next;
	        }
	    }
	    else {
	        for (const key in next) {
	            setStyle(style, key, next[key]);
	        }
	        if (prev && !isString(prev)) {
	            for (const key in prev) {
	                if (next[key] == null) {
	                    setStyle(style, key, '');
	                }
	            }
	        }
	    }
	}
	const importantRE = /\s*!important$/;
	function setStyle(style, name, val) {
	    if (isArray(val)) {
	        val.forEach(v => setStyle(style, name, v));
	    }
	    else {
	        if (name.startsWith('--')) {
	            // custom property definition
	            style.setProperty(name, val);
	        }
	        else {
	            const prefixed = autoPrefix(style, name);
	            if (importantRE.test(val)) {
	                // !important
	                style.setProperty(hyphenate(prefixed), val.replace(importantRE, ''), 'important');
	            }
	            else {
	                style[prefixed] = val;
	            }
	        }
	    }
	}
	const prefixes = ['Webkit', 'Moz', 'ms'];
	const prefixCache = {};
	function autoPrefix(style, rawName) {
	    const cached = prefixCache[rawName];
	    if (cached) {
	        return cached;
	    }
	    let name = camelize(rawName);
	    if (name !== 'filter' && name in style) {
	        return (prefixCache[rawName] = name);
	    }
	    name = capitalize(name);
	    for (let i = 0; i < prefixes.length; i++) {
	        const prefixed = prefixes[i] + name;
	        if (prefixed in style) {
	            return (prefixCache[rawName] = prefixed);
	        }
	    }
	    return rawName;
	}

	const xlinkNS = 'http://www.w3.org/1999/xlink';
	function patchAttr(el, key, value, isSVG) {
	    if (isSVG && key.startsWith('xlink:')) {
	        if (value == null) {
	            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
	        }
	        else {
	            el.setAttributeNS(xlinkNS, key, value);
	        }
	    }
	    else {
	        // note we are only checking boolean attributes that don't have a
	        // corresponding dom prop of the same name here.
	        const isBoolean = isSpecialBooleanAttr(key);
	        if (value == null || (isBoolean && value === false)) {
	            el.removeAttribute(key);
	        }
	        else {
	            el.setAttribute(key, isBoolean ? '' : value);
	        }
	    }
	}

	// __UNSAFE__
	// functions. The user is responsible for using them with only trusted content.
	function patchDOMProp(el, key, value, 
	// the following args are passed only due to potential innerHTML/textContent
	// overriding existing VNodes, in which case the old tree must be properly
	// unmounted.
	prevChildren, parentComponent, parentSuspense, unmountChildren) {
	    if (key === 'innerHTML' || key === 'textContent') {
	        if (prevChildren) {
	            unmountChildren(prevChildren, parentComponent, parentSuspense);
	        }
	        el[key] = value == null ? '' : value;
	        return;
	    }
	    if (key === 'value' && el.tagName !== 'PROGRESS') {
	        // store value as _value as well since
	        // non-string values will be stringified.
	        el._value = value;
	        const newValue = value == null ? '' : value;
	        if (el.value !== newValue) {
	            el.value = newValue;
	        }
	        return;
	    }
	    if (value === '' && typeof el[key] === 'boolean') {
	        // e.g. <select multiple> compiles to { multiple: '' }
	        el[key] = true;
	    }
	    else if (value == null && typeof el[key] === 'string') {
	        // e.g. <div :id="null">
	        el[key] = '';
	        el.removeAttribute(key);
	    }
	    else {
	        // some properties perform value validation and throw
	        try {
	            el[key] = value;
	        }
	        catch (e) {
	            {
	                warn(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
	                    `value ${value} is invalid.`, e);
	            }
	        }
	    }
	}

	// Async edge case fix requires storing an event listener's attach timestamp.
	let _getNow = Date.now;
	// Determine what event timestamp the browser is using. Annoyingly, the
	// timestamp can either be hi-res (relative to page load) or low-res
	// (relative to UNIX epoch), so in order to compare time we have to use the
	// same timestamp type when saving the flush timestamp.
	if (typeof document !== 'undefined' &&
	    _getNow() > document.createEvent('Event').timeStamp) {
	    // if the low-res timestamp which is bigger than the event timestamp
	    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
	    // and we need to use the hi-res version for event listeners as well.
	    _getNow = () => performance.now();
	}
	// To avoid the overhead of repeatedly calling performance.now(), we cache
	// and use the same timestamp for all event listeners attached in the same tick.
	let cachedNow = 0;
	const p = Promise.resolve();
	const reset = () => {
	    cachedNow = 0;
	};
	const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
	function addEventListener(el, event, handler, options) {
	    el.addEventListener(event, handler, options);
	}
	function removeEventListener(el, event, handler, options) {
	    el.removeEventListener(event, handler, options);
	}
	function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	    // vei = vue event invokers
	    const invokers = el._vei || (el._vei = {});
	    const existingInvoker = invokers[rawName];
	    if (nextValue && existingInvoker) {
	        // patch
	        existingInvoker.value = nextValue;
	    }
	    else {
	        const [name, options] = parseName(rawName);
	        if (nextValue) {
	            // add
	            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
	            addEventListener(el, name, invoker, options);
	        }
	        else if (existingInvoker) {
	            // remove
	            removeEventListener(el, name, existingInvoker, options);
	            invokers[rawName] = undefined;
	        }
	    }
	}
	const optionsModifierRE = /(?:Once|Passive|Capture)$/;
	function parseName(name) {
	    let options;
	    if (optionsModifierRE.test(name)) {
	        options = {};
	        let m;
	        while ((m = name.match(optionsModifierRE))) {
	            name = name.slice(0, name.length - m[0].length);
	            options[m[0].toLowerCase()] = true;
	        }
	    }
	    return [name.slice(2).toLowerCase(), options];
	}
	function createInvoker(initialValue, instance) {
	    const invoker = (e) => {
	        // async edge case #6566: inner click event triggers patch, event handler
	        // attached to outer element during patch, and triggered again. This
	        // happens because browsers fire microtask ticks between event propagation.
	        // the solution is simple: we save the timestamp when a handler is attached,
	        // and the handler would only fire if the event passed to it was fired
	        // AFTER it was attached.
	        const timeStamp = e.timeStamp || _getNow();
	        if (timeStamp >= invoker.attached - 1) {
	            callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
	        }
	    };
	    invoker.value = initialValue;
	    invoker.attached = getNow();
	    return invoker;
	}
	function patchStopImmediatePropagation(e, value) {
	    if (isArray(value)) {
	        const originalStop = e.stopImmediatePropagation;
	        e.stopImmediatePropagation = () => {
	            originalStop.call(e);
	            e._stopped = true;
	        };
	        return value.map(fn => (e) => !e._stopped && fn(e));
	    }
	    else {
	        return value;
	    }
	}

	const nativeOnRE = /^on[a-z]/;
	const forcePatchProp = (_, key) => key === 'value';
	const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
	    switch (key) {
	        // special
	        case 'class':
	            patchClass(el, nextValue, isSVG);
	            break;
	        case 'style':
	            patchStyle(el, prevValue, nextValue);
	            break;
	        default:
	            if (isOn(key)) {
	                // ignore v-model listeners
	                if (!isModelListener(key)) {
	                    patchEvent(el, key, prevValue, nextValue, parentComponent);
	                }
	            }
	            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
	                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
	            }
	            else {
	                // special case for <input v-model type="checkbox"> with
	                // :true-value & :false-value
	                // store value as dom properties since non-string values will be
	                // stringified.
	                if (key === 'true-value') {
	                    el._trueValue = nextValue;
	                }
	                else if (key === 'false-value') {
	                    el._falseValue = nextValue;
	                }
	                patchAttr(el, key, nextValue, isSVG);
	            }
	            break;
	    }
	};
	function shouldSetAsProp(el, key, value, isSVG) {
	    if (isSVG) {
	        // most keys must be set as attribute on svg elements to work
	        // ...except innerHTML
	        if (key === 'innerHTML') {
	            return true;
	        }
	        // or native onclick with function values
	        if (key in el && nativeOnRE.test(key) && isFunction(value)) {
	            return true;
	        }
	        return false;
	    }
	    // spellcheck and draggable are numerated attrs, however their
	    // corresponding DOM properties are actually booleans - this leads to
	    // setting it with a string "false" value leading it to be coerced to
	    // `true`, so we need to always treat them as attributes.
	    // Note that `contentEditable` doesn't have this problem: its DOM
	    // property is also enumerated string values.
	    if (key === 'spellcheck' || key === 'draggable') {
	        return false;
	    }
	    // #1787 form as an attribute must be a string, while it accepts an Element as
	    // a prop
	    if (key === 'form' && typeof value === 'string') {
	        return false;
	    }
	    // #1526 <input list> must be set as attribute
	    if (key === 'list' && el.tagName === 'INPUT') {
	        return false;
	    }
	    // native onclick with string value, must be set as attribute
	    if (nativeOnRE.test(key) && isString(value)) {
	        return false;
	    }
	    return key in el;
	}

	const rendererOptions = extend({ patchProp, forcePatchProp }, nodeOps);
	// lazy create the renderer - this makes core renderer logic tree-shakable
	// in case the user only imports reactivity utilities from Vue.
	let renderer;
	function ensureRenderer() {
	    return renderer || (renderer = createRenderer(rendererOptions));
	}
	const createApp = ((...args) => {
	    const app = ensureRenderer().createApp(...args);
	    {
	        injectNativeTagCheck(app);
	    }
	    const { mount } = app;
	    app.mount = (containerOrSelector) => {
	        const container = normalizeContainer(containerOrSelector);
	        if (!container)
	            return;
	        const component = app._component;
	        if (!isFunction(component) && !component.render && !component.template) {
	            component.template = container.innerHTML;
	        }
	        // clear content before mounting
	        container.innerHTML = '';
	        const proxy = mount(container);
	        container.removeAttribute('v-cloak');
	        container.setAttribute('data-v-app', '');
	        return proxy;
	    };
	    return app;
	});
	function injectNativeTagCheck(app) {
	    // Inject `isNativeTag`
	    // this is used for component name validation (dev only)
	    Object.defineProperty(app.config, 'isNativeTag', {
	        value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
	        writable: false
	    });
	}
	function normalizeContainer(container) {
	    if (isString(container)) {
	        const res = document.querySelector(container);
	        if ( !res) {
	            warn(`Failed to mount app: mount target selector returned null.`);
	        }
	        return res;
	    }
	    return container;
	}

	function initDev() {
	    const target = getGlobalThis();
	    target.__VUE__ = true;
	    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
	    {
	        console.info(`You are running a development build of Vue.\n` +
	            `Make sure to use the production build (*.prod.js) when deploying for production.`);
	        initCustomFormatter();
	    }
	}

	// This entry exports the runtime only, and is built as
	 initDev();

	var script = {

	  };

	const _hoisted_1 = { class: "rs-header bg-info-1 py-4 sh-2 mb-9 pos-sti pos-cover-0 pos-b-0 z-10" };
	const _hoisted_2 = { class: "container mx-a px-4 px-6:lg" };
	const _hoisted_3 = { class: "d-f ai-c jc-sb" };
	const _hoisted_4 = {
	  class: "txt-dark",
	  href: "https://github.com/moodrets/rest-css-framework"
	};

	function render(_ctx, _cache, $props, $setup, $data, $options) {
	  const _component_svg_icon = resolveComponent("svg-icon");
	  const _component_router_link = resolveComponent("router-link");

	  return (openBlock(), createBlock("header", _hoisted_1, [
	    createVNode("div", _hoisted_2, [
	      createVNode("div", _hoisted_3, [
	        createVNode(_component_router_link, {
	          to: "/",
	          class: "txt-dark"
	        }, {
	          default: withCtx(() => [
	            createVNode(_component_svg_icon, {
	              name: "rs-logo",
	              "add-class": "sz-5"
	            })
	          ]),
	          _: 1
	        }),
	        createVNode("a", _hoisted_4, [
	          createVNode(_component_svg_icon, {
	            name: "rs-github",
	            "add-class": "sz-5"
	          })
	        ])
	      ])
	    ])
	  ]))
	}

	script.render = render;
	script.__file = "src/js/components/Header.vue";

	/*!
	  * vue-router v4.0.0-rc.1
	  * (c) 2020 Eduardo San Martin Morote
	  * @license MIT
	  */

	const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	const PolySymbol = (name) => 
	// vr = vue router
	hasSymbol
	    ? Symbol( '[vue-router]: ' + name )
	    : ( '[vue-router]: ' ) + name;
	// rvlm = Router View Location Matched
	const matchedRouteKey = /*#__PURE__*/ PolySymbol( 'router view location matched' );
	// rvd = Router View Depth
	const viewDepthKey = /*#__PURE__*/ PolySymbol( 'router view depth' );
	// r = router
	const routerKey = /*#__PURE__*/ PolySymbol( 'router' );
	// rt = route location
	const routeLocationKey = /*#__PURE__*/ PolySymbol( 'route location' );

	const isBrowser = typeof window !== 'undefined';

	function isESModule(obj) {
	    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
	}
	const assign = Object.assign;
	function applyToParams(fn, params) {
	    const newParams = {};
	    for (const key in params) {
	        const value = params[key];
	        newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
	    }
	    return newParams;
	}
	let noop = () => { };

	function warn$1(msg) {
	    // avoid using ...args as it breaks in older Edge builds
	    const args = Array.from(arguments).slice(1);
	    console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
	}

	const TRAILING_SLASH_RE = /\/$/;
	const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
	/**
	 * Transforms an URI into a normalized history location
	 *
	 * @param parseQuery
	 * @param location - URI to normalize
	 * @param currentLocation - current absolute location. Allows resolving relative
	 * paths. Must start with `/`. Defaults to `/`
	 * @returns a normalized history location
	 */
	function parseURL(parseQuery, location, currentLocation = '/') {
	    let path, query = {}, searchString = '', hash = '';
	    // Could use URL and URLSearchParams but IE 11 doesn't support it
	    const searchPos = location.indexOf('?');
	    const hashPos = location.indexOf('#', searchPos > -1 ? searchPos : 0);
	    if (searchPos > -1) {
	        path = location.slice(0, searchPos);
	        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
	        query = parseQuery(searchString);
	    }
	    if (hashPos > -1) {
	        path = path || location.slice(0, hashPos);
	        // keep the # character
	        hash = location.slice(hashPos, location.length);
	    }
	    // no search and no query
	    path = resolveRelativePath(path != null ? path : location, currentLocation);
	    // empty path means a relative query or hash `?foo=f`, `#thing`
	    return {
	        fullPath: path + (searchString && '?') + searchString + hash,
	        path,
	        query,
	        hash,
	    };
	}
	/**
	 * Stringifies a URL object
	 *
	 * @param stringifyQuery
	 * @param location
	 */
	function stringifyURL(stringifyQuery, location) {
	    let query = location.query ? stringifyQuery(location.query) : '';
	    return location.path + (query && '?') + query + (location.hash || '');
	}
	/**
	 * Strips off the base from the beginning of a location.pathname in a non
	 * case-sensitive way.
	 *
	 * @param pathname - location.pathname
	 * @param base - base to strip off
	 */
	function stripBase(pathname, base) {
	    // no base or base is not found at the beginning
	    if (!base || pathname.toLowerCase().indexOf(base.toLowerCase()))
	        return pathname;
	    return pathname.slice(base.length) || '/';
	}
	/**
	 * Checks if two RouteLocation are equal. This means that both locations are
	 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
	 * parameters and `hash` are the same
	 *
	 * @param a - first {@link RouteLocation}
	 * @param b - second {@link RouteLocation}
	 */
	function isSameRouteLocation(stringifyQuery, a, b) {
	    let aLastIndex = a.matched.length - 1;
	    let bLastIndex = b.matched.length - 1;
	    return (aLastIndex > -1 &&
	        aLastIndex === bLastIndex &&
	        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
	        isSameRouteLocationParams(a.params, b.params) &&
	        stringifyQuery(a.query) === stringifyQuery(b.query) &&
	        a.hash === b.hash);
	}
	/**
	 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
	 * considered equal to the `RouteRecord` they are aliasing.
	 *
	 * @param a - first {@link RouteRecord}
	 * @param b - second {@link RouteRecord}
	 */
	function isSameRouteRecord(a, b) {
	    // since the original record has an undefined value for aliasOf
	    // but all aliases point to the original record, this will always compare
	    // the original record
	    return (a.aliasOf || a) === (b.aliasOf || b);
	}
	function isSameRouteLocationParams(a, b) {
	    if (Object.keys(a).length !== Object.keys(b).length)
	        return false;
	    for (let key in a) {
	        if (!isSameRouteLocationParamsValue(a[key], b[key]))
	            return false;
	    }
	    return true;
	}
	function isSameRouteLocationParamsValue(a, b) {
	    return Array.isArray(a)
	        ? isEquivalentArray(a, b)
	        : Array.isArray(b)
	            ? isEquivalentArray(b, a)
	            : a === b;
	}
	/**
	 * Check if two arrays are the same or if an array with one single entry is the
	 * same as another primitive value. Used to check query and parameters
	 *
	 * @param a - array of values
	 * @param b - array of values or a single value
	 */
	function isEquivalentArray(a, b) {
	    return Array.isArray(b)
	        ? a.length === b.length && a.every((value, i) => value === b[i])
	        : a.length === 1 && a[0] === b;
	}
	/**
	 * Resolves a relative path that starts with `.`.
	 *
	 * @param to - path location we are resolving
	 * @param from - currentLocation.path, should start with `/`
	 */
	function resolveRelativePath(to, from) {
	    if (to.startsWith('/'))
	        return to;
	    if ( !from.startsWith('/')) {
	        warn$1(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
	        return to;
	    }
	    if (!to)
	        return from;
	    const fromSegments = from.split('/');
	    const toSegments = to.split('/');
	    let position = fromSegments.length - 1;
	    let toPosition;
	    let segment;
	    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
	        segment = toSegments[toPosition];
	        // can't go below zero
	        if (position === 1 || segment === '.')
	            continue;
	        if (segment === '..')
	            position--;
	        // found something that is not relative path
	        else
	            break;
	    }
	    return (fromSegments.slice(0, position).join('/') +
	        '/' +
	        toSegments
	            .slice(toPosition - (toPosition === toSegments.length ? 1 : 0))
	            .join('/'));
	}

	var NavigationType;
	(function (NavigationType) {
	    NavigationType["pop"] = "pop";
	    NavigationType["push"] = "push";
	})(NavigationType || (NavigationType = {}));
	var NavigationDirection;
	(function (NavigationDirection) {
	    NavigationDirection["back"] = "back";
	    NavigationDirection["forward"] = "forward";
	    NavigationDirection["unknown"] = "";
	})(NavigationDirection || (NavigationDirection = {}));
	// Generic utils
	/**
	 * Normalizes a base by removing any trailing slash and reading the base tag if
	 * present.
	 *
	 * @param base - base to normalize
	 */
	function normalizeBase(base) {
	    if (!base) {
	        if (isBrowser) {
	            // respect <base> tag
	            const baseEl = document.querySelector('base');
	            base = (baseEl && baseEl.getAttribute('href')) || '/';
	            // strip full URL origin
	            base = base.replace(/^\w+:\/\/[^\/]+/, '');
	        }
	        else {
	            base = '/';
	        }
	    }
	    // ensure leading slash when it was removed by the regex above avoid leading
	    // slash with hash because the file could be read from the disk like file://
	    // and the leading slash would cause problems
	    if (base[0] !== '/' && base[0] !== '#')
	        base = '/' + base;
	    // remove the trailing slash so all other method can just do `base + fullPath`
	    // to build an href
	    return removeTrailingSlash(base);
	}
	// remove any character before the hash
	const BEFORE_HASH_RE = /^[^#]+#/;
	function createHref(base, location) {
	    return base.replace(BEFORE_HASH_RE, '#') + location;
	}

	function getElementPosition(el, offset) {
	    const docRect = document.documentElement.getBoundingClientRect();
	    const elRect = el.getBoundingClientRect();
	    return {
	        behavior: offset.behavior,
	        left: elRect.left - docRect.left - (offset.left || 0),
	        top: elRect.top - docRect.top - (offset.top || 0),
	    };
	}
	const computeScrollPosition = () => ({
	    left: window.pageXOffset,
	    top: window.pageYOffset,
	});
	function scrollToPosition(position) {
	    let scrollToOptions;
	    if ('el' in position) {
	        let positionEl = position.el;
	        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
	        /**
	         * `id`s can accept pretty much any characters, including CSS combinators
	         * like `>` or `~`. It's still possible to retrieve elements using
	         * `document.getElementById('~')` but it needs to be escaped when using
	         * `document.querySelector('#\\~')` for it to be valid. The only
	         * requirements for `id`s are them to be unique on the page and to not be
	         * empty (`id=""`). Because of that, when passing an id selector, it should
	         * be properly escaped for it to work with `querySelector`. We could check
	         * for the id selector to be simple (no CSS combinators `+ >~`) but that
	         * would make things inconsistent since they are valid characters for an
	         * `id` but would need to be escaped when using `querySelector`, breaking
	         * their usage and ending up in no selector returned. Selectors need to be
	         * escaped:
	         *
	         * - `#1-thing` becomes `#\31 -thing`
	         * - `#with~symbols` becomes `#with\\~symbols`
	         *
	         * - More information about  the topic can be found at
	         *   https://mathiasbynens.be/notes/html5-id-class.
	         * - Practical example: https://mathiasbynens.be/demo/html5-id
	         */
	        if ( typeof position.el === 'string') {
	            if (!isIdSelector || !document.getElementById(position.el.slice(1))) {
	                try {
	                    let foundEl = document.querySelector(position.el);
	                    if (isIdSelector && foundEl) {
	                        warn$1(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
	                        // return to avoid other warnings
	                        return;
	                    }
	                }
	                catch (err) {
	                    warn$1(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
	                    // return to avoid other warnings
	                    return;
	                }
	            }
	        }
	        const el = typeof positionEl === 'string'
	            ? isIdSelector
	                ? document.getElementById(positionEl.slice(1))
	                : document.querySelector(positionEl)
	            : positionEl;
	        if (!el) {
	            
	                warn$1(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
	            return;
	        }
	        scrollToOptions = getElementPosition(el, position);
	    }
	    else {
	        scrollToOptions = position;
	    }
	    if ('scrollBehavior' in document.documentElement.style)
	        window.scrollTo(scrollToOptions);
	    else {
	        window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
	    }
	}
	function getScrollKey(path, delta) {
	    const position = history.state ? history.state.position - delta : -1;
	    return position + path;
	}
	const scrollPositions = new Map();
	function saveScrollPosition(key, scrollPosition) {
	    scrollPositions.set(key, scrollPosition);
	}
	function getSavedScrollPosition(key) {
	    const scroll = scrollPositions.get(key);
	    // consume it so it's not used again
	    scrollPositions.delete(key);
	    return scroll;
	}
	// TODO: RFC about how to save scroll position
	/**
	 * ScrollBehavior instance used by the router to compute and restore the scroll
	 * position when navigating.
	 */
	// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
	//   // returns a scroll position that can be saved in history
	//   compute(): ScrollPositionEntry
	//   // can take an extended ScrollPositionEntry
	//   scroll(position: ScrollPosition): void
	// }
	// export const scrollHandler: ScrollHandler<ScrollPosition> = {
	//   compute: computeScroll,
	//   scroll: scrollToPosition,
	// }

	let createBaseLocation = () => location.protocol + '//' + location.host;
	/**
	 * Creates a normalized history location from a window.location object
	 * @param location -
	 */
	function createCurrentLocation(base, location) {
	    const { pathname, search, hash } = location;
	    // allows hash based url
	    const hashPos = base.indexOf('#');
	    if (hashPos > -1) {
	        // prepend the starting slash to hash so the url starts with /#
	        let pathFromHash = hash.slice(1);
	        if (pathFromHash[0] !== '/')
	            pathFromHash = '/' + pathFromHash;
	        return stripBase(pathFromHash, '');
	    }
	    const path = stripBase(pathname, base);
	    return path + search + hash;
	}
	function useHistoryListeners(base, historyState, currentLocation, replace) {
	    let listeners = [];
	    let teardowns = [];
	    // TODO: should it be a stack? a Dict. Check if the popstate listener
	    // can trigger twice
	    let pauseState = null;
	    const popStateHandler = ({ state, }) => {
	        const to = createCurrentLocation(base, location);
	        const from = currentLocation.value;
	        const fromState = historyState.value;
	        let delta = 0;
	        if (state) {
	            currentLocation.value = to;
	            historyState.value = state;
	            // ignore the popstate and reset the pauseState
	            if (pauseState && pauseState === from) {
	                pauseState = null;
	                return;
	            }
	            delta = fromState ? state.position - fromState.position : 0;
	        }
	        else {
	            replace(to);
	        }
	        // console.log({ deltaFromCurrent })
	        // Here we could also revert the navigation by calling history.go(-delta)
	        // this listener will have to be adapted to not trigger again and to wait for the url
	        // to be updated before triggering the listeners. Some kind of validation function would also
	        // need to be passed to the listeners so the navigation can be accepted
	        // call all listeners
	        listeners.forEach(listener => {
	            listener(currentLocation.value, from, {
	                delta,
	                type: NavigationType.pop,
	                direction: delta
	                    ? delta > 0
	                        ? NavigationDirection.forward
	                        : NavigationDirection.back
	                    : NavigationDirection.unknown,
	            });
	        });
	    };
	    function pauseListeners() {
	        pauseState = currentLocation.value;
	    }
	    function listen(callback) {
	        // setup the listener and prepare teardown callbacks
	        listeners.push(callback);
	        const teardown = () => {
	            const index = listeners.indexOf(callback);
	            if (index > -1)
	                listeners.splice(index, 1);
	        };
	        teardowns.push(teardown);
	        return teardown;
	    }
	    function beforeUnloadListener() {
	        const { history } = window;
	        if (!history.state)
	            return;
	        history.replaceState(assign({}, history.state, { scroll: computeScrollPosition() }), '');
	    }
	    function destroy() {
	        for (const teardown of teardowns)
	            teardown();
	        teardowns = [];
	        window.removeEventListener('popstate', popStateHandler);
	        window.removeEventListener('beforeunload', beforeUnloadListener);
	    }
	    // setup the listeners and prepare teardown callbacks
	    window.addEventListener('popstate', popStateHandler);
	    window.addEventListener('beforeunload', beforeUnloadListener);
	    return {
	        pauseListeners,
	        listen,
	        destroy,
	    };
	}
	/**
	 * Creates a state object
	 */
	function buildState(back, current, forward, replaced = false, computeScroll = false) {
	    return {
	        back,
	        current,
	        forward,
	        replaced,
	        position: window.history.length,
	        scroll: computeScroll ? computeScrollPosition() : null,
	    };
	}
	function useHistoryStateNavigation(base) {
	    const { history, location } = window;
	    // private variables
	    let currentLocation = {
	        value: createCurrentLocation(base, location),
	    };
	    let historyState = { value: history.state };
	    // build current history entry as this is a fresh navigation
	    if (!historyState.value) {
	        changeLocation(currentLocation.value, {
	            back: null,
	            current: currentLocation.value,
	            forward: null,
	            // the length is off by one, we need to decrease it
	            position: history.length - 1,
	            replaced: true,
	            // don't add a scroll as the user may have an anchor and we want
	            // scrollBehavior to be triggered without a saved position
	            scroll: null,
	        }, true);
	    }
	    function changeLocation(to, state, replace) {
	        // when the base has a `#`, only use that for the URL
	        const hashIndex = base.indexOf('#');
	        const url = hashIndex > -1
	            ? base.slice(hashIndex) + to
	            : createBaseLocation() + base + to;
	        try {
	            // BROWSER QUIRK
	            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
	            history[replace ? 'replaceState' : 'pushState'](state, '', url);
	            historyState.value = state;
	        }
	        catch (err) {
	            {
	                warn$1('Error with push/replace State', err);
	            }
	            // Force the navigation, this also resets the call count
	            location[replace ? 'replace' : 'assign'](url);
	        }
	    }
	    function replace(to, data) {
	        const state = assign({}, history.state, buildState(historyState.value.back, 
	        // keep back and forward entries but override current position
	        to, historyState.value.forward, true), data, { position: historyState.value.position });
	        changeLocation(to, state, true);
	        currentLocation.value = to;
	    }
	    function push(to, data) {
	        // Add to current entry the information of where we are going
	        // as well as saving the current position
	        const currentState = assign({}, 
	        // use current history state to gracefully handle a wrong call to
	        // history.replaceState
	        // https://github.com/vuejs/vue-router-next/issues/366
	        historyState.value, history.state, {
	            forward: to,
	            scroll: computeScrollPosition(),
	        });
	        if ( !history.state) {
	            warn$1(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n` +
	                `history.replaceState(history.state, '', url)\n\n` +
	                `You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
	        }
	        changeLocation(currentState.current, currentState, true);
	        const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
	        changeLocation(to, state, false);
	        currentLocation.value = to;
	    }
	    return {
	        location: currentLocation,
	        state: historyState,
	        push,
	        replace,
	    };
	}
	/**
	 * Creates an HTML5 history. Most common history for single page applications.
	 *
	 * @param base -
	 */
	function createWebHistory(base) {
	    base = normalizeBase(base);
	    const historyNavigation = useHistoryStateNavigation(base);
	    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	    function go(delta, triggerListeners = true) {
	        if (!triggerListeners)
	            historyListeners.pauseListeners();
	        history.go(delta);
	    }
	    const routerHistory = assign({
	        // it's overridden right after
	        location: '',
	        base,
	        go,
	        createHref: createHref.bind(null, base),
	    }, historyNavigation, historyListeners);
	    Object.defineProperty(routerHistory, 'location', {
	        get: () => historyNavigation.location.value,
	    });
	    Object.defineProperty(routerHistory, 'state', {
	        get: () => historyNavigation.state.value,
	    });
	    return routerHistory;
	}

	function isRouteLocation(route) {
	    return typeof route === 'string' || (route && typeof route === 'object');
	}
	function isRouteName(name) {
	    return typeof name === 'string' || typeof name === 'symbol';
	}

	/**
	 * Initial route location where the router is. Can be used in navigation guards
	 * to differentiate the initial navigation.
	 *
	 * @example
	 * ```js
	 * import { START_LOCATION } from 'vue-router'
	 *
	 * router.beforeEach((to, from) => {
	 *   if (from === START_LOCATION) {
	 *     // initial navigation
	 *   }
	 * })
	 * ```
	 */
	const START_LOCATION_NORMALIZED = {
	    path: '/',
	    name: undefined,
	    params: {},
	    query: {},
	    hash: '',
	    fullPath: '/',
	    matched: [],
	    meta: {},
	    redirectedFrom: undefined,
	};

	const NavigationFailureSymbol = /*#__PURE__*/ PolySymbol( 'navigation failure' );
	/**
	 * Enumeration with all possible types for navigation failures. Can be passed to
	 * {@link isNavigationFailure} to check for specific failures.
	 */
	var NavigationFailureType;
	(function (NavigationFailureType) {
	    /**
	     * An aborted navigation is a navigation that failed because a navigation
	     * guard returned `false` or called `next(false)`
	     */
	    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
	    /**
	     * A cancelled navigation is a navigation that failed because a more recent
	     * navigation finished started (not necessarily finished).
	     */
	    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
	    /**
	     * A duplicated navigation is a navigation that failed because it was
	     * initiated while already being at the exact same location.
	     */
	    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
	})(NavigationFailureType || (NavigationFailureType = {}));
	// DEV only debug messages
	const ErrorTypeMessages = {
	    [1 /* MATCHER_NOT_FOUND */]({ location, currentLocation }) {
	        return `No match for\n ${JSON.stringify(location)}${currentLocation
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
	    },
	    [2 /* NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
	        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
	    },
	    [4 /* NAVIGATION_ABORTED */]({ from, to }) {
	        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
	    },
	    [8 /* NAVIGATION_CANCELLED */]({ from, to }) {
	        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
	    },
	    [16 /* NAVIGATION_DUPLICATED */]({ from, to }) {
	        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
	    },
	};
	function createRouterError(type, params) {
	    {
	        return assign(new Error(ErrorTypeMessages[type](params)), {
	            type,
	            [NavigationFailureSymbol]: true,
	        }, params);
	    }
	}
	function isNavigationFailure(error, type) {
	    return (error instanceof Error &&
	        NavigationFailureSymbol in error &&
	        (type == null || !!(error.type & type)));
	}
	const propertiesToLog = ['params', 'query', 'hash'];
	function stringifyRoute(to) {
	    if (typeof to === 'string')
	        return to;
	    if ('path' in to)
	        return to.path;
	    const location = {};
	    for (const key of propertiesToLog) {
	        if (key in to)
	            location[key] = to[key];
	    }
	    return JSON.stringify(location, null, 2);
	}

	// default pattern for a param: non greedy everything but /
	const BASE_PARAM_PATTERN = '[^/]+?';
	const BASE_PATH_PARSER_OPTIONS = {
	    sensitive: false,
	    strict: false,
	    start: true,
	    end: true,
	};
	// Special Regex characters that must be escaped in static tokens
	const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
	/**
	 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
	 *
	 * @param segments - array of segments returned by tokenizePath
	 * @param extraOptions - optional options for the regexp
	 * @returns a PathParser
	 */
	function tokensToParser(segments, extraOptions) {
	    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	    // the amount of scores is the same as the length of segments except for the root segment "/"
	    let score = [];
	    // the regexp as a string
	    let pattern = options.start ? '^' : '';
	    // extracted keys
	    const keys = [];
	    for (const segment of segments) {
	        // the root segment needs special treatment
	        const segmentScores = segment.length ? [] : [90 /* Root */];
	        // allow trailing slash
	        if (options.strict && !segment.length)
	            pattern += '/';
	        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
	            const token = segment[tokenIndex];
	            // resets the score if we are inside a sub segment /:a-other-:b
	            let subSegmentScore = 40 /* Segment */ +
	                (options.sensitive ? 0.25 /* BonusCaseSensitive */ : 0);
	            if (token.type === 0 /* Static */) {
	                // prepend the slash if we are starting a new segment
	                if (!tokenIndex)
	                    pattern += '/';
	                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
	                subSegmentScore += 40 /* Static */;
	            }
	            else if (token.type === 1 /* Param */) {
	                const { value, repeatable, optional, regexp } = token;
	                keys.push({
	                    name: value,
	                    repeatable,
	                    optional,
	                });
	                const re = regexp ? regexp : BASE_PARAM_PATTERN;
	                // the user provided a custom regexp /:id(\\d+)
	                if (re !== BASE_PARAM_PATTERN) {
	                    subSegmentScore += 10 /* BonusCustomRegExp */;
	                    // make sure the regexp is valid before using it
	                    try {
	                        new RegExp(`(${re})`);
	                    }
	                    catch (err) {
	                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
	                            err.message);
	                    }
	                }
	                // when we repeat we must take care of the repeating leading slash
	                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
	                // prepend the slash if we are starting a new segment
	                if (!tokenIndex)
	                    subPattern = optional ? `(?:/${subPattern})` : '/' + subPattern;
	                if (optional)
	                    subPattern += '?';
	                pattern += subPattern;
	                subSegmentScore += 20 /* Dynamic */;
	                if (optional)
	                    subSegmentScore += -8 /* BonusOptional */;
	                if (repeatable)
	                    subSegmentScore += -20 /* BonusRepeatable */;
	                if (re === '.*')
	                    subSegmentScore += -50 /* BonusWildcard */;
	            }
	            segmentScores.push(subSegmentScore);
	        }
	        // an empty array like /home/ -> [[{home}], []]
	        // if (!segment.length) pattern += '/'
	        score.push(segmentScores);
	    }
	    // only apply the strict bonus to the last score
	    if (options.strict && options.end) {
	        const i = score.length - 1;
	        score[i][score[i].length - 1] += 0.7000000000000001 /* BonusStrict */;
	    }
	    // TODO: dev only warn double trailing slash
	    if (!options.strict)
	        pattern += '/?';
	    if (options.end)
	        pattern += '$';
	    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
	    else if (options.strict)
	        pattern += '(?:/|$)';
	    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
	    function parse(path) {
	        const match = path.match(re);
	        const params = {};
	        if (!match)
	            return null;
	        for (let i = 1; i < match.length; i++) {
	            const value = match[i] || '';
	            const key = keys[i - 1];
	            params[key.name] = value && key.repeatable ? value.split('/') : value;
	        }
	        return params;
	    }
	    function stringify(params) {
	        let path = '';
	        // for optional parameters to allow to be empty
	        let avoidDuplicatedSlash = false;
	        for (const segment of segments) {
	            if (!avoidDuplicatedSlash || !path.endsWith('/'))
	                path += '/';
	            avoidDuplicatedSlash = false;
	            for (const token of segment) {
	                if (token.type === 0 /* Static */) {
	                    path += token.value;
	                }
	                else if (token.type === 1 /* Param */) {
	                    const { value, repeatable, optional } = token;
	                    const param = value in params ? params[value] : '';
	                    if (Array.isArray(param) && !repeatable)
	                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
	                    const text = Array.isArray(param) ? param.join('/') : param;
	                    if (!text) {
	                        if (optional) {
	                            // remove the last slash as we could be at the end
	                            if (path.endsWith('/'))
	                                path = path.slice(0, -1);
	                            // do not append a slash on the next iteration
	                            else
	                                avoidDuplicatedSlash = true;
	                        }
	                        else
	                            throw new Error(`Missing required param "${value}"`);
	                    }
	                    path += text;
	                }
	            }
	        }
	        return path;
	    }
	    return {
	        re,
	        score,
	        keys,
	        parse,
	        stringify,
	    };
	}
	/**
	 * Compares an array of numbers as used in PathParser.score and returns a
	 * number. This function can be used to `sort` an array
	 * @param a - first array of numbers
	 * @param b - second array of numbers
	 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
	 * should be sorted first
	 */
	function compareScoreArray(a, b) {
	    let i = 0;
	    while (i < a.length && i < b.length) {
	        const diff = b[i] - a[i];
	        // only keep going if diff === 0
	        if (diff)
	            return diff;
	        i++;
	    }
	    // if the last subsegment was Static, the shorter segments should be sorted first
	    // otherwise sort the longest segment first
	    if (a.length < b.length) {
	        return a.length === 1 && a[0] === 40 /* Static */ + 40 /* Segment */
	            ? -1
	            : 1;
	    }
	    else if (a.length > b.length) {
	        return b.length === 1 && b[0] === 40 /* Static */ + 40 /* Segment */
	            ? 1
	            : -1;
	    }
	    return 0;
	}
	/**
	 * Compare function that can be used with `sort` to sort an array of PathParser
	 * @param a - first PathParser
	 * @param b - second PathParser
	 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
	 */
	function comparePathParserScore(a, b) {
	    let i = 0;
	    const aScore = a.score;
	    const bScore = b.score;
	    while (i < aScore.length && i < bScore.length) {
	        const comp = compareScoreArray(aScore[i], bScore[i]);
	        // do not return if both are equal
	        if (comp)
	            return comp;
	        i++;
	    }
	    // if a and b share the same score entries but b has more, sort b first
	    return bScore.length - aScore.length;
	    // this is the ternary version
	    // return aScore.length < bScore.length
	    //   ? 1
	    //   : aScore.length > bScore.length
	    //   ? -1
	    //   : 0
	}

	const ROOT_TOKEN = {
	    type: 0 /* Static */,
	    value: '',
	};
	const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
	// After some profiling, the cache seems to be unnecessary because tokenizePath
	// (the slowest part of adding a route) is very fast
	// const tokenCache = new Map<string, Token[][]>()
	function tokenizePath(path) {
	    if (!path)
	        return [[]];
	    if (path === '/')
	        return [[ROOT_TOKEN]];
	    if (!path.startsWith('/')) {
	        throw new Error( `Route paths should start with a "/": "${path}" should be "/${path}".`
	            );
	    }
	    // if (tokenCache.has(path)) return tokenCache.get(path)!
	    function crash(message) {
	        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	    }
	    let state = 0 /* Static */;
	    let previousState = state;
	    const tokens = [];
	    // the segment will always be valid because we get into the initial state
	    // with the leading /
	    let segment;
	    function finalizeSegment() {
	        if (segment)
	            tokens.push(segment);
	        segment = [];
	    }
	    // index on the path
	    let i = 0;
	    // char at index
	    let char;
	    // buffer of the value read
	    let buffer = '';
	    // custom regexp for a param
	    let customRe = '';
	    function consumeBuffer() {
	        if (!buffer)
	            return;
	        if (state === 0 /* Static */) {
	            segment.push({
	                type: 0 /* Static */,
	                value: buffer,
	            });
	        }
	        else if (state === 1 /* Param */ ||
	            state === 2 /* ParamRegExp */ ||
	            state === 3 /* ParamRegExpEnd */) {
	            if (segment.length > 1 && (char === '*' || char === '+'))
	                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
	            segment.push({
	                type: 1 /* Param */,
	                value: buffer,
	                regexp: customRe,
	                repeatable: char === '*' || char === '+',
	                optional: char === '*' || char === '?',
	            });
	        }
	        else {
	            crash('Invalid state to consume buffer');
	        }
	        buffer = '';
	    }
	    function addCharToBuffer() {
	        buffer += char;
	    }
	    while (i < path.length) {
	        char = path[i++];
	        if (char === '\\' && state !== 2 /* ParamRegExp */) {
	            previousState = state;
	            state = 4 /* EscapeNext */;
	            continue;
	        }
	        switch (state) {
	            case 0 /* Static */:
	                if (char === '/') {
	                    if (buffer) {
	                        consumeBuffer();
	                    }
	                    finalizeSegment();
	                }
	                else if (char === ':') {
	                    consumeBuffer();
	                    state = 1 /* Param */;
	                }
	                else {
	                    addCharToBuffer();
	                }
	                break;
	            case 4 /* EscapeNext */:
	                addCharToBuffer();
	                state = previousState;
	                break;
	            case 1 /* Param */:
	                if (char === '(') {
	                    state = 2 /* ParamRegExp */;
	                    customRe = '';
	                }
	                else if (VALID_PARAM_RE.test(char)) {
	                    addCharToBuffer();
	                }
	                else {
	                    consumeBuffer();
	                    state = 0 /* Static */;
	                    // go back one character if we were not modifying
	                    if (char !== '*' && char !== '?' && char !== '+')
	                        i--;
	                }
	                break;
	            case 2 /* ParamRegExp */:
	                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
	                // it already works by escaping the closing )
	                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
	                // is this really something people need since you can also write
	                // /prefix_:p()_suffix
	                if (char === ')') {
	                    // handle the escaped )
	                    if (customRe[customRe.length - 1] == '\\')
	                        customRe = customRe.slice(0, -1) + char;
	                    else
	                        state = 3 /* ParamRegExpEnd */;
	                }
	                else {
	                    customRe += char;
	                }
	                break;
	            case 3 /* ParamRegExpEnd */:
	                // same as finalizing a param
	                consumeBuffer();
	                state = 0 /* Static */;
	                // go back one character if we were not modifying
	                if (char !== '*' && char !== '?' && char !== '+')
	                    i--;
	                break;
	            default:
	                crash('Unknown state');
	                break;
	        }
	    }
	    if (state === 2 /* ParamRegExp */)
	        crash(`Unfinished custom RegExp for param "${buffer}"`);
	    consumeBuffer();
	    finalizeSegment();
	    // tokenCache.set(path, tokens)
	    return tokens;
	}

	function createRouteRecordMatcher(record, parent, options) {
	    const parser = tokensToParser(tokenizePath(record.path), options);
	    // warn against params with the same name
	    {
	        const existingKeys = new Set();
	        for (const key of parser.keys) {
	            if (existingKeys.has(key.name))
	                warn$1(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
	            existingKeys.add(key.name);
	        }
	    }
	    const matcher = assign(parser, {
	        record,
	        parent,
	        // these needs to be populated by the parent
	        children: [],
	        alias: [],
	    });
	    if (parent) {
	        // both are aliases or both are not aliases
	        // we don't want to mix them because the order is used when
	        // passing originalRecord in Matcher.addRoute
	        if (!matcher.record.aliasOf === !parent.record.aliasOf)
	            parent.children.push(matcher);
	    }
	    return matcher;
	}

	/**
	 * Creates a Router Matcher.
	 *
	 * @internal
	 * @param routes - array of initial routes
	 * @param globalOptions - global route options
	 */
	function createRouterMatcher(routes, globalOptions) {
	    // normalized ordered array of matchers
	    const matchers = [];
	    const matcherMap = new Map();
	    globalOptions = mergeOptions$1({ strict: false, end: true, sensitive: false }, globalOptions);
	    function getRecordMatcher(name) {
	        return matcherMap.get(name);
	    }
	    function addRoute(record, parent, originalRecord) {
	        // used later on to remove by name
	        let isRootAdd = !originalRecord;
	        let mainNormalizedRecord = normalizeRouteRecord(record);
	        // we might be the child of an alias
	        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
	        const options = mergeOptions$1(globalOptions, record);
	        // generate an array of records to correctly handle aliases
	        const normalizedRecords = [
	            mainNormalizedRecord,
	        ];
	        if ('alias' in record) {
	            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
	            for (const alias of aliases) {
	                normalizedRecords.push(assign({}, mainNormalizedRecord, {
	                    // this allows us to hold a copy of the `components` option
	                    // so that async components cache is hold on the original record
	                    components: originalRecord
	                        ? originalRecord.record.components
	                        : mainNormalizedRecord.components,
	                    path: alias,
	                    // we might be the child of an alias
	                    aliasOf: originalRecord
	                        ? originalRecord.record
	                        : mainNormalizedRecord,
	                }));
	            }
	        }
	        let matcher;
	        let originalMatcher;
	        for (const normalizedRecord of normalizedRecords) {
	            let { path } = normalizedRecord;
	            // Build up the path for nested routes if the child isn't an absolute
	            // route. Only add the / delimiter if the child path isn't empty and if the
	            // parent path doesn't have a trailing slash
	            if (parent && path[0] !== '/') {
	                let parentPath = parent.record.path;
	                let connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
	                normalizedRecord.path =
	                    parent.record.path + (path && connectingSlash + path);
	            }
	            if ( normalizedRecord.path === '*') {
	                throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\n' +
	                    'See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
	            }
	            // create the object before hand so it can be passed to children
	            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
	            if ( parent && path[0] === '/')
	                checkMissingParamsInAbsolutePath(matcher, parent);
	            // if we are an alias we must tell the original record that we exist
	            // so we can be removed
	            if (originalRecord) {
	                originalRecord.alias.push(matcher);
	                {
	                    checkSameParams(originalRecord, matcher);
	                }
	            }
	            else {
	                // otherwise, the first record is the original and others are aliases
	                originalMatcher = originalMatcher || matcher;
	                if (originalMatcher !== matcher)
	                    originalMatcher.alias.push(matcher);
	                // remove the route if named and only for the top record (avoid in nested calls)
	                // this works because the original record is the first one
	                if (isRootAdd && record.name && !isAliasRecord(matcher))
	                    removeRoute(record.name);
	            }
	            if ('children' in mainNormalizedRecord) {
	                let children = mainNormalizedRecord.children;
	                for (let i = 0; i < children.length; i++) {
	                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
	                }
	            }
	            // if there was no original record, then the first one was not an alias and all
	            // other alias (if any) need to reference this record when adding children
	            originalRecord = originalRecord || matcher;
	            insertMatcher(matcher);
	        }
	        return originalMatcher
	            ? () => {
	                // since other matchers are aliases, they should be removed by the original matcher
	                removeRoute(originalMatcher);
	            }
	            : noop;
	    }
	    function removeRoute(matcherRef) {
	        if (isRouteName(matcherRef)) {
	            const matcher = matcherMap.get(matcherRef);
	            if (matcher) {
	                matcherMap.delete(matcherRef);
	                matchers.splice(matchers.indexOf(matcher), 1);
	                matcher.children.forEach(removeRoute);
	                matcher.alias.forEach(removeRoute);
	            }
	        }
	        else {
	            let index = matchers.indexOf(matcherRef);
	            if (index > -1) {
	                matchers.splice(index, 1);
	                if (matcherRef.record.name)
	                    matcherMap.delete(matcherRef.record.name);
	                matcherRef.children.forEach(removeRoute);
	                matcherRef.alias.forEach(removeRoute);
	            }
	        }
	    }
	    function getRoutes() {
	        return matchers;
	    }
	    function insertMatcher(matcher) {
	        let i = 0;
	        // console.log('i is', { i })
	        while (i < matchers.length &&
	            comparePathParserScore(matcher, matchers[i]) >= 0)
	            i++;
	        // console.log('END i is', { i })
	        // while (i < matchers.length && matcher.score <= matchers[i].score) i++
	        matchers.splice(i, 0, matcher);
	        // only add the original record to the name map
	        if (matcher.record.name && !isAliasRecord(matcher))
	            matcherMap.set(matcher.record.name, matcher);
	    }
	    function resolve(location, currentLocation) {
	        let matcher;
	        let params = {};
	        let path;
	        let name;
	        if ('name' in location && location.name) {
	            matcher = matcherMap.get(location.name);
	            if (!matcher)
	                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
	                    location,
	                });
	            name = matcher.record.name;
	            params = assign(
	            // paramsFromLocation is a new object
	            paramsFromLocation(currentLocation.params, 
	            // only keep params that exist in the resolved location
	            // TODO: only keep optional params coming from a parent record
	            matcher.keys.filter(k => !k.optional).map(k => k.name)), location.params);
	            // throws if cannot be stringified
	            path = matcher.stringify(params);
	        }
	        else if ('path' in location) {
	            // no need to resolve the path with the matcher as it was provided
	            // this also allows the user to control the encoding
	            path = location.path;
	            if ( !path.startsWith('/')) {
	                warn$1(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-router-next.`);
	            }
	            matcher = matchers.find(m => m.re.test(path));
	            // matcher should have a value after the loop
	            if (matcher) {
	                // TODO: dev warning of unused params if provided
	                // we know the matcher works because we tested the regexp
	                params = matcher.parse(path);
	                name = matcher.record.name;
	            }
	            // location is a relative path
	        }
	        else {
	            // match by name or path of current route
	            matcher = currentLocation.name
	                ? matcherMap.get(currentLocation.name)
	                : matchers.find(m => m.re.test(currentLocation.path));
	            if (!matcher)
	                throw createRouterError(1 /* MATCHER_NOT_FOUND */, {
	                    location,
	                    currentLocation,
	                });
	            name = matcher.record.name;
	            // since we are navigating to the same location, we don't need to pick the
	            // params like when `name` is provided
	            params = assign({}, currentLocation.params, location.params);
	            path = matcher.stringify(params);
	        }
	        const matched = [];
	        let parentMatcher = matcher;
	        while (parentMatcher) {
	            // reversed order so parents are at the beginning
	            matched.unshift(parentMatcher.record);
	            parentMatcher = parentMatcher.parent;
	        }
	        return {
	            name,
	            path,
	            params,
	            matched,
	            meta: mergeMetaFields(matched),
	        };
	    }
	    // add initial routes
	    routes.forEach(route => addRoute(route));
	    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
	}
	function paramsFromLocation(params, keys) {
	    let newParams = {};
	    for (let key of keys) {
	        if (key in params)
	            newParams[key] = params[key];
	    }
	    return newParams;
	}
	/**
	 * Normalizes a RouteRecordRaw. Creates a copy
	 *
	 * @param record
	 * @returns the normalized version
	 */
	function normalizeRouteRecord(record) {
	    return {
	        path: record.path,
	        redirect: record.redirect,
	        name: record.name,
	        meta: record.meta || {},
	        aliasOf: undefined,
	        beforeEnter: record.beforeEnter,
	        props: normalizeRecordProps(record),
	        children: record.children || [],
	        instances: {},
	        leaveGuards: [],
	        updateGuards: [],
	        enterCallbacks: {},
	        components: 'components' in record
	            ? record.components || {}
	            : { default: record.component },
	    };
	}
	/**
	 * Normalize the optional `props` in a record to always be an object similar to
	 * components. Also accept a boolean for components.
	 * @param record
	 */
	function normalizeRecordProps(record) {
	    const propsObject = {};
	    // props does not exist on redirect records but we can set false directly
	    const props = record.props || false;
	    if ('component' in record) {
	        propsObject.default = props;
	    }
	    else {
	        // NOTE: we could also allow a function to be applied to every component.
	        // Would need user feedback for use cases
	        for (let name in record.components)
	            propsObject[name] = typeof props === 'boolean' ? props : props[name];
	    }
	    return propsObject;
	}
	/**
	 * Checks if a record or any of its parent is an alias
	 * @param record
	 */
	function isAliasRecord(record) {
	    while (record) {
	        if (record.record.aliasOf)
	            return true;
	        record = record.parent;
	    }
	    return false;
	}
	/**
	 * Merge meta fields of an array of records
	 *
	 * @param matched - array of matched records
	 */
	function mergeMetaFields(matched) {
	    return matched.reduce((meta, record) => assign(meta, record.meta), {});
	}
	function mergeOptions$1(defaults, partialOptions) {
	    let options = {};
	    for (let key in defaults) {
	        options[key] =
	            key in partialOptions ? partialOptions[key] : defaults[key];
	    }
	    return options;
	}
	function isSameParam(a, b) {
	    return (a.name === b.name &&
	        a.optional === b.optional &&
	        a.repeatable === b.repeatable);
	}
	function checkSameParams(a, b) {
	    for (let key of a.keys) {
	        if (!b.keys.find(isSameParam.bind(null, key)))
	            return warn$1(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
	    }
	    for (let key of b.keys) {
	        if (!a.keys.find(isSameParam.bind(null, key)))
	            return warn$1(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
	    }
	}
	function checkMissingParamsInAbsolutePath(record, parent) {
	    for (let key of parent.keys) {
	        if (!record.keys.find(isSameParam.bind(null, key)))
	            return warn$1(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
	    }
	}

	/**
	 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
	 * < > `
	 *
	 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
	 * defines some extra characters to be encoded. Most browsers do not encode them
	 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
	 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
	 * plus `-._~`. This extra safety should be applied to query by patching the
	 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
	 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
	 * into a `/` if directly typed in. The _backtick_ (`````) should also be
	 * encoded everywhere because some browsers like FF encode it when directly
	 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
	 */
	// const EXTRA_RESERVED_RE = /[!'()*]/g
	// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
	const HASH_RE = /#/g; // %23
	const AMPERSAND_RE = /&/g; // %26
	const SLASH_RE = /\//g; // %2F
	const EQUAL_RE = /=/g; // %3D
	const IM_RE = /\?/g; // %3F
	/**
	 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
	 * seems to be less flexible than not doing so and I can't find out the legacy
	 * systems requiring this for regular requests like text/html. In the standard,
	 * the encoding of the plus character is only mentioned for
	 * application/x-www-form-urlencoded
	 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
	 * leave the plus character as is in queries. To be more flexible, we allow the
	 * plus character on the query but it can also be manually encoded by the user.
	 *
	 * Resources:
	 * - https://url.spec.whatwg.org/#urlencoded-parsing
	 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
	 */
	// const PLUS_RE = /\+/g // %3F
	const ENC_BRACKET_OPEN_RE = /%5B/g; // [
	const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
	const ENC_CARET_RE = /%5E/g; // ^
	const ENC_BACKTICK_RE = /%60/g; // `
	const ENC_CURLY_OPEN_RE = /%7B/g; // {
	const ENC_PIPE_RE = /%7C/g; // |
	const ENC_CURLY_CLOSE_RE = /%7D/g; // }
	/**
	 * Encode characters that need to be encoded on the path, search and hash
	 * sections of the URL.
	 *
	 * @internal
	 * @param text - string to encode
	 * @returns encoded string
	 */
	function commonEncode(text) {
	    return encodeURI('' + text)
	        .replace(ENC_PIPE_RE, '|')
	        .replace(ENC_BRACKET_OPEN_RE, '[')
	        .replace(ENC_BRACKET_CLOSE_RE, ']');
	}
	/**
	 * Encode characters that need to be encoded on the hash section of the URL.
	 *
	 * @param text - string to encode
	 * @returns encoded string
	 */
	function encodeHash(text) {
	    return commonEncode(text)
	        .replace(ENC_CURLY_OPEN_RE, '{')
	        .replace(ENC_CURLY_CLOSE_RE, '}')
	        .replace(ENC_CARET_RE, '^');
	}
	/**
	 * Encode characters that need to be encoded query values on the query
	 * section of the URL.
	 *
	 * @param text - string to encode
	 * @returns encoded string
	 */
	function encodeQueryValue(text) {
	    return commonEncode(text)
	        .replace(HASH_RE, '%23')
	        .replace(AMPERSAND_RE, '%26')
	        .replace(ENC_BACKTICK_RE, '`')
	        .replace(ENC_CURLY_OPEN_RE, '{')
	        .replace(ENC_CURLY_CLOSE_RE, '}')
	        .replace(ENC_CARET_RE, '^');
	}
	/**
	 * Like `encodeQueryValue` but also encodes the `=` character.
	 *
	 * @param text - string to encode
	 */
	function encodeQueryKey(text) {
	    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
	}
	/**
	 * Encode characters that need to be encoded on the path section of the URL.
	 *
	 * @param text - string to encode
	 * @returns encoded string
	 */
	function encodePath(text) {
	    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
	}
	/**
	 * Encode characters that need to be encoded on the path section of the URL as a
	 * param. This function encodes everything {@link encodePath} does plus the
	 * slash (`/`) character.
	 *
	 * @param text - string to encode
	 * @returns encoded string
	 */
	function encodeParam(text) {
	    return encodePath(text).replace(SLASH_RE, '%2F');
	}
	/**
	 * Decode text using `decodeURIComponent`. Returns the original text if it
	 * fails.
	 *
	 * @param text - string to decode
	 * @returns decoded string
	 */
	function decode(text) {
	    try {
	        return decodeURIComponent('' + text);
	    }
	    catch (err) {
	         warn$1(`Error decoding "${text}". Using original value`);
	    }
	    return '' + text;
	}

	/**
	 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
	 * version with the leading `?` and without Should work as URLSearchParams

	 * @internal
	 *
	 * @param search - search string to parse
	 * @returns a query object
	 */
	function parseQuery(search) {
	    const query = {};
	    // avoid creating an object with an empty key and empty value
	    // because of split('&')
	    if (search === '' || search === '?')
	        return query;
	    const hasLeadingIM = search[0] === '?';
	    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
	    for (let i = 0; i < searchParams.length; ++i) {
	        const searchParam = searchParams[i];
	        // allow the = character
	        let eqPos = searchParam.indexOf('=');
	        let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
	        let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
	        if (key in query) {
	            // an extra variable for ts types
	            let currentValue = query[key];
	            if (!Array.isArray(currentValue)) {
	                currentValue = query[key] = [currentValue];
	            }
	            currentValue.push(value);
	        }
	        else {
	            query[key] = value;
	        }
	    }
	    return query;
	}
	/**
	 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
	 * doesn't prepend a `?`
	 *
	 * @internal
	 *
	 * @param query - query object to stringify
	 * @returns string version of the query without the leading `?`
	 */
	function stringifyQuery(query) {
	    let search = '';
	    for (let key in query) {
	        if (search.length)
	            search += '&';
	        const value = query[key];
	        key = encodeQueryKey(key);
	        if (value == null) {
	            // only null adds the value
	            if (value !== undefined)
	                search += key;
	            continue;
	        }
	        // keep null values
	        let values = Array.isArray(value)
	            ? value.map(v => v && encodeQueryValue(v))
	            : [value && encodeQueryValue(value)];
	        for (let i = 0; i < values.length; i++) {
	            // only append & with i > 0
	            search += (i ? '&' : '') + key;
	            if (values[i] != null)
	                search += ('=' + values[i]);
	        }
	    }
	    return search;
	}
	/**
	 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
	 * numbers into strings, removing keys with an undefined value and replacing
	 * undefined with null in arrays
	 *
	 * @param query - query object to normalize
	 * @returns a normalized query object
	 */
	function normalizeQuery(query) {
	    const normalizedQuery = {};
	    for (let key in query) {
	        let value = query[key];
	        if (value !== undefined) {
	            normalizedQuery[key] = Array.isArray(value)
	                ? value.map(v => (v == null ? null : '' + v))
	                : value == null
	                    ? value
	                    : '' + value;
	        }
	    }
	    return normalizedQuery;
	}

	/**
	 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
	 */
	function useCallbacks() {
	    let handlers = [];
	    function add(handler) {
	        handlers.push(handler);
	        return () => {
	            const i = handlers.indexOf(handler);
	            if (i > -1)
	                handlers.splice(i, 1);
	        };
	    }
	    function reset() {
	        handlers = [];
	    }
	    return {
	        add,
	        list: () => handlers,
	        reset,
	    };
	}
	function guardToPromiseFn(guard, to, from, record, name) {
	    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
	    const enterCallbackArray = record &&
	        // name is defined if record is because of the function overload
	        (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	    return () => new Promise((resolve, reject) => {
	        const next = (valid) => {
	            if (valid === false)
	                reject(createRouterError(4 /* NAVIGATION_ABORTED */, {
	                    from,
	                    to,
	                }));
	            else if (valid instanceof Error) {
	                reject(valid);
	            }
	            else if (isRouteLocation(valid)) {
	                reject(createRouterError(2 /* NAVIGATION_GUARD_REDIRECT */, {
	                    from: to,
	                    to: valid,
	                }));
	            }
	            else {
	                if (enterCallbackArray &&
	                    // since enterCallbackArray is truthy, both record and name also are
	                    record.enterCallbacks[name] === enterCallbackArray &&
	                    typeof valid === 'function')
	                    enterCallbackArray.push(valid);
	                resolve();
	            }
	        };
	        // wrapping with Promise.resolve allows it to work with both async and sync guards
	        const guardReturn = guard.call(record && record.instances[name], to, from,  canOnlyBeCalledOnce(next, to, from) );
	        let guardCall = Promise.resolve(guardReturn);
	        if (guard.length < 3)
	            guardCall = guardCall.then(next);
	        if ( guard.length > 2) {
	            const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ''}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
	            if (typeof guardReturn === 'object' && 'then' in guardReturn) {
	                guardCall = guardCall.then(resolvedValue => {
	                    // @ts-ignore: _called is added at canOnlyBeCalledOnce
	                    if (!next._called) {
	                        warn$1(message);
	                        return Promise.reject(new Error('Invalid navigation guard'));
	                    }
	                    return resolvedValue;
	                });
	                // TODO: test me!
	            }
	            else if (guardReturn !== undefined) {
	                // @ts-ignore: _called is added at canOnlyBeCalledOnce
	                if (!next._called) {
	                    warn$1(message);
	                    reject(new Error('Invalid navigation guard'));
	                    return;
	                }
	            }
	        }
	        guardCall.catch(err => reject(err));
	    });
	}
	function canOnlyBeCalledOnce(next, to, from) {
	    let called = 0;
	    return function () {
	        if (called++ === 1)
	            warn$1(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
	        // @ts-ignore: we put it in the original one because it's easier to check
	        next._called = true;
	        if (called === 1)
	            next.apply(null, arguments);
	    };
	}
	function extractComponentsGuards(matched, guardType, to, from) {
	    const guards = [];
	    for (const record of matched) {
	        for (const name in record.components) {
	            let rawComponent = record.components[name];
	            {
	                if (!rawComponent ||
	                    (typeof rawComponent !== 'object' &&
	                        typeof rawComponent !== 'function')) {
	                    warn$1(`Component "${name}" in record with path "${record.path}" is not` +
	                        ` a valid component. Received "${String(rawComponent)}".`);
	                    // throw to ensure we stop here but warn to ensure the message isn't
	                    // missed by the user
	                    throw new Error('Invalid route component');
	                }
	                else if ('then' in rawComponent) {
	                    // warn if user wrote import('/component.vue') instead of () =>
	                    // import('./component.vue')
	                    warn$1(`Component "${name}" in record with path "${record.path}" is a ` +
	                        `Promise instead of a function that returns a Promise. Did you ` +
	                        `write "import('./MyPage.vue')" instead of ` +
	                        `"() => import('./MyPage.vue')" ? This will break in ` +
	                        `production if not fixed.`);
	                    let promise = rawComponent;
	                    rawComponent = () => promise;
	                }
	            }
	            // skip update and leave guards if the route component is not mounted
	            if (guardType !== 'beforeRouteEnter' && !record.instances[name])
	                continue;
	            if (isRouteComponent(rawComponent)) {
	                // __vccOpts is added by vue-class-component and contain the regular options
	                let options = rawComponent.__vccOpts || rawComponent;
	                const guard = options[guardType];
	                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
	            }
	            else {
	                // start requesting the chunk already
	                let componentPromise = rawComponent();
	                if ( !('catch' in componentPromise)) {
	                    warn$1(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
	                    componentPromise = Promise.resolve(componentPromise);
	                }
	                else {
	                    // display the error if any
	                    componentPromise = componentPromise.catch( err => err && warn$1(err) );
	                }
	                guards.push(() => componentPromise.then(resolved => {
	                    if (!resolved)
	                        return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
	                    const resolvedComponent = isESModule(resolved)
	                        ? resolved.default
	                        : resolved;
	                    // replace the function with the resolved component
	                    record.components[name] = resolvedComponent;
	                    // @ts-ignore: the options types are not propagated to Component
	                    const guard = resolvedComponent[guardType];
	                    return guard && guardToPromiseFn(guard, to, from, record, name)();
	                }));
	            }
	        }
	    }
	    return guards;
	}
	/**
	 * Allows differentiating lazy components from functional components and vue-class-component
	 * @param component
	 */
	function isRouteComponent(component) {
	    return (typeof component === 'object' ||
	        'displayName' in component ||
	        'props' in component ||
	        '__vccOpts' in component);
	}

	// TODO: we could allow currentRoute as a prop to expose `isActive` and
	// `isExactActive` behavior should go through an RFC
	function useLink(props) {
	    const router = inject(routerKey);
	    const currentRoute = inject(routeLocationKey);
	    const route = computed$1(() => router.resolve(unref(props.to)));
	    const activeRecordIndex = computed$1(() => {
	        let { matched } = route.value;
	        let { length } = matched;
	        const routeMatched = matched[length - 1];
	        let currentMatched = currentRoute.matched;
	        if (!routeMatched || !currentMatched.length)
	            return -1;
	        let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
	        if (index > -1)
	            return index;
	        // possible parent record
	        let parentRecordPath = getOriginalPath(matched[length - 2]);
	        return (
	        // we are dealing with nested routes
	        length > 1 &&
	            // if the parent and matched route have the same path, this link is
	            // referring to the empty child. Or we currently are on a different
	            // child of the same parent
	            getOriginalPath(routeMatched) === parentRecordPath &&
	            // avoid comparing the child with its parent
	            currentMatched[currentMatched.length - 1].path !== parentRecordPath
	            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
	            : index);
	    });
	    const isActive = computed$1(() => activeRecordIndex.value > -1 &&
	        includesParams(currentRoute.params, route.value.params));
	    const isExactActive = computed$1(() => activeRecordIndex.value > -1 &&
	        activeRecordIndex.value === currentRoute.matched.length - 1 &&
	        isSameRouteLocationParams(currentRoute.params, route.value.params));
	    function navigate(e = {}) {
	        if (guardEvent(e))
	            return router[unref(props.replace) ? 'replace' : 'push'](unref(props.to));
	        return Promise.resolve();
	    }
	    return {
	        route,
	        href: computed$1(() => route.value.href),
	        isActive,
	        isExactActive,
	        navigate,
	    };
	}
	const RouterLinkImpl = /*#__PURE__*/ defineComponent({
	    name: 'RouterLink',
	    props: {
	        to: {
	            type: [String, Object],
	            required: true,
	        },
	        activeClass: String,
	        // inactiveClass: String,
	        exactActiveClass: String,
	        custom: Boolean,
	        ariaCurrentValue: {
	            type: String,
	            default: 'page',
	        },
	    },
	    setup(props, { slots, attrs }) {
	        const link = reactive(useLink(props));
	        const { options } = inject(routerKey);
	        const elClass = computed$1(() => ({
	            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
	            // [getLinkClass(
	            //   props.inactiveClass,
	            //   options.linkInactiveClass,
	            //   'router-link-inactive'
	            // )]: !link.isExactActive,
	            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
	        }));
	        return () => {
	            const children = slots.default && slots.default(link);
	            return props.custom
	                ? children
	                : h('a', assign({
	                    'aria-current': link.isExactActive
	                        ? props.ariaCurrentValue
	                        : null,
	                    onClick: link.navigate,
	                    href: link.href,
	                }, attrs, {
	                    class: elClass.value,
	                }), children);
	        };
	    },
	});
	// export the public type for h/tsx inference
	// also to avoid inline import() in generated d.ts files
	/**
	 * Component to render a link that triggers a navigation on click.
	 */
	const RouterLink = RouterLinkImpl;
	function guardEvent(e) {
	    // don't redirect with control keys
	    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
	        return;
	    // don't redirect when preventDefault called
	    if (e.defaultPrevented)
	        return;
	    // don't redirect on right click
	    if (e.button !== undefined && e.button !== 0)
	        return;
	    // don't redirect if `target="_blank"`
	    // @ts-ignore getAttribute does exist
	    if (e.currentTarget && e.currentTarget.getAttribute) {
	        // @ts-ignore getAttribute exists
	        const target = e.currentTarget.getAttribute('target');
	        if (/\b_blank\b/i.test(target))
	            return;
	    }
	    // this may be a Weex event which doesn't have this method
	    if (e.preventDefault)
	        e.preventDefault();
	    return true;
	}
	function includesParams(outer, inner) {
	    for (let key in inner) {
	        let innerValue = inner[key];
	        let outerValue = outer[key];
	        if (typeof innerValue === 'string') {
	            if (innerValue !== outerValue)
	                return false;
	        }
	        else {
	            if (!Array.isArray(outerValue) ||
	                outerValue.length !== innerValue.length ||
	                innerValue.some((value, i) => value !== outerValue[i]))
	                return false;
	        }
	    }
	    return true;
	}
	/**
	 * Get the original path value of a record by following its aliasOf
	 * @param record
	 */
	function getOriginalPath(record) {
	    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
	}
	/**
	 * Utility class to get the active class based on defaults.
	 * @param propClass
	 * @param globalClass
	 * @param defaultClass
	 */
	const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
	    ? propClass
	    : globalClass != null
	        ? globalClass
	        : defaultClass;

	const RouterViewImpl = /*#__PURE__*/ defineComponent({
	    name: 'RouterView',
	    props: {
	        name: {
	            type: String,
	            default: 'default',
	        },
	        route: Object,
	    },
	    setup(props, { attrs, slots }) {
	         warnDeprecatedUsage();
	        const injectedRoute = inject(routeLocationKey);
	        const depth = inject(viewDepthKey, 0);
	        const matchedRouteRef = computed$1(() => (props.route || injectedRoute).matched[depth]);
	        provide(viewDepthKey, depth + 1);
	        provide(matchedRouteKey, matchedRouteRef);
	        const viewRef = ref();
	        // watch at the same time the component instance, the route record we are
	        // rendering, and the name
	        watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
	            // copy reused instances
	            if (to) {
	                // this will update the instance for new instances as well as reused
	                // instances when navigating to a new route
	                to.instances[name] = instance;
	                // the component instance is reused for a different route or name so
	                // we copy any saved update or leave guards
	                if (from && instance === oldInstance) {
	                    to.leaveGuards = from.leaveGuards;
	                    to.updateGuards = from.updateGuards;
	                }
	            }
	            // trigger beforeRouteEnter next callbacks
	            if (instance &&
	                to &&
	                // if there is no instance but to and from are the same this might be
	                // the first visit
	                (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
	                (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
	            }
	        }, { flush: 'post' });
	        return () => {
	            const route = props.route || injectedRoute;
	            const matchedRoute = matchedRouteRef.value;
	            const ViewComponent = matchedRoute && matchedRoute.components[props.name];
	            // we need the value at the time we render because when we unmount, we
	            // navigated to a different location so the value is different
	            const currentName = props.name;
	            if (!ViewComponent) {
	                return slots.default
	                    ? slots.default({ Component: ViewComponent, route })
	                    : null;
	            }
	            // props from route configuration
	            const routePropsOption = matchedRoute.props[props.name];
	            const routeProps = routePropsOption
	                ? routePropsOption === true
	                    ? route.params
	                    : typeof routePropsOption === 'function'
	                        ? routePropsOption(route)
	                        : routePropsOption
	                : null;
	            const onVnodeUnmounted = vnode => {
	                // remove the instance reference to prevent leak
	                if (vnode.component.isUnmounted) {
	                    matchedRoute.instances[currentName] = null;
	                }
	            };
	            const component = h(ViewComponent, assign({}, routeProps, attrs, {
	                onVnodeUnmounted,
	                ref: viewRef,
	            }));
	            return (
	            // pass the vnode to the slot as a prop.
	            // h and <component :is="..."> both accept vnodes
	            slots.default
	                ? slots.default({ Component: component, route })
	                : component);
	        };
	    },
	});
	// export the public type for h/tsx inference
	// also to avoid inline import() in generated d.ts files
	/**
	 * Component to display the current route the user is at.
	 */
	const RouterView = RouterViewImpl;
	// warn against deprecated usage with <transition> & <keep-alive>
	// due to functional component being no longer eager in Vue 3
	function warnDeprecatedUsage() {
	    const instance = getCurrentInstance();
	    const parentName = instance.parent && instance.parent.type.name;
	    if (parentName &&
	        (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
	        const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
	        warn$1(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` +
	            `Use slot props instead:\n\n` +
	            `<router-view v-slot="{ Component }">\n` +
	            `  <${comp}>\n` +
	            `    <component :is="Component" />\n` +
	            `  </${comp}>\n` +
	            `</router-view>`);
	    }
	}

	/**
	 * Creates a Router instance that can be used by a Vue app.
	 *
	 * @param options - {@link RouterOptions}
	 */
	function createRouter(options) {
	    const matcher = createRouterMatcher(options.routes, options);
	    let parseQuery$1 = options.parseQuery || parseQuery;
	    let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	    let { scrollBehavior } = options;
	    let routerHistory = options.history;
	    const beforeGuards = useCallbacks();
	    const beforeResolveGuards = useCallbacks();
	    const afterGuards = useCallbacks();
	    const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
	    let pendingLocation = START_LOCATION_NORMALIZED;
	    // leave the scrollRestoration if no scrollBehavior is provided
	    if (isBrowser && scrollBehavior && 'scrollRestoration' in history) {
	        history.scrollRestoration = 'manual';
	    }
	    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
	    const encodeParams = applyToParams.bind(null, encodeParam);
	    const decodeParams = applyToParams.bind(null, decode);
	    function addRoute(parentOrRoute, route) {
	        let parent;
	        let record;
	        if (isRouteName(parentOrRoute)) {
	            parent = matcher.getRecordMatcher(parentOrRoute);
	            record = route;
	        }
	        else {
	            record = parentOrRoute;
	        }
	        return matcher.addRoute(record, parent);
	    }
	    function removeRoute(name) {
	        let recordMatcher = matcher.getRecordMatcher(name);
	        if (recordMatcher) {
	            matcher.removeRoute(recordMatcher);
	        }
	        else {
	            warn$1(`Cannot remove non-existent route "${String(name)}"`);
	        }
	    }
	    function getRoutes() {
	        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
	    }
	    function hasRoute(name) {
	        return !!matcher.getRecordMatcher(name);
	    }
	    function resolve(rawLocation, currentLocation) {
	        // const objectLocation = routerLocationAsObject(rawLocation)
	        // we create a copy to modify it later
	        currentLocation = assign({}, currentLocation || currentRoute.value);
	        if (typeof rawLocation === 'string') {
	            let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
	            let matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
	            let href = routerHistory.createHref(locationNormalized.fullPath);
	            {
	                if (href.startsWith('//'))
	                    warn$1(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
	                else if (!matchedRoute.matched.length) {
	                    warn$1(`No match found for location with path "${rawLocation}"`);
	                }
	            }
	            // locationNormalized is always a new object
	            return assign(locationNormalized, matchedRoute, {
	                params: decodeParams(matchedRoute.params),
	                hash: decode(locationNormalized.hash),
	                redirectedFrom: undefined,
	                href,
	            });
	        }
	        let matcherLocation;
	        // path could be relative in object as well
	        if ('path' in rawLocation) {
	            if (
	                'params' in rawLocation &&
	                !('name' in rawLocation) &&
	                Object.keys(rawLocation.params).length) {
	                warn$1(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
	            }
	            matcherLocation = assign({}, rawLocation, {
	                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
	            });
	        }
	        else {
	            // pass encoded values to the matcher so it can produce encoded path and fullPath
	            matcherLocation = assign({}, rawLocation, {
	                params: encodeParams(rawLocation.params),
	            });
	            // current location params are decoded, we need to encode them in case the
	            // matcher merges the params
	            currentLocation.params = encodeParams(currentLocation.params);
	        }
	        let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
	        const hash = rawLocation.hash || '';
	        if ( hash && !hash.startsWith('#')) {
	            warn$1(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
	        }
	        // decoding them) the matcher might have merged current location params so
	        // we need to run the decoding again
	        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
	        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
	            hash: encodeHash(hash),
	            path: matchedRoute.path,
	        }));
	        let href = routerHistory.createHref(fullPath);
	        {
	            if (href.startsWith('//')) {
	                warn$1(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
	            }
	            else if (!matchedRoute.matched.length) {
	                warn$1(`No match found for location with path "${'path' in rawLocation ? rawLocation.path : rawLocation}"`);
	            }
	        }
	        return assign({
	            fullPath,
	            // keep the hash encoded so fullPath is effectively path + encodedQuery +
	            // hash
	            hash,
	            query: 
	            // if the user is using a custom query lib like qs, we might have
	            // nested objects, so we keep the query as is, meaning it can contain
	            // numbers at `$route.query`, but at the point, the user will have to
	            // use their own type anyway.
	            // https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
	            stringifyQuery$1 === stringifyQuery
	                ? normalizeQuery(rawLocation.query)
	                : rawLocation.query,
	        }, matchedRoute, {
	            redirectedFrom: undefined,
	            href,
	        });
	    }
	    function locationAsObject(to) {
	        return typeof to === 'string' ? { path: to } : assign({}, to);
	    }
	    function checkCanceledNavigation(to, from) {
	        if (pendingLocation !== to) {
	            return createRouterError(8 /* NAVIGATION_CANCELLED */, {
	                from,
	                to,
	            });
	        }
	    }
	    function push(to) {
	        return pushWithRedirect(to);
	    }
	    function replace(to) {
	        return push(assign(locationAsObject(to), { replace: true }));
	    }
	    function pushWithRedirect(to, redirectedFrom) {
	        const targetLocation = (pendingLocation = resolve(to));
	        const from = currentRoute.value;
	        const data = to.state;
	        const force = to.force;
	        // to could be a string where `replace` is a function
	        const replace = to.replace === true;
	        const lastMatched = targetLocation.matched[targetLocation.matched.length - 1];
	        if (lastMatched && lastMatched.redirect) {
	            const { redirect } = lastMatched;
	            // transform it into an object to pass the original RouteLocaleOptions
	            let newTargetLocation = locationAsObject(typeof redirect === 'function' ? redirect(targetLocation) : redirect);
	            if (
	                !('path' in newTargetLocation) &&
	                !('name' in newTargetLocation)) {
	                warn$1(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${targetLocation.fullPath}". A redirect must contain a name or path. This will break in production.`);
	                return Promise.reject(new Error('Invalid redirect'));
	            }
	            return pushWithRedirect(assign({
	                query: targetLocation.query,
	                hash: targetLocation.hash,
	                params: targetLocation.params,
	            }, newTargetLocation, {
	                state: data,
	                force,
	                replace,
	            }), 
	            // keep original redirectedFrom if it exists
	            redirectedFrom || targetLocation);
	        }
	        // if it was a redirect we already called `pushWithRedirect` above
	        const toLocation = targetLocation;
	        toLocation.redirectedFrom = redirectedFrom;
	        let failure;
	        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
	            failure = createRouterError(16 /* NAVIGATION_DUPLICATED */, { to: toLocation, from });
	            // trigger scroll to allow scrolling to the same anchor
	            handleScroll(from, from, 
	            // this is a push, the only way for it to be triggered from a
	            // history.listen is with a redirect, which makes it become a pus
	            true, 
	            // This cannot be the first navigation because the initial location
	            // cannot be manually navigated to
	            false);
	        }
	        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
	            .catch((error) => {
	            if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ |
	                8 /* NAVIGATION_CANCELLED */ |
	                2 /* NAVIGATION_GUARD_REDIRECT */)) {
	                return error;
	            }
	            // unknown error, rejects
	            return triggerError(error);
	        })
	            .then((failure) => {
	            if (failure) {
	                if (isNavigationFailure(failure, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
	                    if (
	                        // we are redirecting to the same location we were already at
	                        isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) &&
	                        // and we have done it a couple of times
	                        redirectedFrom &&
	                        // @ts-ignore
	                        (redirectedFrom._count = redirectedFrom._count
	                            ? // @ts-ignore
	                                redirectedFrom._count + 1
	                            : 1) > 10) {
	                        warn$1(`Detected an infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`);
	                        return Promise.reject(new Error('Infinite redirect in navigation guard'));
	                    }
	                    return pushWithRedirect(
	                    // keep options
	                    assign(locationAsObject(failure.to), {
	                        state: data,
	                        force,
	                        replace,
	                    }), 
	                    // preserve the original redirectedFrom if any
	                    redirectedFrom || toLocation);
	                }
	            }
	            else {
	                // if we fail we don't finalize the navigation
	                failure = finalizeNavigation(toLocation, from, true, replace, data);
	            }
	            triggerAfterEach(toLocation, from, failure);
	            return failure;
	        });
	    }
	    /**
	     * Helper to reject and skip all navigation guards if a new navigation happened
	     * @param to
	     * @param from
	     */
	    function checkCanceledNavigationAndReject(to, from) {
	        const error = checkCanceledNavigation(to, from);
	        return error ? Promise.reject(error) : Promise.resolve();
	    }
	    // TODO: refactor the whole before guards by internally using router.beforeEach
	    function navigate(to, from) {
	        let guards;
	        const [leavingRecords, updatingRecords, enteringRecords,] = extractChangingRecords(to, from);
	        // all components here have been resolved once because we are leaving
	        guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
	        // leavingRecords is already reversed
	        for (const record of leavingRecords) {
	            for (const guard of record.leaveGuards) {
	                guards.push(guardToPromiseFn(guard, to, from));
	            }
	        }
	        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
	        guards.push(canceledNavigationCheck);
	        // run the queue of per route beforeRouteLeave guards
	        return (runGuardQueue(guards)
	            .then(() => {
	            // check global guards beforeEach
	            guards = [];
	            for (const guard of beforeGuards.list()) {
	                guards.push(guardToPromiseFn(guard, to, from));
	            }
	            guards.push(canceledNavigationCheck);
	            return runGuardQueue(guards);
	        })
	            .then(() => {
	            // check in components beforeRouteUpdate
	            guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
	            for (const record of updatingRecords) {
	                for (const guard of record.updateGuards) {
	                    guards.push(guardToPromiseFn(guard, to, from));
	                }
	            }
	            guards.push(canceledNavigationCheck);
	            // run the queue of per route beforeEnter guards
	            return runGuardQueue(guards);
	        })
	            .then(() => {
	            // check the route beforeEnter
	            guards = [];
	            for (const record of to.matched) {
	                // do not trigger beforeEnter on reused views
	                if (record.beforeEnter && from.matched.indexOf(record) < 0) {
	                    if (Array.isArray(record.beforeEnter)) {
	                        for (const beforeEnter of record.beforeEnter)
	                            guards.push(guardToPromiseFn(beforeEnter, to, from));
	                    }
	                    else {
	                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
	                    }
	                }
	            }
	            guards.push(canceledNavigationCheck);
	            // run the queue of per route beforeEnter guards
	            return runGuardQueue(guards);
	        })
	            .then(() => {
	            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
	            // clear existing enterCallbacks, these are added by extractComponentsGuards
	            to.matched.forEach(record => (record.enterCallbacks = {}));
	            // check in-component beforeRouteEnter
	            guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
	            guards.push(canceledNavigationCheck);
	            // run the queue of per route beforeEnter guards
	            return runGuardQueue(guards);
	        })
	            .then(() => {
	            // check global guards beforeResolve
	            guards = [];
	            for (const guard of beforeResolveGuards.list()) {
	                guards.push(guardToPromiseFn(guard, to, from));
	            }
	            guards.push(canceledNavigationCheck);
	            return runGuardQueue(guards);
	        })
	            // catch any navigation canceled
	            .catch(err => isNavigationFailure(err, 8 /* NAVIGATION_CANCELLED */)
	            ? err
	            : Promise.reject(err)));
	    }
	    function triggerAfterEach(to, from, failure) {
	        // navigation is confirmed, call afterGuards
	        // TODO: wrap with error handlers
	        for (const guard of afterGuards.list())
	            guard(to, from, failure);
	    }
	    /**
	     * - Cleans up any navigation guards
	     * - Changes the url if necessary
	     * - Calls the scrollBehavior
	     */
	    function finalizeNavigation(toLocation, from, isPush, replace, data) {
	        // a more recent navigation took place
	        const error = checkCanceledNavigation(toLocation, from);
	        if (error)
	            return error;
	        // only consider as push if it's not the first navigation
	        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
	        const state = !isBrowser ? {} : history.state;
	        // change URL only if the user did a push/replace and if it's not the initial navigation because
	        // it's just reflecting the url
	        if (isPush) {
	            // on the initial navigation, we want to reuse the scroll position from
	            // history state if it exists
	            if (replace || isFirstNavigation)
	                routerHistory.replace(toLocation.fullPath, assign({
	                    scroll: isFirstNavigation && state && state.scroll,
	                }, data));
	            else
	                routerHistory.push(toLocation.fullPath, data);
	        }
	        // accept current navigation
	        currentRoute.value = toLocation;
	        handleScroll(toLocation, from, isPush, isFirstNavigation);
	        markAsReady();
	    }
	    let removeHistoryListener;
	    // attach listener to history to trigger navigations
	    function setupListeners() {
	        removeHistoryListener = routerHistory.listen((to, _from, info) => {
	            // cannot be a redirect route because it was in history
	            const toLocation = resolve(to);
	            pendingLocation = toLocation;
	            const from = currentRoute.value;
	            // TODO: should be moved to web history?
	            if (isBrowser) {
	                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
	            }
	            navigate(toLocation, from)
	                .catch((error) => {
	                if (isNavigationFailure(error, 4 /* NAVIGATION_ABORTED */ | 8 /* NAVIGATION_CANCELLED */)) {
	                    return error;
	                }
	                if (isNavigationFailure(error, 2 /* NAVIGATION_GUARD_REDIRECT */)) {
	                    // do not restore history on unknown direction
	                    if (info.delta)
	                        routerHistory.go(-info.delta, false);
	                    // the error is already handled by router.push we just want to avoid
	                    // logging the error
	                    pushWithRedirect(error.to, toLocation
	                    // avoid an uncaught rejection
	                    ).catch(noop);
	                    // avoid the then branch
	                    return Promise.reject();
	                }
	                // do not restore history on unknown direction
	                if (info.delta)
	                    routerHistory.go(-info.delta, false);
	                // unrecognized error, transfer to the global handler
	                return triggerError(error);
	            })
	                .then((failure) => {
	                failure =
	                    failure ||
	                        finalizeNavigation(
	                        // after navigation, all matched components are resolved
	                        toLocation, from, false);
	                // revert the navigation
	                if (failure && info.delta)
	                    routerHistory.go(-info.delta, false);
	                triggerAfterEach(toLocation, from, failure);
	            })
	                .catch(noop);
	        });
	    }
	    // Initialization and Errors
	    let readyHandlers = useCallbacks();
	    let errorHandlers = useCallbacks();
	    let ready;
	    /**
	     * Trigger errorHandlers added via onError and throws the error as well
	     * @param error - error to throw
	     * @returns the error as a rejected promise
	     */
	    function triggerError(error) {
	        markAsReady(error);
	        errorHandlers.list().forEach(handler => handler(error));
	        return Promise.reject(error);
	    }
	    function isReady() {
	        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
	            return Promise.resolve();
	        return new Promise((resolve, reject) => {
	            readyHandlers.add([resolve, reject]);
	        });
	    }
	    /**
	     * Mark the router as ready, resolving the promised returned by isReady(). Can
	     * only be called once, otherwise does nothing.
	     * @param err - optional error
	     */
	    function markAsReady(err) {
	        if (ready)
	            return;
	        ready = true;
	        setupListeners();
	        readyHandlers
	            .list()
	            .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
	        readyHandlers.reset();
	    }
	    // Scroll behavior
	    function handleScroll(to, from, isPush, isFirstNavigation) {
	        if (!isBrowser || !scrollBehavior)
	            return Promise.resolve();
	        let scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
	            ((isFirstNavigation || !isPush) &&
	                history.state &&
	                history.state.scroll) ||
	            null;
	        return nextTick()
	            .then(() => scrollBehavior(to, from, scrollPosition))
	            .then(position => position && scrollToPosition(position))
	            .catch(triggerError);
	    }
	    const go = (delta) => routerHistory.go(delta);
	    let started;
	    const installedApps = new Set();
	    const router = {
	        currentRoute,
	        addRoute,
	        removeRoute,
	        hasRoute,
	        getRoutes,
	        resolve,
	        options,
	        push,
	        replace,
	        go,
	        back: () => go(-1),
	        forward: () => go(1),
	        beforeEach: beforeGuards.add,
	        beforeResolve: beforeResolveGuards.add,
	        afterEach: afterGuards.add,
	        onError: errorHandlers.add,
	        isReady,
	        install(app) {
	            const router = this;
	            app.component('RouterLink', RouterLink);
	            app.component('RouterView', RouterView);
	            app.config.globalProperties.$router = router;
	            Object.defineProperty(app.config.globalProperties, '$route', {
	                get: () => unref(currentRoute),
	            });
	            // this initial navigation is only necessary on client, on server it doesn't
	            // make sense because it will create an extra unnecessary navigation and could
	            // lead to problems
	            if (isBrowser &&
	                // used for the initial navigation client side to avoid pushing
	                // multiple times when the router is used in multiple apps
	                !started &&
	                currentRoute.value === START_LOCATION_NORMALIZED) {
	                // see above
	                started = true;
	                push(routerHistory.location).catch(err => {
	                    warn$1('Unexpected error when starting the router:', err);
	                });
	            }
	            const reactiveRoute = {};
	            for (let key in START_LOCATION_NORMALIZED) {
	                // @ts-ignore: the key matches
	                reactiveRoute[key] = computed$1(() => currentRoute.value[key]);
	            }
	            app.provide(routerKey, router);
	            app.provide(routeLocationKey, reactive(reactiveRoute));
	            let unmountApp = app.unmount;
	            installedApps.add(app);
	            app.unmount = function () {
	                installedApps.delete(app);
	                if (installedApps.size < 1) {
	                    removeHistoryListener();
	                    currentRoute.value = START_LOCATION_NORMALIZED;
	                    started = false;
	                    ready = false;
	                }
	                unmountApp.call(this, arguments);
	            };
	        },
	    };
	    return router;
	}
	function runGuardQueue(guards) {
	    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
	}
	function extractChangingRecords(to, from) {
	    const leavingRecords = [];
	    const updatingRecords = [];
	    const enteringRecords = [];
	    const len = Math.max(from.matched.length, to.matched.length);
	    for (let i = 0; i < len; i++) {
	        const recordFrom = from.matched[i];
	        if (recordFrom) {
	            if (to.matched.indexOf(recordFrom) < 0)
	                leavingRecords.push(recordFrom);
	            else
	                updatingRecords.push(recordFrom);
	        }
	        const recordTo = to.matched[i];
	        if (recordTo) {
	            // the type doesn't matter because we are comparing per reference
	            if (from.matched.indexOf(recordTo) < 0)
	                enteringRecords.push(recordTo);
	        }
	    }
	    return [leavingRecords, updatingRecords, enteringRecords];
	}

	var script$1 = {

	  };

	const _hoisted_1$1 = /*#__PURE__*/createVNode("h1", { class: "mt-0" }, "Rest Css Framework", -1 /* HOISTED */);
	const _hoisted_2$1 = /*#__PURE__*/createVNode("div", { class: "p-3 bdr bdr-theme:h d-ib rds-3 pos-rel zi-2 group-hover bg-theme:h txt-dark:h trs-03 cur-p" }, [
	  /*#__PURE__*/createVNode("div", null, "text"),
	  /*#__PURE__*/createVNode("div", { class: "pos-abs pos-t-100 pos-l-50 trf trf-tr-x-50-neg bg-success txt-light  rds-4 wh-nw mt-1 p-4 trs-03 scale-start scale-end:gh" }, "tooltip text")
	], -1 /* HOISTED */);

	function render$1(_ctx, _cache, $props, $setup, $data, $options) {
	  return (openBlock(), createBlock("div", null, [
	    _hoisted_1$1,
	    _hoisted_2$1
	  ]))
	}

	script$1.render = render$1;
	script$1.__file = "src/js/pages/Home.vue";

	const cssVars = [...document.styleSheets]
	  .filter(sheet => sheet.href === null || sheet.href.includes('main'))
	  .reduce((acc, sheet) => (acc = [
	    ...acc,
	    ...[...sheet.cssRules].reduce((def, rule) => (def = rule.selectorText === ':root' ? [...def, ...[...rule.style].filter(name => name.startsWith("--"))]: def), [])
	  ]),[]);

	const cssColorVars = cssVars.filter(variable => variable.includes('--color'));

	const colorsArrayBuilder = (classNames, firstItemProps) => {
	  const colorsArray = [];

	  cssColorVars.map((color, idx) => {
	    let colorObject = {value: `${classNames}${color.replace('--color-', '')}`};
	    if (firstItemProps && idx === 0) {
	      colorObject = {
	        ...colorObject,
	        ...firstItemProps
	      };
	    }
	    colorsArray.push(colorObject);
	  });

	  colorsArray.push(
	    {value: `${classNames}current`},
	    {value: `${classNames}trsp`},
	  );

	  return colorsArray
	};

	var script$2 = {
	    setup(){

	      const changeSelect = (e, model) => {
	        console.log(e, model);
	        border[model] = e[0];
	      };

	      const border = reactive({
	        width: '',
	        direction: 'bdr',
	        breakpoint: ''
	      });

	      const breakpoints = reactive([
	        {value: '', text: 'Default'},
	        {value: ':sm', text: 'Small - 420px'},
	        {value: ':md', text: 'Medium - 768px'},
	        {value: ':lg', text: 'Large - 1024px'},
	        {value: ':xl', text: 'Extra Large - 1280px'},
	      ]);

	      const borderWidth = reactive([
	        {value: '', text: 'Default'},
	        {value: 'bdr-wd-1', text: 'Border width 1px'},
	        {value: 'bdr-wd-2', text: 'Border width 2px'},
	        {value: 'bdr-wd-3', text: 'Border width 3px'},
	        {value: 'bdr-wd-4', text: 'Border width 4px'},
	        {value: 'bdr-wd-5', text: 'Border width 5px'},
	        {value: 'bdr-wd-5', text: 'Border width 5px'},
	        {value: 'bdr-wd-6', text: 'Border width 6px'},
	        {value: 'bdr-wd-7', text: 'Border width 7px'},
	        {value: 'bdr-wd-8', text: 'Border width 8px'},
	        {value: 'bdr-wd-9', text: 'Border width 8px'},
	        {value: 'bdr-wd-10', text: 'Border width 10px'},
	        {value: 'bdr-wd-11', text: 'Border width 11px'},
	        {value: 'bdr-wd-12', text: 'Border width 12px'},
	        {value: 'bdr-wd-0', text: 'Border width 0'},
	      ]);

	      const borderDirection = reactive([
	        {value: 'bdr', text: 'Default'},
	        {value: 'bdr-t', text: 'Border top'},
	        {value: 'bdr-l', text: 'Border left'},
	        {value: 'bdr-r', text: 'Border right'},
	        {value: 'bdr-b', text: 'Border bottom'},
	        {value: 'bdr-y', text: 'Border vertical'},
	        {value: 'bdr-x', text: 'Border horizontal'},
	      ]);

	      const borderAllClassList = reactive([
	        {value: 'bdr'},
	        {value: 'bdr-l'},
	        {value: 'bdr-r'},
	        {value: 'bdr-t'},
	        {value: 'bdr-b'},
	        {value: 'bdr-x'},
	        {value: 'bdr-y'},

	        {value: 'bdr bdr-wd-1', sectionName: 'Border width', sectionColor: 'success'},
	        {value: 'bdr bdr-wd-2'},
	        {value: 'bdr bdr-wd-3'},
	        {value: 'bdr bdr-wd-4'},
	        {value: 'bdr bdr-wd-5'},
	        {value: 'bdr bdr-wd-6'},
	        {value: 'bdr bdr-wd-7'},
	        {value: 'bdr bdr-wd-8'},
	        {value: 'bdr bdr-wd-9'},
	        {value: 'bdr bdr-wd-10'},
	        {value: 'bdr bdr-wd-11'},
	        {value: 'bdr bdr-wd-12'},
	        {value: 'bdr bdr-wd-0'},

	        {value: 'bdr bdr-t-wd-1'},
	        {value: 'bdr bdr-t-wd-2'},
	        {value: 'bdr bdr-t-wd-3'},
	        {value: 'bdr bdr-t-wd-4'},
	        {value: 'bdr bdr-t-wd-5'},
	        {value: 'bdr bdr-t-wd-6'},
	        {value: 'bdr bdr-t-wd-7'},
	        {value: 'bdr bdr-t-wd-8'},
	        {value: 'bdr bdr-t-wd-9'},
	        {value: 'bdr bdr-t-wd-10'},
	        {value: 'bdr bdr-t-wd-11'},
	        {value: 'bdr bdr-t-wd-12'},
	        {value: 'bdr bdr-t-wd-0'},

	        {value: 'bdr bdr-r-wd-1'},
	        {value: 'bdr bdr-r-wd-2'},
	        {value: 'bdr bdr-r-wd-3'},
	        {value: 'bdr bdr-r-wd-4'},
	        {value: 'bdr bdr-r-wd-5'},
	        {value: 'bdr bdr-r-wd-6'},
	        {value: 'bdr bdr-r-wd-7'},
	        {value: 'bdr bdr-r-wd-8'},
	        {value: 'bdr bdr-r-wd-9'},
	        {value: 'bdr bdr-r-wd-10'},
	        {value: 'bdr bdr-r-wd-11'},
	        {value: 'bdr bdr-r-wd-12'},
	        {value: 'bdr bdr-r-wd-0'},

	        {value: 'bdr bdr-b-wd-1'},
	        {value: 'bdr bdr-b-wd-2'},
	        {value: 'bdr bdr-b-wd-3'},
	        {value: 'bdr bdr-b-wd-4'},
	        {value: 'bdr bdr-b-wd-5'},
	        {value: 'bdr bdr-b-wd-6'},
	        {value: 'bdr bdr-b-wd-7'},
	        {value: 'bdr bdr-b-wd-8'},
	        {value: 'bdr bdr-b-wd-9'},
	        {value: 'bdr bdr-b-wd-10'},
	        {value: 'bdr bdr-b-wd-11'},
	        {value: 'bdr bdr-b-wd-12'},
	        {value: 'bdr bdr-b-wd-0'},

	        {value: 'bdr bdr-l-wd-1'},
	        {value: 'bdr bdr-l-wd-2'},
	        {value: 'bdr bdr-l-wd-3'},
	        {value: 'bdr bdr-l-wd-4'},
	        {value: 'bdr bdr-l-wd-5'},
	        {value: 'bdr bdr-l-wd-6'},
	        {value: 'bdr bdr-l-wd-7'},
	        {value: 'bdr bdr-l-wd-8'},
	        {value: 'bdr bdr-l-wd-9'},
	        {value: 'bdr bdr-l-wd-10'},
	        {value: 'bdr bdr-l-wd-11'},
	        {value: 'bdr bdr-l-wd-12'},
	        {value: 'bdr bdr-l-wd-0'},

	        {value: 'bdr bdr-x-wd-1'},
	        {value: 'bdr bdr-x-wd-2'},
	        {value: 'bdr bdr-x-wd-3'},
	        {value: 'bdr bdr-x-wd-4'},
	        {value: 'bdr bdr-x-wd-5'},
	        {value: 'bdr bdr-x-wd-6'},
	        {value: 'bdr bdr-x-wd-7'},
	        {value: 'bdr bdr-x-wd-8'},
	        {value: 'bdr bdr-x-wd-9'},
	        {value: 'bdr bdr-x-wd-10'},
	        {value: 'bdr bdr-x-wd-11'},
	        {value: 'bdr bdr-x-wd-12'},
	        {value: 'bdr bdr-x-wd-0'},

	        {value: 'bdr bdr-y-wd-1'},
	        {value: 'bdr bdr-y-wd-2'},
	        {value: 'bdr bdr-y-wd-3'},
	        {value: 'bdr bdr-y-wd-4'},
	        {value: 'bdr bdr-y-wd-5'},
	        {value: 'bdr bdr-y-wd-6'},
	        {value: 'bdr bdr-y-wd-7'},
	        {value: 'bdr bdr-y-wd-8'},
	        {value: 'bdr bdr-y-wd-9'},
	        {value: 'bdr bdr-y-wd-10'},
	        {value: 'bdr bdr-y-wd-11'},
	        {value: 'bdr bdr-y-wd-12'},
	        {value: 'bdr bdr-y-wd-0'},

	        {value: 'bdr bdr-dsh', sectionName: 'Border style', sectionColor: 'warning'},
	        {value: 'bdr bdr-dt'},
	        {value: 'bdr bdr-sl'},
	        {value: 'bdr bdr-t-dsh'},
	        {value: 'bdr bdr-t-dt'},
	        {value: 'bdr bdr-t-sl'},
	        {value: 'bdr bdr-r-dsh'},
	        {value: 'bdr bdr-r-dt'},
	        {value: 'bdr bdr-r-sl'},
	        {value: 'bdr bdr-b-dsh'},
	        {value: 'bdr bdr-b-dt'},
	        {value: 'bdr bdr-b-sl'},
	        {value: 'bdr bdr-l-dsh'},
	        {value: 'bdr bdr-l-dt'},
	        {value: 'bdr bdr-l-sl'},
	        {value: 'bdr bdr-x-dsh'},
	        {value: 'bdr bdr-x-dt'},
	        {value: 'bdr bdr-x-sl'},
	        {value: 'bdr bdr-y-dsh'},
	        {value: 'bdr bdr-y-dt'},
	        {value: 'bdr bdr-y-sl'},

	        {value: 'bdr bdr-op-100', sectionName: 'Border opacity', sectionColor: 'info'},
	        {value: 'bdr bdr-op-90'},
	        {value: 'bdr bdr-op-80'},
	        {value: 'bdr bdr-op-70'},
	        {value: 'bdr bdr-op-60'},
	        {value: 'bdr bdr-op-50'},
	        {value: 'bdr bdr-op-40'},
	        {value: 'bdr bdr-op-30'},
	        {value: 'bdr bdr-op-20'},
	        {value: 'bdr bdr-op-10'},
	        {value: 'bdr bdr-op-0'},
	      ]);

	      borderAllClassList.push(
	        ...colorsArrayBuilder(
	          'bdr bdr-',
	          {sectionName: 'Border colors', sectionColor: 'warning'}
	        )
	      );

	      return {
	        border,
	        borderAllClassList,
	        borderWidth,
	        borderDirection,
	        breakpoints,
	        changeSelect
	      }
	    },
	  };

	const _hoisted_1$2 = { class: "rs-borders" };
	const _hoisted_2$2 = /*#__PURE__*/createVNode("h1", { class: "mt-0" }, "Borders", -1 /* HOISTED */);
	const _hoisted_3$1 = /*#__PURE__*/createVNode("p", null, [
	  /*#__PURE__*/createTextVNode("Change classnames and values in file "),
	  /*#__PURE__*/createVNode("strong", { class: "txt-warning-1 font-we-700" }, "utils/border.scss")
	], -1 /* HOISTED */);
	const _hoisted_4$1 = { class: "case case-cells-1 case-cells-2:md mb-8 ml-5-neg" };
	const _hoisted_5 = { class: "cell pl-5 pb-5" };
	const _hoisted_6 = { class: "cell pl-5 pb-5" };
	const _hoisted_7 = { class: "cell pl-5 pb-5" };
	const _hoisted_8 = { class: "txt-primary" };
	const _hoisted_9 = /*#__PURE__*/createTextVNode();
	const _hoisted_10 = { class: "txt-success" };
	const _hoisted_11 = /*#__PURE__*/createVNode("div", { class: "font-sz-21 font-we-700 my-8" }, "Border utility class names", -1 /* HOISTED */);
	const _hoisted_12 = { class: "sh-1 p-2 mb-3" };
	const _hoisted_13 = { class: "case case-cells-1 case-cells-2:md ai-c" };
	const _hoisted_14 = { class: "cell pb-3 pb-0:md" };
	const _hoisted_15 = { class: "font-we-500 txt-dark txt-op-60" };
	const _hoisted_16 = { class: "cell pb-3 pb-0:md" };

	function render$2(_ctx, _cache, $props, $setup, $data, $options) {
	  const _component_rs_select = resolveComponent("rs-select");

	  return (openBlock(), createBlock("div", _hoisted_1$2, [
	    _hoisted_2$2,
	    _hoisted_3$1,
	    createVNode("div", _hoisted_4$1, [
	      createVNode("div", _hoisted_5, [
	        createVNode(_component_rs_select, {
	          title: "Border direction",
	          items: $setup.borderDirection,
	          onSelectValueChange: _cache[1] || (_cache[1] = $event => ($setup.changeSelect($event, 'direction')))
	        }, null, 8 /* PROPS */, ["items"])
	      ]),
	      createVNode("div", _hoisted_6, [
	        createVNode(_component_rs_select, {
	          title: "Breakpoints",
	          titleColor: "primary",
	          items: $setup.breakpoints,
	          onSelectValueChange: _cache[2] || (_cache[2] = $event => ($setup.changeSelect($event, 'breakpoint')))
	        }, null, 8 /* PROPS */, ["items"])
	      ]),
	      createVNode("div", _hoisted_7, [
	        createVNode(_component_rs_select, {
	          title: "Border width",
	          titleColor: "success",
	          items: $setup.borderWidth,
	          onSelectValueChange: _cache[3] || (_cache[3] = $event => ($setup.changeSelect($event, 'width')))
	        }, null, 8 /* PROPS */, ["items"])
	      ])
	    ]),
	    createVNode("div", {
	      class: ["p-4 ov-x-a font-sz-18 mb-8", [
	        $setup.border.direction+$setup.border.breakpoint,
	        $setup.border.width
	      ]]
	    }, [
	      createTextVNode(toDisplayString($setup.border.direction), 1 /* TEXT */),
	      createVNode("span", _hoisted_8, toDisplayString($setup.border.breakpoint), 1 /* TEXT */),
	      _hoisted_9,
	      createVNode("span", _hoisted_10, toDisplayString($setup.border.width), 1 /* TEXT */)
	    ], 2 /* CLASS */),
	    _hoisted_11,
	    (openBlock(true), createBlock(Fragment, null, renderList($setup.borderAllClassList, (item) => {
	      return (openBlock(), createBlock("div", {
	        key: item.value
	      }, [
	        (item.sectionName)
	          ? (openBlock(), createBlock("div", {
	              key: 0,
	              class: ["font-sz-18 font-we-700 my-8", `txt-${item.sectionColor}`]
	            }, toDisplayString(item.sectionName), 3 /* TEXT, CLASS */))
	          : createCommentVNode("v-if", true),
	        createVNode("div", _hoisted_12, [
	          createVNode("div", _hoisted_13, [
	            createVNode("div", _hoisted_14, [
	              createVNode("div", _hoisted_15, toDisplayString(item.value), 1 /* TEXT */)
	            ]),
	            createVNode("div", _hoisted_16, [
	              createVNode("div", {
	                class: ["p-5", [item.value]]
	              }, null, 2 /* CLASS */)
	            ])
	          ])
	        ])
	      ]))
	    }), 128 /* KEYED_FRAGMENT */))
	  ]))
	}

	script$2.render = render$2;
	script$2.__file = "src/js/pages/Borders.vue";

	var script$3 = {
	    setup(){

	      const colors = cssColorVars;
	      const colorValue = ref(['txt', 'text']);
	      const statesValue = ref(['', 'default']);
	      const colorUtilities = reactive([
	        {value: 'txt', text: 'text'},
	        {value: 'bg', text: 'background'},
	        {value: 'sh', text: 'shadow'},
	        {value: 'bdr', text: 'border'},
	      ]);

	      const states = reactive([
	        {value: '', text: 'default'},
	        {value: ':h', text: 'hover'},
	        {value: ':f', text: 'focus'},
	        {value: ':fw', text: 'focus-within'},
	        {value: ':fv', text: 'focus-visible'},
	        {value: ':pl', text: 'placeholder'},
	      ]);

	      const changeUtilies = e => {
	        colorValue.value = e;
	      };

	      const changeState = e => {
	        statesValue.value = e;
	      };

	      return {
	        colors,
	        colorValue,
	        colorUtilities,
	        changeUtilies,
	        states,
	        statesValue,
	        changeState
	      }
	    }
	  };

	const _hoisted_1$3 = /*#__PURE__*/createVNode("h1", { class: "mt-0" }, "Colors", -1 /* HOISTED */);
	const _hoisted_2$3 = /*#__PURE__*/createVNode("div", { class: "mb-8" }, [
	  /*#__PURE__*/createVNode("p", null, [
	    /*#__PURE__*/createTextVNode("Extend or replace colors list in file "),
	    /*#__PURE__*/createVNode("strong", { class: "txt-warning-1 font-we-700" }, "_vars.scss")
	  ])
	], -1 /* HOISTED */);
	const _hoisted_3$2 = { class: "case case-cells-1 case-cells-2:md mb-8 ml-5-neg" };
	const _hoisted_4$2 = { class: "cell pl-5 pb-5" };
	const _hoisted_5$1 = { class: "cell pl-5 pb-5" };
	const _hoisted_6$1 = { class: "case case-cells-1 case-cells-3:md ai-c" };
	const _hoisted_7$1 = { class: "cell pb-3 pb-0:md" };
	const _hoisted_8$1 = { class: "font-we-500" };
	const _hoisted_9$1 = { class: "txt-success" };
	const _hoisted_10$1 = { class: "txt-primary" };
	const _hoisted_11$1 = { class: "cell pb-3 pb-0:md" };
	const _hoisted_12$1 = { class: "cell pb-3 pb-0:md" };

	function render$3(_ctx, _cache, $props, $setup, $data, $options) {
	  const _component_rs_select = resolveComponent("rs-select");

	  return (openBlock(), createBlock(Fragment, null, [
	    _hoisted_1$3,
	    _hoisted_2$3,
	    createVNode("div", _hoisted_3$2, [
	      createVNode("div", _hoisted_4$2, [
	        createVNode(_component_rs_select, {
	          title: "Color utility",
	          titleColor: "success",
	          items: $setup.colorUtilities,
	          onSelectValueChange: $setup.changeUtilies
	        }, null, 8 /* PROPS */, ["items", "onSelectValueChange"])
	      ]),
	      createVNode("div", _hoisted_5$1, [
	        createVNode(_component_rs_select, {
	          title: "Color states",
	          titleColor: "primary",
	          link: "/states",
	          linkText: "Pseudo",
	          items: $setup.states,
	          onSelectValueChange: $setup.changeState
	        }, null, 8 /* PROPS */, ["items", "onSelectValueChange"])
	      ])
	    ]),
	    (openBlock(true), createBlock(Fragment, null, renderList($setup.colors, (color) => {
	      return (openBlock(), createBlock("div", {
	        class: "sh-1 p-2 mb-3",
	        key: color
	      }, [
	        createVNode("div", _hoisted_6$1, [
	          createVNode("div", _hoisted_7$1, [
	            createVNode("div", _hoisted_8$1, [
	              createVNode("span", _hoisted_9$1, "." + toDisplayString($setup.statesValue[0] !== ':pl' ? $setup.colorValue[0] : 'txt'), 1 /* TEXT */),
	              createTextVNode("-" + toDisplayString(_ctx.$filters.cssVarName(color, '--color-')), 1 /* TEXT */),
	              createVNode("span", _hoisted_10$1, toDisplayString($setup.statesValue[0]), 1 /* TEXT */)
	            ])
	          ]),
	          createVNode("div", _hoisted_11$1, [
	            createVNode("div", {
	              class: ["sz-4 sh-1 rds-round mr-4", 'bg-'+_ctx.$filters.cssVarName(color, '--color-')]
	            }, null, 2 /* CLASS */)
	          ]),
	          createVNode("div", _hoisted_12$1, [
	            createVNode("div", {
	              class: 'txt-'+_ctx.$filters.cssVarName(color, '--color-')
	            }, toDisplayString(_ctx.$filters.cssVarName(color, '--color-')), 3 /* TEXT, CLASS */)
	          ])
	        ])
	      ]))
	    }), 128 /* KEYED_FRAGMENT */))
	  ], 64 /* STABLE_FRAGMENT */))
	}

	script$3.render = render$3;
	script$3.__file = "src/js/pages/Colors.vue";

	const routes = [
	  {
	    path: "/",
	    name: "Home",
	    component: script$1,
	  },
	  {
	    path: "/colors",
	    name: "Colors",
	    component: script$3,
	  },
	  {
	    path: "/borders",
	    name: "Borders",
	    component: script$2,
	  },
	];

	const router = createRouter({
	  history: createWebHistory(),
	  routes,
	});

	var script$4 = {
	    setup(){

	      const routesMenu = reactive(routes);

	      return {
	        routesMenu
	      }
	    }
	  };

	const _hoisted_1$4 = {
	  class: "rs-aside-menu d-f fd-c ai-fe ov-y-a pos-sti pos-t-13 pr-3",
	  style: {"height":"calc(100vh - 110px)"}
	};

	function render$4(_ctx, _cache, $props, $setup, $data, $options) {
	  const _component_router_link = resolveComponent("router-link");

	  return (openBlock(), createBlock("div", _hoisted_1$4, [
	    (openBlock(true), createBlock(Fragment, null, renderList($setup.routesMenu, (route) => {
	      return (openBlock(), createBlock(_component_router_link, {
	        class: "font-we-500 txt-r font-sz-15 mb-4 py-2 bdr-b bdr-b-wd-2 bdr-primary d-b txt-primary td-n",
	        key: route.name,
	        to: route.path,
	        "active-class": "txt-success bdr-success bdr-success:h"
	      }, {
	        default: withCtx(() => [
	          createTextVNode(toDisplayString(route.name), 1 /* TEXT */)
	        ]),
	        _: 2
	      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
	    }), 128 /* KEYED_FRAGMENT */))
	  ]))
	}

	script$4.render = render$4;
	script$4.__file = "src/js/components/Aside.vue";

	var script$5 = {
	    components: {
	      Header: script,
	      Aside: script$4
	    }
	  };

	const _hoisted_1$5 = { class: "pb-9" };
	const _hoisted_2$4 = { class: "container mx-a px-4 px-6:lg font-sz-16" };
	const _hoisted_3$3 = { class: "case ml-8-neg:lg" };
	const _hoisted_4$3 = { class: "cell cell-12 cell-3:lg pl-8:lg d-n d-b:lg" };
	const _hoisted_5$2 = { class: "cell cell-12 cell-9:lg pl-8:lg" };

	function render$5(_ctx, _cache, $props, $setup, $data, $options) {
	  const _component_Header = resolveComponent("Header");
	  const _component_Aside = resolveComponent("Aside");
	  const _component_router_view = resolveComponent("router-view");

	  return (openBlock(), createBlock("div", _hoisted_1$5, [
	    createVNode(_component_Header),
	    createVNode("section", _hoisted_2$4, [
	      createVNode("div", _hoisted_3$3, [
	        createVNode("aside", _hoisted_4$3, [
	          createVNode(_component_Aside)
	        ]),
	        createVNode("main", _hoisted_5$2, [
	          createVNode(_component_router_view)
	        ])
	      ])
	    ])
	  ]))
	}

	script$5.render = render$5;
	script$5.__file = "src/js/App.vue";

	var script$6 = {
	    props: ['addClass', 'name']
	  };

	function render$6(_ctx, _cache, $props, $setup, $data, $options) {
	  return (openBlock(), createBlock("div", {
	    class: ["svg-icon", $props.addClass]
	  }, [
	    (openBlock(), createBlock("svg", null, [
	      createVNode("use", {
	        "xlink:href": '#'+$props.name
	      }, null, 8 /* PROPS */, ["xlink:href"])
	    ]))
	  ], 2 /* CLASS */))
	}

	script$6.render = render$6;
	script$6.__file = "src/js/components/Icon.vue";

	var script$7 = {
	    props: [
	      'items',
	      'title',
	      'titleColor',
	      'link',
	      'linkText'
	    ],
	    emits: ['selectValueChange'],
	    setup(props, ctx){

	      const selectOptions = reactive(props.items);

	      const changeSelect = e => {
	        ctx.emit('selectValueChange', [e.target.value, e.target.options[e.target.selectedIndex].text]);
	      };

	      return {
	        selectOptions,
	        changeSelect
	      }
	    }
	  };

	const _hoisted_1$6 = { class: "d-f fw-wr mb-3" };
	const _hoisted_2$5 = { key: 0 };

	function render$7(_ctx, _cache, $props, $setup, $data, $options) {
	  const _component_router_link = resolveComponent("router-link");

	  return (openBlock(), createBlock(Fragment, null, [
	    createVNode("div", _hoisted_1$6, [
	      createVNode("strong", {
	        class: ["mr-4", `txt-${$props.titleColor}`]
	      }, toDisplayString($props.title), 3 /* TEXT, CLASS */),
	      ($props.link)
	        ? (openBlock(), createBlock("span", _hoisted_2$5, [
	            createVNode(_component_router_link, {
	              to: $props.link,
	              class: "td-n td-u:h txt-theme-1"
	            }, {
	              default: withCtx(() => [
	                createTextVNode("(" + toDisplayString($props.linkText) + ")", 1 /* TEXT */)
	              ]),
	              _: 1
	            }, 8 /* PROPS */, ["to"])
	          ]))
	        : createCommentVNode("v-if", true)
	    ]),
	    createVNode("select", {
	      class: "p-4 bdr bdr-wd-2 bdr-secondary bdr-primary:f rds-5 out-n wd-full",
	      onChange: _cache[1] || (_cache[1] = (...args) => ($setup.changeSelect(...args)))
	    }, [
	      (openBlock(true), createBlock(Fragment, null, renderList($setup.selectOptions, (item) => {
	        return (openBlock(), createBlock("option", {
	          class: item.optionClass,
	          value: item.value,
	          key: item.value
	        }, toDisplayString(item.text), 11 /* TEXT, CLASS, PROPS */, ["value"]))
	      }), 128 /* KEYED_FRAGMENT */))
	    ], 32 /* HYDRATE_EVENTS */)
	  ], 64 /* STABLE_FRAGMENT */))
	}

	script$7.render = render$7;
	script$7.__file = "src/js/components/Select.vue";

	document.body.insertAdjacentHTML('beforeEnd', sprite);
	const app = createApp(script$5);

	app.component('svg-icon', script$6);
	app.component('rs-select', script$7);

	app.use(router).mount("#framework-app");

	// filters
	app.config.globalProperties.$filters = {
	  cssVarName(value, removeablePrefix){
	    return value.replace(removeablePrefix, '')
	  }
	};

}());
//# sourceMappingURL=main.js.map
