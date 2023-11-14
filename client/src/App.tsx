import React from 'react';
import { useEffect, useState } from 'react';

interface BackendData {
  users: string[];
}


function App() {
  const [backendData, setBackendData] = useState<BackendData>({ users: [] });

  useEffect(() => {
    fetch("/ping")
      .then((response) => response.json())
      .then((data: BackendData) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{ user }</p>
        ))
      )}
      <span>mmmmmmmm</span>
    </div>
  );
}

export default App;