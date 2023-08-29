import React from "react";
import React, {useState} from "react";


function Item({name, category}) {
  const [inCart, setInCart] = useState("");
  //   console.log(category);

function handleCart (event){
  const item= event.target.value
  setInCart("Added to Cart");
}

 
}


function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
