import { useState } from "react";
import api from "../../api/axiosConfig";
import List from "./List";


const IngresosCrud = ({ load, tipos, fuentes, ingresos }) => {

  const [id, setId] = useState(0);
  const [tipoIngreso, setTipoIngreso] = useState(0);
  const [fuenteIngreso, setFuenteIngreso] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState(0);
  const [estado, setEstado] = useState(false);
  const [fecha, setFecha] = useState("");

  async function saveOrUpdate(event) {
    event.preventDefault();

    let tipo = await api.get("/tiposIngresos/" + tipoIngreso);
    let fuente = await api.get("/fuentesIngresos/" + fuenteIngreso);

    try {
      await api.post("/ingresos/", {
        id: id,
        tipoIngresos: tipo.data,
        fuenteIngresos: fuente.data,
        descripcion: descripcion,
        monto: monto,
        fecha: fecha,
        estado: estado
      });
    } catch (error) {
      console.log(error.response.data);
      alert("ERROR: favor enviar formulario nuevamente")
    }

    resetState();
    load();
  }

  function resetState() {
    document.getElementById('tipos').value = "DEFAULT";
    document.getElementById('fuentes').value = "DEFAULT";
    setId(0);
    setTipoIngreso(0);
    setFuenteIngreso(0);
    setDescripcion("");
    setMonto(0);
    setFecha("");
    setEstado(false);
  }

  async function editIngreso(ingreso) {
    document.getElementById('tipos').value = ingreso.tipoIngresos.id;
    document.getElementById('fuentes').value = ingreso.fuenteIngresos.id;
    setId(ingreso.id);
    setDescripcion(ingreso.descripcion);
    setTipoIngreso(ingreso.tipoIngresos.id);
    setFuenteIngreso(ingreso.fuenteIngresos.id);
    setMonto(ingreso.monto);
    setFecha(ingreso.fecha);
    setEstado(ingreso.estado);
  }

  async function deleteIngreso(id) {
    await api.delete("/ingresos/" + id);
    load();
  }

  return (
    <div className="mt-4" >
      <div className="row align-items-start">
        <div className="col-xl-4 col-lg-12 d-flex justify-content-center">
          <div className="card w-75">
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
                    required
                  />

                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    required
                  />

                  <label>Type</label>
                  <select id="tipos" className="form-control form-control-md" defaultValue={"DEFAULT"} onChange={e => setTipoIngreso(e.target.value)} required>
                    <option value="DEFAULT" disabled>...</option>
                    {tipos.map((item) => <option key={"te" + item.id} value={item.id}>{item.descripcion}</option>)}
                  </select>

                  <label>Source</label>
                  <select id="fuentes" className="form-control form-control-md" defaultValue={"DEFAULT"} onChange={e => setFuenteIngreso(e.target.value)} required>
                    <option value="DEFAULT" disabled>...</option>
                    {fuentes.map((item) => <option key={"ce" + item.id} value={item.id}>{item.descripcion}</option>)}
                  </select>

                  <label>Sum</label>
                  <input
                    type="number"
                    className="form-control"
                    value={monto}
                    onChange={e => setMonto(e.target.value)}
                    required
                  />

                  <label>Fecha</label>
                  <input
                    type="date"
                    className="form-control"
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                    required
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
        <div className="col-xl-8 col-lg-12 d-flex justify-content-center">
          <div style={{ width: "90%", margin: "auto" }}>
            <List
              items={ingresos}
              edit={editIngreso}
              remove={deleteIngreso}
            />
          </div>
        </div>
      </div >
    </div >
  );
};

export default IngresosCrud;