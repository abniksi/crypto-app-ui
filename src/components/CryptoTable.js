import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ChartsJS from './Charts';

const StyledTableCell = withStyles((theme) => ({
    head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    },
    root:{
        fontSize: 20
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    root: {
        display: 'flex',
        // marginTop: theme.spacing.unit * 3,
        overflowX: 'hide',
      },
      table: {
        minWidth: 340,
      },
      tableCell: {
        paddingRight: 4,
        paddingLeft: 5
      }
});

export default function BasicTable(props) {
    const [bitcoinPrice, setBitcoinPrice] = useState();
    const [ethereumPrice, setEthereumPrice] = useState();
    const [tetherPrice, setTetherPrice] = useState();
    const [polkadotPrice, setPolkadotPrice] = useState();
    const [ripplePrice, setRipplePrice] = useState();
    const [cardanoPrice, setCardanoPrice] = useState();
    const [litecoinPrice, setLitecoinPrice] = useState();
    const [bitcoinCashPrice, setBitcoinCashPrice] = useState();
    const [chainlinkPrice, setChainlinkPrice] = useState();
    const [stellarPrice, setStellarPrice] = useState();

    const [priceChanges, setPriceChanges] = useState([]);
    //Getting all current prices on page load
    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/bitcoin'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/ethereum'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/tether'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/polkadot'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/ripple'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/cardano'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/litecoin'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/bitcoin-cash'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/chainlink'),
                fetch('https://braden-crypto-service.herokuapp.com/api/cryptoPrice/stellar'),
            ]).then(function (responses) {
                // Get a JSON object from each of the responses
                return Promise.all(responses.map(function (response) {
                    return response.json();
                }));
            }).then(function (data) {
                setBitcoinPrice('$' + data[0]);
                setEthereumPrice('$' + data[1]);
                setTetherPrice('$' + data[2]);
                setPolkadotPrice('$' + data[3]);
                setRipplePrice('$' + data[4]);
                setCardanoPrice('$' + data[5]);
                setLitecoinPrice('$' + data[6]);
                setBitcoinCashPrice('$' + data[7]);
                setChainlinkPrice('$' + data[8]);
                setStellarPrice('$' + data[9]);
            }).catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });
        }

        const getPriceChange = async () => {
            await Promise.all([
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/bitcoin'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/ethereum'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/tether'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/polkadot'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/ripple'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/cardano'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/litecoin'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/bitcoin-cash'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/chainlink'),
                fetch('https://braden-crypto-service.herokuapp.com/api/crypto24HourChange/stellar'),
            ]).then(function (responses) {
                // Get a JSON object from each of the responses
                return Promise.all(responses.map(function (response) {
                    return response.json();
                }));
            }).then(function (data) {
                setPriceChanges(data);
            }).catch(function (error) {
                // if there's an error, log it
                console.log(error);
            });
        }
        fetchData();
        getPriceChange();
    }, [props]);
    
    const createData = (name, url, currentPrice, priceChange, chart) => {
        return { name, url, currentPrice, priceChange, chart };
    }
    
    const cryptoNames = {bitcoin: "bitcoin", ethereum: "ethereum", tether: "tether", polkadot:"polkadot", ripple: "ripple", cardano: "cardano", litecoin: "litecoin", bitcoinCash: "bitcoin-cash", chainlink: "chainlink", stellar: "stellar" }
    
    const rows = [
        createData('  Bitcoin BTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', bitcoinPrice, parseFloat(priceChanges[0]).toFixed(2) + '%', <ChartsJS lineColor={"#ff9900"} cryptoName={cryptoNames.bitcoin}/>),
        createData('  Ethereum ETH', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', ethereumPrice, parseFloat(priceChanges[1]).toFixed(2) + '%', <ChartsJS lineColor={"#000000"} cryptoName={cryptoNames.ethereum}/>),
        createData('  Tether USDT', 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png', tetherPrice, parseFloat(priceChanges[2]).toFixed(2) + '%', <ChartsJS lineColor={"#26a17b"} cryptoName={cryptoNames.tether}/>),
        createData('  Polkadot DOT', 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png', polkadotPrice, parseFloat(priceChanges[3]).toFixed(2) + '%', <ChartsJS lineColor={"#e6007a"} cryptoName={cryptoNames.polkadot}/>),
        createData('  XRP XRP', 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png', ripplePrice, parseFloat(priceChanges[4]).toFixed(2) + '%', <ChartsJS lineColor={"#000000"} cryptoName={cryptoNames.ripple}/>),
        createData('  Cardano ADA', 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png', cardanoPrice, parseFloat(priceChanges[5]).toFixed(2) + '%', <ChartsJS lineColor={"#2a71d0"} cryptoName={cryptoNames.cardano}/>),
        createData('  Litecoin LTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png', litecoinPrice, parseFloat(priceChanges[6]).toFixed(2) + '%', <ChartsJS lineColor={"#00aeff"} cryptoName={cryptoNames.litecoin}/>),
        createData('  Bitcoin Cash BCH', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png', bitcoinCashPrice,parseFloat(priceChanges[7]).toFixed(2) + '%', <ChartsJS lineColor={"#8dc351 "} cryptoName={cryptoNames.bitcoinCash}/>),
        createData('  Chainlink LINK', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png', chainlinkPrice, parseFloat(priceChanges[8]).toFixed(2) + '%', <ChartsJS lineColor={"#375bd2"} cryptoName={cryptoNames.chainlink}/>),
        createData('  Stellar XLM', 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png', stellarPrice, parseFloat(priceChanges[9]).toFixed(2) + '%', <ChartsJS lineColor={"#333"} cryptoName={cryptoNames.stellar}/>),
    ];

    const classes = useStyles();

    return (
        <>
            <h1 style={{ textAlign: "center", padding: 50}}>Popular Crypto</h1>
            <div style={{ width: '100%' }}>
                <TableContainer component={Paper}>
                <Table style={{ margin: 'auto', tableLayout: 'fixed' }} className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Current Price</StyledTableCell>
                    <StyledTableCell align="right">24 Hour Change</StyledTableCell>
                    <StyledTableCell align="right">30 Day Chart</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            <img style={{height: 36, width: 36}} src={row.url} />
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.currentPrice}</StyledTableCell>
                        <StyledTableCell align="right" style={{ color: "#FF0000" }}>{row.priceChange}</StyledTableCell>
                        <StyledTableCell align="right">{row.chart}</StyledTableCell>
                    </StyledTableRow>
                    ))}
                </TableBody>
                </Table>
                </TableContainer>
            </div>
        </>
  );
}