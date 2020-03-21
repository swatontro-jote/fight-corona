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
import Stats from './Stats.js';
import Papa from 'papaparse'
import CountUp from 'react-countup';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



let rows = [];
let counter = 0;

let sumOfAffected = 0, sumOfDeaths = 0, sumOfRecovered = 0, bdAffected, bdDeaths, bdRecovered;

export default function SimpleTable() {

    const [covid19Data, setCovid19Data] = useState([]);
    
    const classes = useStyles();
    let arrayOfRows;
    let data = []; 

    useEffect(() => {
        const getData = async () => {  
            Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-19-2020.csv', {
                download: true,
                complete: function fetch(results) {
                    //console.log(results);
                    setCovid19Data(results.data);
                    //return results;
                }
            });
        }
        getData();
      }, []);

    
    if (covid19Data.length === 0) return <div className="loading" style={{padding : 30, fontWeight: 700, color: 'violet', fontSize: 50}}>Real Time Covid-19 statistics Loading... </div>;
    arrayOfRows = [...covid19Data];

    for(let i = 1; i < arrayOfRows.length; i++) {
        data.push({
            serial: i,
            province: arrayOfRows[i][0],
            country: arrayOfRows[i][1],
            lastUpdatedAt: arrayOfRows[i][2],
            confirmed: Number(arrayOfRows[i][3]),
            deaths: Number(arrayOfRows[i][4]),
            recovered: Number(arrayOfRows[i][5]),         
        });
    }
    
    //console.log(data);
    for(let i = 0; i < data.length - 1; i++) {
        if(data[i].country === "Bangladesh") {
            bdAffected = data[i].confirmed;
            bdDeaths = data[i].deaths;
            bdRecovered = data[i].recovered;
        }
        if(data[i].province === "") {
            data[i].country = data[i].country;
        } else {
            data[i].country = data[i].country + "(" + data[i].province + ")";
        }

        sumOfAffected += data[i].confirmed;   
        sumOfDeaths += data[i].deaths; 
        sumOfRecovered += data[i].recovered;

    }
    
    rows = [...data];

    return (
       <>
       <span className="Nav" style={{display: 'flex',  backgroundColor: '#e6b800', width: window, height: 200, justifyContent: 'center'}}>
          <a style={{marginRight: 20, marginTop: 10}} href="https://www.facebook.com/SwatontroJote/" target="_blank">
            <img src={require('../src/images/sjote.jpg')} className="logo" style={{width: 60, height: 60, marginTop: 50}} alt="" />
          </a>
          <span className="text-of-corona" style={{fontWeight: 900, color: 'black', fontSize: 45, marginTop: 50}}>করোনা আপডেট বাংলাদেশ</span>
        </span> 

        <Stats affected={sumOfAffected} deaths={sumOfDeaths} recovered={sumOfRecovered} bdAffected={bdAffected} bdDeaths={bdDeaths} bdRecovered={bdRecovered}/>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{background: '#e6b800'}}
            >
            <Typography className={classes.heading} style={{display: 'flex', margin: 'auto', fontWeight: 400, color: 'black', fontSize: 20}}>পূর্ণ উপাত্ত দেখুন (View Full Data)</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
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
                            <TableCell align="left">{row.serial}</TableCell>
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

        <p className="symptoms" style={{fontSize: 35, fontWeight: 500}}>উপসর্গ</p>
        <img 
          className = "images"
          style={{width: 300, height: 450}}
          src={require('../src/images/sym0.png')}/>
        <img 
          className = "images"
          style={{width: 300, height: 450}}
          src={require('../src/images/sym1.png')}/>
        <p className="spread" style={{fontSize: 35, fontWeight: 500}}>কিভাবে ছড়ায়</p>
        <img 
          className = "images"
          style={{width: 300, height: 450}}
          src={require('../src/images/spread3.png')}/>
        <p className="prevention" style={{fontSize: 35, fontWeight: 500}}>প্রতিরক্ষা</p>
        <img 
          className = "images"
          style={{width: 300, height: 450}}
          src={require('../src/images/prev0.png')}/>
        <img 
          className = "images"
          style={{width: 300, height: 450}}
          src={require('../src/images/prev1.jpeg')}/>
        <p className="icder" style={{fontSize: 35, fontWeight: 500}}>জরুরি প্রয়োজনে</p>
        <img 
          className = "images"
          style={{width: 300, height: 450}}
          src={require('../src/images/ICDER.png')}/>

        <p className="info" style={{fontSize: 25, fontWeight: 500}}>*রিয়েল টাইম ডেটা প্রতিনিয়ত আমেরিকার জন হপকিন্স বিশ্ববিদ্যালয় থেকে সংগ্রহ করে এখানে উপাত্ত অংশে দেখানো হচ্ছে।</p>
       </> 
    );
}
