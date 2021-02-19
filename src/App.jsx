import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import NotFound from './paginas/NotFound'
import Post from './paginas/Post'
import Category from './paginas/Category'

import Header from './components/Header'

import './assets/css/base/base.css'

function App() {
  return (
 <Router>
     <Header />
   <Switch>
     <Route exact path="/" component={Home} />
     <Route  path="/sobre" component={Sobre} />
     <Route  path="/posts/:id" component={Post} />
     <Route  path="/categoria/:name" component={Category} />
     <Route  component={NotFound} />
   </Switch>
 </Router>
  )
}

export default App
