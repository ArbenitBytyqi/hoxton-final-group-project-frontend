import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGooglePlus,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-content">
      <div className="footer-content">
        <h3>Knowledge - Your Online Library </h3>
        <p>
          Esse eius quod omnis quas optio eligendi sit explicabo cupiditate odio
          voluptates corporis dicta quaerat quidem.
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook">
                <FaFacebookF />
              </i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-twitter">
                <AiOutlineTwitter />
              </i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-google-plus">
                <AiOutlineGooglePlus />
              </i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-youtube">
                <AiFillYoutube />
              </i>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-linkedin-square">
                <AiFillLinkedin />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2020 Hoxton Academy. Designed By <span>Team 3</span>{" "}
        </p>
      </div>
    </footer>
  );
}
