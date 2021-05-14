import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo="Soy el subtitulo"} ) => {

    

    // console.log(props);
    return (
        <Fragment>

            <h1> { saludo } </h1>
            <p>
                {subtitulo}
            </p>
        </Fragment>
        
    )
}

PrimeraApp.propTypes = {

    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo 2"
}

export default PrimeraApp;