import axios from "axios";
import './Login.css'
import { useState, useEffect } from "react";
import { auth } from './Firebase'

const DisplayPost = ({presentuser}) => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);
  

  const addPost = async () => {
    const post = { title: "New Title Added", body: "New Body Added" };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
  };

  const handleUpdate = async (post) => {
    post.title = "Title Edited";
    post.body = "Body Edited ";
    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/" + post.id + post);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  if (posts.length === 0) return <h2> there are no post in the Database </h2>;
  return (
    <>
      <div className="container">
        <h1>Welcome {presentuser.email}</h1>
        <h2> Updated post in Api {posts.length} </h2>
        <button onClick={addPost} className="addpost">
          Add Post 
        </button>
    
        <button onClick={() => auth.signOut()} className="signout">Signout</button>

        <table className="table">
          <thead className="table-head">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="table-row">
                <td>{post.id}</td>
                <td> {post.title} </td>
                <td>{post.body}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    className="button-resource"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="button-resource"
                  >
                    Delete
                  </button>
                </td>
              </tr>
               
            ))}
             
          </tbody>
        
        </table>
      </div>
    </>
  );
};

export default DisplayPost;