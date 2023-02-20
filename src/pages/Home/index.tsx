export const Home = () => {
  return (
    <>
      <div id="me" className="center">
        <a href="./#/about">
          {" "}
          <img
            className="circle center"
            src={require("../../assets/homepic.jpg")}
            alt="Sunghoon Kwak"
          />
        </a>
      </div>
      <div id="description">
        Hello, and welcome to my website. My name is Sunghoon Kwak, and I am a
        recent graduate of Amherst College. At Amherst, I studied Computer
        Science and Philosophy.
        <br />
        <br />
        I'm currently working as a Software Engineer at{" "}
        <a href="https://www.angellist.com/"> AngelList </a> in NYC. ✌🏼
      </div>
    </>
  );
};

export default Home;
