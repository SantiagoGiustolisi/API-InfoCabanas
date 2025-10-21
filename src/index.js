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
        ],
        nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
      }
    },

    electrodomesticos: {
      items: [
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
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
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
        { item: "copas champagne", target: 4, unidad: "unidad", original: "" },
        { item: "vasos", target: 4, unidad: "unidad", original: "" },
        { item: "vasos trago largo", target: 4, unidad: "unidad", original: "" },
        { item: "taza de café", target: 4, unidad: "unidad", original: "" },
        { item: "pocillo de café", target: 4, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "" },
        { item: "rayador acero", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pinzas acero", target: 1, unidad: "unidad", original: "" },
        { item: "fuente acero", target: 3, unidad: "unidad", original: "" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "" },
        { item: "cesto basura", target: 1, unidad: "unidad", original: "" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "" },
        { item: "cuchillos", target: 4, unidad: "unidad", original: "" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "" },
        { item: "jarro hervidor acero", target: 1, unidad: "unidad", original: "" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },

        // Living - Cocina
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
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
        nota: "Observaciones: No contiene hidromasaje ❌"
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "aire acondicionado philco", target: 3, unidad: "unidad", original: "aire acondicionado philco x4" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
        { item: "microondas", target: 1, unidad: "unidad", original: "" },
        { item: "jarra HITACHI", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "" },
        { item: "mini pymer atma", target: 1, unidad: "unidad", original: "" },
        { item: "tv bgh 32 pulgadas común", target: 1, unidad: "unidad", original: "" },
        { item: "tv bgh 43 pulgadas smart", target: 1, unidad: "unidad", original: "" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo Remington", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "frazada 2P animal print", target: 1, unidad: "unidad", original: "" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cortina black out", target: 2, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "2 camas 1P" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "silla", target: 1, unidad: "unidad", original: "" },
          { item: "alfombra", target: 1, unidad: "unidad", original: "" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "cortina black out", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 1P violetas", target: 2, unidad: "unidad", original: "frazada 1P x2 violetas" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"

    },

    exterior: {
      items: [
        { item: "mesa", target: 2, unidad: "unidad", original: "mesa x2" },
        { item: "banco", target: 2, unidad: "unidad", original: "banco x2" },
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
        { item: "copas champagne", target: 3, unidad: "unidad", original: "" },
        { item: "vasos", target: 3, unidad: "unidad", original: "" },
        { item: "taza de café", target: 3, unidad: "unidad", original: "" },
        { item: "posillo de café", target: 3, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sarten", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "rayador de acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
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
        { item: "tabla madera", target: 2, unidad: "unidad", original: "tabla madera x2" },
        { item: "jarra hervidora", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja", target: 1, unidad: "unidad", original: "" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "" },
        { item: "cesto basura", target: 1, unidad: "unidad", original: "" },

        // Living - Cocina
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 4, unidad: "unidad", original: "" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "" },
        { item: "espejo pared", target: 6, unidad: "unidad", original: "espejo pared x6" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "calefón", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: No contiene hidromasaje ❌"
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "aires acondicionados rca", target: 2, unidad: "unidad", original: "aire acondicionado x2 rca" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "" },
        { item: "jarra ranser", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "" },
        { item: "mini pymer atma", target: 1, unidad: "unidad", original: "" },
        { item: "smart tv philco", target: 1, unidad: "unidad", original: "" },
        { item: "tv philco", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "" },
        { item: "calefon", target: 1, unidad: "unidad", original: "" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "ventilador de pie liliana", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "silla", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazada 2P beige", target: 1, unidad: "unidad", original: "frazada 2P color beige" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 1P beige", target: 1, unidad: "unidad", original: "frazada 1P color beige" }
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
        { item: "cuchillo", target: 3, unidad: "unidad", original: "cuchillo x3" },
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
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "" },
        { item: "bandejas acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente ovalada", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "" },
        { item: "olla de acero con mango", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "tablas asado", target: 2, unidad: "unidad", original: "" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "pocillos", target: 3, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "espumaderas acero", target: 3, unidad: "unidad", original: "" },
        { item: "ollas", target: 2, unidad: "unidad", original: "" },
        { item: "sarten", target: 1, unidad: "unidad", original: "" },
        

        // Living - Cocina
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa 4 sillas" },
        { item: "sillas", target: 4, unidad: "unidad", original: "mesa 4 sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "calefón orbis", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: No contiene hidromasaje ❌"
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora ultracomb", target: 1, unidad: "unidad", original: "" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "" },
        { item: "microondas grundig", target: 1, unidad: "unidad", original: "" },
        { item: "calefón orbis", target: 1, unidad: "unidad", original: "" },
        { item: "heladera helctrolux", target: 1, unidad: "unidad", original: "" },
        { item: "mini pymer atma", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado tcl-rca", target: 2, unidad: "unidad", original: "aire acondicionado x2 tcl-rca" },
        { item: "tv philco 43 smart", target: 1, unidad: "unidad", original: "tv philco 43 pulgadas smart" },
        { item: "tv led jvc 32 común", target: 1, unidad: "unidad", original: "tv led común jvc 32 pulgadas" },
        { item: "cocina saccol", target: 1, unidad: "unidad", original: "" },
        { item: "ventilador de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "espejo pared", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas 2P blanca", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza marinera", target: 1, unidad: "unidad", original: "" },
          { item: "mesa auxiliar", target: 1, unidad: "unidad", original: "" },
          { item: "cubrecamas 1P celeste", target: 2, unidad: "unidad", original: "cubrecama 1P celeste x2" },
          { item: "frazadas 1P beige", target: 1, unidad: "unidad", original: "frazada 1P color beige x2" }
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
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 4, unidad: "unidad", original: "4 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "" },
        { item: "espejos pared", target: 6, unidad: "unidad", original: "espejo pared x6" },
        { item: "mueble pared", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" }
        ],
         nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "tv philco", target: 1, unidad: "unidad", original: "tv philco sin control" },
        { item: "aire kelvinator", target: 1, unidad: "unidad", original: "" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
        { item: "jarra atma", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera nespresso cápsulas", target: 1, unidad: "unidad", original: "nespreso cafetera cápsula" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia funciona" },
        { item: "frigobar mabe", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "sillones", target: 2, unidad: "unidad", original: "sillón x2" },
          { item: "mesita auxiliar", target: 1, unidad: "unidad", original: "" },
          { item: "cesto basura", target: 1, unidad: "unidad", original: "sesto basura" }
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
        { item: "copas diferentes", target: 6, unidad: "unidad", original: "copas diferentes x6" },
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
         nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "tv philco 43 smart", target: 1, unidad: "unidad", original: "tv philco 43 smarth" },
        { item: "aire acondicionado kelvinator", target: 1, unidad: "unidad", original: "" },
        { item: "frigobar mabe", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera nespresso", target: 1, unidad: "unidad", original: "nespreso cafetera" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama de 2p x1" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "espejo pared", target: 1, unidad: "unidad", original: "" },
          { item: "florero", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadro x2" },
          { item: "frazada beige 2P", target: 1, unidad: "unidad", original: "frazada beige 2P" }
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
        { item: "copas champagne", target: 4, unidad: "unidad", original: "4 copas champagne" },
        { item: "vasos trago largo", target: 4, unidad: "unidad", original: "4 vasos trago largo" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "4 vasos" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "pela papas" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "sacacorchos", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisapure", target: 1, unidad: "unidad", original: "pisa pure acero" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "pinzas acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchillo mango blanco", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor acero", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "fuente acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "jarro hervidor acero", target: 1, unidad: "unidad", original: "" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plastico", target: 1, unidad: "unidad", original: "" },
        { item: "olla", target: 2, unidad: "unidad", original: "ollas x2" },
        { item: "sarten", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "taza de café", target: 12, unidad: "unidad", original: "taza de café x12" },
        { item: "cesto basura", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa cuadrada", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 5, unidad: "unidad", original: "" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "jarras cerámica", target: 6, unidad: "unidad", original: "jarras cerámica x6" },
        { item: "cuenco cerámica", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "secador de pelo", target: 1, unidad: "unidad", original: "" }
        ],
         nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aire acondicionado tcl", target: 2, unidad: "unidad", original: "aire acondicionado tclk2" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
        { item: "microondas sanyo", target: 1, unidad: "unidad", original: "" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
        { item: "tv bgh 43 smart", target: 1, unidad: "unidad", original: "" },
        { item: "tv 32 comun", target: 1, unidad: "unidad", original: "" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "banco", target: 1, unidad: "unidad", original: "" }        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "2 camas 1p" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 1, unidad: "unidad", original: "" },
          { item: "escritorio", target: 1, unidad: "unidad", original: "" },
          { item: "silla madera", target: 1, unidad: "unidad", original: "" }        ]
      },
       nota: "A tener en cuenta: Separación de camas: SI | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "banco plaza madera", target: 1, unidad: "unidad", original: "" }
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
        { item: "copas champagne", target: 5, unidad: "unidad", original: "5 copas champagne" },
        { item: "vasos trago largo", target: 5, unidad: "unidad", original: "5 vasos trago largo" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "sarten", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "jarra plastica", target: 1, unidad: "unidad", original: "" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillo café", target: 5, unidad: "unidad", original: "pocillo café x5" },
        { item: "jarra hervidora sin mango", target: 1, unidad: "unidad", original: "" },
        { item: "fuente acero", target: 4, unidad: "unidad", original: "fuente acero x4" },
        { item: "cuenco vasija ceramico", target: 10, unidad: "unidad", original: "cuenco vasija ceramico x10" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "rayador", target: 1, unidad: "unidad", original: "" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "cesto basura", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "pisa pure", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "colador", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "sillon 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "toallero", target: 1, unidad: "unidad", original: "" },
          { item: "secador de pelo", target: 1, unidad: "unidad", original: "" }
        ],
          nota: "Observaciones: No contiene hidromasaje ❌"
      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aire acondicionado philco tcl", target: 1, unidad: "unidad", original: "aire acondicionado philco-tcl" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
        { item: "microondas sanyo", target: 1, unidad: "unidad", original: "" },
        { item: "jarra winco", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora black y decker", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "tv lg", target: 1, unidad: "unidad", original: "" },
        { item: "tv bgh", target: 1, unidad: "unidad", original: "" },
        { item: "cocina", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 2p animal print", target: 1, unidad: "unidad", original: "frazada 2P animal" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "3 camas 1p" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "cortina black out", target: 2, unidad: "unidad", original: "" },
          { item: "frazada 1p verde", target: 3, unidad: "unidad", original: "" }
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
        { item: "copas champagne", target: 3, unidad: "unidad", original: "3 copas champagne" },
        { item: "vasos", target: 3, unidad: "unidad", original: "3 vasos" },
        { item: "tenedor", target: 3, unidad: "unidad", original: "tenedor x3" },
        { item: "cuchillo", target: 3, unidad: "unidad", original: "cuchillo x3" },
        { item: "cuchara", target: 3, unidad: "unidad", original: "cuchara x3" },
        { item: "cucharita", target: 3, unidad: "unidad", original: "cucharita x3" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "rayador acero", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "fuente de acero", target: 2, unidad: "unidad", original: "fuente de acero x2" },
        { item: "frapera plastica", target: 1, unidad: "unidad", original: "" },
        { item: "sarten", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera de acero x2" },
        { item: "bowl plastico", target: 2, unidad: "unidad", original: "bowl plastico x2" },
        { item: "jarra plastica", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor plastico", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "azucarera yerbera madera", target: 1, unidad: "unidad", original: "azucarera yerbera madera" },

        // 🛋️ Living - Cocina
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 4, unidad: "unidad", original: "4silla" },
        { item: "sillon 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "perchero", target: 1, unidad: "unidad", original: "" },
        { item: "mueble cocina", target: 1, unidad: "unidad", original: "" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "cortina tela", target: 4, unidad: "unidad", original: "cortina tela x4" },
        { item: "cortina black out", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: { items: [

      ],
        nota: "Observaciones: No contiene hidromasaje ❌"

      } // no hay datos en la planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 rca-tcl3" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "" },
        { item: "jarra ranser", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora black y decker", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "smart tv philco", target: 1, unidad: "unidad", original: "" },
        { item: "tv philco", target: 1, unidad: "unidad", original: "" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "no funciona" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "" },
        { item: "ventilador de pie clever", target: 1, unidad: "unidad", original: "" },
        { item: "calefon", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2 p" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
          { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 2p beige", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "1 camas 1p" },
          { item: "banco", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 1p lila", target: 1, unidad: "unidad", original: "" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO"
    },

    exterior: {
            suite: { items: [] } // no hay datos en la planilla
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
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "ensaladera de acero", target: 4, unidad: "unidad", original: "ensaladera de acero x4" },
        { item: "juguera manual plástico", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de acero", target: 3, unidad: "unidad", original: "bandeja de acero x3" },
        { item: "plato playo", target: 3, unidad: "unidad", original: "plato playo x3" },
        { item: "plato mediano", target: 3, unidad: "unidad", original: "platomediano x3" },
        { item: "plato hondo", target: 3, unidad: "unidad", original: "plato hondo x3" },
        { item: "taza de café", target: 3, unidad: "unidad", original: "taza de café x3" },
        { item: "pocillo", target: 3, unidad: "unidad", original: "pocillo x3" },
        { item: "sarten", target: 1, unidad: "unidad", original: "" },
        { item: "rayador acero", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "cuchillo", target: 3, unidad: "unidad", original: "cuchillo x3" },
        { item: "cuchara", target: 3, unidad: "unidad", original: "cuchara x3" },
        { item: "cucharita", target: 3, unidad: "unidad", original: "cucharita x3" },
        { item: "tenedor", target: 3, unidad: "unidad", original: "tenedor x3" },
        { item: "cuchilla tramontina mango negro", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pisa puré", target: 1, unidad: "unidad", original: "" },
        { item: "espátula plástica", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "vasos largos", target: 3, unidad: "unidad", original: "vasos largos x3" },
        { item: "copa de agua", target: 3, unidad: "unidad", original: "copa de agua x3" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa redonda madera", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón madera", target: 2, unidad: "unidad", original: "sillón madera x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
        { item: "cortinas de tela", target: 4, unidad: "unidad", original: "cortinas de tela x4" },
        { item: "cortina roller black out", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: { items: [

      ],
        nota: "Observaciones: No contiene hidromasaje ❌" 

      } // no hay datos en la planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora winco", target: 1, unidad: "unidad", original: "" },
        { item: "jarra moulinex", target: 1, unidad: "unidad", original: "" },
        { item: "microondas grundig", target: 1, unidad: "unidad", original: "" },
        { item: "calefón volcán", target: 1, unidad: "unidad", original: "" },
        { item: "cocina saccal", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 tcl-rca" },
        { item: "tv bgh 32 pulgadas común", target: 1, unidad: "unidad", original: "tv bgh 32 PULGADAS COMUN" },
        { item: "tv smart 43 philco", target: 1, unidad: "unidad", original: "TV SMART43 PHILCO" },
        { item: "ventilador de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesas de luz x2" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 2p beige", target: 1, unidad: "unidad", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "mesa auxiliar", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 1p beige y cuadros", target: 2, unidad: "unidad", original: "frazada 1P x2 beige y cuadros" }
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
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "plato playo", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "plato mediano", target: 3, unidad: "unidad", original: "plato mediano x3" },
        { item: "plato hondo", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platito café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compotera ", target: 5, unidad: "unidad", original: "compotera x5" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "vaso trago largo", target: 5, unidad: "unidad", original: "vasotrago largo x5" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillo café", target: 5, unidad: "unidad", original: "pocillo café x5" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "" },
        { item: "sarten con mango", target: 2, unidad: "unidad", original: "sarten con mango x2" },
        { item: "pyrex", target: 1, unidad: "unidad", original: "" },
        { item: "colador de fideos", target: 1, unidad: "unidad", original: "" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de madera", target: 2, unidad: "unidad", original: "tabla de madera x2" },
        { item: "bandeja de acero", target: 4, unidad: "unidad", original: "bandeja de acero x4" },
        { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera de acero x3" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "" },
        { item: "rayador", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de acero", target: 3, unidad: "unidad", original: "fuente de acero x3" },
        { item: "tacho de residuo", target: 1, unidad: "unidad", original: "" },
        { item: "hielera", target: 1, unidad: "unidad", original: "" },

        // 🛋️ Living - Cocina
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillas", target: 6, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos + marinera" },
        { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
        { item: "mesa auxiliar con vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "" },
        { item: "perchero", target: 1, unidad: "unidad", original: "" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "" },
        { item: "espejo", target: 1, unidad: "unidad", original: "" },
        { item: "mueble cajonera", target: 1, unidad: "unidad", original: "" },
        { item: "mueble con vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" }
      ]
    },

    baño: {
      suite: { items: [

      ],
        nota: "Observaciones: No contiene hidromasaje ❌"

      } // sin datos en planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "microondas rca", target: 1, unidad: "unidad", original: "" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "" },
        { item: "tv philco", target: 1, unidad: "unidad", original: "" },
        { item: "tv noblex", target: 1, unidad: "unidad", original: "" },
        { item: "caloventor kenbrown no funciona", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia no funciona", target: 1, unidad: "unidad", original: "" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "" },
        { item: "jarra yelmo", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera oster", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado rca", target: 2, unidad: "unidad", original: "aire acondicionado RCA x2" },
        { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactor", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "" },
          { item: "espejo de pared", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 2p", target: 2, unidad: "unidad", original: "frazada 2p x2" },        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "cama 1p marinera", target: 1, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada 1p", target: 4, unidad: "unidad", original: "frazada 1p x4" },
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
        { item: "copa de vino", target: 2, unidad: "unidad", original: "copa de vino x2" },
        { item: "copa de agua", target: 2, unidad: "unidad", original: "copa de agua x2" },
        { item: "copa champagne", target: 2, unidad: "unidad", original: "copa champagne x2" },
        { item: "cubiertos", target: 2, unidad: "unidad", original: "cubiertos x2" },
        { item: "destapador saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "tetera y azucarera cerámica", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"

      } // sin datos en la planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "jarra kanji home", target: 1, unidad: "unidad", original: "" },
        { item: "nespresso cafetera", target: 1, unidad: "unidad", original: "" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
        { item: "frigobar vonbom", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
        { item: "tv philco sin control usa directv", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado rca", target: 1, unidad: "unidad", original: "" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama de 2p x1" },
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
        { item: "pocillo", target: 2, unidad: "unidad", original: "pocillo x2" },
        { item: "plato playo", target: 2, unidad: "unidad", original: "plato playo x2" },
        { item: "plato hondo", target: 2, unidad: "unidad", original: "plato hondo x2" },
        { item: "cubiertos", target: 2, unidad: "pares", original: "cubiertos x2 pares" },
        { item: "destapador sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"

      } // sin datos en planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "jarra atma", target: 1, unidad: "unidad", original: "" },
        { item: "nespresso cafetera", target: 1, unidad: "unidad", original: "" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "" },
        { item: "frigobar bondom", target: 1, unidad: "unidad", original: "" },
        { item: "tv philco", target: 1, unidad: "unidad", original: "" },
        { item: "aire acondicionado kelvin", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazada 1 plaza beige", target: 2, unidad: "unidad", original: "frazada 1P beige x2" },
          { item: "veladores", target: 3, unidad: "unidad", original: "velador x3" },
          { item: "juego mimbre sillones + mesita", target: 1, unidad: "juego", original: "juego mimbre sillones x2 + mesita" },
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
        { item: "platos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "casuelas", target: 4, unidad: "unidad", original: "casuela x4" },
        { item: "vasos común", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "destapador", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "" },
        { item: "espátula teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla pan", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara acero", target: 1, unidad: "unidad", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "olla set grande", target: 1, unidad: "unidad", original: "olla set x1 grande" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "colador de pastas plástico", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera de plástico", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "fuentes acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "mesa con vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 2, unidad: "unidad", original: "mesa ratona (repetida x2 en hoja)" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "" },
        { item: "sillones metálicos", target: 2, unidad: "unidad", original: "sillon metalico x2" },
        { item: "cuadros varios", target: 1, unidad: "unidad", original: "" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "" },
          { item: "matafuego", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: No contiene hidromasaje ❌"
      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "heladera sigma", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "jarra liliana", target: 1, unidad: "unidad", original: "" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora winco", target: 1, unidad: "unidad", original: "" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados", target: 2, unidad: "unidad", original: "aire acondicionado x2 wirpol-philco" },
        { item: "tv admiral", target: 1, unidad: "unidad", original: "" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "" },
        { item: "todos los controles", target: 1, unidad: "unidad", original: "todos los controles ok" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "" },
          { item: "frazada 2P", target: 1, unidad: "unidad", original: "frazada 2P x1" },
          { item: "cubrecamas 2P verano", target: 2, unidad: "unidad", original: "cubrecama 2P verano x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas 1P celeste", target: 2, unidad: "unidad", original: "frazada 1P x2 celestes" },
          { item: "frazadas 1P polar beige", target: 1, unidad: "unidad", original: "frazada 1P x2 polar beige" },
          { item: "acolchado blanco", target: 2, unidad: "unidad", original: "acolchado x2 blanco" }
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
        // Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "tazas de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero platina", target: 3, unidad: "unidad", original: "" },
        { item: "fuentes acero ovalada", target: 2, unidad: "unidad", original: "" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "tijera", target: 1, unidad: "unidad", original: "" },
        { item: "pela papas", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "" },
        { item: "pisapapas", target: 1, unidad: "unidad", original: "" },
        { item: "colador de fideos", target: 1, unidad: "unidad", original: "" },
        { item: "jarros choperos", target: 3, unidad: "unidad", original: "jarros choperos x3" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "pirex redondo", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja pizza", target: 1, unidad: "unidad", original: "" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "espatula acero", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "frapera acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "batidor manual", target: 1, unidad: "unidad", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "vasos", target: 4, unidad: "unidad", original: "" },
        { item: "mantel de tela", target: 1, unidad: "unidad", original: "" },
        { item: "mesa 6 sillas", target: 1, unidad: "juego", original: "" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón 1 cuerpo", target: 1, unidad: "unidad", original: "" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "mesita", target: 1, unidad: "unidad", original: "" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "" },
        { item: "espejo en pasillo", target: 1, unidad: "unidad", original: "" }
      ]
    },
baño: {
      suite: {
        items: [
          { item: "secador de pelo empotrado gama", target: 1, unidad: "unidad", original: "" },
          { item: "toallero", target: 1, unidad: "unidad", original: "" }
        ],
        nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️"

      }
    },

    electrodomesticos: {
      items: [
        // Electrodomésticos
        { item: "heladera whirlpool", target: 1, unidad: "unidad", original: "" },
        { item: "tv sony común", target: 1, unidad: "unidad", original: "" },
        { item: "dvd philips", target: 1, unidad: "unidad", original: "" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "" },
        { item: "cocina okej", target: 1, unidad: "unidad", original: "" },
        { item: "extractor SH", target: 1, unidad: "unidad", original: "" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera black y decker", target: 1, unidad: "unidad", original: "" },
        { item: "licuadora top home", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "" },
        { item: "tv samsung común", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados philco", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo empotrado gama" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventiladores de techo x3" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 1, unidad: "unidad", original: "" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "" },
          { item: "frazada 2P", target: 1, unidad: "unidad", original: "" },
          { item: "perchas madera", target: 3, unidad: "unidad", original: "perchas madera x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "frazadas 1P", target: 2, unidad: "unidad", original: "frazada 1P x2" },
          { item: "perchas plásticas", target: 4, unidad: "unidad", original: "percha plastica x4" },
          { item: "cubrecolchones", target: 2, unidad: "unidad", original: "cubrecobechos x2" },
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" }
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
        // Vajilla y utensilios
        { item: "cuchillos", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedores", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharitas", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cucharas", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "platos playos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos lisos", target: 4, unidad: "unidad", original: "vaso liso x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "posillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "" },
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
        { item: "cafetera acero", target: 1, unidad: "unidad", original: "" },
        { item: "tabla picar madera", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "" },
        { item: "espátula silicona", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "" },
        { item: "pisapapas", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "pela papas", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cucharon téflon", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "mesa cuadrada vidrio", target: 1, unidad: "unidad", original: "" },
        { item: "sillas", target: 6, unidad: "unidad", original: "6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "" },
        { item: "sillones 1 cuerpo", target: 2, unidad: "unidad", original: "" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "" }
      ]
    },
    baño: {
      items: [
        { item: "toallero", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pelo", target: 1, unidad: "unidad", original: "" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌"
    },
         electrodomesticos: {
      items: [
        { item: "heladera gaia", target: 1, unidad: "unidad", original: "" },
        { item: "cocina orbis", target: 1, unidad: "unidad", original: "" },
        { item: "extractor espar", target: 1, unidad: "unidad", original: "" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora moulinex", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera jelmo", target: 1, unidad: "unidad", original: "" },
        { item: "minipymer liliana", target: 1, unidad: "unidad", original: "" },
        { item: "aires acondicionados philco", target: 3, unidad: "unidad", original: "aire acondicionado x3 philco kelvinator" },
        { item: "tvs noble smart", target: 2, unidad: "unidad", original: "tv x2 noble smart" },
        { item: "secador de pelo philips", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "" },
        { item: "calderas radiadores", target: 4, unidad: "unidad", original: "caldera radiadores x4" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "" },
          { item: "espejos", target: 2, unidad: "unidad", original: "" },
          { item: "frazadas 2P", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "velador", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "" },
          { item: "banquito", target: 1, unidad: "unidad", original: "" },
          { item: "espejo grande pasillo", target: 1, unidad: "unidad", original: "espejo grande en el pasillo" },
          { item: "frazadas 1P", target: 2, unidad: "unidad", original: "frazada 1p x2" }
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
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "plato playo", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "plato mediano", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "plato hondo", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platito café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compotera", target: 5, unidad: "unidad", original: "compotera x5" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso común x5 solo 3 del juego" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "compotera vidrio", target: 5, unidad: "unidad", original: "compotera de vidrio x5" },
        { item: "abrelata", target: 1, unidad: "unidad", original: "" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pisa papa acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "secaplatos", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "" },
        { item: "colador fideos plástico", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de acero", target: 3, unidad: "unidad", original: "fuente de acero x3" },
        { item: "bandeja de acero", target: 3, unidad: "unidad", original: "bandeja de acero x3" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera de acero x2" },
        { item: "set olla grande-mediana-chica", target: 1, unidad: "juego", original: "set olla grande-mediana-chica" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "sartén", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de picar", target: 1, unidad: "unidad", original: "" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        
// 🛋️ Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
{ item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
{ item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
{ item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
{ item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
{ item: "bancos puf", target: 2, unidad: "unidad", original: "bancos puf x2" },
{ item: "mesa auxiliar", target: 1, unidad: "unidad", original: "mesa auxiliar" },
{ item: "cuadro", target: 3, unidad: "unidad", original: "cuadro x3" }      ]
    },


    baño: {
      suite: { items: [

      ], 
      nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
      } // no hay ítems de baño listados
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera columbia", target: 1, unidad: "unidad", original: "" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora peabody", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "" },
        { item: "televisores sony", target: 2, unidad: "unidad", original: "televisores x2 sony bgh" },
        { item: "aires x3 - marshal todos los controles", target: 3, unidad: "unidad", original: "" },
        { item: "secador de pelo oster", target: 1, unidad: "unidad", original: "" },
        { item: "radiadores taqayeros", target: 2, unidad: "unidad", original: "radiadores x4 taqayeros x2" },
        { item: "termo tanque", target: 1, unidad: "unidad", original: "" },
        { item: "control tele sony (falta)", target: 1, unidad: "unidad", original: "falta control tele sony" },
        { item: "luz emergencia no funciona", target: 1, unidad: "unidad", original: "LUZ EMERGENCIA NO FUNCIONA" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa tv empotrada", target: 1, unidad: "unidad", original: "mesa tv empotrada" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "sillon", target: 1, unidad: "unidad", original: "sillon" },
          { item: "alfombra", target: 2, unidad: "unidad", original: "alfombras x2" },
          { item: "matrimonial no se puede separar", target: 1, unidad: "nota", original: "" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x3" },
          { item: "escritorio empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
          { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 3, unidad: "unidad", original: "3 perchas" },
          { item: "se pueden unir camas 1 plaza", target: 1, unidad: "nota", original: "" }
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
        // 🍽️ Vajilla y utensilios
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "plato playo", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "plato mediano", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "plato hondo", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platito café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "compotera", target: 5, unidad: "unidad", original: "compotera x5" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza de café x5" },
        { item: "taza de te", target: 5, unidad: "unidad", original: "taza de te x5" },
        { item: "pocillo", target: 5, unidad: "unidad", original: "pocillo x5" },
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
        { item: "bandeja de acero", target: 2, unidad: "unidad", original: "bandeja de acero x2" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera de acero x2" },
        { item: "set olla grande-mediana-chica", target: 1, unidad: "juego", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "sartén", target: 3, unidad: "unidad", original: "" },
        { item: "bifera", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "tabla de picar", target: 2, unidad: "unidad", original: "tabla de picar x2" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "" },
        { item: "bowl plástico", target: 2, unidad: "unidad", original: "" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "" },
        { item: "individuales", target: 6, unidad: "unidad", original: "individuales x6" },




// 🛋️ Living – Cocina
{ item: "mesa 6 sillas", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
{ item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
{ item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
{ item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
{ item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
{ item: "bancos puf", target: 2, unidad: "unidad", original: "bancos puf x2" },
{ item: "mesa auxiliar", target: 1, unidad: "unidad", original: "mesa auxiliar" }



      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️"

      } // no figuran ítems de baño
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "tv sony bgh", target: 2, unidad: "unidad", original: "tvx2 sony bgh" },
        { item: "microondas samsung", target: 1, unidad: "unidad", original: "" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "" },
        { item: "jarra aurora", target: 1, unidad: "unidad", original: "" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora yelmo", target: 1, unidad: "unidad", original: "" },
        { item: "heladera columbia sin foco", target: 1, unidad: "unidad", original: "" },
        { item: "aires marshal", target: 3, unidad: "unidad", original: "aires x3-marshal todos los controles" },
        { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "" },
        { item: "controles", target: 1, unidad: "unidad", original: "controles ok" },
        { item: "luz emergencia no funciona", target: 1, unidad: "unidad", original: "LUZ EMERGENCIA NO FUNCIONA" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "alfombra", target: 2, unidad: "unidad", original: "alfombra x2" },
          { item: "percha", target: 4, unidad: "unidad", original: "percha x4" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "escritorio empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadros", target: 5, unidad: "unidad", original: "cuadros x5" },
          { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "percha", target: 6, unidad: "unidad", original: "percha x6" }
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
        // 🍽️ Vajilla y utensilios
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "taza de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "" },
        { item: "sacacorcho", target: 1, unidad: "unidad", original: "" },
        { item: "pisa puré", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "" },
        { item: "secaplato", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara de madera", target: 2, unidad: "unidad", original: "cuchara de madera x2" },
        { item: "cucharon de acero", target: 1, unidad: "unidad", original: "" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "" },
        { item: "cucharón para fideos", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja de acero", target: 3, unidad: "unidad", original: "bandeja de acero x3" },
        { item: "ensaladera de acero", target: 1, unidad: "unidad", original: "ensaladera de acero x1" },
        { item: "set olla grande-mediana-chica", target: 1, unidad: "juego", original: "" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
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
        { item: "mesa vidrio 4 sillas", target: 1, unidad: "conjunto", original: "mesa vidrio 4 sillas" },
        { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
        { item: "repisa + 2 cubos", target: 1, unidad: "unidad", original: "repisa + 2 cubos" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mueble 2 puertas", target: 1, unidad: "unidad", original: "mueble 2 puertas" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" }

      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: No contiene hidromasaje ❌" 

      } // sin datos en la planilla
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera sigma", target: 1, unidad: "unidad", original: "" },
        { item: "tostadora winco", target: 1, unidad: "unidad", original: "" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "" },
        { item: "jarra winco", target: 1, unidad: "unidad", original: "" },
        { item: "cafetera yelmo", target: 1, unidad: "unidad", original: "" },
        { item: "licuadora moulinex", target: 1, unidad: "unidad", original: "" },
        { item: "cocina escorial master", target: 1, unidad: "unidad", original: "" },
        { item: "calefactor", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "aire acondicionado rcax2-sigma", target: 2, unidad: "unidad", original: "aire acondicionado x3 rcax2-sigm" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "repisa + cubos", target: 3, unidad: "unidad", original: "repisa + 2 cubos" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p acolchado 2p" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada 1 plaza", target: 1, unidad: "unidad", original: "frazada 1p x2" },
          { item: "acolchado 1 plaza", target: 1, unidad: "unidad", original: "acolchado 1p x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "" },
        { item: "atizador", target: 1, unidad: "unidad", original: "" },
        { item: "palita", target: 1, unidad: "unidad", original: "" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "" }
      ]
    }
  }
},

//Sección Casa 2 B
{
  id: "Casa 2B",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillo propietario", target: 4, unidad: "unidad", original: "posillo propietario x4" },
        { item: "compotera", target: 4, unidad: "unidad", original: "compotera x4 propietario" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pinzas", target: 1, unidad: "unidad", original: "pinzas" },
        { item: "espátula acero", target: 2, unidad: "unidad", original: "espátula x2 ACERO" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa teflón", target: 1, unidad: "unidad", original: "pisa papa teflon" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizzera" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bandeja fuente acero", target: 3, unidad: "unidad", original: "bandeja fuente acero x3" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja de acero ovalada", target: 1, unidad: "unidad", original: "bandeja de acero ovalada" },
        { item: "colador", target: 2, unidad: "unidad", original: "colador x2" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "olla con mango acero", target: 1, unidad: "unidad", original: "olla con mango acero" },
        { item: "olla con mango set", target: 1, unidad: "unidad", original: "olla con mango set" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra de vidrio" },
        { item: "fuente pirex", target: 1, unidad: "unidad", original: "fuente pirex" },
        { item: "platos de madera", target: 2, unidad: "unidad", original: "platos de madera 2" },
        { item: "tabla picar plástica", target: 1, unidad: "unidad", original: "tabla picar plastica" },
        { item: "tabla picar madera", target: 1, unidad: "unidad", original: "tablapicar madera" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico x1" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "mantel cuerina" },
        { item: "individuales de cuerina", target: 6, unidad: "unidad", original: "6 individuales de cuerina" },

        // 🛋️ Living – Cocina
        { item: "mesa con vidrio 4 sillas", target: 1, unidad: "conjunto", original: "mesa con vidrio 4 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesita ratona", target: 1, unidad: "unidad", original: "mesita ratona" },
        { item: "mueble estantes con cajon", target: 1, unidad: "unidad", original: "mueble estantes con cajon" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" }
      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: No contiene hidromasaje ❌"

      }

    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 (2 rca 1 cigma)" },
        { item: "tv philco tophouse", target: 2, unidad: "unidad", original: "tv philco tophouse x2 controles ok" },
        { item: "licuadora moulinex", target: 1, unidad: "unidad", original: "licuadora moulinex" },
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "tostadora black y decker", target: 1, unidad: "unidad", original: "tostadora black y decker" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cocina escorial master", target: 1, unidad: "unidad", original: "cocina escorial master" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" },
        { item: "controles ok", target: 1, unidad: "unidad", original: "controles ok" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 1, unidad: "unidad", original: "cuadros" },
          { item: "espejo puerta placar", target: 1, unidad: "unidad", original: "espejo puerta placar" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "cubrecama 1,80 verano", target: 1, unidad: "unidad", original: "cubrecama 1,80 verano" },
          { item: "perchas", target: 2, unidad: "unidad", original: "2 perchas" },
          { item: "almohadas ok", target: 1, unidad: "unidad", original: "almohadas ok" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "veladores", target: 1, unidad: "unidad", original: "veladores" },
          { item: "frazada 1 plaza", target: 2, unidad: "unidad", original: "frazada 1P x2" },
          { item: "cubrecama verano", target: 2, unidad: "unidad", original: "cubrecama x2 verano" },
          { item: "cubrecama invierno", target: 2, unidad: "unidad", original: "cubrecama x2 invierno" },
          { item: "perchas", target: 2, unidad: "unidad", original: "2 perchas" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        // GALERÍA
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
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
        { item: "cuchillo", target: 7, unidad: "unidad", original: "cuchillo x7" },
        { item: "tenedor", target: 7, unidad: "unidad", original: "tenedor x7" },
        { item: "cucharita", target: 7, unidad: "unidad", original: "cucharita x7" },
        { item: "plato playo", target: 7, unidad: "unidad", original: "plato playo x7" },
        { item: "plato mediano", target: 7, unidad: "unidad", original: "plato mediano x7" },
        { item: "plato hondo", target: 7, unidad: "unidad", original: "plato hondo x7" },
        { item: "platito café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compotera postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vaso común", target: 7, unidad: "unidad", original: "vaso comun x7" },
        { item: "copa de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copa de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "taza café", target: 7, unidad: "unidad", original: "taza café x7" },
        { item: "taza de té", target: 7, unidad: "unidad", original: "taza de té x7" },

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
        { item: "colador de pastas acero", target: 1, unidad: "unidad", original: "colador de pastas acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "colador de pastas (plástico y acero)", target: 2, unidad: "unidad", original: "colador de pastas x2 plastico y acero" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente acero ovalada", target: 1, unidad: "unidad", original: "fuente acero ovalada x1" },
        { item: "fuente pirex", target: 3, unidad: "unidad", original: "fuente pirex x3" },
        { item: "plato madera", target: 1, unidad: "unidad", original: "plato madera" },
        { item: "pizzera", target: 2, unidad: "unidad", original: "pizzera x2" },
        { item: "bandeja de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "tabla de madera picar", target: 1, unidad: "unidad", original: " tabla de madera picar " },



        // 🛋️ Living - Cocina  (CARTEL WIFI: no tiene)
        { item: "mesa con vidrio", target: 1, unidad: "unidad", original: "mesa con vidrio" },
        { item: "sillas", target: 8, unidad: "unidad", original: "8 sillas" },
        { item: "sillón 3 cuerpos", target: 2, unidad: "unidad", original: "sillon 3 cuerpos x2" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "cuadros", target: 1, unidad: "unidad", original: "cuadros varios" },

        { item: " mesa ratona ", target: 1, unidad: "unidad", original: " mesa ratona " }

      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: No contiene hidromasaje ❌"

      } // no hay ítems de baño listados
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "lavarropas drean", target: 1, unidad: "unidad", original: "LAVARROPAS DREAN" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas westinghouse", target: 1, unidad: "unidad", original: "microonda westinhouse" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "licuadora smarthlife", target: 1, unidad: "unidad", original: "licuadora smarthlife" },
        { item: "tostadora moulinex", target: 1, unidad: "unidad", original: "tostadora moulinex" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3" },
        { item: "tv sony común", target: 1, unidad: "unidad", original: "tv sony comun" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "purificador de agua psa", target: 1, unidad: "unidad", original: "purificador de agua psa" },
        { item: "calefactores", target: 4, unidad: "unidad", original: "calefactores x4" },
        { item: "secador de pelo empotrado gama", target: 1, unidad: "unidad", original: "secador de pelo empotrado gama" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x1" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazada 1 plaza", target: 1, unidad: "unidad", original: "frazada 1P x1" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "2 mesas de luz" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "FRAZADA 1p x3" },
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
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  }
},

//Sección Casa 5 A
{
  id: "Casa 5A",
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
        { item: "copa champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "taza de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },

        { item: "compotera cero", target: 4, unidad: "unidad", original: "compotera cero x4" },
        { item: "plato postre grande", target: 4, unidad: "unidad", original: "plato postre grande x4" },
        { item: "plato postre chico", target: 4, unidad: "unidad", original: "plato postre chico x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "espátula acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "cucharón teflon", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "cuchara teflon", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "hielera", target: 1, unidad: "unidad", original: "hielera" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "escurridor", target: 1, unidad: "unidad", original: "escurridor" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "tabla de madera", target: 2, unidad: "unidad", original: "tabla de madera x2" },
        { item: "plato madera", target: 1, unidad: "unidad", original: "plato madera" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja de horno" },
        { item: "colador de pasta plástico", target: 1, unidad: "unidad", original: "colador de pasta plastico" },
        { item: "espátula teflon", target: 1, unidad: "unidad", original: "espátula teflon" },

        // 🛋️ Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "conjunto", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesita auxiliar dos estantes", target: 1, unidad: "unidad", original: "mesita auxiliar dos estantes" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "espejo redondo de pared", target: 1, unidad: "unidad", original: "espejo redondo de pared" },
        { item: "espejo grande pasillo", target: 1, unidad: "unidad", original: "espejo grande pasillo" }
      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️" 

      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "microondas mktech", target: 1, unidad: "unidad", original: "microondas mktech" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "licuadora moulinex", target: 1, unidad: "unidad", original: "licuadora moulinex" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "tv bgh", target: 2, unidad: "unidad", original: "tv bgh x2" },
        { item: "secapelo mktech", target: 1, unidad: "unidad", original: "secapelo mktech" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "ventilador techo", target: 3, unidad: "unidad", original: "ventilador techo x3" },
        { item: "luz emergencia no funciona", target: 1, unidad: "unidad", original: "luz emergencia no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble empotrado", target: 1, unidad: "unidad", original: "mueble empotrado" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada de 2P x1" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" },
          { item: "cubre colchón", target: 1, unidad: "unidad", original: "cubre colchon" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "banquito", target: 1, unidad: "unidad", original: "banquito" },
          { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "frazada de 1P x3" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" },
          { item: "cubre colchón", target: 1, unidad: "unidad", original: "cubre colchon" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    exterior: {
      items: [
        // PATIO
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
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
        { item: "copa champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "posillo", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "abre latas", target: 1, unidad: "unidad", original: "abre latas" },
        { item: "pela papas", target: 1, unidad: "unidad", original: "pela papas" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "tenedor asador", target: 1, unidad: "unidad", original: "tender asador" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "pizzera bandeja horno", target: 1, unidad: "unidad", original: "pizzera bandeja horno" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "tabla picar", target: 1, unidad: "unidad", original: "tabla picar" },
        { item: "madera de copetin", target: 1, unidad: "unidad", original: "madera de copetin" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "cafetera comun", target: 1, unidad: "unidad", original: "cafetera comun" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "tacho residuo", target: 1, unidad: "unidad", original: "tacho residuo" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },

        // 🛋️ Living - Cocina
        { item: "mesa cuadrada vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
        { item: "mueble", target: 1, unidad: "unidad", original: "mueble" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" }
      ]
    },

    baño: {
      suite: { items: [

      ],
      nota: "Observaciones: No contiene hidromasaje ❌"

      }
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "tostadora peabody", target: 1, unidad: "unidad", original: "tostadora peabody" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "cafetera yelmo", target: 1, unidad: "unidad", original: "cafetera yelmo" },
        { item: "licuadora philips", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "heladera electrolux", target: 1, unidad: "unidad", original: "heladera electrolux" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 rca-philco-kelvinator" },
        { item: "tv smart noblex", target: 1, unidad: "unidad", original: "tv smart noblex" },
        { item: "tv admiral", target: 1, unidad: "unidad", original: "tv admiral" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo philips", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "radiadores", target: 3, unidad: "unidad", original: "radiadores x3" },
        { item: "caldera", target: 1, unidad: "unidad", original: "caldera" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "extractor spar", target: 1, unidad: "unidad", original: "extractor spar" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazada 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "banquito", target: 1, unidad: "unidad", original: "banquito" },
          { item: "espejo grande pasillo", target: 1, unidad: "unidad", original: "espejo grande pasillo" },
          { item: "frazada 1 plaza", target: 2, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        // PATIO
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "pinche", target: 1, unidad: "unidad", original: "pinche" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
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
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero", target: 3, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuente acero ovalada", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "colador pastas", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "cuchara teflón", target: 1, unidad: "unidad", original: "cuchara de madera" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizzera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tablas para picar madera grandes", target: 2, unidad: "unidad", original: "tabla picar" },
        { item: "tablas para picar madera chicas", target: 3, unidad: "unidad", original: "" },
        { item: "juguera plastico", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abrelata", target: 1, unidad: "unidad", original: "abrelatas" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "" },
        { item: "rallador", target: 1, unidad: "unidad", original: "" },
        { item: "colador de café", target: 1, unidad: "unidad", original: "" },
        { item: "espatula teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara espagueti teflón", target: 1, unidad: "unidad", original: "" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "" },
        { item: "pinza", target: 1, unidad: "unidad", original: "" },
        { item: "tarritos acero inoxidable", target: 1, unidad: "unidad", original: "" },
        { item: "ensaladera pirex", target: 1, unidad: "unidad", original: "" },
        { item: "sarten de teflón", target: 3, unidad: "unidad", original: "" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "" },
        { item: "porta sachet", target: 1, unidad: "unidad", original: "" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "" },
        { item: "escurridor de verduras", target: 1, unidad: "unidad", original: "" },
        { item: "panera", target: 1, unidad: "unidad", original: "" },
        { item: "individuales", target: 4, unidad: "unidad", original: "" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "" },
        { item: "magiclick", target: 1, unidad: "unidad", original: "" },
        { item: "platos medianos", target: 4, unidad: "unidad", original: "madera de copetín" },

        // 🛋️ Living - Cocina
        { item: "mesa vidrio", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio" },
        { item: "sillas", target: 6, unidad: "unidad", original: "sillas x6" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillones 2 cuerpos", target: 2, unidad: "unidad", original: "sillón 2 cuerpos" },
        { item: "sillones 1 cuerpo", target: 2, unidad: "unidad", original: "sillón 1 cuerpo x2" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "" },
        { item: "silla bebé", target: 1, unidad: "unidad", original: "" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "" },
        { item: "porta llave", target: 1, unidad: "unidad", original: "" },
        { item: "reposeras", target: 2, unidad: "unidad", original: "" },
        { item: "hamaca paraguaya", target: 1, unidad: "unidad", original: "" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" }
      ]
    },

    baño: {
      suite: {
        items: [
          { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
          { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
        ],
        nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️"
      }
    },

    electrodomesticos: {
      items: [
        { item: "cocina", target: 1, unidad: "unidad", original: "|" },
        { item: "microondas reco", target: 1, unidad: "unidad", original: "microondas reco" },
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "minipimer peabody", target: 1, unidad: "unidad", original: "minipimer peabody" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "tvs smart hitachi-bgh", target: 2, unidad: "unidad", original: "tv smart hitachi" },
        { item: "ventilador de techo", target: 1, unidad: "unidad", original: "ventilador de techo" },
        { item: "aires acondicionados split philco", target: 3, unidad: "unidad", original: "aire acondicionado split philco" },
        { item: "plancha astro", target: 1, unidad: "unidad", original: "plancha astro" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "extractor cata", target: 1, unidad: "unidad", original: "extractor cata" },
        { item: "jarra mounlinex", target: 1, unidad: "unidad", original: "" },
        { item: "juguera ultracomb", target: 1, unidad: "unidad", original: "" },
        { item: "caloventor liliana baño", target: 1, unidad: "unidad", original: "" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "" },
        { item: "secador de pela gama", target: 1, unidad: "unidad", original: "" },
        { item: "plancha astro", target: 1, unidad: "unidad", original: "" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor liliana baño" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "almohadas extras", target: 4, unidad: "unidad", original: "almohadas extras" },,
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "acolchado blanco con turqueza 1P", target: 1, unidad: "unidad", original: "acolchado blanco con turqueza 1P" },
          { item: "frazadas 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x2" }
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
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "juego de mesa y 4 sillas", target: 2, unidad: "unidad", original: "" },
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
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comúnes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "vasos pro", target: 3, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "posillos", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sarténes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "fuente acero rectangular", target: 1, unidad: "unidad", original: "fuente acero rectangular" },
        { item: "olla con mango de acero", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "pisapapa" },
        { item: "juegos asado madera", target: 3, unidad: "unidad", original: "espumadera" },
        { item: "tabla para picar madera grande", target: 1, unidad: "unidad", original: "cucharón" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "escurridor de verdura", target: 1, unidad: "unidad", original: "pizzera" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "bifera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "pisapapas", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abrelatas", target: 1, unidad: "unidad", original: "abrelatas" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "pelapapas", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "indivuales", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "rallador", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "sarten panquequera", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "palo amasar", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "cuchara espagueti teflón", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "espumadera teflón", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "cuchara teflón", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "tarritos acero", target: 3, unidad: "unidad", original: "pelapapas" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "pelapapas" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "tacho residuos" },

        // 🛋️ Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "banqueta x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillones 2 cuerpos", target: 2, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "silla bebé", target: 1, unidad: "unidad", original: "silla bebé" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banqueta x2" },
        { item: "reloj", target: 1, unidad: "unidad", original: "banqueta x2" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "mueble vitrina con varios adornos", target: 1, unidad: "unidad", original: "mueble vitrina con varios adornos" },
        { item: "reposeras", target: 2, unidad: "unidad", original: "reposteras x2" },
        { item: "hamaca paraguaya", target: 1, unidad: "unidad", original: "hamaca paraguaya" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera eslabón de lujo", target: 1, unidad: "unidad", original: "heladera eslabon de lujo" },
        { item: "cocina ok", target: 1, unidad: "unidad", original: "cocina ok" },
        { item: "minipimer peabody", target: 1, unidad: "unidad", original: "minipimer peabody" },
        { item: "juguera lilacrom", target: 1, unidad: "unidad", original: "juguera lilacrom" },
        { item: "jarra liliana", target: 1, unidad: "unidad", original: "jarra liliana" },
        { item: "tostadora philips", target: 1, unidad: "unidad", original: "tostadora philips" },
        { item: "cafetera home leader", target: 1, unidad: "unidad", original: "cafetera home leader" },
        { item: "estractor", target: 1, unidad: "unidad", original: "cafetera home leader" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "tvs 32 smart bgh - tv philips común", target: 2, unidad: "unidad", original: "tv32 smart bgh + tv philips comun" },
        { item: "aire acondicionado split coventri philco", target: 3, unidad: "unidad", original: "aire acondicionado x3 conevitti philco albiare" },
        { item: "ventilador de techo", target: 1, unidad: "unidad", original: "ventilador de techo" },
        { item: "plancha maxt bliss", target: 1, unidad: "unidad", original: "plancha maxt bliss" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "caloventor liliana", target: 1, unidad: "unidad", original: "calefactor liliana" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "cafetera home leader" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },
      baño: {
            suite: {
              items: [
                { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
              ],
             nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
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
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazada 2p x2" },
          { item: "almohadas extra", target: 2, unidad: "unidad", original: "2 almohadas extra" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "perchas", target: 3, unidad: "unidad", original: "espejo" },
          { item: "mesaratona", target: 1, unidad: "unidad", original: "espejo" },
          { item: "almohada extra", target: 1, unidad: "unidad", original: "espejo" },
          { item: "frazadas 1 plaza (3 naranjas y 2 azules)", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "colcha", target: 1, unidad: "unidad", original: "acolchado blanco con turquesa 1 plaza x1" }
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
        { item: "mesa madera", target: 1, unidad: "unidad", original: "atizador" },
        { item: "juego de mesa y 4 sillas", target: 1, unidad: "unidad", original: "atizador" },
        { item: "jeugo de mesa y 5 sillas", target: 1, unidad: "unidad", original: "atizador" }
       
       
  
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
        { item: "platitos café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "copas champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "tazas café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "posillos", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 4, unidad: "unidad", original: "ensaladera acero x4" },
        { item: "bandejas acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "compoteras acero inoxidable", target: 5, unidad: "unidad", original: "compotera cero inox x2" },
        { item: "pava", target: 1, unidad: "unidad", original: "pava" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente de acero" },
        { item: "fuente acero calada", target: 1, unidad: "unidad", original: "fuente acero calada" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "destapador", target: 1, unidad: "unidad", original: "destapador" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharon rojo plástico", target: 1, unidad: "unidad", original: "colador" },

        // 🛋️ Living - Cocina
        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "repisa con estantes", target: 1, unidad: "unidad", original: "repisa con estantes" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "adornos", target: 1, unidad: "unidad", original: "adornos" },
        { item: "floreros grandes", target: 2, unidad: "unidad", original: "floreros grandes x2" },
        { item: "pasillos cuadros", target: 2, unidad: "unidad", original: "pasillo cuadros x2" }
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
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "juguera ken brown", target: 1, unidad: "unidad", original: "juguera ken brown" },
        { item: "jarra", target: 1, unidad: "unidad", original: "jarra" },
        { item: "microondas eslabon de lujo", target: 1, unidad: "unidad", original: "microondas eslabon de lujo" },
        { item: "cocina aurora", target: 1, unidad: "unidad", original: "cocina aurora" },
        { item: "tvs rcz samsung y bgh", target: 3, unidad: "unidad", original: "tv x3 rcz samsung y bgh" },
        { item: "radiadores", target: 5, unidad: "unidad", original: "radiadores x5" },
        { item: "caldera", target: 1, unidad: "unidad", original: "caldera" },
        { item: "ventiladores", target: 2, unidad: "unidad", original: "ventiladores x2" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "aires acondicionados samsumg y philco", target: 2, unidad: "unidad", original: "aires acondicionado x2 samsung y philco" },
        { item: "secador de pelo maktech", target: 1, unidad: "unidad", original: "secador de pelo" },
        { item: "extractor conqueros", target: 1, unidad: "unidad", original: "extractor conquerors" },
        { item: "licuadora philips", target: 1, unidad: "unidad", original: "licuadora philips" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "perchero", target: 1, unidad: "unidad", original: "perchero" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazadas 2p" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazadas 1p", target: 4, unidad: "unidad", original: "frazada 1p x4" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO | AVISO: Ventiladores de la habitación simple no funcionan."
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
        { item: "platitos café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "tazas café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "compoteras cera", target: 4, unidad: "unidad", original: "compotera cera x4" },
        { item: "sartenes", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
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
        { item: "colador pastas acero", target: 1, unidad: "unidad", original: "colador pastas acero" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "rayador acero", target: 1, unidad: "unidad", original: "rayador acero" },
        { item: "fuentes acero", target: 2, unidad: "unidad", original: "fuente acero x2" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "posa pava madera", target: 1, unidad: "unidad", original: "posa pava madera" },
        { item: "tabla plástica picar", target: 1, unidad: "unidad", original: "tabla plástica picar" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },


        // 🛋️ Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "sillón simple cuero", target: 1, unidad: "unidad", original: "sillon simple de cuero" }
      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera general electric", target: 1, unidad: "unidad", original: "heladera general electric" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "tvs philco smart y bgh led", target: 2, unidad: "unidad", original: "tv x2 philco smarth y bgh led" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "aires acondicionados philco", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" }
      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️"
                  }
                },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "sillón", target: 1, unidad: "unidad", original: "sillón" },
          { item: "veladores", target: 2, unidad: "unidad", original: "sillón" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazadas 2p" },
          { item: "pasillo espejo", target: 1, unidad: "unidad", original: "pasillo espejo" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3 (una marinera)" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" },
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
        { item: "cucharon", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa 6 sillas plásticas", target: 1, unidad: "unidad", original: "mesa 6 sillas plasticas" },
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
        { item: "platitos café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso común x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "compoteras cacero", target: 5, unidad: "unidad", original: "compotera cacero x5" },
        { item: "tazas café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bowls plástico", target: 1, unidad: "unidad", original: "bowls plástico" },
        { item: "pava común acero", target: 1, unidad: "unidad", original: "pava común acero" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "colador pasta acero", target: 1, unidad: "unidad", original: "colador pasta acero" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "vaso medidor", target: 1, unidad: "unidad", original: "vaso medidor" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "bandeja melamina", target: 1, unidad: "unidad", original: "bandeja de melamina" },
        { item: "tablas para picar madera", target: 2, unidad: "unidad", original: "tabla picar madera x2" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "pinzas acero", target: 2, unidad: "unidad", original: "pinzas acero x2" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },


        // 🛋️ Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillón 1 cuerpo", target: 1, unidad: "unidad", original: "sillon 1 cuerpo" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "floreros de vidrio", target: 2, unidad: "unidad", original: "florero vidrio x2" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }
      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas globalhome", target: 1, unidad: "unidad", original: "microondas globalhome" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "cocina eskabe", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "tvs philco smarth y noblex led", target: 2, unidad: "unidad", original: "tv x2 philco smarth y noblex led" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
                  }
                },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazadas 2p" },
          { item: "acolchado invierno 2P", target: 1, unidad: "unidad", original: "acolchado invierno 2p" },
          { item: "perchas", target: 8, unidad: "unidad", original: "perchas x8" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3 (una marinera)" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" },
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
        { item: "mesa 6 sillas plásticas", target: 1, unidad: "unidad", original: "mesa 6 sillas plásticas" },
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
        { item: "platos medianos", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "platos hondos", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "pocillos", target: 5, unidad: "unidad", original: "pocillo x5" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero", target: 4, unidad: "unidad", original: "bandeja acero x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "espátula", target: 1, unidad: "unidad", original: "espátula" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "ensaladera vidrio", target: 1, unidad: "unidad", original: "ensaladera vidrio" },
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
        { item: "mesa y 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillones 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpo x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" }


      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "heladera briket", target: 1, unidad: "unidad", original: "heladera briket" },
        { item: "tostadora yelmo", target: 1, unidad: "unidad", original: "tostadora yelmo" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "tvs hitachi-philco smart", target: 2, unidad: "unidad", original: "tv x2 hitachi - philco smart" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "aires acondicionados sigma homeleader", target: 2, unidad: "unidad", original: "aire acondicionado x2 sigma y homeleader" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "cocina escorial", target: 1, unidad: "unidad", original: "cocina escorial" }
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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "silla", target: 1, unidad: "unidad", original: "silla" },
          { item: "frazadas 2p", target: 2, unidad: "unidad", original: "frazadas 2p x2" },
          { item: "perchas plásticas", target: 4, unidad: "unidad", original: "perchas plásticas x4" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza (una marinera)", target: 2, unidad: "unidad", original: "cama 1p x2 (una marinera)" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazadas 1p", target: 5, unidad: "unidad", original: "frazada 1p x5" },
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
        { item: "mesa 4 sillas plásticas", target: 1, unidad: "unidad", original: "mesa 4 sillas plásticas" },
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
        { item: "platitos café", target: 5, unidad: "unidad", original: "platito café x5" },
        { item: "compoteras postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vasos comunes", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copas de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copas de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "pocillos", target: 6, unidad: "unidad", original: "pocillo x6" },
        { item: "tazas café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "fuentes acero", target: 2, unidad: "unidad", original: "fuente de acero x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "platos de madera", target: 6, unidad: "unidad", original: "plato de madera x6" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja de horno x1" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera x1" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "tabla de picar de madera", target: 2, unidad: "unidad", original: "tabla de picar de madera x2" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "fuente de vidrio", target: 1, unidad: "unidad", original: "fuente de vidrio" },
        { item: "ensaladera de vidrio", target: 1, unidad: "unidad", original: "ensaladera de vidrio" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "colador de pastas de acero", target: 1, unidad: "unidad", original: "colador de pastas de acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "colador de pastas de acero", target: 1, unidad: "unidad", original: "colador de pastas de acero" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara de madera cucharon" },
        { item: "cuchara para cortar y servir tortas", target: 1, unidad: "unidad", original: "cuchara para cortar y servir tortas" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "mesa y 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "sillon 3 cuerpos" },
        { item: "2 sillas con mesa ratona", target: 1, unidad: "unidad", original: "silla x2 mas mesa ratona" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadros x1" },
        { item: "sillita bebé", target: 1, unidad: "unidad", original: "sillita bebe" }


      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "tv noblex smarth", target: 1, unidad: "unidad", original: "tv noblex smarth" },
        { item: "dvd sony + equipo de sonido", target: 1, unidad: "unidad", original: "dvd sony + equipo de sonido" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "cocina orbis", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "aire acondicionado kelvinator", target: 1, unidad: "unidad", original: "aire acondicionado kelvinator" },
        { item: "jarra yelmo", target: 1, unidad: "unidad", original: "jarra yelmo" },
        { item: "tostadora oster", target: 1, unidad: "unidad", original: "tostadora oster" },
        { item: "licuadora philips", target: 1, unidad: "unidad", original: "licuadora philips" },
        { item: "sandwichera black decker", target: 1, unidad: "unidad", original: "sandwichera black decker" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cocina orbis", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "secador de pelo sin marca", target: 1, unidad: "unidad", original: "secador de pelo sin marca" },
        { item: "ventilador de pared atma", target: 1, unidad: "unidad", original: "ventilador de pared atma" },
        { item: "panel eléctrico termotech", target: 1, unidad: "unidad", original: "panel electrico termotech" },
        { item: "plancha", target: 1, unidad: "unidad", original: "plancha" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },

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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 3, unidad: "unidad", original: "velador x3" },
          { item: "espejos de pared", target: 1, unidad: "unidad", original: "espejo de pared x2" },
          { item: "frazadas 2p", target: 1, unidad: "unidad", original: "frazadas 2p x1" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "mueble cajonero", target: 1, unidad: "unidad", original: "un mueble cajonero" },
          { item: "frazadas 1p", target: 2, unidad: "unidad", original: "frazadas 1p x2" },
          { item: "perchas plásticas", target: 2, unidad: "unidad", original: "perchas plásticas x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazada 1p", target: 1, unidad: "unidad", original: "frazada 1p x1" },
          { item: "perchas plásticas", target: 2, unidad: "unidad", original: "perchas plásticas x2" }
        ]
      },
       nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        // 🌿 Patio
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
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
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso común x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copas champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillos", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandejas acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
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
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
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
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "repisa con el router", target: 1, unidad: "unidad", original: "repisa con el rooetr" },
        { item: "difusor de ambiente", target: 1, unidad: "unidad", original: "difusor de ambiente" },
        { item: "mueble para la vajilla", target: 1, unidad: "unidad", original: "mueble para la vajilla" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" },
        { item: "sillón 3 cuerpos con 3 almohadones", target: 1, unidad: "unidad", original: "sillon 3 cuerpos 3 almohadones" },
        { item: "pasillo espejo y mueble", target: 1, unidad: "unidad", original: "pasillo espejo y mueble" }


      ]
    },

    electrodomesticos: {
      items: [
        // ⚡ Electrodomésticos
        { item: "luces de emergencia", target: 2, unidad: "unidad", original: "luces de emergencia x2" },
        { item: "heladera conqueror", target: 1, unidad: "unidad", original: "heladera conqueror" },
        { item: "cocina orbis", target: 1, unidad: "unidad", original: "cocina orbis" },
        { item: "microondas likon", target: 1, unidad: "unidad", original: "microondas likon" },
        { item: "tvs tcl smarth - philips smarth", target: 2, unidad: "unidad", original: "tv x2 tcl smarth y philips smarth" },
        { item: "ventilador de pie liliana", target: 1, unidad: "unidad", original: "ventilador de pie liliana" },
        { item: "ventilador pared liliana", target: 1, unidad: "unidad", original: "ventilador pared liliana" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "minipimer philip", target: 1, unidad: "unidad", original: "minipimer philip" },
        { item: "cafetera smartlife", target: 1, unidad: "unidad", original: "cafetera smartlife" },
        { item: "licuadora yelmo", target: 1, unidad: "unidad", original: "licuadora yelmo" },
        { item: "jarra kenbroun", target: 1, unidad: "unidad", original: "jarra kenbroun" },
        { item: "calefactores", target: 2, unidad: "unidad", original: "calefactores x2" },
        { item: "aires acondicionados panoramic hitachi", target: 2, unidad: "unidad", original: "aire acondicionado x2 panoramic hitachi" },
        { item: "secador de pelo philips", target: 1, unidad: "unidad", original: "secador de pelo philips" }
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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "banqueta", target: 1, unidad: "unidad", original: "banqueta" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas 2P", target: 2, unidad: "unidad", original: "frazadas 2P x2" },
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "frazadas 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
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
        { item: "mesas y  2 bancos", target: 1, unidad: "unidad", original: "mesa 2 bancos" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },
        { item: "Terraza: mesa con 2 sillas plásticas", target: 1, unidad: "unidad", original: "terraza mesa con 2 sillas plasticas" }
      ]
    },
    
    
  }
},
//Sección Casa 8

{
  id: "Casa 8",
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
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "posillo", target: 3, unidad: "unidad", original: "posillo x3" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango verde", target: 1, unidad: "unidad", original: "olla con mango ver" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cucharón madera", target: 1, unidad: "unidad", original: "cucharón madera" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cuchar teflon", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca platos" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente pires", target: 1, unidad: "unidad", original: "fuente pires" },
        { item: "bandeja madera", target: 2, unidad: "unidad", original: "bandeja madera x2" },
        { item: "tabla de picar madera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "colador de pastas plástico", target: 1, unidad: "unidad", original: "colador de pastas plastico" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja de horno" },

  // Living - Cocina

        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "banqueta cubo", target: 2, unidad: "unidad", original: "banquette cubo x2" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" }


      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tv a philips smart", target: 2, unidad: "unidad", original: "tv a philips x2 smarth" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "horno zenith", target: 1, unidad: "unidad", original: "horno zenith" },
        { item: "tostadora windo", target: 1, unidad: "unidad", original: "tostadora windo" },
        { item: "cocina escabe", target: 1, unidad: "unidad", original: "cocina escabe" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "aire acondicionado tel top house", target: 2, unidad: "unidad", original: "aire acondicionado x2 tel top house" },
        { item: "secador de pelo gama", target: 2, unidad: "unidad", original: "secador de pelo gama" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termo tanque", target: 1, unidad: "unidad", original: "termotanque" }
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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "espejo en pasillo", target: 1, unidad: "unidad", original: "espejo en pasillo" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "frazadas", target: 3, unidad: "unidad", original: "frazada x3" }
        ]
      }
    },
  // 👇 Agregá esto al final del bloque habitaciones
  nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
},

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    }
  },

  //Sección Casa 9A

  {
  id: "Casa 9A",
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
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "posillo", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "jarrito de vidrio grande", target: 5, unidad: "unidad", original: "jarrito de vidrio grande x5" },
        { item: "jarrito de vidrio chico", target: 5, unidad: "unidad", original: "jarrito de vidrio chico x5" },
        { item: "jarrito chopero", target: 5, unidad: "unidad", original: "jarrito chopero x5" },
        { item: "cafetera de cocina de vidrio", target: 1, unidad: "unidad", original: "cafetera de cocina de vidrio" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "budinera acero", target: 1, unidad: "unidad", original: "budinera acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },

  // 🪑 Living - Cocina

        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "banqueta cubo", target: 2, unidad: "unidad", original: "banqueta cubo x2" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera bambi", target: 1, unidad: "unidad", original: "heladera bambi" },
        { item: "cafetera top house", target: 1, unidad: "unidad", original: "cafetera top house" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "juguera", target: 1, unidad: "unidad", original: "juguera" },
        { item: "tv bgh", target: 1, unidad: "unidad", original: "tv bgh" },
        { item: "aire acondicionado rca surrey", target: 2, unidad: "unidad", original: "aire acondicionado x2 rca surrey" },
        { item: "microondas mktech", target: 1, unidad: "unidad", original: "microondas mktech" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cocina volcan", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "minipymer atma", target: 1, unidad: "unidad", original: "MINIPYMER ATMA" }
      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                 nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️"
                  }
                },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" },
          { item: "espejo en pasillo", target: 1, unidad: "unidad", original: "espejo en pasillo" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "frazadas", target: 3, unidad: "unidad", original: "frazada x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "atizador", target: 1, unidad: "unidad", original: "atizador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
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
        { item: "posillo vidrio", target: 3, unidad: "unidad", original: "posillo vidrio x3" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "posillo", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
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
        { item: "bandeja desayuno", target: 2, unidad: "unidad", original: "bandeja desayuno x2" },
        { item: "porta servilletas", target: 1, unidad: "unidad", original: "porta servilletas" },
        { item: "tabla madera redonda", target: 2, unidad: "unidad", original: "tabla madera redonda x2" },
        { item: "tabla madera cuadrada", target: 1, unidad: "unidad", original: "tabla madera cuadrada" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "fuente de vidrio", target: 3, unidad: "unidad", original: "fuente de vidrio x3" },
        { item: "bandeja acero copetín", target: 1, unidad: "unidad", original: "bandeja acero copetin" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor de pasta" },
        { item: "fuente cuadrada acero", target: 1, unidad: "unidad", original: "fuente cuadrada acero" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "jarra plástico", target: 1, unidad: "unidad", original: "jarra plastico" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "azucarera acero", target: 1, unidad: "unidad", original: " azucarera acero " },


  // 🪑 Living - Cocina

        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "cuadro", target: 2, unidad: "unidad", original: "cuadro x2" },
        { item: "sillón 3 cuerpos en L", target: 1, unidad: "unidad", original: "sillon 3 cuerpos en L" },
        { item: "mesa ratona con vidrio", target: 1, unidad: "unidad", original: "mesa ratona con vidrio" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj de pared" },
        { item: "jarrones de vidrio", target: 2, unidad: "unidad", original: "jarrones de vidrio x2" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llave" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "tv sony", target: 1, unidad: "unidad", original: "tv sony" },
        { item: "secador de pelo rowenta", target: 1, unidad: "unidad", original: "secador de pelo rowenta" },
        { item: "heladera patrick", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "cafetera moulinex", target: 1, unidad: "unidad", original: "cafetera moulinex" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "ventiladores de techo", target: 3, unidad: "unidad", original: "ventiladores de techo x3" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "aire acondicionado surrey", target: 2, unidad: "unidad", original: "aire acondicionado x2 surrey" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "minipymer atma", target: 1, unidad: "unidad", original: "MINIPYMER ATMA" }
      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: Contiene hidromasaje | Estado: NO FUNCIONA correctamente ⚙️"
                  }
                },
    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador empotrados x2" },
          { item: "banco de pie de cama", target: 1, unidad: "unidad", original: "banco de pie de cama" },
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p" },
          { item: "acolchado", target: 2, unidad: "unidad", original: "acolchado 2p" },
          { item: "espejo pasillo", target: 1, unidad: "unidad", original: "espejo pasillo" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro con espejo", target: 3, unidad: "unidad", original: "cuadro con espejo x3" },
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
        { item: "copa champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "posillo", target: 4, unidad: "unidad", original: "posillo x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente de acero x" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "compotera acero", target: 4, unidad: "unidad", original: "compotera acero x4" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "fuente de vidrio redonda", target: 1, unidad: "unidad", original: "fuente de vidrio redonda" },
        { item: "juego completo teflon", target: 1, unidad: "unidad", original: "juego completo teflon" },
        { item: "cuchara espagueti", target: 1, unidad: "unidad", original: "cucharaespagueti" },
        { item: "cuchara espumadera", target: 1, unidad: "unidad", original: "cuchara espumadera" },
        { item: "cucaron y espumadera", target: 1, unidad: "unidad", original: "cucaron y espumadera" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "porta madera con platos", target: 4, unidad: "unidad", original: "porta madera con platos x4" },
        { item: "tabla de picar de madera", target: 2, unidad: "unidad", original: "tabla de picar de madera x2" },
        { item: "exprimidor manual", target: 1, unidad: "unidad", original: "exprimidor manual" },
        { item: "bandeja de melamina", target: 1, unidad: "unidad", original: "bandeja de melamina" },
        { item: "rayador", target: 2, unidad: "unidad", original: "rayador x2" },
        { item: "pava de acero", target: 1, unidad: "unidad", original: "pava de acero" },
        { item: "frapera acero", target: 1, unidad: "unidad", original: "frapera acero" },
        { item: "frapera plástica", target: 1, unidad: "unidad", original: "frapera plastica" },
        { item: "bowls", target: 2, unidad: "unidad", original: "bowls x2" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor de pasta" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "chayra", target: 1, unidad: "unidad", original: "chayra" },
        { item: "cuchilla mango blanco", target: 1, unidad: "unidad", original: "cuchilla mango blanco" },
        { item: "cuchilla mango madera", target: 1, unidad: "unidad", original: "cuchilla mango madera" },
        { item: "tenedor plástico grande", target: 1, unidad: "unidad", original: "tenedor plastico grande" },
        { item: "rayador de queso", target: 1, unidad: "unidad", original: "rayador de queso" },
        { item: "pinza acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "espumadera grande", target: 1, unidad: "unidad", original: "espumadera grande" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "juego de tenedor cuchillo asado", target: 1, unidad: "unidad", original: "juego de tenedor cuchillo asado" },

  // 🪑 Living - Cocina

        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillon 1 cuerpos x2" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon de 2 cuerpos" },
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
        { item: "microondas RCA", target: 1, unidad: "unidad", original: "microondas RCA" },
        { item: "aire acondicionado panoramic-hitachi", target: 2, unidad: "unidad", original: "aire acondicionado x2 panoramic-hitachi" },
        { item: "calefactores", target: 2, unidad: "unidad", original: "calefactores x2" },
        { item: "ventilador de pared liliana", target: 1, unidad: "unidad", original: "ventilador de pared liliana" },
        { item: "ventilador de pie atma", target: 1, unidad: "unidad", original: "ventilador de pie atma" },
        { item: "secador de pelo rowenta", target: 1, unidad: "unidad", original: "secador de pelo rowenta" },
        { item: "heladera patrick", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "tostadora atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "jarra black y deker", target: 1, unidad: "unidad", original: "jarra black y deker" },
        { item: "minipymer philips", target: 1, unidad: "unidad", original: "minipymer philips" },
        { item: "licuadora ramser", target: 1, unidad: "unidad", original: "licuadora ramser" },
        { item: "tv smart tonomac", target: 2, unidad: "unidad", original: "tv x2 smarth tonomac" },
        { item: "cafetera smartlife", target: 1, unidad: "unidad", original: "cafetera smartlife" },
        { item: "luz de emergencia", target: 2, unidad: "unidad", original: "luz emergencia x2" }
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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz empotradas", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "baul pie de cama", target: 1, unidad: "unidad", original: "baul pie de cama" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "alfombras de piel", target: 2, unidad: "unidad", original: "alfombras de piel x2" },
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazada 1 plaza", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "2 marrones - 2 a cuadros", target: 4, unidad: "unidad", original: "2 marrones - 2 a cuadros" }
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
        { item: "mesa 2 bancos", target: 1, unidad: "unidad", original: "mesa 2 bancos" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" },


        { item: "terraza mesa con 2 sillas plásticas", target: 1, unidad: "unidad", original: "terraza mesa con 2 sillas plasticas" }
      ]
    }
  }
},

//Sección Casa 16A
{
  id: "Casa 16A",
  ambientes: {
    cocina: {
      items: [
        // 🍽️ Vajilla y utensilios (4 personas)
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara + cucharitas largas", target: 4, unidad: "unidad", original: "cuchara x4 + cucharitas largas" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copa champagne", target: 3, unidad: "unidad", original: "copa champagne x3" },
        { item: "pocillo", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "cucharon", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "pinsas", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cepillo lava vaso", target: 1, unidad: "unidad", original: "sepillo lava vaso" },
        { item: "juego cuchilla más cuchillos marca mika", target: 1, unidad: "unidad", original: "juego cuchilla mas cuchillos marca mika" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "jarrito submarino", target: 7, unidad: "unidad", original: "jarrito submarino x7" },
        { item: "compoteras de vidrio", target: 4, unidad: "unidad", original: "compoteras de vidrio x4" },
        { item: "fuente pyrex rectangular", target: 2, unidad: "unidad", original: "fuente pyrex rectangular x2" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "frapera", target: 1, unidad: "unidad", original: "frapera" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "ensaladera plástica", target: 1, unidad: "unidad", original: "ensaladera plastica" },
        { item: "platos de melamina", target: 8, unidad: "unidad", original: "platos de melamina x8" },
        { item: "taper", target: 1, unidad: "unidad", original: "taper" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "jarrito medidor de vidrio", target: 1, unidad: "unidad", original: "jarrito medidor de vidrio" },
        { item: "posa pava", target: 1, unidad: "unidad", original: "posa pava" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor de teflon", target: 1, unidad: "unidad", original: "jarro hervidor de teflon" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pizera", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "bandeja de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "condimentero", target: 3, unidad: "unidad", original: "condimentero x3" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },

  // 🪑 Living - Cocina

        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "sillon 3 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "adornos", target: 1, unidad: "unidad", original: "adornos" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "luces de emergencia", target: 2, unidad: "unidad", original: "luces de emergencia" },
        { item: "heladera briket", target: 1, unidad: "unidad", original: "heladera BRIKET" },
        { item: "microondas global home", target: 1, unidad: "unidad", original: "MICROOANDAS GLOBAL HOME" },
        { item: "cocina escorial", target: 1, unidad: "unidad", original: "COCINA ESCORIAL" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "AIRE ACONDICIONADO X3 rca x2 - yorck" },
        { item: "tv smart RCA", target: 3, unidad: "unidad", original: "tv x3 smarth RCA" },
        { item: "caloventor de pared clever", target: 1, unidad: "unidad", original: "caloventor de pared clever" },
        { item: "leño hogar", target: 1, unidad: "unidad", original: "leÑo hogar" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "ventilador de pie liliana", target: 1, unidad: "unidad", original: "ventilador de pie liliana" },
        { item: "secador de pelo empotrado marca gama", target: 1, unidad: "unidad", original: "secador de pelo empotrado marca gama" },
        { item: "cafetera smarth life", target: 1, unidad: "unidad", original: "cafetera smarth life" },
        { item: "minipymer broun", target: 1, unidad: "unidad", original: "minipymer broun" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "tostadora peabody", target: 1, unidad: "unidad", original: "tostadora peabody" },
        { item: "juguera smarth life", target: 1, unidad: "unidad", original: "juguera smarth life" },
        { item: "extractor longvie", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "lavarropas dream", target: 1, unidad: "unidad", original: "lavarropas dream" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "plancha brolux", target: 1, unidad: "unidad", original: "plancha brolux" }
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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubrecama beige 2p", target: 1, unidad: "unidad", original: "cubrecama beige 2p" },
          { item: "frazadas 2 plazas alcoyana", target: 2, unidad: "unidad", original: "frazadas 2p x2 alcoyana" },
          { item: "frazadas 2 plazas king saise", target: 1, unidad: "unidad", original: "frazadas 2p king saise" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "pilow", target: 1, unidad: "unidad", original: "pilow" },
          { item: "cubrecama 1p tirquesa", target: 1, unidad: "unidad", original: "cubrecama 1p tirquesa" },
          { item: "frazada 1p", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "frazada 1.5p", target: 2, unidad: "unidad", original: "frazada 1.5p x2" }
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
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" }
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
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara + cucharitas largas", target: 4, unidad: "unidad", original: "cuchara x4 + cucharitas largas" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copa champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillo", target: 5, unidad: "unidad", original: "posillo x5" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartén", target: 3, unidad: "unidad", original: "sarten x3" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa pure" },
        { item: "bandeja pyrex", target: 3, unidad: "unidad", original: "bandeja pyrex x3" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "vaso medidor de vidrio", target: 1, unidad: "unidad", original: "vaso medidor de vidrio" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "ensaladera de vidrio", target: 2, unidad: "unidad", original: "ensaladera de vidrio x2" },
        { item: "hielera", target: 1, unidad: "unidad", original: "hielera" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "compotera vidrio", target: 4, unidad: "unidad", original: "compotera vidrio x4" },
        { item: "jarrito café vidrio", target: 4, unidad: "unidad", original: "jarrito café vidrio x4" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "jarrito submarino", target: 4, unidad: "unidad", original: "jarrito submarino x4" },
        { item: "vaso liso", target: 4, unidad: "unidad", original: "vaso liso x4" },
        { item: "juego de cuchillos marca mika", target: 1, unidad: "unidad", original: "juego de cuchillos marca mika" },
        { item: "magiclick", target: 1, unidad: "unidad", original: "magiclick" },
        { item: "bandeja horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "espátula acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "colador acero", target: 1, unidad: "unidad", original: "colador acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchara acero", target: 1, unidad: "unidad", original: "cuchara acero" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "platos asado", target: 5, unidad: "unidad", original: "platos asado x5" },
        { item: "especiero", target: 1, unidad: "unidad", original: "especiero" },
        { item: "tacho basura", target: 1, unidad: "unidad", original: "tacho basura" },

  // 🪑 Living - Cocina
        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillón 2 cuerpos x2", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x2" },
        { item: "mesta", target: 1, unidad: "unidad", original: "mesta" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera briket", target: 1, unidad: "unidad", original: "heladera briket" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "microondas global home", target: 1, unidad: "unidad", original: "microondas global home" },
        { item: "cocina escorial", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "extractor longvie", target: 1, unidad: "unidad", original: "extractor longvie" },
        { item: "televisores RCA smarth", target: 3, unidad: "unidad", original: "televisores x3 RCA smarth" },
        { item: "aire acondicionado RCA - yorck", target: 3, unidad: "unidad", original: "aire acondicionado x3 RCA x2 - yorck" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "caloventor clever", target: 1, unidad: "unidad", original: "caloventor clever" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo x2 gama" },
        { item: "cafetera smarthlife", target: 1, unidad: "unidad", original: "cafetera smarthlife" },
        { item: "minipymer broun", target: 1, unidad: "unidad", original: "minipymer broun" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "tostadora peabody", target: 1, unidad: "unidad", original: "tostadora peabody" },
        { item: "juguera smarthlife", target: 1, unidad: "unidad", original: "juguera smarthlife" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "lavarropas dream", target: 1, unidad: "unidad", original: "lavarropas dream" },
        { item: "leño hogar", target: 1, unidad: "unidad", original: "leño hogar" },
        { item: "plancha brolux", target: 1, unidad: "unidad", original: "plancha brolux" }
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
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas 2p king saise", target: 3, unidad: "unidad", original: "frazadas 2p x3 king saise" },
          { item: "pasillo cuadro grande", target: 1, unidad: "unidad", original: "baulillo cuadro grande" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "frazada 1 plaza", target: 6, unidad: "unidad", original: "frazada 1p x6" }
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
        { item: "mesa 5 sillas plásticas", target: 1, unidad: "unidad", original: "mesa 5 sillas plasticas" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
      ]
    },
      baño: {
      items: [
        { item: " mampara", target: 1, unidad: "unidad", original: " mampara" }
      ]
    }
  }
},

//Sección Casa 22B
{
  id: "Casa 22B",
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
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "pocillos", target: 2, unidad: "unidad", original: "pocillo x2" },
        { item: "tazas café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero x1" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandejas acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "coladores de pastas", target: 2, unidad: "unidad", original: "colador de pastas x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera x1" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla madera", target: 3, unidad: "unidad", original: "tabla madera x3" },
        { item: "exprimer manual", target: 1, unidad: "unidad", original: "exprimer manual" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "boels rectangular plástico", target: 1, unidad: "unidad", original: "boels rectangular plastico" },
        { item: "secador plato", target: 1, unidad: "unidad", original: "secador plato" },
        { item: "pava", target: 1, unidad: "unidad", original: "pava" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },
        { item: "tazas té", target: 4, unidad: "unidad", original: "taza te x4" },
        { item: "compoteras caero", target: 4, unidad: "unidad", original: "compotera caero x4" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "palita pisera", target: 1, unidad: "unidad", original: "palita pisera" },
        { item: "cuchillas", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "cuchillo pan", target: 1, unidad: "unidad", original: "cuchillo pan" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "espumadera teflon", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "cucharón teflon", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "cuchara teflon", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "individuales de tela", target: 2, unidad: "unidad", original: "individuales de tela x2" },
        { item: "posas vaso", target: 5, unidad: "unidad", original: "posa vaso x5" },
        { item: "individuales plásticos", target: 4, unidad: "unidad", original: "individuales plasticos x4" },
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillones 1 cuerpo", target: 2, unidad: "unidad", original: "sillon un cuerpo x2" },
        { item: "mueble tv 2 puertas", target: 1, unidad: "unidad", original: "mueble tv 2 puertas" },
        { item: "reloj pared", target: 1, unidad: "unidad", original: "reloj pared" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llavero pared", target: 1, unidad: "unidad", original: "porta llaver pared" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadrosx4" },
        { item: "Pasillo: cuadro y espejo", target: 1, unidad: "unidad", original: "pasillo" },

      ]
    },

    electrodomesticos: {
      items: [
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "LUZ EMERGENCIA" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas panoramic", target: 1, unidad: "unidad", original: "microondas panoramic" },
        { item: "cocina eskabe", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "jarra microsonic", target: 1, unidad: "unidad", original: "jarra microsonic" },
        { item: "tostadora tophouse", target: 1, unidad: "unidad", original: "tostadora tophouse" },
        { item: "minipimer kanjihome", target: 1, unidad: "unidad", original: "minipimer kanjihome" },
        { item: "cafetera nura", target: 1, unidad: "unidad", original: "cafetera nura" },
        { item: "extractor sh", target: 1, unidad: "unidad", original: "extractor sh" },
        { item: "aires acondicionados electric habitat", target: 2, unidad: "unidad", original: "aire acondicionado x2 estándar electric habitat" },
        { item: "tvs smart tedge jvc bgh", target: 3, unidad: "unidad", original: "tv x3 smart tedge jvc bgh" },
        { item: "ventiladores (Ventilador de la cocina no funciona)", target: 3, unidad: "unidad", original: "ventilador x3 comedor no funciona" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2P x2" },
          { item: "perchas", target: 6, unidad: "unidad", original: "percha x6" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "puf", target: 1, unidad: "unidad", original: "puf" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" },
          { item: "frazadas 1 plaza", target: 6, unidad: "unidad", original: "frazada 1p x6" }
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
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "mesa", target: 1, unidad: "unidad", original: "mesa" },
        { item: "sillas", target: 2, unidad: "unidad", original: "sillas x2" },
        { item: "bancos", target: 2, unidad: "unidad", original: "bancos x2" },
        { item: "tender", target: 1, unidad: "unidad", original: "tender" }
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
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "ensaladera acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja acero", target: 3, unidad: "unidad", original: "bandeja acero platinax3" },
        { item: "colador de pastas", target: 2, unidad: "unidad", original: "colador de pastas x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla madera", target: 3, unidad: "unidad", original: "tabla madera x3 2 redondas 1 cuadradas" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "compotera cero", target: 3, unidad: "unidad", original: "compotera cero x3" },
        { item: "azucarera", target: 1, unidad: "unidad", original: "azucarera" },
        { item: "compotera acero", target: 3, unidad: "unidad", original: "compotera acero x3" },
        { item: "porta servilleta", target: 1, unidad: "unidad", original: "porta servilleta" },



// 🪑 Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillón 1 cuerpo", target: 2, unidad: "unidad", original: "sillon un cuerpo x2" },
        { item: "mueble 3 puertas mediano", target: 1, unidad: "unidad", original: "mueble 3 puertas mediano" },
        { item: "mesa ratona vidrio", target: 1, unidad: "unidad", original: "mesa ratona vidrio" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "porta llaver pared", target: 1, unidad: "unidad", original: "porta llaver pared" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj"},
        { item: "cuadros", target: 1, unidad: "unidad", original: "cuadros" }

      ]
    },

    electrodomesticos: {
      items: [
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "cocina eskabe", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "microondas sansumg", target: 1, unidad: "unidad", original: "microondas sansumg" },
        { item: "tv smart tedge jvc y bgh", target: 3, unidad: "unidad", original: "tv x3 smart tedge jvc y bgh" },
        { item: "aire acondicionado estándar electric", target: 2, unidad: "unidad", original: "aire acondicionado x2 estándar electric" },
        { item: "extractor sh", target: 1, unidad: "unidad", original: "extractor sh" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "jarra microsonic", target: 1, unidad: "unidad", original: "jarra microsonic" },
        { item: "cafetera tophome", target: 1, unidad: "unidad", original: "cafetera tophome" },
        { item: "tostadora tophome", target: 1, unidad: "unidad", original: "tostadora tophome" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo philips", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "minipymer black y deker", target: 1, unidad: "unidad", original: "minipymer black y deker" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "banqueta pie cama", target: 1, unidad: "unidad", original: "banqueta pie cama" },
          { item: "frazadas 2p", target: 2, unidad: "unidad", original: "frazadas 2P x2" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" }
        ]
      },
      simple: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "silla", target: 1, unidad: "unidad", original: "silla" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazada 1p", target: 5, unidad: "unidad", original: "frazada 1p x5" },
          { item: "perchas", target: 3, unidad: "unidad", original: "perchas x3" }
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
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vasos comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza de café x4" },
        { item: "pocillos café", target: 4, unidad: "unidad", original: "pocillo café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "fuente ovalada acero", target: 1, unidad: "unidad", original: "fuente ovalada acero" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "bandeja pizera", target: 1, unidad: "unidad", original: "bandeja pizera" },
        { item: "bandeja pizera", target: 1, unidad: "unidad", original: "bandeja pizera" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "tabla de picar madera", target: 1, unidad: "unidad", original: "tabla de picar madera" },
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
        { item: "tv bgh común + control", target: 1, unidad: "unidad", original: "tv bgh comun + control" },
        { item: "deco directv + control", target: 1, unidad: "unidad", original: "deco directv + control" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "extractor turbo tronic", target: 1, unidad: "unidad", original: "extractor turbo tronic" },
        { item: "heladera bambi", target: 1, unidad: "unidad", original: "heladera bambi" },
        { item: "calefactor", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" },
        { item: "tostadora winco", target: 1, unidad: "unidad", original: "tostadora winco" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "aire acondicionado tcl-rca", target: 2, unidad: "unidad", original: "aire acondicionado x2 tcl-rca control ok" }
      ]
    },


    baño: {
      items: [
        { item: "vanitory", target: 1, unidad: "unidad", original: "vanitory" },
        { item: "inodoro + bidet", target: 1, unidad: "unidad", original: "inodoro + bidet" },
        { item: "cortina de baño", target: 1, unidad: "unidad", original: "cortina de baño" }
      ],
      nota: "Observaciones: No contiene hidromasaje ❌"
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "camas 2 plazas + colchón", target: 1, unidad: "unidad", original: "cama 2p + colchon" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazada 2 plazas", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "espejo", target: 2, unidad: "unidad", original: "2 paños de cortina verdes" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "perchas", target: 3, unidad: "unidad", original: "3 perchas" }
        ]
        
      },
    
      simple_1: {
        items: [
          { item: "cama 1 plaza + colchón", target: 1, unidad: "unidad", original: "cama 1p + colchon" },
          { item: "cama marinera + colchón", target: 2, unidad: "unidad", original: "cama marinera + colchon x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "banco de madera", target: 1, unidad: "unidad", original: "banco de madera" },
          { item: "paños cortinas marrón", target: 2, unidad: "unidad", original: "2 paños de cortinas marron" },
          { item: "frazada 1 plaza", target: 3, unidad: "unidad", original: "frazada 1p x3" },
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
        { item: "mesa + 2 bancos", target: 1, unidad: "unidad", original: "mesa + 2 bancos" },
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
        { item: "platitos café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compoteras postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso comunes", target: 4, unidad: "unidad", original: "vaso comun x4" },
        { item: "copas de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copas de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "tazas de café", target: 4, unidad: "unidad", original: "taza de café x4" },
        { item: "pocillos café", target: 4, unidad: "unidad", original: "pocillo café x4" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espatulas teflón", target: 2, unidad: "unidad", original: "espátula teflon x2" },
        { item: "azucarera acero", target: 1, unidad: "unidad", original: "azucarera acero" },
        { item: "panera rayador", target: 1, unidad: "unidad", original: "panera rayador" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "ensaladeras vidrio", target: 2, unidad: "unidad", original: "ensaladera vidrio x2" },
        { item: "tabla picar madera rectangular", target: 1, unidad: "unidad", original: "tabla picar madera rectangular" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "tabla pizera madera", target: 1, unidad: "unidad", original: "tabla pizera madera" },
        { item: "pizera aluminio", target: 1, unidad: "unidad", original: "pizera aluminio" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" }
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
        { item: "tv samsung", target: 1, unidad: "unidad", original: "tv samsung" },
        { item: "microondas kelvinator", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "extractor stell home", target: 1, unidad: "unidad", original: "extractor stell home" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "aires acondicionados rca-tcl-bgh", target: 3, unidad: "unidad", original: "aire acondicionado x3 rca- tcl -bgh" },
        { item: "radiadores + 1 toayero", target: 4, unidad: "unidad", original: "radiadores x4 + 1 toayero" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cocina volcán", target: 1, unidad: "unidad", original: "cocina volcan" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillón simple", target: 1, unidad: "unidad", original: "sillon simple" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "porta llavero pared", target: 1, unidad: "unidad", original: "porta llavero pared" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "camas 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchero pie", target: 1, unidad: "unidad", original: "perchero pie" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "banco pie de cama", target: 1, unidad: "unidad", original: "banco pie de cama" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "acolchados 1 plaza", target: 2, unidad: "unidad", original: "acolchado de 1p x2" },
          { item: "frazadas 1 plaza", target: 2, unidad: "unidad", original: "frazada 1 p x2" }
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
        { item: "platitos café", target: 6, unidad: "unidad", original: "platito café x6" },
        { item: "compoteras postre", target: 6, unidad: "unidad", original: "compotera postre x6" },
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
        { item: "platitos café", target: 7, unidad: "unidad", original: "platito café x7" },
        { item: "compoteras postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
        { item: "vaso comunes", target: 7, unidad: "unidad", original: "vaso comun x7" },
        { item: "copas de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
        { item: "copas de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
        { item: "tazas de café", target: 7, unidad: "unidad", original: "taza de café x7" },
        { item: "pocillos", target: 7, unidad: "unidad", original: "pocillo x7" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "juego asado pinche cuchillo", target: 1, unidad: "unidad", original: "juego asado pinche cuchillo" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pinza acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "espátula acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "cucharón teflón", target: 1, unidad: "unidad", original: "cucharon teflon" },
        { item: "espátula teflón", target: 1, unidad: "unidad", original: "espátula teflon" },
        { item: "espumadera teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },
        { item: "hielera plástico", target: 1, unidad: "unidad", original: "hielera plastico" },
        { item: "bandeja pirex", target: 1, unidad: "unidad", original: "bandeja pirex" },
        { item: "bandeja ovalada vidrio", target: 1, unidad: "unidad", original: "bandeja ovalada vidrio" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bowls plástico", target: 2, unidad: "unidad", original: "bowl plastico x2 blanco lila" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "tabla rectangular madera", target: 1, unidad: "unidad", original: "tabla rectangular madera" },
        { item: "tabla redonda madera", target: 1, unidad: "unidad", original: "tabla madera redonda" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "mesa vidrio con 8 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 8 sillas" },
        { item: "sillones de 1 cuerpo", target: 2, unidad: "unidad", original: "sillon de 1 cuerpo x2" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "sillas madera", target: 2, unidad: "unidad", original: "sillas madera x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "banqueta", target: 1, unidad: "unidad", original: "banqueta" },
        { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
        { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
        { item: "adornos", target: 1, unidad: "unidad", original: "adornos" }
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
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "HELADERA GAFA" },
        { item: "microonda bgh", target: 1, unidad: "unidad", original: "microonda bgh" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "jarra ultracomb", target: 1, unidad: "unidad", original: "jarra ultracomb" },
        { item: "cafetera atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "aires acondicionados (hitachi-surrey)", target: 2, unidad: "unidad", original: "aire acondicionado x2 hitachi - surrey" },
        { item: "calefactores", target: 5, unidad: "unidad", original: "calefactores x5" },
        { item: "tvs noblex smart tcl led comun", target: 2, unidad: "unidad", original: "TV x2: noblex smart tcl led comun" },
        { item: "secador de pelo gama", target: 2, unidad: "unidad", original: "secador de pelo gama x2" },
        { item: "dvd noblex", target: 1, unidad: "unidad", original: "dvd noblex" },
        { item: "ventiladores techo", target: 4, unidad: "unidad", original: "ventiladores de techox4" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },


    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro espejo", target: 1, unidad: "unidad", original: "cuadro espejo" },
          { item: "banco de pie", target: 1, unidad: "unidad", original: "banco de pie" },
          { item: "cubrecama 2p", target: 1, unidad: "unidad", original: "cubrecama 2p" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "cama marinera", target: 1, unidad: "unidad", original: "cama marinera" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "veladorempotrado x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "cubrecamas", target: 2, unidad: "unidad", original: "cubrecamas x2" },
          { item: "frazadas grises", target: 2, unidad: "unidad", original: "frazadas grises x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchas", target: 3, unidad: "unidad", original: "percha x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama de 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de lus" },
          { item: "veladores empotrados", target: 2, unidad: "unidad", original: "velador empotrado x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "acolchado plumón negro", target: 1, unidad: "unidad", original: "acolchado plumon negro" },
          { item: "acolchados varios (2 turquesa - 1 negro)", target: 3, unidad: "unidad", original: "acolchado plumones x3 dos turquesa uno negro" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazadas 1p x3" },
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
        { item: "platitos café", target: 8, unidad: "unidad", original: "platito café x8" },
        { item: "compoteras postre", target: 8, unidad: "unidad", original: "compotera postre x8" },
        { item: "vaso comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladeras acero", target: 5, unidad: "unidad", original: "ensaladera acero x5" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla chayra", target: 1, unidad: "unidad", original: "cuchilla chayra" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "colador", target: 1, unidad: "unidad", original: "coladro" },
        { item: "palo de amasar", target: 1, unidad: "unidad", original: "palo de amasar" },
        { item: "cucharón acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "espátula acero", target: 1, unidad: "unidad", original: "espátula acero" },
        { item: "espumadera acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "escurridor de verduras", target: 1, unidad: "unidad", original: "escurridor verdura" },
        { item: "colador de pastas", target: 1, unidad: "unidad", original: "colador de pastas" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "ensaladera vidrio", target: 1, unidad: "unidad", original: "ensaladera vidrio" },
        { item: "fuente ovalada acero", target: 1, unidad: "unidad", original: "fuente ovalada acero" },
        { item: "hielera negra", target: 1, unidad: "unidad", original: "hielera negra" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "madera grande de copetín", target: 1, unidad: "unidad", original: "madera grande de copetin" },
        { item: "maderas para asado grande", target: 2, unidad: "unidad", original: "madera para asado grande x2" },
        { item: "pizeras", target: 3, unidad: "unidad", original: "pizera x3" },
        { item: "bandejas horno", target: 2, unidad: "unidad", original: "bandeja horno x2" },
        { item: "bandeja horno enlozada", target: 1, unidad: "unidad", original: "bandeja horno enlosada" },
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
        { item: "heladera patrick", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "microondas bgh", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "cocina escorial", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "equipo de música", target: 1, unidad: "unidad", original: "equipo de musica no funciona" },
        { item: "cafetera liliana", target: 1, unidad: "unidad", original: "cafetera liliana" },
        { item: "licuadora liliana", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "jarra black y decker", target: 1, unidad: "unidad", original: "jarra black y deker" },
        { item: "exprimidor black y decker", target: 1, unidad: "unidad", original: "exprimidor black y deker se retira no funciona" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco - conqueror control ok" },
        { item: "tv hisense", target: 2, unidad: "unidad", original: "tv x2 hisense - conqueror controles ok" },
        { item: "plancha moulinex", target: 1, unidad: "unidad", original: "plancha moulinex" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "secador de pelo philips", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },


    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesas luz empotrada", target: 2, unidad: "unidad", original: "mesa luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "repisa tv", target: 1, unidad: "unidad", original: "repisa tv" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "tabla panchar", target: 1, unidad: "unidad", original: "tabla panchar" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2P" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "cubrecamas invierno verde", target: 3, unidad: "unidad", original: "cubrecama invierno verde 1p x3" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "cubrecamas 1p (verde con blanco)", target: 3, unidad: "unidad", original: "cubrecama x3 1P verde con blanco" }
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
        { item: "tvs hisense smart tcl smart", target: 2, unidad: "unidad", original: "tv x2 hisense smart tcl smart" },
        { item: "ventiladores de techo", target: 5, unidad: "unidad", original: "ventiladores de techo x5" },
        { item: "aires acondicionados philco", target: 2, unidad: "unidad", original: "aire acondicionado x2 philco" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "cocina longvie", target: 1, unidad: "unidad", original: "cocina longvie" },
        { item: "heladera electrolux", target: 1, unidad: "unidad", original: "heladera electrolux" },
        { item: "extractor ecoclima", target: 1, unidad: "unidad", original: "extractor ecoclima" },
        { item: "licuadora", target: 1, unidad: "unidad", original: "licuadora" },
        { item: "minipimer eiffel", target: 1, unidad: "unidad", original: "minipimer eiffel" },
        { item: "extractor jugo eiffel", target: 1, unidad: "unidad", original: "extractor jugo eiffel" },
        { item: "jarra RCA", target: 1, unidad: "unidad", original: "jarra RCA" },
        { item: "secadores de pelo gamma", target: 2, unidad: "unidad", original: "secador de pelo x2 gamma" },
        { item: "radiadores(6) - toayeros(2)", target: 8, unidad: "unidad", original: "radiadores x6 - toayeros x2" },
        { item: "tostadora smartlife", target: 1, unidad: "unidad", original: "tostadora smartlife" }
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
        { item: "vaso comunes", target: 8, unidad: "unidad", original: "vaso comun x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "ollas", target: 4, unidad: "unidad", original: "olla x4" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero platina", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladeras acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "teflón: cucharon, cuchara, espumadera", target: 3, unidad: "unidad", original: "teflon: cucharon, cuchara, espumadera" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bowls plástico", target: 3, unidad: "unidad", original: "bowl plastico x3" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "escurridor pasta", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tablas picar madera", target: 3, unidad: "unidad", original: "tabla picar madera x3 - redondas 2 y 1 cuadrada" },
        { item: "tabla picar plástico", target: 1, unidad: "unidad", original: "tabla picar plastico" },
        { item: "mantel de cuerina", target: 1, unidad: "unidad", original: "mantel de cuerina" },
        { item: "mesa con 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón en L", target: 1, unidad: "unidad", original: "sillon en L" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesita" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" }

      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2p", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "acolchados 2p", target: 1, unidad: "unidad", original: "acolchado 2P" },
          { item: "frazadas 1p", target: 2, unidad: "unidad", original: "frazada x2 1P" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1P x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "colchas 1p", target: 3, unidad: "unidad", original: "colcha 1P x3" },
          { item: "frazadas 1p", target: 2, unidad: "unidad", original: "frazada 1p x2" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "colchas 1p", target: 3, unidad: "unidad", original: "colcha 1p x3" }
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
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "tvs smart sharp philco", target: 3, unidad: "unidad", original: "tv x3 smart sharp-philco" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "MINIPYMER ATMA" },
        { item: "jarra yelmo", target: 1, unidad: "unidad", original: "jarra yelmo (NUEVA ATMA_)" },
        { item: "tostadora ultracomb", target: 1, unidad: "unidad", original: "tostadora ultracomb" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "radiadores(8) - toayeros(3)", target: 11, unidad: "unidad", original: "radiadores x8 - toayeros x3" },
        { item: "cafetera yelmo", target: 1, unidad: "unidad", original: "cafetera yelmo" },
        { item: "aires acondicionados philco", target: 4, unidad: "unidad", original: "aire acondicionado x4 philco" }
      ]
    },
      baño: {
                  suite: {
                    items: [
                      { item: "secador de pelo", target: 1, unidad: "unidad", original: "secador de pelo" },
                      { item: "toallero", target: 1, unidad: "unidad", original: "toallero" }
                    ],
                  nota: "Observaciones: Contiene hidromasaje | Estado: FUNCIONA correctamente ✅"
                  }
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
        { item: "bandejas acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
        { item: "ensaladeras acero", target: 4, unidad: "unidad", original: "ensaladera acero x4" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "hielera acero", target: 1, unidad: "unidad", original: "hielera acero" },
        { item: "rallador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla picar madera redonda", target: 1, unidad: "unidad", original: "tabla picar madera redonda" },
        { item: "bowls plástico", target: 2, unidad: "unidad", original: "bowl plasticox2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "jarra hervidor", target: 1, unidad: "unidad", original: "jarra hervidor" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "jarra vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuentes horno", target: 2, unidad: "unidad", original: "fuente horno x2" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "tenedores de asado", target: 2, unidad: "unidad", original: "tenedor de asado x2" },
        { item: "cuchara teflon", target: 1, unidad: "unidad", original: "cuchara teflon" },
        { item: "cuchara acero", target: 1, unidad: "unidad", original: "cuchara acero" },
        { item: "cucharon acero", target: 1, unidad: "unidad", original: "cucharo acero" },
        { item: "mesa con 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillones individual", target: 1, unidad: "unidad", original: "sillon individual" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj" }

      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2p", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1P x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x5" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
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
        { item: "jarra yelmo", target: 1, unidad: "unidad", original: "jarra yelmo" },
        { item: "tostadora 4 panes peabody", target: 1, unidad: "unidad", original: "tostadora 4 panes peabody" },
        { item: "cocina florencia", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "tvs noblex smart - philco led", target: 1, unidad: "unidad", original: "tv samsung" },
        { item: "heladera gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "microondas samsung", target: 2, unidad: "unidad", original: "TV x2 noblex smart- philco led" },
        { item: "aires acondicionados rca-sanyo", target: 2, unidad: "unidad", original: "aire acondicionado x2 RCA-Sanyo" },
        { item: "extractor tst", target: 1, unidad: "unidad", original: "extractor TST" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "radiadores(5) - toayeros(2)", target: 7, unidad: "unidad", original: "radiadores x5 - toayeros x2" },
        { item: "luz emergencia", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "minipimer atma", target: 1, unidad: "unidad", original: "minipimer atma" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
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
        { item: "vasos comunes", target: 8, unidad: "unidad", original: "vaso común x8" },
        { item: "copas de agua", target: 8, unidad: "unidad", original: "copa de agua x8" },
        { item: "copas de vino", target: 8, unidad: "unidad", original: "copa de vino x8" },
        { item: "tazas de café", target: 8, unidad: "unidad", original: "taza de café x8" },
        { item: "pocillos", target: 8, unidad: "unidad", original: "pocillo x8" },
        { item: "sartenes", target: 2, unidad: "unidad", original: "sartén x2" },
        { item: "ollas", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandejas acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "ensaladera acero", target: 1, unidad: "unidad", original: "ensaladera acero x1" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "pizeras", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "fuente ovalada acero", target: 1, unidad: "unidad", original: "fuente ovalada acero" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plástica" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "tabla picar madera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa a8 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "mesa 2 bancos", target: 1, unidad: "unidad", original: "mesa 2 bancos" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj" }

      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2p", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2P" }
        ]
      },
      simple_1: {
        items: [
          { item: "camas 1p", target: 3, unidad: "unidad", original: "camas 1P x3" },
          { item: "mesas de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazada 1P x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "camas 1p", target: 3, unidad: "unidad", original: "camas 1P x3" },
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
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },

        { item: "compotera de vidrio", target: 3, unidad: "unidad", original: "compotera vidrio x3" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 1, unidad: "unidad", original: "olla x1" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "juguera manual", target: 1, unidad: "unidad", original: "juguera manual" },
        { item: "fuente de acero", target: 1, unidad: "unidad", original: "fuente acero x1" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "pinza", target: 3, unidad: "unidad", original: "pinza x3" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa papa teflón", target: 1, unidad: "unidad", original: "pisa papa teflon" },
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
        { item: "bowl plástico", target: 2, unidad: "unidad", original: "bowl plastico x2" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra de vidrio" },
        { item: "escurridor de pastas", target: 1, unidad: "unidad", original: "escurridor de pastas" },
        { item: "jarra plástica", target: 2, unidad: "unidad", original: "jarra plastica x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "porta rollo servilleta", target: 1, unidad: "unidad", original: "porta rollo servilleta" },
        { item: "jarra porta sachet", target: 1, unidad: "unidad", original: "jarra porta sachet" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "especiero blanco", target: 2, unidad: "unidad", original: "especieros x2 blanco" },
        { item: "juego especiero con canasto", target: 1, unidad: "unidad", original: "juego especiero con canasto" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },

        // 🪑 Living - Cocina
        { item: "mesa con 6 sillas", target: 1, unidad: "unidad", original: "mesa con 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "sillón matero", target: 2, unidad: "unidad", original: "sillon matero x2" },
        { item: "mueble", target: 1, unidad: "unidad", original: "mueble" },
        { item: "mesa ratona redonda", target: 2, unidad: "unidad", original: "mesa ratona redonda x2" },
        { item: "velador de pie", target: 1, unidad: "unidad", original: "velador de pie" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "matafuego", target: 1, unidad: "unidad", original: "matafuego" },
        { item: "adornos varios", target: 10, unidad: "unidad", original: "adornos varios x10" },
        { item: "cortinas en buen estado", target: 1, unidad: "conjunto", original: "cortinas en buen estado" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera con congelador briket", target: 1, unidad: "unidad", original: "heladera con congelador briket" },
        { item: "cocina eskabe", target: 1, unidad: "unidad", original: "cocina eskabe" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "licuadora arno", target: 1, unidad: "unidad", original: "licuadora arno" },
        { item: "tostadora philips", target: 1, unidad: "unidad", original: "tostadora philips" },
        { item: "jarra smartlife", target: 1, unidad: "unidad", original: "jarra smarthlife" },
        { item: "tv led común", target: 2, unidad: "unidad", original: "tv x2 samyo y sansumg led comun" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 home leader y springler" },
        { item: "secador de pelo atma", target: 1, unidad: "unidad", original: "secador de pelo atma" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "cafetera moulinex (falta filtro)", target: 1, unidad: "unidad", original: "cafetera moulinex (le falta el filtro)" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "repisa empotrada con adornos", target: 1, unidad: "unidad", original: "repisa empotrada con adornos" },
          { item: "sillón cubo", target: 1, unidad: "unidad", original: "sillon cubo" },
          { item: "frazadas 2p", target: 3, unidad: "unidad", original: "frazadas 2P x3" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" },
          { item: "cuadro", target: 3, unidad: "unidad", original: "cuadro x3" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz empotrada", target: 1, unidad: "unidad", original: "mesa de luz empotrada x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "sillón cubo", target: 2, unidad: "unidad", original: "sillon cubo x2" },
          { item: "espejo de pared", target: 2, unidad: "unidad", original: "espejo de pared x2" },
          { item: "frazada 1p", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "manta rosa fina", target: 1, unidad: "unidad", original: "manta rosa fina" },
          { item: "perchas", target: 4, unidad: "unidad", original: "perchas x4" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO| Unión de camas: SI"
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
        { item: "compotera de vidrio (verde)", target: 3, unidad: "unidad", original: "compotera de vidrio verde x3" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 2, unidad: "unidad", original: "copa de vino x2" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },

        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
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
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "azucarera de acero", target: 1, unidad: "unidad", original: "azucarera acero" },
        { item: "pizzera de madera (redonda)", target: 2, unidad: "unidad", original: "pizera madera redonda x2" },
        { item: "bandeja de horno con parrilla", target: 2, unidad: "unidad", original: "bandeja de horno + parrilla x2" },
        { item: "pinza de acero", target: 1, unidad: "unidad", original: "pinza acero" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cucharón de acero", target: 1, unidad: "unidad", original: "cucharon acero" },
        { item: "martillo para carne", target: 1, unidad: "unidad", original: "martillo para carne" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "espumadera de teflón", target: 1, unidad: "unidad", original: "espumadera teflon" },

        // 🪑 Living - Cocina
        { item: "mesa cuadrada de vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio 6 sillas" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "sillón madera 2 cuerpos + 2", target: 1, unidad: "conjunto", original: "sillon madera 2 cuerpos + 2" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesita" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera Gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 PHILCO COVENTRY KELVINATOR" },
        { item: "extractor SH", target: 1, unidad: "unidad", original: "estractor SH" },
        { item: "cocina Forte", target: 1, unidad: "unidad", original: "cocina forte" },
        { item: "microondas BGH", target: 1, unidad: "unidad", original: "microondas bgh" },
        { item: "tv (Philco smart + BGH)", target: 2, unidad: "unidad", original: "tv x2 philco smart - BGH" },
        { item: "tostadora Philips", target: 1, unidad: "unidad", original: "tostadora philips" },
        { item: "cafetera Atma", target: 1, unidad: "unidad", original: "cafetera atma" },
        { item: "minipimer Liliana", target: 1, unidad: "unidad", original: "minypimer liliana" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "jarra Enaxxion", target: 1, unidad: "unidad", original: "jarra enaxxion (marca borrada blanca detalle en celeste)" },
        { item: "secador de pelo Imetec", target: 1, unidad: "unidad", original: "secador de pelo imetec" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "banco con almohadón", target: 1, unidad: "unidad", original: "banco + almohadon" },
          { item: "perchero de pie", target: 1, unidad: "unidad", original: "perchero pie" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadros x1" },
          { item: "espejo", target: 2, unidad: "unidad", original: "espejo x2" },
          { item: "frazadas 2p", target: 2, unidad: "unidad", original: "frazadas 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velado x1" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazada 1p", target: 2, unidad: "unidad", original: "frazada 1p x2" }
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
        { item: "cuchillo", target: 5, unidad: "unidad", original: "cuchillo x5" },
        { item: "tenedor", target: 5, unidad: "unidad", original: "tenedor x5" },
        { item: "cucharita", target: 5, unidad: "unidad", original: "cucharita x5" },
        { item: "cuchara", target: 5, unidad: "unidad", original: "cuchara x5" },
        { item: "plato playo", target: 5, unidad: "unidad", original: "plato playo x5" },
        { item: "plato mediano", target: 5, unidad: "unidad", original: "plato mediano x5" },
        { item: "plato hondo", target: 5, unidad: "unidad", original: "plato hondo x5" },
        { item: "platito café", target: 5, unidad: "unidad", original: "platito café x 5" },
        { item: "compotera postre", target: 5, unidad: "unidad", original: "compotera postre x5" },
        { item: "vaso común", target: 5, unidad: "unidad", original: "vaso comun x5" },
        { item: "copa de agua", target: 5, unidad: "unidad", original: "copa de agua x5" },
        { item: "copa de vino", target: 5, unidad: "unidad", original: "copa de vino x5" },
        { item: "taza café", target: 5, unidad: "unidad", original: "taza café x5" },
        { item: "pocillo", target: 5, unidad: "unidad", original: "pocillo x 5" },

        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },

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
        { item: "tarro de vidrio", target: 2, unidad: "unidad", original: "tarro vidrio x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente horno" },
        { item: "bowl plástico", target: 1, unidad: "unidad", original: "bowl plastico" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "hielera", target: 1, unidad: "unidad", original: "hielera" },
        { item: "tabla de madera", target: 1, unidad: "unidad", original: "tabla de madera" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla pizzera de madera", target: 1, unidad: "unidad", original: "tabla pizera madera" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca platos" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },

        // 🪑 Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" },
        { item: "sillón individual", target: 2, unidad: "unidad", original: "sillon individual x2" },
        { item: "barra de madera con banquetas", target: 1, unidad: "conjunto", original: "barra madera con 2 banqueta" },
        { item: "cuadros", target: 6, unidad: "unidad", original: "cuadros x6" },
        { item: "llavero de pared", target: 1, unidad: "unidad", original: "llavero pared" },
        { item: "reloj", target: 1, unidad: "unidad", original: "reloj" }
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
        { item: "tv (Noblex smart + Panasonic)", target: 2, unidad: "unidad", original: "tv x2 noblex smart - panasonic" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 home-hisense-nex" },
        { item: "calefactor", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "secador de pelo Gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "tostadora Atma", target: 1, unidad: "unidad", original: "tosta dora atma" },
        { item: "jarra Philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "extractor Stell Home", target: 1, unidad: "unidad", original: "estractor stell home" },
        { item: "luz de emergencia", target: 1, unidad: "unidad", original: "luz emergencia funciona" },
        { item: "microondas Noblex (perilla rota)", target: 1, unidad: "unidad", original: "microondas noblex perilla rota" },
        { item: "cocina Okey", target: 1, unidad: "unidad", original: "cocina okey" },
        { item: "plancha", target: 1, unidad: "unidad", original: "plancha" },
        { item: "heladera Patrick", target: 1, unidad: "unidad", original: "heladera patrick" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
          { item: "frazada 2p", target: 2, unidad: "unidad", original: "frazada 2p x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz x1" },
          { item: "veladores", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: NO"
    },

    baño: { items: [] },

    exterior: {
      // Items del “PATIO” de la planilla
      items: [
        { item: "parrilla", target: 2, unidad: "unidad", original: "parrilla (figura dos veces: 'parrilla' y 'parrilla' en patio)" },
        { item: "mesa 6 sillas (patio)", target: 1, unidad: "conjunto", original: "mesa 6 sillas (patio)" },
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
      nota: "Observaciones: No contiene hidromasaje ❌"
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
        { item: "taza de café", target: 4, unidad: "unidad", original: "taza de café x4" },
        { item: "pocillo de café", target: 4, unidad: "unidad", original: "pocillo café x4" },

        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },

        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pisa puré", target: 1, unidad: "unidad", original: "pisa pure" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "colador", target: 1, unidad: "unidad", original: "colador" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "espumadera de acero", target: 1, unidad: "unidad", original: "espumadera acero" },
        { item: "cucharón plástico", target: 1, unidad: "unidad", original: "cucharon plastico" },
        { item: "espumadera plástica", target: 1, unidad: "unidad", original: "espumadera plastica" },
        { item: "pava común", target: 1, unidad: "unidad", original: "pava comun" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente de loza", target: 1, unidad: "unidad", original: "fuente de losa" },
        { item: "bandeja cuadrada de acero", target: 1, unidad: "unidad", original: "bandeja cuadrada acero" },
        { item: "escurridor de pastas (acero)", target: 1, unidad: "unidad", original: "escurridor pastas acero" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tostadora manual", target: 1, unidad: "unidad", original: "tostadora manual" },
        { item: "tabla de picar (madera, cuadrada)", target: 1, unidad: "unidad", original: "tabla picar madera cuadrada x1" },
        { item: "tabla redonda de madera", target: 1, unidad: "unidad", original: "tabla redonda madera" },
        { item: "bandeja de horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizzera", target: 1, unidad: "unidad", original: "pizera" },

        // 🪑 Living - Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "juego living madera", target: 1, unidad: "conjunto", original: "juego living madera" },
        { item: "sillón 2 cuerpos + 2 sillones", target: 1, unidad: "conjunto", original: "sillon 2 cuerpos + 2 sillones" },
        { item: "llavero pared", target: 1, unidad: "unidad", original: "llavero pared" },
        { item: "cuadros", target: 6, unidad: "unidad", original: "cuadros x6" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera Gafa", target: 1, unidad: "unidad", original: "heladera gafa" },
        { item: "extractor Spar", target: 1, unidad: "unidad", original: "estractor spar" },
        { item: "microondas Kelvinator", target: 1, unidad: "unidad", original: "microondas kelvinator" },
        { item: "cocina Florencia", target: 1, unidad: "unidad", original: "cocina florencia" },
        { item: "jarra Peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "luz de emergencia (no funciona)", target: 1, unidad: "unidad", original: "luz emergencia no funciona" },
        { item: "tv Samsung común", target: 1, unidad: "unidad", original: "tv samsung comun" },
        { item: "calefactor", target: 3, unidad: "unidad", original: "calefactor x3" },
        { item: "secador de pelo Oster", target: 1, unidad: "unidad", original: "secador de pelo oster" },
        { item: "ventilador de techo", target: 3, unidad: "unidad", original: "ventilador de techo x3" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa luz x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "espejo", target: 1, unidad: "unidad", original: "espejo" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2p x1" },
          { item: "perchas", target: 6, unidad: "unidad", original: "perchas x6" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "banco", target: 1, unidad: "unidad", original: "banco" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1p x3" },
          { item: "perchas", target: 4, unidad: "unidad", original: "percha x4" }
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
      // Ítems del PATIO (columna derecha)
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinza" },
        { item: "juego de patio (madera)", target: 1, unidad: "conjunto", original: "juego de patio en madera" },
        { item: "mesa + 2 sillones", target: 1, unidad: "conjunto", original: "mesa + 2 sillones" },
        { item: "sillón 2 cuerpos (patio)", target: 1, unidad: "unidad", original: "sillon 2 cuerpos" }
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
        { item: "bandeja de acero", target: 3, unidad: "unidad", original: "bandeja acero x3" },
        { item: "ensaladera de acero", target: 2, unidad: "unidad", original: "ensaladera acero x2" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "pisa papa (teflón)", target: 1, unidad: "unidad", original: "pisa papa teflon" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "bandeja de horno", target: 2, unidad: "unidad", original: "bandeja de horno x2" },
        { item: "pizzera enlozada", target: 1, unidad: "unidad", original: "pizera enlosada" },
        { item: "pisera de acero", target: 1, unidad: "unidad", original: "pisera acero" },
        { item: "fuente mediana", target: 1, unidad: "unidad", original: "fuente medriana" },
        { item: "ensaladera de vidrio", target: 2, unidad: "unidad", original: "ensaladera vidrio x2" },
        { item: "tabla de madera", target: 3, unidad: "unidad", original: "tabla madera x3" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "bowl blanco (cuadrado)", target: 1, unidad: "unidad", original: "bowls blanco cuadrado" },
        { item: "bowl redondo", target: 1, unidad: "unidad", original: "bowls redondo" },
        { item: "bandeja de melamina", target: 1, unidad: "unidad", original: "bandeja melamina" },
        { item: "jarra de vidrio", target: 1, unidad: "unidad", original: "jarra vidrio" },
        { item: "frapera acrílica", target: 1, unidad: "unidad", original: "frapera acrilico" },
        { item: "cuchilla", target: 2, unidad: "unidad", original: "cuchilla x2" },
        { item: "tenedor pinche para asado", target: 1, unidad: "unidad", original: "tenedor pinche asado" },
        { item: "rompe nueces", target: 1, unidad: "unidad", original: "rompe nueces" },
        { item: "cuchara de madera", target: 1, unidad: "unidad", original: "cuchara madera" },

// Utensilios de teflón
        { item: "cuchara espagueti de teflón", target: 1, unidad: "unidad", original: "teflon: cuchara espagueti" },
        { item: "cucharón de teflón", target: 1, unidad: "unidad", original: "teflon: cucharon" },
        { item: "espátula de teflón", target: 2, unidad: "unidad", original: "teflon: espatula x2" },


        // 🪑 Living–Comedor (incluido en cocina)
        { item: "mesa de vidrio 8 sillas", target: 1, unidad: "conjunto", original: "mesa vidrio 8 sillas" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "sillon de 3 cuerpo x1" },
        { item: "sillón cubo", target: 2, unidad: "unidad", original: "sillon cubo x2" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadros", target: 4, unidad: "unidad", original: "cuadros x4" },
        { item: "reloj de pared", target: 1, unidad: "unidad", original: "reloj pared" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera Drean", target: 1, unidad: "unidad", original: "HELADERA DREAN" },
        { item: "cocina Escorial", target: 1, unidad: "unidad", original: "cocina escorial" },
        { item: "microondas RCA", target: 1, unidad: "unidad", original: "microondas rca" },
        { item: "extractor", target: 1, unidad: "unidad", original: "estractor" },
        { item: "tostadora Atma", target: 1, unidad: "unidad", original: "tostadora atma" },
        { item: "licuadora Liliana", target: 1, unidad: "unidad", original: "licuadora liliana" },
        { item: "jarra Aurora", target: 1, unidad: "unidad", original: "jarra aurora" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionado x2 conqueror y philco" },
        { item: "tv Hisense", target: 2, unidad: "unidad", original: "tv x2 hisense" },
        { item: "secador de pelo Philips", target: 1, unidad: "unidad", original: "secador de pelo philips" },
        { item: "radiadores", target: 7, unidad: "unidad", original: "radiadores x7- toayeros x2" },
        { item: "toalleros", target: 2, unidad: "unidad", original: "toayeros x2" },
        { item: "ventiladores de techo", target: 2, unidad: "unidad", original: "ventiladores de techo x2" },
        { item: "plancha Philips", target: 1, unidad: "unidad", original: "plancha philips" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "frazada 2p", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "forro para acolchado 2p", target: 2, unidad: "unidad", original: "forro para acolchado 2P x2" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazada 1p", target: 3, unidad: "unidad", original: "frazada 1P x3" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "acolchado naranja 1p", target: 2, unidad: "unidad", original: "acolchado naranja 1P x2" },
          { item: "frazada 2p", target: 3, unidad: "unidad", original: "frazada 2P x3" },
          { item: "frazada 1p", target: 1, unidad: "unidad", original: "frazada 1P" },
          { item: "acolchado rojo 2p", target: 2, unidad: "unidad", original: "acolcharo rojo 2P x2" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
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
      // Ítems de patio
      items: [
        { item: "parrilla", target: 2, unidad: "unidad", original: "parrilla (aparece dos veces)" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atiszador" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "8 sillas (patio)", target: 1, unidad: "conjunto", original: "8 sillas" },
        { item: "mesa (patio)", target: 1, unidad: "unidad", original: "mesa" },
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
        { item: "pocillo", target: 8, unidad: "unidad", original: "pocillo x8" },

        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 3, unidad: "unidad", original: "olla x3" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "bandeja de acero (platina)", target: 3, unidad: "unidad", original: "bandeja acero platina x3" },
        { item: "ensaladera de acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },

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

        { item: "pizzera", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "seca platos", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "fuente de acero ovalada", target: 2, unidad: "unidad", original: "fuente acero ovalada x2" },
        { item: "escurridor de pasta", target: 1, unidad: "unidad", original: "escurridor pasta" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "tabla de picar (madera)", target: 4, unidad: "unidad", original: "tabla picar madera x4" },
        { item: "tabla de picar (plástica)", target: 1, unidad: "unidad", original: "tabla picar plastica" },
        { item: "azucarera de acero", target: 1, unidad: "unidad", original: "azucarera acero" },
        { item: "bowl plástico blanco", target: 1, unidad: "unidad", original: "bowl plastico blanco" },
        { item: "escurridor de verduras", target: 1, unidad: "unidad", original: "escurridor de verduras" },

        // 🪑 Living–Comedor (incluido en cocina)
        { item: "mesa 8 sillas", target: 1, unidad: "conjunto", original: "mesa  8 sillas" },
        { item: "sillón en L", target: 1, unidad: "unidad", original: "sillon en L" },
        { item: "mesita", target: 1, unidad: "unidad", original: "mesita" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "tv smart (Hisense + TCL)", target: 2, unidad: "unidad", original: "tvx2 hisense smart- tcl smart" },
        { item: "aire acondicionado (Noblex + Philco)", target: 2, unidad: "unidad", original: "aire acondicionado x2 noblex y philco" },
        { item: "heladera Electrolux", target: 1, unidad: "unidad", original: "heladera electrolux" },
        { item: "microondas Whirlpool", target: 1, unidad: "unidad", original: "microondas wirlpool" },
        { item: "secador de pelo Gama", target: 2, unidad: "unidad", original: "secador de pelo gama x2" },
        { item: "cafetera Eiffel", target: 1, unidad: "unidad", original: "cafetera eiffel" },
        { item: "jarra Electrolux", target: 1, unidad: "unidad", original: "jarra electrolux" },
        { item: "tostadora Ultracomb", target: 1, unidad: "unidad", original: "tostadora Ultracomb" },
        { item: "licuadora s/n", target: 1, unidad: "unidad", original: "licuadora s/n" },
        { item: "extractor de jugo Eiffel", target: 1, unidad: "unidad", original: "estractor de jugo eiffel" },
        { item: "minipimer Eiffel", target: 1, unidad: "unidad", original: "minipimer eiffel" },
        { item: "extractor Ecoclima", target: 1, unidad: "unidad", original: "estractor ecoclima" },
        { item: "ventiladores de techo", target: 5, unidad: "unidad", original: "ventiladores de techox5" },
        { item: "radiadores", target: 6, unidad: "unidad", original: "radiadores x6 - toayeros x2" },
        { item: "toalleros", target: 2, unidad: "unidad", original: "toayeros x2" },
        { item: "plancha Eiffel", target: 1, unidad: "unidad", original: "plancha eiffel" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2P" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "veladores", target: 2, unidad: "unidad", original: "veladores x2" },
          { item: "mesa de madera", target: 1, unidad: "unidad", original: "mesa madera" },
          { item: "colcha 2P", target: 1, unidad: "unidad", original: "colcha 2P" },
          { item: "frazada 2P", target: 1, unidad: "unidad", original: "frazada 2P" },
          { item: "perchas", target: 8, unidad: "unidad", original: "perchas x8" }
        ]
      },
      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1 P x3" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "colcha 1P", target: 3, unidad: "unidad", original: "colcha 1P x3" },
          { item: "frazada 1P", target: 3, unidad: "unidad", original: "frazada 1P x3" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x 7" }
        ]
      },
      simple_2: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "velador", target: 1, unidad: "unidad", original: "veladores x1" },
          { item: "mesa de luz", target: 2, unidad: "unidad", original: "mesa de luz x2" },
          { item: "frazada 1P", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "colcha 1P", target: 3, unidad: "unidad", original: "colcha 1P x3" },
          { item: "perchas plásticas", target: 6, unidad: "unidad", original: "perchas plasticas x6" }
        ]
      },
      nota: "A tener en cuenta: Separación de camas: NO | Unión de camas: SI"
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
      // Ítems del patio
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla " },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "sillón de 2 cuerpos (madera)", target: 1, unidad: "unidad", original: "sillon de 2 cuerpos en madera" },
        { item: "juego de mesa", target: 1, unidad: "unidad", original: "juego mesa" },
        { item: "sillones", target: 2, unidad: "unidad", original: "sillones x2" },
        { item: "mesa", target: 2, unidad: "unidad", original: "mesa x2" },
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
          { item: "cuchillo", target: 7, unidad: "unidad", original: "cuchillo x7" },
          { item: "tenedor", target: 7, unidad: "unidad", original: "tenedor x7" },
          { item: "cucharita", target: 7, unidad: "unidad", original: "cucharita x7" },
          { item: "cuchara", target: 7, unidad: "unidad", original: "cuchara x7" },
          { item: "plato playo", target: 7, unidad: "unidad", original: "plato playo x7" },
          { item: "plato mediano", target: 7, unidad: "unidad", original: "plato mediano x7" },
          { item: "plato hondo", target: 7, unidad: "unidad", original: "plato hondo x7" },
          { item: "platito café", target: 7, unidad: "unidad", original: "platito café x7" },
          { item: "compotera postre", target: 7, unidad: "unidad", original: "compotera postre x7" },
          { item: "compotera melamina", target: 7, unidad: "unidad", original: "compotera melamina x7" },
          { item: "vaso común", target: 7, unidad: "unidad", original: "vaso común x7" },
          { item: "copa de agua", target: 7, unidad: "unidad", original: "copa de agua x7" },
          { item: "copa de vino", target: 7, unidad: "unidad", original: "copa de vino x7" },
          { item: "copa champagne", target: 7, unidad: "unidad", original: "copa champagne x7" },
          { item: "taza café", target: 7, unidad: "unidad", original: "taza café x7" },
          { item: "sartén", target: 3, unidad: "unidad", original: "sarten x3" },
          { item: "olla", target: 4, unidad: "unidad", original: "olla x4" },
          { item: "olla con mango", target: 2, unidad: "unidad", original: "olla con mango x2" },
          { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
          { item: "bandeja acero platinas", target: 3, unidad: "unidad", original: "bandeja acero platinas x3" },
          { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
          { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
          { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },{ item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
          { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
          { item: "espumadera teflon", target: 1, unidad: "unidad", original: "espumadera teflon" },
          { item: "espátula teflon", target: 1, unidad: "unidad", original: "espatula teflon" },
          { item: "cucharón teflon", target: 1, unidad: "unidad", original: "cucharon teflon" },
          { item: "hamburguesera acero", target: 1, unidad: "unidad", original: "hamburguesera acero" },
          { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
          { item: "cuchilla y tenedor cabo blanco", target: 1, unidad: "juego", original: "cuchilla + tenedor cabo blanco" },
          { item: "tabla madera", target: 1, unidad: "unidad", original: "tabla madera" },
          { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
          { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
          { item: "vaso medidor", target: 2, unidad: "unidad", original: "vaso medidor x2" },
          { item: "fuente redonda vidrio", target: 1, unidad: "unidad", original: "fuente redonda de vidrio" },
          { item: "escurridor", target: 1, unidad: "unidad", original: "escurridor" },
          { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
          { item: "ensaladera melamina", target: 2, unidad: "unidad", original: "ensaladera melamina x2" },
          { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
          { item: "pizera", target: 2, unidad: "unidad", original: "pizera x2" },

        // 🪑 Living-Cocina
        { item: "mesa 8 sillas", target: 1, unidad: "unidad", original: "mesa 8 sillas" },
        { item: "sillón 3 cuerpos", target: 1, unidad: "unidad", original: "sillon 3 cuerpos" },
        { item: "banqueta", target: 2, unidad: "unidad", original: "banqueta x2" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "mueble tv", target: 1, unidad: "unidad", original: "mueble tv" },
        { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
        { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" },
        { item: "jarrón grande", target: 2, unidad: "unidad", original: "jarron grande x2" },
        { item: "adornos", target: 6, unidad: "unidad", original: "adornos x6" }
      ]
    },

    electrodomesticos: {
      items: [
        { item: "heladera koinor", target: 1, unidad: "unidad", original: "heladera koinor" },
        { item: "cocina industrial", target: 1, unidad: "unidad", original: "cocina industrial" },
        { item: "microondas atma", target: 1, unidad: "unidad", original: "microondas atma" },
        { item: "extractor", target: 1, unidad: "unidad", original: "extractor" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "minipimer electrolux", target: 1, unidad: "unidad", original: "minipimer electrolux" },
        { item: "tv smart", target: 4, unidad: "unidad", original: "tv x4 lgx3 philips todos smart" },
        { item: "aire acondicionado", target: 4, unidad: "unidad", original: "aire acondicionados x4 hisense bgh blueskik2" },
        { item: "radiadores", target: 10, unidad: "unidad", original: "radiadores x10" },
        { item: "ventilador de pie", target: 1, unidad: "unidad", original: "ventilador de pie atma" },
        { item: "jarra peabody", target: 1, unidad: "unidad", original: "jarra peabody" },
        { item: "secador de pelo nova", target: 1, unidad: "unidad", original: "secador de pelo nova" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "lavarropas drean", target: 1, unidad: "unidad", original: "lavarropas drean" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas", target: 1, unidad: "unidad", original: "cama 2p" },
          { item: "mesa de luz empotrada", target: 2, unidad: "unidad", original: "mesa de luz empotrada x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" },
          { item: "frazadas 2p", target: 1, unidad: "unidad", original: "frazadas 2p x1" },
          { item: "porta llavero", target: 1, unidad: "unidad", original: "porta llavero" },
          { item: "caja fuerte", target: 1, unidad: "unidad", original: "caja fuerte" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 1, unidad: "unidad", original: "cama 1p x1" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "frazada 1p", target: 2, unidad: "unidad", original: "frazada 1p x2" },
          { item: "mueble tv empotrado", target: 1, unidad: "unidad", original: "mueble tv empotrado" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      },

      simple_2: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesitas de luz", target: 2, unidad: "unidad", original: "mesitas de luz x2" },
          { item: "velador", target: 2, unidad: "unidad", original: "velador x2" },
          { item: "cuadros", target: 3, unidad: "unidad", original: "cuadros x3" },
          { item: "frazadas 1p", target: 3, unidad: "unidad", original: "frazadas de 1p x3" },
          { item: "perchas", target: 7, unidad: "unidad", original: "perchas x7" }
        ]
      }
    },

    baño: {
      items: [],

      lavadero: {
        items: [
          { item: "pileta", target: 1, unidad: "unidad", original: "pileta" },
          { item: "lavarropas", target: 1, unidad: "unidad", original: "lavarropas" },
          { item: "ventilador de pie", target: 1, unidad: "unidad", original: "ventilador de pie" },
          { item: "sillas plásticas", target: 7, unidad: "unidad", original: "sillas plásticas x7" },
          { item: "tender", target: 1, unidad: "unidad", original: "tender" }
        ]
      }
    },

    exterior: {
      items: [
        { item: "parrilla", target: 1, unidad: "unidad", original: "parrilla" },
        { item: "bracero", target: 1, unidad: "unidad", original: "bracero" },
        { item: "palita", target: 1, unidad: "unidad", original: "palita" },
        { item: "atisador", target: 1, unidad: "unidad", original: "atisador" },
        { item: "pinza", target: 1, unidad: "unidad", original: "pinsa" },
        { item: "mesa madera", target: 1, unidad: "unidad", original: "mesa madera" },
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
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango x1" },
        { item: "fuente acero", target: 1, unidad: "unidad", original: "fuente acero" },
        { item: "bandeja acero platina", target: 3, unidad: "unidad", original: "bandeja acero PLATINA x3" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "saca corcho", target: 1, unidad: "unidad", original: "saca corcho" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "bombilla mate", target: 1, unidad: "unidad", original: "bombilla mate" },
        { item: "cuchilla y chaira", target: 1, unidad: "juego", original: "cuchilla + chaira" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "batidor acero", target: 1, unidad: "unidad", original: "batidor acero" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "teflón (cucharón, espátula, espumadera)", target: 5, unidad: "unidad", original: "teflon x5 cucharon espatula" },
        { item: "cuchara espagueti y espumadera", target: 1, unidad: "unidad", original: "cuchara espagueti espumadera" },
        { item: "palo amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "set cuchillo y tenedor asado", target: 1, unidad: "juego", original: "set cuchillo tenedor asado" },
        { item: "posa pava", target: 2, unidad: "unidad", original: "posa pava x2" },
        { item: "panera", target: 1, unidad: "unidad", original: "panera" },
        { item: "pava acero", target: 1, unidad: "unidad", original: "pava acero" },
        { item: "tabla asado", target: 4, unidad: "unidad", original: "tabla asado x4" },
        { item: "tabla picar madera", target: 1, unidad: "unidad", original: "tabla picar madera" },
        { item: "colador de pasta", target: 1, unidad: "unidad", original: "colador de pasta" },
        { item: "jarro hervidor", target: 1, unidad: "unidad", original: "jarro hervidor" },
        { item: "seca plato", target: 1, unidad: "unidad", original: "seca plato" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "sartén enlosado", target: 1, unidad: "unidad", original: "sarten enlosado" },
        { item: "fuente de horno", target: 1, unidad: "unidad", original: "fuente de horno" },
        { item: "pizera", target: 2, unidad: "unidad", original: "pizera x2" },
        { item: "jarro hervidor grande", target: 1, unidad: "unidad", original: "JARRO HERVIDOR" },
        { item: "mantel cuerina", target: 1, unidad: "unidad", original: "MANTEL CUERINA" },

        // 🪑 Living-Cocina
        { item: "mesa 6 sillas", target: 1, unidad: "unidad", original: "mesa 6 sillas" },
        { item: "sillón simple matero", target: 2, unidad: "unidad", original: "sillon simple x2 matero" },
        { item: "sillón de 2 cuerpos", target: 1, unidad: "unidad", original: "sillonde de 2 cuerpos" },
        { item: "almohadones rojos", target: 5, unidad: "unidad", original: "almohadones rojos x5" },
        { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" },
        { item: "porta llaves", target: 1, unidad: "unidad", original: "porta llaves" },
        { item: "canasta centro de mesa", target: 1, unidad: "unidad", original: "canasta centro de mesa caminitos" },
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
        { item: "juguera liliana", target: 1, unidad: "unidad", original: "juguetra liliana" },
        { item: "tostadora liliana", target: 1, unidad: "unidad", original: "tostadora liliana" },
        { item: "calefactores", target: 3, unidad: "unidad", original: "calefactores x3" },
        { item: "secador de pelo gama", target: 1, unidad: "unidad", original: "secador de pelo gama" },
        { item: "tv smart", target: 3, unidad: "unidad", original: "tv x3 smart philco toshiba lg" },
        { item: "aire acondicionado", target: 3, unidad: "unidad", original: "aire acondicionado x3 philco kelvinator rca" }
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
          { item: "cubrecama 2p", target: 3, unidad: "unidad", original: "cubrecama 2p x3" },
          { item: "perchas madera", target: 1, unidad: "unidad", original: "perchas de madera" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 2, unidad: "unidad", original: "cama 1p x2" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa luz" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador" },
          { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
          { item: "mesa ratona", target: 1, unidad: "unidad", original: "mesa ratona" },
          { item: "almohadones", target: 2, unidad: "unidad", original: "almohadones x2" },
          { item: "frazadas 1p", target: 4, unidad: "unidad", original: "frazadas 1p x4" },
          { item: "cubrecama invierno", target: 2, unidad: "unidad", original: "cubrecama invierno x2" },
          { item: "cubrecama verano", target: 2, unidad: "unidad", original: "cubrecama verano x2" },
          { item: "perchas", target: 5, unidad: "unidad", original: "perchas x5" }
        ]
      }
    },

    baño: {
      items: [
        { item: "bañera con hidromasaje", target: 1, unidad: "unidad", original: "banera con hidro" }
      ]
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
        { item: "cuchillo", target: 4, unidad: "unidad", original: "cuchillo x4" },
        { item: "tenedor", target: 4, unidad: "unidad", original: "tenedor x4" },
        { item: "cucharita", target: 4, unidad: "unidad", original: "cucharita x4" },
        { item: "cuchara", target: 4, unidad: "unidad", original: "cuchara x4" },
        { item: "plato playo", target: 4, unidad: "unidad", original: "plato playo x4" },
        { item: "plato mediano", target: 4, unidad: "unidad", original: "plato mediano x4" },
        { item: "plato hondo", target: 4, unidad: "unidad", original: "plato hondo x4" },
        { item: "platito café", target: 4, unidad: "unidad", original: "platito café x4" },
        { item: "compotera postre", target: 4, unidad: "unidad", original: "compotera postre x4" },
        { item: "vaso común", target: 4, unidad: "unidad", original: "vaso común x4 dos de cada uno" },
        { item: "copa de agua", target: 4, unidad: "unidad", original: "copa de agua x4" },
        { item: "copa de vino", target: 4, unidad: "unidad", original: "copa de vino x4" },
        { item: "copa champagne", target: 4, unidad: "unidad", original: "copa champagne x4" },
        { item: "pocillo", target: 4, unidad: "unidad", original: "pocillo x4" },
        { item: "taza café", target: 4, unidad: "unidad", original: "taza café x4" },
        { item: "sartén", target: 2, unidad: "unidad", original: "sarten x2" },
        { item: "olla", target: 2, unidad: "unidad", original: "olla x2" },
        { item: "olla con mango", target: 1, unidad: "unidad", original: "olla con mango" },
        { item: "ensaladera acero", target: 3, unidad: "unidad", original: "ensaladera acero x3" },
        { item: "bandeja acero", target: 2, unidad: "unidad", original: "bandeja acero x2" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "pela papa", target: 1, unidad: "unidad", original: "pela papa" },
        { item: "abre lata", target: 1, unidad: "unidad", original: "abre lata" },
        { item: "pisa papa", target: 1, unidad: "unidad", original: "pisa papa" },
        { item: "taza de té", target: 4, unidad: "unidad", original: "taza de té x4" },
        { item: "compotera vidrio", target: 4, unidad: "unidad", original: "compotera vidrio x4" },
        { item: "cuchilla", target: 1, unidad: "unidad", original: "cuchilla" },
        { item: "cuchara para espagueti", target: 1, unidad: "unidad", original: "cuchara para espagueti" },
        { item: "cucharón", target: 1, unidad: "unidad", original: "cucharon" },
        { item: "espumadera", target: 1, unidad: "unidad", original: "espumadera" },
        { item: "cuchara", target: 1, unidad: "unidad", original: "cuchara" },
        { item: "cuchara madera", target: 1, unidad: "unidad", original: "cuchara madera" },
        { item: "palo amasar", target: 1, unidad: "unidad", original: "palo amasar" },
        { item: "tenedor para asado", target: 1, unidad: "unidad", original: "tenedor para asado" },
        { item: "bandeja horno", target: 1, unidad: "unidad", original: "bandeja horno" },
        { item: "pizera", target: 1, unidad: "unidad", original: "pizera" },
        { item: "bifera", target: 1, unidad: "unidad", original: "bifera" },
        { item: "colador de pastas", target: 2, unidad: "unidad", original: "colador de pastas x2" },
        { item: "rayador", target: 1, unidad: "unidad", original: "rayador" },
        { item: "jarra plástica", target: 1, unidad: "unidad", original: "jarra plastica" },
        { item: "extractor jugo acero", target: 1, unidad: "unidad", original: "extractor jugo acero" },
        { item: "paberas", target: 2, unidad: "unidad", original: "paberas x2" },
        { item: "tabla madera", target: 1, unidad: "unidad", original: "tablamadera" },
        { item: "tostador de cocina", target: 1, unidad: "unidad", original: "tostador de cocina" },

        // 🪑 Living-Cocina
        { item: "mesa vidrio 6 sillas", target: 1, unidad: "unidad", original: "mesa vidrio 6 sillas" },
        { item: "sillón 2 cuerpos", target: 1, unidad: "unidad", original: "sillon 2 cuerpos x1" },
        { item: "mesita con vidrio", target: 1, unidad: "unidad", original: "mesita con vidrio" },
        { item: "mesa tv", target: 1, unidad: "unidad", original: "mesa tv" },
        { item: "banquetas", target: 2, unidad: "unidad", original: "banquetas x2" },
        { item: "reloj colgante", target: 1, unidad: "unidad", original: "reloj colgante" },
        { item: "cuadro", target: 1, unidad: "unidad", original: "cuadro" },
        { item: "adornos varios", target: 1, unidad: "unidad", original: "adornos varios" }
      ],

      
    },

    electrodomesticos: {
      items: [
        { item: "heladera bochs", target: 1, unidad: "unidad", original: "heladera bochs" },
        { item: "microondas electrolux", target: 1, unidad: "unidad", original: "microondas electrolux" },
        { item: "cocina patrick", target: 1, unidad: "unidad", original: "cocina patrick" },
        { item: "tostadora ultracomb", target: 1, unidad: "unidad", original: "tostadora ultracomb" },
        { item: "jarra philips", target: 1, unidad: "unidad", original: "jarra philips" },
        { item: "aire acondicionado", target: 2, unidad: "unidad", original: "aire acondicionados x2 TCL" },
        { item: "calefactores", target: 4, unidad: "unidad", original: "calefactores x4" },
        { item: "tv smarth", target: 2, unidad: "unidad", original: "tv x2 bgh y rca smarth" },
        { item: "termotanque", target: 1, unidad: "unidad", original: "termotanque" },
        { item: "secador de pelo remington", target: 1, unidad: "unidad", original: "secador de pelo remington" },
        { item: "ventilador de techo", target: 2, unidad: "unidad", original: "ventilador de techo x2" },
        { item: "lavarropas drean", target: 1, unidad: "unidad", original: "lavarropas drean" },
        { item: "dvd", target: 1, unidad: "unidad", original: "dvd" },
        { item: "lavavajilla no funciona", target: 1, unidad: "unidad", original: "lavavajilla no funciona" }
      ]
    },

    habitaciones: {
      matrimonial: {
        items: [
          { item: "cama 2 plazas grande", target: 1, unidad: "unidad", original: "cama 2p grande" },
          { item: "mesa de luz con vidrio", target: 2, unidad: "unidad", original: "mesa de luz con vidrio x2" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "silla madera", target: 1, unidad: "unidad", original: "silla madera" },
          { item: "cuadros", target: 2, unidad: "unidad", original: "cuadros x2" },
          { item: "frazadas 2 plazas", target: 2, unidad: "unidad", original: "frazadas 2p x2" },
          { item: "cubrecamas 2p", target: 3, unidad: "unidad", original: "cubrecama 2p x3" },
          { item: "perchero de pared", target: 1, unidad: "unidad", original: "perchero de pared" }
        ]
      },

      simple_1: {
        items: [
          { item: "cama 1 plaza", target: 3, unidad: "unidad", original: "cama 1p x3" },
          { item: "mesa de luz", target: 1, unidad: "unidad", original: "mesa de luz x1" },
          { item: "velador", target: 1, unidad: "unidad", original: "velador x1" },
          { item: "silla madera", target: 1, unidad: "unidad", original: "silla madera" },
          { item: "perchero pared", target: 1, unidad: "unidad", original: "perchero pared" },
          { item: "frazada 1p", target: 4, unidad: "unidad", original: "frazada 1p x4" },
          { item: "cubrecamas invierno", target: 2, unidad: "unidad", original: "cubrecamas x2 invierno" },
          { item: "espejos", target: 2, unidad: "unidad", original: "espejos x2" }
        ]
      },
      planta_alta: {
        items: [
          { item: "sillón matero", target: 2, unidad: "unidad", original: "sillón matero x2" },
          { item: "sillón simple madera 2 cuerpos", target: 1, unidad: "unidad", original: "sillón simple madera 2 cuerpos" },
          { item: "mesa cuadrada vidrio", target: 1, unidad: "unidad", original: "mesa cuadrada vidrio" },
          { item: "alfombra beige", target: 1, unidad: "unidad", original: "alfombra beige" }
        ]
      }
      
    },

    baño: {
      items: [
        // (no se listaron ítems específicos en el Excel)
      ],

      lavadero: {
        items: [
          { item: "lavarropas", target: 1, unidad: "unidad", original: "lavarropas" }
        ]
      }
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

      simple_i: {
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
    simple_2: "HABITACIÓN SIMPLE 2",
    planta_alta: "PLANTA ALTA 🪜",
    lavadero: "LAVADERO 🧺",
    suite: "SUITE 🛁",
    patio: "PATIO 🌞",
    patio_interno: "PATIO INTERNO 🏡"
  };

  return sections.map(s => {
    const title = LABEL[s.sector] || s.sector.toUpperCase();
    let sectionText = `*${title}*\n${formatItems(s.items)}`;
    if (s.nota) {
      sectionText += `\n\n*NOTA:*\n${s.nota}`;
    }
    return sectionText;
  }).join("\n\n");
};

/* ---------- Encabezados por ambiente ---------- */
const AMB_LABEL = {
  habitaciones: { title: "HABITACIÓN", icon: "🛏️" },
  baño: { title: "BAÑO", icon: "🚿" },
  cocina: { title: "COCINA", icon: "🍳" },
  comedor: { title: "COMEDOR", icon: "🍽️" },
  exterior: { title: "EXTERIOR", icon: "🌿" },
  electrodomesticos: { title: "ELECTRODOMÉSTICOS", icon: "🔌" },
  lavadero: { title: "LAVADERO", icon: "🧺" }
};

// ✅ versión definitiva sin agregar “Cabaña” si no está
const headerFor = (idCab, ambCanon) => {
  const meta = AMB_LABEL[ambCanon] || { title: ambCanon.toUpperCase(), icon: "" };
  const icon = meta.icon ? ` ${meta.icon}` : "";
  const clean = idCab.trim();
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

  // 🔹 Si el ambiente tiene ítems directos
  if (Array.isArray(ambData.items)) {
    let items = ambData.items.map(it => ({ ...it }));
    if (onlySmall) items = items.filter(it => isChico(it.item));

    const header = headerFor(cab.id, ambCanon);
    let text = `${header}\n${formatItems(items)}`;

    // 👇 Sub-secciones (lavadero, planta_alta, patio, etc.)
    const subSections = Object.entries(ambData)
      .filter(([key]) => key !== "items" && key !== "nota")
      .map(([sector, obj]) => ({
        sector,
        items: (obj.items || []).filter(it => !onlySmall || isChico(it.item)),
        nota: obj.nota || null
      }));

    if (subSections.length) {
      text += `\n\n${formatSectioned(subSections)}`;
    }

    if (ambData.nota) {
      text += `\n\n*NOTA:*\n${ambData.nota}`;
    }

    return { cab, ambCanon, items, text };
  }

  // 🔹 Si el ambiente tiene solo secciones (habitaciones, exterior, etc.)
  const sections = Object.entries(ambData)
    .filter(([key]) => key !== "nota")
    .map(([sector, obj]) => ({
      sector,
      items: (obj.items || []).filter(it => !onlySmall || isChico(it.item)),
      nota: obj.nota || null
    }));

  const header = headerFor(cab.id, ambCanon);
  let text = `${header}\n\n${formatSectioned(sections)}`;

  if (ambData.nota) {
    text += `\n\n*NOTA:*\n${ambData.nota}`;
  }

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
