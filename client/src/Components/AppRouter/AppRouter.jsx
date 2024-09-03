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
          <Route path='/Sorteringsguide' element={<Sorteringsguide />} />
          <Route path='/Genbrugsstationer' element={<Genbrugsstation />} />
          <Route path='/Artikler' element={<Artikler />} />
          <Route path='/Bestil' element={<Bestil />} />
          <Route path='/Login' element={<Login />} />
      </Routes>
    );
};
