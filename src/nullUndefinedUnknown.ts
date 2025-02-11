// NULL( nulo ) - UNDEFINED( indefinido ) - UNKNOWN( desconhecido )

// null - Ausência intencional de valor.
let vNull = null;

// undefined - Variável declarada mas não inicializada.
let vUndefined: string;
//console.log(vUndefined);

// unknown - Tipo desconhecido que requer validação antes do uso (mais seguro que any).
let vUnknown: unknown;

vUnknown = "Teste";
vUnknown = 10;
vUnknown = true;

if (typeof vUnknown === "string") console.log(vUnknown.toUpperCase());
if (typeof vUnknown === "number") console.log(vUnknown * 10);
if (typeof vUnknown === "boolean") console.log(!vUnknown);

