import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import ContactImg from "../assets/list.jpg";
function Contact() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-jngl"
        heroImg={ContactImg}
        title="Contact title"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
