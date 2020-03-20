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