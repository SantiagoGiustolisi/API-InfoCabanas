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

  // 👇 Agregá esto al final del bloque habitaciones
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
        ]
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
      }
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
        ]
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
      }
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
        ]
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
      }
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
        ]
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
      }
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
        ]
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
      }
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
        ]
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
      }
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
        ]
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
      }
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
      suite: { items: [] } // no hay datos en la planilla
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
      }
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
      suite: { items: [] } // no hay datos en la planilla
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
      }
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
      suite: { items: [] } // sin datos en planilla
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
      }
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
      suite: { items: [] } // sin datos en la planilla
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
      }
    },

    exterior: {
      items: [] // sin datos en planilla
    }
  }
},

//Sección Indu

{
  id: "Indu",
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
      suite: { items: [] } // sin datos en planilla
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
      }
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
        ]
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
      }
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
        ]
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
      }
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
      }
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
      suite: { items: [] } // no hay ítems de baño listados
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
      }
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
      suite: { items: [] } // no figuran ítems de baño
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
      }
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
      suite: { items: [] } // sin datos en la planilla
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
      }
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
      suite: { items: [] }
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
      }
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
      suite: { items: [] } // no hay ítems de baño listados
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
      }
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
      suite: { items: [] }
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
      }
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
      suite: { items: [] }
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
      }
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