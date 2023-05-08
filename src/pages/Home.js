import "./Home.css";
import team from "../img/our_team.jpg";
import adopt from "../img/dog_adoption.jpg";
import participate from "../img/participate.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="textBox team">
        <h2>Our Shelter</h2>
        <p>
          Welcome to our animal shelter. We're a dedicated team of animal lovers
          who work hard to provide a safe and comfortable home for all the
          animals in our care. Whether you're looking to adopt a new furry
          friend or simply want to support our cause, we're here to help. From
          dogs and cats to rabbits and birds, we have a wide variety of lovable
          creatures just waiting to find their forever homes. Each animal comes
          with a detailed profile, so you can learn more about their
          personality, likes, and dislikes before making your decision.
        </p>
      </div>
      <div className="imageBox team">
        <img src={team} alt="Our Team"></img>
      </div>
      <div className="imageBox adopt">
        <Link to="animals">
          <img src={adopt} alt="Adopt your new best friend"></img>
        </Link>
      </div>
      <div className="textBox adopt yellowBG">
        <h2>Adopt a Pet</h2>
        <p>
          Looking to adopt a pet?{" "}
          <Link to="animals">Check out our animals</Link> and find your new best
          friend!
        </p>
      </div>
      <div className="textBox participate">
        <h2>Become a member</h2>
        <p>
          Our shelter isn't just a place for animals to find new homes - it's
          also a community. If you're passionate about animal welfare and want
          to make a difference in the lives of our furry friends, consider
          becoming a member of our shelter. As a member, you'll have access to
          exclusive events, volunteer opportunities, and more.
        </p>
      </div>
      <div className="imageBox participate">
        <img src={participate} alt="Participate in our shelter"></img>
      </div>
    </main>
  );
}
