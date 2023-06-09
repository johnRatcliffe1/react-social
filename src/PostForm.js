import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';



const PostForm = ({ onAddPost }) => { // we pass in the onAddPost function as a prop
  const [username, setUsername] = useState(''); // we use the useState hook to create state for the username
  const [isUsernameValid, setIsUsernameValid] = useState(true); // we use the useState hook to create state for the username validation
  const [text, setText] = useState(''); // we use the useState hook to create state for the text and image
  const [image, setImage] = useState(''); 
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);


  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const handleTextChange = (event) => { // declares an event handler that will be triggered when the user types in the text input
    setText(event.target.value);
  };

  const handleImageChange = (event) => { // declares an event handler that will be triggered when the user types in the image URL
    setImage(event.target.value);
  };

  // const handleUsernameChange = (event) => { // declares an event handler that will be triggered when the user types in the username
  //   setUsername(event.target.value);
  // };
  const handleSubmit = (event) => { 
    event.preventDefault();

    if (username.trim() === '') {
      setIsUsernameValid(false);
      return;
    }

    setIsUsernameValid(true);

    const newPost = {
      username,
      text,
      image,      
      likes: 0
    };
    onAddPost(newPost, username, text, image);
    setUsername('');
    setText('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" required>Username</label>
        <input
          type="text"
          placeholder={` ${!isUsernameValid ? 'Username required' : ''}`}
          className="form-control"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder='What is on your mind?'
          className="form-control"
          id="text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <Button 
        variant="outline-primary"
        onClick={toggleEmojiPicker}
        aria-controls="emoji-picker"
        aria-expanded={isEmojiPickerOpen}
      >
        {isEmojiPickerOpen ? 'Hide Emoji Picker' : 'Show Emoji Picker'}
      </Button>
      <Collapse in={isEmojiPickerOpen}>
        <div id="emoji-picker">
          <EmojiPicker />
        </div>
      </Collapse>
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          placeholder='Enter an image URL, or copy an emoji, or leave blank for a random image'
          className="form-control"
          id="image"
          value={image}
          onChange={handleImageChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Post
      </button>
    </form>
    
  );
};

export default PostForm;

