import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import TiposIngresosCrud from "../components/TiposCrud";

function TiposIngresos() {
    const [tiposIngresos, setTiposIngresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result = await api.get("/tiposIngresos/");
        setTiposIngresos(result.data);
    }

    return (
        <div className="mt-4" style={{minHeight: "87.5vh"}}>
            <h1 className="text-center">CRUD - Tipos de Ingresos</h1>
            <TiposIngresosCrud load={load} tipos={tiposIngresos} />
        </div>
    )
}

export default TiposIngresos;