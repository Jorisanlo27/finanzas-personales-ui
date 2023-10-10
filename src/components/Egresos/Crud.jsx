import { useState } from "react";
import api from "../../api/axiosConfig";
import List from "./List";


const EgresosCrud = ({ load, tipos, clasificaciones, tiposPago, egresos }) => {

  const [id, setId] = useState(0);
  const [tipoEgreso, setTipoEgreso] = useState(0);
  const [clasificacionEgresos, setClasificacionEgresos] = useState(0);
  const [tipoPago, setTipoPago] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState(0);
  const [estado, setEstado] = useState(false);
  const [fecha, setFecha] = useState("");

  async function saveOrUpdate(event) {
    event.preventDefault();

    let tipo = await api.get("/tiposEgresos/" + tipoEgreso);
    let clasificacion = await api.get("/clasificacionEgresos/" + clasificacionEgresos);
    let tPago = await api.get("/tiposPago/" + tipoPago);

    try {
      await api.post("/egresos/", {
        id: id,
        tipoEgreso: tipo.data,
        clasificacionEgresos: clasificacion.data,
        tipoPago: tPago.data,
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
    document.getElementById('clasificacion').value = "DEFAULT";
    document.getElementById('tipoPago').value = "DEFAULT";
    setId(0);
    setTipoEgreso(0);
    setClasificacionEgresos(0);
    setTipoPago(0);
    setDescripcion("");
    setMonto(0);
    setFecha("");
    setEstado(false);
  }

  async function editEgreso(egreso) {
    document.getElementById('tipos').value = egreso.tipoEgreso.id;
    document.getElementById('clasificacion').value = egreso.clasificacionEgresos.id;
    document.getElementById('tipoPago').value = egreso.tipoPago.id;
    setId(egreso.id);
    setDescripcion(egreso.descripcion);
    setTipoEgreso(egreso.tipoEgreso.id);
    setClasificacionEgresos(egreso.clasificacionEgresos.id);
    setTipoPago(egreso.tipoPago.id);
    setMonto(egreso.monto);
    setFecha(egreso.fecha);
    setEstado(egreso.estado);
  }

  async function deleteEgreso(id) {
    await api.delete("/egresos/" + id);
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
                  <select id="tipos" className="form-control form-control-md" defaultValue={"DEFAULT"} onChange={e => setTipoEgreso(e.target.value)} required>
                    <option value="DEFAULT" disabled>...</option>
                    {tipos.map((item) => <option key={"te" + item.id} value={item.id}>{item.descripcion}</option>)}
                  </select>

                  <label>Classification</label>
                  <select id="clasificacion" className="form-control form-control-md" defaultValue={"DEFAULT"} onChange={e => setClasificacionEgresos(e.target.value)} required>
                    <option value="DEFAULT" disabled>...</option>
                    {clasificaciones.map((item) => <option key={"ce" + item.id} value={item.id}>{item.descripcion}</option>)}
                  </select>

                  <label>Payment types</label>
                  <select id="tipoPago" className="form-control form-control-md" defaultValue={"DEFAULT"} onChange={e => setTipoPago(e.target.value)} required>
                    <option value="DEFAULT" disabled>...</option>
                    {tiposPago.map((item) => <option key={"tp" + item.id} value={item.id}>{item.descripcion}</option>)}
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
              items={egresos}
              edit={editEgreso}
              remove={deleteEgreso}
            />
          </div>
        </div>
      </div >
    </div >
  );
};

export default EgresosCrud;