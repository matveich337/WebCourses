import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from './components/add-post';
import { PostsContainer } from './containers/posts';
import catImage from './cat.jpg'
import { ProfileContainer } from './containers/profile'
import { HeaderContainer } from './containers/header';
import RegularRoute from './components/regularRoute';
import DateRoute from './components/dateRoute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderContainer />
      <Routes>
          <Route path="/" element={<PostsContainer description="description" city="Sumy" nickname="Max" image={catImage} date="12.01.2222"/>} />
          <Route path="/add-post" element={<AddPost />}/>
          <Route path="/profile" element={<ProfileContainer image={catImage} name="Matvii" description="lorem ipsum" email="matv.shept@gmail.com"/>} />
          <Route path="/posts/:id" element={<RegularRoute />} />
          <Route path="/date/:DATE" element={<DateRoute />} />
          <Route path="*" element={<div className='not-found'>NOT FOUND 404</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
