import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import TiposPagoCrud from "../components/TiposPagoCrud";

function TiposPago() {
    const [tiposPago, setTiposPago] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result = await api.get("/tiposPago/");
        setTiposPago(result.data);
    }

    return (
        <div className="mt-4" style={{minHeight: "87.5vh"}}>
            <h1 className="text-center">CRUD - Tipos de Pago</h1>
            <TiposPagoCrud load={load} tiposPago={tiposPago} />
        </div>
    )
}

export default TiposPago;