import React, { useState, useEffect   }  from 'react';
import axios from 'axios';
import '../index.css';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

function ChartsJS(props) {
  const [cryptoData, setCryptoData] = useState();
  useEffect(() => {
    makeChart(props.cryptoName);
  }, []);

  let cryptoArray = [];

  const makeChart = async (cryptoName) => {
      let cryptoResponse = await axios.get(`https://braden-crypto-service.herokuapp.com/api/cryptoMarketChart/${cryptoName}/usd/30`).then((response) => {return response.data});

      for(let i = 0; i < cryptoResponse.length; i++){
        cryptoArray.push({'x': i + 1, 'y': cryptoResponse[i][1]});
      }

      console.log(cryptoArray)
      setCryptoData(cryptoArray)
  }
  
    return(
      <>
        <div style={{height: 100}}>
          <VictoryChart
            theme={VictoryTheme.material}
          >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={cryptoData}
            />
          </VictoryChart>
        </div>
      </>
    )
    
}

export default ChartsJS