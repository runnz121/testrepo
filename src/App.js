import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const getdata = await axios.get("http://3.35.179.18:8080/");
      console.log(getdata.data);
      setData(getdata.data);
    };
    getData();
  }, []);

  return <div>{data}</div>;
}

export default App;

