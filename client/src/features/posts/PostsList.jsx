import React, { useState, useEffect } from "react";
import { API_URL } from "../../../constants"; 
console.log("API_URL", API_URL);

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch posts from the API
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (e) {
          setError("An error occured while fetching posts");
          console.log("An error occured while fetching posts");
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post-container">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        );
      })}
    </div>
  );
}

export default PostsList;

