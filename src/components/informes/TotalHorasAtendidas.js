import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNumeroHorasMes } from '../../redux/actions/informesActions';

/* Containers:
    ResumenMensual.js
 */

const TotalHorasAtendidas = () => {
    const sesionesMes = useSelector(state => state.informesReducer.numeroHorasMes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNumeroHorasMes());
    }, [dispatch]);
    return (
        <Fragment>
            {sesionesMes}
        </Fragment>
    );
}

export default TotalHorasAtendidas;
