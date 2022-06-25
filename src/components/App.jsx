import React from 'react';
import Comprar from './Comprar';
import NoHubo from './NoHubo';
import Carrito from './Carrito';




const App = () => {
  const [state,setState]= React.useState({
    objeto:"",
		mensaje:"",
		lista:[],
    listaCarrito:[],
    listaAgotado:[]
  })
  const DidUpdate=()=> {

    setState({
      ...state,
      mensaje: `Tienes ${state.lista.length} cosas que comprar `
    })
  }
  React.useEffect( DidUpdate ,[state.lista])
  const handleInputChange = (event) => {
		setState({
			...state,
			objeto: event.target.value
		});
  }
  const handleClick = () => {
		const objetoEnEstado = state.objeto;
		if (!objetoEnEstado) return;

		const listaActualizada = [
			...state.lista,
			objetoEnEstado
		];

		setState({
			objeto: '',
			lista: listaActualizada,
		});
	};
  const borrarLista = (key) => {
		const copiaDeLista = [...state.lista];
		copiaDeLista.splice(key, 1);

		setState({
			...state,
			lista: copiaDeLista
		});

	};
  const carrito=(key)=>{
    const listaEnCarrito= state.lista.slice(key,1)
    const en_el_carro= [...state.lista];
		en_el_carro.splice(key, 1);

      setState({
        ...state,
        lista:en_el_carro,
        listaCarrito:listaEnCarrito
      })
    

}  
const noHay=(key)=>{
  const lista_agotada= state.lista.slice(key,1)
  const agotado= [...state.lista];
  agotado.splice(key, 1);

    setState({
      ...state,
      lista:agotado,
      listaAgotado:lista_agotada
    })
  

}  

return (
    <div className='titulo'>
      <h1>Tu carrito de compras</h1>

      <input type="text" name="" id="" value={state.objeto} onChange={handleInputChange} />

      <button onClick={handleClick}>Agregar</button>
      
      <div className='cuadros'>
        <Comprar
        lista={state.lista}
       mensaje={state.mensaje}
        borrarLista={()=> borrarLista} 
        carrito={()=>carrito}
        nohay={()=>noHay}
        />
       
        <Carrito
          listaCar={state.listaCarrito}  
          />
        <NoHubo
        lista={state.listaAgotado}
          />


      </div>
    </div>
  );
}

export default App;
