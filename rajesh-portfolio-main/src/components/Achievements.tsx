import { useEffect, useRef } from "react";
import "./styles/Achievements.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Achievements = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("achieve-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="achieve-section section-container" id="achievements">
      <div className="achieve-container">
        <h2>
          Key <span>Achievements</span>
        </h2>
        <div className="achieve-grid">
          
          <div className="achieve-card achieve-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="achieve-border">
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" fill="transparent" />
              </svg>
            </div>
            <div className="achieve-content">
              <div className="achieve-icon">🚀</div>
              <p>
                Scaled ad spend from ₹1L to ₹2Cr/month within 18 months through performance marketing campaigns.
              </p>
            </div>
          </div>

          <div className="achieve-card achieve-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="achieve-border">
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" fill="transparent" />
              </svg>
            </div>
            <div className="achieve-content">
              <div className="achieve-icon">📈</div>
              <p>
                Grew organic website traffic from 100 to 86K monthly visitors in 6 months using SEO, AEO & GEO strategies.
              </p>
            </div>
          </div>

          <div className="achieve-card achieve-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="achieve-border">
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" fill="transparent" />
              </svg>
            </div>
            <div className="achieve-content">
              <div className="achieve-icon">🏆</div>
              <p>
                Awarded “Brand Enhancer” for driving significant digital brand growth and campaign performance.
              </p>
            </div>
          </div>

          <div className="achieve-card achieve-noTouch" ref={(el) => setRef(el, 3)}>
            <div className="achieve-border">
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" fill="transparent" />
              </svg>
            </div>
            <div className="achieve-content">
              <div className="achieve-icon">🎯</div>
              <p>
                Managed multi-channel marketing campaigns generating consistent leads through SEO, PPC, Social Media, Email Marketing, and Conversion Optimization.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("achieve-active");
}
