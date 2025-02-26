import React, { useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

function EventPrice  ()  {
    const {price}= useParams();
    useEffect(() => {
        console.log(price);
    }, [price]);
  return (
    <div>
        <Header/>
        <h2 className="text-danger text-center">Le prix est : {price}</h2>

    </div>
  );
};

export default EventPrice;