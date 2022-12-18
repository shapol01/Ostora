import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/i.png";
function Service() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-bot"
        heroImg={ServiceImg}
        title="Service title"
        btnClass="hide"
      />
    </>
  );
}

export default Service;
