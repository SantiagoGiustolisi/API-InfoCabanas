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
  id: "Puna",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "platos playos grandes", target: 5, unidad: "unidad", original: "" },
        { item: "platos playos medianos", target: 5, unidad: "unidad", original: "" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "" },
        { item: "copas champagne", target: 5, unidad: "unidad", original: "" },
        { item: "vasos", target: 5, unidad: "unidad", original: "" },
        { item: "vasos trago largo", target: 5, unidad: "unidad", original: "" },
        { item: "jarra de vidrio azul", target: 1, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "" },
        { item: "ensaladera acero", target: 5, unidad: "unidad", original: "" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "rayador acero", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor pasta", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual plastica", target: 1, unidad: "unidad", original: "" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "" },
        { item: "cesto de cocina", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón teflon", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "" },
        { item: "espátula teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "" },
        { item: "cuchillos", target: 5, unidad: "unidad", original: "" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "" },
        { item: "tazas café con platos", target: 5, unidad: "unidad", original: "" },
        { item: "posillos café", target: 6, unidad: "unidad", original: "" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "" },

        // Living - Cocina
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "mesa cuadrada", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 5, unidad: "unidad", original: "" },
        { item: "porta llaves pared", target: 1, unidad: "unidad", original: "" },
        { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "cortinas blancas", target: 2, unidad: "unidad", original: "" },
        { item: "mesita ratona", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "tv BGH smart 43", target: 1, unidad: "unidad", original: "" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "" },
        { item: "mini pymer atma", target: 1, unidad: "unidad", original: "" },
        { item: "tv 32 samsei común", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado rca", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado tcl", target: 1, unidad: "unidad", original: "" },
        { item: "ventilador de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
        { item: "heladera koh-i-noor", target: 1, unidad: "unidad", original: "" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "cuadro portaretrato", target: 1, unidad: "unidad", original: "" },
          { item: "adornos", target: 5, unidad: "unidad", original: "" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "banquito", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 2P rayada", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "" },
          { item: "espejo pared", target: 1, unidad: "unidad", original: "" },
          { item: "adornos", target: 5, unidad: "unidad", original: "" },
          { item: "cortina roler black out", target: 1, unidad: "unidad", original: "" },
          { item: "cortina black out", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 1P x2 verdes", target: 2, unidad: "unidad", original: "" }
        ]
      }
    },

    exterior: {
      items: [
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "jarrones", target: 5, unidad: "unidad", original: "" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
}
  ]
}

/* =======================
   HELPERS
======================= */
const STOPWORDS = new Set(["de", "del", "la", "las", "los", "y", "e", "el", "a", "al", "en", "por", "para"]);
const CANON_AMBIENTES = [
  "cocina",
  "habitacion_1",
  "habitacion_2",
  "comedor",
  "baño",
  "utensilios",
  "electrodomesticos" // ✅ agregado
];

const GRANDES = ["cama", "banera", "bañera", "mesa", "silla", "heladera", "cocina", "tv", "televisor"];

const norm = (s = "") =>
  s.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const isChico = (nombre = "") => !GRANDES.some(g => norm(nombre).includes(norm(g)));
const findCabana = (idRaw = "") => (DATA.cabanas || []).find(c => norm(c.id) === norm(idRaw)) || null;

/* ---------- Resolución de ambientes ---------- */
const resolveAmbiente = (input = "") => {
  const t = norm(input);
  if (/\bhabitaciones?\b/.test(t)) return "habitaciones";
  if (/bano|banio|ban/.test(t)) return "baño";
  return t;
};

/* ---------- Formatos ---------- */
const capitalize = (s = "") =>
  s.replace(/\b\p{L}+/gu, w => w.charAt(0).toUpperCase() + w.slice(1));

const formatItems = (items = []) =>
  items.length
    ? items.map(it => `• ${capitalize(it.item)} — ${it.target} ${it.unidad}${Number(it.target) === 1 ? "" : "s"}`).join("\n")
    : "No hay ítems configurados en este ambiente.";

