import React from 'react';

const NoHubo = (props) => {
    return (
        <div className='agotado'>
            <h2>No hubo</h2>
            <ul>
          

            <li style={{opacity:0.5}}>
            {props.lista}
               
               </li>
               {/* ))} */}

            </ul>
        </div>
    );
}

export default NoHubo;
