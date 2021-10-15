import "./App.css";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Axios from "axios";

// Ejemplo realizado en clase.
// function App() {

//   const [isLoading, setIsLoading] = useState(false);
//   const [titulo, setTitulo] = useState([]);

//   useEffect(() => {
//     getTodos()
//   }, []);

//   const getTodos = async () => {
//     setIsLoading(true);
//     const respuesta = await Axios.get(
//       "https://jsonplaceholder.typicode.com/todos/"
//     );
//     // De aca no paso hasta que no termine de cargar la API
//     setTitulo(respuesta.data);
//     console.log(respuesta.data);
//     setIsLoading(false);
//   };

//   return (
//     <div className="App">
//       <ul>
//         {isLoading ? (
//           <Loader type="Hearts" color="#FF0000" height={100} width={100} />
//         ) : (
//           titulo.map((t) => {
//             return (
//               <li style={{ listStyle: "none" }}>
//                 {t.title} <span>{t.userId}</span>
//               </li>
//             );
//           })
//         )}
//       </ul>
//     </div>
//   );

// }

// Otra forma de hacerlo
// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [genero, setGenero] = useState([]);
//   const [nombre, setNombre] = useState([]);
//   const [apellido, setApellido] = useState([]);
//   const [foto, setFoto] = useState([]);

//   useEffect(() => {
//     getTodos()
//   }, []);

//   const getTodos = async () => {
//     setIsLoading(true);
//     const respuesta = await Axios.get(
//         "https://randomuser.me/api/"
//     );
//     // De aca no paso hasta que no termine de cargar la API
//     setGenero(respuesta.data.results[0].gender)
//     setNombre(respuesta.data.results[0].name.first)
//     setApellido(respuesta.data.results[0].name.last)
//     setFoto(respuesta.data.results[0].picture.large)
//     console.log(respuesta.data);
//     setIsLoading(false);

//   };

//   return (
//     <div className="App">
//       <ul>
//         {isLoading ? (
//           <Loader type="Hearts" color="#FF0000" height={100} width={100} />
//         ) : (

//               <li style={{ listStyle: "none" }}>
//                 <p>{genero}</p>
//                 <p>{nombre}</p>
//                 <p>{apellido}</p>
//                 <img src={foto} alt="Foto usuario"/>
//               </li>

//         )}
//       </ul>
//     </div>
//   );

// }

// Otra forma de resolverlo con donde el camino de respuesta comparten todos los campos a mostrar ".data.results"
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setIsLoading(true);
    const respuesta = await Axios.get("https://randomuser.me/api/");
    // De aca no paso hasta que no termine de cargar la API
    setData(respuesta.data.results);
    console.log(respuesta.data.results);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <ul>
        {isLoading ? (
          <Loader type="Hearts" color="#FF0000" height={100} width={100} />
        ) : (
          data.map((d) => {
            return (
              <li style={{ listStyle: "none" }}>
                <p>{d.gender}</p>
                <p>{d.name.first}</p>
                <p>{d.name.last}</p>
                <img src={d.picture.large} alt="Foto usuario" />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default App;
