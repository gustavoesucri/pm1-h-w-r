import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Calculadora from './calculadora/Calculadora'
import HelloWorld from './hello-world/HelloWorld'
import Imc from './imc/imc'
import ListaCompras from './lista-compras/lista-compras'
import Home from './home/Home'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/hello-world' element={<HelloWorld />} />
      <Route path='/imc' element={<Imc />}/>
      <Route path='/calculadora' element={<Calculadora />}/>
      <Route path='/lista-compras' element={<ListaCompras />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
