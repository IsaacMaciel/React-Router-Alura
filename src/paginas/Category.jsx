import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import CategoryList from "../components/CategoryList";
import SubCategory from "../paginas/SubCategory";

import "../assets/css/blog.css";
import PostList from "../components/PostList";
import { search } from "../api";

const Category = () => {
  const { name } = useParams();
  const { path, url } = useRouteMatch();
  const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    search(`/categorias/${name}`, (categoria) => {
      setSubCategories(categoria.subcategorias);
    });
  }, [name]);
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <CategoryList />
      <ul className="lista-categorias container flex">
        {subcategories.map((subcategory) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${name}`}
            key={subcategory}
          >
            <Link to={`${url}/${subcategory}`}>{subcategory}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <PostList url={`/posts?categoria=${name}`} />
        </Route>
        <Route path={`${path}/:subcategory`}>
          <SubCategory />
        </Route>
      </Switch>
    </>
  );
};

export default Category;
