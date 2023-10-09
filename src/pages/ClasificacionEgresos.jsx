import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import ClasificacionEgresosCrud from "../components/TiposCrud";

function ClasificacionEgresos() {
    const [clasificacionEgresos, setClasificacionEgresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result = await api.get("/clasificacionEgresos/");
        setClasificacionEgresos(result.data);
    }

    return (
        <div className="mt-4" style={{minHeight: "87.5vh"}}>
            <h1 className="text-center">CRUD - Clasificación de Egresos</h1>
            <ClasificacionEgresosCrud load={load} tipos={clasificacionEgresos} />
        </div>
    )
}

export default ClasificacionEgresos;