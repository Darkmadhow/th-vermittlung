import "./Footer.css";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import youtube from "../icons/youtube.png";
import pets from "../img/haustier.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <p className="box">
            <strong>Happy Tails Haven</strong>
            <br></br>
            <br></br>
            <img className="social-icon" src={pets}></img>
          </p>
          <p className="box">
            Hellostrasse 40 <br></br>12478 Hellostadt <br></br> Tel. 050/ 56 477
            9
          </p>
          <p className="box">
            <strong> Bank account:</strong> <br></br>
            Bank Hellostadt IBAN: DE89 1234 1234 1234 1234 00
            <br></br>BIC: BLAHDE34BLA
          </p>

          <p className="box">
            <li className="list-item">
              <a className="links" href="#">
                Privacy
              </a>
            </li>
            <li className="list-item">
              <a className="links" href="#">
                Imprint
              </a>
            </li>
            <li className="list-item">
              <a className="links" href="#">
                Newsletter
              </a>
            </li>
            <li className="list-item">
              <a className="links" href="#">
                Jobs
              </a>
            </li>
          </p>
        </div>
        <div className="social-media">
          <a href="#">
            <img className="social-icon" src={facebook}></img>
          </a>
          <a className="links" href="#">
            <img className="social-icon" src={youtube}></img>
          </a>
          <a className="links" href="#">
            <img className="social-icon" src={instagram}></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
