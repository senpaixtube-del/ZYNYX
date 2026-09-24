import { i as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { $ as Line, $t as Spherical, A as DepthTexture, At as PerspectiveCamera, B as IcosahedronGeometry, Bt as RGBAFormat, D as DataTextureLoader, Dt as OctahedronGeometry, Et as Object3D, Gt as SRGBColorSpace, Ht as Raycaster, I as Float32BufferAttribute, Kt as Scene, L as FloatType, Lt as Quaternion, M as Euler, Mt as PlaneGeometry, O as DataUtils, Ot as OrthographicCamera$1, Q as Layers, Qt as SphereGeometry, T as CylinderGeometry, U as InstancedBufferAttribute, Ut as RedFormat, Vt as Ray, W as InstancedBufferGeometry, Zt as Sphere, _t as MeshDistanceMaterial, a as WebGLCubeRenderTarget, an as TorusGeometry, b as Color, cn as Uniform, d as Box3, dt as MathUtils, et as LineBasicMaterial, f as BoxGeometry, fn as Vector2, ft as Matrix3, gn as WebGLRenderTarget, gt as MeshDepthMaterial, h as CanvasTexture, ht as MeshBasicMaterial, jt as Plane, ln as UniformsUtils, lt as MOUSE, m as BufferGeometry, mn as Vector4, mt as Mesh, n as HDRJPGLoader, nn as Texture, o as WebGLRenderer, ot as LinearSRGBColorSpace, pn as Vector3, pt as Matrix4, qt as ShaderMaterial, r as ShaderChunk, rt as LinearFilter, s as three_module_exports, t as GainMapLoader, tn as TOUCH, w as CubeTextureLoader, x as ColorManagement, y as Clock, z as HalfFloatType, zt as RGBADepthPacking } from "../monogrid__gainmap-js+three.mjs";
import { t as _extends } from "../babel__runtime.mjs";
import { createRequire } from "module";
//#region node_modules/react/cjs/react.production.js
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_PORTAL_TYPE = Symbol.for("react.portal");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	};
	var assign = Object.assign;
	var emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null
	};
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	var Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Activity = REACT_ACTIVITY_TYPE;
	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size) {
			return ReactSharedInternals.H.useMemoCache(size);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cacheSignal = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			null !== prevTransition && null !== currentTransition.types && (prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, deps) {
		return ReactSharedInternals.H.useEffect(create, deps);
	};
	exports.useEffectEvent = function(callback) {
		return ReactSharedInternals.H.useEffectEvent(callback);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.2.8";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production();
}));
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/zustand/esm/vanilla.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore$1 = ((createState) => createState ? createStoreImpl(createState) : createStoreImpl);
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useState = React.useState;
	var useEffect = React.useEffect;
	var useLayoutEffect = React.useLayoutEffect;
	var useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	var shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	var useSyncExternalStore = shim.useSyncExternalStore;
	var useRef = React.useRef;
	var useEffect = React.useEffect;
	var useMemo = React.useMemo;
	var useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
//#endregion
//#region node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
}));
var { useSyncExternalStoreWithSelector } = (/* @__PURE__ */ __toESM(require_with_selector(), 1)).default;
var identity = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
	const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
	import_react.useDebugValue(slice);
	return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
	const api = createStore$1(createState);
	const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
	Object.assign(useBoundStoreWithEqualityFn, api);
	return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = ((createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl);
//#endregion
//#region node_modules/suspend-react/index.js
var isPromise = (promise) => typeof promise === "object" && typeof promise.then === "function";
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {
	if (arrA === arrB) return true;
	if (!arrA || !arrB) return false;
	const len = arrA.length;
	if (arrB.length !== len) return false;
	for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;
	return true;
}
function query(fn, keys = null, preload = false, config = {}) {
	if (keys === null) keys = [fn];
	for (const entry of globalCache) if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
		if (preload) return void 0;
		if (Object.prototype.hasOwnProperty.call(entry, "error")) throw entry.error;
		if (Object.prototype.hasOwnProperty.call(entry, "response")) {
			if (config.lifespan && config.lifespan > 0) {
				if (entry.timeout) clearTimeout(entry.timeout);
				entry.timeout = setTimeout(entry.remove, config.lifespan);
			}
			return entry.response;
		}
		if (!preload) throw entry.promise;
	}
	const entry = {
		keys,
		equal: config.equal,
		remove: () => {
			const index = globalCache.indexOf(entry);
			if (index !== -1) globalCache.splice(index, 1);
		},
		promise: (isPromise(fn) ? fn : fn(...keys)).then((response) => {
			entry.response = response;
			if (config.lifespan && config.lifespan > 0) entry.timeout = setTimeout(entry.remove, config.lifespan);
		}).catch((error) => entry.error = error)
	};
	globalCache.push(entry);
	if (!preload) throw entry.promise;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);
var preload = (fn, keys, config) => void query(fn, keys, true, config);
var clear = (keys) => {
	if (keys === void 0 || keys.length === 0) globalCache.splice(0, globalCache.length);
	else {
		const entry = globalCache.find((entry) => shallowEqualArrays(keys, entry.keys, entry.equal));
		if (entry) entry.remove();
	}
};
//#endregion
//#region node_modules/@react-three/fiber/node_modules/scheduler/cjs/scheduler.production.js
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	function push(heap, node) {
		var index = heap.length;
		heap.push(node);
		a: for (; 0 < index;) {
			var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
			if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
			else break a;
		}
	}
	function peek(heap) {
		return 0 === heap.length ? null : heap[0];
	}
	function pop(heap) {
		if (0 === heap.length) return null;
		var first = heap[0], last = heap.pop();
		if (last !== first) {
			heap[0] = last;
			a: for (var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;) {
				var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
				if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
				else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
				else break a;
			}
		}
		return first;
	}
	function compare(a, b) {
		var diff = a.sortIndex - b.sortIndex;
		return 0 !== diff ? diff : a.id - b.id;
	}
	exports.unstable_now = void 0;
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var localPerformance = performance;
		exports.unstable_now = function() {
			return localPerformance.now();
		};
	} else {
		var localDate = Date, initialTime = localDate.now();
		exports.unstable_now = function() {
			return localDate.now() - initialTime;
		};
	}
	var taskQueue = [];
	var timerQueue = [];
	var taskIdCounter = 1;
	var currentTask = null;
	var currentPriorityLevel = 3;
	var isPerformingWork = !1;
	var isHostCallbackScheduled = !1;
	var isHostTimeoutScheduled = !1;
	var needsPaint = !1;
	var localSetTimeout = "function" === typeof setTimeout ? setTimeout : null;
	var localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null;
	var localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
	function advanceTimers(currentTime) {
		for (var timer = peek(timerQueue); null !== timer;) {
			if (null === timer.callback) pop(timerQueue);
			else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
			else break;
			timer = peek(timerQueue);
		}
	}
	function handleTimeout(currentTime) {
		isHostTimeoutScheduled = !1;
		advanceTimers(currentTime);
		if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
		else {
			var firstTimer = peek(timerQueue);
			null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		}
	}
	var isMessageLoopRunning = !1;
	var taskTimeoutID = -1;
	var frameInterval = 5;
	var startTime = -1;
	function shouldYieldToHost() {
		return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
	}
	function performWorkUntilDeadline() {
		needsPaint = !1;
		if (isMessageLoopRunning) {
			var currentTime = exports.unstable_now();
			startTime = currentTime;
			var hasMoreWork = !0;
			try {
				a: {
					isHostCallbackScheduled = !1;
					isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
					isPerformingWork = !0;
					var previousPriorityLevel = currentPriorityLevel;
					try {
						b: {
							advanceTimers(currentTime);
							for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());) {
								var callback = currentTask.callback;
								if ("function" === typeof callback) {
									currentTask.callback = null;
									currentPriorityLevel = currentTask.priorityLevel;
									var continuationCallback = callback(currentTask.expirationTime <= currentTime);
									currentTime = exports.unstable_now();
									if ("function" === typeof continuationCallback) {
										currentTask.callback = continuationCallback;
										advanceTimers(currentTime);
										hasMoreWork = !0;
										break b;
									}
									currentTask === peek(taskQueue) && pop(taskQueue);
									advanceTimers(currentTime);
								} else pop(taskQueue);
								currentTask = peek(taskQueue);
							}
							if (null !== currentTask) hasMoreWork = !0;
							else {
								var firstTimer = peek(timerQueue);
								null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
								hasMoreWork = !1;
							}
						}
						break a;
					} finally {
						currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
					}
					hasMoreWork = void 0;
				}
			} finally {
				hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
			}
		}
	}
	var schedulePerformWorkUntilDeadline;
	if ("function" === typeof localSetImmediate) schedulePerformWorkUntilDeadline = function() {
		localSetImmediate(performWorkUntilDeadline);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var channel = new MessageChannel(), port = channel.port2;
		channel.port1.onmessage = performWorkUntilDeadline;
		schedulePerformWorkUntilDeadline = function() {
			port.postMessage(null);
		};
	} else schedulePerformWorkUntilDeadline = function() {
		localSetTimeout(performWorkUntilDeadline, 0);
	};
	function requestHostTimeout(callback, ms) {
		taskTimeoutID = localSetTimeout(function() {
			callback(exports.unstable_now());
		}, ms);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(task) {
		task.callback = null;
	};
	exports.unstable_forceFrameRate = function(fps) {
		0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return currentPriorityLevel;
	};
	exports.unstable_next = function(eventHandler) {
		switch (currentPriorityLevel) {
			case 1:
			case 2:
			case 3:
				var priorityLevel = 3;
				break;
			default: priorityLevel = currentPriorityLevel;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_requestPaint = function() {
		needsPaint = !0;
	};
	exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
		switch (priorityLevel) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: priorityLevel = 3;
		}
		var previousPriorityLevel = currentPriorityLevel;
		currentPriorityLevel = priorityLevel;
		try {
			return eventHandler();
		} finally {
			currentPriorityLevel = previousPriorityLevel;
		}
	};
	exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
		var currentTime = exports.unstable_now();
		"object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
		switch (priorityLevel) {
			case 1:
				var timeout = -1;
				break;
			case 2:
				timeout = 250;
				break;
			case 5:
				timeout = 1073741823;
				break;
			case 4:
				timeout = 1e4;
				break;
			default: timeout = 5e3;
		}
		timeout = options + timeout;
		priorityLevel = {
			id: taskIdCounter++,
			callback,
			priorityLevel,
			startTime: options,
			expirationTime: timeout,
			sortIndex: -1
		};
		options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
		return priorityLevel;
	};
	exports.unstable_shouldYield = shouldYieldToHost;
	exports.unstable_wrapCallback = function(callback) {
		var parentPriorityLevel = currentPriorityLevel;
		return function() {
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = parentPriorityLevel;
			try {
				return callback.apply(this, arguments);
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		};
	};
}));
//#endregion
//#region node_modules/@react-three/fiber/node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production();
}));
//#endregion
//#region node_modules/its-fine/dist/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_scheduler = /* @__PURE__ */ __toESM(require_scheduler());
/* @__PURE__ */ (() => {
	var e, t;
	return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? import_react.useLayoutEffect : import_react.useEffect;
function i$3(e, t, r) {
	if (!e) return;
	if (r(e) === !0) return e;
	let n = t ? e.return : e.child;
	for (; n;) {
		const u = i$3(n, t, r);
		if (u) return u;
		n = t ? null : n.sibling;
	}
}
function l(e) {
	try {
		return Object.defineProperties(e, {
			_currentRenderer: {
				get() {
					return null;
				},
				set() {}
			},
			_currentRenderer2: {
				get() {
					return null;
				},
				set() {}
			}
		});
	} catch (t) {
		return e;
	}
}
var a = /* @__PURE__ */ l(/* @__PURE__ */ import_react.createContext(null));
var m = class extends import_react.Component {
	render() {
		return /* @__PURE__ */ import_react.createElement(a.Provider, { value: this._reactInternals }, this.props.children);
	}
};
function c() {
	const e = import_react.useContext(a);
	if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
	const t = import_react.useId();
	return import_react.useMemo(() => {
		for (const n of [e, e == null ? void 0 : e.alternate]) {
			if (!n) continue;
			const u = i$3(n, !1, (d) => {
				let s = d.memoizedState;
				for (; s;) {
					if (s.memoizedState === t) return !0;
					s = s.next;
				}
			});
			if (u) return u;
		}
	}, [e, t]);
}
var p$1 = Symbol.for("react.context");
var b = (e) => e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p$1;
function h() {
	const e = c(), [t] = import_react.useState(() => /* @__PURE__ */ new Map());
	t.clear();
	let r = e;
	for (; r;) {
		const n = r.type;
		b(n) && n !== a && !t.has(n) && t.set(n, import_react.use(l(n))), r = r.return;
	}
	return t;
}
function x$1() {
	const e = h();
	return import_react.useMemo(() => Array.from(e.keys()).reduce((t, r) => (n) => /* @__PURE__ */ import_react.createElement(t, null, /* @__PURE__ */ import_react.createElement(r.Provider, {
		...n,
		value: e.get(r)
	})), (t) => /* @__PURE__ */ import_react.createElement(m, { ...t })), [e]);
}
//#endregion
//#region node_modules/@react-three/fiber/dist/events-803f4abc.esm.js
/**
* Returns the instance's initial (outmost) root.
*/
function findInitialRoot(instance) {
	let root = instance.root;
	while (root.getState().previousRoot) root = root.getState().previousRoot;
	return root;
}
var isOrthographicCamera = (def) => def && def.isOrthographicCamera;
var isRef$1 = (obj) => obj && obj.hasOwnProperty("current");
var isColorRepresentation = (value) => value != null && (typeof value === "string" || typeof value === "number" || value.isColor);
/**
* An SSR-friendly useLayoutEffect.
*
* React currently throws a warning when using useLayoutEffect on the server.
* To get around it, we can conditionally useEffect on the server (no-op) and
* useLayoutEffect elsewhere.
*
* @see https://github.com/facebook/react/issues/14927
*/
var useIsomorphicLayoutEffect = /* @__PURE__ */ ((_window$document, _window$navigator) => typeof window !== "undefined" && (((_window$document = window.document) == null ? void 0 : _window$document.createElement) || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === "ReactNative"))() ? import_react.useLayoutEffect : import_react.useEffect;
function useMutableCallback(fn) {
	const ref = import_react.useRef(fn);
	useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
	return ref;
}
var noop = () => {};
function Gate({ promise, onSettled }) {
	import_react.use(promise);
	useIsomorphicLayoutEffect(onSettled, [onSettled]);
	return null;
}
/** Waits for a promise in a null subtree, re-rendering the caller once it settles either way. */
function useGate() {
	const [promise, setPromise] = import_react.useState(null);
	const onSettled = import_react.useCallback(() => setPromise(null), []);
	const waitFor = import_react.useCallback((next) => setPromise((current) => current != null ? current : Promise.resolve(next).then(noop, noop)), []);
	return [promise ? /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Gate, {
			promise,
			onSettled
		})
	}) : null, waitFor];
}
/**
* Bridges renderer Context and StrictMode from a primary renderer.
*/
function useBridge() {
	const fiber = c();
	const ContextBridge = x$1();
	return import_react.useMemo(() => ({ children }) => {
		const Root = !!i$3(fiber, true, (node) => node.type === import_react.StrictMode) ? import_react.StrictMode : import_react.Fragment;
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Root, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ContextBridge, { children }) });
	}, [fiber, ContextBridge]);
}
function Block({ set }) {
	useIsomorphicLayoutEffect(() => {
		set(new Promise(() => null));
		return () => set(false);
	}, [set]);
	return null;
}
var ErrorBoundary = /* @__PURE__ */ ((_ErrorBoundary) => (_ErrorBoundary = class ErrorBoundary extends import_react.Component {
	constructor(...args) {
		super(...args);
		this.state = { error: false };
	}
	componentDidCatch(err) {
		this.props.set(err);
	}
	render() {
		return this.state.error ? null : this.props.children;
	}
}, _ErrorBoundary.getDerivedStateFromError = () => ({ error: true }), _ErrorBoundary))();
function calculateDpr(dpr) {
	var _window$devicePixelRa;
	const target = typeof window !== "undefined" ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
	return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
/**
* Returns instance root state
*/
function getRootState(obj) {
	var _r3f;
	return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
}
var is = {
	obj: (a) => a === Object(a) && !is.arr(a) && typeof a !== "function",
	fun: (a) => typeof a === "function",
	str: (a) => typeof a === "string",
	num: (a) => typeof a === "number",
	boo: (a) => typeof a === "boolean",
	und: (a) => a === void 0,
	nul: (a) => a === null,
	arr: (a) => Array.isArray(a),
	equ(a, b, { arrays = "shallow", objects = "reference", strict = true } = {}) {
		if (typeof a !== typeof b || !!a !== !!b) return false;
		if (is.str(a) || is.num(a) || is.boo(a)) return a === b;
		const isObj = is.obj(a);
		if (isObj && objects === "reference") return a === b;
		const isArr = is.arr(a);
		if (isArr && arrays === "reference") return a === b;
		if ((isArr || isObj) && a === b) return true;
		let i;
		for (i in a) if (!(i in b)) return false;
		if (isObj && arrays === "shallow" && objects === "shallow") {
			for (i in strict ? b : a) if (!is.equ(a[i], b[i], {
				strict,
				objects: "reference"
			})) return false;
		} else for (i in strict ? b : a) if (a[i] !== b[i]) return false;
		if (is.und(i)) {
			if (isArr && a.length === 0 && b.length === 0) return true;
			if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
			if (a !== b) return false;
		}
		return true;
	}
};
function buildGraph(object) {
	const data = {
		nodes: {},
		materials: {},
		meshes: {}
	};
	if (object) object.traverse((obj) => {
		if (obj.name) data.nodes[obj.name] = obj;
		if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
		if (obj.isMesh && !data.meshes[obj.name]) data.meshes[obj.name] = obj;
	});
	return data;
}
function dispose(obj) {
	if (obj.type !== "Scene") obj.dispose == null || obj.dispose();
	for (const p in obj) {
		const prop = obj[p];
		if ((prop == null ? void 0 : prop.type) !== "Scene") prop == null || prop.dispose == null || prop.dispose();
	}
}
var REACT_INTERNAL_PROPS = [
	"children",
	"key",
	"ref"
];
function getInstanceProps(pendingProps) {
	const props = {};
	for (const key in pendingProps) if (!REACT_INTERNAL_PROPS.includes(key)) props[key] = pendingProps[key];
	return props;
}
function prepare(target, root, type, props) {
	const object = target;
	let instance = object == null ? void 0 : object.__r3f;
	if (!instance) {
		instance = {
			root,
			type,
			parent: null,
			children: [],
			props: getInstanceProps(props),
			object,
			eventCount: 0,
			handlers: {},
			isHidden: false
		};
		if (object) object.__r3f = instance;
	}
	return instance;
}
function resolve(root, key) {
	if (!key.includes("-")) return {
		root,
		key,
		target: root[key]
	};
	if (key in root) return {
		root,
		key,
		target: root[key]
	};
	let target = root;
	const parts = key.split("-");
	for (const part of parts) {
		if (typeof target !== "object" || target === null) {
			if (target !== void 0) {
				const remaining = parts.slice(parts.indexOf(part)).join("-");
				return {
					root: target,
					key: remaining,
					target: void 0
				};
			}
			return {
				root,
				key,
				target: void 0
			};
		}
		key = part;
		root = target;
		target = target[key];
	}
	return {
		root,
		key,
		target
	};
}
var INDEX_REGEX = /-\d+$/;
function attach(parent, child) {
	if (is.str(child.props.attach)) {
		if (INDEX_REGEX.test(child.props.attach)) {
			const index = child.props.attach.replace(INDEX_REGEX, "");
			const { root, key } = resolve(parent.object, index);
			if (!Array.isArray(root[key])) root[key] = [];
		}
		const { root, key } = resolve(parent.object, child.props.attach);
		child.previousAttach = root[key];
		root[key] = child.object;
	} else if (is.fun(child.props.attach)) child.previousAttach = child.props.attach(parent.object, child.object);
}
function detach(parent, child) {
	if (is.str(child.props.attach)) {
		const { root, key } = resolve(parent.object, child.props.attach);
		const previous = child.previousAttach;
		if (previous === void 0) delete root[key];
		else root[key] = previous;
	} else child.previousAttach == null || child.previousAttach(parent.object, child.object);
	delete child.previousAttach;
}
var RESERVED_PROPS = [
	...REACT_INTERNAL_PROPS,
	"args",
	"dispose",
	"attach",
	"object",
	"onUpdate",
	"dispose"
];
var MEMOIZED_PROTOTYPES = /* @__PURE__ */ new Map();
function getMemoizedPrototype(root) {
	let ctor = MEMOIZED_PROTOTYPES.get(root.constructor);
	try {
		if (!ctor) {
			ctor = new root.constructor();
			MEMOIZED_PROTOTYPES.set(root.constructor, ctor);
		}
	} catch (e) {}
	return ctor;
}
function diffProps(instance, newProps) {
	const changedProps = {};
	for (const prop in newProps) {
		if (RESERVED_PROPS.includes(prop)) continue;
		if (is.equ(newProps[prop], instance.props[prop])) continue;
		changedProps[prop] = newProps[prop];
		for (const other in newProps) if (other.startsWith(`${prop}-`)) changedProps[other] = newProps[other];
	}
	for (const prop in instance.props) {
		if (RESERVED_PROPS.includes(prop) || newProps.hasOwnProperty(prop)) continue;
		const { root, key } = resolve(instance.object, prop);
		if (root.constructor && root.constructor.length === 0) {
			const ctor = getMemoizedPrototype(root);
			if (!is.und(ctor)) changedProps[prop] = ctor[key];
		} else changedProps[prop] = 0;
	}
	return changedProps;
}
var colorMaps = [
	"map",
	"emissiveMap",
	"sheenColorMap",
	"specularColorMap",
	"envMap"
];
var EVENT_REGEX = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function applyProps(object, props) {
	var _instance$object;
	const instance = object.__r3f;
	const rootState = instance && findInitialRoot(instance).getState();
	const prevHandlers = instance == null ? void 0 : instance.eventCount;
	for (const prop in props) {
		let value = props[prop];
		if (RESERVED_PROPS.includes(prop)) continue;
		if (instance && EVENT_REGEX.test(prop)) {
			if (typeof value === "function") instance.handlers[prop] = value;
			else delete instance.handlers[prop];
			instance.eventCount = Object.keys(instance.handlers).length;
			continue;
		}
		if (value === void 0) continue;
		let { root, key, target } = resolve(object, prop);
		if (target === void 0 && (typeof root !== "object" || root === null)) throw Error(`R3F: Cannot set "${prop}". Ensure it is an object before setting "${key}".`);
		if (target instanceof Layers && value instanceof Layers) target.mask = value.mask;
		else if (target instanceof Color && isColorRepresentation(value)) target.set(value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof target.copy === "function" && value != null && value.constructor && target.constructor === value.constructor) target.copy(value);
		else if (target !== null && typeof target === "object" && typeof target.set === "function" && Array.isArray(value)) {
			if (typeof target.fromArray === "function") target.fromArray(value);
			else target.set(...value);
		} else if (target !== null && typeof target === "object" && typeof target.set === "function" && typeof value === "number") {
			if (typeof target.setScalar === "function") target.setScalar(value);
			else target.set(value);
		} else if (root instanceof ShaderMaterial && key === "uniforms" && is.obj(value)) {
			if (!is.obj(root.uniforms)) root.uniforms = {};
			const uniforms = root.uniforms;
			const nextUniforms = value;
			for (const name in nextUniforms) {
				const uniform = nextUniforms[name];
				const targetUniform = uniforms[name];
				if (targetUniform) Object.assign(targetUniform, uniform);
				else uniforms[name] = { ...uniform };
			}
		} else {
			var _root$key;
			root[key] = value;
			if (rootState && !rootState.linear && colorMaps.includes(key) && (_root$key = root[key]) != null && _root$key.isTexture && root[key].format === 1023 && root[key].type === 1009) root[key].colorSpace = SRGBColorSpace;
		}
	}
	if (instance != null && instance.parent && rootState != null && rootState.internal && (_instance$object = instance.object) != null && _instance$object.isObject3D && prevHandlers !== instance.eventCount) {
		const object = instance.object;
		const index = rootState.internal.interaction.indexOf(object);
		if (index > -1) rootState.internal.interaction.splice(index, 1);
		if (instance.eventCount && object.raycast !== null) rootState.internal.interaction.push(object);
	}
	if (instance && instance.props.attach === void 0) {
		if (instance.object.isBufferGeometry) instance.props.attach = "geometry";
		else if (instance.object.isMaterial) instance.props.attach = "material";
	}
	if (instance) invalidateInstance(instance);
	return object;
}
function invalidateInstance(instance) {
	var _instance$root;
	if (!instance.parent) return;
	instance.props.onUpdate == null || instance.props.onUpdate(instance.object);
	const state = (_instance$root = instance.root) == null ? void 0 : _instance$root.getState == null ? void 0 : _instance$root.getState();
	if (state && state.internal.frames === 0) state.invalidate();
}
function updateCamera(camera, size) {
	if (camera.manual) return;
	if (isOrthographicCamera(camera)) {
		camera.left = size.width / -2;
		camera.right = size.width / 2;
		camera.top = size.height / 2;
		camera.bottom = size.height / -2;
	} else camera.aspect = size.width / size.height;
	camera.updateProjectionMatrix();
}
var isObject3D = (object) => object == null ? void 0 : object.isObject3D;
function makeId(event) {
	return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
/**
* Release pointer captures.
* This is called by releasePointerCapture in the API, and when an object is removed.
*/
function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
	const captureData = captures.get(obj);
	if (captureData) {
		captures.delete(obj);
		if (captures.size === 0) {
			capturedMap.delete(pointerId);
			captureData.target.releasePointerCapture(pointerId);
		}
	}
}
/** This function transfers all interactivity state from one object instance to another. Used when swapping instances due to reconstruction. */
function swapInteractivity(store, object, newObject) {
	const { internal } = store.getState();
	for (let i = 0; i < internal.interaction.length; i++) if (internal.interaction[i] === object) internal.interaction[i] = newObject;
	for (let i = 0; i < internal.initialHits.length; i++) if (internal.initialHits[i] === object) internal.initialHits[i] = newObject;
	internal.hovered.forEach((value, key) => {
		if (value.eventObject === object || value.object === object) {
			internal.hovered.delete(key);
			const next = {
				...value,
				eventObject: value.eventObject === object ? newObject : value.eventObject,
				object: value.object === object ? newObject : value.object
			};
			internal.hovered.set(makeId(next), next);
		}
	});
	internal.capturedMap.forEach((captures) => {
		const captureData = captures.get(object);
		if (captureData) {
			captures.delete(object);
			captures.set(newObject, captureData);
		}
	});
}
function removeInteractivity(store, object) {
	const { internal } = store.getState();
	internal.interaction = internal.interaction.filter((o) => o !== object);
	internal.initialHits = internal.initialHits.filter((o) => o !== object);
	internal.hovered.forEach((value, key) => {
		if (value.eventObject === object || value.object === object) internal.hovered.delete(key);
	});
	internal.capturedMap.forEach((captures, pointerId) => {
		releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
	});
}
function createEvents(store) {
	/** Calculates delta */
	function calculateDistance(event) {
		const { internal } = store.getState();
		const dx = event.offsetX - internal.initialClick[0];
		const dy = event.offsetY - internal.initialClick[1];
		return Math.round(Math.sqrt(dx * dx + dy * dy));
	}
	/** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */
	function filterPointerEvents(objects) {
		return objects.filter((obj) => [
			"Move",
			"Over",
			"Enter",
			"Out",
			"Leave"
		].some((name) => {
			var _r3f;
			return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers["onPointer" + name];
		}));
	}
	function intersect(event, filter) {
		const state = store.getState();
		const duplicates = /* @__PURE__ */ new Set();
		const intersections = [];
		const eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction;
		for (let i = 0; i < eventsObjects.length; i++) {
			const state = getRootState(eventsObjects[i]);
			if (state) state.raycaster.camera = void 0;
		}
		if (!state.previousRoot) state.events.compute == null || state.events.compute(event, state);
		function handleRaycast(obj) {
			const state = getRootState(obj);
			if (!state || !state.events.enabled || state.raycaster.camera === null) return [];
			if (state.raycaster.camera === void 0) {
				var _state$previousRoot;
				state.events.compute == null || state.events.compute(event, state, (_state$previousRoot = state.previousRoot) == null ? void 0 : _state$previousRoot.getState());
				if (state.raycaster.camera === void 0) state.raycaster.camera = null;
			}
			return state.raycaster.camera ? state.raycaster.intersectObject(obj, true) : [];
		}
		let hits = eventsObjects.flatMap(handleRaycast).sort((a, b) => {
			const aState = getRootState(a.object);
			const bState = getRootState(b.object);
			if (!aState || !bState) return a.distance - b.distance;
			return bState.events.priority - aState.events.priority || a.distance - b.distance;
		}).filter((item) => {
			const id = makeId(item);
			if (duplicates.has(id)) return false;
			duplicates.add(id);
			return true;
		});
		if (state.events.filter) hits = state.events.filter(hits, state);
		for (const hit of hits) {
			let eventObject = hit.object;
			while (eventObject) {
				var _r3f2;
				if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push({
					...hit,
					eventObject
				});
				eventObject = eventObject.parent;
			}
		}
		if ("pointerId" in event && state.internal.capturedMap.has(event.pointerId)) {
			for (let captureData of state.internal.capturedMap.get(event.pointerId).values()) if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
		}
		return intersections;
	}
	/**  Handles intersections by forwarding them to handlers */
	function handleIntersects(intersections, event, delta, callback) {
		if (intersections.length) {
			const localState = { stopped: false };
			for (const hit of intersections) {
				let state = getRootState(hit.object);
				if (!state) hit.object.traverseAncestors((obj) => {
					const parentState = getRootState(obj);
					if (parentState) {
						state = parentState;
						return false;
					}
				});
				if (state) {
					const { raycaster, pointer, camera, internal } = state;
					const unprojectedPoint = new Vector3(pointer.x, pointer.y, 0).unproject(camera);
					const hasPointerCapture = (id) => {
						var _internal$capturedMap, _internal$capturedMap2;
						return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
					};
					const setPointerCapture = (id) => {
						const captureData = {
							intersection: hit,
							target: event.target
						};
						if (internal.capturedMap.has(id)) internal.capturedMap.get(id).set(hit.eventObject, captureData);
						else internal.capturedMap.set(id, /* @__PURE__ */ new Map([[hit.eventObject, captureData]]));
						event.target.setPointerCapture(id);
					};
					const releasePointerCapture = (id) => {
						const captures = internal.capturedMap.get(id);
						if (captures) releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
					};
					let extractEventProps = {};
					for (let prop in event) {
						let property = event[prop];
						if (typeof property !== "function") extractEventProps[prop] = property;
					}
					let raycastEvent = {
						...hit,
						...extractEventProps,
						pointer,
						intersections,
						stopped: localState.stopped,
						delta,
						unprojectedPoint,
						ray: raycaster.ray,
						camera,
						stopPropagation() {
							const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
							if (!capturesForPointer || capturesForPointer.has(hit.eventObject)) {
								raycastEvent.stopped = localState.stopped = true;
								if (internal.hovered.size && Array.from(internal.hovered.values()).find((i) => i.eventObject === hit.eventObject)) cancelPointer([...intersections.slice(0, intersections.indexOf(hit)), hit]);
							}
						},
						target: {
							hasPointerCapture,
							setPointerCapture,
							releasePointerCapture
						},
						currentTarget: {
							hasPointerCapture,
							setPointerCapture,
							releasePointerCapture
						},
						nativeEvent: event
					};
					callback(raycastEvent);
					if (localState.stopped === true) break;
				}
			}
		}
		return intersections;
	}
	function cancelPointer(intersections) {
		const { internal } = store.getState();
		for (const hoveredObj of internal.hovered.values()) if (!intersections.length || !intersections.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId)) {
			const instance = hoveredObj.eventObject.__r3f;
			internal.hovered.delete(makeId(hoveredObj));
			if (instance != null && instance.eventCount) {
				const handlers = instance.handlers;
				const data = {
					...hoveredObj,
					intersections
				};
				handlers.onPointerOut == null || handlers.onPointerOut(data);
				handlers.onPointerLeave == null || handlers.onPointerLeave(data);
			}
		}
	}
	function pointerMissed(event, objects) {
		for (let i = 0; i < objects.length; i++) {
			const instance = objects[i].__r3f;
			instance == null || instance.handlers.onPointerMissed == null || instance.handlers.onPointerMissed(event);
		}
	}
	function handlePointer(name) {
		switch (name) {
			case "onPointerLeave":
			case "onPointerCancel": return () => cancelPointer([]);
			case "onLostPointerCapture": return (event) => {
				const { internal } = store.getState();
				if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) requestAnimationFrame(() => {
					if (internal.capturedMap.has(event.pointerId)) {
						internal.capturedMap.delete(event.pointerId);
						cancelPointer([]);
					}
				});
			};
		}
		return function handleEvent(event) {
			const { onPointerMissed, internal } = store.getState();
			internal.lastEvent.current = event;
			const isPointerMove = name === "onPointerMove";
			const isClickEvent = name === "onClick" || name === "onContextMenu" || name === "onDoubleClick";
			const hits = intersect(event, isPointerMove ? filterPointerEvents : void 0);
			const delta = isClickEvent ? calculateDistance(event) : 0;
			if (name === "onPointerDown") {
				internal.initialClick = [event.offsetX, event.offsetY];
				internal.initialHits = hits.map((hit) => hit.eventObject);
			}
			if (isClickEvent && !hits.length) {
				if (delta <= 2) {
					pointerMissed(event, internal.interaction);
					if (onPointerMissed) onPointerMissed(event);
				}
			}
			if (isPointerMove) cancelPointer(hits);
			function onIntersect(data) {
				const eventObject = data.eventObject;
				const instance = eventObject.__r3f;
				if (!(instance != null && instance.eventCount)) return;
				const handlers = instance.handlers;
				if (isPointerMove) {
					if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
						const id = makeId(data);
						const hoveredItem = internal.hovered.get(id);
						if (!hoveredItem) {
							internal.hovered.set(id, data);
							handlers.onPointerOver == null || handlers.onPointerOver(data);
							handlers.onPointerEnter == null || handlers.onPointerEnter(data);
						} else if (hoveredItem.stopped) data.stopPropagation();
					}
					handlers.onPointerMove == null || handlers.onPointerMove(data);
				} else {
					const handler = handlers[name];
					if (handler) {
						if (!isClickEvent || internal.initialHits.includes(eventObject)) {
							pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
							handler(data);
						}
					} else if (isClickEvent && internal.initialHits.includes(eventObject)) pointerMissed(event, internal.interaction.filter((object) => !internal.initialHits.includes(object)));
				}
			}
			handleIntersects(hits, event, delta, onIntersect);
		};
	}
	return { handlePointer };
}
var isRenderer = (def) => !!(def != null && def.render);
var context = /* @__PURE__ */ import_react.createContext(null);
var createStore = (invalidate, advance) => {
	const rootStore = createWithEqualityFn((set, get) => {
		const position = new Vector3();
		const defaultTarget = new Vector3();
		const tempTarget = new Vector3();
		function getCurrentViewport(camera = get().camera, target = defaultTarget, size = get().size) {
			const { width, height, top, left } = size;
			const aspect = width / height;
			if (target.isVector3) tempTarget.copy(target);
			else tempTarget.set(...target);
			const distance = camera.getWorldPosition(position).distanceTo(tempTarget);
			if (isOrthographicCamera(camera)) return {
				width: width / camera.zoom,
				height: height / camera.zoom,
				top,
				left,
				factor: 1,
				distance,
				aspect
			};
			else {
				const fov = camera.fov * Math.PI / 180;
				const h = 2 * Math.tan(fov / 2) * distance;
				const w = h * (width / height);
				return {
					width: w,
					height: h,
					top,
					left,
					factor: width / w,
					distance,
					aspect
				};
			}
		}
		let performanceTimeout = void 0;
		const setPerformanceCurrent = (current) => set((state) => ({ performance: {
			...state.performance,
			current
		} }));
		const pointer = new Vector2();
		return {
			set,
			get,
			gl: null,
			camera: null,
			raycaster: null,
			events: {
				priority: 1,
				enabled: true,
				connected: false
			},
			scene: null,
			xr: null,
			invalidate: (frames = 1) => invalidate(get(), frames),
			advance: (timestamp, runGlobalEffects) => advance(timestamp, runGlobalEffects, get()),
			legacy: false,
			linear: false,
			flat: false,
			controls: null,
			clock: new Clock(),
			pointer,
			mouse: pointer,
			frameloop: "always",
			onPointerMissed: void 0,
			performance: {
				current: 1,
				min: .5,
				max: 1,
				debounce: 200,
				regress: () => {
					const state = get();
					if (performanceTimeout) clearTimeout(performanceTimeout);
					if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min);
					performanceTimeout = setTimeout(() => setPerformanceCurrent(get().performance.max), state.performance.debounce);
				}
			},
			size: {
				width: 0,
				height: 0,
				top: 0,
				left: 0
			},
			viewport: {
				initialDpr: 0,
				dpr: 0,
				width: 0,
				height: 0,
				top: 0,
				left: 0,
				aspect: 0,
				distance: 0,
				factor: 0,
				getCurrentViewport
			},
			setEvents: (events) => set((state) => ({
				...state,
				events: {
					...state.events,
					...events
				}
			})),
			setSize: (width, height, top = 0, left = 0) => {
				const camera = get().camera;
				const size = {
					width,
					height,
					top,
					left
				};
				set((state) => ({
					size,
					viewport: {
						...state.viewport,
						...getCurrentViewport(camera, defaultTarget, size)
					}
				}));
			},
			setDpr: (dpr) => set((state) => {
				const resolved = calculateDpr(dpr);
				return { viewport: {
					...state.viewport,
					dpr: resolved,
					initialDpr: state.viewport.initialDpr || resolved
				} };
			}),
			setFrameloop: (frameloop = "always") => {
				const clock = get().clock;
				clock.stop();
				clock.elapsedTime = 0;
				if (frameloop !== "never") {
					clock.start();
					clock.elapsedTime = 0;
				}
				set(() => ({ frameloop }));
			},
			previousRoot: void 0,
			internal: {
				interaction: [],
				hovered: /* @__PURE__ */ new Map(),
				subscribers: [],
				initialClick: [0, 0],
				initialHits: [],
				capturedMap: /* @__PURE__ */ new Map(),
				lastEvent: /*#__PURE__*/ import_react.createRef(),
				active: false,
				frames: 0,
				priority: 0,
				subscribe: (ref, priority, store) => {
					const internal = get().internal;
					internal.priority = internal.priority + (priority > 0 ? 1 : 0);
					internal.subscribers.push({
						ref,
						priority,
						store
					});
					internal.subscribers = internal.subscribers.sort((a, b) => a.priority - b.priority);
					return () => {
						const internal = get().internal;
						if (internal != null && internal.subscribers) {
							internal.priority = internal.priority - (priority > 0 ? 1 : 0);
							internal.subscribers = internal.subscribers.filter((s) => s.ref !== ref);
						}
					};
				}
			}
		};
	});
	const state = rootStore.getState();
	let oldSize = state.size;
	let oldDpr = state.viewport.dpr;
	let oldCamera = state.camera;
	rootStore.subscribe(() => {
		const { camera, size, viewport, gl, set } = rootStore.getState();
		if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
			oldSize = size;
			oldDpr = viewport.dpr;
			updateCamera(camera, size);
			if (viewport.dpr > 0) gl.setPixelRatio(viewport.dpr);
			const updateStyle = typeof HTMLCanvasElement !== "undefined" && gl.domElement instanceof HTMLCanvasElement;
			gl.setSize(size.width, size.height, updateStyle);
		}
		if (camera !== oldCamera) {
			oldCamera = camera;
			set((state) => ({ viewport: {
				...state.viewport,
				...state.viewport.getCurrentViewport(camera)
			} }));
		}
	});
	rootStore.subscribe((state) => invalidate(state));
	return rootStore;
};
/**
* Returns the R3F Canvas' Zustand store. Useful for [transient updates](https://github.com/pmndrs/zustand#transient-updates-for-often-occurring-state-changes).
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usestore
*/
function useStore() {
	const store = import_react.useContext(context);
	if (!store) throw new Error("R3F: Hooks can only be used within the Canvas component!");
	return store;
}
/**
* Accesses R3F's internal state, containing renderer, canvas, scene, etc.
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usethree
*/
function useThree(selector = (state) => state, equalityFn) {
	return useStore()(selector, equalityFn);
}
/**
* Executes a callback before render in a shared frame loop.
* Can order effects with render priority or manually render with a positive priority.
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
*/
function useFrame(callback, renderPriority = 0) {
	const store = useStore();
	const subscribe = store.getState().internal.subscribe;
	const ref = useMutableCallback(callback);
	useIsomorphicLayoutEffect(() => subscribe(ref, renderPriority, store), [
		renderPriority,
		subscribe,
		store
	]);
	return null;
}
var memoizedLoaders = /* @__PURE__ */ new WeakMap();
var isConstructor$1 = (value) => {
	var _value$prototype;
	return typeof value === "function" && (value == null ? void 0 : (_value$prototype = value.prototype) == null ? void 0 : _value$prototype.constructor) === value;
};
function loadingFn(extensions, onProgress) {
	return function(Proto, ...input) {
		let loader;
		if (isConstructor$1(Proto)) {
			loader = memoizedLoaders.get(Proto);
			if (!loader) {
				loader = new Proto();
				memoizedLoaders.set(Proto, loader);
			}
		} else loader = Proto;
		if (extensions) extensions(loader);
		return Promise.all(input.map((input) => new Promise((res, reject) => loader.load(input, (data) => {
			if (isObject3D(data == null ? void 0 : data.scene)) Object.assign(data, buildGraph(data.scene));
			res(data);
		}, onProgress, (error) => reject(/* @__PURE__ */ new Error(`Could not load ${input}: ${error == null ? void 0 : error.message}`))))));
	};
}
/**
* Synchronously loads and caches assets with a three loader.
*
* Note: this hook's caller must be wrapped with `React.Suspense`
* @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
*/
function useLoader(loader, input, extensions, onProgress) {
	const keys = Array.isArray(input) ? input : [input];
	const results = suspend(loadingFn(extensions, onProgress), [loader, ...keys], { equal: is.equ });
	return Array.isArray(input) ? results : results[0];
}
/**
* Preloads an asset into cache as a side-effect.
*/
useLoader.preload = function(loader, input, extensions) {
	const keys = Array.isArray(input) ? input : [input];
	return preload(loadingFn(extensions), [loader, ...keys]);
};
/**
* Removes a loaded asset from cache.
*/
useLoader.clear = function(loader, input) {
	return clear([loader, ...Array.isArray(input) ? input : [input]]);
};
/**
* @license React
* react-reconciler-constants.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/ var t = 1;
var o = 8;
var r = 32;
var e = 2;
var i$1 = 268435456;
var packageData = {
	name: "@react-three/fiber",
	version: "9.8.0",
	description: "A React renderer for Threejs",
	keywords: [
		"react",
		"renderer",
		"fiber",
		"three",
		"threejs"
	],
	author: "Paul Henschel (https://github.com/drcmda)",
	license: "MIT",
	maintainers: [
		"Josh Ellis (https://github.com/joshuaellis)",
		"Cody Bennett (https://github.com/codyjasonbennett)",
		"Kris Baumgarter (https://github.com/krispya)"
	],
	bugs: { url: "https://github.com/pmndrs/react-three-fiber/issues" },
	homepage: "https://github.com/pmndrs/react-three-fiber#readme",
	repository: {
		type: "git",
		url: "git+https://github.com/pmndrs/react-three-fiber.git"
	},
	collective: {
		type: "opencollective",
		url: "https://opencollective.com/react-three-fiber"
	},
	main: "dist/react-three-fiber.cjs.js",
	module: "dist/react-three-fiber.esm.js",
	types: "dist/react-three-fiber.cjs.d.ts",
	"react-native": "native/dist/react-three-fiber-native.cjs.js",
	sideEffects: false,
	preconstruct: { entrypoints: ["index.tsx", "native.tsx"] },
	scripts: { prebuild: "cp ../../readme.md readme.md" },
	devDependencies: {
		"@types/react-reconciler": "^0.33.0",
		"react-reconciler": "^0.34.0"
	},
	dependencies: {
		"@babel/runtime": "^7.17.8",
		"@types/webxr": "*",
		"base64-js": "^1.5.1",
		buffer: "^6.0.3",
		"its-fine": "^2.0.0",
		"react-use-measure": "^2.1.7",
		scheduler: "^0.28.0",
		"suspend-react": "^0.1.3",
		"use-sync-external-store": "^1.4.0",
		zustand: "^5.0.3"
	},
	peerDependencies: {
		expo: ">=43.0",
		"expo-asset": ">=8.4",
		"expo-file-system": ">=11.0",
		"expo-gl": ">=11.0",
		react: ">=19 <19.4",
		"react-dom": ">=19 <19.4",
		"react-native": ">=0.78",
		three: ">=0.156"
	},
	peerDependenciesMeta: {
		"react-dom": { optional: true },
		"react-native": { optional: true },
		expo: { optional: true },
		"expo-asset": { optional: true },
		"expo-file-system": { optional: true },
		"expo-gl": { optional: true }
	}
};
function $1(Ut) {
	return Ut && Ut.__esModule && Object.prototype.hasOwnProperty.call(Ut, "default") ? Ut.default : Ut;
}
var S0 = { exports: {} };
var Ob = { exports: {} };
/**
* @license React
* react-reconciler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
Ob.exports;
var P1;
function Q1() {
	return P1 || (P1 = 1, function(Ut) {
		Ut.exports = function(m) {
			function et(t, r, a, l) {
				return new Fe(t, r, a, l);
			}
			function zf() {}
			function F(t) {
				var r = "https://react.dev/errors/" + t;
				if (1 < arguments.length) {
					r += "?args[]=" + encodeURIComponent(arguments[1]);
					for (var a = 2; a < arguments.length; a++) r += "&args[]=" + encodeURIComponent(arguments[a]);
				}
				return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
			}
			function Ef(t) {
				for (var r = t, a = r; a && !a.alternate;) r = a, r.flags & 4098 && (t = r.return), a = r.return;
				for (; r.return;) r = r.return;
				return r.tag === 3 ? t : null;
			}
			function pc(t) {
				if (Ef(t) !== t) throw Error(F(188));
			}
			function hc(t) {
				var r = t.alternate;
				if (!r) {
					if (r = Ef(t), r === null) throw Error(F(188));
					return r !== t ? null : t;
				}
				for (var a = t, l = r;;) {
					var c = a.return;
					if (c === null) break;
					var d = c.alternate;
					if (d === null) {
						if (l = c.return, l !== null) {
							a = l;
							continue;
						}
						break;
					}
					if (c.child === d.child) {
						for (d = c.child; d;) {
							if (d === a) return pc(c), t;
							if (d === l) return pc(c), r;
							d = d.sibling;
						}
						throw Error(F(188));
					}
					if (a.return !== l.return) a = c, l = d;
					else {
						for (var h = !1, y = c.child; y;) {
							if (y === a) {
								h = !0, a = c, l = d;
								break;
							}
							if (y === l) {
								h = !0, l = c, a = d;
								break;
							}
							y = y.sibling;
						}
						if (!h) {
							for (y = d.child; y;) {
								if (y === a) {
									h = !0, a = d, l = c;
									break;
								}
								if (y === l) {
									h = !0, l = d, a = c;
									break;
								}
								y = y.sibling;
							}
							if (!h) throw Error(F(189));
						}
					}
					if (a.alternate !== l) throw Error(F(190));
				}
				if (a.tag !== 3) throw Error(F(188));
				return a.stateNode.current === a ? t : r;
			}
			function mc(t) {
				var r = t.tag;
				if (r === 5 || r === 26 || r === 27 || r === 6) return t;
				for (t = t.child; t !== null;) {
					if (r = mc(t), r !== null) return r;
					t = t.sibling;
				}
				return null;
			}
			function ht(t) {
				var r = t.tag;
				if (r === 5 || r === 26 || r === 27 || r === 6) return t;
				for (t = t.child; t !== null;) {
					if (t.tag !== 4 && (r = ht(t), r !== null)) return r;
					t = t.sibling;
				}
				return null;
			}
			function Ss(t) {
				return t === null || typeof t != "object" ? null : (t = ki && t[ki] || t["@@iterator"], typeof t == "function" ? t : null);
			}
			function gc(t) {
				if (t == null) return null;
				if (typeof t == "function") return t.$$typeof === Po ? null : t.displayName || t.name || null;
				if (typeof t == "string") return t;
				switch (t) {
					case wo: return "Fragment";
					case Pu: return "Profiler";
					case md: return "StrictMode";
					case xu: return "Suspense";
					case Cu: return "SuspenseList";
					case zu: return "Activity";
					case yd: return "ViewTransition";
				}
				if (typeof t == "object") switch (t.$$typeof) {
					case Si: return "Portal";
					case Vr: return t.displayName || "Context";
					case gd: return (t._context.displayName || "Context") + ".Consumer";
					case bd:
						var r = t.render;
						return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
					case Fl: return r = t.displayName || null, r !== null ? r : gc(t.type) || "Memo";
					case Ra:
						r = t._payload, t = t._init;
						try {
							return gc(t(r));
						} catch {}
				}
				return null;
			}
			function oo(t) {
				return { current: t };
			}
			function W(t) {
				0 > Wa || (t.current = Ml[Wa], Ml[Wa] = null, Wa--);
			}
			function Te(t, r) {
				Wa++, Ml[Wa] = t.current, t.current = r;
			}
			function k0(t) {
				return t >>>= 0, t === 0 ? 32 : 31 - (Fd(t) / lh | 0) | 0;
			}
			function ma(t) {
				var r = t & 42;
				if (r !== 0) return r;
				switch (t & -t) {
					case 1: return 1;
					case 2: return 2;
					case 4: return 4;
					case 8: return 8;
					case 16: return 16;
					case 32: return 32;
					case 64: return 64;
					case 128: return 128;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072: return t & -t;
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return t & 3932160;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return t & 62914560;
					case 67108864: return 67108864;
					case 134217728: return 134217728;
					case 268435456: return 268435456;
					case 536870912: return 536870912;
					case 1073741824: return 0;
					default: return t;
				}
			}
			function ao(t, r, a) {
				var l = t.pendingLanes;
				if (l === 0) return 0;
				var c = 0, d = t.suspendedLanes, h = t.pingedLanes;
				t = t.warmLanes;
				var y = l & 134217727;
				return y !== 0 ? (l = y & ~d, l !== 0 ? c = ma(l) : (h &= y, h !== 0 ? c = ma(h) : a || (a = y & ~t, a !== 0 && (c = ma(a))))) : (y = l & ~d, y !== 0 ? c = ma(y) : h !== 0 ? c = ma(h) : a || (a = l & ~t, a !== 0 && (c = ma(a)))), c === 0 ? 0 : r !== 0 && r !== c && (r & d) === 0 && (d = c & -c, a = r & -r, d >= a || d === 32 && (a & 4194048) !== 0) ? r : c;
			}
			function Yi(t, r) {
				return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & r) === 0;
			}
			function _f(t, r) {
				r & 8 && (r |= r & 32);
				var a = t.entangledLanes;
				if (a !== 0) for (t = t.entanglements, a &= r; 0 < a;) {
					var l = 31 - sn(a), c = 1 << l;
					r |= t[l], a &= ~c;
				}
				return r;
			}
			function am(t, r) {
				switch (t) {
					case 1:
					case 2:
					case 4:
					case 8:
					case 64: return r + 250;
					case 16:
					case 32:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return r + 5e3;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return -1;
					case 67108864:
					case 134217728:
					case 268435456:
					case 536870912:
					case 1073741824: return -1;
					default: return -1;
				}
			}
			function Nf() {
				var t = qn;
				return qn <<= 1, !(qn & 62914560) && (qn = 4194304), t;
			}
			function bc(t) {
				for (var r = [], a = 0; 31 > a; a++) r.push(t);
				return r;
			}
			function Ki(t, r) {
				t.pendingLanes |= r, r !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
			}
			function ti(t, r, a, l, c, d) {
				var h = t.pendingLanes;
				t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
				var y = t.entanglements, C = t.expirationTimes, R = t.hiddenUpdates;
				for (a = h & ~a; 0 < a;) {
					var D = 31 - sn(a), U = 1 << D;
					y[D] = 0, C[D] = -1;
					var A = R[D];
					if (A !== null) for (R[D] = null, D = 0; D < A.length; D++) {
						var fe = A[D];
						fe !== null && (fe.lane &= -536870913);
					}
					a &= ~U;
				}
				l !== 0 && en(t, l, 0), d !== 0 && c === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(h & ~r));
			}
			function en(t, r, a) {
				t.pendingLanes |= r, t.suspendedLanes &= ~r;
				var l = 31 - sn(r);
				t.entangledLanes |= r, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
			}
			function G(t, r) {
				var a = t.entangledLanes |= r;
				for (t = t.entanglements; a;) {
					var l = 31 - sn(a), c = 1 << l;
					c & r | t[l] & r && (t[l] |= r), a &= ~c;
				}
			}
			function Wt(t, r) {
				var a = r & -r;
				return a = (a & 42) !== 0 ? 1 : mn(a), (a & (t.suspendedLanes | r)) !== 0 ? 0 : a;
			}
			function mn(t) {
				switch (t) {
					case 2:
						t = 1;
						break;
					case 8:
						t = 4;
						break;
					case 32:
						t = 16;
						break;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
						t = 128;
						break;
					case 268435456:
						t = 134217728;
						break;
					default: t = 0;
				}
				return t;
			}
			function ze(t) {
				return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
			}
			function ga(t) {
				if (typeof N == "function" && U0(t), It && typeof It.setStrictMode == "function") try {
					It.setStrictMode(Lu, t);
				} catch {}
			}
			function mt(t, r) {
				if (t.name != null && t.name !== "auto") return t.name;
				if (r.autoName !== null) return r.autoName;
				t = qt.identifierPrefix;
				var a = Ql++;
				return t = "_" + t + "t_" + a.toString(32) + "_", r.autoName = t;
			}
			function ks(t) {
				var _r2;
				if (t == null || typeof t == "string") return t;
				var r = null, a = ts;
				if (a !== null) for (var l = 0; l < a.length; l++) {
					var c = t[a[l]];
					if (c != null) {
						if (c === "none") return "none";
						r = r == null ? c : r + (" " + c);
					}
				}
				return (_r2 = r) != null ? _r2 : t.default;
			}
			function At(t, r) {
				return t = ks(t), r = ks(r), r == null ? t === "auto" ? null : t : r === "auto" ? null : r;
			}
			function im(t, r) {
				return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
			}
			function ba(t) {
				if (fh === void 0) try {
					throw Error();
				} catch (a) {
					var r = a.stack.trim().match(/\n( *(at )?)/);
					fh = r && r[1] || "", wg = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
				}
				return `
` + fh + t + wg;
			}
			function ws(t, r) {
				if (!t || Fu) return "";
				Fu = !0;
				var a = Error.prepareStackTrace;
				Error.prepareStackTrace = void 0;
				try {
					var l = { DetermineComponentFrameRoot: function() {
						try {
							if (r) {
								var U = function() {
									throw Error();
								};
								if (Object.defineProperty(U.prototype, "props", { set: function() {
									throw Error();
								} }), typeof Reflect == "object" && Reflect.construct) {
									try {
										Reflect.construct(U, []);
									} catch (Ne) {
										var A = Ne;
									}
									Reflect.construct(t, [], U);
								} else {
									try {
										U.call();
									} catch (Ne) {
										A = Ne;
									}
									U = !1;
									try {
										var fe = Object.getOwnPropertyDescriptor(t.prototype, "props");
										Object.defineProperty(t.prototype, "props", {
											configurable: !0,
											set: function() {
												throw Error();
											}
										}), U = !0, new t();
									} finally {
										U && (fe !== void 0 ? Object.defineProperty(t.prototype, "props", fe) : delete t.prototype.props);
									}
								}
							} else {
								try {
									throw Error();
								} catch (Ne) {
									A = Ne;
								}
								(U = t()) && typeof U.catch == "function" && U.catch(function() {});
							}
						} catch (Ne) {
							if (Ne && A && typeof Ne.stack == "string") return [Ne.stack, A.stack];
						}
						return [null, null];
					} };
					l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
					var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
					c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
					var d = l.DetermineComponentFrameRoot(), h = d[0], y = d[1];
					if (h && y) {
						var C = h.split(`
`), R = y.split(`
`);
						for (c = l = 0; l < C.length && !C[l].includes("DetermineComponentFrameRoot");) l++;
						for (; c < R.length && !R[c].includes("DetermineComponentFrameRoot");) c++;
						if (l === C.length || c === R.length) for (l = C.length - 1, c = R.length - 1; 1 <= l && 0 <= c && C[l] !== R[c];) c--;
						for (; 1 <= l && 0 <= c; l--, c--) if (C[l] !== R[c]) {
							if (l !== 1 || c !== 1) do
								if (l--, c--, 0 > c || C[l] !== R[c]) {
									var D = `
` + C[l].replace(" at new ", " at ");
									return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
								}
							while (1 <= l && 0 <= c);
							break;
						}
					}
				} finally {
					Fu = !1, Error.prepareStackTrace = a;
				}
				return (a = t ? t.displayName || t.name : "") ? ba(a) : "";
			}
			function Tf(t, r) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5: return ba(t.type);
					case 16: return ba("Lazy");
					case 13: return t.child !== r && r !== null ? ba("Suspense Fallback") : ba("Suspense");
					case 19: return ba("SuspenseList");
					case 0:
					case 15: return ws(t.type, !1);
					case 11: return ws(t.type.render, !1);
					case 1: return ws(t.type, !0);
					case 31: return ba("Activity");
					case 30: return ba("ViewTransition");
					default: return "";
				}
			}
			function el(t) {
				try {
					var r = "", a = null;
					do
						r += Tf(t, a), a = t, t = t.return;
					while (t);
					return r;
				} catch (l) {
					return `
Error generating stack: ` + l.message + `
` + l.stack;
				}
			}
			function Kt(t, r) {
				if (typeof t == "object" && t !== null) {
					var a = ph.get(t);
					return a !== void 0 ? a : (r = {
						value: t,
						source: r,
						stack: el(r)
					}, ph.set(t, r), r);
				}
				return {
					value: t,
					source: r,
					stack: el(r)
				};
			}
			function io(t, r) {
				ea[_i++] = Du, ea[_i++] = Dd, Dd = t, Du = r;
			}
			function If(t, r, a) {
				Wn[yn++] = _n, Wn[yn++] = $e, Wn[yn++] = _e, _e = t;
				var l = _n;
				t = $e;
				var c = 32 - sn(l) - 1;
				l &= ~(1 << c), a += 1;
				var d = 32 - sn(r) + c;
				if (30 < d) {
					var h = c - c % 5;
					d = (l & (1 << h) - 1).toString(32), l >>= h, c -= h, _n = 1 << 32 - sn(r) + c | a << c | l, $e = d + t;
				} else _n = 1 << d | a << c | l, $e = t;
			}
			function Ps(t) {
				t.return !== null && (io(t, 1), If(t, 1, 0));
			}
			function xs(t) {
				for (; t === Dd;) Dd = ea[--_i], ea[_i] = null, Du = ea[--_i], ea[_i] = null;
				for (; t === _e;) _e = Wn[--yn], Wn[yn] = null, $e = Wn[--yn], Wn[yn] = null, _n = Wn[--yn], Wn[yn] = null;
			}
			function Rf(t, r) {
				Wn[yn++] = _n, Wn[yn++] = $e, Wn[yn++] = _e, _n = r.id, $e = r.overflow, _e = t;
			}
			function Cs(t, r) {
				Te(Je, r), Te(ju, t), Te(Jn, null), t = vd(r), W(Jn), Te(Jn, t);
			}
			function ya() {
				W(Jn), W(ju), W(Je);
			}
			function Lf(t) {
				var r = t.memoizedState;
				r !== null && (r = r.memoizedState, lr ? $r._currentValue = r : $r._currentValue2 = r, Te(fr, t)), r = Jn.current;
				var a = Rm(r, t.type);
				r !== a && (Te(ju, t), Te(Jn, a));
			}
			function Oe(t) {
				ju.current === t && (W(Jn), W(ju)), fr.current === t && (W(fr), lr ? $r._currentValue = Fa : $r._currentValue2 = Fa);
			}
			function Mn(t) {
				throw va(Kt(Error(F(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), hh;
			}
			function Ff(t, r) {
				if (!En) throw Error(F(175));
				N0(t.stateNode, t.type, t.memoizedProps, r, t) || Mn(t, !0);
			}
			function er(t) {
				for (Nn = t.return; Nn;) switch (Nn.tag) {
					case 5:
					case 31:
					case 13:
						hr = !1;
						return;
					case 27:
					case 3:
						hr = !0;
						return;
					default: Nn = Nn.return;
				}
			}
			function nl(t) {
				if (!En || t !== Nn) return !1;
				if (!ne) return er(t), ne = !0, !1;
				var r = t.tag;
				if (be ? r !== 3 && r !== 27 && (r !== 5 || Td(t.type) && !kd(t.type, t.memoizedProps)) && Qe && Mn(t) : r !== 3 && (r !== 5 || Td(t.type) && !kd(t.type, t.memoizedProps)) && Qe && Mn(t), er(t), r === 13) {
					if (!En) throw Error(F(316));
					if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(317));
					Qe = Ru(t);
				} else if (r === 31) {
					if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(317));
					Qe = pg(t);
				} else Qe = be && r === 27 ? lg(t.type, Qe) : Nn ? Nd(t.stateNode) : null;
				return !0;
			}
			function ri() {
				En && (Qe = Nn = null, ne = !1);
			}
			function zs() {
				var t = pr;
				return t !== null && (Ze === null ? Ze = t : Ze.push.apply(Ze, t), pr = null), t;
			}
			function va(t) {
				pr === null ? pr = [t] : pr.push(t);
			}
			function Rn(t, r, a) {
				lr ? (Te(jd, r._currentValue), r._currentValue = a) : (Te(jd, r._currentValue2), r._currentValue2 = a);
			}
			function lo(t) {
				var r = jd.current;
				lr ? t._currentValue = r : t._currentValue2 = r, W(jd);
			}
			function zn(t, r, a) {
				for (; t !== null;) {
					var l = t.alternate;
					if ((t.childLanes & r) !== r ? (t.childLanes |= r, l !== null && (l.childLanes |= r)) : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r), t === a) break;
					t = t.return;
				}
			}
			function nr(t, r, a, l) {
				var c = t.child;
				for (c !== null && (c.return = t); c !== null;) {
					var d = c.dependencies;
					if (d !== null) {
						var h = c.child;
						d = d.firstContext;
						e: for (; d !== null;) {
							var y = d;
							d = c;
							for (var C = 0; C < r.length; C++) if (y.context === r[C]) {
								d.lanes |= a, y = d.alternate, y !== null && (y.lanes |= a), zn(d.return, a, t), l || (h = null);
								break e;
							}
							d = y.next;
						}
					} else if (c.tag === 18) {
						if (h = c.return, h === null) throw Error(F(341));
						h.lanes |= a, d = h.alternate, d !== null && (d.lanes |= a), zn(h, a, t), h = null;
					} else c.tag === 13 && c.memoizedState !== null && c.memoizedState.dehydrated === null ? (c.lanes |= a, h = c.alternate, h !== null && (h.lanes |= a), zn(c.return, a, t), h = c.child, h = h !== null ? h.sibling : null) : h = c.child;
					if (h !== null) h.return = c;
					else for (h = c; h !== null;) {
						if (h === t) {
							h = null;
							break;
						}
						if (c = h.sibling, c !== null) {
							c.return = h.return, h = c;
							break;
						}
						h = h.return;
					}
					c = h;
				}
			}
			function so(t, r, a, l) {
				t = null;
				for (var c = r, d = !1; c !== null;) {
					if (!d) {
						if ((c.flags & 524288) !== 0) d = !0;
						else if ((c.flags & 262144) !== 0) break;
					}
					if (c.tag === 10) {
						var h = c.alternate;
						if (h === null) throw Error(F(387));
						if (h = h.memoizedProps, h !== null) {
							var y = c.type;
							$t(c.pendingProps.value, h.value) || (t !== null ? t.push(y) : t = [y]);
						}
					} else if (c === fr.current) {
						if (h = c.alternate, h === null) throw Error(F(387));
						h.memoizedState.memoizedState !== c.memoizedState.memoizedState && (t !== null ? t.push($r) : t = [$r]);
					}
					c = c.return;
				}
				return t !== null && nr(r, t, a, l), r.flags |= 262144, t !== null;
			}
			function oi(t) {
				for (t = t.firstContext; t !== null;) {
					var r = t.context;
					if (!$t(lr ? r._currentValue : r._currentValue2, t.memoizedValue)) return !0;
					t = t.next;
				}
				return !1;
			}
			function Do(t) {
				Ni = t, qr = null, t = t.dependencies, t !== null && (t.firstContext = null);
			}
			function Me(t) {
				return Df(Ni, t);
			}
			function Es(t, r) {
				return Ni === null && Do(t), Df(t, r);
			}
			function Df(t, r) {
				var a = lr ? r._currentValue : r._currentValue2;
				if (r = {
					context: r,
					memoizedValue: a,
					next: null
				}, qr === null) {
					if (t === null) throw Error(F(308));
					qr = r, t.dependencies = {
						lanes: 0,
						firstContext: r
					}, t.flags |= 524288;
				} else qr = qr.next = r;
				return a;
			}
			function _s() {
				return {
					controller: new Pg(),
					data: /* @__PURE__ */ new Map(),
					refCount: 0
				};
			}
			function Ns(t) {
				t.refCount--, t.refCount === 0 && A0(xg, function() {
					t.controller.abort();
				});
			}
			function jf(t, r) {
				if ((t.pendingLanes & 4194048) !== 0) {
					var a = t.transitionTypes;
					for (a === null && (a = t.transitionTypes = []), t = 0; t < r.length; t++) {
						var l = r[t];
						a.indexOf(l) === -1 && a.push(l);
					}
				}
			}
			function lm(t) {
				var r = t.transitionTypes;
				return t.transitionTypes = null, r;
			}
			function Pr() {}
			function xr(t) {
				t !== Gr && t.next === null && (Gr === null ? ql = Gr = t : Gr = Gr.next = t), Ud = !0, Jr || (Jr = !0, cm());
			}
			function tl(t, r) {
				if (!mh && Ud) {
					mh = !0;
					do
						for (var a = !1, l = ql; l !== null;) {
							if (!r) if (t !== 0) {
								var c = l.pendingLanes;
								if (c === 0) var d = 0;
								else {
									var h = l.suspendedLanes, y = l.pingedLanes;
									d = (1 << 31 - sn(42 | t) + 1) - 1, d &= c & ~(h & ~y), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
								}
								d !== 0 && (a = !0, um(l, d));
							} else d = ye, d = ao(l, l === Be ? d : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== La), !(d & 3) || Yi(l, d) || (a = !0, um(l, d));
							l = l.next;
						}
					while (a);
					mh = !1;
				}
			}
			function sm() {
				yc();
			}
			function yc() {
				Ud = Jr = !1;
				var t = 0;
				Ti !== 0 && Wm() && (t = Ti);
				for (var r = Tt(), a = null, l = ql; l !== null;) {
					var c = l.next, d = nt(l, r);
					d === 0 ? (l.next = null, a === null ? ql = c : a.next = c, c === null && (Gr = a)) : (a = l, (t !== 0 || d & 3) && (Ud = !0)), l = c;
				}
				Xe !== 0 && Xe !== 5 || tl(t, !1), Ti !== 0 && (Ti = 0);
			}
			function nt(t, r) {
				for (var a = t.suspendedLanes, l = t.pingedLanes, c = t.expirationTimes, d = t.pendingLanes & -62914561; 0 < d;) {
					var h = 31 - sn(d), y = 1 << h, C = c[h];
					C === -1 ? ((y & a) === 0 || (y & l) !== 0) && (c[h] = am(y, r)) : C <= r && (t.expiredLanes |= y), d &= ~y;
				}
				if (r = Be, a = ye, a = ao(t, t === r ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== La), l = t.callbackNode, a === 0 || t === r && (Ie === 2 || Ie === 9) || t.cancelPendingCommit !== null) return l !== null && l !== null && sh(l), t.callbackNode = null, t.callbackPriority = 0;
				if ((a & 3) === 0 || Yi(t, a)) {
					if (r = a & -a, r === t.callbackPriority) return r;
					switch (l !== null && sh(l), ze(a)) {
						case 2:
						case 8:
							a = Sg;
							break;
						case 32:
							a = dh;
							break;
						case 268435456:
							a = Gn;
							break;
						default: a = dh;
					}
					return l = vc.bind(null, t), a = $l(a, l), t.callbackPriority = r, t.callbackNode = a, r;
				}
				return l !== null && l !== null && sh(l), t.callbackPriority = 2, t.callbackNode = null, 2;
			}
			function vc(t, r) {
				if (Xe !== 0 && Xe !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
				var a = t.callbackNode;
				if (_a() && t.callbackNode !== a) return null;
				var l = ye;
				return l = ao(t, t === Be ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== La), l === 0 ? null : (Il(t, l, r), nt(t, Tt()), t.callbackNode != null && t.callbackNode === a ? vc.bind(null, t) : null);
			}
			function um(t, r) {
				if (_a()) return null;
				Il(t, r, !0);
			}
			function cm() {
				Hm ? jl(function() {
					(de & 6) !== 0 ? $l(ch, sm) : yc();
				}) : $l(ch, sm);
			}
			function Sc() {
				if (Ti === 0) {
					var t = Ii;
					t === 0 && (t = Vl, Vl <<= 1, !(Vl & 261888) && (Vl = 256)), Ti = t;
				}
				return Ti;
			}
			function Ot(t, r) {
				if (Wu === null) {
					var a = Wu = [];
					Oa = 0, Ii = Sc(), Gl = {
						status: "pending",
						value: void 0,
						then: function(l) {
							a.push(l);
						}
					};
				}
				return Oa++, r.then(uo, uo), r;
			}
			function uo() {
				if (--Oa === 0 && (Uu = null, Wu !== null)) {
					Gl !== null && (Gl.status = "fulfilled");
					var t = Wu;
					Wu = null, Ii = 0, Gl = null;
					for (var r = 0; r < t.length; r++) (0, t[r])();
				}
			}
			function dm(t, r) {
				var a = [], l = {
					status: "pending",
					value: null,
					reason: null,
					then: function(c) {
						a.push(c);
					}
				};
				return t.then(function() {
					l.status = "fulfilled", l.value = r;
					for (var c = 0; c < a.length; c++) (0, a[c])(r);
				}, function(c) {
					for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
				}), l;
			}
			function rl() {
				var t = Zr.current;
				return t !== null ? t : Be.pooledCache;
			}
			function ol(t, r) {
				r === null ? Te(Zr, Zr.current) : Te(Zr, r.pool);
			}
			function Uf() {
				var t = rl();
				return t === null ? null : {
					parent: lr ? tn._currentValue : tn._currentValue2,
					pool: t
				};
			}
			function Ts(t, r) {
				if ($t(t, r)) return !0;
				if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
				var a = Object.keys(t), l = Object.keys(r);
				if (a.length !== l.length) return !1;
				for (l = 0; l < a.length; l++) {
					var c = a[l];
					if (!W0.call(r, c) || !$t(t[c], r[c])) return !1;
				}
				return !0;
			}
			function jo(t) {
				return t = t.status, t === "fulfilled" || t === "rejected";
			}
			function Uo(t, r, a) {
				switch (a = t[a], a === void 0 ? t.push(r) : a !== r && (r.then(Pr, Pr), r = a), r.status) {
					case "fulfilled": return r.value;
					case "rejected": throw t = r.reason, Cr(t), t === void 0 && !("reason" in r) ? Error(F(600)) : t;
					default:
						if (typeof r.status == "string") r.then(Pr, Pr);
						else {
							if (t = Be, t !== null && 100 < t.shellSuspendCounter) throw Error(F(482));
							t = r, t.status = "pending", t.then(function(l) {
								if (r.status === "pending") {
									var c = r;
									c.status = "fulfilled", c.value = l;
								}
							}, function(l) {
								if (r.status === "pending") {
									var c = r;
									c.status = "rejected", c.reason = l;
								}
							});
						}
						switch (r.status) {
							case "fulfilled": return r.value;
							case "rejected": throw t = r.reason, Cr(t), t;
						}
						throw Ri = r, Jl;
				}
			}
			function co(t) {
				try {
					var r = t._init;
					return r(t._payload);
				} catch (a) {
					throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ri = a, Jl) : a;
				}
			}
			function ai() {
				if (Ri === null) throw Error(F(459));
				var t = Ri;
				return Ri = null, t;
			}
			function Cr(t) {
				if (t === Jl || t === Wd) throw Error(F(483));
			}
			function al(t) {
				var r = Au;
				return Au += 1, Zl === null && (Zl = []), Uo(Zl, t, r);
			}
			function zr(t, r) {
				r = r.props.ref, t.ref = r !== void 0 ? r : null;
			}
			function Is(t, r) {
				throw r.$$typeof === _m ? Error(F(525)) : (t = Object.prototype.toString.call(r), Error(F(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t)));
			}
			function wt(t) {
				function r(x, P) {
					if (t) {
						var E = x.deletions;
						E === null ? (x.deletions = [P], x.flags |= 16) : E.push(P);
					}
				}
				function a(x, P) {
					if (!t) return null;
					for (; P !== null;) r(x, P), P = P.sibling;
					return null;
				}
				function l(x) {
					for (var P = /* @__PURE__ */ new Map(); x !== null;) x.key === null ? P.set(x.index, x) : P.set(x.key, x), x = x.sibling;
					return P;
				}
				function c(x, P) {
					return x = Zo(x, P), x.index = 0, x.sibling = null, x;
				}
				function d(x, P, E) {
					return x.index = E, t ? (E = x.alternate, E !== null ? (E = E.index, E < P ? (x.flags |= 2, P) : E) : (x.flags |= 134217730, P)) : (x.flags |= 1048576, P);
				}
				function h(x) {
					return t && x.alternate === null && (x.flags |= 134217730), x;
				}
				function y(x, P, E, j) {
					return P === null || P.tag !== 6 ? (P = wu(E, x.mode, j), P.return = x, P) : (P = c(P, E), P.return = x, P);
				}
				function C(x, P, E, j) {
					var q = E.type;
					return q === wo ? (x = D(x, P, E.props.children, j, E.key), zr(x, E), x) : P !== null && (P.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ra && co(q) === P.type) ? (P = c(P, E.props), zr(P, E), P.return = x, P) : (P = Vt(E.type, E.key, E.props, null, x.mode, j), zr(P, E), P.return = x, P);
				}
				function R(x, P, E, j) {
					return P === null || P.tag !== 4 || P.stateNode.containerInfo !== E.containerInfo || P.stateNode.implementation !== E.implementation ? (P = Ta(E, x.mode, j), P.return = x, P) : (P = c(P, E.children || []), P.return = x, P);
				}
				function D(x, P, E, j, q) {
					return P === null || P.tag !== 7 ? (P = Na(E, x.mode, j, q), P.return = x, P) : (P = c(P, E), P.return = x, P);
				}
				function U(x, P, E) {
					if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return P = wu("" + P, x.mode, E), P.return = x, P;
					if (typeof P == "object" && P !== null) {
						switch (P.$$typeof) {
							case Ia: return E = Vt(P.type, P.key, P.props, null, x.mode, E), zr(E, P), E.return = x, E;
							case Si: return P = Ta(P, x.mode, E), P.return = x, P;
							case Ra: return P = co(P), U(x, P, E);
						}
						if (wi(P) || Ss(P)) return P = Na(P, x.mode, E, null), P.return = x, P;
						if (typeof P.then == "function") return U(x, al(P), E);
						if (P.$$typeof === Vr) return U(x, Es(x, P), E);
						Is(x, P);
					}
					return null;
				}
				function A(x, P, E, j) {
					var q = P !== null ? P.key : null;
					if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return q !== null ? null : y(x, P, "" + E, j);
					if (typeof E == "object" && E !== null) {
						switch (E.$$typeof) {
							case Ia: return E.key === q ? C(x, P, E, j) : null;
							case Si: return E.key === q ? R(x, P, E, j) : null;
							case Ra: return E = co(E), A(x, P, E, j);
						}
						if (wi(E) || Ss(E)) return q !== null ? null : D(x, P, E, j, null);
						if (typeof E.then == "function") return A(x, P, al(E), j);
						if (E.$$typeof === Vr) return A(x, P, Es(x, E), j);
						Is(x, E);
					}
					return null;
				}
				function fe(x, P, E, j, q) {
					if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return x = x.get(E) || null, y(P, x, "" + j, q);
					if (typeof j == "object" && j !== null) {
						switch (j.$$typeof) {
							case Ia: return x = x.get(j.key === null ? E : j.key) || null, C(P, x, j, q);
							case Si: return x = x.get(j.key === null ? E : j.key) || null, R(P, x, j, q);
							case Ra: return j = co(j), fe(x, P, E, j, q);
						}
						if (wi(j) || Ss(j)) return x = x.get(E) || null, D(P, x, j, q, null);
						if (typeof j.then == "function") return fe(x, P, E, al(j), q);
						if (j.$$typeof === Vr) return fe(x, P, E, Es(P, j), q);
						Is(P, j);
					}
					return null;
				}
				function Ne(x, P, E, j) {
					for (var q = null, Ue = null, M = P, ie = P = 0, Le = null; M !== null && ie < E.length; ie++) {
						M.index > ie ? (Le = M, M = null) : Le = M.sibling;
						var Se = A(x, M, E[ie], j);
						if (Se === null) {
							M === null && (M = Le);
							break;
						}
						t && M && Se.alternate === null && r(x, M), P = d(Se, P, ie), Ue === null ? q = Se : Ue.sibling = Se, Ue = Se, M = Le;
					}
					if (ie === E.length) return a(x, M), ne && io(x, ie), q;
					if (M === null) {
						for (; ie < E.length; ie++) M = U(x, E[ie], j), M !== null && (P = d(M, P, ie), Ue === null ? q = M : Ue.sibling = M, Ue = M);
						return ne && io(x, ie), q;
					}
					for (M = l(M); ie < E.length; ie++) Le = fe(M, x, ie, E[ie], j), Le !== null && (t && (Se = Le.alternate, Se !== null && M.delete(Se.key === null ? ie : Se.key)), P = d(Le, P, ie), Ue === null ? q = Le : Ue.sibling = Le, Ue = Le);
					return t && M.forEach(function(la) {
						return r(x, la);
					}), ne && io(x, ie), q;
				}
				function Re(x, P, E, j) {
					if (E == null) throw Error(F(151));
					for (var q = null, Ue = null, M = P, ie = P = 0, Le = null, Se = E.next(); M !== null && !Se.done; ie++, Se = E.next()) {
						M.index > ie ? (Le = M, M = null) : Le = M.sibling;
						var la = A(x, M, Se.value, j);
						if (la === null) {
							M === null && (M = Le);
							break;
						}
						t && M && la.alternate === null && r(x, M), P = d(la, P, ie), Ue === null ? q = la : Ue.sibling = la, Ue = la, M = Le;
					}
					if (Se.done) return a(x, M), ne && io(x, ie), q;
					if (M === null) {
						for (; !Se.done; ie++, Se = E.next()) Se = U(x, Se.value, j), Se !== null && (P = d(Se, P, ie), Ue === null ? q = Se : Ue.sibling = Se, Ue = Se);
						return ne && io(x, ie), q;
					}
					for (M = l(M); !Se.done; ie++, Se = E.next()) Se = fe(M, x, ie, Se.value, j), Se !== null && (t && (Le = Se.alternate, Le !== null && M.delete(Le.key === null ? ie : Le.key)), P = d(Se, P, ie), Ue === null ? q = Se : Ue.sibling = Se, Ue = Se);
					return t && M.forEach(function(V0) {
						return r(x, V0);
					}), ne && io(x, ie), q;
				}
				function ia(x, P, E, j) {
					if (typeof E == "object" && E !== null && E.type === wo && E.key === null && E.props.ref === void 0 && (E = E.props.children), typeof E == "object" && E !== null) {
						switch (E.$$typeof) {
							case Ia:
								e: {
									for (var q = E.key; P !== null;) {
										if (P.key === q) {
											if (q = E.type, q === wo) {
												if (P.tag === 7) {
													a(x, P.sibling), j = c(P, E.props.children), zr(j, E), j.return = x, x = j;
													break e;
												}
											} else if (P.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ra && co(q) === P.type) {
												a(x, P.sibling), j = c(P, E.props), zr(j, E), j.return = x, x = j;
												break e;
											}
											a(x, P);
											break;
										} else r(x, P);
										P = P.sibling;
									}
									E.type === wo ? (j = Na(E.props.children, x.mode, j, E.key), zr(j, E), j.return = x, x = j) : (j = Vt(E.type, E.key, E.props, null, x.mode, j), zr(j, E), j.return = x, x = j);
								}
								return h(x);
							case Si:
								e: {
									for (q = E.key; P !== null;) {
										if (P.key === q) {
											if (P.tag === 4 && P.stateNode.containerInfo === E.containerInfo && P.stateNode.implementation === E.implementation) {
												a(x, P.sibling), j = c(P, E.children || []), j.return = x, x = j;
												break e;
											} else {
												a(x, P);
												break;
											}
										} else r(x, P);
										P = P.sibling;
									}
									j = Ta(E, x.mode, j), j.return = x, x = j;
								}
								return h(x);
							case Ra: return E = co(E), ia(x, P, E, j);
						}
						if (wi(E)) return Ne(x, P, E, j);
						if (Ss(E)) {
							if (q = Ss(E), typeof q != "function") throw Error(F(150));
							return E = q.call(E), Re(x, P, E, j);
						}
						if (typeof E.then == "function") return ia(x, P, al(E), j);
						if (E.$$typeof === Vr) return ia(x, P, Es(x, E), j);
						Is(x, E);
					}
					return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, P !== null && P.tag === 6 ? (a(x, P.sibling), j = c(P, E), j.return = x, x = j) : (a(x, P), j = wu(E, x.mode, j), j.return = x, x = j), h(x)) : a(x, P);
				}
				return function(x, P, E, j) {
					try {
						Au = 0;
						var q = ia(x, P, E, j);
						return Zl = null, q;
					} catch (M) {
						if (M === Jl || M === Wd) throw M;
						var Ue = et(29, M, null, x.mode);
						return Ue.lanes = j, Ue.return = x, Ue;
					}
				};
			}
			function Wo() {
				for (var t = Xl, r = bh = Xl = 0; r < t;) {
					var a = mr[r];
					mr[r++] = null;
					var l = mr[r];
					mr[r++] = null;
					var c = mr[r];
					mr[r++] = null;
					var d = mr[r];
					if (mr[r++] = null, l !== null && c !== null) {
						var h = l.pending;
						h === null ? c.next = c : (c.next = h.next, h.next = c), l.pending = c;
					}
					d !== 0 && Rs(a, c, d);
				}
			}
			function fo(t, r, a, l) {
				mr[Xl++] = t, mr[Xl++] = r, mr[Xl++] = a, mr[Xl++] = l, bh |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
			}
			function kc(t, r, a, l) {
				return fo(t, r, a, l), il(t);
			}
			function Er(t, r) {
				return fo(t, null, null, r), il(t);
			}
			function Rs(t, r, a) {
				t.lanes |= a;
				var l = t.alternate;
				l !== null && (l.lanes |= a);
				for (var c = !1, d = t.return; d !== null;) d.childLanes |= a, l = d.alternate, l !== null && (l.childLanes |= a), d.tag === 22 && (t = d.stateNode, t === null || t._visibility & 1 || (c = !0)), t = d, d = d.return;
				return t.tag === 3 ? (d = t.stateNode, c && r !== null && (c = 31 - sn(a), t = d.hiddenUpdates, l = t[c], l === null ? t[c] = [r] : l.push(r), r.lane = a | 536870912), d) : null;
			}
			function il(t) {
				if (50 < rs) throw rs = 0, Qu = null, Error(F(185));
				for (var r = t.return; r !== null;) t = r, r = t.return;
				return t.tag === 3 ? t.stateNode : null;
			}
			function ii(t) {
				t.updateQueue = {
					baseState: t.memoizedState,
					firstBaseUpdate: null,
					lastBaseUpdate: null,
					shared: {
						pending: null,
						lanes: 0,
						hiddenCallbacks: null
					},
					callbacks: null
				};
			}
			function Sa(t, r) {
				t = t.updateQueue, r.updateQueue === t && (r.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null
				});
			}
			function po(t) {
				return {
					lane: t,
					tag: 0,
					payload: null,
					callback: null,
					next: null
				};
			}
			function ka(t, r, a) {
				var l = t.updateQueue;
				if (l === null) return null;
				if (l = l.shared, (de & 2) !== 0) {
					var c = l.pending;
					return c === null ? r.next = r : (r.next = c.next, c.next = r), l.pending = r, r = il(t), Rs(t, null, a), r;
				}
				return fo(t, l, r, a), il(t);
			}
			function Ls(t, r, a) {
				if (r = r.updateQueue, r !== null && (r = r.shared, (a & 4194048) !== 0)) {
					var l = r.lanes;
					l &= t.pendingLanes, a |= l, r.lanes = a, G(t, a);
				}
			}
			function wc(t, r) {
				var a = t.updateQueue, l = t.alternate;
				if (l !== null && (l = l.updateQueue, a === l)) {
					var c = null, d = null;
					if (a = a.firstBaseUpdate, a !== null) {
						do {
							var h = {
								lane: a.lane,
								tag: a.tag,
								payload: a.payload,
								callback: null,
								next: null
							};
							d === null ? c = d = h : d = d.next = h, a = a.next;
						} while (a !== null);
						d === null ? c = d = r : d = d.next = r;
					} else c = d = r;
					a = {
						baseState: l.baseState,
						firstBaseUpdate: c,
						lastBaseUpdate: d,
						shared: l.shared,
						callbacks: l.callbacks
					}, t.updateQueue = a;
					return;
				}
				t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = r : t.next = r, a.lastBaseUpdate = r;
			}
			function li() {
				if (yh) {
					var t = Gl;
					if (t !== null) throw t;
				}
			}
			function ll(t, r, a, l) {
				yh = !1;
				var c = t.updateQueue;
				na = !1;
				var d = c.firstBaseUpdate, h = c.lastBaseUpdate, y = c.shared.pending;
				if (y !== null) {
					c.shared.pending = null;
					var C = y, R = C.next;
					C.next = null, h === null ? d = R : h.next = R, h = C;
					var D = t.alternate;
					D !== null && (D = D.updateQueue, y = D.lastBaseUpdate, y !== h && (y === null ? D.firstBaseUpdate = R : y.next = R, D.lastBaseUpdate = C));
				}
				if (d !== null) {
					var U = c.baseState;
					h = 0, D = R = C = null, y = d;
					do {
						var A = y.lane & -536870913, fe = A !== y.lane;
						if (fe ? (ye & A) === A : (l & A) === A) {
							A !== 0 && A === Ii && (yh = !0), D !== null && (D = D.next = {
								lane: 0,
								tag: y.tag,
								payload: y.payload,
								callback: null,
								next: null
							});
							e: {
								var Ne = t, Re = y;
								A = r;
								var ia = a;
								switch (Re.tag) {
									case 1:
										if (Ne = Re.payload, typeof Ne == "function") {
											U = Ne.call(ia, U, A);
											break e;
										}
										U = Ne;
										break e;
									case 3: Ne.flags = Ne.flags & -65537 | 128;
									case 0:
										if (Ne = Re.payload, A = typeof Ne == "function" ? Ne.call(ia, U, A) : Ne, A == null) break e;
										U = Lp({}, U, A);
										break e;
									case 2: na = !0;
								}
							}
							A = y.callback, A !== null && (t.flags |= 64, fe && (t.flags |= 8192), fe = c.callbacks, fe === null ? c.callbacks = [A] : fe.push(A));
						} else fe = {
							lane: A,
							tag: y.tag,
							payload: y.payload,
							callback: y.callback,
							next: null
						}, D === null ? (R = D = fe, C = U) : D = D.next = fe, h |= A;
						if (y = y.next, y === null) {
							if (y = c.shared.pending, y === null) break;
							fe = y, y = fe.next, fe.next = null, c.lastBaseUpdate = fe, c.shared.pending = null;
						}
					} while (!0);
					D === null && (C = U), c.baseState = C, c.firstBaseUpdate = R, c.lastBaseUpdate = D, d === null && (c.shared.lanes = 0), aa |= h, t.lanes = h, t.memoizedState = U;
				}
			}
			function fm(t, r) {
				if (typeof t != "function") throw Error(F(191, t));
				t.call(r);
			}
			function B(t, r) {
				var a = t.callbacks;
				if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) fm(a[t], r);
			}
			function Pc(t, r) {
				t = oa, Te(Od, t), Te(Ba, r), oa = t | r.baseLanes;
			}
			function Ao() {
				Te(Od, oa), Te(Ba, Ba.current);
			}
			function xc() {
				oa = Od.current, W(Ba), W(Od);
			}
			function _r(t) {
				var r = t.alternate;
				Te(Xn, Xn.current & 1), Te(Zn, t), lt === null && (r === null || Ba.current !== null || r.memoizedState !== null) && (lt = t);
			}
			function Nr(t) {
				Te(Xn, Xn.current), Te(Zn, t), lt === null && (lt = t);
			}
			function Wf(t) {
				t.tag === 22 ? (Te(Xn, Xn.current), Te(Zn, t), lt === null && (lt = t)) : Tr();
			}
			function Tr() {
				Te(Xn, Xn.current), Te(Zn, Zn.current);
			}
			function Ln(t) {
				W(Zn), lt === t && (lt = null), W(Xn);
			}
			function sl(t, r) {
				Te(Zn, Zn.current), Te(Xn, r);
			}
			function Oo(t) {
				W(Xn), W(Zn), lt === t && (lt = null);
			}
			function ul(t) {
				for (var r = t; r !== null;) {
					if (r.tag === 13) {
						var a = r.memoizedState;
						if (a !== null && (a = a.dehydrated, a === null || Gp(a) || Jp(a))) return r;
					} else if (r.tag === 19 && r.memoizedProps.revealOrder !== "independent") {
						if ((r.flags & 128) !== 0) return r;
					} else if (r.child !== null) {
						r.child.return = r, r = r.child;
						continue;
					}
					if (r === t) break;
					for (; r.sibling === null;) {
						if (r.return === null || r.return === t) return null;
						r = r.return;
					}
					r.sibling.return = r.return, r = r.sibling;
				}
				return null;
			}
			function Ve() {
				throw Error(F(321));
			}
			function Fs(t, r) {
				if (r === null) return !1;
				for (var a = 0; a < r.length && a < t.length; a++) if (!$t(t[a], r[a])) return !1;
				return !0;
			}
			function cl(t, r, a, l, c, d) {
				return ta = d, re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Q.H = t === null || t.memoizedState === null ? Eg : _g, Fi = !1, d = a(l, c), Fi = !1, ra && (d = ho(r, a, l, c)), Bo(t), d;
			}
			function Bo(t) {
				Q.H = Bu;
				var r = De !== null && De.next !== null;
				if (ta = 0, un = De = re = null, Bd = !1, Ou = 0, Yl = null, r) throw Error(F(300));
				t === null || Pn || (t = t.dependencies, t !== null && oi(t) && (Pn = !0));
			}
			function ho(t, r, a, l) {
				re = t;
				var c = 0;
				do {
					if (ra && (Yl = null), Ou = 0, ra = !1, 25 <= c) throw Error(F(301));
					if (c += 1, un = De = null, t.updateQueue != null) {
						var d = t.updateQueue;
						d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
					}
					Q.H = B0, d = r(a, l);
				} while (ra);
				return d;
			}
			function Cc() {
				var t = Q.H, r = t.useState()[0];
				return r = typeof r.then == "function" ? fl(r) : r, t = t.useState()[0], (De !== null ? De.memoizedState : null) !== t && (re.flags |= 1024), r;
			}
			function Ds() {
				var t = Hd !== 0;
				return Hd = 0, t;
			}
			function Ho(t, r, a) {
				r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~a;
			}
			function dl(t) {
				if (Bd) {
					for (t = t.memoizedState; t !== null;) {
						var r = t.queue;
						r !== null && (r.pending = null), t = t.next;
					}
					Bd = !1;
				}
				ta = 0, un = De = re = null, ra = !1, Ou = Hd = 0, Yl = null;
			}
			function gn() {
				var t = {
					memoizedState: null,
					baseState: null,
					baseQueue: null,
					queue: null,
					next: null
				};
				return un === null ? re.memoizedState = un = t : un = un.next = t, un;
			}
			function K() {
				if (De === null) {
					var t = re.alternate;
					t = t !== null ? t.memoizedState : null;
				} else t = De.next;
				var r = un === null ? re.memoizedState : un.next;
				if (r !== null) un = r, De = t;
				else {
					if (t === null) throw re.alternate === null ? Error(F(467)) : Error(F(310));
					De = t, t = {
						memoizedState: De.memoizedState,
						baseState: De.baseState,
						baseQueue: De.baseQueue,
						queue: De.queue,
						next: null
					}, un === null ? re.memoizedState = un = t : un = un.next = t;
				}
				return un;
			}
			function si() {
				return {
					lastEffect: null,
					events: null,
					stores: null,
					memoCache: null
				};
			}
			function fl(t) {
				var r = Ou;
				return Ou += 1, Yl === null && (Yl = []), t = Uo(Yl, t, r), r = re, (un === null ? r.memoizedState : un.next) === null && (r = r.alternate, Q.H = r === null || r.memoizedState === null ? Eg : _g), t;
			}
			function pl(t) {
				if (t !== null && typeof t == "object") {
					if (typeof t.then == "function") return fl(t);
					if (t.$$typeof === Im) return;
					if (t.$$typeof === Vr) return Me(t);
				}
				throw Error(F(438, String(t)));
			}
			function Mo(t) {
				var r = null, a = re.updateQueue;
				if (a !== null && (r = a.memoCache), r == null) {
					var l = re.alternate;
					l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (r = {
						data: l.data.map(function(c) {
							return c.slice();
						}),
						index: 0
					})));
				}
				if (r ??= {
					data: [],
					index: 0
				}, a === null && (a = si(), re.updateQueue = a), a.memoCache = r, a = r.data[r.index], a === void 0) for (a = r.data[r.index] = Array(t), l = 0; l < t; l++) a[l] = Tm;
				return r.index++, a;
			}
			function Bt(t, r) {
				return typeof r == "function" ? r(t) : r;
			}
			function js(t) {
				return Af(K(), De, t);
			}
			function Af(t, r, a) {
				var l = t.queue;
				if (l === null) throw Error(F(311));
				l.lastRenderedReducer = a;
				var c = t.baseQueue, d = l.pending;
				if (d !== null) {
					if (c !== null) {
						var h = c.next;
						c.next = d.next, d.next = h;
					}
					r.baseQueue = c = d, l.pending = null;
				}
				if (d = t.baseState, c === null) t.memoizedState = d;
				else {
					r = c.next;
					var y = h = null, C = null, R = r, D = !1;
					do {
						var U = R.lane & -536870913;
						if (U !== R.lane ? (ye & U) === U : (ta & U) === U) {
							var A = R.revertLane;
							if (A === 0) C !== null && (C = C.next = {
								lane: 0,
								revertLane: 0,
								gesture: null,
								action: R.action,
								hasEagerState: R.hasEagerState,
								eagerState: R.eagerState,
								next: null
							}), U === Ii && (D = !0);
							else if ((ta & A) === A) {
								R = R.next, A === Ii && (D = !0);
								continue;
							} else U = {
								lane: 0,
								revertLane: R.revertLane,
								gesture: null,
								action: R.action,
								hasEagerState: R.hasEagerState,
								eagerState: R.eagerState,
								next: null
							}, C === null ? (y = C = U, h = d) : C = C.next = U, re.lanes |= A, aa |= A;
							U = R.action, Fi && a(d, U), d = R.hasEagerState ? R.eagerState : a(d, U);
						} else A = {
							lane: U,
							revertLane: R.revertLane,
							gesture: R.gesture,
							action: R.action,
							hasEagerState: R.hasEagerState,
							eagerState: R.eagerState,
							next: null
						}, C === null ? (y = C = A, h = d) : C = C.next = A, re.lanes |= U, aa |= U;
						R = R.next;
					} while (R !== null && R !== r);
					if (C === null ? h = d : C.next = y, !$t(d, t.memoizedState) && (Pn = !0, D && (a = Gl, a !== null))) throw a;
					t.memoizedState = d, t.baseState = h, t.baseQueue = C, l.lastRenderedState = d;
				}
				return c === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
			}
			function tr(t) {
				var r = K(), a = r.queue;
				if (a === null) throw Error(F(311));
				a.lastRenderedReducer = t;
				var l = a.dispatch, c = a.pending, d = r.memoizedState;
				if (c !== null) {
					a.pending = null;
					var h = c = c.next;
					do
						d = t(d, h.action), h = h.next;
					while (h !== c);
					$t(d, r.memoizedState) || (Pn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), a.lastRenderedState = d;
				}
				return [d, l];
			}
			function pm(t, r, a) {
				var l = re, c = K(), d = ne;
				if (d) {
					if (a === void 0) throw Error(F(407));
					a = a();
				} else a = r();
				var h = !$t((De || c).memoizedState, a);
				if (h && (c.memoizedState = a, Pn = !0), c = c.queue, _c(hl.bind(null, l, c, t), [t]), t = c.getSnapshot !== r || h || un !== null && (un.memoizedState.tag & 1) !== 0, Ur(t ? 9 : 8, { destroy: void 0 }, Us.bind(null, l, c, a, r), null), t) {
					if (l.flags |= 2048, Be === null) throw Error(F(349));
					d || ta & 127 || mo(l, r, a);
				}
				return a;
			}
			function mo(t, r, a) {
				t.flags |= 16384, t = {
					getSnapshot: r,
					value: a
				}, r = re.updateQueue, r === null ? (r = si(), re.updateQueue = r, r.stores = [t]) : (a = r.stores, a === null ? r.stores = [t] : a.push(t));
			}
			function Us(t, r, a, l) {
				r.value = a, r.getSnapshot = l, Ws(r) && Pt(t);
			}
			function hl(t, r, a) {
				return a(function() {
					Ws(r) && Pt(t);
				});
			}
			function Ws(t) {
				var r = t.getSnapshot;
				t = t.value;
				try {
					var a = r();
					return !$t(t, a);
				} catch {
					return !0;
				}
			}
			function Pt(t) {
				var r = Er(t, 2);
				r !== null && yt(r, t, 2);
			}
			function gt(t) {
				var r = gn();
				if (typeof t == "function") {
					var a = t;
					if (t = a(), Fi) {
						ga(!0);
						try {
							a();
						} finally {
							ga(!1);
						}
					}
				}
				return r.memoizedState = r.baseState = t, r.queue = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Bt,
					lastRenderedState: t
				}, r;
			}
			function Ir(t, r, a, l) {
				return t.baseState = a, Af(t, De, typeof l == "function" ? l : Bt);
			}
			function go(t, r, a, l, c) {
				if (Wr(t)) throw Error(F(485));
				if (t = r.action, t !== null) {
					var d = {
						payload: c,
						action: t,
						next: null,
						isTransition: !0,
						status: "pending",
						value: null,
						reason: null,
						listeners: [],
						then: function(h) {
							d.listeners.push(h);
						}
					};
					Q.T !== null ? a(!0) : d.isTransition = !1, l(d), a = r.pending, a === null ? (d.next = r.pending = d, Rr(r, d)) : (d.next = a.next, r.pending = a.next = d);
				}
			}
			function Rr(t, r) {
				var a = r.action, l = r.payload, c = t.state;
				if (r.isTransition) {
					var d = Q.T, h = {};
					h.types = d !== null ? d.types : null, Q.T = h;
					try {
						var y = a(c, l), C = Q.S;
						C !== null && C(h, y), Lr(t, r, y);
					} catch (R) {
						As(t, r, R);
					} finally {
						d !== null && h.types !== null && (d.types = h.types), Q.T = d;
					}
				} else try {
					d = a(c, l), Lr(t, r, d);
				} catch (R) {
					As(t, r, R);
				}
			}
			function Lr(t, r, a) {
				a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
					zc(t, r, l);
				}, function(l) {
					return As(t, r, l);
				}) : zc(t, r, a);
			}
			function zc(t, r, a) {
				r.status = "fulfilled", r.value = a, Of(r), t.state = a, r = t.pending, r !== null && (a = r.next, a === r ? t.pending = null : (a = a.next, r.next = a, Rr(t, a)));
			}
			function As(t, r, a) {
				var l = t.pending;
				if (t.pending = null, l !== null) {
					l = l.next;
					do
						r.status = "rejected", r.reason = a, Of(r), r = r.next;
					while (r !== l);
				}
				t.action = null;
			}
			function Of(t) {
				t = t.listeners;
				for (var r = 0; r < t.length; r++) (0, t[r])();
			}
			function Fr(t, r) {
				return r;
			}
			function Bf(t, r) {
				if (ne) {
					var a = Be.formState;
					if (a !== null) {
						e: {
							var l = re;
							if (ne) {
								if (Qe) {
									var c = Zp(Qe, hr);
									if (c) {
										Qe = Nd(c), l = Xp(c);
										break e;
									}
								}
								Mn(l);
							}
							l = !1;
						}
						l && (r = a[0]);
					}
				}
				a = gn(), a.memoizedState = a.baseState = r, l = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Fr,
					lastRenderedState: r
				}, a.queue = l, a = Tc.bind(null, re, l), l.dispatch = a, l = gt(!1);
				var d = yl.bind(null, re, !1, l.queue);
				return l = gn(), c = {
					state: r,
					dispatch: null,
					action: t,
					pending: null
				}, l.queue = c, a = go.bind(null, re, c, d, a), c.dispatch = a, l.memoizedState = t, [
					r,
					a,
					!1
				];
			}
			function Dr(t) {
				return ml(K(), De, t);
			}
			function ml(t, r, a) {
				if (r = Af(t, r, Fr)[0], t = js(Bt)[0], typeof r == "object" && r !== null && typeof r.then == "function") try {
					var l = fl(r);
				} catch (h) {
					throw h === Jl ? Wd : h;
				}
				else l = r;
				r = K();
				var c = r.queue, d = c.dispatch;
				return a !== r.memoizedState && (re.flags |= 2048, Ur(9, { destroy: void 0 }, Ec.bind(null, c, a), null)), [
					l,
					d,
					t
				];
			}
			function Ec(t, r) {
				t.action = r;
			}
			function jr(t) {
				var r = K(), a = De;
				if (a !== null) return ml(r, a, t);
				K(), r = r.memoizedState, a = K();
				var l = a.queue.dispatch;
				return a.memoizedState = t, [
					r,
					l,
					!1
				];
			}
			function Ur(t, r, a, l) {
				return t = {
					tag: t,
					create: a,
					deps: l,
					inst: r,
					next: null
				}, r = re.updateQueue, r === null && (r = si(), re.updateQueue = r), a = r.lastEffect, a === null ? r.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, r.lastEffect = t), t;
			}
			function Hf() {
				return K().memoizedState;
			}
			function gl(t, r, a, l) {
				var c = gn();
				re.flags |= t, c.memoizedState = Ur(1 | r, { destroy: void 0 }, a, l === void 0 ? null : l);
			}
			function Os(t, r, a, l) {
				var c = K();
				l = l === void 0 ? null : l;
				var d = c.memoizedState.inst;
				De !== null && l !== null && Fs(l, De.memoizedState.deps) ? c.memoizedState = Ur(r, d, a, l) : (re.flags |= t, c.memoizedState = Ur(1 | r, d, a, l));
			}
			function Mf(t, r) {
				gl(8390656, 8, t, r);
			}
			function _c(t, r) {
				Os(2048, 8, t, r);
			}
			function Vf(t) {
				re.flags |= 4;
				var r = re.updateQueue;
				if (r === null) r = si(), re.updateQueue = r, r.events = [t];
				else {
					var a = r.events;
					a === null ? r.events = [t] : a.push(t);
				}
			}
			function $f(t) {
				var r = K().memoizedState;
				return Vf({
					ref: r,
					nextImpl: t
				}), function() {
					if ((de & 2) !== 0) throw Error(F(440));
					return r.impl.apply(void 0, arguments);
				};
			}
			function Nc(t, r) {
				return Os(4, 2, t, r);
			}
			function hm(t, r) {
				return Os(4, 4, t, r);
			}
			function Qf(t, r) {
				if (typeof r == "function") {
					t = t();
					var a = r(t);
					return function() {
						typeof a == "function" ? a() : r(null);
					};
				}
				if (r != null) return t = t(), r.current = t, function() {
					r.current = null;
				};
			}
			function mm(t, r, a) {
				a = a != null ? a.concat([t]) : null, Os(4, 4, Qf.bind(null, r, t), a);
			}
			function Bs() {}
			function Hs(t, r) {
				var a = K();
				r = r === void 0 ? null : r;
				var l = a.memoizedState;
				return r !== null && Fs(r, l[1]) ? l[0] : (a.memoizedState = [t, r], t);
			}
			function qf(t, r) {
				var a = K();
				r = r === void 0 ? null : r;
				var l = a.memoizedState;
				if (r !== null && Fs(r, l[1])) return l[0];
				if (l = t(), Fi) {
					ga(!0);
					try {
						t();
					} finally {
						ga(!1);
					}
				}
				return a.memoizedState = [l, r], l;
			}
			function bl(t, r, a) {
				return a === void 0 || (ta & 1073741824) !== 0 && (ye & 261930) === 0 ? t.memoizedState = r : (t.memoizedState = a, t = vp(), re.lanes |= t, aa |= t, a);
			}
			function Gf(t, r, a, l) {
				return $t(a, r) ? a : Ba.current !== null ? (t = bl(t, a, l), $t(t, r) || (Pn = !0), t) : (ta & 106) === 0 || (ta & 1073741824) !== 0 && (ye & 261930) === 0 ? (Pn = !0, t.memoizedState = a) : (t = vp(), re.lanes |= t, aa |= t, r);
			}
			function Jf(t, r, a, l, c) {
				var d = sr();
				jn(d !== 0 && 8 > d ? d : 8);
				var h = Q.T, y = {};
				y.types = h !== null ? h.types : null, Q.T = y, yl(t, !1, r, a);
				try {
					var C = c(), R = Q.S;
					if (R !== null && R(y, C), C !== null && typeof C == "object" && typeof C.then == "function") wa(t, r, dm(C, l), zt(t));
					else wa(t, r, l, zt(t));
				} catch (U) {
					wa(t, r, {
						then: function() {},
						status: "rejected",
						reason: U
					}, zt());
				} finally {
					jn(d), h !== null && y.types !== null && (h.types = y.types), Q.T = h;
				}
			}
			function Zf(t) {
				var r = t.memoizedState;
				if (r !== null) return r;
				r = {
					memoizedState: Fa,
					baseState: Fa,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Bt,
						lastRenderedState: Fa
					},
					next: null
				};
				var a = {};
				return r.next = {
					memoizedState: a,
					baseState: a,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: Bt,
						lastRenderedState: a
					},
					next: null
				}, t.memoizedState = r, t = t.alternate, t !== null && (t.memoizedState = r), r;
			}
			function bo() {
				return Me($r);
			}
			function Xf() {
				return K().memoizedState;
			}
			function Yf() {
				return K().memoizedState;
			}
			function gm(t) {
				for (var r = t.return; r !== null;) {
					switch (r.tag) {
						case 24:
						case 3:
							var a = zt();
							t = po(a);
							var l = ka(r, t, a);
							l !== null && (yt(l, r, a), Ls(l, r, a)), r = { cache: _s() }, t.payload = r;
							return;
					}
					r = r.return;
				}
			}
			function bt(t, r, a) {
				var l = zt();
				a = {
					lane: l,
					revertLane: 0,
					gesture: null,
					action: a,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, Wr(t) ? Kf(r, a) : (a = kc(t, r, a, l), a !== null && (yt(a, t, l), Ms(a, r, l)));
			}
			function Tc(t, r, a) {
				wa(t, r, a, zt());
			}
			function wa(t, r, a, l) {
				var c = {
					lane: l,
					revertLane: 0,
					gesture: null,
					action: a,
					hasEagerState: !1,
					eagerState: null,
					next: null
				};
				if (Wr(t)) Kf(r, c);
				else {
					var d = t.alternate;
					if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
						var h = r.lastRenderedState, y = d(h, a);
						if (c.hasEagerState = !0, c.eagerState = y, $t(y, h)) return fo(t, r, c, 0), Be === null && Wo(), !1;
					} catch {}
					if (a = kc(t, r, c, l), a !== null) return yt(a, t, l), Ms(a, r, l), !0;
				}
				return !1;
			}
			function yl(t, r, a, l) {
				if (l = {
					lane: 2,
					revertLane: Sc(),
					gesture: null,
					action: l,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, Wr(t)) {
					if (r) throw Error(F(479));
				} else r = kc(t, a, l, 2), r !== null && yt(r, t, 2);
			}
			function Wr(t) {
				var r = t.alternate;
				return t === re || r !== null && r === re;
			}
			function Kf(t, r) {
				ra = Bd = !0;
				var a = t.pending;
				a === null ? r.next = r : (r.next = a.next, a.next = r), t.pending = r;
			}
			function Ms(t, r, a) {
				if ((a & 4194048) !== 0) {
					var l = r.lanes;
					l &= t.pendingLanes, a |= l, r.lanes = a, G(t, a);
				}
			}
			function Ic(t, r, a, l) {
				r = t.memoizedState, a = a(l, r), a = a == null ? r : Lp({}, r, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
			}
			function Vs(t, r, a, l, c, d, h) {
				return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Ts(a, l) || !Ts(c, d) : !0;
			}
			function ep(t, r, a, l) {
				t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(a, l), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(a, l), r.state !== t && Md.enqueueReplaceState(r, r.state, null);
			}
			function yo(t, r) {
				var a = r;
				if ("ref" in r) {
					a = {};
					for (var l in r) l !== "ref" && (a[l] = r[l]);
				}
				if (t = t.defaultProps) {
					a === r && (a = Lp({}, a));
					for (var c in t) a[c] === void 0 && (a[c] = t[c]);
				}
				return a;
			}
			function $s(t, r) {
				try {
					var a = t.onUncaughtError;
					a(r.value, { componentStack: r.stack });
				} catch (l) {
					setTimeout(function() {
						throw l;
					});
				}
			}
			function np(t, r, a) {
				try {
					var l = t.onCaughtError;
					l(a.value, {
						componentStack: a.stack,
						errorBoundary: r.tag === 1 ? r.stateNode : null
					});
				} catch (c) {
					setTimeout(function() {
						throw c;
					});
				}
			}
			function vl(t, r, a) {
				return a = po(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
					$s(t, r);
				}, a;
			}
			function Qs(t) {
				return t = po(t), t.tag = 3, t;
			}
			function Rc(t, r, a, l) {
				var c = a.type.getDerivedStateFromError;
				if (typeof c == "function") {
					var d = l.value;
					t.payload = function() {
						return c(d);
					}, t.callback = function() {
						np(r, a, l);
					};
				}
				var h = a.stateNode;
				h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
					np(r, a, l), typeof c != "function" && (Va === null ? Va = /* @__PURE__ */ new Set([this]) : Va.add(this));
					var y = l.stack;
					this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
				});
			}
			function tt(t, r, a, l, c) {
				if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
					if (r = a.alternate, r !== null && so(r, a, c, !0), a = Zn.current, a !== null) {
						switch (a.tag) {
							case 31:
							case 13:
							case 19: return lt === null ? Rl() : a.alternate === null && cn === 0 && (cn = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === Ad ? a.flags |= 16384 : (r = a.updateQueue, r === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : r.add(l), dd(t, l, c)), !1;
							case 22: return a.flags |= 65536, l === Ad ? a.flags |= 16384 : (r = a.updateQueue, r === null ? (r = {
								transitions: null,
								markerInstances: null,
								retryQueue: /* @__PURE__ */ new Set([l])
							}, a.updateQueue = r) : (a = r.retryQueue, a === null ? r.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), dd(t, l, c)), !1;
						}
						throw Error(F(435, a.tag));
					}
					return dd(t, l, c), Rl(), !1;
				}
				if (ne) return r = Zn.current, r !== null ? (!(r.flags & 65536) && (r.flags |= 256), r.flags |= 65536, r.lanes = c, l !== hh && (t = Error(F(422), { cause: l }), va(Kt(t, a)))) : (l !== hh && (r = Error(F(423), { cause: l }), va(Kt(r, a))), t = t.current.alternate, t.flags |= 65536, c &= -c, t.lanes |= c, l = Kt(l, a), c = vl(t.stateNode, l, c), wc(t, c), cn !== 4 && (cn = 2)), !1;
				var d = Error(F(520), { cause: l });
				if (d = Kt(d, a), Vu === null ? Vu = [d] : Vu.push(d), cn !== 4 && (cn = 2), r === null) return !0;
				l = Kt(l, a), a = r;
				do {
					switch (a.tag) {
						case 3: return a.flags |= 65536, t = c & -c, a.lanes |= t, t = vl(a.stateNode, l, t), wc(a, t), !1;
						case 1:
							if (r = a.type, d = a.stateNode, (a.flags & 128) === 0 && (typeof r.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Va === null || !Va.has(d)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = Qs(c), Rc(c, t, a, l), wc(a, c), !1;
							break;
						case 22: if (a.memoizedState !== null) return a.flags |= 65536, !1;
					}
					a = a.return;
				} while (a !== null);
				return !1;
			}
			function wn(t, r, a, l) {
				r.child = t === null ? zg(r, null, a, l) : Li(r, t.child, a, l);
			}
			function qs(t, r, a, l, c) {
				a = a.render;
				var d = r.ref;
				if ("ref" in l) {
					var h = {};
					for (var y in l) y !== "ref" && (h[y] = l[y]);
				} else h = l;
				return Do(r), l = cl(t, r, a, h, d, c), y = Ds(), t !== null && !Pn ? (Ho(t, r, c), Ee(t, r, c)) : (ne && y && Ps(r), r.flags |= 1, wn(t, r, l, c), r.child);
			}
			function Lc(t, r, a, l, c) {
				if (t === null) {
					var d = a.type;
					return typeof d == "function" && !_p(d) && d.defaultProps === void 0 && a.compare === null ? (r.tag = 15, r.type = d, Fc(t, r, d, l, c)) : (t = Vt(a.type, null, l, r, r.mode, c), t.ref = r.ref, t.return = r, r.child = t);
				}
				if (d = t.child, !Ks(t, c)) {
					var h = d.memoizedProps;
					if (a = a.compare, a = a !== null ? a : Ts, a(h, l) && t.ref === r.ref) return Ee(t, r, c);
				}
				return r.flags |= 1, t = Zo(d, l), t.ref = r.ref, t.return = r, r.child = t;
			}
			function Fc(t, r, a, l, c) {
				if (t !== null) {
					var d = t.memoizedProps;
					if (Ts(d, l) && t.ref === r.ref) if (Pn = !1, r.pendingProps = l = d, Ks(t, c)) t.flags & 131072 && (Pn = !0);
					else return r.lanes = t.lanes, Ee(t, r, c);
				}
				return tp(t, r, a, l, c);
			}
			function Vo(t, r, a, l) {
				var c = l.children, d = t !== null ? t.memoizedState : null;
				if (t === null && r.stateNode === null && (r.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), l.mode === "hidden") {
					if ((r.flags & 128) !== 0) {
						if (d = d !== null ? d.baseLanes | a : a, t !== null) {
							for (l = r.child = t.child, c = 0; l !== null;) c = c | l.lanes | l.childLanes, l = l.sibling;
							l = c & ~d;
						} else l = 0, r.child = null;
						return Sl(t, r, d, a, l);
					}
					if ((a & 536870912) !== 0) r.memoizedState = {
						baseLanes: 0,
						cachePool: null
					}, t !== null && ol(r, d !== null ? d.cachePool : null), d !== null ? Pc(r, d) : Ao(), Wf(r);
					else return l = r.lanes = 536870912, Sl(t, r, d !== null ? d.baseLanes | a : a, a, l);
				} else d !== null ? (ol(r, d.cachePool), Pc(r, d), Tr(), r.memoizedState = null) : (t !== null && ol(r, null), Ao(), Tr());
				return wn(t, r, c, a), r.child;
			}
			function rr(t, r) {
				return t !== null && t.tag === 22 || r.stateNode !== null || (r.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), r.sibling;
			}
			function Sl(t, r, a, l, c) {
				var d = rl();
				return d = d === null ? null : {
					parent: lr ? tn._currentValue : tn._currentValue2,
					pool: d
				}, r.memoizedState = {
					baseLanes: a,
					cachePool: d
				}, t !== null && ol(r, null), Ao(), Wf(r), t !== null && so(t, r, l, !0), r.childLanes = c, null;
			}
			function ui(t, r) {
				return r = Ar({
					mode: r.mode,
					children: r.children
				}, t.mode), r.ref = t.ref, t.child = r, r.return = t, r;
			}
			function kl(t, r, a) {
				return Li(r, t.child, null, a), t = ui(r, r.pendingProps), t.flags |= 2, Ln(r), r.memoizedState = null, t;
			}
			function Gs(t, r, a) {
				var l = r.pendingProps, c = (r.flags & 128) !== 0;
				if (r.flags &= -129, t === null) {
					if (ne) {
						if (l.mode === "hidden") return t = ui(r, l), r.lanes = 536870912, t.memoizedState = {
							baseLanes: 0,
							cachePool: null
						}, rr(null, t);
						if (Nr(r), (t = Qe) ? (t = cg(t, hr), t !== null && (r.memoizedState = {
							dehydrated: t,
							treeContext: _e !== null ? {
								id: _n,
								overflow: $e
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, a = Ll(t), a.return = r, r.child = a, Nn = r, Qe = null)) : t = null, t === null) throw Mn(r);
						return r.lanes = 536870912, null;
					}
					return ui(r, l);
				}
				var d = t.memoizedState;
				if (d !== null) {
					var h = d.dehydrated;
					if (Nr(r), c) {
						if (r.flags & 256) r.flags &= -257, r = kl(t, r, a);
						else if (r.memoizedState !== null) r.child = t.child, r.flags |= 128, r = null;
						else throw Error(F(558));
					} else if (Pn || so(t, r, a, !1), c = (a & t.childLanes) !== 0, Pn || c) {
						if (Ba.current === null) {
							if (l = Be, l !== null && (h = Wt(l, a), h !== 0 && h !== d.retryLane)) throw d.retryLane = h, Er(t, h), yt(l, t, h), vh;
							Rl();
						}
						r = kl(t, r, a);
					} else t = d.treeContext, En && (Qe = Yp(h), Nn = r, ne = !0, pr = null, hr = !1, t !== null && Rf(r, t)), r = ui(r, l), r.flags |= 134221824;
					return r;
				}
				return t = Zo(t.child, {
					mode: l.mode,
					children: l.children
				}), t.ref = r.ref, r.child = t, t.return = r, t;
			}
			function ci(t, r) {
				var a = r.ref;
				if (a === null) t !== null && t.ref !== null && (r.flags |= 4194816);
				else {
					if (typeof a != "function" && typeof a != "object") throw Error(F(284));
					(t === null || t.ref !== a) && (r.flags |= 4194816);
				}
			}
			function tp(t, r, a, l, c) {
				return Do(r), a = cl(t, r, a, l, void 0, c), l = Ds(), t !== null && !Pn ? (Ho(t, r, c), Ee(t, r, c)) : (ne && l && Ps(r), r.flags |= 1, wn(t, r, a, c), r.child);
			}
			function rp(t, r, a, l, c, d) {
				return Do(r), r.updateQueue = null, a = ho(r, l, a, c), Bo(t), l = Ds(), t !== null && !Pn ? (Ho(t, r, d), Ee(t, r, d)) : (ne && l && Ps(r), r.flags |= 1, wn(t, r, a, d), r.child);
			}
			function op(t, r, a, l, c) {
				if (Do(r), r.stateNode === null) {
					var d = Aa, h = a.contextType;
					typeof h == "object" && h !== null && (d = Me(h)), d = new a(l, d), r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Md, r.stateNode = d, d._reactInternals = r, d = r.stateNode, d.props = l, d.state = r.memoizedState, d.refs = {}, ii(r), h = a.contextType, d.context = typeof h == "object" && h !== null ? Me(h) : Aa, d.state = r.memoizedState, h = a.getDerivedStateFromProps, typeof h == "function" && (Ic(r, a, h, l), d.state = r.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (h = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), h !== d.state && Md.enqueueReplaceState(d, d.state, null), ll(r, l, d, c), li(), d.state = r.memoizedState), typeof d.componentDidMount == "function" && (r.flags |= 4194308), l = !0;
				} else if (t === null) {
					d = r.stateNode;
					var y = r.memoizedProps, C = yo(a, y);
					d.props = C;
					var R = d.context, D = a.contextType;
					h = Aa, typeof D == "object" && D !== null && (h = Me(D));
					var U = a.getDerivedStateFromProps;
					D = typeof U == "function" || typeof d.getSnapshotBeforeUpdate == "function", y = r.pendingProps !== y, D || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y || R !== h) && ep(r, d, l, h), na = !1;
					var A = r.memoizedState;
					d.state = A, ll(r, l, d, c), li(), R = r.memoizedState, y || A !== R || na ? (typeof U == "function" && (Ic(r, a, U, l), R = r.memoizedState), (C = na || Vs(r, a, C, l, A, R, h)) ? (D || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = l, r.memoizedState = R), d.props = l, d.state = R, d.context = h, l = C) : (typeof d.componentDidMount == "function" && (r.flags |= 4194308), l = !1);
				} else {
					d = r.stateNode, Sa(t, r), h = r.memoizedProps, D = yo(a, h), d.props = D, U = r.pendingProps, A = d.context, R = a.contextType, C = Aa, typeof R == "object" && R !== null && (C = Me(R)), y = a.getDerivedStateFromProps, (R = typeof y == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (h !== U || A !== C) && ep(r, d, l, C), na = !1, A = r.memoizedState, d.state = A, ll(r, l, d, c), li();
					var fe = r.memoizedState;
					h !== U || A !== fe || na || t !== null && t.dependencies !== null && oi(t.dependencies) ? (typeof y == "function" && (Ic(r, a, y, l), fe = r.memoizedState), (D = na || Vs(r, a, D, l, A, fe, C) || t !== null && t.dependencies !== null && oi(t.dependencies)) ? (R || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, fe, C), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, fe, C)), typeof d.componentDidUpdate == "function" && (r.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || h === t.memoizedProps && A === t.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && A === t.memoizedState || (r.flags |= 1024), r.memoizedProps = l, r.memoizedState = fe), d.props = l, d.state = fe, d.context = C, l = D) : (typeof d.componentDidUpdate != "function" || h === t.memoizedProps && A === t.memoizedState || (r.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && A === t.memoizedState || (r.flags |= 1024), l = !1);
				}
				return d = l, ci(t, r), l = (r.flags & 128) !== 0, d || l ? (d = r.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : d.render(), r.flags |= 1, t !== null && l ? (r.child = Li(r, t.child, null, c), r.child = Li(r, null, a, c)) : wn(t, r, a, c), r.memoizedState = d.state, t = r.child) : t = Ee(t, r, c), t;
			}
			function Dc(t, r, a, l) {
				return ri(), r.flags |= 256, wn(t, r, a, l), r.child;
			}
			function Js(t) {
				return {
					baseLanes: t,
					cachePool: Uf()
				};
			}
			function vo(t, r, a) {
				return t = t !== null ? t.childLanes & ~a : 0, r && (t |= Ft), t;
			}
			function jc(t, r, a) {
				var l = r.pendingProps, c = !1, d = (r.flags & 128) !== 0, h;
				if ((h = d) || (h = t !== null && t.memoizedState === null ? !1 : (Xn.current & 2) !== 0), h && (c = !0, r.flags &= -129), h = (r.flags & 32) !== 0, r.flags &= -33, t === null) {
					if (ne) {
						if (c ? _r(r) : Tr(), (t = Qe) ? (t = _0(t, hr), t !== null && (r.memoizedState = {
							dehydrated: t,
							treeContext: _e !== null ? {
								id: _n,
								overflow: $e
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, a = Ll(t), a.return = r, r.child = a, Nn = r, Qe = null)) : t = null, t === null) throw Mn(r);
						return Jp(t) ? r.lanes = 32 : r.lanes = 536870912, null;
					}
					return d = l.children, l = l.fallback, c ? (Tr(), c = r.mode, d = Ar({
						mode: "hidden",
						children: d
					}, c), l = Na(l, c, a, null), d.return = r, l.return = r, d.sibling = l, r.child = d, l = r.child, l.memoizedState = Js(a), l.childLanes = vo(t, h, a), r.memoizedState = Vd, rr(null, l)) : (_r(r), Uc(r, d));
				}
				var y = t.memoizedState;
				if (y !== null) {
					var C = y.dehydrated;
					if (C !== null) return Zs(t, r, d, h, l, C, y, a);
				}
				return c ? (Tr(), c = l.fallback, d = r.mode, y = t.child, C = y.sibling, l = Zo(y, {
					mode: "hidden",
					children: l.children
				}), l.subtreeFlags = y.subtreeFlags & 1206910976, C !== null ? c = Zo(C, c) : (c = Na(c, d, a, null), c.flags |= 2), c.return = r, l.return = r, l.sibling = c, r.child = l, rr(null, l), l = r.child, c = t.child.memoizedState, c === null ? c = Js(a) : (d = c.cachePool, d !== null ? (y = lr ? tn._currentValue : tn._currentValue2, d = d.parent !== y ? {
					parent: y,
					pool: y
				} : d) : d = Uf(), c = {
					baseLanes: c.baseLanes | a,
					cachePool: d
				}), l.memoizedState = c, l.childLanes = vo(t, h, a), r.memoizedState = Vd, rr(t.child, l)) : (_r(r), a = t.child, t = a.sibling, a = Zo(a, {
					mode: "visible",
					children: l.children
				}), a.return = r, a.sibling = null, t !== null && (h = r.deletions, h === null ? (r.deletions = [t], r.flags |= 16) : h.push(t)), r.child = a, r.memoizedState = null, a);
			}
			function Uc(t, r) {
				return r = Ar({
					mode: "visible",
					children: r
				}, t.mode), r.return = t, t.child = r;
			}
			function Ar(t, r) {
				return t = et(22, t, null, r), t.lanes = 0, t;
			}
			function rt(t, r, a) {
				return Li(r, t.child, null, a), t = Uc(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
			}
			function Zs(t, r, a, l, c, d, h, y) {
				if (a) return r.flags & 256 ? (_r(r), r.flags &= -257, rt(t, r, y)) : r.memoizedState !== null ? (Tr(), r.child = t.child, r.flags |= 128, null) : (Tr(), d = c.fallback, h = r.mode, c = Ar({
					mode: "visible",
					children: c.children
				}, h), d = Na(d, h, y, null), d.flags |= 2, c.return = r, d.return = r, c.sibling = d, r.child = c, Li(r, t.child, null, y), c = r.child, c.memoizedState = Js(y), c.childLanes = vo(t, l, y), r.memoizedState = Vd, rr(null, c));
				if (_r(r), Jp(d)) return l = C0(d).digest, l !== "" && (c = Error(F(419)), c.stack = "", c.digest = l, va({
					value: c,
					source: null,
					stack: null
				})), rt(t, r, y);
				if (Pn || so(t, r, y, !1), l = (y & t.childLanes) !== 0, Pn || l) {
					if (Ba.current !== null) return rt(t, r, y);
					if (l = Be, l !== null && (c = Wt(l, y), c !== 0 && c !== h.retryLane)) throw h.retryLane = c, Er(t, c), yt(l, t, c), vh;
					return Gp(d) || Rl(), rt(t, r, y);
				}
				return Gp(d) ? (r.flags |= 192, r.child = t.child, null) : (t = h.treeContext, En && (Qe = ug(d), Nn = r, ne = !0, pr = null, hr = !1, t !== null && Rf(r, t)), r = Uc(r, c.children), r.flags |= 134221824, r);
			}
			function Wc(t, r, a) {
				t.lanes |= r;
				var l = t.alternate;
				l !== null && (l.lanes |= r), zn(t.return, r, a);
			}
			function Xs(t) {
				for (var r = null; t !== null;) {
					var a = t.alternate;
					a !== null && ul(a) === null && (r = t), t = t.sibling;
				}
				return r;
			}
			function ee(t, r, a, l, c, d) {
				var h = t.memoizedState;
				h === null ? t.memoizedState = {
					isBackwards: r,
					rendering: null,
					renderingStartTime: 0,
					last: l,
					tail: a,
					tailMode: c,
					treeForkCount: d
				} : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = l, h.tail = a, h.tailMode = c, h.treeForkCount = d);
			}
			function L(t) {
				var r = t.child;
				for (t.child = null; r !== null;) {
					var a = r.sibling;
					r.sibling = t.child, t.child = r, r = a;
				}
			}
			function Pa(t, r, a) {
				var l = r.pendingProps, c = l.revealOrder, d = l.tail;
				l = l.children;
				var h = Xn.current;
				if (r.flags & 128) return sl(r, h), null;
				var y = (h & 2) !== 0;
				if (y ? (h = h & 1 | 2, r.flags |= 128) : h &= 1, sl(r, h), c === "backwards" && t !== null ? (L(t), wn(t, r, l, a), L(t)) : wn(t, r, l, a), l = ne ? Du : 0, !y && t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null;) {
					if (t.tag === 13) t.memoizedState !== null && Wc(t, a, r);
					else if (t.tag === 19) Wc(t, a, r);
					else if (t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === r) break e;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === r) break e;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
				switch (c) {
					case "backwards":
						a = Xs(r.child), a === null ? (c = r.child, r.child = null) : (c = a.sibling, a.sibling = null, L(r)), ee(r, !0, c, null, d, l);
						break;
					case "unstable_legacy-backwards":
						for (a = null, c = r.child, r.child = null; c !== null;) {
							if (t = c.alternate, t !== null && ul(t) === null) {
								r.child = c;
								break;
							}
							t = c.sibling, c.sibling = a, a = c, c = t;
						}
						ee(r, !0, a, null, d, l);
						break;
					case "together":
						ee(r, !1, null, null, void 0, l);
						break;
					case "independent":
						r.memoizedState = null;
						break;
					default: a = Xs(r.child), a === null ? (c = r.child, r.child = null) : (c = a.sibling, a.sibling = null), ee(r, !1, c, a, d, l);
				}
				return r.child;
			}
			function Ys(t, r, a) {
				var l = r.pendingProps;
				return Rn(r, r.type, l.value), wn(t, r, l.children, a), r.child;
			}
			function Ee(t, r, a) {
				if (t !== null && (r.dependencies = t.dependencies), aa |= r.lanes, (a & r.childLanes) === 0) if (t !== null) {
					if (so(t, r, a, !1), (a & r.childLanes) === 0) return null;
				} else return null;
				if (t !== null && r.child !== t.child) throw Error(F(153));
				if (r.child !== null) {
					for (t = r.child, a = Zo(t, t.pendingProps), r.child = a, a.return = r; t.sibling !== null;) t = t.sibling, a = a.sibling = Zo(t, t.pendingProps), a.return = r;
					a.sibling = null;
				}
				return r.child;
			}
			function Ks(t, r) {
				return (t.lanes & r) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && oi(t)));
			}
			function ap(t, r, a) {
				switch (r.tag) {
					case 3:
						Cs(r, r.stateNode.containerInfo), Rn(r, tn, t.memoizedState.cache), ri();
						break;
					case 27:
					case 5:
						Lf(r);
						break;
					case 4:
						Cs(r, r.stateNode.containerInfo);
						break;
					case 10:
						Rn(r, r.type, r.memoizedProps.value);
						break;
					case 31:
						if (r.memoizedState !== null) return r.flags |= 128, Nr(r), null;
						break;
					case 13:
						var l = r.memoizedState;
						if (l !== null) {
							if (l.dehydrated !== null) return _r(r), r.flags |= 128, null;
							l = so(t, r, a, !1);
							var c = r.child.childLanes;
							return l || (a & c) !== 0 ? jc(t, r, a) : (_r(r), t = Ee(t, r, a), t !== null ? t.sibling : null);
						}
						_r(r);
						break;
					case 19:
						if (r.flags & 128) return Pa(t, r, a);
						if (c = (t.flags & 128) !== 0, l = (a & r.childLanes) !== 0, l || (so(t, r, a, !1), l = (a & r.childLanes) !== 0), c) {
							if (l) return Pa(t, r, a);
							r.flags |= 128;
						}
						if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), sl(r, Xn.current), l) break;
						return null;
					case 22: return r.lanes = 0, Vo(t, r, a, r.pendingProps);
					case 24: Rn(r, tn, t.memoizedState.cache);
				}
				return Ee(t, r, a);
			}
			function ip(t, r, a) {
				if (t !== null) {
					if (t.memoizedProps !== r.pendingProps) Pn = !0;
					else {
						if (!Ks(t, a) && (r.flags & 128) === 0) return Pn = !1, ap(t, r, a);
						Pn = (t.flags & 131072) !== 0;
					}
				} else Pn = !1, ne && r.flags & 1048576 && If(r, Du, r.index);
				switch (r.lanes = 0, r.tag) {
					case 16:
						e: {
							var l = r.pendingProps;
							if (t = co(r.elementType), r.type = t, typeof t == "function") _p(t) ? (l = yo(t, l), r.tag = 1, r = op(null, r, t, l, a)) : (r.tag = 0, r = tp(null, r, t, l, a));
							else {
								if (t != null) {
									var c = t.$$typeof;
									if (c === bd) {
										r.tag = 11, r = qs(null, r, t, l, a);
										break e;
									} else if (c === Fl) {
										r.tag = 14, r = Lc(null, r, t, l, a);
										break e;
									} else if (c === Vr) {
										r.tag = 10, r.type = t, r = Ys(null, r, a);
										break e;
									}
								}
								throw r = gc(t) || t, Error(F(306, r, ""));
							}
						}
						return r;
					case 0: return tp(t, r, r.type, r.pendingProps, a);
					case 1: return l = r.type, c = yo(l, r.pendingProps), op(t, r, l, c, a);
					case 3:
						e: {
							if (Cs(r, r.stateNode.containerInfo), t === null) throw Error(F(387));
							var d = r.pendingProps;
							c = r.memoizedState, l = c.element, Sa(t, r), ll(r, d, null, a);
							var h = r.memoizedState;
							if (d = h.cache, Rn(r, tn, d), d !== c.cache && nr(r, [tn], a, !0), li(), d = h.element, En && c.isDehydrated) {
								if (c = {
									element: d,
									isDehydrated: !1,
									cache: h.cache
								}, r.updateQueue.baseState = c, r.memoizedState = c, r.flags & 256) {
									r = Dc(t, r, d, a);
									break e;
								} else if (d !== l) {
									l = Kt(Error(F(424)), r), va(l), r = Dc(t, r, d, a);
									break e;
								} else for (En && (Qe = Ol(r.stateNode.containerInfo), Nn = r, ne = !0, pr = null, hr = !0), a = zg(r, null, d, a), r.child = a; a;) a.flags = a.flags & -3 | 134221824, a = a.sibling;
							} else {
								if (ri(), d === l) {
									r = Ee(t, r, a);
									break e;
								}
								wn(t, r, d, a);
							}
							r = r.child;
						}
						return r;
					case 26: if (Nt) return ci(t, r), t === null ? (a = yg(r.type, null, r.pendingProps, null)) ? r.memoizedState = a : ne || (r.stateNode = ah(r.type, r.pendingProps, Je.current, r)) : r.memoizedState = yg(r.type, t.memoizedProps, r.pendingProps, t.memoizedState), null;
					case 27: if (be) return Lf(r), t === null && be && ne && (l = r.stateNode = Un(r.type, r.pendingProps, Je.current, Jn.current, !1), Nn = r, hr = !0, Qe = we(r.type, l, Qe)), wn(t, r, r.pendingProps.children, a), ci(t, r), t === null && (r.flags |= 4194304), r.child;
					case 5: return t === null && ne && (Id(r.type, r.pendingProps, Jn.current), (c = l = Qe) && (l = Kp(l, r.type, r.pendingProps, hr), l !== null ? (r.stateNode = l, Nn = r, Qe = sg(l), hr = !1, c = !0) : c = !1), c || Mn(r)), Lf(r), c = r.type, d = r.pendingProps, h = t !== null ? t.memoizedProps : null, l = d.children, kd(c, d) ? l = null : h !== null && kd(c, h) && (r.flags |= 32), r.memoizedState !== null && (c = cl(t, r, Cc, null, null, a), lr ? $r._currentValue = c : $r._currentValue2 = c), ci(t, r), wn(t, r, l, a), r.child;
					case 6: return t === null && ne && (zi(r.pendingProps, Jn.current), (t = a = Qe) && (a = E0(a, r.pendingProps, hr), a !== null ? (r.stateNode = a, Nn = r, Qe = null, t = !0) : t = !1), t || Mn(r)), null;
					case 13: return jc(t, r, a);
					case 4: return Cs(r, r.stateNode.containerInfo), l = r.pendingProps, t === null ? r.child = Li(r, null, l, a) : wn(t, r, l, a), r.child;
					case 11: return qs(t, r, r.type, r.pendingProps, a);
					case 7: return l = r.pendingProps, ci(t, r), wn(t, r, l, a), r.child;
					case 8: return wn(t, r, r.pendingProps.children, a), r.child;
					case 12: return wn(t, r, r.pendingProps.children, a), r.child;
					case 10: return Ys(t, r, a);
					case 9: return c = r.type._context, l = r.pendingProps.children, Do(r), c = Me(c), l = l(c), r.flags |= 1, wn(t, r, l, a), r.child;
					case 14: return Lc(t, r, r.type, r.pendingProps, a);
					case 15: return Fc(t, r, r.type, r.pendingProps, a);
					case 19: return Pa(t, r, a);
					case 31: return Gs(t, r, a);
					case 22: return Vo(t, r, a, r.pendingProps);
					case 24: return Do(r), l = Me(tn), t === null ? (c = rl(), c === null && (c = Be, d = _s(), c.pooledCache = d, d.refCount++, d !== null && (c.pooledCacheLanes |= a), c = d), r.memoizedState = {
						parent: l,
						cache: c
					}, ii(r), Rn(r, tn, c)) : ((t.lanes & a) !== 0 && (Sa(t, r), ll(r, null, null, a), li()), c = t.memoizedState, d = r.memoizedState, c.parent !== l ? (c = {
						parent: l,
						cache: l
					}, r.memoizedState = c, r.lanes === 0 && (r.memoizedState = r.updateQueue.baseState = c), Rn(r, tn, l)) : (l = d.cache, Rn(r, tn, l), l !== c.cache && nr(r, [tn], a, !0))), wn(t, r, r.pendingProps.children, a), r.child;
					case 30: return r.stateNode === null && (r.stateNode = {
						autoName: null,
						paired: null,
						clones: null,
						ref: null
					}), l = r.pendingProps, l.name != null && l.name !== "auto" ? r.flags |= t === null ? 18882560 : 18874368 : ne && Ps(r), t !== null && t.memoizedProps.name !== l.name ? r.flags |= 4194816 : ci(t, r), wn(t, r, l.children, a), r.child;
					case 29: throw r.pendingProps;
				}
				throw Error(F(156, r.tag));
			}
			function Ht(t) {
				t.flags |= 4;
			}
			function Ac(t) {
				ln && (t.flags |= 8);
			}
			function Oc(t, r) {
				if (t !== null && t.child === r.child) return !1;
				if ((r.flags & 16) !== 0) return !0;
				for (t = r.child; t !== null;) {
					if ((t.flags & 8218) !== 0 || (t.subtreeFlags & 8218) !== 0) return !0;
					t = t.sibling;
				}
				return !1;
			}
			function eu(t, r, a, l) {
				if (Ye) for (a = r.child; a !== null;) {
					if (a.tag === 5 || a.tag === 6) Sd(t, a.stateNode);
					else if (!(a.tag === 4 || be && a.tag === 27) && a.child !== null) {
						a.child.return = a, a = a.child;
						continue;
					}
					if (a === r) break;
					for (; a.sibling === null;) {
						if (a.return === null || a.return === r) return;
						a = a.return;
					}
					a.sibling.return = a.return, a = a.sibling;
				}
				else if (ln) for (var c = r.child; c !== null;) {
					if (c.tag === 5) {
						var d = c.stateNode;
						a && l && (d = _d(d, c.type, c.memoizedProps)), Sd(t, d);
					} else if (c.tag === 6) d = c.stateNode, a && l && (d = ig(d, c.memoizedProps)), Sd(t, d);
					else if (c.tag !== 4) {
						if (c.tag === 22 && c.memoizedState !== null) d = c.child, d !== null && (d.return = c), eu(t, c, !0, !0);
						else if (c.child !== null) {
							c.child.return = c, c = c.child;
							continue;
						}
					}
					if (c === r) break;
					for (; c.sibling === null;) {
						if (c.return === null || c.return === r) return;
						c = c.return;
					}
					c.sibling.return = c.return, c = c.sibling;
				}
			}
			function Bc(t, r, a, l) {
				var c = !1;
				if (ln) for (var d = r.child; d !== null;) {
					if (d.tag === 5) {
						var h = d.stateNode;
						a && l && (h = _d(h, d.type, d.memoizedProps)), Ci(t, h);
					} else if (d.tag === 6) h = d.stateNode, a && l && (h = ig(h, d.memoizedProps)), Ci(t, h);
					else if (d.tag !== 4) {
						if (d.tag === 22 && d.memoizedState !== null) c = d.child, c !== null && (c.return = d), Bc(t, d, !0, !0), c = !0;
						else if (d.child !== null) {
							d.child.return = d, d = d.child;
							continue;
						}
					}
					if (d === r) break;
					for (; d.sibling === null;) {
						if (d.return === null || d.return === r) return c;
						d = d.return;
					}
					d.sibling.return = d.return, d = d.sibling;
				}
				return c;
			}
			function ot(t, r) {
				if (ln && Oc(t, r)) {
					t = r.stateNode;
					var a = t.containerInfo, l = ag();
					Bc(l, r, !1, !1), t.pendingChildren = l, Ht(r), Ed(a, l);
				}
			}
			function xe(t, r, a, l) {
				if (Ye) t.memoizedProps !== l && Ht(r);
				else if (ln) {
					var c = t.stateNode, d = t.memoizedProps;
					if ((t = Oc(t, r)) || d !== l) {
						var h = Jn.current;
						d = og(c, a, d, l, !t, null), d === c ? r.stateNode = c : (Ac(r), Ap(d, a, l, h) && Ht(r), r.stateNode = d, t && eu(d, r, !1, !1));
					} else r.stateNode = c;
				}
			}
			function wl(t, r, a, l, c) {
				if ((t.mode & 32) !== 0 && (a === null ? Am(r, l) : Dl(r, a, l))) {
					if (t.flags |= 16777216, (c & 335544128) === c || wd(r, l)) if (ur(t.stateNode, r, l)) t.flags |= 8192;
					else if (wp()) t.flags |= 8192;
					else throw Ri = Ad, gh;
				} else t.flags &= -16777217;
			}
			function Pl(t, r) {
				if (L0(r)) {
					if (t.flags |= 16777216, !ce(r)) if (wp()) t.flags |= 8192;
					else throw Ri = Ad, gh;
				} else t.flags &= -16777217;
			}
			function Or(t, r) {
				r !== null && (t.flags |= 4), t.flags & 16384 && (r = t.tag !== 22 ? Nf() : 536870912, t.lanes |= r, es |= r);
			}
			function Br(t, r) {
				if (!ne) switch (t.tailMode) {
					case "visible": break;
					case "collapsed":
						for (var a = t.tail, l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
						l === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
						break;
					default:
						for (r = t.tail, a = null; r !== null;) r.alternate !== null && (a = r), r = r.sibling;
						a === null ? t.tail = null : a.sibling = null;
				}
			}
			function ge(t) {
				var r = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
				if (r) for (var c = t.child; c !== null;) a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 1206910976, l |= c.flags & 1206910976, c.return = t, c = c.sibling;
				else for (c = t.child; c !== null;) a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = t, c = c.sibling;
				return t.subtreeFlags |= l, t.childLanes = a, r;
			}
			function lp(t, r, a) {
				var l = r.pendingProps;
				switch (xs(r), r.tag) {
					case 16:
					case 15:
					case 0:
					case 11:
					case 7:
					case 8:
					case 12:
					case 9:
					case 14: return ge(r), null;
					case 1: return ge(r), null;
					case 3: return a = r.stateNode, l = null, t !== null && (l = t.memoizedState.cache), r.memoizedState.cache !== l && (r.flags |= 2048), lo(tn), ya(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (nl(r) ? Ht(r) : t === null || t.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, zs())), ot(t, r), ge(r), null;
					case 26: if (Nt) {
						var c = r.type, d = r.memoizedState;
						return t === null ? (Ht(r), d !== null ? (ge(r), Pl(r, d)) : (ge(r), wl(r, c, null, l, a))) : d ? d !== t.memoizedState ? (Ht(r), ge(r), Pl(r, d)) : (ge(r), r.flags &= -16777217) : (d = t.memoizedProps, Ye ? d !== l && Ht(r) : xe(t, r, c, l), ge(r), wl(r, c, d, l, a)), null;
					}
					case 27: if (be) {
						if (Oe(r), a = Je.current, c = r.type, t !== null && r.stateNode != null) Ye ? t.memoizedProps !== l && Ht(r) : xe(t, r, c, l);
						else {
							if (!l) {
								if (r.stateNode === null) throw Error(F(166));
								return ge(r), r.subtreeFlags &= -33554433, null;
							}
							t = Jn.current, nl(r) ? Ff(r, t) : (t = Un(c, l, a, t, !0), r.stateNode = t, Ht(r));
						}
						return ge(r), r.subtreeFlags &= -33554433, null;
					}
					case 5:
						if (Oe(r), c = r.type, t !== null && r.stateNode != null) xe(t, r, c, l);
						else {
							if (!l) {
								if (r.stateNode === null) throw Error(F(166));
								return ge(r), r.subtreeFlags &= -33554433, null;
							}
							if (d = Jn.current, nl(r)) Ff(r, d), mg(r.stateNode, c, l, d) && (r.flags |= 64);
							else {
								var h = Fm(c, l, Je.current, d, r);
								Ac(r), eu(h, r, !1, !1), r.stateNode = h, Ap(h, c, l, d) && Ht(r);
							}
						}
						return ge(r), r.subtreeFlags &= -33554433, wl(r, r.type, t === null ? null : t.memoizedProps, r.pendingProps, a), null;
					case 6:
						if (t && r.stateNode != null) a = t.memoizedProps, Ye ? a !== l && Ht(r) : ln && (a !== l ? (t = Je.current, a = Jn.current, Ac(r), r.stateNode = Eu(l, t, a, r)) : r.stateNode = t.stateNode);
						else {
							if (typeof l != "string" && r.stateNode === null) throw Error(F(166));
							if (t = Je.current, a = Jn.current, nl(r)) {
								if (!En) throw Error(F(176));
								if (t = r.stateNode, a = r.memoizedProps, l = null, c = Nn, c !== null) switch (c.tag) {
									case 27:
									case 5: l = c.memoizedProps;
								}
								eh(t, a, r, l) || Mn(r, !0);
							} else Ac(r), r.stateNode = Eu(l, t, a, r);
						}
						return ge(r), null;
					case 31:
						if (a = r.memoizedState, t === null || t.memoizedState !== null) {
							if (l = nl(r), a !== null) {
								if (t === null) {
									if (!l) throw Error(F(318));
									if (!En) throw Error(F(556));
									if (t = r.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(F(557));
									dg(t, r);
								} else ri(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
								ge(r), t = !1;
							} else a = zs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
							if (!t) return r.flags & 256 ? (Ln(r), r) : (Ln(r), null);
							if ((r.flags & 128) !== 0) throw Error(F(558));
						}
						return ge(r), null;
					case 13:
						if (l = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
							if (c = nl(r), l !== null && l.dehydrated !== null) {
								if (t === null) {
									if (!c) throw Error(F(318));
									if (!En) throw Error(F(344));
									if (c = r.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(F(317));
									fg(c, r);
								} else ri(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
								ge(r), c = !1;
							} else c = zs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = c), c = !0;
							if (!c) return r.flags & 256 ? (Ln(r), r) : (Ln(r), null);
						}
						return Ln(r), (r.flags & 128) !== 0 ? (r.lanes = a, r) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = r.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== c && (l.flags |= 2048)), a !== t && a && (r.child.flags |= 8192), Or(r, r.updateQueue), ge(r), null);
					case 4: return ya(), ot(t, r), t === null && Um(r.stateNode.containerInfo), r.flags |= 67108864, ge(r), null;
					case 10: return lo(r.type), ge(r), null;
					case 19:
						if (Oo(r), l = r.memoizedState, l === null) return ge(r), null;
						if (c = (r.flags & 128) !== 0, d = l.rendering, d === null) {
							if (c) Br(l, !1);
							else {
								if (cn !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null;) {
									if (d = ul(t), d !== null) {
										for (r.flags |= 128, Br(l, !1), t = d.updateQueue, r.updateQueue = t, Or(r, t), r.subtreeFlags = 0, t = a, a = r.child; a !== null;) Np(a, t), a = a.sibling;
										return sl(r, Xn.current & 1 | 2), ne && io(r, l.treeForkCount), r.child;
									}
									t = t.sibling;
								}
								l.tail !== null && Tt() > ns && (r.flags |= 128, c = !0, Br(l, !1), r.lanes = 4194304);
							}
						} else {
							if (!c) if (t = ul(d), t !== null) {
								if (r.flags |= 128, c = !0, t = t.updateQueue, r.updateQueue = t, Or(r, t), Br(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !d.alternate && !ne) return ge(r), null;
							} else 2 * Tt() - l.renderingStartTime > ns && a !== 536870912 && (r.flags |= 128, c = !0, Br(l, !1), r.lanes = 4194304);
							l.isBackwards ? (d.sibling = r.child, r.child = d) : (t = l.last, t !== null ? t.sibling = d : r.child = d, l.last = d);
						}
						if (l.tail !== null) {
							t = l.tail;
							e: {
								for (a = t; a !== null;) {
									if (a.alternate !== null) {
										a = !1;
										break e;
									}
									a = a.sibling;
								}
								a = !0;
							}
							return l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Tt(), t.sibling = null, d = Xn.current, d = c ? d & 1 | 2 : d & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !a || ne ? sl(r, d) : (a = d, Te(Zn, r), Te(Xn, a), lt === null && (lt = r)), ne && io(r, l.treeForkCount), t;
						}
						return ge(r), null;
					case 22:
					case 23: return Ln(r), xc(), l = r.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (r.flags |= 8192) : l && (r.flags |= 8192), l ? a & 536870912 && !(r.flags & 128) && (ge(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ge(r), a = r.updateQueue, a !== null && Or(r, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048), t !== null && W(Zr), null;
					case 24: return a = null, t !== null && (a = t.memoizedState.cache), r.memoizedState.cache !== a && (r.flags |= 2048), lo(tn), ge(r), null;
					case 25: return null;
					case 30: return r.flags |= 33554432, ge(r), null;
				}
				throw Error(F(156, r.tag));
			}
			function xl(t, r) {
				switch (xs(r), r.tag) {
					case 1: return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 3: return lo(tn), ya(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
					case 26:
					case 27:
					case 5: return Oe(r), null;
					case 31:
						if (r.memoizedState !== null) {
							if (Ln(r), r.alternate === null) throw Error(F(340));
							ri();
						}
						return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 13:
						if (Ln(r), t = r.memoizedState, t !== null && t.dehydrated !== null) {
							if (r.alternate === null) throw Error(F(340));
							ri();
						}
						return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 19: return Oo(r), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, t = r.memoizedState, t !== null && (t.rendering = null, t.tail = null), r.flags |= 4, r) : null;
					case 4: return ya(), null;
					case 10: return lo(r.type), null;
					case 22:
					case 23: return Ln(r), xc(), t !== null && W(Zr), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
					case 24: return lo(tn), null;
					case 25: return null;
					default: return null;
				}
			}
			function Hc(t, r) {
				switch (xs(r), r.tag) {
					case 3:
						lo(tn), ya();
						break;
					case 26:
					case 27:
					case 5:
						Oe(r);
						break;
					case 4:
						ya();
						break;
					case 31:
						r.memoizedState !== null && Ln(r);
						break;
					case 13:
						Ln(r);
						break;
					case 19:
						Oo(r);
						break;
					case 10:
						lo(r.type);
						break;
					case 22:
					case 23:
						Ln(r), xc(), t !== null && W(Zr);
						break;
					case 24: lo(tn);
				}
			}
			function $o(t, r) {
				try {
					var a = r.updateQueue, l = a !== null ? a.lastEffect : null;
					if (l !== null) {
						var c = l.next;
						a = c;
						do {
							if ((a.tag & t) === t) {
								l = void 0;
								var d = a.create, h = a.inst;
								l = d(), h.destroy = l;
							}
							a = a.next;
						} while (a !== c);
					}
				} catch (y) {
					ke(r, r.return, y);
				}
			}
			function So(t, r, a) {
				try {
					var l = r.updateQueue, c = l !== null ? l.lastEffect : null;
					if (c !== null) {
						var d = c.next;
						l = d;
						do {
							if ((l.tag & t) === t) {
								var h = l.inst, y = h.destroy;
								if (y !== void 0) {
									h.destroy = void 0, c = r;
									var C = a, R = y;
									try {
										R();
									} catch (D) {
										ke(c, C, D);
									}
								}
							}
							l = l.next;
						} while (l !== d);
					}
				} catch (D) {
					ke(r, r.return, D);
				}
			}
			function nu(t) {
				var r = t.updateQueue;
				if (r !== null) {
					var a = t.stateNode;
					try {
						B(r, a);
					} catch (l) {
						ke(t, t.return, l);
					}
				}
			}
			function sp(t, r, a) {
				a.props = yo(t.type, t.memoizedProps), a.state = t.memoizedState;
				try {
					a.componentWillUnmount();
				} catch (l) {
					ke(t, r, l);
				}
			}
			function Hr(t, r) {
				try {
					var a = t.ref;
					if (a !== null) {
						switch (t.tag) {
							case 26:
							case 27:
							case 5:
								var l = Pi(t.stateNode);
								break;
							case 30:
								var c = t.stateNode, d = mt(t.memoizedProps, c);
								(c.ref === null || c.ref.name !== d) && (c.ref = Iu(d)), l = c.ref;
								break;
							case 7:
								t.stateNode === null && (t.stateNode = ng(t)), l = t.stateNode;
								break;
							default: l = t.stateNode;
						}
						typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
					}
				} catch (h) {
					ke(t, r, h);
				}
			}
			function Fn(t, r) {
				var a = t.ref, l = t.refCleanup;
				if (a !== null) if (typeof l == "function") try {
					l();
				} catch (c) {
					ke(t, r, c);
				} finally {
					t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
				}
				else if (typeof a == "function") try {
					a(null);
				} catch (c) {
					ke(t, r, c);
				}
				else a.current = null;
			}
			function up() {
				var t = Yn;
				return Yn = !1, t;
			}
			function Cl(t, r) {
				if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && r !== null) for (var a = 0; a < r.length; a++) tg(t.stateNode, r[a]);
			}
			function Mc(t) {
				for (var r = t.return; r !== null && (Vc(r) && tg(t.stateNode, r.stateNode), !tu(r));) r = r.return;
			}
			function di(t) {
				for (var r = t.return; r !== null && (Vc(r) && rg(t.stateNode, r.stateNode), !tu(r));) r = r.return;
			}
			function tu(t) {
				return t.tag === 5 || t.tag === 3 || (be ? t.tag === 27 : !1);
			}
			function Vc(t) {
				return t && t.tag === 7 && t.stateNode !== null;
			}
			function $c(t) {
				var r = t.type, a = t.memoizedProps, l = t.stateNode;
				try {
					Hp(l, r, a, t);
				} catch (c) {
					ke(t, t.return, c);
				}
			}
			function Qc(t, r, a) {
				try {
					Mp(t.stateNode, t.type, a, r, t);
				} catch (l) {
					ke(t, t.return, l);
				}
			}
			function bm(t) {
				return t.tag === 5 || t.tag === 3 || (Nt ? t.tag === 26 : !1) || (be ? t.tag === 27 && Qr(t.type) : !1) || t.tag === 4;
			}
			function qc(t) {
				e: for (;;) {
					for (; t.sibling === null;) {
						if (t.return === null || bm(t.return)) return null;
						t = t.return;
					}
					for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
						if (be && t.tag === 27 && Qr(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue e;
						t.child.return = t, t = t.child;
					}
					if (!(t.flags & 2)) return t.stateNode;
				}
			}
			function Gc(t, r, a, l) {
				var c = t.tag;
				if (c === 5 || c === 6) c = t.stateNode, r ? xd(a, c, r) : Qm(a, c), Cl(t, l), Yn = !0;
				else if (c !== 4 && (be && c === 27 && (Cl(t, l), l = null, Qr(t.type) && (a = t.stateNode, r = null)), t = t.child, t !== null)) for (Gc(t, r, a, l), t = t.sibling; t !== null;) Gc(t, r, a, l), t = t.sibling;
			}
			function ru(t, r, a, l) {
				var c = t.tag;
				if (c === 5 || c === 6) c = t.stateNode, r ? qm(a, c, r) : $m(a, c), Cl(t, l), Yn = !0;
				else if (c !== 4 && (be && c === 27 && (Cl(t, l), l = null, Qr(t.type) && (a = t.stateNode)), t = t.child, t !== null)) for (ru(t, r, a, l), t = t.sibling; t !== null;) ru(t, r, a, l), t = t.sibling;
			}
			function ou(t, r) {
				if (t.tag === 5 || be && t.tag === 27) Cl(t, r);
				else if (t.tag !== 4 && (t = t.child, t !== null)) for (ou(t, r), t = t.sibling; t !== null;) ou(t, r), t = t.sibling;
			}
			function cp(t, r, a) {
				t = t.containerInfo;
				try {
					qp(t, a);
				} catch (l) {
					ke(r, r.return, l);
				}
			}
			function dp(t) {
				var r = t.stateNode, a = t.memoizedProps;
				try {
					D0(t.type, a, r, t);
				} catch (l) {
					ke(t, t.return, l);
				}
			}
			function fi(t) {
				(t.tag === 30 || t.subtreeFlags & 33554432) && ($d = !0);
			}
			function au() {
				var t = Xr;
				return Xr = null, t;
			}
			function pi(t, r, a, l, c) {
				return vt = 0, ym(t.child, r, a, l, c);
			}
			function ym(t, r, a, l, c) {
				if (!Ye) return !1;
				for (var d = !1; t !== null;) {
					if (t.tag === 5) {
						var h = t.stateNode;
						if (l !== null) {
							var y = Tu(h);
							l.push(y), Yo(y) && (d = !0);
						} else d || Yo(Tu(h)) && (d = !0);
						$d = !0, Vp(h, vt === 0 ? r : r + "_" + vt, a), vt++;
					} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c || ym(t.child, r, a, l, c) && (d = !0));
					t = t.sibling;
				}
				return d;
			}
			function Mt(t, r) {
				if (Ye) for (; t !== null;) t.tag === 5 ? P0(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && r || Mt(t.child, r)), t = t.sibling;
			}
			function Qo(t) {
				if ((t.subtreeFlags & 18874368) !== 0) for (t = t.child; t !== null;) {
					if ((t.tag !== 22 || t.memoizedState === null) && (Qo(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
						var r = t.memoizedProps;
						if (r.name == null || r.name === "auto") throw Error(F(544));
						var a = r.name;
						r = At(r.default, r.share), r !== "none" && (pi(t, a, r, null, !1) || Mt(t.child, !1));
					}
					t = t.sibling;
				}
			}
			function iu(t, r) {
				if (t.tag === 30) {
					var a = t.stateNode, l = t.memoizedProps, c = mt(l, a), d = At(l.default, a.paired ? l.share : l.enter);
					d !== "none" ? pi(t, c, d, null, !1) ? (Qo(t), a.paired || r || yi(t, l.onEnter)) : Mt(t.child, !1) : Qo(t);
				} else if ((t.subtreeFlags & 33554432) !== 0) for (t = t.child; t !== null;) iu(t, r), t = t.sibling;
				else Qo(t);
			}
			function qo(t) {
				if (Rt !== null && Rt.size !== 0) {
					var r = Rt;
					if ((t.subtreeFlags & 18874368) !== 0) for (t = t.child; t !== null;) {
						if (t.tag !== 22 || t.memoizedState === null) {
							if (t.tag === 30 && (t.flags & 18874368) !== 0) {
								var a = t.memoizedProps, l = a.name;
								if (l != null && l !== "auto") {
									var c = r.get(l);
									if (c !== void 0) {
										var d = At(a.default, a.share);
										if (d !== "none" && (pi(t, l, d, null, !1) ? (d = t.stateNode, c.paired = d, d.paired = c, yi(t, a.onShare)) : Mt(t.child, !1)), r.delete(l), r.size === 0) break;
									}
								}
							}
							qo(t);
						}
						t = t.sibling;
					}
				}
			}
			function at(t) {
				if (t.tag === 30) {
					var r = t.memoizedProps, a = mt(r, t.stateNode), l = Rt !== null ? Rt.get(a) : void 0, c = At(r.default, l !== void 0 ? r.share : r.exit);
					c !== "none" && (pi(t, a, c, null, !1) ? l !== void 0 ? (c = t.stateNode, l.paired = c, c.paired = l, Rt.delete(a), yi(t, r.onShare)) : yi(t, r.onExit) : Mt(t.child, !1)), Rt !== null && qo(t);
				} else if ((t.subtreeFlags & 33554432) !== 0) for (t = t.child; t !== null;) at(t), t = t.sibling;
				else Rt !== null && qo(t);
			}
			function lu(t) {
				for (t = t.child; t !== null;) {
					if (t.tag === 30) {
						var r = t.memoizedProps, a = mt(r, t.stateNode);
						r = At(r.default, r.update), t.flags &= -5, r !== "none" && pi(t, a, r, t.memoizedState = [], !1);
					} else t.subtreeFlags & 33554432 && lu(t);
					t = t.sibling;
				}
			}
			function fp(t) {
				if ((t.subtreeFlags & 18874368) !== 0) for (t = t.child; t !== null;) {
					if (t.tag !== 22 || t.memoizedState === null) {
						if (t.tag === 30 && (t.flags & 18874368) !== 0) {
							var r = t.stateNode;
							r.paired !== null && (r.paired = null, Mt(t.child, !1));
						}
						fp(t);
					}
					t = t.sibling;
				}
			}
			function zl(t) {
				if (t.tag === 30) t.stateNode.paired = null, Mt(t.child, !1), fp(t);
				else if ((t.subtreeFlags & 33554432) !== 0) for (t = t.child; t !== null;) zl(t), t = t.sibling;
				else fp(t);
			}
			function su(t) {
				for (t = t.child; t !== null;) t.tag === 30 ? Mt(t.child, !1) : t.subtreeFlags & 33554432 && su(t), t = t.sibling;
			}
			function uu(t, r, a, l, c, d, h) {
				if (!Ye) return !1;
				for (var y = !1; r !== null;) {
					if (r.tag === 5) {
						var C = r.stateNode;
						if (d !== null && vt < d.length) {
							var R = d[vt], D = Tu(C);
							(Yo(R) || Yo(D)) && (y = !0), !(t.flags & 4) && Xm(R, D) && (t.flags |= 4), Ym(R, D) && (t.flags |= 32);
						} else t.flags |= 32;
						t.flags & 4 && Vp(C, vt === 0 ? a : a + "_" + vt, c), y && t.flags & 4 || (Xr === null && (Xr = []), Xr.push(C, vt === 0 ? l : l + "_" + vt, r.memoizedProps)), vt++;
					} else (r.tag !== 22 || r.memoizedState === null) && (r.tag === 30 && h ? t.flags |= r.flags & 32 : uu(t, r.child, a, l, c, d, h) && (y = !0));
					r = r.sibling;
				}
				return y;
			}
			function pp(t, r) {
				for (t = t.child; t !== null;) {
					if (t.tag === 30) {
						var a = t.memoizedProps, l = t.stateNode, c = mt(a, l), d = At(a.default, a.update);
						if (r) {
							l = l.clones;
							var h = l === null ? null : l.map(xi);
						} else h = t.memoizedState, t.memoizedState = null;
						l = t;
						var y = t.child;
						vt = 0, c = uu(l, y, c, c, d, h, !1), t.flags & 4 && c && (r || yi(t, a.onUpdate));
					} else t.subtreeFlags & 33554432 && pp(t, r);
					t = t.sibling;
				}
			}
			function hp(t, r, a) {
				for (Wp(t.containerInfo), t = (a & 335544064) === a, An = r, r = t ? 9270 : 1024; An !== null;) {
					if (a = An, t) {
						var l = a.deletions;
						if (l !== null) for (var c = 0; c < l.length; c++) t && at(l[c]);
					}
					if (a.alternate === null && (a.flags & 2) !== 0) t && fi(a), hi(t);
					else {
						if (a.tag === 22) {
							if (l = a.alternate, a.memoizedState !== null) {
								l !== null && l.memoizedState === null && t && at(l), hi(t);
								continue;
							} else if (l !== null && l.memoizedState !== null) {
								t && fi(a), hi(t);
								continue;
							}
						}
						l = a.child, (a.subtreeFlags & r) !== 0 && l !== null ? (l.return = a, An = l) : (t && lu(a), hi(t));
					}
				}
				Rt = null;
			}
			function hi(t) {
				for (; An !== null;) {
					var r = An, a = t, l = r.alternate, c = r.flags;
					switch (r.tag) {
						case 0:
						case 11:
						case 15: break;
						case 1:
							if ((c & 1024) !== 0 && l !== null) {
								a = void 0, c = l.memoizedProps, l = l.memoizedState;
								var d = r.stateNode;
								try {
									var h = yo(r.type, c);
									a = d.getSnapshotBeforeUpdate(h, l), d.__reactInternalSnapshotBeforeUpdate = a;
								} catch (y) {
									ke(r, r.return, y);
								}
							}
							break;
						case 3:
							c & 1024 && Ye && Qp(r.stateNode.containerInfo);
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17: break;
						case 30:
							a && l !== null && (a = mt(l.memoizedProps, l.stateNode), c = r.memoizedProps, c = At(c.default, c.update), c !== "none" && pi(l, a, c, l.memoizedState = [], !0));
							break;
						default: if ((c & 1024) !== 0) throw Error(F(163));
					}
					if (l = r.sibling, l !== null) {
						l.return = r.return, An = l;
						break;
					}
					An = r.return;
				}
			}
			function Jc(t, r, a) {
				var l = a.flags;
				switch (a.tag) {
					case 0:
					case 11:
					case 15:
						ar(t, a), l & 4 && $o(5, a);
						break;
					case 1:
						if (ar(t, a), l & 4) if (t = a.stateNode, r === null) try {
							t.componentDidMount();
						} catch (h) {
							ke(a, a.return, h);
						}
						else {
							var c = yo(a.type, r.memoizedProps);
							r = r.memoizedState;
							try {
								t.componentDidUpdate(c, r, t.__reactInternalSnapshotBeforeUpdate);
							} catch (h) {
								ke(a, a.return, h);
							}
						}
						l & 64 && nu(a), l & 512 && Hr(a, a.return);
						break;
					case 3:
						if (ar(t, a), l & 64 && (l = a.updateQueue, l !== null)) {
							if (t = null, a.child !== null) switch (a.child.tag) {
								case 27:
								case 5:
									t = Pi(a.child.stateNode);
									break;
								case 1: t = a.child.stateNode;
							}
							try {
								B(l, t);
							} catch (h) {
								ke(a, a.return, h);
							}
						}
						break;
					case 27: be && r === null && l & 4 && dp(a);
					case 26:
					case 5:
						if (ar(t, a), r === null) {
							if (l & 4) $c(a);
							else if (l & 64) {
								t = a.type, r = a.memoizedProps, c = a.stateNode;
								try {
									T0(c, t, r, a);
								} catch (h) {
									ke(a, a.return, h);
								}
							}
						}
						l & 512 && Hr(a, a.return);
						break;
					case 12:
						ar(t, a);
						break;
					case 31:
						ar(t, a), l & 4 && Kc(t, a);
						break;
					case 13:
						ar(t, a), l & 4 && mp(t, a), l & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = xm.bind(null, a), z0(l, a))));
						break;
					case 22:
						if (l = a.memoizedState !== null || xn, !l) {
							var d = r !== null && r.memoizedState !== null || Ce;
							r = xn, c = Ce, xn = l, (Ce = d) && !c ? (l = be ? 2 : 0, a.subtreeFlags & 8772 && (l |= 1), Mr(t, a, l)) : ar(t, a), xn = r, Ce = c;
						}
						break;
					case 30:
						ar(t, a), l & 512 && Hr(a, a.return);
						break;
					case 7: l & 512 && Hr(a, a.return);
					default: ar(t, a);
				}
			}
			function El(t, r) {
				if (Ye) for (t = t.child; t !== null;) Zc(t, r), t = t.sibling;
			}
			function Zc(t, r) {
				if (Ye) switch (t.tag) {
					case 5:
					case 26:
						try {
							var a = t.stateNode;
							r ? Jm(a) : nn(t.stateNode, t.memoizedProps);
						} catch (d) {
							ke(t, t.return, d);
						}
						_l(t, r);
						break;
					case 6:
						try {
							var l = t.stateNode;
							r ? Al(l) : Zm(l, t.memoizedProps), Yn = !0;
						} catch (d) {
							ke(t, t.return, d);
						}
						break;
					case 18:
						try {
							var c = t.stateNode;
							r ? Ko(c) : bg(t.stateNode);
						} catch (d) {
							ke(t, t.return, d);
						}
						break;
					case 22:
					case 23:
						t.memoizedState === null && El(t, r);
						break;
					default: El(t, r);
				}
			}
			function _l(t, r) {
				if (Ye && t.subtreeFlags & 67108864) for (t = t.child; t !== null;) {
					var a = t, l = r;
					if (Ye) switch (a.tag) {
						case 4:
							Zc(a, l);
							break;
						case 22:
							a.memoizedState === null && _l(a, l);
							break;
						default: _l(a, l);
					}
					t = t.sibling;
				}
			}
			function Xc(t) {
				var r = t.alternate;
				r !== null && (t.alternate = null, Xc(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && it(r)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
			}
			function xt(t, r, a) {
				for (a = a.child; a !== null;) Yc(t, r, a), a = a.sibling;
			}
			function Yc(t, r, a) {
				if (It && typeof It.onCommitFiberUnmount == "function") try {
					It.onCommitFiberUnmount(Lu, a);
				} catch {}
				switch (a.tag) {
					case 26: if (Nt) {
						Ce || Fn(a, r), xt(t, r, a), a.memoizedState ? oh(a.memoizedState) : a.stateNode && (Ce || Ld(a.stateNode));
						break;
					}
					case 27: if (be) {
						Ce || Fn(a, r), di(a);
						var l = Cn, c = Lt;
						Qr(a.type) && (Cn = a.stateNode, Lt = !1), xt(t, r, a), xo(a.stateNode, a.type, a.memoizedProps), Cn = l, Lt = c;
						break;
					}
					case 5: Ce || Fn(a, r), di(a);
					case 6:
						if (a.tag === 6 && di(a), Ye) {
							if (l = Cn, c = Lt, Cn = null, xt(t, r, a), Cn = l, Lt = c, Cn !== null) if (Lt) try {
								Gm(Cn, a.stateNode), Yn = !0;
							} catch (d) {
								ke(a, r, d);
							}
							else try {
								w0(Cn, a.stateNode), Yn = !0;
							} catch (d) {
								ke(a, r, d);
							}
						} else xt(t, r, a);
						break;
					case 18:
						Ye && Cn !== null && (Lt ? nh(Cn, a.stateNode) : R0(Cn, a.stateNode));
						break;
					case 4:
						Ye ? (l = Cn, c = Lt, Cn = a.stateNode.containerInfo, Lt = !0, xt(t, r, a), Cn = l, Lt = c) : (ln && cp(a.stateNode, a, ag()), xt(t, r, a));
						break;
					case 0:
					case 11:
					case 14:
					case 15:
						So(2, a, r), Ce || So(4, a, r), xt(t, r, a);
						break;
					case 1:
						Ce || (Fn(a, r), l = a.stateNode, typeof l.componentWillUnmount == "function" && sp(a, r, l)), xt(t, r, a);
						break;
					case 21:
						xt(t, r, a);
						break;
					case 22:
						Ce = (l = Ce) || a.memoizedState !== null, xt(t, r, a), Ce = l;
						break;
					case 30:
						Fn(a, r), xt(t, r, a);
						break;
					case 7:
						Ce || Fn(a, r), xt(t, r, a);
						break;
					default: xt(t, r, a);
				}
			}
			function Kc(t, r) {
				if (En && r.memoizedState === null && (t = r.alternate, t !== null && (t = t.memoizedState, t !== null))) {
					t = t.dehydrated;
					try {
						Bl(t);
					} catch (a) {
						ke(r, r.return, a);
					}
				}
			}
			function mp(t, r) {
				if (En && r.memoizedState === null && (t = r.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
					hg(t);
				} catch (a) {
					ke(r, r.return, a);
				}
			}
			function ed(t) {
				switch (t.tag) {
					case 31:
					case 13:
					case 19:
						var r = t.stateNode;
						return r === null && (r = t.stateNode = new Ng()), r;
					case 22: return t = t.stateNode, r = t._retryCache, r === null && (r = t._retryCache = new Ng()), r;
					default: throw Error(F(435, t.tag));
				}
			}
			function cu(t, r) {
				var a = ed(t);
				r.forEach(function(l) {
					if (!a.has(l)) {
						a.add(l);
						var c = pd.bind(null, t, l);
						l.then(c, c);
					}
				});
			}
			function Dn(t, r, a) {
				var l = r.deletions;
				if (l !== null) for (var c = 0; c < l.length; c++) {
					var d = l[c], h = t, y = r;
					if (Ye) {
						var C = y;
						e: for (; C !== null;) {
							switch (C.tag) {
								case 27: if (be) {
									if (Qr(C.type)) {
										Cn = C.stateNode, Lt = !1;
										break e;
									}
									break;
								}
								case 5:
									Cn = C.stateNode, Lt = !1;
									break e;
								case 3:
								case 4:
									Cn = C.stateNode.containerInfo, Lt = !0;
									break e;
							}
							C = C.return;
						}
						if (Cn === null) throw Error(F(160));
						Yc(h, y, d), Cn = null, Lt = !1;
					} else Yc(h, y, d);
					h = d.alternate, h !== null && (h.return = null), d.return = null;
				}
				if (r.subtreeFlags & 13886) for (r = r.child; r !== null;) nd(r, t, a), r = r.sibling;
			}
			function nd(t, r, a) {
				var l = t.alternate, c = t.flags;
				switch (t.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
						if (c & 4 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (var d = 0; d < l.length; d++) {
							var h = l[d];
							h.ref.impl = h.nextImpl;
						}
						Dn(r, t, a), Vn(t), c & 4 && (So(3, t, t.return), $o(3, t), So(5, t, t.return));
						break;
					case 1:
						Dn(r, t, a), Vn(t), c & 512 && (Ce || l === null || Fn(l, l.return)), c & 64 && xn && (t = t.updateQueue, t !== null && (r = t.callbacks, r !== null && (c = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = c === null ? r : c.concat(r))));
						break;
					case 26: if (Nt) {
						d = Yr, Dn(r, t, a), Vn(t), c & 512 && (Ce || l === null || Fn(l, l.return)), c & 4 && (a = l !== null ? l.memoizedState : null, c = t.memoizedState, l === null ? c === null ? t.stateNode === null ? t.stateNode = xn ? ah(t.type, t.memoizedProps, r.containerInfo, t) : vg(d, t.type, t.memoizedProps, t) : xn || Rd(d, t.type, t.stateNode) : t.stateNode = rh(d, c, t.memoizedProps) : a !== c ? (a === null ? (r = l.stateNode, r === null || Ce || Ld(r)) : oh(a), c === null ? xn || Rd(d, t.type, t.stateNode) : rh(d, c, t.memoizedProps)) : c === null && t.stateNode !== null && Qc(t, t.memoizedProps, l.memoizedProps));
						break;
					}
					case 27: if (be) {
						Dn(r, t, a), Vn(t), c & 512 && (Ce || l === null || Fn(l, l.return)), l !== null && c & 4 && Qc(t, t.memoizedProps, l.memoizedProps);
						break;
					}
					case 5:
						if (d = Co, Co = !1, Dn(r, t, a), Co = d, Vn(t), c & 512 && (Ce || l === null || Fn(l, l.return)), Ye) {
							if (t.flags & 32) {
								r = t.stateNode;
								try {
									_t(r), Yn = !0;
								} catch (D) {
									ke(t, t.return, D);
								}
							}
							c & 4 && t.stateNode != null && (r = t.memoizedProps, Qc(t, r, l !== null ? l.memoizedProps : r)), c & 1024 && (Sh = !0);
						} else ln && t.alternate !== null && (t.alternate.stateNode = t.stateNode);
						break;
					case 6:
						if (Dn(r, t, a), Vn(t), c & 4 && Ye) {
							if (t.stateNode === null) throw Error(F(162));
							r = t.memoizedProps, c = l !== null ? l.memoizedProps : r, a = t.stateNode;
							try {
								Bp(a, c, r), Yn = !0;
							} catch (D) {
								ke(t, t.return, D);
							}
						}
						break;
					case 3:
						if (Yn = !1, Nt ? (ih(), d = Yr, Yr = Hl(r.containerInfo), Dn(r, t, a), Yr = d) : Dn(r, t, a), Vn(t), c & 4) {
							if (Ye && En && l !== null && l.memoizedState.isDehydrated) try {
								I0(r.containerInfo);
							} catch (D) {
								ke(t, t.return, D);
							}
							if (ln) {
								c = r.containerInfo, r = r.pendingChildren;
								try {
									qp(c, r), Yn = !0;
								} catch (D) {
									ke(t, t.return, D);
								}
							}
						}
						Sh && (Sh = !1, gp(t)), Yn = !1;
						break;
					case 4:
						l = Co, Co = xn, d = up(), Nt ? (h = Yr, Yr = Hl(t.stateNode.containerInfo), Dn(r, t, a), Vn(t), Yr = h) : (Dn(r, t, a), Vn(t)), Yn && Hu && (Qd = !0), Yn = d, Co = l, c & 4 && ln && cp(t.stateNode, t, t.stateNode.pendingChildren);
						break;
					case 12:
						Dn(r, t, a), Vn(t);
						break;
					case 31:
						Dn(r, t, a), Vn(t), c & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, cu(t, r)));
						break;
					case 13:
						Dn(r, t, a), Vn(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ji = Tt()), c & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, cu(t, r)));
						break;
					case 22:
						d = t.memoizedState !== null, h = l !== null && l.memoizedState !== null;
						var y = xn, C = Ce, R = Co;
						xn = y || d, Co = R || d, Ce = C || h, Dn(r, t, a), Ce = C, Co = R, xn = y, Vn(t), c & 8192 && (r = t.stateNode, r._visibility = d ? r._visibility & -2 : r._visibility | 1, !d || l === null || h || xn || Ce || (r = be ? 2 : 0, a = h || Ce, l = xn, h = Ce, xn = d || xn, Ce = a, xa(t, r), xn = l, Ce = h), Ye && (d || !Co) && El(t, d)), c & 4 && (r = t.updateQueue, r !== null && (c = r.retryQueue, c !== null && (r.retryQueue = null, cu(t, c))));
						break;
					case 19:
						Dn(r, t, a), Vn(t), c & 4 && (r = t.updateQueue, r !== null && (t.updateQueue = null, cu(t, r)));
						break;
					case 30:
						c & 512 && (Ce || l === null || Fn(l, l.return)), c = up(), d = Hu, h = (a & 335544064) === a, y = t.memoizedProps, Hu = h && At(y.default, y.update) !== "none", Dn(r, t, a), Vn(t), h && l !== null && Yn && (t.flags |= 4), Hu = d, Yn = c;
						break;
					case 21: break;
					case 7: c & 512 && (Ce || l === null || Fn(l, l.return)), l && l.stateNode !== null && x0(t, l.stateNode);
					default: Dn(r, t, a), Vn(t);
				}
			}
			function Vn(t) {
				var r = t.flags;
				if (r & 2) {
					try {
						for (var a, l = t.return; l !== null;) {
							if (bm(l)) {
								a = l;
								break;
							}
							l = l.return;
						}
						l = null;
						for (var c = t.return; c !== null;) {
							if (Vc(c)) {
								var d = c.stateNode;
								l === null ? l = [d] : l.push(d);
							}
							if (tu(c)) break;
							c = c.return;
						}
						var h = l;
						if (Ye) {
							if (a == null) throw Error(F(160));
							switch (a.tag) {
								case 27: if (be) {
									var y = a.stateNode;
									ru(t, qc(t), y, h);
									break;
								}
								case 5:
									var R = a.stateNode;
									a.flags & 32 && (_t(R), a.flags &= -33);
									ru(t, qc(t), R, h);
									break;
								case 3:
								case 4:
									var U = a.stateNode.containerInfo;
									Gc(t, qc(t), U, h);
									break;
								default: throw Error(F(161));
							}
						} else ou(t, h);
					} catch (fe) {
						ke(t, t.return, fe);
					}
					t.flags &= -3;
				}
				r & 4096 && (t.flags &= -4097);
			}
			function gp(t) {
				if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) {
					var r = t;
					gp(r), r.tag === 5 && r.flags & 1024 && dr(r.stateNode), t = t.sibling;
				}
			}
			function or(t, r) {
				if (r.subtreeFlags & 9270) for (r = r.child; r !== null;) td(r, t), r = r.sibling;
				else pp(r, !1);
			}
			function td(t, r) {
				var a = t.alternate;
				if (a === null) iu(t, !1);
				else switch (t.tag) {
					case 3:
						if (kh = gr = !1, au(), or(r, t), !gr && !Qd) {
							if (t = Xr, t !== null) for (var l = 0; l < t.length; l += 3) ja(t[l], t[l + 1], t[l + 2]);
							Cd(r.containerInfo), kh = !0;
						}
						Xr = null;
						break;
					case 5:
						or(r, t);
						break;
					case 4:
						l = gr, gr = !1, or(r, t), gr && (Qd = !0), gr = l;
						break;
					case 22:
						t.memoizedState === null && (a.memoizedState !== null ? iu(t, !1) : or(r, t));
						break;
					case 30:
						l = gr;
						var c = au();
						gr = !1, or(r, t), gr && (t.flags |= 4);
						var d = t.memoizedProps, h = t.stateNode;
						r = mt(d, h), h = mt(a.memoizedProps, h);
						var y = At(d.default, d.update);
						y === "none" ? a = !1 : (d = a.memoizedState, a.memoizedState = null, a = t.child, vt = 0, a = uu(t, a, r, h, y, d, !0), vt !== (d === null ? 0 : d.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && a ? (yi(t, t.memoizedProps.onUpdate), Xr = c) : c !== null && (c.push.apply(c, Xr), Xr = c), gr = (t.flags & 32) !== 0 ? !0 : l;
						break;
					default: or(r, t);
				}
			}
			function ar(t, r) {
				if (r.subtreeFlags & 8772) for (r = r.child; r !== null;) Jc(t, r.alternate, r), r = r.sibling;
			}
			function xa(t, r) {
				for (t = t.child; t !== null;) {
					var a = t, l = r;
					switch (a.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							So(4, a, a.return), xa(a, l);
							break;
						case 1:
							Fn(a, a.return);
							var c = a.stateNode;
							typeof c.componentWillUnmount == "function" && sp(a, a.return, c), xa(a, l);
							break;
						case 27: be && l & 2 && xo(a.stateNode, a.type, a.memoizedProps);
						case 5:
							Fn(a, a.return), a.tag !== 5 && a.tag !== 27 || di(a), xa(a, l);
							break;
						case 6:
							di(a);
							break;
						case 26:
							Fn(a, a.return), Nt && (c = a.stateNode, a.memoizedState !== null || c === null || Ce || Ld(c)), xa(a, l);
							break;
						case 22:
							a.memoizedState === null && xa(a, l);
							break;
						case 30:
							Fn(a, a.return), xa(a, l);
							break;
						case 7: Fn(a, a.return);
						default: xa(a, l);
					}
					t = t.sibling;
				}
			}
			function Mr(t, r, a) {
				for (a = (r.subtreeFlags & 8772) !== 0 ? a : a & -2, r = r.child; r !== null;) {
					var l = r.alternate, c = t, d = r, h = d.flags, y = (a & 1) !== 0;
					switch (d.tag) {
						case 0:
						case 11:
						case 15:
							Mr(c, d, a), $o(4, d);
							break;
						case 1:
							if (Mr(c, d, a), l = d, c = l.stateNode, typeof c.componentDidMount == "function") try {
								c.componentDidMount();
							} catch (D) {
								ke(l, l.return, D);
							}
							if (l = d, c = l.updateQueue, c !== null) {
								var C = l.stateNode;
								try {
									var R = c.shared.hiddenCallbacks;
									if (R !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < R.length; c++) fm(R[c], C);
								} catch (D) {
									ke(l, l.return, D);
								}
							}
							y && h & 64 && nu(d), Hr(d, d.return);
							break;
						case 27: be && a & 2 && dp(d);
						case 5:
							d.tag !== 5 && d.tag !== 27 || Mc(d), Mr(c, d, a), y && l === null && h & 4 && $c(d), Hr(d, d.return);
							break;
						case 6:
							Mc(d);
							break;
						case 26:
							Nt && (C = d.stateNode, d.memoizedState !== null || C === null || xn || Rd(Hl(C.ownerDocument), d.type, C)), Mr(c, d, a), y && l === null && h & 4 && $c(d), Hr(d, d.return);
							break;
						case 12:
							Mr(c, d, a);
							break;
						case 31:
							Mr(c, d, a), y && h & 4 && Kc(c, d);
							break;
						case 13:
							Mr(c, d, a), y && h & 4 && mp(c, d);
							break;
						case 22:
							d.memoizedState === null && Mr(c, d, a), Hr(d, d.return);
							break;
						case 30:
							Mr(c, d, a), Hr(d, d.return);
							break;
						case 7: Hr(d, d.return);
						default: Mr(c, d, a);
					}
					r = r.sibling;
				}
			}
			function rd(t, r) {
				var a = null;
				t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (t = r.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Ns(a));
			}
			function mi(t, r) {
				t = null, r.alternate !== null && (t = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== t && (r.refCount++, t != null && Ns(t));
			}
			function Ct(t, r, a, l) {
				var c = (a & 335544064) === a;
				if (r.subtreeFlags & (c ? 10262 : 10256)) for (r = r.child; r !== null;) du(t, r, a, l), r = r.sibling;
				else c && su(r);
			}
			function du(t, r, a, l) {
				var c = (a & 335544064) === a;
				c && r.alternate === null && r.return !== null && r.return.alternate !== null && zl(r);
				var d = r.flags;
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						Ct(t, r, a, l), d & 2048 && $o(9, r);
						break;
					case 1:
						Ct(t, r, a, l);
						break;
					case 3:
						Ct(t, r, a, l), c && Ye && kh && $p(t.containerInfo), d & 2048 && (t = null, r.alternate !== null && (t = r.alternate.memoizedState.cache), r = r.memoizedState.cache, r !== t && (r.refCount++, t != null && Ns(t)));
						break;
					case 12:
						if (d & 2048) {
							Ct(t, r, a, l), t = r.stateNode;
							try {
								var h = r.memoizedProps, y = h.id, C = h.onPostCommit;
								typeof C == "function" && C(y, r.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
							} catch (R) {
								ke(r, r.return, R);
							}
						} else Ct(t, r, a, l);
						break;
					case 31:
						Ct(t, r, a, l);
						break;
					case 13:
						Ct(t, r, a, l);
						break;
					case 23: break;
					case 22:
						h = r.stateNode, y = r.alternate, r.memoizedState !== null ? (c && y !== null && y.memoizedState === null && zl(y), h._visibility & 2 ? Ct(t, r, a, l) : Nl(t, r)) : (c && y !== null && y.memoizedState !== null && zl(r), h._visibility & 2 ? Ct(t, r, a, l) : (h._visibility |= 2, gi(t, r, a, l, (r.subtreeFlags & 10256) !== 0 || !1))), d & 2048 && rd(y, r);
						break;
					case 24:
						Ct(t, r, a, l), d & 2048 && mi(r.alternate, r);
						break;
					case 30:
						c && (c = r.alternate, c !== null && (Mt(c.child, !0), Mt(r.child, !0))), Ct(t, r, a, l);
						break;
					default: Ct(t, r, a, l);
				}
			}
			function gi(t, r, a, l, c) {
				for (c = c && ((r.subtreeFlags & 10256) !== 0 || !1), r = r.child; r !== null;) {
					var d = t, h = r, y = a, C = l, R = h.flags;
					switch (h.tag) {
						case 0:
						case 11:
						case 15:
							gi(d, h, y, C, c), $o(8, h);
							break;
						case 23: break;
						case 22:
							var D = h.stateNode;
							h.memoizedState !== null ? D._visibility & 2 ? gi(d, h, y, C, c) : Nl(d, h) : (D._visibility |= 2, gi(d, h, y, C, c)), c && R & 2048 && rd(h.alternate, h);
							break;
						case 24:
							gi(d, h, y, C, c), c && R & 2048 && mi(h.alternate, h);
							break;
						default: gi(d, h, y, C, c);
					}
					r = r.sibling;
				}
			}
			function Nl(t, r) {
				if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) {
					var a = t, l = r, c = l.flags;
					switch (l.tag) {
						case 22:
							Nl(a, l), c & 2048 && rd(l.alternate, l);
							break;
						case 24:
							Nl(a, l), c & 2048 && mi(l.alternate, l);
							break;
						default: Nl(a, l);
					}
					r = r.sibling;
				}
			}
			function ko(t, r, a) {
				if (t.subtreeFlags & Di) for (t = t.child; t !== null;) od(t, r, a), t = t.sibling;
			}
			function od(t, r, a) {
				switch (t.tag) {
					case 26:
						if (ko(t, r, a), t.flags & Di) if (t.memoizedState !== null) F0(a, Yr, t.memoizedState, t.memoizedProps);
						else {
							var l = t.stateNode, c = t.type;
							t = t.memoizedProps, ((r & 335544128) === r || wd(c, t)) && Xo(a, l, c, t);
						}
						break;
					case 5:
						ko(t, r, a), t.flags & Di && (l = t.stateNode, c = t.type, t = t.memoizedProps, ((r & 335544128) === r || wd(c, t)) && Xo(a, l, c, t));
						break;
					case 3:
					case 4:
						Nt ? (l = Yr, Yr = Hl(t.stateNode.containerInfo), ko(t, r, a), Yr = l) : ko(t, r, a);
						break;
					case 22:
						t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Di, Di = 16777216, ko(t, r, a), Di = l) : ko(t, r, a));
						break;
					case 30:
						(t.flags & Di) !== 0 && (l = t.memoizedProps.name, l != null && l !== "auto" && (c = t.stateNode, c.paired = null, Rt === null && (Rt = /* @__PURE__ */ new Map()), Rt.set(l, c))), ko(t, r, a);
						break;
					default: ko(t, r, a);
				}
			}
			function bp(t) {
				var r = t.alternate;
				if (r !== null && (t = r.child, t !== null)) {
					r.child = null;
					do
						r = t.sibling, t.sibling = null, t = r;
					while (t !== null);
				}
			}
			function Tl(t) {
				var r = t.deletions;
				if ((t.flags & 16) !== 0) {
					if (r !== null) for (var a = 0; a < r.length; a++) {
						var l = r[a];
						An = l, yp(l, t);
					}
					bp(t);
				}
				if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Ca(t), t = t.sibling;
			}
			function Ca(t) {
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						Tl(t), t.flags & 2048 && So(9, t, t.return);
						break;
					case 3:
						Tl(t);
						break;
					case 12:
						Tl(t);
						break;
					case 22:
						var r = t.stateNode;
						t.memoizedState !== null && r._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (r._visibility &= -3, bi(t)) : Tl(t);
						break;
					default: Tl(t);
				}
			}
			function bi(t) {
				var r = t.deletions;
				if ((t.flags & 16) !== 0) {
					if (r !== null) for (var a = 0; a < r.length; a++) {
						var l = r[a];
						An = l, yp(l, t);
					}
					bp(t);
				}
				for (t = t.child; t !== null;) {
					switch (r = t, r.tag) {
						case 0:
						case 11:
						case 15:
							So(8, r, r.return), bi(r);
							break;
						case 22:
							a = r.stateNode, a._visibility & 2 && (a._visibility &= -3, bi(r));
							break;
						default: bi(r);
					}
					t = t.sibling;
				}
			}
			function yp(t, r) {
				for (; An !== null;) {
					var a = An;
					switch (a.tag) {
						case 0:
						case 11:
						case 15:
							So(8, a, r);
							break;
						case 23:
						case 22:
							if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
								var l = a.memoizedState.cachePool.pool;
								l != null && l.refCount++;
							}
							break;
						case 24: Ns(a.memoizedState.cache);
					}
					if (l = a.child, l !== null) l.return = a, An = l;
					else e: for (a = t; An !== null;) {
						l = An;
						var c = l.sibling, d = l.return;
						if (Xc(l), l === a) {
							An = null;
							break e;
						}
						if (c !== null) {
							c.return = d, An = c;
							break e;
						}
						An = d;
					}
				}
			}
			function fu(t) {
				var r = jm(t);
				if (r != null) {
					if (typeof r.memoizedProps["data-testname"] != "string") throw Error(F(364));
					return r;
				}
				if (t = _u(t), t === null) throw Error(F(362));
				return t.stateNode.current;
			}
			function pu(t, r) {
				var a = t.tag;
				switch (r.$$typeof) {
					case qd:
						if (t.type === r.value) return !0;
						break;
					case Gd:
						e: {
							for (r = r.value, t = [t, 0], a = 0; a < t.length;) {
								var l = t[a++], c = l.tag, d = t[a++], h = r[d];
								if (c !== 5 && c !== 26 && c !== 27 || !Wl(l)) {
									for (; h != null && pu(l, h);) d++, h = r[d];
									if (d === r.length) {
										r = !0;
										break e;
									} else for (l = l.child; l !== null;) t.push(l, d), l = l.sibling;
								}
							}
							r = !1;
						}
						return r;
					case Jd:
						if ((a === 5 || a === 26 || a === 27) && Nu(t.stateNode, r.value)) return !0;
						break;
					case Xd:
						if ((a === 5 || a === 6 || a === 26 || a === 27) && (t = Mm(t), t !== null && 0 <= t.indexOf(r.value))) return !0;
						break;
					case Zd:
						if ((a === 5 || a === 26 || a === 27) && (t = t.memoizedProps["data-testname"], typeof t == "string" && t.toLowerCase() === r.value.toLowerCase())) return !0;
						break;
					default: throw Error(F(365));
				}
				return !1;
			}
			function hu(t) {
				switch (t.$$typeof) {
					case qd: return "<" + (gc(t.value) || "Unknown") + ">";
					case Gd: return ":has(" + (hu(t) || "") + ")";
					case Jd: return "[role=\"" + t.value + "\"]";
					case Xd: return "\"" + t.value + "\"";
					case Zd: return "[data-testname=\"" + t.value + "\"]";
					default: throw Error(F(365));
				}
			}
			function vm(t, r) {
				var a = [];
				t = [t, 0];
				for (var l = 0; l < t.length;) {
					var c = t[l++], d = c.tag, h = t[l++], y = r[h];
					if (d !== 5 && d !== 26 && d !== 27 || !Wl(c)) {
						for (; y != null && pu(c, y);) h++, y = r[h];
						if (h === r.length) a.push(c);
						else for (c = c.child; c !== null;) t.push(c, h), c = c.sibling;
					}
				}
				return a;
			}
			function bn(t, r) {
				if (!Ul) throw Error(F(363));
				t = fu(t), t = vm(t, r), r = [], t = Array.from(t);
				for (var a = 0; a < t.length;) {
					var l = t[a++], c = l.tag;
					if (c === 5 || c === 26 || c === 27) Wl(l) || r.push(l.stateNode);
					else for (l = l.child; l !== null;) t.push(l), l = l.sibling;
				}
				return r;
			}
			function zt() {
				return (de & 2) !== 0 && ye !== 0 ? ye & -ye : Q.T !== null ? Sc() : Qn();
			}
			function vp() {
				if (Ft === 0) if ((ye & 536870912) === 0 || ne) {
					var t = Ei;
					Ei <<= 1, !(Ei & 3932160) && (Ei = 262144), Ft = t;
				} else Ft = 536870912;
				return t = Zn.current, t !== null && (t.flags |= 32), Ft;
			}
			function yi(t, r) {
				if (r != null) {
					var a = t.stateNode, l = a.ref;
					l === null && (l = a.ref = Iu(mt(t.memoizedProps, a))), Ui === null && (Ui = []), Ui.push(r.bind(null, l));
				}
			}
			function yt(t, r, a) {
				(t === Be && (Ie === 2 || Ie === 9) || t.cancelPendingCommit !== null) && (Ea(t, 0), Go(t, ye, Ft, !1)), Ki(t, a), (!(de & 2) || t !== Be) && (t === Be && (!(de & 2) && (Ma |= a), cn === 4 && Go(t, ye, Ft, !1)), xr(t));
			}
			function Il(t, r, a) {
				if ((de & 6) !== 0) throw Error(F(327));
				var l = !a && (r & 127) === 0 && (r & t.expiredLanes) === 0 || Yi(t, r), c = l ? xp(t, r) : mu(t, r, !0), d = l;
				do {
					if (c === 0) {
						Kl && !l && Go(t, r, 0, !1);
						break;
					} else {
						if (a = t.current.alternate, d && !ad(a)) {
							c = mu(t, r, !1), d = !1;
							continue;
						}
						if (c === 2) {
							if (d = r, t.errorRecoveryDisabledLanes & d) var h = 0;
							else h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
							if (h !== 0) {
								r = h;
								e: {
									var y = t;
									c = Vu;
									var C = En && y.current.memoizedState.isDehydrated;
									if (C && (Ea(y, h).flags |= 256), h = mu(y, h, !1), h !== 2 && h !== 6) {
										if (wh && !C) {
											y.errorRecoveryDisabledLanes |= d, Ma |= d, c = 4;
											break e;
										}
										d = Ze, Ze = c, d !== null && (Ze === null ? Ze = d : Ze.push.apply(Ze, d));
									}
									c = h;
								}
								if (d = !1, c !== 2) continue;
							}
						}
						if (c === 1) {
							Ea(t, 0), Go(t, r, 0, !0);
							break;
						}
						e: {
							switch (l = t, d = c, d) {
								case 0:
								case 1: throw Error(F(345));
								case 4: if ((r & 4194048) !== r && (r & 62914560) !== r) break;
								case 6:
									Go(l, r, Ft, !Ha);
									break e;
								case 2:
									Ze = null;
									break;
								case 3:
								case 5: break;
								default: throw Error(F(329));
							}
							if ((r & 62914560) === r && (c = ji + 300 - Tt(), 10 < c)) {
								if (Go(l, r, Ft, !Ha), ao(l, 0, !0) !== 0) break e;
								zo = r, l.timeoutHandle = Dm(Sp.bind(null, l, a, Ze, $u, Kd, r, Ft, Ma, es, Ha, d, "Throttled", -0, 0), c);
								break e;
							}
							Sp(l, a, Ze, $u, Kd, r, Ft, Ma, es, Ha, d, null, -0, 0);
						}
					}
					break;
				} while (!0);
				xr(t);
			}
			function Sp(t, r, a, l, c, d, h, y, C, R, D, U, A, fe) {
				t.timeoutHandle = La;
				var Ne = r.subtreeFlags, Re = (d & 335544064) === d;
				if (U = null, (Re || Ne & 8192 || (Ne & 16785408) === 16785408) && (U = Om(), Rt = null, od(r, d, U), Re && Bm(U, t.containerInfo), Ne = (d & 62914560) === d ? ji - Tt() : (d & 4194048) === d ? Ph - Tt() : 0, Ne = cr(U, Ne), Ne !== null)) {
					zo = d, t.cancelPendingCommit = Ne(sd.bind(null, t, r, d, a, l, c, h, y, C, R, D, U, null, A, fe)), Go(t, d, h, !R);
					return;
				}
				sd(t, r, d, a, l, c, h, y, C, R, D, U);
			}
			function ad(t) {
				for (var r = t;;) {
					var a = r.tag;
					if ((a === 0 || a === 11 || a === 15) && r.flags & 16384 && (a = r.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
						var c = a[l], d = c.getSnapshot;
						c = c.value;
						try {
							if (!$t(d(), c)) return !1;
						} catch {
							return !1;
						}
					}
					if (a = r.child, r.subtreeFlags & 16384 && a !== null) a.return = r, r = a;
					else {
						if (r === t) break;
						for (; r.sibling === null;) {
							if (r.return === null || r.return === t) return !0;
							r = r.return;
						}
						r.sibling.return = r.return, r = r.sibling;
					}
				}
				return !0;
			}
			function Go(t, r, a, l) {
				r = _f(t, r), r &= ~Yd, r &= ~Ma, t.suspendedLanes |= r, t.pingedLanes &= ~r, l && (t.warmLanes |= r), l = t.expirationTimes;
				for (var c = r; 0 < c;) {
					var d = 31 - sn(c), h = 1 << d;
					l[d] = -1, c &= ~h;
				}
				a !== 0 && en(t, a, r);
			}
			function Sm() {
				return (de & 6) === 0 ? (tl(0, !1), !1) : !0;
			}
			function za() {
				if (he !== null) {
					if (Ie === 0) var t = he.return;
					else t = he, qr = Ni = null, dl(t), Zl = null, Au = 0, t = he;
					for (; t !== null;) Hc(t.alternate, t), t = t.return;
					he = null;
				}
			}
			function Ea(t, r) {
				var a = t.timeoutHandle;
				return a !== La && (t.timeoutHandle = La, Op(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), zo = 0, za(), Be = t, he = a = Zo(t.current, null), ye = r, Ie = 0, Qt = null, Ha = !1, Kl = Yi(t, r), wh = !1, es = Ft = Yd = Ma = aa = cn = 0, Ze = Vu = null, Kd = !1, oa = _f(t, r), Wo(), a;
			}
			function kp(t, r) {
				re = null, Q.H = Bu, r === Jl || r === Wd ? (r = ai(), Ie = 3) : r === gh ? (r = ai(), Ie = 4) : Ie = r === vh ? 8 : r !== null && typeof r == "object" && typeof r.then == "function" ? 6 : 1, Qt = r, he === null && (cn = 1, $s(t, Kt(r, t.current)));
			}
			function wp() {
				var t = Zn.current;
				return t === null ? !0 : (ye & 4194048) === ye ? lt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? t === lt : !1;
			}
			function Pp() {
				var t = Q.H;
				return Q.H = Bu, t === null ? Bu : t;
			}
			function id() {
				var t = Q.A;
				return Q.A = H0, t;
			}
			function Rl() {
				cn = 4, Ha || (ye & 4194048) !== ye && Zn.current !== null || (Kl = !0), !(aa & 134217727) && !(Ma & 134217727) || Be === null || Go(Be, ye, Ft, !1);
			}
			function mu(t, r, a) {
				var l = de;
				de |= 2;
				var c = Pp(), d = id();
				(Be !== t || ye !== r) && ($u = null, Ea(t, r)), r = !1;
				var h = cn;
				e: do
					try {
						if (Ie !== 0 && he !== null) {
							var y = he, C = Qt;
							switch (Ie) {
								case 8:
									za(), h = 6;
									break e;
								case 3:
								case 2:
								case 9:
								case 6:
									Zn.current === null && (r = !0);
									var R = Ie;
									if (Ie = 0, Qt = null, vi(t, y, C, R), a && Kl) {
										h = 0;
										break e;
									}
									break;
								default: R = Ie, Ie = 0, Qt = null, vi(t, y, C, R);
							}
						}
						km(), h = cn;
						break;
					} catch (D) {
						kp(t, D);
					}
				while (!0);
				return r && t.shellSuspendCounter++, qr = Ni = null, de = l, Q.H = c, Q.A = d, he === null && (Be = null, ye = 0, Wo()), h;
			}
			function km() {
				for (; he !== null;) gu(he);
			}
			function xp(t, r) {
				var a = de;
				de |= 2;
				var l = Pp(), c = id();
				Be !== t || ye !== r ? ($u = null, ns = Tt() + 500, Ea(t, r)) : Kl = Yi(t, r);
				e: do
					try {
						if (Ie !== 0 && he !== null) {
							r = he;
							var d = Qt;
							n: switch (Ie) {
								case 1:
									Ie = 0, Qt = null, vi(t, r, d, 1);
									break;
								case 2:
								case 9:
									if (jo(d)) {
										Ie = 0, Qt = null, wm(r);
										break;
									}
									r = function() {
										Ie !== 2 && Ie !== 9 || Be !== t || (Ie = 7), xr(t);
									}, d.then(r, r);
									break e;
								case 3:
									Ie = 7;
									break e;
								case 4:
									Ie = 5;
									break e;
								case 7:
									jo(d) ? (Ie = 0, Qt = null, wm(r)) : (Ie = 0, Qt = null, vi(t, r, d, 7));
									break;
								case 5:
									var h = null;
									switch (he.tag) {
										case 26: h = he.memoizedState;
										case 5:
										case 27:
											var y = he, C = y.type, R = y.pendingProps;
											if (h ? ce(h) : ur(y.stateNode, C, R)) {
												Ie = 0, Qt = null;
												var D = y.sibling;
												if (D !== null) he = D;
												else {
													var U = y.return;
													U !== null ? (he = U, bu(U)) : he = null;
												}
												break n;
											}
									}
									Ie = 0, Qt = null, vi(t, r, d, 5);
									break;
								case 6:
									Ie = 0, Qt = null, vi(t, r, d, 6);
									break;
								case 8:
									za(), cn = 6;
									break e;
								default: throw Error(F(462));
							}
						}
						ld();
						break;
					} catch (A) {
						kp(t, A);
					}
				while (!0);
				return qr = Ni = null, Q.H = l, Q.A = c, de = a, he !== null ? 0 : (Be = null, ye = 0, Wo(), cn);
			}
			function ld() {
				for (; he !== null && !j0();) gu(he);
			}
			function gu(t) {
				var r = ip(t.alternate, t, oa);
				t.memoizedProps = t.pendingProps, r === null ? bu(t) : he = r;
			}
			function wm(t) {
				var r = t, a = r.alternate;
				switch (r.tag) {
					case 15:
					case 0:
						r = rp(a, r, r.pendingProps, r.type, void 0, ye);
						break;
					case 11:
						r = rp(a, r, r.pendingProps, r.type.render, r.ref, ye);
						break;
					case 5:
						dl(r);
						var l = r;
						En && l === Nn && (ne ? (er(l), l.tag === 5 && l.stateNode != null && (Qe = l.stateNode)) : (er(l), ne = !0));
					default: Hc(a, r), r = he = Np(r, oa), r = ip(a, r, oa);
				}
				t.memoizedProps = t.pendingProps, r === null ? bu(t) : he = r;
			}
			function vi(t, r, a, l) {
				qr = Ni = null, dl(r), Zl = null, Au = 0;
				var c = r.return;
				try {
					if (tt(t, c, r, a, ye)) {
						cn = 1, $s(t, Kt(a, t.current)), he = null;
						return;
					}
				} catch (d) {
					if (c !== null) throw he = c, d;
					cn = 1, $s(t, Kt(a, t.current)), he = null;
					return;
				}
				r.flags & 32768 ? (ne || l === 1 ? t = !0 : Kl || (ye & 536870912) !== 0 ? t = !1 : (Ha = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Zn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), yu(r, t)) : bu(r);
			}
			function bu(t) {
				var r = t;
				do {
					if ((r.flags & 32768) !== 0) {
						yu(r, Ha);
						return;
					}
					t = r.return;
					var a = lp(r.alternate, r, oa);
					if (a !== null) {
						he = a;
						return;
					}
					if (r = r.sibling, r !== null) {
						he = r;
						return;
					}
					he = r = t;
				} while (r !== null);
				cn === 0 && (cn = 5);
			}
			function yu(t, r) {
				do {
					var a = xl(t.alternate, t);
					if (a !== null) {
						a.flags &= 32767, he = a;
						return;
					}
					if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !r && (t = t.sibling, t !== null)) {
						he = t;
						return;
					}
					he = t = a;
				} while (t !== null);
				cn = 6, he = null;
			}
			function sd(t, r, a, l, c, d, h, y, C, R, D, U) {
				t.cancelPendingCommit = null;
				do
					_a();
				while (Xe !== 0);
				if ((de & 6) !== 0) throw Error(F(327));
				if (r !== null) {
					if (r === t.current) throw Error(F(177));
					t === Be && (he = Be = null, ye = 0), $a = r, qt = t, zo = a, ef = c, Tg = l, Cp(t, r, a, h, y, C, U);
				}
			}
			function Cp(t, r, a, l, c, d, h) {
				var y = r.lanes | r.childLanes;
				if (xh = y, y |= bh, ti(t, a, y, l, c, d), Ui = null, (a & 335544064) === a ? (ts = lm(t), l = 10262) : (ts = null, l = 10256), (r.subtreeFlags & l) !== 0 || (r.flags & l) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ku(dh, function() {
					return ud(), null;
				})) : (t.callbackNode = null, t.callbackPriority = 0), $d = !1, l = (r.flags & 13878) !== 0, (r.subtreeFlags & 13878) !== 0 || l) {
					l = Q.T, Q.T = null, c = sr(), jn(2), d = de, de |= 4;
					try {
						hp(t, r, a);
					} finally {
						de = d, jn(c), Q.T = l;
					}
				}
				Xe = 1, $d ? je = Km(h, t.containerInfo, ts, vu, zp, Jo, Su, ud, Pm, null, null) : (vu(), zp(), Su());
			}
			function Pm(t) {
				if (Xe !== 0) {
					var r = qt.onRecoverableError;
					r(t, { componentStack: null });
				}
			}
			function Jo() {
				Xe === 3 && (Xe = 0, td($a, qt), Xe = 4);
			}
			function vu() {
				if (Xe === 1) {
					Xe = 0;
					var t = qt, r = $a, a = zo, l = (r.flags & 13878) !== 0;
					if ((r.subtreeFlags & 13878) !== 0 || l) {
						l = Q.T, Q.T = null;
						var c = sr();
						jn(2);
						var d = de;
						de |= 4;
						try {
							Hu = Qd = !1, nd(r, t, a), Lm(t.containerInfo);
						} finally {
							de = d, jn(c), Q.T = l;
						}
					}
					t.current = r, Xe = 2;
				}
			}
			function zp() {
				if (Xe === 2) {
					Xe = 0;
					var t = qt, r = $a, a = (r.flags & 8772) !== 0;
					if ((r.subtreeFlags & 8772) !== 0 || a) {
						a = Q.T, Q.T = null;
						var l = sr();
						jn(2);
						var c = de;
						de |= 4;
						try {
							Jc(t, r.alternate, r);
						} finally {
							de = c, jn(l), Q.T = a;
						}
					}
					Xe = 3;
				}
			}
			function Su() {
				if (Xe === 4 || Xe === 3) {
					Xe = 0;
					var t = je;
					je = null, uh();
					var r = qt, a = $a, l = zo, c = Tg, d = (l & 335544064) === l ? 10262 : 10256;
					if ((a.subtreeFlags & d) !== 0 || (a.flags & d) !== 0 ? Xe = 5 : (Xe = 0, $a = qt = null, ir(r, r.pendingLanes)), d = r.pendingLanes, d === 0 && (Va = null), ze(l), a = a.stateNode, It && typeof It.onCommitFiberRoot == "function") try {
						It.onCommitFiberRoot(Lu, a, void 0, (a.current.flags & 128) === 128);
					} catch {}
					if (c !== null) {
						a = Q.T, d = sr(), jn(2), Q.T = null;
						try {
							for (var h = r.onRecoverableError, y = 0; y < c.length; y++) {
								var C = c[y];
								h(C.value, { componentStack: C.stack });
							}
						} finally {
							Q.T = a, jn(d);
						}
					}
					if (c = Ui, h = ts, ts = null, c !== null && (Ui = null, h === null && (h = []), t !== null)) for (C = 0; C < c.length; C++) a = (0, c[C])(h), a !== void 0 && zd(t, a);
					zo & 3 && _a(), xr(r), d = r.pendingLanes, (l & 261930) !== 0 && (d & 42) !== 0 ? r === Qu ? rs++ : (rs = 0, Qu = r) : (rs = 0, Qu = null), En && gg(), tl(0, !1);
				}
			}
			function ir(t, r) {
				(t.pooledCacheLanes &= r) === 0 && (r = t.pooledCache, r != null && (t.pooledCache = null, Ns(r)));
			}
			function _a() {
				return je !== null && (eg(je), je = null), vu(), zp(), Su(), ud();
			}
			function ud() {
				if (Xe !== 5) return !1;
				var t = qt, r = xh;
				xh = 0;
				var a = ze(zo), l = 32 > a ? 32 : a;
				a = Q.T;
				var c = sr();
				try {
					jn(l), Q.T = null, l = ef, ef = null;
					var d = qt, h = zo;
					if (Xe = 0, $a = qt = null, zo = 0, (de & 6) !== 0) throw Error(F(331));
					var y = de;
					if (de |= 4, Ca(d.current), du(d, d.current, h, l), de = y, tl(0, !1), It && typeof It.onPostCommitFiberRoot == "function") try {
						It.onPostCommitFiberRoot(Lu, d);
					} catch {}
					return !0;
				} finally {
					jn(c), Q.T = a, ir(t, r);
				}
			}
			function cd(t, r, a) {
				r = Kt(a, r), r = vl(t.stateNode, r, 2), t = ka(t, r, 2), t !== null && (Ki(t, 2), xr(t));
			}
			function ke(t, r, a) {
				if (t.tag === 3) cd(t, t, a);
				else for (; r !== null;) {
					if (r.tag === 3) {
						cd(r, t, a);
						break;
					} else if (r.tag === 1) {
						var l = r.stateNode;
						if (typeof r.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Va === null || !Va.has(l))) {
							t = Kt(a, t), a = Qs(2), l = ka(r, a, 2), l !== null && (Rc(a, l, r, t), Ki(l, 2), xr(l));
							break;
						}
					}
					r = r.return;
				}
			}
			function dd(t, r, a) {
				var l = t.pingCache;
				if (l === null) {
					l = t.pingCache = new M0();
					var c = /* @__PURE__ */ new Set();
					l.set(r, c);
				} else c = l.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(r, c));
				c.has(a) || (wh = !0, c.add(a), t = Ep.bind(null, t, r, a), r.then(t, t));
			}
			function Ep(t, r, a) {
				var l = t.pingCache;
				l !== null && l.delete(r), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, Be === t && (ye & a) === a && ((cn === 4 || cn === 3 && (ye & 62914560) === ye && 300 > Tt() - ji) && (de & 2) === 0 ? Ea(t, 0) : Yd |= a, es === ye && (es = 0)), xr(t);
			}
			function fd(t, r) {
				r === 0 && (r = Nf()), t = Er(t, r), t !== null && (Ki(t, r), xr(t));
			}
			function xm(t) {
				var r = t.memoizedState, a = 0;
				r !== null && (a = r.retryLane), fd(t, a);
			}
			function pd(t, r) {
				var a = 0;
				switch (t.tag) {
					case 31:
					case 13:
						var l = t.stateNode, c = t.memoizedState;
						c !== null && (a = c.retryLane);
						break;
					case 19:
						l = t.stateNode;
						break;
					case 22:
						l = t.stateNode._retryCache;
						break;
					default: throw Error(F(314));
				}
				l !== null && l.delete(r), fd(t, a);
			}
			function ku(t, r) {
				return $l(t, r);
			}
			function Fe(t, r, a, l) {
				this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
			}
			function _p(t) {
				return t = t.prototype, !(!t || !t.isReactComponent);
			}
			function Zo(t, r) {
				var a = t.alternate;
				return a === null ? (a = et(t.tag, r, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = r, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 1206910976, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, r = t.dependencies, a.dependencies = r === null ? null : {
					lanes: r.lanes,
					firstContext: r.firstContext
				}, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
			}
			function Np(t, r) {
				t.flags &= 1206910978;
				var a = t.alternate;
				return a === null ? (t.childLanes = 0, t.lanes = r, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, r = a.dependencies, t.dependencies = r === null ? null : {
					lanes: r.lanes,
					firstContext: r.firstContext
				}), t;
			}
			function Vt(t, r, a, l, c, d) {
				var h = 0;
				if (l = t, typeof l == "function") _p(l) && (h = 1);
				else if (typeof l == "string") h = Nt && be ? th(t, a, Jn.current) ? 26 : Ua(t) ? 27 : 5 : Nt ? th(t, a, Jn.current) ? 26 : 5 : be && Ua(t) ? 27 : 5;
				else e: switch (l) {
					case zu: return t = et(31, a, r, c), t.elementType = zu, t.lanes = d, t;
					case wo: return Na(a.children, c, d, r);
					case md:
						h = 8, c |= 24;
						break;
					case Pu: return t = et(12, a, r, c | 2), t.elementType = Pu, t.lanes = d, t;
					case xu: return t = et(13, a, r, c), t.elementType = xu, t.lanes = d, t;
					case Cu: return t = et(19, a, r, c), t.elementType = Cu, t.lanes = d, t;
					case Nm:
					case yd: return t = c | 32, t = et(30, a, r, t), t.elementType = yd, t.lanes = d, t.stateNode = {
						autoName: null,
						paired: null,
						clones: null,
						ref: null
					}, t;
					default:
						if (typeof l == "object" && l !== null) switch (l.$$typeof) {
							case Vr:
								h = 10;
								break e;
							case gd:
								h = 9;
								break e;
							case bd:
								h = 11;
								break e;
							case Fl:
								h = 14;
								break e;
							case Ra:
								h = 16, l = null;
								break e;
						}
						h = 29, a = Error(F(130, t === null ? "null" : typeof t, "")), l = null;
				}
				return r = et(h, a, r, c), r.elementType = t, r.type = l, r.lanes = d, r;
			}
			function Na(t, r, a, l) {
				return t = et(7, t, l, r), t.lanes = a, t;
			}
			function wu(t, r, a) {
				return t = et(6, t, null, r), t.lanes = a, t;
			}
			function Ll(t) {
				var r = et(18, null, null, 0);
				return r.stateNode = t, r;
			}
			function Ta(t, r, a) {
				return r = et(4, t.children !== null ? t.children : [], t.key, r), r.lanes = a, r.stateNode = {
					containerInfo: t.containerInfo,
					pendingChildren: null,
					implementation: t.implementation
				}, r;
			}
			function Cm(t, r, a, l, c, d, h, y, C) {
				this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = La, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bc(0), this.hiddenUpdates = bc(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = d, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
			}
			function hd(t, r, a, l, c, d, h, y, C, R, D, U) {
				return t = new Cm(t, r, a, h, C, R, D, U, y), r = 1, d === !0 && (r |= 24), d = et(3, null, null, r), t.current = d, d.stateNode = t, r = _s(), r.refCount++, t.pooledCache = r, r.refCount++, d.memoizedState = {
					element: l,
					isDehydrated: a,
					cache: r
				}, ii(d), t;
			}
			function Tp(t) {
				return t ? (t = Aa, t) : Aa;
			}
			function zm(t) {
				var r = t._reactInternals;
				if (r === void 0) throw typeof t.render == "function" ? Error(F(188)) : (t = Object.keys(t).join(","), Error(F(268, t)));
				return t = hc(r), t = t !== null ? mc(t) : null, t === null ? null : Pi(t.stateNode);
			}
			function Em(t, r, a, l, c, d) {
				c = Tp(c), l.context === null ? l.context = c : l.pendingContext = c, l = po(r), l.payload = { element: a }, d = d === void 0 ? null : d, d !== null && (l.callback = d), a = ka(t, l, r), a !== null && (yt(a, t, r), Ls(a, t, r));
			}
			function Ip(t, r) {
				if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
					var a = t.retryLane;
					t.retryLane = a !== 0 && a < r ? a : r;
				}
			}
			function Rp(t, r) {
				Ip(t, r), (t = t.alternate) && Ip(t, r);
			}
			var Y = {}, $n = import_react.default, Et = import_scheduler.default, Lp = Object.assign, _m = Symbol.for("react.element"), Ia = Symbol.for("react.transitional.element"), Si = Symbol.for("react.portal"), wo = Symbol.for("react.fragment"), md = Symbol.for("react.strict_mode"), Pu = Symbol.for("react.profiler"), gd = Symbol.for("react.consumer"), Vr = Symbol.for("react.context"), bd = Symbol.for("react.forward_ref"), xu = Symbol.for("react.suspense"), Cu = Symbol.for("react.suspense_list"), Fl = Symbol.for("react.memo"), Ra = Symbol.for("react.lazy");
			var zu = Symbol.for("react.activity"), Nm = Symbol.for("react.legacy_hidden");
			var Tm = Symbol.for("react.memo_cache_sentinel"), yd = Symbol.for("react.view_transition"), Im = Symbol.for("react.recoverable"), ki = Symbol.iterator, Fp = Symbol.for("react.optimistic_key"), Po = Symbol.for("react.client.reference"), wi = Array.isArray, Q = $n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Dp = m.rendererVersion, jp = m.rendererPackageName, Up = m.extraDevToolsConfig, Pi = m.getPublicInstance, vd = m.getRootHostContext, Rm = m.getChildHostContext, Wp = m.prepareForCommit, Lm = m.resetAfterCommit, Fm = m.createInstance;
			m.cloneMutableInstance;
			var Sd = m.appendInitialChild, Ap = m.finalizeInitialChildren, kd = m.shouldSetTextContent, Eu = m.createTextInstance;
			m.cloneMutableTextInstance;
			var Dm = m.scheduleTimeout, Op = m.cancelTimeout, La = m.noTimeout, lr = m.isPrimaryRenderer;
			m.warnsIfNotActing;
			var Ye = m.supportsMutation, ln = m.supportsPersistence, En = m.supportsHydration, jm = m.getInstanceFromNode;
			m.beforeActiveInstanceBlur;
			var Um = m.preparePortalMount;
			m.prepareScopeUpdate, m.getInstanceFromScope;
			var jn = m.setCurrentUpdatePriority, sr = m.getCurrentUpdatePriority, Qn = m.resolveUpdatePriority;
			m.trackSchedulerEvent, m.resolveEventType, m.resolveEventTimeStamp;
			var Wm = m.shouldAttemptEagerTransition, it = m.detachDeletedInstance;
			m.requestPostPaintCallback;
			var Am = m.maySuspendCommit, Dl = m.maySuspendCommitOnUpdate, wd = m.maySuspendCommitInSyncRender, ur = m.preloadInstance, Om = m.startSuspendingCommit, Xo = m.suspendInstance, Bm = m.suspendOnActiveViewTransition, cr = m.waitForCommitToBeReady;
			m.getSuspendedCommitReason;
			var Fa = m.NotPendingTransition, $r = m.HostTransitionContext, dr = m.resetFormInstance;
			m.bindToConsole;
			var Hm = m.supportsMicrotasks, jl = m.scheduleMicrotask, Ul = m.supportsTestSelectors, _u = m.findFiberRoot, Da = m.getBoundingRect, Mm = m.getTextContent, Wl = m.isHiddenSubtree, Nu = m.matchAccessibilityRole, Vm = m.setFocusIfFocusable, Pd = m.setupIntersectionObserver, $m = m.appendChild, Qm = m.appendChildToContainer, Bp = m.commitTextUpdate, Hp = m.commitMount, Mp = m.commitUpdate, qm = m.insertBefore, xd = m.insertInContainerBefore, w0 = m.removeChild, Gm = m.removeChildFromContainer, _t = m.resetTextContent, Jm = m.hideInstance, Al = m.hideTextInstance, nn = m.unhideInstance, Zm = m.unhideTextInstance, Vp = m.applyViewTransitionName, P0 = m.restoreViewTransitionName, ja = m.cancelViewTransitionName, Cd = m.cancelRootViewTransitionName, $p = m.restoreRootViewTransitionName;
			m.cloneRootViewTransitionContainer, m.removeRootViewTransitionClone;
			var Tu = m.measureInstance, xi = m.measureClonedInstance, Yo = m.wasInstanceInViewport, Xm = m.hasInstanceChanged, Ym = m.hasInstanceAffectedParent, Km = m.startViewTransition;
			m.startGestureTransition;
			var eg = m.stopViewTransition, zd = m.addViewTransitionFinishedListener;
			m.getCurrentGestureOffset;
			var Iu = m.createViewTransitionInstance, Qp = m.clearContainer, ng = m.createFragmentInstance, x0 = m.updateFragmentInstanceFiber, tg = m.commitNewChildToFragmentInstance, rg = m.deleteChildFromFragmentInstance, og = m.cloneInstance, ag = m.createContainerChildSet, Ci = m.appendChildToContainerChildSet, Ed = m.finalizeContainerChildren, qp = m.replaceContainerChildren, _d = m.cloneHiddenInstance, ig = m.cloneHiddenTextInstance, Gp = m.isSuspenseInstancePending, Jp = m.isSuspenseInstanceFallback, C0 = m.getSuspenseInstanceFallbackErrorDetails, z0 = m.registerSuspenseInstanceRetry, Zp = m.canHydrateFormStateMarker, Xp = m.isFormStateMarkerMatching, Nd = m.getNextHydratableSibling, lg = m.getNextHydratableSiblingAfterSingleton, sg = m.getFirstHydratableChild, Ol = m.getFirstHydratableChildWithinContainer, Yp = m.getFirstHydratableChildWithinActivityInstance, ug = m.getFirstHydratableChildWithinSuspenseInstance, we = m.getFirstHydratableChildWithinSingleton, Kp = m.canHydrateInstance, E0 = m.canHydrateTextInstance, cg = m.canHydrateActivityInstance, _0 = m.canHydrateSuspenseInstance, N0 = m.hydrateInstance, eh = m.hydrateTextInstance, dg = m.hydrateActivityInstance, fg = m.hydrateSuspenseInstance, pg = m.getNextHydratableInstanceAfterActivityInstance, Ru = m.getNextHydratableInstanceAfterSuspenseInstance, T0 = m.commitHydratedInstance, I0 = m.commitHydratedContainer, Bl = m.commitHydratedActivityInstance, hg = m.commitHydratedSuspenseInstance, mg = m.finalizeHydratedChildren, gg = m.flushHydrationEvents;
			m.clearActivityBoundary;
			var R0 = m.clearSuspenseBoundary;
			m.clearActivityBoundaryFromContainer;
			var nh = m.clearSuspenseBoundaryFromContainer, Ko = m.hideDehydratedBoundary, bg = m.unhideDehydratedBoundary, Td = m.shouldDeleteUnhydratedTailInstances;
			m.diffHydratedPropsForDevWarnings, m.diffHydratedTextForDevWarnings, m.describeHydratableInstanceForDevWarnings;
			var Id = m.validateHydratableInstance, zi = m.validateHydratableTextInstance, Nt = m.supportsResources, th = m.isHostHoistableType, Hl = m.getHoistableRoot, yg = m.getResource, rh = m.acquireResource, oh = m.releaseResource, vg = m.hydrateHoistable, Rd = m.mountHoistable, Ld = m.unmountHoistable, ah = m.createHoistableInstance, ih = m.prepareToCommitHoistables, L0 = m.mayResourceSuspendCommit, ce = m.preloadResource, F0 = m.suspendResource, be = m.supportsSingletons, Un = m.resolveSingletonInstance, D0 = m.acquireSingletonInstance, xo = m.releaseSingletonInstance, Ua = m.isHostSingletonType, Qr = m.isSingletonScope, Ml = [], Wa = -1, Aa = {}, sn = Math.clz32 ? Math.clz32 : k0, Fd = Math.log, lh = Math.LN2, Vl = 256, Ei = 262144, qn = 4194304, $l = Et.unstable_scheduleCallback, sh = Et.unstable_cancelCallback, j0 = Et.unstable_shouldYield, uh = Et.unstable_requestPaint, Tt = Et.unstable_now, ch = Et.unstable_ImmediatePriority, Sg = Et.unstable_UserBlockingPriority, dh = Et.unstable_NormalPriority, Gn = Et.unstable_IdlePriority, N = Et.log, U0 = Et.unstable_setDisableYieldValue, Lu = null, It = null, Ql = 0, $t = typeof Object.is == "function" ? Object.is : im, kg = typeof reportError == "function" ? reportError : function(t) {
				if (typeof window == "object" && typeof window.ErrorEvent == "function") {
					var r = new window.ErrorEvent("error", {
						bubbles: !0,
						cancelable: !0,
						message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
						error: t
					});
					if (!window.dispatchEvent(r)) return;
				} else if (typeof process == "object" && typeof process.emit == "function") {
					process.emit("uncaughtException", t);
					return;
				}
				console.error(t);
			}, W0 = Object.prototype.hasOwnProperty, fh, wg, Fu = !1, ph = /* @__PURE__ */ new WeakMap(), ea = [], _i = 0, Dd = null, Du = 0, Wn = [], yn = 0, _e = null, _n = 1, $e = "", Jn = oo(null), ju = oo(null), Je = oo(null), fr = oo(null), Nn = null, Qe = null, ne = !1, pr = null, hr = !1, hh = Error(F(519)), jd = oo(null), Ni = null, qr = null, Pg = typeof AbortController < "u" ? AbortController : function() {
				var t = [], r = this.signal = {
					aborted: !1,
					addEventListener: function(a, l) {
						t.push(l);
					}
				};
				this.abort = function() {
					r.aborted = !0, t.forEach(function(a) {
						return a();
					});
				};
			}, A0 = Et.unstable_scheduleCallback, xg = Et.unstable_NormalPriority, tn = {
				$$typeof: Vr,
				Consumer: null,
				Provider: null,
				_currentValue: null,
				_currentValue2: null,
				_threadCount: 0
			}, Uu = null, ql = null, Gr = null, Jr = !1, Ud = !1, mh = !1, Ti = 0, Wu = null, Oa = 0, Ii = 0, Gl = null, Cg = Q.S;
			Q.S = function(t, r) {
				if (Ph = Tt(), typeof r == "object" && r !== null && typeof r.then == "function" && Ot(t, r), Uu !== null) for (var a = ql; a !== null;) jf(a, Uu), a = a.next;
				if (a = t.types, a != null) {
					for (var l = ql; l !== null;) jf(l, a), l = l.next;
					if (Ii !== 0) {
						l = Uu, l === null && (l = Uu = []);
						for (var c = 0; c < a.length; c++) {
							var d = a[c];
							l.indexOf(d) === -1 && l.push(d);
						}
					}
				}
				Cg !== null && Cg(t, r);
			};
			var Zr = oo(null), Jl = Error(F(460)), gh = Error(F(474)), Wd = Error(F(542)), Ad = { then: function() {} }, Ri = null, Zl = null, Au = 0, Li = wt(!0), zg = wt(!1), mr = [], Xl = 0, bh = 0, na = !1, yh = !1, Ba = oo(null), Od = oo(0), Zn = oo(null), lt = null, Xn = oo(0), ta = 0, re = null, De = null, un = null, Bd = !1, ra = !1, Fi = !1, Hd = 0, Ou = 0, Yl = null, O0 = 0, Bu = {
				readContext: Me,
				use: pl,
				useCallback: Ve,
				useContext: Ve,
				useEffect: Ve,
				useImperativeHandle: Ve,
				useLayoutEffect: Ve,
				useInsertionEffect: Ve,
				useMemo: Ve,
				useReducer: Ve,
				useRef: Ve,
				useState: Ve,
				useDebugValue: Ve,
				useDeferredValue: Ve,
				useTransition: Ve,
				useSyncExternalStore: Ve,
				useId: Ve,
				useHostTransitionStatus: Ve,
				useFormState: Ve,
				useActionState: Ve,
				useOptimistic: Ve,
				useMemoCache: Ve,
				useCacheRefresh: Ve,
				useEffectEvent: Ve
			}, Eg = {
				readContext: Me,
				use: pl,
				useCallback: function(t, r) {
					return gn().memoizedState = [t, r === void 0 ? null : r], t;
				},
				useContext: Me,
				useEffect: Mf,
				useImperativeHandle: function(t, r, a) {
					a = a != null ? a.concat([t]) : null, gl(4194308, 4, Qf.bind(null, r, t), a);
				},
				useLayoutEffect: function(t, r) {
					return gl(4194308, 4, t, r);
				},
				useInsertionEffect: function(t, r) {
					gl(4, 2, t, r);
				},
				useMemo: function(t, r) {
					var a = gn();
					r = r === void 0 ? null : r;
					var l = t();
					if (Fi) {
						ga(!0);
						try {
							t();
						} finally {
							ga(!1);
						}
					}
					return a.memoizedState = [l, r], l;
				},
				useReducer: function(t, r, a) {
					var l = gn();
					if (a !== void 0) {
						var c = a(r);
						if (Fi) {
							ga(!0);
							try {
								a(r);
							} finally {
								ga(!1);
							}
						}
					} else c = r;
					return l.memoizedState = l.baseState = c, t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: c
					}, l.queue = t, t = t.dispatch = bt.bind(null, re, t), [l.memoizedState, t];
				},
				useRef: function(t) {
					var r = gn();
					return t = { current: t }, r.memoizedState = t;
				},
				useState: function(t) {
					t = gt(t);
					var r = t.queue, a = Tc.bind(null, re, r);
					return r.dispatch = a, [t.memoizedState, a];
				},
				useDebugValue: Bs,
				useDeferredValue: function(t, r) {
					return bl(gn(), t, r);
				},
				useTransition: function() {
					var t = gt(!1);
					return t = Jf.bind(null, re, t.queue, !0, !1), gn().memoizedState = t, [!1, t];
				},
				useSyncExternalStore: function(t, r, a) {
					var l = re, c = gn();
					if (ne) {
						if (a === void 0) throw Error(F(407));
						a = a();
					} else {
						if (a = r(), Be === null) throw Error(F(349));
						ye & 127 || mo(l, r, a);
					}
					c.memoizedState = a;
					var d = {
						value: a,
						getSnapshot: r
					};
					return c.queue = d, Mf(hl.bind(null, l, d, t), [t]), l.flags |= 2048, Ur(9, { destroy: void 0 }, Us.bind(null, l, d, a, r), null), a;
				},
				useId: function() {
					var t = gn(), r = Be.identifierPrefix;
					if (ne) {
						var a = $e, l = _n;
						a = (l & ~(1 << 32 - sn(l) - 1)).toString(32) + a, r = "_" + r + "R_" + a, a = Hd++, 0 < a && (r += "H" + a.toString(32)), r += "_";
					} else a = O0++, r = "_" + r + "r_" + a.toString(32) + "_";
					return t.memoizedState = r;
				},
				useHostTransitionStatus: bo,
				useFormState: Bf,
				useActionState: Bf,
				useOptimistic: function(t) {
					var r = gn();
					r.memoizedState = r.baseState = t;
					var a = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: null,
						lastRenderedState: null
					};
					return r.queue = a, r = yl.bind(null, re, !0, a), a.dispatch = r, [t, r];
				},
				useMemoCache: Mo,
				useCacheRefresh: function() {
					return gn().memoizedState = gm.bind(null, re);
				},
				useEffectEvent: function(t) {
					var r = gn(), a = { impl: t };
					return r.memoizedState = a, function() {
						if ((de & 2) !== 0) throw Error(F(440));
						return a.impl.apply(void 0, arguments);
					};
				}
			}, _g = {
				readContext: Me,
				use: pl,
				useCallback: Hs,
				useContext: Me,
				useEffect: _c,
				useImperativeHandle: mm,
				useInsertionEffect: Nc,
				useLayoutEffect: hm,
				useMemo: qf,
				useReducer: js,
				useRef: Hf,
				useState: function() {
					return js(Bt);
				},
				useDebugValue: Bs,
				useDeferredValue: function(t, r) {
					return Gf(K(), De.memoizedState, t, r);
				},
				useTransition: function() {
					var t = js(Bt)[0], r = K().memoizedState;
					return [typeof t == "boolean" ? t : fl(t), r];
				},
				useSyncExternalStore: pm,
				useId: Xf,
				useHostTransitionStatus: bo,
				useFormState: Dr,
				useActionState: Dr,
				useOptimistic: function(t, r) {
					return Ir(K(), De, t, r);
				},
				useMemoCache: Mo,
				useCacheRefresh: Yf,
				useEffectEvent: $f
			}, B0 = {
				readContext: Me,
				use: pl,
				useCallback: Hs,
				useContext: Me,
				useEffect: _c,
				useImperativeHandle: mm,
				useInsertionEffect: Nc,
				useLayoutEffect: hm,
				useMemo: qf,
				useReducer: tr,
				useRef: Hf,
				useState: function() {
					return tr(Bt);
				},
				useDebugValue: Bs,
				useDeferredValue: function(t, r) {
					var a = K();
					return De === null ? bl(a, t, r) : Gf(a, De.memoizedState, t, r);
				},
				useTransition: function() {
					var t = tr(Bt)[0], r = K().memoizedState;
					return [typeof t == "boolean" ? t : fl(t), r];
				},
				useSyncExternalStore: pm,
				useId: Xf,
				useHostTransitionStatus: bo,
				useFormState: jr,
				useActionState: jr,
				useOptimistic: function(t, r) {
					var a = K();
					return De !== null ? Ir(a, De, t, r) : (a.baseState = t, [t, a.queue.dispatch]);
				},
				useMemoCache: Mo,
				useCacheRefresh: Yf,
				useEffectEvent: $f
			}, Md = {
				enqueueSetState: function(t, r, a) {
					t = t._reactInternals;
					var l = zt(), c = po(l);
					c.payload = r, a != null && (c.callback = a), r = ka(t, c, l), r !== null && (yt(r, t, l), Ls(r, t, l));
				},
				enqueueReplaceState: function(t, r, a) {
					t = t._reactInternals;
					var l = zt(), c = po(l);
					c.tag = 1, c.payload = r, a != null && (c.callback = a), r = ka(t, c, l), r !== null && (yt(r, t, l), Ls(r, t, l));
				},
				enqueueForceUpdate: function(t, r) {
					t = t._reactInternals;
					var a = zt(), l = po(a);
					l.tag = 2, r != null && (l.callback = r), r = ka(t, l, a), r !== null && (yt(r, t, a), Ls(r, t, a));
				}
			}, vh = Error(F(461)), Pn = !1, Vd = {
				dehydrated: null,
				treeContext: null,
				retryLane: 0,
				hydrationErrors: null
			}, Yn = !1, $d = !1, Rt = null, Xr = null, vt = 0, xn = !1, Ce = !1, Co = !1, Sh = !1, Ng = typeof WeakSet == "function" ? WeakSet : Set, An = null, gr = !1, Hu = !1, Qd = !1, kh = !1, Cn = null, Lt = !1, Yr = null, Di = 8192, H0 = {
				getCacheForType: function(t) {
					var r = Me(tn), a = r.data.get(t);
					return a === void 0 && (a = t(), r.data.set(t, a)), a;
				},
				cacheSignal: function() {
					return Me(tn).controller.signal;
				}
			}, qd = 0, Gd = 1, Jd = 2, Zd = 3, Xd = 4;
			if (typeof Symbol == "function" && Symbol.for) {
				var Mu = Symbol.for;
				qd = Mu("selector.component"), Gd = Mu("selector.has_pseudo_class"), Jd = Mu("selector.role"), Zd = Mu("selector.test_id"), Xd = Mu("selector.text");
			}
			var M0 = typeof WeakMap == "function" ? WeakMap : Map, de = 0, Be = null, he = null, ye = 0, Ie = 0, Qt = null, Ha = !1, Kl = !1, wh = !1, oa = 0, cn = 0, aa = 0, Ma = 0, Yd = 0, Ft = 0, es = 0, Vu = null, Ze = null, Kd = !1, ji = 0, Ph = 0, ns = 1 / 0, $u = null, Va = null, Xe = 0, qt = null, $a = null, zo = 0, xh = 0, ef = null, Tg = null, je = null, Ui = null, ts = null, rs = 0, Qu = null;
			return Y.attemptContinuousHydration = function(t) {
				if (t.tag === 13 || t.tag === 31) {
					var r = Er(t, 67108864);
					r !== null && yt(r, t, 67108864), Rp(t, 67108864);
				}
			}, Y.attemptHydrationAtCurrentPriority = function(t) {
				if (t.tag === 13 || t.tag === 31) {
					var r = zt();
					r = mn(r);
					var a = Er(t, r);
					a !== null && yt(a, t, r), Rp(t, r);
				}
			}, Y.attemptSynchronousHydration = function(t) {
				switch (t.tag) {
					case 3:
						if (t = t.stateNode, t.current.memoizedState.isDehydrated) {
							var r = ma(t.pendingLanes);
							if (r !== 0) {
								for (t.pendingLanes |= 2, t.entangledLanes |= 2; r;) {
									var a = 1 << 31 - sn(r);
									t.entanglements[1] |= a, r &= ~a;
								}
								xr(t), !(de & 6) && (ns = Tt() + 500, tl(0, !1));
							}
						}
						break;
					case 31:
					case 13: r = Er(t, 2), r !== null && yt(r, t, 2), Sm(), Rp(t, 2);
				}
			}, Y.batchedUpdates = function(t, r) {
				return t(r);
			}, Y.createComponentSelector = function(t) {
				return {
					$$typeof: qd,
					value: t
				};
			}, Y.createContainer = function(t, r, a, l, c, d, h, y, C, R) {
				return hd(t, r, !1, null, a, l, d, null, h, y, C, R);
			}, Y.createHasPseudoClassSelector = function(t) {
				return {
					$$typeof: Gd,
					value: t
				};
			}, Y.createHydrationContainer = function(t, r, a, l, c, d, h, y, C, R, D, U, A, fe) {
				var _r3;
				return t = hd(a, l, !0, t, c, d, y, fe, C, R, D, U), t.context = Tp(null), a = t.current, l = zt(), l = mn(l), c = po(l), c.callback = (_r3 = r) != null ? _r3 : null, ka(a, c, l), r = l, t.current.lanes = r, Ki(t, r), xr(t), t;
			}, Y.createPortal = function(t, r, a) {
				var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
				return {
					$$typeof: Si,
					key: l == null ? null : l === Fp ? Fp : "" + l,
					children: t,
					containerInfo: r,
					implementation: a
				};
			}, Y.createRoleSelector = function(t) {
				return {
					$$typeof: Jd,
					value: t
				};
			}, Y.createTestNameSelector = function(t) {
				return {
					$$typeof: Zd,
					value: t
				};
			}, Y.createTextSelector = function(t) {
				return {
					$$typeof: Xd,
					value: t
				};
			}, Y.defaultOnCaughtError = function(t) {
				console.error(t);
			}, Y.defaultOnRecoverableError = function(t) {
				kg(t);
			}, Y.defaultOnUncaughtError = function(t) {
				kg(t);
			}, Y.deferredUpdates = function(t) {
				var r = Q.T, a = sr();
				try {
					return jn(32), Q.T = null, t();
				} finally {
					jn(a), Q.T = r;
				}
			}, Y.discreteUpdates = function(t, r, a, l, c) {
				var d = Q.T, h = sr();
				try {
					return jn(2), Q.T = null, t(r, a, l, c);
				} finally {
					jn(h), Q.T = d, de === 0 && (ns = Tt() + 500);
				}
			}, Y.findAllNodes = bn, Y.findBoundingRects = function(t, r) {
				if (!Ul) throw Error(F(363));
				r = bn(t, r), t = [];
				for (var a = 0; a < r.length; a++) t.push(Da(r[a]));
				for (r = t.length - 1; 0 < r; r--) {
					a = t[r];
					for (var l = a.x, c = l + a.width, d = a.y, h = d + a.height, y = r - 1; 0 <= y; y--) if (r !== y) {
						var C = t[y], R = C.x, D = R + C.width, U = C.y, A = U + C.height;
						if (l >= R && d >= U && c <= D && h <= A) {
							t.splice(r, 1);
							break;
						} else if (l !== R || a.width !== C.width || A < d || U > h) {
							if (!(d !== U || a.height !== C.height || D < l || R > c)) {
								R > l && (C.width += R - l, C.x = l), D < c && (C.width = c - R), t.splice(r, 1);
								break;
							}
						} else {
							U > d && (C.height += U - d, C.y = d), A < h && (C.height = h - U), t.splice(r, 1);
							break;
						}
					}
				}
				return t;
			}, Y.findHostInstance = zm, Y.findHostInstanceWithNoPortals = function(t) {
				return t = hc(t), t = t !== null ? ht(t) : null, t === null ? null : Pi(t.stateNode);
			}, Y.findHostInstanceWithWarning = function(t) {
				return zm(t);
			}, Y.flushPassiveEffects = _a, Y.flushSyncFromReconciler = function(t) {
				var r = de;
				de |= 1;
				var a = Q.T, l = sr();
				try {
					if (jn(2), Q.T = null, t) return t();
				} finally {
					jn(l), Q.T = a, de = r, !(de & 6) && tl(0, !1);
				}
			}, Y.flushSyncWork = Sm, Y.focusWithin = function(t, r) {
				if (!Ul) throw Error(F(363));
				for (t = fu(t), r = vm(t, r), r = Array.from(r), t = 0; t < r.length;) {
					var a = r[t++], l = a.tag;
					if (!Wl(a)) {
						if ((l === 5 || l === 26 || l === 27) && Vm(a.stateNode)) return !0;
						for (a = a.child; a !== null;) r.push(a), a = a.sibling;
					}
				}
				return !1;
			}, Y.getFindAllNodesFailureDescription = function(t, r) {
				if (!Ul) throw Error(F(363));
				var a = 0, l = [];
				t = [fu(t), 0];
				for (var c = 0; c < t.length;) {
					var d = t[c++], h = d.tag, y = t[c++], C = r[y];
					if ((h !== 5 && h !== 26 && h !== 27 || !Wl(d)) && (pu(d, C) && (l.push(hu(C)), y++, y > a && (a = y)), y < r.length)) for (d = d.child; d !== null;) t.push(d, y), d = d.sibling;
				}
				if (a < r.length) {
					for (t = []; a < r.length; a++) t.push(hu(r[a]));
					return `findAllNodes was able to match part of the selector:
  ` + (l.join(" > ") + `

No matching component was found for:
  `) + t.join(" > ");
				}
				return null;
			}, Y.getPublicRootInstance = function(t) {
				if (t = t.current, !t.child) return null;
				switch (t.child.tag) {
					case 27:
					case 5: return Pi(t.child.stateNode);
					default: return t.child.stateNode;
				}
			}, Y.injectIntoDevTools = function() {
				var t = {
					bundleType: 0,
					version: Dp,
					rendererPackageName: jp,
					currentDispatcherRef: Q,
					reconcilerVersion: "19.3.0"
				};
				if (Up !== null && (t.rendererConfig = Up), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") t = !1;
				else {
					var r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (r.isDisabled || !r.supportsFiber) t = !0;
					else {
						try {
							Lu = r.inject(t), It = r;
						} catch {}
						t = !!r.checkDCE;
					}
				}
				return t;
			}, Y.isAlreadyRendering = function() {
				return (de & 6) !== 0;
			}, Y.observeVisibleRects = function(t, r, a, l) {
				if (!Ul) throw Error(F(363));
				t = bn(t, r);
				var c = Pd(t, a, l).disconnect;
				return { disconnect: function() {
					c();
				} };
			}, Y.shouldError = function() {
				return null;
			}, Y.shouldSuspend = function() {
				return !1;
			}, Y.startHostTransition = function(t, r, a, l) {
				if (t.tag !== 5) throw Error(F(476));
				var c = Zf(t).queue;
				Jf(t, c, r, Fa, a === null ? zf : function() {
					var d = Zf(t);
					return d.next === null && (d = t.alternate.memoizedState), wa(t, d.next.queue, {}, zt()), a(l);
				});
			}, Y.updateContainer = function(t, r, a, l) {
				var c = r.current, d = zt();
				return Em(c, d, t, r, a, l), d;
			}, Y.updateContainerSync = function(t, r, a, l) {
				return Em(r.current, 2, t, r, a, l), 2;
			}, Y;
		}, Ut.exports.default = Ut.exports, Object.defineProperty(Ut.exports, "__esModule", { value: !0 });
	}(Ob)), Ob.exports;
}
/**
* @license React
* react-reconciler.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
({ exports: {} }).exports;
var C1;
function G1() {
	return C1 || (C1 = 1, S0.exports = Q1()), S0.exports;
}
var Z1 = $1(G1());
function createReconciler(config) {
	const reconciler = Z1(config);
	reconciler.injectIntoDevTools();
	return reconciler;
}
var NoEventPriority = 0;
var catalogue = {};
var PREFIX_REGEX = /^three(?=[A-Z])/;
var toPascalCase = (type) => `${type[0].toUpperCase()}${type.slice(1)}`;
var i$2 = 0;
var isConstructor = (object) => typeof object === "function";
function extend(objects) {
	if (isConstructor(objects)) {
		const Component = `${i$2++}`;
		catalogue[Component] = objects;
		return Component;
	} else Object.assign(catalogue, objects);
}
function validateInstance(type, props) {
	const name = toPascalCase(type);
	const target = catalogue[name];
	if (type !== "primitive" && !target) throw new Error(`R3F: ${name} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
	if (type === "primitive" && !props.object) throw new Error(`R3F: Primitives without 'object' are invalid!`);
	if (props.args !== void 0 && !Array.isArray(props.args)) throw new Error("R3F: The args prop must be an array!");
}
function createInstance(type, props, root) {
	var _props$object;
	type = toPascalCase(type) in catalogue ? type : type.replace(PREFIX_REGEX, "");
	validateInstance(type, props);
	if (type === "primitive" && (_props$object = props.object) != null && _props$object.__r3f) delete props.object.__r3f;
	return prepare(props.object, root, type, props);
}
function hideInstance(instance) {
	if (!instance.isHidden) {
		var _instance$parent;
		if (instance.props.attach && (_instance$parent = instance.parent) != null && _instance$parent.object) detach(instance.parent, instance);
		else if (isObject3D(instance.object)) instance.object.visible = false;
		instance.isHidden = true;
		invalidateInstance(instance);
	}
}
function unhideInstance(instance) {
	if (instance.isHidden) {
		var _instance$parent2;
		if (instance.props.attach && (_instance$parent2 = instance.parent) != null && _instance$parent2.object) attach(instance.parent, instance);
		else if (isObject3D(instance.object) && instance.props.visible !== false) instance.object.visible = true;
		instance.isHidden = false;
		invalidateInstance(instance);
	}
}
function handleContainerEffects(parent, child, beforeChild) {
	const state = child.root.getState();
	if (!parent.parent && parent.object !== state.scene) return;
	if (!child.object) {
		var _child$props$object, _child$props$args;
		const target = catalogue[toPascalCase(child.type)];
		child.object = (_child$props$object = child.props.object) != null ? _child$props$object : new target(...(_child$props$args = child.props.args) != null ? _child$props$args : []);
		child.object.__r3f = child;
	}
	applyProps(child.object, child.props);
	if (child.props.attach) attach(parent, child);
	else if (isObject3D(child.object) && isObject3D(parent.object)) {
		const childIndex = parent.object.children.indexOf(beforeChild == null ? void 0 : beforeChild.object);
		if (beforeChild && childIndex !== -1) {
			const existingIndex = parent.object.children.indexOf(child.object);
			if (existingIndex !== -1) {
				parent.object.children.splice(existingIndex, 1);
				const adjustedIndex = existingIndex < childIndex ? childIndex - 1 : childIndex;
				parent.object.children.splice(adjustedIndex, 0, child.object);
			} else {
				child.object.parent = parent.object;
				parent.object.children.splice(childIndex, 0, child.object);
				child.object.dispatchEvent({ type: "added" });
				parent.object.dispatchEvent({
					type: "childadded",
					child: child.object
				});
			}
		} else parent.object.add(child.object);
	}
	for (const childInstance of child.children) handleContainerEffects(child, childInstance);
	invalidateInstance(child);
}
function appendChild(parent, child) {
	if (!child) return;
	if (child.parent === parent) {
		const childIndex = parent.children.indexOf(child);
		if (childIndex !== -1) parent.children.splice(childIndex, 1);
	}
	child.parent = parent;
	parent.children.push(child);
	handleContainerEffects(parent, child);
}
function insertBefore(parent, child, beforeChild) {
	if (!child || !beforeChild) return;
	if (child.parent === parent) {
		const childIndex = parent.children.indexOf(child);
		if (childIndex !== -1) parent.children.splice(childIndex, 1);
	}
	child.parent = parent;
	const childIndex = parent.children.indexOf(beforeChild);
	if (childIndex !== -1) parent.children.splice(childIndex, 0, child);
	else parent.children.push(child);
	handleContainerEffects(parent, child, beforeChild);
}
function disposeOnIdle(object) {
	if (typeof object.dispose === "function") {
		const handleDispose = () => {
			try {
				object.dispose();
			} catch {}
		};
		if (typeof IS_REACT_ACT_ENVIRONMENT !== "undefined") handleDispose();
		else (0, import_scheduler.unstable_scheduleCallback)(import_scheduler.unstable_IdlePriority, handleDispose);
	}
}
function removeChild(parent, child, dispose) {
	if (!child) return;
	child.parent = null;
	const childIndex = parent.children.indexOf(child);
	if (childIndex !== -1) parent.children.splice(childIndex, 1);
	if (child.props.attach) detach(parent, child);
	else if (isObject3D(child.object) && isObject3D(parent.object)) {
		parent.object.remove(child.object);
		removeInteractivity(findInitialRoot(child), child.object);
	}
	const shouldDispose = child.props.dispose !== null && dispose !== false;
	for (let i = child.children.length - 1; i >= 0; i--) {
		const node = child.children[i];
		removeChild(child, node, shouldDispose);
	}
	child.children.length = 0;
	delete child.object.__r3f;
	if (shouldDispose && child.type !== "primitive" && child.object.type !== "Scene") disposeOnIdle(child.object);
	if (dispose === void 0) invalidateInstance(child);
}
function setFiberRef(fiber, publicInstance) {
	for (const _fiber of [fiber, fiber.alternate]) if (_fiber !== null) {
		if (typeof _fiber.ref === "function") {
			_fiber.refCleanup == null || _fiber.refCleanup();
			const cleanup = _fiber.ref(publicInstance);
			if (typeof cleanup === "function") _fiber.refCleanup = cleanup;
		} else if (_fiber.ref) _fiber.ref.current = publicInstance;
	}
}
var reconstructed = [];
function flushReconstructedInstances() {
	if (reconstructed.length === 0) return;
	try {
		swapReconstructedInstances();
	} finally {
		reconstructed.length = 0;
	}
}
function swapReconstructedInstances() {
	for (const [instance] of reconstructed) {
		const parent = instance.parent;
		if (parent) {
			if (instance.props.attach) detach(parent, instance);
			else if (isObject3D(instance.object) && isObject3D(parent.object)) parent.object.remove(instance.object);
			for (const child of instance.children) if (child.props.attach) detach(instance, child);
			else if (isObject3D(child.object) && isObject3D(instance.object)) instance.object.remove(child.object);
		}
		if (instance.isHidden) unhideInstance(instance);
		if (instance.object.__r3f) delete instance.object.__r3f;
		if (instance.type !== "primitive") disposeOnIdle(instance.object);
	}
	for (const [instance, props, fiber] of reconstructed) {
		instance.props = props;
		const parent = instance.parent;
		if (parent) {
			var _instance$props$objec, _instance$props$args;
			const target = catalogue[toPascalCase(instance.type)];
			const prevObject = instance.object;
			instance.object = (_instance$props$objec = instance.props.object) != null ? _instance$props$objec : new target(...(_instance$props$args = instance.props.args) != null ? _instance$props$args : []);
			instance.object.__r3f = instance;
			setFiberRef(fiber, instance.object);
			swapInteractivity(findInitialRoot(instance), prevObject, instance.object);
			applyProps(instance.object, instance.props);
			if (instance.props.attach) attach(parent, instance);
			else if (isObject3D(instance.object) && isObject3D(parent.object)) parent.object.add(instance.object);
			for (const child of instance.children) if (child.props.attach) attach(instance, child);
			else if (isObject3D(child.object) && isObject3D(instance.object)) instance.object.add(child.object);
			invalidateInstance(instance);
		}
	}
}
var handleTextInstance = () => {};
var NO_CONTEXT = {};
var currentUpdatePriority = NoEventPriority;
function getEventPriority(type) {
	switch (type) {
		case "beforetoggle":
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart": return e;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave": return o;
		case "message": switch ((0, import_scheduler.unstable_getCurrentPriorityLevel)()) {
			case import_scheduler.unstable_ImmediatePriority: return e;
			case import_scheduler.unstable_UserBlockingPriority: return o;
			case import_scheduler.unstable_NormalPriority:
			case import_scheduler.unstable_LowPriority: return r;
			case import_scheduler.unstable_IdlePriority: return i$1;
			default: return r;
		}
		default: return r;
	}
}
function scheduleMicrotask(callback) {
	if (typeof queueMicrotask === "function") queueMicrotask(callback);
	else if (typeof Promise !== "undefined") Promise.resolve().then(callback).catch((error) => {
		setTimeout(() => {
			throw error;
		});
	});
	else setTimeout(callback);
}
var reconciler = /* @__PURE__ */ createReconciler({
	isPrimaryRenderer: false,
	warnsIfNotActing: false,
	supportsMutation: true,
	supportsPersistence: false,
	supportsHydration: false,
	createInstance,
	removeChild,
	appendChild,
	appendInitialChild: appendChild,
	insertBefore,
	appendChildToContainer(container, child) {
		const scene = container.getState().scene.__r3f;
		if (!child || !scene) return;
		appendChild(scene, child);
	},
	removeChildFromContainer(container, child) {
		const scene = container.getState().scene.__r3f;
		if (!child || !scene) return;
		removeChild(scene, child);
	},
	insertInContainerBefore(container, child, beforeChild) {
		const scene = container.getState().scene.__r3f;
		if (!child || !beforeChild || !scene) return;
		insertBefore(scene, child, beforeChild);
	},
	getRootHostContext: () => NO_CONTEXT,
	getChildHostContext: () => NO_CONTEXT,
	commitUpdate(instance, type, oldProps, newProps, fiber) {
		var _newProps$args, _oldProps$args, _newProps$args2;
		validateInstance(type, newProps);
		let reconstruct = false;
		if (instance.type === "primitive" && oldProps.object !== newProps.object) reconstruct = true;
		else if (((_newProps$args = newProps.args) == null ? void 0 : _newProps$args.length) !== ((_oldProps$args = oldProps.args) == null ? void 0 : _oldProps$args.length)) reconstruct = true;
		else if ((_newProps$args2 = newProps.args) != null && _newProps$args2.some((value, index) => {
			var _oldProps$args2;
			return value !== ((_oldProps$args2 = oldProps.args) == null ? void 0 : _oldProps$args2[index]);
		})) reconstruct = true;
		if (reconstruct) reconstructed.push([
			instance,
			getInstanceProps(newProps),
			fiber
		]);
		else {
			const changedProps = diffProps(instance, newProps);
			const attach = instance.props.attach;
			instance.props = getInstanceProps(newProps);
			if (attach !== void 0) instance.props.attach = attach;
			else delete instance.props.attach;
			if (Object.keys(changedProps).length) applyProps(instance.object, changedProps);
		}
	},
	finalizeInitialChildren: () => false,
	commitMount() {},
	getPublicInstance: (instance) => instance == null ? void 0 : instance.object,
	prepareForCommit: () => null,
	preparePortalMount: (container) => prepare(container.getState().scene, container, "", {}),
	resetAfterCommit: flushReconstructedInstances,
	shouldSetTextContent: () => false,
	clearContainer: () => false,
	hideInstance,
	unhideInstance,
	createTextInstance: handleTextInstance,
	hideTextInstance: handleTextInstance,
	unhideTextInstance: handleTextInstance,
	supportsMicrotasks: true,
	scheduleMicrotask,
	scheduleTimeout: typeof setTimeout === "function" ? setTimeout : void 0,
	cancelTimeout: typeof clearTimeout === "function" ? clearTimeout : void 0,
	noTimeout: -1,
	getInstanceFromNode: () => null,
	beforeActiveInstanceBlur() {},
	afterActiveInstanceBlur() {},
	detachDeletedInstance() {},
	prepareScopeUpdate() {},
	getInstanceFromScope: () => null,
	shouldAttemptEagerTransition: () => false,
	trackSchedulerEvent: () => {},
	resolveEventType: () => null,
	resolveEventTimeStamp: () => -1.1,
	requestPostPaintCallback() {},
	maySuspendCommit: () => false,
	preloadInstance: () => true,
	suspendInstance() {},
	waitForCommitToBeReady: () => null,
	NotPendingTransition: null,
	HostTransitionContext: /* @__PURE__ */ import_react.createContext(null),
	setCurrentUpdatePriority(newPriority) {
		currentUpdatePriority = newPriority;
	},
	getCurrentUpdatePriority() {
		return currentUpdatePriority;
	},
	resolveUpdatePriority() {
		var _window$event;
		if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
		const eventType = typeof window !== "undefined" ? (_window$event = window.event) == null ? void 0 : _window$event.type : void 0;
		if (eventType === void 0) return r;
		return getEventPriority(eventType);
	},
	resetFormInstance() {},
	rendererPackageName: "@react-three/fiber",
	rendererVersion: packageData.version,
	applyViewTransitionName(_instance, _name, _className) {},
	restoreViewTransitionName(_instance, _props) {},
	cancelViewTransitionName(_instance, _name, _props) {},
	cancelRootViewTransitionName(_rootContainer) {},
	restoreRootViewTransitionName(_rootContainer) {},
	InstanceMeasurement: null,
	measureInstance: (_instance) => null,
	wasInstanceInViewport: (_measurement) => true,
	hasInstanceChanged: (_oldMeasurement, _newMeasurement) => false,
	hasInstanceAffectedParent: (_oldMeasurement, _newMeasurement) => false,
	suspendOnActiveViewTransition(_state, _container) {},
	startViewTransition(_suspendedState, _rootContainer, _transitionTypes, mutationCallback, layoutCallback, _afterMutationCallback, spawnedWorkCallback, _passiveCallback, _errorCallback, _blockedCallback, finishedAnimation) {
		mutationCallback();
		layoutCallback();
		finishedAnimation?.();
		spawnedWorkCallback();
		return null;
	},
	startGestureTransition(_suspendedState, _rootContainer, _timeline, _rangeStart, _rangeEnd, _transitionTypes, mutationCallback, animateCallback, _errorCallback, finishedAnimation) {
		mutationCallback();
		animateCallback();
		finishedAnimation?.();
		return null;
	},
	stopViewTransition(_transition) {},
	addViewTransitionFinishedListener(_transition, callback) {
		callback();
	},
	createViewTransitionInstance: (_name) => null,
	getCurrentGestureOffset(_provider) {
		throw new Error("startGestureTransition is not yet supported in react-three-fiber.");
	},
	cloneMutableInstance(instance, _keepChildren) {
		return instance;
	},
	cloneMutableTextInstance(textInstance) {
		return textInstance;
	},
	cloneRootViewTransitionContainer(_rootContainer) {
		throw new Error("Not implemented.");
	},
	removeRootViewTransitionClone(_rootContainer, _clone) {
		throw new Error("Not implemented.");
	},
	createFragmentInstance: (_fiber) => null,
	updateFragmentInstanceFiber(_fiber, _instance) {},
	commitNewChildToFragmentInstance(_child, _fragmentInstance) {},
	deleteChildFromFragmentInstance(_child, _fragmentInstance) {},
	measureClonedInstance: (_instance) => null,
	maySuspendCommitOnUpdate: (_type, _oldProps, _newProps) => false,
	maySuspendCommitInSyncRender: (_type, _props) => false,
	startSuspendingCommit: () => null,
	getSuspendedCommitReason: (_state, _rootContainer) => null
});
var isPromiseLike = (value) => typeof (value == null ? void 0 : value.then) === "function";
/** A promise tagged with its state, the protocol React's `use` reads */
var fulfilled = (value) => Object.assign(Promise.resolve(value), {
	status: "fulfilled",
	value
});
var rejected = (reason) => {
	const promise = Promise.reject(reason);
	promise.catch(() => {});
	return Object.assign(promise, {
		status: "rejected",
		reason
	});
};
/** Tags `promise` in place once it settles. */
var tracked = (promise) => {
	const result = Promise.resolve(promise);
	result.status = "pending";
	result.then((value) => {
		Object.assign(result, {
			status: "fulfilled",
			value
		});
	}, (reason) => {
		Object.assign(result, {
			status: "rejected",
			reason
		});
	});
	return result;
};
var _roots = /* @__PURE__ */ new Map();
var shallowLoose = {
	objects: "shallow",
	strict: false
};
function computeInitialSize(canvas, size) {
	if (!size && typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement && canvas.parentElement) {
		const { width, height, top, left } = canvas.parentElement.getBoundingClientRect();
		return {
			width,
			height,
			top,
			left
		};
	} else if (!size && typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return {
		width: canvas.width,
		height: canvas.height,
		top: 0,
		left: 0
	};
	return {
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		...size
	};
}
function createRoot(canvas) {
	const prevRoot = _roots.get(canvas);
	const prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
	const prevStore = prevRoot == null ? void 0 : prevRoot.store;
	if (prevRoot) console.warn("R3F.createRoot should only be called once!");
	const logRecoverableError = typeof reportError === "function" ? reportError : console.error;
	const store = prevStore || createStore(invalidate, advance);
	const fiber = prevFiber || reconciler.createContainer(store, t, null, false, null, "", logRecoverableError, logRecoverableError, logRecoverableError, null);
	const root = prevRoot || {
		fiber,
		store,
		unmountClaim: null,
		ready: fulfilled(void 0)
	};
	if (!prevRoot) _roots.set(canvas, root);
	let onCreated;
	let lastCamera;
	let mounted = false;
	return {
		get ready() {
			return root.ready;
		},
		configure(props = {}) {
			root.unmountClaim = null;
			const { gl: glConfig, size: propsSize, scene: sceneOptions, events, onCreated: onCreatedCallback, shadows = false, linear = false, flat = false, legacy = false, orthographic = false, frameloop = "always", dpr = [1, 2], performance, raycaster: raycastOptions, camera: cameraOptions, onPointerMissed } = props;
			const defaultProps = {
				canvas,
				powerPreference: "high-performance",
				antialias: true,
				alpha: true
			};
			const apply = (customRenderer) => {
				const state = store.getState();
				const first = !state.gl;
				let gl = state.gl;
				if (first) {
					gl = isRenderer(customRenderer) ? customRenderer : new WebGLRenderer({
						...defaultProps,
						...glConfig
					});
					state.set({ gl });
				}
				let raycaster = state.raycaster;
				if (!raycaster) state.set({ raycaster: raycaster = new Raycaster() });
				const { params, ...options } = raycastOptions || {};
				if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, { ...options });
				if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, { params: {
					...raycaster.params,
					...params
				} });
				if (!state.camera || state.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
					lastCamera = cameraOptions;
					const isCamera = cameraOptions == null ? void 0 : cameraOptions.isCamera;
					const camera = isCamera ? cameraOptions : orthographic ? new OrthographicCamera$1(0, 0, 0, 0, .1, 1e3) : new PerspectiveCamera(75, 0, .1, 1e3);
					if (!isCamera) {
						camera.position.z = 5;
						if (cameraOptions) {
							applyProps(camera, cameraOptions);
							if (!camera.manual) {
								if ("aspect" in cameraOptions || "left" in cameraOptions || "right" in cameraOptions || "bottom" in cameraOptions || "top" in cameraOptions) {
									camera.manual = true;
									camera.updateProjectionMatrix();
								}
							}
						}
						if (!state.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
					}
					state.set({ camera });
					raycaster.camera = camera;
				}
				if (!state.scene) {
					let scene;
					if (sceneOptions != null && sceneOptions.isScene) {
						scene = sceneOptions;
						prepare(scene, store, "", {});
					} else {
						scene = new Scene();
						prepare(scene, store, "", {});
						if (sceneOptions) applyProps(scene, sceneOptions);
					}
					state.set({ scene });
				}
				if (events && !state.events.handlers) state.set({ events: events(store) });
				const size = computeInitialSize(canvas, propsSize);
				if (!is.equ(size, state.size, shallowLoose)) state.setSize(size.width, size.height, size.top, size.left);
				if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr);
				if (state.frameloop !== frameloop) state.setFrameloop(frameloop);
				if (!state.onPointerMissed) state.set({ onPointerMissed });
				if (performance && !is.equ(performance, state.performance, shallowLoose)) state.set((state) => ({ performance: {
					...state.performance,
					...performance
				} }));
				if (!state.xr) {
					var _gl$xr;
					const handleXRFrame = (timestamp, frame) => {
						const state = store.getState();
						if (state.frameloop === "never") return;
						advance(timestamp, true, state, frame);
					};
					const handleSessionChange = () => {
						const state = store.getState();
						state.gl.xr.enabled = state.gl.xr.isPresenting;
						state.gl.xr.setAnimationLoop(state.gl.xr.isPresenting ? handleXRFrame : null);
						if (!state.gl.xr.isPresenting) invalidate(state);
					};
					const xr = {
						connect() {
							const gl = store.getState().gl;
							gl.xr.addEventListener("sessionstart", handleSessionChange);
							gl.xr.addEventListener("sessionend", handleSessionChange);
						},
						disconnect() {
							const gl = store.getState().gl;
							gl.xr.removeEventListener("sessionstart", handleSessionChange);
							gl.xr.removeEventListener("sessionend", handleSessionChange);
						}
					};
					if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === "function") xr.connect();
					state.set({ xr });
				}
				if (gl.shadowMap) {
					const oldEnabled = gl.shadowMap.enabled;
					const oldType = gl.shadowMap.type;
					gl.shadowMap.enabled = !!shadows;
					if (is.boo(shadows)) gl.shadowMap.type = 2;
					else if (is.str(shadows)) {
						var _types$shadows;
						const types = {
							basic: 0,
							percentage: 1,
							soft: 2,
							variance: 3
						};
						gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : 2;
					} else if (is.obj(shadows)) Object.assign(gl.shadowMap, shadows);
					if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
				}
				ColorManagement.enabled = !legacy;
				if (first) {
					gl.outputColorSpace = linear ? LinearSRGBColorSpace : SRGBColorSpace;
					gl.toneMapping = flat ? 0 : 4;
				}
				if (state.legacy !== legacy) state.set(() => ({ legacy }));
				if (state.linear !== linear) state.set(() => ({ linear }));
				if (state.flat !== flat) state.set(() => ({ flat }));
				if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
				onCreated = onCreatedCallback;
			};
			const fail = (error) => {
				const failure = rejected(error);
				root.ready = failure;
				return failure;
			};
			const run = (customRenderer) => {
				try {
					apply(customRenderer);
					root.ready = fulfilled(void 0);
					return fulfilled(this);
				} catch (error) {
					return fail(error);
				}
			};
			if (store.getState().gl) return run();
			if (root.ready.status === "pending") return tracked(root.ready.then(() => run()));
			let customRenderer;
			try {
				customRenderer = typeof glConfig === "function" ? glConfig(defaultProps) : glConfig;
			} catch (error) {
				return fail(error);
			}
			if (!isPromiseLike(customRenderer)) return run(customRenderer);
			const configuring = tracked(customRenderer.then(run, fail));
			root.ready = configuring;
			return configuring;
		},
		render(children) {
			if (_roots.get(canvas) !== root) return store;
			root.unmountClaim = null;
			const element = /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Provider, {
				store,
				children,
				onCreated,
				rootElement: canvas
			});
			const commit = () => {
				if (_roots.get(canvas) !== root || root.unmountClaim) return;
				if (mounted) {
					reconciler.updateContainer(element, fiber, null, noop);
					return;
				}
				mounted = true;
				reconciler.updateContainerSync(element, fiber, null, noop);
				reconciler.flushSyncWork();
			};
			if (!store.getState().gl && root.ready.status === "fulfilled") this.configure();
			switch (root.ready.status) {
				case "pending":
					root.ready.then(commit, logRecoverableError);
					break;
				case "rejected": throw root.ready.reason;
				default: commit();
			}
			return store;
		},
		unmount() {
			unmountComponentAtNode(canvas);
		}
	};
}
function Provider({ store, children, onCreated, rootElement }) {
	useIsomorphicLayoutEffect(() => {
		const state = store.getState();
		state.set((state) => ({ internal: {
			...state.internal,
			active: true
		} }));
		if (onCreated) onCreated(state);
		if (!store.getState().events.connected) state.events.connect == null || state.events.connect(rootElement);
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: store,
		children
	});
}
function unmountComponentAtNode(canvas, callback) {
	const root = _roots.get(canvas);
	if (!root) return;
	const claim = root.unmountClaim = Symbol("unmount");
	reconciler.updateContainer(null, root.fiber, null, () => {
		if (root.unmountClaim !== claim) return;
		reconciler.updateContainer(null, root.fiber, null, () => {
			if (root.unmountClaim !== claim) return;
			const teardown = () => {
				if (root.unmountClaim !== claim) return;
				root.unmountClaim = null;
				const state = root.store.getState();
				state.internal.active = false;
				try {
					var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
					state.events.disconnect == null || state.events.disconnect();
					(_state$gl = state.gl) == null || (_state$gl$renderLists = _state$gl.renderLists) == null || _state$gl$renderLists.dispose == null || _state$gl$renderLists.dispose();
					(_state$gl2 = state.gl) == null || _state$gl2.forceContextLoss == null || _state$gl2.forceContextLoss();
					if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
					dispose(state.scene);
				} catch (e) {}
				_roots.delete(canvas);
				if (callback) callback(canvas);
			};
			if (root.ready.status === "pending") root.ready.then(teardown, teardown);
			else teardown();
		});
	});
}
function createPortal(children, container, state) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Portal, {
		children,
		container,
		state
	});
}
function Portal({ state = {}, children, container }) {
	/** This has to be a component because it would not be able to call useThree/useStore otherwise since
	*  if this is our environment, then we are not in r3f's renderer but in react-dom, it would trigger
	*  the "R3F hooks can only be used within the Canvas component!" warning:
	*  <Canvas>
	*    {createPortal(...)} */
	const { events, size, ...rest } = state;
	const previousRoot = useStore();
	const [raycaster] = import_react.useState(() => new Raycaster());
	const [pointer] = import_react.useState(() => new Vector2());
	const inject = useMutableCallback((rootState, injectState) => {
		let viewport = void 0;
		if (injectState.camera && size) {
			const camera = injectState.camera;
			viewport = rootState.viewport.getCurrentViewport(camera, new Vector3(), size);
			if (camera !== rootState.camera) updateCamera(camera, size);
		}
		return {
			...rootState,
			...injectState,
			scene: container,
			raycaster,
			pointer,
			mouse: pointer,
			previousRoot,
			events: {
				...rootState.events,
				...injectState.events,
				...events
			},
			size: {
				...rootState.size,
				...size
			},
			viewport: {
				...rootState.viewport,
				...viewport
			},
			setEvents: (events) => injectState.set((state) => ({
				...state,
				events: {
					...state.events,
					...events
				}
			}))
		};
	});
	const usePortalStore = import_react.useMemo(() => {
		const store = createWithEqualityFn((set, get) => ({
			...rest,
			set,
			get
		}));
		const onMutate = (prev) => store.setState((state) => inject.current(prev, state));
		onMutate(previousRoot.getState());
		previousRoot.subscribe(onMutate);
		return store;
	}, [previousRoot, container]);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: reconciler.createPortal(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: usePortalStore,
		children
	}), usePortalStore, null) });
}
var globalEffects = /* @__PURE__ */ new Set();
var globalAfterEffects = /* @__PURE__ */ new Set();
var globalTailEffects = /* @__PURE__ */ new Set();
function run(effects, timestamp) {
	if (!effects.size) return;
	for (const { callback } of effects.values()) callback(timestamp);
}
function flushGlobalEffects(type, timestamp) {
	switch (type) {
		case "before": return run(globalEffects, timestamp);
		case "after": return run(globalAfterEffects, timestamp);
		case "tail": return run(globalTailEffects, timestamp);
	}
}
var subscribers;
var subscription;
function update(timestamp, state, frame) {
	let delta = state.clock.getDelta();
	if (state.frameloop === "never" && typeof timestamp === "number") {
		delta = timestamp - state.clock.elapsedTime;
		state.clock.oldTime = state.clock.elapsedTime;
		state.clock.elapsedTime = timestamp;
	}
	subscribers = state.internal.subscribers;
	for (let i = 0; i < subscribers.length; i++) {
		subscription = subscribers[i];
		subscription.ref.current(subscription.store.getState(), delta, frame);
	}
	if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera);
	state.internal.frames = Math.max(0, state.internal.frames - 1);
	return state.frameloop === "always" ? 1 : state.internal.frames;
}
var running = false;
var useFrameInProgress = false;
var repeat;
var frame;
var state;
function loop(timestamp) {
	frame = requestAnimationFrame(loop);
	running = true;
	repeat = 0;
	flushGlobalEffects("before", timestamp);
	useFrameInProgress = true;
	for (const root of _roots.values()) {
		var _state$gl$xr;
		state = root.store.getState();
		if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) repeat += update(timestamp, state);
	}
	useFrameInProgress = false;
	flushGlobalEffects("after", timestamp);
	if (repeat === 0) {
		flushGlobalEffects("tail", timestamp);
		running = false;
		return cancelAnimationFrame(frame);
	}
}
/**
* Invalidates the view, requesting a frame to be rendered. Will globally invalidate unless passed a root's state.
* @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#invalidate
*/
function invalidate(state, frames = 1) {
	var _state$gl$xr2;
	if (!state) return _roots.forEach((root) => invalidate(root.store.getState(), frames));
	if ((_state$gl$xr2 = state.gl.xr) != null && _state$gl$xr2.isPresenting || !state.internal.active || state.frameloop === "never") return;
	if (frames > 1) state.internal.frames = Math.min(60, state.internal.frames + frames);
	else if (useFrameInProgress) state.internal.frames = 2;
	else state.internal.frames = 1;
	if (!running) {
		running = true;
		requestAnimationFrame(loop);
	}
}
/**
* Advances the frameloop and runs render effects, useful for when manually rendering via `frameloop="never"`.
* @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#advance
*/
function advance(timestamp, runGlobalEffects = true, state, frame) {
	if (runGlobalEffects) flushGlobalEffects("before", timestamp);
	if (!state) for (const root of _roots.values()) update(timestamp, root.store.getState());
	else update(timestamp, state, frame);
	if (runGlobalEffects) flushGlobalEffects("after", timestamp);
}
var DOM_EVENTS = {
	onClick: ["click", false],
	onContextMenu: ["contextmenu", false],
	onDoubleClick: ["dblclick", false],
	onWheel: ["wheel", true],
	onPointerDown: ["pointerdown", true],
	onPointerUp: ["pointerup", true],
	onPointerLeave: ["pointerleave", true],
	onPointerMove: ["pointermove", true],
	onPointerCancel: ["pointercancel", true],
	onLostPointerCapture: ["lostpointercapture", true]
};
/** Default R3F event manager for web */
function createPointerEvents(store) {
	const { handlePointer } = createEvents(store);
	return {
		priority: 1,
		enabled: true,
		compute(event, state, previous) {
			state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
			state.raycaster.setFromCamera(state.pointer, state.camera);
		},
		connected: void 0,
		handlers: Object.keys(DOM_EVENTS).reduce((acc, key) => ({
			...acc,
			[key]: handlePointer(key)
		}), {}),
		update: () => {
			var _internal$lastEvent;
			const { events, internal } = store.getState();
			if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
		},
		connect: (target) => {
			const { set, events } = store.getState();
			events.disconnect == null || events.disconnect();
			set((state) => ({ events: {
				...state.events,
				connected: target
			} }));
			if (events.handlers) for (const name in events.handlers) {
				const event = events.handlers[name];
				const [eventName, passive] = DOM_EVENTS[name];
				target.addEventListener(eventName, event, { passive });
			}
		},
		disconnect: () => {
			const { set, events } = store.getState();
			if (events.connected) {
				if (events.handlers) for (const name in events.handlers) {
					const event = events.handlers[name];
					const [eventName] = DOM_EVENTS[name];
					events.connected.removeEventListener(eventName, event);
				}
				set((state) => ({ events: {
					...state.events,
					connected: void 0
				} }));
			}
		}
	};
}
//#endregion
//#region node_modules/react-use-measure/dist/index.js
function g(n, t) {
	let o;
	return (...i) => {
		window.clearTimeout(o), o = window.setTimeout(() => n(...i), t);
	};
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
	debounce: 0,
	scroll: !1,
	offsetSize: !1
}) {
	const a = o || (typeof window == "undefined" ? class {} : window.ResizeObserver);
	if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
	const [c, h] = (0, import_react.useState)({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		bottom: 0,
		right: 0,
		x: 0,
		y: 0
	}), e = (0, import_react.useRef)({
		element: null,
		scrollContainers: null,
		resizeObserver: null,
		lastBounds: c,
		orientationHandler: null
	}), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(() => (w.current = !0, () => void (w.current = !1)));
	const [z, m, s] = (0, import_react.useMemo)(() => {
		const r = () => {
			if (!e.current.element) return;
			const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
				left: y,
				top: C,
				width: H,
				height: O,
				bottom: S,
				right: x,
				x: B,
				y: R
			};
			e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
		};
		return [
			r,
			f ? g(r, f) : r,
			d ? g(r, d) : r
		];
	}, [
		h,
		i,
		d,
		f
	]);
	function v() {
		e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
	}
	function b() {
		e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, {
			capture: !0,
			passive: !0
		})), e.current.orientationHandler = () => {
			s();
		}, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
	}
	const L = (r) => {
		!r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
	};
	return X(s, !!t), W(m), (0, import_react.useEffect)(() => {
		v(), b();
	}, [
		t,
		s,
		m
	]), (0, import_react.useEffect)(() => v, []), [
		L,
		c,
		z
	];
}
function W(n) {
	(0, import_react.useEffect)(() => {
		const t = n;
		return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
	}, [n]);
}
function X(n, t) {
	(0, import_react.useEffect)(() => {
		if (t) {
			const o = n;
			return window.addEventListener("scroll", o, {
				capture: !0,
				passive: !0
			}), () => void window.removeEventListener("scroll", o, !0);
		}
	}, [n, t]);
}
function E(n) {
	const t = [];
	if (!n || n === document.body) return t;
	const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
	return [
		o,
		i,
		a
	].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
var k = [
	"x",
	"y",
	"top",
	"bottom",
	"left",
	"right",
	"width",
	"height"
];
var D = (n, t) => k.every((o) => n[o] === t[o]);
//#endregion
//#region node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
function CanvasImpl({ ref, children, fallback, resize, style, gl, events = createPointerEvents, eventSource, eventPrefix, shadows, linear, flat, legacy, orthographic, frameloop, dpr, performance, raycaster, camera, scene, onPointerMissed, onCreated, ...props }) {
	import_react.useMemo(() => extend(three_module_exports), []);
	const Bridge = useBridge();
	const [containerRef, containerRect] = j({
		scroll: true,
		debounce: {
			scroll: 50,
			resize: 0
		},
		...resize
	});
	const canvasRef = import_react.useRef(null);
	const divRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => canvasRef.current);
	const handlePointerMissed = useMutableCallback(onPointerMissed);
	const [block, setBlock] = import_react.useState(false);
	const [error, setError] = import_react.useState(false);
	if (block) throw block;
	if (error) throw error;
	const root = import_react.useRef(null);
	const [gate, waitFor] = useGate();
	const rootState = import_react.useRef(null);
	const eventTarget = () => eventSource ? isRef$1(eventSource) ? eventSource.current : eventSource : divRef.current;
	useIsomorphicLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
			if (!root.current) root.current = createRoot(canvas);
			root.current.configure({
				gl,
				scene,
				events,
				shadows,
				linear,
				flat,
				legacy,
				orthographic,
				frameloop,
				dpr,
				performance,
				raycaster,
				camera,
				size: containerRect,
				onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
				onCreated: (state) => {
					var _eventTarget;
					rootState.current = state;
					state.events.connect == null || state.events.connect((_eventTarget = eventTarget()) != null ? _eventTarget : divRef.current);
					if (eventPrefix) state.setEvents({ compute: (event, state) => {
						const x = event[eventPrefix + "X"];
						const y = event[eventPrefix + "Y"];
						state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
						state.raycaster.setFromCamera(state.pointer, state.camera);
					} });
					onCreated?.(state);
				}
			}).catch(setError);
			if (root.current.ready.status === "fulfilled") root.current.render(/*#__PURE__*/ (0, import_jsx_runtime.jsx)(Bridge, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(ErrorBoundary, {
				set: setError,
				children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(Block, { set: setBlock }),
					children: children != null ? children : null
				})
			}) }));
			else if (root.current.ready.status === "pending") waitFor(root.current.ready);
		}
	});
	import_react.useEffect(() => {
		var _rootState$current;
		const state = (_rootState$current = rootState.current) == null ? void 0 : _rootState$current.get();
		const target = eventTarget();
		if (state && target && state.events.connected !== target) state.events.connect == null || state.events.connect(target);
	});
	import_react.useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) return () => unmountComponentAtNode(canvas);
	}, []);
	return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)("div", {
		ref: divRef,
		style: {
			position: "relative",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			pointerEvents: eventSource ? "none" : "auto",
			...style
		},
		...props,
		children: [/*#__PURE__*/ (0, import_jsx_runtime.jsx)("div", {
			ref: containerRef,
			style: {
				width: "100%",
				height: "100%"
			},
			children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				style: { display: "block" },
				children: fallback
			})
		}), gate]
	});
}
/**
* A DOM canvas which accepts threejs elements as children.
* @see https://docs.pmnd.rs/react-three-fiber/api/canvas
*/
function Canvas(props) {
	return /*#__PURE__*/ (0, import_jsx_runtime.jsx)(m, { children: /*#__PURE__*/ (0, import_jsx_runtime.jsx)(CanvasImpl, { ...props }) });
}
//#endregion
//#region node_modules/three-stdlib/_polyfill/constants.js
var version$1 = /* @__PURE__ */ (() => parseInt("186".replace(/\D+/g, "")))();
//#endregion
//#region node_modules/three-stdlib/node_modules/fflate/esm/index.mjs
var require$1 = createRequire("/");
try {
	require$1("worker_threads").Worker;
} catch (e) {}
var u8 = Uint8Array;
var u16 = Uint16Array;
var u32 = Uint32Array;
var fleb = new u8([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]);
var fdeb = new u8([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]);
var clim = new u8([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]);
var freb = function(eb, start) {
	var b = new u16(31);
	for (var i = 0; i < 31; ++i) b[i] = start += 1 << eb[i - 1];
	var r = new u32(b[30]);
	for (var i = 1; i < 30; ++i) for (var j = b[i]; j < b[i + 1]; ++j) r[j] = j - b[i] << 5 | i;
	return [b, r];
};
var _a = freb(fleb, 2);
var fl = _a[0];
var revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b[0];
_b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
	var x = (i & 43690) >>> 1 | (i & 21845) << 1;
	x = (x & 52428) >>> 2 | (x & 13107) << 2;
	x = (x & 61680) >>> 4 | (x & 3855) << 4;
	rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = (function(cd, mb, r) {
	var s = cd.length;
	var i = 0;
	var l = new u16(mb);
	for (; i < s; ++i) ++l[cd[i] - 1];
	var le = new u16(mb);
	for (i = 0; i < mb; ++i) le[i] = le[i - 1] + l[i - 1] << 1;
	var co;
	if (r) {
		co = new u16(1 << mb);
		var rvb = 15 - mb;
		for (i = 0; i < s; ++i) if (cd[i]) {
			var sv = i << 4 | cd[i];
			var r_1 = mb - cd[i];
			var v = le[cd[i] - 1]++ << r_1;
			for (var m = v | (1 << r_1) - 1; v <= m; ++v) co[rev[v] >>> rvb] = sv;
		}
	} else {
		co = new u16(s);
		for (i = 0; i < s; ++i) if (cd[i]) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
	}
	return co;
});
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
var flrm = /*#__PURE__*/ hMap(flt, 9, 1);
var fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
var max = function(a) {
	var m = a[0];
	for (var i = 1; i < a.length; ++i) if (a[i] > m) m = a[i];
	return m;
};
var bits = function(d, p, m) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
	var o = p / 8 | 0;
	return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
	return (p / 8 | 0) + (p & 7 && 1);
};
var slc = function(v, s, e) {
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
	n.set(v.subarray(s, e));
	return n;
};
var inflt = function(dat, buf, st) {
	var sl = dat.length;
	if (!sl || st && !st.l && sl < 5) return buf || new u8(0);
	var noBuf = !buf || st;
	var noSt = !st || st.i;
	if (!st) st = {};
	if (!buf) buf = new u8(sl * 3);
	var cbuf = function(l) {
		var bl = buf.length;
		if (l > bl) {
			var nbuf = new u8(Math.max(bl * 2, l));
			nbuf.set(buf);
			buf = nbuf;
		}
	};
	var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
	var tbts = sl * 8;
	do {
		if (!lm) {
			st.f = final = bits(dat, pos, 1);
			var type = bits(dat, pos + 1, 3);
			pos += 3;
			if (!type) {
				var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
				if (t > sl) {
					if (noSt) throw "unexpected EOF";
					break;
				}
				if (noBuf) cbuf(bt + l);
				buf.set(dat.subarray(s, t), bt);
				st.b = bt += l, st.p = pos = t * 8;
				continue;
			} else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
			else if (type == 2) {
				var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
				var tl = hLit + bits(dat, pos + 5, 31) + 1;
				pos += 14;
				var ldt = new u8(tl);
				var clt = new u8(19);
				for (var i = 0; i < hcLen; ++i) clt[clim[i]] = bits(dat, pos + i * 3, 7);
				pos += hcLen * 3;
				var clb = max(clt), clbmsk = (1 << clb) - 1;
				var clm = hMap(clt, clb, 1);
				for (var i = 0; i < tl;) {
					var r = clm[bits(dat, pos, clbmsk)];
					pos += r & 15;
					var s = r >>> 4;
					if (s < 16) ldt[i++] = s;
					else {
						var c = 0, n = 0;
						if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
						else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;
						else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
						while (n--) ldt[i++] = c;
					}
				}
				var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
				lbt = max(lt);
				dbt = max(dt);
				lm = hMap(lt, lbt, 1);
				dm = hMap(dt, dbt, 1);
			} else throw "invalid block type";
			if (pos > tbts) {
				if (noSt) throw "unexpected EOF";
				break;
			}
		}
		if (noBuf) cbuf(bt + 131072);
		var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
		var lpos = pos;
		for (;; lpos = pos) {
			var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
			pos += c & 15;
			if (pos > tbts) {
				if (noSt) throw "unexpected EOF";
				break;
			}
			if (!c) throw "invalid length/literal";
			if (sym < 256) buf[bt++] = sym;
			else if (sym == 256) {
				lpos = pos, lm = null;
				break;
			} else {
				var add = sym - 254;
				if (sym > 264) {
					var i = sym - 257, b = fleb[i];
					add = bits(dat, pos, (1 << b) - 1) + fl[i];
					pos += b;
				}
				var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
				if (!d) throw "invalid distance";
				pos += d & 15;
				var dt = fd[dsym];
				if (dsym > 3) {
					var b = fdeb[dsym];
					dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
				}
				if (pos > tbts) {
					if (noSt) throw "unexpected EOF";
					break;
				}
				if (noBuf) cbuf(bt + 131072);
				var end = bt + add;
				for (; bt < end; bt += 4) {
					buf[bt] = buf[bt - dt];
					buf[bt + 1] = buf[bt + 1 - dt];
					buf[bt + 2] = buf[bt + 2 - dt];
					buf[bt + 3] = buf[bt + 3 - dt];
				}
				bt = end;
			}
		}
		st.l = lm, st.p = lpos, st.b = bt;
		if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
	} while (!final);
	return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /*#__PURE__*/ new u8(0);
var zlv = function(d) {
	if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw "invalid zlib data";
	if (d[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
/**
* Expands Zlib data
* @param data The data to decompress
* @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
* @returns The decompressed version of the data
*/
function unzlibSync(data, out) {
	return inflt((zlv(data), data.subarray(2, -4)), out);
}
var td = typeof TextDecoder != "undefined" && /*#__PURE__*/ new TextDecoder();
try {
	td.decode(et, { stream: true });
} catch (e) {}
//#endregion
//#region node_modules/three-stdlib/objects/GroundProjectedEnv.js
var isCubeTexture = (def) => def && def.isCubeTexture;
var GroundProjectedEnv = class extends Mesh {
	constructor(texture, options) {
		var _a, _b;
		const isCubeMap = isCubeTexture(texture);
		const cubeSize = ((_b = isCubeMap ? (_a = texture.image[0]) == null ? void 0 : _a.width : texture.image.width) != null ? _b : 1024) / 4;
		const _lodMax = Math.floor(Math.log2(cubeSize));
		const _cubeSize = Math.pow(2, _lodMax);
		const width = 3 * Math.max(_cubeSize, 112);
		const height = 4 * _cubeSize;
		const defines = [
			isCubeMap ? "#define ENVMAP_TYPE_CUBE" : "",
			`#define CUBEUV_TEXEL_WIDTH ${1 / width}`,
			`#define CUBEUV_TEXEL_HEIGHT ${1 / height}`,
			`#define CUBEUV_MAX_MIP ${_lodMax}.0`
		];
		const vertexShader = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `;
		const fragmentShader = defines.join("\n") + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${version$1 >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `;
		const uniforms = {
			map: { value: texture },
			height: { value: (options == null ? void 0 : options.height) || 15 },
			radius: { value: (options == null ? void 0 : options.radius) || 100 }
		};
		const geometry = new IcosahedronGeometry(1, 16);
		const material = new ShaderMaterial({
			uniforms,
			fragmentShader,
			vertexShader,
			side: 2
		});
		super(geometry, material);
	}
	set radius(radius) {
		this.material.uniforms.radius.value = radius;
	}
	get radius() {
		return this.material.uniforms.radius.value;
	}
	set height(height) {
		this.material.uniforms.height.value = height;
	}
	get height() {
		return this.material.uniforms.height.value;
	}
};
//#endregion
//#region node_modules/three-stdlib/controls/EventDispatcher.js
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
	__defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var EventDispatcher = class {
	constructor() {
		__publicField$2(this, "_listeners");
	}
	/**
	* Adds a listener to an event type.
	* @param type The type of event to listen to.
	* @param listener The function that gets called when the event is fired.
	*/
	addEventListener(type, listener) {
		if (this._listeners === void 0) this._listeners = {};
		const listeners = this._listeners;
		if (listeners[type] === void 0) listeners[type] = [];
		if (listeners[type].indexOf(listener) === -1) listeners[type].push(listener);
	}
	/**
	* Checks if listener is added to an event type.
	* @param type The type of event to listen to.
	* @param listener The function that gets called when the event is fired.
	*/
	hasEventListener(type, listener) {
		if (this._listeners === void 0) return false;
		const listeners = this._listeners;
		return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
	}
	/**
	* Removes a listener from an event type.
	* @param type The type of the listener that gets removed.
	* @param listener The listener function that gets removed.
	*/
	removeEventListener(type, listener) {
		if (this._listeners === void 0) return;
		const listenerArray = this._listeners[type];
		if (listenerArray !== void 0) {
			const index = listenerArray.indexOf(listener);
			if (index !== -1) listenerArray.splice(index, 1);
		}
	}
	/**
	* Fire an event type.
	* @param event The event that gets fired.
	*/
	dispatchEvent(event) {
		if (this._listeners === void 0) return;
		const listenerArray = this._listeners[event.type];
		if (listenerArray !== void 0) {
			event.target = this;
			const array = listenerArray.slice(0);
			for (let i = 0, l = array.length; i < l; i++) array[i].call(this, event);
			event.target = null;
		}
	}
};
//#endregion
//#region node_modules/three-stdlib/controls/TransformControls.js
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
	__defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var TransformControls$1 = class extends Object3D {
	constructor(camera, domElement) {
		super();
		__publicField$1(this, "isTransformControls", true);
		__publicField$1(this, "visible", false);
		__publicField$1(this, "domElement");
		__publicField$1(this, "raycaster", new Raycaster());
		__publicField$1(this, "gizmo");
		__publicField$1(this, "plane");
		__publicField$1(this, "tempVector", new Vector3());
		__publicField$1(this, "tempVector2", new Vector3());
		__publicField$1(this, "tempQuaternion", new Quaternion());
		__publicField$1(this, "unit", {
			X: new Vector3(1, 0, 0),
			Y: new Vector3(0, 1, 0),
			Z: new Vector3(0, 0, 1)
		});
		__publicField$1(this, "pointStart", new Vector3());
		__publicField$1(this, "pointEnd", new Vector3());
		__publicField$1(this, "offset", new Vector3());
		__publicField$1(this, "rotationAxis", new Vector3());
		__publicField$1(this, "startNorm", new Vector3());
		__publicField$1(this, "endNorm", new Vector3());
		__publicField$1(this, "rotationAngle", 0);
		__publicField$1(this, "cameraPosition", new Vector3());
		__publicField$1(this, "cameraQuaternion", new Quaternion());
		__publicField$1(this, "cameraScale", new Vector3());
		__publicField$1(this, "parentPosition", new Vector3());
		__publicField$1(this, "parentQuaternion", new Quaternion());
		__publicField$1(this, "parentQuaternionInv", new Quaternion());
		__publicField$1(this, "parentScale", new Vector3());
		__publicField$1(this, "worldPositionStart", new Vector3());
		__publicField$1(this, "worldQuaternionStart", new Quaternion());
		__publicField$1(this, "worldScaleStart", new Vector3());
		__publicField$1(this, "worldPosition", new Vector3());
		__publicField$1(this, "worldQuaternion", new Quaternion());
		__publicField$1(this, "worldQuaternionInv", new Quaternion());
		__publicField$1(this, "worldScale", new Vector3());
		__publicField$1(this, "eye", new Vector3());
		__publicField$1(this, "positionStart", new Vector3());
		__publicField$1(this, "quaternionStart", new Quaternion());
		__publicField$1(this, "scaleStart", new Vector3());
		__publicField$1(this, "camera");
		__publicField$1(this, "object");
		__publicField$1(this, "enabled", true);
		__publicField$1(this, "axis", null);
		__publicField$1(this, "mode", "translate");
		__publicField$1(this, "translationSnap", null);
		__publicField$1(this, "rotationSnap", null);
		__publicField$1(this, "scaleSnap", null);
		__publicField$1(this, "space", "world");
		__publicField$1(this, "size", 1);
		__publicField$1(this, "dragging", false);
		__publicField$1(this, "showX", true);
		__publicField$1(this, "showY", true);
		__publicField$1(this, "showZ", true);
		__publicField$1(this, "changeEvent", { type: "change" });
		__publicField$1(this, "mouseDownEvent", {
			type: "mouseDown",
			mode: this.mode
		});
		__publicField$1(this, "mouseUpEvent", {
			type: "mouseUp",
			mode: this.mode
		});
		__publicField$1(this, "objectChangeEvent", { type: "objectChange" });
		__publicField$1(this, "intersectObjectWithRay", (object, raycaster, includeInvisible) => {
			const allIntersections = raycaster.intersectObject(object, true);
			for (let i = 0; i < allIntersections.length; i++) if (allIntersections[i].object.visible || includeInvisible) return allIntersections[i];
			return false;
		});
		__publicField$1(this, "attach", (object) => {
			this.object = object;
			this.visible = true;
			return this;
		});
		__publicField$1(this, "detach", () => {
			this.object = void 0;
			this.visible = false;
			this.axis = null;
			return this;
		});
		__publicField$1(this, "reset", () => {
			if (!this.enabled) return this;
			if (this.dragging) {
				if (this.object !== void 0) {
					this.object.position.copy(this.positionStart);
					this.object.quaternion.copy(this.quaternionStart);
					this.object.scale.copy(this.scaleStart);
					this.dispatchEvent(this.changeEvent);
					this.dispatchEvent(this.objectChangeEvent);
					this.pointStart.copy(this.pointEnd);
				}
			}
			return this;
		});
		__publicField$1(this, "updateMatrixWorld", () => {
			if (this.object !== void 0) {
				this.object.updateMatrixWorld();
				if (this.object.parent === null) console.error("TransformControls: The attached 3D object must be a part of the scene graph.");
				else this.object.parent.matrixWorld.decompose(this.parentPosition, this.parentQuaternion, this.parentScale);
				this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this.worldScale);
				this.parentQuaternionInv.copy(this.parentQuaternion).invert();
				this.worldQuaternionInv.copy(this.worldQuaternion).invert();
			}
			this.camera.updateMatrixWorld();
			this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale);
			this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize();
			super.updateMatrixWorld();
		});
		__publicField$1(this, "pointerHover", (pointer) => {
			if (this.object === void 0 || this.dragging === true) return;
			this.raycaster.setFromCamera(pointer, this.camera);
			const intersect = this.intersectObjectWithRay(this.gizmo.picker[this.mode], this.raycaster);
			if (intersect) this.axis = intersect.object.name;
			else this.axis = null;
		});
		__publicField$1(this, "pointerDown", (pointer) => {
			if (this.object === void 0 || this.dragging === true || pointer.button !== 0) return;
			if (this.axis !== null) {
				this.raycaster.setFromCamera(pointer, this.camera);
				const planeIntersect = this.intersectObjectWithRay(this.plane, this.raycaster, true);
				if (planeIntersect) {
					let space = this.space;
					if (this.mode === "scale") space = "local";
					else if (this.axis === "E" || this.axis === "XYZE" || this.axis === "XYZ") space = "world";
					if (space === "local" && this.mode === "rotate") {
						const snap = this.rotationSnap;
						if (this.axis === "X" && snap) this.object.rotation.x = Math.round(this.object.rotation.x / snap) * snap;
						if (this.axis === "Y" && snap) this.object.rotation.y = Math.round(this.object.rotation.y / snap) * snap;
						if (this.axis === "Z" && snap) this.object.rotation.z = Math.round(this.object.rotation.z / snap) * snap;
					}
					this.object.updateMatrixWorld();
					if (this.object.parent) this.object.parent.updateMatrixWorld();
					this.positionStart.copy(this.object.position);
					this.quaternionStart.copy(this.object.quaternion);
					this.scaleStart.copy(this.object.scale);
					this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart);
					this.pointStart.copy(planeIntersect.point).sub(this.worldPositionStart);
				}
				this.dragging = true;
				this.mouseDownEvent.mode = this.mode;
				this.dispatchEvent(this.mouseDownEvent);
			}
		});
		__publicField$1(this, "pointerMove", (pointer) => {
			const axis = this.axis;
			const mode = this.mode;
			const object = this.object;
			let space = this.space;
			if (mode === "scale") space = "local";
			else if (axis === "E" || axis === "XYZE" || axis === "XYZ") space = "world";
			if (object === void 0 || axis === null || this.dragging === false || pointer.button !== -1) return;
			this.raycaster.setFromCamera(pointer, this.camera);
			const planeIntersect = this.intersectObjectWithRay(this.plane, this.raycaster, true);
			if (!planeIntersect) return;
			this.pointEnd.copy(planeIntersect.point).sub(this.worldPositionStart);
			if (mode === "translate") {
				this.offset.copy(this.pointEnd).sub(this.pointStart);
				if (space === "local" && axis !== "XYZ") this.offset.applyQuaternion(this.worldQuaternionInv);
				if (axis.indexOf("X") === -1) this.offset.x = 0;
				if (axis.indexOf("Y") === -1) this.offset.y = 0;
				if (axis.indexOf("Z") === -1) this.offset.z = 0;
				if (space === "local" && axis !== "XYZ") this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale);
				else this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale);
				object.position.copy(this.offset).add(this.positionStart);
				if (this.translationSnap) {
					if (space === "local") {
						object.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert());
						if (axis.search("X") !== -1) object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
						if (axis.search("Y") !== -1) object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
						if (axis.search("Z") !== -1) object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
						object.position.applyQuaternion(this.quaternionStart);
					}
					if (space === "world") {
						if (object.parent) object.position.add(this.tempVector.setFromMatrixPosition(object.parent.matrixWorld));
						if (axis.search("X") !== -1) object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
						if (axis.search("Y") !== -1) object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
						if (axis.search("Z") !== -1) object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
						if (object.parent) object.position.sub(this.tempVector.setFromMatrixPosition(object.parent.matrixWorld));
					}
				}
			} else if (mode === "scale") {
				if (axis.search("XYZ") !== -1) {
					let d = this.pointEnd.length() / this.pointStart.length();
					if (this.pointEnd.dot(this.pointStart) < 0) d *= -1;
					this.tempVector2.set(d, d, d);
				} else {
					this.tempVector.copy(this.pointStart);
					this.tempVector2.copy(this.pointEnd);
					this.tempVector.applyQuaternion(this.worldQuaternionInv);
					this.tempVector2.applyQuaternion(this.worldQuaternionInv);
					this.tempVector2.divide(this.tempVector);
					if (axis.search("X") === -1) this.tempVector2.x = 1;
					if (axis.search("Y") === -1) this.tempVector2.y = 1;
					if (axis.search("Z") === -1) this.tempVector2.z = 1;
				}
				object.scale.copy(this.scaleStart).multiply(this.tempVector2);
				if (this.scaleSnap && this.object) {
					if (axis.search("X") !== -1) this.object.scale.x = Math.round(object.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
					if (axis.search("Y") !== -1) object.scale.y = Math.round(object.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
					if (axis.search("Z") !== -1) object.scale.z = Math.round(object.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
				}
			} else if (mode === "rotate") {
				this.offset.copy(this.pointEnd).sub(this.pointStart);
				const ROTATION_SPEED = 20 / this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));
				if (axis === "E") {
					this.rotationAxis.copy(this.eye);
					this.rotationAngle = this.pointEnd.angleTo(this.pointStart);
					this.startNorm.copy(this.pointStart).normalize();
					this.endNorm.copy(this.pointEnd).normalize();
					this.rotationAngle *= this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1;
				} else if (axis === "XYZE") {
					this.rotationAxis.copy(this.offset).cross(this.eye).normalize();
					this.rotationAngle = this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye)) * ROTATION_SPEED;
				} else if (axis === "X" || axis === "Y" || axis === "Z") {
					this.rotationAxis.copy(this.unit[axis]);
					this.tempVector.copy(this.unit[axis]);
					if (space === "local") this.tempVector.applyQuaternion(this.worldQuaternion);
					this.rotationAngle = this.offset.dot(this.tempVector.cross(this.eye).normalize()) * ROTATION_SPEED;
				}
				if (this.rotationSnap) this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap;
				if (space === "local" && axis !== "E" && axis !== "XYZE") {
					object.quaternion.copy(this.quaternionStart);
					object.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize();
				} else {
					this.rotationAxis.applyQuaternion(this.parentQuaternionInv);
					object.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle));
					object.quaternion.multiply(this.quaternionStart).normalize();
				}
			}
			this.dispatchEvent(this.changeEvent);
			this.dispatchEvent(this.objectChangeEvent);
		});
		__publicField$1(this, "pointerUp", (pointer) => {
			if (pointer.button !== 0) return;
			if (this.dragging && this.axis !== null) {
				this.mouseUpEvent.mode = this.mode;
				this.dispatchEvent(this.mouseUpEvent);
			}
			this.dragging = false;
			this.axis = null;
		});
		__publicField$1(this, "getPointer", (event) => {
			var _a;
			if (this.domElement && ((_a = this.domElement.ownerDocument) == null ? void 0 : _a.pointerLockElement)) return {
				x: 0,
				y: 0,
				button: event.button
			};
			else {
				const pointer = event.changedTouches ? event.changedTouches[0] : event;
				const rect = this.domElement.getBoundingClientRect();
				return {
					x: (pointer.clientX - rect.left) / rect.width * 2 - 1,
					y: -(pointer.clientY - rect.top) / rect.height * 2 + 1,
					button: event.button
				};
			}
		});
		__publicField$1(this, "onPointerHover", (event) => {
			if (!this.enabled) return;
			switch (event.pointerType) {
				case "mouse":
				case "pen": this.pointerHover(this.getPointer(event));
			}
		});
		__publicField$1(this, "onPointerDown", (event) => {
			if (!this.enabled || !this.domElement) return;
			this.domElement.style.touchAction = "none";
			this.domElement.ownerDocument.addEventListener("pointermove", this.onPointerMove);
			this.pointerHover(this.getPointer(event));
			this.pointerDown(this.getPointer(event));
		});
		__publicField$1(this, "onPointerMove", (event) => {
			if (!this.enabled) return;
			this.pointerMove(this.getPointer(event));
		});
		__publicField$1(this, "onPointerUp", (event) => {
			if (!this.enabled || !this.domElement) return;
			this.domElement.style.touchAction = "";
			this.domElement.ownerDocument.removeEventListener("pointermove", this.onPointerMove);
			this.pointerUp(this.getPointer(event));
		});
		__publicField$1(this, "getMode", () => this.mode);
		__publicField$1(this, "setMode", (mode) => {
			this.mode = mode;
		});
		__publicField$1(this, "setTranslationSnap", (translationSnap) => {
			this.translationSnap = translationSnap;
		});
		__publicField$1(this, "setRotationSnap", (rotationSnap) => {
			this.rotationSnap = rotationSnap;
		});
		__publicField$1(this, "setScaleSnap", (scaleSnap) => {
			this.scaleSnap = scaleSnap;
		});
		__publicField$1(this, "setSize", (size) => {
			this.size = size;
		});
		__publicField$1(this, "setSpace", (space) => {
			this.space = space;
		});
		__publicField$1(this, "update", () => {
			console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
		});
		__publicField$1(this, "connect", (domElement) => {
			if (domElement === document) console.error("THREE.OrbitControls: \"document\" should not be used as the target \"domElement\". Please use \"renderer.domElement\" instead.");
			this.domElement = domElement;
			this.domElement.addEventListener("pointerdown", this.onPointerDown);
			this.domElement.addEventListener("pointermove", this.onPointerHover);
			this.domElement.ownerDocument.addEventListener("pointerup", this.onPointerUp);
		});
		__publicField$1(this, "dispose", () => {
			var _a, _b, _c, _d, _e, _f;
			(_a = this.domElement) == null || _a.removeEventListener("pointerdown", this.onPointerDown);
			(_b = this.domElement) == null || _b.removeEventListener("pointermove", this.onPointerHover);
			(_d = (_c = this.domElement) == null ? void 0 : _c.ownerDocument) == null || _d.removeEventListener("pointermove", this.onPointerMove);
			(_f = (_e = this.domElement) == null ? void 0 : _e.ownerDocument) == null || _f.removeEventListener("pointerup", this.onPointerUp);
			this.traverse((child) => {
				const mesh = child;
				if (mesh.geometry) mesh.geometry.dispose();
				if (mesh.material) mesh.material.dispose();
			});
		});
		this.domElement = domElement;
		this.camera = camera;
		this.gizmo = new TransformControlsGizmo();
		this.add(this.gizmo);
		this.plane = new TransformControlsPlane();
		this.add(this.plane);
		const defineProperty = (propName, defaultValue) => {
			let propValue = defaultValue;
			Object.defineProperty(this, propName, {
				get: function() {
					return propValue !== void 0 ? propValue : defaultValue;
				},
				set: function(value) {
					if (propValue !== value) {
						propValue = value;
						this.plane[propName] = value;
						this.gizmo[propName] = value;
						this.dispatchEvent({
							type: propName + "-changed",
							value
						});
						this.dispatchEvent(this.changeEvent);
					}
				}
			});
			this[propName] = defaultValue;
			this.plane[propName] = defaultValue;
			this.gizmo[propName] = defaultValue;
		};
		defineProperty("camera", this.camera);
		defineProperty("object", this.object);
		defineProperty("enabled", this.enabled);
		defineProperty("axis", this.axis);
		defineProperty("mode", this.mode);
		defineProperty("translationSnap", this.translationSnap);
		defineProperty("rotationSnap", this.rotationSnap);
		defineProperty("scaleSnap", this.scaleSnap);
		defineProperty("space", this.space);
		defineProperty("size", this.size);
		defineProperty("dragging", this.dragging);
		defineProperty("showX", this.showX);
		defineProperty("showY", this.showY);
		defineProperty("showZ", this.showZ);
		defineProperty("worldPosition", this.worldPosition);
		defineProperty("worldPositionStart", this.worldPositionStart);
		defineProperty("worldQuaternion", this.worldQuaternion);
		defineProperty("worldQuaternionStart", this.worldQuaternionStart);
		defineProperty("cameraPosition", this.cameraPosition);
		defineProperty("cameraQuaternion", this.cameraQuaternion);
		defineProperty("pointStart", this.pointStart);
		defineProperty("pointEnd", this.pointEnd);
		defineProperty("rotationAxis", this.rotationAxis);
		defineProperty("rotationAngle", this.rotationAngle);
		defineProperty("eye", this.eye);
		if (domElement !== void 0) this.connect(domElement);
	}
};
var TransformControlsGizmo = class extends Object3D {
	constructor() {
		super();
		__publicField$1(this, "isTransformControlsGizmo", true);
		__publicField$1(this, "type", "TransformControlsGizmo");
		__publicField$1(this, "tempVector", new Vector3(0, 0, 0));
		__publicField$1(this, "tempEuler", new Euler());
		__publicField$1(this, "alignVector", new Vector3(0, 1, 0));
		__publicField$1(this, "zeroVector", new Vector3(0, 0, 0));
		__publicField$1(this, "lookAtMatrix", new Matrix4());
		__publicField$1(this, "tempQuaternion", new Quaternion());
		__publicField$1(this, "tempQuaternion2", new Quaternion());
		__publicField$1(this, "identityQuaternion", new Quaternion());
		__publicField$1(this, "unitX", new Vector3(1, 0, 0));
		__publicField$1(this, "unitY", new Vector3(0, 1, 0));
		__publicField$1(this, "unitZ", new Vector3(0, 0, 1));
		__publicField$1(this, "gizmo");
		__publicField$1(this, "picker");
		__publicField$1(this, "helper");
		__publicField$1(this, "rotationAxis", new Vector3());
		__publicField$1(this, "cameraPosition", new Vector3());
		__publicField$1(this, "worldPositionStart", new Vector3());
		__publicField$1(this, "worldQuaternionStart", new Quaternion());
		__publicField$1(this, "worldPosition", new Vector3());
		__publicField$1(this, "worldQuaternion", new Quaternion());
		__publicField$1(this, "eye", new Vector3());
		__publicField$1(this, "camera", null);
		__publicField$1(this, "enabled", true);
		__publicField$1(this, "axis", null);
		__publicField$1(this, "mode", "translate");
		__publicField$1(this, "space", "world");
		__publicField$1(this, "size", 1);
		__publicField$1(this, "dragging", false);
		__publicField$1(this, "showX", true);
		__publicField$1(this, "showY", true);
		__publicField$1(this, "showZ", true);
		__publicField$1(this, "updateMatrixWorld", () => {
			let space = this.space;
			if (this.mode === "scale") space = "local";
			const quaternion = space === "local" ? this.worldQuaternion : this.identityQuaternion;
			this.gizmo["translate"].visible = this.mode === "translate";
			this.gizmo["rotate"].visible = this.mode === "rotate";
			this.gizmo["scale"].visible = this.mode === "scale";
			this.helper["translate"].visible = this.mode === "translate";
			this.helper["rotate"].visible = this.mode === "rotate";
			this.helper["scale"].visible = this.mode === "scale";
			let handles = [];
			handles = handles.concat(this.picker[this.mode].children);
			handles = handles.concat(this.gizmo[this.mode].children);
			handles = handles.concat(this.helper[this.mode].children);
			for (let i = 0; i < handles.length; i++) {
				const handle = handles[i];
				handle.visible = true;
				handle.rotation.set(0, 0, 0);
				handle.position.copy(this.worldPosition);
				let factor;
				if (this.camera.isOrthographicCamera) factor = (this.camera.top - this.camera.bottom) / this.camera.zoom;
				else factor = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7);
				handle.scale.set(1, 1, 1).multiplyScalar(factor * this.size / 7);
				if (handle.tag === "helper") {
					handle.visible = false;
					if (handle.name === "AXIS") {
						handle.position.copy(this.worldPositionStart);
						handle.visible = !!this.axis;
						if (this.axis === "X") {
							this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0));
							handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);
							if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) > .9) handle.visible = false;
						}
						if (this.axis === "Y") {
							this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2));
							handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);
							if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) > .9) handle.visible = false;
						}
						if (this.axis === "Z") {
							this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0));
							handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);
							if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) > .9) handle.visible = false;
						}
						if (this.axis === "XYZE") {
							this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0));
							this.alignVector.copy(this.rotationAxis);
							handle.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY));
							handle.quaternion.multiply(this.tempQuaternion);
							handle.visible = this.dragging;
						}
						if (this.axis === "E") handle.visible = false;
					} else if (handle.name === "START") {
						handle.position.copy(this.worldPositionStart);
						handle.visible = this.dragging;
					} else if (handle.name === "END") {
						handle.position.copy(this.worldPosition);
						handle.visible = this.dragging;
					} else if (handle.name === "DELTA") {
						handle.position.copy(this.worldPositionStart);
						handle.quaternion.copy(this.worldQuaternionStart);
						this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1);
						this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert());
						handle.scale.copy(this.tempVector);
						handle.visible = this.dragging;
					} else {
						handle.quaternion.copy(quaternion);
						if (this.dragging) handle.position.copy(this.worldPositionStart);
						else handle.position.copy(this.worldPosition);
						if (this.axis) handle.visible = this.axis.search(handle.name) !== -1;
					}
					continue;
				}
				handle.quaternion.copy(quaternion);
				if (this.mode === "translate" || this.mode === "scale") {
					const AXIS_HIDE_TRESHOLD = .99;
					const PLANE_HIDE_TRESHOLD = .2;
					const AXIS_FLIP_TRESHOLD = 0;
					if (handle.name === "X" || handle.name === "XYZX") {
						if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
							handle.scale.set(1e-10, 1e-10, 1e-10);
							handle.visible = false;
						}
					}
					if (handle.name === "Y" || handle.name === "XYZY") {
						if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
							handle.scale.set(1e-10, 1e-10, 1e-10);
							handle.visible = false;
						}
					}
					if (handle.name === "Z" || handle.name === "XYZZ") {
						if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
							handle.scale.set(1e-10, 1e-10, 1e-10);
							handle.visible = false;
						}
					}
					if (handle.name === "XY") {
						if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
							handle.scale.set(1e-10, 1e-10, 1e-10);
							handle.visible = false;
						}
					}
					if (handle.name === "YZ") {
						if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
							handle.scale.set(1e-10, 1e-10, 1e-10);
							handle.visible = false;
						}
					}
					if (handle.name === "XZ") {
						if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
							handle.scale.set(1e-10, 1e-10, 1e-10);
							handle.visible = false;
						}
					}
					if (handle.name.search("X") !== -1) {
						if (this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
							if (handle.tag === "fwd") handle.visible = false;
							else handle.scale.x *= -1;
						} else if (handle.tag === "bwd") handle.visible = false;
					}
					if (handle.name.search("Y") !== -1) {
						if (this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
							if (handle.tag === "fwd") handle.visible = false;
							else handle.scale.y *= -1;
						} else if (handle.tag === "bwd") handle.visible = false;
					}
					if (handle.name.search("Z") !== -1) {
						if (this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
							if (handle.tag === "fwd") handle.visible = false;
							else handle.scale.z *= -1;
						} else if (handle.tag === "bwd") handle.visible = false;
					}
				} else if (this.mode === "rotate") {
					this.tempQuaternion2.copy(quaternion);
					this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(quaternion).invert());
					if (handle.name.search("E") !== -1) handle.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY));
					if (handle.name === "X") {
						this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z));
						this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
						handle.quaternion.copy(this.tempQuaternion);
					}
					if (handle.name === "Y") {
						this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(this.alignVector.x, this.alignVector.z));
						this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
						handle.quaternion.copy(this.tempQuaternion);
					}
					if (handle.name === "Z") {
						this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(this.alignVector.y, this.alignVector.x));
						this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
						handle.quaternion.copy(this.tempQuaternion);
					}
				}
				handle.visible = handle.visible && (handle.name.indexOf("X") === -1 || this.showX);
				handle.visible = handle.visible && (handle.name.indexOf("Y") === -1 || this.showY);
				handle.visible = handle.visible && (handle.name.indexOf("Z") === -1 || this.showZ);
				handle.visible = handle.visible && (handle.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ);
				handle.material.tempOpacity = handle.material.tempOpacity || handle.material.opacity;
				handle.material.tempColor = handle.material.tempColor || handle.material.color.clone();
				handle.material.color.copy(handle.material.tempColor);
				handle.material.opacity = handle.material.tempOpacity;
				if (!this.enabled) {
					handle.material.opacity *= .5;
					handle.material.color.lerp(new Color(1, 1, 1), .5);
				} else if (this.axis) {
					if (handle.name === this.axis) {
						handle.material.opacity = 1;
						handle.material.color.lerp(new Color(1, 1, 1), .5);
					} else if (this.axis.split("").some(function(a) {
						return handle.name === a;
					})) {
						handle.material.opacity = 1;
						handle.material.color.lerp(new Color(1, 1, 1), .5);
					} else {
						handle.material.opacity *= .25;
						handle.material.color.lerp(new Color(1, 1, 1), .5);
					}
				}
			}
			super.updateMatrixWorld();
		});
		const gizmoMaterial = new MeshBasicMaterial({
			depthTest: false,
			depthWrite: false,
			transparent: true,
			side: 2,
			fog: false,
			toneMapped: false
		});
		const gizmoLineMaterial = new LineBasicMaterial({
			depthTest: false,
			depthWrite: false,
			transparent: true,
			linewidth: 1,
			fog: false,
			toneMapped: false
		});
		const matInvisible = gizmoMaterial.clone();
		matInvisible.opacity = .15;
		const matHelper = gizmoMaterial.clone();
		matHelper.opacity = .33;
		const matRed = gizmoMaterial.clone();
		matRed.color.set(16711680);
		const matGreen = gizmoMaterial.clone();
		matGreen.color.set(65280);
		const matBlue = gizmoMaterial.clone();
		matBlue.color.set(255);
		const matWhiteTransparent = gizmoMaterial.clone();
		matWhiteTransparent.opacity = .25;
		const matYellowTransparent = matWhiteTransparent.clone();
		matYellowTransparent.color.set(16776960);
		const matCyanTransparent = matWhiteTransparent.clone();
		matCyanTransparent.color.set(65535);
		const matMagentaTransparent = matWhiteTransparent.clone();
		matMagentaTransparent.color.set(16711935);
		gizmoMaterial.clone().color.set(16776960);
		const matLineRed = gizmoLineMaterial.clone();
		matLineRed.color.set(16711680);
		const matLineGreen = gizmoLineMaterial.clone();
		matLineGreen.color.set(65280);
		const matLineBlue = gizmoLineMaterial.clone();
		matLineBlue.color.set(255);
		const matLineCyan = gizmoLineMaterial.clone();
		matLineCyan.color.set(65535);
		const matLineMagenta = gizmoLineMaterial.clone();
		matLineMagenta.color.set(16711935);
		const matLineYellow = gizmoLineMaterial.clone();
		matLineYellow.color.set(16776960);
		const matLineGray = gizmoLineMaterial.clone();
		matLineGray.color.set(7895160);
		const matLineYellowTransparent = matLineYellow.clone();
		matLineYellowTransparent.opacity = .25;
		const arrowGeometry = new CylinderGeometry(0, .05, .2, 12, 1, false);
		const scaleHandleGeometry = new BoxGeometry(.125, .125, .125);
		const lineGeometry = new BufferGeometry();
		lineGeometry.setAttribute("position", new Float32BufferAttribute([
			0,
			0,
			0,
			1,
			0,
			0
		], 3));
		const CircleGeometry = (radius, arc) => {
			const geometry = new BufferGeometry();
			const vertices = [];
			for (let i = 0; i <= 64 * arc; ++i) vertices.push(0, Math.cos(i / 32 * Math.PI) * radius, Math.sin(i / 32 * Math.PI) * radius);
			geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
			return geometry;
		};
		const TranslateHelperGeometry = () => {
			const geometry = new BufferGeometry();
			geometry.setAttribute("position", new Float32BufferAttribute([
				0,
				0,
				0,
				1,
				1,
				1
			], 3));
			return geometry;
		};
		const gizmoTranslate = {
			X: [
				[
					new Mesh(arrowGeometry, matRed),
					[
						1,
						0,
						0
					],
					[
						0,
						0,
						-Math.PI / 2
					],
					null,
					"fwd"
				],
				[
					new Mesh(arrowGeometry, matRed),
					[
						1,
						0,
						0
					],
					[
						0,
						0,
						Math.PI / 2
					],
					null,
					"bwd"
				],
				[new Line(lineGeometry, matLineRed)]
			],
			Y: [
				[
					new Mesh(arrowGeometry, matGreen),
					[
						0,
						1,
						0
					],
					null,
					null,
					"fwd"
				],
				[
					new Mesh(arrowGeometry, matGreen),
					[
						0,
						1,
						0
					],
					[
						Math.PI,
						0,
						0
					],
					null,
					"bwd"
				],
				[
					new Line(lineGeometry, matLineGreen),
					null,
					[
						0,
						0,
						Math.PI / 2
					]
				]
			],
			Z: [
				[
					new Mesh(arrowGeometry, matBlue),
					[
						0,
						0,
						1
					],
					[
						Math.PI / 2,
						0,
						0
					],
					null,
					"fwd"
				],
				[
					new Mesh(arrowGeometry, matBlue),
					[
						0,
						0,
						1
					],
					[
						-Math.PI / 2,
						0,
						0
					],
					null,
					"bwd"
				],
				[
					new Line(lineGeometry, matLineBlue),
					null,
					[
						0,
						-Math.PI / 2,
						0
					]
				]
			],
			XYZ: [[
				new Mesh(new OctahedronGeometry(.1, 0), matWhiteTransparent.clone()),
				[
					0,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]],
			XY: [
				[new Mesh(new PlaneGeometry(.295, .295), matYellowTransparent.clone()), [
					.15,
					.15,
					0
				]],
				[
					new Line(lineGeometry, matLineYellow),
					[
						.18,
						.3,
						0
					],
					null,
					[
						.125,
						1,
						1
					]
				],
				[
					new Line(lineGeometry, matLineYellow),
					[
						.3,
						.18,
						0
					],
					[
						0,
						0,
						Math.PI / 2
					],
					[
						.125,
						1,
						1
					]
				]
			],
			YZ: [
				[
					new Mesh(new PlaneGeometry(.295, .295), matCyanTransparent.clone()),
					[
						0,
						.15,
						.15
					],
					[
						0,
						Math.PI / 2,
						0
					]
				],
				[
					new Line(lineGeometry, matLineCyan),
					[
						0,
						.18,
						.3
					],
					[
						0,
						0,
						Math.PI / 2
					],
					[
						.125,
						1,
						1
					]
				],
				[
					new Line(lineGeometry, matLineCyan),
					[
						0,
						.3,
						.18
					],
					[
						0,
						-Math.PI / 2,
						0
					],
					[
						.125,
						1,
						1
					]
				]
			],
			XZ: [
				[
					new Mesh(new PlaneGeometry(.295, .295), matMagentaTransparent.clone()),
					[
						.15,
						0,
						.15
					],
					[
						-Math.PI / 2,
						0,
						0
					]
				],
				[
					new Line(lineGeometry, matLineMagenta),
					[
						.18,
						0,
						.3
					],
					null,
					[
						.125,
						1,
						1
					]
				],
				[
					new Line(lineGeometry, matLineMagenta),
					[
						.3,
						0,
						.18
					],
					[
						0,
						-Math.PI / 2,
						0
					],
					[
						.125,
						1,
						1
					]
				]
			]
		};
		const pickerTranslate = {
			X: [[
				new Mesh(new CylinderGeometry(.2, 0, 1, 4, 1, false), matInvisible),
				[
					.6,
					0,
					0
				],
				[
					0,
					0,
					-Math.PI / 2
				]
			]],
			Y: [[new Mesh(new CylinderGeometry(.2, 0, 1, 4, 1, false), matInvisible), [
				0,
				.6,
				0
			]]],
			Z: [[
				new Mesh(new CylinderGeometry(.2, 0, 1, 4, 1, false), matInvisible),
				[
					0,
					0,
					.6
				],
				[
					Math.PI / 2,
					0,
					0
				]
			]],
			XYZ: [[new Mesh(new OctahedronGeometry(.2, 0), matInvisible)]],
			XY: [[new Mesh(new PlaneGeometry(.4, .4), matInvisible), [
				.2,
				.2,
				0
			]]],
			YZ: [[
				new Mesh(new PlaneGeometry(.4, .4), matInvisible),
				[
					0,
					.2,
					.2
				],
				[
					0,
					Math.PI / 2,
					0
				]
			]],
			XZ: [[
				new Mesh(new PlaneGeometry(.4, .4), matInvisible),
				[
					.2,
					0,
					.2
				],
				[
					-Math.PI / 2,
					0,
					0
				]
			]]
		};
		const helperTranslate = {
			START: [[
				new Mesh(new OctahedronGeometry(.01, 2), matHelper),
				null,
				null,
				null,
				"helper"
			]],
			END: [[
				new Mesh(new OctahedronGeometry(.01, 2), matHelper),
				null,
				null,
				null,
				"helper"
			]],
			DELTA: [[
				new Line(TranslateHelperGeometry(), matHelper),
				null,
				null,
				null,
				"helper"
			]],
			X: [[
				new Line(lineGeometry, matHelper.clone()),
				[
					-1e3,
					0,
					0
				],
				null,
				[
					1e6,
					1,
					1
				],
				"helper"
			]],
			Y: [[
				new Line(lineGeometry, matHelper.clone()),
				[
					0,
					-1e3,
					0
				],
				[
					0,
					0,
					Math.PI / 2
				],
				[
					1e6,
					1,
					1
				],
				"helper"
			]],
			Z: [[
				new Line(lineGeometry, matHelper.clone()),
				[
					0,
					0,
					-1e3
				],
				[
					0,
					-Math.PI / 2,
					0
				],
				[
					1e6,
					1,
					1
				],
				"helper"
			]]
		};
		const gizmoRotate = {
			X: [[new Line(CircleGeometry(1, .5), matLineRed)], [
				new Mesh(new OctahedronGeometry(.04, 0), matRed),
				[
					0,
					0,
					.99
				],
				null,
				[
					1,
					3,
					1
				]
			]],
			Y: [[
				new Line(CircleGeometry(1, .5), matLineGreen),
				null,
				[
					0,
					0,
					-Math.PI / 2
				]
			], [
				new Mesh(new OctahedronGeometry(.04, 0), matGreen),
				[
					0,
					0,
					.99
				],
				null,
				[
					3,
					1,
					1
				]
			]],
			Z: [[
				new Line(CircleGeometry(1, .5), matLineBlue),
				null,
				[
					0,
					Math.PI / 2,
					0
				]
			], [
				new Mesh(new OctahedronGeometry(.04, 0), matBlue),
				[
					.99,
					0,
					0
				],
				null,
				[
					1,
					3,
					1
				]
			]],
			E: [
				[
					new Line(CircleGeometry(1.25, 1), matLineYellowTransparent),
					null,
					[
						0,
						Math.PI / 2,
						0
					]
				],
				[
					new Mesh(new CylinderGeometry(.03, 0, .15, 4, 1, false), matLineYellowTransparent),
					[
						1.17,
						0,
						0
					],
					[
						0,
						0,
						-Math.PI / 2
					],
					[
						1,
						1,
						.001
					]
				],
				[
					new Mesh(new CylinderGeometry(.03, 0, .15, 4, 1, false), matLineYellowTransparent),
					[
						-1.17,
						0,
						0
					],
					[
						0,
						0,
						Math.PI / 2
					],
					[
						1,
						1,
						.001
					]
				],
				[
					new Mesh(new CylinderGeometry(.03, 0, .15, 4, 1, false), matLineYellowTransparent),
					[
						0,
						-1.17,
						0
					],
					[
						Math.PI,
						0,
						0
					],
					[
						1,
						1,
						.001
					]
				],
				[
					new Mesh(new CylinderGeometry(.03, 0, .15, 4, 1, false), matLineYellowTransparent),
					[
						0,
						1.17,
						0
					],
					[
						0,
						0,
						0
					],
					[
						1,
						1,
						.001
					]
				]
			],
			XYZE: [[
				new Line(CircleGeometry(1, 1), matLineGray),
				null,
				[
					0,
					Math.PI / 2,
					0
				]
			]]
		};
		const helperRotate = { AXIS: [[
			new Line(lineGeometry, matHelper.clone()),
			[
				-1e3,
				0,
				0
			],
			null,
			[
				1e6,
				1,
				1
			],
			"helper"
		]] };
		const pickerRotate = {
			X: [[
				new Mesh(new TorusGeometry(1, .1, 4, 24), matInvisible),
				[
					0,
					0,
					0
				],
				[
					0,
					-Math.PI / 2,
					-Math.PI / 2
				]
			]],
			Y: [[
				new Mesh(new TorusGeometry(1, .1, 4, 24), matInvisible),
				[
					0,
					0,
					0
				],
				[
					Math.PI / 2,
					0,
					0
				]
			]],
			Z: [[
				new Mesh(new TorusGeometry(1, .1, 4, 24), matInvisible),
				[
					0,
					0,
					0
				],
				[
					0,
					0,
					-Math.PI / 2
				]
			]],
			E: [[new Mesh(new TorusGeometry(1.25, .1, 2, 24), matInvisible)]],
			XYZE: [[new Mesh(new SphereGeometry(.7, 10, 8), matInvisible)]]
		};
		const gizmoScale = {
			X: [[
				new Mesh(scaleHandleGeometry, matRed),
				[
					.8,
					0,
					0
				],
				[
					0,
					0,
					-Math.PI / 2
				]
			], [
				new Line(lineGeometry, matLineRed),
				null,
				null,
				[
					.8,
					1,
					1
				]
			]],
			Y: [[new Mesh(scaleHandleGeometry, matGreen), [
				0,
				.8,
				0
			]], [
				new Line(lineGeometry, matLineGreen),
				null,
				[
					0,
					0,
					Math.PI / 2
				],
				[
					.8,
					1,
					1
				]
			]],
			Z: [[
				new Mesh(scaleHandleGeometry, matBlue),
				[
					0,
					0,
					.8
				],
				[
					Math.PI / 2,
					0,
					0
				]
			], [
				new Line(lineGeometry, matLineBlue),
				null,
				[
					0,
					-Math.PI / 2,
					0
				],
				[
					.8,
					1,
					1
				]
			]],
			XY: [
				[
					new Mesh(scaleHandleGeometry, matYellowTransparent),
					[
						.85,
						.85,
						0
					],
					null,
					[
						2,
						2,
						.2
					]
				],
				[
					new Line(lineGeometry, matLineYellow),
					[
						.855,
						.98,
						0
					],
					null,
					[
						.125,
						1,
						1
					]
				],
				[
					new Line(lineGeometry, matLineYellow),
					[
						.98,
						.855,
						0
					],
					[
						0,
						0,
						Math.PI / 2
					],
					[
						.125,
						1,
						1
					]
				]
			],
			YZ: [
				[
					new Mesh(scaleHandleGeometry, matCyanTransparent),
					[
						0,
						.85,
						.85
					],
					null,
					[
						.2,
						2,
						2
					]
				],
				[
					new Line(lineGeometry, matLineCyan),
					[
						0,
						.855,
						.98
					],
					[
						0,
						0,
						Math.PI / 2
					],
					[
						.125,
						1,
						1
					]
				],
				[
					new Line(lineGeometry, matLineCyan),
					[
						0,
						.98,
						.855
					],
					[
						0,
						-Math.PI / 2,
						0
					],
					[
						.125,
						1,
						1
					]
				]
			],
			XZ: [
				[
					new Mesh(scaleHandleGeometry, matMagentaTransparent),
					[
						.85,
						0,
						.85
					],
					null,
					[
						2,
						.2,
						2
					]
				],
				[
					new Line(lineGeometry, matLineMagenta),
					[
						.855,
						0,
						.98
					],
					null,
					[
						.125,
						1,
						1
					]
				],
				[
					new Line(lineGeometry, matLineMagenta),
					[
						.98,
						0,
						.855
					],
					[
						0,
						-Math.PI / 2,
						0
					],
					[
						.125,
						1,
						1
					]
				]
			],
			XYZX: [[new Mesh(new BoxGeometry(.125, .125, .125), matWhiteTransparent.clone()), [
				1.1,
				0,
				0
			]]],
			XYZY: [[new Mesh(new BoxGeometry(.125, .125, .125), matWhiteTransparent.clone()), [
				0,
				1.1,
				0
			]]],
			XYZZ: [[new Mesh(new BoxGeometry(.125, .125, .125), matWhiteTransparent.clone()), [
				0,
				0,
				1.1
			]]]
		};
		const pickerScale = {
			X: [[
				new Mesh(new CylinderGeometry(.2, 0, .8, 4, 1, false), matInvisible),
				[
					.5,
					0,
					0
				],
				[
					0,
					0,
					-Math.PI / 2
				]
			]],
			Y: [[new Mesh(new CylinderGeometry(.2, 0, .8, 4, 1, false), matInvisible), [
				0,
				.5,
				0
			]]],
			Z: [[
				new Mesh(new CylinderGeometry(.2, 0, .8, 4, 1, false), matInvisible),
				[
					0,
					0,
					.5
				],
				[
					Math.PI / 2,
					0,
					0
				]
			]],
			XY: [[
				new Mesh(scaleHandleGeometry, matInvisible),
				[
					.85,
					.85,
					0
				],
				null,
				[
					3,
					3,
					.2
				]
			]],
			YZ: [[
				new Mesh(scaleHandleGeometry, matInvisible),
				[
					0,
					.85,
					.85
				],
				null,
				[
					.2,
					3,
					3
				]
			]],
			XZ: [[
				new Mesh(scaleHandleGeometry, matInvisible),
				[
					.85,
					0,
					.85
				],
				null,
				[
					3,
					.2,
					3
				]
			]],
			XYZX: [[new Mesh(new BoxGeometry(.2, .2, .2), matInvisible), [
				1.1,
				0,
				0
			]]],
			XYZY: [[new Mesh(new BoxGeometry(.2, .2, .2), matInvisible), [
				0,
				1.1,
				0
			]]],
			XYZZ: [[new Mesh(new BoxGeometry(.2, .2, .2), matInvisible), [
				0,
				0,
				1.1
			]]]
		};
		const helperScale = {
			X: [[
				new Line(lineGeometry, matHelper.clone()),
				[
					-1e3,
					0,
					0
				],
				null,
				[
					1e6,
					1,
					1
				],
				"helper"
			]],
			Y: [[
				new Line(lineGeometry, matHelper.clone()),
				[
					0,
					-1e3,
					0
				],
				[
					0,
					0,
					Math.PI / 2
				],
				[
					1e6,
					1,
					1
				],
				"helper"
			]],
			Z: [[
				new Line(lineGeometry, matHelper.clone()),
				[
					0,
					0,
					-1e3
				],
				[
					0,
					-Math.PI / 2,
					0
				],
				[
					1e6,
					1,
					1
				],
				"helper"
			]]
		};
		const setupGizmo = (gizmoMap) => {
			const gizmo = new Object3D();
			for (let name in gizmoMap) for (let i = gizmoMap[name].length; i--;) {
				const object = gizmoMap[name][i][0].clone();
				const position = gizmoMap[name][i][1];
				const rotation = gizmoMap[name][i][2];
				const scale = gizmoMap[name][i][3];
				const tag = gizmoMap[name][i][4];
				object.name = name;
				object.tag = tag;
				if (position) object.position.set(position[0], position[1], position[2]);
				if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);
				if (scale) object.scale.set(scale[0], scale[1], scale[2]);
				object.updateMatrix();
				const tempGeometry = object.geometry.clone();
				tempGeometry.applyMatrix4(object.matrix);
				object.geometry = tempGeometry;
				object.renderOrder = Infinity;
				object.position.set(0, 0, 0);
				object.rotation.set(0, 0, 0);
				object.scale.set(1, 1, 1);
				gizmo.add(object);
			}
			return gizmo;
		};
		this.gizmo = {};
		this.picker = {};
		this.helper = {};
		this.add(this.gizmo["translate"] = setupGizmo(gizmoTranslate));
		this.add(this.gizmo["rotate"] = setupGizmo(gizmoRotate));
		this.add(this.gizmo["scale"] = setupGizmo(gizmoScale));
		this.add(this.picker["translate"] = setupGizmo(pickerTranslate));
		this.add(this.picker["rotate"] = setupGizmo(pickerRotate));
		this.add(this.picker["scale"] = setupGizmo(pickerScale));
		this.add(this.helper["translate"] = setupGizmo(helperTranslate));
		this.add(this.helper["rotate"] = setupGizmo(helperRotate));
		this.add(this.helper["scale"] = setupGizmo(helperScale));
		this.picker["translate"].visible = false;
		this.picker["rotate"].visible = false;
		this.picker["scale"].visible = false;
	}
};
var TransformControlsPlane = class extends Mesh {
	constructor() {
		super(new PlaneGeometry(1e5, 1e5, 2, 2), new MeshBasicMaterial({
			visible: false,
			wireframe: true,
			side: 2,
			transparent: true,
			opacity: .1,
			toneMapped: false
		}));
		__publicField$1(this, "isTransformControlsPlane", true);
		__publicField$1(this, "type", "TransformControlsPlane");
		__publicField$1(this, "unitX", new Vector3(1, 0, 0));
		__publicField$1(this, "unitY", new Vector3(0, 1, 0));
		__publicField$1(this, "unitZ", new Vector3(0, 0, 1));
		__publicField$1(this, "tempVector", new Vector3());
		__publicField$1(this, "dirVector", new Vector3());
		__publicField$1(this, "alignVector", new Vector3());
		__publicField$1(this, "tempMatrix", new Matrix4());
		__publicField$1(this, "identityQuaternion", new Quaternion());
		__publicField$1(this, "cameraQuaternion", new Quaternion());
		__publicField$1(this, "worldPosition", new Vector3());
		__publicField$1(this, "worldQuaternion", new Quaternion());
		__publicField$1(this, "eye", new Vector3());
		__publicField$1(this, "axis", null);
		__publicField$1(this, "mode", "translate");
		__publicField$1(this, "space", "world");
		__publicField$1(this, "updateMatrixWorld", () => {
			let space = this.space;
			this.position.copy(this.worldPosition);
			if (this.mode === "scale") space = "local";
			this.unitX.set(1, 0, 0).applyQuaternion(space === "local" ? this.worldQuaternion : this.identityQuaternion);
			this.unitY.set(0, 1, 0).applyQuaternion(space === "local" ? this.worldQuaternion : this.identityQuaternion);
			this.unitZ.set(0, 0, 1).applyQuaternion(space === "local" ? this.worldQuaternion : this.identityQuaternion);
			this.alignVector.copy(this.unitY);
			switch (this.mode) {
				case "translate":
				case "scale":
					switch (this.axis) {
						case "X":
							this.alignVector.copy(this.eye).cross(this.unitX);
							this.dirVector.copy(this.unitX).cross(this.alignVector);
							break;
						case "Y":
							this.alignVector.copy(this.eye).cross(this.unitY);
							this.dirVector.copy(this.unitY).cross(this.alignVector);
							break;
						case "Z":
							this.alignVector.copy(this.eye).cross(this.unitZ);
							this.dirVector.copy(this.unitZ).cross(this.alignVector);
							break;
						case "XY":
							this.dirVector.copy(this.unitZ);
							break;
						case "YZ":
							this.dirVector.copy(this.unitX);
							break;
						case "XZ":
							this.alignVector.copy(this.unitZ);
							this.dirVector.copy(this.unitY);
							break;
						case "XYZ":
						case "E": this.dirVector.set(0, 0, 0);
					}
					break;
				default: this.dirVector.set(0, 0, 0);
			}
			if (this.dirVector.length() === 0) this.quaternion.copy(this.cameraQuaternion);
			else {
				this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector);
				this.quaternion.setFromRotationMatrix(this.tempMatrix);
			}
			super.updateMatrixWorld();
		});
	}
};
//#endregion
//#region node_modules/three-stdlib/controls/OrbitControls.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var _ray = /* @__PURE__ */ new Ray();
var _plane = /* @__PURE__ */ new Plane();
var TILT_LIMIT = Math.cos(70 * (Math.PI / 180));
var moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;
var OrbitControls$1 = class extends EventDispatcher {
	constructor(object, domElement) {
		super();
		__publicField(this, "object");
		__publicField(this, "domElement");
		__publicField(this, "enabled", true);
		__publicField(this, "target", new Vector3());
		__publicField(this, "minDistance", 0);
		__publicField(this, "maxDistance", Infinity);
		__publicField(this, "minZoom", 0);
		__publicField(this, "maxZoom", Infinity);
		__publicField(this, "minPolarAngle", 0);
		__publicField(this, "maxPolarAngle", Math.PI);
		__publicField(this, "minAzimuthAngle", -Infinity);
		__publicField(this, "maxAzimuthAngle", Infinity);
		__publicField(this, "enableDamping", false);
		__publicField(this, "dampingFactor", .05);
		__publicField(this, "enableZoom", true);
		__publicField(this, "zoomSpeed", 1);
		__publicField(this, "enableRotate", true);
		__publicField(this, "rotateSpeed", 1);
		__publicField(this, "enablePan", true);
		__publicField(this, "panSpeed", 1);
		__publicField(this, "screenSpacePanning", true);
		__publicField(this, "keyPanSpeed", 7);
		__publicField(this, "zoomToCursor", false);
		__publicField(this, "autoRotate", false);
		__publicField(this, "autoRotateSpeed", 2);
		__publicField(this, "reverseOrbit", false);
		__publicField(this, "reverseHorizontalOrbit", false);
		__publicField(this, "reverseVerticalOrbit", false);
		__publicField(this, "keys", {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		});
		__publicField(this, "mouseButtons", {
			LEFT: MOUSE.ROTATE,
			MIDDLE: MOUSE.DOLLY,
			RIGHT: MOUSE.PAN
		});
		__publicField(this, "touches", {
			ONE: TOUCH.ROTATE,
			TWO: TOUCH.DOLLY_PAN
		});
		__publicField(this, "target0");
		__publicField(this, "position0");
		__publicField(this, "zoom0");
		__publicField(this, "_domElementKeyEvents", null);
		__publicField(this, "getPolarAngle");
		__publicField(this, "getAzimuthalAngle");
		__publicField(this, "setPolarAngle");
		__publicField(this, "setAzimuthalAngle");
		__publicField(this, "getDistance");
		__publicField(this, "getZoomScale");
		__publicField(this, "listenToKeyEvents");
		__publicField(this, "stopListenToKeyEvents");
		__publicField(this, "saveState");
		__publicField(this, "reset");
		__publicField(this, "update");
		__publicField(this, "connect");
		__publicField(this, "dispose");
		__publicField(this, "dollyIn");
		__publicField(this, "dollyOut");
		__publicField(this, "getScale");
		__publicField(this, "setScale");
		this.object = object;
		this.domElement = domElement;
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;
		this.getPolarAngle = () => spherical.phi;
		this.getAzimuthalAngle = () => spherical.theta;
		this.setPolarAngle = (value) => {
			let phi = moduloWrapAround(value, 2 * Math.PI);
			let currentPhi = spherical.phi;
			if (currentPhi < 0) currentPhi += 2 * Math.PI;
			if (phi < 0) phi += 2 * Math.PI;
			let phiDist = Math.abs(phi - currentPhi);
			if (2 * Math.PI - phiDist < phiDist) {
				if (phi < currentPhi) phi += 2 * Math.PI;
				else currentPhi += 2 * Math.PI;
			}
			sphericalDelta.phi = phi - currentPhi;
			scope.update();
		};
		this.setAzimuthalAngle = (value) => {
			let theta = moduloWrapAround(value, 2 * Math.PI);
			let currentTheta = spherical.theta;
			if (currentTheta < 0) currentTheta += 2 * Math.PI;
			if (theta < 0) theta += 2 * Math.PI;
			let thetaDist = Math.abs(theta - currentTheta);
			if (2 * Math.PI - thetaDist < thetaDist) {
				if (theta < currentTheta) theta += 2 * Math.PI;
				else currentTheta += 2 * Math.PI;
			}
			sphericalDelta.theta = theta - currentTheta;
			scope.update();
		};
		this.getDistance = () => scope.object.position.distanceTo(scope.target);
		this.listenToKeyEvents = (domElement2) => {
			domElement2.addEventListener("keydown", onKeyDown);
			this._domElementKeyEvents = domElement2;
		};
		this.stopListenToKeyEvents = () => {
			this._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
			this._domElementKeyEvents = null;
		};
		this.saveState = () => {
			scope.target0.copy(scope.target);
			scope.position0.copy(scope.object.position);
			scope.zoom0 = scope.object.zoom;
		};
		this.reset = () => {
			scope.target.copy(scope.target0);
			scope.object.position.copy(scope.position0);
			scope.object.zoom = scope.zoom0;
			scope.object.updateProjectionMatrix();
			scope.dispatchEvent(changeEvent);
			scope.update();
			state = STATE.NONE;
		};
		this.update = (() => {
			const offset = new Vector3();
			const up = new Vector3(0, 1, 0);
			const quat = new Quaternion().setFromUnitVectors(object.up, up);
			const quatInverse = quat.clone().invert();
			const lastPosition = new Vector3();
			const lastQuaternion = new Quaternion();
			const twoPI = 2 * Math.PI;
			return function update() {
				const position = scope.object.position;
				quat.setFromUnitVectors(object.up, up);
				quatInverse.copy(quat).invert();
				offset.copy(position).sub(scope.target);
				offset.applyQuaternion(quat);
				spherical.setFromVector3(offset);
				if (scope.autoRotate && state === STATE.NONE) rotateLeft(getAutoRotationAngle());
				if (scope.enableDamping) {
					spherical.theta += sphericalDelta.theta * scope.dampingFactor;
					spherical.phi += sphericalDelta.phi * scope.dampingFactor;
				} else {
					spherical.theta += sphericalDelta.theta;
					spherical.phi += sphericalDelta.phi;
				}
				let min = scope.minAzimuthAngle;
				let max = scope.maxAzimuthAngle;
				if (isFinite(min) && isFinite(max)) {
					if (min < -Math.PI) min += twoPI;
					else if (min > Math.PI) min -= twoPI;
					if (max < -Math.PI) max += twoPI;
					else if (max > Math.PI) max -= twoPI;
					if (min <= max) spherical.theta = Math.max(min, Math.min(max, spherical.theta));
					else spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
				}
				spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
				spherical.makeSafe();
				if (scope.enableDamping === true) scope.target.addScaledVector(panOffset, scope.dampingFactor);
				else scope.target.add(panOffset);
				if (scope.zoomToCursor && performCursorZoom || scope.object.isOrthographicCamera) spherical.radius = clampDistance(spherical.radius);
				else spherical.radius = clampDistance(spherical.radius * scale);
				offset.setFromSpherical(spherical);
				offset.applyQuaternion(quatInverse);
				position.copy(scope.target).add(offset);
				if (!scope.object.matrixAutoUpdate) scope.object.updateMatrix();
				scope.object.lookAt(scope.target);
				if (scope.enableDamping === true) {
					sphericalDelta.theta *= 1 - scope.dampingFactor;
					sphericalDelta.phi *= 1 - scope.dampingFactor;
					panOffset.multiplyScalar(1 - scope.dampingFactor);
				} else {
					sphericalDelta.set(0, 0, 0);
					panOffset.set(0, 0, 0);
				}
				let zoomChanged = false;
				if (scope.zoomToCursor && performCursorZoom) {
					let newRadius = null;
					if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
						const prevRadius = offset.length();
						newRadius = clampDistance(prevRadius * scale);
						const radiusDelta = prevRadius - newRadius;
						scope.object.position.addScaledVector(dollyDirection, radiusDelta);
						scope.object.updateMatrixWorld();
					} else if (scope.object.isOrthographicCamera) {
						const mouseBefore = new Vector3(mouse.x, mouse.y, 0);
						mouseBefore.unproject(scope.object);
						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
						scope.object.updateProjectionMatrix();
						zoomChanged = true;
						const mouseAfter = new Vector3(mouse.x, mouse.y, 0);
						mouseAfter.unproject(scope.object);
						scope.object.position.sub(mouseAfter).add(mouseBefore);
						scope.object.updateMatrixWorld();
						newRadius = offset.length();
					} else {
						console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.");
						scope.zoomToCursor = false;
					}
					if (newRadius !== null) {
						if (scope.screenSpacePanning) scope.target.set(0, 0, -1).transformDirection(scope.object.matrix).multiplyScalar(newRadius).add(scope.object.position);
						else {
							_ray.origin.copy(scope.object.position);
							_ray.direction.set(0, 0, -1).transformDirection(scope.object.matrix);
							if (Math.abs(scope.object.up.dot(_ray.direction)) < TILT_LIMIT) object.lookAt(scope.target);
							else {
								_plane.setFromNormalAndCoplanarPoint(scope.object.up, scope.target);
								_ray.intersectPlane(_plane, scope.target);
							}
						}
					}
				} else if (scope.object instanceof OrthographicCamera$1 && scope.object.isOrthographicCamera) {
					zoomChanged = scale !== 1;
					if (zoomChanged) {
						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / scale));
						scope.object.updateProjectionMatrix();
					}
				}
				scale = 1;
				performCursorZoom = false;
				if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
					scope.dispatchEvent(changeEvent);
					lastPosition.copy(scope.object.position);
					lastQuaternion.copy(scope.object.quaternion);
					zoomChanged = false;
					return true;
				}
				return false;
			};
		})();
		this.connect = (domElement2) => {
			scope.domElement = domElement2;
			scope.domElement.style.touchAction = "none";
			scope.domElement.addEventListener("contextmenu", onContextMenu);
			scope.domElement.addEventListener("pointerdown", onPointerDown);
			scope.domElement.addEventListener("pointercancel", onPointerUp);
			scope.domElement.addEventListener("wheel", onMouseWheel);
		};
		this.dispose = () => {
			var _a, _b, _c, _d, _e, _f;
			if (scope.domElement) scope.domElement.style.touchAction = "auto";
			(_a = scope.domElement) == null || _a.removeEventListener("contextmenu", onContextMenu);
			(_b = scope.domElement) == null || _b.removeEventListener("pointerdown", onPointerDown);
			(_c = scope.domElement) == null || _c.removeEventListener("pointercancel", onPointerUp);
			(_d = scope.domElement) == null || _d.removeEventListener("wheel", onMouseWheel);
			(_e = scope.domElement) == null || _e.ownerDocument.removeEventListener("pointermove", onPointerMove);
			(_f = scope.domElement) == null || _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
			if (scope._domElementKeyEvents !== null) scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
		};
		const scope = this;
		const changeEvent = { type: "change" };
		const startEvent = { type: "start" };
		const endEvent = { type: "end" };
		const STATE = {
			NONE: -1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6
		};
		let state = STATE.NONE;
		const EPS = 1e-6;
		const spherical = new Spherical();
		const sphericalDelta = new Spherical();
		let scale = 1;
		const panOffset = new Vector3();
		const rotateStart = new Vector2();
		const rotateEnd = new Vector2();
		const rotateDelta = new Vector2();
		const panStart = new Vector2();
		const panEnd = new Vector2();
		const panDelta = new Vector2();
		const dollyStart = new Vector2();
		const dollyEnd = new Vector2();
		const dollyDelta = new Vector2();
		const dollyDirection = new Vector3();
		const mouse = new Vector2();
		let performCursorZoom = false;
		const pointers = [];
		const pointerPositions = {};
		function getAutoRotationAngle() {
			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}
		function getZoomScale() {
			return Math.pow(.95, scope.zoomSpeed);
		}
		function rotateLeft(angle) {
			if (scope.reverseOrbit || scope.reverseHorizontalOrbit) sphericalDelta.theta += angle;
			else sphericalDelta.theta -= angle;
		}
		function rotateUp(angle) {
			if (scope.reverseOrbit || scope.reverseVerticalOrbit) sphericalDelta.phi += angle;
			else sphericalDelta.phi -= angle;
		}
		const panLeft = (() => {
			const v = new Vector3();
			return function panLeft2(distance, objectMatrix) {
				v.setFromMatrixColumn(objectMatrix, 0);
				v.multiplyScalar(-distance);
				panOffset.add(v);
			};
		})();
		const panUp = (() => {
			const v = new Vector3();
			return function panUp2(distance, objectMatrix) {
				if (scope.screenSpacePanning === true) v.setFromMatrixColumn(objectMatrix, 1);
				else {
					v.setFromMatrixColumn(objectMatrix, 0);
					v.crossVectors(scope.object.up, v);
				}
				v.multiplyScalar(distance);
				panOffset.add(v);
			};
		})();
		const pan = (() => {
			const offset = new Vector3();
			return function pan2(deltaX, deltaY) {
				const element = scope.domElement;
				if (element && scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera) {
					const position = scope.object.position;
					offset.copy(position).sub(scope.target);
					let targetDistance = offset.length();
					targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
					panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
					panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
				} else if (element && scope.object instanceof OrthographicCamera$1 && scope.object.isOrthographicCamera) {
					panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
					panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
				} else {
					console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
					scope.enablePan = false;
				}
			};
		})();
		function setScale(newScale) {
			if (scope.object instanceof PerspectiveCamera && scope.object.isPerspectiveCamera || scope.object instanceof OrthographicCamera$1 && scope.object.isOrthographicCamera) scale = newScale;
			else {
				console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
				scope.enableZoom = false;
			}
		}
		function dollyOut(dollyScale) {
			setScale(scale / dollyScale);
		}
		function dollyIn(dollyScale) {
			setScale(scale * dollyScale);
		}
		function updateMouseParameters(event) {
			if (!scope.zoomToCursor || !scope.domElement) return;
			performCursorZoom = true;
			const rect = scope.domElement.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const w = rect.width;
			const h = rect.height;
			mouse.x = x / w * 2 - 1;
			mouse.y = -(y / h) * 2 + 1;
			dollyDirection.set(mouse.x, mouse.y, 1).unproject(scope.object).sub(scope.object.position).normalize();
		}
		function clampDistance(dist) {
			return Math.max(scope.minDistance, Math.min(scope.maxDistance, dist));
		}
		function handleMouseDownRotate(event) {
			rotateStart.set(event.clientX, event.clientY);
		}
		function handleMouseDownDolly(event) {
			updateMouseParameters(event);
			dollyStart.set(event.clientX, event.clientY);
		}
		function handleMouseDownPan(event) {
			panStart.set(event.clientX, event.clientY);
		}
		function handleMouseMoveRotate(event) {
			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
			const element = scope.domElement;
			if (element) {
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
			}
			rotateStart.copy(rotateEnd);
			scope.update();
		}
		function handleMouseMoveDolly(event) {
			dollyEnd.set(event.clientX, event.clientY);
			dollyDelta.subVectors(dollyEnd, dollyStart);
			if (dollyDelta.y > 0) dollyOut(getZoomScale());
			else if (dollyDelta.y < 0) dollyIn(getZoomScale());
			dollyStart.copy(dollyEnd);
			scope.update();
		}
		function handleMouseMovePan(event) {
			panEnd.set(event.clientX, event.clientY);
			panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
			pan(panDelta.x, panDelta.y);
			panStart.copy(panEnd);
			scope.update();
		}
		function handleMouseWheel(event) {
			updateMouseParameters(event);
			if (event.deltaY < 0) dollyIn(getZoomScale());
			else if (event.deltaY > 0) dollyOut(getZoomScale());
			scope.update();
		}
		function handleKeyDown(event) {
			let needsUpdate = false;
			switch (event.code) {
				case scope.keys.UP:
					pan(0, scope.keyPanSpeed);
					needsUpdate = true;
					break;
				case scope.keys.BOTTOM:
					pan(0, -scope.keyPanSpeed);
					needsUpdate = true;
					break;
				case scope.keys.LEFT:
					pan(scope.keyPanSpeed, 0);
					needsUpdate = true;
					break;
				case scope.keys.RIGHT:
					pan(-scope.keyPanSpeed, 0);
					needsUpdate = true;
			}
			if (needsUpdate) {
				event.preventDefault();
				scope.update();
			}
		}
		function handleTouchStartRotate() {
			if (pointers.length == 1) rotateStart.set(pointers[0].pageX, pointers[0].pageY);
			else {
				const x = .5 * (pointers[0].pageX + pointers[1].pageX);
				const y = .5 * (pointers[0].pageY + pointers[1].pageY);
				rotateStart.set(x, y);
			}
		}
		function handleTouchStartPan() {
			if (pointers.length == 1) panStart.set(pointers[0].pageX, pointers[0].pageY);
			else {
				const x = .5 * (pointers[0].pageX + pointers[1].pageX);
				const y = .5 * (pointers[0].pageY + pointers[1].pageY);
				panStart.set(x, y);
			}
		}
		function handleTouchStartDolly() {
			const dx = pointers[0].pageX - pointers[1].pageX;
			const dy = pointers[0].pageY - pointers[1].pageY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			dollyStart.set(0, distance);
		}
		function handleTouchStartDollyPan() {
			if (scope.enableZoom) handleTouchStartDolly();
			if (scope.enablePan) handleTouchStartPan();
		}
		function handleTouchStartDollyRotate() {
			if (scope.enableZoom) handleTouchStartDolly();
			if (scope.enableRotate) handleTouchStartRotate();
		}
		function handleTouchMoveRotate(event) {
			if (pointers.length == 1) rotateEnd.set(event.pageX, event.pageY);
			else {
				const position = getSecondPointerPosition(event);
				const x = .5 * (event.pageX + position.x);
				const y = .5 * (event.pageY + position.y);
				rotateEnd.set(x, y);
			}
			rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
			const element = scope.domElement;
			if (element) {
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
			}
			rotateStart.copy(rotateEnd);
		}
		function handleTouchMovePan(event) {
			if (pointers.length == 1) panEnd.set(event.pageX, event.pageY);
			else {
				const position = getSecondPointerPosition(event);
				const x = .5 * (event.pageX + position.x);
				const y = .5 * (event.pageY + position.y);
				panEnd.set(x, y);
			}
			panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
			pan(panDelta.x, panDelta.y);
			panStart.copy(panEnd);
		}
		function handleTouchMoveDolly(event) {
			const position = getSecondPointerPosition(event);
			const dx = event.pageX - position.x;
			const dy = event.pageY - position.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			dollyEnd.set(0, distance);
			dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
			dollyOut(dollyDelta.y);
			dollyStart.copy(dollyEnd);
		}
		function handleTouchMoveDollyPan(event) {
			if (scope.enableZoom) handleTouchMoveDolly(event);
			if (scope.enablePan) handleTouchMovePan(event);
		}
		function handleTouchMoveDollyRotate(event) {
			if (scope.enableZoom) handleTouchMoveDolly(event);
			if (scope.enableRotate) handleTouchMoveRotate(event);
		}
		function onPointerDown(event) {
			var _a, _b;
			if (scope.enabled === false) return;
			if (pointers.length === 0) {
				(_a = scope.domElement) == null || _a.ownerDocument.addEventListener("pointermove", onPointerMove);
				(_b = scope.domElement) == null || _b.ownerDocument.addEventListener("pointerup", onPointerUp);
			}
			addPointer(event);
			if (event.pointerType === "touch") onTouchStart(event);
			else onMouseDown(event);
		}
		function onPointerMove(event) {
			if (scope.enabled === false) return;
			if (event.pointerType === "touch") onTouchMove(event);
			else onMouseMove(event);
		}
		function onPointerUp(event) {
			var _a, _b, _c;
			removePointer(event);
			if (pointers.length === 0) {
				(_a = scope.domElement) == null || _a.releasePointerCapture(event.pointerId);
				(_b = scope.domElement) == null || _b.ownerDocument.removeEventListener("pointermove", onPointerMove);
				(_c = scope.domElement) == null || _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
			}
			scope.dispatchEvent(endEvent);
			state = STATE.NONE;
		}
		function onMouseDown(event) {
			let mouseAction;
			switch (event.button) {
				case 0:
					mouseAction = scope.mouseButtons.LEFT;
					break;
				case 1:
					mouseAction = scope.mouseButtons.MIDDLE;
					break;
				case 2:
					mouseAction = scope.mouseButtons.RIGHT;
					break;
				default: mouseAction = -1;
			}
			switch (mouseAction) {
				case MOUSE.DOLLY:
					if (scope.enableZoom === false) return;
					handleMouseDownDolly(event);
					state = STATE.DOLLY;
					break;
				case MOUSE.ROTATE:
					if (event.ctrlKey || event.metaKey || event.shiftKey) {
						if (scope.enablePan === false) return;
						handleMouseDownPan(event);
						state = STATE.PAN;
					} else {
						if (scope.enableRotate === false) return;
						handleMouseDownRotate(event);
						state = STATE.ROTATE;
					}
					break;
				case MOUSE.PAN:
					if (event.ctrlKey || event.metaKey || event.shiftKey) {
						if (scope.enableRotate === false) return;
						handleMouseDownRotate(event);
						state = STATE.ROTATE;
					} else {
						if (scope.enablePan === false) return;
						handleMouseDownPan(event);
						state = STATE.PAN;
					}
					break;
				default: state = STATE.NONE;
			}
			if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
		}
		function onMouseMove(event) {
			if (scope.enabled === false) return;
			switch (state) {
				case STATE.ROTATE:
					if (scope.enableRotate === false) return;
					handleMouseMoveRotate(event);
					break;
				case STATE.DOLLY:
					if (scope.enableZoom === false) return;
					handleMouseMoveDolly(event);
					break;
				case STATE.PAN:
					if (scope.enablePan === false) return;
					handleMouseMovePan(event);
			}
		}
		function onMouseWheel(event) {
			if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
			event.preventDefault();
			scope.dispatchEvent(startEvent);
			handleMouseWheel(event);
			scope.dispatchEvent(endEvent);
		}
		function onKeyDown(event) {
			if (scope.enabled === false || scope.enablePan === false) return;
			handleKeyDown(event);
		}
		function onTouchStart(event) {
			trackPointer(event);
			switch (pointers.length) {
				case 1:
					switch (scope.touches.ONE) {
						case TOUCH.ROTATE:
							if (scope.enableRotate === false) return;
							handleTouchStartRotate();
							state = STATE.TOUCH_ROTATE;
							break;
						case TOUCH.PAN:
							if (scope.enablePan === false) return;
							handleTouchStartPan();
							state = STATE.TOUCH_PAN;
							break;
						default: state = STATE.NONE;
					}
					break;
				case 2:
					switch (scope.touches.TWO) {
						case TOUCH.DOLLY_PAN:
							if (scope.enableZoom === false && scope.enablePan === false) return;
							handleTouchStartDollyPan();
							state = STATE.TOUCH_DOLLY_PAN;
							break;
						case TOUCH.DOLLY_ROTATE:
							if (scope.enableZoom === false && scope.enableRotate === false) return;
							handleTouchStartDollyRotate();
							state = STATE.TOUCH_DOLLY_ROTATE;
							break;
						default: state = STATE.NONE;
					}
					break;
				default: state = STATE.NONE;
			}
			if (state !== STATE.NONE) scope.dispatchEvent(startEvent);
		}
		function onTouchMove(event) {
			trackPointer(event);
			switch (state) {
				case STATE.TOUCH_ROTATE:
					if (scope.enableRotate === false) return;
					handleTouchMoveRotate(event);
					scope.update();
					break;
				case STATE.TOUCH_PAN:
					if (scope.enablePan === false) return;
					handleTouchMovePan(event);
					scope.update();
					break;
				case STATE.TOUCH_DOLLY_PAN:
					if (scope.enableZoom === false && scope.enablePan === false) return;
					handleTouchMoveDollyPan(event);
					scope.update();
					break;
				case STATE.TOUCH_DOLLY_ROTATE:
					if (scope.enableZoom === false && scope.enableRotate === false) return;
					handleTouchMoveDollyRotate(event);
					scope.update();
					break;
				default: state = STATE.NONE;
			}
		}
		function onContextMenu(event) {
			if (scope.enabled === false) return;
			event.preventDefault();
		}
		function addPointer(event) {
			pointers.push(event);
		}
		function removePointer(event) {
			delete pointerPositions[event.pointerId];
			for (let i = 0; i < pointers.length; i++) if (pointers[i].pointerId == event.pointerId) {
				pointers.splice(i, 1);
				return;
			}
		}
		function trackPointer(event) {
			let position = pointerPositions[event.pointerId];
			if (position === void 0) {
				position = new Vector2();
				pointerPositions[event.pointerId] = position;
			}
			position.set(event.pageX, event.pageY);
		}
		function getSecondPointerPosition(event) {
			const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
			return pointerPositions[pointer.pointerId];
		}
		this.dollyIn = (dollyScale = getZoomScale()) => {
			dollyIn(dollyScale);
			scope.update();
		};
		this.dollyOut = (dollyScale = getZoomScale()) => {
			dollyOut(dollyScale);
			scope.update();
		};
		this.getScale = () => {
			return scale;
		};
		this.setScale = (newScale) => {
			setScale(newScale);
			scope.update();
		};
		this.getZoomScale = () => {
			return getZoomScale();
		};
		if (domElement !== void 0) this.connect(domElement);
		this.update();
	}
};
//#endregion
//#region node_modules/three-stdlib/shaders/HorizontalBlurShader.js
var HorizontalBlurShader = {
	uniforms: {
		tDiffuse: { value: null },
		h: { value: 1 / 512 }
	},
	vertexShader: `
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,
	fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `
};
//#endregion
//#region node_modules/three-stdlib/shaders/VerticalBlurShader.js
var VerticalBlurShader = {
	uniforms: {
		tDiffuse: { value: null },
		v: { value: 1 / 512 }
	},
	vertexShader: `
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,
	fragmentShader: `

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `
};
//#endregion
//#region node_modules/three-stdlib/loaders/RGBELoader.js
var RGBELoader = class extends DataTextureLoader {
	constructor(manager) {
		super(manager);
		this.type = HalfFloatType;
	}
	parse(buffer) {
		const rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
			switch (rgbe_error_code) {
				case rgbe_read_error: throw new Error("THREE.RGBELoader: Read Error: " + (msg || ""));
				case rgbe_write_error: throw new Error("THREE.RGBELoader: Write Error: " + (msg || ""));
				case rgbe_format_error: throw new Error("THREE.RGBELoader: Bad File Format: " + (msg || ""));
				default:
				case rgbe_memory_error: throw new Error("THREE.RGBELoader: Memory Error: " + (msg || ""));
			}
		}, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
			const chunkSize = 128;
			lineLimit = !lineLimit ? 1024 : lineLimit;
			let p = buffer2.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
			while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer2.byteLength) {
				s += chunk;
				len += chunk.length;
				p += chunkSize;
				chunk += String.fromCharCode.apply(null, new Uint16Array(buffer2.subarray(p, p + chunkSize)));
			}
			if (-1 < i) {
				if (false !== consume) buffer2.pos += len + i + 1;
				return s + chunk.slice(0, i);
			}
			return false;
		}, RGBE_ReadHeader = function(buffer2) {
			const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
				valid: 0,
				string: "",
				comments: "",
				programtype: "RGBE",
				format: "",
				gamma: 1,
				exposure: 1,
				width: 0,
				height: 0
			};
			let line, match;
			if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) rgbe_error(rgbe_read_error, "no header found");
			if (!(match = line.match(magic_token_re))) rgbe_error(rgbe_format_error, "bad initial token");
			header.valid |= RGBE_VALID_PROGRAMTYPE;
			header.programtype = match[1];
			header.string += line + "\n";
			while (true) {
				line = fgets(buffer2);
				if (false === line) break;
				header.string += line + "\n";
				if ("#" === line.charAt(0)) {
					header.comments += line + "\n";
					continue;
				}
				if (match = line.match(gamma_re)) header.gamma = parseFloat(match[1]);
				if (match = line.match(exposure_re)) header.exposure = parseFloat(match[1]);
				if (match = line.match(format_re)) {
					header.valid |= RGBE_VALID_FORMAT;
					header.format = match[1];
				}
				if (match = line.match(dimensions_re)) {
					header.valid |= RGBE_VALID_DIMENSIONS;
					header.height = parseInt(match[1], 10);
					header.width = parseInt(match[2], 10);
				}
				if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
			}
			if (!(header.valid & RGBE_VALID_FORMAT)) rgbe_error(rgbe_format_error, "missing format specifier");
			if (!(header.valid & RGBE_VALID_DIMENSIONS)) rgbe_error(rgbe_format_error, "missing image size specifier");
			return header;
		}, RGBE_ReadPixels_RLE = function(buffer2, w2, h2) {
			const scanline_width = w2;
			if (scanline_width < 8 || scanline_width > 32767 || 2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128) return new Uint8Array(buffer2);
			if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) rgbe_error(rgbe_format_error, "wrong scanline width");
			const data_rgba = new Uint8Array(4 * w2 * h2);
			if (!data_rgba.length) rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
			let offset = 0, pos = 0;
			const ptr_end = 4 * scanline_width;
			const rgbeStart = /* @__PURE__ */ new Uint8Array(4);
			const scanline_buffer = new Uint8Array(ptr_end);
			let num_scanlines = h2;
			while (num_scanlines > 0 && pos < buffer2.byteLength) {
				if (pos + 4 > buffer2.byteLength) rgbe_error(rgbe_read_error);
				rgbeStart[0] = buffer2[pos++];
				rgbeStart[1] = buffer2[pos++];
				rgbeStart[2] = buffer2[pos++];
				rgbeStart[3] = buffer2[pos++];
				if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) rgbe_error(rgbe_format_error, "bad rgbe scanline format");
				let ptr = 0, count;
				while (ptr < ptr_end && pos < buffer2.byteLength) {
					count = buffer2[pos++];
					const isEncodedRun = count > 128;
					if (isEncodedRun) count -= 128;
					if (0 === count || ptr + count > ptr_end) rgbe_error(rgbe_format_error, "bad scanline data");
					if (isEncodedRun) {
						const byteValue = buffer2[pos++];
						for (let i = 0; i < count; i++) scanline_buffer[ptr++] = byteValue;
					} else {
						scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
						ptr += count;
						pos += count;
					}
				}
				const l = scanline_width;
				for (let i = 0; i < l; i++) {
					let off = 0;
					data_rgba[offset] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 1] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 2] = scanline_buffer[i + off];
					off += scanline_width;
					data_rgba[offset + 3] = scanline_buffer[i + off];
					offset += 4;
				}
				num_scanlines--;
			}
			return data_rgba;
		};
		const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
			const e = sourceArray[sourceOffset + 3];
			const scale = Math.pow(2, e - 128) / 255;
			destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
			destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
			destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
			destArray[destOffset + 3] = 1;
		};
		const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
			const e = sourceArray[sourceOffset + 3];
			const scale = Math.pow(2, e - 128) / 255;
			destArray[destOffset + 0] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
			destArray[destOffset + 1] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
			destArray[destOffset + 2] = DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
			destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
		};
		const byteArray = new Uint8Array(buffer);
		byteArray.pos = 0;
		const rgbe_header_info = RGBE_ReadHeader(byteArray);
		const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
		let data, type;
		let numElements;
		switch (this.type) {
			case FloatType:
				numElements = image_rgba_data.length / 4;
				const floatArray = new Float32Array(numElements * 4);
				for (let j = 0; j < numElements; j++) RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
				data = floatArray;
				type = FloatType;
				break;
			case HalfFloatType:
				numElements = image_rgba_data.length / 4;
				const halfArray = new Uint16Array(numElements * 4);
				for (let j = 0; j < numElements; j++) RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
				data = halfArray;
				type = HalfFloatType;
				break;
			default: throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
		}
		return {
			width: w,
			height: h,
			data,
			header: rgbe_header_info.string,
			gamma: rgbe_header_info.gamma,
			exposure: rgbe_header_info.exposure,
			type
		};
	}
	setDataType(value) {
		this.type = value;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		function onLoadCallback(texture, texData) {
			switch (texture.type) {
				case FloatType:
				case HalfFloatType:
					if ("colorSpace" in texture) texture.colorSpace = "srgb-linear";
					else texture.encoding = 3e3;
					texture.minFilter = LinearFilter;
					texture.magFilter = LinearFilter;
					texture.generateMipmaps = false;
					texture.flipY = true;
			}
			if (onLoad) onLoad(texture, texData);
		}
		return super.load(url, onLoadCallback, onProgress, onError);
	}
};
//#endregion
//#region node_modules/three-stdlib/loaders/EXRLoader.js
var hasColorSpace = version$1 >= 152;
var EXRLoader = class extends DataTextureLoader {
	constructor(manager) {
		super(manager);
		this.type = HalfFloatType;
	}
	parse(buffer) {
		const USHORT_RANGE = 65536;
		const BITMAP_SIZE = 8192;
		const HUF_DECBITS = 14;
		const HUF_ENCSIZE = 65537;
		const HUF_DECSIZE = 16384;
		const HUF_DECMASK = 16383;
		const A_OFFSET = 32768;
		const MOD_MASK = 65535;
		const SHORT_ZEROCODE_RUN = 59;
		const LONG_ZEROCODE_RUN = 63;
		const SHORTEST_LONG_RUN = 6;
		const ULONG_SIZE = 8;
		const FLOAT32_SIZE = 4;
		const INT32_SIZE = 4;
		const INT16_SIZE = 2;
		const INT8_SIZE = 1;
		const STATIC_HUFFMAN = 0;
		const DEFLATE = 1;
		const UNKNOWN = 0;
		const LOSSY_DCT = 1;
		const RLE = 2;
		const logBase = Math.pow(2.7182818, 2.2);
		function reverseLutFromBitmap(bitmap, lut) {
			var k = 0;
			for (var i = 0; i < USHORT_RANGE; ++i) if (i == 0 || bitmap[i >> 3] & 1 << (i & 7)) lut[k++] = i;
			var n = k - 1;
			while (k < USHORT_RANGE) lut[k++] = 0;
			return n;
		}
		function hufClearDecTable(hdec) {
			for (var i = 0; i < HUF_DECSIZE; i++) {
				hdec[i] = {};
				hdec[i].len = 0;
				hdec[i].lit = 0;
				hdec[i].p = null;
			}
		}
		const getBitsReturn = {
			l: 0,
			c: 0,
			lc: 0
		};
		function getBits(nBits, c, lc, uInt8Array2, inOffset) {
			while (lc < nBits) {
				c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
				lc += 8;
			}
			lc -= nBits;
			getBitsReturn.l = c >> lc & (1 << nBits) - 1;
			getBitsReturn.c = c;
			getBitsReturn.lc = lc;
		}
		const hufTableBuffer = new Array(59);
		function hufCanonicalCodeTable(hcode) {
			for (var i = 0; i <= 58; ++i) hufTableBuffer[i] = 0;
			for (var i = 0; i < HUF_ENCSIZE; ++i) hufTableBuffer[hcode[i]] += 1;
			var c = 0;
			for (var i = 58; i > 0; --i) {
				var nc = c + hufTableBuffer[i] >> 1;
				hufTableBuffer[i] = c;
				c = nc;
			}
			for (var i = 0; i < HUF_ENCSIZE; ++i) {
				var l = hcode[i];
				if (l > 0) hcode[i] = l | hufTableBuffer[l]++ << 6;
			}
		}
		function hufUnpackEncTable(uInt8Array2, inDataView, inOffset, ni, im, iM, hcode) {
			var p = inOffset;
			var c = 0;
			var lc = 0;
			for (; im <= iM; im++) {
				if (p.value - inOffset.value > ni) return false;
				getBits(6, c, lc, uInt8Array2, p);
				var l = getBitsReturn.l;
				c = getBitsReturn.c;
				lc = getBitsReturn.lc;
				hcode[im] = l;
				if (l == LONG_ZEROCODE_RUN) {
					if (p.value - inOffset.value > ni) throw "Something wrong with hufUnpackEncTable";
					getBits(8, c, lc, uInt8Array2, p);
					var zerun = getBitsReturn.l + SHORTEST_LONG_RUN;
					c = getBitsReturn.c;
					lc = getBitsReturn.lc;
					if (im + zerun > iM + 1) throw "Something wrong with hufUnpackEncTable";
					while (zerun--) hcode[im++] = 0;
					im--;
				} else if (l >= SHORT_ZEROCODE_RUN) {
					var zerun = l - SHORT_ZEROCODE_RUN + 2;
					if (im + zerun > iM + 1) throw "Something wrong with hufUnpackEncTable";
					while (zerun--) hcode[im++] = 0;
					im--;
				}
			}
			hufCanonicalCodeTable(hcode);
		}
		function hufLength(code) {
			return code & 63;
		}
		function hufCode(code) {
			return code >> 6;
		}
		function hufBuildDecTable(hcode, im, iM, hdecod) {
			for (; im <= iM; im++) {
				var c = hufCode(hcode[im]);
				var l = hufLength(hcode[im]);
				if (c >> l) throw "Invalid table entry";
				if (l > HUF_DECBITS) {
					var pl = hdecod[c >> l - HUF_DECBITS];
					if (pl.len) throw "Invalid table entry";
					pl.lit++;
					if (pl.p) {
						var p = pl.p;
						pl.p = new Array(pl.lit);
						for (var i = 0; i < pl.lit - 1; ++i) pl.p[i] = p[i];
					} else pl.p = new Array(1);
					pl.p[pl.lit - 1] = im;
				} else if (l) {
					var plOffset = 0;
					for (var i = 1 << HUF_DECBITS - l; i > 0; i--) {
						var pl = hdecod[(c << HUF_DECBITS - l) + plOffset];
						if (pl.len || pl.p) throw "Invalid table entry";
						pl.len = l;
						pl.lit = im;
						plOffset++;
					}
				}
			}
			return true;
		}
		const getCharReturn = {
			c: 0,
			lc: 0
		};
		function getChar(c, lc, uInt8Array2, inOffset) {
			c = c << 8 | parseUint8Array(uInt8Array2, inOffset);
			lc += 8;
			getCharReturn.c = c;
			getCharReturn.lc = lc;
		}
		const getCodeReturn = {
			c: 0,
			lc: 0
		};
		function getCode(po, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outBufferOffset, outBufferEndOffset) {
			if (po == rlc) {
				if (lc < 8) {
					getChar(c, lc, uInt8Array2, inOffset);
					c = getCharReturn.c;
					lc = getCharReturn.lc;
				}
				lc -= 8;
				var cs = c >> lc;
				var cs = new Uint8Array([cs])[0];
				if (outBufferOffset.value + cs > outBufferEndOffset) return false;
				var s = outBuffer[outBufferOffset.value - 1];
				while (cs-- > 0) outBuffer[outBufferOffset.value++] = s;
			} else if (outBufferOffset.value < outBufferEndOffset) outBuffer[outBufferOffset.value++] = po;
			else return false;
			getCodeReturn.c = c;
			getCodeReturn.lc = lc;
		}
		function UInt16(value) {
			return value & 65535;
		}
		function Int16(value) {
			var ref = UInt16(value);
			return ref > 32767 ? ref - 65536 : ref;
		}
		const wdec14Return = {
			a: 0,
			b: 0
		};
		function wdec14(l, h) {
			var ls = Int16(l);
			var hi = Int16(h);
			var ai = ls + (hi & 1) + (hi >> 1);
			var as = ai;
			var bs = ai - hi;
			wdec14Return.a = as;
			wdec14Return.b = bs;
		}
		function wdec16(l, h) {
			var m = UInt16(l);
			var d = UInt16(h);
			var bb = m - (d >> 1) & MOD_MASK;
			var aa = d + bb - A_OFFSET & MOD_MASK;
			wdec14Return.a = aa;
			wdec14Return.b = bb;
		}
		function wav2Decode(buffer2, j, nx, ox, ny, oy, mx) {
			var w14 = mx < 16384;
			var n = nx > ny ? ny : nx;
			var p = 1;
			var p2;
			while (p <= n) p <<= 1;
			p >>= 1;
			p2 = p;
			p >>= 1;
			while (p >= 1) {
				var py = 0;
				var ey = py + oy * (ny - p2);
				var oy1 = oy * p;
				var oy2 = oy * p2;
				var ox1 = ox * p;
				var ox2 = ox * p2;
				var i00, i01, i10, i11;
				for (; py <= ey; py += oy2) {
					var px = py;
					var ex = py + ox * (nx - p2);
					for (; px <= ex; px += ox2) {
						var p01 = px + ox1;
						var p10 = px + oy1;
						var p11 = p10 + ox1;
						if (w14) {
							wdec14(buffer2[px + j], buffer2[p10 + j]);
							i00 = wdec14Return.a;
							i10 = wdec14Return.b;
							wdec14(buffer2[p01 + j], buffer2[p11 + j]);
							i01 = wdec14Return.a;
							i11 = wdec14Return.b;
							wdec14(i00, i01);
							buffer2[px + j] = wdec14Return.a;
							buffer2[p01 + j] = wdec14Return.b;
							wdec14(i10, i11);
							buffer2[p10 + j] = wdec14Return.a;
							buffer2[p11 + j] = wdec14Return.b;
						} else {
							wdec16(buffer2[px + j], buffer2[p10 + j]);
							i00 = wdec14Return.a;
							i10 = wdec14Return.b;
							wdec16(buffer2[p01 + j], buffer2[p11 + j]);
							i01 = wdec14Return.a;
							i11 = wdec14Return.b;
							wdec16(i00, i01);
							buffer2[px + j] = wdec14Return.a;
							buffer2[p01 + j] = wdec14Return.b;
							wdec16(i10, i11);
							buffer2[p10 + j] = wdec14Return.a;
							buffer2[p11 + j] = wdec14Return.b;
						}
					}
					if (nx & p) {
						var p10 = px + oy1;
						if (w14) wdec14(buffer2[px + j], buffer2[p10 + j]);
						else wdec16(buffer2[px + j], buffer2[p10 + j]);
						i00 = wdec14Return.a;
						buffer2[p10 + j] = wdec14Return.b;
						buffer2[px + j] = i00;
					}
				}
				if (ny & p) {
					var px = py;
					var ex = py + ox * (nx - p2);
					for (; px <= ex; px += ox2) {
						var p01 = px + ox1;
						if (w14) wdec14(buffer2[px + j], buffer2[p01 + j]);
						else wdec16(buffer2[px + j], buffer2[p01 + j]);
						i00 = wdec14Return.a;
						buffer2[p01 + j] = wdec14Return.b;
						buffer2[px + j] = i00;
					}
				}
				p2 = p;
				p >>= 1;
			}
			return py;
		}
		function hufDecode(encodingTable, decodingTable, uInt8Array2, inDataView, inOffset, ni, rlc, no, outBuffer, outOffset) {
			var c = 0;
			var lc = 0;
			var outBufferEndOffset = no;
			var inOffsetEnd = Math.trunc(inOffset.value + (ni + 7) / 8);
			while (inOffset.value < inOffsetEnd) {
				getChar(c, lc, uInt8Array2, inOffset);
				c = getCharReturn.c;
				lc = getCharReturn.lc;
				while (lc >= HUF_DECBITS) {
					var pl = decodingTable[c >> lc - HUF_DECBITS & HUF_DECMASK];
					if (pl.len) {
						lc -= pl.len;
						getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
						c = getCodeReturn.c;
						lc = getCodeReturn.lc;
					} else {
						if (!pl.p) throw "hufDecode issues";
						var j = 0;
						for (; j < pl.lit; j++) {
							var l = hufLength(encodingTable[pl.p[j]]);
							while (lc < l && inOffset.value < inOffsetEnd) {
								getChar(c, lc, uInt8Array2, inOffset);
								c = getCharReturn.c;
								lc = getCharReturn.lc;
							}
							if (lc >= l) {
								if (hufCode(encodingTable[pl.p[j]]) == (c >> lc - l & (1 << l) - 1)) {
									lc -= l;
									getCode(pl.p[j], rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
									c = getCodeReturn.c;
									lc = getCodeReturn.lc;
									break;
								}
							}
						}
						if (j == pl.lit) throw "hufDecode issues";
					}
				}
			}
			var i = 8 - ni & 7;
			c >>= i;
			lc -= i;
			while (lc > 0) {
				var pl = decodingTable[c << HUF_DECBITS - lc & HUF_DECMASK];
				if (pl.len) {
					lc -= pl.len;
					getCode(pl.lit, rlc, c, lc, uInt8Array2, inDataView, inOffset, outBuffer, outOffset, outBufferEndOffset);
					c = getCodeReturn.c;
					lc = getCodeReturn.lc;
				} else throw "hufDecode issues";
			}
			return true;
		}
		function hufUncompress(uInt8Array2, inDataView, inOffset, nCompressed, outBuffer, nRaw) {
			var outOffset = { value: 0 };
			var initialInOffset = inOffset.value;
			var im = parseUint32(inDataView, inOffset);
			var iM = parseUint32(inDataView, inOffset);
			inOffset.value += 4;
			var nBits = parseUint32(inDataView, inOffset);
			inOffset.value += 4;
			if (im < 0 || im >= HUF_ENCSIZE || iM < 0 || iM >= HUF_ENCSIZE) throw "Something wrong with HUF_ENCSIZE";
			var freq = new Array(HUF_ENCSIZE);
			var hdec = new Array(HUF_DECSIZE);
			hufClearDecTable(hdec);
			hufUnpackEncTable(uInt8Array2, inDataView, inOffset, nCompressed - (inOffset.value - initialInOffset), im, iM, freq);
			if (nBits > 8 * (nCompressed - (inOffset.value - initialInOffset))) throw "Something wrong with hufUncompress";
			hufBuildDecTable(freq, im, iM, hdec);
			hufDecode(freq, hdec, uInt8Array2, inDataView, inOffset, nBits, iM, nRaw, outBuffer, outOffset);
		}
		function applyLut(lut, data, nData) {
			for (var i = 0; i < nData; ++i) data[i] = lut[data[i]];
		}
		function predictor(source) {
			for (var t = 1; t < source.length; t++) {
				var d = source[t - 1] + source[t] - 128;
				source[t] = d;
			}
		}
		function interleaveScalar(source, out) {
			var t1 = 0;
			var t2 = Math.floor((source.length + 1) / 2);
			var s = 0;
			var stop = source.length - 1;
			while (true) {
				if (s > stop) break;
				out[s++] = source[t1++];
				if (s > stop) break;
				out[s++] = source[t2++];
			}
		}
		function decodeRunLength(source) {
			var size = source.byteLength;
			var out = new Array();
			var p = 0;
			var reader = new DataView(source);
			while (size > 0) {
				var l = reader.getInt8(p++);
				if (l < 0) {
					var count = -l;
					size -= count + 1;
					for (var i = 0; i < count; i++) out.push(reader.getUint8(p++));
				} else {
					var count = l;
					size -= 2;
					var value = reader.getUint8(p++);
					for (var i = 0; i < count + 1; i++) out.push(value);
				}
			}
			return out;
		}
		function lossyDctDecode(cscSet, rowPtrs, channelData, acBuffer, dcBuffer, outBuffer) {
			var dataView = new DataView(outBuffer.buffer);
			var width = channelData[cscSet.idx[0]].width;
			var height = channelData[cscSet.idx[0]].height;
			var numComp = 3;
			var numFullBlocksX = Math.floor(width / 8);
			var numBlocksX = Math.ceil(width / 8);
			var numBlocksY = Math.ceil(height / 8);
			var leftoverX = width - (numBlocksX - 1) * 8;
			var leftoverY = height - (numBlocksY - 1) * 8;
			var currAcComp = { value: 0 };
			var currDcComp = new Array(numComp);
			var dctData = new Array(numComp);
			var halfZigBlock = new Array(numComp);
			var rowBlock = new Array(numComp);
			var rowOffsets = new Array(numComp);
			for (let comp2 = 0; comp2 < numComp; ++comp2) {
				rowOffsets[comp2] = rowPtrs[cscSet.idx[comp2]];
				currDcComp[comp2] = comp2 < 1 ? 0 : currDcComp[comp2 - 1] + numBlocksX * numBlocksY;
				dctData[comp2] = /* @__PURE__ */ new Float32Array(64);
				halfZigBlock[comp2] = /* @__PURE__ */ new Uint16Array(64);
				rowBlock[comp2] = new Uint16Array(numBlocksX * 64);
			}
			for (let blocky = 0; blocky < numBlocksY; ++blocky) {
				var maxY = 8;
				if (blocky == numBlocksY - 1) maxY = leftoverY;
				var maxX = 8;
				for (let blockx = 0; blockx < numBlocksX; ++blockx) {
					if (blockx == numBlocksX - 1) maxX = leftoverX;
					for (let comp2 = 0; comp2 < numComp; ++comp2) {
						halfZigBlock[comp2].fill(0);
						halfZigBlock[comp2][0] = dcBuffer[currDcComp[comp2]++];
						unRleAC(currAcComp, acBuffer, halfZigBlock[comp2]);
						unZigZag(halfZigBlock[comp2], dctData[comp2]);
						dctInverse(dctData[comp2]);
					}
					csc709Inverse(dctData);
					for (let comp2 = 0; comp2 < numComp; ++comp2) convertToHalf(dctData[comp2], rowBlock[comp2], blockx * 64);
				}
				let offset2 = 0;
				for (let comp2 = 0; comp2 < numComp; ++comp2) {
					const type2 = channelData[cscSet.idx[comp2]].type;
					for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
						offset2 = rowOffsets[comp2][y2];
						for (let blockx = 0; blockx < numFullBlocksX; ++blockx) {
							const src = blockx * 64 + (y2 & 7) * 8;
							dataView.setUint16(offset2 + 0 * type2, rowBlock[comp2][src + 0], true);
							dataView.setUint16(offset2 + 2 * type2, rowBlock[comp2][src + 1], true);
							dataView.setUint16(offset2 + 4 * type2, rowBlock[comp2][src + 2], true);
							dataView.setUint16(offset2 + 6 * type2, rowBlock[comp2][src + 3], true);
							dataView.setUint16(offset2 + 8 * type2, rowBlock[comp2][src + 4], true);
							dataView.setUint16(offset2 + 10 * type2, rowBlock[comp2][src + 5], true);
							dataView.setUint16(offset2 + 12 * type2, rowBlock[comp2][src + 6], true);
							dataView.setUint16(offset2 + 14 * type2, rowBlock[comp2][src + 7], true);
							offset2 += 16 * type2;
						}
					}
					if (numFullBlocksX != numBlocksX) for (let y2 = 8 * blocky; y2 < 8 * blocky + maxY; ++y2) {
						const offset3 = rowOffsets[comp2][y2] + 8 * numFullBlocksX * INT16_SIZE * type2;
						const src = numFullBlocksX * 64 + (y2 & 7) * 8;
						for (let x2 = 0; x2 < maxX; ++x2) dataView.setUint16(offset3 + x2 * INT16_SIZE * type2, rowBlock[comp2][src + x2], true);
					}
				}
			}
			var halfRow = new Uint16Array(width);
			var dataView = new DataView(outBuffer.buffer);
			for (var comp = 0; comp < numComp; ++comp) {
				channelData[cscSet.idx[comp]].decoded = true;
				var type = channelData[cscSet.idx[comp]].type;
				if (channelData[comp].type != 2) continue;
				for (var y = 0; y < height; ++y) {
					const offset2 = rowOffsets[comp][y];
					for (var x = 0; x < width; ++x) halfRow[x] = dataView.getUint16(offset2 + x * INT16_SIZE * type, true);
					for (var x = 0; x < width; ++x) dataView.setFloat32(offset2 + x * INT16_SIZE * type, decodeFloat16(halfRow[x]), true);
				}
			}
		}
		function unRleAC(currAcComp, acBuffer, halfZigBlock) {
			var acValue;
			var dctComp = 1;
			while (dctComp < 64) {
				acValue = acBuffer[currAcComp.value];
				if (acValue == 65280) dctComp = 64;
				else if (acValue >> 8 == 255) dctComp += acValue & 255;
				else {
					halfZigBlock[dctComp] = acValue;
					dctComp++;
				}
				currAcComp.value++;
			}
		}
		function unZigZag(src, dst) {
			dst[0] = decodeFloat16(src[0]);
			dst[1] = decodeFloat16(src[1]);
			dst[2] = decodeFloat16(src[5]);
			dst[3] = decodeFloat16(src[6]);
			dst[4] = decodeFloat16(src[14]);
			dst[5] = decodeFloat16(src[15]);
			dst[6] = decodeFloat16(src[27]);
			dst[7] = decodeFloat16(src[28]);
			dst[8] = decodeFloat16(src[2]);
			dst[9] = decodeFloat16(src[4]);
			dst[10] = decodeFloat16(src[7]);
			dst[11] = decodeFloat16(src[13]);
			dst[12] = decodeFloat16(src[16]);
			dst[13] = decodeFloat16(src[26]);
			dst[14] = decodeFloat16(src[29]);
			dst[15] = decodeFloat16(src[42]);
			dst[16] = decodeFloat16(src[3]);
			dst[17] = decodeFloat16(src[8]);
			dst[18] = decodeFloat16(src[12]);
			dst[19] = decodeFloat16(src[17]);
			dst[20] = decodeFloat16(src[25]);
			dst[21] = decodeFloat16(src[30]);
			dst[22] = decodeFloat16(src[41]);
			dst[23] = decodeFloat16(src[43]);
			dst[24] = decodeFloat16(src[9]);
			dst[25] = decodeFloat16(src[11]);
			dst[26] = decodeFloat16(src[18]);
			dst[27] = decodeFloat16(src[24]);
			dst[28] = decodeFloat16(src[31]);
			dst[29] = decodeFloat16(src[40]);
			dst[30] = decodeFloat16(src[44]);
			dst[31] = decodeFloat16(src[53]);
			dst[32] = decodeFloat16(src[10]);
			dst[33] = decodeFloat16(src[19]);
			dst[34] = decodeFloat16(src[23]);
			dst[35] = decodeFloat16(src[32]);
			dst[36] = decodeFloat16(src[39]);
			dst[37] = decodeFloat16(src[45]);
			dst[38] = decodeFloat16(src[52]);
			dst[39] = decodeFloat16(src[54]);
			dst[40] = decodeFloat16(src[20]);
			dst[41] = decodeFloat16(src[22]);
			dst[42] = decodeFloat16(src[33]);
			dst[43] = decodeFloat16(src[38]);
			dst[44] = decodeFloat16(src[46]);
			dst[45] = decodeFloat16(src[51]);
			dst[46] = decodeFloat16(src[55]);
			dst[47] = decodeFloat16(src[60]);
			dst[48] = decodeFloat16(src[21]);
			dst[49] = decodeFloat16(src[34]);
			dst[50] = decodeFloat16(src[37]);
			dst[51] = decodeFloat16(src[47]);
			dst[52] = decodeFloat16(src[50]);
			dst[53] = decodeFloat16(src[56]);
			dst[54] = decodeFloat16(src[59]);
			dst[55] = decodeFloat16(src[61]);
			dst[56] = decodeFloat16(src[35]);
			dst[57] = decodeFloat16(src[36]);
			dst[58] = decodeFloat16(src[48]);
			dst[59] = decodeFloat16(src[49]);
			dst[60] = decodeFloat16(src[57]);
			dst[61] = decodeFloat16(src[58]);
			dst[62] = decodeFloat16(src[62]);
			dst[63] = decodeFloat16(src[63]);
		}
		function dctInverse(data) {
			const a = .5 * Math.cos(3.14159 / 4);
			const b = .5 * Math.cos(3.14159 / 16);
			const c = .5 * Math.cos(3.14159 / 8);
			const d = .5 * Math.cos(3 * 3.14159 / 16);
			const e = .5 * Math.cos(15.70795 / 16);
			const f = .5 * Math.cos(3 * 3.14159 / 8);
			const g = .5 * Math.cos(21.99113 / 16);
			var alpha = new Array(4);
			var beta = new Array(4);
			var theta = new Array(4);
			var gamma = new Array(4);
			for (var row = 0; row < 8; ++row) {
				var rowPtr = row * 8;
				alpha[0] = c * data[rowPtr + 2];
				alpha[1] = f * data[rowPtr + 2];
				alpha[2] = c * data[rowPtr + 6];
				alpha[3] = f * data[rowPtr + 6];
				beta[0] = b * data[rowPtr + 1] + d * data[rowPtr + 3] + e * data[rowPtr + 5] + g * data[rowPtr + 7];
				beta[1] = d * data[rowPtr + 1] - g * data[rowPtr + 3] - b * data[rowPtr + 5] - e * data[rowPtr + 7];
				beta[2] = e * data[rowPtr + 1] - b * data[rowPtr + 3] + g * data[rowPtr + 5] + d * data[rowPtr + 7];
				beta[3] = g * data[rowPtr + 1] - e * data[rowPtr + 3] + d * data[rowPtr + 5] - b * data[rowPtr + 7];
				theta[0] = a * (data[rowPtr + 0] + data[rowPtr + 4]);
				theta[3] = a * (data[rowPtr + 0] - data[rowPtr + 4]);
				theta[1] = alpha[0] + alpha[3];
				theta[2] = alpha[1] - alpha[2];
				gamma[0] = theta[0] + theta[1];
				gamma[1] = theta[3] + theta[2];
				gamma[2] = theta[3] - theta[2];
				gamma[3] = theta[0] - theta[1];
				data[rowPtr + 0] = gamma[0] + beta[0];
				data[rowPtr + 1] = gamma[1] + beta[1];
				data[rowPtr + 2] = gamma[2] + beta[2];
				data[rowPtr + 3] = gamma[3] + beta[3];
				data[rowPtr + 4] = gamma[3] - beta[3];
				data[rowPtr + 5] = gamma[2] - beta[2];
				data[rowPtr + 6] = gamma[1] - beta[1];
				data[rowPtr + 7] = gamma[0] - beta[0];
			}
			for (var column = 0; column < 8; ++column) {
				alpha[0] = c * data[16 + column];
				alpha[1] = f * data[16 + column];
				alpha[2] = c * data[48 + column];
				alpha[3] = f * data[48 + column];
				beta[0] = b * data[8 + column] + d * data[24 + column] + e * data[40 + column] + g * data[56 + column];
				beta[1] = d * data[8 + column] - g * data[24 + column] - b * data[40 + column] - e * data[56 + column];
				beta[2] = e * data[8 + column] - b * data[24 + column] + g * data[40 + column] + d * data[56 + column];
				beta[3] = g * data[8 + column] - e * data[24 + column] + d * data[40 + column] - b * data[56 + column];
				theta[0] = a * (data[column] + data[32 + column]);
				theta[3] = a * (data[column] - data[32 + column]);
				theta[1] = alpha[0] + alpha[3];
				theta[2] = alpha[1] - alpha[2];
				gamma[0] = theta[0] + theta[1];
				gamma[1] = theta[3] + theta[2];
				gamma[2] = theta[3] - theta[2];
				gamma[3] = theta[0] - theta[1];
				data[0 + column] = gamma[0] + beta[0];
				data[8 + column] = gamma[1] + beta[1];
				data[16 + column] = gamma[2] + beta[2];
				data[24 + column] = gamma[3] + beta[3];
				data[32 + column] = gamma[3] - beta[3];
				data[40 + column] = gamma[2] - beta[2];
				data[48 + column] = gamma[1] - beta[1];
				data[56 + column] = gamma[0] - beta[0];
			}
		}
		function csc709Inverse(data) {
			for (var i = 0; i < 64; ++i) {
				var y = data[0][i];
				var cb = data[1][i];
				var cr = data[2][i];
				data[0][i] = y + 1.5747 * cr;
				data[1][i] = y - .1873 * cb - .4682 * cr;
				data[2][i] = y + 1.8556 * cb;
			}
		}
		function convertToHalf(src, dst, idx) {
			for (var i = 0; i < 64; ++i) dst[idx + i] = DataUtils.toHalfFloat(toLinear(src[i]));
		}
		function toLinear(float) {
			if (float <= 1) return Math.sign(float) * Math.pow(Math.abs(float), 2.2);
			else return Math.sign(float) * Math.pow(logBase, Math.abs(float) - 1);
		}
		function uncompressRAW(info) {
			return new DataView(info.array.buffer, info.offset.value, info.size);
		}
		function uncompressRLE(info) {
			var compressed = info.viewer.buffer.slice(info.offset.value, info.offset.value + info.size);
			var rawBuffer = new Uint8Array(decodeRunLength(compressed));
			var tmpBuffer = new Uint8Array(rawBuffer.length);
			predictor(rawBuffer);
			interleaveScalar(rawBuffer, tmpBuffer);
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressZIP(info) {
			var rawBuffer = unzlibSync(info.array.slice(info.offset.value, info.offset.value + info.size));
			var tmpBuffer = new Uint8Array(rawBuffer.length);
			predictor(rawBuffer);
			interleaveScalar(rawBuffer, tmpBuffer);
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressPIZ(info) {
			var inDataView = info.viewer;
			var inOffset = { value: info.offset.value };
			var outBuffer = new Uint16Array(info.width * info.scanlineBlockSize * (info.channels * info.type));
			var bitmap = new Uint8Array(BITMAP_SIZE);
			var outBufferEnd = 0;
			var pizChannelData = new Array(info.channels);
			for (var i = 0; i < info.channels; i++) {
				pizChannelData[i] = {};
				pizChannelData[i]["start"] = outBufferEnd;
				pizChannelData[i]["end"] = pizChannelData[i]["start"];
				pizChannelData[i]["nx"] = info.width;
				pizChannelData[i]["ny"] = info.lines;
				pizChannelData[i]["size"] = info.type;
				outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
			}
			var minNonZero = parseUint16(inDataView, inOffset);
			var maxNonZero = parseUint16(inDataView, inOffset);
			if (maxNonZero >= BITMAP_SIZE) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
			if (minNonZero <= maxNonZero) for (var i = 0; i < maxNonZero - minNonZero + 1; i++) bitmap[i + minNonZero] = parseUint8(inDataView, inOffset);
			var lut = new Uint16Array(USHORT_RANGE);
			var maxValue = reverseLutFromBitmap(bitmap, lut);
			var length = parseUint32(inDataView, inOffset);
			hufUncompress(info.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
			for (var i = 0; i < info.channels; ++i) {
				var cd = pizChannelData[i];
				for (var j = 0; j < pizChannelData[i].size; ++j) wav2Decode(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
			}
			applyLut(lut, outBuffer, outBufferEnd);
			var tmpOffset2 = 0;
			var tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
			for (var y = 0; y < info.lines; y++) for (var c = 0; c < info.channels; c++) {
				var cd = pizChannelData[c];
				var n = cd.nx * cd.size;
				var cp = new Uint8Array(outBuffer.buffer, cd.end * INT16_SIZE, n * INT16_SIZE);
				tmpBuffer.set(cp, tmpOffset2);
				tmpOffset2 += n * INT16_SIZE;
				cd.end += n;
			}
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressPXR(info) {
			var rawBuffer = unzlibSync(info.array.slice(info.offset.value, info.offset.value + info.size));
			const sz = info.lines * info.channels * info.width;
			const tmpBuffer = info.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
			let tmpBufferEnd = 0;
			let writePtr = 0;
			const ptr = new Array(4);
			for (let y = 0; y < info.lines; y++) for (let c = 0; c < info.channels; c++) {
				let pixel = 0;
				switch (info.type) {
					case 1:
						ptr[0] = tmpBufferEnd;
						ptr[1] = ptr[0] + info.width;
						tmpBufferEnd = ptr[1] + info.width;
						for (let j = 0; j < info.width; ++j) {
							const diff = rawBuffer[ptr[0]++] << 8 | rawBuffer[ptr[1]++];
							pixel += diff;
							tmpBuffer[writePtr] = pixel;
							writePtr++;
						}
						break;
					case 2:
						ptr[0] = tmpBufferEnd;
						ptr[1] = ptr[0] + info.width;
						ptr[2] = ptr[1] + info.width;
						tmpBufferEnd = ptr[2] + info.width;
						for (let j = 0; j < info.width; ++j) {
							const diff = rawBuffer[ptr[0]++] << 24 | rawBuffer[ptr[1]++] << 16 | rawBuffer[ptr[2]++] << 8;
							pixel += diff;
							tmpBuffer[writePtr] = pixel;
							writePtr++;
						}
				}
			}
			return new DataView(tmpBuffer.buffer);
		}
		function uncompressDWA(info) {
			var inDataView = info.viewer;
			var inOffset = { value: info.offset.value };
			var outBuffer = new Uint8Array(info.width * info.lines * (info.channels * info.type * INT16_SIZE));
			var dwaHeader = {
				version: parseInt64(inDataView, inOffset),
				unknownUncompressedSize: parseInt64(inDataView, inOffset),
				unknownCompressedSize: parseInt64(inDataView, inOffset),
				acCompressedSize: parseInt64(inDataView, inOffset),
				dcCompressedSize: parseInt64(inDataView, inOffset),
				rleCompressedSize: parseInt64(inDataView, inOffset),
				rleUncompressedSize: parseInt64(inDataView, inOffset),
				rleRawSize: parseInt64(inDataView, inOffset),
				totalAcUncompressedCount: parseInt64(inDataView, inOffset),
				totalDcUncompressedCount: parseInt64(inDataView, inOffset),
				acCompression: parseInt64(inDataView, inOffset)
			};
			if (dwaHeader.version < 2) throw "EXRLoader.parse: " + EXRHeader.compression + " version " + dwaHeader.version + " is unsupported";
			var channelRules = new Array();
			var ruleSize = parseUint16(inDataView, inOffset) - INT16_SIZE;
			while (ruleSize > 0) {
				var name = parseNullTerminatedString(inDataView.buffer, inOffset);
				var value = parseUint8(inDataView, inOffset);
				var compression = value >> 2 & 3;
				var csc = (value >> 4) - 1;
				var index = new Int8Array([csc])[0];
				var type = parseUint8(inDataView, inOffset);
				channelRules.push({
					name,
					index,
					type,
					compression
				});
				ruleSize -= name.length + 3;
			}
			var channels = EXRHeader.channels;
			var channelData = new Array(info.channels);
			for (var i = 0; i < info.channels; ++i) {
				var cd = channelData[i] = {};
				var channel = channels[i];
				cd.name = channel.name;
				cd.compression = UNKNOWN;
				cd.decoded = false;
				cd.type = channel.pixelType;
				cd.pLinear = channel.pLinear;
				cd.width = info.width;
				cd.height = info.lines;
			}
			var cscSet = { idx: new Array(3) };
			for (var offset2 = 0; offset2 < info.channels; ++offset2) {
				var cd = channelData[offset2];
				for (var i = 0; i < channelRules.length; ++i) {
					var rule = channelRules[i];
					if (cd.name == rule.name) {
						cd.compression = rule.compression;
						if (rule.index >= 0) cscSet.idx[rule.index] = offset2;
						cd.offset = offset2;
					}
				}
			}
			if (dwaHeader.acCompressedSize > 0) switch (dwaHeader.acCompression) {
				case STATIC_HUFFMAN:
					var acBuffer = new Uint16Array(dwaHeader.totalAcUncompressedCount);
					hufUncompress(info.array, inDataView, inOffset, dwaHeader.acCompressedSize, acBuffer, dwaHeader.totalAcUncompressedCount);
					break;
				case DEFLATE:
					var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.totalAcUncompressedCount);
					var data = unzlibSync(compressed);
					var acBuffer = new Uint16Array(data.buffer);
					inOffset.value += dwaHeader.totalAcUncompressedCount;
			}
			if (dwaHeader.dcCompressedSize > 0) {
				var zlibInfo = {
					array: info.array,
					offset: inOffset,
					size: dwaHeader.dcCompressedSize
				};
				var dcBuffer = new Uint16Array(uncompressZIP(zlibInfo).buffer);
				inOffset.value += dwaHeader.dcCompressedSize;
			}
			if (dwaHeader.rleRawSize > 0) {
				var compressed = info.array.slice(inOffset.value, inOffset.value + dwaHeader.rleCompressedSize);
				var data = unzlibSync(compressed);
				var rleBuffer = decodeRunLength(data.buffer);
				inOffset.value += dwaHeader.rleCompressedSize;
			}
			var outBufferEnd = 0;
			var rowOffsets = new Array(channelData.length);
			for (var i = 0; i < rowOffsets.length; ++i) rowOffsets[i] = new Array();
			for (var y = 0; y < info.lines; ++y) for (var chan = 0; chan < channelData.length; ++chan) {
				rowOffsets[chan].push(outBufferEnd);
				outBufferEnd += channelData[chan].width * info.type * INT16_SIZE;
			}
			lossyDctDecode(cscSet, rowOffsets, channelData, acBuffer, dcBuffer, outBuffer);
			for (var i = 0; i < channelData.length; ++i) {
				var cd = channelData[i];
				if (cd.decoded) continue;
				switch (cd.compression) {
					case RLE:
						var row = 0;
						var rleOffset = 0;
						for (var y = 0; y < info.lines; ++y) {
							var rowOffsetBytes = rowOffsets[i][row];
							for (var x = 0; x < cd.width; ++x) {
								for (var byte = 0; byte < INT16_SIZE * cd.type; ++byte) outBuffer[rowOffsetBytes++] = rleBuffer[rleOffset + byte * cd.width * cd.height];
								rleOffset++;
							}
							row++;
						}
						break;
					case LOSSY_DCT:
					default: throw "EXRLoader.parse: unsupported channel compression";
				}
			}
			return new DataView(outBuffer.buffer);
		}
		function parseNullTerminatedString(buffer2, offset2) {
			var uintBuffer = new Uint8Array(buffer2);
			var endOffset = 0;
			while (uintBuffer[offset2.value + endOffset] != 0) endOffset += 1;
			var stringValue = new TextDecoder().decode(uintBuffer.slice(offset2.value, offset2.value + endOffset));
			offset2.value = offset2.value + endOffset + 1;
			return stringValue;
		}
		function parseFixedLengthString(buffer2, offset2, size) {
			var stringValue = new TextDecoder().decode(new Uint8Array(buffer2).slice(offset2.value, offset2.value + size));
			offset2.value = offset2.value + size;
			return stringValue;
		}
		function parseRational(dataView, offset2) {
			return [parseInt32(dataView, offset2), parseUint32(dataView, offset2)];
		}
		function parseTimecode(dataView, offset2) {
			return [parseUint32(dataView, offset2), parseUint32(dataView, offset2)];
		}
		function parseInt32(dataView, offset2) {
			var Int32 = dataView.getInt32(offset2.value, true);
			offset2.value = offset2.value + INT32_SIZE;
			return Int32;
		}
		function parseUint32(dataView, offset2) {
			var Uint32 = dataView.getUint32(offset2.value, true);
			offset2.value = offset2.value + INT32_SIZE;
			return Uint32;
		}
		function parseUint8Array(uInt8Array2, offset2) {
			var Uint8 = uInt8Array2[offset2.value];
			offset2.value = offset2.value + INT8_SIZE;
			return Uint8;
		}
		function parseUint8(dataView, offset2) {
			var Uint8 = dataView.getUint8(offset2.value);
			offset2.value = offset2.value + INT8_SIZE;
			return Uint8;
		}
		const parseInt64 = function(dataView, offset2) {
			let int;
			if ("getBigInt64" in DataView.prototype) int = Number(dataView.getBigInt64(offset2.value, true));
			else int = dataView.getUint32(offset2.value + 4, true) + Number(dataView.getUint32(offset2.value, true) << 32);
			offset2.value += ULONG_SIZE;
			return int;
		};
		function parseFloat32(dataView, offset2) {
			var float = dataView.getFloat32(offset2.value, true);
			offset2.value += FLOAT32_SIZE;
			return float;
		}
		function decodeFloat32(dataView, offset2) {
			return DataUtils.toHalfFloat(parseFloat32(dataView, offset2));
		}
		function decodeFloat16(binary) {
			var exponent = (binary & 31744) >> 10, fraction = binary & 1023;
			return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 31 ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 1024) : 6103515625e-14 * (fraction / 1024));
		}
		function parseUint16(dataView, offset2) {
			var Uint16 = dataView.getUint16(offset2.value, true);
			offset2.value += INT16_SIZE;
			return Uint16;
		}
		function parseFloat16(buffer2, offset2) {
			return decodeFloat16(parseUint16(buffer2, offset2));
		}
		function parseChlist(dataView, buffer2, offset2, size) {
			var startOffset = offset2.value;
			var channels = [];
			while (offset2.value < startOffset + size - 1) {
				var name = parseNullTerminatedString(buffer2, offset2);
				var pixelType = parseInt32(dataView, offset2);
				var pLinear = parseUint8(dataView, offset2);
				offset2.value += 3;
				var xSampling = parseInt32(dataView, offset2);
				var ySampling = parseInt32(dataView, offset2);
				channels.push({
					name,
					pixelType,
					pLinear,
					xSampling,
					ySampling
				});
			}
			offset2.value += 1;
			return channels;
		}
		function parseChromaticities(dataView, offset2) {
			return {
				redX: parseFloat32(dataView, offset2),
				redY: parseFloat32(dataView, offset2),
				greenX: parseFloat32(dataView, offset2),
				greenY: parseFloat32(dataView, offset2),
				blueX: parseFloat32(dataView, offset2),
				blueY: parseFloat32(dataView, offset2),
				whiteX: parseFloat32(dataView, offset2),
				whiteY: parseFloat32(dataView, offset2)
			};
		}
		function parseCompression(dataView, offset2) {
			return [
				"NO_COMPRESSION",
				"RLE_COMPRESSION",
				"ZIPS_COMPRESSION",
				"ZIP_COMPRESSION",
				"PIZ_COMPRESSION",
				"PXR24_COMPRESSION",
				"B44_COMPRESSION",
				"B44A_COMPRESSION",
				"DWAA_COMPRESSION",
				"DWAB_COMPRESSION"
			][parseUint8(dataView, offset2)];
		}
		function parseBox2i(dataView, offset2) {
			return {
				xMin: parseUint32(dataView, offset2),
				yMin: parseUint32(dataView, offset2),
				xMax: parseUint32(dataView, offset2),
				yMax: parseUint32(dataView, offset2)
			};
		}
		function parseLineOrder(dataView, offset2) {
			return ["INCREASING_Y"][parseUint8(dataView, offset2)];
		}
		function parseV2f(dataView, offset2) {
			return [parseFloat32(dataView, offset2), parseFloat32(dataView, offset2)];
		}
		function parseV3f(dataView, offset2) {
			return [
				parseFloat32(dataView, offset2),
				parseFloat32(dataView, offset2),
				parseFloat32(dataView, offset2)
			];
		}
		function parseValue(dataView, buffer2, offset2, type, size) {
			if (type === "string" || type === "stringvector" || type === "iccProfile") return parseFixedLengthString(buffer2, offset2, size);
			else if (type === "chlist") return parseChlist(dataView, buffer2, offset2, size);
			else if (type === "chromaticities") return parseChromaticities(dataView, offset2);
			else if (type === "compression") return parseCompression(dataView, offset2);
			else if (type === "box2i") return parseBox2i(dataView, offset2);
			else if (type === "lineOrder") return parseLineOrder(dataView, offset2);
			else if (type === "float") return parseFloat32(dataView, offset2);
			else if (type === "v2f") return parseV2f(dataView, offset2);
			else if (type === "v3f") return parseV3f(dataView, offset2);
			else if (type === "int") return parseInt32(dataView, offset2);
			else if (type === "rational") return parseRational(dataView, offset2);
			else if (type === "timecode") return parseTimecode(dataView, offset2);
			else if (type === "preview") {
				offset2.value += size;
				return "skipped";
			} else {
				offset2.value += size;
				return;
			}
		}
		function parseHeader(dataView, buffer2, offset2) {
			const EXRHeader2 = {};
			if (dataView.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
			EXRHeader2.version = dataView.getUint8(4);
			const spec = dataView.getUint8(5);
			EXRHeader2.spec = {
				singleTile: !!(spec & 2),
				longName: !!(spec & 4),
				deepFormat: !!(spec & 8),
				multiPart: !!(spec & 16)
			};
			offset2.value = 8;
			var keepReading = true;
			while (keepReading) {
				var attributeName = parseNullTerminatedString(buffer2, offset2);
				if (attributeName == 0) keepReading = false;
				else {
					var attributeType = parseNullTerminatedString(buffer2, offset2);
					var attributeValue = parseValue(dataView, buffer2, offset2, attributeType, parseUint32(dataView, offset2));
					if (attributeValue === void 0) console.warn(`EXRLoader.parse: skipped unknown header attribute type '${attributeType}'.`);
					else EXRHeader2[attributeName] = attributeValue;
				}
			}
			if ((spec & -5) != 0) {
				console.error("EXRHeader:", EXRHeader2);
				throw "THREE.EXRLoader: provided file is currently unsupported.";
			}
			return EXRHeader2;
		}
		function setupDecoder(EXRHeader2, dataView, uInt8Array2, offset2, outputType) {
			const EXRDecoder2 = {
				size: 0,
				viewer: dataView,
				array: uInt8Array2,
				offset: offset2,
				width: EXRHeader2.dataWindow.xMax - EXRHeader2.dataWindow.xMin + 1,
				height: EXRHeader2.dataWindow.yMax - EXRHeader2.dataWindow.yMin + 1,
				channels: EXRHeader2.channels.length,
				bytesPerLine: null,
				lines: null,
				inputSize: null,
				type: EXRHeader2.channels[0].pixelType,
				uncompress: null,
				getter: null,
				format: null,
				[hasColorSpace ? "colorSpace" : "encoding"]: null
			};
			switch (EXRHeader2.compression) {
				case "NO_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressRAW;
					break;
				case "RLE_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressRLE;
					break;
				case "ZIPS_COMPRESSION":
					EXRDecoder2.lines = 1;
					EXRDecoder2.uncompress = uncompressZIP;
					break;
				case "ZIP_COMPRESSION":
					EXRDecoder2.lines = 16;
					EXRDecoder2.uncompress = uncompressZIP;
					break;
				case "PIZ_COMPRESSION":
					EXRDecoder2.lines = 32;
					EXRDecoder2.uncompress = uncompressPIZ;
					break;
				case "PXR24_COMPRESSION":
					EXRDecoder2.lines = 16;
					EXRDecoder2.uncompress = uncompressPXR;
					break;
				case "DWAA_COMPRESSION":
					EXRDecoder2.lines = 32;
					EXRDecoder2.uncompress = uncompressDWA;
					break;
				case "DWAB_COMPRESSION":
					EXRDecoder2.lines = 256;
					EXRDecoder2.uncompress = uncompressDWA;
					break;
				default: throw "EXRLoader.parse: " + EXRHeader2.compression + " is unsupported";
			}
			EXRDecoder2.scanlineBlockSize = EXRDecoder2.lines;
			if (EXRDecoder2.type == 1) switch (outputType) {
				case FloatType:
					EXRDecoder2.getter = parseFloat16;
					EXRDecoder2.inputSize = INT16_SIZE;
					break;
				case HalfFloatType:
					EXRDecoder2.getter = parseUint16;
					EXRDecoder2.inputSize = INT16_SIZE;
			}
			else if (EXRDecoder2.type == 2) switch (outputType) {
				case FloatType:
					EXRDecoder2.getter = parseFloat32;
					EXRDecoder2.inputSize = FLOAT32_SIZE;
					break;
				case HalfFloatType:
					EXRDecoder2.getter = decodeFloat32;
					EXRDecoder2.inputSize = FLOAT32_SIZE;
			}
			else throw "EXRLoader.parse: unsupported pixelType " + EXRDecoder2.type + " for " + EXRHeader2.compression + ".";
			EXRDecoder2.blockCount = (EXRHeader2.dataWindow.yMax + 1) / EXRDecoder2.scanlineBlockSize;
			for (var i = 0; i < EXRDecoder2.blockCount; i++) parseInt64(dataView, offset2);
			EXRDecoder2.outputChannels = EXRDecoder2.channels == 3 ? 4 : EXRDecoder2.channels;
			const size = EXRDecoder2.width * EXRDecoder2.height * EXRDecoder2.outputChannels;
			switch (outputType) {
				case FloatType:
					EXRDecoder2.byteArray = new Float32Array(size);
					if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(1, 0, size);
					break;
				case HalfFloatType:
					EXRDecoder2.byteArray = new Uint16Array(size);
					if (EXRDecoder2.channels < EXRDecoder2.outputChannels) EXRDecoder2.byteArray.fill(15360, 0, size);
					break;
				default: console.error("THREE.EXRLoader: unsupported type: ", outputType);
			}
			EXRDecoder2.bytesPerLine = EXRDecoder2.width * EXRDecoder2.inputSize * EXRDecoder2.channels;
			if (EXRDecoder2.outputChannels == 4) EXRDecoder2.format = RGBAFormat;
			else EXRDecoder2.format = RedFormat;
			if (hasColorSpace) EXRDecoder2.colorSpace = "srgb-linear";
			else EXRDecoder2.encoding = 3e3;
			return EXRDecoder2;
		}
		const bufferDataView = new DataView(buffer);
		const uInt8Array = new Uint8Array(buffer);
		const offset = { value: 0 };
		const EXRHeader = parseHeader(bufferDataView, buffer, offset);
		const EXRDecoder = setupDecoder(EXRHeader, bufferDataView, uInt8Array, offset, this.type);
		const tmpOffset = { value: 0 };
		const channelOffsets = {
			R: 0,
			G: 1,
			B: 2,
			A: 3,
			Y: 0
		};
		for (let scanlineBlockIdx = 0; scanlineBlockIdx < EXRDecoder.height / EXRDecoder.scanlineBlockSize; scanlineBlockIdx++) {
			const line = parseUint32(bufferDataView, offset);
			EXRDecoder.size = parseUint32(bufferDataView, offset);
			EXRDecoder.lines = line + EXRDecoder.scanlineBlockSize > EXRDecoder.height ? EXRDecoder.height - line : EXRDecoder.scanlineBlockSize;
			const viewer = EXRDecoder.size < EXRDecoder.lines * EXRDecoder.bytesPerLine ? EXRDecoder.uncompress(EXRDecoder) : uncompressRAW(EXRDecoder);
			offset.value += EXRDecoder.size;
			for (let line_y = 0; line_y < EXRDecoder.scanlineBlockSize; line_y++) {
				const true_y = line_y + scanlineBlockIdx * EXRDecoder.scanlineBlockSize;
				if (true_y >= EXRDecoder.height) break;
				for (let channelID = 0; channelID < EXRDecoder.channels; channelID++) {
					const cOff = channelOffsets[EXRHeader.channels[channelID].name];
					for (let x = 0; x < EXRDecoder.width; x++) {
						tmpOffset.value = (line_y * (EXRDecoder.channels * EXRDecoder.width) + channelID * EXRDecoder.width + x) * EXRDecoder.inputSize;
						const outIndex = (EXRDecoder.height - 1 - true_y) * (EXRDecoder.width * EXRDecoder.outputChannels) + x * EXRDecoder.outputChannels + cOff;
						EXRDecoder.byteArray[outIndex] = EXRDecoder.getter(viewer, tmpOffset);
					}
				}
			}
		}
		return {
			header: EXRHeader,
			width: EXRDecoder.width,
			height: EXRDecoder.height,
			data: EXRDecoder.byteArray,
			format: EXRDecoder.format,
			[hasColorSpace ? "colorSpace" : "encoding"]: EXRDecoder[hasColorSpace ? "colorSpace" : "encoding"],
			type: this.type
		};
	}
	setDataType(value) {
		this.type = value;
		return this;
	}
	load(url, onLoad, onProgress, onError) {
		function onLoadCallback(texture, texData) {
			if (hasColorSpace) texture.colorSpace = texData.colorSpace;
			else texture.encoding = texData.encoding;
			texture.minFilter = LinearFilter;
			texture.magFilter = LinearFilter;
			texture.generateMipmaps = false;
			texture.flipY = false;
			if (onLoad) onLoad(texture, texData);
		}
		return super.load(url, onLoadCallback, onProgress, onError);
	}
};
//#endregion
//#region node_modules/troika-worker-utils/dist/troika-worker-utils.esm.js
/**
* Main content for the worker that handles the loading and execution of
* modules within it.
*/
function workerBootstrap() {
	var modules = Object.create(null);
	function registerModule(ref, callback) {
		var id = ref.id;
		var name = ref.name;
		var dependencies = ref.dependencies;
		if (dependencies === void 0) dependencies = [];
		var init = ref.init;
		if (init === void 0) init = function() {};
		var getTransferables = ref.getTransferables;
		if (getTransferables === void 0) getTransferables = null;
		if (modules[id]) return;
		try {
			dependencies = dependencies.map(function(dep) {
				if (dep && dep.isWorkerModule) {
					registerModule(dep, function(depResult) {
						if (depResult instanceof Error) throw depResult;
					});
					dep = modules[dep.id].value;
				}
				return dep;
			});
			init = rehydrate("<" + name + ">.init", init);
			if (getTransferables) getTransferables = rehydrate("<" + name + ">.getTransferables", getTransferables);
			var value = null;
			if (typeof init === "function") value = init.apply(void 0, dependencies);
			else console.error("worker module init function failed to rehydrate");
			modules[id] = {
				id,
				value,
				getTransferables
			};
			callback(value);
		} catch (err) {
			if (!(err && err.noLog)) console.error(err);
			callback(err);
		}
	}
	function callModule(ref, callback) {
		var ref$1;
		var id = ref.id;
		var args = ref.args;
		if (!modules[id] || typeof modules[id].value !== "function") callback(/* @__PURE__ */ new Error("Worker module " + id + ": not found or its 'init' did not return a function"));
		try {
			var result = (ref$1 = modules[id]).value.apply(ref$1, args);
			if (result && typeof result.then === "function") result.then(handleResult, function(rej) {
				return callback(rej instanceof Error ? rej : /* @__PURE__ */ new Error("" + rej));
			});
			else handleResult(result);
		} catch (err) {
			callback(err);
		}
		function handleResult(result) {
			try {
				var tx = modules[id].getTransferables && modules[id].getTransferables(result);
				if (!tx || !Array.isArray(tx) || !tx.length) tx = void 0;
				callback(result, tx);
			} catch (err) {
				console.error(err);
				callback(err);
			}
		}
	}
	function rehydrate(name, str) {
		var result = void 0;
		self.troikaDefine = function(r) {
			return result = r;
		};
		var url = URL.createObjectURL(new Blob(["/** " + name.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + str + "\n)"], { type: "application/javascript" }));
		try {
			importScripts(url);
		} catch (err) {
			console.error(err);
		}
		URL.revokeObjectURL(url);
		delete self.troikaDefine;
		return result;
	}
	self.addEventListener("message", function(e) {
		var ref = e.data;
		var messageId = ref.messageId;
		var action = ref.action;
		var data = ref.data;
		try {
			if (action === "registerModule") registerModule(data, function(result) {
				if (result instanceof Error) postMessage({
					messageId,
					success: false,
					error: result.message
				});
				else postMessage({
					messageId,
					success: true,
					result: { isCallable: typeof result === "function" }
				});
			});
			if (action === "callModule") callModule(data, function(result, transferables) {
				if (result instanceof Error) postMessage({
					messageId,
					success: false,
					error: result.message
				});
				else postMessage({
					messageId,
					success: true,
					result
				}, transferables || void 0);
			});
		} catch (err) {
			postMessage({
				messageId,
				success: false,
				error: err.stack
			});
		}
	});
}
/**
* Fallback for `defineWorkerModule` that behaves identically but runs in the main
* thread, for when the execution environment doesn't support web workers or they
* are disallowed due to e.g. CSP security restrictions.
*/
function defineMainThreadModule(options) {
	var moduleFunc = function() {
		var args = [], len = arguments.length;
		while (len--) args[len] = arguments[len];
		return moduleFunc._getInitResult().then(function(initResult) {
			if (typeof initResult === "function") return initResult.apply(void 0, args);
			else throw new Error("Worker module function was called but `init` did not return a callable function");
		});
	};
	moduleFunc._getInitResult = function() {
		var dependencies = options.dependencies;
		var init = options.init;
		dependencies = Array.isArray(dependencies) ? dependencies.map(function(dep) {
			if (dep) {
				dep = dep.onMainThread || dep;
				if (dep._getInitResult) dep = dep._getInitResult();
			}
			return dep;
		}) : [];
		var initPromise = Promise.all(dependencies).then(function(deps) {
			return init.apply(null, deps);
		});
		moduleFunc._getInitResult = function() {
			return initPromise;
		};
		return initPromise;
	};
	return moduleFunc;
}
var supportsWorkers = function() {
	var supported = false;
	if (typeof window !== "undefined" && typeof window.document !== "undefined") try {
		new Worker(URL.createObjectURL(new Blob([""], { type: "application/javascript" }))).terminate();
		supported = true;
	} catch (err) {
		console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + err.message + "]");
	}
	supportsWorkers = function() {
		return supported;
	};
	return supported;
};
var _workerModuleId = 0;
var _messageId = 0;
var _allowInitAsString = false;
var workers = Object.create(null);
var registeredModules = Object.create(null);
var openRequests = Object.create(null);
/**
* Define a module of code that will be executed with a web worker. This provides a simple
* interface for moving chunks of logic off the main thread, and managing their dependencies
* among one another.
*
* @param {object} options
* @param {function} options.init
* @param {array} [options.dependencies]
* @param {function} [options.getTransferables]
* @param {string} [options.name]
* @param {string} [options.workerId]
* @return {function(...[*]): {then}}
*/
function defineWorkerModule(options) {
	if ((!options || typeof options.init !== "function") && !_allowInitAsString) throw new Error("requires `options.init` function");
	var dependencies = options.dependencies;
	var init = options.init;
	var getTransferables = options.getTransferables;
	var workerId = options.workerId;
	var onMainThread = defineMainThreadModule(options);
	if (workerId == null) workerId = "#default";
	var id = "workerModule" + ++_workerModuleId;
	var name = options.name || id;
	var registrationPromise = null;
	dependencies = dependencies && dependencies.map(function(dep) {
		if (typeof dep === "function" && !dep.workerModuleData) {
			_allowInitAsString = true;
			dep = defineWorkerModule({
				workerId,
				name: "<" + name + "> function dependency: " + dep.name,
				init: "function(){return (\n" + stringifyFunction(dep) + "\n)}"
			});
			_allowInitAsString = false;
		}
		if (dep && dep.workerModuleData) dep = dep.workerModuleData;
		return dep;
	});
	function moduleFunc() {
		var args = [], len = arguments.length;
		while (len--) args[len] = arguments[len];
		if (!supportsWorkers()) return onMainThread.apply(void 0, args);
		if (!registrationPromise) {
			registrationPromise = callWorker(workerId, "registerModule", moduleFunc.workerModuleData);
			var unregister = function() {
				registrationPromise = null;
				registeredModules[workerId].delete(unregister);
			};
			(registeredModules[workerId] || (registeredModules[workerId] = /* @__PURE__ */ new Set())).add(unregister);
		}
		return registrationPromise.then(function(ref) {
			if (ref.isCallable) return callWorker(workerId, "callModule", {
				id,
				args
			});
			else throw new Error("Worker module function was called but `init` did not return a callable function");
		});
	}
	moduleFunc.workerModuleData = {
		isWorkerModule: true,
		id,
		name,
		dependencies,
		init: stringifyFunction(init),
		getTransferables: getTransferables && stringifyFunction(getTransferables)
	};
	moduleFunc.onMainThread = onMainThread;
	return moduleFunc;
}
/**
* Terminate an active Worker by a workerId that was passed to defineWorkerModule.
* This only terminates the Worker itself; the worker module will remain available
* and if you call it again its Worker will be respawned.
* @param {string} workerId
*/
function terminateWorker(workerId) {
	if (registeredModules[workerId]) registeredModules[workerId].forEach(function(unregister) {
		unregister();
	});
	if (workers[workerId]) {
		workers[workerId].terminate();
		delete workers[workerId];
	}
}
/**
* Stringifies a function into a form that can be deserialized in the worker
* @param fn
*/
function stringifyFunction(fn) {
	var str = fn.toString();
	if (!/^function/.test(str) && /^\w+\s*\(/.test(str)) str = "function " + str;
	return str;
}
function getWorker(workerId) {
	var worker = workers[workerId];
	if (!worker) {
		var bootstrap = stringifyFunction(workerBootstrap);
		worker = workers[workerId] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + workerId.replace(/\*/g, "") + " **/\n\n;(" + bootstrap + ")()"], { type: "application/javascript" })));
		worker.onmessage = function(e) {
			var response = e.data;
			var msgId = response.messageId;
			var callback = openRequests[msgId];
			if (!callback) throw new Error("WorkerModule response with empty or unknown messageId");
			delete openRequests[msgId];
			callback(response);
		};
	}
	return worker;
}
function callWorker(workerId, action, data) {
	return new Promise(function(resolve, reject) {
		var messageId = ++_messageId;
		openRequests[messageId] = function(response) {
			if (response.success) resolve(response.result);
			else reject(/* @__PURE__ */ new Error("Error in worker " + action + " call: " + response.error));
		};
		getWorker(workerId).postMessage({
			messageId,
			action,
			data
		});
	});
}
//#endregion
//#region node_modules/webgl-sdf-generator/dist/webgl-sdf-generator.mjs
function SDFGenerator() {
	return function(exports) {
		/**
		* Find the point on a quadratic bezier curve at t where t is in the range [0, 1]
		*/
		function pointOnQuadraticBezier(x0, y0, x1, y1, x2, y2, t, pointOut) {
			var t2 = 1 - t;
			pointOut.x = t2 * t2 * x0 + 2 * t2 * t * x1 + t * t * x2;
			pointOut.y = t2 * t2 * y0 + 2 * t2 * t * y1 + t * t * y2;
		}
		/**
		* Find the point on a cubic bezier curve at t where t is in the range [0, 1]
		*/
		function pointOnCubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, t, pointOut) {
			var t2 = 1 - t;
			pointOut.x = t2 * t2 * t2 * x0 + 3 * t2 * t2 * t * x1 + 3 * t2 * t * t * x2 + t * t * t * x3;
			pointOut.y = t2 * t2 * t2 * y0 + 3 * t2 * t2 * t * y1 + 3 * t2 * t * t * y2 + t * t * t * y3;
		}
		/**
		* Parse a path string into its constituent line/curve commands, invoking a callback for each.
		* @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
		* @param {function(
		*   command: 'L'|'Q'|'C',
		*   startX: number,
		*   startY: number,
		*   endX: number,
		*   endY: number,
		*   ctrl1X?: number,
		*   ctrl1Y?: number,
		*   ctrl2X?: number,
		*   ctrl2Y?: number
		* )} commandCallback - A callback function that will be called once for each parsed path command, passing the
		*                      command identifier (only L/Q/C commands) and its numeric arguments.
		*/
		function forEachPathCommand(pathString, commandCallback) {
			var segmentRE = /([MLQCZ])([^MLQCZ]*)/g;
			var match, firstX, firstY, prevX, prevY;
			while (match = segmentRE.exec(pathString)) {
				var args = match[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(v) {
					return parseFloat(v);
				});
				switch (match[1]) {
					case "M":
						prevX = firstX = args[0];
						prevY = firstY = args[1];
						break;
					case "L":
						if (args[0] !== prevX || args[1] !== prevY) commandCallback("L", prevX, prevY, prevX = args[0], prevY = args[1]);
						break;
					case "Q":
						commandCallback("Q", prevX, prevY, prevX = args[2], prevY = args[3], args[0], args[1]);
						break;
					case "C":
						commandCallback("C", prevX, prevY, prevX = args[4], prevY = args[5], args[0], args[1], args[2], args[3]);
						break;
					case "Z": if (prevX !== firstX || prevY !== firstY) commandCallback("L", prevX, prevY, firstX, firstY);
				}
			}
		}
		/**
		* Convert a path string to a series of straight line segments
		* @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
		* @param {function(x1:number, y1:number, x2:number, y2:number)} segmentCallback - A callback
		*        function that will be called once for every line segment
		* @param {number} [curvePoints] - How many straight line segments to use when approximating a
		*        bezier curve in the path. Defaults to 16.
		*/
		function pathToLineSegments(pathString, segmentCallback, curvePoints) {
			if (curvePoints === void 0) curvePoints = 16;
			var tempPoint = {
				x: 0,
				y: 0
			};
			forEachPathCommand(pathString, function(command, startX, startY, endX, endY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y) {
				switch (command) {
					case "L":
						segmentCallback(startX, startY, endX, endY);
						break;
					case "Q":
						var prevCurveX = startX;
						var prevCurveY = startY;
						for (var i = 1; i < curvePoints; i++) {
							pointOnQuadraticBezier(startX, startY, ctrl1X, ctrl1Y, endX, endY, i / (curvePoints - 1), tempPoint);
							segmentCallback(prevCurveX, prevCurveY, tempPoint.x, tempPoint.y);
							prevCurveX = tempPoint.x;
							prevCurveY = tempPoint.y;
						}
						break;
					case "C":
						var prevCurveX$1 = startX;
						var prevCurveY$1 = startY;
						for (var i$1 = 1; i$1 < curvePoints; i$1++) {
							pointOnCubicBezier(startX, startY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY, i$1 / (curvePoints - 1), tempPoint);
							segmentCallback(prevCurveX$1, prevCurveY$1, tempPoint.x, tempPoint.y);
							prevCurveX$1 = tempPoint.x;
							prevCurveY$1 = tempPoint.y;
						}
				}
			});
		}
		var viewportQuadVertex = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
		var copyTexFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}";
		var cache = /* @__PURE__ */ new WeakMap();
		var glContextParams = {
			premultipliedAlpha: false,
			preserveDrawingBuffer: true,
			antialias: false,
			depth: false
		};
		/**
		* This is a little helper library for WebGL. It assists with state management for a GL context.
		* It's pretty tightly wrapped to the needs of this package, not very general-purpose.
		*
		* @param { WebGLRenderingContext | HTMLCanvasElement | OffscreenCanvas } glOrCanvas - the GL context to wrap
		* @param { ({gl, getExtension, withProgram, withTexture, withTextureFramebuffer, handleContextLoss}) => void } callback
		*/
		function withWebGLContext(glOrCanvas, callback) {
			var gl = glOrCanvas.getContext ? glOrCanvas.getContext("webgl", glContextParams) : glOrCanvas;
			var wrapper = cache.get(gl);
			if (!wrapper) {
				var isWebGL2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
				var extensions = {};
				var programs = {};
				var textures = {};
				var textureUnit = -1;
				var framebufferStack = [];
				gl.canvas.addEventListener("webglcontextlost", function(e) {
					handleContextLoss();
					e.preventDefault();
				}, false);
				function getExtension(name) {
					var ext = extensions[name];
					if (!ext) {
						ext = extensions[name] = gl.getExtension(name);
						if (!ext) throw new Error(name + " not supported");
					}
					return ext;
				}
				function compileShader(src, type) {
					var shader = gl.createShader(type);
					gl.shaderSource(shader, src);
					gl.compileShader(shader);
					return shader;
				}
				function withProgram(name, vert, frag, func) {
					if (!programs[name]) {
						var attributes = {};
						var uniforms = {};
						var program = gl.createProgram();
						gl.attachShader(program, compileShader(vert, gl.VERTEX_SHADER));
						gl.attachShader(program, compileShader(frag, gl.FRAGMENT_SHADER));
						gl.linkProgram(program);
						programs[name] = {
							program,
							transaction: function transaction(func) {
								gl.useProgram(program);
								func({
									setUniform: function setUniform(type, name) {
										var values = [], len = arguments.length - 2;
										while (len-- > 0) values[len] = arguments[len + 2];
										var uniformLoc = uniforms[name] || (uniforms[name] = gl.getUniformLocation(program, name));
										gl["uniform" + type].apply(gl, [uniformLoc].concat(values));
									},
									setAttribute: function setAttribute(name, size, usage, instancingDivisor, data) {
										var attr = attributes[name];
										if (!attr) attr = attributes[name] = {
											buf: gl.createBuffer(),
											loc: gl.getAttribLocation(program, name),
											data: null
										};
										gl.bindBuffer(gl.ARRAY_BUFFER, attr.buf);
										gl.vertexAttribPointer(attr.loc, size, gl.FLOAT, false, 0, 0);
										gl.enableVertexAttribArray(attr.loc);
										if (isWebGL2) gl.vertexAttribDivisor(attr.loc, instancingDivisor);
										else getExtension("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(attr.loc, instancingDivisor);
										if (data !== attr.data) {
											gl.bufferData(gl.ARRAY_BUFFER, data, usage);
											attr.data = data;
										}
									}
								});
							}
						};
					}
					programs[name].transaction(func);
				}
				function withTexture(name, func) {
					textureUnit++;
					try {
						gl.activeTexture(gl.TEXTURE0 + textureUnit);
						var texture = textures[name];
						if (!texture) {
							texture = textures[name] = gl.createTexture();
							gl.bindTexture(gl.TEXTURE_2D, texture);
							gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
							gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
						}
						gl.bindTexture(gl.TEXTURE_2D, texture);
						func(texture, textureUnit);
					} finally {
						textureUnit--;
					}
				}
				function withTextureFramebuffer(texture, textureUnit, func) {
					var framebuffer = gl.createFramebuffer();
					framebufferStack.push(framebuffer);
					gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
					gl.activeTexture(gl.TEXTURE0 + textureUnit);
					gl.bindTexture(gl.TEXTURE_2D, texture);
					gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
					try {
						func(framebuffer);
					} finally {
						gl.deleteFramebuffer(framebuffer);
						gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferStack[--framebufferStack.length - 1] || null);
					}
				}
				function handleContextLoss() {
					extensions = {};
					programs = {};
					textures = {};
					textureUnit = -1;
					framebufferStack.length = 0;
				}
				cache.set(gl, wrapper = {
					gl,
					isWebGL2,
					getExtension,
					withProgram,
					withTexture,
					withTextureFramebuffer,
					handleContextLoss
				});
			}
			callback(wrapper);
		}
		function renderImageData(glOrCanvas, imageData, x, y, width, height, channels, framebuffer) {
			if (channels === void 0) channels = 15;
			if (framebuffer === void 0) framebuffer = null;
			withWebGLContext(glOrCanvas, function(ref) {
				var gl = ref.gl;
				var withProgram = ref.withProgram;
				var withTexture = ref.withTexture;
				withTexture("copy", function(tex, texUnit) {
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
					withProgram("copy", viewportQuadVertex, copyTexFragment, function(ref) {
						var setUniform = ref.setUniform;
						var setAttribute = ref.setAttribute;
						setAttribute("aUV", 2, gl.STATIC_DRAW, 0, new Float32Array([
							0,
							0,
							2,
							0,
							0,
							2
						]));
						setUniform("1i", "image", texUnit);
						gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
						gl.disable(gl.BLEND);
						gl.colorMask(channels & 8, channels & 4, channels & 2, channels & 1);
						gl.viewport(x, y, width, height);
						gl.scissor(x, y, width, height);
						gl.drawArrays(gl.TRIANGLES, 0, 3);
					});
				});
			});
		}
		/**
		* Resizing a canvas clears its contents; this utility copies the previous contents over.
		* @param canvas
		* @param newWidth
		* @param newHeight
		*/
		function resizeWebGLCanvasWithoutClearing(canvas, newWidth, newHeight) {
			var width = canvas.width;
			var height = canvas.height;
			withWebGLContext(canvas, function(ref) {
				var gl = ref.gl;
				var data = new Uint8Array(width * height * 4);
				gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
				canvas.width = newWidth;
				canvas.height = newHeight;
				renderImageData(gl, data, 0, 0, width, height);
			});
		}
		var webglUtils = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			withWebGLContext,
			renderImageData,
			resizeWebGLCanvasWithoutClearing
		});
		function generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
			if (sdfExponent === void 0) sdfExponent = 1;
			var textureData = new Uint8Array(sdfWidth * sdfHeight);
			var viewBoxWidth = viewBox[2] - viewBox[0];
			var viewBoxHeight = viewBox[3] - viewBox[1];
			var segments = [];
			pathToLineSegments(path, function(x1, y1, x2, y2) {
				segments.push({
					x1,
					y1,
					x2,
					y2,
					minX: Math.min(x1, x2),
					minY: Math.min(y1, y2),
					maxX: Math.max(x1, x2),
					maxY: Math.max(y1, y2)
				});
			});
			segments.sort(function(a, b) {
				return a.maxX - b.maxX;
			});
			for (var sdfX = 0; sdfX < sdfWidth; sdfX++) for (var sdfY = 0; sdfY < sdfHeight; sdfY++) {
				var signedDist = findNearestSignedDistance(viewBox[0] + viewBoxWidth * (sdfX + .5) / sdfWidth, viewBox[1] + viewBoxHeight * (sdfY + .5) / sdfHeight);
				var alpha = Math.pow(1 - Math.abs(signedDist) / maxDistance, sdfExponent) / 2;
				if (signedDist < 0) alpha = 1 - alpha;
				alpha = Math.max(0, Math.min(255, Math.round(alpha * 255)));
				textureData[sdfY * sdfWidth + sdfX] = alpha;
			}
			return textureData;
			/**
			* For a given x/y, search the index for the closest line segment and return
			* its signed distance. Negative = inside, positive = outside, zero = on edge
			* @param x
			* @param y
			* @returns {number}
			*/
			function findNearestSignedDistance(x, y) {
				var closestDistSq = Infinity;
				var closestDist = Infinity;
				for (var i = segments.length; i--;) {
					var seg = segments[i];
					if (seg.maxX + closestDist <= x) break;
					if (x + closestDist > seg.minX && y - closestDist < seg.maxY && y + closestDist > seg.minY) {
						var distSq = absSquareDistanceToLineSegment(x, y, seg.x1, seg.y1, seg.x2, seg.y2);
						if (distSq < closestDistSq) {
							closestDistSq = distSq;
							closestDist = Math.sqrt(closestDistSq);
						}
					}
				}
				if (isPointInPoly(x, y)) closestDist = -closestDist;
				return closestDist;
			}
			/**
			* Determine whether the given point lies inside or outside the glyph. Uses a simple
			* winding-number ray casting algorithm using a ray pointing east from the point.
			*/
			function isPointInPoly(x, y) {
				var winding = 0;
				for (var i = segments.length; i--;) {
					var seg = segments[i];
					if (seg.maxX <= x) break;
					if (seg.y1 > y !== seg.y2 > y && x < (seg.x2 - seg.x1) * (y - seg.y1) / (seg.y2 - seg.y1) + seg.x1) winding += seg.y1 < seg.y2 ? 1 : -1;
				}
				return winding !== 0;
			}
		}
		function generateIntoCanvas$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
			if (sdfExponent === void 0) sdfExponent = 1;
			if (x === void 0) x = 0;
			if (y === void 0) y = 0;
			if (channel === void 0) channel = 0;
			generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
		}
		function generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
			if (sdfExponent === void 0) sdfExponent = 1;
			if (x === void 0) x = 0;
			if (y === void 0) y = 0;
			if (channel === void 0) channel = 0;
			var data = generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent);
			var rgbaData = new Uint8Array(data.length * 4);
			for (var i = 0; i < data.length; i++) rgbaData[i * 4 + channel] = data[i];
			renderImageData(glOrCanvas, rgbaData, x, y, sdfWidth, sdfHeight, 1 << 3 - channel, framebuffer);
		}
		/**
		* Find the absolute distance from a point to a line segment at closest approach
		*/
		function absSquareDistanceToLineSegment(x, y, lineX0, lineY0, lineX1, lineY1) {
			var ldx = lineX1 - lineX0;
			var ldy = lineY1 - lineY0;
			var lengthSq = ldx * ldx + ldy * ldy;
			var t = lengthSq ? Math.max(0, Math.min(1, ((x - lineX0) * ldx + (y - lineY0) * ldy) / lengthSq)) : 0;
			var dx = x - (lineX0 + t * ldx);
			var dy = y - (lineY0 + t * ldy);
			return dx * dx + dy * dy;
		}
		var javascript = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			generate: generate$2,
			generateIntoCanvas: generateIntoCanvas$2,
			generateIntoFramebuffer: generateIntoFramebuffer$1
		});
		var mainVertex = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
		var mainFragment = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}";
		var postFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}";
		var viewportUVs = new Float32Array([
			0,
			0,
			2,
			0,
			0,
			2
		]);
		var implicitContext = null;
		var isTestingSupport = false;
		var NULL_OBJECT = {};
		var supportByCanvas = /* @__PURE__ */ new WeakMap();
		function validateSupport(glOrCanvas) {
			if (!isTestingSupport && !isSupported(glOrCanvas)) throw new Error("WebGL generation not supported");
		}
		function generate$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas) {
			if (sdfExponent === void 0) sdfExponent = 1;
			if (glOrCanvas === void 0) glOrCanvas = null;
			if (!glOrCanvas) {
				glOrCanvas = implicitContext;
				if (!glOrCanvas) {
					var canvas = typeof OffscreenCanvas === "function" ? new OffscreenCanvas(1, 1) : typeof document !== "undefined" ? document.createElement("canvas") : null;
					if (!canvas) throw new Error("OffscreenCanvas or DOM canvas not supported");
					glOrCanvas = implicitContext = canvas.getContext("webgl", { depth: false });
				}
			}
			validateSupport(glOrCanvas);
			var rgbaData = new Uint8Array(sdfWidth * sdfHeight * 4);
			withWebGLContext(glOrCanvas, function(ref) {
				var gl = ref.gl;
				var withTexture = ref.withTexture;
				var withTextureFramebuffer = ref.withTextureFramebuffer;
				withTexture("readable", function(texture, textureUnit) {
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, sdfWidth, sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
					withTextureFramebuffer(texture, textureUnit, function(framebuffer) {
						generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, gl, framebuffer, 0, 0, 0);
						gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, rgbaData);
					});
				});
			});
			var data = new Uint8Array(sdfWidth * sdfHeight);
			for (var i = 0, j = 0; i < rgbaData.length; i += 4) data[j++] = rgbaData[i];
			return data;
		}
		function generateIntoCanvas$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
			if (sdfExponent === void 0) sdfExponent = 1;
			if (x === void 0) x = 0;
			if (y === void 0) y = 0;
			if (channel === void 0) channel = 0;
			generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
		}
		function generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
			if (sdfExponent === void 0) sdfExponent = 1;
			if (x === void 0) x = 0;
			if (y === void 0) y = 0;
			if (channel === void 0) channel = 0;
			validateSupport(glOrCanvas);
			var lineSegmentCoords = [];
			pathToLineSegments(path, function(x1, y1, x2, y2) {
				lineSegmentCoords.push(x1, y1, x2, y2);
			});
			lineSegmentCoords = new Float32Array(lineSegmentCoords);
			withWebGLContext(glOrCanvas, function(ref) {
				var gl = ref.gl;
				var isWebGL2 = ref.isWebGL2;
				var getExtension = ref.getExtension;
				var withProgram = ref.withProgram;
				var withTexture = ref.withTexture;
				var withTextureFramebuffer = ref.withTextureFramebuffer;
				var handleContextLoss = ref.handleContextLoss;
				withTexture("rawDistances", function(intermediateTexture, intermediateTextureUnit) {
					if (sdfWidth !== intermediateTexture._lastWidth || sdfHeight !== intermediateTexture._lastHeight) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, intermediateTexture._lastWidth = sdfWidth, intermediateTexture._lastHeight = sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
					withProgram("main", mainVertex, mainFragment, function(ref) {
						var setAttribute = ref.setAttribute;
						var setUniform = ref.setUniform;
						var instancingExtension = !isWebGL2 && getExtension("ANGLE_instanced_arrays");
						var blendMinMaxExtension = !isWebGL2 && getExtension("EXT_blend_minmax");
						setAttribute("aUV", 2, gl.STATIC_DRAW, 0, viewportUVs);
						setAttribute("aLineSegment", 4, gl.DYNAMIC_DRAW, 1, lineSegmentCoords);
						setUniform.apply(void 0, ["4f", "uGlyphBounds"].concat(viewBox));
						setUniform("1f", "uMaxDistance", maxDistance);
						setUniform("1f", "uExponent", sdfExponent);
						withTextureFramebuffer(intermediateTexture, intermediateTextureUnit, function(framebuffer) {
							gl.enable(gl.BLEND);
							gl.colorMask(true, true, true, true);
							gl.viewport(0, 0, sdfWidth, sdfHeight);
							gl.scissor(0, 0, sdfWidth, sdfHeight);
							gl.blendFunc(gl.ONE, gl.ONE);
							gl.blendEquationSeparate(gl.FUNC_ADD, isWebGL2 ? gl.MAX : blendMinMaxExtension.MAX_EXT);
							gl.clear(gl.COLOR_BUFFER_BIT);
							if (isWebGL2) gl.drawArraysInstanced(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
							else instancingExtension.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
						});
					});
					withProgram("post", viewportQuadVertex, postFragment, function(program) {
						program.setAttribute("aUV", 2, gl.STATIC_DRAW, 0, viewportUVs);
						program.setUniform("1i", "tex", intermediateTextureUnit);
						gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
						gl.disable(gl.BLEND);
						gl.colorMask(channel === 0, channel === 1, channel === 2, channel === 3);
						gl.viewport(x, y, sdfWidth, sdfHeight);
						gl.scissor(x, y, sdfWidth, sdfHeight);
						gl.drawArrays(gl.TRIANGLES, 0, 3);
					});
				});
				if (gl.isContextLost()) {
					handleContextLoss();
					throw new Error("webgl context lost");
				}
			});
		}
		function isSupported(glOrCanvas) {
			var key = !glOrCanvas || glOrCanvas === implicitContext ? NULL_OBJECT : glOrCanvas.canvas || glOrCanvas;
			var supported = supportByCanvas.get(key);
			if (supported === void 0) {
				isTestingSupport = true;
				var failReason = null;
				try {
					var expectedResult = [
						97,
						106,
						97,
						61,
						99,
						137,
						118,
						80,
						80,
						118,
						137,
						99,
						61,
						97,
						106,
						97
					];
					var testResult = generate$1(4, 4, "M8,8L16,8L24,24L16,24Z", [
						0,
						0,
						32,
						32
					], 24, 1, glOrCanvas);
					supported = testResult && expectedResult.length === testResult.length && testResult.every(function(val, i) {
						return val === expectedResult[i];
					});
					if (!supported) {
						failReason = "bad trial run results";
						console.info(expectedResult, testResult);
					}
				} catch (err) {
					supported = false;
					failReason = err.message;
				}
				if (failReason) console.warn("WebGL SDF generation not supported:", failReason);
				isTestingSupport = false;
				supportByCanvas.set(key, supported);
			}
			return supported;
		}
		var webgl = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			generate: generate$1,
			generateIntoCanvas: generateIntoCanvas$1,
			generateIntoFramebuffer,
			isSupported
		});
		/**
		* Generate an SDF texture image for a 2D path.
		*
		* @param {number} sdfWidth - width of the SDF output image in pixels.
		* @param {number} sdfHeight - height of the SDF output image in pixels.
		* @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
		* @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
		* @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
		*        to half the maximum viewBox dimension.
		* @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
		*        will give greater precision nearer the glyph's path.
		* @return {Uint8Array}
		*/
		function generate(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
			if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
			if (sdfExponent === void 0) sdfExponent = 1;
			try {
				return generate$1.apply(webgl, arguments);
			} catch (e) {
				console.info("WebGL SDF generation failed, falling back to JS", e);
				return generate$2.apply(javascript, arguments);
			}
		}
		/**
		* Generate an SDF texture image for a 2D path, inserting the result into a WebGL `canvas` at a given x/y position
		* and color channel. This is generally much faster than calling `generate` because it does not require reading pixels
		* back from the GPU->CPU -- the `canvas` can be used directly as a WebGL texture image, so it all stays on the GPU.
		*
		* @param {number} sdfWidth - width of the SDF output image in pixels.
		* @param {number} sdfHeight - height of the SDF output image in pixels.
		* @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
		* @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
		* @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
		*        to half the maximum viewBox dimension.
		* @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
		*        will give greater precision nearer the glyph's path.
		* @param {HTMLCanvasElement|OffscreenCanvas} canvas - a WebGL-enabled canvas into which the SDF will be rendered.
		*        Only the relevant rect/channel will be modified, the rest will be preserved. To avoid unpredictable results
		*        due to shared GL context state, this canvas should be dedicated to use by this library alone.
		* @param {number} x - the x position at which to render the SDF.
		* @param {number} y - the y position at which to render the SDF.
		* @param {number} channel - the color channel index (0-4) into which the SDF will be rendered.
		* @return {Uint8Array}
		*/
		function generateIntoCanvas(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
			if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
			if (sdfExponent === void 0) sdfExponent = 1;
			if (x === void 0) x = 0;
			if (y === void 0) y = 0;
			if (channel === void 0) channel = 0;
			try {
				return generateIntoCanvas$1.apply(webgl, arguments);
			} catch (e) {
				console.info("WebGL SDF generation failed, falling back to JS", e);
				return generateIntoCanvas$2.apply(javascript, arguments);
			}
		}
		exports.forEachPathCommand = forEachPathCommand;
		exports.generate = generate;
		exports.generateIntoCanvas = generateIntoCanvas;
		exports.javascript = javascript;
		exports.pathToLineSegments = pathToLineSegments;
		exports.webgl = webgl;
		exports.webglUtils = webglUtils;
		Object.defineProperty(exports, "__esModule", { value: true });
		return exports;
	}({});
}
//#endregion
//#region node_modules/bidi-js/dist/bidi.mjs
function bidiFactory() {
	return (function(exports) {
		var DATA = {
			"R": "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
			"EN": "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
			"ES": "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
			"ET": "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
			"AN": "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
			"CS": "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
			"B": "a,3,f+2,2v,690",
			"S": "9,2,k",
			"WS": "c,k,4f4,1vk+a,u,1j,335",
			"ON": "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
			"BN": "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
			"NSM": "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
			"AL": "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
			"LRO": "6ct",
			"RLO": "6cu",
			"LRE": "6cq",
			"RLE": "6cr",
			"PDF": "6cs",
			"LRI": "6ee",
			"RLI": "6ef",
			"FSI": "6eg",
			"PDI": "6eh"
		};
		var TYPES = {};
		var TYPES_TO_NAMES = {};
		TYPES.L = 1;
		TYPES_TO_NAMES[1] = "L";
		Object.keys(DATA).forEach(function(type, i) {
			TYPES[type] = 1 << i + 1;
			TYPES_TO_NAMES[TYPES[type]] = type;
		});
		Object.freeze(TYPES);
		var ISOLATE_INIT_TYPES = TYPES.LRI | TYPES.RLI | TYPES.FSI;
		var STRONG_TYPES = TYPES.L | TYPES.R | TYPES.AL;
		var NEUTRAL_ISOLATE_TYPES = TYPES.B | TYPES.S | TYPES.WS | TYPES.ON | TYPES.FSI | TYPES.LRI | TYPES.RLI | TYPES.PDI;
		var BN_LIKE_TYPES = TYPES.BN | TYPES.RLE | TYPES.LRE | TYPES.RLO | TYPES.LRO | TYPES.PDF;
		var TRAILING_TYPES = TYPES.S | TYPES.WS | TYPES.B | ISOLATE_INIT_TYPES | TYPES.PDI | BN_LIKE_TYPES;
		var map = null;
		function parseData() {
			if (!map) {
				map = /* @__PURE__ */ new Map();
				var start = 0;
				for (var type in DATA) if (DATA.hasOwnProperty(type)) {
					var segments = DATA[type];
					var temp = "";
					var end = void 0;
					var state = false;
					var lastCode = 0;
					for (var i = 0; i <= segments.length + 1; i += 1) {
						var char = segments[i];
						if (char !== "," && i !== segments.length) {
							if (char === "+") {
								state = true;
								lastCode = start = lastCode + parseInt(temp, 36);
								temp = "";
							} else temp += char;
						} else {
							if (!state) {
								lastCode = start = lastCode + parseInt(temp, 36);
								end = start;
							} else end = start + parseInt(temp, 36);
							state = false;
							temp = "";
							lastCode = end;
							for (var j = start; j < end + 1; j += 1) map.set(j, TYPES[type]);
						}
					}
				}
			}
		}
		/**
		* @param {string} char
		* @return {number}
		*/
		function getBidiCharType(char) {
			parseData();
			return map.get(char.codePointAt(0)) || TYPES.L;
		}
		/**
		* Get Bidi Character Type Name
		* @param {string} char
		* @returns { "L" | "R" | "EN" | "ES" | "ET" | "AN" | "CS" | "B" | "S" | "WS" | "ON" | "BN" | "NSM" | "AL" | "LRO" | "RLO" | "LRE" | "RLE" | "PDF" | "LRI" | "RLI" | "FSI" | "PDI" }
		*/
		function getBidiCharTypeName(char) {
			return TYPES_TO_NAMES[getBidiCharType(char)];
		}
		var data$1 = {
			"pairs": "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
			"canonical": "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
		};
		/**
		* Parses an string that holds encoded codepoint mappings, e.g. for bracket pairs or
		* mirroring characters, as encoded by scripts/generateBidiData.js. Returns an object
		* holding the `map`, and optionally a `reverseMap` if `includeReverse:true`.
		* @param {string} encodedString
		* @param {boolean} includeReverse - true if you want reverseMap in the output
		* @return {{map: Map<number, number>, reverseMap?: Map<number, number>}}
		*/
		function parseCharacterMap(encodedString, includeReverse) {
			var radix = 36;
			var lastCode = 0;
			var map = /* @__PURE__ */ new Map();
			var reverseMap = includeReverse && /* @__PURE__ */ new Map();
			var prevPair;
			encodedString.split(",").forEach(function visit(entry) {
				if (entry.indexOf("+") !== -1) for (var i = +entry; i--;) visit(prevPair);
				else {
					prevPair = entry;
					var ref = entry.split(">");
					var a = ref[0];
					var b = ref[1];
					a = String.fromCodePoint(lastCode += parseInt(a, radix));
					b = String.fromCodePoint(lastCode += parseInt(b, radix));
					map.set(a, b);
					includeReverse && reverseMap.set(b, a);
				}
			});
			return {
				map,
				reverseMap
			};
		}
		var openToClose, closeToOpen, canonical;
		function parse$1() {
			if (!openToClose) {
				var ref = parseCharacterMap(data$1.pairs, true);
				var map = ref.map;
				var reverseMap = ref.reverseMap;
				openToClose = map;
				closeToOpen = reverseMap;
				canonical = parseCharacterMap(data$1.canonical, false).map;
			}
		}
		/**
		* Get the opening bracket character corresponding to a given closing bracket character.
		* @param {string} char
		* @returns {string | null}
		*/
		function openingToClosingBracket(char) {
			parse$1();
			return openToClose.get(char) || null;
		}
		/**
		* Get the closing bracket character corresponding to a given opening bracket character.
		* @param {string} char
		* @returns {string | null}
		*/
		function closingToOpeningBracket(char) {
			parse$1();
			return closeToOpen.get(char) || null;
		}
		/**
		* Retrieves the canonical form of a bracket character.
		* @param {string} char
		* @returns {string | null}
		*/
		function getCanonicalBracket(char) {
			parse$1();
			return canonical.get(char) || null;
		}
		var TYPE_L = TYPES.L;
		var TYPE_R = TYPES.R;
		var TYPE_EN = TYPES.EN;
		var TYPE_ES = TYPES.ES;
		var TYPE_ET = TYPES.ET;
		var TYPE_AN = TYPES.AN;
		var TYPE_CS = TYPES.CS;
		var TYPE_B = TYPES.B;
		var TYPE_S = TYPES.S;
		var TYPE_ON = TYPES.ON;
		var TYPE_BN = TYPES.BN;
		var TYPE_NSM = TYPES.NSM;
		var TYPE_AL = TYPES.AL;
		var TYPE_LRO = TYPES.LRO;
		var TYPE_RLO = TYPES.RLO;
		var TYPE_LRE = TYPES.LRE;
		var TYPE_RLE = TYPES.RLE;
		var TYPE_PDF = TYPES.PDF;
		var TYPE_LRI = TYPES.LRI;
		var TYPE_RLI = TYPES.RLI;
		var TYPE_FSI = TYPES.FSI;
		var TYPE_PDI = TYPES.PDI;
		/**
		* @typedef {object} GetEmbeddingLevelsResult
		* @property {{start: number, end: number, level: number}[]} paragraphs
		* @property {Uint8Array} levels
		*/
		/**
		* This function applies the Bidirectional Algorithm to a string, returning the resolved embedding levels
		* in a single Uint8Array plus a list of objects holding each paragraph's start and end indices and resolved
		* base embedding level.
		*
		* @param {string} string - The input string
		* @param {"ltr"|"rtl"|"auto"} [baseDirection] - Use "ltr" or "rtl" to force a base paragraph direction,
		*        otherwise a direction will be chosen automatically from each paragraph's contents.
		* @return {GetEmbeddingLevelsResult}
		*/
		function getEmbeddingLevels(string, baseDirection) {
			var MAX_DEPTH = 125;
			var charTypes = new Uint32Array(string.length);
			for (var i = 0; i < string.length; i++) charTypes[i] = getBidiCharType(string[i]);
			var charTypeCounts = /* @__PURE__ */ new Map();
			function changeCharType(i, type) {
				var oldType = charTypes[i];
				charTypes[i] = type;
				charTypeCounts.set(oldType, charTypeCounts.get(oldType) - 1);
				if (oldType & NEUTRAL_ISOLATE_TYPES) charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) - 1);
				charTypeCounts.set(type, (charTypeCounts.get(type) || 0) + 1);
				if (type & NEUTRAL_ISOLATE_TYPES) charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
			}
			var embedLevels = new Uint8Array(string.length);
			var isolationPairs = /* @__PURE__ */ new Map();
			var paragraphs = [];
			var paragraph = null;
			for (var i$1 = 0; i$1 < string.length; i$1++) {
				if (!paragraph) paragraphs.push(paragraph = {
					start: i$1,
					end: string.length - 1,
					level: baseDirection === "rtl" ? 1 : baseDirection === "ltr" ? 0 : determineAutoEmbedLevel(i$1, false)
				});
				if (charTypes[i$1] & TYPE_B) {
					paragraph.end = i$1;
					paragraph = null;
				}
			}
			var FORMATTING_TYPES = TYPE_RLE | TYPE_LRE | TYPE_RLO | TYPE_LRO | ISOLATE_INIT_TYPES | TYPE_PDI | TYPE_PDF | TYPE_B;
			var nextEven = function(n) {
				return n + (n & 1 ? 1 : 2);
			};
			var nextOdd = function(n) {
				return n + (n & 1 ? 2 : 1);
			};
			for (var paraIdx = 0; paraIdx < paragraphs.length; paraIdx++) {
				paragraph = paragraphs[paraIdx];
				var statusStack = [{
					_level: paragraph.level,
					_override: 0,
					_isolate: 0
				}];
				var stackTop = void 0;
				var overflowIsolateCount = 0;
				var overflowEmbeddingCount = 0;
				var validIsolateCount = 0;
				charTypeCounts.clear();
				for (var i$2 = paragraph.start; i$2 <= paragraph.end; i$2++) {
					var charType = charTypes[i$2];
					stackTop = statusStack[statusStack.length - 1];
					charTypeCounts.set(charType, (charTypeCounts.get(charType) || 0) + 1);
					if (charType & NEUTRAL_ISOLATE_TYPES) charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
					if (charType & FORMATTING_TYPES) {
						if (charType & (TYPE_RLE | TYPE_LRE)) {
							embedLevels[i$2] = stackTop._level;
							var level = (charType === TYPE_RLE ? nextOdd : nextEven)(stackTop._level);
							if (level <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) statusStack.push({
								_level: level,
								_override: 0,
								_isolate: 0
							});
							else if (!overflowIsolateCount) overflowEmbeddingCount++;
						} else if (charType & (TYPE_RLO | TYPE_LRO)) {
							embedLevels[i$2] = stackTop._level;
							var level$1 = (charType === TYPE_RLO ? nextOdd : nextEven)(stackTop._level);
							if (level$1 <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) statusStack.push({
								_level: level$1,
								_override: charType & TYPE_RLO ? TYPE_R : TYPE_L,
								_isolate: 0
							});
							else if (!overflowIsolateCount) overflowEmbeddingCount++;
						} else if (charType & ISOLATE_INIT_TYPES) {
							if (charType & TYPE_FSI) charType = determineAutoEmbedLevel(i$2 + 1, true) === 1 ? TYPE_RLI : TYPE_LRI;
							embedLevels[i$2] = stackTop._level;
							if (stackTop._override) changeCharType(i$2, stackTop._override);
							var level$2 = (charType === TYPE_RLI ? nextOdd : nextEven)(stackTop._level);
							if (level$2 <= MAX_DEPTH && overflowIsolateCount === 0 && overflowEmbeddingCount === 0) {
								validIsolateCount++;
								statusStack.push({
									_level: level$2,
									_override: 0,
									_isolate: 1,
									_isolInitIndex: i$2
								});
							} else overflowIsolateCount++;
						} else if (charType & TYPE_PDI) {
							if (overflowIsolateCount > 0) overflowIsolateCount--;
							else if (validIsolateCount > 0) {
								overflowEmbeddingCount = 0;
								while (!statusStack[statusStack.length - 1]._isolate) statusStack.pop();
								var isolInitIndex = statusStack[statusStack.length - 1]._isolInitIndex;
								if (isolInitIndex != null) {
									isolationPairs.set(isolInitIndex, i$2);
									isolationPairs.set(i$2, isolInitIndex);
								}
								statusStack.pop();
								validIsolateCount--;
							}
							stackTop = statusStack[statusStack.length - 1];
							embedLevels[i$2] = stackTop._level;
							if (stackTop._override) changeCharType(i$2, stackTop._override);
						} else if (charType & TYPE_PDF) {
							if (overflowIsolateCount === 0) {
								if (overflowEmbeddingCount > 0) overflowEmbeddingCount--;
								else if (!stackTop._isolate && statusStack.length > 1) {
									statusStack.pop();
									stackTop = statusStack[statusStack.length - 1];
								}
							}
							embedLevels[i$2] = stackTop._level;
						} else if (charType & TYPE_B) embedLevels[i$2] = paragraph.level;
					} else {
						embedLevels[i$2] = stackTop._level;
						if (stackTop._override && charType !== TYPE_BN) changeCharType(i$2, stackTop._override);
					}
				}
				var levelRuns = [];
				var currentRun = null;
				for (var i$3 = paragraph.start; i$3 <= paragraph.end; i$3++) {
					var charType$1 = charTypes[i$3];
					if (!(charType$1 & BN_LIKE_TYPES)) {
						var lvl = embedLevels[i$3];
						var isIsolInit = charType$1 & ISOLATE_INIT_TYPES;
						var isPDI = charType$1 === TYPE_PDI;
						if (currentRun && lvl === currentRun._level) {
							currentRun._end = i$3;
							currentRun._endsWithIsolInit = isIsolInit;
						} else levelRuns.push(currentRun = {
							_start: i$3,
							_end: i$3,
							_level: lvl,
							_startsWithPDI: isPDI,
							_endsWithIsolInit: isIsolInit
						});
					}
				}
				var isolatingRunSeqs = [];
				for (var runIdx = 0; runIdx < levelRuns.length; runIdx++) {
					var run = levelRuns[runIdx];
					if (!run._startsWithPDI || run._startsWithPDI && !isolationPairs.has(run._start)) {
						var seqRuns = [currentRun = run];
						for (var pdiIndex = void 0; currentRun && currentRun._endsWithIsolInit && (pdiIndex = isolationPairs.get(currentRun._end)) != null;) for (var i$4 = runIdx + 1; i$4 < levelRuns.length; i$4++) if (levelRuns[i$4]._start === pdiIndex) {
							seqRuns.push(currentRun = levelRuns[i$4]);
							break;
						}
						var seqIndices = [];
						for (var i$5 = 0; i$5 < seqRuns.length; i$5++) {
							var run$1 = seqRuns[i$5];
							for (var j = run$1._start; j <= run$1._end; j++) seqIndices.push(j);
						}
						var firstLevel = embedLevels[seqIndices[0]];
						var prevLevel = paragraph.level;
						for (var i$6 = seqIndices[0] - 1; i$6 >= 0; i$6--) if (!(charTypes[i$6] & BN_LIKE_TYPES)) {
							prevLevel = embedLevels[i$6];
							break;
						}
						var lastIndex = seqIndices[seqIndices.length - 1];
						var lastLevel = embedLevels[lastIndex];
						var nextLevel = paragraph.level;
						if (!(charTypes[lastIndex] & ISOLATE_INIT_TYPES)) {
							for (var i$7 = lastIndex + 1; i$7 <= paragraph.end; i$7++) if (!(charTypes[i$7] & BN_LIKE_TYPES)) {
								nextLevel = embedLevels[i$7];
								break;
							}
						}
						isolatingRunSeqs.push({
							_seqIndices: seqIndices,
							_sosType: Math.max(prevLevel, firstLevel) % 2 ? TYPE_R : TYPE_L,
							_eosType: Math.max(nextLevel, lastLevel) % 2 ? TYPE_R : TYPE_L
						});
					}
				}
				for (var seqIdx = 0; seqIdx < isolatingRunSeqs.length; seqIdx++) {
					var ref = isolatingRunSeqs[seqIdx];
					var seqIndices$1 = ref._seqIndices;
					var sosType = ref._sosType;
					var eosType = ref._eosType;
					/**
					* All the level runs in an isolating run sequence have the same embedding level.
					* 
					* DO NOT change any `embedLevels[i]` within the current scope.
					*/
					var embedDirection = embedLevels[seqIndices$1[0]] & 1 ? TYPE_R : TYPE_L;
					if (charTypeCounts.get(TYPE_NSM)) for (var si = 0; si < seqIndices$1.length; si++) {
						var i$8 = seqIndices$1[si];
						if (charTypes[i$8] & TYPE_NSM) {
							var prevType = sosType;
							for (var sj = si - 1; sj >= 0; sj--) if (!(charTypes[seqIndices$1[sj]] & BN_LIKE_TYPES)) {
								prevType = charTypes[seqIndices$1[sj]];
								break;
							}
							changeCharType(i$8, prevType & (ISOLATE_INIT_TYPES | TYPE_PDI) ? TYPE_ON : prevType);
						}
					}
					if (charTypeCounts.get(TYPE_EN)) for (var si$1 = 0; si$1 < seqIndices$1.length; si$1++) {
						var i$9 = seqIndices$1[si$1];
						if (charTypes[i$9] & TYPE_EN) for (var sj$1 = si$1 - 1; sj$1 >= -1; sj$1--) {
							var prevCharType = sj$1 === -1 ? sosType : charTypes[seqIndices$1[sj$1]];
							if (prevCharType & STRONG_TYPES) {
								if (prevCharType === TYPE_AL) changeCharType(i$9, TYPE_AN);
								break;
							}
						}
					}
					if (charTypeCounts.get(TYPE_AL)) for (var si$2 = 0; si$2 < seqIndices$1.length; si$2++) {
						var i$10 = seqIndices$1[si$2];
						if (charTypes[i$10] & TYPE_AL) changeCharType(i$10, TYPE_R);
					}
					if (charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) for (var si$3 = 1; si$3 < seqIndices$1.length - 1; si$3++) {
						var i$11 = seqIndices$1[si$3];
						if (charTypes[i$11] & (TYPE_ES | TYPE_CS)) {
							var prevType$1 = 0, nextType = 0;
							for (var sj$2 = si$3 - 1; sj$2 >= 0; sj$2--) {
								prevType$1 = charTypes[seqIndices$1[sj$2]];
								if (!(prevType$1 & BN_LIKE_TYPES)) break;
							}
							for (var sj$3 = si$3 + 1; sj$3 < seqIndices$1.length; sj$3++) {
								nextType = charTypes[seqIndices$1[sj$3]];
								if (!(nextType & BN_LIKE_TYPES)) break;
							}
							if (prevType$1 === nextType && (charTypes[i$11] === TYPE_ES ? prevType$1 === TYPE_EN : prevType$1 & (TYPE_EN | TYPE_AN))) changeCharType(i$11, prevType$1);
						}
					}
					if (charTypeCounts.get(TYPE_EN)) {
						for (var si$4 = 0; si$4 < seqIndices$1.length; si$4++) if (charTypes[seqIndices$1[si$4]] & TYPE_EN) {
							for (var sj$4 = si$4 - 1; sj$4 >= 0 && charTypes[seqIndices$1[sj$4]] & (TYPE_ET | BN_LIKE_TYPES); sj$4--) changeCharType(seqIndices$1[sj$4], TYPE_EN);
							for (si$4++; si$4 < seqIndices$1.length && charTypes[seqIndices$1[si$4]] & (TYPE_ET | BN_LIKE_TYPES | TYPE_EN); si$4++) if (charTypes[seqIndices$1[si$4]] !== TYPE_EN) changeCharType(seqIndices$1[si$4], TYPE_EN);
						}
					}
					if (charTypeCounts.get(TYPE_ET) || charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) for (var si$5 = 0; si$5 < seqIndices$1.length; si$5++) {
						var i$13 = seqIndices$1[si$5];
						if (charTypes[i$13] & (TYPE_ET | TYPE_ES | TYPE_CS)) {
							changeCharType(i$13, TYPE_ON);
							for (var sj$5 = si$5 - 1; sj$5 >= 0 && charTypes[seqIndices$1[sj$5]] & BN_LIKE_TYPES; sj$5--) changeCharType(seqIndices$1[sj$5], TYPE_ON);
							for (var sj$6 = si$5 + 1; sj$6 < seqIndices$1.length && charTypes[seqIndices$1[sj$6]] & BN_LIKE_TYPES; sj$6++) changeCharType(seqIndices$1[sj$6], TYPE_ON);
						}
					}
					if (charTypeCounts.get(TYPE_EN)) for (var si$6 = 0, prevStrongType = sosType; si$6 < seqIndices$1.length; si$6++) {
						var i$14 = seqIndices$1[si$6];
						var type = charTypes[i$14];
						if (type & TYPE_EN) {
							if (prevStrongType === TYPE_L) changeCharType(i$14, TYPE_L);
						} else if (type & STRONG_TYPES) prevStrongType = type;
					}
					if (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES)) {
						var R_TYPES_FOR_N_STEPS = TYPE_R | TYPE_EN | TYPE_AN;
						var STRONG_TYPES_FOR_N_STEPS = R_TYPES_FOR_N_STEPS | TYPE_L;
						var bracketPairs = [];
						var openerStack = [];
						for (var si$7 = 0; si$7 < seqIndices$1.length; si$7++) if (charTypes[seqIndices$1[si$7]] & NEUTRAL_ISOLATE_TYPES) {
							var char = string[seqIndices$1[si$7]];
							var oppositeBracket = void 0;
							if (openingToClosingBracket(char) !== null) {
								if (openerStack.length < 63) openerStack.push({
									char,
									seqIndex: si$7
								});
								else break;
							} else if ((oppositeBracket = closingToOpeningBracket(char)) !== null) for (var stackIdx = openerStack.length - 1; stackIdx >= 0; stackIdx--) {
								var stackChar = openerStack[stackIdx].char;
								if (stackChar === oppositeBracket || stackChar === closingToOpeningBracket(getCanonicalBracket(char)) || openingToClosingBracket(getCanonicalBracket(stackChar)) === char) {
									bracketPairs.push([openerStack[stackIdx].seqIndex, si$7]);
									openerStack.length = stackIdx;
									break;
								}
							}
						}
						bracketPairs.sort(function(a, b) {
							return a[0] - b[0];
						});
						for (var pairIdx = 0; pairIdx < bracketPairs.length; pairIdx++) {
							var ref$1 = bracketPairs[pairIdx];
							var openSeqIdx = ref$1[0];
							var closeSeqIdx = ref$1[1];
							var foundStrongType = false;
							var useStrongType = 0;
							for (var si$8 = openSeqIdx + 1; si$8 < closeSeqIdx; si$8++) {
								var i$15 = seqIndices$1[si$8];
								if (charTypes[i$15] & STRONG_TYPES_FOR_N_STEPS) {
									foundStrongType = true;
									var lr = charTypes[i$15] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
									if (lr === embedDirection) {
										useStrongType = lr;
										break;
									}
								}
							}
							if (foundStrongType && !useStrongType) {
								useStrongType = sosType;
								for (var si$9 = openSeqIdx - 1; si$9 >= 0; si$9--) {
									var i$16 = seqIndices$1[si$9];
									if (charTypes[i$16] & STRONG_TYPES_FOR_N_STEPS) {
										var lr$1 = charTypes[i$16] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
										if (lr$1 !== embedDirection) useStrongType = lr$1;
										else useStrongType = embedDirection;
										break;
									}
								}
							}
							if (useStrongType) {
								charTypes[seqIndices$1[openSeqIdx]] = charTypes[seqIndices$1[closeSeqIdx]] = useStrongType;
								if (useStrongType !== embedDirection) {
									for (var si$10 = openSeqIdx + 1; si$10 < seqIndices$1.length; si$10++) if (!(charTypes[seqIndices$1[si$10]] & BN_LIKE_TYPES)) {
										if (getBidiCharType(string[seqIndices$1[si$10]]) & TYPE_NSM) charTypes[seqIndices$1[si$10]] = useStrongType;
										break;
									}
								}
								if (useStrongType !== embedDirection) {
									for (var si$11 = closeSeqIdx + 1; si$11 < seqIndices$1.length; si$11++) if (!(charTypes[seqIndices$1[si$11]] & BN_LIKE_TYPES)) {
										if (getBidiCharType(string[seqIndices$1[si$11]]) & TYPE_NSM) charTypes[seqIndices$1[si$11]] = useStrongType;
										break;
									}
								}
							}
						}
						for (var si$12 = 0; si$12 < seqIndices$1.length; si$12++) if (charTypes[seqIndices$1[si$12]] & NEUTRAL_ISOLATE_TYPES) {
							var niRunStart = si$12, niRunEnd = si$12;
							var prevType$2 = sosType;
							for (var si2 = si$12 - 1; si2 >= 0; si2--) if (charTypes[seqIndices$1[si2]] & BN_LIKE_TYPES) niRunStart = si2;
							else {
								prevType$2 = charTypes[seqIndices$1[si2]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
								break;
							}
							var nextType$1 = eosType;
							for (var si2$1 = si$12 + 1; si2$1 < seqIndices$1.length; si2$1++) if (charTypes[seqIndices$1[si2$1]] & (NEUTRAL_ISOLATE_TYPES | BN_LIKE_TYPES)) niRunEnd = si2$1;
							else {
								nextType$1 = charTypes[seqIndices$1[si2$1]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
								break;
							}
							for (var sj$7 = niRunStart; sj$7 <= niRunEnd; sj$7++) charTypes[seqIndices$1[sj$7]] = prevType$2 === nextType$1 ? prevType$2 : embedDirection;
							si$12 = niRunEnd;
						}
					}
				}
				for (var i$17 = paragraph.start; i$17 <= paragraph.end; i$17++) {
					var level$3 = embedLevels[i$17];
					var type$1 = charTypes[i$17];
					if (level$3 & 1) {
						if (type$1 & (TYPE_L | TYPE_EN | TYPE_AN)) embedLevels[i$17]++;
					} else if (type$1 & TYPE_R) embedLevels[i$17]++;
					else if (type$1 & (TYPE_AN | TYPE_EN)) embedLevels[i$17] += 2;
					if (type$1 & BN_LIKE_TYPES) embedLevels[i$17] = i$17 === 0 ? paragraph.level : embedLevels[i$17 - 1];
					if (i$17 === paragraph.end || getBidiCharType(string[i$17]) & (TYPE_S | TYPE_B)) for (var j$1 = i$17; j$1 >= 0 && getBidiCharType(string[j$1]) & TRAILING_TYPES; j$1--) embedLevels[j$1] = paragraph.level;
				}
			}
			return {
				levels: embedLevels,
				paragraphs
			};
			function determineAutoEmbedLevel(start, isFSI) {
				for (var i = start; i < string.length; i++) {
					var charType = charTypes[i];
					if (charType & (TYPE_R | TYPE_AL)) return 1;
					if (charType & (TYPE_B | TYPE_L) || isFSI && charType === TYPE_PDI) return 0;
					if (charType & ISOLATE_INIT_TYPES) {
						var pdi = indexOfMatchingPDI(i);
						i = pdi === -1 ? string.length : pdi;
					}
				}
				return 0;
			}
			function indexOfMatchingPDI(isolateStart) {
				var isolationLevel = 1;
				for (var i = isolateStart + 1; i < string.length; i++) {
					var charType = charTypes[i];
					if (charType & TYPE_B) break;
					if (charType & TYPE_PDI) {
						if (--isolationLevel === 0) return i;
					} else if (charType & ISOLATE_INIT_TYPES) isolationLevel++;
				}
				return -1;
			}
		}
		var data = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1";
		var mirrorMap;
		function parse() {
			if (!mirrorMap) {
				var ref = parseCharacterMap(data, true);
				var map = ref.map;
				ref.reverseMap.forEach(function(value, key) {
					map.set(key, value);
				});
				mirrorMap = map;
			}
		}
		/**
		* Get the mirrored character for a given character, if one exists.
		* @param {string} char
		* @return {string|null}
		*/
		function getMirroredCharacter(char) {
			parse();
			return mirrorMap.get(char) || null;
		}
		/**
		* Given a string and its resolved embedding levels, build a map of indices to replacement chars
		* for any characters in right-to-left segments that have defined mirrored characters.
		* @param {string} string
		* @param {Uint8Array} embeddingLevels
		* @param {number?} [start]
		* @param {number?} [end]
		* @return {Map<number, string>}
		*/
		function getMirroredCharactersMap(string, embeddingLevels, start, end) {
			var strLen = string.length;
			start = Math.max(0, start == null ? 0 : +start);
			end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
			var map = /* @__PURE__ */ new Map();
			for (var i = start; i <= end; i++) if (embeddingLevels[i] & 1) {
				var mirror = getMirroredCharacter(string[i]);
				if (mirror !== null) map.set(i, mirror);
			}
			return map;
		}
		/**
		* Given a start and end denoting a single line within a string, and a set of precalculated
		* bidi embedding levels, produce a list of segments whose ordering should be flipped, in sequence.
		* @param {string} string - the full input string
		* @param {GetEmbeddingLevelsResult} embeddingLevelsResult - the result object from getEmbeddingLevels
		* @param {number} [start] - first character in a subset of the full string
		* @param {number} [end] - last character in a subset of the full string
		* @return {number[][]} - the list of start/end segments that should be flipped, in order.
		*/
		function getReorderSegments(string, embeddingLevelsResult, start, end) {
			var strLen = string.length;
			start = Math.max(0, start == null ? 0 : +start);
			end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
			var segments = [];
			embeddingLevelsResult.paragraphs.forEach(function(paragraph) {
				var lineStart = Math.max(start, paragraph.start);
				var lineEnd = Math.min(end, paragraph.end);
				if (lineStart < lineEnd) {
					var lineLevels = embeddingLevelsResult.levels.slice(lineStart, lineEnd + 1);
					for (var i = lineEnd; i >= lineStart && getBidiCharType(string[i]) & TRAILING_TYPES; i--) lineLevels[i] = paragraph.level;
					var maxLevel = paragraph.level;
					var minOddLevel = Infinity;
					for (var i$1 = 0; i$1 < lineLevels.length; i$1++) {
						var level = lineLevels[i$1];
						if (level > maxLevel) maxLevel = level;
						if (level < minOddLevel) minOddLevel = level | 1;
					}
					for (var lvl = maxLevel; lvl >= minOddLevel; lvl--) for (var i$2 = 0; i$2 < lineLevels.length; i$2++) if (lineLevels[i$2] >= lvl) {
						var segStart = i$2;
						while (i$2 + 1 < lineLevels.length && lineLevels[i$2 + 1] >= lvl) i$2++;
						if (i$2 > segStart) segments.push([segStart + lineStart, i$2 + lineStart]);
					}
				}
			});
			return segments;
		}
		/**
		* @param {string} string
		* @param {GetEmbeddingLevelsResult} embedLevelsResult
		* @param {number} [start]
		* @param {number} [end]
		* @return {string} the new string with bidi segments reordered
		*/
		function getReorderedString(string, embedLevelsResult, start, end) {
			var indices = getReorderedIndices(string, embedLevelsResult, start, end);
			var chars = [].concat(string);
			indices.forEach(function(charIndex, i) {
				chars[i] = (embedLevelsResult.levels[charIndex] & 1 ? getMirroredCharacter(string[charIndex]) : null) || string[charIndex];
			});
			return chars.join("");
		}
		/**
		* @param {string} string
		* @param {GetEmbeddingLevelsResult} embedLevelsResult
		* @param {number} [start]
		* @param {number} [end]
		* @return {number[]} an array with character indices in their new bidi order
		*/
		function getReorderedIndices(string, embedLevelsResult, start, end) {
			var segments = getReorderSegments(string, embedLevelsResult, start, end);
			var indices = [];
			for (var i = 0; i < string.length; i++) indices[i] = i;
			segments.forEach(function(ref) {
				var start = ref[0];
				var end = ref[1];
				var slice = indices.slice(start, end + 1);
				for (var i = slice.length; i--;) indices[end - i] = slice[i];
			});
			return indices;
		}
		exports.closingToOpeningBracket = closingToOpeningBracket;
		exports.getBidiCharType = getBidiCharType;
		exports.getBidiCharTypeName = getBidiCharTypeName;
		exports.getCanonicalBracket = getCanonicalBracket;
		exports.getEmbeddingLevels = getEmbeddingLevels;
		exports.getMirroredCharacter = getMirroredCharacter;
		exports.getMirroredCharactersMap = getMirroredCharactersMap;
		exports.getReorderSegments = getReorderSegments;
		exports.getReorderedIndices = getReorderedIndices;
		exports.getReorderedString = getReorderedString;
		exports.openingToClosingBracket = openingToClosingBracket;
		Object.defineProperty(exports, "__esModule", { value: true });
		return exports;
	})({});
}
//#endregion
//#region node_modules/troika-three-utils/dist/troika-three-utils.esm.js
/**
* Regular expression for matching the `void main() {` opener line in GLSL.
* @type {RegExp}
*/
var voidMainRegExp = /\bvoid\s+main\s*\(\s*\)\s*{/g;
/**
* Recursively expands all `#include <xyz>` statements within string of shader code.
* Copied from three's WebGLProgram#parseIncludes for external use.
*
* @param {string} source - The GLSL source code to evaluate
* @return {string} The GLSL code with all includes expanded
*/
function expandShaderIncludes(source) {
	const pattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
	function replace(match, include) {
		let chunk = ShaderChunk[include];
		return chunk ? expandShaderIncludes(chunk) : match;
	}
	return source.replace(pattern, replace);
}
var _lut = [];
for (let i = 0; i < 256; i++) _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
function generateUUID() {
	const d0 = Math.random() * 4294967295 | 0;
	const d1 = Math.random() * 4294967295 | 0;
	const d2 = Math.random() * 4294967295 | 0;
	const d3 = Math.random() * 4294967295 | 0;
	return (_lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255]).toUpperCase();
}
var assign$1 = Object.assign || function() {
	let target = arguments[0];
	for (let i = 1, len = arguments.length; i < len; i++) {
		let source = arguments[i];
		if (source) {
			for (let prop in source) if (Object.prototype.hasOwnProperty.call(source, prop)) target[prop] = source[prop];
		}
	}
	return target;
};
var epoch = Date.now();
var CONSTRUCTOR_CACHE = /* @__PURE__ */ new WeakMap();
var SHADER_UPGRADE_CACHE = /* @__PURE__ */ new Map();
var materialInstanceId = 1e10;
/**
* A utility for creating a custom shader material derived from another material's
* shaders. This allows you to inject custom shader logic and transforms into the
* builtin ThreeJS materials without having to recreate them from scratch.
*
* @param {THREE.Material} baseMaterial - the original material to derive from
*
* @param {Object} options - How the base material should be modified.
* @param {Object=} options.defines - Custom `defines` for the material
* @param {Object=} options.extensions - Custom `extensions` for the material, e.g. `{derivatives: true}`
* @param {Object=} options.uniforms - Custom `uniforms` for use in the modified shader. These can
*        be accessed and manipulated via the resulting material's `uniforms` property, just like
*        in a ShaderMaterial. You do not need to repeat the base material's own uniforms here.
* @param {String=} options.timeUniform - If specified, a uniform of this name will be injected into
*        both shaders, and it will automatically be updated on each render frame with a number of
*        elapsed milliseconds. The "zero" epoch time is not significant so don't rely on this as a
*        true calendar time.
* @param {String=} options.vertexDefs - Custom GLSL code to inject into the vertex shader's top-level
*        definitions, above the `void main()` function.
* @param {String=} options.vertexMainIntro - Custom GLSL code to inject at the top of the vertex
*        shader's `void main` function.
* @param {String=} options.vertexMainOutro - Custom GLSL code to inject at the end of the vertex
*        shader's `void main` function.
* @param {String=} options.vertexTransform - Custom GLSL code to manipulate the `position`, `normal`,
*        and/or `uv` vertex attributes. This code will be wrapped within a standalone function with
*        those attributes exposed by their normal names as read/write values.
* @param {String=} options.fragmentDefs - Custom GLSL code to inject into the fragment shader's top-level
*        definitions, above the `void main()` function.
* @param {String=} options.fragmentMainIntro - Custom GLSL code to inject at the top of the fragment
*        shader's `void main` function.
* @param {String=} options.fragmentMainOutro - Custom GLSL code to inject at the end of the fragment
*        shader's `void main` function. You can manipulate `gl_FragColor` here but keep in mind it goes
*        after any of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), so if you
*        want those to apply to your changes use `fragmentColorTransform` instead.
* @param {String=} options.fragmentColorTransform - Custom GLSL code to manipulate the `gl_FragColor`
*        output value. Will be injected near the end of the `void main` function, but before any
*        of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), and before the
*        `fragmentMainOutro`.
* @param {function({fragmentShader: string, vertexShader:string}):
*        {fragmentShader: string, vertexShader:string}} options.customRewriter - A function
*        for performing custom rewrites of the full shader code. Useful if you need to do something
*        special that's not covered by the other builtin options. This function will be executed before
*        any other transforms are applied.
* @param {boolean=} options.chained - Set to `true` to prototype-chain the derived material to the base
*        material, rather than the default behavior of copying it. This allows the derived material to
*        automatically pick up changes made to the base material and its properties. This can be useful
*        where the derived material is hidden from the user as an implementation detail, allowing them
*        to work with the original material like normal. But it can result in unexpected behavior if not
*        handled carefully.
*
* @return {THREE.Material}
*
* The returned material will also have two new methods, `getDepthMaterial()` and `getDistanceMaterial()`,
* which can be called to get a variant of the derived material for use in shadow casting. If the
* target mesh is expected to cast shadows, then you can assign these to the mesh's `customDepthMaterial`
* (for directional and spot lights) and/or `customDistanceMaterial` (for point lights) properties to
* allow the cast shadow to honor your derived shader's vertex transforms and discarded fragments. These
* will also set a custom `#define IS_DEPTH_MATERIAL` or `#define IS_DISTANCE_MATERIAL` that you can look
* for in your derived shaders with `#ifdef` to customize their behavior for the depth or distance
* scenarios, e.g. skipping antialiasing or expensive shader logic.
*/
function createDerivedMaterial(baseMaterial, options) {
	const optionsKey = getKeyForOptions(options);
	let ctorsByDerivation = CONSTRUCTOR_CACHE.get(baseMaterial);
	if (!ctorsByDerivation) CONSTRUCTOR_CACHE.set(baseMaterial, ctorsByDerivation = Object.create(null));
	if (ctorsByDerivation[optionsKey]) return new ctorsByDerivation[optionsKey]();
	const privateBeforeCompileProp = `_onBeforeCompile${optionsKey}`;
	const onBeforeCompile = function(shaderInfo, renderer) {
		baseMaterial.onBeforeCompile.call(this, shaderInfo, renderer);
		const cacheKey = this.customProgramCacheKey() + "|" + shaderInfo.vertexShader + "|" + shaderInfo.fragmentShader;
		let upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey];
		if (!upgradedShaders) upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey] = upgradeShaders(this, shaderInfo, options, optionsKey);
		shaderInfo.vertexShader = upgradedShaders.vertexShader;
		shaderInfo.fragmentShader = upgradedShaders.fragmentShader;
		assign$1(shaderInfo.uniforms, this.uniforms);
		if (options.timeUniform) shaderInfo.uniforms[options.timeUniform] = { get value() {
			return Date.now() - epoch;
		} };
		if (this[privateBeforeCompileProp]) this[privateBeforeCompileProp](shaderInfo);
	};
	const DerivedMaterial = function DerivedMaterial() {
		return derive(options.chained ? baseMaterial : baseMaterial.clone());
	};
	const derive = function(base) {
		const derived = Object.create(base, descriptor);
		Object.defineProperty(derived, "baseMaterial", { value: baseMaterial });
		Object.defineProperty(derived, "id", { value: materialInstanceId++ });
		derived.uuid = generateUUID();
		derived.uniforms = assign$1({}, base.uniforms, options.uniforms);
		derived.defines = assign$1({}, base.defines, options.defines);
		derived.defines[`TROIKA_DERIVED_MATERIAL_${optionsKey}`] = "";
		derived.extensions = assign$1({}, base.extensions, options.extensions);
		derived._listeners = void 0;
		return derived;
	};
	const descriptor = {
		constructor: { value: DerivedMaterial },
		isDerivedMaterial: { value: true },
		type: {
			get: () => baseMaterial.type,
			set: (value) => {
				baseMaterial.type = value;
			}
		},
		isDerivedFrom: {
			writable: true,
			configurable: true,
			value: function(testMaterial) {
				const base = this.baseMaterial;
				return testMaterial === base || base.isDerivedMaterial && base.isDerivedFrom(testMaterial) || false;
			}
		},
		customProgramCacheKey: {
			writable: true,
			configurable: true,
			value: function() {
				return baseMaterial.customProgramCacheKey() + "|" + optionsKey;
			}
		},
		onBeforeCompile: {
			get() {
				return onBeforeCompile;
			},
			set(fn) {
				this[privateBeforeCompileProp] = fn;
			}
		},
		copy: {
			writable: true,
			configurable: true,
			value: function(source) {
				baseMaterial.copy.call(this, source);
				if (!baseMaterial.isShaderMaterial && !baseMaterial.isDerivedMaterial) {
					assign$1(this.extensions, source.extensions);
					assign$1(this.defines, source.defines);
					assign$1(this.uniforms, UniformsUtils.clone(source.uniforms));
				}
				return this;
			}
		},
		clone: {
			writable: true,
			configurable: true,
			value: function() {
				const newBase = new baseMaterial.constructor();
				return derive(newBase).copy(this);
			}
		},
		/**
		* Utility to get a MeshDepthMaterial that will honor this derived material's vertex
		* transformations and discarded fragments.
		*/
		getDepthMaterial: {
			writable: true,
			configurable: true,
			value: function() {
				let depthMaterial = this._depthMaterial;
				if (!depthMaterial) {
					depthMaterial = this._depthMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDepthMaterial() : new MeshDepthMaterial({ depthPacking: RGBADepthPacking }), options);
					depthMaterial.defines.IS_DEPTH_MATERIAL = "";
					depthMaterial.uniforms = this.uniforms;
				}
				return depthMaterial;
			}
		},
		/**
		* Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
		* transformations and discarded fragments.
		*/
		getDistanceMaterial: {
			writable: true,
			configurable: true,
			value: function() {
				let distanceMaterial = this._distanceMaterial;
				if (!distanceMaterial) {
					distanceMaterial = this._distanceMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDistanceMaterial() : new MeshDistanceMaterial(), options);
					distanceMaterial.defines.IS_DISTANCE_MATERIAL = "";
					distanceMaterial.uniforms = this.uniforms;
				}
				return distanceMaterial;
			}
		},
		dispose: {
			writable: true,
			configurable: true,
			value() {
				const { _depthMaterial, _distanceMaterial } = this;
				if (_depthMaterial) _depthMaterial.dispose();
				if (_distanceMaterial) _distanceMaterial.dispose();
				baseMaterial.dispose.call(this);
			}
		}
	};
	ctorsByDerivation[optionsKey] = DerivedMaterial;
	return new DerivedMaterial();
}
function upgradeShaders(material, { vertexShader, fragmentShader }, options, key) {
	let { vertexDefs, vertexMainIntro, vertexMainOutro, vertexTransform, fragmentDefs, fragmentMainIntro, fragmentMainOutro, fragmentColorTransform, customRewriter, timeUniform } = options;
	vertexDefs = vertexDefs || "";
	vertexMainIntro = vertexMainIntro || "";
	vertexMainOutro = vertexMainOutro || "";
	fragmentDefs = fragmentDefs || "";
	fragmentMainIntro = fragmentMainIntro || "";
	fragmentMainOutro = fragmentMainOutro || "";
	if (vertexTransform || customRewriter) vertexShader = expandShaderIncludes(vertexShader);
	if (fragmentColorTransform || customRewriter) {
		fragmentShader = fragmentShader.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n");
		fragmentShader = expandShaderIncludes(fragmentShader);
	}
	if (customRewriter) {
		let res = customRewriter({
			vertexShader,
			fragmentShader
		});
		vertexShader = res.vertexShader;
		fragmentShader = res.fragmentShader;
	}
	if (fragmentColorTransform) {
		let postChunks = [];
		fragmentShader = fragmentShader.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (match) => {
			postChunks.push(match);
			return "";
		});
		fragmentMainOutro = `${fragmentColorTransform}\n${postChunks.join("\n")}\n${fragmentMainOutro}`;
	}
	if (timeUniform) {
		const code = `\nuniform float ${timeUniform};\n`;
		vertexDefs = code + vertexDefs;
		fragmentDefs = code + fragmentDefs;
	}
	if (vertexTransform) {
		vertexShader = `vec3 troika_position_${key};
vec3 troika_normal_${key};
vec2 troika_uv_${key};
${vertexShader}
`;
		vertexDefs = `${vertexDefs}
void troikaVertexTransform${key}() {
  vec3 position = troika_position_${key};
  vec3 normal = troika_normal_${key};
  vec2 uv = troika_uv_${key};
  ${vertexTransform}
  troika_position_${key} = position;
  troika_normal_${key} = normal;
  troika_uv_${key} = uv;
}
`;
		vertexMainIntro = `
troika_position_${key} = vec3(position);
troika_normal_${key} = vec3(normal);
troika_uv_${key} = vec2(uv);
troikaVertexTransform${key}();
${vertexMainIntro}
`;
		vertexShader = vertexShader.replace(/\b(position|normal|uv)\b/g, (match, match1, index, fullStr) => {
			return /\battribute\s+vec[23]\s+$/.test(fullStr.substr(0, index)) ? match1 : `troika_${match1}_${key}`;
		});
		if (!(material.map && material.map.channel > 0)) vertexShader = vertexShader.replace(/\bMAP_UV\b/g, `troika_uv_${key}`);
	}
	vertexShader = injectIntoShaderCode(vertexShader, key, vertexDefs, vertexMainIntro, vertexMainOutro);
	fragmentShader = injectIntoShaderCode(fragmentShader, key, fragmentDefs, fragmentMainIntro, fragmentMainOutro);
	return {
		vertexShader,
		fragmentShader
	};
}
function injectIntoShaderCode(shaderCode, id, defs, intro, outro) {
	if (intro || outro || defs) {
		shaderCode = shaderCode.replace(voidMainRegExp, `
${defs}
void troikaOrigMain${id}() {`);
		shaderCode += `
void main() {
  ${intro}
  troikaOrigMain${id}();
  ${outro}
}`;
	}
	return shaderCode;
}
function optionsJsonReplacer(key, value) {
	return key === "uniforms" ? void 0 : typeof value === "function" ? value.toString() : value;
}
var _idCtr = 0;
var optionsHashesToIds = /* @__PURE__ */ new Map();
function getKeyForOptions(options) {
	const optionsHash = JSON.stringify(options, optionsJsonReplacer);
	let id = optionsHashesToIds.get(optionsHash);
	if (id == null) optionsHashesToIds.set(optionsHash, id = ++_idCtr);
	return id;
}
//#endregion
//#region node_modules/troika-three-text/dist/troika-three-text.esm.js
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function typrFactory() {
	return "undefined" == typeof window && (self.window = self), function(r) {
		var e = {
			parse: function(r) {
				var t = e._bin, a = new Uint8Array(r);
				if ("ttcf" == t.readASCII(a, 0, 4)) {
					var n = 4;
					t.readUshort(a, n), n += 2, t.readUshort(a, n), n += 2;
					var o = t.readUint(a, n);
					n += 4;
					for (var s = [], i = 0; i < o; i++) {
						var h = t.readUint(a, n);
						n += 4, s.push(e._readFont(a, h));
					}
					return s;
				}
				return [e._readFont(a, 0)];
			},
			_readFont: function(r, t) {
				var a = e._bin, n = t;
				a.readFixed(r, t), t += 4;
				var o = a.readUshort(r, t);
				t += 2, a.readUshort(r, t), t += 2, a.readUshort(r, t), t += 2, a.readUshort(r, t), t += 2;
				for (var s = [
					"cmap",
					"head",
					"hhea",
					"maxp",
					"hmtx",
					"name",
					"OS/2",
					"post",
					"loca",
					"glyf",
					"kern",
					"CFF ",
					"GDEF",
					"GPOS",
					"GSUB",
					"SVG "
				], i = {
					_data: r,
					_offset: n
				}, h = {}, d = 0; d < o; d++) {
					var f = a.readASCII(r, t, 4);
					t += 4, a.readUint(r, t), t += 4;
					var u = a.readUint(r, t);
					t += 4;
					var l = a.readUint(r, t);
					t += 4, h[f] = {
						offset: u,
						length: l
					};
				}
				for (d = 0; d < s.length; d++) {
					var v = s[d];
					h[v] && (i[v.trim()] = e[v.trim()].parse(r, h[v].offset, h[v].length, i));
				}
				return i;
			},
			_tabOffset: function(r, t, a) {
				for (var n = e._bin, o = n.readUshort(r, a + 4), s = a + 12, i = 0; i < o; i++) {
					var h = n.readASCII(r, s, 4);
					s += 4, n.readUint(r, s), s += 4;
					var d = n.readUint(r, s);
					if (s += 4, n.readUint(r, s), s += 4, h == t) return d;
				}
				return 0;
			}
		};
		e._bin = {
			readFixed: function(r, e) {
				return (r[e] << 8 | r[e + 1]) + (r[e + 2] << 8 | r[e + 3]) / 65540;
			},
			readF2dot14: function(r, t) {
				return e._bin.readShort(r, t) / 16384;
			},
			readInt: function(r, t) {
				return e._bin._view(r).getInt32(t);
			},
			readInt8: function(r, t) {
				return e._bin._view(r).getInt8(t);
			},
			readShort: function(r, t) {
				return e._bin._view(r).getInt16(t);
			},
			readUshort: function(r, t) {
				return e._bin._view(r).getUint16(t);
			},
			readUshorts: function(r, t, a) {
				for (var n = [], o = 0; o < a; o++) n.push(e._bin.readUshort(r, t + 2 * o));
				return n;
			},
			readUint: function(r, t) {
				return e._bin._view(r).getUint32(t);
			},
			readUint64: function(r, t) {
				return 4294967296 * e._bin.readUint(r, t) + e._bin.readUint(r, t + 4);
			},
			readASCII: function(r, e, t) {
				for (var a = "", n = 0; n < t; n++) a += String.fromCharCode(r[e + n]);
				return a;
			},
			readUnicode: function(r, e, t) {
				for (var a = "", n = 0; n < t; n++) {
					var o = r[e++] << 8 | r[e++];
					a += String.fromCharCode(o);
				}
				return a;
			},
			_tdec: "undefined" != typeof window && window.TextDecoder ? new window.TextDecoder() : null,
			readUTF8: function(r, t, a) {
				var n = e._bin._tdec;
				return n && 0 == t && a == r.length ? n.decode(r) : e._bin.readASCII(r, t, a);
			},
			readBytes: function(r, e, t) {
				for (var a = [], n = 0; n < t; n++) a.push(r[e + n]);
				return a;
			},
			readASCIIArray: function(r, e, t) {
				for (var a = [], n = 0; n < t; n++) a.push(String.fromCharCode(r[e + n]));
				return a;
			},
			_view: function(r) {
				return r._dataView || (r._dataView = r.buffer ? new DataView(r.buffer, r.byteOffset, r.byteLength) : new DataView(new Uint8Array(r).buffer));
			}
		}, e._lctf = {}, e._lctf.parse = function(r, t, a, n, o) {
			var s = e._bin, i = {}, h = t;
			s.readFixed(r, t), t += 4;
			var d = s.readUshort(r, t);
			t += 2;
			var f = s.readUshort(r, t);
			t += 2;
			var u = s.readUshort(r, t);
			return t += 2, i.scriptList = e._lctf.readScriptList(r, h + d), i.featureList = e._lctf.readFeatureList(r, h + f), i.lookupList = e._lctf.readLookupList(r, h + u, o), i;
		}, e._lctf.readLookupList = function(r, t, a) {
			var n = e._bin, o = t, s = [], i = n.readUshort(r, t);
			t += 2;
			for (var h = 0; h < i; h++) {
				var d = n.readUshort(r, t);
				t += 2;
				var f = e._lctf.readLookupTable(r, o + d, a);
				s.push(f);
			}
			return s;
		}, e._lctf.readLookupTable = function(r, t, a) {
			var n = e._bin, o = t, s = { tabs: [] };
			s.ltype = n.readUshort(r, t), t += 2, s.flag = n.readUshort(r, t), t += 2;
			var i = n.readUshort(r, t);
			t += 2;
			for (var h = s.ltype, d = 0; d < i; d++) {
				var f = n.readUshort(r, t);
				t += 2;
				var u = a(r, h, o + f, s);
				s.tabs.push(u);
			}
			return s;
		}, e._lctf.numOfOnes = function(r) {
			for (var e = 0, t = 0; t < 32; t++) 0 != (r >>> t & 1) && e++;
			return e;
		}, e._lctf.readClassDef = function(r, t) {
			var a = e._bin, n = [], o = a.readUshort(r, t);
			if (t += 2, 1 == o) {
				var s = a.readUshort(r, t);
				t += 2;
				var i = a.readUshort(r, t);
				t += 2;
				for (var h = 0; h < i; h++) n.push(s + h), n.push(s + h), n.push(a.readUshort(r, t)), t += 2;
			}
			if (2 == o) {
				var d = a.readUshort(r, t);
				t += 2;
				for (h = 0; h < d; h++) n.push(a.readUshort(r, t)), t += 2, n.push(a.readUshort(r, t)), t += 2, n.push(a.readUshort(r, t)), t += 2;
			}
			return n;
		}, e._lctf.getInterval = function(r, e) {
			for (var t = 0; t < r.length; t += 3) {
				var a = r[t], n = r[t + 1];
				if (r[t + 2], a <= e && e <= n) return t;
			}
			return -1;
		}, e._lctf.readCoverage = function(r, t) {
			var a = e._bin, n = {};
			n.fmt = a.readUshort(r, t), t += 2;
			var o = a.readUshort(r, t);
			return t += 2, 1 == n.fmt && (n.tab = a.readUshorts(r, t, o)), 2 == n.fmt && (n.tab = a.readUshorts(r, t, 3 * o)), n;
		}, e._lctf.coverageIndex = function(r, t) {
			var a = r.tab;
			if (1 == r.fmt) return a.indexOf(t);
			if (2 == r.fmt) {
				var n = e._lctf.getInterval(a, t);
				if (-1 != n) return a[n + 2] + (t - a[n]);
			}
			return -1;
		}, e._lctf.readFeatureList = function(r, t) {
			var a = e._bin, n = t, o = [], s = a.readUshort(r, t);
			t += 2;
			for (var i = 0; i < s; i++) {
				var h = a.readASCII(r, t, 4);
				t += 4;
				var d = a.readUshort(r, t);
				t += 2;
				var f = e._lctf.readFeatureTable(r, n + d);
				f.tag = h.trim(), o.push(f);
			}
			return o;
		}, e._lctf.readFeatureTable = function(r, t) {
			var a = e._bin, n = t, o = {}, s = a.readUshort(r, t);
			t += 2, s > 0 && (o.featureParams = n + s);
			var i = a.readUshort(r, t);
			t += 2, o.tab = [];
			for (var h = 0; h < i; h++) o.tab.push(a.readUshort(r, t + 2 * h));
			return o;
		}, e._lctf.readScriptList = function(r, t) {
			var a = e._bin, n = t, o = {}, s = a.readUshort(r, t);
			t += 2;
			for (var i = 0; i < s; i++) {
				var h = a.readASCII(r, t, 4);
				t += 4;
				var d = a.readUshort(r, t);
				t += 2, o[h.trim()] = e._lctf.readScriptTable(r, n + d);
			}
			return o;
		}, e._lctf.readScriptTable = function(r, t) {
			var a = e._bin, n = t, o = {}, s = a.readUshort(r, t);
			t += 2, s > 0 && (o.default = e._lctf.readLangSysTable(r, n + s));
			var i = a.readUshort(r, t);
			t += 2;
			for (var h = 0; h < i; h++) {
				var d = a.readASCII(r, t, 4);
				t += 4;
				var f = a.readUshort(r, t);
				t += 2, o[d.trim()] = e._lctf.readLangSysTable(r, n + f);
			}
			return o;
		}, e._lctf.readLangSysTable = function(r, t) {
			var a = e._bin, n = {};
			a.readUshort(r, t), t += 2, n.reqFeature = a.readUshort(r, t), t += 2;
			var o = a.readUshort(r, t);
			return t += 2, n.features = a.readUshorts(r, t, o), n;
		}, e.CFF = {}, e.CFF.parse = function(r, t, a) {
			var n = e._bin;
			(r = new Uint8Array(r.buffer, t, a))[t = 0], r[++t], r[++t], r[++t], t++;
			var o = [];
			t = e.CFF.readIndex(r, t, o);
			for (var s = [], i = 0; i < o.length - 1; i++) s.push(n.readASCII(r, t + o[i], o[i + 1] - o[i]));
			t += o[o.length - 1];
			var h = [];
			t = e.CFF.readIndex(r, t, h);
			var d = [];
			for (i = 0; i < h.length - 1; i++) d.push(e.CFF.readDict(r, t + h[i], t + h[i + 1]));
			t += h[h.length - 1];
			var f = d[0], u = [];
			t = e.CFF.readIndex(r, t, u);
			var l = [];
			for (i = 0; i < u.length - 1; i++) l.push(n.readASCII(r, t + u[i], u[i + 1] - u[i]));
			if (t += u[u.length - 1], e.CFF.readSubrs(r, t, f), f.CharStrings) {
				t = f.CharStrings;
				u = [];
				t = e.CFF.readIndex(r, t, u);
				var v = [];
				for (i = 0; i < u.length - 1; i++) v.push(n.readBytes(r, t + u[i], u[i + 1] - u[i]));
				f.CharStrings = v;
			}
			if (f.ROS) {
				t = f.FDArray;
				var c = [];
				t = e.CFF.readIndex(r, t, c), f.FDArray = [];
				for (i = 0; i < c.length - 1; i++) {
					var p = e.CFF.readDict(r, t + c[i], t + c[i + 1]);
					e.CFF._readFDict(r, p, l), f.FDArray.push(p);
				}
				t += c[c.length - 1], t = f.FDSelect, f.FDSelect = [];
				var U = r[t];
				if (t++, 3 != U) throw U;
				var g = n.readUshort(r, t);
				t += 2;
				for (i = 0; i < g + 1; i++) f.FDSelect.push(n.readUshort(r, t), r[t + 2]), t += 3;
			}
			return f.Encoding && (f.Encoding = e.CFF.readEncoding(r, f.Encoding, f.CharStrings.length)), f.charset && (f.charset = e.CFF.readCharset(r, f.charset, f.CharStrings.length)), e.CFF._readFDict(r, f, l), f;
		}, e.CFF._readFDict = function(r, t, a) {
			var n;
			for (var o in t.Private && (n = t.Private[1], t.Private = e.CFF.readDict(r, n, n + t.Private[0]), t.Private.Subrs && e.CFF.readSubrs(r, n + t.Private.Subrs, t.Private)), t) -1 != [
				"FamilyName",
				"FontName",
				"FullName",
				"Notice",
				"version",
				"Copyright"
			].indexOf(o) && (t[o] = a[t[o] - 426 + 35]);
		}, e.CFF.readSubrs = function(r, t, a) {
			var n = e._bin, o = [];
			t = e.CFF.readIndex(r, t, o);
			var s, i = o.length;
			s = i < 1240 ? 107 : i < 33900 ? 1131 : 32768, a.Bias = s, a.Subrs = [];
			for (var h = 0; h < o.length - 1; h++) a.Subrs.push(n.readBytes(r, t + o[h], o[h + 1] - o[h]));
		}, e.CFF.tableSE = [
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59,
			60,
			61,
			62,
			63,
			64,
			65,
			66,
			67,
			68,
			69,
			70,
			71,
			72,
			73,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			82,
			83,
			84,
			85,
			86,
			87,
			88,
			89,
			90,
			91,
			92,
			93,
			94,
			95,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			96,
			97,
			98,
			99,
			100,
			101,
			102,
			103,
			104,
			105,
			106,
			107,
			108,
			109,
			110,
			0,
			111,
			112,
			113,
			114,
			0,
			115,
			116,
			117,
			118,
			119,
			120,
			121,
			122,
			0,
			123,
			0,
			124,
			125,
			126,
			127,
			128,
			129,
			130,
			131,
			0,
			132,
			133,
			0,
			134,
			135,
			136,
			137,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			138,
			0,
			139,
			0,
			0,
			0,
			0,
			140,
			141,
			142,
			143,
			0,
			0,
			0,
			0,
			0,
			144,
			0,
			0,
			0,
			145,
			0,
			0,
			146,
			147,
			148,
			149,
			0,
			0,
			0,
			0
		], e.CFF.glyphByUnicode = function(r, e) {
			for (var t = 0; t < r.charset.length; t++) if (r.charset[t] == e) return t;
			return -1;
		}, e.CFF.glyphBySE = function(r, t) {
			return t < 0 || t > 255 ? -1 : e.CFF.glyphByUnicode(r, e.CFF.tableSE[t]);
		}, e.CFF.readEncoding = function(r, t, a) {
			e._bin;
			var n = [".notdef"], o = r[t];
			if (t++, 0 != o) throw "error: unknown encoding format: " + o;
			var s = r[t];
			t++;
			for (var i = 0; i < s; i++) n.push(r[t + i]);
			return n;
		}, e.CFF.readCharset = function(r, t, a) {
			var n = e._bin, o = [".notdef"], s = r[t];
			if (t++, 0 == s) for (var i = 0; i < a; i++) {
				var h = n.readUshort(r, t);
				t += 2, o.push(h);
			}
			else {
				if (1 != s && 2 != s) throw "error: format: " + s;
				for (; o.length < a;) {
					h = n.readUshort(r, t);
					t += 2;
					var d = 0;
					1 == s ? (d = r[t], t++) : (d = n.readUshort(r, t), t += 2);
					for (i = 0; i <= d; i++) o.push(h), h++;
				}
			}
			return o;
		}, e.CFF.readIndex = function(r, t, a) {
			var n = e._bin, o = n.readUshort(r, t) + 1, s = r[t += 2];
			if (t++, 1 == s) for (var i = 0; i < o; i++) a.push(r[t + i]);
			else if (2 == s) for (i = 0; i < o; i++) a.push(n.readUshort(r, t + 2 * i));
			else if (3 == s) for (i = 0; i < o; i++) a.push(16777215 & n.readUint(r, t + 3 * i - 1));
			else if (1 != o) throw "unsupported offset size: " + s + ", count: " + o;
			return (t += o * s) - 1;
		}, e.CFF.getCharString = function(r, t, a) {
			var n = e._bin, o = r[t], s = r[t + 1];
			r[t + 2], r[t + 3], r[t + 4];
			var i = 1, h = null, d = null;
			o <= 20 && (h = o, i = 1), 12 == o && (h = 100 * o + s, i = 2), 21 <= o && o <= 27 && (h = o, i = 1), 28 == o && (d = n.readShort(r, t + 1), i = 3), 29 <= o && o <= 31 && (h = o, i = 1), 32 <= o && o <= 246 && (d = o - 139, i = 1), 247 <= o && o <= 250 && (d = 256 * (o - 247) + s + 108, i = 2), 251 <= o && o <= 254 && (d = 256 * -(o - 251) - s - 108, i = 2), 255 == o && (d = n.readInt(r, t + 1) / 65535, i = 5), a.val = null != d ? d : "o" + h, a.size = i;
		}, e.CFF.readCharString = function(r, t, a) {
			for (var n = t + a, o = e._bin, s = []; t < n;) {
				var i = r[t], h = r[t + 1];
				r[t + 2], r[t + 3], r[t + 4];
				var d = 1, f = null, u = null;
				i <= 20 && (f = i, d = 1), 12 == i && (f = 100 * i + h, d = 2), 19 != i && 20 != i || (f = i, d = 2), 21 <= i && i <= 27 && (f = i, d = 1), 28 == i && (u = o.readShort(r, t + 1), d = 3), 29 <= i && i <= 31 && (f = i, d = 1), 32 <= i && i <= 246 && (u = i - 139, d = 1), 247 <= i && i <= 250 && (u = 256 * (i - 247) + h + 108, d = 2), 251 <= i && i <= 254 && (u = 256 * -(i - 251) - h - 108, d = 2), 255 == i && (u = o.readInt(r, t + 1) / 65535, d = 5), s.push(null != u ? u : "o" + f), t += d;
			}
			return s;
		}, e.CFF.readDict = function(r, t, a) {
			for (var n = e._bin, o = {}, s = []; t < a;) {
				var i = r[t], h = r[t + 1];
				r[t + 2], r[t + 3], r[t + 4];
				var d = 1, f = null, u = null;
				if (28 == i && (u = n.readShort(r, t + 1), d = 3), 29 == i && (u = n.readInt(r, t + 1), d = 5), 32 <= i && i <= 246 && (u = i - 139, d = 1), 247 <= i && i <= 250 && (u = 256 * (i - 247) + h + 108, d = 2), 251 <= i && i <= 254 && (u = 256 * -(i - 251) - h - 108, d = 2), 255 == i) throw u = n.readInt(r, t + 1) / 65535, d = 5, "unknown number";
				if (30 == i) {
					var l = [];
					for (d = 1;;) {
						var v = r[t + d];
						d++;
						var c = v >> 4, p = 15 & v;
						if (15 != c && l.push(c), 15 != p && l.push(p), 15 == p) break;
					}
					for (var U = "", g = [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						".",
						"e",
						"e-",
						"reserved",
						"-",
						"endOfNumber"
					], S = 0; S < l.length; S++) U += g[l[S]];
					u = parseFloat(U);
				}
				if (i <= 21) {
					if (f = [
						"version",
						"Notice",
						"FullName",
						"FamilyName",
						"Weight",
						"FontBBox",
						"BlueValues",
						"OtherBlues",
						"FamilyBlues",
						"FamilyOtherBlues",
						"StdHW",
						"StdVW",
						"escape",
						"UniqueID",
						"XUID",
						"charset",
						"Encoding",
						"CharStrings",
						"Private",
						"Subrs",
						"defaultWidthX",
						"nominalWidthX"
					][i], d = 1, 12 == i) f = [
						"Copyright",
						"isFixedPitch",
						"ItalicAngle",
						"UnderlinePosition",
						"UnderlineThickness",
						"PaintType",
						"CharstringType",
						"FontMatrix",
						"StrokeWidth",
						"BlueScale",
						"BlueShift",
						"BlueFuzz",
						"StemSnapH",
						"StemSnapV",
						"ForceBold",
						0,
						0,
						"LanguageGroup",
						"ExpansionFactor",
						"initialRandomSeed",
						"SyntheticBase",
						"PostScript",
						"BaseFontName",
						"BaseFontBlend",
						0,
						0,
						0,
						0,
						0,
						0,
						"ROS",
						"CIDFontVersion",
						"CIDFontRevision",
						"CIDFontType",
						"CIDCount",
						"UIDBase",
						"FDArray",
						"FDSelect",
						"FontName"
					][h], d = 2;
				}
				null != f ? (o[f] = 1 == s.length ? s[0] : s, s = []) : s.push(u), t += d;
			}
			return o;
		}, e.cmap = {}, e.cmap.parse = function(r, t, a) {
			r = new Uint8Array(r.buffer, t, a), t = 0;
			var n = e._bin, o = {};
			n.readUshort(r, t), t += 2;
			var s = n.readUshort(r, t);
			t += 2;
			var i = [];
			o.tables = [];
			for (var h = 0; h < s; h++) {
				var d = n.readUshort(r, t);
				t += 2;
				var f = n.readUshort(r, t);
				t += 2;
				var u = n.readUint(r, t);
				t += 4;
				var l = "p" + d + "e" + f, v = i.indexOf(u);
				if (-1 == v) {
					var c;
					v = o.tables.length, i.push(u);
					var p = n.readUshort(r, u);
					0 == p ? c = e.cmap.parse0(r, u) : 4 == p ? c = e.cmap.parse4(r, u) : 6 == p ? c = e.cmap.parse6(r, u) : 12 == p ? c = e.cmap.parse12(r, u) : console.debug("unknown format: " + p, d, f, u), o.tables.push(c);
				}
				if (null != o[l]) throw "multiple tables for one platform+encoding";
				o[l] = v;
			}
			return o;
		}, e.cmap.parse0 = function(r, t) {
			var a = e._bin, n = {};
			n.format = a.readUshort(r, t), t += 2;
			var o = a.readUshort(r, t);
			t += 2, a.readUshort(r, t), t += 2, n.map = [];
			for (var s = 0; s < o - 6; s++) n.map.push(r[t + s]);
			return n;
		}, e.cmap.parse4 = function(r, t) {
			var a = e._bin, n = t, o = {};
			o.format = a.readUshort(r, t), t += 2;
			var s = a.readUshort(r, t);
			t += 2, a.readUshort(r, t), t += 2;
			var i = a.readUshort(r, t);
			t += 2;
			var h = i / 2;
			o.searchRange = a.readUshort(r, t), t += 2, o.entrySelector = a.readUshort(r, t), t += 2, o.rangeShift = a.readUshort(r, t), t += 2, o.endCount = a.readUshorts(r, t, h), t += 2 * h, t += 2, o.startCount = a.readUshorts(r, t, h), t += 2 * h, o.idDelta = [];
			for (var d = 0; d < h; d++) o.idDelta.push(a.readShort(r, t)), t += 2;
			for (o.idRangeOffset = a.readUshorts(r, t, h), t += 2 * h, o.glyphIdArray = []; t < n + s;) o.glyphIdArray.push(a.readUshort(r, t)), t += 2;
			return o;
		}, e.cmap.parse6 = function(r, t) {
			var a = e._bin, n = {};
			n.format = a.readUshort(r, t), t += 2, a.readUshort(r, t), t += 2, a.readUshort(r, t), t += 2, n.firstCode = a.readUshort(r, t), t += 2;
			var o = a.readUshort(r, t);
			t += 2, n.glyphIdArray = [];
			for (var s = 0; s < o; s++) n.glyphIdArray.push(a.readUshort(r, t)), t += 2;
			return n;
		}, e.cmap.parse12 = function(r, t) {
			var a = e._bin, n = {};
			n.format = a.readUshort(r, t), t += 2, t += 2, a.readUint(r, t), t += 4, a.readUint(r, t), t += 4;
			var o = a.readUint(r, t);
			t += 4, n.groups = [];
			for (var s = 0; s < o; s++) {
				var i = t + 12 * s, h = a.readUint(r, i + 0), d = a.readUint(r, i + 4), f = a.readUint(r, i + 8);
				n.groups.push([
					h,
					d,
					f
				]);
			}
			return n;
		}, e.glyf = {}, e.glyf.parse = function(r, e, t, a) {
			for (var n = [], o = 0; o < a.maxp.numGlyphs; o++) n.push(null);
			return n;
		}, e.glyf._parseGlyf = function(r, t) {
			var a = e._bin, n = r._data, o = e._tabOffset(n, "glyf", r._offset) + r.loca[t];
			if (r.loca[t] == r.loca[t + 1]) return null;
			var s = {};
			if (s.noc = a.readShort(n, o), o += 2, s.xMin = a.readShort(n, o), o += 2, s.yMin = a.readShort(n, o), o += 2, s.xMax = a.readShort(n, o), o += 2, s.yMax = a.readShort(n, o), o += 2, s.xMin >= s.xMax || s.yMin >= s.yMax) return null;
			if (s.noc > 0) {
				s.endPts = [];
				for (var i = 0; i < s.noc; i++) s.endPts.push(a.readUshort(n, o)), o += 2;
				var h = a.readUshort(n, o);
				if (o += 2, n.length - o < h) return null;
				s.instructions = a.readBytes(n, o, h), o += h;
				var d = s.endPts[s.noc - 1] + 1;
				s.flags = [];
				for (i = 0; i < d; i++) {
					var f = n[o];
					if (o++, s.flags.push(f), 0 != (8 & f)) {
						var u = n[o];
						o++;
						for (var l = 0; l < u; l++) s.flags.push(f), i++;
					}
				}
				s.xs = [];
				for (i = 0; i < d; i++) {
					var v = 0 != (2 & s.flags[i]), c = 0 != (16 & s.flags[i]);
					v ? (s.xs.push(c ? n[o] : -n[o]), o++) : c ? s.xs.push(0) : (s.xs.push(a.readShort(n, o)), o += 2);
				}
				s.ys = [];
				for (i = 0; i < d; i++) {
					v = 0 != (4 & s.flags[i]), c = 0 != (32 & s.flags[i]);
					v ? (s.ys.push(c ? n[o] : -n[o]), o++) : c ? s.ys.push(0) : (s.ys.push(a.readShort(n, o)), o += 2);
				}
				var p = 0, U = 0;
				for (i = 0; i < d; i++) p += s.xs[i], U += s.ys[i], s.xs[i] = p, s.ys[i] = U;
			} else {
				var g;
				s.parts = [];
				do {
					g = a.readUshort(n, o), o += 2;
					var S = {
						m: {
							a: 1,
							b: 0,
							c: 0,
							d: 1,
							tx: 0,
							ty: 0
						},
						p1: -1,
						p2: -1
					};
					if (s.parts.push(S), S.glyphIndex = a.readUshort(n, o), o += 2, 1 & g) {
						var m = a.readShort(n, o);
						o += 2;
						var b = a.readShort(n, o);
						o += 2;
					} else {
						m = a.readInt8(n, o);
						o++;
						b = a.readInt8(n, o);
						o++;
					}
					2 & g ? (S.m.tx = m, S.m.ty = b) : (S.p1 = m, S.p2 = b), 8 & g ? (S.m.a = S.m.d = a.readF2dot14(n, o), o += 2) : 64 & g ? (S.m.a = a.readF2dot14(n, o), o += 2, S.m.d = a.readF2dot14(n, o), o += 2) : 128 & g && (S.m.a = a.readF2dot14(n, o), o += 2, S.m.b = a.readF2dot14(n, o), o += 2, S.m.c = a.readF2dot14(n, o), o += 2, S.m.d = a.readF2dot14(n, o), o += 2);
				} while (32 & g);
				if (256 & g) {
					var y = a.readUshort(n, o);
					o += 2, s.instr = [];
					for (i = 0; i < y; i++) s.instr.push(n[o]), o++;
				}
			}
			return s;
		}, e.GDEF = {}, e.GDEF.parse = function(r, t, a, n) {
			var o = t;
			t += 4;
			var s = e._bin.readUshort(r, t);
			return { glyphClassDef: 0 === s ? null : e._lctf.readClassDef(r, o + s) };
		}, e.GPOS = {}, e.GPOS.parse = function(r, t, a, n) {
			return e._lctf.parse(r, t, a, n, e.GPOS.subt);
		}, e.GPOS.subt = function(r, t, a, n) {
			var o = e._bin, s = a, i = {};
			if (i.fmt = o.readUshort(r, a), a += 2, 1 == t || 2 == t || 3 == t || 7 == t || 8 == t && i.fmt <= 2) {
				var h = o.readUshort(r, a);
				a += 2, i.coverage = e._lctf.readCoverage(r, h + s);
			}
			if (1 == t && 1 == i.fmt) {
				var d = o.readUshort(r, a);
				a += 2, 0 != d && (i.pos = e.GPOS.readValueRecord(r, a, d));
			} else if (2 == t && i.fmt >= 1 && i.fmt <= 2) {
				d = o.readUshort(r, a);
				a += 2;
				var f = o.readUshort(r, a);
				a += 2;
				var u = e._lctf.numOfOnes(d), l = e._lctf.numOfOnes(f);
				if (1 == i.fmt) {
					i.pairsets = [];
					var v = o.readUshort(r, a);
					a += 2;
					for (var c = 0; c < v; c++) {
						var p = s + o.readUshort(r, a);
						a += 2;
						var U = o.readUshort(r, p);
						p += 2;
						for (var g = [], S = 0; S < U; S++) {
							var m = o.readUshort(r, p);
							p += 2, 0 != d && (P = e.GPOS.readValueRecord(r, p, d), p += 2 * u), 0 != f && (x = e.GPOS.readValueRecord(r, p, f), p += 2 * l), g.push({
								gid2: m,
								val1: P,
								val2: x
							});
						}
						i.pairsets.push(g);
					}
				}
				if (2 == i.fmt) {
					var b = o.readUshort(r, a);
					a += 2;
					var y = o.readUshort(r, a);
					a += 2;
					var F = o.readUshort(r, a);
					a += 2;
					var C = o.readUshort(r, a);
					a += 2, i.classDef1 = e._lctf.readClassDef(r, s + b), i.classDef2 = e._lctf.readClassDef(r, s + y), i.matrix = [];
					for (c = 0; c < F; c++) {
						var _ = [];
						for (S = 0; S < C; S++) {
							var P = null, x = null;
							0 != d && (P = e.GPOS.readValueRecord(r, a, d), a += 2 * u), 0 != f && (x = e.GPOS.readValueRecord(r, a, f), a += 2 * l), _.push({
								val1: P,
								val2: x
							});
						}
						i.matrix.push(_);
					}
				}
			} else if (4 == t && 1 == i.fmt) i.markCoverage = e._lctf.readCoverage(r, o.readUshort(r, a) + s), i.baseCoverage = e._lctf.readCoverage(r, o.readUshort(r, a + 2) + s), i.markClassCount = o.readUshort(r, a + 4), i.markArray = e.GPOS.readMarkArray(r, o.readUshort(r, a + 6) + s), i.baseArray = e.GPOS.readBaseArray(r, o.readUshort(r, a + 8) + s, i.markClassCount);
			else if (6 == t && 1 == i.fmt) i.mark1Coverage = e._lctf.readCoverage(r, o.readUshort(r, a) + s), i.mark2Coverage = e._lctf.readCoverage(r, o.readUshort(r, a + 2) + s), i.markClassCount = o.readUshort(r, a + 4), i.mark1Array = e.GPOS.readMarkArray(r, o.readUshort(r, a + 6) + s), i.mark2Array = e.GPOS.readBaseArray(r, o.readUshort(r, a + 8) + s, i.markClassCount);
			else {
				if (9 == t && 1 == i.fmt) {
					var I = o.readUshort(r, a);
					a += 2;
					var w = o.readUint(r, a);
					if (a += 4, 9 == n.ltype) n.ltype = I;
					else if (n.ltype != I) throw "invalid extension substitution";
					return e.GPOS.subt(r, n.ltype, s + w);
				}
				console.debug("unsupported GPOS table LookupType", t, "format", i.fmt);
			}
			return i;
		}, e.GPOS.readValueRecord = function(r, t, a) {
			var n = e._bin, o = [];
			return o.push(1 & a ? n.readShort(r, t) : 0), t += 1 & a ? 2 : 0, o.push(2 & a ? n.readShort(r, t) : 0), t += 2 & a ? 2 : 0, o.push(4 & a ? n.readShort(r, t) : 0), t += 4 & a ? 2 : 0, o.push(8 & a ? n.readShort(r, t) : 0), t += 8 & a ? 2 : 0, o;
		}, e.GPOS.readBaseArray = function(r, t, a) {
			var n = e._bin, o = [], s = t, i = n.readUshort(r, t);
			t += 2;
			for (var h = 0; h < i; h++) {
				for (var d = [], f = 0; f < a; f++) d.push(e.GPOS.readAnchorRecord(r, s + n.readUshort(r, t))), t += 2;
				o.push(d);
			}
			return o;
		}, e.GPOS.readMarkArray = function(r, t) {
			var a = e._bin, n = [], o = t, s = a.readUshort(r, t);
			t += 2;
			for (var i = 0; i < s; i++) {
				var h = e.GPOS.readAnchorRecord(r, a.readUshort(r, t + 2) + o);
				h.markClass = a.readUshort(r, t), n.push(h), t += 4;
			}
			return n;
		}, e.GPOS.readAnchorRecord = function(r, t) {
			var a = e._bin, n = {};
			return n.fmt = a.readUshort(r, t), n.x = a.readShort(r, t + 2), n.y = a.readShort(r, t + 4), n;
		}, e.GSUB = {}, e.GSUB.parse = function(r, t, a, n) {
			return e._lctf.parse(r, t, a, n, e.GSUB.subt);
		}, e.GSUB.subt = function(r, t, a, n) {
			var o = e._bin, s = a, i = {};
			if (i.fmt = o.readUshort(r, a), a += 2, 1 != t && 2 != t && 4 != t && 5 != t && 6 != t) return null;
			if (1 == t || 2 == t || 4 == t || 5 == t && i.fmt <= 2 || 6 == t && i.fmt <= 2) {
				var h = o.readUshort(r, a);
				a += 2, i.coverage = e._lctf.readCoverage(r, s + h);
			}
			if (1 == t && i.fmt >= 1 && i.fmt <= 2) {
				if (1 == i.fmt) i.delta = o.readShort(r, a), a += 2;
				else if (2 == i.fmt) {
					var d = o.readUshort(r, a);
					a += 2, i.newg = o.readUshorts(r, a, d), a += 2 * i.newg.length;
				}
			} else if (2 == t && 1 == i.fmt) {
				d = o.readUshort(r, a);
				a += 2, i.seqs = [];
				for (var f = 0; f < d; f++) {
					var u = o.readUshort(r, a) + s;
					a += 2;
					var l = o.readUshort(r, u);
					i.seqs.push(o.readUshorts(r, u + 2, l));
				}
			} else if (4 == t) {
				i.vals = [];
				d = o.readUshort(r, a);
				a += 2;
				for (f = 0; f < d; f++) {
					var v = o.readUshort(r, a);
					a += 2, i.vals.push(e.GSUB.readLigatureSet(r, s + v));
				}
			} else if (5 == t && 2 == i.fmt) {
				if (2 == i.fmt) {
					var c = o.readUshort(r, a);
					a += 2, i.cDef = e._lctf.readClassDef(r, s + c), i.scset = [];
					var p = o.readUshort(r, a);
					a += 2;
					for (f = 0; f < p; f++) {
						var U = o.readUshort(r, a);
						a += 2, i.scset.push(0 == U ? null : e.GSUB.readSubClassSet(r, s + U));
					}
				}
			} else if (6 == t && 3 == i.fmt) {
				if (3 == i.fmt) {
					for (f = 0; f < 3; f++) {
						d = o.readUshort(r, a);
						a += 2;
						for (var g = [], S = 0; S < d; S++) g.push(e._lctf.readCoverage(r, s + o.readUshort(r, a + 2 * S)));
						a += 2 * d, 0 == f && (i.backCvg = g), 1 == f && (i.inptCvg = g), 2 == f && (i.ahedCvg = g);
					}
					d = o.readUshort(r, a);
					a += 2, i.lookupRec = e.GSUB.readSubstLookupRecords(r, a, d);
				}
			} else {
				if (7 == t && 1 == i.fmt) {
					var m = o.readUshort(r, a);
					a += 2;
					var b = o.readUint(r, a);
					if (a += 4, 9 == n.ltype) n.ltype = m;
					else if (n.ltype != m) throw "invalid extension substitution";
					return e.GSUB.subt(r, n.ltype, s + b);
				}
				console.debug("unsupported GSUB table LookupType", t, "format", i.fmt);
			}
			return i;
		}, e.GSUB.readSubClassSet = function(r, t) {
			var a = e._bin.readUshort, n = t, o = [], s = a(r, t);
			t += 2;
			for (var i = 0; i < s; i++) {
				var h = a(r, t);
				t += 2, o.push(e.GSUB.readSubClassRule(r, n + h));
			}
			return o;
		}, e.GSUB.readSubClassRule = function(r, t) {
			var a = e._bin.readUshort, n = {}, o = a(r, t), s = a(r, t += 2);
			t += 2, n.input = [];
			for (var i = 0; i < o - 1; i++) n.input.push(a(r, t)), t += 2;
			return n.substLookupRecords = e.GSUB.readSubstLookupRecords(r, t, s), n;
		}, e.GSUB.readSubstLookupRecords = function(r, t, a) {
			for (var n = e._bin.readUshort, o = [], s = 0; s < a; s++) o.push(n(r, t), n(r, t + 2)), t += 4;
			return o;
		}, e.GSUB.readChainSubClassSet = function(r, t) {
			var a = e._bin, n = t, o = [], s = a.readUshort(r, t);
			t += 2;
			for (var i = 0; i < s; i++) {
				var h = a.readUshort(r, t);
				t += 2, o.push(e.GSUB.readChainSubClassRule(r, n + h));
			}
			return o;
		}, e.GSUB.readChainSubClassRule = function(r, t) {
			for (var a = e._bin, n = {}, o = [
				"backtrack",
				"input",
				"lookahead"
			], s = 0; s < o.length; s++) {
				var i = a.readUshort(r, t);
				t += 2, 1 == s && i--, n[o[s]] = a.readUshorts(r, t, i), t += 2 * n[o[s]].length;
			}
			i = a.readUshort(r, t);
			return t += 2, n.subst = a.readUshorts(r, t, 2 * i), t += 2 * n.subst.length, n;
		}, e.GSUB.readLigatureSet = function(r, t) {
			var a = e._bin, n = t, o = [], s = a.readUshort(r, t);
			t += 2;
			for (var i = 0; i < s; i++) {
				var h = a.readUshort(r, t);
				t += 2, o.push(e.GSUB.readLigature(r, n + h));
			}
			return o;
		}, e.GSUB.readLigature = function(r, t) {
			var a = e._bin, n = { chain: [] };
			n.nglyph = a.readUshort(r, t), t += 2;
			var o = a.readUshort(r, t);
			t += 2;
			for (var s = 0; s < o - 1; s++) n.chain.push(a.readUshort(r, t)), t += 2;
			return n;
		}, e.head = {}, e.head.parse = function(r, t, a) {
			var n = e._bin, o = {};
			return n.readFixed(r, t), t += 4, o.fontRevision = n.readFixed(r, t), t += 4, n.readUint(r, t), t += 4, n.readUint(r, t), t += 4, o.flags = n.readUshort(r, t), t += 2, o.unitsPerEm = n.readUshort(r, t), t += 2, o.created = n.readUint64(r, t), t += 8, o.modified = n.readUint64(r, t), t += 8, o.xMin = n.readShort(r, t), t += 2, o.yMin = n.readShort(r, t), t += 2, o.xMax = n.readShort(r, t), t += 2, o.yMax = n.readShort(r, t), t += 2, o.macStyle = n.readUshort(r, t), t += 2, o.lowestRecPPEM = n.readUshort(r, t), t += 2, o.fontDirectionHint = n.readShort(r, t), t += 2, o.indexToLocFormat = n.readShort(r, t), t += 2, o.glyphDataFormat = n.readShort(r, t), t += 2, o;
		}, e.hhea = {}, e.hhea.parse = function(r, t, a) {
			var n = e._bin, o = {};
			return n.readFixed(r, t), t += 4, o.ascender = n.readShort(r, t), t += 2, o.descender = n.readShort(r, t), t += 2, o.lineGap = n.readShort(r, t), t += 2, o.advanceWidthMax = n.readUshort(r, t), t += 2, o.minLeftSideBearing = n.readShort(r, t), t += 2, o.minRightSideBearing = n.readShort(r, t), t += 2, o.xMaxExtent = n.readShort(r, t), t += 2, o.caretSlopeRise = n.readShort(r, t), t += 2, o.caretSlopeRun = n.readShort(r, t), t += 2, o.caretOffset = n.readShort(r, t), t += 2, t += 8, o.metricDataFormat = n.readShort(r, t), t += 2, o.numberOfHMetrics = n.readUshort(r, t), t += 2, o;
		}, e.hmtx = {}, e.hmtx.parse = function(r, t, a, n) {
			for (var o = e._bin, s = {
				aWidth: [],
				lsBearing: []
			}, i = 0, h = 0, d = 0; d < n.maxp.numGlyphs; d++) d < n.hhea.numberOfHMetrics && (i = o.readUshort(r, t), t += 2, h = o.readShort(r, t), t += 2), s.aWidth.push(i), s.lsBearing.push(h);
			return s;
		}, e.kern = {}, e.kern.parse = function(r, t, a, n) {
			var o = e._bin, s = o.readUshort(r, t);
			if (t += 2, 1 == s) return e.kern.parseV1(r, t - 2, a, n);
			var i = o.readUshort(r, t);
			t += 2;
			for (var h = {
				glyph1: [],
				rval: []
			}, d = 0; d < i; d++) {
				t += 2;
				a = o.readUshort(r, t);
				t += 2;
				var f = o.readUshort(r, t);
				t += 2;
				var u = f >>> 8;
				if (0 != (u &= 15)) throw "unknown kern table format: " + u;
				t = e.kern.readFormat0(r, t, h);
			}
			return h;
		}, e.kern.parseV1 = function(r, t, a, n) {
			var o = e._bin;
			o.readFixed(r, t), t += 4;
			var s = o.readUint(r, t);
			t += 4;
			for (var i = {
				glyph1: [],
				rval: []
			}, h = 0; h < s; h++) {
				o.readUint(r, t), t += 4;
				var d = o.readUshort(r, t);
				t += 2, o.readUshort(r, t), t += 2;
				var f = d >>> 8;
				if (0 != (f &= 15)) throw "unknown kern table format: " + f;
				t = e.kern.readFormat0(r, t, i);
			}
			return i;
		}, e.kern.readFormat0 = function(r, t, a) {
			var n = e._bin, o = -1, s = n.readUshort(r, t);
			t += 2, n.readUshort(r, t), t += 2, n.readUshort(r, t), t += 2, n.readUshort(r, t), t += 2;
			for (var i = 0; i < s; i++) {
				var h = n.readUshort(r, t);
				t += 2;
				var d = n.readUshort(r, t);
				t += 2;
				var f = n.readShort(r, t);
				t += 2, h != o && (a.glyph1.push(h), a.rval.push({
					glyph2: [],
					vals: []
				}));
				var u = a.rval[a.rval.length - 1];
				u.glyph2.push(d), u.vals.push(f), o = h;
			}
			return t;
		}, e.loca = {}, e.loca.parse = function(r, t, a, n) {
			var o = e._bin, s = [], i = n.head.indexToLocFormat, h = n.maxp.numGlyphs + 1;
			if (0 == i) for (var d = 0; d < h; d++) s.push(o.readUshort(r, t + (d << 1)) << 1);
			if (1 == i) for (d = 0; d < h; d++) s.push(o.readUint(r, t + (d << 2)));
			return s;
		}, e.maxp = {}, e.maxp.parse = function(r, t, a) {
			var n = e._bin, o = {}, s = n.readUint(r, t);
			return t += 4, o.numGlyphs = n.readUshort(r, t), t += 2, 65536 == s && (o.maxPoints = n.readUshort(r, t), t += 2, o.maxContours = n.readUshort(r, t), t += 2, o.maxCompositePoints = n.readUshort(r, t), t += 2, o.maxCompositeContours = n.readUshort(r, t), t += 2, o.maxZones = n.readUshort(r, t), t += 2, o.maxTwilightPoints = n.readUshort(r, t), t += 2, o.maxStorage = n.readUshort(r, t), t += 2, o.maxFunctionDefs = n.readUshort(r, t), t += 2, o.maxInstructionDefs = n.readUshort(r, t), t += 2, o.maxStackElements = n.readUshort(r, t), t += 2, o.maxSizeOfInstructions = n.readUshort(r, t), t += 2, o.maxComponentElements = n.readUshort(r, t), t += 2, o.maxComponentDepth = n.readUshort(r, t), t += 2), o;
		}, e.name = {}, e.name.parse = function(r, t, a) {
			var n = e._bin, o = {};
			n.readUshort(r, t), t += 2;
			var s = n.readUshort(r, t);
			t += 2, n.readUshort(r, t);
			for (var i, h = [
				"copyright",
				"fontFamily",
				"fontSubfamily",
				"ID",
				"fullName",
				"version",
				"postScriptName",
				"trademark",
				"manufacturer",
				"designer",
				"description",
				"urlVendor",
				"urlDesigner",
				"licence",
				"licenceURL",
				"---",
				"typoFamilyName",
				"typoSubfamilyName",
				"compatibleFull",
				"sampleText",
				"postScriptCID",
				"wwsFamilyName",
				"wwsSubfamilyName",
				"lightPalette",
				"darkPalette"
			], d = t += 2, f = 0; f < s; f++) {
				var u = n.readUshort(r, t);
				t += 2;
				var l = n.readUshort(r, t);
				t += 2;
				var v = n.readUshort(r, t);
				t += 2;
				var c = n.readUshort(r, t);
				t += 2;
				var p = n.readUshort(r, t);
				t += 2;
				var U = n.readUshort(r, t);
				t += 2;
				var g, S = h[c], m = d + 12 * s + U;
				if (0 == u) g = n.readUnicode(r, m, p / 2);
				else if (3 == u && 0 == l) g = n.readUnicode(r, m, p / 2);
				else if (0 == l) g = n.readASCII(r, m, p);
				else if (1 == l) g = n.readUnicode(r, m, p / 2);
				else if (3 == l) g = n.readUnicode(r, m, p / 2);
				else {
					if (1 != u) throw "unknown encoding " + l + ", platformID: " + u;
					g = n.readASCII(r, m, p), console.debug("reading unknown MAC encoding " + l + " as ASCII");
				}
				var b = "p" + u + "," + v.toString(16);
				o[b] ?? (o[b] = {}), o[b][void 0 !== S ? S : c] = g, o[b]._lang = v;
			}
			for (var y in o) if (null != o[y].postScriptName && 1033 == o[y]._lang) return o[y];
			for (var y in o) if (null != o[y].postScriptName && 0 == o[y]._lang) return o[y];
			for (var y in o) if (null != o[y].postScriptName && 3084 == o[y]._lang) return o[y];
			for (var y in o) if (null != o[y].postScriptName) return o[y];
			for (var y in o) {
				i = y;
				break;
			}
			return console.debug("returning name table with languageID " + o[i]._lang), o[i];
		}, e["OS/2"] = {}, e["OS/2"].parse = function(r, t, a) {
			var n = e._bin.readUshort(r, t);
			t += 2;
			var o = {};
			if (0 == n) e["OS/2"].version0(r, t, o);
			else if (1 == n) e["OS/2"].version1(r, t, o);
			else if (2 == n || 3 == n || 4 == n) e["OS/2"].version2(r, t, o);
			else {
				if (5 != n) throw "unknown OS/2 table version: " + n;
				e["OS/2"].version5(r, t, o);
			}
			return o;
		}, e["OS/2"].version0 = function(r, t, a) {
			var n = e._bin;
			return a.xAvgCharWidth = n.readShort(r, t), t += 2, a.usWeightClass = n.readUshort(r, t), t += 2, a.usWidthClass = n.readUshort(r, t), t += 2, a.fsType = n.readUshort(r, t), t += 2, a.ySubscriptXSize = n.readShort(r, t), t += 2, a.ySubscriptYSize = n.readShort(r, t), t += 2, a.ySubscriptXOffset = n.readShort(r, t), t += 2, a.ySubscriptYOffset = n.readShort(r, t), t += 2, a.ySuperscriptXSize = n.readShort(r, t), t += 2, a.ySuperscriptYSize = n.readShort(r, t), t += 2, a.ySuperscriptXOffset = n.readShort(r, t), t += 2, a.ySuperscriptYOffset = n.readShort(r, t), t += 2, a.yStrikeoutSize = n.readShort(r, t), t += 2, a.yStrikeoutPosition = n.readShort(r, t), t += 2, a.sFamilyClass = n.readShort(r, t), t += 2, a.panose = n.readBytes(r, t, 10), t += 10, a.ulUnicodeRange1 = n.readUint(r, t), t += 4, a.ulUnicodeRange2 = n.readUint(r, t), t += 4, a.ulUnicodeRange3 = n.readUint(r, t), t += 4, a.ulUnicodeRange4 = n.readUint(r, t), t += 4, a.achVendID = [
				n.readInt8(r, t),
				n.readInt8(r, t + 1),
				n.readInt8(r, t + 2),
				n.readInt8(r, t + 3)
			], t += 4, a.fsSelection = n.readUshort(r, t), t += 2, a.usFirstCharIndex = n.readUshort(r, t), t += 2, a.usLastCharIndex = n.readUshort(r, t), t += 2, a.sTypoAscender = n.readShort(r, t), t += 2, a.sTypoDescender = n.readShort(r, t), t += 2, a.sTypoLineGap = n.readShort(r, t), t += 2, a.usWinAscent = n.readUshort(r, t), t += 2, a.usWinDescent = n.readUshort(r, t), t += 2;
		}, e["OS/2"].version1 = function(r, t, a) {
			var n = e._bin;
			return t = e["OS/2"].version0(r, t, a), a.ulCodePageRange1 = n.readUint(r, t), t += 4, a.ulCodePageRange2 = n.readUint(r, t), t += 4;
		}, e["OS/2"].version2 = function(r, t, a) {
			var n = e._bin;
			return t = e["OS/2"].version1(r, t, a), a.sxHeight = n.readShort(r, t), t += 2, a.sCapHeight = n.readShort(r, t), t += 2, a.usDefault = n.readUshort(r, t), t += 2, a.usBreak = n.readUshort(r, t), t += 2, a.usMaxContext = n.readUshort(r, t), t += 2;
		}, e["OS/2"].version5 = function(r, t, a) {
			var n = e._bin;
			return t = e["OS/2"].version2(r, t, a), a.usLowerOpticalPointSize = n.readUshort(r, t), t += 2, a.usUpperOpticalPointSize = n.readUshort(r, t), t += 2;
		}, e.post = {}, e.post.parse = function(r, t, a) {
			var n = e._bin, o = {};
			return o.version = n.readFixed(r, t), t += 4, o.italicAngle = n.readFixed(r, t), t += 4, o.underlinePosition = n.readShort(r, t), t += 2, o.underlineThickness = n.readShort(r, t), t += 2, o;
		}, e ??= {}, e.U ?? (e.U = {}), e.U.codeToGlyph = function(r, e) {
			var t = r.cmap, a = -1;
			if (null != t.p0e4 ? a = t.p0e4 : null != t.p3e1 ? a = t.p3e1 : null != t.p1e0 ? a = t.p1e0 : null != t.p0e3 && (a = t.p0e3), -1 == a) throw "no familiar platform and encoding!";
			var n = t.tables[a];
			if (0 == n.format) return e >= n.map.length ? 0 : n.map[e];
			if (4 == n.format) {
				for (var o = -1, s = 0; s < n.endCount.length; s++) if (e <= n.endCount[s]) {
					o = s;
					break;
				}
				if (-1 == o) return 0;
				if (n.startCount[o] > e) return 0;
				return 65535 & (0 != n.idRangeOffset[o] ? n.glyphIdArray[e - n.startCount[o] + (n.idRangeOffset[o] >> 1) - (n.idRangeOffset.length - o)] : e + n.idDelta[o]);
			}
			if (12 == n.format) {
				if (e > n.groups[n.groups.length - 1][1]) return 0;
				for (s = 0; s < n.groups.length; s++) {
					var i = n.groups[s];
					if (i[0] <= e && e <= i[1]) return i[2] + (e - i[0]);
				}
				return 0;
			}
			throw "unknown cmap table format " + n.format;
		}, e.U.glyphToPath = function(r, t) {
			var a = {
				cmds: [],
				crds: []
			};
			if (r.SVG && r.SVG.entries[t]) {
				var n = r.SVG.entries[t];
				return null == n ? a : ("string" == typeof n && (n = e.SVG.toPath(n), r.SVG.entries[t] = n), n);
			}
			if (r.CFF) {
				var o = {
					x: 0,
					y: 0,
					stack: [],
					nStems: 0,
					haveWidth: !1,
					width: r.CFF.Private ? r.CFF.Private.defaultWidthX : 0,
					open: !1
				}, s = r.CFF, i = r.CFF.Private;
				if (s.ROS) {
					for (var h = 0; s.FDSelect[h + 2] <= t;) h += 2;
					i = s.FDArray[s.FDSelect[h + 1]].Private;
				}
				e.U._drawCFF(r.CFF.CharStrings[t], o, s, i, a);
			} else r.glyf && e.U._drawGlyf(t, r, a);
			return a;
		}, e.U._drawGlyf = function(r, t, a) {
			var n = t.glyf[r];
			n ??= t.glyf[r] = e.glyf._parseGlyf(t, r), null != n && (n.noc > -1 ? e.U._simpleGlyph(n, a) : e.U._compoGlyph(n, t, a));
		}, e.U._simpleGlyph = function(r, t) {
			for (var a = 0; a < r.noc; a++) {
				for (var n = 0 == a ? 0 : r.endPts[a - 1] + 1, o = r.endPts[a], s = n; s <= o; s++) {
					var i = s == n ? o : s - 1, h = s == o ? n : s + 1, d = 1 & r.flags[s], f = 1 & r.flags[i], u = 1 & r.flags[h], l = r.xs[s], v = r.ys[s];
					if (s == n) if (d) {
						if (!f) {
							e.U.P.moveTo(t, l, v);
							continue;
						}
						e.U.P.moveTo(t, r.xs[i], r.ys[i]);
					} else f ? e.U.P.moveTo(t, r.xs[i], r.ys[i]) : e.U.P.moveTo(t, (r.xs[i] + l) / 2, (r.ys[i] + v) / 2);
					d ? f && e.U.P.lineTo(t, l, v) : u ? e.U.P.qcurveTo(t, l, v, r.xs[h], r.ys[h]) : e.U.P.qcurveTo(t, l, v, (l + r.xs[h]) / 2, (v + r.ys[h]) / 2);
				}
				e.U.P.closePath(t);
			}
		}, e.U._compoGlyph = function(r, t, a) {
			for (var n = 0; n < r.parts.length; n++) {
				var o = {
					cmds: [],
					crds: []
				}, s = r.parts[n];
				e.U._drawGlyf(s.glyphIndex, t, o);
				for (var i = s.m, h = 0; h < o.crds.length; h += 2) {
					var d = o.crds[h], f = o.crds[h + 1];
					a.crds.push(d * i.a + f * i.b + i.tx), a.crds.push(d * i.c + f * i.d + i.ty);
				}
				for (h = 0; h < o.cmds.length; h++) a.cmds.push(o.cmds[h]);
			}
		}, e.U._getGlyphClass = function(r, t) {
			var a = e._lctf.getInterval(t, r);
			return -1 == a ? 0 : t[a + 2];
		}, e.U._applySubs = function(r, t, a, n) {
			for (var o = r.length - t - 1, s = 0; s < a.tabs.length; s++) if (null != a.tabs[s]) {
				var i, h = a.tabs[s];
				if (!h.coverage || -1 != (i = e._lctf.coverageIndex(h.coverage, r[t]))) {
					if (1 == a.ltype) r[t], 1 == h.fmt ? r[t] = r[t] + h.delta : r[t] = h.newg[i];
					else if (4 == a.ltype) for (var d = h.vals[i], f = 0; f < d.length; f++) {
						var u = d[f], l = u.chain.length;
						if (!(l > o)) {
							for (var v = !0, c = 0, p = 0; p < l; p++) {
								for (; -1 == r[t + c + (1 + p)];) c++;
								u.chain[p] != r[t + c + (1 + p)] && (v = !1);
							}
							if (v) {
								r[t] = u.nglyph;
								for (p = 0; p < l + c; p++) r[t + p + 1] = -1;
								break;
							}
						}
					}
					else if (5 == a.ltype && 2 == h.fmt) for (var U = e._lctf.getInterval(h.cDef, r[t]), g = h.cDef[U + 2], S = h.scset[g], m = 0; m < S.length; m++) {
						var b = S[m], y = b.input;
						if (!(y.length > o)) {
							for (v = !0, p = 0; p < y.length; p++) {
								var F = e._lctf.getInterval(h.cDef, r[t + 1 + p]);
								if (-1 == U && h.cDef[F + 2] != y[p]) {
									v = !1;
									break;
								}
							}
							if (v) {
								var C = b.substLookupRecords;
								for (f = 0; f < C.length; f += 2) C[f], C[f + 1];
							}
						}
					}
					else if (6 == a.ltype && 3 == h.fmt) {
						if (!e.U._glsCovered(r, h.backCvg, t - h.backCvg.length)) continue;
						if (!e.U._glsCovered(r, h.inptCvg, t)) continue;
						if (!e.U._glsCovered(r, h.ahedCvg, t + h.inptCvg.length)) continue;
						var _ = h.lookupRec;
						for (m = 0; m < _.length; m += 2) {
							U = _[m];
							var P = n[_[m + 1]];
							e.U._applySubs(r, t + U, P, n);
						}
					}
				}
			}
		}, e.U._glsCovered = function(r, t, a) {
			for (var n = 0; n < t.length; n++) if (-1 == e._lctf.coverageIndex(t[n], r[a + n])) return !1;
			return !0;
		}, e.U.glyphsToPath = function(r, t, a) {
			for (var n = {
				cmds: [],
				crds: []
			}, o = 0, s = 0; s < t.length; s++) {
				var i = t[s];
				if (-1 != i) {
					for (var h = s < t.length - 1 && -1 != t[s + 1] ? t[s + 1] : 0, d = e.U.glyphToPath(r, i), f = 0; f < d.crds.length; f += 2) n.crds.push(d.crds[f] + o), n.crds.push(d.crds[f + 1]);
					a && n.cmds.push(a);
					for (f = 0; f < d.cmds.length; f++) n.cmds.push(d.cmds[f]);
					a && n.cmds.push("X"), o += r.hmtx.aWidth[i], s < t.length - 1 && (o += e.U.getPairAdjustment(r, i, h));
				}
			}
			return n;
		}, e.U.P = {}, e.U.P.moveTo = function(r, e, t) {
			r.cmds.push("M"), r.crds.push(e, t);
		}, e.U.P.lineTo = function(r, e, t) {
			r.cmds.push("L"), r.crds.push(e, t);
		}, e.U.P.curveTo = function(r, e, t, a, n, o, s) {
			r.cmds.push("C"), r.crds.push(e, t, a, n, o, s);
		}, e.U.P.qcurveTo = function(r, e, t, a, n) {
			r.cmds.push("Q"), r.crds.push(e, t, a, n);
		}, e.U.P.closePath = function(r) {
			r.cmds.push("Z");
		}, e.U._drawCFF = function(r, t, a, n, o) {
			for (var s = t.stack, i = t.nStems, h = t.haveWidth, d = t.width, f = t.open, u = 0, l = t.x, v = t.y, c = 0, p = 0, U = 0, g = 0, S = 0, m = 0, b = 0, y = 0, F = 0, C = 0, _ = {
				val: 0,
				size: 0
			}; u < r.length;) {
				e.CFF.getCharString(r, u, _);
				var P = _.val;
				if (u += _.size, "o1" == P || "o18" == P) s.length % 2 != 0 && !h && (d = s.shift() + n.nominalWidthX), i += s.length >> 1, s.length = 0, h = !0;
				else if ("o3" == P || "o23" == P) s.length % 2 != 0 && !h && (d = s.shift() + n.nominalWidthX), i += s.length >> 1, s.length = 0, h = !0;
				else if ("o4" == P) s.length > 1 && !h && (d = s.shift() + n.nominalWidthX, h = !0), f && e.U.P.closePath(o), v += s.pop(), e.U.P.moveTo(o, l, v), f = !0;
				else if ("o5" == P) for (; s.length > 0;) l += s.shift(), v += s.shift(), e.U.P.lineTo(o, l, v);
				else if ("o6" == P || "o7" == P) for (var x = s.length, I = "o6" == P, w = 0; w < x; w++) {
					var k = s.shift();
					I ? l += k : v += k, I = !I, e.U.P.lineTo(o, l, v);
				}
				else if ("o8" == P || "o24" == P) {
					x = s.length;
					for (var G = 0; G + 6 <= x;) c = l + s.shift(), p = v + s.shift(), U = c + s.shift(), g = p + s.shift(), l = U + s.shift(), v = g + s.shift(), e.U.P.curveTo(o, c, p, U, g, l, v), G += 6;
					"o24" == P && (l += s.shift(), v += s.shift(), e.U.P.lineTo(o, l, v));
				} else {
					if ("o11" == P) break;
					if ("o1234" == P || "o1235" == P || "o1236" == P || "o1237" == P) "o1234" == P && (p = v, U = (c = l + s.shift()) + s.shift(), C = g = p + s.shift(), m = g, y = v, l = (b = (S = (F = U + s.shift()) + s.shift()) + s.shift()) + s.shift(), e.U.P.curveTo(o, c, p, U, g, F, C), e.U.P.curveTo(o, S, m, b, y, l, v)), "o1235" == P && (c = l + s.shift(), p = v + s.shift(), U = c + s.shift(), g = p + s.shift(), F = U + s.shift(), C = g + s.shift(), S = F + s.shift(), m = C + s.shift(), b = S + s.shift(), y = m + s.shift(), l = b + s.shift(), v = y + s.shift(), s.shift(), e.U.P.curveTo(o, c, p, U, g, F, C), e.U.P.curveTo(o, S, m, b, y, l, v)), "o1236" == P && (c = l + s.shift(), p = v + s.shift(), U = c + s.shift(), C = g = p + s.shift(), m = g, b = (S = (F = U + s.shift()) + s.shift()) + s.shift(), y = m + s.shift(), l = b + s.shift(), e.U.P.curveTo(o, c, p, U, g, F, C), e.U.P.curveTo(o, S, m, b, y, l, v)), "o1237" == P && (c = l + s.shift(), p = v + s.shift(), U = c + s.shift(), g = p + s.shift(), F = U + s.shift(), C = g + s.shift(), S = F + s.shift(), m = C + s.shift(), b = S + s.shift(), y = m + s.shift(), Math.abs(b - l) > Math.abs(y - v) ? l = b + s.shift() : v = y + s.shift(), e.U.P.curveTo(o, c, p, U, g, F, C), e.U.P.curveTo(o, S, m, b, y, l, v));
					else if ("o14" == P) {
						if (s.length > 0 && !h && (d = s.shift() + a.nominalWidthX, h = !0), 4 == s.length) {
							var O = s.shift(), T = s.shift(), D = s.shift(), B = s.shift(), A = e.CFF.glyphBySE(a, D), R = e.CFF.glyphBySE(a, B);
							e.U._drawCFF(a.CharStrings[A], t, a, n, o), t.x = O, t.y = T, e.U._drawCFF(a.CharStrings[R], t, a, n, o);
						}
						f && (e.U.P.closePath(o), f = !1);
					} else if ("o19" == P || "o20" == P) s.length % 2 != 0 && !h && (d = s.shift() + n.nominalWidthX), i += s.length >> 1, s.length = 0, h = !0, u += i + 7 >> 3;
					else if ("o21" == P) s.length > 2 && !h && (d = s.shift() + n.nominalWidthX, h = !0), v += s.pop(), l += s.pop(), f && e.U.P.closePath(o), e.U.P.moveTo(o, l, v), f = !0;
					else if ("o22" == P) s.length > 1 && !h && (d = s.shift() + n.nominalWidthX, h = !0), l += s.pop(), f && e.U.P.closePath(o), e.U.P.moveTo(o, l, v), f = !0;
					else if ("o25" == P) {
						for (; s.length > 6;) l += s.shift(), v += s.shift(), e.U.P.lineTo(o, l, v);
						c = l + s.shift(), p = v + s.shift(), U = c + s.shift(), g = p + s.shift(), l = U + s.shift(), v = g + s.shift(), e.U.P.curveTo(o, c, p, U, g, l, v);
					} else if ("o26" == P) for (s.length % 2 && (l += s.shift()); s.length > 0;) c = l, p = v + s.shift(), l = U = c + s.shift(), v = (g = p + s.shift()) + s.shift(), e.U.P.curveTo(o, c, p, U, g, l, v);
					else if ("o27" == P) for (s.length % 2 && (v += s.shift()); s.length > 0;) p = v, U = (c = l + s.shift()) + s.shift(), g = p + s.shift(), l = U + s.shift(), v = g, e.U.P.curveTo(o, c, p, U, g, l, v);
					else if ("o10" == P || "o29" == P) {
						var L = "o10" == P ? n : a;
						if (0 == s.length) console.debug("error: empty stack");
						else {
							var W = s.pop(), M = L.Subrs[W + L.Bias];
							t.x = l, t.y = v, t.nStems = i, t.haveWidth = h, t.width = d, t.open = f, e.U._drawCFF(M, t, a, n, o), l = t.x, v = t.y, i = t.nStems, h = t.haveWidth, d = t.width, f = t.open;
						}
					} else if ("o30" == P || "o31" == P) {
						var V = s.length, E = (G = 0, "o31" == P);
						for (G += V - (x = -3 & V); G < x;) E ? (p = v, U = (c = l + s.shift()) + s.shift(), v = (g = p + s.shift()) + s.shift(), x - G == 5 ? (l = U + s.shift(), G++) : l = U, E = !1) : (c = l, p = v + s.shift(), U = c + s.shift(), g = p + s.shift(), l = U + s.shift(), x - G == 5 ? (v = g + s.shift(), G++) : v = g, E = !0), e.U.P.curveTo(o, c, p, U, g, l, v), G += 4;
					} else {
						if ("o" == (P + "").charAt(0)) throw console.debug("Unknown operation: " + P, r), P;
						s.push(P);
					}
				}
			}
			t.x = l, t.y = v, t.nStems = i, t.haveWidth = h, t.width = d, t.open = f;
		};
		var t = e, a = { Typr: t };
		return r.Typr = t, r.default = a, Object.defineProperty(r, "__esModule", { value: !0 }), r;
	}({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function woff2otfFactory() {
	return function(r) {
		var e = Uint8Array, n = Uint16Array, t = Uint32Array, a = new e([
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			1,
			1,
			1,
			1,
			2,
			2,
			2,
			2,
			3,
			3,
			3,
			3,
			4,
			4,
			4,
			4,
			5,
			5,
			5,
			5,
			0,
			0,
			0,
			0
		]), i = new e([
			0,
			0,
			0,
			0,
			1,
			1,
			2,
			2,
			3,
			3,
			4,
			4,
			5,
			5,
			6,
			6,
			7,
			7,
			8,
			8,
			9,
			9,
			10,
			10,
			11,
			11,
			12,
			12,
			13,
			13,
			0,
			0
		]), o = new e([
			16,
			17,
			18,
			0,
			8,
			7,
			9,
			6,
			10,
			5,
			11,
			4,
			12,
			3,
			13,
			2,
			14,
			1,
			15
		]), f = function(r, e) {
			for (var a = new n(31), i = 0; i < 31; ++i) a[i] = e += 1 << r[i - 1];
			var o = new t(a[30]);
			for (i = 1; i < 30; ++i) for (var f = a[i]; f < a[i + 1]; ++f) o[f] = f - a[i] << 5 | i;
			return [a, o];
		}, u = f(a, 2), v = u[0], s = u[1];
		v[28] = 258, s[258] = 28;
		for (var l = f(i, 0)[0], c = new n(32768), g = 0; g < 32768; ++g) {
			var h = (43690 & g) >>> 1 | (21845 & g) << 1;
			h = (61680 & (h = (52428 & h) >>> 2 | (13107 & h) << 2)) >>> 4 | (3855 & h) << 4, c[g] = ((65280 & h) >>> 8 | (255 & h) << 8) >>> 1;
		}
		var w = function(r, e, t) {
			for (var a = r.length, i = 0, o = new n(e); i < a; ++i) ++o[r[i] - 1];
			var f, u = new n(e);
			for (i = 0; i < e; ++i) u[i] = u[i - 1] + o[i - 1] << 1;
			if (t) {
				f = new n(1 << e);
				var v = 15 - e;
				for (i = 0; i < a; ++i) if (r[i]) for (var s = i << 4 | r[i], l = e - r[i], g = u[r[i] - 1]++ << l, h = g | (1 << l) - 1; g <= h; ++g) f[c[g] >>> v] = s;
			} else for (f = new n(a), i = 0; i < a; ++i) r[i] && (f[i] = c[u[r[i] - 1]++] >>> 15 - r[i]);
			return f;
		}, d = new e(288);
		for (g = 0; g < 144; ++g) d[g] = 8;
		for (g = 144; g < 256; ++g) d[g] = 9;
		for (g = 256; g < 280; ++g) d[g] = 7;
		for (g = 280; g < 288; ++g) d[g] = 8;
		var m = new e(32);
		for (g = 0; g < 32; ++g) m[g] = 5;
		var b = w(d, 9, 1), p = w(m, 5, 1), y = function(r) {
			for (var e = r[0], n = 1; n < r.length; ++n) r[n] > e && (e = r[n]);
			return e;
		}, L = function(r, e, n) {
			var t = e / 8 | 0;
			return (r[t] | r[t + 1] << 8) >> (7 & e) & n;
		}, U = function(r, e) {
			var n = e / 8 | 0;
			return (r[n] | r[n + 1] << 8 | r[n + 2] << 16) >> (7 & e);
		}, k = [
			"unexpected EOF",
			"invalid block type",
			"invalid length/literal",
			"invalid distance",
			"stream finished",
			"no stream handler",
			,
			"no callback",
			"invalid UTF-8 data",
			"extra field too long",
			"date not in range 1980-2099",
			"filename too long",
			"stream finishing",
			"invalid zip data"
		], T = function(r, e, n) {
			var t = new Error(e || k[r]);
			if (t.code = r, Error.captureStackTrace && Error.captureStackTrace(t, T), !n) throw t;
			return t;
		}, O = function(r, f, u) {
			var s = r.length;
			if (!s || u && !u.l && s < 5) return f || new e(0);
			var c = !f || u, g = !u || u.i;
			u || (u = {}), f || (f = new e(3 * s));
			var h, d = function(r) {
				var n = f.length;
				if (r > n) {
					var t = new e(Math.max(2 * n, r));
					t.set(f), f = t;
				}
			}, m = u.f || 0, k = u.p || 0, O = u.b || 0, A = u.l, x = u.d, E = u.m, D = u.n, M = 8 * s;
			do {
				if (!A) {
					u.f = m = L(r, k, 1);
					var S = L(r, k + 1, 3);
					if (k += 3, !S) {
						var V = r[(I = ((h = k) / 8 | 0) + (7 & h && 1) + 4) - 4] | r[I - 3] << 8, _ = I + V;
						if (_ > s) {
							g && T(0);
							break;
						}
						c && d(O + V), f.set(r.subarray(I, _), O), u.b = O += V, u.p = k = 8 * _;
						continue;
					}
					if (1 == S) A = b, x = p, E = 9, D = 5;
					else if (2 == S) {
						var j = L(r, k, 31) + 257, z = L(r, k + 10, 15) + 4, C = j + L(r, k + 5, 31) + 1;
						k += 14;
						for (var F = new e(C), P = new e(19), q = 0; q < z; ++q) P[o[q]] = L(r, k + 3 * q, 7);
						k += 3 * z;
						var B = y(P), G = (1 << B) - 1, H = w(P, B, 1);
						for (q = 0; q < C;) {
							var I, J = H[L(r, k, G)];
							if (k += 15 & J, (I = J >>> 4) < 16) F[q++] = I;
							else {
								var K = 0, N = 0;
								for (16 == I ? (N = 3 + L(r, k, 3), k += 2, K = F[q - 1]) : 17 == I ? (N = 3 + L(r, k, 7), k += 3) : 18 == I && (N = 11 + L(r, k, 127), k += 7); N--;) F[q++] = K;
							}
						}
						var Q = F.subarray(0, j), R = F.subarray(j);
						E = y(Q), D = y(R), A = w(Q, E, 1), x = w(R, D, 1);
					} else T(1);
					if (k > M) {
						g && T(0);
						break;
					}
				}
				c && d(O + 131072);
				for (var W = (1 << E) - 1, X = (1 << D) - 1, Y = k;; Y = k) {
					var Z = (K = A[U(r, k) & W]) >>> 4;
					if ((k += 15 & K) > M) {
						g && T(0);
						break;
					}
					if (K || T(2), Z < 256) f[O++] = Z;
					else {
						if (256 == Z) {
							Y = k, A = null;
							break;
						}
						var $ = Z - 254;
						if (Z > 264) {
							var rr = a[q = Z - 257];
							$ = L(r, k, (1 << rr) - 1) + v[q], k += rr;
						}
						var er = x[U(r, k) & X], nr = er >>> 4;
						er || T(3), k += 15 & er;
						R = l[nr];
						if (nr > 3) {
							rr = i[nr];
							R += U(r, k) & (1 << rr) - 1, k += rr;
						}
						if (k > M) {
							g && T(0);
							break;
						}
						c && d(O + 131072);
						for (var tr = O + $; O < tr; O += 4) f[O] = f[O - R], f[O + 1] = f[O + 1 - R], f[O + 2] = f[O + 2 - R], f[O + 3] = f[O + 3 - R];
						O = tr;
					}
				}
				u.l = A, u.p = Y, u.b = O, A && (m = 1, u.m = E, u.d = x, u.n = D);
			} while (!m);
			return O == f.length ? f : function(r, a, i) {
				(null == a || a < 0) && (a = 0), (null == i || i > r.length) && (i = r.length);
				var o = new (r instanceof n ? n : r instanceof t ? t : e)(i - a);
				return o.set(r.subarray(a, i)), o;
			}(f, 0, O);
		}, A = new e(0);
		var x = "undefined" != typeof TextDecoder && new TextDecoder();
		try {
			x.decode(A, { stream: !0 });
		} catch (r) {}
		return r.convert_streams = function(r) {
			var e = new DataView(r), n = 0;
			function t() {
				var r = e.getUint16(n);
				return n += 2, r;
			}
			function a() {
				var r = e.getUint32(n);
				return n += 4, r;
			}
			function i(r) {
				m.setUint16(b, r), b += 2;
			}
			function o(r) {
				m.setUint32(b, r), b += 4;
			}
			for (var f = {
				signature: a(),
				flavor: a(),
				length: a(),
				numTables: t(),
				reserved: t(),
				totalSfntSize: a(),
				majorVersion: t(),
				minorVersion: t(),
				metaOffset: a(),
				metaLength: a(),
				metaOrigLength: a(),
				privOffset: a(),
				privLength: a()
			}, u = 0; Math.pow(2, u) <= f.numTables;) u++;
			u--;
			for (var v = 16 * Math.pow(2, u), s = 16 * f.numTables - v, l = 12, c = [], g = 0; g < f.numTables; g++) c.push({
				tag: a(),
				offset: a(),
				compLength: a(),
				origLength: a(),
				origChecksum: a()
			}), l += 16;
			var h, w = new Uint8Array(12 + 16 * c.length + c.reduce((function(r, e) {
				return r + e.origLength + 4;
			}), 0)), d = w.buffer, m = new DataView(d), b = 0;
			return o(f.flavor), i(f.numTables), i(v), i(u), i(s), c.forEach((function(r) {
				o(r.tag), o(r.origChecksum), o(l), o(r.origLength), r.outOffset = l, (l += r.origLength) % 4 != 0 && (l += 4 - l % 4);
			})), c.forEach((function(e) {
				var n, t = r.slice(e.offset, e.offset + e.compLength);
				if (e.compLength != e.origLength) {
					var a = new Uint8Array(e.origLength);
					n = new Uint8Array(t, 2), O(n, a);
				} else a = new Uint8Array(t);
				w.set(a, e.outOffset);
				var i = 0;
				(l = e.outOffset + e.origLength) % 4 != 0 && (i = 4 - l % 4), w.set(new Uint8Array(i).buffer, e.outOffset + e.origLength), h = l + i;
			})), d.slice(0, h);
		}, Object.defineProperty(r, "__esModule", { value: !0 }), r;
	}({}).convert_streams;
}
/**
* A factory wrapper parsing a font file using Typr.
* Also adds support for WOFF files (not WOFF2).
*/
/**
* @typedef ParsedFont
* @property {number} ascender
* @property {number} descender
* @property {number} xHeight
* @property {(number) => boolean} supportsCodePoint
* @property {(text:string, fontSize:number, letterSpacing:number, callback) => number} forEachGlyph
* @property {number} lineGap
* @property {number} capHeight
* @property {number} unitsPerEm
*/
/**
* @typedef {(buffer: ArrayBuffer) => ParsedFont} FontParser
*/
/**
* @returns {FontParser}
*/
function parserFactory(Typr, woff2otf) {
	const cmdArgLengths = {
		M: 2,
		L: 2,
		Q: 4,
		C: 6,
		Z: 0
	};
	const joiningTypeRawData = {
		"C": "18g,ca,368,1kz",
		"D": "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",
		"R": "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",
		"L": "x9u,jff,a,fd,jv",
		"T": "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"
	};
	const JT_LEFT = 1, JT_RIGHT = 2, JT_DUAL = 4, JT_TRANSPARENT = 8, JT_JOIN_CAUSING = 16, JT_NON_JOINING = 32;
	let joiningTypeMap;
	function getCharJoiningType(ch) {
		if (!joiningTypeMap) {
			const m = {
				R: JT_RIGHT,
				L: JT_LEFT,
				D: JT_DUAL,
				C: JT_JOIN_CAUSING,
				U: JT_NON_JOINING,
				T: JT_TRANSPARENT
			};
			joiningTypeMap = /* @__PURE__ */ new Map();
			for (let type in joiningTypeRawData) {
				let lastCode = 0;
				joiningTypeRawData[type].split(",").forEach((range) => {
					let [skip, step] = range.split("+");
					skip = parseInt(skip, 36);
					step = step ? parseInt(step, 36) : 0;
					joiningTypeMap.set(lastCode += skip, m[type]);
					for (let i = step; i--;) joiningTypeMap.set(++lastCode, m[type]);
				});
			}
		}
		return joiningTypeMap.get(ch) || JT_NON_JOINING;
	}
	const ISOL = 1, INIT = 2, FINA = 3, MEDI = 4;
	const formsToFeatures = [
		null,
		"isol",
		"init",
		"fina",
		"medi"
	];
	function detectJoiningForms(str) {
		const joiningForms = new Uint8Array(str.length);
		let prevJoiningType = JT_NON_JOINING;
		let prevForm = ISOL;
		let prevIndex = -1;
		for (let i = 0; i < str.length; i++) {
			const code = str.codePointAt(i);
			let joiningType = getCharJoiningType(code) | 0;
			let form = ISOL;
			if (joiningType & JT_TRANSPARENT) continue;
			if (prevJoiningType & 21) {
				if (joiningType & 22) {
					form = FINA;
					if (prevForm === ISOL || prevForm === FINA) joiningForms[prevIndex]++;
				} else if (joiningType & 33) {
					if (prevForm === INIT || prevForm === MEDI) joiningForms[prevIndex]--;
				}
			} else if (prevJoiningType & 34) {
				if (prevForm === INIT || prevForm === MEDI) joiningForms[prevIndex]--;
			}
			prevForm = joiningForms[i] = form;
			prevJoiningType = joiningType;
			prevIndex = i;
			if (code > 65535) i++;
		}
		return joiningForms;
	}
	function stringToGlyphs(font, str) {
		const glyphIds = [];
		for (let i = 0; i < str.length; i++) {
			const cc = str.codePointAt(i);
			if (cc > 65535) i++;
			glyphIds.push(Typr.U.codeToGlyph(font, cc));
		}
		const gsub = font["GSUB"];
		if (gsub) {
			const { lookupList, featureList } = gsub;
			let joiningForms;
			const supportedFeatures = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/;
			const usedLookups = [];
			featureList.forEach((feature) => {
				if (supportedFeatures.test(feature.tag)) for (let ti = 0; ti < feature.tab.length; ti++) {
					if (usedLookups[feature.tab[ti]]) continue;
					usedLookups[feature.tab[ti]] = true;
					const tab = lookupList[feature.tab[ti]];
					const isJoiningFeature = /^(isol|init|fina|medi)$/.test(feature.tag);
					if (isJoiningFeature && !joiningForms) joiningForms = detectJoiningForms(str);
					for (let ci = 0; ci < glyphIds.length; ci++) if (!joiningForms || !isJoiningFeature || formsToFeatures[joiningForms[ci]] === feature.tag) Typr.U._applySubs(glyphIds, ci, tab, lookupList);
				}
			});
		}
		return glyphIds;
	}
	function calcGlyphPositions(font, glyphIds) {
		const positions = new Int16Array(glyphIds.length * 3);
		let glyphIndex = 0;
		for (; glyphIndex < glyphIds.length; glyphIndex++) {
			const glyphId = glyphIds[glyphIndex];
			if (glyphId === -1) continue;
			positions[glyphIndex * 3 + 2] = font.hmtx.aWidth[glyphId];
			const gpos = font.GPOS;
			if (gpos) {
				const llist = gpos.lookupList;
				for (let i = 0; i < llist.length; i++) {
					const lookup = llist[i];
					for (let j = 0; j < lookup.tabs.length; j++) {
						const tab = lookup.tabs[j];
						if (lookup.ltype === 1) {
							if (Typr._lctf.coverageIndex(tab.coverage, glyphId) !== -1 && tab.pos) {
								applyValueRecord(tab.pos, glyphIndex);
								break;
							}
						} else if (lookup.ltype === 2) {
							let adj = null;
							let prevGlyphIndex = getPrevGlyphIndex();
							if (prevGlyphIndex !== -1) {
								const coverageIndex = Typr._lctf.coverageIndex(tab.coverage, glyphIds[prevGlyphIndex]);
								if (coverageIndex !== -1) {
									if (tab.fmt === 1) {
										const right = tab.pairsets[coverageIndex];
										for (let k = 0; k < right.length; k++) if (right[k].gid2 === glyphId) adj = right[k];
									} else if (tab.fmt === 2) {
										const c1 = Typr.U._getGlyphClass(glyphIds[prevGlyphIndex], tab.classDef1);
										const c2 = Typr.U._getGlyphClass(glyphId, tab.classDef2);
										adj = tab.matrix[c1][c2];
									}
									if (adj) {
										if (adj.val1) applyValueRecord(adj.val1, prevGlyphIndex);
										if (adj.val2) applyValueRecord(adj.val2, glyphIndex);
										break;
									}
								}
							}
						} else if (lookup.ltype === 4) {
							const markArrIndex = Typr._lctf.coverageIndex(tab.markCoverage, glyphId);
							if (markArrIndex !== -1) {
								const baseGlyphIndex = getPrevGlyphIndex(isBaseGlyph);
								const baseArrIndex = baseGlyphIndex === -1 ? -1 : Typr._lctf.coverageIndex(tab.baseCoverage, glyphIds[baseGlyphIndex]);
								if (baseArrIndex !== -1) {
									const markRecord = tab.markArray[markArrIndex];
									const baseAnchor = tab.baseArray[baseArrIndex][markRecord.markClass];
									positions[glyphIndex * 3] = baseAnchor.x - markRecord.x + positions[baseGlyphIndex * 3] - positions[baseGlyphIndex * 3 + 2];
									positions[glyphIndex * 3 + 1] = baseAnchor.y - markRecord.y + positions[baseGlyphIndex * 3 + 1];
									break;
								}
							}
						} else if (lookup.ltype === 6) {
							const mark1ArrIndex = Typr._lctf.coverageIndex(tab.mark1Coverage, glyphId);
							if (mark1ArrIndex !== -1) {
								const prevGlyphIndex = getPrevGlyphIndex();
								if (prevGlyphIndex !== -1) {
									const prevGlyphId = glyphIds[prevGlyphIndex];
									if (getGlyphClass(font, prevGlyphId) === 3) {
										const mark2ArrIndex = Typr._lctf.coverageIndex(tab.mark2Coverage, prevGlyphId);
										if (mark2ArrIndex !== -1) {
											const mark1Record = tab.mark1Array[mark1ArrIndex];
											const mark2Anchor = tab.mark2Array[mark2ArrIndex][mark1Record.markClass];
											positions[glyphIndex * 3] = mark2Anchor.x - mark1Record.x + positions[prevGlyphIndex * 3] - positions[prevGlyphIndex * 3 + 2];
											positions[glyphIndex * 3 + 1] = mark2Anchor.y - mark1Record.y + positions[prevGlyphIndex * 3 + 1];
											break;
										}
									}
								}
							}
						}
					}
				}
			} else if (font.kern && !font.cff) {
				const prevGlyphIndex = getPrevGlyphIndex();
				if (prevGlyphIndex !== -1) {
					const ind1 = font.kern.glyph1.indexOf(glyphIds[prevGlyphIndex]);
					if (ind1 !== -1) {
						const ind2 = font.kern.rval[ind1].glyph2.indexOf(glyphId);
						if (ind2 !== -1) positions[prevGlyphIndex * 3 + 2] += font.kern.rval[ind1].vals[ind2];
					}
				}
			}
		}
		return positions;
		function getPrevGlyphIndex(filter) {
			for (let i = glyphIndex - 1; i >= 0; i--) if (glyphIds[i] !== -1 && (!filter || filter(glyphIds[i]))) return i;
			return -1;
		}
		function isBaseGlyph(glyphId) {
			return getGlyphClass(font, glyphId) === 1;
		}
		function applyValueRecord(source, gi) {
			for (let i = 0; i < 3; i++) positions[gi * 3 + i] += source[i] || 0;
		}
	}
	function getGlyphClass(font, glyphId) {
		const classDef = font.GDEF && font.GDEF.glyphClassDef;
		return classDef ? Typr.U._getGlyphClass(glyphId, classDef) : 0;
	}
	function firstNum(...args) {
		for (let i = 0; i < args.length; i++) if (typeof args[i] === "number") return args[i];
	}
	/**
	* @returns ParsedFont
	*/
	function wrapFontObj(typrFont) {
		const glyphMap = Object.create(null);
		const os2 = typrFont["OS/2"];
		const hhea = typrFont.hhea;
		const unitsPerEm = typrFont.head.unitsPerEm;
		const ascender = firstNum(os2 && os2.sTypoAscender, hhea && hhea.ascender, unitsPerEm);
		/** @type ParsedFont */
		const fontObj = {
			unitsPerEm,
			ascender,
			descender: firstNum(os2 && os2.sTypoDescender, hhea && hhea.descender, 0),
			capHeight: firstNum(os2 && os2.sCapHeight, ascender),
			xHeight: firstNum(os2 && os2.sxHeight, ascender),
			lineGap: firstNum(os2 && os2.sTypoLineGap, hhea && hhea.lineGap),
			supportsCodePoint(code) {
				return Typr.U.codeToGlyph(typrFont, code) > 0;
			},
			forEachGlyph(text, fontSize, letterSpacing, callback) {
				let penX = 0;
				const fontScale = 1 / fontObj.unitsPerEm * fontSize;
				const glyphIds = stringToGlyphs(typrFont, text);
				let charIndex = 0;
				const positions = calcGlyphPositions(typrFont, glyphIds);
				glyphIds.forEach((glyphId, i) => {
					if (glyphId !== -1) {
						let glyphObj = glyphMap[glyphId];
						if (!glyphObj) {
							const { cmds, crds } = Typr.U.glyphToPath(typrFont, glyphId);
							let path = "";
							let crdsIdx = 0;
							for (let i = 0, len = cmds.length; i < len; i++) {
								const numArgs = cmdArgLengths[cmds[i]];
								path += cmds[i];
								for (let j = 1; j <= numArgs; j++) path += (j > 1 ? "," : "") + crds[crdsIdx++];
							}
							let xMin, yMin, xMax, yMax;
							if (crds.length) {
								xMin = yMin = Infinity;
								xMax = yMax = -Infinity;
								for (let i = 0, len = crds.length; i < len; i += 2) {
									let x = crds[i];
									let y = crds[i + 1];
									if (x < xMin) xMin = x;
									if (y < yMin) yMin = y;
									if (x > xMax) xMax = x;
									if (y > yMax) yMax = y;
								}
							} else xMin = xMax = yMin = yMax = 0;
							glyphObj = glyphMap[glyphId] = {
								index: glyphId,
								advanceWidth: typrFont.hmtx.aWidth[glyphId],
								xMin,
								yMin,
								xMax,
								yMax,
								path
							};
						}
						callback.call(null, glyphObj, penX + positions[i * 3] * fontScale, positions[i * 3 + 1] * fontScale, charIndex);
						penX += positions[i * 3 + 2] * fontScale;
						if (letterSpacing) penX += letterSpacing * fontSize;
					}
					charIndex += text.codePointAt(charIndex) > 65535 ? 2 : 1;
				});
				return penX;
			}
		};
		return fontObj;
	}
	/**
	* @type FontParser
	*/
	return function parse(buffer) {
		const peek = new Uint8Array(buffer, 0, 4);
		const tag = Typr._bin.readASCII(peek, 0, 4);
		if (tag === "wOFF") buffer = woff2otf(buffer);
		else if (tag === "wOF2") throw new Error("woff2 fonts not supported");
		return wrapFontObj(Typr.parse(buffer)[0]);
	};
}
var workerModule = /*#__PURE__*/ defineWorkerModule({
	name: "Typr Font Parser",
	dependencies: [
		typrFactory,
		woff2otfFactory,
		parserFactory
	],
	init(typrFactory, woff2otfFactory, parserFactory) {
		return parserFactory(typrFactory(), woff2otfFactory());
	}
});
/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/
function unicodeFontResolverClientFactory() {
	return function(t) {
		var n = function() {
			this.buckets = /* @__PURE__ */ new Map();
		};
		n.prototype.add = function(t) {
			var n = t >> 5;
			this.buckets.set(n, (this.buckets.get(n) || 0) | 1 << (31 & t));
		}, n.prototype.has = function(t) {
			var n = this.buckets.get(t >> 5);
			return void 0 !== n && 0 != (n & 1 << (31 & t));
		}, n.prototype.serialize = function() {
			var t = [];
			return this.buckets.forEach((function(n, r) {
				t.push((+r).toString(36) + ":" + n.toString(36));
			})), t.join(",");
		}, n.prototype.deserialize = function(t) {
			var n = this;
			this.buckets.clear(), t.split(",").forEach((function(t) {
				var r = t.split(":");
				n.buckets.set(parseInt(r[0], 36), parseInt(r[1], 36));
			}));
		};
		var r = Math.pow(2, 8), e = r - 1, o = ~e;
		function a(t) {
			var n = function(t) {
				return t & o;
			}(t).toString(16), e = function(t) {
				return (t & o) + r - 1;
			}(t).toString(16);
			return "codepoint-index/plane" + (t >> 16) + "/" + n + "-" + e + ".json";
		}
		function i(t, n) {
			var r = t & e, o = n.codePointAt(r / 6 | 0);
			return 0 != ((o = (o || 48) - 48) & 1 << r % 6);
		}
		function u(t, n) {
			var r;
			(r = t, r.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(t) {
				return t.split("-").map((function(t) {
					return parseInt(t.trim(), 16);
				}));
			}))).forEach((function(t) {
				var r = t[0], e = t[1];
				void 0 === e && (e = r), n(r, e);
			}));
		}
		function c(t, n) {
			u(t, (function(t, r) {
				for (var e = t; e <= r; e++) n(e);
			}));
		}
		var s = {}, f = {}, l = /* @__PURE__ */ new WeakMap(), v = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
		function d(t) {
			var r = l.get(t);
			return r || (r = new n(), c(t.ranges, (function(t) {
				return r.add(t);
			})), l.set(t, r)), r;
		}
		var h, p = /* @__PURE__ */ new Map();
		function g(t, n, r) {
			return t[n] ? n : t[r] ? r : function(t) {
				for (var n in t) return n;
			}(t);
		}
		function w(t, n) {
			var r = n;
			if (!t.includes(r)) {
				r = 1 / 0;
				for (var e = 0; e < t.length; e++) Math.abs(t[e] - n) < Math.abs(r - n) && (r = t[e]);
			}
			return r;
		}
		function k(t) {
			return h || (h = /* @__PURE__ */ new Set(), c("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(t) {
				h.add(t);
			}))), h.has(t);
		}
		return t.CodePointSet = n, t.clearCache = function() {
			s = {}, f = {};
		}, t.getFontsForString = function(t, n) {
			void 0 === n && (n = {});
			var r, e = n.lang;
			void 0 === e && (e = /\p{Script=Hangul}/u.test(r = t) ? "ko" : /\p{Script=Hiragana}|\p{Script=Katakana}/u.test(r) ? "ja" : "en");
			var o = n.category;
			void 0 === o && (o = "sans-serif");
			var u = n.style;
			void 0 === u && (u = "normal");
			var c = n.weight;
			void 0 === c && (c = 400);
			var l = (n.dataUrl || v).replace(/\/$/g, ""), h = /* @__PURE__ */ new Map(), y = new Uint8Array(t.length), b = {}, m = {}, A = new Array(t.length), S = /* @__PURE__ */ new Map(), j = !1;
			function M(t) {
				var n = p.get(t);
				return n || (n = fetch(l + "/" + t).then((function(t) {
					if (!t.ok) throw new Error(t.statusText);
					return t.json().then((function(t) {
						if (!Array.isArray(t) || 1 !== t[0]) throw new Error("Incorrect schema version; need 1, got " + t[0]);
						return t[1];
					}));
				})).catch((function(n) {
					if (l !== v) return j || (console.error("unicode-font-resolver: Failed loading from dataUrl \"" + l + "\", trying default CDN. " + n.message), j = !0), l = v, p.delete(t), M(t);
					throw n;
				})), p.set(t, n)), n;
			}
			for (var P = function(n) {
				var r = t.codePointAt(n), e = a(r);
				A[n] = e, s[e] || S.has(e) || S.set(e, M(e).then((function(t) {
					s[e] = t;
				}))), r > 65535 && (n++, E = n);
			}, E = 0; E < t.length; E++) P(E);
			return Promise.all(S.values()).then((function() {
				S.clear();
				for (var n = function(n) {
					var o = t.codePointAt(n), a = null, u = s[A[n]], c = void 0;
					for (var l in u) {
						var v = m[l];
						if (void 0 === v && (v = m[l] = new RegExp(l).test(e || "en")), v) {
							for (var d in c = l, u[l]) if (i(o, u[l][d])) {
								a = d;
								break;
							}
							break;
						}
					}
					if (!a) {
						t: for (var h in u) if (h !== c) {
							for (var p in u[h]) if (i(o, u[h][p])) {
								a = p;
								break t;
							}
						}
					}
					a || (console.debug("No font coverage for U+" + o.toString(16)), a = "latin"), A[n] = a, f[a] || S.has(a) || S.set(a, M("font-meta/" + a + ".json").then((function(t) {
						f[a] = t;
					}))), o > 65535 && (n++, r = n);
				}, r = 0; r < t.length; r++) n(r);
				return Promise.all(S.values());
			})).then((function() {
				for (var n, r = null, e = 0; e < t.length; e++) {
					var a = t.codePointAt(e);
					if (r && (k(a) || d(r).has(a))) y[e] = y[e - 1];
					else {
						r = f[A[e]];
						var i = b[r.id];
						if (!i) {
							var s = r.typeforms, v = g(s, o, "sans-serif"), p = g(s[v], u, "normal"), m = w(null === (n = s[v]) || void 0 === n ? void 0 : n[p], c);
							i = b[r.id] = l + "/font-files/" + r.id + "/" + v + "." + p + "." + m + ".woff";
						}
						var S = h.get(i);
						S ?? (S = h.size, h.set(i, S)), y[e] = S;
					}
					a > 65535 && (e++, y[e] = y[e - 1]);
				}
				return {
					fontUrls: Array.from(h.keys()),
					chars: y
				};
			}));
		}, Object.defineProperty(t, "__esModule", { value: !0 }), t;
	}({});
}
/**
* @typedef {string | {src:string, label?:string, unicodeRange?:string, lang?:string}} UserFont
*/
/**
* @typedef {ClientOptions} FontResolverOptions
* @property {Array<UserFont>|UserFont} [fonts]
* @property {'normal'|'italic'} [style]
* @property {'normal'|'bold'|number} [style]
* @property {string} [unicodeFontsURL]
*/
/**
* @typedef {Object} FontResolverResult
* @property {Uint8Array} chars
* @property {Array<ParsedFont & {src:string}>} fonts
*/
/**
* @typedef {function} FontResolver
* @param {string} text
* @param {(FontResolverResult) => void} callback
* @param {FontResolverOptions} [options]
*/
/**
* Factory for the FontResolver function.
* @param {FontParser} fontParser
* @param {{getFontsForString: function, CodePointSet: function}} unicodeFontResolverClient
* @return {FontResolver}
*/
function createFontResolver(fontParser, unicodeFontResolverClient) {
	/**
	* @type {Record<string, ParsedFont>}
	*/
	const parsedFonts = Object.create(null);
	/**
	* @type {Record<string, Array<(ParsedFont) => void>>}
	*/
	const loadingFonts = Object.create(null);
	/**
	* Load a given font url
	*/
	function doLoadFont(url, callback) {
		const onError = (err) => {
			console.error(`Failure loading font ${url}`, err);
		};
		try {
			const request = new XMLHttpRequest();
			request.open("get", url, true);
			request.responseType = "arraybuffer";
			request.onload = function() {
				if (request.status >= 400) onError(new Error(request.statusText));
				else if (request.status > 0) try {
					const fontObj = fontParser(request.response);
					fontObj.src = url;
					callback(fontObj);
				} catch (e) {
					onError(e);
				}
			};
			request.onerror = onError;
			request.send();
		} catch (err) {
			onError(err);
		}
	}
	/**
	* Load a given font url if needed, invoking a callback when it's loaded. If already
	* loaded, the callback will be called synchronously.
	* @param {string} fontUrl
	* @param {(font: ParsedFont) => void} callback
	*/
	function loadFont(fontUrl, callback) {
		let font = parsedFonts[fontUrl];
		if (font) callback(font);
		else if (loadingFonts[fontUrl]) loadingFonts[fontUrl].push(callback);
		else {
			loadingFonts[fontUrl] = [callback];
			doLoadFont(fontUrl, (fontObj) => {
				fontObj.src = fontUrl;
				parsedFonts[fontUrl] = fontObj;
				loadingFonts[fontUrl].forEach((cb) => cb(fontObj));
				delete loadingFonts[fontUrl];
			});
		}
	}
	/**
	* For a given string of text, determine which fonts are required to fully render it and
	* ensure those fonts are loaded.
	*/
	return function(text, callback, { lang, fonts: userFonts = [], style = "normal", weight = "normal", unicodeFontsURL } = {}) {
		const charResolutions = new Uint8Array(text.length);
		const fontResolutions = [];
		if (!text.length) allDone();
		const fontIndices = /* @__PURE__ */ new Map();
		const fallbackRanges = [];
		if (style !== "italic") style = "normal";
		if (typeof weight !== "number") weight = weight === "bold" ? 700 : 400;
		if (userFonts && !Array.isArray(userFonts)) userFonts = [userFonts];
		userFonts = userFonts.slice().filter((def) => !def.lang || def.lang.test(lang)).reverse();
		if (userFonts.length) {
			const UNKNOWN = 0;
			const RESOLVED = 1;
			const NEEDS_FALLBACK = 2;
			let prevCharResult = UNKNOWN;
			(function resolveUserFonts(startIndex = 0) {
				for (let i = startIndex, iLen = text.length; i < iLen; i++) {
					const codePoint = text.codePointAt(i);
					if (prevCharResult === RESOLVED && fontResolutions[charResolutions[i - 1]].supportsCodePoint(codePoint) || i > 0 && /\s/.test(text[i])) {
						charResolutions[i] = charResolutions[i - 1];
						if (prevCharResult === NEEDS_FALLBACK) fallbackRanges[fallbackRanges.length - 1][1] = i;
					} else for (let j = charResolutions[i], jLen = userFonts.length; j <= jLen; j++) if (j === jLen) {
						const range = prevCharResult === NEEDS_FALLBACK ? fallbackRanges[fallbackRanges.length - 1] : fallbackRanges[fallbackRanges.length] = [i, i];
						range[1] = i;
						prevCharResult = NEEDS_FALLBACK;
					} else {
						charResolutions[i] = j;
						const { src, unicodeRange } = userFonts[j];
						if (!unicodeRange || isCodeInRanges(codePoint, unicodeRange)) {
							const fontObj = parsedFonts[src];
							if (!fontObj) {
								loadFont(src, () => {
									resolveUserFonts(i);
								});
								return;
							}
							if (fontObj.supportsCodePoint(codePoint)) {
								let fontIndex = fontIndices.get(fontObj);
								if (typeof fontIndex !== "number") {
									fontIndex = fontResolutions.length;
									fontResolutions.push(fontObj);
									fontIndices.set(fontObj, fontIndex);
								}
								charResolutions[i] = fontIndex;
								prevCharResult = RESOLVED;
								break;
							}
						}
					}
					if (codePoint > 65535 && i + 1 < iLen) {
						charResolutions[i + 1] = charResolutions[i];
						i++;
						if (prevCharResult === NEEDS_FALLBACK) fallbackRanges[fallbackRanges.length - 1][1] = i;
					}
				}
				resolveFallbacks();
			})();
		} else {
			fallbackRanges.push([0, text.length - 1]);
			resolveFallbacks();
		}
		function resolveFallbacks() {
			if (fallbackRanges.length) {
				const fallbackString = fallbackRanges.map((range) => text.substring(range[0], range[1] + 1)).join("\n");
				unicodeFontResolverClient.getFontsForString(fallbackString, {
					lang: lang || void 0,
					style,
					weight,
					dataUrl: unicodeFontsURL
				}).then(({ fontUrls, chars }) => {
					const fontIndexOffset = fontResolutions.length;
					let charIdx = 0;
					fallbackRanges.forEach((range) => {
						for (let i = 0, endIdx = range[1] - range[0]; i <= endIdx; i++) charResolutions[range[0] + i] = chars[charIdx++] + fontIndexOffset;
						charIdx++;
					});
					let loadedCount = 0;
					fontUrls.forEach((url, i) => {
						loadFont(url, (fontObj) => {
							fontResolutions[i + fontIndexOffset] = fontObj;
							if (++loadedCount === fontUrls.length) allDone();
						});
					});
				});
			} else allDone();
		}
		function allDone() {
			callback({
				chars: charResolutions,
				fonts: fontResolutions
			});
		}
		function isCodeInRanges(code, ranges) {
			for (let k = 0; k < ranges.length; k++) {
				const [start, end = start] = ranges[k];
				if (start <= code && code <= end) return true;
			}
			return false;
		}
	};
}
var fontResolverWorkerModule = /*#__PURE__*/ defineWorkerModule({
	name: "FontResolver",
	dependencies: [
		createFontResolver,
		workerModule,
		unicodeFontResolverClientFactory
	],
	init(createFontResolver, fontParser, unicodeFontResolverClientFactory) {
		return createFontResolver(fontParser, unicodeFontResolverClientFactory());
	}
});
/**
* @typedef {number|'left'|'center'|'right'} AnchorXValue
*/
/**
* @typedef {number|'top'|'top-baseline'|'top-cap'|'top-ex'|'middle'|'bottom-baseline'|'bottom'} AnchorYValue
*/
/**
* @typedef {object} TypesetParams
* @property {string} text
* @property {UserFont|UserFont[]} [font]
* @property {string} [lang]
* @property {number} [sdfGlyphSize=64]
* @property {number} [fontSize=1]
* @property {number|'normal'|'bold'} [fontWeight='normal']
* @property {'normal'|'italic'} [fontStyle='normal']
* @property {number} [letterSpacing=0]
* @property {'normal'|number} [lineHeight='normal']
* @property {number} [maxWidth]
* @property {'ltr'|'rtl'} [direction='ltr']
* @property {string} [textAlign='left']
* @property {number} [textIndent=0]
* @property {'normal'|'nowrap'} [whiteSpace='normal']
* @property {'normal'|'break-word'} [overflowWrap='normal']
* @property {AnchorXValue} [anchorX=0]
* @property {AnchorYValue} [anchorY=0]
* @property {boolean} [metricsOnly=false]
* @property {string} [unicodeFontsURL]
* @property {FontResolverResult} [preResolvedFonts]
* @property {boolean} [includeCaretPositions=false]
* @property {number} [chunkedBoundsSize=8192]
* @property {{[rangeStartIndex]: number}} [colorRanges]
*/
/**
* @typedef {object} TypesetResult
* @property {Uint16Array} glyphIds id for each glyph, specific to that glyph's font
* @property {Uint8Array} glyphFontIndices index into fontData for each glyph
* @property {Float32Array} glyphPositions x,y of each glyph's origin in layout
* @property {{[font]: {[glyphId]: {path: string, pathBounds: number[]}}}} glyphData data about each glyph appearing in the text
* @property {TypesetFontData[]} fontData data about each font used in the text
* @property {Float32Array} [caretPositions] startX,endX,bottomY caret positions for each char
* @property {Uint8Array} [glyphColors] color for each glyph, if color ranges supplied
*         chunkedBounds, //total rects per (n=chunkedBoundsSize) consecutive glyphs
*         fontSize, //calculated em height
*         topBaseline: anchorYOffset + lines[0].baseline, //y coordinate of the top line's baseline
*         blockBounds: [ //bounds for the whole block of text, including vertical padding for lineHeight
*           anchorXOffset,
*           anchorYOffset - totalHeight,
*           anchorXOffset + maxLineWidth,
*           anchorYOffset
*         ],
*         visibleBounds, //total bounds of visible text paths, may be larger or smaller than blockBounds
*         timings
*/
/**
* @typedef {object} TypesetFontData
* @property src
* @property unitsPerEm
* @property ascender
* @property descender
* @property lineHeight
* @property capHeight
* @property xHeight
*/
/**
* @typedef {function} TypesetterTypesetFunction - compute fonts and layout for some text.
* @param {TypesetParams} params
* @param {(TypesetResult) => void} callback - function called when typesetting is complete.
*    If the params included `preResolvedFonts`, this will be called synchronously.
*/
/**
* @typedef {function} TypesetterMeasureFunction - compute width/height for some text.
* @param {TypesetParams} params
* @param {(width:number, height:number) => void} callback - function called when measurement is complete.
*    If the params included `preResolvedFonts`, this will be called synchronously.
*/
/**
* Factory function that creates a self-contained environment for processing text typesetting requests.
*
* It is important that this function has no closure dependencies, so that it can be easily injected
* into the source for a Worker without requiring a build step or complex dependency loading. All its
* dependencies must be passed in at initialization.
*
* @param {FontResolver} resolveFonts - function to resolve a string to parsed fonts
* @param {object} bidi - the bidi.js implementation object
* @return {{typeset: TypesetterTypesetFunction, measure: TypesetterMeasureFunction}}
*/
function createTypesetter(resolveFonts, bidi) {
	const INF = Infinity;
	const DEFAULT_IGNORABLE_CHARS = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/;
	const lineBreakingWhiteSpace = `[^\\S\\u00A0]`;
	const BREAK_AFTER_CHARS = new RegExp(`${lineBreakingWhiteSpace}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
	/**
	* Load and parse all the necessary fonts to render a given string of text, then group
	* them into consecutive runs of characters sharing a font.
	*/
	function calculateFontRuns({ text, lang, fonts, style, weight, preResolvedFonts, unicodeFontsURL }, onDone) {
		const onResolved = ({ chars, fonts: parsedFonts }) => {
			let curRun, prevVal;
			const runs = [];
			for (let i = 0; i < chars.length; i++) if (chars[i] !== prevVal) {
				prevVal = chars[i];
				runs.push(curRun = {
					start: i,
					end: i,
					fontObj: parsedFonts[chars[i]]
				});
			} else curRun.end = i;
			onDone(runs);
		};
		if (preResolvedFonts) onResolved(preResolvedFonts);
		else resolveFonts(text, onResolved, {
			lang,
			fonts,
			style,
			weight,
			unicodeFontsURL
		});
	}
	/**
	* Main entry point.
	* Process a text string with given font and formatting parameters, and return all info
	* necessary to render all its glyphs.
	* @type TypesetterTypesetFunction
	*/
	function typeset({ text = "", font, lang, sdfGlyphSize = 64, fontSize = 400, fontWeight = 1, fontStyle = "normal", letterSpacing = 0, lineHeight = "normal", maxWidth = INF, direction, textAlign = "left", textIndent = 0, whiteSpace = "normal", overflowWrap = "normal", anchorX = 0, anchorY = 0, metricsOnly = false, unicodeFontsURL, preResolvedFonts = null, includeCaretPositions = false, chunkedBoundsSize = 8192, colorRanges = null }, callback) {
		const mainStart = now();
		const timings = {
			fontLoad: 0,
			typesetting: 0
		};
		if (text.indexOf("\r") > -1) {
			console.info("Typesetter: got text with \\r chars; normalizing to \\n");
			text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		}
		fontSize = +fontSize;
		letterSpacing = +letterSpacing;
		maxWidth = +maxWidth;
		lineHeight = lineHeight || "normal";
		textIndent = +textIndent;
		calculateFontRuns({
			text,
			lang,
			style: fontStyle,
			weight: fontWeight,
			fonts: typeof font === "string" ? [{ src: font }] : font,
			unicodeFontsURL,
			preResolvedFonts
		}, (runs) => {
			timings.fontLoad = now() - mainStart;
			const hasMaxWidth = isFinite(maxWidth);
			let glyphIds = null;
			let glyphFontIndices = null;
			let glyphPositions = null;
			let glyphData = null;
			let glyphColors = null;
			let caretPositions = null;
			let visibleBounds = null;
			let chunkedBounds = null;
			let maxLineWidth = 0;
			let renderableGlyphCount = 0;
			let canWrap = whiteSpace !== "nowrap";
			const metricsByFont = /* @__PURE__ */ new Map();
			const typesetStart = now();
			let lineXOffset = textIndent;
			let prevRunEndX = 0;
			let currentLine = new TextLine();
			const lines = [currentLine];
			runs.forEach((run) => {
				const { fontObj } = run;
				const { ascender, descender, unitsPerEm, lineGap, capHeight, xHeight } = fontObj;
				let fontData = metricsByFont.get(fontObj);
				if (!fontData) {
					const fontSizeMult = fontSize / unitsPerEm;
					const calcLineHeight = lineHeight === "normal" ? (ascender - descender + lineGap) * fontSizeMult : lineHeight * fontSize;
					const halfLeading = (calcLineHeight - (ascender - descender) * fontSizeMult) / 2;
					const caretHeight = Math.min(calcLineHeight, (ascender - descender) * fontSizeMult);
					const caretTop = (ascender + descender) / 2 * fontSizeMult + caretHeight / 2;
					fontData = {
						index: metricsByFont.size,
						src: fontObj.src,
						fontObj,
						fontSizeMult,
						unitsPerEm,
						ascender: ascender * fontSizeMult,
						descender: descender * fontSizeMult,
						capHeight: capHeight * fontSizeMult,
						xHeight: xHeight * fontSizeMult,
						lineHeight: calcLineHeight,
						baseline: -halfLeading - ascender * fontSizeMult,
						caretTop,
						caretBottom: caretTop - caretHeight
					};
					metricsByFont.set(fontObj, fontData);
				}
				const { fontSizeMult } = fontData;
				const runText = text.slice(run.start, run.end + 1);
				let prevGlyphX, prevGlyphObj;
				fontObj.forEachGlyph(runText, fontSize, letterSpacing, (glyphObj, glyphX, glyphY, charIndex) => {
					glyphX += prevRunEndX;
					charIndex += run.start;
					prevGlyphX = glyphX;
					prevGlyphObj = glyphObj;
					const char = text.charAt(charIndex);
					const glyphWidth = glyphObj.advanceWidth * fontSizeMult;
					const curLineCount = currentLine.count;
					let nextLine;
					if (!("isEmpty" in glyphObj)) {
						glyphObj.isWhitespace = !!char && new RegExp(lineBreakingWhiteSpace).test(char);
						glyphObj.canBreakAfter = !!char && BREAK_AFTER_CHARS.test(char);
						glyphObj.isEmpty = glyphObj.xMin === glyphObj.xMax || glyphObj.yMin === glyphObj.yMax || DEFAULT_IGNORABLE_CHARS.test(char);
					}
					if (!glyphObj.isWhitespace && !glyphObj.isEmpty) renderableGlyphCount++;
					if (canWrap && hasMaxWidth && !glyphObj.isWhitespace && glyphX + glyphWidth + lineXOffset > maxWidth && curLineCount) {
						if (currentLine.glyphAt(curLineCount - 1).glyphObj.canBreakAfter) {
							nextLine = new TextLine();
							lineXOffset = -glyphX;
						} else for (let i = curLineCount; i--;) if (i === 0 && overflowWrap === "break-word") {
							nextLine = new TextLine();
							lineXOffset = -glyphX;
							break;
						} else if (currentLine.glyphAt(i).glyphObj.canBreakAfter) {
							nextLine = currentLine.splitAt(i + 1);
							const adjustX = nextLine.glyphAt(0).x;
							lineXOffset -= adjustX;
							for (let j = nextLine.count; j--;) nextLine.glyphAt(j).x -= adjustX;
							break;
						}
						if (nextLine) {
							currentLine.isSoftWrapped = true;
							currentLine = nextLine;
							lines.push(currentLine);
							maxLineWidth = maxWidth;
						}
					}
					let fly = currentLine.glyphAt(currentLine.count);
					fly.glyphObj = glyphObj;
					fly.x = glyphX + lineXOffset;
					fly.y = glyphY;
					fly.width = glyphWidth;
					fly.charIndex = charIndex;
					fly.fontData = fontData;
					if (char === "\n") {
						currentLine = new TextLine();
						lines.push(currentLine);
						lineXOffset = -(glyphX + glyphWidth + letterSpacing * fontSize) + textIndent;
					}
				});
				prevRunEndX = prevGlyphX + prevGlyphObj.advanceWidth * fontSizeMult + letterSpacing * fontSize;
			});
			let totalHeight = 0;
			lines.forEach((line) => {
				let isTrailingWhitespace = true;
				for (let i = line.count; i--;) {
					const glyphInfo = line.glyphAt(i);
					if (isTrailingWhitespace && !glyphInfo.glyphObj.isWhitespace) {
						line.width = glyphInfo.x + glyphInfo.width;
						if (line.width > maxLineWidth) maxLineWidth = line.width;
						isTrailingWhitespace = false;
					}
					let { lineHeight, capHeight, xHeight, baseline } = glyphInfo.fontData;
					if (lineHeight > line.lineHeight) line.lineHeight = lineHeight;
					const baselineDiff = baseline - line.baseline;
					if (baselineDiff < 0) {
						line.baseline += baselineDiff;
						line.cap += baselineDiff;
						line.ex += baselineDiff;
					}
					line.cap = Math.max(line.cap, line.baseline + capHeight);
					line.ex = Math.max(line.ex, line.baseline + xHeight);
				}
				line.baseline -= totalHeight;
				line.cap -= totalHeight;
				line.ex -= totalHeight;
				totalHeight += line.lineHeight;
			});
			let anchorXOffset = 0;
			let anchorYOffset = 0;
			if (anchorX) {
				if (typeof anchorX === "number") anchorXOffset = -anchorX;
				else if (typeof anchorX === "string") anchorXOffset = -maxLineWidth * (anchorX === "left" ? 0 : anchorX === "center" ? .5 : anchorX === "right" ? 1 : parsePercent(anchorX));
			}
			if (anchorY) {
				if (typeof anchorY === "number") anchorYOffset = -anchorY;
				else if (typeof anchorY === "string") anchorYOffset = anchorY === "top" ? 0 : anchorY === "top-baseline" ? -lines[0].baseline : anchorY === "top-cap" ? -lines[0].cap : anchorY === "top-ex" ? -lines[0].ex : anchorY === "middle" ? totalHeight / 2 : anchorY === "bottom" ? totalHeight : anchorY === "bottom-baseline" ? -lines[lines.length - 1].baseline : parsePercent(anchorY) * totalHeight;
			}
			if (!metricsOnly) {
				const bidiLevelsResult = bidi.getEmbeddingLevels(text, direction);
				glyphIds = new Uint16Array(renderableGlyphCount);
				glyphFontIndices = new Uint8Array(renderableGlyphCount);
				glyphPositions = new Float32Array(renderableGlyphCount * 2);
				glyphData = {};
				visibleBounds = [
					INF,
					INF,
					-Infinity,
					-Infinity
				];
				chunkedBounds = [];
				if (includeCaretPositions) caretPositions = new Float32Array(text.length * 4);
				if (colorRanges) glyphColors = new Uint8Array(renderableGlyphCount * 3);
				let renderableGlyphIndex = 0;
				let prevCharIndex = -1;
				let colorCharIndex = -1;
				let chunk;
				let currentColor;
				lines.forEach((line, lineIndex) => {
					let { count: lineGlyphCount, width: lineWidth } = line;
					if (lineGlyphCount > 0) {
						let trailingWhitespaceCount = 0;
						for (let i = lineGlyphCount; i-- && line.glyphAt(i).glyphObj.isWhitespace;) trailingWhitespaceCount++;
						let lineXOffset = 0;
						let justifyAdjust = 0;
						if (textAlign === "center") lineXOffset = (maxLineWidth - lineWidth) / 2;
						else if (textAlign === "right") lineXOffset = maxLineWidth - lineWidth;
						else if (textAlign === "justify" && line.isSoftWrapped) {
							let whitespaceCount = 0;
							for (let i = lineGlyphCount - trailingWhitespaceCount; i--;) if (line.glyphAt(i).glyphObj.isWhitespace) whitespaceCount++;
							justifyAdjust = (maxLineWidth - lineWidth) / whitespaceCount;
						}
						if (justifyAdjust || lineXOffset) {
							let justifyOffset = 0;
							for (let i = 0; i < lineGlyphCount; i++) {
								let glyphInfo = line.glyphAt(i);
								const glyphObj = glyphInfo.glyphObj;
								glyphInfo.x += lineXOffset + justifyOffset;
								if (justifyAdjust !== 0 && glyphObj.isWhitespace && i < lineGlyphCount - trailingWhitespaceCount) {
									justifyOffset += justifyAdjust;
									glyphInfo.width += justifyAdjust;
								}
							}
						}
						const flips = bidi.getReorderSegments(text, bidiLevelsResult, line.glyphAt(0).charIndex, line.glyphAt(line.count - 1).charIndex);
						for (let fi = 0; fi < flips.length; fi++) {
							const [start, end] = flips[fi];
							let left = Infinity, right = -Infinity;
							for (let i = 0; i < lineGlyphCount; i++) if (line.glyphAt(i).charIndex >= start) {
								let startInLine = i, endInLine = i;
								for (; endInLine < lineGlyphCount; endInLine++) {
									let info = line.glyphAt(endInLine);
									if (info.charIndex > end) break;
									if (endInLine < lineGlyphCount - trailingWhitespaceCount) {
										left = Math.min(left, info.x);
										right = Math.max(right, info.x + info.width);
									}
								}
								for (let j = startInLine; j < endInLine; j++) {
									const glyphInfo = line.glyphAt(j);
									glyphInfo.x = right - (glyphInfo.x + glyphInfo.width - left);
								}
								break;
							}
						}
						let glyphObj;
						const setGlyphObj = (g) => glyphObj = g;
						for (let i = 0; i < lineGlyphCount; i++) {
							const glyphInfo = line.glyphAt(i);
							glyphObj = glyphInfo.glyphObj;
							const glyphId = glyphObj.index;
							const rtl = bidiLevelsResult.levels[glyphInfo.charIndex] & 1;
							if (rtl) {
								const mirrored = bidi.getMirroredCharacter(text[glyphInfo.charIndex]);
								if (mirrored) glyphInfo.fontData.fontObj.forEachGlyph(mirrored, 0, 0, setGlyphObj);
							}
							if (includeCaretPositions) {
								const { charIndex, fontData } = glyphInfo;
								const caretLeft = glyphInfo.x + anchorXOffset;
								const caretRight = glyphInfo.x + glyphInfo.width + anchorXOffset;
								caretPositions[charIndex * 4] = rtl ? caretRight : caretLeft;
								caretPositions[charIndex * 4 + 1] = rtl ? caretLeft : caretRight;
								caretPositions[charIndex * 4 + 2] = line.baseline + fontData.caretBottom + anchorYOffset;
								caretPositions[charIndex * 4 + 3] = line.baseline + fontData.caretTop + anchorYOffset;
								const ligCount = charIndex - prevCharIndex;
								if (ligCount > 1) fillLigatureCaretPositions(caretPositions, prevCharIndex, ligCount);
								prevCharIndex = charIndex;
							}
							if (colorRanges) {
								const { charIndex } = glyphInfo;
								while (charIndex > colorCharIndex) {
									colorCharIndex++;
									if (colorRanges.hasOwnProperty(colorCharIndex)) currentColor = colorRanges[colorCharIndex];
								}
							}
							if (!glyphObj.isWhitespace && !glyphObj.isEmpty) {
								const idx = renderableGlyphIndex++;
								const { fontSizeMult, src: fontSrc, index: fontIndex } = glyphInfo.fontData;
								const fontGlyphData = glyphData[fontSrc] || (glyphData[fontSrc] = {});
								if (!fontGlyphData[glyphId]) fontGlyphData[glyphId] = {
									path: glyphObj.path,
									pathBounds: [
										glyphObj.xMin,
										glyphObj.yMin,
										glyphObj.xMax,
										glyphObj.yMax
									]
								};
								const glyphX = glyphInfo.x + anchorXOffset;
								const glyphY = glyphInfo.y + line.baseline + anchorYOffset;
								glyphPositions[idx * 2] = glyphX;
								glyphPositions[idx * 2 + 1] = glyphY;
								const visX0 = glyphX + glyphObj.xMin * fontSizeMult;
								const visY0 = glyphY + glyphObj.yMin * fontSizeMult;
								const visX1 = glyphX + glyphObj.xMax * fontSizeMult;
								const visY1 = glyphY + glyphObj.yMax * fontSizeMult;
								if (visX0 < visibleBounds[0]) visibleBounds[0] = visX0;
								if (visY0 < visibleBounds[1]) visibleBounds[1] = visY0;
								if (visX1 > visibleBounds[2]) visibleBounds[2] = visX1;
								if (visY1 > visibleBounds[3]) visibleBounds[3] = visY1;
								if (idx % chunkedBoundsSize === 0) {
									chunk = {
										start: idx,
										end: idx,
										rect: [
											INF,
											INF,
											-Infinity,
											-Infinity
										]
									};
									chunkedBounds.push(chunk);
								}
								chunk.end++;
								const chunkRect = chunk.rect;
								if (visX0 < chunkRect[0]) chunkRect[0] = visX0;
								if (visY0 < chunkRect[1]) chunkRect[1] = visY0;
								if (visX1 > chunkRect[2]) chunkRect[2] = visX1;
								if (visY1 > chunkRect[3]) chunkRect[3] = visY1;
								glyphIds[idx] = glyphId;
								glyphFontIndices[idx] = fontIndex;
								if (colorRanges) {
									const start = idx * 3;
									glyphColors[start] = currentColor >> 16 & 255;
									glyphColors[start + 1] = currentColor >> 8 & 255;
									glyphColors[start + 2] = currentColor & 255;
								}
							}
						}
					}
				});
				if (caretPositions) {
					const ligCount = text.length - prevCharIndex;
					if (ligCount > 1) fillLigatureCaretPositions(caretPositions, prevCharIndex, ligCount);
				}
			}
			const fontData = [];
			metricsByFont.forEach(({ index, src, unitsPerEm, ascender, descender, lineHeight, capHeight, xHeight }) => {
				fontData[index] = {
					src,
					unitsPerEm,
					ascender,
					descender,
					lineHeight,
					capHeight,
					xHeight
				};
			});
			timings.typesetting = now() - typesetStart;
			callback({
				glyphIds,
				glyphFontIndices,
				glyphPositions,
				glyphData,
				fontData,
				caretPositions,
				glyphColors,
				chunkedBounds,
				fontSize,
				topBaseline: anchorYOffset + lines[0].baseline,
				blockBounds: [
					anchorXOffset,
					anchorYOffset - totalHeight,
					anchorXOffset + maxLineWidth,
					anchorYOffset
				],
				visibleBounds,
				timings
			});
		});
	}
	/**
	* For a given text string and font parameters, determine the resulting block dimensions
	* after wrapping for the given maxWidth.
	* @param args
	* @param callback
	*/
	function measure(args, callback) {
		typeset({
			...args,
			metricsOnly: true
		}, (result) => {
			const [x0, y0, x1, y1] = result.blockBounds;
			callback({
				width: x1 - x0,
				height: y1 - y0
			});
		});
	}
	function parsePercent(str) {
		let match = str.match(/^([\d.]+)%$/);
		let pct = match ? parseFloat(match[1]) : NaN;
		return isNaN(pct) ? 0 : pct / 100;
	}
	function fillLigatureCaretPositions(caretPositions, ligStartIndex, ligCount) {
		const ligStartX = caretPositions[ligStartIndex * 4];
		const ligEndX = caretPositions[ligStartIndex * 4 + 1];
		const ligBottom = caretPositions[ligStartIndex * 4 + 2];
		const ligTop = caretPositions[ligStartIndex * 4 + 3];
		const guessedAdvanceX = (ligEndX - ligStartX) / ligCount;
		for (let i = 0; i < ligCount; i++) {
			const startIndex = (ligStartIndex + i) * 4;
			caretPositions[startIndex] = ligStartX + guessedAdvanceX * i;
			caretPositions[startIndex + 1] = ligStartX + guessedAdvanceX * (i + 1);
			caretPositions[startIndex + 2] = ligBottom;
			caretPositions[startIndex + 3] = ligTop;
		}
	}
	function now() {
		return (self.performance || Date).now();
	}
	function TextLine() {
		this.data = [];
	}
	const textLineProps = [
		"glyphObj",
		"x",
		"y",
		"width",
		"charIndex",
		"fontData"
	];
	TextLine.prototype = {
		width: 0,
		lineHeight: 0,
		baseline: 0,
		cap: 0,
		ex: 0,
		isSoftWrapped: false,
		get count() {
			return Math.ceil(this.data.length / textLineProps.length);
		},
		glyphAt(i) {
			let fly = TextLine.flyweight;
			fly.data = this.data;
			fly.index = i;
			return fly;
		},
		splitAt(i) {
			let newLine = new TextLine();
			newLine.data = this.data.splice(i * textLineProps.length);
			return newLine;
		}
	};
	TextLine.flyweight = textLineProps.reduce((obj, prop, i, all) => {
		Object.defineProperty(obj, prop, {
			get() {
				return this.data[this.index * textLineProps.length + i];
			},
			set(val) {
				this.data[this.index * textLineProps.length + i] = val;
			}
		});
		return obj;
	}, {
		data: null,
		index: 0
	});
	return {
		typeset,
		measure
	};
}
var now = () => (self.performance || Date).now();
var mainThreadGenerator = /*#__PURE__*/ SDFGenerator();
var warned;
/**
* Generate an SDF texture image for a single glyph path, placing the result into a webgl canvas at a
* given location and channel. Utilizes the webgl-sdf-generator external package for GPU-accelerated SDF
* generation when supported.
*/
function generateSDF(width, height, path, viewBox, distance, exponent, canvas, x, y, channel, useWebGL = true) {
	if (!useWebGL) return generateSDF_JS_Worker(width, height, path, viewBox, distance, exponent, canvas, x, y, channel);
	return generateSDF_GL(width, height, path, viewBox, distance, exponent, canvas, x, y, channel).then(null, (err) => {
		if (!warned) {
			console.warn(`WebGL SDF generation failed, falling back to JS`, err);
			warned = true;
		}
		return generateSDF_JS_Worker(width, height, path, viewBox, distance, exponent, canvas, x, y, channel);
	});
}
var queue = [];
var chunkTimeBudget = 5;
var timer = 0;
function nextChunk() {
	const start = now();
	while (queue.length && now() - start < chunkTimeBudget) queue.shift()();
	timer = queue.length ? setTimeout(nextChunk, 0) : 0;
}
/**
* WebGL-based implementation executed on the main thread. Requests are executed in time-bounded
* macrotask chunks to allow render frames to execute in between.
*/
var generateSDF_GL = (...args) => {
	return new Promise((resolve, reject) => {
		queue.push(() => {
			const start = now();
			try {
				mainThreadGenerator.webgl.generateIntoCanvas(...args);
				resolve({ timing: now() - start });
			} catch (err) {
				reject(err);
			}
		});
		if (!timer) timer = setTimeout(nextChunk, 0);
	});
};
var threadCount = 4;
var idleTimeout = 2e3;
var threads = {};
var callNum = 0;
/**
* Fallback JS-based implementation, fanned out to a number of worker threads for parallelism
*/
function generateSDF_JS_Worker(width, height, path, viewBox, distance, exponent, canvas, x, y, channel) {
	const workerId = "TroikaTextSDFGenerator_JS_" + callNum++ % threadCount;
	let thread = threads[workerId];
	if (!thread) thread = threads[workerId] = {
		workerModule: defineWorkerModule({
			name: workerId,
			workerId,
			dependencies: [SDFGenerator, now],
			init(_createSDFGenerator, now) {
				const generate = _createSDFGenerator().javascript.generate;
				return function(...args) {
					const start = now();
					return {
						textureData: generate(...args),
						timing: now() - start
					};
				};
			},
			getTransferables(result) {
				return [result.textureData.buffer];
			}
		}),
		requests: 0,
		idleTimer: null
	};
	thread.requests++;
	clearTimeout(thread.idleTimer);
	return thread.workerModule(width, height, path, viewBox, distance, exponent).then(({ textureData, timing }) => {
		const start = now();
		const imageData = new Uint8Array(textureData.length * 4);
		for (let i = 0; i < textureData.length; i++) imageData[i * 4 + channel] = textureData[i];
		mainThreadGenerator.webglUtils.renderImageData(canvas, imageData, x, y, width, height, 1 << 3 - channel);
		timing += now() - start;
		if (--thread.requests === 0) thread.idleTimer = setTimeout(() => {
			terminateWorker(workerId);
		}, idleTimeout);
		return { timing };
	});
}
function warmUpSDFCanvas(canvas) {
	if (!canvas._warm) {
		mainThreadGenerator.webgl.isSupported(canvas);
		canvas._warm = true;
	}
}
var resizeWebGLCanvasWithoutClearing = mainThreadGenerator.webglUtils.resizeWebGLCanvasWithoutClearing;
var CONFIG = {
	defaultFontURL: null,
	unicodeFontsURL: null,
	sdfGlyphSize: 64,
	sdfMargin: 1 / 16,
	sdfExponent: 9,
	textureWidth: 2048,
	useWorker: true
};
var tempColor = /*#__PURE__*/ new Color();
function now$1() {
	return (self.performance || Date).now();
}
/**
* Repository for all font SDF atlas textures and their glyph mappings. There is a separate atlas for
* each sdfGlyphSize. Each atlas has a single Texture that holds all glyphs for all fonts.
*
*   {
*     [sdfGlyphSize]: {
*       glyphCount: number,
*       sdfGlyphSize: number,
*       sdfTexture: Texture,
*       sdfCanvas: HTMLCanvasElement,
*       contextLost: boolean,
*       glyphsByFont: Map<fontURL, Map<glyphID, {path, atlasIndex, sdfViewBox}>>
*     }
*   }
*/
var atlases = Object.create(null);
/**
* @typedef {object} TroikaTextRenderInfo - Format of the result from `getTextRenderInfo`.
* @property {TypesetParams} parameters - The normalized input arguments to the render call.
* @property {Texture} sdfTexture - The SDF atlas texture.
* @property {number} sdfGlyphSize - The size of each glyph's SDF; see `configureTextBuilder`.
* @property {number} sdfExponent - The exponent used in encoding the SDF's values; see `configureTextBuilder`.
* @property {Float32Array} glyphBounds - List of [minX, minY, maxX, maxY] quad bounds for each glyph.
* @property {Float32Array} glyphAtlasIndices - List holding each glyph's index in the SDF atlas.
* @property {Uint8Array} [glyphColors] - List holding each glyph's [r, g, b] color, if `colorRanges` was supplied.
* @property {Float32Array} [caretPositions] - A list of caret positions for all characters in the string; each is
*           four elements: the starting X, the ending X, the bottom Y, and the top Y for the caret.
* @property {number} [caretHeight] - An appropriate height for all selection carets.
* @property {number} ascender - The font's ascender metric.
* @property {number} descender - The font's descender metric.
* @property {number} capHeight - The font's cap height metric, based on the height of Latin capital letters.
* @property {number} xHeight - The font's x height metric, based on the height of Latin lowercase letters.
* @property {number} lineHeight - The final computed lineHeight measurement.
* @property {number} topBaseline - The y position of the top line's baseline.
* @property {Array<number>} blockBounds - The total [minX, minY, maxX, maxY] rect of the whole text block;
*           this can include extra vertical space beyond the visible glyphs due to lineHeight, and is
*           equivalent to the dimensions of a block-level text element in CSS.
* @property {Array<number>} visibleBounds - The total [minX, minY, maxX, maxY] rect of the whole text block;
*           unlike `blockBounds` this is tightly wrapped to the visible glyph paths.
* @property {Array<object>} chunkedBounds - List of bounding rects for each consecutive set of N glyphs,
*           in the format `{start:N, end:N, rect:[minX, minY, maxX, maxY]}`.
* @property {object} timings - Timing info for various parts of the rendering logic including SDF
*           generation, typesetting, etc.
* @frozen
*/
/**
* @callback getTextRenderInfo~callback
* @param {TroikaTextRenderInfo} textRenderInfo
*/
/**
* Main entry point for requesting the data needed to render a text string with given font parameters.
* This is an asynchronous call, performing most of the logic in a web worker thread.
* @param {TypesetParams} args
* @param {getTextRenderInfo~callback} callback
*/
function getTextRenderInfo(args, callback) {
	args = assign({}, args);
	const totalStart = now$1();
	const { defaultFontURL } = CONFIG;
	const fonts = [];
	if (defaultFontURL) fonts.push({
		label: "default",
		src: toAbsoluteURL(defaultFontURL)
	});
	if (args.font) fonts.push({
		label: "user",
		src: toAbsoluteURL(args.font)
	});
	args.font = fonts;
	args.text = "" + args.text;
	args.sdfGlyphSize = args.sdfGlyphSize || CONFIG.sdfGlyphSize;
	args.unicodeFontsURL = args.unicodeFontsURL || CONFIG.unicodeFontsURL;
	if (args.colorRanges != null) {
		let colors = {};
		for (let key in args.colorRanges) if (args.colorRanges.hasOwnProperty(key)) {
			let val = args.colorRanges[key];
			if (typeof val !== "number") val = tempColor.set(val).getHex();
			colors[key] = val;
		}
		args.colorRanges = colors;
	}
	Object.freeze(args);
	const { textureWidth, sdfExponent } = CONFIG;
	const { sdfGlyphSize } = args;
	const glyphsPerRow = textureWidth / sdfGlyphSize * 4;
	let atlas = atlases[sdfGlyphSize];
	if (!atlas) {
		const canvas = document.createElement("canvas");
		canvas.width = textureWidth;
		canvas.height = sdfGlyphSize * 256 / glyphsPerRow;
		atlas = atlases[sdfGlyphSize] = {
			glyphCount: 0,
			sdfGlyphSize,
			sdfCanvas: canvas,
			sdfTexture: new Texture(canvas, void 0, void 0, void 0, LinearFilter, LinearFilter),
			contextLost: false,
			glyphsByFont: /* @__PURE__ */ new Map()
		};
		atlas.sdfTexture.generateMipmaps = false;
		initContextLossHandling(atlas);
	}
	const { sdfTexture, sdfCanvas } = atlas;
	(CONFIG.useWorker ? typesetInWorker : typesetOnMainThread)(args).then((result) => {
		const { glyphIds, glyphFontIndices, fontData, glyphPositions, fontSize, timings } = result;
		const neededSDFs = [];
		const glyphBounds = new Float32Array(glyphIds.length * 4);
		let boundsIdx = 0;
		let positionsIdx = 0;
		const quadsStart = now$1();
		const fontGlyphMaps = fontData.map((font) => {
			let map = atlas.glyphsByFont.get(font.src);
			if (!map) atlas.glyphsByFont.set(font.src, map = /* @__PURE__ */ new Map());
			return map;
		});
		glyphIds.forEach((glyphId, i) => {
			const fontIndex = glyphFontIndices[i];
			const { src: fontSrc, unitsPerEm } = fontData[fontIndex];
			let glyphInfo = fontGlyphMaps[fontIndex].get(glyphId);
			if (!glyphInfo) {
				const { path, pathBounds } = result.glyphData[fontSrc][glyphId];
				const fontUnitsMargin = Math.max(pathBounds[2] - pathBounds[0], pathBounds[3] - pathBounds[1]) / sdfGlyphSize * (CONFIG.sdfMargin * sdfGlyphSize + .5);
				const atlasIndex = atlas.glyphCount++;
				const sdfViewBox = [
					pathBounds[0] - fontUnitsMargin,
					pathBounds[1] - fontUnitsMargin,
					pathBounds[2] + fontUnitsMargin,
					pathBounds[3] + fontUnitsMargin
				];
				fontGlyphMaps[fontIndex].set(glyphId, glyphInfo = {
					path,
					atlasIndex,
					sdfViewBox
				});
				neededSDFs.push(glyphInfo);
			}
			const { sdfViewBox } = glyphInfo;
			const posX = glyphPositions[positionsIdx++];
			const posY = glyphPositions[positionsIdx++];
			const fontSizeMult = fontSize / unitsPerEm;
			glyphBounds[boundsIdx++] = posX + sdfViewBox[0] * fontSizeMult;
			glyphBounds[boundsIdx++] = posY + sdfViewBox[1] * fontSizeMult;
			glyphBounds[boundsIdx++] = posX + sdfViewBox[2] * fontSizeMult;
			glyphBounds[boundsIdx++] = posY + sdfViewBox[3] * fontSizeMult;
			glyphIds[i] = glyphInfo.atlasIndex;
		});
		timings.quads = (timings.quads || 0) + (now$1() - quadsStart);
		const sdfStart = now$1();
		timings.sdf = {};
		const currentHeight = sdfCanvas.height;
		const neededRows = Math.ceil(atlas.glyphCount / glyphsPerRow);
		const neededHeight = Math.pow(2, Math.ceil(Math.log2(neededRows * sdfGlyphSize)));
		if (neededHeight > currentHeight) {
			console.info(`Increasing SDF texture size ${currentHeight}->${neededHeight}`);
			resizeWebGLCanvasWithoutClearing(sdfCanvas, textureWidth, neededHeight);
			sdfTexture.dispose();
		}
		Promise.all(neededSDFs.map((glyphInfo) => generateGlyphSDF(glyphInfo, atlas, args.gpuAccelerateSDF).then(({ timing }) => {
			timings.sdf[glyphInfo.atlasIndex] = timing;
		}))).then(() => {
			if (neededSDFs.length && !atlas.contextLost) {
				safariPre15Workaround(atlas);
				sdfTexture.needsUpdate = true;
			}
			timings.sdfTotal = now$1() - sdfStart;
			timings.total = now$1() - totalStart;
			callback(Object.freeze({
				parameters: args,
				sdfTexture,
				sdfGlyphSize,
				sdfExponent,
				glyphBounds,
				glyphAtlasIndices: glyphIds,
				glyphColors: result.glyphColors,
				caretPositions: result.caretPositions,
				chunkedBounds: result.chunkedBounds,
				ascender: result.ascender,
				descender: result.descender,
				lineHeight: result.lineHeight,
				capHeight: result.capHeight,
				xHeight: result.xHeight,
				topBaseline: result.topBaseline,
				blockBounds: result.blockBounds,
				visibleBounds: result.visibleBounds,
				timings: result.timings
			}));
		});
	});
	Promise.resolve().then(() => {
		if (!atlas.contextLost) warmUpSDFCanvas(sdfCanvas);
	});
}
function generateGlyphSDF({ path, atlasIndex, sdfViewBox }, { sdfGlyphSize, sdfCanvas, contextLost }, useGPU) {
	if (contextLost) return Promise.resolve({ timing: -1 });
	const { textureWidth, sdfExponent } = CONFIG;
	const maxDist = Math.max(sdfViewBox[2] - sdfViewBox[0], sdfViewBox[3] - sdfViewBox[1]);
	const squareIndex = Math.floor(atlasIndex / 4);
	return generateSDF(sdfGlyphSize, sdfGlyphSize, path, sdfViewBox, maxDist, sdfExponent, sdfCanvas, squareIndex % (textureWidth / sdfGlyphSize) * sdfGlyphSize, Math.floor(squareIndex / (textureWidth / sdfGlyphSize)) * sdfGlyphSize, atlasIndex % 4, useGPU);
}
function initContextLossHandling(atlas) {
	const canvas = atlas.sdfCanvas;
	canvas.addEventListener("webglcontextlost", (event) => {
		console.log("Context Lost", event);
		event.preventDefault();
		atlas.contextLost = true;
	});
	canvas.addEventListener("webglcontextrestored", (event) => {
		console.log("Context Restored", event);
		atlas.contextLost = false;
		const promises = [];
		atlas.glyphsByFont.forEach((glyphMap) => {
			glyphMap.forEach((glyph) => {
				promises.push(generateGlyphSDF(glyph, atlas, true));
			});
		});
		Promise.all(promises).then(() => {
			safariPre15Workaround(atlas);
			atlas.sdfTexture.needsUpdate = true;
		});
	});
}
/**
* Preload a given font and optionally pre-generate glyph SDFs for one or more character sequences.
* This can be useful to avoid long pauses when first showing text in a scene, by preloading the
* needed fonts and glyphs up front along with other assets.
*
* @param {object} options
* @param {string} options.font - URL of the font file to preload. If not given, the default font will
*        be loaded.
* @param {string|string[]} options.characters - One or more character sequences for which to pre-
*        generate glyph SDFs. Note that this will honor ligature substitution, so you may need
*        to specify ligature sequences in addition to their individual characters to get all
*        possible glyphs, e.g. `["t", "h", "th"]` to get the "t" and "h" glyphs plus the "th" ligature.
* @param {number} options.sdfGlyphSize - The size at which to prerender the SDF textures for the
*        specified `characters`.
* @param {function} callback - A function that will be called when the preloading is complete.
*/
function preloadFont({ font, characters, sdfGlyphSize }, callback) {
	getTextRenderInfo({
		font,
		sdfGlyphSize,
		text: Array.isArray(characters) ? characters.join("\n") : "" + characters
	}, callback);
}
function assign(toObj, fromObj) {
	for (let key in fromObj) if (fromObj.hasOwnProperty(key)) toObj[key] = fromObj[key];
	return toObj;
}
var linkEl;
function toAbsoluteURL(path) {
	if (!linkEl) linkEl = typeof document === "undefined" ? {} : document.createElement("a");
	linkEl.href = path;
	return linkEl.href;
}
/**
* Safari < v15 seems unable to use the SDF webgl canvas as a texture. This applies a workaround
* where it reads the pixels out of that canvas and uploads them as a data texture instead, at
* a slight performance cost.
*/
function safariPre15Workaround(atlas) {
	if (typeof createImageBitmap !== "function") {
		console.info("Safari<15: applying SDF canvas workaround");
		const { sdfCanvas, sdfTexture } = atlas;
		const { width, height } = sdfCanvas;
		const gl = atlas.sdfCanvas.getContext("webgl");
		let pixels = sdfTexture.image.data;
		if (!pixels || pixels.length !== width * height * 4) {
			pixels = new Uint8Array(width * height * 4);
			sdfTexture.image = {
				width,
				height,
				data: pixels
			};
			sdfTexture.flipY = false;
			sdfTexture.isDataTexture = true;
		}
		gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
	}
}
var typesetInWorker = /*#__PURE__*/ defineWorkerModule({
	name: "Typesetter",
	dependencies: [/* @__PURE__ */ defineWorkerModule({
		name: "Typesetter",
		dependencies: [
			createTypesetter,
			fontResolverWorkerModule,
			bidiFactory
		],
		init(createTypesetter, fontResolver, bidiFactory) {
			return createTypesetter(fontResolver, bidiFactory());
		}
	})],
	init(typesetter) {
		return function(args) {
			return new Promise((resolve) => {
				typesetter.typeset(args, resolve);
			});
		};
	},
	getTransferables(result) {
		const transferables = [];
		for (let p in result) if (result[p] && result[p].buffer) transferables.push(result[p].buffer);
		return transferables;
	}
});
var typesetOnMainThread = typesetInWorker.onMainThread;
var templateGeometries = {};
function getTemplateGeometry(detail) {
	let geom = templateGeometries[detail];
	if (!geom) geom = templateGeometries[detail] = new PlaneGeometry(1, 1, detail, detail).translate(.5, .5, 0);
	return geom;
}
var glyphBoundsAttrName = "aTroikaGlyphBounds";
var glyphIndexAttrName = "aTroikaGlyphIndex";
var glyphColorAttrName = "aTroikaGlyphColor";
/**
@class GlyphsGeometry

A specialized Geometry for rendering a set of text glyphs. Uses InstancedBufferGeometry to
render the glyphs using GPU instancing of a single quad, rather than constructing a whole
geometry with vertices, for much smaller attribute arraybuffers according to this math:

Where N = number of glyphs...

Instanced:
- position: 4 * 3
- index: 2 * 3
- normal: 4 * 3
- uv: 4 * 2
- glyph x/y bounds: N * 4
- glyph indices: N * 1
= 5N + 38

Non-instanced:
- position: N * 4 * 3
- index: N * 2 * 3
- normal: N * 4 * 3
- uv: N * 4 * 2
- glyph indices: N * 1
= 39N

A downside of this is the rare-but-possible lack of the instanced arrays extension,
which we could potentially work around with a fallback non-instanced implementation.

*/
var GlyphsGeometry = class extends InstancedBufferGeometry {
	constructor() {
		super();
		this.detail = 1;
		this.curveRadius = 0;
		this.groups = [{
			start: 0,
			count: Infinity,
			materialIndex: 0
		}, {
			start: 0,
			count: Infinity,
			materialIndex: 1
		}];
		this.boundingSphere = new Sphere();
		this.boundingBox = new Box3();
	}
	computeBoundingSphere() {}
	computeBoundingBox() {}
	set detail(detail) {
		if (detail !== this._detail) {
			this._detail = detail;
			if (typeof detail !== "number" || detail < 1) detail = 1;
			let tpl = getTemplateGeometry(detail);
			[
				"position",
				"normal",
				"uv"
			].forEach((attr) => {
				this.attributes[attr] = tpl.attributes[attr].clone();
			});
			this.setIndex(tpl.getIndex().clone());
		}
	}
	get detail() {
		return this._detail;
	}
	set curveRadius(r) {
		if (r !== this._curveRadius) {
			this._curveRadius = r;
			this._updateBounds();
		}
	}
	get curveRadius() {
		return this._curveRadius;
	}
	/**
	* Update the geometry for a new set of glyphs.
	* @param {Float32Array} glyphBounds - An array holding the planar bounds for all glyphs
	*        to be rendered, 4 entries for each glyph: x1,x2,y1,y1
	* @param {Float32Array} glyphAtlasIndices - An array holding the index of each glyph within
	*        the SDF atlas texture.
	* @param {Array} blockBounds - An array holding the [minX, minY, maxX, maxY] across all glyphs
	* @param {Array} [chunkedBounds] - An array of objects describing bounds for each chunk of N
	*        consecutive glyphs: `{start:N, end:N, rect:[minX, minY, maxX, maxY]}`. This can be
	*        used with `applyClipRect` to choose an optimized `instanceCount`.
	* @param {Uint8Array} [glyphColors] - An array holding r,g,b values for each glyph.
	*/
	updateGlyphs(glyphBounds, glyphAtlasIndices, blockBounds, chunkedBounds, glyphColors) {
		this.updateAttributeData(glyphBoundsAttrName, glyphBounds, 4);
		this.updateAttributeData(glyphIndexAttrName, glyphAtlasIndices, 1);
		this.updateAttributeData(glyphColorAttrName, glyphColors, 3);
		this._blockBounds = blockBounds;
		this._chunkedBounds = chunkedBounds;
		this.instanceCount = glyphAtlasIndices.length;
		this._updateBounds();
	}
	_updateBounds() {
		const bounds = this._blockBounds;
		if (bounds) {
			const { curveRadius, boundingBox: bbox } = this;
			if (curveRadius) {
				const { PI, floor, min, max, sin, cos } = Math;
				const halfPi = PI / 2;
				const twoPi = PI * 2;
				const absR = Math.abs(curveRadius);
				const leftAngle = bounds[0] / absR;
				const rightAngle = bounds[2] / absR;
				const minX = floor((leftAngle + halfPi) / twoPi) !== floor((rightAngle + halfPi) / twoPi) ? -absR : min(sin(leftAngle) * absR, sin(rightAngle) * absR);
				const maxX = floor((leftAngle - halfPi) / twoPi) !== floor((rightAngle - halfPi) / twoPi) ? absR : max(sin(leftAngle) * absR, sin(rightAngle) * absR);
				const maxZ = floor((leftAngle + PI) / twoPi) !== floor((rightAngle + PI) / twoPi) ? absR * 2 : max(absR - cos(leftAngle) * absR, absR - cos(rightAngle) * absR);
				bbox.min.set(minX, bounds[1], curveRadius < 0 ? -maxZ : 0);
				bbox.max.set(maxX, bounds[3], curveRadius < 0 ? 0 : maxZ);
			} else {
				bbox.min.set(bounds[0], bounds[1], 0);
				bbox.max.set(bounds[2], bounds[3], 0);
			}
			bbox.getBoundingSphere(this.boundingSphere);
		}
	}
	/**
	* Given a clipping rect, and the chunkedBounds from the last updateGlyphs call, choose the lowest
	* `instanceCount` that will show all glyphs within the clipped view. This is an optimization
	* for long blocks of text that are clipped, to skip vertex shader evaluation for glyphs that would
	* be clipped anyway.
	*
	* Note that since `drawElementsInstanced[ANGLE]` only accepts an instance count and not a starting
	* offset, this optimization becomes less effective as the clipRect moves closer to the end of the
	* text block. We could fix that by switching from instancing to a full geometry with a drawRange,
	* but at the expense of much larger attribute buffers (see classdoc above.)
	*
	* @param {Vector4} clipRect
	*/
	applyClipRect(clipRect) {
		let count = this.getAttribute(glyphIndexAttrName).count;
		let chunks = this._chunkedBounds;
		if (chunks) for (let i = chunks.length; i--;) {
			count = chunks[i].end;
			let rect = chunks[i].rect;
			if (rect[1] < clipRect.w && rect[3] > clipRect.y && rect[0] < clipRect.z && rect[2] > clipRect.x) break;
		}
		this.instanceCount = count;
	}
	/**
	* Utility for updating instance attributes with automatic resizing
	*/
	updateAttributeData(attrName, newArray, itemSize) {
		const attr = this.getAttribute(attrName);
		if (newArray) {
			if (attr && attr.array.length === newArray.length) {
				attr.array.set(newArray);
				attr.needsUpdate = true;
			} else {
				this.setAttribute(attrName, new InstancedBufferAttribute(newArray, itemSize));
				delete this._maxInstanceCount;
				this.dispose();
			}
		} else if (attr) this.deleteAttribute(attrName);
	}
};
var VERTEX_DEFS = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`;
var VERTEX_TRANSFORM = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`;
var FRAGMENT_DEFS = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`;
var FRAGMENT_TRANSFORM = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
/**
* Create a material for rendering text, derived from a baseMaterial
*/
function createTextDerivedMaterial(baseMaterial) {
	const textMaterial = createDerivedMaterial(baseMaterial, {
		chained: true,
		extensions: { derivatives: true },
		uniforms: {
			uTroikaSDFTexture: { value: null },
			uTroikaSDFTextureSize: { value: new Vector2() },
			uTroikaSDFGlyphSize: { value: 0 },
			uTroikaSDFExponent: { value: 0 },
			uTroikaTotalBounds: { value: new Vector4(0, 0, 0, 0) },
			uTroikaClipRect: { value: new Vector4(0, 0, 0, 0) },
			uTroikaEdgeOffset: { value: 0 },
			uTroikaFillOpacity: { value: 1 },
			uTroikaPositionOffset: { value: new Vector2() },
			uTroikaCurveRadius: { value: 0 },
			uTroikaBlurRadius: { value: 0 },
			uTroikaStrokeWidth: { value: 0 },
			uTroikaStrokeColor: { value: new Color() },
			uTroikaStrokeOpacity: { value: 1 },
			uTroikaOrient: { value: new Matrix3() },
			uTroikaUseGlyphColors: { value: true },
			uTroikaSDFDebug: { value: false }
		},
		vertexDefs: VERTEX_DEFS,
		vertexTransform: VERTEX_TRANSFORM,
		fragmentDefs: FRAGMENT_DEFS,
		fragmentColorTransform: FRAGMENT_TRANSFORM,
		customRewriter({ vertexShader, fragmentShader }) {
			let uDiffuseRE = /\buniform\s+vec3\s+diffuse\b/;
			if (uDiffuseRE.test(fragmentShader)) {
				fragmentShader = fragmentShader.replace(uDiffuseRE, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor");
				if (!uDiffuseRE.test(vertexShader)) vertexShader = vertexShader.replace(voidMainRegExp, "uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n");
			}
			return {
				vertexShader,
				fragmentShader
			};
		}
	});
	textMaterial.transparent = true;
	textMaterial.forceSinglePass = true;
	Object.defineProperties(textMaterial, {
		isTroikaTextMaterial: { value: true },
		shadowSide: {
			get() {
				return this.side;
			},
			set() {}
		}
	});
	return textMaterial;
}
var defaultMaterial = /*#__PURE__*/ new MeshBasicMaterial({
	color: 16777215,
	side: 2,
	transparent: true
});
var defaultStrokeColor = 8421504;
var tempMat4 = /*#__PURE__*/ new Matrix4();
var tempVec3a = /*#__PURE__*/ new Vector3();
var tempVec3b = /*#__PURE__*/ new Vector3();
var tempArray = [];
var origin = /*#__PURE__*/ new Vector3();
var defaultOrient = "+x+y";
function first(o) {
	return Array.isArray(o) ? o[0] : o;
}
var getFlatRaycastMesh = () => {
	const mesh = new Mesh(new PlaneGeometry(1, 1), defaultMaterial);
	getFlatRaycastMesh = () => mesh;
	return mesh;
};
var getCurvedRaycastMesh = () => {
	const mesh = new Mesh(new PlaneGeometry(1, 1, 32, 1), defaultMaterial);
	getCurvedRaycastMesh = () => mesh;
	return mesh;
};
var syncStartEvent = { type: "syncstart" };
var syncCompleteEvent = { type: "synccomplete" };
var SYNCABLE_PROPS = [
	"font",
	"fontSize",
	"fontStyle",
	"fontWeight",
	"lang",
	"letterSpacing",
	"lineHeight",
	"maxWidth",
	"overflowWrap",
	"text",
	"direction",
	"textAlign",
	"textIndent",
	"whiteSpace",
	"anchorX",
	"anchorY",
	"colorRanges",
	"sdfGlyphSize"
];
var COPYABLE_PROPS = SYNCABLE_PROPS.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail");
/**
* @class Text
*
* A ThreeJS Mesh that renders a string of text on a plane in 3D space using signed distance
* fields (SDF).
*/
var Text$1 = class extends Mesh {
	constructor() {
		const geometry = new GlyphsGeometry();
		super(geometry, null);
		/**
		* @member {string} text
		* The string of text to be rendered.
		*/
		this.text = "";
		/**
		* @member {number|string} anchorX
		* Defines the horizontal position in the text block that should line up with the local origin.
		* Can be specified as a numeric x position in local units, a string percentage of the total
		* text block width e.g. `'25%'`, or one of the following keyword strings: 'left', 'center',
		* or 'right'.
		*/
		this.anchorX = 0;
		/**
		* @member {number|string} anchorY
		* Defines the vertical position in the text block that should line up with the local origin.
		* Can be specified as a numeric y position in local units (note: down is negative y), a string
		* percentage of the total text block height e.g. `'25%'`, or one of the following keyword strings:
		* 'top', 'top-baseline', 'top-cap', 'top-ex', 'middle', 'bottom-baseline', or 'bottom'.
		*/
		this.anchorY = 0;
		/**
		* @member {number} curveRadius
		* Defines a cylindrical radius along which the text's plane will be curved. Positive numbers put
		* the cylinder's centerline (oriented vertically) that distance in front of the text, for a concave
		* curvature, while negative numbers put it behind the text for a convex curvature. The centerline
		* will be aligned with the text's local origin; you can use `anchorX` to offset it.
		*
		* Since each glyph is by default rendered with a simple quad, each glyph remains a flat plane
		* internally. You can use `glyphGeometryDetail` to add more vertices for curvature inside glyphs.
		*/
		this.curveRadius = 0;
		/**
		* @member {string} direction
		* Sets the base direction for the text. The default value of "auto" will choose a direction based
		* on the text's content according to the bidi spec. A value of "ltr" or "rtl" will force the direction.
		*/
		this.direction = "auto";
		/**
		* @member {string|null} font
		* URL of a custom font to be used. Font files can be in .ttf, .otf, or .woff (not .woff2) formats.
		* Defaults to Noto Sans.
		*/
		this.font = null;
		this.unicodeFontsURL = null;
		/**
		* @member {number} fontSize
		* The size at which to render the font in local units; corresponds to the em-box height
		* of the chosen `font`.
		*/
		this.fontSize = .1;
		/**
		* @member {number|'normal'|'bold'}
		* The weight of the font. Currently only used for fallback Noto fonts.
		*/
		this.fontWeight = "normal";
		/**
		* @member {'normal'|'italic'}
		* The style of the font. Currently only used for fallback Noto fonts.
		*/
		this.fontStyle = "normal";
		/**
		* @member {string|null} lang
		* The language code of this text; can be used for explicitly selecting certain CJK fonts.
		*/
		this.lang = null;
		/**
		* @member {number} letterSpacing
		* Sets a uniform adjustment to spacing between letters after kerning is applied. Positive
		* numbers increase spacing and negative numbers decrease it.
		*/
		this.letterSpacing = 0;
		/**
		* @member {number|string} lineHeight
		* Sets the height of each line of text, as a multiple of the `fontSize`. Defaults to 'normal'
		* which chooses a reasonable height based on the chosen font's ascender/descender metrics.
		*/
		this.lineHeight = "normal";
		/**
		* @member {number} maxWidth
		* The maximum width of the text block, above which text may start wrapping according to the
		* `whiteSpace` and `overflowWrap` properties.
		*/
		this.maxWidth = Infinity;
		/**
		* @member {string} overflowWrap
		* Defines how text wraps if the `whiteSpace` property is `normal`. Can be either `'normal'`
		* to break at whitespace characters, or `'break-word'` to allow breaking within words.
		* Defaults to `'normal'`.
		*/
		this.overflowWrap = "normal";
		/**
		* @member {string} textAlign
		* The horizontal alignment of each line of text within the overall text bounding box.
		*/
		this.textAlign = "left";
		/**
		* @member {number} textIndent
		* Indentation for the first character of a line; see CSS `text-indent`.
		*/
		this.textIndent = 0;
		/**
		* @member {string} whiteSpace
		* Defines whether text should wrap when a line reaches the `maxWidth`. Can
		* be either `'normal'` (the default), to allow wrapping according to the `overflowWrap` property,
		* or `'nowrap'` to prevent wrapping. Note that `'normal'` here honors newline characters to
		* manually break lines, making it behave more like `'pre-wrap'` does in CSS.
		*/
		this.whiteSpace = "normal";
		/**
		* @member {THREE.Material} material
		* Defines a _base_ material to be used when rendering the text. This material will be
		* automatically replaced with a material derived from it, that adds shader code to
		* decrease the alpha for each fragment (pixel) outside the text glyphs, with antialiasing.
		* By default it will derive from a simple white MeshBasicMaterial, but you can use any
		* of the other mesh materials to gain other features like lighting, texture maps, etc.
		*
		* Also see the `color` shortcut property.
		*/
		this.material = null;
		/**
		* @member {string|number|THREE.Color} color
		* This is a shortcut for setting the `color` of the text's material. You can use this
		* if you don't want to specify a whole custom `material`. Also, if you do use a custom
		* `material`, this color will only be used for this particuar Text instance, even if
		* that same material instance is shared across multiple Text objects.
		*/
		this.color = null;
		/**
		* @member {object|null} colorRanges
		* WARNING: This API is experimental and may change.
		* This allows more fine-grained control of colors for individual or ranges of characters,
		* taking precedence over the material's `color`. Its format is an Object whose keys each
		* define a starting character index for a range, and whose values are the color for each
		* range. The color value can be a numeric hex color value, a `THREE.Color` object, or
		* any of the strings accepted by `THREE.Color`.
		*/
		this.colorRanges = null;
		/**
		* @member {number|string} outlineWidth
		* WARNING: This API is experimental and may change.
		* The width of an outline/halo to be drawn around each text glyph using the `outlineColor` and `outlineOpacity`.
		* Can be specified as either an absolute number in local units, or as a percentage string e.g.
		* `"12%"` which is treated as a percentage of the `fontSize`. Defaults to `0`, which means
		* no outline will be drawn unless an `outlineOffsetX/Y` or `outlineBlur` is set.
		*/
		this.outlineWidth = 0;
		/**
		* @member {string|number|THREE.Color} outlineColor
		* WARNING: This API is experimental and may change.
		* The color of the text outline, if `outlineWidth`/`outlineBlur`/`outlineOffsetX/Y` are set.
		* Defaults to black.
		*/
		this.outlineColor = 0;
		/**
		* @member {number} outlineOpacity
		* WARNING: This API is experimental and may change.
		* The opacity of the outline, if `outlineWidth`/`outlineBlur`/`outlineOffsetX/Y` are set.
		* Defaults to `1`.
		*/
		this.outlineOpacity = 1;
		/**
		* @member {number|string} outlineBlur
		* WARNING: This API is experimental and may change.
		* A blur radius applied to the outer edge of the text's outline. If the `outlineWidth` is
		* zero, the blur will be applied at the glyph edge, like CSS's `text-shadow` blur radius.
		* Can be specified as either an absolute number in local units, or as a percentage string e.g.
		* `"12%"` which is treated as a percentage of the `fontSize`. Defaults to `0`.
		*/
		this.outlineBlur = 0;
		/**
		* @member {number|string} outlineOffsetX
		* WARNING: This API is experimental and may change.
		* A horizontal offset for the text outline.
		* Can be specified as either an absolute number in local units, or as a percentage string e.g. `"12%"`
		* which is treated as a percentage of the `fontSize`. Defaults to `0`.
		*/
		this.outlineOffsetX = 0;
		/**
		* @member {number|string} outlineOffsetY
		* WARNING: This API is experimental and may change.
		* A vertical offset for the text outline.
		* Can be specified as either an absolute number in local units, or as a percentage string e.g. `"12%"`
		* which is treated as a percentage of the `fontSize`. Defaults to `0`.
		*/
		this.outlineOffsetY = 0;
		/**
		* @member {number|string} strokeWidth
		* WARNING: This API is experimental and may change.
		* The width of an inner stroke drawn inside each text glyph using the `strokeColor` and `strokeOpacity`.
		* Can be specified as either an absolute number in local units, or as a percentage string e.g. `"12%"`
		* which is treated as a percentage of the `fontSize`. Defaults to `0`.
		*/
		this.strokeWidth = 0;
		/**
		* @member {string|number|THREE.Color} strokeColor
		* WARNING: This API is experimental and may change.
		* The color of the text stroke, if `strokeWidth` is greater than zero. Defaults to gray.
		*/
		this.strokeColor = defaultStrokeColor;
		/**
		* @member {number} strokeOpacity
		* WARNING: This API is experimental and may change.
		* The opacity of the stroke, if `strokeWidth` is greater than zero. Defaults to `1`.
		*/
		this.strokeOpacity = 1;
		/**
		* @member {number} fillOpacity
		* WARNING: This API is experimental and may change.
		* The opacity of the glyph's fill from 0 to 1. This behaves like the material's `opacity` but allows
		* giving the fill a different opacity than the `strokeOpacity`. A fillOpacity of `0` makes the
		* interior of the glyph invisible, leaving just the `strokeWidth`. Defaults to `1`.
		*/
		this.fillOpacity = 1;
		/**
		* @member {number} depthOffset
		* This is a shortcut for setting the material's `polygonOffset` and related properties,
		* which can be useful in preventing z-fighting when this text is laid on top of another
		* plane in the scene. Positive numbers are further from the camera, negatives closer.
		*/
		this.depthOffset = 0;
		/**
		* @member {Array<number>} clipRect
		* If specified, defines a `[minX, minY, maxX, maxY]` of a rectangle outside of which all
		* pixels will be discarded. This can be used for example to clip overflowing text when
		* `whiteSpace='nowrap'`.
		*/
		this.clipRect = null;
		/**
		* @member {string} orientation
		* Defines the axis plane on which the text should be laid out when the mesh has no extra
		* rotation transform. It is specified as a string with two axes: the horizontal axis with
		* positive pointing right, and the vertical axis with positive pointing up. By default this
		* is '+x+y', meaning the text sits on the xy plane with the text's top toward positive y
		* and facing positive z. A value of '+x-z' would place it on the xz plane with the text's
		* top toward negative z and facing positive y.
		*/
		this.orientation = defaultOrient;
		/**
		* @member {number} glyphGeometryDetail
		* Controls number of vertical/horizontal segments that make up each glyph's rectangular
		* plane. Defaults to 1. This can be increased to provide more geometrical detail for custom
		* vertex shader effects, for example.
		*/
		this.glyphGeometryDetail = 1;
		/**
		* @member {number|null} sdfGlyphSize
		* The size of each glyph's SDF (signed distance field) used for rendering. This must be a
		* power-of-two number. Defaults to 64 which is generally a good balance of size and quality
		* for most fonts. Larger sizes can improve the quality of glyph rendering by increasing
		* the sharpness of corners and preventing loss of very thin lines, at the expense of
		* increased memory footprint and longer SDF generation time.
		*/
		this.sdfGlyphSize = null;
		/**
		* @member {boolean} gpuAccelerateSDF
		* When `true`, the SDF generation process will be GPU-accelerated with WebGL when possible,
		* making it much faster especially for complex glyphs, and falling back to a JavaScript version
		* executed in web workers when support isn't available. It should automatically detect support,
		* but it's still somewhat experimental, so you can set it to `false` to force it to use the JS
		* version if you encounter issues with it.
		*/
		this.gpuAccelerateSDF = true;
		this.debugSDF = false;
	}
	/**
	* Updates the text rendering according to the current text-related configuration properties.
	* This is an async process, so you can pass in a callback function to be executed when it
	* finishes.
	* @param {function} [callback]
	*/
	sync(callback) {
		if (this._needsSync) {
			this._needsSync = false;
			if (this._isSyncing) (this._queuedSyncs || (this._queuedSyncs = [])).push(callback);
			else {
				this._isSyncing = true;
				this.dispatchEvent(syncStartEvent);
				getTextRenderInfo({
					text: this.text,
					font: this.font,
					lang: this.lang,
					fontSize: this.fontSize || .1,
					fontWeight: this.fontWeight || "normal",
					fontStyle: this.fontStyle || "normal",
					letterSpacing: this.letterSpacing || 0,
					lineHeight: this.lineHeight || "normal",
					maxWidth: this.maxWidth,
					direction: this.direction || "auto",
					textAlign: this.textAlign,
					textIndent: this.textIndent,
					whiteSpace: this.whiteSpace,
					overflowWrap: this.overflowWrap,
					anchorX: this.anchorX,
					anchorY: this.anchorY,
					colorRanges: this.colorRanges,
					includeCaretPositions: true,
					sdfGlyphSize: this.sdfGlyphSize,
					gpuAccelerateSDF: this.gpuAccelerateSDF,
					unicodeFontsURL: this.unicodeFontsURL
				}, (textRenderInfo) => {
					this._isSyncing = false;
					this._textRenderInfo = textRenderInfo;
					this.geometry.updateGlyphs(textRenderInfo.glyphBounds, textRenderInfo.glyphAtlasIndices, textRenderInfo.blockBounds, textRenderInfo.chunkedBounds, textRenderInfo.glyphColors);
					const queued = this._queuedSyncs;
					if (queued) {
						this._queuedSyncs = null;
						this._needsSync = true;
						this.sync(() => {
							queued.forEach((fn) => fn && fn());
						});
					}
					this.dispatchEvent(syncCompleteEvent);
					if (callback) callback();
				});
			}
		}
	}
	/**
	* Initiate a sync if needed - note it won't complete until next frame at the
	* earliest so if possible it's a good idea to call sync() manually as soon as
	* all the properties have been set.
	* @override
	*/
	onBeforeRender(renderer, scene, camera, geometry, material, group) {
		this.sync();
		if (material.isTroikaTextMaterial) this._prepareForRender(material);
	}
	/**
	* Shortcut to dispose the geometry specific to this instance.
	* Note: we don't also dispose the derived material here because if anything else is
	* sharing the same base material it will result in a pause next frame as the program
	* is recompiled. Instead users can dispose the base material manually, like normal,
	* and we'll also dispose the derived material at that time.
	*/
	dispose() {
		this.geometry.dispose();
	}
	/**
	* @property {TroikaTextRenderInfo|null} textRenderInfo
	* @readonly
	* The current processed rendering data for this TextMesh, returned by the TextBuilder after
	* a `sync()` call. This will be `null` initially, and may be stale for a short period until
	* the asynchrous `sync()` process completes.
	*/
	get textRenderInfo() {
		return this._textRenderInfo || null;
	}
	/**
	* Create the text derived material from the base material. Can be overridden to use a custom
	* derived material.
	*/
	createDerivedMaterial(baseMaterial) {
		return createTextDerivedMaterial(baseMaterial);
	}
	get material() {
		let derivedMaterial = this._derivedMaterial;
		const baseMaterial = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = defaultMaterial.clone());
		if (!derivedMaterial || !derivedMaterial.isDerivedFrom(baseMaterial)) {
			derivedMaterial = this._derivedMaterial = this.createDerivedMaterial(baseMaterial);
			baseMaterial.addEventListener("dispose", function onDispose() {
				baseMaterial.removeEventListener("dispose", onDispose);
				derivedMaterial.dispose();
			});
		}
		if (this.hasOutline()) {
			let outlineMaterial = derivedMaterial._outlineMtl;
			if (!outlineMaterial) {
				outlineMaterial = derivedMaterial._outlineMtl = Object.create(derivedMaterial, { id: { value: derivedMaterial.id + .1 } });
				outlineMaterial.isTextOutlineMaterial = true;
				outlineMaterial.depthWrite = false;
				outlineMaterial.map = null;
				derivedMaterial.addEventListener("dispose", function onDispose() {
					derivedMaterial.removeEventListener("dispose", onDispose);
					outlineMaterial.dispose();
				});
			}
			return [outlineMaterial, derivedMaterial];
		} else return derivedMaterial;
	}
	set material(baseMaterial) {
		if (baseMaterial && baseMaterial.isTroikaTextMaterial) {
			this._derivedMaterial = baseMaterial;
			this._baseMaterial = baseMaterial.baseMaterial;
		} else this._baseMaterial = baseMaterial;
	}
	hasOutline() {
		return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
	}
	get glyphGeometryDetail() {
		return this.geometry.detail;
	}
	set glyphGeometryDetail(detail) {
		this.geometry.detail = detail;
	}
	get curveRadius() {
		return this.geometry.curveRadius;
	}
	set curveRadius(r) {
		this.geometry.curveRadius = r;
	}
	get customDepthMaterial() {
		return first(this.material).getDepthMaterial();
	}
	set customDepthMaterial(m) {}
	get customDistanceMaterial() {
		return first(this.material).getDistanceMaterial();
	}
	set customDistanceMaterial(m) {}
	_prepareForRender(material) {
		const isOutline = material.isTextOutlineMaterial;
		const uniforms = material.uniforms;
		const textInfo = this.textRenderInfo;
		if (textInfo) {
			const { sdfTexture, blockBounds } = textInfo;
			uniforms.uTroikaSDFTexture.value = sdfTexture;
			uniforms.uTroikaSDFTextureSize.value.set(sdfTexture.image.width, sdfTexture.image.height);
			uniforms.uTroikaSDFGlyphSize.value = textInfo.sdfGlyphSize;
			uniforms.uTroikaSDFExponent.value = textInfo.sdfExponent;
			uniforms.uTroikaTotalBounds.value.fromArray(blockBounds);
			uniforms.uTroikaUseGlyphColors.value = !isOutline && !!textInfo.glyphColors;
			let distanceOffset = 0;
			let blurRadius = 0;
			let strokeWidth = 0;
			let fillOpacity;
			let strokeOpacity;
			let strokeColor;
			let offsetX = 0;
			let offsetY = 0;
			if (isOutline) {
				let { outlineWidth, outlineOffsetX, outlineOffsetY, outlineBlur, outlineOpacity } = this;
				distanceOffset = this._parsePercent(outlineWidth) || 0;
				blurRadius = Math.max(0, this._parsePercent(outlineBlur) || 0);
				fillOpacity = outlineOpacity;
				offsetX = this._parsePercent(outlineOffsetX) || 0;
				offsetY = this._parsePercent(outlineOffsetY) || 0;
			} else {
				strokeWidth = Math.max(0, this._parsePercent(this.strokeWidth) || 0);
				if (strokeWidth) {
					strokeColor = this.strokeColor;
					uniforms.uTroikaStrokeColor.value.set(strokeColor == null ? defaultStrokeColor : strokeColor);
					strokeOpacity = this.strokeOpacity;
					if (strokeOpacity == null) strokeOpacity = 1;
				}
				fillOpacity = this.fillOpacity;
			}
			uniforms.uTroikaEdgeOffset.value = distanceOffset;
			uniforms.uTroikaPositionOffset.value.set(offsetX, offsetY);
			uniforms.uTroikaBlurRadius.value = blurRadius;
			uniforms.uTroikaStrokeWidth.value = strokeWidth;
			uniforms.uTroikaStrokeOpacity.value = strokeOpacity;
			uniforms.uTroikaFillOpacity.value = fillOpacity == null ? 1 : fillOpacity;
			uniforms.uTroikaCurveRadius.value = this.curveRadius || 0;
			let clipRect = this.clipRect;
			if (clipRect && Array.isArray(clipRect) && clipRect.length === 4) uniforms.uTroikaClipRect.value.fromArray(clipRect);
			else {
				const pad = (this.fontSize || .1) * 100;
				uniforms.uTroikaClipRect.value.set(blockBounds[0] - pad, blockBounds[1] - pad, blockBounds[2] + pad, blockBounds[3] + pad);
			}
			this.geometry.applyClipRect(uniforms.uTroikaClipRect.value);
		}
		uniforms.uTroikaSDFDebug.value = !!this.debugSDF;
		material.polygonOffset = !!this.depthOffset;
		material.polygonOffsetFactor = material.polygonOffsetUnits = this.depthOffset || 0;
		const color = isOutline ? this.outlineColor || 0 : this.color;
		if (color == null) delete material.color;
		else {
			const colorObj = material.hasOwnProperty("color") ? material.color : material.color = new Color();
			if (color !== colorObj._input || typeof color === "object") colorObj.set(colorObj._input = color);
		}
		let orient = this.orientation || defaultOrient;
		if (orient !== material._orientation) {
			let rotMat = uniforms.uTroikaOrient.value;
			orient = orient.replace(/[^-+xyz]/g, "");
			let match = orient !== defaultOrient && orient.match(/^([-+])([xyz])([-+])([xyz])$/);
			if (match) {
				let [, hSign, hAxis, vSign, vAxis] = match;
				tempVec3a.set(0, 0, 0)[hAxis] = hSign === "-" ? 1 : -1;
				tempVec3b.set(0, 0, 0)[vAxis] = vSign === "-" ? -1 : 1;
				tempMat4.lookAt(origin, tempVec3a.cross(tempVec3b), tempVec3b);
				rotMat.setFromMatrix4(tempMat4);
			} else rotMat.identity();
			material._orientation = orient;
		}
	}
	_parsePercent(value) {
		if (typeof value === "string") {
			let match = value.match(/^(-?[\d.]+)%$/);
			let pct = match ? parseFloat(match[1]) : NaN;
			value = (isNaN(pct) ? 0 : pct / 100) * this.fontSize;
		}
		return value;
	}
	/**
	* Translate a point in local space to an x/y in the text plane.
	*/
	localPositionToTextCoords(position, target = new Vector2()) {
		target.copy(position);
		const r = this.curveRadius;
		if (r) target.x = Math.atan2(position.x, Math.abs(r) - Math.abs(position.z)) * Math.abs(r);
		return target;
	}
	/**
	* Translate a point in world space to an x/y in the text plane.
	*/
	worldPositionToTextCoords(position, target = new Vector2()) {
		tempVec3a.copy(position);
		return this.localPositionToTextCoords(this.worldToLocal(tempVec3a), target);
	}
	/**
	* @override Custom raycasting to test against the whole text block's max rectangular bounds
	* TODO is there any reason to make this more granular, like within individual line or glyph rects?
	*/
	raycast(raycaster, intersects) {
		const { textRenderInfo, curveRadius } = this;
		if (textRenderInfo) {
			const bounds = textRenderInfo.blockBounds;
			const raycastMesh = curveRadius ? getCurvedRaycastMesh() : getFlatRaycastMesh();
			const geom = raycastMesh.geometry;
			const { position, uv } = geom.attributes;
			for (let i = 0; i < uv.count; i++) {
				let x = bounds[0] + uv.getX(i) * (bounds[2] - bounds[0]);
				const y = bounds[1] + uv.getY(i) * (bounds[3] - bounds[1]);
				let z = 0;
				if (curveRadius) {
					z = curveRadius - Math.cos(x / curveRadius) * curveRadius;
					x = Math.sin(x / curveRadius) * curveRadius;
				}
				position.setXYZ(i, x, y, z);
			}
			geom.boundingSphere = this.geometry.boundingSphere;
			geom.boundingBox = this.geometry.boundingBox;
			raycastMesh.matrixWorld = this.matrixWorld;
			raycastMesh.material.side = this.material.side;
			tempArray.length = 0;
			raycastMesh.raycast(raycaster, tempArray);
			for (let i = 0; i < tempArray.length; i++) {
				tempArray[i].object = this;
				intersects.push(tempArray[i]);
			}
		}
	}
	copy(source) {
		const geom = this.geometry;
		super.copy(source);
		this.geometry = geom;
		COPYABLE_PROPS.forEach((prop) => {
			this[prop] = source[prop];
		});
		return this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
SYNCABLE_PROPS.forEach((prop) => {
	const privateKey = "_private_" + prop;
	Object.defineProperty(Text$1.prototype, prop, {
		get() {
			return this[privateKey];
		},
		set(value) {
			if (value !== this[privateKey]) {
				this[privateKey] = value;
				this._needsSync = true;
			}
		}
	});
});
new Box3();
new Color();
//#endregion
//#region node_modules/@react-three/drei/core/Text.js
var Text = /* @__PURE__ */ import_react.forwardRef(({ sdfGlyphSize = 64, anchorX = "center", anchorY = "middle", font, fontSize = 1, children, characters, onSync, ...props }, ref) => {
	const invalidate = useThree(({ invalidate }) => invalidate);
	const [troikaMesh] = import_react.useState(() => new Text$1());
	const [nodes, text] = import_react.useMemo(() => {
		const n = [];
		let t = "";
		import_react.Children.forEach(children, (child) => {
			if (typeof child === "string" || typeof child === "number") t += child;
			else n.push(child);
		});
		return [n, t];
	}, [children]);
	suspend(() => new Promise((res) => preloadFont({
		font,
		characters
	}, res)), [
		"troika-text",
		font,
		characters
	]);
	import_react.useLayoutEffect(() => void troikaMesh.sync(() => {
		invalidate();
		if (onSync) onSync(troikaMesh);
	}));
	import_react.useEffect(() => {
		return () => troikaMesh.dispose();
	}, [troikaMesh]);
	return /*#__PURE__*/ import_react.createElement("primitive", _extends({
		object: troikaMesh,
		ref,
		font,
		text,
		anchorX,
		anchorY,
		fontSize,
		sdfGlyphSize
	}, props), nodes);
});
//#endregion
//#region node_modules/@react-three/drei/core/shaderMaterial.js
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
	var _Class = class extends ShaderMaterial {
		constructor(parameters) {
			super({
				vertexShader,
				fragmentShader,
				...parameters
			});
			for (const key in uniforms) {
				this.uniforms[key] = new Uniform(uniforms[key]);
				Object.defineProperty(this, key, {
					get() {
						return this.uniforms[key].value;
					},
					set(value) {
						this.uniforms[key].value = value;
					}
				});
			}
			this.uniforms = UniformsUtils.clone(this.uniforms);
			onInit?.(this);
		}
	};
	return _Class.key = MathUtils.generateUUID(), _Class;
}
//#endregion
//#region node_modules/@react-three/drei/helpers/constants.js
var getVersion = () => parseInt("186".replace(/\D+/g, ""));
var version = /* @__PURE__ */ getVersion();
//#endregion
//#region node_modules/@react-three/drei/core/Fbo.js
function useFBO(width, height, settings) {
	const size = useThree((state) => state.size);
	const viewport = useThree((state) => state.viewport);
	const _width = typeof width === "number" ? width : size.width * viewport.dpr;
	const _height = typeof height === "number" ? height : size.height * viewport.dpr;
	const _settings = (typeof width === "number" ? settings : width) || {};
	const { samples = 0, depth, ...targetSettings } = _settings;
	const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer;
	const target = import_react.useMemo(() => {
		const target = new WebGLRenderTarget(_width, _height, {
			minFilter: LinearFilter,
			magFilter: LinearFilter,
			type: HalfFloatType,
			...targetSettings
		});
		if (depthBuffer) target.depthTexture = new DepthTexture(_width, _height, FloatType);
		target.samples = samples;
		return target;
	}, []);
	import_react.useLayoutEffect(() => {
		target.setSize(_width, _height);
		if (samples) target.samples = samples;
	}, [
		samples,
		target,
		_width,
		_height
	]);
	import_react.useEffect(() => {
		return () => target.dispose();
	}, []);
	return target;
}
//#endregion
//#region node_modules/@react-three/drei/core/OrthographicCamera.js
var isFunction = (node) => typeof node === "function";
var OrthographicCamera = /* @__PURE__ */ import_react.forwardRef(({ envMap, resolution = 256, frames = Infinity, children, makeDefault, ...props }, ref) => {
	const set = useThree(({ set }) => set);
	const camera = useThree(({ camera }) => camera);
	const size = useThree(({ size }) => size);
	const cameraRef = import_react.useRef(null);
	import_react.useImperativeHandle(ref, () => cameraRef.current, []);
	const groupRef = import_react.useRef(null);
	const fbo = useFBO(resolution);
	import_react.useLayoutEffect(() => {
		if (!props.manual) cameraRef.current.updateProjectionMatrix();
	}, [size, props]);
	import_react.useLayoutEffect(() => {
		cameraRef.current.updateProjectionMatrix();
	});
	import_react.useLayoutEffect(() => {
		if (makeDefault) {
			const oldCam = camera;
			set(() => ({ camera: cameraRef.current }));
			return () => set(() => ({ camera: oldCam }));
		}
	}, [
		cameraRef,
		makeDefault,
		set
	]);
	let count = 0;
	let oldEnvMap = null;
	const functional = isFunction(children);
	useFrame((state) => {
		if (functional && (frames === Infinity || count < frames)) {
			groupRef.current.visible = false;
			state.gl.setRenderTarget(fbo);
			oldEnvMap = state.scene.background;
			if (envMap) state.scene.background = envMap;
			state.gl.render(state.scene, cameraRef.current);
			state.scene.background = oldEnvMap;
			state.gl.setRenderTarget(null);
			groupRef.current.visible = true;
			count++;
		}
	});
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("orthographicCamera", _extends({
		left: size.width / -2,
		right: size.width / 2,
		top: size.height / 2,
		bottom: size.height / -2,
		ref: cameraRef
	}, props), !functional && children), /*#__PURE__*/ import_react.createElement("group", { ref: groupRef }, functional && children(fbo.texture)));
});
//#endregion
//#region node_modules/@react-three/drei/core/OrbitControls.js
var OrbitControls = /* @__PURE__ */ import_react.forwardRef(({ makeDefault, camera, regress, domElement, enableDamping = true, keyEvents = false, onChange, onStart, onEnd, ...restProps }, ref) => {
	const invalidate = useThree((state) => state.invalidate);
	const defaultCamera = useThree((state) => state.camera);
	const gl = useThree((state) => state.gl);
	const events = useThree((state) => state.events);
	const setEvents = useThree((state) => state.setEvents);
	const set = useThree((state) => state.set);
	const get = useThree((state) => state.get);
	const performance = useThree((state) => state.performance);
	const explCamera = camera || defaultCamera;
	const explDomElement = domElement || events.connected || gl.domElement;
	const controls = import_react.useMemo(() => new OrbitControls$1(explCamera), [explCamera]);
	useFrame(() => {
		if (controls.enabled) controls.update();
	}, -1);
	import_react.useEffect(() => {
		if (keyEvents) controls.connect(keyEvents === true ? explDomElement : keyEvents);
		controls.connect(explDomElement);
		return () => void controls.dispose();
	}, [
		keyEvents,
		explDomElement,
		regress,
		controls,
		invalidate
	]);
	import_react.useEffect(() => {
		const callback = (e) => {
			invalidate();
			if (regress) performance.regress();
			if (onChange) onChange(e);
		};
		const onStartCb = (e) => {
			if (onStart) onStart(e);
		};
		const onEndCb = (e) => {
			if (onEnd) onEnd(e);
		};
		controls.addEventListener("change", callback);
		controls.addEventListener("start", onStartCb);
		controls.addEventListener("end", onEndCb);
		return () => {
			controls.removeEventListener("start", onStartCb);
			controls.removeEventListener("end", onEndCb);
			controls.removeEventListener("change", callback);
		};
	}, [
		onChange,
		onStart,
		onEnd,
		controls,
		invalidate,
		setEvents
	]);
	import_react.useEffect(() => {
		if (makeDefault) {
			const old = get().controls;
			set({ controls });
			return () => set({ controls: old });
		}
	}, [makeDefault, controls]);
	return /*#__PURE__*/ import_react.createElement("primitive", _extends({
		ref,
		object: controls,
		enableDamping
	}, restProps));
});
//#endregion
//#region node_modules/@react-three/drei/core/TransformControls.js
var TransformControls = /* @__PURE__ */ import_react.forwardRef(({ children, domElement, onChange, onMouseDown, onMouseUp, onObjectChange, object, makeDefault, camera, enabled, axis, mode, translationSnap, rotationSnap, scaleSnap, space, size, showX, showY, showZ, ...props }, ref) => {
	const defaultControls = useThree((state) => state.controls);
	const gl = useThree((state) => state.gl);
	const events = useThree((state) => state.events);
	const defaultCamera = useThree((state) => state.camera);
	const invalidate = useThree((state) => state.invalidate);
	const get = useThree((state) => state.get);
	const set = useThree((state) => state.set);
	const explCamera = camera || defaultCamera;
	const explDomElement = domElement || events.connected || gl.domElement;
	const controls = import_react.useMemo(() => new TransformControls$1(explCamera, explDomElement), [explCamera, explDomElement]);
	const group = import_react.useRef(null);
	import_react.useLayoutEffect(() => {
		if (object) controls.attach(object instanceof Object3D ? object : object.current);
		else if (group.current instanceof Object3D) controls.attach(group.current);
		return () => void controls.detach();
	}, [
		object,
		children,
		controls
	]);
	import_react.useEffect(() => {
		if (defaultControls) {
			const callback = (event) => defaultControls.enabled = !event.value;
			controls.addEventListener("dragging-changed", callback);
			return () => controls.removeEventListener("dragging-changed", callback);
		}
	}, [controls, defaultControls]);
	const onChangeRef = import_react.useRef(void 0);
	const onMouseDownRef = import_react.useRef(void 0);
	const onMouseUpRef = import_react.useRef(void 0);
	const onObjectChangeRef = import_react.useRef(void 0);
	import_react.useLayoutEffect(() => void (onChangeRef.current = onChange), [onChange]);
	import_react.useLayoutEffect(() => void (onMouseDownRef.current = onMouseDown), [onMouseDown]);
	import_react.useLayoutEffect(() => void (onMouseUpRef.current = onMouseUp), [onMouseUp]);
	import_react.useLayoutEffect(() => void (onObjectChangeRef.current = onObjectChange), [onObjectChange]);
	import_react.useEffect(() => {
		const onChange = (e) => {
			invalidate();
			onChangeRef.current == null || onChangeRef.current(e);
		};
		const onMouseDown = (e) => onMouseDownRef.current == null ? void 0 : onMouseDownRef.current(e);
		const onMouseUp = (e) => onMouseUpRef.current == null ? void 0 : onMouseUpRef.current(e);
		const onObjectChange = (e) => onObjectChangeRef.current == null ? void 0 : onObjectChangeRef.current(e);
		controls.addEventListener("change", onChange);
		controls.addEventListener("mouseDown", onMouseDown);
		controls.addEventListener("mouseUp", onMouseUp);
		controls.addEventListener("objectChange", onObjectChange);
		return () => {
			controls.removeEventListener("change", onChange);
			controls.removeEventListener("mouseDown", onMouseDown);
			controls.removeEventListener("mouseUp", onMouseUp);
			controls.removeEventListener("objectChange", onObjectChange);
		};
	}, [invalidate, controls]);
	import_react.useEffect(() => {
		if (makeDefault) {
			const old = get().controls;
			set({ controls });
			return () => set({ controls: old });
		}
	}, [makeDefault, controls]);
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("primitive", {
		ref,
		object: controls,
		enabled,
		axis,
		mode,
		translationSnap,
		rotationSnap,
		scaleSnap,
		space,
		size,
		showX,
		showY,
		showZ
	}), /*#__PURE__*/ import_react.createElement("group", _extends({ ref: group }, props), children));
});
//#endregion
//#region node_modules/@react-three/drei/core/Hud.js
function RenderHud({ defaultScene, defaultCamera, renderPriority = 1 }) {
	const { gl, scene, camera } = useThree();
	let oldCLear;
	useFrame(() => {
		oldCLear = gl.autoClear;
		if (renderPriority === 1) {
			gl.autoClear = true;
			gl.render(defaultScene, defaultCamera);
		}
		gl.autoClear = false;
		gl.clearDepth();
		gl.render(scene, camera);
		gl.autoClear = oldCLear;
	}, renderPriority);
	return /*#__PURE__*/ import_react.createElement("group", { onPointerOver: () => null });
}
function Hud({ children, renderPriority = 1 }) {
	const { scene: defaultScene, camera: defaultCamera } = useThree();
	const [hudScene] = import_react.useState(() => new Scene());
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, createPortal(/*#__PURE__*/ import_react.createElement(import_react.Fragment, null, children, /*#__PURE__*/ import_react.createElement(RenderHud, {
		defaultScene,
		defaultCamera,
		renderPriority
	})), hudScene, { events: { priority: renderPriority + 1 } }));
}
//#endregion
//#region node_modules/@react-three/drei/core/GizmoHelper.js
var Context = /* @__PURE__ */ import_react.createContext({});
var useGizmoContext = () => {
	return import_react.useContext(Context);
};
var turnRate = 2 * Math.PI;
var dummy = /* @__PURE__ */ new Object3D();
var matrix = /* @__PURE__ */ new Matrix4();
var [q1, q2] = [/* @__PURE__ */ new Quaternion(), /* @__PURE__ */ new Quaternion()];
var target = /* @__PURE__ */ new Vector3();
var targetPosition = /* @__PURE__ */ new Vector3();
var isOrbitControls = (controls) => {
	return "minPolarAngle" in controls;
};
var isCameraControls = (controls) => {
	return "getTarget" in controls;
};
var GizmoHelper = ({ alignment = "bottom-right", margin = [80, 80], renderPriority = 1, onUpdate, onTarget, children }) => {
	const size = useThree((state) => state.size);
	const mainCamera = useThree((state) => state.camera);
	const defaultControls = useThree((state) => state.controls);
	const invalidate = useThree((state) => state.invalidate);
	const gizmoRef = import_react.useRef(null);
	const virtualCam = import_react.useRef(null);
	const animating = import_react.useRef(false);
	const radius = import_react.useRef(0);
	const focusPoint = import_react.useRef(new Vector3(0, 0, 0));
	const defaultUp = import_react.useRef(new Vector3(0, 0, 0));
	import_react.useEffect(() => {
		defaultUp.current.copy(mainCamera.up);
		dummy.up.copy(mainCamera.up);
	}, [mainCamera]);
	const tweenCamera = import_react.useCallback((direction) => {
		animating.current = true;
		if (defaultControls || onTarget) focusPoint.current = (onTarget == null ? void 0 : onTarget()) || (isCameraControls(defaultControls) ? defaultControls.getTarget(focusPoint.current) : defaultControls == null ? void 0 : defaultControls.target);
		radius.current = mainCamera.position.distanceTo(target);
		q1.copy(mainCamera.quaternion);
		targetPosition.copy(direction).multiplyScalar(radius.current).add(target);
		dummy.lookAt(targetPosition);
		q2.copy(dummy.quaternion);
		invalidate();
	}, [
		defaultControls,
		mainCamera,
		onTarget,
		invalidate
	]);
	useFrame((_, delta) => {
		if (virtualCam.current && gizmoRef.current) {
			var _gizmoRef$current;
			if (animating.current) {
				if (q1.angleTo(q2) < .01) {
					animating.current = false;
					if (isOrbitControls(defaultControls)) mainCamera.up.copy(defaultUp.current);
				} else {
					const step = delta * turnRate;
					q1.rotateTowards(q2, step);
					mainCamera.position.set(0, 0, 1).applyQuaternion(q1).multiplyScalar(radius.current).add(focusPoint.current);
					mainCamera.up.set(0, 1, 0).applyQuaternion(q1).normalize();
					mainCamera.quaternion.copy(q1);
					if (isCameraControls(defaultControls)) defaultControls.setPosition(mainCamera.position.x, mainCamera.position.y, mainCamera.position.z);
					if (onUpdate) onUpdate();
					else if (defaultControls) defaultControls.update(delta);
					invalidate();
				}
			}
			matrix.copy(mainCamera.matrix).invert();
			(_gizmoRef$current = gizmoRef.current) == null || _gizmoRef$current.quaternion.setFromRotationMatrix(matrix);
		}
	});
	const gizmoHelperContext = import_react.useMemo(() => ({ tweenCamera }), [tweenCamera]);
	const [marginX, marginY] = margin;
	const x = alignment.endsWith("-center") ? 0 : alignment.endsWith("-left") ? -size.width / 2 + marginX : size.width / 2 - marginX;
	const y = alignment.startsWith("center-") ? 0 : alignment.startsWith("top-") ? size.height / 2 - marginY : -size.height / 2 + marginY;
	return /*#__PURE__*/ import_react.createElement(Hud, { renderPriority }, /*#__PURE__*/ import_react.createElement(Context.Provider, { value: gizmoHelperContext }, /*#__PURE__*/ import_react.createElement(OrthographicCamera, {
		makeDefault: true,
		ref: virtualCam,
		position: [
			0,
			0,
			200
		]
	}), /*#__PURE__*/ import_react.createElement("group", {
		ref: gizmoRef,
		position: [
			x,
			y,
			0
		]
	}, children)));
};
//#endregion
//#region node_modules/@react-three/drei/core/GizmoViewport.js
function Axis({ scale = [
	.8,
	.05,
	.05
], color, rotation }) {
	return /*#__PURE__*/ import_react.createElement("group", { rotation }, /*#__PURE__*/ import_react.createElement("mesh", { position: [
		.4,
		0,
		0
	] }, /*#__PURE__*/ import_react.createElement("boxGeometry", { args: scale }), /*#__PURE__*/ import_react.createElement("meshBasicMaterial", {
		color,
		toneMapped: false
	})));
}
function AxisHead({ onClick, font, disabled, arcStyle, label, labelColor, axisHeadScale = 1, ...props }) {
	const gl = useThree((state) => state.gl);
	const texture = import_react.useMemo(() => {
		const canvas = document.createElement("canvas");
		canvas.width = 64;
		canvas.height = 64;
		const context = canvas.getContext("2d");
		context.beginPath();
		context.arc(32, 32, 16, 0, 2 * Math.PI);
		context.closePath();
		context.fillStyle = arcStyle;
		context.fill();
		if (label) {
			context.font = font;
			context.textAlign = "center";
			context.fillStyle = labelColor;
			context.fillText(label, 32, 41);
		}
		return new CanvasTexture(canvas);
	}, [
		arcStyle,
		label,
		labelColor,
		font
	]);
	const [active, setActive] = import_react.useState(false);
	const scale = (label ? 1 : .75) * (active ? 1.2 : 1) * axisHeadScale;
	const handlePointerOver = (e) => {
		e.stopPropagation();
		setActive(true);
	};
	const handlePointerOut = (e) => {
		e.stopPropagation();
		setActive(false);
	};
	return /*#__PURE__*/ import_react.createElement("sprite", _extends({
		scale,
		onPointerOver: !disabled ? handlePointerOver : void 0,
		onPointerOut: !disabled ? onClick || handlePointerOut : void 0
	}, props), /*#__PURE__*/ import_react.createElement("spriteMaterial", {
		map: texture,
		"map-anisotropy": gl.capabilities.getMaxAnisotropy() || 1,
		alphaTest: .3,
		opacity: label ? 1 : .75,
		toneMapped: false
	}));
}
var GizmoViewport = ({ hideNegativeAxes, hideAxisHeads, disabled, font = "18px Inter var, Arial, sans-serif", axisColors = [
	"#ff2060",
	"#20df80",
	"#2080ff"
], axisHeadScale = 1, axisScale, labels = [
	"X",
	"Y",
	"Z"
], labelColor = "#000", onClick, ...props }) => {
	const [colorX, colorY, colorZ] = axisColors;
	const { tweenCamera } = useGizmoContext();
	const axisHeadProps = {
		font,
		disabled,
		labelColor,
		onClick,
		axisHeadScale,
		onPointerDown: !disabled ? (e) => {
			tweenCamera(e.object.position);
			e.stopPropagation();
		} : void 0
	};
	return /*#__PURE__*/ import_react.createElement("group", _extends({ scale: 40 }, props), /*#__PURE__*/ import_react.createElement(Axis, {
		color: colorX,
		rotation: [
			0,
			0,
			0
		],
		scale: axisScale
	}), /*#__PURE__*/ import_react.createElement(Axis, {
		color: colorY,
		rotation: [
			0,
			0,
			Math.PI / 2
		],
		scale: axisScale
	}), /*#__PURE__*/ import_react.createElement(Axis, {
		color: colorZ,
		rotation: [
			0,
			-Math.PI / 2,
			0
		],
		scale: axisScale
	}), !hideAxisHeads && /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(AxisHead, _extends({
		arcStyle: colorX,
		position: [
			1,
			0,
			0
		],
		label: labels[0]
	}, axisHeadProps)), /*#__PURE__*/ import_react.createElement(AxisHead, _extends({
		arcStyle: colorY,
		position: [
			0,
			1,
			0
		],
		label: labels[1]
	}, axisHeadProps)), /*#__PURE__*/ import_react.createElement(AxisHead, _extends({
		arcStyle: colorZ,
		position: [
			0,
			0,
			1
		],
		label: labels[2]
	}, axisHeadProps)), !hideNegativeAxes && /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(AxisHead, _extends({
		arcStyle: colorX,
		position: [
			-1,
			0,
			0
		]
	}, axisHeadProps)), /*#__PURE__*/ import_react.createElement(AxisHead, _extends({
		arcStyle: colorY,
		position: [
			0,
			-1,
			0
		]
	}, axisHeadProps)), /*#__PURE__*/ import_react.createElement(AxisHead, _extends({
		arcStyle: colorZ,
		position: [
			0,
			0,
			-1
		]
	}, axisHeadProps)))));
};
//#endregion
//#region node_modules/@react-three/drei/core/Grid.js
var GridMaterial = /* @__PURE__ */ shaderMaterial({
	cellSize: .5,
	sectionSize: 1,
	fadeDistance: 100,
	fadeStrength: 1,
	fadeFrom: 1,
	cellThickness: .5,
	sectionThickness: 1,
	cellColor: /* @__PURE__ */ new Color(),
	sectionColor: /* @__PURE__ */ new Color(),
	infiniteGrid: false,
	followCamera: false,
	worldCamProjPosition: /* @__PURE__ */ new Vector3(),
	worldPlanePosition: /* @__PURE__ */ new Vector3()
}, `
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `, `
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
    }
  `);
var Grid = /* @__PURE__ */ import_react.forwardRef(({ args, cellColor = "#000000", sectionColor = "#2080ff", cellSize = .5, sectionSize = 1, followCamera = false, infiniteGrid = false, fadeDistance = 100, fadeStrength = 1, fadeFrom = 1, cellThickness = .5, sectionThickness = 1, side = 1, ...props }, fRef) => {
	extend({ GridMaterial });
	const ref = import_react.useRef(null);
	import_react.useImperativeHandle(fRef, () => ref.current, []);
	const plane = new Plane();
	const upVector = new Vector3(0, 1, 0);
	const zeroVector = new Vector3(0, 0, 0);
	useFrame((state) => {
		plane.setFromNormalAndCoplanarPoint(upVector, zeroVector).applyMatrix4(ref.current.matrixWorld);
		const gridMaterial = ref.current.material;
		const worldCamProjPosition = gridMaterial.uniforms.worldCamProjPosition;
		const worldPlanePosition = gridMaterial.uniforms.worldPlanePosition;
		plane.projectPoint(state.camera.position, worldCamProjPosition.value);
		worldPlanePosition.value.set(0, 0, 0).applyMatrix4(ref.current.matrixWorld);
	});
	const uniforms1 = {
		cellSize,
		sectionSize,
		cellColor,
		sectionColor,
		cellThickness,
		sectionThickness
	};
	const uniforms2 = {
		fadeDistance,
		fadeStrength,
		fadeFrom,
		infiniteGrid,
		followCamera
	};
	return /*#__PURE__*/ import_react.createElement("mesh", _extends({
		ref,
		frustumCulled: false
	}, props), /*#__PURE__*/ import_react.createElement("gridMaterial", _extends({
		transparent: true,
		"extensions-derivatives": true,
		side
	}, uniforms1, uniforms2)), /*#__PURE__*/ import_react.createElement("planeGeometry", { args }));
});
//#endregion
//#region node_modules/@react-three/drei/helpers/environment-assets.js
var presetsObj = {
	apartment: "lebombo_1k.hdr",
	city: "potsdamer_platz_1k.hdr",
	dawn: "kiara_1_dawn_1k.hdr",
	forest: "forest_slope_1k.hdr",
	lobby: "st_fagans_interior_1k.hdr",
	night: "dikhololo_night_1k.hdr",
	park: "rooitou_park_1k.hdr",
	studio: "studio_small_03_1k.hdr",
	sunset: "venice_sunset_1k.hdr",
	warehouse: "empty_warehouse_01_1k.hdr"
};
//#endregion
//#region node_modules/@react-three/drei/core/useEnvironment.js
var CUBEMAP_ROOT = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/";
var isArray = (arr) => Array.isArray(arr);
var defaultFiles = [
	"/px.png",
	"/nx.png",
	"/py.png",
	"/ny.png",
	"/pz.png",
	"/nz.png"
];
function useEnvironment({ files = defaultFiles, path = "", preset = void 0, colorSpace = void 0, extensions } = {}) {
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
		path = CUBEMAP_ROOT;
	}
	const multiFile = isArray(files);
	const { extension, isCubemap } = getExtension(files);
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	const gl = useThree((state) => state.gl);
	(0, import_react.useLayoutEffect)(() => {
		if (extension !== "webp" && extension !== "jpg" && extension !== "jpeg") return;
		function clearGainmapTexture() {
			useLoader.clear(loader, multiFile ? [files] : files);
		}
		gl.domElement.addEventListener("webglcontextlost", clearGainmapTexture, { once: true });
	}, [files, gl.domElement]);
	const loaderResult = useLoader(loader, multiFile ? [files] : files, (loader) => {
		if (extension === "webp" || extension === "jpg" || extension === "jpeg") loader.setRenderer(gl);
		loader.setPath == null || loader.setPath(path);
		if (extensions) extensions(loader);
	});
	let texture = multiFile ? loaderResult[0] : loaderResult;
	if (extension === "jpg" || extension === "jpeg" || extension === "webp") {
		var _renderTarget;
		texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
	}
	texture.mapping = isCubemap ? 301 : 303;
	texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? "srgb" : "srgb-linear";
	return texture;
}
var preloadDefaultOptions = {
	files: defaultFiles,
	path: "",
	preset: void 0,
	extensions: void 0
};
useEnvironment.preload = (preloadOptions) => {
	const options = {
		...preloadDefaultOptions,
		...preloadOptions
	};
	let { files, path = "" } = options;
	const { preset, extensions } = options;
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
		path = CUBEMAP_ROOT;
	}
	const { extension } = getExtension(files);
	if (extension === "webp" || extension === "jpg" || extension === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	useLoader.preload(loader, isArray(files) ? [files] : files, (loader) => {
		loader.setPath == null || loader.setPath(path);
		if (extensions) extensions(loader);
	});
};
var clearDefaultOptins = {
	files: defaultFiles,
	preset: void 0
};
useEnvironment.clear = (clearOptions) => {
	const options = {
		...clearDefaultOptins,
		...clearOptions
	};
	let { files } = options;
	const { preset } = options;
	if (preset) {
		validatePreset(preset);
		files = presetsObj[preset];
	}
	const { extension } = getExtension(files);
	const loader = getLoader(extension);
	if (!loader) throw new Error("useEnvironment: Unrecognized file extension: " + files);
	useLoader.clear(loader, isArray(files) ? [files] : files);
};
function validatePreset(preset) {
	if (!(preset in presetsObj)) throw new Error("Preset must be one of: " + Object.keys(presetsObj).join(", "));
}
function getExtension(files) {
	var _firstEntry$split$pop;
	const isCubemap = isArray(files) && files.length === 6;
	const isGainmap = isArray(files) && files.length === 3 && files.some((file) => file.endsWith("json"));
	const firstEntry = isArray(files) ? files[0] : files;
	return {
		extension: isCubemap ? "cube" : isGainmap ? "webp" : firstEntry.startsWith("data:application/exr") ? "exr" : firstEntry.startsWith("data:application/hdr") ? "hdr" : firstEntry.startsWith("data:image/jpeg") ? "jpg" : (_firstEntry$split$pop = firstEntry.split(".").pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split("?")) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase(),
		isCubemap,
		isGainmap
	};
}
function getLoader(extension) {
	return extension === "cube" ? CubeTextureLoader : extension === "hdr" ? RGBELoader : extension === "exr" ? EXRLoader : extension === "jpg" || extension === "jpeg" ? HDRJPGLoader : extension === "webp" ? GainMapLoader : null;
}
//#endregion
//#region node_modules/@react-three/drei/core/Environment.js
var isRef = (obj) => obj.current && obj.current.isScene;
var resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
	var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
	sceneProps = {
		backgroundBlurriness: 0,
		backgroundIntensity: 1,
		backgroundRotation: [
			0,
			0,
			0
		],
		environmentIntensity: 1,
		environmentRotation: [
			0,
			0,
			0
		],
		...sceneProps
	};
	const target = resolveScene(scene || defaultScene);
	const oldbg = target.background;
	const oldenv = target.environment;
	const oldSceneProps = {
		backgroundBlurriness: target.backgroundBlurriness,
		backgroundIntensity: target.backgroundIntensity,
		backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [
			0,
			0,
			0
		],
		environmentIntensity: target.environmentIntensity,
		environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [
			0,
			0,
			0
		]
	};
	if (background !== "only") target.environment = texture;
	if (background) target.background = texture;
	applyProps(target, sceneProps);
	return () => {
		if (background !== "only") target.environment = oldenv;
		if (background) target.background = oldbg;
		applyProps(target, oldSceneProps);
	};
}
function EnvironmentMap({ scene, background = false, map, ...config }) {
	const defaultScene = useThree((state) => state.scene);
	import_react.useLayoutEffect(() => {
		if (map) return setEnvProps(background, scene, defaultScene, map, config);
	});
	return null;
}
function EnvironmentCube({ background = false, scene, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, ...rest }) {
	const texture = useEnvironment(rest);
	const defaultScene = useThree((state) => state.scene);
	import_react.useLayoutEffect(() => {
		return setEnvProps(background, scene, defaultScene, texture, {
			backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
			backgroundIntensity,
			backgroundRotation,
			environmentIntensity,
			environmentRotation
		});
	});
	import_react.useEffect(() => {
		return () => {
			texture.dispose();
		};
	}, [texture]);
	return null;
}
function EnvironmentPortal({ children, near = .1, far = 1e3, resolution = 256, frames = 1, map, background = false, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, scene, files, path, preset = void 0, extensions }) {
	const gl = useThree((state) => state.gl);
	const defaultScene = useThree((state) => state.scene);
	const camera = import_react.useRef(null);
	const [virtualScene] = import_react.useState(() => new Scene());
	const fbo = import_react.useMemo(() => {
		const fbo = new WebGLCubeRenderTarget(resolution);
		fbo.texture.type = HalfFloatType;
		return fbo;
	}, [resolution]);
	import_react.useEffect(() => {
		return () => {
			fbo.dispose();
		};
	}, [fbo]);
	import_react.useLayoutEffect(() => {
		if (frames === 1) {
			const autoClear = gl.autoClear;
			gl.autoClear = true;
			camera.current.update(gl, virtualScene);
			gl.autoClear = autoClear;
		}
		return setEnvProps(background, scene, defaultScene, fbo.texture, {
			backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
			backgroundIntensity,
			backgroundRotation,
			environmentIntensity,
			environmentRotation
		});
	}, [
		children,
		virtualScene,
		fbo.texture,
		scene,
		defaultScene,
		background,
		frames,
		gl
	]);
	let count = 1;
	useFrame(() => {
		if (frames === Infinity || count < frames) {
			const autoClear = gl.autoClear;
			gl.autoClear = true;
			camera.current.update(gl, virtualScene);
			gl.autoClear = autoClear;
			count++;
		}
	});
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, createPortal(/*#__PURE__*/ import_react.createElement(import_react.Fragment, null, children, /*#__PURE__*/ import_react.createElement("cubeCamera", {
		ref: camera,
		args: [
			near,
			far,
			fbo
		]
	}), files || preset ? /*#__PURE__*/ import_react.createElement(EnvironmentCube, {
		background: true,
		files,
		preset,
		path,
		extensions
	}) : map ? /*#__PURE__*/ import_react.createElement(EnvironmentMap, {
		background: true,
		map,
		extensions
	}) : null), virtualScene));
}
function EnvironmentGround(props) {
	var _props$ground, _props$ground2, _scale, _props$ground3;
	const textureDefault = useEnvironment(props);
	const texture = props.map || textureDefault;
	import_react.useMemo(() => extend({ GroundProjectedEnvImpl: GroundProjectedEnv }), []);
	import_react.useEffect(() => {
		return () => {
			textureDefault.dispose();
		};
	}, [textureDefault]);
	const args = import_react.useMemo(() => [texture], [texture]);
	const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
	const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
	const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1e3;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement(EnvironmentMap, _extends({}, props, { map: texture })), /*#__PURE__*/ import_react.createElement("groundProjectedEnvImpl", {
		args,
		scale,
		height,
		radius
	}));
}
function Environment(props) {
	return props.ground ? /*#__PURE__*/ import_react.createElement(EnvironmentGround, props) : props.map ? /*#__PURE__*/ import_react.createElement(EnvironmentMap, props) : props.children ? /*#__PURE__*/ import_react.createElement(EnvironmentPortal, props) : /*#__PURE__*/ import_react.createElement(EnvironmentCube, props);
}
//#endregion
//#region node_modules/@react-three/drei/core/ContactShadows.js
var ContactShadows = /* @__PURE__ */ import_react.forwardRef(({ scale = 10, frames = Infinity, opacity = 1, width = 1, height = 1, blur = 1, near = 0, far = 10, resolution = 512, smooth = true, color = "#000000", depthWrite = false, renderOrder, ...props }, fref) => {
	const ref = import_react.useRef(null);
	const scene = useThree((state) => state.scene);
	const gl = useThree((state) => state.gl);
	const shadowCamera = import_react.useRef(null);
	width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
	height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
	const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = import_react.useMemo(() => {
		const renderTarget = new WebGLRenderTarget(resolution, resolution);
		const renderTargetBlur = new WebGLRenderTarget(resolution, resolution);
		renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
		const planeGeometry = new PlaneGeometry(width, height).rotateX(Math.PI / 2);
		const blurPlane = new Mesh(planeGeometry);
		const depthMaterial = new MeshDepthMaterial();
		depthMaterial.depthTest = depthMaterial.depthWrite = false;
		depthMaterial.onBeforeCompile = (shader) => {
			shader.uniforms = {
				...shader.uniforms,
				ucolor: { value: new Color(color) }
			};
			shader.fragmentShader = shader.fragmentShader.replace(`void main() {`, `uniform vec3 ucolor;
           void main() {
          `);
			shader.fragmentShader = shader.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );", "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );");
		};
		const horizontalBlurMaterial = new ShaderMaterial(HorizontalBlurShader);
		const verticalBlurMaterial = new ShaderMaterial(VerticalBlurShader);
		verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
		return [
			renderTarget,
			planeGeometry,
			depthMaterial,
			blurPlane,
			horizontalBlurMaterial,
			verticalBlurMaterial,
			renderTargetBlur
		];
	}, [
		resolution,
		width,
		height,
		scale,
		color
	]);
	const blurShadows = (blur) => {
		blurPlane.visible = true;
		blurPlane.material = horizontalBlurMaterial;
		horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
		horizontalBlurMaterial.uniforms.h.value = blur * 1 / 256;
		gl.setRenderTarget(renderTargetBlur);
		gl.render(blurPlane, shadowCamera.current);
		blurPlane.material = verticalBlurMaterial;
		verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
		verticalBlurMaterial.uniforms.v.value = blur * 1 / 256;
		gl.setRenderTarget(renderTarget);
		gl.render(blurPlane, shadowCamera.current);
		blurPlane.visible = false;
	};
	let count = 0;
	let initialBackground;
	let initialOverrideMaterial;
	useFrame(() => {
		if (shadowCamera.current && (frames === Infinity || count < frames)) {
			count++;
			initialBackground = scene.background;
			initialOverrideMaterial = scene.overrideMaterial;
			ref.current.visible = false;
			scene.background = null;
			scene.overrideMaterial = depthMaterial;
			gl.setRenderTarget(renderTarget);
			gl.render(scene, shadowCamera.current);
			blurShadows(blur);
			if (smooth) blurShadows(blur * .4);
			gl.setRenderTarget(null);
			ref.current.visible = true;
			scene.overrideMaterial = initialOverrideMaterial;
			scene.background = initialBackground;
		}
	});
	import_react.useImperativeHandle(fref, () => ref.current, []);
	return /*#__PURE__*/ import_react.createElement("group", _extends({ "rotation-x": Math.PI / 2 }, props, { ref }), /*#__PURE__*/ import_react.createElement("mesh", {
		renderOrder,
		geometry: planeGeometry,
		scale: [
			1,
			-1,
			1
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		]
	}, /*#__PURE__*/ import_react.createElement("meshBasicMaterial", {
		transparent: true,
		map: renderTarget.texture,
		opacity,
		depthWrite
	})), /*#__PURE__*/ import_react.createElement("orthographicCamera", {
		ref: shadowCamera,
		args: [
			-width / 2,
			width / 2,
			height / 2,
			-height / 2,
			near,
			far
		]
	}));
});
//#endregion
export { GizmoHelper as a, Text as c, useFrame as d, useThree as f, require_react as g, require_jsx_runtime as h, GizmoViewport as i, Canvas as l, createStore$1 as m, Environment as n, TransformControls as o, require_with_selector as p, Grid as r, OrbitControls as s, ContactShadows as t, extend as u };
