import React from 'react';
import Navbar from '../components/Navbar'; // Reusing the Navbar component

function AboutUs() {
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Team Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>

          {/* Team Image */}
          <div className="mb-6">
            <img
              src="https://picsum.photos/600/400" // Replace with your actual image URL
              alt="Our Team"
              className="w-auto h-auto object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Short Description */}
          <p className="text-lg text-gray-700 mb-8">
            We are a passionate team of sports enthusiasts, developers, and innovators. Our mission is to provide the best experience for sports fans by delivering easy access to athletes' and tournaments' data, along with other key sports-related information.
          </p>
          
          {/* Mission Statement */}
          <div className="bg-indigo-600 text-white py-8 px-4 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              We aim to connect athletes, fans, and sports organizations through technology, building a platform that empowers users to explore and engage with sports content in a new and meaningful way.
            </p>
          </div>

          {/* Team Values Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Innovation</h3>
              <p className="text-gray-600">We constantly innovate and improve, leveraging the latest technologies to create the best user experience.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of collaboration, working together with sports organizations to deliver the most up-to-date and relevant information.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Integrity</h3>
              <p className="text-gray-600">We prioritize integrity and transparency, ensuring that the information we provide is accurate and trustworthy.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions or would like to know more about our team or our platform, feel free to reach out to us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">Email: <a href="mailto:team@example.com" className="text-indigo-600">team@example.com</a></p>
              <p className="text-lg">Phone: +1 (123) 456-7890</p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
