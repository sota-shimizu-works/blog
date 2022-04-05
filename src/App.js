import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <h1><Link to="/">Blog</Link></h1>
      <Routes>
        <Route index element={<Posts />} />
        <Route path="post">
          <Route index element={<NotFound />} />
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;