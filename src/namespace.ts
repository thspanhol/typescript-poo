namespace Veiculos {

    export class Carros{
        marca: string;
        constructor(marca: string){
            this.marca = marca;
        }
    }

    class Motos{
        marca: string;
        constructor(marca: string){
            this.marca = marca;
        }
    }
}

const veiculo1 = new Veiculos.Carros("honda");

console.log(veiculo1);
