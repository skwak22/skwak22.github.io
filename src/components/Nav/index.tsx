export const Nav = () => {
  return (
    <nav>
      <a id="name" href="/">
        Sung Kwak
      </a>
      <span id="bar">
        <a className="navlink" href="./#/blog">
          My Blog
        </a>
        {" "}/{" "}
        <a className="navlink" href="./#/about">
          About Me
        </a>
        {" "}/{" "}
        <a className="navlink" href="./#/contact">
          Contact Me
        </a>
      </span>
      <hr className="bar" />
    </nav>
  );
};

export default Nav;
