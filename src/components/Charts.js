import React, { useState, useEffect   }  from 'react';
import axios from 'axios';
import '../index.css';
import { VictoryLine } from "victory";

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

      setCryptoData(cryptoArray)
  }
  
    return(
      <>
        <div style={{height: 100, display: "flex", justifyContent: "flex-end"}}>
            <VictoryLine
              width={800}
              style={{
                data: { stroke: props.lineColor, strokeWidth: 20 },
                parent: { border: "0px solid #ccc", width: 100}
              }}
              data={cryptoData}
            />
        </div>
      </>
    )
    
}

export default ChartsJS