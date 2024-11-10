// import React from 'react'
import { useState,useEffect,useCallback } from "react";
import { getData } from "../utils/ApiHelper";
import Navbar from "../components/Navbar";
import Herosection from "../components/Carousel";
import Upcomingtourney from "../components/Upcomingtourney";
import Footer from "../components/Footer";
import AthleteCard from "../components/AthleteCard";

function Homepage() {

  const [athletes, setAthlete] = useState([]);
  

  const getAthlete = useCallback(async () => {
    try {
      const response = await getData("athletes");
      setAthlete(response.data.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  }, []);



  useEffect(()=>{
    getAthlete();
  },[getAthlete]);

  


  return (
    <div>
      <Navbar/>
      <div className="h-10"></div>
      <Herosection/>
      <Upcomingtourney />

      <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Athletes</h2>
  
     
      <div className="flex flex-wrap justify-evenly gap-4">
        {athletes.map((athlete) => (
          <div key={athlete.PlayerId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">
            <AthleteCard athlete={athlete} />
          </div>
        ))}
      </div>
    </div>


      <Footer />
    </div>
  )
}

export default Homepage
