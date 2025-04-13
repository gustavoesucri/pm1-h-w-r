import { useState } from "react";

export default function Calculadora(){


    let [message, setMessage] = useState('');
    let [n1, setN1] = useState('');
    let [n2, setN2] = useState(''); 

    function setValues(){
        setN1(parseFloat(document.getElementById("num1").value))
        setN2(parseFloat(document.getElementById("num2").value))
    }

    function soma(){
        setValues()
        return setMessage(`A soma de ${n1} + ${n2} é ${n1+n2}`)
}



     return <section>
        <p>Digite os números e selecione uma opção para ver o resultado:</p>
                 <br/>
                 <input id="num1" type="number" />
                 <input id="num2" type="number" />
                 <br/>
                 <button onClick={soma}>Soma</button>
                 <button>Subtração</button>
                 <button>Multiplicação</button>                
                 <button>Divisão</button>
                 {message && <p>{message}</p>}
            </section>

}

{/* //             <p>Selecione uma opção e digite os números:</p>
//             <div>
//                 <button onClick={setValues()}>Seta Valores</button>
//                 <button onClick={soma(n1,n2)}>Soma</button>
//                 <button>Subtração</button>
//                 <button>Multiplicação</button>
//                 <button>Divisão</button>
//             </div>
//             <div>
//             <input id="num1" type="number" value={n1}/>
//             <input id="num2" type="number" value={n2}/>
//             </div>
//             <div>
//             {message && <p>{message}</p>}
//             </div>
//             </section> */}



// Crie uma página web que faça operações básicas de soma, subtração, multiplicação e divisão e que
// contenha dois campos para informar os valores e uma opção para selecionar a operação. Ainda deve
// conter dois botões: Calcular, que realizará a operação, apresentando o resultado em um parágrafo e
// Limpar que apagará os valores dos campos e o resultado.