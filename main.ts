// SPACE SPEED

// Ejer 1
type tripulante = {
  nombre?: string;
  origen?: string;
  altura: number;
  edad: number;
  peso: number;
  genero: string;
};

// Ejer 2
interface dimensiones {
  alto: number;
  largo: number;
  ancho: number;
}

interface nave {
  peso: number;
  dimension: dimensiones;
  pasajeros: tripulante[];
  velocidad_curvatura: number;
}

// Ejer 3
let enterprise: nave = {
  peso: 23144143,
  dimension: {
    alto: 41,
    largo: 4233,
    ancho: 100,
  },
  pasajeros: [
    { nombre: "Alice", altura: 165, edad: 28, peso: 55, genero: "Femenino" },
    { origen: "Earth", altura: 175, edad: 35, peso: 70, genero: "Masculino" },
    {
      nombre: "Bob",
      origen: "Mars",
      altura: 180,
      edad: 40,
      peso: 80,
      genero: "Masculino",
    },
    { altura: 160, edad: 22, peso: 50, genero: "Femenino" },
    { nombre: "Eve", altura: 170, edad: 32, peso: 60, genero: "Femenino" },
    { origen: "Venus", altura: 185, edad: 45, peso: 90, genero: "Femenino" },
    { altura: 155, edad: 26, peso: 48, genero: "Femenino" },
    { nombre: "Charlie", altura: 178, edad: 38, peso: 75, genero: "Masculino" },
    { origen: "Jupiter", altura: 200, edad: 50, peso: 95, genero: "Masculino" },
    { altura: 163, edad: 30, peso: 58, genero: "Femenino" },
  ],
  velocidad_curvatura: 9843928,
};

// Ejer 4
const numeroTripulantesConNombre = (lista: tripulante[]): number => {
  return lista.reduce(
    (acc: number, curr: tripulante): number =>
      Object.keys(curr).includes("nombre") ? acc + 1 : acc,
    0,
  );
};

const datosTripulantesConNombre = (lista: tripulante[]): void => {
  lista.filter((p: tripulante) => p.nombre ? true : false).forEach(
    (p: tripulante, n: number) => {
      const keys = Object.keys(p);
      const values = Object.values(p);

      console.log(`\nDatos del tripulante ${n}:\n`);

      for (let i = 0; i < keys.length; i++) {
        console.log(`\t${keys[i]}: ${values[i]}`);
      }
    },
  );
};

// console.log("Numero de tripulantes con nombre: " + numeroTripulantesConNombre(enterprise.pasajeros));
// console.log("Datos de los tripulantes con nombre: " + datosTripulantesConNombre(enterprise.pasajeros));

// THE SIDE OF PARDADISE

interface tripulanteYSalud extends tripulante {
  infectado: boolean;
}

const tripulantes2: tripulanteYSalud[] = enterprise.pasajeros.map(
  (pasajero) => {
    return {
      ...pasajero,
      infectado: Math.random() >= 0.5,
    };
  },
);
