const { sqrt, pow } = require('mathjs')

module.exports = {
    main(req, res) {
        return res.json({msg: "Bem Vindo a API, olhe em https://github.com/guimattos1249/calculator-api/blob/master/README.md para saber como utilizar!"})
    },

    somar(req, res) {
        const obj = req.body;

        var total = 0;
        for ( var i = 0; i < obj.values.length; i++ ){
            total += obj.values[i];
        }
        
        return res.json(total);
    },

    subtrair(req, res) {
        const obj = req.body;

        var novoArray = [];
        for(i = 0; i < obj.values.length-1; i++)
            novoArray[i] = obj.values[i+1]- obj.values[i];

        return res.json(novoArray);
    },

    dividir(req, res) {
        const obj = req.body;

        var novoArray = [];
        for(i = 0; i < obj.values.length-1; i++)
            novoArray[i] = obj.values[i+1] / obj.values[i];

        return res.json(novoArray);
    },

    multiplicar(req, res) {
        const obj = req.body;

        var total = 1;
        for ( var i = 0; i < obj.values.length; i++ ){
            total *= obj.values[i];
        }
        
        return res.json(total);
    },

    raizquadrada(req, res) {
        const obj = req.body;

        const newObj = obj.values.map(o => o * o);
        
        return res.json(newObj);
    },

    potencia(req, res) {
        const obj = req.body;

        const newObj = obj.values.map(o => pow(o, o));
        
        return res.json(newObj);
    },

    mediaaritmetica(req, res) {
        const obj = req.body;

        var operacao = 0;
        for ( var i = 0; i < obj.values.length; i++ ){
            operacao += obj.values[i];
        }

        operacao = operacao/obj.values.length;

        return res.json(operacao);
    },

    mediaharmonica(req, res) {
        const obj = req.body;

        var operacao = 0;

        for ( var i = 0; i < obj.values.length; i++ ){
            operacao += (1/obj.values[i]);
        }

        operacao = (3/operacao)
        
        return res.json(operacao);
    },

    moda(req, res) {
        const obj = req.body;


        var vet = obj.values;

        var repeated = [];

        var operacao = vet.filter(function(elemento, i) {
            if (vet.indexOf(elemento) !== i){
                repeated.push(elemento)
            }
            return vet.indexOf(elemento) !== i;
        });

        console.log(operacao)
        return res.json(operacao);
    },
};