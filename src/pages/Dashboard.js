import React from "react";

const Dashboard = () => {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5">
                <section className="content mb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-12">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3><sup style={{ fontSize: "20px" }}>$</sup>2,000</h3>
                                        <p>Balance</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-cash"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-2 col-3">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3><sup style={{ fontSize: "20px" }}>$</sup>2,000</h3>
                                        <p>Shopping</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3">
                                <div className="small-box bg-warning" style={{ color: "white" }}>
                                    <div className="inner">
                                        <h3><sup style={{ fontSize: "20px" }}>$</sup>2,000</h3>
                                        <p>Food & Drinks</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-fork"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3><sup style={{ fontSize: "20px" }}>$</sup>2,000</h3>
                                        <p>Bills & Utilities</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-home"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3">
                                <div className="small-box bg-secondary">
                                    <div className="inner">
                                        <h3><sup style={{ fontSize: "20px" }}>$</sup>2,000</h3>
                                        <p>Others</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="card card-dark">
                                    <div className="card-header">
                                        <h3 className="card-title">Recent Transactions</h3>
                                    </div>
                                    <div className="card-body">
                                        <table id="example" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Category</th>
                                                    <th>Sum</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Electric Bill</td>
                                                    <td><small className="badge badge-danger">Bills & Utilities</small></td>
                                                    <td className="text-danger">RD$ -12,000</td>
                                                    <td>4/10/23</td>
                                                </tr>
                                                <tr>
                                                    <td>Empanadas Mañon</td>
                                                    <td><small className="badge badge-warning text-white">Food & Drinks</small></td>
                                                    <td className="text-danger">RD$ -50</td>
                                                    <td>4/10/23</td>
                                                </tr>
                                                <tr>
                                                    <td>Nike Shoes</td>
                                                    <td><small className="badge badge-info">Shopping</small></td>
                                                    <td className="text-danger">RD$ -4,099.50</td>
                                                    <td>4/10/23</td>
                                                </tr>
                                                <tr>
                                                    <td>Salary</td>
                                                    <td><small className="badge badge-success">Revenue</small></td>
                                                    <td className="text-success">RD$ 75,000</td>
                                                    <td>4/10/23</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-md-4">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Add Expense</h3>
                                    </div>
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Amount</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="form-group w-50">
                                                <label htmlFor="category" className="mr-3">Category</label>
                                                <br />
                                                <select name="category" id="category" className="form-control">
                                                    <option value=""></option>
                                                    <option value="saab">Shopping</option>
                                                    <option value="mercedes">Food & Drinks</option>
                                                    <option value="audi">Bills & Utilities</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;