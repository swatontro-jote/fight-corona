import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

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


        const affected = '2,54,012';
        const deaths = '10,417';
        const recovered = '89,101';
        const bdAffected = '20';
        const bdDeaths = '1';
        const bdRecovered = '3';
        const fatality = '4.10%';
        const bdFatality = '5%'

        const fontty = 20;
        const fontWei = 500;

        return (
            <div className="stats" style={{padding: 5}}>
                <p className="world" style={{fontSize: 25, fontWeight: 900}}>বিশ্ব পরিস্থিতি (World Situation)</p>
                <div className="row-dashboard-world" style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                    <div className="infected" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="infected-number" style={{fontSize: fontty, fontWeight: fontWei}}>{affected}</p>
                        <p className="confirmed-text"style={{fontSize: fontty, color: 'red', fontWeight: fontWei}}>আক্রান্ত (Affected)</p>
                    </div>
                    <div className="death" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{deaths}</p>
                        <p className="death-text"style={{fontSize: fontty, fontWeight: fontWei}}>মৃত (Deaths)</p>
                    </div>
                    <div className="recovered" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="recovered-number" style={{fontSize: fontty, fontWeight: fontWei}}>{recovered}</p>
                        <p className="recovered-text"style={{fontSize: fontty, color: 'green', fontWeight: fontWei}}>সেরে উঠেছেন (Recovered)</p>
                    </div>
                    <div className="fatality" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="fatality-number" style={{fontSize: fontty, fontWeight: fontWei}}>{fatality}</p>
                        <p className="fatality-text"style={{fontSize: fontty, color: 'green', fontWeight: fontWei}}>মৃত্যুহার (Fatality Rate)</p>
                    </div>
                </div>
                <p className="bd" style={{fontSize: 25, fontWeight: 900}}>বাংলাদেশ পরিস্থিতি (Bangladesh Situation)</p>
                <div className="row-dashboard-world" style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 20
                    }}>
                    <div className="infected" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="infected-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdAffected}</p>
                        <p className="confirmed-text"style={{fontSize: fontty, color: 'red', fontWeight: fontWei}}>আক্রান্ত (Affected)</p>
                    </div>
                    <div className="death" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdDeaths}</p>
                        <p className="death-text"style={{fontSize: fontty, fontWeight: fontWei}}>মৃত (Deaths)</p>
                    </div>
                    <div className="recovered" style={{paddingRight: 5, paddingLeft: 5}}>
                        <p className="recovered-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdRecovered}</p>
                        <p className="recovered-text"style={{fontSize: fontty, color: 'green', fontWeight: fontWei}}>সেরে উঠেছেন (Recovered)</p>
                    </div>
                    <div className="fatality" style={{paddingRight: 5, paddingLeft: 2}}>
                        <p className="fatality-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdFatality}</p>
                        <p className="fatality-text"style={{fontSize: fontty, color: 'green', fontWeight: fontWei}}>মৃত্যুহার (Fatality Rate)</p>
                    </div>
                </div>
            </div>    
        );
    }
}
    
      
export default Stats;
