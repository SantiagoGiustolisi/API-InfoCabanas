  // =======================
  //        api.js
  // =======================
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
              { item: "platos playos grandes", target: 5, unidad: "unidad" },
              { item: "platos playos medianos", target: 5, unidad: "unidad" },
              { item: "platos hondos", target: 5, unidad: "unidad" },
              { item: "copas de vino", target: 5, unidad: "unidad" },
              { item: "copas de champagne", target: 5, unidad: "unidad" },
              { item: "vasos", target: 5, unidad: "unidad" },
              { item: "vasos de trago largo", target: 5, unidad: "unidad" },
              { item: "jarra de vidrio azul", target: 1, unidad: "unidad" },
              { item: "ollas", target: 2, unidad: "unidad" },
              { item: "sartenes", target: 2, unidad: "unidad" },
              { item: "ensaladeras de acero", target: 5, unidad: "unidad" },
              { item: "bandejas de acero", target: 3, unidad: "unidad" },
              { item: "rallador de acero", target: 1, unidad: "unidad" },
              { item: "escurridor pasta", target: 1, unidad: "unidad" },
              { item: "juguera manual plástica", target: 1, unidad: "unidad" },
              { item: "hielera de acero", target: 1, unidad: "unidad" },
              { item: "cesto de cocina", target: 1, unidad: "unidad" },
              { item: "cuchara de madera", target: 1, unidad: "unidad" },
              { item: "cucharón de teflón", target: 1, unidad: "unidad" },
              { item: "espumadera de teflón", target: 1, unidad: "unidad" },
              { item: "espátula de teflón", target: 1, unidad: "unidad" },
              { item: "cuchilla de mango blanco", target: 1, unidad: "unidad" },
              { item: "pisapure", target: 1, unidad: "unidad" },
              { item: "abrelatas", target: 1, unidad: "unidad" },
              { item: "pelapapas", target: 1, unidad: "unidad" },
              { item: "sacacorcho", target: 1, unidad: "unidad" },
              { item: "tenedores", target: 5, unidad: "unidad" },
              { item: "cuchillos", target: 5, unidad: "unidad" },
              { item: "cucharitas", target: 5, unidad: "unidad" },
              { item: "cucharas", target: 5, unidad: "unidad" },
              { item: "tazas de café con platos", target: 5, unidad: "unidad" },
              { item: "posillos de café", target: 6, unidad: "unidad" },
              { item: "tabla madera", target: 1, unidad: "unidad" },
              // Living - Cocina
              { item: "mueble tv", target: 1, unidad: "unidad" },
              { item: "mesa cuadrada", target: 1, unidad: "unidad" },
              { item: "sillas", target: 5, unidad: "unidad" },
              { item: "porta llaves pared", target: 1, unidad: "unidad" },
              { item: "espejo de pared", target: 1, unidad: "unidad" },
              { item: "cuadros", target: 3, unidad: "unidad" },
              { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad" },
              { item: "cortinas blancas", target: 2, unidad: "unidad" },
              { item: "mesa ratona", target: 1, unidad: "unidad" }
            ]
          },

          baño: {
            items: [
              { item: "vanitory", target: 1, unidad: "unidad" },
              { item: "inodoro + bidet", target: 1, unidad: "conjunto" },
              { item: "cortina de baño", target: 1, unidad: "unidad" }
            ],
            nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño"
          },

          electrodomesticos: {
            items: [
              { item: "tv (BGH) smart 43", target: 1, unidad: "unidad" },
              { item: "microondas (Atma)", target: 1, unidad: "unidad" },
              { item: "jarra (Philips)", target: 1, unidad: "unidad" },
              { item: "cafetera (Oster)", target: 1, unidad: "unidad" },
              { item: "tostadora (Liliana)", target: 1, unidad: "unidad" },
              { item: "minipimer (Atma)", target: 1, unidad: "unidad" },
              { item: "tv 32 (Samsung) común", target: 1, unidad: "unidad" },
              { item: "aire acondicionado (Rca)", target: 1, unidad: "unidad" },
              { item: "aire acondicionado (Tcl)", target: 1, unidad: "unidad" },
              { item: "ventiladores de techo", target: 2, unidad: "unidad" },
              { item: "secador de pelo (Oster)", target: 1, unidad: "unidad" },
              { item: "heladera (Koh-i-noor)", target: 1, unidad: "unidad" },
              { item: "cocina (Florencia)", target: 1, unidad: "unidad" },
              { item: "luz de emergencia", target: 1, unidad: "unidad" }
            ]
          },

          habitaciones: {
            matrimonial: {
              items: [
                { item: "camas de 2 plazas", target: 1, unidad: "unidad" },
                { item: "mesas de luz", target: 2, unidad: "unidad" },
                { item: "veladores", target: 2, unidad: "unidad" },
                { item: "cuadro portaretrato", target: 1, unidad: "unidad" },
                { item: "adornos", target: 5, unidad: "unidad" },
                { item: "mueble tv", target: 1, unidad: "unidad" },
                { item: "banquito", target: 1, unidad: "unidad" },
                { item: "frazada de 2 plazas rayada", target: 1, unidad: "unidad" }
              ]
            },
            simple_1: {
              items: [
                { item: "camas de 1 plaza", target: 3, unidad: "unidad" },
                { item: "veladores", target: 2, unidad: "unidad" },
                { item: "mesas de luz", target: 2, unidad: "unidad" },
                { item: "espejo de pared", target: 1, unidad: "unidad" },
                { item: "adornos", target: 5, unidad: "unidad" },
                { item: "cortina roler black out", target: 1, unidad: "unidad" },
                { item: "cortina black out", target: 1, unidad: "unidad" },
                { item: "frazada de 1 plaza (Color verde)", target: 2, unidad: "unidad" }
              ]
            },
            nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
          },

          exterior: {
            items: [
              { item: "mesa de madera", target: 1, unidad: "unidad" },
              { item: "bancos", target: 2, unidad: "unidad" },
              { item: "tender", target: 1, unidad: "unidad" },
              { item: "jarrones", target: 5, unidad: "unidad" },
              { item: "matafuego", target: 1, unidad: "unidad" }
            ]
          }
        }
      }
    ]
  };

  // =======================
  //   HELPERS Y FORMATEO
  // =======================

  const STOPWORDS = new Set(["de", "del", "la", "las", "los", "y", "e", "el", "a", "al", "en", "por", "para"]);

  const CANON_AMBIENTES = [
    "cocina",
    "habitaciones",      // lógico unificado
    "habitacion_1",
    "habitacion_2",
    "comedor",
    "baño",
    "utensilios",
    "electrodomesticos",
    "exterior"
  ];

  const GRANDES = ["cama", "banera", "bañera", "mesa", "silla", "heladera", "cocina", "tv", "televisor"];

  const norm = (s = "") =>
    s.toString().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const stripEmojis = (s = "") => s.replace(
    /[\u2600-\u27BF\uFE0F\u200D\u23FB-\u23FE\u23E9-\u23F3\u231A-\u231B\u25FD-\u25FE\u24C2\u3030\u303D\u3297\u3299\u1F000-\u1FAFF]+/gu,
    ""
  );

  // 👉 Excepción: "mesa de luz" NO es grande (para que no quede vacío con small=1)
  const isChico = (nombre = "") => {
    const t = norm(nombre);
    if (/\bmesa(s)?\s+de\s+luz\b/.test(t)) return true;
    const PATTERNS = [
      /\bcama(s)?\b/,
      /\bba(ñ|n)era(s)?\b/,
      /\bheladera(s)?\b/,
      /\bcocina(s)?\b/,
      /\btv\b|\btelevisor(es)?\b/,
      /\bsilla(s)?\b/,
      /\bmesa(s)?\b/, // "mesa de luz" ya excluida arriba
    ];
    return !PATTERNS.some(rx => rx.test(t));
  };

  // 🔹 Encuentra la cabaña (seguro)
  const findCabana = (idRaw = "") => {
    const idNorm = norm(idRaw);
    if (!idNorm) return null;

    const cabanas = DATA.cabanas || [];

    // 1) exacto
    let match = cabanas.find(c => norm(c.id) === idNorm);
    if (match) return match;

    // 2) exacto sin palabra "casa"
    const qClean = idNorm.replace(/\bcasa\b/, "").trim();
    match = cabanas.find(c => norm(c.id).replace(/\bcasa\b/, "").trim() === qClean);
    if (match) return match;

    // 3) similitud (umbral alto para evitar falsos positivos)
    const similarity = (a, b) => {
      const L = Math.max(1, Math.max(a.length, b.length));
      let same = 0;
      for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] === b[i]) same++;
      return same / L;
    };
    let best = null, bestScore = 0;
    for (const cab of cabanas) {
      const s = similarity(idNorm, norm(c.id));
      if (s > bestScore) { bestScore = s; best = cab; }
    }
    if (best && bestScore >= 0.85) return best;

    return null;
  };

  // ---------- Resolución de ambientes (alias + numeradas) ----------
  const AMB_MAP = {
    // habitaciones
    "habitacion": "habitaciones",
    "habitaciones": "habitaciones",
    "dormitorio": "habitaciones",
    "dormitorios": "habitaciones",
    "cuarto": "habitaciones",
    "cuartos": "habitaciones",
    // baño
    "bano": "baño",
    "banio": "baño",
    "ban": "baño",
    "baño": "baño",
    "banos": "baño",
    "baños": "baño",
  };

  const resolveHabitacionNumerada = (t) => {
    if (/\bhabitacion(?:_|[\s])?1\b/.test(t)) return "habitacion_1";
    if (/\bhabitacion(?:_|[\s])?2\b/.test(t)) return "habitacion_2";
    return null;
  };

  const resolveAmbiente = (input = "") => {
    const t = norm(input);

    const num = resolveHabitacionNumerada(t);
    if (num) return num;

    if (AMB_MAP[t]) return AMB_MAP[t];

    if (/\bhabitacion(?:es)?\b|\bdormitorio(?:s)?\b|\bcuarto(?:s)?\b/.test(t)) return "habitaciones";
    if (/\bba(?:n|ñ)(?:o|ios)?\b/.test(t)) return "baño";

    return t;
  };

  // ---------- Formatos ----------
  const capitalize = (s = "") =>
    s.replace(/\b\p{L}+/gu, w => w.charAt(0).toUpperCase() + w.slice(1));

  const formatItems = (items = []) =>
    items.length
      ? items.map(it => `• ${capitalize(it.item)} — ${it.target} ${it.unidad}${Number(it.target) === 1 ? "" : "s"}`).join("\n")
      : "No hay ítems configurados en este ambiente.";

  const formatSectioned = (sections = []) => {
    const LABEL = {
      matrimonial: "HABITACIÓN MATRIMONIAL 🛌",
      simple_1: "HABITACIÓN SIMPLE 1 🛏️",
      simple_2: "HABITACIÓN SIMPLE 2 🛏️",
      habitacion_1: "HABITACIÓN 1 🛏️",
      habitacion_2: "HABITACIÓN 2 🛏️",
      planta_alta: "PLANTA ALTA 🪜",
      lavadero: "LAVADERO 💧",
      suite: "SUITE 🛁",
      general: "GENERAL",
      patio: "PATIO 🌞",
      patio_interno: "PATIO INTERNO 🏡",
      pasillo: "PASILLO 🚪",
      quincho: "QUINCHO 🍖",
      jardin_frente: "JARDÍN FRENTE 🌿",
      baño_lavadero: "BAÑO / LAVADERO 🚿"
    };

    return sections.map(s => {
      const title = LABEL[s.sector] || s.sector.toUpperCase();
      let sectionText = `*${title}*\n${formatItems(s.items)}`;
      if (s.nota) sectionText += `\n\n*NOTA:*\n${stripEmojis(s.nota)}`;
      return sectionText;
    }).join("\n\n");
  };

  // =======================
  //   BUILD PAYLOAD (corregido)
  // =======================
 const buildAmbientePayload = (id, amb, onlySmallParam = true) => {
  const cab = findCabana(id);
  if (!cab) return { error: "❌ Cabaña no encontrada." };

  // 1) Canoniza ambiente
  let ambCanon = resolveAmbiente(amb);
  let ambData = cab.ambientes?.[ambCanon];

  // 2) Fallback plural/singular
  if (!ambData) {
    const alt = ambCanon.endsWith("s") ? ambCanon.slice(0, -1) : ambCanon + "s";
    if (cab.ambientes?.[alt]) {
      ambCanon = alt;
      ambData = cab.ambientes[alt];
    }
  }

  // 3) Fusionar subhabitaciones si corresponde
  let virtualMerge = false;
  if (ambCanon === "habitaciones" && (!ambData.items || ambData.items.length === 0)) {
    const subHabs = Object.entries(cab.ambientes.habitaciones || {})
      .filter(([k, v]) => typeof v === "object" && Array.isArray(v.items))
      .map(([key, obj]) => ({
        sector: key,
        items: obj.items,
        nota: obj.nota || null
      }));
    if (subHabs.length) {
      ambData._mergedSections = subHabs;
      virtualMerge = true;
    }
  }

  if (!ambData) return { error: "⚠️ Ambiente no encontrado en esta cabaña." };

  let sections = [];
  let itemsDirectos = [];

  const filterMaybe = (arr, sector) => {
    if (!Array.isArray(arr)) return [];
    let filtered = onlySmallParam ? arr.filter(it => isChico(it.item)) : arr;
    if (filtered.length === 0 && (ambCanon === "habitaciones" || /^habitacion_/.test(sector))) {
      filtered = arr;
    }
    return filtered;
  };

  if (Array.isArray(ambData.items) && ambData.items.length) {
    itemsDirectos = filterMaybe(ambData.items, ambCanon);
  }

  Object.entries(ambData).forEach(([key, obj]) => {
    if (key === "items" || key === "nota" || key === "_mergedSections") return;
    const rawItems = Array.isArray(obj?.items) ? obj.items : [];
    if (rawItems.length > 0) {
      sections.push({
        sector: key,
        items: filterMaybe(rawItems, key),
        nota: obj?.nota || null
      });
    }
  });

  if (virtualMerge && Array.isArray(ambData._mergedSections)) {
    sections.push(...ambData._mergedSections);
  }

  if (sections.length === 0 && itemsDirectos.length === 0) {
    return { error: "⚠️ No se encontraron ítems para ese ambiente." };
  }

  const header = `🏠 *${cab.id.toUpperCase()} | ${ambCanon.toUpperCase()}*`;
  let text = header;

  if (itemsDirectos.length) text += `\n\n${formatItems(itemsDirectos)}`;
  if (sections.length) text += `\n\n${formatSectioned(sections)}`;

  if (ambData.nota && String(ambData.nota).trim() !== "") {
    text += `\n\n*NOTA:*\n${stripEmojis(ambData.nota)}`;
  }

  text = text.replace(/\n{3,}/g, "\n\n");

  const items = [
    ...itemsDirectos,
    ...sections.flatMap(s => s.items.map(it => ({ ...it, sector: s.sector })))
  ];

  return { cab, ambCanon, items, text, sections };
};

  // =======================
  //   ENDPOINTS
  // =======================

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
    if (!result.text || result.text.trim() === "") {
      return res.status(404).json({ ok: false, text: "No se encontró información para ese ambiente." });
    }

    if (String(req.query.format || "").toLowerCase() === "chat") {
      return res.send(result.text);
    }

    res.json({ ok: true, ...result });
  });

  // =======================
  //   START SERVER
  // =======================
  app.listen(PORT, () => {
    console.log(`✅ API escuchando en http://localhost:${PORT}`);
  });
