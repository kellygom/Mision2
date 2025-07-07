import { useState } from "react";
import "./Modeloer.css";

export default function Modeloer() {
const [imagenZoom, setImagenZoom] = useState(null);

return (
    <div className="modeloer-container">
    <h2> Modelo Enridad-Relación (ER) </h2>
    <div className="galeria">
        <img
    src="https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751057346/918f6a5d-99d2-4bb1-9f62-678edcfbce8c_hwt0cj.jpg"
    alt="Modelo 1"
    onClick={() => setImagenZoom("https://res.cloudinary.com/dvs0wzs9a/image/upload/v1751057346/918f6a5d-99d2-4bb1-9f62-678edcfbce8c_hwt0cj.jpg")}
        />

    </div>

    {imagenZoom && (
        <div className="modalZoom" onClick={() => setImagenZoom(null)}>
    <img src={imagenZoom} alt="Zoom" />
        </div>
    )}
    </div>
);
}
