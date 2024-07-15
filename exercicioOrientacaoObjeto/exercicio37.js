class Carrinho {
    constructor(itens, qtdTotal, valorTotal) {
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.valorTotal = valorTotal;
    };


    addItem(item) {
        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtdTotal += item.qtdTotal;
                contador = 1;
            }
        }
        if (contador == 0) {
            this.itens.push(item);
        }
        this.qtdTotal += item.qtdTotal;
        this.valorTotal += item.preco * item.qtdTotal;

    }

    removeItem(item) {
        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id });

                this.qtdTotal -= this.itens[itemCarrinho].qtdTotal;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtdTotal;

                this.itens.splice(index, 1);
            }
        }

    }

};

let carrinho = new Carrinho([{
        id: 1,
        nome: "Camisa",
        qtdTotal: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtdTotal: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({ id: 1, nome: "Camisa", qtdTotal: 2, preco: 20 });
console.log(carrinho);

carrinho.addItem({ id: 3, nome: "Boné", qtdTotal: 1, preco: 15 });
console.log(carrinho);

carrinho.removeItem({ id: 1, nome: "Camisa", qtdTotal: 1, preco: 20 });
console.log(carrinho);