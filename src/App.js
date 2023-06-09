// Made by:
// John Ratcliffe
// Louis Sorensen
// Ben Gilpin

import "./App.css";
import React, { useState } from "react";
import PostForm from "./PostForm";
import Post from "./Post";
// import EmojiPicker from "emoji-picker-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import toastr from "toastr";
import 'toastr/build/toastr.min.css';


const App = () => {

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }

  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
    toastr["success"]("Task Added", "Success")
  };

  const handleLikePost = (post) => {
    const updatedPosts = posts.map((p) => {
      if (p === post) {
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    });
    setPosts(updatedPosts);
  };

  const handleDislikePost = (post) => {
    const updatedPosts = posts.map((p) => {
      if (p === post) {
        return { ...p, likes: p.likes - 1 };
      }
      return p;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">The Social</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#form">Form</Nav.Link>
          <Nav.Link href="#view">View</Nav.Link>
        </Nav>        
      </Navbar>
      
      <PostForm onAddPost={handleAddPost} />
      <hr />
      {posts.map((post, index) => (
        <Post
          key={index}
          post={post}
          onLike={handleLikePost}
          onDislike={handleDislikePost}
        />
      ))}
    </div>
  );
};

export default App;
