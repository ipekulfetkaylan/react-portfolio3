import "./about.css";
import { award } from "../../data";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/7034717/pexels-photo-7034717.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="sub-title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          explicabo beatae quasi quae, tenetur dolor ab? A minus quam sint.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, expedita
          aut dolore assumenda iste eos molestias doloribus deserunt provident?
          A ullam labore, possimus cum omnis ex facilis distinctio animi,
          eveniet quasi, earum eum iusto hic veniam. Obcaecati officia iure
          doloremque, placeat amet deleniti atque enim nisi eius quis. Sequi
          nostrum necessitatibus ea laboriosam nam, hic quas aliquid esse ut
          eligendi?
        </p>
        <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">Lorem, ipsum dolor.</h4>
              <p className="a-award-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi similique totam voluptas nesciunt voluptatem porro sit minus alias non.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
