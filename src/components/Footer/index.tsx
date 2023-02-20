import {ReactComponent as GithubLogo} from "../../assets/github-round.svg";
import {ReactComponent as LinkedInLogo} from "../../assets/linkedin-blue.svg";
import {ReactComponent as TwitterLogo} from "../../assets/twitter-blue.svg";
import {ReactComponent as InstagramLogo} from "../../assets/instagram.svg";

export const Footer = () => {
  return (
    <footer>
      <hr className="bar" />
      <div className="links lineicons">
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/skwak17/">
          <InstagramLogo />
        </a>{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/skwak22/">
          <GithubLogo />
        </a>{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/skwak17/">
          <TwitterLogo />
        </a>{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/skwak22">
          <LinkedInLogo />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
