"use strict";
let vNull = null;
let vUndefined;
let vUnknown;
vUnknown = "Teste";
vUnknown = 10;
vUnknown = true;
if (typeof vUnknown === "string")
    console.log(vUnknown.toUpperCase());
if (typeof vUnknown === "number")
    console.log(vUnknown * 10);
if (typeof vUnknown === "boolean")
    console.log(!vUnknown);
