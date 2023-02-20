
export const Home = () => {
  return (
    <body>
      <div id="me" className="center">
        <a href="./about">
          {" "}
          <img
            className="circle center"
            src={require("../../assets/IMG_2915.png")}
            alt="Sunghoon Kwak"
          />
        </a>
      </div>
      <div id="description">
        Hello, and welcome to my website. My name is Sunghoon Kwak, and I am a
        recent graduate at Amherst College. At Amherst, I studied Computer Science and Philosophy. 
        <br />
        <br />
        I'm currently working as a Software Engineer at{" "}
        <a href="https://www.angellist.com/"> AngelList </a> in NYC.
        ✌🏼
      </div>
    </body>
  );
};

export default Home;
