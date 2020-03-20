import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Stats from './Stats.js'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const rows = [];

let sumOfAffected = 0, sumOfDeaths = 0, sumOfRecovered = 0, bdAffected, bdDeaths, bdRecovered;

export default function SimpleTable() {
    const [affectedPlaces, setAffectedPlaces] = useState([]);
    const [message, setMessage] = useState("");
    const [lastChecked, setLastChecked] = useState("");

    useEffect(() => {
      const getData = async () => {
     
        const res = await axios({
          "method":"GET",
          "url":"https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key":"722bd92681mshbaf4f305bdd412ep1bb136jsn6629319fdb37"
          }
        });

        setAffectedPlaces(res.data.data.covid19Stats);
        setMessage(res.data.message);
        setLastChecked(res.data.lastChecked);
      }
      getData();
    }, []);
    const classes = useStyles();
    if(affectedPlaces.length === 0) return <div>Real Time Covid-19 statistics Loading...</div>;
    let data = [...affectedPlaces];
  
    console.log(data);

    function addDetum(data)  {
        rows.push(data);
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].country === "Bangladesh") {
            bdAffected = data[i].confirmed;
            bdDeaths = data[i].deaths;
            bdRecovered = data[i].recovered;
        }
        let country;
        if(data[i].province === "") {
            country = data[i].country;
        } else {
            country = data[i].country + "(" + data[i].province + ")";
        }
        //let province = data[i].province;
        let lastUpdatedAt = data[i].lastUpdate;
        let confirmed = data[i].confirmed;
        sumOfAffected += confirmed;
        let deaths = data[i].deaths;
        sumOfDeaths += deaths; 
        let recovered = data[i].recovered;
        sumOfRecovered += recovered;

        console.log(sumOfAffected);

        addDetum( {country, lastUpdatedAt, confirmed, deaths, recovered} );

    }
    console.log(sumOfAffected);

    return (
       <> 
        <Stats affected={sumOfAffected} deaths={sumOfDeaths} recovered={sumOfRecovered} bdAffected={bdAffected} bdDeaths={bdDeaths} bdRecovered={bdRecovered}/>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>পূর্ণ তথ্য দেখুন (View Full Data)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="left">Confirmed Cases</TableCell>
                            <TableCell align="left">Death Cases</TableCell>
                            <TableCell align="left">Recovery Cases</TableCell>
                            <TableCell align="left">Last Updated</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.country}>
                            <TableCell align="left">
                                {row.country}
                            </TableCell>
                            <TableCell align="left">{row.confirmed}</TableCell>
                            <TableCell align="left">{row.deaths}</TableCell>
                            <TableCell align="left">{row.recovered}</TableCell>
                            <TableCell align="left">{row.lastUpdatedAt}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        
       </> 
    );
}
