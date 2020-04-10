import React, { useState } from 'react';

const useSelect = (initialState, opciones) => {
    
    const [state, actualizarState] = useState(initialState)

    const SelectNoticias = () => (

        <select
            className="browser-default"
            value={state}
            onChange={ e => actualizarState(e.target.value)}
        >
            
            {opciones.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
            ))}

        </select>
    );

    return [ state, SelectNoticias ]
}
 
export default useSelect;