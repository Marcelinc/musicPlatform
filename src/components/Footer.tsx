import '../resources/Footer.css'

const Footer = () => {
  return (
    <footer>
      <p id='footer-line'></p>
        <div className="footer-section">
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Career</a>
            <a href="#">Legal</a>
        </div>
        <div className="footer-section">
            <h3>Community</h3>
            <a href="#">For Artists</a>
            <a href="#">Developers</a>
        </div>
        <div className="footer-section">
            <h3>Links</h3>
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Mobile App</a>
        </div>
    </footer>
  )
}

export default Footer