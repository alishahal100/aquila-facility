import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Helmet} from 'react-helmet'
const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState("");
    const [serviceContents, setServiceContents] = useState([]);

  // Define your service contents
  const serviceContentsData = {
    "Hard Services": [
      { title: " Operations & Maintenance" },
      { title: "Electrical Operations & Maintenance" },
      { title: "HVAC Operations & Maintenance" },
      { title: "CIVIL & ARCH Operations & Maintenance" },
      { title: "Plumbing Operations & Maintenance" }
    ],
    "Soft Services": [
      { title: "Farcade Cleaning Services" },
      { title: "Housekeeping & Janitorial Services" },
      { title: "Sanitization & Disinfection Services" },
      { title: "Car Park Cleaning" },
      { title: "Swimming Pool Maintenance Services" },
      { title: "Landscape & Irrigation Maintenance Services" },
      { title: "Pest Control Services" },
    ],
    "Staffing": [
      { title: "Farcade Cleaning Services" },
      { title: "Housekeeping & Janitorial Services" },
      { title: "Sanitization & Disinfection Services" },
      { title: "Car Park Cleaning" },
      { title: "Swimming Pool Maintenance Services" },
      { title: "Landscape & Irrigation Maintenance Services" },
      { title: "Pest Control Services" },
    ],
    "Managed Services": [
      { title: "Farcade Cleaning Services" },
      { title: "Housekeeping & Janitorial Services" },
      { title: "Sanitization & Disinfection Services" },
      { title: "Car Park Cleaning" },
      { title: "Swimming Pool Maintenance Services" },
      { title: "Landscape & Irrigation Maintenance Services" },
      { title: "Pest Control Services" },
    ],
    // Add contents for other services...
  };

  // Define refs and inView states for each card
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Change this threshold value as needed
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Change this threshold value as needed
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Change this threshold value as needed
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Change this threshold value as needed
  });


  const handleServiceClick = (service) => {
    setSelectedService(service);
    setServiceContents(serviceContentsData[service]);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-8 text-center" id="services">
       <Helmet>
        <title>Our Services - Aquilaa Facility Management</title>
        <meta name="description" content="Explore our comprehensive range of facility management services at Aquilaa Facility Management. From hard services to soft services, we provide top-notch solutions tailored to your needs." />
        <link rel="canonical" href="https://example.com/services" />
      </Helmet>
      <h1 className="text-4xl">OUR SERVICES</h1>
      <div className=" grid lg:grid-cols-4 justify-center">
        {/* Service Card for Hard Services */}
        <motion.div
          className="relative w-screen lg:w-auto transition duration-500 ease-in-out transform hover:scale-105 m-4"
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
          whileTap={{ scale: 0.95 }}
          transition={{duration:0.5,delay:1}}
          onClick={() => handleServiceClick("Hard Services")}
        >
          <div
            className="bg-cover bg-center flex justify-center items-center h-40 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ backgroundImage: 'url("/hard.jpg")' }}
          >
            <div className="absolute m-2 bg-gray-800 text-white rounded-md px-2 py-1 text-xs">
              RFQ
            </div>
          </div>
          <div className="bg-white p-4 rounded-b-lg text-center">
            <h2 className="lg:text-lg font-semibold">Hard Services</h2>
          </div>
        </motion.div>
        {/* Service Card for Soft Services */}
        <motion.div
          className="relative transition duration-500 ease-in-out transform hover:scale-105 m-4"
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
          
          whileTap={{ scale: 0.95 }}
          transition={{duration:1,delay:1}}
          onClick={() => handleServiceClick("Soft Services")}
        >
          <div
            className="bg-cover bg-center flex justify-center items-center h-40 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ backgroundImage: 'url("/soft.jpg")' }}
          >
            <div className="absolute m-2 bg-gray-800 text-white rounded-md px-2 py-1 text-xs">
              RFQ
            </div>
          </div>
          <div className="bg-white p-4 rounded-b-lg text-center">
            <h2 className="lg:text-lg font-semibold">Soft Services</h2>
          </div>
        </motion.div>
        {/* Service Card for Staffing */}
        <motion.div
          className="relative transition duration-500 ease-in-out transform hover:scale-105 m-4"
          ref={ref3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
          
          whileTap={{ scale: 0.95 }}
          transition={{duration:1,delay:1}}
          onClick={() => handleServiceClick("Staffing")}
        >
          <div
            className="bg-cover bg-center flex justify-center items-center h-40 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ backgroundImage: 'url("/staff.jpg")' }}
          >
            <div className="absolute m-2 bg-gray-800 text-white rounded-md px-2 py-1 text-xs">
              RFQ
            </div>
          </div>
          <div className="bg-white p-4 rounded-b-lg text-center">
            <h2 className="lg:text-lg font-semibold">Staffing</h2>
          </div>
        </motion.div>
        {/* Service Card for Managed Services */}
        <motion.div
          className="relative transition duration-500 ease-in-out transform hover:scale-105 m-4"
          ref={ref4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 20 }}
          
          whileTap={{ scale: 0.95 }}
          transition={{duration:0.5}}
          onClick={() => handleServiceClick("Managed Services")}
        >
          <div
            className="bg-cover bg-center flex justify-center items-center  h-40 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ backgroundImage: 'url("/managedservices.jpg")' }}
          >
            <div className="absolute  m-2 bg-gray-800 text-white rounded-md px-2 py-1 text-xs">
              RFQ
            </div>
          </div>
          <div className="bg-white p-4 rounded-b-lg text-center">
            <h2 className="lg:text-lg font-semibold">Managed Services</h2>
          </div>
        </motion.div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center  items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white shadow-lg rounded-lg p-6 w-3/4">
            <h2 className="text-xl font-semibold">{selectedService}</h2>
            <div className="grid lg:grid-cols-3 gap-4">
              {serviceContents.map((content, index) => (
              <div key={index} className="text-start h-12 bg-gray-200 group hover:bg-[#1a3118] hover:text-white">
              <h3 className="font-semibold group-hover:text-white">{content.title}</h3>
          </div>
          
              ))}
            </div>
            <button
              className="bg-[#1a3118] text-white px-4 py-2 rounded-lg mt-4"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
