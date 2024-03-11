import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stars/:id' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


