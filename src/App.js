import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { actionCreators } from "./store";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/homePage";
import Post from "./components/post";
import NotFound from "./components/notFound";
import PostList from "./components/postist";
import EditPost from "./components/editPost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/createPost" component={Post} />
        <Route path="/posts" component={PostList} />
        <Route path="/editpost/:id" component={EditPost} />
        <Route component={NotFound} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
