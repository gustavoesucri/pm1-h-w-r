import { useState } from "react";
export default function Imc(){

    const [message, setMessage] = useState("");

    function operacao(){
        const peso = Number(document.getElementById("num1").value);
        const altura = Number(document.getElementById("num2").value);

        const imc = Number((peso/(altura**2)).toFixed(2))

        let grau = ""

        if (imc < 16) {
            grau = "Magreza grave"
        }
        else if ((16 <= imc) && (imc < 17)) {
            grau = "Magreza moderada"
        }
        else if ((17 <= imc) && (imc < 18.5)) {
            grau = "Magreza leve"
        }
        else if ((18.5 <= imc) && (imc < 25)) {
            grau = "Saudável"
        }
        else if ((25 <= imc) && (imc < 30)) {
            grau = "Sobrepeso"
        }
        else if ((30 <= imc) && (imc < 35)) {
            grau = "Obesidade Grau I"
        }
        else if ((35 <= imc) && (imc < 40)) {
            grau = "Obesidade Grau II"
        }
        else if (40 < imc) {
            grau = "Obesidade Grau III"
        }
        return setMessage(`O seu IMC é ${imc}. Esse valor é considerado ${grau}.`);

        }


    function limpaCampos(){
        setMessage("");
        document.getElementById("num1").value = ""
        document.getElementById("num2").value = ""
    }

     return <section>
        <p>Cálculo de IMC</p>
                 <br/>
                 <input id="num1" type="text" placeholder="peso" title="Digite seu peso aqui"/>
                 <input id="num2" type="text" placeholder="altura" title="Digite sua altura aqui"/>
                 <br/>
                 <button onClick={operacao}>Calcular</button>
                 <button onClick={limpaCampos}>Limpar</button>
                 {message && <p>{message}</p>}
            </section>


}


// Crie uma aplicação web para cálculo do Índice de Massa Corpórea. Leve em consideração a tabela para
// mostrar a classificação. Fórmula: IMC = peso / altura^2. Faça dois campos para pegar as informações e
// apresente o resultado após o usuário clicar em um botão “Calcular”. Adicione um botão “Limpar” para
// limpar as informações.

/* TABELA:
<16 Magreza grave
16 a < 17 Magreza moderada
17 a < 18.5 Magreza leve
18.5 a < 25 Saudável
25 a < 30 Sobrepeso
30 a < 35 Obesidade Grau I
35 a < 40 Obesidade Grau II
> 40 Obesidade Grau III
*/
