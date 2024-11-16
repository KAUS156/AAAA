


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Postss.module.css'; // Import CSS module

const Postss = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/us');
      setPosts(response.data);
      console.log(response.data); // Log the data returned from the API
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('text', text);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8080/api/us', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPosts([...posts, response.data]);
      setText('');
      setImage('');
      setImagePreview(''); // Clear image preview after submission
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/us/${id}`);
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className={styles.abc}> {/* Use CSS module class */}
     <center><h1> Awareness</h1></center> 
      <div className={styles.PostBox}> {/* Use CSS module class */}
        <div className={styles.card}> {/* Use CSS module class */}
          <div className={styles['card-header']}> {/* Use CSS module class */}
           <center><h1>Posts</h1></center> 
          </div>
          <div className={styles.postbox}> {/* Use CSS module class */}
            {posts.map(post => (
              <div className={styles.post} key={post.id}> {/* Use CSS module class */}
                <img src={post.image} ></img>
                <p>{post.text}</p>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className={styles.PostBar}> {/* Use CSS module class */}
            <textarea
              name="text"
              placeholder="Enter post text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              required
            />
            {imagePreview && (
              <img src={imagePreview} alt="Selected" style={{ maxWidth: '100px' }} />
            )}
            <div className='ggfgh'>
            <button type='submit' id='send'>Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Postss;
