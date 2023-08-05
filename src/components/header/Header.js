import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Vladyslav</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://cv.djinni.co/1e/f054e92a56c1976b8342151223ddb6/CV_Tryputin_Vladyslav_Front-end_developer.pdf"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
