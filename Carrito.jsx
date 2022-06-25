import React from 'react';

const Carrito = (props) => {
    return (
        <div className='carrito'>
            <h2>En el carrito</h2>
            <ul>
                {props.listaCar.map((objeto_carro,key)=>(
                    <li key={key}>
                    {objeto_carro}
                    </li>
                )
                
                )}
            </ul>
        </div>
    );
}

export default Carrito;
