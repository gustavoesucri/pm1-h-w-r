import { useState } from "react"

export default function ListaCompras(){

    const [lista, setLista] = useState([]);

    const [message, setMessage] = useState("");

    function adicionar(){

        const item = <li>{document.getElementById("item").value}</li>;

        // Feito desse modo porque o useState é assíncrono e isso acaba gerando um problema de necessitar duplo clique.
        setLista(antigaLista => {
            const novaLista = [...antigaLista, item];
            setMessage(novaLista);
            return novaLista;
          });
          document.getElementById("item").value = ""
    }

    const handleKeyInput = (event) => {
        if(event.key === 'Enter'){
            adicionar();
            document.getElementById("item").value = ""
        }
    }


    return <section>
        <p>Lista de Compras</p>
        <input id="item" type="text" onKeyUp={handleKeyInput}></input>
        <button onClick={adicionar}>Adicionar</button>
        {message && <p>{message}</p>}
    </section>
}




// A aplicação Lista de Compras permite ao usuário adicionar, visualizar e remover itens que deseja
// comprar. O objetivo é simular uma lista simples, utilizando apenas os conceitos básicos de React:
// componentes e useState. Funcionalidades: adicionar novos itens à lista, exibir a lista atual de compras,
// remover itens individualmente, marcar como comprado (riscado).