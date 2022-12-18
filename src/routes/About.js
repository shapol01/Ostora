import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";
function About() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About title"
        btnClass="hide"
      />
    </>
  );
}

export default About;
