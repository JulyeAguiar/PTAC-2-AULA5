
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
   const listaLocalStorage = JSON.parse(localStorage.getItem("Listas")) || [];
   const [nome, setNome] = useState("")
   const [imagem, setImagem] = useState("")
   const [golpe, setGolpe] = useState("")
   const [defesa, setdefesa] = useState("")
   const [listas, setListas] = useState(listaLocalStorage)
   const [identidade, setIdentidade] = useState(listaLocalStorage [listaLocalStorage.length -1]?.id + 1 || 1)//length = número de elemento de um array

   useEffect(() => {localStorage.setItem("Listas", JSON.stringify(listas))},[listas])

   const salvar = (e) =>{
    e.preventDefault()
    setListas([...listas,{
        nome:nome,
        imagem:imagem,
        golpe:golpe,
        defesa:defesa,
        identidade:identidade
    }])
    setIdentidade(identidade + 1)
    setNome("")

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

            <form onSubmit={salvar}>

            <div className="form-container">
            <br/>
                <h2>Insira um Nome</h2>
                <input type="text" onChange={(e) => {setNome(e.target.value)}}></input>

                <h2>Insira uma imagem</h2>
                <input type="text" onChange={(e) => {setImagem(e.target.value)}}></input>

                <h2>Insira o Dano</h2>
                <input type="number" onChange={(e) => {setGolpe(e.target.value)}}></input>

                <h2>Insira a Força</h2>
                <input type="number" onChange={(e) => {setdefesa(e.target.value)}}></input>

                <button>Enviar</button>
            </div>

                
            </form>

            {listas.map((atv) =>
                <main key={atv.identidade}>
                    <ul >
                       <Link to ={`/detalhe/${atv.identidade}`}>
                            <div className="card">
                                <br/>
                                    <h2>{atv.nome}</h2>
                                <br/>
                                <br/>
                                <img src={atv.imagem}></img>
                            <br/>
                            <br/>
                            <br/>
                                <h3>Golpe: {atv.golpe}</h3>
                                <h3>Defesa: {atv.defesa}</h3>
                        </div>
                        </Link>
        
                        <button onClick={() => remove(atv.identidade)}>Excluir</button>
                    </ul>
                </main>
            )}
        </div>

    );

    
}
