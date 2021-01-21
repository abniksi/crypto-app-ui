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

export default function BasicTable() {
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
        fetchData();
        
    }, []);

    const StyledTableCell = withStyles((theme) => ({
        head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        },
        body: {
        fontSize: 14,
        },
    }))(TableCell);
    
    const StyledTableRow = withStyles((theme) => ({
        root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
        minWidth: 800,
        },
    });

    const createData = (name, url, currentPrice, priceChange, chart) => {
        return { name, url, currentPrice, priceChange, chart };
    }

    const cryptoNames = {bitcoin: "bitcoin", ethereum: "ethereum", tether: "tether", polkadot:"polkadot", ripple: "ripple", cardano: "cardano", litecoin: "litecoin", bitcoinCash: "bitcoin-cash", chainlink: "chainlink", stellar: "stellar" }

    const rows = [
        createData('  Bitcoin BTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', bitcoinPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.bitcoin}/>),
        createData('  Ethereum ETH', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', ethereumPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.ethereum}/>),
        createData('  Tether USDT', 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png', tetherPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.tether}/>),
        createData('  Polkadot DOT', 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png', polkadotPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.polkadot}/>),
        createData('  XRP XRP', 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png', ripplePrice, '2.4%', <ChartsJS cryptoName={cryptoNames.ripple}/>),
        createData('  Cardano BTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png', cardanoPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.cardano}/>),
        createData('  Litecoin LTC', 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png', litecoinPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.litecoin}/>),
        createData('  Bitcoin Cash BCH', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png', bitcoinCashPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.bitcoinCash}/>),
        createData('  Chainlink LINK', 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png', chainlinkPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.chainlink}/>),
        createData('  Stellar XLM', 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png', stellarPrice, '2.4%', <ChartsJS cryptoName={cryptoNames.stellar}/>),
    ];

    const classes = useStyles();
    
    return (
        <div style={{ width: '100%', padding: 100, fontFamily:'Graphik' }}>
            <TableContainer component={Paper}>
            <Table style={{ margin: 'auto' }} className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">Current Price</StyledTableCell>
                <StyledTableCell align="right">24 Hour Change</StyledTableCell>
                <StyledTableCell align="right">60 Day Chart</StyledTableCell>
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
                    <StyledTableCell align="right">{row.priceChange}</StyledTableCell>
                    <StyledTableCell align="right" >{row.chart}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
        </div>
  );
}