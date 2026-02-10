import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="home-page">
      <main className="main-content">
        {/* About Me Section */}
        <section className="hero-container">
          <div className="hero-section">
            <div className="hero-content">
              <div className="hero-image">
                <figure className="profile-figure">
                  <Image
                    src="/images/image-profile.jpg"
                    alt="Alex - Frontend Developer"
                    width={130}
                    height={130}
                    priority
                    className="profile-photo"
                  />
                </figure>
                <div>
                  <h2 className="hero-name">Alejandro López</h2>
                  <h2 className="hero-subtitle">Frontend Developer | Product Engineer</h2>
                </div>
              </div>
              <div className="hero-text">
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Alex.👋</span>
                </h1>
                <p className="hero-description">
                  Passionate developer specializing in creating modern,
                  accessible, and performant web applications using React,
                  Next.js, and TypeScript. I love turning complex problems into
                  simple, beautiful designs.
                </p>
                <div className="hero-ctas">
                  <Link href="/projects" className="cta-primary">
                    View My Work
                  </Link>
                  <Link href="/contact" className="cta-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-multimedia">
            <h1>Lastest Projects:</h1>
            <Image
              src="/cover.png"
              alt="Hero Image - Web Development"
              width={500}
              height={300}
              className="hero-illustration"
            />
            <Image
              src="/cover-2.png"
              alt="Hero Image - Web Development"
              width={500}
              height={300}
              className="hero-illustration"
            />
           
          </div>
        </section>

        {/* My Work Section */}
        <section className="work-section">
          <div className="section-header">
            <h2 className="section-title">My Work</h2>
            <p className="section-subtitle">
              A selection of recent projects that showcase my skills and
              creativity
            </p>
          </div>

          <div className="projects-grid">
            {/*TODO: Project placeholders - Will be replaced with dynamic content later */}
            <article className="project-card">
              <figure className="project-image">
                <Image
                  src="/project-placeholder.svg"
                  alt="Project 1"
                  width={400}
                  height={250}
                  className="project-img"
                />
              </figure>
              <div className="project-content">
                <h3 className="project-title">Project Title 1</h3>
                <p className="project-description">
                  Brief description of the project and the technologies used.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <figure className="project-image">
                <Image
                  src="/project-placeholder.svg"
                  alt="Project 2"
                  width={400}
                  height={250}
                  className="project-img"
                />
              </figure>
              <div className="project-content">
                <h3 className="project-title">Project Title 2</h3>
                <p className="project-description">
                  Brief description of the project and the technologies used.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <figure className="project-image">
                <Image
                  src="/project-placeholder.svg"
                  alt="Project 3"
                  width={400}
                  height={250}
                  className="project-img"
                />
              </figure>
              <div className="project-content">
                <h3 className="project-title">Project Title 3</h3>
                <p className="project-description">
                  Brief description of the project and the technologies used.
                </p>
                <div className="project-technologies">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </article>
          </div>

          <div className="work-footer">
            <Link href="/projects" className="view-all-projects">
              View All Projects →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
