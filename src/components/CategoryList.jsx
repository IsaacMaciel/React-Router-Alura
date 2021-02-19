import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { search } from "../api";

import "../assets/css/blog.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    search(`/categorias`, setCategories);
  }, []);

  return (
    <ul className="lista-categorias container flex">
      {categories.map((category) => (
        <Link to={`/categoria/${category.id}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${category.id}`}
          >
            {category.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default CategoryList;
