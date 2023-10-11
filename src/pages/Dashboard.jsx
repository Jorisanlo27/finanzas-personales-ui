import React, { useEffect, useState } from 'react';
import api from "../api/axiosConfig";
import FormTransacciones from '../components/FormTransacciones';


const Dashboard = () => {
    const [clasificacionEgresos, setClasificacionEgresos] = useState([]);

    useEffect(() => {
        (async () => await load())();
    }, []);

    async function load() {
        const result = await api.get("/clasificacionEgresos/");

        setClasificacionEgresos(result.data);
    }

    return (
        <div className="content-wrapper">
            <div className="mt-4 px-5">
                <section className="content mb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-12 mr-4">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3><sup style={{ fontSize: "20px" }}>$</sup><span id='balance'></span></h3>
                                        <p>Balance</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-cash"></i>
                                    </div>
                                    <div className="small-box-footer"><i class="fas"></i></div>
                                </div>
                            </div>
                            {clasificacionEgresos
                                .filter(item => item.estado !== false)
                                .map((item) => {
                                    return (
                                        <div key={item.id} className="col-lg-2 col-3">
                                            <div className="small-box" style={{ backgroundColor: item.color, color: "white" }}>
                                                <div className="inner">
                                                    <h3><sup style={{ fontSize: "20px" }}>$</sup><span id={item.descripcion} style={{ fontSize: "28px" }}>0</span></h3>
                                                    <p>{item.descripcion}</p>
                                                </div>
                                                <div className="icon">
                                                    <i className="ion ion-navicon-round"></i>
                                                </div>
                                                <a href="/clasificacionEgresos" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </section>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-7">
                                <div className="card card-dark">
                                    <div className="card-header">
                                        <h3 className="card-title">Recent Transactions</h3>
                                    </div>
                                    <div className="card-body">
                                        <table id="example" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Type</th>
                                                    <th>Sum</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tbody">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-md-4">
                                <FormTransacciones />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;