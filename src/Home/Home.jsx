import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   const [atividades, setAtividades] = useState("")
   const [listas, setListas] = useState([])
   const [identidade, setIdentidade] = useState(1)
   const [excluir,setExcluir] = useState([])

   const remove = (id) =>{
    const lista2 = []
    listas.map((listas) =>{
        if (listas.id !== id){
            lista2.push(listas)
        }
    })
    setListas(lista2)
    console.log(lista2)
   }

   const salvar = (e) =>{
    e.preventDefault()
    setListas([...listas,{
        atividades:atividades, identidade:identidade
    }])
    setIdentidade(identidade + 1)
    //alert("A palavra salva é... " + atividades)
    console.log(listas)
   }
    return (
        <div>
            <Link to="/todo">todo</Link>
            <h1>Lista de Atividade</h1>
            <form onSubmit={salvar}>
                <input type="text" onChange={(e) => {setAtividades(e.target.value)}}></input>
                <button>Butão</button>
                
            </form>

            {listas.map((atv) =>
                <ul key={atv.identidade}>
                    <li>
                        <p>{atv.atividades}</p>
                        <button onClick={() => remove(atv.id)}>Excluir</button>
                    </li>
                </ul>
            )}
        </div>

    );
}