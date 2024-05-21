import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [url, setUrl] = useState('');

    useEffect(() => {
      axios.get('http://localhost:3001/')
      .then(response => {
        setUrl(response.data.url)
        console.log(response.data.url)
      })
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <p>Hello world</p>
          {url ? (
            <img src={url} width="500"/>
          ) : (
            <p>Loading image...</p>
          )}
        </div>
        <body>
        <input type="file"
        name="newImage"
         />
      </body>
      </header>
    </div>
  );
}

export default App;
