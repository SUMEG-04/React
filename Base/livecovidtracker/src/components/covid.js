import React,{useEffect,countryInfo} from 'react'
import './covid.css';

const Covid=()=>{

    const [data,setData]=countryInfo([]);

    const getCovidData = async() =>{
        try{
            const res=await fetch('https://disease.sh/v3/covid-19/countries/india?yesterday=false&allowNull=true');
            const actualData= await res.json();
            console.log(actualData);
            setData(actualData);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=>{
        getCovidData();
    },[]);

    return (
      <>
      <section>
        <h1>LIVE</h1>
        <h2>COVID-19 COROVAVIRUS TRACKER </h2>

        <ul>
            <li className="card">
                <div className='card_main'>
                    <div>
                        <p className="card_name"><span>Our</span> COUNTRY</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className='card_main'>
                    <div>
                        <p className="card_name"><span>Total</span> Recovered</p>
                        <p className="card_total card_small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className='card_main'>
                    <div>
                        <p className="card_name"><span>Total</span> Confirmed</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
        </ul>
        <ul>
        <li className="card">
                <div className='card_main'>
                    <div>
                        <p className="card_name"><span>Total</span> Deaths</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className='card_main'>
                    <div>
                        <p className="card_name"><span>Total</span> Active</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className='card_main'>
                    <div>
                        <p className="card_name"><span>Last</span> Updated</p>
                        <p className="card_total card_small">INDIA</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>
      </>  
    )
}

export default Covid