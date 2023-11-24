import { useParams } from "react-router-dom";
import Card from "./Componentes/Card";

export default function Detalhe() {
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Listas"))
    const carta = lista.filter((carta) => {
        if (carta.identidade == id) {
            return carta
        } return null
    })
    return (
        <div>
            <Card carta ={carta[0]}/>
        </div>
    )
}