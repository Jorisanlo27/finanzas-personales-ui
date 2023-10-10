import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import FuentesIngresosCrud from "../components/TiposCrud";

function FuentesIngresos() {
    const [fuentesIngresos, setFuentesIngresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result = await api.get("/fuentesIngresos/");
        setFuentesIngresos(result.data);
    }

    return (
        <div className="mt-4" style={{ minHeight: "87.5vh" }}>
            <h1 className="text-center">CRUD - Fuentes de Ingresos</h1>
            <FuentesIngresosCrud load={load} tipos={fuentesIngresos} />
        </div>
    )
}

export default FuentesIngresos;