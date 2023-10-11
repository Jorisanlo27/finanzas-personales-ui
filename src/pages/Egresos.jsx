import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import EgresosCrud from "../components/Egresos/Crud";

function Egresos(list) {
    const [tiposEgresos, setTiposEgresos] = useState([]);
    const [clasificacionEgresos, setClasificacionEgresos] = useState([]);
    const [tiposPago, setTiposPago] = useState([]);
    const [egresos, setEgresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result1 = await api.get("/egresos/");
        setEgresos(result1.data);

        const result2 = await api.get("/tiposEgresos/");
        setTiposEgresos(result2.data);

        const result3 = await api.get("/clasificacionEgresos/");
        setClasificacionEgresos(result3.data);

        const result4 = await api.get("/tiposPago/");
        setTiposPago(result4.data);
    }

    if (list.list === true) {
        return (
            <div className="content-wrapper mt-3" style={{ minHeight: "86vh" }}>
                <h1 className="text-center">CRUD - Egresos</h1>
                <EgresosCrud load={load} tipos={tiposEgresos} clasificaciones={clasificacionEgresos} tiposPago={tiposPago} egresos={egresos} list={list} />
            </div>
        )
    } else {
        return (
            <EgresosCrud load={load} tipos={tiposEgresos} clasificaciones={clasificacionEgresos} tiposPago={tiposPago} egresos={egresos} list={list} />
        )
    }
}

export default Egresos;