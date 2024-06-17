import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setcurrentPage } from "./postsSlice";
import Cards from "./Cards";
import "./App.css"

const App = () => {
  const dispatch = useDispatch();
  const { items, currentPage, totalPages , loading} = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(fetchPosts())
      
    },3000);
    return ()=> clearTimeout(timeout)
    
  }, [dispatch
  ]);
  if(loading){
    return <h2 className="flex items-center justify-center h-screen">Loading....</h2>
  }
  return (
    <div>
      <div className="container mx-auto flex flex-wrap justify-center gap-16 bh-gray-200 relative py-8 ">
        {items.slice((currentPage - 1) * 6, currentPage * 6).map((item) => (
          <Cards
            id={item.id}
            title={item.title}
            body={item.body}
            key={item.id}
            image={item.image}
          />
        ))}
      </div>
      <div className="scollBar">
        <div id="pages">
          {totalPages.map((_, index) => (
            <span onClick={() => dispatch(setcurrentPage(index + 1))}>
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
