import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";

const Header = () => {
  return (
    <header className="h-dvh relative md:h-[50vh]">
      <NavBar />
      <HeroSection />
    </header>
  );
};

export default Header;
