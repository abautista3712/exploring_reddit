import React from "react";
// import React, { useState, useEffect } from "react";
import axios from "axios";
// import logo from "./logo.svg";
// import "./App.css";
import { QueryClient, useQuery } from "react-query";

const queryClient = new QueryClient();

function App() {
  const { isLoading, error, data } = useQuery("fetchLuke", () =>
    axios("http://swapi.dev/api/people/1/")
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }
  // const [isLoading, setLoading] = useState(false);
  // const [isError, setError] = useState(false);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setError(false);
  //     setLoading(true);

  //     try {
  //       const response = await axios("http://swapi.dev/api/people/1/");

  //       setData(response.data);
  //     } catch (error) {
  //       setError(true);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <h1>React Query example with Star Wars API</h1>
      {error && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
