import { useEffect, useState } from "react"
import axios from "axios";
import FlagsCard from "./FlagsCard";
import './countries.css';


function Countries() {

    const [flags, setFlags] = useState([]);

    useEffect(() => {
        const getFlagsData = async() => {
            try {
                const res = await axios.get('https://restcountries.com/v3.1/all');
                setFlags(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        getFlagsData();
    },[]);

    console.log(flags);
  return (
    <div className="home-layout">
        {
            flags && flags.map((flag) => (
                <div key={flag.flag} className="cards" >
                    <FlagsCard  flag={flag}  />
                </div>
            ))
        }
    </div>
  )
}

export default Countries