import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CountUp from "react-countup";
import Map from "./map/Map";

const commafy = require("commafy");

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props);
    // const affected = this.props.affected;
    // const deaths = this.props.deaths;
    // const recovered = this.props.recovered;
    // const bdAffected = this.props.bdAffected;
    // const bdDeaths = this.props.bdDeaths;
    // const bdRecovered = this.props.bdRecovered;

    const affected = 423598;
    const deaths = 18918;
    const recovered = 106655;
    const bdAffected = 39;
    const bdDeaths = 5;
    const bdRecovered = 7;
    const fatality = "4.47%";
    const bdFatality = "12.8%";
    const bdIsolation = 51;

    const fontty = 20;
    const fontWei = 500;

    return (
      <div className="stats" style={{ padding: 5 }}>
        <span
          className="anim"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p className="text-of-corona">
            <img
              className="animation"
              style={{ width: 30, height: 30, marginRight: 5 }}
              src="https://clipartmag.com/images/animated-globe-gif-33.gif"
              alt="world"
            ></img>
            বিশ্ব&nbsp;পরিস্থিতি (World&nbsp;Situation)
          </p>
        </span>
        <div
          className="row-dashboard-world"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            alignSelf: "center",
            justifySelf: "center",
            justifyContent: "space-around"
          }}
        >
          <div className="infected" style={{ paddingRight: 10 }}>
            <CountUp
              style={{ fontSize: fontty, fontWeight: fontWei }}
              duration={2.75}
              start={0}
              end={affected}
            />
            <p
              className="confirmed-text"
              style={{ fontSize: fontty, color: "red", fontWeight: fontWei }}
            >
              আক্রান্ত (Affected)
            </p>
          </div>
          <div className="death" style={{ paddingRight: 10 }}>
            {/* <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{deaths}</p> */}
            <CountUp
              style={{ fontSize: fontty, fontWeight: fontWei }}
              duration={2.75}
              start={0}
              end={deaths}
            />
            <p
              className="death-text"
              style={{ fontSize: fontty, fontWeight: fontWei, color: "black" }}
            >
              মৃত (Deaths)
            </p>
          </div>
          <div className="recovered" style={{ paddingRight: 10 }}>
            <CountUp
              style={{ fontSize: fontty, fontWeight: fontWei, marginTop: 50 }}
              duration={2.75}
              start={0}
              end={recovered}
            />
            <p
              className="recovered-text"
              style={{ fontSize: fontty, color: "green", fontWeight: fontWei }}
            >
              সেরে&nbsp;উঠেছেন (Recovered)
            </p>
          </div>
          <div className="fatality" style={{ paddingRight: 1 }}>
            <span
              className="fatality-number"
              style={{ fontSize: fontty, fontWeight: fontWei, paddingTop: 0 }}
            >
              {fatality}
            </span>
            <p
              className="fatality-text"
              style={{
                fontSize: fontty,
                color: "red",
                fontWeight: fontWei,
                marginBottom: 10
              }}
            >
              মৃত্যুহার (Fatality&nbsp;Rate)
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <span
          className="anim-bd"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p className="text-of-corona">
            <img
              className="animation"
              style={{ width: 40, height: 30, marginRight: 5 }}
              src="https://bestanimations.com/Flags/Asia/bangladesh/bangladesh-flag-waving-gif-animation-4.gif"
              alt="bdflag"
            ></img>
            বাংলাদেশ&nbsp;পরিস্থিতি (Bangladesh&nbsp;Situation)
          </p>
        </span>
        <div
          className="row-dashboard-bd"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            alignSelf: "center",
            justifySelf: "center",
            justifyContent: "space-around"
          }}
        >
          <div className="infected" style={{ paddingRight: 10 }}>
            <CountUp
              style={{ fontSize: fontty, fontWeight: fontWei }}
              duration={2.75}
              start={0}
              end={bdAffected}
            />
            <p
              className="confirmed-text"
              style={{ fontSize: fontty, color: "red", fontWeight: fontWei }}
            >
              আক্রান্ত (Affected)
            </p>
          </div>
          <div className="death" style={{ paddingRight: 10 }}>
            <CountUp
              style={{ fontSize: fontty, fontWeight: fontWei }}
              duration={2.75}
              start={0}
              end={bdDeaths}
            />
            <p
              className="death-text"
              style={{ fontSize: fontty, fontWeight: fontWei }}
            >
              মৃত (Deaths)
            </p>
          </div>
          <div className="recovered" style={{ paddingRight: 10 }}>
            <CountUp
              style={{ fontSize: fontty, fontWeight: fontWei }}
              duration={2.75}
              start={0}
              end={bdRecovered}
            />
            <p
              className="recovered-text"
              style={{ fontSize: fontty, color: "green", fontWeight: fontWei }}
            >
              সেরে&nbsp;উঠেছেন (Recovered)
            </p>
          </div>
          <div className="fatality" style={{ paddingLeft: 1 }}>
            {/* <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdFatality}</p> */}
            <span
              className="fatality-number"
              style={{ fontSize: fontty, fontWeight: fontWei, paddingTop: 0 }}
            >
              {bdFatality}
            </span>
            <p
              className="fatality-text"
              style={{ fontSize: fontty, color: "red", fontWeight: fontWei }}
            >
              মৃত্যুহার (Fatality&nbsp;Rate)
            </p>
          </div>
        </div>
        <div className="bd-stats">
          <div className="fatality" style={{ paddingLeft: 1 }}>
            {/* <p className="death-number" style={{fontSize: fontty, fontWeight: fontWei}}>{bdFatality}</p> */}
            <span
              className="fatality-number"
              style={{ fontSize: fontty, fontWeight: fontWei, paddingTop: 0 }}
            >
              {bdIsolation}
            </span>
            <p
              className="fatality-text"
              style={{ fontSize: fontty, color: "red", fontWeight: fontWei }}
            >
              আইসোলেশন (Isolation)
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Map />
      </div>
    );
  }
}

export default Stats;
