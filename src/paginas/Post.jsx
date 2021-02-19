import React, { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";

import { search } from "../api";

import "../assets/css/post.css";

const Post = () => {
  const [post, setPost] = useState({});
   const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    search(`/posts/${id}`,setPost).catch(() => history.push('/404'))
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.titulo}</h2>
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
