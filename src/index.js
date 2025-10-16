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