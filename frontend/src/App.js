import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "./Store/Slice/AllBlogsSlice";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import MyBlogs from "./Component/MyBlogs/MyBlogs";
import Account from "./Component/Account/Account";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={<Home />}></Route>
          <Route path="/myblogs" component={<MyBlogs />}></Route>
          <Route path="/account" component={<Account />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
