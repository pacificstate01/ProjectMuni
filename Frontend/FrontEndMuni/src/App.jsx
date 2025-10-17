import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate,Outlet } from 'react-router-dom';
//LOGIN
import Login from './routes/login.jsx';
//FORM2A
import Form2ALayout from './routes/Formulario2A/Form2ALayout.jsx';
import Formulario2A1 from './routes/Formulario2A/Formulario2A1.jsx';
import Formulario2A2 from './routes/Formulario2A/Formulario2A2.jsx';
import Formulario2A3 from './routes/Formulario2A/Formulario2A3.jsx';
import Formulario2A4 from './routes/Formulario2A/Formulario2A4.jsx';
import Formulario2A5 from './routes/Formulario2A/Formulario2A5.jsx';
import Formulario2A6 from './routes/Formulario2A/Formulario2A6.jsx';
// MAIN MENU
import MainMenu from './routes/MainMenu/menu.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/menu' element={<MainMenu />}/>

        
        <Route path='/form2a' element={<Form2ALayout />}>
          <Route index element={<Navigate to="paso1" replace />} />
          <Route path="paso1" element={<Formulario2A1/>} />
          <Route path="paso2" element={<Formulario2A2 />} />
          <Route path="paso3" element={<Formulario2A3 />} />
          <Route path="paso4" element={<Formulario2A4 />} />
          <Route path="paso5" element={<Formulario2A5 />} />
          <Route path="paso6" element={<Formulario2A6 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;