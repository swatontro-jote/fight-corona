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
        console.log(this.props);
        return (
            <div className="stats">
                <p className="world" style={{fontSize: 35, fontWeight: 500}}>বিশ্ব পরিস্থিতি (World Situation)</p>
                <div className="row-dashboard-world" style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                    <div className="infected" style={{paddingRight: 25, paddingLeft: 25}}>
                        <p className="infected-number" style={{fontSize: 35}}>{this.props.affected}</p>
                        <p className="confirmed-text"style={{fontSize: 35, color: 'red'}}>আক্রান্ত (Affected)</p>
                    </div>
                    <div className="death" style={{paddingRight: 25, paddingLeft: 25}}>
                <p className="death-number" style={{fontSize: 35}}>{this.props.deaths}</p>
                        <p className="death-text"style={{fontSize: 35}}>মৃত (Deaths)</p>
                    </div>
                    <div className="recovered" style={{paddingRight: 25, paddingLeft: 25}}>
                <p className="recovered-number" style={{fontSize: 35}}>{this.props.recovered}</p>
                        <p className="recovered-text"style={{fontSize: 35, color: 'green'}}>সেরে উঠেছেন (Recovered)</p>
                    </div>
                </div>
                <p className="bd" style={{fontSize: 35, fontWeight: 500}}>বাংলাদেশ পরিস্থিতি (Bangladesh Situation)</p>
                <div className="row-dashboard-world" style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                    <div className="infected" style={{paddingRight: 25, paddingLeft: 25}}>
                <p className="infected-number" style={{fontSize: 35}}>{this.props.bdAffected}</p>
                        <p className="confirmed-text"style={{fontSize: 35, color: 'red'}}>আক্রান্ত (Affected)</p>
                    </div>
                    <div className="death" style={{paddingRight: 25, paddingLeft: 25}}>
                        <p className="death-number" style={{fontSize: 35}}>{this.props.bdDeaths}</p>
                        <p className="death-text"style={{fontSize: 35}}>মৃত (Deaths)</p>
                    </div>
                    <div className="recovered" style={{paddingRight: 25, paddingLeft: 25}}>
                <p className="recovered-number" style={{fontSize: 35}}>{this.props.bdRecovered}</p>
                        <p className="recovered-text"style={{fontSize: 35, color: 'green'}}>সেরে উঠেছেন (Recovered)</p>
                    </div>
                </div>
            </div>    
        );
    }
}
    
      
export default Stats;
