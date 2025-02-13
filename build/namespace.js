"use strict";
var Veiculos;
(function (Veiculos) {
    class Carros {
        marca;
        constructor(marca) {
            this.marca = marca;
        }
    }
    Veiculos.Carros = Carros;
    class Motos {
        marca;
        constructor(marca) {
            this.marca = marca;
        }
    }
})(Veiculos || (Veiculos = {}));
const veiculo1 = new Veiculos.Carros("honda");
console.log(veiculo1);
