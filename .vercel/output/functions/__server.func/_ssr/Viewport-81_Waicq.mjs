import { i as __toESM } from "../_runtime.mjs";
import { a as GizmoHelper, c as Text, d as useFrame, f as useThree, g as require_react, h as require_jsx_runtime, i as GizmoViewport, l as Canvas, n as Environment, o as TransformControls, r as Grid, s as OrbitControls, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { Ht as Raycaster, fn as Vector2, pn as Vector3 } from "../_libs/monogrid__gainmap-js+three.mjs";
import { t as RectAreaLightUniformsLib } from "../_libs/three.mjs";
import { a as useStudio, i as evalObjectAtFrame, n as registerCapture, o as evaluateGeometry, r as captureRender, s as geometrySignature } from "./routes-OE8atDG2.mjs";
import { n as EffectComposer, r as Vignette, t as Bloom } from "../_libs/@react-three/postprocessing+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Viewport-81_Waicq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
RectAreaLightUniformsLib.init();
function useLive(obj) {
	const frame = useStudio((s) => s.frame);
	const live = evalObjectAtFrame(obj, frame);
	if (useStudio((s) => s.transformDragging && s.activeId === obj.id)) return {
		position: void 0,
		rotation: void 0,
		scale: void 0,
		skip: true
	};
	return {
		...live,
		skip: false
	};
}
function StudioMesh({ obj, selected }) {
	const shading = useStudio((s) => s.shading);
	const sig = geometrySignature(obj);
	const geo = (0, import_react.useMemo)(() => evaluateGeometry(obj), [obj, sig]);
	(0, import_react.useEffect)(() => () => geo.dispose(), [geo]);
	const live = useLive(obj);
	const mat = obj.material;
	const common = {
		color: mat.color,
		roughness: mat.roughness,
		metalness: mat.metalness,
		emissive: mat.emissive,
		emissiveIntensity: mat.emissiveIntensity,
		wireframe: shading === "wire" || mat.wireframe,
		flatShading: mat.flat,
		transparent: mat.opacity < .999 || mat.transmission > .01,
		opacity: mat.opacity,
		side: 2
	};
	const material = shading === "wire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
		color: selected ? "#e07820" : "#9aa0a8",
		wireframe: true
	}) : shading === "solid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshLambertMaterial", {
		color: mat.color,
		wireframe: mat.wireframe,
		flatShading: mat.flat
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
		...common,
		transmission: mat.transmission,
		thickness: mat.thickness,
		ior: mat.ior,
		clearcoat: mat.clearcoat,
		clearcoatRoughness: mat.clearcoatRoughness,
		envMapIntensity: mat.envMapIntensity,
		iridescence: mat.iridescence,
		sheen: mat.sheen,
		sheenRoughness: .4
	});
	const isText = obj.primitive === "text";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		name: obj.id,
		position: live.skip ? void 0 : live.position,
		rotation: live.skip ? void 0 : live.rotation,
		scale: live.skip ? void 0 : live.scale,
		visible: obj.visible,
		userData: { id: obj.id },
		onClick: (e) => {
			e.stopPropagation();
			useStudio.getState().select(obj.id, e.shiftKey);
		},
		children: [isText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			fontSize: Number(obj.params.size) || .55,
			color: mat.color,
			anchorX: "center",
			anchorY: "middle",
			depthOffset: -1,
			children: String(obj.params.text || "LUMINA")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: geo,
			castShadow: true,
			receiveShadow: true,
			children: material
		}), selected && shading !== "wire" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: geo,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#e07820",
				wireframe: true,
				transparent: true,
				opacity: .35
			})
		})]
	});
}
function LightNode({ obj, selected }) {
	const live = useLive(obj);
	const L = obj.light;
	if (!L) return null;
	const color = L.color;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		name: obj.id,
		position: live.skip ? void 0 : live.position,
		rotation: live.skip ? void 0 : live.rotation,
		visible: obj.visible,
		userData: { id: obj.id },
		onClick: (e) => {
			e.stopPropagation();
			useStudio.getState().select(obj.id, e.shiftKey);
		},
		children: [
			L.type === "sun" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				color,
				intensity: L.intensity,
				castShadow: L.castShadow,
				"shadow-mapSize": [2048, 2048],
				"shadow-bias": -2e-4
			}),
			L.type === "point" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				color,
				intensity: L.intensity,
				distance: L.distance,
				castShadow: L.castShadow
			}),
			L.type === "spot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				color,
				intensity: L.intensity,
				angle: L.angle,
				penumbra: .35,
				distance: L.distance,
				castShadow: L.castShadow
			}),
			L.type === "area" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rectAreaLight", {
				color,
				intensity: L.intensity,
				width: L.width,
				height: L.height
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.12,
				12,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: selected ? "#e07820" : color })] })
		]
	});
}
function CameraNode({ obj, selected }) {
	const live = useLive(obj);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		name: obj.id,
		position: live.skip ? void 0 : live.position,
		rotation: live.skip ? void 0 : live.rotation,
		visible: obj.visible,
		userData: { id: obj.id },
		onClick: (e) => {
			e.stopPropagation();
			useStudio.getState().select(obj.id, e.shiftKey);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.28,
			.2,
			.4
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: selected ? "#e07820" : "#3a3c44",
			metalness: .4,
			roughness: .4
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				0,
				-.28
			],
			rotation: [
				Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
				.14,
				.22,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#222" })]
		})]
	});
}
function EmptyNode({ obj, selected }) {
	const live = useLive(obj);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		name: obj.id,
		position: live.skip ? void 0 : live.position,
		rotation: live.skip ? void 0 : live.rotation,
		scale: live.skip ? void 0 : live.scale,
		visible: obj.visible,
		userData: { id: obj.id },
		onClick: (e) => {
			e.stopPropagation();
			useStudio.getState().select(obj.id, e.shiftKey);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("axesHelper", { args: [.6] }), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.1, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#e07820" })] })]
	});
}
function Nodes() {
	const objects = useStudio((s) => s.objects);
	const selected = useStudio((s) => s.selectedIds);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: objects.map((obj) => {
		const sel = selected.includes(obj.id);
		if (obj.kind === "mesh") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioMesh, {
			obj,
			selected: sel
		}, obj.id);
		if (obj.kind === "light") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightNode, {
			obj,
			selected: sel
		}, obj.id);
		if (obj.kind === "camera") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraNode, {
			obj,
			selected: sel
		}, obj.id);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyNode, {
			obj,
			selected: sel
		}, obj.id);
	}) });
}
function Gizmo() {
	const show = useStudio((s) => s.showGizmo);
	const mode = useStudio((s) => s.transformMode);
	const activeId = useStudio((s) => s.activeId);
	const appMode = useStudio((s) => s.mode);
	const objectsLen = useStudio((s) => s.objects.length);
	const { scene } = useThree();
	const [target, setTarget] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!activeId) {
			setTarget(null);
			return;
		}
		const obj = scene.getObjectByName(activeId) ?? null;
		setTarget(obj);
	}, [
		activeId,
		scene,
		objectsLen
	]);
	if (!show || appMode === "sculpt" || !target) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransformControls, {
		object: target,
		mode,
		onMouseDown: () => {
			useStudio.getState().setTransformDragging(true);
			useStudio.getState().pushHistory();
		},
		onMouseUp: () => {
			useStudio.getState().setTransformDragging(false);
			const id = target.name;
			useStudio.getState().updateObject(id, {
				position: [
					target.position.x,
					target.position.y,
					target.position.z
				],
				rotation: [
					target.rotation.x,
					target.rotation.y,
					target.rotation.z
				],
				scale: [
					target.scale.x,
					target.scale.y,
					target.scale.z
				]
			});
			if (useStudio.getState().autoKey) useStudio.getState().insertKeyframe(id);
		}
	});
}
function SculptLayer() {
	const mode = useStudio((s) => s.mode);
	const sculpt = useStudio((s) => s.sculpt);
	const activeId = useStudio((s) => s.activeId);
	const { camera, gl, scene } = useThree();
	const painting = (0, import_react.useRef)(false);
	const ray = (0, import_react.useMemo)(() => new Raycaster(), []);
	const pointer = (0, import_react.useMemo)(() => new Vector2(), []);
	(0, import_react.useEffect)(() => {
		if (mode !== "sculpt") return;
		const el = gl.domElement;
		const ndc = (e) => {
			const r = el.getBoundingClientRect();
			pointer.x = (e.clientX - r.left) / r.width * 2 - 1;
			pointer.y = -((e.clientY - r.top) / r.height) * 2 + 1;
		};
		const apply = () => {
			if (!activeId) return;
			const mesh = scene.getObjectByName(activeId)?.getObjectByProperty("type", "Mesh");
			if (!mesh?.geometry) return;
			ray.setFromCamera(pointer, camera);
			const hits = ray.intersectObject(mesh, true);
			if (!hits[0]) return;
			const geo = mesh.geometry;
			const pos = geo.getAttribute("position");
			const local = mesh.worldToLocal(hits[0].point.clone());
			const radius = sculpt.radius;
			const strength = sculpt.strength * .22;
			const v = new Vector3();
			const n = new Vector3();
			const nor = geo.getAttribute("normal");
			for (let i = 0; i < pos.count; i++) {
				v.fromBufferAttribute(pos, i);
				const d = v.distanceTo(local);
				if (d > radius) continue;
				const w = 1 - d / radius;
				const fall = w * w * (3 - 2 * w);
				if (nor) n.fromBufferAttribute(nor, i);
				else n.copy(v).normalize();
				if (sculpt.brush === "smooth") v.lerp(local, strength * fall * .2);
				else v.addScaledVector(n, strength * fall * (sculpt.brush === "inflate" ? 1.4 : 1));
				pos.setXYZ(i, v.x, v.y, v.z);
			}
			pos.needsUpdate = true;
			geo.computeVertexNormals();
		};
		const down = (e) => {
			if (e.button !== 0) return;
			painting.current = true;
			ndc(e);
			apply();
		};
		const move = (e) => {
			if (!painting.current) return;
			ndc(e);
			apply();
		};
		const up = () => {
			if (!painting.current) return;
			painting.current = false;
			if (!activeId) return;
			const mesh = scene.getObjectByName(activeId)?.getObjectByProperty("type", "Mesh");
			if (!mesh) return;
			const geo = mesh.geometry;
			const pos = geo.getAttribute("position");
			const nrm = geo.getAttribute("normal");
			useStudio.getState().updateObject(activeId, {
				primitive: "baked",
				baked: {
					position: Array.from(pos.array),
					normal: nrm ? Array.from(nrm.array) : void 0,
					index: geo.index ? Array.from(geo.index.array) : void 0
				}
			});
		};
		el.addEventListener("pointerdown", down);
		window.addEventListener("pointermove", move);
		window.addEventListener("pointerup", up);
		return () => {
			el.removeEventListener("pointerdown", down);
			window.removeEventListener("pointermove", move);
			window.removeEventListener("pointerup", up);
		};
	}, [
		mode,
		sculpt,
		activeId,
		camera,
		gl,
		scene,
		pointer,
		ray
	]);
	return null;
}
function Animator() {
	const acc = (0, import_react.useRef)(0);
	useFrame((_, dt) => {
		const s = useStudio.getState();
		if (!s.playing) return;
		acc.current += Math.min(dt, .1);
		const spf = 1 / Math.max(1, s.fps);
		while (acc.current >= spf) {
			acc.current -= spf;
			let f = s.frame + 1;
			if (f > s.frameEnd) f = s.frameStart;
			s.setFrame(f);
		}
	});
	return null;
}
function CaptureBinder() {
	const { gl, scene, camera } = useThree();
	(0, import_react.useEffect)(() => {
		registerCapture(() => {
			const url = captureRender(gl, scene, camera, 1920, 1080);
			useStudio.getState().setRenderDataUrl(url);
			return url;
		});
	}, [
		gl,
		scene,
		camera
	]);
	return null;
}
function LightsFill() {
	if (useStudio((s) => s.shading) === "rendered") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
		"#d7dce4",
		"#2a2c32",
		.55
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .22 })] });
}
function WorldFx() {
	const shading = useStudio((s) => s.shading);
	const env = useStudio((s) => s.envPreset);
	const intensity = useStudio((s) => s.envIntensity);
	const bloom = useStudio((s) => s.bloom);
	const showGrid = useStudio((s) => s.showGrid);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(shading === "material" || shading === "rendered") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, {
			preset: env,
			background: shading === "rendered",
			environmentIntensity: intensity
		}),
		showGrid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid, {
			infiniteGrid: true,
			fadeDistance: 40,
			fadeStrength: 1,
			sectionColor: "#3e4048",
			cellColor: "#2a2c32",
			sectionSize: 2,
			cellSize: .5,
			position: [
				0,
				.001,
				0
			]
		}),
		shading !== "wire" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
			position: [
				0,
				0,
				0
			],
			opacity: .45,
			scale: 18,
			blur: 2.2,
			far: 8
		}),
		shading === "rendered" && bloom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EffectComposer, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bloom, {
			luminanceThreshold: 1.05,
			intensity: .45,
			mipmapBlur: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vignette, {
			darkness: .45,
			offset: .25
		})] })
	] });
}
function Viewport() {
	const mode = useStudio((s) => s.mode);
	const shading = useStudio((s) => s.shading);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "h-full w-full touch-none bg-viewport",
		shadows: true,
		dpr: [1, 1.75],
		gl: {
			preserveDrawingBuffer: true,
			antialias: true,
			toneMapping: 4,
			toneMappingExposure: 1.05
		},
		camera: {
			position: [
				6.6,
				4.1,
				7.4
			],
			fov: 40,
			near: .05,
			far: 250
		},
		onPointerMissed: () => useStudio.getState().clearSelection(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: [shading === "rendered" ? "#0e0f12" : "#1a1b1f"]
			}),
			shading !== "rendered" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					"#1a1b1f",
					22,
					60
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				makeDefault: true,
				enableDamping: true,
				dampingFactor: .12,
				enableRotate: mode !== "sculpt",
				minDistance: 1,
				maxDistance: 80,
				maxPolarAngle: Math.PI * .49
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightsFill, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nodes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldFx, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gizmo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SculptLayer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Animator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaptureBinder, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GizmoHelper, {
				alignment: "bottom-right",
				margin: [56, 56],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GizmoViewport, {
					axisColors: [
						"#c45c4a",
						"#6aa56f",
						"#5b7cbc"
					],
					labelColor: "#e8e8ea"
				})
			})
		]
	});
}
//#endregion
export { Viewport };
