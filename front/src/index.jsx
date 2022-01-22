import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import AddPost from './components/add-post';
import PostsContainer from './containers/posts';
import catImage from './cat.jpg'
import ProfileContainer from './containers/profile'
import { HeaderContainer } from './containers/header';
import RegularRoute from './components/regularRoute';
import DateRoute from './components/dateRoute';
import ErrorBoundary from './components/helper-components/error-boundary/ErrorBoundary'
import UserContainer from './containers/users/users';
import UserDetailsContainer from './containers/user-details';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <BrowserRouter>
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<PostsContainer />} />
            <Route path="/users" element={<UserContainer />} />
            <Route path="/users/:id" element={<UserDetailsContainer />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/profile" element={<ProfileContainer image={catImage} name="Matvii" description="lorem ipsum" email="matv.shept@gmail.com" />} />
            <Route path="/posts/:id" element={<RegularRoute />} />
            <Route path="/date/:DATE" element={<DateRoute />} />
            <Route path="*" element={<div className='not-found'>NOT FOUND 404</div>} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
