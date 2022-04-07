import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter basename="/blog/">
      <Header />
      <div className="main-wrapper">
        <main>
          <Routes>
            <Route index element={<Posts />} />
            <Route path="post">
              <Route index element={<NotFound />} />
              <Route path=":postId" element={<Post />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;