const formatSectioned = (sections = []) => {
  const LABEL = {
    matrimonial: "HABITACIÓN MATRIMONIAL",
    simple_1: "HABITACIÓN SIMPLE 1",
    simple_2: "HABITACIÓN SIMPLE 2"
  };
  return sections.map(s => {
    const title = LABEL[s.sector] || s.sector.toUpperCase();
    return `*${title}*\n${formatItems(s.items)}`;
  }).join("\n\n");
};

/* ---------- Encabezados por ambiente ---------- */
const AMB_LABEL = {
  habitaciones: { title: "HABITACIÓN", icon: "🛏️" },
  baño: { title: "BAÑO", icon: "🚿" },
  cocina: { title: "COCINA", icon: "🍳" },
  comedor: { title: "COMEDOR", icon: "🍽️" },
  exterior: { title: "EXTERIOR", icon: "🌿" },
  electrodomesticos: { title: "ELECTRODOMÉSTICOS", icon: "🔌" } 
};


// ✅ versión definitiva sin agregar “Cabaña” si no está
const headerFor = (idCab, ambCanon) => {
  const meta = AMB_LABEL[ambCanon] || { title: ambCanon.toUpperCase(), icon: "" };
  const icon = meta.icon ? ` ${meta.icon}` : "";

  const clean = idCab.trim(); // usar exactamente lo que está en los datos
  const title = `${clean} | ${meta.title}${icon}`;
  const line = "─".repeat(title.length);
  return `*${title}*\n${line}`;
};

/* ---------- Construcción de respuesta ---------- */
const buildAmbientePayload = (id, amb, onlySmall) => {
  const cab = findCabana(id);
  if (!cab) return { error: "Cabaña no encontrada." };

  const ambCanon = resolveAmbiente(amb);
  const ambData = cab.ambientes?.[ambCanon];
  if (!ambData) return { error: `No encuentro el ambiente "${amb}".` };

  if (Array.isArray(ambData.items)) {
    let items = ambData.items.map(it => ({ ...it }));
    if (onlySmall) items = items.filter(it => isChico(it.item));
    const header = headerFor(cab.id, ambCanon);
    const body = formatItems(items);
    const text = `${header}\n${body}`;
    return { cab, ambCanon, items, text };
  }

  const sections = Object.entries(ambData).map(([sector, obj]) => ({
    sector,
    items: (obj.items || []).filter(it => !onlySmall || isChico(it.item))
  }));
  const header = headerFor(cab.id, ambCanon);
  const text = `${header}\n\n${formatSectioned(sections)}`;
  const items = sections.flatMap(s => s.items.map(it => ({ ...it, sector: s.sector })));
  return { cab, ambCanon, items, text, sections };
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

app.get("/cabanas/:id/ambientes/:amb", (req, res) => {
  const onlySmall = String(req.query.small ?? "1") === "1";
  const result = buildAmbientePayload(req.params.id, req.params.amb, onlySmall);
  if (result.error) return res.status(404).json({ ok: false, text: result.error });
  if (String(req.query.format || "").toLowerCase() === "chat") {
    return res.send(result.text);
  }
  res.json({ ok: true, ...result });
});

app.get("/buscar", (req, res) => {
  const id = String(req.query.casa_id || "");
  const amb = String(req.query.ambiente || "");
  if (!id) return res.status(400).json({ ok: false, text: "Falta casa_id" });
  if (!amb) return res.status(400).json({ ok: false, text: "Falta ambiente" });

  const onlySmall = String(req.query.small ?? "1") === "1";
  const result = buildAmbientePayload(id, amb, onlySmall);
  if (result.error) return res.status(404).json({ ok: false, text: result.error });
  if (String(req.query.format || "").toLowerCase() === "chat") {
    return res.send(result.text);
  }
  res.json({ ok: true, ...result });
});

/* =======================
   START
======================= */
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});