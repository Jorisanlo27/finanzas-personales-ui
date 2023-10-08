import { useState } from "react";
import api from "../../api/axiosConfig";
import List from "../List";

const TiposPagoCrud = ({ load, tiposPago }) => {

  const [id, setId] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState(false);

  async function saveOrUpdate(event) {
    event.preventDefault();
    await api.post("/tiposPago/", {
      id: id,
      descripcion: descripcion,
      estado: estado
    });

    resetState();
    load();
  }

  function resetState() {
    setId(0);
    setDescripcion("");
    setEstado(false);
  }

  async function editTiposPago(tiposPago) {
    setId(tiposPago.id);
    setDescripcion(tiposPago.descripcion);
    setEstado(tiposPago.estado);
  }

  async function deleteTiposPago(id) {
    await api.delete("/tiposPago/" + id);
    load();
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        <div className="col d-flex justify-content-center">
          <div className="card w-50">
            <div class="card-body">
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
                </div>

                <div className="form-group my-4">
                  <label className="me-3">State</label>
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
            items={tiposPago}
            edit={editTiposPago}
            remove={deleteTiposPago}
          />
        </div>
      </div>
    </div>
  );
};

export default TiposPagoCrud;