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
          "electrodomesticos": [
            "luz emergencia",
            "heladera gafa",
            "cocina florencia",
            "microondas atma",
            "estractor tst",
            "aire acondicionado philco",
            "jarra winco",
            "tostadora ultracomb",
            "minipimer atma",
            "cafetera yelmo",
            "calefaccion caldera",
            "radiadores x9 - toayeros x3",
            "termotante",
            "secador de pelo atma"
          ],
          "vajilla": [
            "cuchillo x8",
            "tenedor x8",
            "cucharita x8",
            "cuchara x8",
            "plato playo x8",
            "plato mediano x8",
            "plato hondo x8",
            "platito café x8",
            "compotera postre x8",
            "vaso comun x8",
            "copa de agua x7",
            "copa de vino x5",
            "taza de café x8",
            "pocillo x8",
            "sarten x2",
            "olla x3",
            "olla con mango",
            "bandeja acero x3",
            "ensaladera acero x3",
            "pela papa",
            "pisa papa",
            "abre lata",
            "saca corcho",
            "colador",
            "cucharon acero",
            "cuchara madera",
            "espumadera acero",
            "colador de pasta",
            "fuente acero ovalada x2",
            "platos de madera x3",
            "tabla picar madera x2",
            "bandeja horno x2",
            "pizera enlosada",
            "pizera acero",
            "bowl blanco",
            "rayador"
          ],
          "living_cocina": [
            "mesa con vidrio 8 sillas",
            "sillon 3 cuerpos",
            "sillon 1 cuerpo x2",
            "mueble tv empotrado",
            "mesa ratona",
            "reloj de pared",
            "jarron vidrio",
            "mesa + caminito",
            "tv smart sharp",
            "tv philco led",
            "servicio de directv"
          ],
          "parrilla": [
            "parrilla",
            "bracero",
            "palita",
            "atizador",
            "mesa 2 bancos",
            "tender"
          ]
        },
        "baño": [
          "bañera con hidromasaje"
        ],
        "habitaciones": {
          "matrimonial": [
            "cama 2 plazas",
            "mesa de luz x2",
            "veladores x2",
            "estante tv empotrado",
            "frazada 2p x2",
            "caja fuerte",
            "perchas x6",
            "cubrecama de verano"
          ],
          "simple_I": [
            "cama 1 plaza x3",
            "mesa de luz x2",
            "veladores x2",
            "cubrecama verano 1p x3",
            "frazada 1p x3",
            "perchas x6"
          ],
          "simple_II": [
            "cama 1 plaza x3",
            "mesa de luz x2",
            "veladores x2",
            "frazada 1p x3",
            "cubrecama verano 1p x3",
            "mueble tv empotrado",
            "perchas x6"
          ]
        }
      }
    },
    {
      "id": "02",
      "ambientes": {
        "cocina_comedor": {
          "electrodomesticos": [
            "luz emergencia",
            "heladera gafa",
            "cocina florencia",
            "microondas atma",
            "estractor tst",
            "aire acondicionado philco",
            "jarra winco",
            "tostadora ultracomb",
            "minipimer atma",
            "cafetera yelmo",
            "calefaccion caldera",
            "radiadores x9 - toayeros x3",
            "termotante",
            "secador de pelo atma"
          ],
          "vajilla": [
            "cuchillo x6",
            "tenedor x6",
            "cucharita x6",
            "cuchara x6",
            "plato playo x6",
            "plato mediano x6",
            "plato hondo x6",
            "platito café x6",
            "compotera postre x6",
            "vaso comun x6",
            "copa de agua x6",
            "copa de vino x6",
            "taza de café x6",
            "pocillo x6",
            "sarten x2",
            "olla x3",
            "olla con mango",
            "bandeja acero x3",
            "ensaladera acero x3",
            "pela papa",
            "pisa papa",
            "abre lata",
            "saca corcho",
            "colador",
            "cucharon acero",
            "cuchara madera",
            "espumadera acero",
            "colador de pasta",
            "fuente acero ovalada",
            "platos de madera",
            "tabla picar madera x2",
            "bandeja horno x2",
            "pizera enlosada",
            "pizera acero",
            "bowl blanco",
            "rayador"
          ],
          "living_cocina": [
            "mesa con vidrio 8 sillas",
            "sillon 3 cuerpos",
            "sillon 1 cuerpo x2",
            "mueble tv empotrado",
            "mesa ratona",
            "reloj de pared",
            "mesa + caminito",
            "tv smart sharp",
            "tv philco led",
            "servicio de directv"
          ],
          "parrilla": [
            "parrilla",
            "bracero",
            "palita",
            "atizador",
            "mesa 2 bancos",
            "tender"
          ]
        },
        "baño": [
          "bañera con hidromasaje"
        ],
        "habitaciones": {
          "matrimonial": [
            "cama 2 plazas",
            "mesa de luz x2",
            "veladores x2",
            "estante tv empotrado",
            "perchas x6",
            "cubrecama de verano"
          ],
          "simple_I": [
            "cama 1 plaza x3",
            "mesa de luz x2",
            "veladores x2",
            "cubrecama verano 1p x3",
            "frazada 1p x3",
            "perchas x6"
          ],
          "simple_II": [
            "cama 1 plaza x3",
            "mesa de luz x2",
            "veladores x2",
            "frazada 1p x3",
            "cubrecama verano 1p x3",
            "mueble tv empotrado",
            "perchas x6"
          ]
        }
      }
    }
  ]
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
      "GET /menu/:id"
    ]
  });
});

app.get("/cabanas", (_req, res) => {
  res.json({ ok: true, cabanas: (DATA.cabanas || []).map(c => c.id) });
});

app.get("/cabanas/:id", (req, res) => {
  const cab = (DATA.cabanas || []).find(c => c.id === req.params.id);
  if (!cab) return res.status(404).json({ ok: false, error: "Cabaña no encontrada" });
  res.json({ ok: true, data: cab });
});

app.get("/menu/:id", (req, res) => {
  const cab = (DATA.cabanas || []).find(c => c.id === req.params.id);
  if (!cab) return res.status(404).json({ ok: false, error: "Cabaña no encontrada" });
  res.json({ ok: true, id: cab.id, ambientes: Object.keys(cab.ambientes || {}) });
});

/* =======================
   START SERVER
======================= */
app.listen(PORT, () => {
  console.log(`✅ API escuchando en http://localhost:${PORT}`);
});
