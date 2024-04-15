import {useEffect, useState} from 'react';
import axios from "axios";
import Plot from './components/plot';

function App() {

  const [xData,setXData]=useState([]);
  const [yData,setYData]=useState([]);

  useEffect(()=>{
    const fectchData=async()=>{
      const yData= await axios.get("https://retoolapi.dev/o5zMs5/data");  // can use fetch also for fetching data
      const xData=await axios.get("https://retoolapi.dev/gDa8uC/data"); // can use fetch also for fetching data
      setXData(xData.data);
      setYData(yData.data);
    }

    fectchData();
  },[]);  // at evey re render of App component the fetch data function will fetch the data for x and y points

  return (
    <div className="App" style={{position:"relative"}}>
      <h1>Plot X and Y data points</h1>
      <div className='Plot'><Plot xData={xData}  yData={yData}></Plot></div> 
    </div>
  );
}

export default App;
