import syltherine from "../../assets/Images.png";
import leviosa from "../../assets/Images (1).png";
import lolito from "../../assets/Images (2).png";
import respira from "../../assets/Images (3).png";
import grifo from "../../assets/Images (4).png";
import muggo from "../../assets/Images (5).png";
import pingky from "../../assets/Images (6).png";
import potty from "../../assets/Images (7).png";

import "./Praduct.css";

const Praduct = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-wr">
          <div className="pr-title">
            <h2>Our Products</h2>
          </div>
          <div className="cards-wr">
            <div className="card">
              <img src={syltherine} alt="" />
              <h3>Syltherine</h3>
              <p>Stylish cafe chair</p>
              <strong>Rp 2.500.000</strong>
            </div>

            <div className="card">
              <img src={leviosa} alt="" />
              <h3>Leviosa</h3>
              <p>Stylish cafe chair</p>
              <strong>Rp 2.500.000</strong>
            </div>

            <div className="card">
              <img src={lolito} alt="" />
              <h3>Lolito</h3>
              <p>Luxury big sofa</p>
              <strong>Rp 7.000.000</strong>
            </div>

            <div className="card">
              <img src={respira} alt="" />
              <h3>Respira</h3>
              <p>Outdoor bar table and stool</p>
              <strong>Rp 500.000</strong>
            </div>

            <div className="card">
              <img src={grifo} alt="" />
              <h3>Grifo</h3>
              <p>Night lamp</p>
              <strong>Rp 1.500.000</strong>
            </div>

            <div className="card">
              <img src={muggo} alt="" />
              <h3>Muggo</h3>
              <p>Small mug</p>
              <strong>Rp 150.000</strong>
            </div>

            <div className="card">
              <img src={pingky} alt="" />
              <h3>Pingky</h3>
              <p>Cute bed set</p>
              <strong>Rp 7.000.000</strong>
            </div>

            <div className="card">
              <img src={potty} alt="" />
              <h3>Potty</h3>
              <p>Minimalist flower pot</p>
              <strong>Rp 500.000</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Praduct;
