import React from 'react';

const Comprar = (props) => {
//     const cosas= ()=>(event)=>{
//  props.setState
//     }
    return (
        <div className='comprar'>
           <h2>Hay que comprar </h2>
            <p>{props.mensaje}</p>
           <ul>
           {props.lista.map((objetos_comprar, key) => (

            <li key={key}>
           {objetos_comprar}
				<button onClick={props.borrarLista(key)}>
					X
				</button>
                <button onClick={props.carrito(key)}>Pasar a carrito</button>
                <button onClick={props.nohay(key)}>No Hay</button>
                </li> ))}
                </ul>
        </div>
    );
}

export default Comprar;
