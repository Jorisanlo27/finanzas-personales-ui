import { useState } from "react";
import { useLocation } from 'react-router-dom';
import api from "../../../api/axiosConfig";
import List from "./List";


const Crud = ({ load, tipos }) => {
  const location = useLocation().pathname + "/";

  const [id, setId] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [color, setColor] = useState("");
  const [estado, setEstado] = useState(false);

  async function saveOrUpdate(event) {
    event.preventDefault();
    await api.post(location, {
      id: id,
      descripcion: descripcion,
      color: color,
      estado: estado
    });

    resetState();
    load();
  }

  function resetState() {
    setId(0);
    setDescripcion("");
    setColor("");
    setEstado(false);
  }

  async function editTipo(tipos) {
    setId(tipos.id);
    setDescripcion(tipos.descripcion);
    setColor(tipos.color);
    setEstado(tipos.estado);
  }

  async function deleteTipo(id) {
    await api.delete(location + id);
    load();
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        <div className="col d-flex justify-content-center">
          <div className="card w-50">
            <div className="card-body">
              <form className="m-3">
                <h2>Add New</h2>
                <br />
                <div className="form-group mt-2">
                  <input
                    type="text"
                    className="form-control"
                    hidden
                    value={id}
                    onChange={e => setId(e.target.value)}
                  />
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                  />
                  <label>Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                  />
                  <label className="mt-3 me-3">Status</label>
                  <input
                    type="checkbox"
                    className="ml-2"
                    value={estado}
                    onChange={() => setEstado(estado => !estado)}
                    checked={estado}
                  />
                </div>

                <div className="d-flex justify-content-around mt-3" >
                  <button className="btn btn-primary" onClick={saveOrUpdate}>
                    Save
                  </button>
                  <button type="reset" className="btn btn-danger" onClick={resetState}>
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <List
            items={tipos}
            edit={editTipo}
            remove={deleteTipo}
          />
        </div>
      </div>
    </div>
  );
};

export default Crud;