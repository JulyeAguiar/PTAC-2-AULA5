import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   const [imagem, setImagem] = useState("")
   const [nome, setNome] = useState("")
   const [golpe, setGolpe] = useState("")
   const [defesa, setdefesa] = useState("")
   const [listas, setListas] = useState([])
   const [identidade, setIdentidade] = useState(1)

   const salvar = (e) =>{
    e.preventDefault()
    setListas([...listas,{
        imagem:imagem,
        nome:nome,
        golpe:golpe,
        defesa:defesa,
        identidade:identidade
    }])
    setIdentidade(identidade + 1)
    setImagem("")

    //alert("A palavra salva é... " + atividades)
    console.log(listas)
   }

   const remove = (id) =>{
    const lista2 = []
    listas.map((listas) =>{ //.map transforma
        if (listas.identidade !== id){
            lista2.push(listas)//.push add elemento no final
        }
    })
    setListas(lista2)
    console.log(lista2)
   }

    return (
        <div>
            <Link to="/todo">todo</Link>
            <h1>Lista de Atividade</h1>
            <form onSubmit={salvar}>

                <h2>Insira um caminho de imagem</h2>
                    <input type="text" onChange={(e) => {setImagem(e.target.value)}}></input>
                <br/>

                <h2>Insira o Nome</h2>
                <input type="text" onChange={(e) => {setNome(e.target.value)}}></input>

                <h2>Insira o Dano</h2>
                <input type="text" onChange={(e) => {setGolpe(e.target.value)}}></input>

                <h2>Insira a Força</h2>
                <input type="text" onChange={(e) => {setdefesa(e.target.value)}}></input>

                
                <button>Butão</button>
                
            </form>

            {listas.map((atv) =>
                <ul key={atv.identidade}>
                    <li>
                        <ul>
                            <li><p>{atv.imagem}</p></li>
                            <li><p>{atv.nome}</p></li>
                            <li><p>{atv.golpe}</p></li>
                            <li><p>{atv.defesa}</p></li>
                        </ul>
                    </li>
                    <button onClick={() => remove(atv.identidade)}>Excluir</button>
                </ul>
            )}
        </div>

    );
}