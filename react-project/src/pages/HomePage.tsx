import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeaturedCategory from "../components/FeaturedCategory";
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <>
      <Announcement />
      <Header key={uuidv4()} />
      <Hero key={uuidv4()} />
      <FeaturedCategory key={uuidv4()} category="Lunch" categoryUrl="lunch" />
      <FeaturedCategory key={uuidv4()} category="Breakfast" categoryUrl="breakfast" />
      <FeaturedCategory key={uuidv4()} category="Dinner" categoryUrl="dinner" />
      <FeaturedCategory key={uuidv4()} category="Side Dishes" categoryUrl="side-dishes" />
      <FeaturedCategory key={uuidv4()} category="Desserts" categoryUrl="desserts" />
      <FeaturedCategory key={uuidv4()} category="Drinks" categoryUrl="drinks" />
      <Footer key={uuidv4()} />
    </>
  );
}

export default Home;
