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
        { item: "copas de champagne", target: 5, unidad: "unidad", original: "" },
        { item: "vasos", target: 5, unidad: "unidad", original: "" },
        { item: "vasos de trago largo", target: 5, unidad: "unidad", original: "" },
        { item: "jarra de vidrio azul", target: 1, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 5, unidad: "unidad", original: "" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "rallador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor pasta", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual plástica", target: 1, unidad: "unidad", original: "" },
        { item: "hielera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cesto de cocina", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla de mango blanco", target: 1, unidad: "unidad", original: "" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "" },
        { item: "cuchillos", target: 5, unidad: "unidad", original: "" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "" },
        { item: "tazas de café con platos", target: 5, unidad: "unidad", original: "" },
        { item: "posillos decafé", target: 6, unidad: "unidad", original: "" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "" },

        // Living - Cocina
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "mesa cuadrada", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 5, unidad: "unidad", original: "" },
        { item: "porta llaves pared", target: 1, unidad: "unidad", original: "" },
        { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "cortinas blancas", target: 2, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" }
      ]
    },

   baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        { item: "tv (BGH) smart 43", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "tv 32 (Samsung) común", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado (Rca)", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado (Tcl)", target: 1, unidad: "unidad", original: "" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "heladera (Koh-i-noor)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "camas de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "cuadro portaretrato", target: 1, unidad: "unidad", original: "" },
          { item: "adornos", target: 5, unidad: "unidad", original: "" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "banquito", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas rayada", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "adornos", target: 5, unidad: "unidad", original: "" },
          { item: "cortina roler black out", target: 1, unidad: "unidad", original: "" },
          { item: "cortina black out", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 1 plaza (Color verde)", target: 2, unidad: "unidad", original: "" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "jarrones", target: 5, unidad: "unidad", original: "" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},  


//Sección Vicuña
{
  id: "Vicuña",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "platos grandes", target: 4, unidad: "unidad", original: "" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "" },
        { item: "vasos", target: 4, unidad: "unidad", original: "" },
        { item: "vasos de trago largo", target: 4, unidad: "unidad", original: "" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "" },
        { item: "pocillos de café", target: 4, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "" },
        { item: "rallador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla de mango blanco", target: 1, unidad: "unidad", original: "" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "" },
        { item: "fuentes de acero", target: 3, unidad: "unidad", original: "" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "" },
        { item: "cesto de basura", target: 1, unidad: "unidad", original: "" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "" },
        { item: "cuchillos", target: 4, unidad: "unidad", original: "" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "" },
        { item: "jarro hervidor de acero", target: 1, unidad: "unidad", original: "" },
        { item: "hielera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "" },

        // Living - Cocina
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadro x3" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "aires acondicionados (Philco)", target: 3, unidad: "unidad", original: "aire acondicionado philco x4" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Hitachi)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Bgh) 32 pulgadas común", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Bgh) 43 pulgadas smart", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas animal print", target: 1, unidad: "unidad", original: "" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cortina black out", target: 2, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "2 camas 1P" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "silla", target: 1, unidad: "unidad", original: "" },
          { item: "alfombra", target: 1, unidad: "unidad", original: "" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "cortina black out", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas de 1 plaza (Color violeta)", target: 2, unidad: "unidad", original: "frazada 1P x2 violetas" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"

    },

    exterior: {
      items: [
        { item: "mesas", target: 2, unidad: "unidad", original: "mesa x2" },
        { item: "bancos", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "palitas", target: 2, unidad: "unidad", original: "palitas x2" }
      ]
    }
  }
},

//Sección Cabaña 10
{
  id: "Cabaña 10",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "platos grandes", target: 3, unidad: "unidad", original: "" },
        { item: "platos medianos", target: 3, unidad: "unidad", original: "" },
        { item: "platos hondos", target: 3, unidad: "unidad", original: "" },
        { item: "copas de agua", target: 3, unidad: "unidad", original: "" },
        { item: "copas de vino", target: 3, unidad: "unidad", original: "" },
        { item: "copas de champagne", target: 3, unidad: "unidad", original: "" },
        { item: "vasos", target: 3, unidad: "unidad", original: "" },
        { item: "tazas de café", target: 3, unidad: "unidad", original: "" },
        { item: "pocillos de café", target: 3, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sartén", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "rallador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "colador", target: 1, unidad: "unidad", original: "" },
        { item: "tenedores", target: 3, unidad: "unidad", original: "" },
        { item: "cuchillos", target: 3, unidad: "unidad", original: "" },
        { item: "cucharas", target: 3, unidad: "unidad", original: "" },
        { item: "cucharitas", target: 3, unidad: "unidad", original: "" },
        { item: "tablas de madera", target: 2, unidad: "unidad", original: "tabla madera x2" },
        { item: "jarra hervidora", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "" },
        { item: "cesto basura", target: 1, unidad: "unidad", original: "" },

        // Living - Cocina
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 4, unidad: "unidad", original: "" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "espejos de pared", target: 6, unidad: "unidad", original: "espejo pared x6" },
        { item: "mueble de pared", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "calefón", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "aires acondicionados (Rca-Tlc)", target: 2, unidad: "unidad", original: "aire acondicionado x2 rca" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Ranser)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "smart tv (Philco)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Philco)", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "" },
        { item: "calefón", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia (No Funciona)", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "ventilador de pie (Liliana)", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "silla", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazada de 2 plazas (Color beige)", target: 1, unidad: "unidad", original: "frazada 2P color beige" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 1P (Color beige)", target: 1, unidad: "unidad", original: "frazada 1P color beige" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "mesa", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "palitas", target: 2, unidad: "unidad", original: "palitas x2" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Cabaña 14
{
  id: "Cabaña 14",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "cuchillos", target: 3, unidad: "unidad", original: "cuchillo x3" },
        { item: "cucharas", target: 3, unidad: "unidad", original: "cuchara x3" },
        { item: "cucharitas", target: 3, unidad: "unidad", original: "cucharita x3" },
        { item: "tenedores", target: 3, unidad: "unidad", original: "tenedor x3" },
        { item: "platos playos", target: 3, unidad: "unidad", original: "plato playo x3" },
        { item: "platos medianos", target: 3, unidad: "unidad", original: "plato mediano x3" },
        { item: "platos hondos", target: 3, unidad: "unidad", original: "plato hondo x3" },
        { item: "tazas", target: 3, unidad: "unidad", original: "tazas x3" },
        { item: "compoteras", target: 3, unidad: "unidad", original: "compotera x3" },
        { item: "copas noruegas", target: 3, unidad: "unidad", original: "copas noruega x3" },
        { item: "vasos largos", target: 3, unidad: "unidad", original: "vasos largos x3" },
        { item: "copas de vino", target: 3, unidad: "unidad", original: "copa de vino x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente ovalada", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "" },
        { item: "olla de acero con mango", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "tablas para asado", target: 2, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "pocillos", target: 3, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "espumaderas de acero", target: 3, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sartén", target: 1, unidad: "unidad", original: "" },
        

        // Living - Cocina
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa 4 sillas" },
        { item: "sillas", target: 4, unidad: "unidad", original: "mesa 4 sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "calefón orbis", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Ultracomb)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Grundig)", target: 1, unidad: "unidad", original: "" },
        { item: "calefón (Orbis)", target: 1, unidad: "unidad", original: "" },
        { item: "heladera (Helctrolux)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado (Tcl-Rca)", target: 2, unidad: "unidad", original: "aire acondicionado x2 tcl-rca" },
        { item: "tv philco 43 (Smart)", target: 1, unidad: "unidad", original: "tv philco 43 pulgadas smart" },
        { item: "tv led (Jvc) 32 común", target: 1, unidad: "unidad", original: "tv led común jvc 32 pulgadas" },
        { item: "cocina (Saccol)", target: 1, unidad: "unidad", original: "" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas (Color blanco)", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza marinera", target: 1, unidad: "unidad", original: "" },
          { item: "mesa auxiliar", target: 1, unidad: "unidad", original: "" },
          { item: "cubrecamas de 1 plaza (Color celeste)", target: 2, unidad: "unidad", original: "cubrecama 1P celeste x2" },
          { item: "frazada de 1 plaza (Color beige)", target: 1, unidad: "unidad", original: "frazada 1P color beige x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO"
    },

    exterior: {
      items: [
        { item: "mesa", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" },
        { item: "palita y atizador", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Clasica

{
  id: "Clásica",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "tazas", target: 2, unidad: "unidad", original: "tazas x2" },
        { item: "pocillos", target: 2, unidad: "unidad", original: "pocillos x2" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "hielera de vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "copas de distintos tamaños", target: 10, unidad: "unidad", original: "copas distintos tamaños x10" },
        { item: "platos playos grandes", target: 2, unidad: "unidad", original: "plato playo grande x2" },
        { item: "platos hondos", target: 2, unidad: "unidad", original: "plato hondo x2" },
        { item: "cubiertos", target: 2, unidad: "unidad", original: "cubiertos x2" },

        // Living - Cocina
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 4, unidad: "unidad", original: "4 sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "espejos de pared", target: 6, unidad: "unidad", original: "espejo pared x6" },
        { item: "mueble de pared", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" }
        ],
         nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "tv (Philco) - (Sin control remoto)", target: 1, unidad: "unidad", original: "tv philco sin control" },
        { item: "aire (Kelvinator)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera nespresso cápsulas", target: 1, unidad: "unidad", original: "nespreso cafetera cápsula" },
        { item: "luz emergencia (Funciona)", target: 1, unidad: "unidad", original: "luz emergencia funciona" },
        { item: "frigobar (Mabe)", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "sillones", target: 2, unidad: "unidad", original: "sillón x2" },
          { item: "mesita auxiliar", target: 1, unidad: "unidad", original: "" },
          { item: "cesto de basura", target: 1, unidad: "unidad", original: "sesto basura" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: []
    }
  }
},

//Sección Moderna
{
  id: "Moderna",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "copas de diferentes", target: 6, unidad: "unidad", original: "copas diferentes x6" },
        { item: "tazas", target: 2, unidad: "unidad", original: "taza x2" },
        { item: "pocillos", target: 2, unidad: "unidad", original: "pocillo x2" },
        { item: "platos playos", target: 2, unidad: "unidad", original: "plato playo x2" },
        { item: "platos hondos", target: 2, unidad: "unidad", original: "plato hondo x2" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" }
        ],
         nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "tv (Philco) 43 smart", target: 1, unidad: "unidad", original: "tv philco 43 smarth" },
        { item: "aire acondicionado (Kelvinator)", target: 1, unidad: "unidad", original: "" },
        { item: "frigobar (Mabe)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera nespresso", target: 1, unidad: "unidad", original: "nespreso cafetera" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama de 2p x1" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "florero", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
          { item: "frazada de 2 plazas (Color beige)", target: 1, unidad: "unidad", original: "frazada beige 2P" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: []
    }
  }
},

//Sección Cardon

{
  id: "Cardon",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "platos grandes", target: 4, unidad: "unidad", original: "4 platos grandes" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "4 platos medianos" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "4 platos hondos" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "4 copas de vino" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "4 copas champagne" },
        { item: "vasos de trago largo", target: 4, unidad: "unidad", original: "4 vasos trago largo" },
        { item: "vasos", target: 4, unidad: "unidad", original: "4 vasos" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "pela papas" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "sacacorchos", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "pisa pure acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchillo de mango blanco", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor de acero", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "fuentes de acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "jarro hervidor de acero", target: 1, unidad: "unidad", original: "" },
        { item: "hielera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "frapera de plástico", target: 1, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "ollas x2" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "tazas de café", target: 12, unidad: "unidad", original: "taza de café x12" },
        { item: "cesto de basura", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa cuadrada", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 5, unidad: "unidad", original: "" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "jarras de cerámica", target: 6, unidad: "unidad", original: "jarras cerámica x6" },
        { item: "cuenco de cerámica", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "secador de pelo", target: 1, unidad: "unidad", original: "" }
        ],
         nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aires acondicionados (Tcl)", target: 2, unidad: "unidad", original: "aire acondicionado tclk2" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Sanyo)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Bgh) 43 smart", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Lg) 32 común", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia (No funciona)", target: 1, unidad: "unidad", original: "no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 1, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cortinas (Color blanco)", target: 2, unidad: "unidad", original: "" },
          { item: "banco", target: 1, unidad: "unidad", original: "" }        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "2 camas 1p" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 1, unidad: "unidad", original: "" },
          { item: "escritorio", target: 1, unidad: "unidad", original: "" },
          { item: "silla de madera", target: 1, unidad: "unidad", original: "" }        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "banco plaza de madera", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Llama

