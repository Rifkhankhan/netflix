
import React from "react";
import Card from "../Card/Card";
import './ItemList.css'
const ItemList = ({items}) => {
  return <div className="netflix-itemList-list">
    {items.map(item => <Card key={item._id} item={item} />)}
  </div>;
};

export default ItemList;
