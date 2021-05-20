import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarketListComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1200/add-market').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <ol>
        <li>Market name</li>
        <li>Market location</li>
      </ol>
      {data.map((el) => (
        // the key attribute is to ensure we have uniqueness within each element created
        <div key={el.id}>
          <p>{el.market_name}</p>
          <p>
            <span>{el.market_location}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MarketListComponent;
// /* {} means js and read more on map()*/
