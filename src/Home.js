import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id="jkhfknf"
          title="Sceptre E248W-19203R 24 Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018"
          price={104.5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51d3J1EYbVL._AC_US320_FMwebp_QL65_.jpg"
        />
        <Product
          id="fshifilfnoinf"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          price={172.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/51eP5+gXd7L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="oirneoo"
          title="AUKEY FHD Webcam, 1080p Live Streaming Camera with Stereo Microphone, Desktop or Laptop USB Webcam for Widescreen Video Calling and Recording"
          price={54.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/310SV0HFMPL._AC_US320_FMwebp_QL65_.jpg"
        />
        <Product
          id="kinrknenr"
          title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Coole"
          price={283.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US320_FMwebp_QL65_.jpg"
        />
        <Product
          id="nslknfs"
          title="AmazonBasics 2 Slice, Extra-Wide Slot Toaster with 6 Shade Settings, Black"
          price={23.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2447E617EC5C463L._V533746472_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="khfioheoj"
          title="Ghost of Tsushima - PlayStation 4"
          price={50.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51x1PPwEVsL._AC_US436_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
