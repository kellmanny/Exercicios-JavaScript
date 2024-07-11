function tipoVariavel(dado){
    if(typeof dado === 'string'){
        console.log(`Está variável é do tipo String`)
    }else if(typeof dado === 'number'){
        console.log(`Está variável é do tipo number`)
    }else if(typeof dado === 'boolean'){
        console.log(`Está variável é do tipo boolean`)
    }    
    console.log(typeof dado)
}


tipoVariavel(true)

tipoVariavel('Meu nome é Kellmanny')

tipoVariavel(3233)