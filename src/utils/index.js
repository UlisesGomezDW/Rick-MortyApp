//Función encarga de devolver un arreglo de personajes favoritos
export function saveFavorites(array){
    let favorites = []
    array.forEach(item=>{
        if(item.favorite){
            favorites.push(item)
        }
    })
    localStorage.favorites = JSON.stringify(favorites)
}

//Función encargada de borrar elementos repetidos en un arreglo
export function cleanOneArray(array){
    let arrayNoRepeat = array.filter((item, index, array) => {
        return array.indexOf(item) === index;
    })
    return arrayNoRepeat
}
//Función encargada de borrar elementos repetidos de un grupo de arreglos
export function cleanArrays(array){
    let arrayNoRepeatGrup = []
    array.forEach(item=> {
        let result = cleanOneArray(item)
        arrayNoRepeatGrup.push(result)
    })
    return arrayNoRepeatGrup
}
// Función personalizada para traer las opciones
export function getOptions(data, categories){
    let firstProp = []
    let secondProp = []
    let threeProp = []
    let fourProp = []
    let contentProps = []
    let containerGral = []
    data.forEach(props=>{
        firstProp.push(props.specie)
        secondProp.push(props.status)
        threeProp.push(props.type)
       fourProp.push(props.gender)
    })
    contentProps.push(firstProp, secondProp, threeProp, fourProp)
    let options = cleanArrays(contentProps)
    categories.forEach((category, i)=>{
        containerGral.push({category, options: options[i]})
    })
    return containerGral
}
