import "./Browse.css";
import dining from "../../assets/Mask Group.svg";
import bed from "../../assets/Mask Group (1).svg";
import living from "../../assets/Image-living room.svg";

function Browse() {
  return (
    <div className="browse">
      <div className="container">
        <div className="browse-wr">
          <div className="title">
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="browse-products">
            <div className="brw-card">
              <img src={dining} alt="" />
              <strong>Dining</strong>
            </div>
            <div className="brw-card">
              <img src={living} alt="" />
              <strong>Living</strong>
            </div>
            <div className="brw-card">
              <img src={bed} alt="" />
              <strong>Bedroom</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
