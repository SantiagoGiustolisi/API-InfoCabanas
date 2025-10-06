// api.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* =======================
   DATA EN MEMORIA
======================= */
const DATA = {
  cabanas: [
    {
      id: "42",
      ambientes: {
        cocina: {
          items: [
            { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
            { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
            { item: "cocina florencia", target: 1, unidad: "unidad", original: "" },
            { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
            { item: "extractor tst", target: 1, unidad: "unidad", original: "estractor tst" },
            { item: "aire acondicionado philco", target: 4, unidad: "unidad", original: "aire acondicionado x4 philco" },
            { item: "jarra eléctrica winco", target: 1, unidad: "unidad", original: "jarra winco" },
            { item: "tostadora ultracomb", target: 1, unidad: "unidad", original: "" },
            { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
            { item: "cafetera yelmo", target: 1, unidad: "unidad", original: "" },
            { item: "calefacción por caldera", target: 1, unidad: "unidad", original: "calefaccion caldera" },
            { item: "radiador", target: 9, unidad: "unidad", original: "radiadores x9" },
            { item: "toallero", target: 3, unidad: "unidad", original: "toayeros x3" },
            { item: "termotanque", target: 1, unidad: "unidad", original: "termotante" },
            { item: "tv smart sharp", target: 2, unidad: "unidad", original: "tv smart sharp x2" },
            { item: "tv philco led", target: 1, unidad: "unidad", original: "" },
            { item: "servicio de directv", target: 1, unidad: "servicio", original: "" },
            { item: "mesa comedor con vidrio", target: 1, unidad: "unidad", original: "mesa con vidrio 8 sillas" },
            { item: "silla de comedor", target: 8, unidad: "unidad", original: "mesa con vidrio 8 sillas" },
            { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "" },
            { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
            { item: "mueble para tv empotrado", target: 2, unidad: "unidad", original: "mueble tv empotrado / mueble tv empotrado (hab. simple II)" },
            { item: "estante para tv empotrado", target: 1, unidad: "unidad", original: "" },
            { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
            { item: "reloj de pared", target: 1, unidad: "unidad", original: "" },
            { item: "jarrón de vidrio", target: 1, unidad: "unidad", original: "jarron vidrio" },
            { item: "camino de mesa", target: 1, unidad: "unidad", original: "mesa + caminito" },

            // Vajilla / utensilios
            { item: "cuchillo", target: 8, unidad: "unidad", original: "cuchillo x8" },
            { item: "tenedor", target: 8, unidad: "unidad", original: "tenedor x8" },
            { item: "cucharita", target: 8, unidad: "unidad", original: "cucharita x8" },
            { item: "cuchara", target: 8, unidad: "unidad", original: "cuchara x8" },
            { item: "plato playo", target: 8, unidad: "unidad", original: "plato playo x8" },
            { item: "plato mediano", target: 8, unidad: "unidad", original: "plato mediano x8" },
            { item: "plato hondo", target: 8, unidad: "unidad", original: "plato hondo x8" },
            { item: "platito de café", target: 8, unidad: "unidad", original: "platito café x8" },
            { item: "compotera de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
            { item: "vaso común", target: 8, unidad: "unidad", original: "vaso comun x8" },
            { item: "copa de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
            { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
            { item: "taza de café", target: 8, unidad: "unidad", original: "taza de café x8" },
            { item: "pocillo", target: 8, unidad: "unidad", original: "pocillo x8" },
            { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
            { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
            { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
            { item: "bandeja de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
            { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
            { item: "pelapapas", target: 1, unidad: "unidad", original: "pela papa" },
            { item: "pisapapas", target: 1, unidad: "unidad", original: "pisa papa" },
            { item: "abrelatas", target: 1, unidad: "unidad", original: "abre lata" },
            { item: "sacacorchos", target: 1, unidad: "unidad", original: "saca corcho" },
            { item: "colador", target: 1, unidad: "unidad", original: "" },
            { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
            { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
            { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
            { item: "colador de pasta", target: 1, unidad: "unidad", original: "" },
            { item: "fuente de acero ovalada", target: 2, unidad: "unidad", original: "fuente acero ovalada x2" },
            { item: "plato de madera", target: 3, unidad: "unidad", original: "platos de madera x3" },
            { item: "tabla para picar de madera", target: 2, unidad: "unidad", original: "tabla picar madera x2" },
            { item: "bandeja para horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
            { item: "pizzera enlozada", target: 1, unidad: "unidad", original: "pizera enlosada" },
            { item: "pizzera de acero", target: 1, unidad: "unidad", original: "pizera acero" },
            { item: "bowl blanco", target: 1, unidad: "unidad", original: "" },
            { item: "rayador", target: 1, unidad: "unidad", original: "" },

            // Parrilla
            { item: "parrilla", target: 1, unidad: "unidad", original: "parrila" },
            { item: "bracero", target: 1, unidad: "unidad", original: "" },
            { item: "palita para fuego", target: 1, unidad: "unidad", original: "palita" },
            { item: "atizador", target: 1, unidad: "unidad", original: "" },
            { item: "mesa con 2 bancos", target: 1, unidad: "juego", original: "mesa 2 bancos" },
            { item: "tender", target: 1, unidad: "unidad", original: "" }
          ]
        },
        habitaciones: {
          matrimonial: {
            items: [
              { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2 plaza" },
              { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
              { item: "velador", target: 2, unidad: "unidad", original: "veladores x2" },
              { item: "frazada 2 plazas", target: 2, unidad: "unidad", original: "frazada 2P x2" },
              { item: "caja fuerte", target: 1, unidad: "unidad", original: "" },
              { item: "percha", target: 6, unidad: "unidad", original: "perchas x6" },
              { item: "cubrecama de verano 2 plazas", target: 1, unidad: "unidad", original: "cubrecama de verano" }
            ]
          },
          simple_1: {
            items: [
              { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1 Plaza x3" },
              { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
              { item: "velador", target: 2, unidad: "unidad", original: "veladores x2" },
              { item: "cubrecama de verano 1 plaza", target: 3, unidad: "unidad", original: "cubrecama verano 1P x3" },
              { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "frazada 1P x3" },
              { item: "percha", target: 6, unidad: "unidad", original: "perchas x6" }
            ]
          },
          simple_2: {
            items: [
              { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1 plaza x3" },
              { item: "velador", target: 2, unidad: "unidad", original: "veladores x2" },
              { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
              { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "frazada 1P x3" },
              { item: "cubrecama de verano 1 plaza", target: 3, unidad: "unidad", original: "cubrecama verano 1P x3" },
              { item: "mueble para tv empotrado", target: 1, unidad: "unidad", original: "" },
              { item: "percha", target: 6, unidad: "unidad", original: "perchas x6" }
            ]
          }
        },
        baño: {
          suite: {
            items: [
              { item: "bañera con hidromasaje", target: 1, unidad: "unidad", original: "Bañera con hidromasage" },
              { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "" }
            ]
          }
        }
      }
    },

    {
      id: "41",
      ambientes: {
        cocina: {
          items: [
            { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" },
            { item: "heladera patrick", target: 1, unidad: "unidad", original: "" },
            { item: "cocina longvie", target: 1, unidad: "unidad", original: "" },
            { item: "microondas bgh", target: 1, unidad: "unidad", original: "" },
            { item: "extractor tst", target: 1, unidad: "unidad", original: "" },
            { item: "aire acondicionado philco", target: 2, unidad: "unidad", original: "" },
            { item: "jarra eléctrica atma", target: 1, unidad: "unidad", original: "" },
            { item: "tostadora atma", target: 1, unidad: "unidad", original: "" },
            { item: "minipimer philips", target: 1, unidad: "unidad", original: "" },
            { item: "cafetera atma", target: 1, unidad: "unidad", original: "" },
            { item: "calefacción por caldera", target: 1, unidad: "unidad", original: "" },
            { item: "radiador", target: 6, unidad: "unidad", original: "" },
            { item: "toallero", target: 2, unidad: "unidad", original: "" },
            { item: "termotanque", target: 1, unidad: "unidad", original: "" },
            { item: "tv smart noblex", target: 1, unidad: "unidad", original: "" },
            { item: "servicio de directv", target: 1, unidad: "servicio", original: "" },
            { item: "mesa comedor con vidrio", target: 1, unidad: "unidad", original: "" },
            { item: "silla de comedor", target: 6, unidad: "unidad", original: "" },

            // Vajilla / utensilios (resumida)
            { item: "cuchillo", target: 6, unidad: "unidad", original: "" },
            { item: "tenedor", target: 6, unidad: "unidad", original: "" },
            { item: "plato playo", target: 6, unidad: "unidad", original: "" },
            { item: "plato hondo", target: 6, unidad: "unidad", original: "" },
            { item: "vaso común", target: 6, unidad: "unidad", original: "" },
            { item: "taza de café", target: 6, unidad: "unidad", original: "" },
            { item: "sartén", target: 1, unidad: "unidad", original: "" },
            { item: "olla", target: 2, unidad: "unidad", original: "" },
            { item: "bandeja para horno", target: 1, unidad: "unidad", original: "" }
          ]
        },
        habitaciones: {
          matrimonial: {
            items: [
              { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
              { item: "velador", target: 2, unidad: "unidad", original: "" },
              { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "" },
              { item: "caja fuerte", target: 1, unidad: "unidad", original: "" },
              { item: "percha", target: 5, unidad: "unidad", original: "" }
            ]
          },
          simple_1: {
            items: [
              { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
              { item: "velador", target: 1, unidad: "unidad", original: "" },
              { item: "frazada 1 plaza", target: 2, unidad: "unidad", original: "" },
              { item: "percha", target: 4, unidad: "unidad", original: "" }
            ]
          },
          simple_2: {
            items: [
              { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
              { item: "velador", target: 1, unidad: "unidad", original: "" },
              { item: "percha", target: 3, unidad: "unidad", original: "" }
            ]
          }
        },
        baño: {
          suite: {
            items: [
              { item: "ducha con mampara", target: 1, unidad: "unidad", original: "" },
              { item: "secador de pelo yelmo", target: 1, unidad: "unidad", original: "" }
            ]
          }
        }
      }
    },
    {
      id: "43",
      ambientes: {
        cocina: {
          items: [
            { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" },
            { item: "heladera whirlpool", target: 1, unidad: "unidad", original: "" },
            { item: "cocina orbis", target: 1, unidad: "unidad", original: "" },
            { item: "microondas philco", target: 1, unidad: "unidad", original: "" },
            { item: "extractor tst", target: 1, unidad: "unidad", original: "" },
            { item: "aire acondicionado sanyo", target: 3, unidad: "unidad", original: "" },
            { item: "jarra eléctrica yelmo", target: 1, unidad: "unidad", original: "" },
            { item: "tostadora ultracomb", target: 1, unidad: "unidad", original: "" },
            { item: "cafetera dolce gusto", target: 1, unidad: "unidad", original: "" },
            { item: "radiador", target: 7, unidad: "unidad", original: "" },
            { item: "toallero", target: 2, unidad: "unidad", original: "" },
            { item: "termotanque", target: 1, unidad: "unidad", original: "" },
            { item: "tv smart tcl", target: 1, unidad: "unidad", original: "" },
            { item: "silla de comedor", target: 4, unidad: "unidad", original: "" },

            // Vajilla / utensilios (resumida)
            { item: "plato playo", target: 4, unidad: "unidad", original: "" },
            { item: "plato hondo", target: 4, unidad: "unidad", original: "" },
            { item: "vaso común", target: 4, unidad: "unidad", original: "" },
            { item: "taza de café", target: 4, unidad: "unidad", original: "" },
            { item: "sartén", target: 1, unidad: "unidad", original: "" },
            { item: "olla", target: 2, unidad: "unidad", original: "" }
          ]
        },
        habitaciones: {
          matrimonial: {
            items: [
              { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
              { item: "velador", target: 2, unidad: "unidad", original: "" },
              { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "" }
            ]
          },
          simple_1: {
            items: [
              { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
              { item: "velador", target: 1, unidad: "unidad", original: "" }
            ]
          },
          simple_2: {
            items: [
              { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
              { item: "velador", target: 1, unidad: "unidad", original: "" }
            ]
          }
        },
        baño: {
          suite: {
            items: [
              { item: "ducha escocesa", target: 1, unidad: "unidad", original: "" },
              { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "" }
            ]
          }
        }
      }
    },
   {
      id: "44",
      ambientes: {
        cocina: {
          items: [
            { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" },
            { item: "heladera gafa no frost", target: 1, unidad: "unidad", original: "" },
            { item: "anafe eléctrico philips", target: 1, unidad: "unidad", original: "" },
            { item: "horno eléctrico atma", target: 1, unidad: "unidad", original: "" },
            { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
            { item: "campana de acero tst", target: 1, unidad: "unidad", original: "" },
            { item: "aire acondicionado bgh", target: 2, unidad: "unidad", original: "" },
            { item: "jarra eléctrica winco", target: 1, unidad: "unidad", original: "" },
            { item: "tostadora philips", target: 1, unidad: "unidad", original: "" },
            { item: "radiador", target: 5, unidad: "unidad", original: "" },
            { item: "tv smart samsung", target: 1, unidad: "unidad", original: "" },

            // Vajilla / utensilios (resumida)
            { item: "plato playo", target: 8, unidad: "unidad", original: "" },
            { item: "vaso común", target: 8, unidad: "unidad", original: "" },
            { item: "cuchillo", target: 8, unidad: "unidad", original: "" },
            { item: "tenedor", target: 8, unidad: "unidad", original: "" },
            { item: "olla", target: 3, unidad: "unidad", original: "" },
            { item: "bandeja para horno", target: 1, unidad: "unidad", original: "" }
          ]
        },
        habitaciones: {
          matrimonial: {
            items: [
              { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
              { item: "velador", target: 2, unidad: "unidad", original: "" },
              { item: "frazada 2 plazas", target: 2, unidad: "unidad", original: "" },
              { item: "percha", target: 6, unidad: "unidad", original: "" }
            ]
          },
          simple_1: {
            items: [
              { item: "cama cucheta 1 plaza", target: 1, unidad: "unidad", original: "" },
              { item: "velador", target: 1, unidad: "unidad", original: "" },
              { item: "percha", target: 4, unidad: "unidad", original: "" }
            ]
          },
          simple_2: {
            items: [
              { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "" },
              { item: "mesa de luz", target: 1, unidad: "unidad", original: "" }
            ]
          }
        },
        baño: {
          suite: {
            items: [
              { item: "bañera con hidromasaje", target: 1, unidad: "unidad", original: "" },
              { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "" },
              { item: "toallero eléctrico", target: 1, unidad: "unidad", original: "" }
            ]
          }
        }
      }
    }
  ]
};

/* =======================
   HELPERS
======================= */
const STOPWORDS = new Set(["de","del","la","las","los","y","e","el","a","al","en","por","para"]);
const CANON_AMBIENTES = ["cocina","habitacion_1","habitacion_2","comedor","baño","utensilios"];
const GRANDES = ["cama","banera","bañera","mesa","silla","heladera","cocina","tv","televisor"]; // filtrables con ?small=1

const norm = (s = "") =>
  s.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tokens = (s = "") => norm(s).split(/\s+/).filter(t => t && !STOPWORDS.has(t));

const mismasPalabras = (a, b) => {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  for (const t of a) if (!setB.has(t)) return false;
  return true;
};

const lev = (a, b) => {
  a = norm(a); b = norm(b);
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + cost);
    }
  }
  return m[a.length][b.length];
};

const similitud = (a, b) => {
  const L = Math.max(norm(a).length, norm(b).length) || 1;
  return 1 - (lev(a, b) / L);
};

const tokenSim = (a, b) => {
  a = norm(a); b = norm(b);
  if (!a || !b) return 0;
  if (a === b) return 1;
  if (a.length >= 3 && b.startsWith(a)) return 0.92;
  if (b.length >= 3 && a.startsWith(b)) return 0.92;
  const d = lev(a, b);
  const L = Math.max(a.length, b.length) || 1;
  return 1 - (d / L);
};

const fuzzyCoverage = (qTok, cTok, thr = 0.72) => {
  const usados = new Set();
  let match = 0;
  for (const q of qTok) {
    let best = 0, bi = -1;
    for (let i = 0; i < cTok.length; i++) {
      if (usados.has(i)) continue;
      const s = tokenSim(q, cTok[i]);
      if (s > best) { best = s; bi = i; }
    }
    if (best >= thr) { match++; usados.add(bi); }
  }
  return match / (qTok.length || 1);
};

const ALIAS = { acc: "acceso", acces: "acceso", pna: "parana", sta: "santa", esc: "escuela" };
const expandAliases = arr => arr.map(t => ALIAS[t] || t);

const mejorCoincidencia = (candidatos, query) => {
  const qTokBase = tokens(query);
  const qTok = expandAliases(qTokBase);
  const qNorm = norm(query);
  let best = null, bestScore = -Infinity;

  for (const c of candidatos) {
    const cNorm = norm(c);
    const cTok = expandAliases(tokens(c));
    if (cNorm === qNorm) return c;
    if (mismasPalabras(qTok, cTok)) return c;

    const coverage = fuzzyCoverage(qTok, cTok);
    const charSim = similitud(cNorm, qNorm);
    const inter = new Set(qTok.filter(t => cTok.includes(t))).size;
    const union = new Set([...qTok, ...cTok]).size || 1;
    const jaccard = inter / union;
    const detailBonus = (coverage === 1) ? (Math.min(cTok.length, qTok.length) / Math.max(1, qTok.length)) : 0;

    const score = (coverage * 3.2) + (charSim * 0.6) + (jaccard * 0.5) + (detailBonus * 0.3);
    if (score > bestScore) { bestScore = score; best = c; }
  }
  return best;
};

const isChico = (nombre = "") => !GRANDES.some(g => norm(nombre).includes(norm(g)));
const findCabana = (idRaw = "") => (DATA.cabanas || []).find(c => norm(c.id) === norm(idRaw)) || null;

/* ---------- Resolución de ambientes ---------- */
const resolveAmbiente = (input = "") => {
  const t = norm(input);

  // match exacto a claves canónicas
  for (const a of CANON_AMBIENTES) if (t === norm(a)) return a;

  // alias dinámicos (si existieran)
  const SIN_AMB = (globalThis.SIN && SIN.ambientes) ? SIN.ambientes : {};
  for (const [canon, arr] of Object.entries(SIN_AMB)) {
    if ((arr || []).map(norm).includes(t)) return canon;
  }

  // ► habitación contenedor
  if (/\bhabitaciones?\b/.test(t)) return "habitaciones";

  // ► subhabitaciones
  if (/(^|\s)hab(\s*1|i)(\s|$)|\bmatrimonial\b/.test(t)) return "habitacion_1";
  if (/(^|\s)hab(\s*2|ii)(\s|$)/.test(t)) return "habitacion_2";

  if (/bano|banio|ban/.test(t)) return "baño";
  return t;
};

// util de estilo
const capitalize = (s = "") =>
  s.replace(/\b\p{L}+/gu, w => w.charAt(0).toUpperCase() + w.slice(1));

const formatItems = (items = []) =>
  items.length
    ? items.map(it => `• ${capitalize(it.item)} — ${it.target} ${it.unidad}${Number(it.target) === 1 ? "" : "es"}`).join("\n")
    : "No hay ítems configurados en este ambiente.";

/* ---------- Formato seccionado para habitaciones ---------- */
const formatSectioned = (sections = []) => {
  if (!sections.length) return "No hay ítems en este ambiente.";

  // orden y rótulos
  const ORDER = ["matrimonial", "simple_1", "simple_2"];
  const LABEL = {
    matrimonial: "HABITACIÓN MATRIMONIAL",
    simple_1:    "HABITACIÓN SIMPLE 1",
    simple_2:    "HABITACIÓN SIMPLE 2",
  };

  const byKey = Object.fromEntries(sections.map(s => [String(s.sector || ""), s]));

  const NL  = "\n";
  const SEP = "\n\u200B\n"; // separación visible en WhatsApp/ManyChat

  const parts = [];
  for (const key of ORDER) {
    const sec = byKey[key];
    if (!sec) continue;
    const title = LABEL[key] || key.replace(/_/g, " ").toUpperCase();
    parts.push(`*${title}*${NL}${formatItems(sec.items || []) || "—"}`);
  }

  // sectores extra no contemplados en ORDER
  for (const [key, sec] of Object.entries(byKey)) {
    if (ORDER.includes(key)) continue;
    const title = key.replace(/_/g, " ").toUpperCase();
    parts.push(`*${title}*${NL}${formatItems(sec.items || []) || "—"}`);
  }

  return parts.join(SEP);
};

/* ---------- Encabezados por ambiente ---------- */
const AMB_LABEL = {
  habitaciones: { title: "HABITACIÓN", icon: "🛏️" },
  baño:         { title: "BAÑO",       icon: "🚿"   },
  cocina:       { title: "COCINA",     icon: ""     },
  comedor:      { title: "COMEDOR",    icon: ""     },
};

const headerFor = (idCab, ambCanon) => {
  const meta = AMB_LABEL[ambCanon] || { title: ambCanon.toUpperCase(), icon: "" };
  const icon = meta.icon ? ` ${meta.icon}` : "";
  return `*Cabaña ${idCab} | ${meta.title}${icon}*\n──────────────`;
};

/* ---------- Construcción de respuesta por ambiente ---------- */
const buildAmbientePayload = (id, amb, onlySmall) => {
  const cab = findCabana(id);
  if (!cab) return { error: "Cabaña no encontrada." };

  let ambCanon = resolveAmbiente(amb);
  if (!cab.ambientes?.[ambCanon]) {
    const keys = Object.keys(cab.ambientes || {});
    const match = mejorCoincidencia(keys, amb);
    if (match) ambCanon = match; // ej: "habitacion" -> "habitaciones"
  }

  const ambData = cab.ambientes?.[ambCanon];
  if (!ambData) return { error: `No encuentro el ambiente "${amb}".` };

  // Caso 1: ambiente “normal”
  if (Array.isArray(ambData.items)) {
    let items = ambData.items.map(it => ({ ...it }));
    if (onlySmall) items = items.filter(it => isChico(it.item));

    const header = headerFor(cab.id, ambCanon);
    const body   = formatItems(items);
    const text   = `${header}\n${body}`;

    return { cab, ambCanon, items, text };
  }

  // Caso 2: ambiente “contenedor” (habitaciones / baño con secciones)
  if (typeof ambData === "object" && ambData) {
    let sections = [];
    for (const [sector, obj] of Object.entries(ambData)) {
      if (Array.isArray(obj?.items)) {
        let its = obj.items.map(it => ({ ...it }));
        if (onlySmall) its = its.filter(it => isChico(it.item));
        sections.push({ sector, items: its });
      }
    }
    const items = sections.flatMap(s => s.items.map(it => ({ ...it, sector: s.sector })));

    const header = headerFor(cab.id, ambCanon);
    const text   = `${header}\n\n${
      ambCanon === "habitaciones" ? formatSectioned(sections)
                                  : sections.map(s => `*${String(s.sector).replace(/_/g," ").toUpperCase()}*\n${formatItems(s.items)}`).join("\n\u200B\n")
    }`;

    return { cab, ambCanon, items, text, sections };
  }

  return { error: "Estructura de ambiente desconocida." };
};

/* =======================
   ENDPOINTS
======================= */
app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "API OK",
    endpoints: [
      "GET /cabanas",
      "GET /cabanas/:id",
      "GET /menu/:id",
      "GET /cabanas/:id/ambientes/:amb?small=1&format=chat",
      "GET /buscar?casa_id=01&ambiente=baño&small=1&format=chat"
    ]
  });
});

app.get("/cabanas", (_req, res) => {
  res.json({ ok: true, cabanas: (DATA.cabanas || []).map(c => c.id) });
});

app.get("/cabanas/:id", (req, res) => {
  const cab = findCabana(req.params.id);
  if (!cab) return res.status(404).json({ ok: false, error: "Cabaña no encontrada" });
  res.json({ ok: true, data: cab });
});

app.get("/menu/:id", (req, res) => {
  const cab = findCabana(req.params.id);
  if (!cab) return res.status(404).json({ ok: false, error: "Cabaña no encontrada" });
  res.json({ ok: true, id: cab.id, ambientes: Object.keys(cab.ambientes || {}) });
});

// Detalle por ambiente (?small=1 filtra “grandes”; &format=chat devuelve solo texto)
app.get("/cabanas/:id/ambientes/:amb", (req, res) => {
  const onlySmall = String(req.query.small ?? "1") === "1"; // default 1
  const result = buildAmbientePayload(req.params.id, req.params.amb, onlySmall);
  if (result.error) return res.status(404).json({ ok: false, text: result.error });

  if (String(req.query.format || "").toLowerCase() === "chat") {
    return res.send(result.text);
  }
  const { cab, ambCanon, items, text, sections } = result;
  res.json({ ok: true, cabana: cab.id, ambiente: ambCanon, items, sections, text });
});

// Atajo: /buscar?casa_id=05&ambiente=baño&small=1&format=chat
app.get("/buscar", (req, res) => {
  const id  = String(req.query.casa_id || "");
  const amb = String(req.query.ambiente || "");
  if (!id)  return res.status(400).json({ ok: false, text: "Falta casa_id" });
  if (!amb) return res.status(400).json({ ok: false, text: "Falta ambiente" });

  const onlySmall = String(req.query.small ?? "1") === "1";
  const result = buildAmbientePayload(id, amb, onlySmall);
  if (result.error) return res.status(404).json({ ok: false, text: result.error });

  if (String(req.query.format || "").toLowerCase() === "chat") {
    return res.send(result.text);
  }
  const { ambCanon, items, text, sections } = result;
  res.json({ ok: true, cabana: id, ambiente: ambCanon, items, sections, text });
});

/* =======================
   START
======================= */
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});
