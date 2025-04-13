import { useState } from "react";

export default function Calculadora(){

    const [message, setMessage] = useState("");

    function soma(n1,n2){
        return setMessage(`A soma de ${n1} + ${n2} é = ${n1+n2}`)
}

    function subtracao(n1,n2){
        return setMessage(`A substração de ${n1} - ${n2} é = ${n1-n2}`)
    }

    function multiplicacao(n1,n2){
        return setMessage(`A multiplicação de ${n1} * ${n2} é = ${n1*n2}`)
    }

    function divisao(n1,n2){
        return setMessage(`A divisão de ${n1} / ${n2} é = ${n1/n2}`)
    }

    function operacao(){
        const n1 = Number(document.getElementById("num1").value);
        const n2 = Number(document.getElementById("num2").value);
        const oper = document.getElementById("operacao").value
        switch (oper) {
            case "1":
                soma(n1,n2);
                break;
            case "2":
                subtracao(n1,n2);
                break;
            case "3":
                multiplicacao(n1,n2);
                break;
            case "4":
                divisao(n1,n2);
                break;
            default:
                setMessage("Selecione uma operação válida.");

        }
    }

    function limpaCampos(){
        setMessage("");
        document.getElementById("num1").value = ""
        document.getElementById("num2").value = ""
    }

     return <section>
        <p>Digite os números e selecione uma opção para ver o resultado:</p>
                 <br/>
                 <input id="num1" type="text" />
                 <input id="num2" type="text" />
                 <select id="operacao">
                 <option value="1">Soma</option>
                 <option value="2">Subtração</option>
                 <option value="3">Multiplicação</option>
                 <option value="4">Divisão</option>
                 </select>
                 <br/><br/>

                 <button onClick={operacao}>Calcular</button>
                 <button onClick={limpaCampos}>Limpar</button>
                 {message && <p>{message}</p>}
            </section>

}

// Crie uma página web que faça operações básicas de soma, subtração, multiplicação e divisão e que
// contenha dois campos para informar os valores e uma opção para selecionar a operação. Ainda deve
// conter dois botões: Calcular, que realizará a operação, apresentando o resultado em um parágrafo e
// Limpar que apagará os valores dos campos e o resultado.

