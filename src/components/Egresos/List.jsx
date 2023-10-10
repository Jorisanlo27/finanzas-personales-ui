import React from "react";
import "../../App.css";

const List = ({ items, edit, remove }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th></th>
          <th scope="col" style={{ width: "25%" }}>Name</th>
          <th scope="col">Type</th>
          <th scope="col">Classification</th>
          <th scope="col">Payment type</th>
          <th scope="col">Sum</th>
          <th scope="col" className="text-center" style={{ width: "15%" }}>Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      {items.map((item, index) => {
        return (
          <tbody key={item.id} className="text-center">
            <tr>
              <th scope="row">{index + 1}</th>
              <td className="text-left">
                <div className="text-primary text-decoration pointer" onClick={() => edit(item)}>
                  <u>{item.descripcion}</u>
                </div>
              </td>
              <td className="text-left">
                {item.tipoEgreso.descripcion}
              </td>
              <td className="text-left">
                {item.clasificacionEgresos.descripcion}
              </td>
              <td className="text-left">
                {item.tipoPago.descripcion}
              </td>
              <td className="text-left text-danger">
                RD$ {item.monto}
              </td>
              <td><small className={"badge badge-" + (item.estado ? "success" : "danger")}>{item.estado ? "Activo" : "Inactivo"}</small></td>
              <td className="text-right">
                <button type="button" className="btn btn-danger ml-2" onClick={() => remove(item.id)}>
                  <i className="bi bi-trash3 h5"></i>
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table >
  );
};

export default List;