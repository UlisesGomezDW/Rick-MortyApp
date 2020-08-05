# Rick and Morty App
Aplicación web que obtiene datos de la API de Rick and Morty

## Experiencia
Durante el transcurso de desarrollo de esta aplicación decidí ponerme algunos retos 🤔. Como por ejemplo, hacer una estilización sin la necesidad de usar algún framework o librería CSS, combinar algunas metodologías y sacar lo mejor de ella para resolver algún problema. En general, la aplicación puede verse fácil... Pero desde un punto de vista analítico hay mucho que considerar. Sin embargo me divertí haciendo esta aplicación, lo importante ante todo es que aprendí algunas cosas más.

## Get Started
Para poder probar la aplicación web puedes ingresar al siguiente link [Demo](https://rickandmorty-b02c4.web.app/).

O bien, sí es de tu agrado puedes clonar el repositorio a tu computadora personal mediante:
```bash
git remote https://github.com/UlisesGomezDW/Rick-MortyApp.git
```

Aclaración: Es importante instalar las dependencias que que utilice para la aplicación. Puedes hacerlo a través de:
```bash
npm install
```

Para poder ejecutar la aplicación en modo desarrollo puedes escribir el siguiente comando.
```bash
npm start
```
## Estructura de archivos
La aplicación tiene la siguiente estructura de carpetas y archivos, cada una fue planeada para presentes y futuros requerimientos:

Siendo ./public la carpeta nativa de React
Dentro de ./src, agrupe los archivos lo más ordenado posible.
- assets: Carpeta cuyo propósito es almacenar los archivos estaticos, iconos y demas.
- components: Carpeta en donde guardo los componentes de la aplicación
- redux: Archivos de la configuración de redux
- utils: Funciones auxiliares para la aplicación

Además de los archivos:
- App.js: El componente padre.
- index.js: El archivo global de la aplicación que recibe las configuraciones.
- index.scss: Archivo de estilos globales.
- variables.scss: Archivo de las variables disponibles en toda la aplicación.
- ServiceWorker.js: Herramientas para la configuración de una PWA.


## Hablemos de React 🙄
Para el desarrollo de esta aplicación decidí trabajarlo bajo Functional Components. Pues en mi consideración son muy útiles y reducen algunos fragmentos de código que a la larga puede ser confusos.

Dentro de ./src hay una carpeta llamada ./components dentro de este fichero opté por dividirlos en sus categorías correspondientes  ./commom (Componentes autónomos que cumplen una o más funciones y que a su vez pueden aparecer más de una vez), ./views (Componentes contenedores y de visualización de una determinante pantalla).

## Estado Global
Para el estado global decidí o ocupará "Redux" ya que considero que brinda grandes beneficios.
La estructura del estado global es:
```bash
let initialState = {
    fetching: false,
    data: [],
    options: [],
}
```

Para su modificación decidí usar un reducer contenido en un Duck:
```bash
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_CHARACTERS:
        return { ...state, fetching: true}
      case GET_CHARACTERS_SUCCESS:
        return { ...state, fetching: false, data: action.payload }
      case GET_CHARACTERS_ERROR:
        return { ...state, fetching: false, error: action.payload }
      case GET_OPTIONS:
        return { ...state, options: action.payload }
      case ADD_FAVORITE:
        return { ...state, data: action.payload }
      case MODE_OFFLINE:
        return { ...state, data: action.payload }
      default:
        return state
    }
}
```
A su vez, trabajé con un Action Creator encargado de consumir la API y llevar los datos al atore. 
```bash
export let getCharactersAction = () => (dispatch, getState) => {
    dispatch({type: GET_CHARACTERS})
    axios.get(URL).then(res => {
      let data = []
      res.data.results.forEach(item=>data.push({id: item.id, name: item.name, image: item.image, specie: item.species, status: item.status, type: item.type === '' ? 'No definido' : item.type, gender: item.gender, favorite: false}))
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: data
      })
      getPropsCharacters(dispatch, data)
    })
    .catch(err => {
      dispatch({
        type: GET_CHARACTERS_ERROR,
        payload: err.response.message
      })
    })
}
```

De igual forma usé algunas acciones en los componentes de la aplicación.

## Estilos
Para maquetar de forma responsiva decidí usar SASS.

## Hosting:
Firebase me parece un servicio demasiadamente bueno y sencillo de usar. Para la aplicación decidí usarlo en su servicio de hosting.

## Código
Para la mejor edición de mi código  y usar reglas de sintaxis decidí usar EsLint.js






