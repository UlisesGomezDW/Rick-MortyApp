import {toast} from 'react-toastify'

//Función encarga de devolver un arreglo filtrado de una búsqueda
export function filterCharacters(characters, filters, search){
  if(search.length === 0){
      return characters
  }
  else {
    if(Object.keys(filters).length > 0){
        let withFilter = characters.filter(({name}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        let result = []
        withFilter.forEach(character=>{
          let name = character.name
          if(JSON.stringify(character)===JSON.stringify(filters)){
            delete character.name
            character.name = name
            result.push(character)
          }else{
            toast.error("Personaje no encontrado.")
          }
        })
        return result
      }
      else {
        return characters.filter(({name}) => name.toLowerCase().indexOf(search.toLowerCase()) > -1)
      }
  }
}


//Función encarga de guardar en el Storage un arreglo de personajes favoritos
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
export function getOptions(data, texts, category){
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
    texts.forEach((text, i)=>{
        containerGral.push({text, options: options[i], category: category[i]})
    })
    return containerGral
}
