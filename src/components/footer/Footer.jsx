import "./Foter.css"

function Footer() {
  return (
    <div>
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <h2>Funiro.</h2>
      <p>
        400 University Drive Suite 200 Coral <br />
        Gables, <br />
        FL 33134 USA
      </p>
    </div>

    <div className="footer-links">
      <h4>Links</h4>
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>

    <div className="footer-help">
      <h4>Help</h4>
      <a href="/">Payment Options</a>
      <a href="/">Returns</a>
      <a href="/">Privacy Policies</a>
    </div>

    <div className="footer-newsletter">
      <h4>Newsletter</h4>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter Your Email Address" />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    <p>2023 furino. All rights reverved</p>
  </div>
</footer>
      
    </div>
  )
}

export default Footer