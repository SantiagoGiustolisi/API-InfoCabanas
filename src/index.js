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
      "id": "01",
      "ambientes": {
        "cocina_comedor": {
          "electrodomesticos": {
            "items": [
              { "item": "luz emergencia", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "heladera gafa", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "cocina florencia", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "microondas atma", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "estractor tst", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "aire acondicionado philco", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "jarra winco", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "tostadora ultracomb", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "minipimer atma", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "cafetera yelmo", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "calefaccion caldera", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "radiadores x9 - toayeros x3", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "termotante", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "secador de pelo atma", "target": 1, "unidad": "unidad", "original": "" }
            ]
          },
          "vajilla": {
            "items": [
              { "item": "cuchillo", "target": 8, "unidad": "unidad", "original": "cuchillo x8" },
              { "item": "tenedor", "target": 8, "unidad": "unidad", "original": "tenedor x8" },
              { "item": "cucharita", "target": 8, "unidad": "unidad", "original": "cucharita x8" },
              { "item": "cuchara", "target": 8, "unidad": "unidad", "original": "cuchara x8" },
              { "item": "plato playo", "target": 8, "unidad": "unidad", "original": "plato playo x8" },
              { "item": "plato mediano", "target": 8, "unidad": "unidad", "original": "plato mediano x8" },
              { "item": "plato hondo", "target": 8, "unidad": "unidad", "original": "plato hondo x8" },
              { "item": "platito café", "target": 8, "unidad": "unidad", "original": "platito café x8" },
              { "item": "compotera postre", "target": 8, "unidad": "unidad", "original": "compotera postre x8" },
              { "item": "vaso comun", "target": 8, "unidad": "unidad", "original": "vaso comun x8" },
              { "item": "copa de agua", "target": 7, "unidad": "unidad", "original": "copa de agua x7" },
              { "item": "copa de vino", "target": 5, "unidad": "unidad", "original": "copa de vino x5" },
              { "item": "taza de café", "target": 8, "unidad": "unidad", "original": "taza de café x8" },
              { "item": "pocillo", "target": 8, "unidad": "unidad", "original": "pocillo x8" },
              { "item": "sarten", "target": 2, "unidad": "unidad", "original": "sarten x2" },
              { "item": "olla", "target": 3, "unidad": "unidad", "original": "olla x3" },
              { "item": "olla con mango", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "bandeja acero", "target": 3, "unidad": "unidad", "original": "bandeja acero x3" },
              { "item": "ensaladera acero", "target": 3, "unidad": "unidad", "original": "ensaladera acero x3" },
              { "item": "pela papa", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pisa papa", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "abre lata", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "saca corcho", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "colador", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "cucharon acero", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "cuchara madera", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "espumadera acero", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "colador de pasta", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "fuente acero ovalada", "target": 2, "unidad": "unidad", "original": "fuente acero ovalada x2" },
              { "item": "platos de madera", "target": 3, "unidad": "unidad", "original": "platos de madera x3" },
              { "item": "tabla picar madera", "target": 2, "unidad": "unidad", "original": "tabla picar madera x2" },
              { "item": "bandeja horno", "target": 2, "unidad": "unidad", "original": "bandeja horno x2" },
              { "item": "pizera enlosada", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pizera acero", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "bowl blanco", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "rayador", "target": 1, "unidad": "unidad", "original": "" }
            ]
          },
          "living_cocina": {
            "items": [
              { "item": "mesa con vidrio 8 sillas", "target": 1, "unidad": "juego", "original": "" },
              { "item": "sillon 3 cuerpos", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "sillon 1 cuerpo", "target": 2, "unidad": "unidad", "original": "sillon 1 cuerpo x2" },
              { "item": "mueble tv empotrado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "mesa ratona", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "reloj de pared", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "jarron vidrio", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "mesa + caminito", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "tv smart sharp", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "tv philco led", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "servicio de directv", "target": 1, "unidad": "servicio", "original": "" }
            ]
          },
          "parrilla": {
            "items": [
              { "item": "parrilla", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "bracero", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "palita", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "atizador", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "mesa 2 bancos", "target": 1, "unidad": "juego", "original": "" },
              { "item": "tender", "target": 1, "unidad": "unidad", "original": "" }
            ]
          }
        },
        "baño": {
          "items": [
            { "item": "bañera con hidromasaje", "target": 1, "unidad": "unidad", "original": "" }
          ]
        },
        "habitacion": {
          "matrimonial": {
            "items": [
              { "item": "cama 2 plazas", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "mesa de luz", "target": 2, "unidad": "unidad", "original": "mesa de luz x2" },
              { "item": "veladores", "target": 2, "unidad": "unidad", "original": "veladores x2" },
              { "item": "estante tv empotrado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "frazada 2p", "target": 2, "unidad": "unidad", "original": "frazada 2p x2" },
              { "item": "caja fuerte", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "perchas", "target": 6, "unidad": "unidad", "original": "perchas x6" },
              { "item": "cubrecama de verano", "target": 1, "unidad": "unidad", "original": "" }
            ]
          },
          "simple_I": {
            "items": [
              { "item": "cama 1 plaza", "target": 3, "unidad": "unidad", "original": "cama 1 plaza x3" },
              { "item": "mesa de luz", "target": 2, "unidad": "unidad", "original": "mesa de luz x2" },
              { "item": "veladores", "target": 2, "unidad": "unidad", "original": "veladores x2" },
              { "item": "cubrecama verano 1p", "target": 3, "unidad": "unidad", "original": "cubrecama verano 1p x3" },
              { "item": "frazada 1p", "target": 3, "unidad": "unidad", "original": "frazada 1p x3" },
              { "item": "perchas", "target": 6, "unidad": "unidad", "original": "perchas x6" }
            ]
          },
          "simple_II": {
            "items": [
              { "item": "cama 1 plaza", "target": 3, "unidad": "unidad", "original": "cama 1 plaza x3" },
              { "item": "mesa de luz", "target": 2, "unidad": "unidad", "original": "mesa de luz x2" },
              { "item": "veladores", "target": 2, "unidad": "unidad", "original": "veladores x2" },
              { "item": "frazada 1p", "target": 3, "unidad": "unidad", "original": "frazada 1p x3" },
              { "item": "cubrecama verano 1p", "target": 3, "unidad": "unidad", "original": "cubrecama verano 1p x3" },
              { "item": "mueble tv empotrado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "perchas", "target": 6, "unidad": "unidad", "original": "perchas x6" }
            ]
          }
        }
      }
    },
    {
  "id": "02",
  "ambientes": {
    "cocina_comedor": {
      "electrodomesticos": {
        "items": [
          { "item": "luz emergencia", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "heladera gafa", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "cocina florencia", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "microondas atma", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "estractor tst", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "aire acondicionado philco", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "jarra winco", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "tostadora ultracomb", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "minipimer atma", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "cafetera yelmo", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "calefaccion caldera", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "radiadores x9 - toayeros x3", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "termotante", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "secador de pelo atma", "target": 1, "unidad": "unidad", "original": "" }
        ]
      },
      "vajilla": {
        "items": [
          { "item": "cuchillo", "target": 6, "unidad": "unidad", "original": "cuchillo x6" },
          { "item": "tenedor", "target": 6, "unidad": "unidad", "original": "tenedor x6" },
          { "item": "cucharita", "target": 6, "unidad": "unidad", "original": "cucharita x6" },
          { "item": "cuchara", "target": 6, "unidad": "unidad", "original": "cuchara x6" },
          { "item": "plato playo", "target": 6, "unidad": "unidad", "original": "plato playo x6" },
          { "item": "plato mediano", "target": 6, "unidad": "unidad", "original": "plato mediano x6" },
          { "item": "plato hondo", "target": 6, "unidad": "unidad", "original": "plato hondo x6" },
          { "item": "platito café", "target": 6, "unidad": "unidad", "original": "platito café x6" },
          { "item": "compotera postre", "target": 6, "unidad": "unidad", "original": "compotera postre x6" },
          { "item": "vaso comun", "target": 6, "unidad": "unidad", "original": "vaso comun x6" },
          { "item": "copa de agua", "target": 6, "unidad": "unidad", "original": "copa de agua x6" },
          { "item": "copa de vino", "target": 6, "unidad": "unidad", "original": "copa de vino x6" },
          { "item": "taza de café", "target": 6, "unidad": "unidad", "original": "taza de café x6" },
          { "item": "pocillo", "target": 6, "unidad": "unidad", "original": "pocillo x6" },
          { "item": "sarten", "target": 2, "unidad": "unidad", "original": "sarten x2" },
          { "item": "olla", "target": 3, "unidad": "unidad", "original": "olla x3" },
          { "item": "olla con mango", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "bandeja acero", "target": 3, "unidad": "unidad", "original": "bandeja acero x3" },
          { "item": "ensaladera acero", "target": 3, "unidad": "unidad", "original": "ensaladera acero x3" },
          { "item": "pela papa", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "pisa papa", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "abre lata", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "saca corcho", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "colador", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "cucharon acero", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "cuchara madera", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "espumadera acero", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "colador de pasta", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "fuente acero ovalada", "target": 1, "unidad": "unidad", "original": "fuente acero ovalada" },
          { "item": "platos de madera", "target": 1, "unidad": "unidad", "original": "platos de madera" },
          { "item": "tabla picar madera", "target": 2, "unidad": "unidad", "original": "tabla picar madera x2" },
          { "item": "bandeja horno", "target": 2, "unidad": "unidad", "original": "bandeja horno x2" },
          { "item": "pizera enlosada", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "pizera acero", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "bowl blanco", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "rayador", "target": 1, "unidad": "unidad", "original": "" }
        ]
      },
      "living_cocina": {
        "items": [
          { "item": "mesa con vidrio 8 sillas", "target": 1, "unidad": "juego", "original": "" },
          { "item": "sillon 3 cuerpos", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "sillon 1 cuerpo", "target": 2, "unidad": "unidad", "original": "sillon 1 cuerpo x2" },
          { "item": "mueble tv empotrado", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "mesa ratona", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "reloj de pared", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "mesa + caminito", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "tv smart sharp", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "tv philco led", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "servicio de directv", "target": 1, "unidad": "servicio", "original": "" }
        ]
      },
      "parrilla": {
        "items": [
          { "item": "parrilla", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "bracero", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "palita", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "atizador", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "mesa 2 bancos", "target": 1, "unidad": "juego", "original": "" },
          { "item": "tender", "target": 1, "unidad": "unidad", "original": "" }
        ]
      }
    },
    "baño": {
      "items": [
        { "item": "bañera con hidromasaje", "target": 1, "unidad": "unidad", "original": "" }
      ]
    },
    "habitacion": {
      "matrimonial": {
        "items": [
          { "item": "cama 2 plazas", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "mesa de luz", "target": 2, "unidad": "unidad", "original": "mesa de luz x2" },
          { "item": "veladores", "target": 2, "unidad": "unidad", "original": "veladores x2" },
          { "item": "estante tv empotrado", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "perchas", "target": 6, "unidad": "unidad", "original": "perchas x6" },
          { "item": "cubrecama de verano", "target": 1, "unidad": "unidad", "original": "" }
        ]
      },
      "simple_I": {
        "items": [
          { "item": "cama 1 plaza", "target": 3, "unidad": "unidad", "original": "cama 1 plaza x3" },
          { "item": "mesa de luz", "target": 2, "unidad": "unidad", "original": "mesa de luz x2" },
          { "item": "veladores", "target": 2, "unidad": "unidad", "original": "veladores x2" },
          { "item": "cubrecama verano 1p", "target": 3, "unidad": "unidad", "original": "cubrecama verano 1p x3" },
          { "item": "frazada 1p", "target": 3, "unidad": "unidad", "original": "frazada 1p x3" },
          { "item": "perchas", "target": 6, "unidad": "unidad", "original": "perchas x6" }
        ]
      },
      "simple_II": {
        "items": [
          { "item": "cama 1 plaza", "target": 3, "unidad": "unidad", "original": "cama 1 plaza x3" },
          { "item": "mesa de luz", "target": 2, "unidad": "unidad", "original": "mesa de luz x2" },
          { "item": "veladores", "target": 2, "unidad": "unidad", "original": "veladores x2" },
          { "item": "frazada 1p", "target": 3, "unidad": "unidad", "original": "frazada 1p x3" },
          { "item": "cubrecama verano 1p", "target": 3, "unidad": "unidad", "original": "cubrecama verano 1p x3" },
          { "item": "mueble tv empotrado", "target": 1, "unidad": "unidad", "original": "" },
          { "item": "perchas", "target": 6, "unidad": "unidad", "original": "perchas x6" }
        ]
      }
    }
  }
},

  ]
};

/* =======================
   HELPERS (matching tipo API-COLE)
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
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i ]);
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

const resolveAmbiente = (input = "") => {
  const t = norm(input);

  for (const a of CANON_AMBIENTES) if (t === norm(a)) return a;

  // SIN puede no existir; evitamos ReferenceError
  const SIN_AMB = (globalThis.SIN && SIN.ambientes) ? SIN.ambientes : {};
  for (const [canon, arr] of Object.entries(SIN_AMB)) {
    if ((arr || []).map(norm).includes(t)) return canon;
  }

  if (/(^|\s)hab(\s*1|i)(\s|$)|matrimonial/.test(t)) return "habitacion_1";
  if (/(^|\s)hab(\s*2|ii)(\s|$)/.test(t)) return "habitacion_2";
  if (/bano|banio|ban/.test(t)) return "baño";
  return t;
};

const formatItems = (items = []) =>
  items.length
    ? items.map(it => `• ${it.target} ${it.unidad || ""} × ${it.item}`).join("\n")
    : "No hay ítems configurados en este ambiente.";

// === NUEVA: separa secciones en WhatsApp/ManyChat sin que se colapsen ===
const formatSectioned = (sections = []) => {
  if (!sections.length) return "No hay ítems en este ambiente.";

  const NL  = "\n";
  const SEP = "\n\u200B\n"; // newline + zero-width space + newline

  return sections.map(sec => {
    const title = (sec.sector || "").replace(/_/g, " ").toUpperCase();
    const body  = (sec.items || [])
      .map(it => `• ${it.target} ${it.unidad || ""} × ${it.item}`)
      .join(NL);
    return `*${title}*${NL}${body || "—"}`;
  }).join(SEP);
};

// Soporta ambientes “contenedor” (habitacion con sub-sectores)
const buildAmbientePayload = (id, amb, onlySmall) => {
  const cab = findCabana(id);
  if (!cab) return { error: "Cabaña no encontrada." };

  let ambCanon = resolveAmbiente(amb);
  if (!cab.ambientes?.[ambCanon]) {
    const keys = Object.keys(cab.ambientes || {});
    const match = mejorCoincidencia(keys, amb);
    if (match) ambCanon = match;
  }

  const ambData = cab.ambientes?.[ambCanon];
  if (!ambData) return { error: `No encuentro el ambiente "${amb}".` };

  // Caso 1: ambiente “normal” con items directos
  if (Array.isArray(ambData.items)) {
    let items = ambData.items.map(it => ({ ...it }));
    if (onlySmall) items = items.filter(it => isChico(it.item));

    const header = `*Cabaña ${cab.id} — ${ambCanon.toUpperCase()}*`;
    const body   = formatItems(items);
    const text   = `${header}\n${body}`;

    return { cab, ambCanon, items, text };
  }

  // Caso 2: ambiente “contenedor”
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

    const header = `*Cabaña ${cab.id} — ${ambCanon.toUpperCase()}*`;
    const text   = `${header}\n\u200B\n${formatSectioned(sections)}`; // <- separación extra

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
