import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [myDate, setData] = useState([]);
  //Using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10 text-green-800">
        Fetch API Using Axios
      </h1>
      <div className="flex gap-[1px] flex-wrap">
        {myDate.map((post) => {
          return (
            <div className=" rounded-[6px] p-3 border mx-auto mt-10 md:w-1/4 ">
              <div>Id: {post.id}</div>
              <div>Name: {post.name}</div>
              <div>Email: {post.email}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
