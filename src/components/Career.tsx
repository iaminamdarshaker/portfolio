import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Digital Marketing Expert</h4>
                <h5>Imarticus Learning Pvt Ltd</h5>
              </div>
              <h3>2020 - 2026</h3>
            </div>
            <p>
              Managed high-budget digital marketing campaigns across Google Ads, Meta Ads, and LinkedIn Ads, scaling ad spend up to ₹2Cr/month. Led SEO strategy implementation, improving organic traffic from 100 to 86K monthly visitors within 6 months.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Specialist</h4>
                <h5>Tubelight Communications Ltd</h5>
              </div>
              <h3>2018 - 2020</h3>
            </div>
            <p>
              Executed SEO, PPC, and social media marketing campaigns for multiple clients. Managed lead generation campaigns through Google Ads and social media advertising.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Digital Marketing Executive</h4>
                <h5>iRealities Technology Pvt Ltd</h5>
              </div>
              <h3>2017 - 2018</h3>
            </div>
            <p>
              Managed SEO campaigns for clients in finance, animation, and eLearning sectors. Conducted keyword research, on-page SEO optimization, and content marketing campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Executive</h4>
                <h5>Webinfotechindia Pvt Ltd</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Managed SEO campaigns for 25+ websites across different industries. Improved keyword rankings and organic traffic through technical and on-page SEO.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Analyst</h4>
                <h5>Yoganand Studios</h5>
              </div>
              <h3>2015 - 2016</h3>
            </div>
            <p>
              Executed SEO strategies including keyword research, content marketing, and link building. Managed social media campaigns and online brand promotion activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
