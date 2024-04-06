import React from "react";
import Navbar from "./Navbar";
import Services from "./services";
import Footer from "./Footer";
import {Helmet} from 'react-helmet'
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Aquilaa Facility Management</title>
        <meta
          name="description"
          content="Aquilaa Facility Management specializes in delivering comprehensive solutions for property maintenance and enhancement, aimed at maximizing functionality and aesthetics."
        />
        <link rel="canonical" href="https://example.com/" />
      </Helmet>
      <Navbar />
      {/* about us start */}
      <div id="about">
        <div className="container lg:px-52 text-center gap-4 h-[50vh] w-screen flex flex-col justify-center items-center">
          <p>
            At Aquilaa Facility Management, we specialize in delivering
            comprehensive solutions for property maintenance and enhancement,
            aimed at maximizing functionality and aesthetics
          </p>

          <p>
            Driven by a dedication to excellence, we offer personalized services
            meticulously crafted to address the distinct requirements of every
            client.
          </p>
          <p>
            Backed by a team of seasoned professionals, we utilize
            industry-leading practices to provide dependable and streamlined
            facility management solutions, guaranteeing our clients'
            satisfaction and the seamless operation of their properties.
          </p>
        </div>
      </div>
      {/* about us end */}
      <Services />


      {/* image */}
      <div className="w-screen lg:h-[80vh] px-10 ">
        <img src="/dubai-main.jpg" className="w-full lg:h-[70vh]" alt="" />
      </div>

      {/* work */}
      <div className="w-screen h-[60vh] bg-[#1a3118] py-10  mt-20 lg:mt-0  px-20 flex justify-center gap-[100px] items-center" >
        <div className=" flex flex-col gap-5 text-white">
          <h1 className="text-6xl">
            WE TAKE <br /> MAINTENANCE <br /> TO A HIGHER <br /> LEVEL.
          </h1>

          <p className="text-2xl">
            We are the leading integrated facilities <br />
            management provider in Qatar
          </p>
        </div>
        <div className=" hidden lg:block">
          <img src="/work.jpg" className="w-[40vw] h-[60vh]" alt="" />
        </div>
      </div>
        
        {/* image */}
        <div class="w-screen lg:h-[50vh] lg:mt-0 mt-[200px] px-10 lg:grid lg:gap-5  lg:grid-cols-3 place-content-center justify-center">
    <img src="/hard.jpg" alt="" className="lg:w-[1/3] w-full mb-2 h-[40vh] hover:scale-105 transition-all duration-300 ease-in-out"/>
    <img src="/image2.jpg" alt="" className="lg:w-[1/3] w-full mb-2 h-[40vh] hover:scale-105 transition-all duration-300 ease-in-out"/>
    <img src="/image3.jpg" alt="" className="lg:w-[1/3] w-full h-[40vh] hover:scale-105 transition-all duration-300 ease-in-out"/>
</div>
    <Footer/>
    </div>
  );
};

export default Home;
