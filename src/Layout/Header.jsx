import Banner from "../Components/Sections/Banner";
import Navbar from "../Components/Sections/Navbar";

const Header = () => {
  return (
    <header>
      <div className="   w-full  max-md:max-w-full max-md:pl-5 bg-[url('https://i.ibb.co/hCWYK3j/banner.jpg')] bg-cover">
        <Navbar />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
