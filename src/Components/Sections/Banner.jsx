const Banner = () => {
  return (
    <div className="max-w-[1500px] ml-10 2xl:ml-auto  ">
      <div className="relative z-[1] mb-0  mt-9 px-px  max-md:mb-2.5 ">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-between">
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-center text-title-color text-8xl font-medium leading-[98px] tracking-tighter relative mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
              Financial <br /> infrastructure <br /> for the internet
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/54c132be83665848790ee2ce0d17622a9aa4b01aeed3003b7cfb17f2328cad7c?apiKey=3cf9b28bec5b4f688167ac3255d22af9&"
              className="aspect-[0.83] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
