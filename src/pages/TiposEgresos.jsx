import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import TiposEgresosCrud from "../components/TiposCrud";

function TiposEgresos() {
    const [tiposEgresos, setTiposEgresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result = await api.get("/tiposEgresos/");
        setTiposEgresos(result.data);
    }

    return (
        <div className="mt-4" style={{minHeight: "87.5vh"}}>
            <h1 className="text-center">CRUD - Tipos de Egresos</h1>
            <TiposEgresosCrud load={load} tipos={tiposEgresos} />
        </div>
    )
}

export default TiposEgresos;