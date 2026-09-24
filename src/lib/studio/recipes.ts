export interface Recipe {
  id: string;
  cat: "model" | "lookdev" | "arch" | "anim" | "fx";
  title: { fa: string; en: string };
  blurb: { fa: string; en: string };
  code: string;
}

export const RECIPES: Recipe[] = [
  {
    id: "gear",
    cat: "model",
    title: { fa: "چرخ‌دنده برنجی", en: "Brass gear" },
    blurb: { fa: "چرخ‌دنده پارامتریک با متریال فلزی", en: "Parametric gear with metal lookdev" },
    code: `import bpy
from math import pi

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_gear_add(teeth=18, radius=1.15, depth=0.24, hole=0.2, location=(0, 0.2, 0))
g = bpy.context.object
g.name = "Gear"
g.material.base_color = (0.83, 0.62, 0.2, 1)
g.material.metallic = 1.0
g.material.roughness = 0.26
bpy.ops.object.modifier_add(type='BEVEL')
bpy.ops.mesh.primitive_cylinder_add(radius=0.16, depth=0.9, location=(0, 0.15, 0))
ax = bpy.context.object
ax.name = "Axle"
ax.material.base_color = (0.7, 0.7, 0.72)
ax.material.metallic = 1
ax.material.roughness = 0.18
bpy.ops.lighting.three_point()
print("Gear assembled")
`,
  },
  {
    id: "orbit",
    cat: "fx",
    title: { fa: "مدار کره‌ها", en: "Orbiting spheres" },
    blurb: { fa: "آرایه قطبی با حلقه و متریال شیشه", en: "Polar array of glass spheres" },
    code: `import bpy
from math import sin, cos, pi

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_ico_sphere_add(radius=0.55, subdiv=2, location=(0, 0.7, 0))
core = bpy.context.object
core.name = "Core"
core.material.base_color = (1.0, 0.45, 0.12)
core.material.emission_strength = 2.4
core.material.roughness = 0.2

n = 12
for i in range(n):
    a = i / n * 2 * pi
    x = cos(a) * 2.2
    z = sin(a) * 2.2
    bpy.ops.mesh.primitive_uv_sphere_add(radius=0.22, location=(x, 0.55, z))
    s = bpy.context.object
    s.name = "Orb_" + str(i)
    s.material.transmission = 0.92
    s.material.roughness = 0.04
    s.material.ior = 1.5
    s.material.base_color = (0.85, 0.93, 1.0)

bpy.ops.mesh.primitive_torus_add(radius=2.2, tube=0.04, location=(0, 0.55, 0))
ring = bpy.context.object
ring.name = "Ring"
ring.material.metallic = 1
ring.material.roughness = 0.12
bpy.ops.lighting.studio(preset='night')
print(n, "orbs")
`,
  },
  {
    id: "arch",
    cat: "arch",
    title: { fa: "ایوان و ستون", en: "Colonnade" },
    blurb: { fa: "ستون‌های مرمری، پله و گلدان مسی", en: "Marble columns, stairs and a copper urn" },
    code: `import bpy

bpy.ops.scene.arch_setup()
print("Architecture block ready")
`,
  },
  {
    id: "dna",
    cat: "model",
    title: { fa: "مارپیچ دی‌ان‌ای", en: "DNA helix" },
    blurb: { fa: "تیوب مارپیچ دوتایی علمی", en: "Scientific double helix" },
    code: `import bpy

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_dna_add(turns=5, radius=0.42, height=3.0, location=(0, 1.5, 0))
h = bpy.context.object
h.name = "Helix"
h.material.base_color = (0.25, 0.62, 0.95)
h.material.roughness = 0.22
h.material.metallic = 0.15
bpy.ops.lighting.three_point()
print("DNA built")
`,
  },
  {
    id: "goldknot",
    cat: "lookdev",
    title: { fa: "لوک‌دو طلا", en: "Gold lookdev" },
    blurb: { fa: "گره طلا، شیشه و کروم روی میز استودیو", en: "Gold knot, glass and chrome on a studio table" },
    code: `import bpy

bpy.ops.scene.lookdev_setup()
obj = bpy.data.objects.get("HeroKnot")
if obj:
    obj.material.metallic = 1
    obj.material.roughness = 0.18
print("Lookdev stage")
`,
  },
  {
    id: "forest",
    cat: "fx",
    title: { fa: "بیشه رویه‌ای", en: "Procedural grove" },
    blurb: { fa: "درخت و صخره با نویز", en: "Trees and rocks with noise" },
    code: `import bpy
from math import sin, cos, pi

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_plane_add(size=16, location=(0, 0, 0))
ground = bpy.context.object
ground.name = "Terrain"
ground.material.base_color = (0.23, 0.32, 0.18)
ground.material.roughness = 0.9
bpy.ops.object.modifier_add(type='DISPLACE')

for i in range(7):
    a = i / 7 * 2 * pi
    x = cos(a) * 3.2
    z = sin(a) * 3.2
    bpy.ops.mesh.primitive_tree_add(height=2.2 + (i % 3) * 0.25, seed=i + 1, location=(x, 0, z))
    t = bpy.context.object
    t.name = "Tree_" + str(i)
    t.material.base_color = (0.18, 0.38, 0.16)
    t.material.roughness = 0.78

bpy.ops.mesh.primitive_rock_add(radius=0.55, seed=2, location=(0.6, 0.3, 1.1))
r = bpy.context.object
r.material.base_color = (0.38, 0.36, 0.33)
r.material.roughness = 0.92
bpy.ops.lighting.studio(preset='forest')
print("Grove planted")
`,
  },
  {
    id: "turntable",
    cat: "anim",
    title: { fa: "ترن‌تیبل محصول", en: "Product turntable" },
    blurb: { fa: "کی‌فریم چرخش ۳۶۰ درجه", en: "360° rotation keyframes" },
    code: `import bpy

obj = bpy.context.object
if obj is None:
    bpy.ops.mesh.primitive_torusknot_add(location=(0, 1.1, 0))
    obj = bpy.context.object
    obj.material.base_color = (0.85, 0.62, 0.18)
    obj.material.metallic = 1
    obj.material.roughness = 0.2
bpy.ops.anim.turntable()
print("Turntable keys on", obj.name)
`,
  },
  {
    id: "vase",
    cat: "model",
    title: { fa: "گلدان لاتِه", en: "Lathe vase" },
    blurb: { fa: "سطح انقلابی سرامیکی", en: "Ceramic lathe surface" },
    code: `import bpy

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_vase_add(height=1.8, radius=0.5, location=(0, 0.9, 0))
v = bpy.context.object
v.name = "Vase"
v.material.base_color = (0.93, 0.88, 0.8)
v.material.roughness = 0.24
v.material.roughness = 0.22
v.material.clearcoat = 0.4
bpy.ops.lighting.three_point()
print("Vase thrown")
`,
  },
  {
    id: "stairs",
    cat: "arch",
    title: { fa: "پله سنگی", en: "Stone stair" },
    blurb: { fa: "پله پارامتریک معماری", en: "Parametric architectural stair" },
    code: `import bpy

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_stairs_add(steps=10, width=2.0, rise=0.17, run=0.3, location=(0, 0, 0))
s = bpy.context.object
s.name = "Stair"
s.material.base_color = (0.55, 0.52, 0.47)
s.material.roughness = 0.85
bpy.ops.mesh.primitive_column_add(height=2.6, radius=0.22, location=(-1.4, 1.3, 0.2))
c = bpy.context.object
c.material.base_color = (0.9, 0.88, 0.82)
c.material.roughness = 0.3
bpy.ops.lighting.three_point()
print("Stair block")
`,
  },
  {
    id: "neon",
    cat: "lookdev",
    title: { fa: "نئون و کربن", en: "Neon on carbon" },
    blurb: { fa: "متریال نشری روی سطح کربن", en: "Emissive material on carbon" },
    code: `import bpy

bpy.ops.scene.clear()
bpy.ops.mesh.primitive_rounded_cube_add(size=1.4, radius=0.12, location=(0, 0.7, 0))
c = bpy.context.object
c.name = "Carbon"
c.material.base_color = (0.06, 0.06, 0.07)
c.material.metallic = 0.65
c.material.roughness = 0.4
bpy.ops.mesh.primitive_torus_add(radius=0.85, tube=0.045, location=(0, 0.7, 0), rotation=(1.5708, 0, 0))
n = bpy.context.object
n.name = "Neon"
n.material.base_color = (0.05, 0.05, 0.05)
n.material.emission_strength = 4.5
n.material.base_color = (0.9, 0.35, 0.08)
bpy.ops.lighting.studio(preset='night')
print("Neon rig")
`,
  },
];
