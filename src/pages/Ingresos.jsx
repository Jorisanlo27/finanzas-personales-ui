import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import IngresosCrud from "../components/Ingresos/Crud";

function Ingresos(list) {
    const [tiposIngresos, setTiposIngresos] = useState([]);
    const [fuentesIngresos, setFuentesIngresos] = useState([]);
    const [ingresos, setIngresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result1 = await api.get("/ingresos/");
        setIngresos(result1.data);

        const result2 = await api.get("/tiposIngresos/");
        setTiposIngresos(result2.data);

        const result3 = await api.get("/fuentesIngresos/");
        setFuentesIngresos(result3.data);
    }

    if (list === true) {
        return (
            <div className="content-wrapper mt-3" style={{ minHeight: "86vh" }}>
                <h1 className="text-center">CRUD - Ingresos</h1>
                <IngresosCrud load={load} tipos={tiposIngresos} fuentes={fuentesIngresos} ingresos={ingresos} list={list} />
            </div>
        )
    } else {
        return (
            <IngresosCrud load={load} tipos={tiposIngresos} fuentes={fuentesIngresos} ingresos={ingresos} list={list} />
        )
    }
}

export default Ingresos;