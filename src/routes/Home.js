import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import HomeImg from "../assets/starter.PNG";
import Intro from "../components/Intro";
function Home() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Home title"
        text="home text"
        btnText="Home button"
        url="#"
        btnClass="show"
      />
      <Intro />
    </>
  );
}

export default Home;
