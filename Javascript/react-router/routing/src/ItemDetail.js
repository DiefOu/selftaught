import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.thumbnailUrl} alt="" />
    </div>
  );
}

export default ItemDetail;