import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CountUp from 'react-countup';

const commafy = require('commafy');


class Stats extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        //console.log(this.props);
        // const affected = this.props.affected;
        // const deaths = this.props.deaths;
        // const recovered = this.props.recovered;
        // const bdAffected = this.props.bdAffected;
        // const bdDeaths = this.props.bdDeaths;
        // const bdRecovered = this.props.bdRecovered;


        const affected = 284534;
        const deaths = 11848;
        const recovered = 93568;
        const bdAffected = 24;
        const bdDeaths = 2;
        const bdRecovered = 3;
        const fatality = '4.16%';
        const bdFatality = '8.33%';

        const fontty = 20;
        const fontWei = 500;

        return (
            <div className="stats" style={{padding: 5}}>
                <span className="anim" style={{display: 'flex', justifyContent: 'center'}}>
                    <img className="animation" style={{width: 30, height : 30, marginTop: 27, marginRight: 10}} src="https://clipartmag.com/images/animated-globe-gif-33.gif"></img>
                    <p className="world" style={{fontSize: 25, fontWeight: 900}}>বিশ্ব পরিস্থিতি (World Situation)</p>
                </span>
                <div className="row-dashboard-world" style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                    <div className="infected" style={{paddingRight: 10}}>
                        <CountUp style={{fontSize: fontty, fontWeight: fontWei}} duration={2.75} start= {0} end={affected} />
                        <p className="confirmed-text"style={{fontSize: fontty, color: 'red', fontWeight: fontWei}}>আক্রান্ত<br/>(Affected)</p>
                    </div>
                    <div className="death" style={{paddingRight: 10}}>
                        {/* <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{deaths}</p> */}
                        <CountUp style={{fontSize: fontty, fontWeight: fontWei}} duration={2.75} start= {0} end={deaths} />
                        <p className="death-text"style={{fontSize: fontty, fontWeight: fontWei, color: 'black'}}>মৃত<br/>(Deaths)</p>
                    </div>
                    <div className="recovered" style={{paddingRight: 10}}>
                        <CountUp style={{fontSize: fontty, fontWeight: fontWei, marginTop: 50}} duration={2.75} start= {0} end={recovered} />
                        <p className="recovered-text"style={{fontSize: fontty, color: 'green', fontWeight: fontWei}}>সেরে উঠেছেন<br/>(Recovered)</p>
                    </div>
                    <div className="fatality" style={{paddingRight: 1}}>
                        <span className="fatality-number" style={{fontSize: fontty, fontWeight: fontWei, paddingTop: 0}}>{fatality}</span>
                        <p className="fatality-text"style={{fontSize: fontty, color: 'red', fontWeight: fontWei, marginBottom: 10}}>মৃত্যুহার<br/>(Fatality Rate)</p>
                    </div>
                </div>
                <span className="anim-bd" style={{display: 'flex', justifyContent: 'center'}}>
                    <img className="animation" style={{width: 30, height : 30, marginTop: 27, marginRight: 10}} src="https://bestanimations.com/Flags/Asia/bangladesh/bangladesh-flag-waving-gif-animation-4.gif"></img>
                    <p className="bd" style={{fontSize: 25, fontWeight: 900}}>বাংলাদেশ পরিস্থিতি (Bangladesh Situation)</p>
                </span>
                <div className="row-dashboard-world" style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 5
                    }}>
                    <div className="infected" style={{paddingRight: 10}}>
                        <CountUp style={{fontSize: fontty, fontWeight: fontWei}} duration={2.75} start= {0} end={bdAffected} />
                        <p className="confirmed-text"style={{fontSize: fontty, color: 'red', fontWeight: fontWei}}>আক্রান্ত<br/>(Affected)</p>
                    </div>
                    <div className="death" style={{paddingRight: 10}}>
                        <CountUp style={{fontSize: fontty, fontWeight: fontWei}} duration={2.75} start= {0} end={bdDeaths} />
                        <p className="death-text"style={{fontSize: fontty, fontWeight: fontWei}}>মৃত<br/>(Deaths)</p>
                    </div>
                    <div className="recovered" style={{paddingRight: 10}}>
                        <CountUp style={{fontSize: fontty, fontWeight: fontWei}} duration={2.75} start= {0} end={bdRecovered} />
                        <p className="recovered-text"style={{fontSize: fontty, color: 'green', fontWeight: fontWei}}>সেরে উঠেছেন<br/>(Recovered)</p>
                    </div>
                    <div className="fatality" style={{paddingLeft: 1}}>
                        {/* <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdFatality}</p> */}
                        <span className="fatality-number" style={{fontSize: fontty, fontWeight: fontWei, paddingTop: 0}}>{bdFatality}</span>
                        <p className="fatality-text"style={{fontSize: fontty, color: 'red', fontWeight: fontWei}}>মৃত্যুহার<br/>(Fatality Rate)</p>
                    </div>
                </div>
            </div>    
        );
    }
}
    
      
export default Stats;
