import React from "react";
import { useDispatch } from "react-redux";
import { removePost } from "./postsSlice";

const Cards = ({ id, title, body,image }) => {
  const dispatch = useDispatch();
  return (
    <div className="card shadow-lg bh-white rounded-lg flex flex-col gap-8 p-5 relative pt-6 w-80 h-70 bg-white ">
      <span onClick={() => dispatch(removePost(id))}
        className="cross absolute top-1 right-1 flex items-center mt-1 cursor-pointer text-red-400"
        >
        <p className="font-semibold mr-2">X</p>
      </span>
      <h2 className="text-xl-pl-2 text-black mb-1">{title}</h2>
      <p className="pl-2 text-gray-500 font-medium">{body}</p>
      <p className="text-gray-400">Mon,21 Dec 2020 14:57 GMT</p>
      <span className="text-center block w-full font-bold text-blue-700">{id}</span>
    
    </div>
  );
};

export default Cards;
