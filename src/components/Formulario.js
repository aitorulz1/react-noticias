import React from 'react';
import useSelect from '../hooks/useSelect'

import styles from './Formulario.module.css'

const Formulario = ({guardarCategoria}) => {

    const CATEGORIAS = [
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'general', label: 'General' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' }
    ]

    const [ categoria, SelectNoticias] = useSelect('business', CATEGORIAS);

    // on Submit

    const onSubmit = e => {
        e.preventDefault();

        guardarCategoria(categoria)
        
    }



    return ( 
        <form
            onSubmit={onSubmit}
        >

            <SelectNoticias />

                <input
                    type="submit"
                    className={`${styles.btn_block} btn-large amber darken-2`}
                    value="Buscar"
                />              
        </form>
     );
}
 
export default Formulario;