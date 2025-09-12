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
      "id": "04",
      "ambientes": {
        "cocina_comedor": {
          "items": [
            { "item": "plato llano", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "plato hondo", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "vaso", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "taza", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "cuchillo", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "tenedor", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "cuchara", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "sartén", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "olla chica", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "tabla para picar", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "abrelatas", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "detergente", "target": 1, "unidad": "botella", "original": "" },
            { "item": "repasador", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "tv", "target": 0, "unidad": "unidad", "original": "" },
            { "item": "control tv", "target": 0, "unidad": "unidad", "original": "" },
            { "item": "mantel", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "posavasos", "target": 4, "unidad": "unidad", "original": "" }
          ]
        },
        "baño": {
          "items": [
            { "item": "toalla", "target": 3, "unidad": "unidad", "original": "" },
            { "item": "toallón", "target": 3, "unidad": "unidad", "original": "" },
            { "item": "jabón", "target": 3, "unidad": "unidad", "original": "" },
            { "item": "sobre shampoo", "target": 3, "unidad": "sobre", "original": "" },
            { "item": "sobre crema enjuague", "target": 3, "unidad": "sobre", "original": "" },
            { "item": "papel higiénico", "target": 2, "unidad": "rollo", "original": "" }
          ]
        },
        "habitacion": {
          "habitacion_1": {
            "items": [
              { "item": "percha", "target": 4, "unidad": "unidad", "original": "" },
              { "item": "control tv", "target": 0, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pilas aaa", "target": 2, "unidad": "unidad", "original": "" }
            ]
          },
          "habitacion_2": {
            "items": [
              { "item": "percha", "target": 4, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 0, "unidad": "unidad", "original": "" },
              { "item": "pilas aaa", "target": 0, "unidad": "unidad", "original": "" }
            ]
          }
        }
      }
    },
    {
      "id": "05",
      "ambientes": {
        "cocina_comedor": {
          "items": [
            { "item": "plato llano", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "plato hondo", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "vaso", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "taza", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "cuchillo", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "tenedor", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "cuchara", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "cucharita", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "copa de vino", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "sartén", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "olla chica", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "olla grande", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "tabla para picar", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "abrelatas", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "detergente", "target": 1, "unidad": "botella", "original": "" },
            { "item": "repasador", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "tv", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "control tv", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "control decodificador", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "mantel", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "posavasos", "target": 6, "unidad": "unidad", "original": "" }
          ]
        },
        "baño": {
          "items": [
            { "item": "toalla", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "toallón", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "jabón", "target": 3, "unidad": "unidad", "original": "" },
            { "item": "sobre shampoo", "target": 3, "unidad": "sobre", "original": "" },
            { "item": "sobre crema enjuague", "target": 3, "unidad": "sobre", "original": "" },
            { "item": "papel higiénico", "target": 3, "unidad": "rollo", "original": "" }
          ]
        },
        "habitacion": {
          "habitacion_1": {
            "items": [
              { "item": "percha", "target": 8, "unidad": "unidad", "original": "" },
              { "item": "control tv", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pilas aaa", "target": 4, "unidad": "unidad", "original": "" }
            ]
          },
          "habitacion_2": {
            "items": [
              { "item": "percha", "target": 6, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" }
            ]
          }
        }
      }
    },
    {
      "id": "06",
      "ambientes": {
        "cocina_comedor": {
          "items": [
            { "item": "plato llano", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "plato hondo", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "vaso", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "taza", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "cuchillo", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "tenedor", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "cuchara", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "cucharita", "target": 8, "unidad": "unidad", "original": "" },
            { "item": "sartén", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "olla chica", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "olla grande", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "fuente vidrio", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "abrelatas", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "detergente", "target": 1, "unidad": "botella", "original": "" },
            { "item": "repasador", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "tv", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "control tv", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "control decodificador", "target": 0, "unidad": "unidad", "original": "" },
            { "item": "mantel", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "posavasos", "target": 8, "unidad": "unidad", "original": "" }
          ]
        },
        "baño": {
          "items": [
            { "item": "toalla", "target": 5, "unidad": "unidad", "original": "" },
            { "item": "toallón", "target": 5, "unidad": "unidad", "original": "" },
            { "item": "jabón", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "sobre shampoo", "target": 4, "unidad": "sobre", "original": "" },
            { "item": "sobre crema enjuague", "target": 4, "unidad": "sobre", "original": "" },
            { "item": "papel higiénico", "target": 3, "unidad": "rollo", "original": "" }
          ]
        },
        "habitacion": {
          "habitacion_1": {
            "items": [
              { "item": "percha", "target": 6, "unidad": "unidad", "original": "" },
              { "item": "control tv", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pilas aaa", "target": 4, "unidad": "unidad", "original": "" }
            ]
          },
          "habitacion_2": {
            "items": [
              { "item": "percha", "target": 6, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pilas aaa", "target": 2, "unidad": "unidad", "original": "" }
            ]
          }
        }
      }
    },
    {
      "id": "07",
      "ambientes": {
        "cocina_comedor": {
          "items": [
            { "item": "plato llano", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "plato hondo", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "vaso", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "taza", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "cuchillo", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "tenedor", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "cuchara", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "sartén", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "olla chica", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "detergente", "target": 1, "unidad": "botella", "original": "" },
            { "item": "repasador", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "tv", "target": 0, "unidad": "unidad", "original": "" },
            { "item": "control tv", "target": 0, "unidad": "unidad", "original": "" },
            { "item": "mantel", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "posavasos", "target": 2, "unidad": "unidad", "original": "" }
          ]
        },
        "baño": {
          "items": [
            { "item": "toalla", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "toallón", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "jabón", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "sobre shampoo", "target": 2, "unidad": "sobre", "original": "" },
            { "item": "sobre crema enjuague", "target": 2, "unidad": "sobre", "original": "" },
            { "item": "papel higiénico", "target": 2, "unidad": "rollo", "original": "" }
          ]
        },
        "habitacion": {
          "habitacion_1": {
            "items": [
              { "item": "percha", "target": 4, "unidad": "unidad", "original": "" },
              { "item": "control tv", "target": 0, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "pilas aaa", "target": 2, "unidad": "unidad", "original": "" }
            ]
          },
          "habitacion_2": {
            "items": [
              { "item": "percha", "target": 0, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 0, "unidad": "unidad", "original": "" }
            ]
          }
        }
      }
    },
    {
      "id": "08",
      "ambientes": {
        "cocina_comedor": {
          "items": [
            { "item": "plato llano", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "plato hondo", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "vaso", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "taza", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "cuchillo", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "tenedor", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "cuchara", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "cucharita", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "copa de vino", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "tupper mediano", "target": 3, "unidad": "unidad", "original": "" },
            { "item": "sartén", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "olla chica", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "olla grande", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "abrelatas", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "detergente", "target": 1, "unidad": "botella", "original": "" },
            { "item": "repasador", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "tv", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "control tv", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "control decodificador", "target": 1, "unidad": "unidad", "original": "" },
            { "item": "mantel", "target": 2, "unidad": "unidad", "original": "" },
            { "item": "posavasos", "target": 8, "unidad": "unidad", "original": "" }
          ]
        },
        "baño": {
          "items": [
            { "item": "toalla", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "toallón", "target": 6, "unidad": "unidad", "original": "" },
            { "item": "jabón", "target": 4, "unidad": "unidad", "original": "" },
            { "item": "sobre shampoo", "target": 4, "unidad": "sobre", "original": "" },
            { "item": "sobre crema enjuague", "target": 4, "unidad": "sobre", "original": "" },
            { "item": "papel higiénico", "target": 4, "unidad": "rollo", "original": "" }
          ]
        },
        "habitacion": {
          "habitacion_1": {
            "items": [
              { "item": "percha", "target": 6, "unidad": "unidad", "original": "" },
              { "item": "control tv", "target": 1, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" }
            ]
          },
          "habitacion_2": {
            "items": [
              { "item": "percha", "target": 6, "unidad": "unidad", "original": "" },
              { "item": "control aire acondicionado", "target": 1, "unidad": "unidad", "original": "" }
            ]
          }
        }
      }
    }
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
  for (const [canon, arr] of Object.entries((SIN.ambientes || {}))) {
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

  const items = (ambData.items || []).filter(it => (onlySmall ? isChico(it.item) : true));
  const text  = `*Cabaña ${cab.id} — ${ambCanon.toUpperCase()}*\n` + formatItems(items);
  return { cab, ambCanon, items, text };
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
  const { cab, ambCanon, items, text, error } =
    buildAmbientePayload(req.params.id, req.params.amb, onlySmall);
  if (error) return res.status(404).json({ ok: false, text: error });

  if (String(req.query.format || "").toLowerCase() === "chat") {
    return res.send(text);
  }
  res.json({ ok: true, cabana: cab.id, ambiente: ambCanon, items, text });
});

// Atajo: /buscar?casa_id=05&ambiente=baño&small=1&format=chat
app.get("/buscar", (req, res) => {
  const id  = String(req.query.casa_id || "");
  const amb = String(req.query.ambiente || "");
  if (!id)  return res.status(400).json({ ok: false, text: "Falta casa_id" });
  if (!amb) return res.status(400).json({ ok: false, text: "Falta ambiente" });

  const onlySmall = String(req.query.small ?? "1") === "1";
  const { cab, ambCanon, items, text, error } = buildAmbientePayload(id, amb, onlySmall);
  if (error) return res.status(404).json({ ok: false, text: error });

  if (String(req.query.format || "").toLowerCase() === "chat") {
    return res.send(text);
  }
  res.json({ ok: true, cabana: id, ambiente: ambCanon, items, text });
});

/* =======================
   START
======================= */
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});
