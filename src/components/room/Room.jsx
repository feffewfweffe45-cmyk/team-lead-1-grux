import './Room.css'

function Room() {
  return (
     <section className="room">
      <div className="room-text">
        <h2>
          50+ Beautiful rooms
          <br />
          inspiration
        </h2>

        <p>
          Our designer already made a lot of beautiful
          <br />
          prototype of rooms that inspire you
        </p>

        <button>Explore More</button>
      </div>


        <div className="room-card">
          <img src="/room1.png" alt="" />

          <div className="room-info">
            <span>01 — Bed Room</span>
            <h3>Inner Peace</h3>
            <button>→</button>
          </div>
        </div>
<div className="img-wrapper">
        <div className="room-card">
          <img src="/room2.png" alt="" />
        </div>

        <button className="next">👉</button>
      </div>
    </section>
  );
}

export default Room