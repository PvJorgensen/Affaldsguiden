import { Route, Routes } from 'react-router-dom';
import { Forside } from "../../Pages/Forside";
import { Genbrugsstation } from '../../Pages/Genbrugsstation';
import { ArticlePage } from '../../Pages/ArticlePage';
import { Bestil } from '../../Pages/Bestil';
import { Login } from '../../Pages/Login';
import { TrashGuidePage } from '../../Pages/TrashGuidePage';
import { SectionList } from '../SectionList/SectionList';
import { CategoryList } from '../CategoryList/CategoryList';
import { ArticleList } from '../ArticleList/ArticleList';
import { ArticleDetails } from '../ArticleDetails/ArticleDetails';

export const AppRouter = () => {
    return (
      <Routes>
          <Route index element={<Forside />} />
          <Route path='/Sorteringsguide' element={<TrashGuidePage />}> 
            <Route index element={<SectionList />}></Route>
            <Route path=':section_id' element={<CategoryList />}></Route>
          </Route>
          <Route path='/Genbrugsstationer' element={<Genbrugsstation />} />
          <Route path='/Artikler' element={<ArticlePage />}>
            <Route index element={<ArticleList />}></Route>
            <Route path=':article_id' element={<ArticleDetails />}></Route>
          </Route>
          <Route path='/Bestil' element={<Bestil />} />
          <Route path='/Login' element={<Login />} />
      </Routes>
    );
};
