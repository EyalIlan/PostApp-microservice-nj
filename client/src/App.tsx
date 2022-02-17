import React from 'react';
import CreatePost from './Components/PostCreate/PostCreate'
import PostList from './Components/PostList/PostList'
import './App.css';


function App() {
  return (
    <div className="App container">
        <h1>hello world</h1>
        <h1>Main Title</h1>
        
        <CreatePost></CreatePost>
        <hr />
        <PostList></PostList>
    </div>
  );
}

export default App;
