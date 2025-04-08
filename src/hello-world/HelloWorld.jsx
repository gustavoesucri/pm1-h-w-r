import { useState as state, useState } from "react";
export default function HelloWorld(){
    // A função sempre retorna um código .jsx para ser renderizado na Tela. 

    let [name, setName] = useState('');  // O primeiro é a variável, o segundo é o método.
    let [message, setMessage] = useState('');
    // Se quer usar uma variável na tela, tem que usar o state.
    // Se for no backend, melhor não usar, que é uma coisa a menos para o React monitorar.

    const handleHelloWorld = () => setMessage(`Hello world, ${name}!`);

    const handleClear = () => {
        setMessage('');
        setName('');
    };

    const handleChangeInput = (event) => {
        setName(event.target.value);
    };

    const handleKeyInput = (event) => {
        if(event.key === 'Escape'){
            handleClear();
        }
        if(event.key === 'Enter'){
            handleHelloWorld();
        }
    }

    return (
        <section>
        <h1>Hello World!</h1>
        <input type="text" onKeyUp={handleKeyInput} onChange={handleChangeInput} value={name} />
        <button onClick={handleHelloWorld}>Hello World</button>
        <button onClick={handleClear}>Limpar</button>
        {/* {name ? <p>Hello world, {name}!</p> : undefined} */}
        {/* {name && <p>Hello world, {name}!</p>} */}
        {message && <p>{message}</p>}
        </section>
    )
}


// name ? name : ''

// Ternário reduzido:
// name ?? ''
// name || ''

// const HelloWorld = () => {

// }

// export default HelloWorld;

// ---------

// export class HelloWorld extends React.Component {
//     render(){

//     }
// }