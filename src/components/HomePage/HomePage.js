import VideoHomePage from "../../asset/video-homepage.mp4";

const HomePage = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-container">
        <div className="title-1">There's a better way to ask</div>
        <div className="title-2">
          Practice anywhere with thousands of multiple-choice questions. Get
          instant feedback to improve your knowledge faster. Prepare smarter and
          feel confident before every exam.
        </div>
        <div className="title-3">
          <button>Get Started - It's Free</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
