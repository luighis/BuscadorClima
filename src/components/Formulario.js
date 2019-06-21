import React, { useState } from 'react';

const Formulario = ({datosConsulta}) => {

   
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })

    const handleChange = e => {

        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        datosConsulta(busqueda);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12"> 
                <select onChange={handleChange} name="pais">
                    <option value="">Seleciona un país </option>
                    <option value="US">Estados Unidos </option>
                    <option value="MX">México </option>
                    <option value="AR">Argentina </option>
                    <option value="CO">Colombia </option>
                    <option value="CR">Costa Rica </option>
                    <option value="ES">España </option>
                    <option value="PE">Perú </option>
                </select>
            </div>

            <div className="input-field col s12">
                <button 
                class="btn btn-large btn-block  waves-effect waves-light yellow accent-4" 
                type="submit" 
                >
                    Buscar Clima
                </button>
            </div>
        </form>
    );
}

export default Formulario;