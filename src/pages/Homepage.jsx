// import React from 'react'
import Navbar from "../components/Navbar";
import Herosection from "../components/Carousel";
import Upcomingtourney from "../components/Upcomingtourney";
import Footer from "../components/Footer";
import AthleteCard from "../components/AthleteCard";

function Homepage() {

  const Athletes = [
    {
      id: 1,
      name: "John Doe",
      sport: "Football",  
      country: "USA",
      best_score: "90",
      image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      sport: "Basketball",  
      country: "Canada",
      best_score: "80",  
      image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "Jane Smith",
      sport: "Basketball",  
      country: "Canada",
      best_score: "80",  
      image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    }]

  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Upcomingtourney />

      <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Athletes</h2>
  
     
      <div className="flex flex-wrap justify-evenly gap-4">
        {Athletes.map((athlete) => (
          <div key={athlete.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4">
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
