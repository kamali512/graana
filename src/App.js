import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import CardList from "./components/Card/CardList";
import MainCardList from "./components/mainCard/MainCardList";
import LoctionSearch from "./section/locationSearch/LoctionSearch";
import BlogList from "./components/Blogs/BlogList";
import AppSection from "./components/appSection/appSection";
import CampaignList from "./components/campaignSection/campaignList";
import Footer from "./components/footer/Footer";
import PropertyList from "./section/Properties/propertyList/PropertyList";
import PropertyRSList from "./section/PropertiesRS/propertyListRS/PropertyRSList";
import {propertiesListSales,propertiesListRent} from "./data/index";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <CardList />
      <MainCardList />
      <LoctionSearch/>
      <PropertyList/>
      <PropertyRSList
        title="Recent Properties for Rent"
        propertiesRSList={propertiesListRent}
      />
      <PropertyRSList
       title="Recent Properties for Sale"
       propertiesRSList={propertiesListSales}
      />
      <BlogList/>
      <AppSection/>
      <CampaignList/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
