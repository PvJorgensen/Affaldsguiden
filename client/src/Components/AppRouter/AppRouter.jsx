import { Route, Routes } from 'react-router-dom';
import { Forside } from "../../Pages/Forside";
import { Genbrugsstation } from '../../Pages/Genbrugsstation';
import { Artikler } from '../../Pages/Artikler';
import { Bestil } from '../../Pages/Bestil';
import { Login } from '../../Pages/Login';
import { Sorteringsguide } from '../../Pages/Sorteringsguide';


export const AppRouter = () => {
    return (
      <Routes>
          <Route index element={<Forside />} />
          <Route path='/Sorteringsguide' element={<Sorteringsguide />}></Route>
          <Route path='/Genbrugsstationer' element={<Genbrugsstation />}></Route>
          <Route path='/Artikler' element={<Artikler />}></Route>
          <Route path='/Bestil' element={<Bestil />}></Route>
          <Route path='/Login' element={<Login />}></Route>
      </Routes>
    );
  };