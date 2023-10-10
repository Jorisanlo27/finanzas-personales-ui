import React from 'react';

const SideBar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" className="brand-link">
                <img src="dist/img/ReactLogo.png" alt="Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                <span className="brand-text font-weight-light">Finanzas Personales</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user8-128x128.jpg" className="img-circle elevation-2" alt="User" />
                    </div>
                    <div className="info">
                        <a href="/" className="d-block">Jorge Santana</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-wallet"></i>
                                <p>
                                    Budget
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-envelope"></i>
                                <p>
                                    CRUD's
                                    <i className="fas fa-angle-left right"></i>
                                    <span className="badge badge-info right">7</span>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="/tiposEgresos" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Tipos Egresos</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/tiposIngresos" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Tipos Ingresos</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/clasificacionEgresos" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Clasificaciones Egresos</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/tiposPago" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Tipos Pago</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/egresos" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Egresos</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Ingresos</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Usuarios</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default SideBar;