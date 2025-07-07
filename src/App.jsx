import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Card from "./components/Card";
import Beneficios from "./components/Beneficios";
import Tarea from "./components/Tarea";
import Modal from "./components/Modal";
import Basededatos from "./components/Basededatos";
import Mision1 from "./components/Antigua/Mision1";
import Integrantes from "./components/Integrantes";
import Modeloer from "./components/Modeloer";
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    barrio: "",
    departamento: "",
    producto: {
      modelo: "UltraFlex Pro",
      color: "Negro",
      talla: 42,
      cantidad: 1,
      precio: 150000,
    },
  });

  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarPedido = (pedido) => {
    setPedidos([pedido, ...pedidos]);
    setForm({
      nombre: "",
      telefono: "",
      direccion: "",
      ciudad: "",
      barrio: "",
      departamento: "",
      producto: {
        modelo: "UltraFlex Pro",
        color: "",
        talla: "",
        cantidad: 0,
        precio: 150000,
      },
    });
    setMostrarResumen(true);
    setMostrarModal(false);
  };

  return (
    <Router>
      <Navbar />

      <div className="contenedor">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Card />
                <Beneficios />
              </>
            }
          />
          <Route path="/registro" element={<Registro />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/modeloer" element={<Modeloer />} />
          <Route path="/basededatos" element={<Basededatos />} />
          <Route path="/mision1" element={<Mision1 />} />
        </Routes>

        {mostrarResumen && pedidos.length > 0 && (
          <div className="resumenPedidos">
            <h2>📝 Pedidos Realizados</h2>
            {pedidos.map((pedido) => (
              <Tarea
                key={pedido.id}
                form={pedido}
                mostrarResumen={true}
                onEliminar={() =>
                  setPedidos(pedidos.filter((p) => p.id !== pedido.id))
                }
                onEditar={() => {
                  setForm(pedido);
                  setPedidos(pedidos.filter((p) => p.id !== pedido.id));
                  setMostrarModal(true);
                }}
              />
            ))}
          </div>
        )}

        <button onClick={() => setMostrarModal(true)}>
          PAGO CONTRA ENTREGA
        </button>

        <Modal
          visible={mostrarModal}
          onClose={() => setMostrarModal(false)}
          form={form}
          setForm={setForm}
          onPagoContraentrega={(pedidoCompleto) => {
            agregarPedido({
              ...pedidoCompleto,
              id: Date.now(),
            });
          }}
        />
      </div>
    </Router>
  );
}

export default App;
