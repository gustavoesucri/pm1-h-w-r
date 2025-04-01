import { useState as state } from "react";
export default function HelloWorld(){
    // A função sempre retorna um código .jsx para ser renderizado na Tela. 

    let [name, setName] = state('');  // O primeiro é a variável, o segundo é o método.

    // Se quer usar uma variável na tela, tem que usar o state.
    // Se for no backend, melhor não usar, que é uma coisa a menos para o React monitorar.

    const handleHelloWorld = (event) => {
        console.log(event);
    };

    const handleClear = () => {
        console.log(arguments)
        setName('');
    };

    const handleChangeInput = (event) => {
        setName(event.target.value);
        console.log('name: ', name);
    };


    const handleKeyInput = (event) => {
        console.log(event);
        if(event.key === 'Escape'){
            setName('');
        }
        if(event.key === 'Enter'){
            setName('');
        }
    }

    return (
        <section>
        <h1>Hello World!</h1>
        <input type="text" onKeyUp={handleKeyInput} onChange={handleChangeInput} value={name} />
        <button onClick={handleHelloWorld}>Hello World</button>
        <button onClick={handleClear}>Limpar</button>
        {/* {name ? <p>Hello world, {name}!</p> : undefined} */}
        {name && <p>Hello world, {name}!</p>}
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