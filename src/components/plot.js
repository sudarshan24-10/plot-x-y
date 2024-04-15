import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Plot = ({ xData, yData }) => {
  const graphRef = useRef(null);
  const graph = useRef(null);

  useEffect(() => {
    if (graphRef && graphRef.current) {
      if (graph.current) {
        graph.current.destroy();  // if graph.current is not null means graph already exists so destroy it and then create a new graph
      }

      const ctx = graphRef.current.getContext('2d');  // initilize the chart/graph
      graph.current = new Chart(ctx, {
        type: 'scatter', 
        data: {
          datasets: [{                                                        
            label: 'scatter dataset',
            data: xData.slice(0, 50).map((_, i) => ({                  // mapping only 0 to 50 values as mentioned in task                                                       // there are few edge cases to handle like if y or x arrays are having value count less then 50 values didnt handle them because in task it is already mentioned that use 1st 50 values
                x: parseFloat(xData[i].RandomNumber),
                y: parseFloat(yData[i].RandomNumber)
            })),
            backgroundColor: 'rgba(14, 14, 14, 0.8)',
          }]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            },
            y: {
              type: 'linear',
              position: 'left'
            }
          }
        }
      });
    }
  }, [xData, yData]);  // if x data or y data changes re render the plot with new values

  return <canvas ref={graphRef} />;  
}; 


export default Plot;
