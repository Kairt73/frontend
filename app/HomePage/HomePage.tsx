import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Conditions from "../../components/ConditionsOfEducation/Conditions";
import Foooter from "../../components/Footer/Foooter";
import Header from "../../components/Header/Header";
import Reasonschoose from "../../components/ReasonsToChoose/Reasonschoose";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Reasonschoose />
      <Conditions />
      <Foooter />
    </>
  );
};

export default HomePage;
