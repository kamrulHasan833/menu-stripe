import Navbar from "../Components/Sections/Navbar";

const Header = () => {
  return (
    <header>
      <div className="   w-full  max-md:max-w-full max-md:pl-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e1135c18a58a43f97dfb681b216863c4ddc69188fda3edded3ce614fd54172c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
