import React from 'react';
// import '../../App.css';
import Navbar from '../../components/Navbar';
import Introduction from '../../components/Introduction';
import Extra from '../../components/Extra';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import News from '../../components/News';
import Partners from '../../components/Partners';
import Clients from '../../components/Clients';
import Services from '../../components/Services';
import PropProd from '../../components/PropProd';
import OemProd from '../../components/OemProd';

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <News />
      <Introduction />
      <Extra />
      <Services />
      <PropProd />
      <OemProd />
      <Clients />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
