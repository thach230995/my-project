import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store/store';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footers'; 
import PartnerRegistrationPage from './page/PartnerRegistrationPage';
import PlaygroundListPage from './page/PlaygroundListPage'; 
import ContactListPage from './page/ContactListPage';
import IntroductionListsPages from './page/IntroductionListsPages';
import AdminListPage from './page/AdminListPage';
import SearchBar from './components/SearchBar';
import PlaygroundDetail from './components/PlaygroundDetail';
import PlaygroundLists from './components/PlaygroundLists';
import DataBase from './components/DataBase';
import ProductSideBarPage from './page/ProductSideBarPage';



function App() {
  
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Menu />
                    <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Home/:id" element={<Main />} />
                   <Route path="/gioi-thieu" element={<IntroductionListsPages />} />
                   <Route path="/dang-ky-doi-tac" element={<PartnerRegistrationPage />} />
                   <Route path="/ProductSideBarPage" element={<ProductSideBarPage />} />
                   <Route path="/danh-sach-san" element={<PlaygroundListPage />} />
                  <Route path="/lien-he" element={<ContactListPage />} />
                  <Route path="/trang-quan-tri-vien" element={<AdminListPage />} />
                  <Route path="/danh-sach-san" element={<PlaygroundLists />} />
                  <Route path="/chi-tiet-san/:id" element={<PlaygroundDetail />} />
                  <Route path="/du-Lieu-San-Bong-Da/:id" element={<DataBase />} />
                    </Routes>
                    <div>
           
            <Footer /> 
            
        </div>
                    
                </div>
            </Router>
        </Provider>
    );
}

export default App;
