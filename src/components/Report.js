import React, {useEffect, useState} from 'react';
import Table from "./Table";
// import {Link} from 'react-router-dom';

function Report() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/report');
        const items = await data.json();
        setItems(items);
    };

    const [query, setQuery] = useState("");
    const keys = ["firstname", "surname", "description"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };
    return (
        <div className="app">
          <body>
          <div class = "wrapper">
            <div class="input-data">
            <input
                className="search"
                placeholder="Enter any name or course name..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <div class="underline"></div>
            <label>Search bar</label>
            </div>
          </div>
          </body>
          <div>
            {<Table data={search(items)} />}
          </div>
    </div>
  );
}

export default Report;

// {item.firstname} ({item.surname}): {item.description} {item.CompletionStatus}
