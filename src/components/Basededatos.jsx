import { useState } from "react";
import "./Basededatos.css";
export default function Basededatos() {
  const [imagenZoom, setImagenZoom] = useState(null);

  return (
    <div className="basededatos-container">
      <h2>Base de Datos Relacional</h2>
      <div className="galeria">
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060035/2db84b7b-54ea-410d-9566-1158f2929751_u0qev8.jpg"
          alt="Base de datos 1"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060035/2db84b7b-54ea-410d-9566-1158f2929751_u0qev8.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060026/1c45864c-4d49-42df-a541-73f22998ff85_ruyit1.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060026/1c45864c-4d49-42df-a541-73f22998ff85_ruyit1.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060052/917623aa-b453-45a6-9c04-73015b0e0d5f_a7lq0p.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060052/917623aa-b453-45a6-9c04-73015b0e0d5f_a7lq0p.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060035/3db2cbe2-d9ab-48c3-9857-92dd8a657b2a_barwaz.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060035/3db2cbe2-d9ab-48c3-9857-92dd8a657b2a_barwaz.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060065/b07c8977-fcf8-4b85-9443-14b733dec481_rsc0zk.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060065/b07c8977-fcf8-4b85-9443-14b733dec481_rsc0zk.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060087/d6f7af29-d000-45f8-9530-e815a3a349e5_kfxsyp.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060087/d6f7af29-d000-45f8-9530-e815a3a349e5_kfxsyp.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060087/d136a04e-e99d-4b48-84c8-0519c046ef3e_bg6zrg.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060087/d136a04e-e99d-4b48-84c8-0519c046ef3e_bg6zrg.jpg")}
        />
        <img
          src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060088/da761b32-10e5-4be6-9f57-aba431150508_kdafqi.jpg"
          alt="Base de datos 2"
          onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751060088/da761b32-10e5-4be6-9f57-aba431150508_kdafqi.jpg")}
        />

        <p>
            -- Cliente con id6 realiza un pedido
INSERT INTO pedidos (id_cliente, producto, cantidad)
VALUES (6, 'Tenis Jordan Rojos', 2);

-- Se actualiza el estado del pedido a enviado
UPDATE pedidos
SET estado = 'enviado'
WHERE id = 6;

-- Se elimina un pedido (por error o cancelación)
DELETE FROM pedidos
WHERE id = 7;
        </p>
      </div>

      {imagenZoom && (
        <div className="modalZoom" onClick={() => setImagenZoom(null)}>
          <img src={imagenZoom} alt="Zoom" />
        </div>
      )}
    </div>
  );
}
