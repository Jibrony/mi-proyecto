import EncabezadoDesign from "./css/EncabezadoDesign.css";

function Encabezado({}){
    return(
        <div className="contenedor">
            <div className="logo">
                <img src="https://img.freepik.com/vector-premium/logo-restaurante-retro_23-2148474404.jpg"/>
            </div>
                <h2 className="hTitulo">RECETAS</h2>
        </div>
    );
}

export default Encabezado;