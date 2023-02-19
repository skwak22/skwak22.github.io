import "./index.css";

export const About = () => {
  return (
    <>
      <div className="row">
        <div className="first-column center">
          <img
            className="circle middle"
            src={require("../../assets/me.jpeg")}
            alt="Sunghoon Kwak"
          />
        </div>
        <div className="second-column">
          <br />
          I am a recent graduate at Amherst College. 
          At Amherst, I studied Computer Science and Philosophy. 
          <br />
          <br />I am currently working as a Software Engineer at{" "}
          <a href="https://www.angellist.com/">
            AngelList ✌🏼
          </a>
          and am based in NYC.
          <br />
          <br />
          In the past, I have worked at{" "}
          <a href="https://www.remitly.com/">
            Remitly 💸
          </a>{" "}
          and{" "}
          <a href="https://www.rivian.com/">
            Rivian 🛻
          </a>
          .
          <br />
          <br />
          Outside of my work, I am interested in
          existential philosophy, increasing software accessibility, and
          drumming. I am fluent in both English and Korean. 
          <br />
        </div>
      </div>
    </>
  );
};

export default About;
