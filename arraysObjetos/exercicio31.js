let arr1 = [ 'João', 'Carlos', 'Ryan', 'Igor', 'Pedro', 'Kellmanny', 'Ruan']

let arr2 = [1,2,3,4]

function verificar(arr) {
    if(arr.length >= 5){
        console.log('Muitos elementos')

    }else{
        console.log('Poucos elementos')
    }
}
verificar(arr1)
verificar(arr2)   