{
  id: "Llama",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "platos grandes", target: 5, unidad: "unidad", original: "5 platos grandes" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "5 platos medianos" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "5 platos hondos" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "5 copas de agua" },
        { item: "copas de champagne", target: 5, unidad: "unidad", original: "5 copas champagne" },
        { item: "vasos de trago largo", target: 5, unidad: "unidad", original: "5 vasos trago largo" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillos de café", target: 5, unidad: "unidad", original: "pocillo café x5" },
        { item: "jarra hervidora (Sin mango)", target: 1, unidad: "unidad", original: "" },
        { item: "fuentes de acero", target: 4, unidad: "unidad", original: "fuente acero x4" },
        { item: "cuencos de vasijas cerámico", target: 10, unidad: "unidad", original: "cuenco vasija ceramico x10" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "cesto de basura", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "pisa pure", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "colador", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla de mango blanco", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "secador de pelo", target: 1, unidad: "unidad", original: "" }
        ],
          nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aire acondicionado (Philco-Tcl)", target: 2, unidad: "unidad", original: "aire acondicionado philco-tcl" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Sanyo)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Winco)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Black y Decker)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Lg)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Bgh)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas (Animal print)", target: 1, unidad: "unidad", original: "frazada 2P animal" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "3 camas 1p" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "cortina black out", target: 2, unidad: "unidad", original: "" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas de 1 plaza (Color verde)", target: 3, unidad: "unidad", original: "" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "mesa", target: 1, unidad: "unidad", original: "" },
        { item: "banco", target: 1, unidad: "unidad", original: "" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "palitas", target: 2, unidad: "unidad", original: "palitas x2" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Cabaña 09

{
  id: "Cabaña 9",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "platos grandes", target: 3, unidad: "unidad", original: "3 platos grandes" },
        { item: "platos medianos", target: 3, unidad: "unidad", original: "3 platosmedianos" },
        { item: "platos hondos", target: 3, unidad: "unidad", original: "3 platos hondos" },
        { item: "copas de agua", target: 3, unidad: "unidad", original: "3 copas de agua" },
        { item: "copas de vino", target: 3, unidad: "unidad", original: "3 copas de vino" },
        { item: "copas de champagne", target: 3, unidad: "unidad", original: "3 copas champagne" },
        { item: "vasos", target: 3, unidad: "unidad", original: "3 vasos" },
        { item: "tenedores", target: 3, unidad: "unidad", original: "tenedor x3" },
        { item: "cuchillos", target: 3, unidad: "unidad", original: "cuchillo x3" },
        { item: "cucharas", target: 3, unidad: "unidad", original: "cuchara x3" },
        { item: "cucharitas", target: 3, unidad: "unidad", original: "cucharita x3" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "rallador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "fuente de acero", target: 2, unidad: "unidad", original: "fuente de acero x2" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "sartén", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera de acero x2" },
        { item: "bowls de plástico", target: 2, unidad: "unidad", original: "bowl plastico x2" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor de plástico", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "azucarera-yerbera de madera", target: 1, unidad: "unidad", original: "azucarera yerbera madera" },

        // 🛋️ Living - Cocina
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 4, unidad: "unidad", original: "4silla" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "perchero", target: 1, unidad: "unidad", original: "" },
        { item: "mueble cocina", target: 1, unidad: "unidad", original: "" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "cortinas de tela", target: 4, unidad: "unidad", original: "cortina tela x4" },
        { item: "cortina black out", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: { items: [

      ],
        nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",

      } // no hay datos en la planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aires acondicionados (Rca-Tcl)", target: 2, unidad: "unidad", original: "aire acondicionado x2 rca-tcl3" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Ranser)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Black y Decker)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "smart tv (Philco)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Philco)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia (No funciona)", target: 1, unidad: "unidad", original: "no funciona" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "" },
        { item: "ventilador de pie (Clever)", target: 1, unidad: "unidad", original: "" },
        { item: "calefón", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2 p" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas (Color beige)", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "1 camas 1p" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 1 plaza (Color lila)", target: 1, unidad: "unidad", original: "" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO"
    },

    exterior: {
            suite: { items: [
              { item: "mesa", target: 1, unidad: "unidad", original: "" },
              { item: "banco", target: 1, unidad: "unidad", original: "" },
              { item: "tender", target: 1, unidad: "unidad", original: "" },
              { item: "parrilla", target: 1, unidad: "unidad", original: "" },
              { item: "palitas", target: 2, unidad: "unidad", original: "palitas x2" },
              { item: "bracero", target: 1, unidad: "unidad", original: "" }
            ] } // no hay datos en la planilla
    }
  }
},

//Sección Cabaña 13

{
  id: "Cabaña 13",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "ensaladeras de acero", target: 4, unidad: "unidad", original: "ensaladera de acero x4" },
        { item: "juguera manual de plástico", target: 1, unidad: "unidad", original: "" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja de acero x3" },
        { item: "platos playos", target: 3, unidad: "unidad", original: "plato playo x3" },
        { item: "platos medianos", target: 3, unidad: "unidad", original: "platomediano x3" },
        { item: "platos hondos", target: 3, unidad: "unidad", original: "plato hondo x3" },
        { item: "tazas de café", target: 3, unidad: "unidad", original: "taza de café x3" },
        { item: "pocillos", target: 3, unidad: "unidad", original: "pocillo x3" },
        { item: "sartén", target: 1, unidad: "unidad", original: "" },
        { item: "rallador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "cuchillos", target: 3, unidad: "unidad", original: "cuchillo x3" },
        { item: "cucharas", target: 3, unidad: "unidad", original: "cuchara x3" },
        { item: "cucharitas", target: 3, unidad: "unidad", original: "cucharita x3" },
        { item: "tenedores", target: 3, unidad: "unidad", original: "tenedor x3" },
        { item: "cuchilla tramontina de mango negro", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pisa puré", target: 1, unidad: "unidad", original: "" },
        { item: "espátula plástica", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "vasos largos", target: 3, unidad: "unidad", original: "vasos largos x3" },
        { item: "copas de agua", target: 3, unidad: "unidad", original: "copa de agua x3" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa redonda de madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillones de madera", target: 2, unidad: "unidad", original: "sillón madera x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
        { item: "cortinas de tela", target: 4, unidad: "unidad", original: "cortinas de tela x4" },
        { item: "cortina roller black out", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Winco)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Moulinex)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Grundig)", target: 1, unidad: "unidad", original: "" },
        { item: "calefón (Volcán)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Saccol)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados (Tcl-Rca)", target: 2, unidad: "unidad", original: "aire acondicionado x2 tcl-rca" },
        { item: "tv (Bgh) 32 pulgadas común", target: 1, unidad: "unidad", original: "tv bgh 32 PULGADAS COMUN" },
        { item: "tv smart 43 (Philco)", target: 1, unidad: "unidad", original: "TV SMART43 PHILCO" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesas de luz x2" },
           { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas (Color beige)", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "mesa auxiliar", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 1 plaza (Color beige y a cuadros)", target: 2, unidad: "unidad", original: "frazada 1P x2 beige y cuadros" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO"
    },

    exterior: {
      items: [
        { item: "mesa", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" },
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" },
        { item: "palita y atizador", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Cabaña 15

{
  id: "Cabaña 15",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x3" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compoteras ", target: 5, unidad: "unidad", original: "compotera x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "vasos de trago largo", target: 5, unidad: "unidad", original: "vasotrago largo x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillos de café", target: 5, unidad: "unidad", original: "pocillo café x5" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "" },
        { item: "sartenes con mango", target: 2, unidad: "unidad", original: "sarten con mango x2" },
        { item: "pirex", target: 1, unidad: "unidad", original: "" },
        { item: "colador de fideos", target: 1, unidad: "unidad", original: "" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "" },
        { item: "tablas de madera", target: 2, unidad: "unidad", original: "tabla de madera x2" },
        { item: "bandejas de acero", target: 4, unidad: "unidad", original: "bandeja de acero x4" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera de acero x3" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "fuentes de acero", target: 3, unidad: "unidad", original: "fuente de acero x3" },
        { item: "tacho de residuo", target: 1, unidad: "unidad", original: "" },
        { item: "tazas de té", target: 5, unidad: "unidad", original: "" },
        { item: "hielera", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos + marinera" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
        { item: "mesa auxiliar con vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "" },
        { item: "perchero", target: 1, unidad: "unidad", original: "" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "" },
        { item: "espejo", target: 1, unidad: "unidad", original: "" },
        { item: "mueble cajonera", target: 1, unidad: "unidad", original: "" },
        { item: "mueble con vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "marinera", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" }
      ]
    },

     baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "microondas (Rca)", target: 1, unidad: "unidad", original: "" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Philco)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Noblex)", target: 1, unidad: "unidad", original: "" },
        { item: "caloventor (Kenbrown , No funciona)", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia (No funciona)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Yelmo)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados (Rca)", target: 2, unidad: "unidad", original: "aire acondicionado RCA x2" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" },        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "cama de 1 plaza marinera", target: 1, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2 beige" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Oriental

{
  id: "Oriental",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "tazas", target: 2, unidad: "unidad", original: "tazas x2" },
        { item: "pocillos", target: 2, unidad: "unidad", original: "pocillos x2" },
        { item: "copas de vino", target: 2, unidad: "unidad", original: "copa de vino x2" },
        { item: "copas de agua", target: 2, unidad: "unidad", original: "copa de agua x2" },
        { item: "copas de champagne", target: 2, unidad: "unidad", original: "copa champagne x2" },
        { item: "cubiertos", target: 2, unidad: "unidad", original: "cubiertos x2" },
        { item: "destapador saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "tetera y azucarera de cerámica", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "jarra (Kanji Home)", target: 1, unidad: "unidad", original: "" },
        { item: "nespresso cafetera", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "frigobar (Vonbom)", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Philco, sin control usa directv)", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado (Rca)", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama de 2p x1" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "velador de pie", target: 1, unidad: "unidad", original: "" },
          { item: "sillones", target: 2, unidad: "unidad", original: "sillones x2" },
          { item: "mesita ratona", target: 1, unidad: "unidad", original: "" },
          { item: "silla", target: 1, unidad: "unidad", original: "" },
          { item: "florero de mimbre", target: 1, unidad: "unidad", original: "" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [] // sin datos en planilla
    }
  }
},

//Sección Indu

{
  id: "Hindu",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "tazas", target: 2, unidad: "unidad", original: "tazas x2" },
        { item: "pocillos", target: 2, unidad: "unidad", original: "pocillo x2" },
        { item: "platos playos", target: 2, unidad: "unidad", original: "plato playo x2" },
        { item: "platos hondos", target: 2, unidad: "unidad", original: "plato hondo x2" },
        { item: "cubiertos", target: 2, unidad: "pares", original: "cubiertos x2 pares" },
        { item: "destapador sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
            suite: {
              items: [
                 { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
                 { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
                 { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }

              ],
             nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño"
            }
          },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "jarra (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "nespresso cafetera", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "frigobar (Vonbom)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Philco)", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado (Kelvinator)", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazadas de 1 plaza (Color beige)", target: 2, unidad: "unidad", original: "frazada 1P beige x2" },
          { item: "veladores", target: 3, unidad: "unidad", original: "velador x3" },
          { item: "juegos de mimbre sillones + mesita", target: 2, unidad: "juego", original: "juego mimbre sillones x2 + mesita" },
          { item: "banco", target: 1, unidad: "unidad", original: "" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [] // sin datos en planilla
    }
  }
},

//Sección Casa 3B
  {
  id: "Casa 3B",
  ambientes: {
    cocina: {
      items: [
        // Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "casuelas", target: 4, unidad: "unidad", original: "casuela x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "destapador", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla de pan", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de acero", target: 1, unidad: "unidad", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "olla set grande", target: 1, unidad: "unidad", original: "olla set x1 grande" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pastas plástico", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera de plástico", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "fuentes de acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "mesa con vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "sillones metálicos", target: 2, unidad: "unidad", original: "sillon metalico x2" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "heladera (Sigma)", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Liliana)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Winco)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados (Wirpol-Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 wirpol-philco" },
        { item: "tv (Admiral)", target: 1, unidad: "unidad", original: "" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "" },
        { item: "todos los controles", target: 1, unidad: "unidad", original: "todos los controles ok" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P x1" },
          { item: "cubrecamas de 2 plazas de verano", target: 2, unidad: "unidad", original: "cubrecama 2P verano x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas de 1 plaza (Color celeste)", target: 2, unidad: "unidad", original: "frazada 1P x2 celestes" },
          { item: "frazadas 1 plaza polar (Color beige)", target: 2, unidad: "unidad", original: "frazada 1P x2 polar beige" },
          { item: "acolchados (Color blanco)", target: 2, unidad: "unidad", original: "acolchado x2 blanco" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" }
      ]
    }
  }
},

//Sección Casa 4
{
  id: "Casa 4",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "tazas de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "" },
        { item: "fuentes de acero ovalada", target: 2, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "tijera", target: 1, unidad: "unidad", original: "" },
        { item: "pela papas", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "" },
        { item: "pisapapas", target: 1, unidad: "unidad", original: "" },
        { item: "colador de fideos", target: 1, unidad: "unidad", original: "" },
        { item: "jarros choperos", target: 3, unidad: "unidad", original: "jarros choperos x3" },
        { item: "hielera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "pirex redondo", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de pizza", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espátula de acero", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "frapera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "batidor manual", target: 1, unidad: "unidad", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "vasos", target: 4, unidad: "unidad", original: "" },
        { item: "mantel de tela", target: 1, unidad: "unidad", original: "" },
        { item: "mesa", target: 1, unidad: "juego", original: "" },
        { item: "sillas", target: 6, unidad: "juego", original: "" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón de 1 cuerpo", target: 1, unidad: "unidad", original: "" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesita", target: 1, unidad: "unidad", original: "" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "" }
      ],
      pasillo: {
        items: [
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" }
        ]
      }
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️\nA tener en cuenta: Contiene 1 baño"
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Whirlpool)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Sony común)", target: 1, unidad: "unidad", original: "" },
        { item: "dvd (Philips)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina", target: 1, unidad: "unidad", original: "" },
        { item: "extractor (SH)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Black y Decker)", target: 1, unidad: "unidad", original: "" },
        { item: "licuadora (Top Home)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "tv (Samsung común)", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados (Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo empotrado gama" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventiladores de techo x3" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "perchas de madera", target: 3, unidad: "unidad", original: "perchas madera x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 1, unidad: "unidad", original: "" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1P x2" },
          { item: "perchas plásticas", target: 4, unidad: "unidad", original: "percha plastica x4" },
          { item: "cubrecolchones", target: 2, unidad: "unidad", original: "cubrecobechos x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parilla", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "" }
      ] 
    }
  }
},

//Sección Casa 6B
{
  id: "Casa 6B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos lisos", target: 4, unidad: "unidad", original: "vaso liso x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "porta sachet", target: 1, unidad: "unidad", original: "" },
        { item: "secaplatos", target: 1, unidad: "unidad", original: "" },
        { item: "pava común", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "tabla para picar de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "espátula de silicona", target: 1, unidad: "unidad", original: "" },
        { item: "cucharon de acero", target: 1, unidad: "unidad", original: "" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "pisapapas", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "pela papas", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cucharon de téflon", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "mesa cuadrada de vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "" }
      ],
      pasillo: {
        items: [
          { item: "espejo grande", target: 1, unidad: "unidad", original: "espejo grande" }
        ]
      }
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Orbis)", target: 1, unidad: "unidad", original: "" },
        { item: "extractor (Espar)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Moulinex)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Yelmo)", target: 1, unidad: "unidad", original: "" },
        { item: "minipymer (Liliana)", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados (Philco)", target: 3, unidad: "unidad", original: "aire acondicionado x3 philco kelvinator" },
        { item: "tvs (Noble smart)", target: 2, unidad: "unidad", original: "tv x2 noble smart" },
        { item: "secador de pelo (Philips)", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "" },
        { item: "calderas radiadores", target: 4, unidad: "unidad", original: "caldera radiadores x4" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "espejos", target: 2, unidad: "unidad", original: "" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "" },
          { item: "banquito", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        // 🌿 Exterior
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},


//Sección Casa 1A
{
  id: "Casa 1 A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compoteras", target: 5, unidad: "unidad", original: "compotera x5" },
        { item: "vasos comunes (solo 3 del juego)", target: 5, unidad: "unidad", original: "vaso común x5 solo 3 del juego" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "compoteras de vidrio", target: 5, unidad: "unidad", original: "compotera de vidrio x5" },
        { item: "abrelata", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pisa papa de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "secaplatos", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "colador de fideos plástico", target: 1, unidad: "unidad", original: "" },
        { item: "fuentes de acero", target: 3, unidad: "unidad", original: "fuente de acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja de acero x3" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera de acero x2" },
        { item: "set olla grande-mediana-chica", target: 1, unidad: "juego", original: "set olla grande-mediana-chica" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de picar", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        
// 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "6 sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
        { item: "bancos puf", target: 2, unidad: "unidad", original: "bancos puf x2" },
        { item: "mesa auxiliar", target: 1, unidad: "unidad", original: "mesa auxiliar" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadro x3" }      ]
    },


    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 2 baños",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Columbia)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Peabody)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "" },
        { item: "televisores (Sony-Bgh)", target: 2, unidad: "unidad", original: "televisores x2 sony bgh" },
        { item: "aires acondicionados x3 - (Marshal, Todos los controles)", target: 3, unidad: "unidad", original: "" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "" },
        { item: "radiadores(4)-toalleros(2)", target: 6, unidad: "unidad", original: "radiadores x4 taqayeros x2" },
        { item: "termo tanque", target: 1, unidad: "unidad", original: "" },
        { item: "control tele (Sony)->(falta control)", target: 1, unidad: "unidad", original: "falta control tele sony" },
        { item: "luz emergencia (No funciona)", target: 1, unidad: "unidad", original: "LUZ EMERGENCIA NO FUNCIONA" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa tv empotrada", target: 1, unidad: "unidad", original: "mesa tv empotrada" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "sillón", target: 1, unidad: "unidad", original: "sillon" },
          { item: "alfombras", target: 2, unidad: "unidad", original: "alfombras x2" },
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "escritorio empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 3, unidad: "unidad", original: "3 perchas" },
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Casa 1B

{
  id: "Casa 1 B",
  ambientes: {
    cocina: {
      items: [
        // 🍽 Vajilla y utensilios
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compoteras", target: 5, unidad: "unidad", original: "compotera x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza de café x5" },
        { item: "tazas de te", target: 5, unidad: "unidad", original: "taza de te x5" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "pocillo x5" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pisa papa acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "secaplatos", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón teflon", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente de acero x1" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja de acero x2" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera de acero x2" },
        { item: "set olla grande-mediana-chica", target: 1, unidad: "juego", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "tablas de picar", target: 2, unidad: "unidad", original: "tabla de picar x2" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "bowls plástico", target: 2, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "individuales", target: 6, unidad: "unidad", original: "individuales x6" },




// 🛋 Living – Cocina
      { item: "mesa", target: 1, unidad: "conjunto", original: "mesa" },
      { item: "sillas", target: 6, unidad: "conjunto", original: "6 sillas" },
      { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
      { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
      { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
      { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
      { item: "bancos puf", target: 2, unidad: "unidad", original: "bancos puf x2" },
      { item: "mesa auxiliar", target: 1, unidad: "unidad", original: "mesa auxiliar" }



      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙\nA tener en cuenta: Contiene 2 baños",
    },


    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "tvs (Sony Bgh)", target: 2, unidad: "unidad", original: "tvx2 sony bgh" },
        { item: "microondas (Samsung)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Aurora)", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Yelmo)", target: 1, unidad: "unidad", original: "" },
        { item: "heladera (Columbia, sin foco)", target: 1, unidad: "unidad", original: "" },
        { item: "aires (Marshal todos los controles)", target: 3, unidad: "unidad", original: "aires x3-marshal todos los controles" },
        { item: "secador de pelo (Atma)", target: 1, unidad: "unidad", original: "" },
        { item: "controles", target: 1, unidad: "unidad", original: "controles ok" },
        { item: "luz emergencia no funciona", target: 1, unidad: "unidad", original: "LUZ EMERGENCIA NO FUNCIONA" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazada de 1 plazas", target: 1, unidad: "unidad", original: "frazada 1p x1" },
          { item: "alfombras", target: 2, unidad: "unidad", original: "alfombra x2" },
          { item: "perchas", target: 4, unidad: "unidad", original: "percha x4" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "escritorio empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 6, unidad: "unidad", original: "percha x6" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" }
      ]
    }
  }
},

//Sección Casa 2A
{
  id: "Casa 2A",
  ambientes: {
    cocina: {
      items: [
        // 🍽 Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "tazas de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "pocillo x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pisa puré", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "secaplato", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cucharas de madera", target: 2, unidad: "unidad", original: "cuchara de madera x2" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón para fideos", target: 1, unidad: "unidad", original: "" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja de acero x3" },
        { item: "ensaladera de acero", target: 1, unidad: "unidad", original: "ensaladera de acero x1" },
        { item: "set olla grande-mediana-chica", target: 1, unidad: "juego", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de picar madera", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "colador de té", target: 1, unidad: "unidad", original: "" },
        { item: "pava de cocina", target: 1, unidad: "unidad", original: "" },
        { item: "colador de fideos", target: 1, unidad: "unidad", original: "" },
// LIVING-COCINA
        { item: "mesa de vidrio", target: 1, unidad: "conjunto", original: "mesa" },
        { item: "sillas", target: 4, unidad: "conjunto", original: "4 sillas" },
        { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
        { item: "repisa con 2 cubos", target: 1, unidad: "unidad", original: "repisa + 2 cubos" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mueble de 2 puertas", target: 1, unidad: "unidad", original: "mueble de 2 puertas" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" }

      ]
    },

   baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },


    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Sigma)", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora (Winco)", target: 1, unidad: "unidad", original: "" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "" },
        { item: "jarra (Winco)", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera (Yelmo)", target: 1, unidad: "unidad", original: "" },
        { item: "licuadora (Moulinex)", target: 1, unidad: "unidad", original: "" },
        { item: "cocina (Escorial Master)", target: 1, unidad: "unidad", original: "" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "aires acondicionados (Rca-Sigma)", target: 2, unidad: "unidad", original: "aire acondicionado x3 rcax2-sigm" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
         
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p acolchado 2p" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "acolchados de 1 plaza", target: 2, unidad: "unidad", original: "acolchado 1p x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

// 🏡 Sección Casa 2B
{
  id: "Casa 2B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos propietarios", target: 4, unidad: "unidad", original: "posillo propietario x4" },
        { item: "compoteras propietarios", target: 4, unidad: "unidad", original: "compotera x4 propietario" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pinzas", target: 1, unidad: "unidad", original: "pinzas" },
        { item: "espátulas de acero", target: 2, unidad: "unidad", original: "espátula x2 ACERO" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa de teflón", target: 1, unidad: "unidad", original: "pisa papa teflon" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizzera" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bandejas fuente de acero", target: 3, unidad: "unidad", original: "bandeja fuente acero x3" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja de acero ovalada", target: 1, unidad: "unidad", original: "bandeja de acero ovalada" },
        { item: "coladores", target: 2, unidad: "unidad", original: "colador x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "olla con mango de acero", target: 1, unidad: "unidad", original: "olla con mango acero" },
        { item: "olla con mango set", target: 1, unidad: "unidad", original: "olla con mango set" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra de vidrio" },
        { item: "fuente de pirex", target: 1, unidad: "unidad", original: "fuente pirex" },
        { item: "platos de madera", target: 2, unidad: "unidad", original: "platos de madera 2" },
        { item: "tabla para picar plástica", target: 1, unidad: "unidad", original: "tabla picar plastica" },
        { item: "tabla para picar de madera", target: 1, unidad: "unidad", original: "tabla para picar madera" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico x1" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel cuerina" },
        { item: "individuales de cuerina", target: 6, unidad: "unidad", original: "6 individuales de cuerina" },

        // 🛋️ Living – Cocina
        { item: "mesa de vidrio", target: 1, unidad: "conjunto", original: "mesa de vidrio" },
        { item: "sillas", target: 4, unidad: "conjunto", original: "4 sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesita ratona", target: 1, unidad: "unidad", original: "mesita ratona" },
        { item: "mueble con estantes y cajón", target: 1, unidad: "unidad", original: "mueble estantes con cajon" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro y bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aires acondicionados", target: 3, unidad: "unidad", original: "aire acondicionados x3 (2 rca 1 cigma)" },
        { item: "tv (Philco y Tophouse)", target: 2, unidad: "unidad", original: "tv philco tophouse x2 controles ok" },
        { item: "licuadora (Moulinex)", target: 1, unidad: "unidad", original: "licuadora moulinex" },
        { item: "cafetera (Atma)", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "tostadora (Black & Decker)", target: 1, unidad: "unidad", original: "tostadora black y decker" },
        { item: "jarra eléctrica (Ultracomb)", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cocina (Escorial Master)", target: 1, unidad: "unidad", original: "cocina escorial master" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" },
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadros" },
          { item: "espejo en puerta de placard", target: 1, unidad: "unidad", original: "espejo puerta placar" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "cubrecama de verano (1,80 m)", target: 1, unidad: "unidad", original: "cubrecama 1,80 verano" },
          { item: "perchas", target: 2, unidad: "unidad", original: "2 perchas" },
          { item: "almohadas", target: 1, unidad: "unidad", original: "almohadas ok" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1P x2" },
          { item: "cubrecamas de verano", target: 2, unidad: "unidad", original: "cubrecama x2 verano" },
          { item: "cubrecamas de invierno", target: 2, unidad: "unidad", original: "cubrecama x2 invierno" },
          { item: "perchas", target: 2, unidad: "unidad", original: "2 perchas" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SÍ"
    },

    exterior: {
      galeria: {
        items: [
          // 🌿 Galería
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    }
  }
},


//Sección Casa 3 A
{
  id: "Casa 3A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (7 personas)
        { item: "cuchillos", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedores", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharitas", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "platos playos", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "platos medianos", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "platos hondos", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platitos de café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compoteras de postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vasos comunes", target: 7, unidad: "unidad", original: "vaso comun x7" },
        { item: "copas de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copas de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "tazas de café", target: 7, unidad: "unidad", original: "taza café x7" },
        { item: "tazas de té", target: 7, unidad: "unidad", original: "taza de té x7" },

        { item: "batidor de silicona", target: 1, unidad: "unidad", original: "batidor de silicona" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espátula" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "seca cubierto", target: 1, unidad: "unidad", original: "seca cubierto" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "juego servilletero", target: 1, unidad: "unidad", original: "juego servilletero" },
        { item: "posa pava", target: 1, unidad: "unidad", original: "posa pava" },
        { item: "colador de pastas de acero", target: 1, unidad: "unidad", original: "colador de pastas acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "coladores de pastas (plástico y acero)", target: 2, unidad: "unidad", original: "colador de pastas x2 plastico y acero" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente de acero ovalada", target: 1, unidad: "unidad", original: "fuente acero ovalada x1" },
        { item: "fuentes pirex", target: 3, unidad: "unidad", original: "fuente pirex x3" },
        { item: "plato de madera", target: 1, unidad: "unidad", original: "plato madera" },
        { item: "pizzeras", target: 2, unidad: "unidad", original: "pizzera x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "pizzera x2" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "tabla de madera para picar", target: 1, unidad: "unidad", original: " tabla de madera picar " },



        // 🛋️ Living - Cocina  (CARTEL WIFI: no tiene)
        { item: "mesa con vidrio", target: 1, unidad: "unidad", original: "mesa con vidrio" },
        { item: "sillas", target: 8, unidad: "unidad", original: "8 sillas" },
        { item: "sillones de 3 cuerpos", target: 2, unidad: "unidad", original: "sillon 3 cuerpos x2" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadros varios" },
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "lavarropas (Drean)", target: 1, unidad: "unidad", original: "LAVARROPAS DREAN" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas (Westinghouse)", target: 1, unidad: "unidad", original: "microonda westinhouse" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "licuadora (Smarthlife)", target: 1, unidad: "unidad", original: "licuadora smarthlife" },
        { item: "tostadora (Moulinex)", target: 1, unidad: "unidad", original: "tostadora moulinex" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "aires acondicionados", target: 3, unidad: "unidad", original: "aire acondicionado x3" },
        { item: "tv (Sony común)", target: 1, unidad: "unidad", original: "tv sony comun" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "purificador de agua (Psa)", target: 1, unidad: "unidad", original: "purificador de agua psa" },
        { item: "calefactores", target: 4, unidad: "unidad", original: "calefactores x4" },
        { item: "secador de pelo empotrado (Gama)", target: 1, unidad: "unidad", original: "secador de pelo empotrado gama" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x1" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazada de 1 plaza", target: 1, unidad: "unidad", original: "frazada 1P x1" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "2 mesas de luz" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "FRAZADA 1p x3" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "perchas", target: 2, unidad: "unidad", original: "perchas x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        // PATIO
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

// =====================
// Sección Casa 5A
// =====================
{
  id: "Casa 5A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "tazas de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "compoteras de acero", target: 4, unidad: "unidad", original: "compotera acero x4" },
        { item: "platos de postre grande", target: 4, unidad: "unidad", original: "plato postre grande x4" },
        { item: "platos de postre chico", target: 4, unidad: "unidad", original: "plato postre chico x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "espátula de acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharón acero" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "cucharón teflón" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflón" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rallador" },
        { item: "hielera", target: 1, unidad: "unidad", original: "hielera" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava común" },
        { item: "escurridor", target: 1, unidad: "unidad", original: "escurridor" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plástico" },
        { item: "tablas de madera", target: 2, unidad: "unidad", original: "tabla madera x2" },
        { item: "plato de madera", target: 1, unidad: "unidad", original: "plato madera" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "colador de pasta plástico", target: 1, unidad: "unidad", original: "colador pasta plástico" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "espátula teflón" },

        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillón 2 cuerpos" },
        { item: "mesita auxiliar con dos estantes", target: 1, unidad: "unidad", original: "mesita auxiliar 2 estantes" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "espejo redondo de pared", target: 1, unidad: "unidad", original: "espejo redondo pared" }
      ],
      pasillo: {
        items: [
          { item: "espejo grande", target: 1, unidad: "unidad", original: "espejo grande" }
        ]
      }
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],

      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "microondas (Mktech)", target: 1, unidad: "unidad", original: "microondas mktech" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "licuadora (Moulinex)", target: 1, unidad: "unidad", original: "licuadora moulinex" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "tvs (Bgh)", target: 2, unidad: "unidad", original: "tv bgh x2" },
        { item: "secapelo (Mktech)", target: 1, unidad: "unidad", original: "secapelo mktech" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcán" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventilador techo x3" },
        { item: "luz emergencia (No funciona)", target: 1, unidad: "unidad", original: "luz emergencia no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble empotrado", target: 1, unidad: "unidad", original: "mueble empotrado" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" },
          { item: "cubre colchón", target: 1, unidad: "unidad", original: "cubre colchón" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "banquito", target: 1, unidad: "unidad", original: "banquito" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" },
          { item: "cubre colchón", target: 1, unidad: "unidad", original: "cubre colchón" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" }
      ]
    }
  }
},


//Sección Casa 6A
{
  id: "Casa 6A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "abre latas", target: 1, unidad: "unidad", original: "abre latas" },
        { item: "pela papas", target: 1, unidad: "unidad", original: "pela papas" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchillas", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "tenedor de asador", target: 1, unidad: "unidad", original: "tender asador" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "pizzera bandeja horno", target: 1, unidad: "unidad", original: "pizzera bandeja horno" },
        { item: "bífera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "tabla de picar", target: 1, unidad: "unidad", original: "tabla picar" },
        { item: "madera de copetín", target: 1, unidad: "unidad", original: "madera de copetín" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "cafetera común", target: 1, unidad: "unidad", original: "cafetera comun" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "tacho de residuo", target: 1, unidad: "unidad", original: "tacho residuo" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },

        // 🛋️ Living - Cocina
        { item: "mesa de vidrio", target: 1, unidad: "conjunto", original: "mesa de vidrio" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "6 sillas" },

        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillones de 2 cuerpos", target: 1, unidad: "unidad", original: "sillón 2 cuerpos" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
        { item: "mueble", target: 1, unidad: "unidad", original: "mueble" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" }
      ]
    },

    baño: {
      suite: { items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }


      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",

      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "tostadora (Peabody)", target: 1, unidad: "unidad", original: "tostadora peabody" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "cafetera (Yelmo)", target: 1, unidad: "unidad", original: "cafetera yelmo" },
        { item: "licuadora (Philips)", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "heladera (Electrolux)", target: 1, unidad: "unidad", original: "heladera electrolux" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "aires acondicionados", target: 3, unidad: "unidad", original: "aires acondicionados x3 rca-philco-kelvinator" },
        { item: "tv smart (Noblex)", target: 1, unidad: "unidad", original: "tv smart noblex" },
        { item: "tv (Admiral)", target: 1, unidad: "unidad", original: "tv admiral" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo (Philips)", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "radiadores", target: 3, unidad: "unidad", original: "radiadores x3" },
        { item: "caldera", target: 1, unidad: "unidad", original: "caldera" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor (Spar)", target: 1, unidad: "unidad", original: "extractor spar" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa para tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "banquito", target: 1, unidad: "unidad", original: "banquito" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },
 pasillo: {
      items: [
        { item: "espejo grande", target: 1, unidad: "unidad", original: "espejo grande" }
      ]
    },

    exterior: {
      items: [
        // PATIO
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "pinche", target: 1, unidad: "unidad", original: "pinche" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" }
      ]
    }
  }
},

//Sección 7A
{
  id: "Casa 7A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuente acero ovalada", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizzera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tablas para picar de madera grandes", target: 2, unidad: "unidad", original: "tabla picar" },
        { item: "tablas para picar de madera chicas", target: 3, unidad: "unidad", original: "" },
        { item: "juguera de plástico", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abrelata", target: 1, unidad: "unidad", original: "abrelatas" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "colador de café", target: 1, unidad: "unidad", original: "" },
        { item: "espatula de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara espagueti de teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "tarritos de acero inoxidable", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera pirex", target: 1, unidad: "unidad", original: "" },
        { item: "sartenes de teflón", target: 3, unidad: "unidad", original: "" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "" },
        { item: "porta sachet", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor de verduras", target: 1, unidad: "unidad", original: "" },
        { item: "panera", target: 1, unidad: "unidad", original: "" },
        { item: "individuales", target: 4, unidad: "unidad", original: "" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "" },
        { item: "magiclick", target: 1, unidad: "unidad", original: "" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "madera de copetín" },

        // 🛋️ Living - Cocina
        { item: "mesa de vidrio", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas x6" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillones de 2 cuerpos", target: 2, unidad: "unidad", original: "sillón 2 cuerpos" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillón 1 cuerpo x2" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "" },
        { item: "silla bebé", target: 1, unidad: "unidad", original: "" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "" },
        { item: "porta llave", target: 1, unidad: "unidad", original: "" },
        { item: "reposeras", target: 2, unidad: "unidad", original: "" },
        { item: "hamaca paraguaya", target: 1, unidad: "unidad", original: "" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        { item: "cocina", target: 1, unidad: "unidad", original: "|" },
        { item: "microondas (Reco)", target: 1, unidad: "unidad", original: "microondas reco" },
        { item: "cafetera (Atma)", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "minipimer (Peabody)", target: 1, unidad: "unidad", original: "minipimer peabody" },
        { item: "tvs smart (Hitachi-Bgh)", target: 2, unidad: "unidad", original: "tv smart hitachi" },
        { item: "ventilador de techo", target: 1, unidad: "unidad", original: "ventilador de techo" },
        { item: "aires acondicionados split (Philco)", target: 3, unidad: "unidad", original: "aire acondicionado split philco" },
        { item: "plancha (Astro)", target: 1, unidad: "unidad", original: "plancha astro" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "extractor (Cata)", target: 1, unidad: "unidad", original: "extractor cata" },
        { item: "jarra (Mounlinex)", target: 1, unidad: "unidad", original: "" },
        { item: "juguera (Ultracomb)", target: 1, unidad: "unidad", original: "" },
        { item: "heladera (Neba)", target: 1, unidad: "unidad", original: "" },
        { item: "caloventor (Liliana) baño", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pela (Gama)", target: 1, unidad: "unidad", original: "" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor liliana baño" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "almohadas extras", target: 4, unidad: "unidad", original: "almohadas extras" },,
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "acolchado (Color blanco con turqueza) 1 plaza", target: 1, unidad: "unidad", original: "acolchado blanco con turqueza 1P" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "juego de mesa", target: 2, unidad: "unidad", original: "" },
        { item: "sillas", target: 8, unidad: "unidad", original: "" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" }
      ]
    }
  }
},

//Sección Casa 7B
{
  id: "Casa 7B",
  ambientes: {
    cocina: {
      items: [
 // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 2, unidad: "unidad", original: "vaso común x2" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "vasos pro", target: 3, unidad: "unidad", original: "vaso pro x3" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuente de acero rectangular", target: 1, unidad: "unidad", original: "fuente acero rectangular" },
        { item: "olla con mango acero", target: 1, unidad: "unidad", original: "olla con mango acero" },
        { item: "colador de pastas de acero", target: 1, unidad: "unidad", original: "colador de pastas acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "juego asado de madera", target: 3, unidad: "unidad", original: "juego asado madera x3" },
        { item: "tabla para picar de madera grande", target: 1, unidad: "unidad", original: "tabla picar madera grande" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "escurridor de verdura", target: 1, unidad: "unidad", original: "escurridor verdura" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "tarritos de acero", target: 3, unidad: "unidad", original: "tarritos acero x3" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchara espagueti de teflón", target: 1, unidad: "unidad", original: "cuchara espagueti teflon" },
        { item: "palo de amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "individuales", target: 4, unidad: "unidad", original: "individuales x4" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel cuerina" },
        { item: "sartén panquequera", target: 1, unidad: "unidad", original: "sartén panquequera" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        
        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "6 sillas" },

        { item: "mesa tv", target: 1, unidad: "unidad", original: "banqueta x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillones 2 cuerpos", target: 2, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "silla bebé", target: 1, unidad: "unidad", original: "silla bebé" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banqueta x2" },
        { item: "reposeras", target: 2, unidad: "unidad", original: "reposeras x2" },
        { item: "reloj", target: 1, unidad: "unidad", original: "banqueta x2" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "mueble vitrina con varios adornos", target: 1, unidad: "unidad", original: "mueble vitrina con varios adornos" },
        { item: "hamaca paraguaya", target: 1, unidad: "unidad", original: "hamaca paraguaya" }
      ]
    },

    electrodomesticos: {
      items: [
      { item: "heladera (Eslabón de lujo)", target: 1, unidad: "unidad", original: "heladera eslabon de lujo" },
      { item: "cocina (OK)", target: 1, unidad: "unidad", original: "cocina ok" },
      { item: "minipimer (Peabody)", target: 1, unidad: "unidad", original: "minipimer peabody" },
      { item: "juguera (Yltracomb)", target: 1, unidad: "unidad", original: "juguera yltracomb" },
      { item: "jarra (Liliana)", target: 1, unidad: "unidad", original: "jarra liliana" },
      { item: "tostadora (Philips)", target: 1, unidad: "unidad", original: "tostadora philips" },
      { item: "cafetera (Home Leader)", target: 1, unidad: "unidad", original: "cafetera home leader" },
      { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
      { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
      { item: "tvs (2 Smart BGH, 1 Philips común)", target: 3, unidad: "unidad", original: "tv x2 smarth bgh - tv philips comun" },
      { item: "airess acondicionados (Coventri, Philco, Abitare)", target: 3, unidad: "unidad", original: "aire acondicionado x3 coventri philco abitare" },
      { item: "ventilador de techo", target: 1, unidad: "unidad", original: "ventilador de techo x1" },
      { item: "plancha (Max Bliss)", target: 1, unidad: "unidad", original: "plancha max bliss" },
      { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
      { item: "caloventor (Liliana)", target: 1, unidad: "unidad", original: "caloventor liliana" },
      { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
      { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" }
      ]
    },
      baño: {
            suite: {
              items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }

              ],
             nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
            }
          },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banquito" },
          { item: "perchas", target: 6, unidad: "unidad", original: "banquito" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" },
          { item: "almohadas extra", target: 2, unidad: "unidad", original: "2 almohadas extra" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "perchas", target: 3, unidad: "unidad", original: "espejo" },
          { item: "mesa ratona", target: 1, unidad: "unidad", original: "espejo" },
          { item: "almohada extra", target: 1, unidad: "unidad", original: "espejo" },
          { item: "frazadas de 1 plaza", target: 5, unidad: "unidad", original: "frazada 1p x2" },
                 ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "atizador" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x3" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "atizador" },
        { item: "juego de mesa y 4 sillas", target: 1, unidad: "unidad", original: "atizador" },
        { item: "juego de mesa y 5 sillas", target: 1, unidad: "unidad", original: "atizador" }
       
       
  
      ]
    }
  }
},

//Sección Casa 10B

{
  id: "Casa 10B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 4, unidad: "unidad", original: "ensaladera acero x4" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "compoteras de acero inoxidable", target: 5, unidad: "unidad", original: "compotera cero inox x2" },
        { item: "pava", target: 1, unidad: "unidad", original: "pava" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente de acero" },
        { item: "fuente de acero calada", target: 1, unidad: "unidad", original: "fuente acero calada" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "destapador", target: 1, unidad: "unidad", original: "destapador" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharón rojo de plástico", target: 1, unidad: "unidad", original: "colador" },

        // 🛋️ Living - Cocina
        { item: "mesa de vidrio", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "repisa con estantes", target: 1, unidad: "unidad", original: "repisa con estantes" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "adornos", target: 1, unidad: "unidad", original: "adornos" },
        { item: "floreros grandes", target: 2, unidad: "unidad", original: "floreros grandes x2" },
      ],
      pasillo: {
        items: [
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros" },
        ]
      }
    },
    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cafetera (Atma)", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "juguera (Ken Brown)", target: 1, unidad: "unidad", original: "juguera ken brown" },
        { item: "jarra", target: 1, unidad: "unidad", original: "jarra" },
        { item: "microondas eslabon de lujo", target: 1, unidad: "unidad", original: "microondas eslabon de lujo" },
        { item: "cocina (Aurora)", target: 1, unidad: "unidad", original: "cocina aurora" },
        { item: "tvs rcz (Samsung y Bgh)", target: 3, unidad: "unidad", original: "tv x3 rcz samsung y bgh" },
        { item: "radiadores", target: 5, unidad: "unidad", original: "radiadores x5" },
        { item: "caldera", target: 1, unidad: "unidad", original: "caldera" },
        { item: "ventiladores", target: 2, unidad: "unidad", original: "ventiladores x2" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "aires acondicionados (Samsumg y Philco)", target: 2, unidad: "unidad", original: "aires acondicionado x2 samsung y philco" },
        { item: "secador de pelo (Maktech)", target: 1, unidad: "unidad", original: "secador de pelo" },
        { item: "extractor conqueros", target: 1, unidad: "unidad", original: "extractor conquerors" },
        { item: "licuadora (Philips)", target: 1, unidad: "unidad", original: "licuadora philips" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "perchero", target: 1, unidad: "unidad", original: "perchero" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO\nAVISO: Ventiladores de la habitación simple no funcionan."
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "mesa redonda de vidrio", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 13A
{
  id: "Casa 13A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "compoteras de cera", target: 4, unidad: "unidad", original: "compotera cera x4" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "pisapapa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pinza tenaza", target: 1, unidad: "unidad", original: "pinza tenaza" },
        { item: "mechero", target: 1, unidad: "unidad", original: "mechero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espátula" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "colador de pastas de acero", target: 1, unidad: "unidad", original: "colador pastas acero" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "rallador de acero", target: 1, unidad: "unidad", original: "rayador acero" },
        { item: "fuentes de acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "posa pava madera", target: 1, unidad: "unidad", original: "posa pava madera" },
        { item: "tabla plástica picar", target: 1, unidad: "unidad", original: "tabla plástica picar" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },


        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillón simple de cuero", target: 1, unidad: "unidad", original: "sillon simple de cuero" }
      ],
      pasillo: {
        items: [
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
        ]
      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera general electric", target: 1, unidad: "unidad", original: "heladera general electric" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "tvs (Philco) smart y (Bgh) led", target: 2, unidad: "unidad", original: "tv x2 philco smarth y bgh led" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "aires acondicionados (Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️\nA tener en cuenta: Contiene 1 baño",
    },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "sillón", target: 1, unidad: "unidad", original: "sillón" },
          { item: "veladores", target: 2, unidad: "unidad", original: "sillón" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3 (una marinera)" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas plásticas", target: 6, unidad: "unidad", original: "sillas plasticas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 13B
{
  id: "Casa 13B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "compoteras de acero", target: 5, unidad: "unidad", original: "compotera cacero x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bowls plástico", target: 1, unidad: "unidad", original: "bowls plástico" },
        { item: "pava común de acero", target: 1, unidad: "unidad", original: "pava común acero" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "colador pasta de acero", target: 1, unidad: "unidad", original: "colador pasta acero" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "vaso medidor", target: 1, unidad: "unidad", original: "vaso medidor" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "bandeja de melamina", target: 1, unidad: "unidad", original: "bandeja de melamina" },
        { item: "tablas para picar de madera", target: 2, unidad: "unidad", original: "tabla picar madera x2" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "pinzas de acero", target: 2, unidad: "unidad", original: "pinzas acero x2" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },


        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillón de 1 cuerpo", target: 1, unidad: "unidad", original: "sillon 1 cuerpo" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "floreros de vidrio", target: 2, unidad: "unidad", original: "florero vidrio x2" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas (Globalhome)", target: 1, unidad: "unidad", original: "microondas globalhome" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "cocina (Eskabe)", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "tvs (Philco) smarth y (Noblex) led", target: 2, unidad: "unidad", original: "tv x2 philco smarth y noblex led" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
    },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p" },
          { item: "acolchado de invierno de 2 plazas", target: 1, unidad: "unidad", original: "acolchado invierno 2p" },
          { item: "perchas", target: 8, unidad: "unidad", original: "perchas x8" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3 (una marinera)" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "sillón", target: 1, unidad: "unidad", original: "sillón" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas plásticas", target: 6, unidad: "unidad", original: "sillas plásticas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 14A
{
  id: "Casa 14A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato medianos x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "pocillo x5" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero", target: 4, unidad: "unidad", original: "bandeja acero x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espátula" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "ensaladera de vidrio", target: 1, unidad: "unidad", original: "ensaladera vidrio" },
        { item: "platos de madera", target: 4, unidad: "unidad", original: "platos de madera x4" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor de pasta" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" }


      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Briket)", target: 1, unidad: "unidad", original: "heladera briket" },
        { item: "tostadora (Yelmo)", target: 1, unidad: "unidad", original: "tostadora yelmo" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "tvs (Hitachi-Philco) smart", target: 2, unidad: "unidad", original: "tv x2 hitachi - philco smart" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo (Atma)", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "aires acondicionados (Sigma-Homeleader)", target: 2, unidad: "unidad", original: "aire acondicionado x2 sigma y homeleader" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "cocina (Escorial)", target: 1, unidad: "unidad", original: "cocina escorial" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "silla", target: 1, unidad: "unidad", original: "silla" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" },
          { item: "perchas plásticas", target: 4, unidad: "unidad", original: "perchas plásticas x4" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza (una marinera)", target: 2, unidad: "unidad", original: "cama 1p x2 (una marinera)" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazadas de 1 plaza", target: 5, unidad: "unidad", original: "frazada 1p x5" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
          { item: "perchas madera", target: 3, unidad: "unidad", original: "perchas madera x3" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas plásticas", target: 4, unidad: "unidad", original: "sillas plásticas x4" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 14B

{
  id: "Casa 14B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "pocillos", target: 6, unidad: "unidad", original: "pocillo x6" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "fuentes de acero", target: 2, unidad: "unidad", original: "fuente de acero x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava común" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra de vidrio" },
        { item: "platos de madera", target: 6, unidad: "unidad", original: "plato de madera x6" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja de horno x1" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizzera x1" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "tabla para picar de madera", target: 2, unidad: "unidad", original: "tabla para picar de madera x2" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "fuente de vidrio", target: 1, unidad: "unidad", original: "fuente de vidrio" },
        { item: "ensaladera de vidrio", target: 1, unidad: "unidad", original: "ensaladera de vidrio" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "colador de pastas de acero", target: 1, unidad: "unidad", original: "colador de pastas de acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rallador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "cuchara para cortar y servir tortas", target: 1, unidad: "unidad", original: "cuchara para cortar y servir tortas" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "sillón 3 cuerpos" },
        { item: "sillas con mesa ratona", target: 1, unidad: "unidad", original: "silla x2 más mesa ratona" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro x1" },
        { item: "sillita bebé", target: 1, unidad: "unidad", original: "sillita bebé" }
      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "tv (Noblex) smarth", target: 1, unidad: "unidad", original: "tv noblex smarth" },
        { item: "dvd (Sony) + equipo de sonido", target: 1, unidad: "unidad", original: "dvd sony + equipo de sonido" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "cocina (Orbis)", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "aire acondicionado (Kelvinator)", target: 1, unidad: "unidad", original: "aire acondicionado kelvinator" },
        { item: "jarra (Yelmo)", target: 1, unidad: "unidad", original: "jarra yelmo" },
        { item: "tostadora (Oster)", target: 1, unidad: "unidad", original: "tostadora oster" },
        { item: "licuadora (Philips)", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "sandwichera (Black Decker)", target: 1, unidad: "unidad", original: "sandwichera black decker" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "secador de pelo (Sin marca)", target: 1, unidad: "unidad", original: "secador de pelo sin marca" },
        { item: "ventilador de pared (Atma)", target: 1, unidad: "unidad", original: "ventilador de pared atma" },
        { item: "panel eléctrico (Termotech)", target: 1, unidad: "unidad", original: "panel eléctrico termotech" },
        { item: "plancha", target: 1, unidad: "unidad", original: "plancha" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños"
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 3, unidad: "unidad", original: "velador x3" },
          { item: "espejos de pared", target: 1, unidad: "unidad", original: "espejo de pared x2" },
          { item: "frazadas de 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p x1" }
        ]
      },

      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "frazada de 1 plaza", target: 1, unidad: "unidad", original: "frazada 1p x1" },
          { item: "perchas plásticas", target: 2, unidad: "unidad", original: "perchas plásticas x2" }
        ],
        nota: "La habitación Simple 1 se encuentra en planta alta.\nA tener en cuenta: Separación de camas: NO | Unión de camas: SÍ"
      },

      simple_2: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "mueble cajonero", target: 1, unidad: "unidad", original: "mueble cajonero" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazadas 1p x2" },
          { item: "perchas plásticas", target: 2, unidad: "unidad", original: "perchas plásticas x2" }
        ]
      }
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},


//Sección Casa 15B
{
  id: "Casa 15B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuentes de acero", target: 1, unidad: "unidad", original: "fuente de acero x" },
        { item: "abre latas", target: 2, unidad: "unidad", original: "abre lata x2" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "fuente cuadrada pyrex", target: 1, unidad: "unidad", original: "fuente cuadrada pyrex" },
        { item: "platos de acero hondo", target: 4, unidad: "unidad", original: "platos de acero hondo x4" },
        { item: "ensaladeras acero, juego con los 4 platos hondos", target: 2, unidad: "unidad", original: "ensaladera acero x2 juego con los 4 platos hondos" },
        { item: "casuelas de melamina", target: 4, unidad: "unidad", original: "casuela de melamina x4" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervodor" },
        { item: "tapa de microondas", target: 1, unidad: "unidad", original: "tapa de microondas" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "bandeja tipo pizzera", target: 1, unidad: "unidad", original: "bandeja tipo pizera" },
        { item: "juegos de asado (platos x4 + tenedor y pinche)", target: 1, unidad: "juego", original: "juego asado platos x4 + tenedor y pinche" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "bandejas de horno", target: 3, unidad: "unidad", original: "bandeja de horno x3" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "cuchilla chayra", target: 1, unidad: "unidad", original: "cuchilla chayra" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espátula de acero", target: 1, unidad: "unidad", original: "espatula acero" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "repisa con el router", target: 1, unidad: "unidad", original: "repisa con el rooetr" },
        { item: "difusor de ambiente", target: 1, unidad: "unidad", original: "difusor de ambiente" },
        { item: "mueble para la vajilla", target: 1, unidad: "unidad", original: "mueble para la vajilla" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" },
        { item: "sillón 3 cuerpos con 3 almohadones", target: 1, unidad: "unidad", original: "sillon 3 cuerpos 3 almohadones" }
      ]
    },

    pasillo: {
      items: [
        { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
        { item: "mueble", target: 1, unidad: "unidad", original: "mueble" }
      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "luces de emergencia", target: 2, unidad: "unidad", original: "luces de emergencia x2" },
        { item: "heladera (Conqueror)", target: 1, unidad: "unidad", original: "heladera conqueror" },
        { item: "cocina (Orbis)", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "microondas (Likon)", target: 1, unidad: "unidad", original: "microondas likon" },
        { item: "tvs (Tcl) smart - (Philips) smart", target: 2, unidad: "unidad", original: "tv x2 tcl smarth y philips smarth" },
        { item: "ventilador de pie (Liliana)", target: 1, unidad: "unidad", original: "ventilador de pie liliana" },
        { item: "ventilador de pared (Liliana)", target: 1, unidad: "unidad", original: "ventilador pared liliana" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "minipimer (Philip)", target: 1, unidad: "unidad", original: "minipimer philip" },
        { item: "cafetera (Smartlife)", target: 1, unidad: "unidad", original: "cafetera smartlife" },
        { item: "licuadora (Yelmo)", target: 1, unidad: "unidad", original: "licuadora yelmo" },
        { item: "jarra (Kenbroun)", target: 1, unidad: "unidad", original: "jarra kenbroun" },
        { item: "calefactores", target: 2, unidad: "unidad", original: "calefactores x2" },
        { item: "aires acondicionados (Panoramic Hitachi)", target: 2, unidad: "unidad", original: "aire acondicionado x2 panoramic hitachi" },
        { item: "secador de pelo (Philips)", target: 1, unidad: "unidad", original: "secador de pelo philips" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "banqueta", target: 1, unidad: "unidad", original: "banqueta" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2P x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "sillones materos", target: 2, unidad: "unidad", original: "sillon matero x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ],

      terraza: {
        items: [
          { item: "mesa redonda", target: 1, unidad: "unidad", original: "mesa redonda" },
          { item: "sillas plásticas", target: 2, unidad: "unidad", original: "sillas plásticas x2" }
        ]
      }
    }
  }
},

// 🏠 Sección Casa 8
{
  id: "Casa 8",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 3, unidad: "unidad", original: "posillo x3" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango verde", target: 1, unidad: "unidad", original: "olla con mango ver" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cucharón de madera", target: 1, unidad: "unidad", original: "cucharón madera" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "espumadera teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca platos" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente pires", target: 1, unidad: "unidad", original: "fuente pires" },
        { item: "bandejas de madera", target: 2, unidad: "unidad", original: "bandeja madera x2" },
        { item: "tabla de picar madera", target: 1, unidad: "unidad", original: "tabla de picar de madera" },
        { item: "colador de pastas de plástico", target: 1, unidad: "unidad", original: "colador de pastas plastico" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja de horno" },

        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "banqueta cubo", target: 2, unidad: "unidad", original: "banquette cubo x2" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" }
      ]
    },

    pasillo: {
      items: [
        { item: "espejo grande", target: 1, unidad: "unidad", original: "espejo grande" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tv (Philips Smart)", target: 2, unidad: "unidad", original: "tv a philips x2 smarth" },
        { item: "microondas (BGH)", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "horno (Zenith)", target: 1, unidad: "unidad", original: "horno zenith" },
        { item: "tostadora (Windo)", target: 1, unidad: "unidad", original: "tostadora windo" },
        { item: "cocina (Escabe)", target: 1, unidad: "unidad", original: "cocina escabe" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "aire acondicionado (TCL Top House)", target: 2, unidad: "unidad", original: "aire acondicionado x2 tel top house" },
        { item: "secador de pelo (Gama)", target: 2, unidad: "unidad", original: "secador de pelo gama" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada x2" }
        ]
      },
      simple: {
        items: [
          { item: "cama de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "frazadas", target: 3, unidad: "unidad", original: "frazada x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},


  //Sección Casa 9A

 // 🏡 Sección Casa 9A
{
  id: "Casa 9A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "jarritos de vidrio grandes", target: 5, unidad: "unidad", original: "jarrito de vidrio grande x5" },
        { item: "jarritos de vidrio chicos", target: 5, unidad: "unidad", original: "jarrito de vidrio chico x5" },
        { item: "jarritos choperos", target: 5, unidad: "unidad", original: "jarrito chopero x5" },
        { item: "cafetera de cocina de vidrio", target: 1, unidad: "unidad", original: "cafetera de cocina de vidrio" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "budinera de acero", target: 1, unidad: "unidad", original: "budinera acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "banquetas cubo", target: 2, unidad: "unidad", original: "banqueta cubo x2" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" }
      ],
      pasillo: {
        items: [
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo grande" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera (Bambi)", target: 1, unidad: "unidad", original: "heladera bambi" },
        { item: "cafetera (Top House)", target: 1, unidad: "unidad", original: "cafetera top house" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "juguera", target: 1, unidad: "unidad", original: "juguera" },
        { item: "tv (BGH)", target: 1, unidad: "unidad", original: "tv bgh" },
        { item: "aires acondicionados (RCA-Surrey)", target: 2, unidad: "unidad", original: "aire acondicionado x2 rca surrey" },
        { item: "microondas (Mktech)", target: 1, unidad: "unidad", original: "microondas mktech" },
        { item: "jarra eléctrica (Ultracomb)", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cocina (Volcan)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "MINIPYMER ATMA" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro y bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️\nA tener en cuenta: Contiene 1 baño",
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" }
        ]
      },
      simple: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "frazadas", target: 3, unidad: "unidad", original: "frazada x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SÍ"
    },

    exterior: {
      items: [
        // 🌿 Exterior
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},


//Sección Casa 9B

{
  id: "Casa 9B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "pocillos de vidrio", target: 3, unidad: "unidad", original: "posillo vidrio x3" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "espátula acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharón acero" },
        { item: "cucharon madera", target: 1, unidad: "unidad", original: "cucharon madera" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "bandejas de desayuno", target: 2, unidad: "unidad", original: "bandeja desayuno x2" },
        { item: "porta servilletas", target: 1, unidad: "unidad", original: "porta servilletas" },
        { item: "tablas de madera redonda", target: 2, unidad: "unidad", original: "tabla madera redonda x2" },
        { item: "tabla madera cuadrada", target: 1, unidad: "unidad", original: "tabla madera cuadrada" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "fuentes de vidrio", target: 3, unidad: "unidad", original: "fuente de vidrio x3" },
        { item: "bandeja de acero copetín", target: 1, unidad: "unidad", original: "bandeja acero copetin" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor de pasta" },
        { item: "fuente cuadrada de acero", target: 1, unidad: "unidad", original: "fuente cuadrada acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "jarra plástico", target: 1, unidad: "unidad", original: "jarra plastico" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "azucarera de acero", target: 1, unidad: "unidad", original: " azucarera acero " },


  // 🪑 Living - Cocina

        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "sillón de 3 cuerpos en L", target: 1, unidad: "unidad", original: "sillon 3 cuerpos en L" },
        { item: "mesa ratona con vidrio", target: 1, unidad: "unidad", original: "mesa ratona con vidrio" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "jarrones de vidrio", target: 2, unidad: "unidad", original: "jarrones de vidrio x2" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" }
      ],
      pasillo: {
        items: [
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "tv (Sony)", target: 1, unidad: "unidad", original: "tv sony" },
        { item: "secador de pelo (Rowenta)", target: 1, unidad: "unidad", original: "secador de pelo rowenta" },
        { item: "heladera (Patrick)", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "cafetera (Moulinex)", target: 1, unidad: "unidad", original: "cafetera moulinex" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventiladores de techo x3" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "aires acondicionados (Surrey)", target: 2, unidad: "unidad", original: "aire acondicionado x2 surrey" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "minipymer (Atma)", target: 1, unidad: "unidad", original: "MINIPYMER ATMA" }
      ]
    },
       baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️\nA tener en cuenta: Contiene 1 baño",
    },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador empotrados x2" },
          { item: "banco de pie de cama", target: 1, unidad: "unidad", original: "banco de pie de cama" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p" },
          { item: "acolchados", target: 2, unidad: "unidad", original: "acolchado 2p" },
        ]
      },
      simple: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadros con espejo", target: 3, unidad: "unidad", original: "cuadro con espejo x3" },
          { item: "frazadas", target: 4, unidad: "unidad", original: "frazada x4" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 15A

{
  id: "Casa 15A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copa de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente de acero" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "compotera de acero", target: 4, unidad: "unidad", original: "compotera acero x4" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "fuente de vidrio redonda", target: 1, unidad: "unidad", original: "fuente de vidrio redonda" },
        { item: "juego completo de teflón", target: 1, unidad: "unidad", original: "juego completo teflon" },
        { item: "cuchara espagueti", target: 1, unidad: "unidad", original: "cucharaespagueti" },
        { item: "cuchara espumadera", target: 1, unidad: "unidad", original: "cuchara espumadera" },
        { item: "cucharon y espumadera", target: 1, unidad: "unidad", original: "cucaron y espumadera" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "porta madera con platos", target: 4, unidad: "unidad", original: "porta madera con platos x4" },
        { item: "tabla para picar de madera", target: 2, unidad: "unidad", original: "tabla de picar de madera x2" },
        { item: "exprimidor manual", target: 1, unidad: "unidad", original: "exprimidor manual" },
        { item: "bandeja de melamina", target: 1, unidad: "unidad", original: "bandeja de melamina" },
        { item: "ralladores", target: 2, unidad: "unidad", original: "rayador x2" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava de acero" },
        { item: "frapera de acero", target: 1, unidad: "unidad", original: "frapera acero" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "frapera plastica" },
        { item: "bowls", target: 2, unidad: "unidad", original: "bowls x2" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor de pasta" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "chayra", target: 1, unidad: "unidad", original: "chayra" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "cuchilla mango blanco" },
        { item: "cuchilla mango madera", target: 1, unidad: "unidad", original: "cuchilla mango madera" },
        { item: "tenedor de plástico grande", target: 1, unidad: "unidad", original: "tenedor plastico grande" },
        { item: "rallador de queso", target: 1, unidad: "unidad", original: "rayador de queso" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "espumadera grande", target: 1, unidad: "unidad", original: "espumadera grande" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "juego de tenedor-cuchillo asado", target: 1, unidad: "unidad", original: "juego de tenedor cuchillo asado" },

  // 🪑 Living - Cocina

        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpos x2" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon de 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "florero grande", target: 1, unidad: "unidad", original: "florero grande" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "difusor de ambiente", target: 1, unidad: "unidad", original: "difusor de ambiente" },
        { item: "mueble placar para vajilla", target: 1, unidad: "unidad", original: "mueble placar para vajilla" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "microondas (RCA)", target: 1, unidad: "unidad", original: "microondas RCA" },
        { item: "aire acondicionado (Panoramic-Hitachi)", target: 2, unidad: "unidad", original: "aire acondicionado x2 panoramic-hitachi" },
        { item: "calefactores", target: 2, unidad: "unidad", original: "calefactores x2" },
        { item: "ventilador de pared (Liliana)", target: 1, unidad: "unidad", original: "ventilador de pared liliana" },
        { item: "ventilador de pie (Atma)", target: 1, unidad: "unidad", original: "ventilador de pie atma" },
        { item: "secador de pelo (Rowenta)", target: 1, unidad: "unidad", original: "secador de pelo rowenta" },
        { item: "heladera (Patrick)", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "jarra (Black y Deker)", target: 1, unidad: "unidad", original: "jarra black y deker" },
        { item: "minipimer (Philips)", target: 1, unidad: "unidad", original: "minipymer philips" },
        { item: "licuadora (Ramser)", target: 1, unidad: "unidad", original: "licuadora ramser" },
        { item: "tvs smart (Tonomac)", target: 2, unidad: "unidad", original: "tv x2 smarth tonomac" },
        { item: "cafetera (Smartlife)", target: 1, unidad: "unidad", original: "cafetera smartlife" },
        { item: "luces de emergencia", target: 2, unidad: "unidad", original: "luz emergencia x2" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "baul pie de cama", target: 1, unidad: "unidad", original: "baul pie de cama" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "alfombras de piel", target: 2, unidad: "unidad", original: "alfombras de piel x2" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" }
        ]
      },
      simple: {
        items: [
          { item: "cama de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazadas de 1 plaza (Color marrón(2)-A cuadros(2))", target: 4, unidad: "unidad", original: "frazada 1p x4" },
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "mesa 2 bancos" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
      ],

      terraza: {
        items: [
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "sillas plásticas", target: 2, unidad: "unidad", original: "sillas plásticas x2" }
        ]
      }
    }
  }
},
// Sección Casa 16A
{
  id: "Casa 16A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas-cucharitas largas", target: 4, unidad: "unidad", original: "cuchara x4 + cucharitas largas" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 3, unidad: "unidad", original: "copa champagne x3" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "pinzas", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cepillo lava vaso", target: 1, unidad: "unidad", original: "sepillo lava vaso" },
        { item: "juego cuchilla más cuchillos (Mika)", target: 1, unidad: "unidad", original: "juego cuchilla mas cuchillos marca mika" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "jarritos submarino", target: 7, unidad: "unidad", original: "jarrito submarino x7" },
        { item: "compoteras de vidrio", target: 4, unidad: "unidad", original: "compoteras de vidrio x4" },
        { item: "fuentes pyrex rectangular", target: 2, unidad: "unidad", original: "fuente pyrex rectangular x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "frapera", target: 1, unidad: "unidad", original: "frapera" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "ensaladera plástica", target: 1, unidad: "unidad", original: "ensaladera plastica" },
        { item: "platos de melamina", target: 8, unidad: "unidad", original: "platos de melamina x8" },
        { item: "taper", target: 1, unidad: "unidad", original: "taper" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "jarrito medidor de vidrio", target: 1, unidad: "unidad", original: "jarrito medidor de vidrio" },
        { item: "posa pava", target: 1, unidad: "unidad", original: "posa pava" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor de teflón", target: 1, unidad: "unidad", original: "jarro hervidor de teflon" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pizzeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "condimenteros", target: 3, unidad: "unidad", original: "condimentero x3" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "sillon 3 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "adornos", target: 1, unidad: "unidad", original: "adornos" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "luces de emergencia", target: 2, unidad: "unidad", original: "luces de emergencia" },
        { item: "heladera (Briket)", target: 1, unidad: "unidad", original: "heladera briket" },
        { item: "microondas (Global Home)", target: 1, unidad: "unidad", original: "microondas global home" },
        { item: "cocina (Escorial)", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "aires acondicionados (RCA - Yorck)", target: 3, unidad: "unidad", original: "aire acondicionado x3 rca x2 - yorck" },
        { item: "TVs Smart (RCA)", target: 3, unidad: "unidad", original: "tv x3 smart rca" },
        { item: "caloventor de pared (Clever)", target: 1, unidad: "unidad", original: "caloventor de pared clever" },
        { item: "leño hogar", target: 1, unidad: "unidad", original: "leño hogar" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "ventilador de pie (Liliana)", target: 1, unidad: "unidad", original: "ventilador de pie liliana" },
        { item: "secador de pelo empotrado (Gama)", target: 1, unidad: "unidad", original: "secador de pelo empotrado gama" },
        { item: "cafetera (Smart Life)", target: 1, unidad: "unidad", original: "cafetera smart life" },
        { item: "minipimer (Braun)", target: 1, unidad: "unidad", original: "minipimer braun" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "tostadora (Peabody)", target: 1, unidad: "unidad", original: "tostadora peabody" },
        { item: "juguera (Smart Life)", target: 1, unidad: "unidad", original: "juguera smart life" },
        { item: "extractor (Longvie)", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "lavarropas (Drean)", target: 1, unidad: "unidad", original: "lavarropas drean" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "plancha (Brolux)", target: 1, unidad: "unidad", original: "plancha brolux" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños"
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubrecama de 2 plazas (Color beige)", target: 1, unidad: "unidad", original: "cubrecama beige 2p" },
          { item: "frazadas de 2 plazas Alcoyana", target: 2, unidad: "unidad", original: "frazadas 2p x2 alcoyana" },
          { item: "frazadas de 2 plazas King Size", target: 1, unidad: "unidad", original: "frazadas 2p king size" }
        ]
      },
      simple: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "pilow", target: 1, unidad: "unidad", original: "pilow" },
          { item: "cubrecama de 1 plaza (Color turquesa)", target: 1, unidad: "unidad", original: "cubrecama 1p turquesa" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "frazadas de 1.5 plaza", target: 2, unidad: "unidad", original: "frazada 1.5p x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "conjunto", original: "mesa 6 sillas" }
      ]
    }
  }
},

//Sección Casa 16B
{
  id: "Casa 16B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas + cucharitas largas", target: 4, unidad: "unidad", original: "cuchara x4 + cucharitas largas" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copa de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa pure" },
        { item: "bandejas de pyrex", target: 3, unidad: "unidad", original: "bandeja pyrex x3" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "vaso medidor de vidrio", target: 1, unidad: "unidad", original: "vaso medidor de vidrio" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "ensaladeras de vidrio", target: 2, unidad: "unidad", original: "ensaladera de vidrio x2" },
        { item: "hielera", target: 1, unidad: "unidad", original: "hielera" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "compoteras de vidrio", target: 4, unidad: "unidad", original: "compotera vidrio x4" },
        { item: "jarrito café de vidrio", target: 4, unidad: "unidad", original: "jarrito café vidrio x4" },
        { item: "jarrito submarino", target: 4, unidad: "unidad", original: "jarrito submarino x4" },
        { item: "vasos lisos", target: 4, unidad: "unidad", original: "vaso liso x4" },
        { item: "juego de cuchillos marca mika", target: 1, unidad: "unidad", original: "juego de cuchillos marca mika" },
        { item: "magiclick", target: 1, unidad: "unidad", original: "magiclick" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "espátula de acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchara de acero", target: 1, unidad: "unidad", original: "cuchara acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "platos de asado", target: 5, unidad: "unidad", original: "platos asado x5" },
        { item: "especiero", target: 1, unidad: "unidad", original: "especiero" },
        { item: "tacho basura", target: 1, unidad: "unidad", original: "tacho basura" },

  // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "sillones de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x2" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesta" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" }
      ],
      pasillo: {
        items: [
         { item: "cuadro grande", target: 1, unidad: "unidad", original: "cuadro grande" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Briket)", target: 1, unidad: "unidad", original: "heladera briket" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "microondas (Global Home)", target: 1, unidad: "unidad", original: "microondas global home" },
        { item: "cocina (Escorial)", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "extractor (Longvie)", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "tvs (RCA) smart", target: 3, unidad: "unidad", original: "televisores x3 RCA smarth" },
        { item: "aires acondicionados (RCA - Yorck)", target: 3, unidad: "unidad", original: "aire acondicionado x3 RCA x2 - yorck" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "caloventor (Clever)", target: 1, unidad: "unidad", original: "caloventor clever" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo x2 gama" },
        { item: "cafetera (Smarthlife)", target: 1, unidad: "unidad", original: "cafetera smarthlife" },
        { item: "minipimer (Broun)", target: 1, unidad: "unidad", original: "minipymer broun" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "tostadora (Peabody)", target: 1, unidad: "unidad", original: "tostadora peabody" },
        { item: "juguera (Smarthlife)", target: 1, unidad: "unidad", original: "juguera smarthlife" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "lavarropas (Dream)", target: 1, unidad: "unidad", original: "lavarropas dream" },
        { item: "leño hogar", target: 1, unidad: "unidad", original: "leño hogar" },
        { item: "plancha (Brolux)", target: 1, unidad: "unidad", original: "plancha brolux" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" },
        { item: "mampara", target: 1, unidad: "unidad", original: " mampara" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas de 2 plazas (King Saise)", target: 3, unidad: "unidad", original: "frazadas 2p x3 king saise" },
          
        ]
      },
      simple: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazadas de 1 plaza", target: 6, unidad: "unidad", original: "frazada 1p x6" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: SI| Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas plásticas", target: 5, unidad: "unidad", original: "sillas plasticas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    },
  }
},

// Sección Casa 22B
{
  id: "Casa 22B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "Cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "Tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "Cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "Cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "Platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "Platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "Platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "Platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "Compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "Vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "Copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "Copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "Tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "Pocillos", target: 2, unidad: "unidad", original: "pocillo x2" },
        { item: "Sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "Bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "Ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "Fuente de acero", target: 1, unidad: "unidad", original: "fuente acero x1" },
        { item: "Ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "Bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "Coladores de pastas", target: 2, unidad: "unidad", original: "colador de pastas x2" },
        { item: "Pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "Abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "Saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "Pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "Cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "Pizera", target: 1, unidad: "unidad", original: "pizera x1" },
        { item: "Bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "Jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "Rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "Tablas de madera", target: 3, unidad: "unidad", original: "tabla madera x3" },
        { item: "Exprimidor manual", target: 1, unidad: "unidad", original: "exprimer manual" },
        { item: "Bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "Bowl rectangular de plástico", target: 1, unidad: "unidad", original: "bowl rectangular plastico" },
        { item: "Secador de platos", target: 1, unidad: "unidad", original: "secador plato" },
        { item: "Pava", target: 1, unidad: "unidad", original: "pava" },
        { item: "Porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "Tazas de té", target: 4, unidad: "unidad", original: "taza te x4" },
        { item: "Compoteras de acero", target: 4, unidad: "unidad", original: "compotera acero x4" },
        { item: "Colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "Palita pisera", target: 1, unidad: "unidad", original: "palita pisera" },
        { item: "Cuchillas", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "Cuchillo de pan", target: 1, unidad: "unidad", original: "cuchillo pan" },
        { item: "Espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "Espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "Cucharón de teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "Cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "Cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "Individuales de tela", target: 2, unidad: "unidad", original: "individuales de tela x2" },
        { item: "Posa vasos", target: 5, unidad: "unidad", original: "posa vaso x5" },
        { item: "Individuales plásticos", target: 4, unidad: "unidad", original: "individuales plasticos x4" },

        // 🪑 Living - Cocina
        { item: "Mesa", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "Sillas", target: 6, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "Sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "Sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon un cuerpo x2" },
        { item: "Mueble para TV con 2 puertas", target: 1, unidad: "unidad", original: "mueble tv 2 puertas" },
        { item: "Reloj de pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "Perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "Porta llavero de pared", target: 1, unidad: "unidad", original: "porta llavero pared" },
        { item: "Cuadros", target: 4, unidad: "unidad", original: "cuadros x4" }
      ],
      pasillo: {
        items: [
          { item: "Cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "Espejo", target: 1, unidad: "unidad", original: "espejo" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "Luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "Heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "Microondas (Panoramic)", target: 1, unidad: "unidad", original: "microondas panoramic" },
        { item: "Cocina (Eskabe)", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "Jarra (Microsonic)", target: 1, unidad: "unidad", original: "jarra microsonic" },
        { item: "Tostadora (Tophouse)", target: 1, unidad: "unidad", original: "tostadora tophouse" },
        { item: "Minipimer (Kanjihome)", target: 1, unidad: "unidad", original: "minipimer kanjihome" },
        { item: "Cafetera (Nura)", target: 1, unidad: "unidad", original: "cafetera nura" },
        { item: "Extractor (SH)", target: 1, unidad: "unidad", original: "extractor sh" },
        { item: "Aires acondicionados (Electric Habitat)", target: 2, unidad: "unidad", original: "aire acondicionado x2 electric habitat" },
        { item: "TVs Smart (Tedge, JVC, BGH)", target: 3, unidad: "unidad", original: "tv x3 smart tedge jvc bgh" },
        { item: "Ventiladores (uno no funciona)", target: 3, unidad: "unidad", original: "ventilador x3 comedor no funciona" },
        { item: "Secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "Calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "Termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "Cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "Mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "Veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "Mueble TV", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "Cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "Frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" },
          { item: "Perchas", target: 6, unidad: "unidad", original: "percha x6" }
        ]
      },
      simple_1: {
        items: [
          { item: "Camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "Mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "Velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "Puf", target: 1, unidad: "unidad", original: "puf" },
          { item: "Perchas", target: 6, unidad: "unidad", original: "perchas x6" },
          { item: "Frazadas de 1 plaza", target: 6, unidad: "unidad", original: "frazada 1p x6" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: {
      items: [
        { item: "Vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "Inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "Cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },

    exterior: {
      items: [
        { item: "Parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "Palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "Atizador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "Mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "Sillas", target: 2, unidad: "unidad", original: "sillas x2" },
        { item: "Bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "Tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},


//Sección Casa 22A

{
  id: "Casa 22A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero platinax3" },
        { item: "coladores de pastas", target: 2, unidad: "unidad", original: "colador de pastas x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tablas de madera", target: 3, unidad: "unidad", original: "tabla madera x3 2 redondas 1 cuadradas" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "compoteras de acero", target: 3, unidad: "unidad", original: "compotera cero x3" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },



// 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon un cuerpo x2" },
        { item: "mueble de 3 puertas mediano", target: 1, unidad: "unidad", original: "mueble 3 puertas mediano" },
        { item: "mesa ratona de vidrio", target: 1, unidad: "unidad", original: "mesa ratona vidrio" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llavero de pared", target: 1, unidad: "unidad", original: "porta llaver pared" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj"},
        { item: "cuadros", target: 1, unidad: "unidad", original: "cuadros" }

      ]
    },

    electrodomesticos: {
      items: [
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cocina (Eskabe)", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "microondas (Samsumg)", target: 1, unidad: "unidad", original: "microondas sansumg" },
        { item: "tvs smart (Tedge-Jvc-Bgh)", target: 3, unidad: "unidad", original: "tv x3 smart tedge jvc y bgh" },
        { item: "aires acondicionados estándar (Electric)", target: 2, unidad: "unidad", original: "aire acondicionado x2 estándar electric" },
        { item: "extractor (Sh)", target: 1, unidad: "unidad", original: "extractor sh" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "jarra (Microsonic)", target: 1, unidad: "unidad", original: "jarra microsonic" },
        { item: "cafetera (Tophome)", target: 1, unidad: "unidad", original: "cafetera tophome" },
        { item: "tostadora (Tophome)", target: 1, unidad: "unidad", original: "tostadora tophome" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo (Philips)", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "minipimer (Black y Decker)", target: 1, unidad: "unidad", original: "minipymer black y deker" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x1" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "banqueta pie cama", target: 1, unidad: "unidad", original: "banqueta pie cama" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2P x2" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "silla", target: 1, unidad: "unidad", original: "silla" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas de 1 plaza", target: 5, unidad: "unidad", original: "frazada 1p x5" },
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌ -- A tener en cuenta: Contiene 1 baño",
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección 27A
{
  id: "Casa 27A",
  ambientes: {
    cocina: {
      items: [
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "pocillos x5" },
        { item: "tazas café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "fuente acero rectangular", target: 1, unidad: "unidad", original: "fuente de acero rectangular" },
        { item: "bandejas acero oplatina", target: 3, unidad: "unidad", original: "bandeja acero oplatina x3" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "madera copetín", target: 1, unidad: "unidad", original: "madera para copetin" },
        { item: "tabla picar madera", target: 1, unidad: "unidad", original: "tabla poicar madera" },
        { item: "tabla pizera madera", target: 1, unidad: "unidad", original: "tabla pizera madera" },
        { item: "platos de asado madera", target: 8, unidad: "unidad", original: "platos de asado madera x8" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "colador de pasta blanco-celeste", target: 2, unidad: "unidad", original: "colador de pasta x2 blanco -celeste" },
        { item: "jarrito medidor", target: 1, unidad: "unidad", original: "jarrito medidor" },
        { item: "ensaladera redonda de vidrio", target: 1, unidad: "unidad", original: "ensaladera redonda de vidrio" },
        { item: "madera grande para asado con mango", target: 1, unidad: "unidad", original: "madera grande para asado con man" },
        { item: "colador amarillo", target: 1, unidad: "unidad", original: "colador amarillo" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchillo para pan", target: 1, unidad: "unidad", original: "cuchillo para pan" },
        { item: "cuchara para fideos teflón", target: 1, unidad: "unidad", original: "cuchara para fideos teflon" },
        { item: "espumadera teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchara teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "mesa cuadrada vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio 6 sillas" },
        { item: "sillones ratán", target: 3, unidad: "unidad", original: "sillones ratan x3" },
        { item: "mesita cuadrada", target: 1, unidad: "unidad", original: "mesita cuadrada" },
        { item: "alfombra", target: 1, unidad: "unidad", original: "alfombra" },
        { item: "jarrón", target: 1, unidad: "unidad", original: "jarron" },
        { item: "puf", target: 1, unidad: "unidad", original: "puf" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "perchero", target: 1, unidad: "unidad", original: "perchero" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" }

      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: No contiene hidromasaje ❌"
                  }
                },
    electrodomesticos: {
      items: [
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tvs philco smart - bgh", target: 2, unidad: "unidad", original: "tv x2 PHILCO smart- BGH comun" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "microoandas kelvinator" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor spar", target: 1, unidad: "unidad", original: "extractor spar" },
        { item: "aires acondicionados coventry-kelvinator-hitachi", target: 3, unidad: "unidad", original: "aire acondicionado x3 coventry-kel" },
        { item: "minipimer peabody", target: 1, unidad: "unidad", original: "minipymr peabody" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora philips", target: 1, unidad: "unidad", original: "tostadora philips" },
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "secador de pelo philips", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "repisa tv", target: 1, unidad: "unidad", original: "repisa tv" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazadas 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p x1" },
          { item: "perchas madera", target: 4, unidad: "unidad", original: "perchas x4 madera" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazadas 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "cubre cama 1 plaza", target: 2, unidad: "unidad", original: "cubrecama de 1p x2" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "sillon matero x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
      ]
    },
  }
},

//Sección 28B
{
  id: "Casa 28B",
  ambientes: {
    cocina: {
      items: [
        { item: "cuchillos", target: 6, unidad: "unidad", original: "cuchillo x6" },
        { item: "tenedores", target: 6, unidad: "unidad", original: "tenedor x6" },
        { item: "cucharitas", target: 6, unidad: "unidad", original: "cucharita x6" },
        { item: "cucharas", target: 6, unidad: "unidad", original: "cuchara x6" },
        { item: "platos playos", target: 6, unidad: "unidad", original: "plato playo x6" },
        { item: "platos medianos", target: 6, unidad: "unidad", original: "plato mediano x6" },
        { item: "platos hondos", target: 6, unidad: "unidad", original: "plato hondo x6" },
        { item: "platitos café", target: 6, unidad: "unidad", original: "platito café x6" },
        { item: "compoteras postre", target: 6, unidad: "unidad", original: "compotera postre x6" },
        { item: "vasos comunes", target: 6, unidad: "unidad", original: "vaso comun x6" },
        { item: "copas de agua", target: 6, unidad: "unidad", original: "copa de agua x6" },
        { item: "copas de vino", target: 6, unidad: "unidad", original: "copa de vino x6" },
        { item: "tazas café", target: 6, unidad: "unidad", original: "taza café x6" },
        { item: "pocillos", target: 6, unidad: "unidad", original: "pocillo x6" },
        { item: "cuchillos manteca", target: 1, unidad: "unidad", original: "cuchillo manteca" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "ensaladeras acero", target: 4, unidad: "unidad", original: "ensaladera acero x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "fuentes ovalada acero", target: 2, unidad: "unidad", original: "fuente x2 ovalada acero" },
        { item: "platos asado", target: 3, unidad: "unidad", original: "plato asado x3" },
        { item: "bandeja madera con manija", target: 1, unidad: "unidad", original: "bandeja madera con manija" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "hielera plástica rosa", target: 1, unidad: "unidad", original: "hielera plastica rosa" },
        { item: "jarra medidora", target: 1, unidad: "unidad", original: "jarra medidora" },
        { item: "bandeja plástica con tapa", target: 1, unidad: "unidad", original: "bandeja plastica con tapa" },
        { item: "posa pava acero", target: 1, unidad: "unidad", original: "posa paba acero" },
        { item: "compoteras acero", target: 4, unidad: "unidad", original: "compotera cero x4" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "bandeja desayuno", target: 1, unidad: "unidad", original: "bandeja desayuno" },
        { item: "paneras", target: 2, unidad: "unidad", original: "paneras x2" },
        { item: "bandeja pequeña", target: 1, unidad: "unidad", original: "bandeja pequena" },
        { item: "rallador plástico naranja", target: 1, unidad: "unidad", original: "rayador plastico naranja" },
        { item: "vasos plásticos", target: 4, unidad: "unidad", original: "vasos plasticos x4" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "vaso negro", target: 1, unidad: "unidad", original: "vaso negro" },
        { item: "caja madera saquitos de té", target: 1, unidad: "unidad", original: "caja madera saquitos de te" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "jarritos rosa plásticos", target: 2, unidad: "unidad", original: "jarritos rosa plasticos x2" },
        { item: "bolsita para condimentos", target: 1, unidad: "unidad", original: "bolsita para condimentos" },
        { item: "espumadera plástica rosa", target: 1, unidad: "unidad", original: "espumadera plastica rosa" },
        { item: "espátula teflón", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "tenedor pinche", target: 1, unidad: "unidad", original: "tenedor pincher" },
        { item: "cucharas madera", target: 2, unidad: "unidad", original: "cuchara madera x2" },
        { item: "cuchilla", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "individuales de cuerina", target: 5, unidad: "unidad", original: "5 individuales de cuerina" },
        { item: "mesa con 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "centro de mesa", target: 1, unidad: "unidad", original: "centro de mesa" },
        { item: "caminito", target: 1, unidad: "unidad", original: "caminito" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "sillon L 3 cuerpos" },
        { item: "almohadones celestes", target: 3, unidad: "unidad", original: "almohadones celestes x3" },
        { item: "almohadones amarillos", target: 4, unidad: "unidad", original: "amarillos x4" },
        { item: "sillón 1 cuerpo", target: 1, unidad: "unidad", original: "sillon 1 cuerpo" },
        { item: "mesita ratona con florero", target: 1, unidad: "unidad", original: "mesita ratona con florero" },
        { item: "repisa mueble tv", target: 1, unidad: "unidad", original: "repisa mueble tv" },
        { item: "florero rectangular", target: 1, unidad: "unidad", original: "florero rectangular" },
        { item: "florero cerámica redondo", target: 1, unidad: "unidad", original: "florero redondo de ceramica" },
        { item: "caja con juegos de mesa", target: 1, unidad: "unidad", original: "caja con juegos de mesa" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "colgante atrapa sueños", target: 1, unidad: "unidad", original: "colgante atrapa sueños" }

      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: No contiene hidromasaje ❌"
                  }
                },
    electrodomesticos: {
      items: [
        { item: "heladera kohinor", target: 1, unidad: "unidad", original: "heladera kohinor" },
        { item: "lavarropas drean", target: 1, unidad: "unidad", original: "lavarropas drean" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "jarra aurora", target: 1, unidad: "unidad", original: "jarra aurora" },
        { item: "tostadora philco", target: 1, unidad: "unidad", original: "tostadora philco" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "minipimer atma" },
        { item: "extractor tyrrell", target: 1, unidad: "unidad", original: "extractor tyrrell" },
        { item: "aires acondicionados (4 atma - 3 hitachi)", target: 7, unidad: "unidad", original: "aire acondicionado x4 atma x3-hitachi contr ok" },
        { item: "tvs telefunken-tcl smart", target: 2, unidad: "unidad", original: "tv x2 telefunken-tcl smart" },
        { item: "radiadores", target: 6, unidad: "unidad", original: "radiadores x6 - toayeros x2" },
        { item: "secadores de pelo gama", target: 2, unidad: "unidad", original: "secador de pelo gama x2" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "plancha aladio", target: 1, unidad: "unidad", original: "plancha aladio" },
        
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "repisa tv", target: 1, unidad: "unidad", original: "repisa tv" },
          { item: "florero", target: 1, unidad: "unidad", original: "florero" },
          { item: "mesitas de luz empotradas", target: 2, unidad: "unidad", original: "mesita de luz empotrada x2" },
          { item: "veladores de pared", target: 2, unidad: "unidad", original: "veladores de pared" },
          { item: "costurero", target: 1, unidad: "unidad", original: "costurero" },
          { item: "frazadas 2 plazas", target: 3, unidad: "unidad", original: "frazada 2p x3" },
          { item: "banco rectangular", target: 1, unidad: "unidad", original: "banco rectangular" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrado x2" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "banquito", target: 1, unidad: "unidad", original: "banquito" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazada 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "mantas verdes de 1P", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "perchas", target: 5, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "camas de 1p x2" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "banquito", target: 1, unidad: "unidad", original: "banquito" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazada beige 1 plaza", target: 2, unidad: "unidad", original: "frazada beige de 1p x2" },
          { item: "frazada verde rayada", target: 1, unidad: "unidad", original: "frazada verde rayada" },
          { item: "frazada marrón", target: 1, unidad: "unidad", original: "frazada marron" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }

        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas negras", target: 6, unidad: "unidad", original: "sillas negras x3" },
        { item: "mesa y 4 sillas metálicas", target: 1, unidad: "unidad", original: "mesa y 4 sillas metalicas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección 31B
{
  id: "Casa 31B",
  ambientes: {
    cocina: {
      items: [
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza de café x4" },
        { item: "pocillos de café", target: 4, unidad: "unidad", original: "pocillo café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente ovalada de acero", target: 1, unidad: "unidad", original: "fuente ovalada acero" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "bandeja pizera", target: 1, unidad: "unidad", original: "bandeja pizera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "tabla para picar de madera", target: 1, unidad: "unidad", original: "tabla de picar madera" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillones 1 cuerpo", target: 1, unidad: "unidad", original: "sillon 1 cuerpo" },
        { item: "mesa con vidrio", target: 1, unidad: "unidad", original: "mesa con vidrio" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "paños cortinas beige", target: 6, unidad: "unidad", original: "6 paños cortinas beige" },
        { item: "cuadros", target: 6, unidad: "unidad", original: "cuadros x6" },
        { item: "mueble madera tv", target: 1, unidad: "unidad", original: "mueble madera tv" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "tv (Bgh) común (Tiene control)", target: 1, unidad: "unidad", original: "tv bgh comun + control" },
        { item: "deco (Directv, Contiene control)", target: 1, unidad: "unidad", original: "deco directv + control" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "extractor (Turbo Tronic)", target: 1, unidad: "unidad", original: "extractor turbo tronic" },
        { item: "heladera (Bambi)", target: 1, unidad: "unidad", original: "heladera bambi" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "tostadora (Winco)", target: 1, unidad: "unidad", original: "tostadora winco" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "aires acondicionados (Tcl-Rca, Contiene control)", target: 2, unidad: "unidad", original: "aire acondicionado x2 tcl-rca control ok" }
      ]
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "unidad", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p + colchon" },
          { item: "colchón", target: 1, unidad: "unidad", original: "cama 2p + colchon" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "espejo", target: 1, unidad: "unidad", original: "2 paños de cortina verdes" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "perchas", target: 3, unidad: "unidad", original: "3 perchas" }
        ],
        nota: "No tiene cubrecama de invierno ❌"
      },
    
      simple_1: {
        items: [
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p + colchon" },
          { item: "colchones", target: 2, unidad: "unidad", original: "cama 1p + colchon" },
          { item: "cama marinera", target: 1, unidad: "unidad", original: "cama marinera + colchon x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "banco de madera", target: 1, unidad: "unidad", original: "banco de madera" },
          { item: "paños cortinas (Color marrón)", target: 2, unidad: "unidad", original: "2 paños de cortinas marron" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 2, unidad: "unidad", original: "perchas x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa " },
        { item: "bancos", target: 2, unidad: "unidad", original: "mesa + 2 bancos" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "pinza", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},


//Sección Casa 32A
{
  id: "Casa 32A",
  ambientes: {
    cocina: {
      items: [
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza de café x4" },
        { item: "pocillos de café", target: 4, unidad: "unidad", original: "pocillo café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espatulas de teflón", target: 2, unidad: "unidad", original: "espátula teflon x2" },
        { item: "azucarera de acero", target: 1, unidad: "unidad", original: "azucarera acero" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "ensaladeras de vidrio", target: 2, unidad: "unidad", original: "ensaladera vidrio x2" },
        { item: "tabla para picar de madera rectangular", target: 1, unidad: "unidad", original: "tabla picar madera rectangular" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "tabla pizera de madera", target: 1, unidad: "unidad", original: "tabla pizera madera" },
        { item: "pizera de aluminio", target: 1, unidad: "unidad", original: "pizera aluminio" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón simple", target: 1, unidad: "unidad", original: "sillon simp̲le" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "porta llavero de pared", target: 1, unidad: "unidad", original: "porta llavero pared" }

      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌ -- A tener en cuenta: Contiene 1 baño",
    },
    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tv (Samsung)", target: 1, unidad: "unidad", original: "tv samsung" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "extractor (Stell Home)", target: 1, unidad: "unidad", original: "extractor stell home" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "aires acondicionados (Rca-Tcl-Bgh)", target: 3, unidad: "unidad", original: "aire acondicionado x3 rca- tcl -bgh" },
        { item: "radiadores(3)-toayero(1)", target: 4, unidad: "unidad", original: "radiadores x4 + 1 toayero" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "perchero pie" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "banco pie de cama", target: 1, unidad: "unidad", original: "banco pie de cama" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "acolchados de 1 plaza", target: 2, unidad: "unidad", original: "acolchado de 1p x2" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1 p x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" }
      ]
    }
  }
},

//Sección Casa 33A

{
  id: "Casa 33A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (6 personas)
        { item: "cuchillos", target: 6, unidad: "unidad", original: "cuchillo x6" },
        { item: "tenedores", target: 6, unidad: "unidad", original: "tenedor x6" },
        { item: "cucharitas", target: 6, unidad: "unidad", original: "cucharita x6" },
        { item: "cucharas", target: 6, unidad: "unidad", original: "cuchara x6" },
        { item: "platos playos", target: 6, unidad: "unidad", original: "plato playo x6" },
        { item: "platos medianos", target: 6, unidad: "unidad", original: "plato mediano x6" },
        { item: "platos hondos", target: 6, unidad: "unidad", original: "plato hondo x6" },
        { item: "platitos de café", target: 6, unidad: "unidad", original: "platito café x6" },
        { item: "compoteras de postre", target: 6, unidad: "unidad", original: "compotera postre x6" },
        { item: "vasos comunes", target: 6, unidad: "unidad", original: "vaso comun x6" },
        { item: "copas de agua", target: 6, unidad: "unidad", original: "copa de agua x6" },
        { item: "copas de vino", target: 6, unidad: "unidad", original: "copa de vino x6" },
        { item: "tazas de café", target: 6, unidad: "unidad", original: "taza de café x6" },
        { item: "pocillos", target: 6, unidad: "unidad", original: "pocillos x6" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mangox1" },
        { item: "tabla de picar", target: 1, unidad: "unidad", original: "tabla de picar" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "destapador", target: 1, unidad: "unidad", original: "destapador" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "cuchilla mango blanco" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "espátula teflón", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "cucharón teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "pisa papa acero", target: 1, unidad: "unidad", original: "pisa papa acero" },
        { item: "escurridor de pastas de acero", target: 1, unidad: "unidad", original: "escurridor de pastas de acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "esprimidor plástico", target: 1, unidad: "unidad", original: "esprimidor plastico" },
        { item: "fuentes ovaladas de acero", target: 2, unidad: "unidad", original: "fuente ovalada de acero x2" },
        { item: "fuentes de acero platina", target: 3, unidad: "unidad", original: "fuente de acero platina x3" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "paneras", target: 2, unidad: "unidad", original: "panera x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "fuentes de horno", target: 2, unidad: "unidad", original: "fuente de horno x2" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "manteles de tela", target: 2, unidad: "unidad", original: "mantel de tela x2" },
        { item: "alfombras de baño", target: 4, unidad: "unidad", original: "alfombras de bano x4" },
        { item: "alfombras de entrada", target: 2, unidad: "unidad", original: "afombra de entrada x2" },
        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "almohadones", target: 4, unidad: "unidad", original: "4 almohadones" },
        { item: "banquetas", target: 3, unidad: "unidad", original: "banquetas x3" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "esprimidor plástico", target: 1, unidad: "unidad", original: "esprimidor plastico" },
        { item: "fuentes ovalada de acero", target: 2, unidad: "unidad", original: "fuente ovalada de acero x2" },
        { item: "fuentes de acero platina", target: 3, unidad: "unidad", original: "fuente de acero platina x3" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "paneras", target: 2, unidad: "unidad", original: "panera x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "fuentes de horno", target: 2, unidad: "unidad", original: "fuente de horno x2" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "manteles de tela", target: 2, unidad: "unidad", original: "mantel de tela x2" },
        { item: "alfombras de baño", target: 4, unidad: "unidad", original: "alfombras de bano x4" },
        { item: "alfombras de entrada", target: 2, unidad: "unidad", original: "afombra de entrada x2" },
        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "almohadones", target: 4, unidad: "unidad", original: "4 almohadones" },
        { item: "banquetas", target: 3, unidad: "unidad", original: "banquetas x3" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" }


      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: No contiene hidromasaje ❌"
                  }
                },
    electrodomesticos: {
      items: [
        { item: "heladera conqueror", target: 1, unidad: "unidad", original: "heladera conqueror" },
        { item: "microondas LG", target: 1, unidad: "unidad", original: "microondas LG" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "lavarropas drean", target: 1, unidad: "unidad", original: "lavarropas drean 6kg" },
        { item: "licuadora atma", target: 1, unidad: "unidad", original: "licuadora atma" },
        { item: "tostadora Daewoo", target: 1, unidad: "unidad", original: "tostadora Daewoo" },
        { item: "jarra eléctrica liliana", target: 1, unidad: "unidad", original: "jarra electrica liliana" },
        { item: "minipimer smarth life", target: 1, unidad: "unidad", original: "minipymer smarth life" },
        { item: "extractor tst", target: 1, unidad: "unidad", original: "extractor tst" },
        { item: "tv RCA smarth", target: 1, unidad: "unidad", original: "tv rca smarth" },
        { item: "aire acondicionado atma", target: 1, unidad: "unidad", original: "aire acondicionado atma" },
        { item: "tv telefunken común", target: 1, unidad: "unidad", original: "tv telefunken comun" },
        { item: "ventilador techo", target: 3, unidad: "unidad", original: "ventilador de techox3" },
        { item: "aire acondicionado LG", target: 1, unidad: "unidad", original: "aire acondicionado lg" },
        { item: "aire acondicionado conqueror", target: 1, unidad: "unidad", original: "aire acondicionado conqueror" },
        { item: "tv hitachi smarth 32 pulgadas", target: 1, unidad: "unidad", original: "tv hitachi smarth 32 pulgadas" },
        { item: "calefactores", target: 4, unidad: "unidad", original: "calefactores x4" }
      ]
    },


    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadros", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "espejo" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "1 frazada 2PL" },
          { item: "perchas madera", target: 10, unidad: "unidad", original: "percha de madera x10" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x1" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "perchas madera", target: 8, unidad: "unidad", original: "8 perchas de madera" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama de 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
          { item: "frazadas 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "perchas madera", target: 8, unidad: "unidad", original: "8 perchas de madera" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
         { item: "palita", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa vidrio 4 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 4 sillas" }
      ]
    }
  }
},

//Sección Casa 34A

{
  id: "Casa 34A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (7 personas)
        { item: "cuchillos", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedores", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharitas", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "cucharas", target: 7, unidad: "unidad", original: "cuchara x7" },
        { item: "platos playos", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "platos medianos", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "platos hondos", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platitos de café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compoteras de postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vasos comunes", target: 7, unidad: "unidad", original: "vaso comun x7" },
        { item: "copas de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copas de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "tazas de café", target: 7, unidad: "unidad", original: "taza de café x7" },
        { item: "pocillos", target: 7, unidad: "unidad", original: "pocillo x7" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "juego asado", target: 1, unidad: "unidad", original: "juego asado pinche cuchillo" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "espátula de acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "hielera de plástico", target: 1, unidad: "unidad", original: "hielera plastico" },
        { item: "bandeja pirex", target: 1, unidad: "unidad", original: "bandeja pirex" },
        { item: "bandeja ovalada de vidrio", target: 1, unidad: "unidad", original: "bandeja ovalada vidrio" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bowls de plástico", target: 2, unidad: "unidad", original: "bowl plastico x2 blanco lila" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "tabla rectangular de madera", target: 1, unidad: "unidad", original: "tabla rectangular madera" },
        { item: "tabla redonda de madera", target: 1, unidad: "unidad", original: "tabla madera redonda" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "mesa de vidrio", target: 1, unidad: "unidad", original: "mesa de vidrio" },
        { item: "sillas", target: 8, unidad: "unidad", original: "mesa vidrio 8 sillas" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon de 1 cuerpo x2" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillas de madera", target: 2, unidad: "unidad", original: "sillas madera x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "banqueta", target: 1, unidad: "unidad", original: "banqueta" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "adornos", target: 1, unidad: "unidad", original: "adornos" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },
    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "HELADERA GAFA" },
        { item: "microonda (Bgh)", target: 1, unidad: "unidad", original: "microonda bgh" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "jarra (Ultracomb)", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cafetera (Atma)", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "aires acondicionados (Hitachi-Surrey)", target: 2, unidad: "unidad", original: "aire acondicionado x2 hitachi - surrey" },
        { item: "calefactores", target: 5, unidad: "unidad", original: "calefactores x5" },
        { item: "tvs (Noblex) smart-(Tcl) led comun", target: 2, unidad: "unidad", original: "TV x2: noblex smart tcl led comun" },
        { item: "secador de pelo (Gama)", target: 2, unidad: "unidad", original: "secador de pelo gama x2" },
        { item: "dvd (Noblex)", target: 1, unidad: "unidad", original: "dvd noblex" },
        { item: "ventiladores techo", target: 4, unidad: "unidad", original: "ventiladores de techox4" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },


    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro espejo", target: 1, unidad: "unidad", original: "cuadro espejo" },
          { item: "banco de pie", target: 1, unidad: "unidad", original: "banco de pie" },
          { item: "cubrecama de 2 plazas", target: 1, unidad: "unidad", original: "cubrecama 2p" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "cama marinera", target: 1, unidad: "unidad", original: "cama marinera" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladorempotrado x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "cubrecamas", target: 2, unidad: "unidad", original: "cubrecamas x2" },
          { item: "frazadas (Color gris)", target: 2, unidad: "unidad", original: "frazadas grises x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchas", target: 3, unidad: "unidad", original: "percha x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama de 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de lus" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "velador empotrado x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "acolchado plumón (Color negro)", target: 1, unidad: "unidad", original: "acolchado plumon negro" },
          { item: "acolchados varios (Color (2) turquesa - (1) negro)", target: 3, unidad: "unidad", original: "acolchado plumones x3 dos turquesa uno negro" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazadas 1p x3" },
          { item: "perchas", target: 5, unidad: "unidad", original: "percha x5" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 39A

{
  id: "Casa 39A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras de acero", target: 5, unidad: "unidad", original: "ensaladera acero x5" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla chayra", target: 1, unidad: "unidad", original: "cuchilla chayra" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador", target: 1, unidad: "unidad", original: "coladro" },
        { item: "palo de amasar", target: 1, unidad: "unidad", original: "palo de amasar" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espátula de acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "escurridor de verduras", target: 1, unidad: "unidad", original: "escurridor verdura" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "ensaladera de vidrio", target: 1, unidad: "unidad", original: "ensaladera vidrio" },
        { item: "fuente ovalada de acero", target: 1, unidad: "unidad", original: "fuente ovalada acero" },
        { item: "hielera negra", target: 1, unidad: "unidad", original: "hielera negra" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "madera grande de copetín", target: 1, unidad: "unidad", original: "madera grande de copetin" },
        { item: "maderas para asado grande", target: 2, unidad: "unidad", original: "madera para asado grande x2" },
        { item: "pizeras", target: 3, unidad: "unidad", original: "pizera x3" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
        { item: "bandeja de horno enlozada", target: 1, unidad: "unidad", original: "bandeja horno enlosada" },
        { item: "mesa vidrio con 8 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 8 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon de 2 cuerpo x1" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banqueta x2" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" }

      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },
    electrodomesticos: {
      items: [
        { item: "heladera (Patrick)", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "cocina (Escorial)", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "equipo de música", target: 1, unidad: "unidad", original: "equipo de musica no funciona" },
        { item: "cafetera (Liliana)", target: 1, unidad: "unidad", original: "cafetera liliana" },
        { item: "licuadora (Liliana)", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "jarra (Black y Decker)", target: 1, unidad: "unidad", original: "jarra black y deker" },
        { item: "aires acondicionados (Philco-Conqueror, Contiene control)", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco - conqueror control ok" },
        { item: "tv (Hisense, Contiene control)", target: 2, unidad: "unidad", original: "tv x2 hisense - conqueror controles ok" },
        { item: "plancha (Moulinex)", target: 1, unidad: "unidad", original: "plancha moulinex" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "secador de pelo (Philips)", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },


    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas luz empotrada", target: 2, unidad: "unidad", original: "mesa luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "repisa tv", target: 1, unidad: "unidad", original: "repisa tv" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "tabla para planchar", target: 1, unidad: "unidad", original: "tabla panchar" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubrecamas invierno (Color verde)", target: 3, unidad: "unidad", original: "cubrecama invierno verde 1p x3" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "cubrecamas 1p (Color verde con blanco)", target: 3, unidad: "unidad", original: "cubrecama x3 1P verde con blanco" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinche", target: 1, unidad: "unidad", original: "pinche" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 40A

{
  id: "Casa 40A",
  ambientes: {
    electrodomesticos: {
      items: [
        { item: "tvs (Hisense) smart-(Tcl) smart", target: 2, unidad: "unidad", original: "tv x2 hisense smart tcl smart" },
        { item: "ventiladores de techo", target: 5, unidad: "unidad", original: "ventiladores de techo x5" },
        { item: "aires acondicionados (Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "cocina (Longvie)", target: 1, unidad: "unidad", original: "cocina longvie" },
        { item: "heladera (Electrolux)", target: 1, unidad: "unidad", original: "heladera electrolux" },
        { item: "extractor (Ecoclima)", target: 1, unidad: "unidad", original: "extractor ecoclima" },
        { item: "licuadora", target: 1, unidad: "unidad", original: "licuadora" },
        { item: "minipimer (Eiffel)", target: 1, unidad: "unidad", original: "minipimer eiffel" },
        { item: "extractor jugo (Eiffel)", target: 1, unidad: "unidad", original: "extractor jugo eiffel" },
        { item: "jarra (Rca)", target: 1, unidad: "unidad", original: "jarra RCA" },
        { item: "secadores de pelo (Gamma)", target: 2, unidad: "unidad", original: "secador de pelo x2 gamma" },
        { item: "radiadores(6) - toayeros(2)", target: 8, unidad: "unidad", original: "radiadores x6 - toayeros x2" },
        { item: "tostadora (Smartlife)", target: 1, unidad: "unidad", original: "tostadora smartlife" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 4, unidad: "unidad", original: "olla x4" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: " utensillos de teflón: cucharon, cuchara, espumadera", target: 3, unidad: "unidad", original: "teflon: cucharon, cuchara, espumadera" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bowls de plástico", target: 3, unidad: "unidad", original: "bowl plastico x3" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tablas para picar de madera", target: 3, unidad: "unidad", original: "tabla picar madera x3 - redondas 2 y 1 cuadrada" },
        { item: "tabla para picar de plástico", target: 1, unidad: "unidad", original: "tabla picar plastico" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
         { item: "sillas", target: 8, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón en L", target: 1, unidad: "unidad", original: "sillon en L" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesita" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }

      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "acolchado de 2 plazas", target: 1, unidad: "unidad", original: "acolchado 2P" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada x2 1P" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1P x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "colchas de 1 plaza", target: 3, unidad: "unidad", original: "colcha 1P x3" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x1" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "colchas de 1 plaza", target: 3, unidad: "unidad", original: "colcha 1p x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "sillas plásticas", target: 8, unidad: "unidad", original: "8 sillas plasticas" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección 42A

{
  id: "Casa 42A",
  ambientes: {
    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tvs smart (Sharp Philco)", target: 3, unidad: "unidad", original: "tv x3 smart sharp-philco" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "MINIPYMER ATMA" },
        { item: "jarra (Yelmo)", target: 1, unidad: "unidad", original: "jarra yelmo (NUEVA ATMA_)" },
        { item: "tostadora (Ultracomb)", target: 1, unidad: "unidad", original: "tostadora ultracomb" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "radiadores(8) - toayeros(3)", target: 11, unidad: "unidad", original: "radiadores x8 - toayeros x3" },
        { item: "cafetera (Yelmo)", target: 1, unidad: "unidad", original: "cafetera yelmo" },
        { item: "aires acondicionados (Philco)", target: 4, unidad: "unidad", original: "aire acondicionado x4 philco" }
      ]
    },
     baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 3 baños",
    },
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "ensaladeras de acero", target: 4, unidad: "unidad", original: "ensaladera acero x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "hielera de acero", target: 1, unidad: "unidad", original: "hielera acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla para picar de madera redonda", target: 1, unidad: "unidad", original: "tabla picar madera redonda" },
        { item: "bowls de plástico", target: 2, unidad: "unidad", original: "bowl plasticox2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuentes de horno", target: 2, unidad: "unidad", original: "fuente horno x2" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "tenedores de asado", target: 2, unidad: "unidad", original: "tenedor de asado x2" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "cuchara de acero", target: 1, unidad: "unidad", original: "cuchara acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharo acero" },
        { item: "mesa con 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 8, unidad: "unidad", original: "sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillon individual", target: 1, unidad: "unidad", original: "sillon individual" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj" }

      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1P x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x5" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "mesa 2 bancos" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 44A

{
  id: "Casa 44A",
  ambientes: {
    electrodomesticos: {
      items: [
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "jarra daewo", target: 1, unidad: "unidad", original: "jarra daewo" },
        { item: "tostadora 4 panes peabody", target: 1, unidad: "unidad", original: "tostadora 4 panes peabody" },
        { item: "aires acondicionados rca-sanyo", target: 2, unidad: "unidad", original: "aire acondicionado x2 RCA-SANYO" },
        { item: "tvs philco smart-led", target: 2, unidad: "unidad", original: "TVx2 PHILCO smart- PHILCO led" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "heladera hoh-i-nor", target: 1, unidad: "unidad", original: "heladera hoh-i-nor" },
        { item: "extractor tst", target: 1, unidad: "unidad", original: "extractor TST" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "minipimer + licuadora de mano atma", target: 1, unidad: "unidad", original: "minipymper + licuadora de mano atma" },
        { item: "radiadores(6) - toayero(2)", target: 8, unidad: "unidad", original: "radiadores x6 toayero2" }
      ]
    },

    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras acero", target: 4, unidad: "unidad", original: "ensaladera acero x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cucharón teflon", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "espátula teflon", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "chaira", target: 1, unidad: "unidad", original: "chaira" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "bowls plástico", target: 2, unidad: "unidad", original: "bowl plastico x2" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "fuentes acero", target: 3, unidad: "unidad", original: "fuente acero x3" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "mesa cuadrada con vidrio", target: 1, unidad: "unidad", original: "mesa cuadrada con vidrio" },
        { item: "sillas", target: 8, unidad: "unidad", original: "sillas x8" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona con vidrio", target: 1, unidad: "unidad", original: "mesa ratona con vidrio" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" }

      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: No contiene hidromasaje ❌"
                  }
                },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2p", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "estante empotrado TV", target: 1, unidad: "unidad", original: "estante empotrado TV" },
          { item: "frazada 2p beige", target: 1, unidad: "unidad", original: "frazada 2P beige" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1p", target: 3, unidad: "unidad", original: "cama 1P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazadas 1p azul", target: 3, unidad: "unidad", original: "frazada 1P azul x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1p", target: 3, unidad: "unidad", original: "cama 1P x3" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazadas", target: 4, unidad: "unidad", original: "frazada x3 - 2beige 1 amarilla" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "mesa 2 bancos" }
      ]
    }
  }
},

//Sección 44B
{
  id: "Casa 44B",
  ambientes: {
    electrodomesticos: {
      items: [
        { item: "jarra (Yelmo)", target: 1, unidad: "unidad", original: "jarra yelmo" },
        { item: "tostadora 4 panes (Peabody)", target: 1, unidad: "unidad", original: "tostadora 4 panes peabody" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "tvs (Noblex) smart - (Philco) led", target: 1, unidad: "unidad", original: "tv samsung" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas (Samsung)", target: 2, unidad: "unidad", original: "TV x2 noblex smart- philco led" },
        { item: "aires acondicionados (Rca-Sanyo)", target: 2, unidad: "unidad", original: "aire acondicionado x2 RCA-Sanyo" },
        { item: "extractor (Tst)", target: 1, unidad: "unidad", original: "extractor TST" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "radiadores(5) - toayeros(2)", target: 7, unidad: "unidad", original: "radiadores x5 - toayeros x2" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "minipimer atma" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso común x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "ensaladera de acero", target: 1, unidad: "unidad", original: "ensaladera acero x1" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "fuente ovalada de acero", target: 1, unidad: "unidad", original: "fuente ovalada acero" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plástica" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "tabla para picar de madera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 8, unidad: "unidad", original: "sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa con 2 bancos", target: 1, unidad: "unidad", original: "mesa 2 bancos" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj" }

      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "camas 1P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1P x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "camas 1P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },
  }
},

//Sección 23B

{
  id: "Casa 23B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "pocillo x4" },

        { item: "compoteras de vidrio", target: 3, unidad: "unidad", original: "compotera vidrio x3" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 1, unidad: "unidad", original: "olla x1" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero x1" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa de teflón", target: 1, unidad: "unidad", original: "pisa papa teflon" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera de madera", target: 1, unidad: "unidad", original: "espumadera madera" },
        { item: "cuchara espaguetera de acero", target: 1, unidad: "unidad", original: "cuchara eespagueti acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "palo de amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },

        { item: "bandeja de melamina (desayuno)", target: 1, unidad: "unidad", original: "bandeja melamina desayuno" },
        { item: "bandeja de madera (desayuno)", target: 1, unidad: "unidad", original: "bandeja desayuno madera" },
        { item: "fuente redonda de vidrio", target: 1, unidad: "unidad", original: "fuente redonda de vidrio" },
        { item: "platos de asado de madera", target: 8, unidad: "unidad", original: "platos asado madera x8" },
        { item: "bowls de plástico", target: 2, unidad: "unidad", original: "bowl plastico x2" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra de vidrio" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "jarra plástica", target: 2, unidad: "unidad", original: "jarra plastica x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "porta rollo servilleta", target: 1, unidad: "unidad", original: "porta rollo servilleta" },
        { item: "jarra porta sachet", target: 1, unidad: "unidad", original: "jarra porta sachet" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "especiero (Color blanco)", target: 2, unidad: "unidad", original: "especieros x2 blanco" },
        { item: "juego especiero con canasto", target: 1, unidad: "unidad", original: "juego especiero con canasto" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },,
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillones matero", target: 2, unidad: "unidad", original: "sillon matero x2" },
        { item: "mueble", target: 1, unidad: "unidad", original: "mueble" },
        { item: "mesa ratona redonda", target: 2, unidad: "unidad", original: "mesa ratona redonda x2" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" },
        { item: "adornos varios", target: 10, unidad: "unidad", original: "adornos varios x10" },
        { item: "cortinas", target: 1, unidad: "conjunto", original: "cortinas en buen estado" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera con congelador (Briket)", target: 1, unidad: "unidad", original: "heladera con congelador briket" },
        { item: "cocina (Eskabe)", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "licuadora (Arno)", target: 1, unidad: "unidad", original: "licuadora arno" },
        { item: "tostadora (Philips)", target: 1, unidad: "unidad", original: "tostadora philips" },
        { item: "jarra (Smartlife)", target: 1, unidad: "unidad", original: "jarra smarthlife" },
        { item: "tv led común (Sanyo-Samsung)", target: 2, unidad: "unidad", original: "tv x2 samyo y sansumg led comun" },
        { item: "aires acondicionados (Home Leader y Springler)", target: 2, unidad: "unidad", original: "aire acondicionado x2 home leader y springler" },
        { item: "secador de pelo (Atma)", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "cafetera (Moulinex) (falta filtro)", target: 1, unidad: "unidad", original: "cafetera moulinex (le falta el filtro)" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "repisa empotrada con adornos", target: 1, unidad: "unidad", original: "repisa empotrada con adornos" },
          { item: "sillón cubo", target: 1, unidad: "unidad", original: "sillon cubo" },
          { item: "frazadas de 2 plazas", target: 3, unidad: "unidad", original: "frazadas 2P x3" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "cuadro", target: 3, unidad: "unidad", original: "cuadro x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "sillones cubo", target: 2, unidad: "unidad", original: "sillon cubo x2" },
          { item: "espejos de pared", target: 2, unidad: "unidad", original: "espejo de pared x2" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "manta (Color rosa) fina", target: 1, unidad: "unidad", original: "manta rosa fina" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO| Unión de camas: SI"
    },

   baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "reposeras de madera", target: 2, unidad: "unidad", original: "reposeras de madera x2" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa con 4 sillas" },
        { item: "sillas", target: 4, unidad: "unidad", original: "mesa con 4 sillas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 24A
{
  id: "Casa 24A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x 4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },

        { item: "compotera de acero", target: 3, unidad: "unidad", original: "compotera acero x3" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },

        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "espatula teflon" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "curachon teflon" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "tenedores de asado", target: 1, unidad: "juego",  original: "tenedores de asado" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja de horno" },

        // 🪑 Living - Cocina
        { item: "mesa con 6 sillas", target: 1, unidad: "unidad", original: "mesa con 6sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillón matero", target: 2, unidad: "unidad", original: "sillon matero x2" },
        { item: "mueble", target: 1, unidad: "unidad", original: "mueble" },
        { item: "mesa ratona redonda", target: 2, unidad: "unidad", original: "mesa ratona redonda x2" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera briket", target: 1, unidad: "unidad", original: "heladera bikket" },
        { item: "cocina escorial", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "extractor sh", target: 1, unidad: "unidad", original: "extractor sh" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 home leader y sigma" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2 funciona uno" },
        { item: "tv (hitachi/philco)", target: 2, unidad: "unidad", original: "tv x2 hitachi - philco smarth habitacion" },
        { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "jarra enxion", target: 1, unidad: "unidad", original: "jarra enaxion" },
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "licuadora liliana", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "x3calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "sillón", target: 1, unidad: "unidad", original: "sillon" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro x1" },
          { item: "frazadas 2p", target: 3, unidad: "unidad", original: "frazadas 2p x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "banco de madera", target: 1, unidad: "unidad", original: "banco madera" },
          { item: "espejo de pared", target: 2, unidad: "unidad", original: "espejo de pared x2" },
          { item: "frazada 1p", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "perchas", target: 2, unidad: "unidad", original: "percha x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO| Unión de camas: NO"
    },

    baño: {
            suite: {
              items: [
                { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
              ],
             nota: "Observaciones: No contiene hidromasaje ❌"
            }
          },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "reposeras de madera", target: 2, unidad: "unidad", original: "reposeras de madera x2" },
        { item: "mesa con 4 sillas", target: 1, unidad: "unidad", original: "mesa con 4 sillas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 27B

{
  id: "Casa 27B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "compoteras de vidrio (Color verde)", target: 3, unidad: "unidad", original: "compotera de vidrio verde x3" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 2, unidad: "unidad", original: "copa de vino x2" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },

        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "ensaladera de acero", target: 1, unidad: "unidad", original: "ensaladera acero x1" },

        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "ensaladera de melamina", target: 1, unidad: "unidad", original: "ensaladera melamina" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "porta servilletas", target: 1, unidad: "unidad", original: "porta servilletas" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "azucarera de acero", target: 1, unidad: "unidad", original: "azucarera acero" },
        { item: "pizzeras de madera (redonda)", target: 2, unidad: "unidad", original: "pizera madera redonda x2" },
        { item: "bandejas de horno con parrilla", target: 2, unidad: "unidad", original: "bandeja de horno + parrilla x2" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "martillo para carne", target: 1, unidad: "unidad", original: "martillo para carne" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },

        // 🪑 Living - Cocina
        { item: "mesa cuadrada de vidrio", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio " },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "sillones de madera 2 cuerpos", target: 2, unidad: "conjunto", original: "sillon madera 2 cuerpos + 2" },
        { item: "sillones individuales", target: 2, unidad: "conjunto", original: "sillon madera 2 cuerpos + 2" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesita" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "aires acondicionados (Philco-Coventri-Kelvinator)", target: 3, unidad: "unidad", original: "aire acondicionado x3 PHILCO COVENTRY KELVINATOR" },
        { item: "extractor (Sh)", target: 1, unidad: "unidad", original: "estractor SH" },
        { item: "cocina (Forte)", target: 1, unidad: "unidad", original: "cocina forte" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "tvs (Philco  + Bgh) smart", target: 2, unidad: "unidad", original: "tv x2 philco smart - BGH" },
        { item: "tostadora (Philips)", target: 1, unidad: "unidad", original: "tostadora philips" },
        { item: "cafetera (Atma)", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "minipimer (Liliana)", target: 1, unidad: "unidad", original: "minypimer liliana" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "jarra (Enaxxion)", target: 1, unidad: "unidad", original: "jarra enaxxion (marca borrada blanca detalle en celeste)" },
        { item: "secador de pelo (Imetec)", target: 1, unidad: "unidad", original: "secador de pelo imetec" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "banco con almohadón", target: 1, unidad: "unidad", original: "banco + almohadon" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadros x1" },
          { item: "espejos", target: 2, unidad: "unidad", original: "espejo x2" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 28A

{
  id: "Casa 28A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (6 personas)
        { item: "cuchillo", target: 6, unidad: "unidad", original: "cuchillo x6" },
        { item: "tenedor", target: 6, unidad: "unidad", original: "tenedor x6" },
        { item: "cucharita", target: 6, unidad: "unidad", original: "cucharita x6" },
        { item: "cuchara", target: 6, unidad: "unidad", original: "cuchara x6" },
        { item: "plato playo", target: 6, unidad: "unidad", original: "plato playo x6" },
        { item: "plato mediano", target: 6, unidad: "unidad", original: "plato mediano x6" },
        { item: "plato hondo", target: 6, unidad: "unidad", original: "plato hondo x6" },
        { item: "platito café", target: 6, unidad: "unidad", original: "platito café x6" },
        { item: "compotera postre", target: 6, unidad: "unidad", original: "compotera postre x6" },
        { item: "cazuelas", target: 6, unidad: "unidad", original: "cazuelas x6" },
        { item: "vaso común", target: 6, unidad: "unidad", original: "vaso comun x6" },
        { item: "copa de agua", target: 6, unidad: "unidad", original: "copa de agua x6" },
        { item: "copa de vino", target: 6, unidad: "unidad", original: "copa de vino x6" },
        { item: "taza café", target: 6, unidad: "unidad", original: "taza café x6" },
        { item: "pocillo", target: 6, unidad: "unidad", original: "pocillo x6" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchillas", target: 2, unidad: "unidad", original: "cuchillas x2" },
        { item: "cuchara de madera", target: 2, unidad: "unidad", original: "cuchara de madera x2" },
        { item: "palo amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "cuchara espagueti de teflón", target: 1, unidad: "unidad", original: "cuchara espagueti teflon" },
        { item: "pizzera", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "plato de madera (asado)", target: 6, unidad: "unidad", original: "plato madera asado x6" },
        { item: "hielera de plástico", target: 1, unidad: "unidad", original: "hielera plastico" },
        { item: "jarro hervidor", target: 2, unidad: "unidad", original: "jarro hervidor x2" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "tabla de picar (madera, cuadrada)", target: 1, unidad: "unidad", original: "tabla picar madera cuadrada" },
        { item: "tabla de picar (madera, redonda)", target: 1, unidad: "unidad", original: "tabla picar madera redonda" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "secador de verduras", target: 1, unidad: "unidad", original: "secador de verduras" },
        { item: "colador de pastas (plástico)", target: 1, unidad: "unidad", original: "colador de pastas plastico" },
        { item: "colador de pastas (acero)", target: 1, unidad: "unidad", original: "colador de pastas acero" },
        { item: "bowl plástico redondo", target: 3, unidad: "unidad", original: "bowl plastico redondo x3" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "bowl de acero", target: 1, unidad: "unidad", original: "bowl acero" },
        { item: "fuente de vidrio", target: 1, unidad: "unidad", original: "fuente de vidrio" },
        { item: "ensaladera de vidrio", target: 1, unidad: "unidad", original: "ensaladera de vidrio" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel cuerina" },
        // 🪑 Living - Cocina
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón en L", target: 1, unidad: "unidad", original: "sillon en L" },
        { item: "sillones de cuero + mesita", target: 1, unidad: "conjunto", original: "sillones de cuero x2 + mesita" },
        { item: "mesita de caño y vidrio + sillones", target: 1, unidad: "conjunto", original: "mesita de caño vidrio + sillones x2" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "llavero pared" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera Gafa", target: 1, unidad: "unidad", original: "heladera gafa (detalle en manija apertura)" },
        { item: "tostadora Philco", target: 1, unidad: "unidad", original: "tostadora philco" },
        { item: "licuadora Liliana", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "jarra Yelmo", target: 1, unidad: "unidad", original: "jarra yelmo" },
        { item: "cafetera Top Home", target: 1, unidad: "unidad", original: "cafetera top home" },
        { item: "cocina Aurora", target: 1, unidad: "unidad", original: "cocina aurora" },
        { item: "microondas Aurora", target: 1, unidad: "unidad", original: "microondas aurora" },
        { item: "extractor Aurora", target: 1, unidad: "unidad", original: "extractor aurora" },
        { item: "lavarropas Drean 8k12rpm", target: 1, unidad: "unidad", original: "lavarropas drean 8k12rpm" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 PHILCO - KELVINATOR" },
        { item: "tv (smart + común)", target: 2, unidad: "unidad", original: "tv x2 sansei smart - bgh led comun" },
        { item: "plancha de ropa", target: 1, unidad: "unidad", original: "plancha de ropa" },
        { item: "caldera radiadores", target: 2, unidad: "unidad", original: "caldera radiadores x8 - toayeros x2" },
        { item: "secador de pelo Gama", target: 2, unidad: "unidad", original: "secador de pelo gama x2" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador empotrado", target: 2, unidad: "unidad", original: "velador empotrado x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
          { item: "perchas de madera", target: 6, unidad: "unidad", original: "perchas de madera x6" },
          { item: "frazadas 2p", target: 2, unidad: "unidad", original: "frazada 2P x2" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama de 1P x1" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada" },
          { item: "velador doble", target: 1, unidad: "unidad", original: "velador doble" },
          { item: "cuadro perchero pared", target: 1, unidad: "unidad", original: "cuadro perchero pared" },
          { item: "perchas de madera", target: 4, unidad: "unidad", original: "perchas de madera x4" },
          { item: "frazadas", target: 2, unidad: "unidad", original: "frazadas x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "perchero", target: 1, unidad: "unidad", original: "perchero" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada" },
          { item: "velador doble", target: 1, unidad: "unidad", original: "velador doble" },
          { item: "perchas plásticas", target: 6, unidad: "unidad", original: "perchas plasticas x6" },
          { item: "frazada 1p", target: 1, unidad: "unidad", original: "frazada 1p x1" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: {
            suite: {
              items: [
                { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
              ],
             nota: "Observaciones: No contiene hidromasaje ❌"
            }
          },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 30B

{
  id: "Casa 30B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillos", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedores", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharitas", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cucharas", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "platos playos", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "platos medianos", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "platos hondos", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platitos de café", target: 5, unidad: "unidad", original: "platito café x 5" },
        { item: "compoteras de postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "tazas de café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "pocillo x 5" },

        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },

        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espatula" },
        { item: "cuchara espagueti", target: 1, unidad: "unidad", original: "cuchara espagueti" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "panera de madera", target: 1, unidad: "unidad", original: "panera madera" },
        { item: "panera de mimbre", target: 1, unidad: "unidad", original: "panera mimbre" },
        { item: "tarros de vidrio", target: 2, unidad: "unidad", original: "tarro vidrio x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "bowl de plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "hielera", target: 1, unidad: "unidad", original: "hielera" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "tabla de madera" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla pizzera de madera", target: 1, unidad: "unidad", original: "tabla pizera madera" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca platos" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillones individuales", target: 2, unidad: "unidad", original: "sillon individual x2" },
        { item: "barra de madera con banquetas", target: 1, unidad: "conjunto", original: "barra madera con 2 banqueta" },
        { item: "cuadros", target: 6, unidad: "unidad", original: "cuadros x6" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "llavero pared" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj" }
      ]
    },
      baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },
    electrodomesticos: {
      items: [
        { item: "tvs (Noblex-Panasonic) smart", target: 2, unidad: "unidad", original: "tv x2 noblex smart - panasonic" },
        { item: "aires acondicionados (Home-Hisense-Nex)", target: 3, unidad: "unidad", original: "aire acondicionado x3 home-hisense-nex" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "tosta dora atma" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "extractor (Stell Home)", target: 1, unidad: "unidad", original: "estractor stell home" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia funciona" },
        { item: "microondas (Noblex, perilla rota)", target: 1, unidad: "unidad", original: "microondas noblex perilla rota" },
        { item: "cocina", target: 1, unidad: "unidad", original: "cocina okey" },
        { item: "plancha", target: 1, unidad: "unidad", original: "plancha" },
        { item: "heladera (Patrick)", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },


    exterior: {
      // Items del “PATIO” de la planilla
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla (figura dos veces: 'parrilla' y 'parrilla' en patio)" },
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa " },
        { item: "sillas", target: 6, unidad: "conjunto", original: "sillas" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "banco de madera", target: 1, unidad: "unidad", original: "banco madera" },
        { item: "jarrones", target: 2, unidad: "unidad", original: "jarrones x2" }
      ]
    }
  }
},

//Sección Casa 31A
{
  id: "Casa 31A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza cafex4" },
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },

        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente ovalada de acero", target: 1, unidad: "unidad", original: "fuente ovalada acero x1" },

        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "tabla de picar (madera)", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "escurridor de pastas (acero)", target: 1, unidad: "unidad", original: "escurridor pastas acero" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "rayador", target: 2, unidad: "unidad", original: "rayador (aparece dos veces)" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },


        // 🪑 Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón 2 cuerpos (madera)", target: 1, unidad: "unidad", original: "sillon 2 cuerpos madera" },
        { item: "juego mesa + 2 sillones (madera)", target: 1, unidad: "conjunto", original: "juego mesa y 2 sillones madera" },
        { item: "mueble tv (madera)", target: 1, unidad: "unidad", original: "mueble tv madera" },
        { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "llavero pared" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" },
        { item: "paños de cortina blancos", target: 6, unidad: "unidad", original: "panos de cortina blanco x6" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera Columbia", target: 1, unidad: "unidad", original: "heladera columbia" },
        { item: "microondas Global Home", target: 1, unidad: "unidad", original: "microondas global home" },
        { item: "cocina Escorial", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "tostadora Liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "jarra Ultracomb", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "extractor Turbotronic", target: 1, unidad: "unidad", original: "estractor turbobronic" },
        { item: "tv Samsung común (sin control)", target: 1, unidad: "unidad", original: "tv sansumg comun sin control" },
        { item: "Deco DirecTV con control", target: 1, unidad: "unidad", original: "deco directv con control" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionados x2 TCL-RCA controles ok" },
        { item: "secador de pelo Oster", target: 1, unidad: "unidad", original: "secador de pelo oster" },
        { item: "luz de emergencia (no funciona)", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "router TP-Link", target: 1, unidad: "unidad", original: "rooter tp link" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas + colchón", target: 1, unidad: "unidad", original: "cama 2p + colchon" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "banco de madera", target: 1, unidad: "unidad", original: "banco madera" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "frazadas 2p", target: 2, unidad: "unidad", original: "frazada 2p x2" },
          { item: "almohadones cuadrados", target: 2, unidad: "unidad", original: "almohadones cuadradosx2" },
          { item: "almohadones rectangulares", target: 2, unidad: "unidad", original: "almohadones rectangulares x2" },
          { item: "cubrecama matelassé 2p", target: 1, unidad: "unidad", original: "cubrecama matelase 2P" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza + colchón", target: 1, unidad: "unidad", original: "cama 1p + colchon" },
          { item: "cama marinera (2 colchones)", target: 2, unidad: "colchones", original: "cama marinera = colchones x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 1p", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "cubrecama matelassé", target: 2, unidad: "unidad", original: "cubrecama matelase x2" },
          { item: "paños de cortinas (verdes)", target: 2, unidad: "unidad", original: "2 panos de cortinas verdes" },
          { item: "paños de cortinas (rojas)", target: 2, unidad: "unidad", original: "2 panos cortinas rojas" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌ ----- A tener en cuenta: Contiene 2 baños",
    },

    exterior: {
      // Ítems que estaban al pie de la planilla (patio)
      items: [
        { item: "parrilla", target: 2, unidad: "unidad", original: "parrilla (aparece dos veces)" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "mesa + 2 bancos", target: 1, unidad: "conjunto", original: "mesa + 2 bancos" }
      ]
    }
  }
},

//Sección Casa 32B
{
  id: "Casa 32B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 2, unidad: "unidad", original: "copa de vino x2" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza de café x4" },
        { item: "pocillos de café", target: 4, unidad: "unidad", original: "pocillo café x4" },

        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },

        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa puré", target: 1, unidad: "unidad", original: "pisa pure" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cucharón de plástico", target: 1, unidad: "unidad", original: "cucharon plastico" },
        { item: "espumadera plástica", target: 1, unidad: "unidad", original: "espumadera plastica" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente de loza", target: 1, unidad: "unidad", original: "fuente de losa" },
        { item: "bandeja cuadrada de acero", target: 1, unidad: "unidad", original: "bandeja cuadrada acero" },
        { item: "escurridor de pastas de acero", target: 1, unidad: "unidad", original: "escurridor pastas acero" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "tabla para picar de madera cuadrada", target: 1, unidad: "unidad", original: "tabla picar madera cuadrada x1" },
        { item: "tabla redonda de madera", target: 1, unidad: "unidad", original: "tabla redonda madera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "juego de living de madera", target: 1, unidad: "conjunto", original: "juego living madera" },
        { item: "sillón de 2 cuerpos + 2 sillones", target: 1, unidad: "conjunto", original: "sillon 2 cuerpos + 2 sillones" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "llavero pared" },
        { item: "cuadros", target: 6, unidad: "unidad", original: "cuadros x6" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "extractor (Spar)", target: 1, unidad: "unidad", original: "estractor spar" },
        { item: "microondas (Kelvinator)", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "luz de emergencia (No funciona)", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "tv (Samsung) común", target: 1, unidad: "unidad", original: "tv samsung comun" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "secador de pelo (Oster)", target: 1, unidad: "unidad", original: "secador de pelo oster" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 4, unidad: "unidad", original: "percha x4" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
     nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    exterior: {
      // Ítems del PATIO (columna derecha)
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "juego de patio de madera", target: 1, unidad: "conjunto", original: "juego de patio en madera" },
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa + 2 sillones" },
        { item: "sillones", target: 2, unidad: "conjunto", original: "mesa + 2 sillones" },
        { item: "sillón de 2 cuerpos (patio)", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" }
      ]
    }
  }
},

//Sección Casa 34B
{
  id: "Casa 34B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillo", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedor", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharita", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cuchara", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "plato playo", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "plato mediano", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "plato hondo", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platito café", target: 8, unidad: "unidad", original: "platito café x 8" },
        { item: "compotera postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vaso común", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copa de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copa de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "taza de café", target: 8, unidad: "unidad", original: "taza de café x8" },

        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero", target: 4, unidad: "unidad", original: "bandeja acero x4" },
        { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "olla mediana de acero", target: 1, unidad: "unidad", original: "olla mediana acero" },

        { item: "pela papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "juego cubiertos asador", target: 1, unidad: "juego", original: "juego cubiertos asador" },
        { item: "cuchillo de pan", target: 1, unidad: "unidad", original: "cuchillo de pan" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizzera de aluminio", target: 1, unidad: "unidad", original: "pizera aluminio" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "bandeja de horno con rejilla", target: 1, unidad: "unidad", original: "bandeja de horno con rejilla" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "hielera de plástico", target: 1, unidad: "unidad", original: "hielera plastico" },
        { item: "bandeja de melamina", target: 2, unidad: "unidad", original: "bandeja melamina x2" },
        { item: "bandeja ovalada Pyrex", target: 1, unidad: "unidad", original: "bandeja ovalada pirex" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "tabla de madera rectangular", target: 2, unidad: "unidad", original: "tabla madera rectangulares x2" },
        { item: "tabla redonda", target: 1, unidad: "unidad", original: "tabla redonda" },
        { item: "tabla de madera rectangular (cope)", target: 1, unidad: "unidad", original: "tabla madera rectangular cope" },

        // 🪑 Living - Cocina
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón de 2 cuerpos", target: 2, unidad: "unidad", original: "sillon de 2 cuerpo x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "centro de mesa vitrales", target: 1, unidad: "unidad", original: "centro de mesa vitral" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera Gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas TCL", target: 1, unidad: "unidad", original: "microondas tcl" },
        { item: "jarra Atma", target: 1, unidad: "unidad", original: "jarra atma" },
        { item: "tostadora Atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "cocina Patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "ventilador de techo", target: 4, unidad: "unidad", original: "ventilador de techo x4" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 hitachi-bgh-surrey control ok" },
        { item: "tv smart RCA", target: 2, unidad: "unidad", original: "tv x2 smart rca" },
        { item: "calefactores", target: 4, unidad: "unidad", original: "calefactores x4" },
        { item: "dvd", target: 1, unidad: "unidad", original: "dvd" },
        { item: "secador de pelo Gama (Elios plegable)", target: 1, unidad: "unidad", original: "secador de pelo gama ELIOS PLEGABLE" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mueble tv cajonera", target: 1, unidad: "unidad", original: "mueble tv cajonera" },
          { item: "cuadro pared", target: 1, unidad: "unidad", original: "cuadro pared" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "cubrecama acolchado 2p", target: 1, unidad: "unidad", original: "cubrecama acolchado 2P" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "acolchado invierno gris 1p", target: 3, unidad: "unidad", original: "acolchado invierno gris 1P x3" },
          { item: "cubrecama 1p violeta", target: 1, unidad: "unidad", original: "cubrecama1P violeta" },
          { item: "cubrecama 1p verde", target: 1, unidad: "unidad", original: "cubrecama1P verde (texto 'verdez' en planilla)" },
          { item: "frazadas 1p", target: 2, unidad: "unidad", original: "frazadas 1P x2" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1P" },
          { item: "mesa tv (tipo rack)", target: 1, unidad: "unidad", original: "mesa tv tipo rack" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazadas 1p", target: 2, unidad: "unidad", original: "frazadas 1p x2" },
          { item: "frazada violeta 1p", target: 1, unidad: "unidad", original: "frazada violeta 1P" },
          { item: "acolchado invierno plus 2p", target: 1, unidad: "unidad", original: "acolchado invierno plus 2P" },
          { item: "acolchado invierno violeta 1p", target: 1, unidad: "unidad", original: "acolchado invierno violeta 1P" },
          { item: "acolchado invierno violeta 2p", target: 1, unidad: "unidad", original: "acolchado invierno violeta 2P" },
          { item: "acolchado celeste", target: 2, unidad: "unidad", original: "acolchado celeste x2" },
          { item: "frazada verde 1p", target: 1, unidad: "unidad", original: "frazada verde 1P" },
          { item: "cover negro", target: 1, unidad: "unidad", original: "cover negro" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    baño: {
            suite: {
              items: [
                { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
              ],
             nota: "Observaciones: No contiene hidromasaje ❌"
            }
          },

    exterior: {
      // Patio (columna amarilla bajo VAJILLA)
      items: [
        { item: "parrilla", target: 2, unidad: "unidad", original: "parrilla (aparece como 'parrilla' y otra línea 'parrilla')" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinche", target: 1, unidad: "unidad", original: "pinche" },
        { item: "bancos", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 39B
{
  id: "Casa 39B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x 8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa de teflón", target: 1, unidad: "unidad", original: "pisa papa teflon" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "pizzera enlozada", target: 1, unidad: "unidad", original: "pizera enlosada" },
        { item: "pizzera de acero", target: 1, unidad: "unidad", original: "pisera acero" },
        { item: "fuente mediana", target: 1, unidad: "unidad", original: "fuente medriana" },
        { item: "ensaladeras de vidrio", target: 2, unidad: "unidad", original: "ensaladera vidrio x2" },
        { item: "tablas de madera", target: 3, unidad: "unidad", original: "tabla madera x3" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "bowl (Color blanco) cuadrado", target: 1, unidad: "unidad", original: "bowls blanco cuadrado" },
        { item: "bowl redondo", target: 1, unidad: "unidad", original: "bowls redondo" },
        { item: "bandeja de melamina", target: 1, unidad: "unidad", original: "bandeja melamina" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "frapera acrílica", target: 1, unidad: "unidad", original: "frapera acrilico" },
        { item: "cuchillas", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "tenedor pinche para asado", target: 1, unidad: "unidad", original: "tenedor pinche asado" },
        { item: "rompe nueces", target: 1, unidad: "unidad", original: "rompe nueces" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },

// Utensilios de teflón
        { item: "cuchara espagueti de teflón", target: 1, unidad: "unidad", original: "teflon: cuchara espagueti" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "teflon: cucharon" },
        { item: "espátula de teflón", target: 2, unidad: "unidad", original: "teflon: espatula x2" },


        // 🪑 Living–Comedor (incluido en cocina)
        { item: "mesa de vidrio", target: 1, unidad: "conjunto", original: "mesa vidrio 8 sillas" },
        { item: "sillas", target: 8, unidad: "conjunto", original: "mesa vidrio 8 sillas" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "sillon de 3 cuerpo x1" },
        { item: "sillones cubo", target: 2, unidad: "unidad", original: "sillon cubo x2" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj pared" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Drean)", target: 1, unidad: "unidad", original: "HELADERA DREAN" },
        { item: "cocina (Escorial)", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "microondas (Rca)", target: 1, unidad: "unidad", original: "microondas rca" },
        { item: "extractor", target: 1, unidad: "unidad", original: "estractor" },
        { item: "tostadora (Atma)", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "licuadora (Liliana)", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "jarra (Aurora)", target: 1, unidad: "unidad", original: "jarra aurora" },
        { item: "aires acondicionados (Conqueror-Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 conqueror y philco" },
        { item: "tvs (Hisense)", target: 2, unidad: "unidad", original: "tv x2 hisense" },
        { item: "secador de pelo (Philips)", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "radiadores", target: 7, unidad: "unidad", original: "radiadores x7- toayeros x2" },
        { item: "toalleros", target: 2, unidad: "unidad", original: "toayeros x2" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "plancha (Philips)", target: 1, unidad: "unidad", original: "plancha philips" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "forros para acolchados de 2 plazas", target: 2, unidad: "unidad", original: "forro para acolchado 2P x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1P x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "cama de 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "acolchados de 1 plaza (Color naranja)", target: 2, unidad: "unidad", original: "acolchado naranja 1P x2" },
          { item: "frazadas de 2 plazas", target: 3, unidad: "unidad", original: "frazada 2P x3" },
          { item: "frazada de 1 plaza", target: 1, unidad: "unidad", original: "frazada 1P" },
          { item: "acolchados de 2 plazas (Color rojo)", target: 2, unidad: "unidad", original: "acolcharo rojo 2P x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },

    exterior: {
      // Ítems de patio
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla (aparece dos veces)" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atiszador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: " sillas", target: 8, unidad: "conjunto", original: "8 sillas" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 40B
{
  id: "Casa 40B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x 8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },

        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },

        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },

        // Utensilios de teflón
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "teflon: cuchara" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "teflon: cucharon" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "teflon: espumadera" },
        { item: "cuchara espagueti de teflón", target: 1, unidad: "unidad", original: "teflon: espagueti" },

        { item: "pizzeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuentes de acero ovalada", target: 2, unidad: "unidad", original: "fuente acero ovalada x2" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tablas para picar de madera", target: 4, unidad: "unidad", original: "tabla picar madera x4" },
        { item: "tabla para picar plástica", target: 1, unidad: "unidad", original: "tabla picar plastica" },
        { item: "azucarera de acero", target: 1, unidad: "unidad", original: "azucarera acero" },
        { item: "bowl plástico (Color blanco)", target: 1, unidad: "unidad", original: "bowl plastico blanco" },
        { item: "escurridor de verduras", target: 1, unidad: "unidad", original: "escurridor de verduras" },

        // 🪑 Living–Comedor (incluido en cocina)
        { item: "mesa", target: 1, unidad: "conjunto", original: "mesa  8 sillas" },
        { item: "sillas", target: 8, unidad: "conjunto", original: "mesa  8 sillas" },
        { item: "sillón en L", target: 1, unidad: "unidad", original: "sillon en L" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesita" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "tvs smart (Hisense-Tcl)", target: 2, unidad: "unidad", original: "tvx2 hisense smart- tcl smart" },
        { item: "aires acondicionados (Noblex-Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 noblex y philco" },
        { item: "heladera (Electrolux)", target: 1, unidad: "unidad", original: "heladera electrolux" },
        { item: "microondas (Whirlpool)", target: 1, unidad: "unidad", original: "microondas wirlpool" },
        { item: "secadores de pelo (Gama)", target: 2, unidad: "unidad", original: "secador de pelo gama x2" },
        { item: "cafetera (Eiffel)", target: 1, unidad: "unidad", original: "cafetera eiffel" },
        { item: "jarra (Electrolux)", target: 1, unidad: "unidad", original: "jarra electrolux" },
        { item: "tostadora (Ultracomb)", target: 1, unidad: "unidad", original: "tostadora Ultracomb" },
        { item: "licuadora", target: 1, unidad: "unidad", original: "licuadora s/n" },
        { item: "extractor de jugo (Eiffel)", target: 1, unidad: "unidad", original: "estractor de jugo eiffel" },
        { item: "minipimer (Eiffel)", target: 1, unidad: "unidad", original: "minipimer eiffel" },
        { item: "extractor (Ecoclima)", target: 1, unidad: "unidad", original: "estractor ecoclima" },
        { item: "ventiladores de techo", target: 5, unidad: "unidad", original: "ventiladores de techox5" },
        { item: "radiadores", target: 6, unidad: "unidad", original: "radiadores x6 - toayeros x2" },
        { item: "toalleros", target: 2, unidad: "unidad", original: "toayeros x2" },
        { item: "plancha (Eiffel)", target: 1, unidad: "unidad", original: "plancha eiffel" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
          { item: "colcha de 2 plazas", target: 1, unidad: "unidad", original: "colcha 2P" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "perchas", target: 8, unidad: "unidad", original: "perchas x8" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "colchas de 1 plaza", target: 3, unidad: "unidad", original: "colcha 1P x3" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1P x3" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x 7" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "colchas de 1 plaza", target: 3, unidad: "unidad", original: "colcha 1P x3" },
          { item: "perchas plásticas", target: 6, unidad: "unidad", original: "perchas plasticas x6" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños",
    },

    exterior: {
      // Ítems del patio
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla " },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "sillón de 2 cuerpos de madera", target: 1, unidad: "unidad", original: "sillon de 2 cuerpos en madera" },
        { item: "juego de mesa", target: 1, unidad: "unidad", original: "juego mesa" },
        { item: "sillones", target: 2, unidad: "unidad", original: "sillones x2" },
        { item: "mesas", target: 2, unidad: "unidad", original: "mesa x2" },
        { item: "sillas", target: 8, unidad: "unidad", original: "sillas x8" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 19A
{
  id: "Casa 19A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (7 personas)
        { item: "cuchillos", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedores", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharitas", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "cucharas", target: 7, unidad: "unidad", original: "cuchara x7" },
        { item: "platos playos", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "platos medianos", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "platos hondos", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platitos de café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compoteras de postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "compoteras de melamina", target: 7, unidad: "unidad", original: "compotera melamina x7" },
        { item: "vasos comunes", target: 7, unidad: "unidad", original: "vaso común x7" },
        { item: "copas de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copas de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "copas de champagne", target: 7, unidad: "unidad", original: "copa champagne x7" },
        { item: "tazas de café", target: 7, unidad: "unidad", original: "taza café x7" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "ollas", target: 4, unidad: "unidad", original: "olla x4" },
        { item: "ollas con mango", target: 2, unidad: "unidad", original: "olla con mango x2" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "sacacorcho" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "espatula teflon" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "hamburguesera de acero", target: 1, unidad: "unidad", original: "hamburguesera acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla y tenedor de cabo blanco", target: 1, unidad: "juego", original: "cuchilla + tenedor cabo blanco" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "tabla madera" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "vasos medidores", target: 2, unidad: "unidad", original: "vaso medidor x2" },
        { item: "fuente redonda de vidrio", target: 1, unidad: "unidad", original: "fuente redonda de vidrio" },
        { item: "escurridor", target: 1, unidad: "unidad", original: "escurridor" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "ensaladeras de melamina", target: 2, unidad: "unidad", original: "ensaladera melamina x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },

        // 🪑 Living-Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 8, unidad: "unidad", original: "sillas" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "sillon 3 cuerpos" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banqueta x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" },
        { item: "jarrones grandes", target: 2, unidad: "unidad", original: "jarron grande x2" },
        { item: "adornos", target: 6, unidad: "unidad", original: "adornos x6" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Koinor)", target: 1, unidad: "unidad", original: "heladera koinor" },
        { item: "cocina (Industrial)", target: 1, unidad: "unidad", original: "cocina industrial" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "minipimer (Electrolux)", target: 1, unidad: "unidad", original: "minipimer electrolux" },
        { item: "tvs smart (Lg-Philips)", target: 4, unidad: "unidad", original: "tv x4 lgx3 philips todos smart" },
        { item: "aires acondicionados (Hisense-Bgh-Blueski)", target: 4, unidad: "unidad", original: "aire acondicionados x4 hisense bgh blueskik2" },
        { item: "radiadores", target: 10, unidad: "unidad", original: "radiadores x10" },
        { item: "ventilador de pie", target: 1, unidad: "unidad", original: "ventilador de pie atma" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "secador de pelo (Nova)", target: 1, unidad: "unidad", original: "secador de pelo nova" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "lavarropas (Drean)", target: 1, unidad: "unidad", original: "lavarropas drean" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p x1" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesitas de luz", target: 2, unidad: "unidad", original: "mesitas de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazadas de 1p x3" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      lavadero: {
        items: [
          { item: "pileta", target: 1, unidad: "unidad", original: "pileta" },
          { item: "lavarropas", target: 1, unidad: "unidad", original: "lavarropas" },
          { item: "ventilador de pie", target: 1, unidad: "unidad", original: "ventilador de pie" },
          { item: "sillas plásticas", target: 7, unidad: "unidad", original: "sillas plásticas x7" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      },
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 2 baños"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" }
      ]
    }
  }
},  


//Sección Casa 25B

{
  id: "Casa 25B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango x1" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero PLATINA x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "bombilla de mate", target: 1, unidad: "unidad", original: "bombilla mate" },
        { item: "cuchilla y chaira", target: 1, unidad: "juego", original: "cuchilla + chaira" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "batidor de acero", target: 1, unidad: "unidad", original: "batidor acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "utensillos de teflón (cucharón, espátula, espumadera)", target: 5, unidad: "unidad", original: "teflon x5 cucharon espatula" },
        { item: "cuchara espagueti y espumadera", target: 1, unidad: "unidad", original: "cuchara espagueti espumadera" },
        { item: "palo amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "set cuchillo y tenedor para asado", target: 1, unidad: "juego", original: "set cuchillo tenedor asado" },
        { item: "posas pava", target: 2, unidad: "unidad", original: "posa pava x2" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "tablas de asado", target: 4, unidad: "unidad", original: "tabla asado x4" },
        { item: "tabla para picar de madera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "colador de pasta" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "sartén enlosado", target: 1, unidad: "unidad", original: "sarten enlosado" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "jarro hervidor grande", target: 1, unidad: "unidad", original: "JARRO HERVIDOR" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "MANTEL CUERINA" },

        // 🪑 Living-Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillones simples matero", target: 2, unidad: "unidad", original: "sillon simple x2 matero" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillonde de 2 cuerpos" },
        { item: "almohadones (Color rojo)", target: 5, unidad: "unidad", original: "almohadones rojos x5" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "canasta centro de mesa caminito", target: 1, unidad: "unidad", original: "canasta centro de mesa caminitos" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Patric)", target: 1, unidad: "unidad", original: "heladera patric" },
        { item: "ventilador de techo", target: 1, unidad: "unidad", original: "ventilador de techo" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor (Longvie)", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "cafetera (Stylo)", target: 1, unidad: "unidad", original: "cafetera stylo" },
        { item: "minipimer (Liliana)", target: 1, unidad: "unidad", original: "minipimer liliana" },
        { item: "juguera (Liliana)", target: 1, unidad: "unidad", original: "juguetra liliana" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo (Gama)", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "tvs smart (Philco-Toshiba-Lg)", target: 3, unidad: "unidad", original: "tv x3 smart philco toshiba lg" },
        { item: "aires acondicionados (Philco-Kelvinator-Rca)", target: 3, unidad: "unidad", original: "aire acondicionado x3 philco kelvinator rca" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cubrecamas de 2 plazas", target: 3, unidad: "unidad", original: "cubrecama 2p x3" },
          { item: "percha madera", target: 1, unidad: "unidad", original: "perchas de madera" }
        ]
      },

      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
          { item: "almohadones", target: 2, unidad: "unidad", original: "almohadones x2" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazadas 1p x4" },
          { item: "cubrecamas de invierno", target: 2, unidad: "unidad", original: "cubrecama invierno x2" },
          { item: "cubrecamas de verano", target: 2, unidad: "unidad", original: "cubrecama verano x2" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" },
        { item: "bañera", target: 1, unidad: "unidad", original: "bañera" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 2 baños",
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "escalera", target: 1, unidad: "unidad", original: "escalera 3 peldaños" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "sillas plásticas", target: 4, unidad: "unidad", original: "sillas plásticas x4" }
      ]
    }
  }
},

//Sección Casa 35A

{
  id: "Casa 35A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (7 personas)
        { item: "cuchillo", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedor", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharita", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "cuchara", target: 7, unidad: "unidad", original: "cuchara x7" },
        { item: "plato playo", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "plato mediano", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "plato hondo", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platito café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compotera postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vaso común", target: 7, unidad: "unidad", original: "vaso común x7" },
        { item: "copa de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copa de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "taza de café", target: 7, unidad: "unidad", original: "taza de café x7" },
        { item: "pocillo vidrio", target: 8, unidad: "unidad", original: "pocillo vidrio x8" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja acero", target: 5, unidad: "unidad", original: "bandeja acero x5" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "panera", target: 2, unidad: "unidad", original: "panera x2" },
        { item: "posa pava", target: 2, unidad: "unidad", original: "posa pava x2" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "bowl plástico", target: 3, unidad: "unidad", original: "bowls plastico x3" },
        { item: "fuente de acero", target: 3, unidad: "unidad", original: "fuewnte de acero x3" },
        { item: "taper rectangular", target: 1, unidad: "unidad", original: "taper rectangular" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "apoya pizza de fibrofacil", target: 2, unidad: "unidad", original: "apoya piza de fibro facil x2" },
        { item: "tabla madera grande", target: 1, unidad: "unidad", original: "madera grande asado" },
        { item: "hielera aluminio", target: 1, unidad: "unidad", original: "hielera aluminio" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera cero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "cuchillo pan", target: 1, unidad: "unidad", original: "cuchillo pan" },
        { item: "cuchilla grande", target: 1, unidad: "unidad", original: "cuchilla grande" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchara espagueti teflon", target: 1, unidad: "unidad", original: "cuchara espagueti teflon" },


        // 🪑 Living-Cocina
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillon de 1 cuerpo x2" },
        { item: "mesa ratona", target: 2, unidad: "unidad", original: "mesa ratonax2" },
        { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "mueble vitrina", target: 1, unidad: "unidad", original: "mueble vitrina" },
        { item: "mueble bajo", target: 1, unidad: "unidad", original: "mueble bajo" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "carrito bebidas", target: 1, unidad: "unidad", original: "carrito bebidas" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera columbia", target: 1, unidad: "unidad", original: "heladera columbia" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "microondas panasonik", target: 1, unidad: "unidad", original: "microondas panasonik" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 surrey" },
        { item: "tv smart", target: 2, unidad: "unidad", original: "tv x2 rca y philco smart" },
        { item: "parlante ranser", target: 1, unidad: "unidad", original: "parlante ranser" },
        { item: "ventiladores de techo", target: 4, unidad: "unidad", original: "ventiladores de techo x4 solo funciona habitación simple" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "jarra atma", target: 1, unidad: "unidad", original: "jarra atma" },
        { item: "minipimer philips", target: 1, unidad: "unidad", original: "minipimer philips" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrado x2" },
          { item: "mueble tv cajonera", target: 1, unidad: "unidad", original: "mueble tv cajonera" },
          { item: "banqueta pie de cama", target: 1, unidad: "unidad", original: "banqueta pie de cama" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "cuadros", target: 1, unidad: "unidad", original: "cuadros" },
          { item: "frazada 1p verde", target: 3, unidad: "unidad", original: "frazada 1p verde x3" }
        ]
      },

      simple_2: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubrecama 2p", target: 2, unidad: "unidad", original: "cubre cama 2p" },
          { item: "frazada 2p", target: 2, unidad: "unidad", original: "frazada 2p" }
        ]
      }
    },

    baño: {
      items: [],
      ante_baño: {
        items: [
          { item: "velador", target: 1, unidad: "unidad", original: "velador" }
        ]
      }
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 17A

{
  id: "Casa 17A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4 (dos de cada uno)" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "tazas de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "compoteras de vidrio", target: 4, unidad: "unidad", original: "compotera vidrio x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara para espagueti", target: 1, unidad: "unidad", original: "cuchara para espagueti" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "palo de amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "tenedor para asado", target: 1, unidad: "unidad", original: "tenedor para asado" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "coladores de pastas", target: 2, unidad: "unidad", original: "colador de pastas x2" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "extractor de jugo de acero", target: 1, unidad: "unidad", original: "extractor jugo acero" },
        { item: "paberas", target: 2, unidad: "unidad", original: "paberas x2" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "tabla madera" },
        { item: "tostador de cocina", target: 1, unidad: "unidad", original: "tostador de cocina" },

        // 🪑 Living-Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "mesita con vidrio", target: 1, unidad: "unidad", original: "mesita con vidrio" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "reloj colgante", target: 1, unidad: "unidad", original: "reloj colgante" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "sillones", target: 2, unidad: "unidad", original: "sillones" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Bochs)", target: 1, unidad: "unidad", original: "heladera bochs" },
        { item: "microondas (Electrolux)", target: 1, unidad: "unidad", original: "microondas electrolux" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "tostadora (Ultracomb)", target: 1, unidad: "unidad", original: "tostadora ultracomb" },
        { item: "jarra (Philips)", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "aires acondicionados (TCL)", target: 2, unidad: "unidad", original: "aire acondicionados x2 TCL" },
        { item: "calefactores", target: 4, unidad: "unidad", original: "calefactores x4" },
        { item: "tvs smart (BGH-RCA)", target: 2, unidad: "unidad", original: "tv x2 bgh y rca smarth" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo (Remington)", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "lavarropas (Drean)", target: 1, unidad: "unidad", original: "lavarropas drean" },
        { item: "dvd", target: 1, unidad: "unidad", original: "dvd" },
        { item: "lavavajilla (No funciona)", target: 1, unidad: "unidad", original: "lavavajilla no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas grande", target: 1, unidad: "unidad", original: "cama 2p grande" },
          { item: "mesas de luz con vidrio", target: 2, unidad: "unidad", original: "mesa de luz con vidrio x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "silla de madera", target: 1, unidad: "unidad", original: "silla madera" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" },
          { item: "cubrecamas de 2 plazas", target: 3, unidad: "unidad", original: "cubrecama 2p x3" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero de pared" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "silla de madera", target: 1, unidad: "unidad", original: "silla madera" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "cubrecamas de invierno", target: 2, unidad: "unidad", original: "cubrecamas x2 invierno" },
          { item: "espejos", target: 2, unidad: "unidad", original: "espejos x2" }
        ]
      },
      planta_alta: {
        items: [
          { item: "sillones materos", target: 2, unidad: "unidad", original: "sillón matero x2" },
          { item: "sillón simple de madera (2 cuerpos)", target: 1, unidad: "unidad", original: "sillón simple madera 2 cuerpos" },
          { item: "mesa cuadrada de vidrio", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio" },
          { item: "alfombra (color beige)", target: 1, unidad: "unidad", original: "alfombra beige" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      lavadero: {
        items: [
          { item: "lavarropas", target: 1, unidad: "unidad", original: "lavarropas" }
        ]
      },
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "bicicletero", target: 1, unidad: "unidad", original: "bicicletero" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},


//Sección Casa 18B

{
  id: "Casa 18B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "plato playo", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "plato mediano", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "plato hondo", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platito café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compotera plástica", target: 4, unidad: "unidad", original: "compotera plástica x4" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "jarrito vidrio", target: 4, unidad: "unidad", original: "jarrito vidrio x4" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espátula teflón", target: 1, unidad: "unidad", original: "espatula teflon" },
        { item: "cuchara teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "espumadera teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchara espumadera teflón", target: 1, unidad: "unidad", original: "cuchara espumadera teflon" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente pyrex vidrio", target: 3, unidad: "unidad", original: "fuente pyrex vidrio x3" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "colador de pastas azul", target: 1, unidad: "unidad", original: "colador de pastas azul" },
        { item: "bowl verde plástico", target: 1, unidad: "unidad", original: "bowl verde plastico" },
        { item: "bandeja melamina", target: 2, unidad: "unidad", original: "bandeja melamina x2" },
        { item: "tostador cocina", target: 1, unidad: "unidad", original: "tostador cocina" },
        { item: "bandeja pizera", target: 1, unidad: "unidad", original: "bandeja pizera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "tabla madera redonda", target: 1, unidad: "unidad", original: "tabla madera redonda" },
        { item: "tabla plástica", target: 1, unidad: "unidad", original: "tabla plastica" },
        { item: "cesto de basura", target: 1, unidad: "unidad", original: "sesto de bazura" },
        { item: "tetera con filtro tego", target: 1, unidad: "unidad", original: "tetera con filtro tego" },

        // 🪑 Living - Cocina
        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillón 1 cuerpo", target: 1, unidad: "unidad", original: "sillon 1 cuerpo x1" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "llavero pared" },
        { item: "jarrón grande", target: 1, unidad: "unidad", original: "jarron grande" },
        { item: "canasta decorativa", target: 1, unidad: "unidad", original: "canasta decorativa" },
        { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
        { item: "mueble escobero", target: 1, unidad: "unidad", original: "mueble escobero" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" },
        { item: "adornos varios", target: 13, unidad: "unidad", original: "adornos varios x13" },
        { item: "cortinas black out", target: 1, unidad: "set", original: "cortinas black out en toda la casa buen estado" }
      ],

      pasillo: {
        items: [
          { item: "cuadro decorativo", target: 1, unidad: "unidad", original: "cuadro decorativo" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "heladera koinor", target: 1, unidad: "unidad", original: "heladera koinor" },
        { item: "cocina domec", target: 1, unidad: "unidad", original: "cocina domec" },
        { item: "microondas aurora", target: 1, unidad: "unidad", original: "microondas aurora" },
        { item: "minipimer philips", target: 1, unidad: "unidad", original: "minipimer philips" },
        { item: "extractor moraldi", target: 1, unidad: "unidad", original: "extractor moraldi" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 philco bgh" },
        { item: "caldera", target: 1, unidad: "unidad", original: "caldera" },
        { item: "radiadores", target: 6, unidad: "unidad", original: "radiadores x6" },
        { item: "toallero", target: 2, unidad: "unidad", original: "toayero x2" },
        { item: "tv smart", target: 3, unidad: "unidad", original: "tv x3 smarth bgh - samsung x2 led" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro x1" },
          { item: "frazadas 2p", target: 1, unidad: "unidad", original: "frazadas 2p x1" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velado x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "cuadro", target: 3, unidad: "unidad", original: "cuadro x3" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      }
    },

    baño: {
      items: [
        { item: "mampara", target: 2, unidad: "unidad", original: "mampara x2" }
      ]
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "mesa redonda", target: 1, unidad: "unidad", original: "mesa redonda" },
          { item: "sillas plásticas", target: 5, unidad: "unidad", original: "5 sillas plásticas" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      },

      patio_interno: {
        items: [
          { item: "mesa rectangular", target: 1, unidad: "unidad", original: "mesa rectangular" },
          { item: "sillones", target: 2, unidad: "unidad", original: "sillones x2" }
        ]
      }
    }
  }
},

//Sección Casa 20A
{
  id: "Casa 20A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (6 personas)
        { item: "cuchillos", target: 6, unidad: "unidad", original: "cuchillo x6" },
        { item: "tenedores", target: 6, unidad: "unidad", original: "tenedor x6" },
        { item: "cucharitas", target: 6, unidad: "unidad", original: "cucharita x6" },
        { item: "cucharas", target: 6, unidad: "unidad", original: "cuchara x6" },
        { item: "platos playos", target: 6, unidad: "unidad", original: "plato playo x6" },
        { item: "platos medianos", target: 6, unidad: "unidad", original: "plato mediano x6" },
        { item: "platos hondos", target: 6, unidad: "unidad", original: "plato hondo x6" },
        { item: "platitos de café", target: 6, unidad: "unidad", original: "platito café x6" },
        { item: "compoteras de postre", target: 6, unidad: "unidad", original: "compotera postre x6" },
        { item: "vasos comunes", target: 6, unidad: "unidad", original: "vaso comun x6" },
        { item: "copas de agua", target: 6, unidad: "unidad", original: "copa de agua x6" },
        { item: "copas de vino", target: 6, unidad: "unidad", original: "copa de vino x6" },
        { item: "tazas de café", target: 6, unidad: "unidad", original: "taza café x6" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango x1" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "casuelas", target: 7, unidad: "unidad", original: "casuela x7" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pinza (Color verde)", target: 1, unidad: "unidad", original: "pinsa verde" },
        { item: "cucharón, espumadera y espátula de teflón", target: 3, unidad: "unidad", original: "cucharon espumadera espatula teflon" },
        { item: "cuchara espagueti, común y de verduras", target: 3, unidad: "unidad", original: "cuharara espagueti cuchara comun cuchara verduras" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "colador de acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "bandeja cuadrada pyrex", target: 1, unidad: "unidad", original: "bandeja cuadrada pirex" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "tabla para picar de madera y plástica", target: 1, unidad: "unidad", original: "tabla picar madera y plastica" },
        { item: "bandeja de horno con parrilla", target: 1, unidad: "unidad", original: "bandeja de horno con parrilla" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "secador de plato", target: 1, unidad: "unidad", original: "secador de plato" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetax2" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon un cuerpo x2" },
        { item: "mueble repisa de tv empotrado", target: 1, unidad: "unidad", original: "mueble repisa tv empotrado" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "florero", target: 1, unidad: "unidad", original: "florero" }
      ],

      pasillo: {
        items: [
          { item: "cuadro redondo con espejo", target: 1, unidad: "unidad", original: "cuadro redondo espejo" },
          { item: "florero", target: 1, unidad: "unidad", original: "florero" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Koinor)", target: 1, unidad: "unidad", original: "heladera koinor" },
        { item: "microondas (Sere)", target: 1, unidad: "unidad", original: "microondas sere" },
        { item: "lavarropa (Drean)", target: 1, unidad: "unidad", original: "lavarropas drean" },
        { item: "cocina (Volcán)", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor (Dias Sur)", target: 1, unidad: "unidad", original: "extractor dias sur" },
        { item: "minipimer (Liliana)", target: 1, unidad: "unidad", original: "minipimer liliana" },
        { item: "jarra (Atma)", target: 1, unidad: "unidad", original: "jarra atma" },
        { item: "tvs (Philips-Rca)", target: 4, unidad: "unidad", original: "tv x4 philips rca x3" },
        { item: "aires acondicionados (Bgh)", target: 4, unidad: "unidad", original: "aire acondicionado x4 bgh" },
        { item: "radiadores", target: 8, unidad: "unidad", original: "radiadores x8" },
        { item: "secadores de pelo (Philips)", target: 2, unidad: "unidad", original: "secador de pelo x2 philip" },
        { item: "cafetera (Liliana)", target: 1, unidad: "unidad", original: "cafetera liliana" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "estante tv empotrado", target: 1, unidad: "unidad", original: "estante tv empotrado" },
          { item: "almohadas", target: 2, unidad: "unidad", original: "almohadas x2" },
          { item: "frazada de 2 plaza", target: 1, unidad: "unidad", original: "frazadas 2p" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
        ]
      },

      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadrox2" },
          { item: "frazada de 1 plaza", target: 1, unidad: "unidad", original: "frazada 1p" }
        ]
      },

      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesita de luz", target: 1, unidad: "unidad", original: "mesitas de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "estante tv empotrado", target: 1, unidad: "unidad", original: "estante tv empotrado" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

   baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" },
        { item: "mampara", target: 1, unidad: "unidad", original: "mampara" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño",
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" }
        ]
      }
    }
  }
},

//Sección Casa 23A
{
  id: "Casa 23A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 2, unidad: "unidad", original: "copa de vino x2" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillo café", target: 3, unidad: "unidad", original: "pocillo café x3" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "fuente acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "ensaladera vidrio", target: 2, unidad: "unidad", original: "ensaladera vidrio x2" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla picar madera redonda", target: 1, unidad: "unidad", original: "tablapicar madera redonda" },
        { item: "tabla madera asado", target: 1, unidad: "unidad", original: "tabla madera asado" },
        { item: "madera de copetín", target: 2, unidad: "unidad", original: "madera de copetin x2" },
        { item: "secador de plato", target: 1, unidad: "unidad", original: "secador de plato" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "fuente de horno", target: 2, unidad: "unidad", original: "fuente de horno x2" },
        { item: "pinsa", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "utensilios teflón (cuchara, cucharón, espumadera)", target: 3, unidad: "unidad", original: "teflon cuchara cucharon espumadera" },

        // 🪑 Living - Cocina
        { item: "mesa con vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa con vidrio 6sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillón matero", target: 2, unidad: "unidad", original: "sillon matero x2" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "mesa ratona con vidrio", target: 1, unidad: "unidad", original: "mesa ratona con vidri" },
        { item: "jarrón grande", target: 1, unidad: "unidad", original: "jarron grande" },
        { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" }
      ],

      pasillo: {
        items: [
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "heladera bambi", target: 1, unidad: "unidad", original: "heladera bambi" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "cocina orbis", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "licuadora liliana", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "extractor sh", target: 1, unidad: "unidad", original: "extractor sh" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "tv", target: 2, unidad: "unidad", original: "tv x2 hitachi led comun - philco smart" },
        { item: "ventiladores", target: 2, unidad: "unidad", original: "ventiladores x2" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 sigma homelider" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "repisa empotrada", target: 1, unidad: "unidad", original: "repisa empotrada" },
          { item: "sillón matero", target: 2, unidad: "unidad", original: "sillon matero x2" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazadas 2p", target: 1, unidad: "unidad", original: "frazadas 2p x1" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" }
        ]
      },

      simple_i: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "sillón pie de cama", target: 1, unidad: "unidad", original: "sillon pie de cama" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" }
        ]
      }
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "pinche", target: 1, unidad: "unidad", original: "pinche" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "mesa con vidrio 4 sillas", target: 1, unidad: "unidad", original: "mesa con vidrio 4 sillas" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    }
  }
},

//Sección Casa 24C
{
  id: "Casa 24C",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (6 personas)
        { item: "cuchillos", target: 6, unidad: "unidad", original: "cuchillo x6" },
        { item: "tenedores", target: 6, unidad: "unidad", original: "tenedor x6" },
        { item: "cucharitas", target: 6, unidad: "unidad", original: "cucharita x6" },
        { item: "cucharas", target: 6, unidad: "unidad", original: "cuchara x6" },
        { item: "platos playos", target: 6, unidad: "unidad", original: "plato playo x6" },
        { item: "platos medianos", target: 6, unidad: "unidad", original: "plato mediano x6" },
        { item: "platos hondos", target: 6, unidad: "unidad", original: "plato hondo x6" },
        { item: "platitos de café", target: 6, unidad: "unidad", original: "platito café x6" },
        { item: "compoteras de postre", target: 6, unidad: "unidad", original: "compotera postre x6" },
        { item: "copas de champagne", target: 6, unidad: "unidad", original: "copa champagne x6" },
        { item: "vasos comunes", target: 6, unidad: "unidad", original: "vaso común x6" },
        { item: "copas de agua", target: 6, unidad: "unidad", original: "copa de agua x6" },
        { item: "copas de vino", target: 6, unidad: "unidad", original: "copa de vino x6" },
        { item: "tazas de café", target: 6, unidad: "unidad", original: "taza café x6" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "ollas con mango", target: 2, unidad: "unidad", original: "olla con mango x2" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero x1" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "cuchara de teflón", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "cucharón espátula", target: 1, unidad: "unidad", original: "cucharon espatula" },
        { item: "palita de madera para sacar pizza", target: 1, unidad: "unidad", original: "palita madera para sacar piza" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "tenedor para asado", target: 1, unidad: "unidad", original: "tenedor asado" },
        { item: "tenedor para ensalada", target: 1, unidad: "unidad", original: "tenedor para ensalada" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "rallador de manzana (color verde)", target: 1, unidad: "unidad", original: "rayador de manzana color verde" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "salero", target: 1, unidad: "unidad", original: "salero" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "frapera", target: 1, unidad: "unidad", original: "frapera" },
        { item: "seca plato canasto (Johnson)", target: 1, unidad: "unidad", original: "seca plato canasto johnson" },
        { item: "tabla para picar de madera cuadrada", target: 1, unidad: "unidad", original: "tabla picar madera cuadrada" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },

        // 🪑 Living - Cocina
        { item: "mesa de vidrio", target: 1, unidad: "unidad", original: "mesa de vidrio" },
        { item: "sillas", target: 8, unidad: "unidad", original: "mesa vidrio 8 sillas" },
        { item: "isla mueble con vidrio", target: 1, unidad: "unidad", original: "isla mueble con vidrio" },
        { item: "centro de mesa y caminito", target: 1, unidad: "unidad", original: "centro de mesa y caminito" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "sillon 3 cuerpos" },
        { item: "mesa ratona cuadrada", target: 1, unidad: "unidad", original: "mesa ratona cuadrada" },
        { item: "mueble tipo rack empotrado", target: 1, unidad: "unidad", original: "mueble tipo rak empotrado" },
        { item: "cuadros rectangulares", target: 2, unidad: "unidad", original: "cuadros rectangulares x2" },
        { item: "cuadros chicos", target: 2, unidad: "unidad", original: "cuadros chicos x2" },
        { item: "vasijas adorno", target: 2, unidad: "unidad", original: "vasijas adorno x2" }
      ],

      pasillo: {
        items: [
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" }
        ]
      }
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      lavadero: {
        items: [
          { item: "tender", target: 1, unidad: "unidad", original: "tender" },
          { item: "bancos (color negro)", target: 4, unidad: "unidad", original: "bancos negros x4" },
          { item: "tabla de planchar", target: 1, unidad: "unidad", original: "tabla planchar" }
        ]
      },
      nota: "Observaciones: No contiene hidromasaje ❌\nA tener en cuenta: Contiene 1 baño"
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Kohinoor)", target: 1, unidad: "unidad", original: "heladera kohinoor" },
        { item: "microondas (LG)", target: 1, unidad: "unidad", original: "microondas LG" },
        { item: "cafetera (Recco)", target: 1, unidad: "unidad", original: "cafetera recco" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "licuadora (Philips)", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "radio (Daihatsu)", target: 1, unidad: "unidad", original: "radio daihatsu" },
        { item: "cocina (Orbis)", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "aires acondicionados (Ecolite - Surrey)", target: 2, unidad: "unidad", original: "aire acondicionado x2 ECOLITE - SURREY control ok" },
        { item: "tvs (Sony, con control)", target: 2, unidad: "unidad", original: "tv x2 sony control ok" },
        { item: "calefactores", target: 7, unidad: "unidad", original: "calefactores x7" },
        { item: "secador de pelo (Imetec)", target: 1, unidad: "unidad", original: "secador de pelo imetec" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventiladores de techo x3" },
        { item: "ventilador de pie (Everest)", target: 1, unidad: "unidad", original: "ventilador de pie everest" },
        { item: "lavarropas (Drean)", target: 1, unidad: "unidad", original: "lavarropas drean" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "mesitas de luz empotradas", target: 2, unidad: "unidad", original: "mesita de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "alfombras", target: 2, unidad: "unidad", original: "alfombra x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "covers infantiles", target: 2, unidad: "unidad", original: "covers infantiles x2" },
          { item: "cubrecamas de invierno", target: 3, unidad: "unidad", original: "cubrecamas invierno x3" },
          { item: "frazadas (color verde)", target: 2, unidad: "unidad", original: "frazadas verdes x2" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "frazadas de 1 plaza (color azul)", target: 2, unidad: "unidad", original: "frazadas azules 1p x2" },
          { item: "cubrecamas (color azul)", target: 2, unidad: "unidad", original: "cubrecamas azules x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" }
        ]
      }
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      },
      patio_externo: {
        items: [
          { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
          { item: "bancos", target: 4, unidad: "unidad", original: "bancos x4" }
        ]
      }
    }
  }
},


//Sección Casa 25A
{
  id: "Casa 25A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillo", target: 2, unidad: "unidad", original: "pocillo x2" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango x1" },
        { item: "olla acero", target: 1, unidad: "unidad", original: "olla acero" },
        { item: "bandeja acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "batidor acero", target: 1, unidad: "unidad", original: "batidor acero" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "set teflón (espátula, cuchara, espumadera, cuchara espagueti)", target: 1, unidad: "juego", original: "set teflon espatula cuchara espumadera cuchara espagueti" },
        { item: "bandeja horno con parrilla", target: 1, unidad: "unidad", original: "bandeja horno con parrilla" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "plato madera", target: 4, unidad: "unidad", original: "plato madera x4" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "mantel de tela", target: 1, unidad: "unidad", original: "mantel de tela" },

        // 🪑 Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesitas ratonas", target: 2, unidad: "unidad", original: "mesitas ratonas x2" },
        { item: "sillones de 2 cuerpos", target: 2, unidad: "unidad", original: "sillones de 2 cuerpos x2" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "porta llave", target: 1, unidad: "unidad", original: "porta llave" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "almohadones", target: 3, unidad: "unidad", original: "almohadones x3" },
        { item: "canasta centro de mesa caminito", target: 1, unidad: "unidad", original: "canasta centro de mesa caminito" }
      ],

      pasillo: {
        items: [
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "heladera patrick", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "microondas marchall", target: 1, unidad: "unidad", original: "microondas marchall" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor longvie", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 philco - kelvinator x2" },
        { item: "tv", target: 3, unidad: "unidad", original: "tv x3 philcosmart-lg x2 comun" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "jarra moulinex", target: 1, unidad: "unidad", original: "jarra moulinex" },
        { item: "tostadora aurora", target: 1, unidad: "unidad", original: "tostadora aurora" },
        { item: "juguera vonne", target: 1, unidad: "unidad", original: "juguera vonne" },
        { item: "licuadora philips", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "secador de pelo remington" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1p", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejoi" },
          { item: "frazadas verdes", target: 2, unidad: "unidad", original: "frazadas verdes x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubrecama de verano", target: 2, unidad: "unidad", original: "cubrecama de verano x2" },
          { item: "cubrecama de invierno", target: 2, unidad: "unidad", original: "cubrecama de invierno x2" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" },
          { item: "frazada 1p", target: 2, unidad: "unidad", original: "frazada 1px2" }
        ]
      }
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "sillas plásticas negras", target: 4, unidad: "unidad", original: "sillas plásticas negras x4" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    }
  }
},

//Sección Casa 35A
{
  id: "Casa 35A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (7 personas)
        { item: "cuchillo", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedor", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharita", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "cuchara", target: 7, unidad: "unidad", original: "cuchara x7" },
        { item: "plato playo", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "plato mediano", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "plato hondo", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platito café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compotera postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vaso común", target: 7, unidad: "unidad", original: "vaso común x7" },
        { item: "copa de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "taza de café", target: 7, unidad: "unidad", original: "taza de café x7" },
        { item: "pocillo vidrio", target: 8, unidad: "unidad", original: "pocillo vidrio x8" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja acero", target: 5, unidad: "unidad", original: "bandeja acero x5" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "panera", target: 2, unidad: "unidad", original: "panera x2" },
        { item: "posa pava", target: 2, unidad: "unidad", original: "posa pava x2" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "bowls plástico", target: 3, unidad: "unidad", original: "bowls plástico x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente de acero" },
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillón 1 cuerpo x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "mueble bajo", target: 1, unidad: "unidad", original: "mueble bajo" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "carrito bebidas", target: 1, unidad: "unidad", original: "carrito bebidas" },
        { item: "taper rectangular", target: 1, unidad: "unidad", original: "taper rectangular" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "apoya pizza de fibro fácil", target: 2, unidad: "unidad", original: "apoya pizza de fibro facil x2" },
        { item: "madera grande asado", target: 1, unidad: "unidad", original: "madera grande asado" },
        { item: "hielera aluminio", target: 1, unidad: "unidad", original: "hielera aluminio" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "cuchillo pan", target: 1, unidad: "unidad", original: "cuchillo pan" },
        { item: "cuchilla grande", target: 1, unidad: "unidad", original: "cuchilla grande" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchara espagueti teflón", target: 1, unidad: "unidad", original: "cuchara espagueti teflon" }

      ],

    },

    electrodomesticos: {
      items: [
        { item: "heladera columbia", target: 1, unidad: "unidad", original: "heladera columbia" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "microondas panasonic", target: 1, unidad: "unidad", original: "microondas panasonic" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 surrey" },
        { item: "tv smart", target: 2, unidad: "unidad", original: "tv x2 RCA y Philco Smart" },
        { item: "parlante ranser", target: 1, unidad: "unidad", original: "parlante ranser" },
        { item: "ventiladores de techo", target: 4, unidad: "unidad", original: "ventiladores de techo x4 (solo funciona en habitación simple II)" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "jarra atma", target: 1, unidad: "unidad", original: "jarra atma" },
        { item: "minipimer philips", target: 1, unidad: "unidad", original: "minipimer philips" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "mueble tv cajonera", target: 1, unidad: "unidad", original: "mueble tv cajonera" },
          { item: "banqueta pie de cama", target: 1, unidad: "unidad", original: "banqueta pie de cama" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p" },
        ],
          nota: "Observaciones: Contiene Baño con suite"
        }
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "cuadros", target: 1, unidad: "unidad", original: "cuadros" },
          { item: "frazada 1p verde", target: 3, unidad: "unidad", original: "frazada 1p verde x3" }
        ]
      },

      simple_2: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladores empotrados x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubre cama 2p", target: 1, unidad: "unidad", original: "cubre cama 2p" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p" }
        ]
      }
    },

    baño: {
      ante_baño: {
        items: [
          { item: "velador", target: 1, unidad: "unidad", original: "velador" }
        ]
      }
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  },

//Sección Casa 36B
{
  id: "Casa 36B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillo", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedor", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharita", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cuchara", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "plato playo", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "plato mediano", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "plato hondo", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platito café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compotera postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vaso común", target: 8, unidad: "unidad", original: "vaso común x8" },
        { item: "copa de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copa de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "copa champagne", target: 8, unidad: "unidad", original: "copa champagne x8" },
        { item: "taza de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "jarro hervidor", target: 2, unidad: "unidad", original: "jarro hervidor x2" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "cuchilla mango blanco" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "utensilios teflón", target: 1, unidad: "set", original: "teflon: cuchara tenedor espátula" },
        { item: "tabla picar madera", target: 3, unidad: "unidad", original: "tabla picar madera x3" },
        { item: "tabla picar plástica", target: 3, unidad: "unidad", original: "tabla picar plastica x3" },
        { item: "frapera acero", target: 1, unidad: "unidad", original: "frapera acero" },
        { item: "cacerola chica color rojo", target: 1, unidad: "unidad", original: "cacerola chica color rojo" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "fuente vidrio", target: 1, unidad: "unidad", original: "fuente vidrio" },
        { item: "raLLador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "bandeja melamina", target: 1, unidad: "unidad", original: "bandeja melamina" },
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon de 2 cuerpo" },
        { item: "sillón simple", target: 2, unidad: "unidad", original: "sillon simple x2" },
        { item: "sillón amaca", target: 1, unidad: "unidad", original: "sillon amaca" },
        { item: "banco de hierro", target: 1, unidad: "unidad", original: "banco de hierro" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "jarrito medidor", target: 1, unidad: "unidad", original: "jarrito medidor" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" }

        
      ],
        planta_alta: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada 1p", target: 1, unidad: "unidad", original: "frazada 1p" },
          { item: "acochlado 2p", target: 1, unidad: "unidad", original: "acochlado 2p" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p" },
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "futón mesa ratona", target: 1, unidad: "unidad", original: "futon mesa ratona" }

        ]
      },
      
    },

    electrodomesticos: {
      items: [
        { item: "heladera bambi", target: 1, unidad: "unidad", original: "heladera bambi" },
        { item: "aire acondicionado", target: 4, unidad: "unidad", original: "aire acondicionado x4 (TCL x3, RCA x1)" },
        { item: "tv smart", target: 2, unidad: "unidad", original: "tv x2 TCL - RCA Smart" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "calefactores", target: 5, unidad: "unidad", original: "calefactores x5" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora winco", target: 1, unidad: "unidad", original: "tostadora winco" },
        { item: "sandwichera liliana", target: 1, unidad: "unidad", original: "sandtos liliana" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "microondas philco", target: 1, unidad: "unidad", original: "microondas philco" },
        { item: "minipimer suzica", target: 1, unidad: "unidad", original: "minipimer suzica" },
        { item: "ventilador de pie clever", target: 1, unidad: "unidad", original: "ventilador de pie clever" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "banco de hierro", target: 1, unidad: "unidad", original: "banco de hierro" },
          { item: "banco madera", target: 1, unidad: "unidad", original: "banco madera" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p" },
          { item: "acochlado 1p", target: 1, unidad: "unidad", original: "acochlado 1p" }
        ],
        nota: "Dicha habitación matrimonial se encuentra en --> Planta baja"
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      },
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "sillas plásticas", target: 3, unidad: "unidad", original: "sillas plásticas x3" },
        { item: "juego hierro banco y mesa", target: 1, unidad: "unidad", original: "juego hierro banco y mesa" }
      ]
    }
  }
},

//Sección Casa 25B
{
  id: "Casa 25B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "taza de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango x1" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bandeja acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "bombilla mate", target: 1, unidad: "unidad", original: "bombilla mate" },
        { item: "cuchilla + chaira", target: 1, unidad: "unidad", original: "cuchilla + chaira" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "batidor acero", target: 1, unidad: "unidad", original: "batidor acero" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "utensilios teflón (cucharones y espatulas)", target: 5, unidad: "unidad", original: "teflon x5 (cucharon, cuchara, espátula, etc.)" },
        { item: "cuchara espagueti", target: 1, unidad: "unidad", original: "cuchara espagueti" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "palo amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "set cuchillo tenedor asado", target: 1, unidad: "juego", original: "set cuchillo tenedor asado" },
        { item: "posa pava", target: 2, unidad: "unidad", original: "posa pava x2" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "tabla asado", target: 4, unidad: "unidad", original: "tabla asado x4" },
        { item: "tabla picar madera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "colador de pasta" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "sartén enlosado", target: 1, unidad: "unidad", original: "sartén enlosado" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "pizera", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "JARRO HERVIDOR" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "MANTEL CUERINA" },
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón simple matero", target: 2, unidad: "unidad", original: "sillón simple x2 matero" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillón de 2 cuerpos" },
        { item: "almohadones rojos", target: 5, unidad: "unidad", original: "almohadones rojos x5" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "adornos varios", target: 1, unidad: "conjunto", original: "adornos varios" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "canasta centro de mesa camino", target: 1, unidad: "unidad", original: "canasta centro de mesa caminito" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }


      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera patric", target: 1, unidad: "unidad", original: "heladera patric" },
        { item: "ventilador de techo", target: 1, unidad: "unidad", original: "ventilador de techo" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor longvie", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "cafetera stylo", target: 1, unidad: "unidad", original: "cafetera stylo" },
        { item: "minipimer liliana", target: 1, unidad: "unidad", original: "minipimer liliana" },
        { item: "juguetera liliana", target: 1, unidad: "unidad", original: "juguetera liliana" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "tv smart", target: 3, unidad: "unidad", original: "tv x3 Smart Philco Toshiba LG" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 Philco Kelvinator RCA" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cubre cama 2p", target: 3, unidad: "unidad", original: "cubrecama 2p x3" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
          { item: "almohadones", target: 2, unidad: "unidad", original: "almohadones x2" },
          { item: "frazadas 1p", target: 4, unidad: "unidad", original: "frazadas 1p x4" },
          { item: "cubrecama invierno", target: 2, unidad: "unidad", original: "cubrecama invierno x2" },
          { item: "cubrecama verano", target: 2, unidad: "unidad", original: "cubrecama verano x2" }
        ]
      }
    },

    baño: {
      items: [
        { item: "bañera con hidromasaje", target: 1, unidad: "unidad", original: "bañera con hidro" }
      ],
      nota: "Observaciones: contiene bañera con hidromasaje | Estado: FUNCIONA correctamente 💧"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "escalera", target: 1, unidad: "unidad", original: "escalera 3 peldaños" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "banco", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "sillas plásticas", target: 4, unidad: "unidad", original: "sillas plásticas x4" }
      ]
    }
  }
},

//Sección Casa 35B

{
  id: "Casa 35B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (7 personas)
        { item: "cuchillo", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedor", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharita", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "cuchara", target: 7, unidad: "unidad", original: "cuchara x7" },
        { item: "plato playo", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "plato mediano", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "plato hondo", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platito café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compotera postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vaso común", target: 7, unidad: "unidad", original: "vaso común x7" },
        { item: "copa de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copa de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "taza de café", target: 7, unidad: "unidad", original: "taza de café x7" },
        { item: "pocillo vidrio", target: 8, unidad: "unidad", original: "pocillo vidrio x8" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja acero platinax", target: 3, unidad: "unidad", original: "bandeja acero platinax3" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente rectangular acero", target: 1, unidad: "unidad", original: "fuente rectangular de acero x1" },
        { item: "pisa papa acero", target: 1, unidad: "unidad", original: "pisa papa acero" },
        { item: "espumadera metal", target: 1, unidad: "unidad", original: "espumadera metal" },
        { item: "cucharón metal", target: 1, unidad: "unidad", original: "cucharón metal" },
        { item: "cuchara metal", target: 1, unidad: "unidad", original: "cuchara metal" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "cuchilla mango blanco" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "bandeja acero", target: 1, unidad: "unidad", original: "bandeja acero" },
{ item: "colador de pastas acero", target: 1, unidad: "unidad", original: "colador de pastas acero" },
{ item: "exprimidor manual plástico", target: 1, unidad: "unidad", original: "exprimidor manual plastico" },
{ item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
{ item: "pizera", target: 2, unidad: "unidad", original: "pizera x2" },
{ item: "bandeja de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
{ item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
{ item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
{ item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },

        // 🪑 Living - Cocina
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "sillón 3 cuerpos" },
        { item: "bancobaulera", target: 1, unidad: "unidad", original: "bancobaulera" },
        { item: "banco", target: 1, unidad: "unidad", original: "banco x1" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "llavero", target: 1, unidad: "unidad", original: "llavero" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "florero y caminito", target: 1, unidad: "unidad", original: "florero + caminito" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "juguera atma", target: 1, unidad: "unidad", original: "juguera atma" },
        { item: "tostadora kanji", target: 1, unidad: "unidad", original: "tostadora kanji" },
        { item: "licuadora philips", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "tv philips bgh", target: 2, unidad: "unidad", original: "tv x2 philips - BGH" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 - sigma x2 - RCA" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia anda" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" }
      ]
    },

    habitaciones: {
      matrimonial: {
        observaciones: "Contiene baño en suite",
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "perchas madera", target: 7, unidad: "unidad", original: "percha de madera x7" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada de 2pl x1" },
          { item: "almohadas extra", target: 2, unidad: "unidad", original: "2 almohadas extras" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 1p verde", target: 2, unidad: "unidad", original: "frazada 1p verde x2" },
          { item: "perchas madera", target: 6, unidad: "unidad", original: "percha de madera x6" },
          { item: "almohada extra", target: 1, unidad: "unidad", original: "almohada extra x1" }
        ]
      },

      simple_2: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada de 2pl x1" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada de 1pl x3" }
        ]
      }
    },

    baño: { items: [] },

    exterior: {
      patio: {
        items: [
          { item:"parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "tenaza", target: 1, unidad: "unidad", original: "tenaza" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    }
  }
},

//Sección Casa 37B
{
  id: "Casa 37B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillo", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedor", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharita", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cuchara", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "plato playo", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "plato mediano", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "plato hondo", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platito café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compotera postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vaso común", target: 8, unidad: "unidad", original: "vaso común x8" },
        { item: "copa de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copa de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "copa champagne", target: 8, unidad: "unidad", original: "copa champagne x8" },
        { item: "taza de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladera acero", target: 6, unidad: "unidad", original: "ensaladera acero x6" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara teflón", target: 1, unidad: "unidad", original: "teflon : cuchara-cucharón-espumadera" },
        { item: "cucharón teflón", target: 1, unidad: "unidad", original: "teflon : cuchara-cucharón-espumadera" },
        { item: "espumadera teflón", target: 1, unidad: "unidad", original: "teflon : cuchara-cucharón-espumadera" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "hielera acero" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava común" },
        { item: "jarrito hervidor", target: 1, unidad: "unidad", original: "jarrito hervidor" },
        { item: "fuente vidrio", target: 1, unidad: "unidad", original: "fuente de vidrio" },
        { item: "fuente acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "secador de plato", target: 1, unidad: "unidad", original: "secador de plato" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava común" },
        { item: "bowl melamina", target: 3, unidad: "unidad", original: "bowl melamina x3" },
        { item: "plato copetín melamina", target: 1, unidad: "unidad", original: "plato copetín melamina" },
        { item: "tabla picar madera cuadrada", target: 2, unidad: "unidad", original: "tabla picar madera cuadrada x2" },
        { item: "escurridor de pasta", target: 2, unidad: "unidad", original: "escurridor de pasta x2" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "frapera plástica" },
        { item: "pizera", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 2, unidad: "unidad", original: "fuente de horno x2" },

        // 🪑 Living - Cocina
        { item: "mesa vidrio 8 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 8 sillas" },
        { item: "sillón en L", target: 1, unidad: "unidad", original: "sillón en L" },
        { item: "mesita de madera", target: 1, unidad: "unidad", original: "mesita de madera" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "porta llave", target: 1, unidad: "unidad", original: "porta llave" }
      ],

      pasillo: {
        items: [
          { item: "escritorio con silla de madera", target: 1, unidad: "unidad", original: "escritorio con silla de madera" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "microondas sanyo", target: 1, unidad: "unidad", original: "microondas sanyo" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "minipimer atma" },
        { item: "jarra yelmo", target: 1, unidad: "unidad", original: "jarra yelmo" },
        { item: "tostadora yelmo", target: 1, unidad: "unidad", original: "tostadora yelmo" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tv philips smart", target: 2, unidad: "unidad", original: "tv x2 philips smart" },
        { item: "tv comunes", target: 2, unidad: "unidad", original: "tv x2 comunes" },
        { item: "aire acondicionado", target: 4, unidad: "unidad", original: "aire acondicionado x4 feder-tclx2-rca" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "ventilador de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "radio netsys", target: 1, unidad: "unidad", original: "radio netsys" },
        { item: "dvd LG", target: 1, unidad: "unidad", original: "dvd LG" },
        { item: "radiadores toayeros", target: 5, unidad: "unidad", original: "radiadores x5 toayeros x2" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "plancha winco", target: 1, unidad: "unidad", original: "plancha winco" }
      ]
    },

    habitaciones: {
      matrimonial: {
        observaciones: "Ubicada en planta baja",
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "cubrecama", target: 2, unidad: "unidad", original: "cubrecama x2" },
          { item: "acolchado 2p", target: 1, unidad: "unidad", original: "acolchado 2p" }
        ]
      },

      simple_i: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "colcha 1p", target: 4, unidad: "unidad", original: "colcha 1p x4" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      },

      planta_alta: {
        observaciones: "Ubicada en planta alta",
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada 1p", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "acolchado 2p", target: 1, unidad: "unidad", original: "acolchado 2p" },
          { item: "sillón madera", target: 1, unidad: "unidad", original: "sillón madera" }
        ]
      }
    },

    baño: { items: [] },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    }
  }
},

//Sección Casa 25D
{
  id: "Casa 25D",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (5 personas)
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "plato playo", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "plato mediano", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "plato hondo", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platito café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vaso calado", target: 5, unidad: "unidad", original: "vaso calado x5" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "copa champagne", target: 5, unidad: "unidad", original: "copa champagne x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillo café", target: 5, unidad: "unidad", original: "pocillo café x5" },
        { item: "olla de acero tapa de vidrio", target: 1, unidad: "unidad", original: "olla de acero tapa de vidrio" },
        { item: "sartén", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "olla juego", target: 2, unidad: "unidad", original: "olla juego x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango x1" },
        { item: "bandeja acero", target: 4, unidad: "unidad", original: "bandeja acero x4" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "fuente acero ovalada", target: 1, unidad: "unidad", original: "fuente acero ovalada x1" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "juego de teflón", target: 1, unidad: "unidad", original: "juego de teflon cucharon+espátula+espumadera" },
        { item: "pisapapa", target: 1, unidad: "unidad", original: "pisapapa" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espátula" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "mesa con vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa con vidrio 6 sillas" },
        { item: "espejo pared", target: 1, unidad: "unidad", original: "espejo pared" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mueble rak empotrado", target: 1, unidad: "unidad", original: "mueble rak empotrado" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillón de 2 cuerpo" },
        { item: "sillón de 1 cuerpo rojo", target: 1, unidad: "unidad", original: "sillón de 1 cuerpo rojos" },
        { item: "adornos varios", target: 1, unidad: "conjunto", original: "adornos varios" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "jarrón negro", target: 1, unidad: "unidad", original: "jarrón negro" },
        { item: "centro de mesa caminito", target: 1, unidad: "unidad", original: "centro de mesa + caminito" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera x1" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "filtro tela café", target: 1, unidad: "unidad", original: "filtro tela café" },
        { item: "pizera enlozada", target: 3, unidad: "unidad", original: "pizera x3 enlosada" },
        { item: "pizera aluminio", target: 2, unidad: "unidad", original: "pizera x2 aluminio" },
        { item: "bandeja horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
        { item: "pava silvadora", target: 1, unidad: "unidad", original: "pava silvadora" },
        { item: "juguera manual vidrio", target: 1, unidad: "unidad", original: "juguera manual vidrio" },
        { item: "posa pava", target: 1, unidad: "unidad", original: "posa pava" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "jarra de vidrio", target: 2, unidad: "unidad", original: "jarra de vidrio x2" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "rayador acero", target: 1, unidad: "unidad", original: "rayador acero" },
        { item: "fuente enlozada", target: 1, unidad: "unidad", original: "fuente enlozada" },
        { item: "fuente de vidrio", target: 1, unidad: "unidad", original: "fuente de vidrio" },
        { item: "tabla madera cuadrada", target: 1, unidad: "unidad", original: "tabla madera cuadrada" },
        { item: "tabla picar cuadrada plástica", target: 1, unidad: "unidad", original: "tabla picar cuadrada plástica" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "porta rollo", target: 1, unidad: "unidad", original: "porta rollo" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "taper con tapa", target: 6, unidad: "unidad", original: "taper x6 con tapa" },
        { item: "plato vidrio playo", target: 5, unidad: "unidad", original: "plato vidrio playo x5" },
        { item: "especiero", target: 2, unidad: "unidad", original: "especiero x2" },
        { item: "compotera vidrio", target: 4, unidad: "unidad", original: "compotera vidrio x4" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "fuente redonda acero grande", target: 1, unidad: "unidad", original: "fuente redonda acero grande" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "hielera acero" }

      ],

    },
    pasillo: {
        items: [
          { item: "jarrón con flores", target: 1, unidad: "unidad", original: "jarrón con flores" }
        ]
      },

    electrodomesticos: {
      items: [
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco - hitachi" },
        { item: "tv smart", target: 3, unidad: "unidad", original: "tv x3 smart hitachi - LG - AOC controles ok" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "lena hogar", target: 1, unidad: "unidad", original: "leño hogar" },
        { item: "cafetera liliana", target: 1, unidad: "unidad", original: "cafetera liliana" },
        { item: "jarra atma", target: 1, unidad: "unidad", original: "jarra atma" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "juguera liliana", target: 1, unidad: "unidad", original: "juguera liliana" },
        { item: "secador de pelo braun", target: 2, unidad: "unidad", original: "secador de pelo x2 braun - imetec" },
        { item: "caloventor", target: 2, unidad: "unidad", original: "caloventor x2" },
        { item: "plancha philips", target: 1, unidad: "unidad", original: "plancha philips" },
        { item: "lavarropas electrolux", target: 1, unidad: "unidad", original: "lavarropas electrolux" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "minipimer atma" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "luz emergencia", target: 2, unidad: "unidad", original: "luz emergencia x2" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p 1,6 x 2m" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "sillón rectangular pie de cama", target: 1, unidad: "unidad", original: "sillón rectangular pie de cama" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p" },
          { item: "cubrecama 2p", target: 1, unidad: "unidad", original: "cubrecama 2p" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3 (0,9 x 1,90)" },
          { item: "mueble empotrado + velador", target: 1, unidad: "unidad", original: "mueble empotrado + velador" },
          { item: "silla con almohadón", target: 1, unidad: "unidad", original: "silla con almohadón" },
          { item: "frazadas 1p rayadas azul", target: 3, unidad: "unidad", original: "frazadas 1p x3 rayadas azul" },
          { item: "tabla planchar", target: 1, unidad: "unidad", original: "tabla planchar" }
        ]
      },

    },

    baño: {
      items: [
        { item: "bañera con hidromasaje", target: 1, unidad: "unidad", original: "banera con hidro" }
      ],
      
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "pinche", target: 2, unidad: "unidad", original: "pinche x2" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
          { item: "cubrecamas", target: 3, unidad: "unidad", original: "cubrecamas x3" },
          { item: "mantas rojas", target: 2, unidad: "unidad", original: "mantas x2 rojas" }
        ]
      }
    }
  }
},

//Sección Casa 42B
{
  id: "Casa 42B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (8 personas)
        { item: "cuchillos", target: 8, unidad: "unidad", original: "cuchillo x8" },
        { item: "tenedores", target: 8, unidad: "unidad", original: "tenedor x8" },
        { item: "cucharitas", target: 8, unidad: "unidad", original: "cucharita x8" },
        { item: "cucharas", target: 8, unidad: "unidad", original: "cuchara x8" },
        { item: "platos playos", target: 8, unidad: "unidad", original: "plato playo x8" },
        { item: "platos medianos", target: 8, unidad: "unidad", original: "plato mediano x8" },
        { item: "platos hondos", target: 8, unidad: "unidad", original: "plato hondo x8" },
        { item: "platitos de café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras de postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso común x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "colador de pasta" },
        { item: "fuente de acero ovalada", target: 2, unidad: "unidad", original: "fuente acero ovalada x2" },
        { item: "platos de madera", target: 3, unidad: "unidad", original: "platos de madera x3" },
        { item: "tablas para picar de madera", target: 2, unidad: "unidad", original: "tabla picar madera x2" },
        { item: "bandejas de horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
        { item: "pizera enlosada", target: 1, unidad: "unidad", original: "pizera enlosada" },
        { item: "pizera de acero", target: 1, unidad: "unidad", original: "pizera acero" },
        { item: "bowl (Color blanco)", target: 1, unidad: "unidad", original: "bowl blanco" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },

        // 🪑 Living - Cocina
        { item: "mesa con vidrio", target: 1, unidad: "unidad", original: "mesa con vidrio" },
        { item: "sillas", target: 8, unidad: "unidad", original: "mesa con vidrio 8 sillas" },
        { item: "sillón de 3 cuerpos", target: 1, unidad: "unidad", original: "sillón 3 cuerpos" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillón 1 cuerpo x2" },
        { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "jarrón de vidrio", target: 1, unidad: "unidad", original: "jarrón vidrio" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
         { item: "caminito", target: 1, unidad: "unidad", original: "caminito" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "heladera (Gafa)", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cocina (Florencia)", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "microondas (Atma)", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "extractor (Tst)", target: 1, unidad: "unidad", original: "extractor tst" },
        { item: "aires acondicionados (Philco)", target: 4, unidad: "unidad", original: "aire acondicionado x4 philco" },
        { item: "jarra (Winco)", target: 1, unidad: "unidad", original: "jarra winco" },
        { item: "tostadora (Ultracomb)", target: 1, unidad: "unidad", original: "tostadora ultracomb" },
        { item: "minipimer (Atma)", target: 1, unidad: "unidad", original: "minipimer atma" },
        { item: "secador de pelo (Atma)", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "cafetera (Yelmo)", target: 1, unidad: "unidad", original: "cafetera yelmo" },
        { item: "calefacción caldera", target: 1, unidad: "unidad", original: "calefacción caldera" },
        { item: "radiadores(9)-toayeros(3)", target: 12, unidad: "unidad", original: "radiadores x9 - toayeros x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "tvs smart (Sharp)", target: 2, unidad: "unidad", original: "tv smart sharp x2" },
        { item: "tv (Philco) led", target: 1, unidad: "unidad", original: "tv philco led" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2 plaza" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "estante de tv empotrado", target: 1, unidad: "unidad", original: "estante tv empotrado" },
          { item: "frazadas de 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" },
          { item: "cubrecama de verano", target: 1, unidad: "unidad", original: "cubrecama de verano" }
        ]
      },

      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1 plaza x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cubrecamas de verano de 1 plaza", target: 3, unidad: "unidad", original: "cubrecama verano 1p x3" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },

      simple_2: {
        items: [
          { item: "camas de 1 plaza", target: 3, unidad: "unidad", original: "cama 1 plaza x3" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazadas de 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "cubrecamas de verano de 1 plaza", target: 3, unidad: "unidad", original: "cubrecama verano 1p x3" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SÍ"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" },
        { item: "bañera con hidromasaje", target: 1, unidad: "unidad", original: "bañera con hidromasage" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 3 baños",
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa 2 bancos" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    }
  }
},

//Sección 26A
{
  id: "Casa 26A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "compoteras de vidrio", target: 3, unidad: "unidad", original: "compotera vidrio x3" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillos con platitos", target: 6, unidad: "unidad", original: "pocillo x6 con sus platitos" },
        { item: "tazas de wini pooh", target: 2, unidad: "unidad", original: "taza wini pooh x2" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "colador de pastas acero", target: 1, unidad: "unidad", original: "colador de pastas acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "secador de plato", target: 1, unidad: "unidad", original: "secador de plato" },
        { item: "tablas para picar de madera", target: 2, unidad: "unidad", original: "tabla picar madera x2" },
        { item: "tabla para picar plástica", target: 1, unidad: "unidad", original: "tabla picar plastica" },
        { item: "cuchillas", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "tenedores de asado grande", target: 2, unidad: "unidad", original: "tenedor de asado grande x2" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "tenedor de teflón", target: 1, unidad: "unidad", original: "tenedor teflon" },
        { item: "espátula rectangular", target: 1, unidad: "unidad", original: "espatula rectangular" },
        { item: "palo de amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 4, unidad: "unidad", original: "mesa con 4 sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillón 2 cuerpos" },
        { item: "sillón matero", target: 1, unidad: "unidad", original: "sillón matero x1" },
        { item: "mesa ratona con florero de vidrio", target: 1, unidad: "unidad", original: "mesa ratona con florero vidrio" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Briket)", target: 1, unidad: "unidad", original: "heladera briket" },
        { item: "extractor (Wenir)", target: 1, unidad: "unidad", original: "extractor wenir" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "termo tanque", target: 1, unidad: "unidad", original: "TERMOTANQUE" },
        { item: "horno con bandeja y parrilla (Atma)", target: 1, unidad: "unidad", original: "horno con bandeja y parrilla atma" },
        { item: "microondas (Likoa)", target: 1, unidad: "unidad", original: "microondas likoa" },
        { item: "jarra (Peabody)", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "minipimer (Winco)", target: 1, unidad: "unidad", original: "minipimer winco (falta)" },
        { item: "tvs (Rca-Noblex)", target: 2, unidad: "unidad", original: "televisor x2 RCA NOBLEX" },
        { item: "aires acondicionados (Hitachi)", target: 2, unidad: "unidad", original: "aire acondicionado x2 hitachi" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "secadores de pelo (Atma)", target: 1, unidad: "unidad", original: "secador de pelo atma" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazadas 2p x1" },
          { item: "cubrecama (Color verde) pallet", target: 1, unidad: "unidad", original: "cubrecama verde pallet" }
        ]
      },

      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazadas de 1 plaza", target: 4, unidad: "unidad", original: "frazadas de 1 plaza x4" },
          { item: "manta", target: 1, unidad: "unidad", original: "manta" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SÍ"
    },

    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "conjunto", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅\nA tener en cuenta: Contiene 1 baño",
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      },

      jardin_frente: {
        items: [
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "sillones", target: 2, unidad: "unidad", original: "mesa + 2 sillones" }
        ]
      }
    }
  }
},

//Sección Casa 26B
{
  id: "Casa 26B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos de café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras de postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas de champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "fuente de losa", target: 1, unidad: "unidad", original: "fuente de losa" },
        { item: "bandejas de acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "colador de pasta" },
        { item: "mantequera de melamina", target: 1, unidad: "unidad", original: "mantequera melamina" },
        { item: "tablas para picar de madera", target: 2, unidad: "unidad", original: "tabla picar madera x2" },
        { item: "tabla de picar plástica", target: 1, unidad: "unidad", original: "tabla picar plastica" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "pinza grande", target: 1, unidad: "unidad", original: "pinza grande" },
        { item: "tenedor grande", target: 1, unidad: "unidad", original: "tenedor grande" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espátula" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "espátula de teflón", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "tenedor pinche", target: 1, unidad: "unidad", original: "tenedor pinche" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "afilador", target: 1, unidad: "unidad", original: "afilador" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "agarradera para fuente", target: 1, unidad: "unidad", original: "agarradera para fuente" },

        // 🪑 Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa con 6 sillas" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillón matero", target: 1, unidad: "unidad", original: "sillon matero x1" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa cuadrada", target: 1, unidad: "unidad", original: "mesa cuadrada" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "porta llave", target: 1, unidad: "unidad", original: "porta llave" },
      ],

      pasillo: {
        items: [
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
        ]
      }
    },

    electrodomesticos: {
      items: [
        { item: "heladera (Siam)", target: 1, unidad: "unidad", original: "heladera siam" },
        { item: "tostadora (Liliana)", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "microondas (Bgh)", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "jarra (Moulinex)", target: 1, unidad: "unidad", original: "jarra moulinex" },
        { item: "tvs (Tcl)", target: 2, unidad: "unidad", original: "tv x2 tcl smart - tcl común" },
        { item: "aires acondicionados (Lg-Sl-Hitachi)", target: 3, unidad: "unidad", original: "aire acondicionado x3 lg sl hitachi" },
        { item: "minipimer (Susika)", target: 1, unidad: "unidad", original: "minipimer susika" },
        { item: "cocina (Patrick)", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "calefon (Orbis)", target: 1, unidad: "unidad", original: "calefon orbis" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo (Atma)", target: 1, unidad: "unidad", original: "secador de pelo atma" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama de 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "acolchado de invierno", target: 1, unidad: "unidad", original: "acolchado de invierno x1" },
          { item: "frazada de 2 plazas", target: 1, unidad: "unidad", original: "frazada de 2p x1" }
        ]
      },

      simple_1: {
        items: [
          { item: "camas de 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "bancos cubos", target: 2, unidad: "unidad", original: "bancos cubos x2" },
          { item: "frazadas de 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "cubrecamas", target: 2, unidad: "unidad", original: "cubrecamas x2" },
          { item: "manta (Color rosada)", target: 1, unidad: "unidad", original: "manta rosada" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SÍ"
    },

    exterior: {
      patio: {
        items: [
          { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
          { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
           { item: "palita", target: 1, unidad: "unidad", original: "palita" },
          { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" },
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" }
        ]
      },

      jardin_frente: {
        items: [
          { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
          { item: "sillones", target: 2, unidad: "unidad", original: "mesa + 2 sillones" }
        ]
      }
    }
  }
},


  ]
}
// =======================
//   HELPERS Y FORMATEO
// =======================

const STOPWORDS = new Set(["de", "del", "la", "las", "los", "y", "e", "el", "a", "al", "en", "por", "para"]);

const CANON_AMBIENTES = [
  "cocina",
  "habitacion_1",
  "habitacion_2",
  "comedor",
  "baño",
  "utensilios",
  "electrodomesticos"
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

// 🔹 Encuentra la cabaña aunque el usuario escriba mal o sin "Casa"
const findCabana = (idRaw = "") => {
  const idNorm = norm(idRaw);
  if (!idNorm) return null;

  const cabanas = DATA.cabanas || [];

  // 1️⃣ Coincidencia exacta
  let match = cabanas.find(c => norm(c.id) === idNorm);
  if (match) return match;

  // 2️⃣ Coincidencia parcial
  match = cabanas.find(c => idNorm.includes(norm(c.id)) || norm(c.id).includes(idNorm));
  if (match) return match;

  // 3️⃣ Si el usuario omitió "casa" o escribió mal (ej. "csa 3a", "c3a")
  for (const cab of cabanas) {
    const idClean = norm(cab.id).replace(/\bcasa\b/, "").trim();
    if (idNorm.replace(/\bcasa\b/, "").includes(idClean) || idClean.includes(idNorm.replace(/\bcasa\b/, ""))) {
      return cab;
    }
  }

  // 4️⃣ Coincidencia por similitud (tolerancia a errores)
  const similarity = (a, b) => {
    const longer = a.length > b.length ? a : b;
    const shorter = a.length > b.length ? b : a;
    let same = 0;
    for (let i = 0; i < shorter.length; i++) if (longer[i] === shorter[i]) same++;
    return same / longer.length;
  };

  let best = null;
  let bestScore = 0;
  for (const cab of cabanas) {
    const score = similarity(idNorm, norm(cab.id));
    if (score > bestScore) {
      bestScore = score;
      best = cab;
    }
  }

  if (best && bestScore >= 0.6) return best;

  return null;
};

// ---------- Resolución de ambientes ----------
const resolveAmbiente = (input = "") => {
  const t = norm(input);
  if (/\bhabitaciones?\b/.test(t)) return "habitaciones";
  if (/bano|banio|ban/.test(t)) return "baño";
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
    planta_alta: "PLANTA ALTA 🪜",
    lavadero: "LAVADERO 💧",
    suite: "SUITE 🛁",
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
    if (s.nota) sectionText += `\n\n*NOTA:*\n${s.nota}`;
    return sectionText;
  }).join("\n\n");
};

// =======================
//   BUILD PAYLOAD
// =======================

const buildAmbientePayload = (id, amb, onlySmall = true) => {
  const cab = findCabana(id);
  if (!cab) return { error: "❌ Cabaña no encontrada." };

  const ambCanon = resolveAmbiente(amb);
  const ambData = cab.ambientes?.[ambCanon];
  if (!ambData) return { error: "⚠️ Ambiente no encontrado en esta cabaña." };

  // Sub-secciones (ej: habitaciones, exterior, etc.)
  const subSections = Object.entries(ambData)
    .filter(([key]) => key !== "items" && key !== "nota")
    .map(([sector, obj]) => ({
      sector,
      items: (obj.items || []).filter(it => !onlySmall || isChico(it.item)),
      nota: obj.nota || null
    }));

  let text = "";

  if (subSections.length) {
    text += `\n\n${formatSectioned(subSections)}`;
  }

  if (ambData.nota) {
    text += `\n\n*NOTA:*\n${ambData.nota}`;
  }

  // Si el ambiente tiene solo secciones
  const sections = Object.entries(ambData)
    .filter(([key]) => key !== "nota")
    .map(([sector, obj]) => ({
      sector,
      items: (obj.items || []).filter(it => !onlySmall || isChico(it.item)),
      nota: obj.nota || null
    }));

  if (!sections.length && !subSections.length) {
    return { error: "⚠️ No se encontraron ítems para este ambiente." };
  }

  const header = `🏠 *${cab.id.toUpperCase()} | ${ambCanon.toUpperCase()}*`;
  text = `${header}\n\n${formatSectioned(sections)}${text}`;

  text = text.replace(/\n{3,}/g, "\n\n"); // limpia saltos excesivos

  const items = sections.flatMap(s => s.items.map(it => ({ ...it, sector: s.sector })));

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
