
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
    

   const [nome, setNome] = useState("")
   const [golpe, setGolpe] = useState("")
   const [defesa, setdefesa] = useState("")
   const [listas, setListas] = useState([])
   const [identidade, setIdentidade] = useState(1)

   const salvar = (e) =>{
    e.preventDefault()
    setListas([...listas,{
        nome:nome,
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

            <div class="form-container">
            <br/>
                <h2>Insira um Nome</h2>
                <input type="text" onChange={(e) => {setNome(e.target.value)}}></input>

                <h2>Insira o Dano</h2>
                <input type="number" onChange={(e) => {setGolpe(e.target.value)}}></input>

                <h2>Insira a Força</h2>
                <input type="number" onChange={(e) => {setdefesa(e.target.value)}}></input>

                <button>Enviar</button>
            </div>

                
            </form>

            {listas.map((atv) =>
                <main>
                    <ul key={atv.identidade}>
                        
                        <div class="card">
                            <br/>
                                <h2>{atv.nome}</h2>
                            <br/>
                            <br/>
                                <img src={atv.nome}></img>
                            <br/>
                            <br/>
                            <br/>
                                <h3>Golpe: {atv.golpe}</h3>
                                <h3>Defesa: {atv.defesa}</h3>
                        </div>
        
                        <button onClick={() => remove(atv.identidade)}>Excluir</button>
                    </ul>
                </main>
            )}
        </div>

    );

    
}
