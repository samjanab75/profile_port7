import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2,
  Code2, GraduationCap, Heart, Mail, MapPin, Monitor, Sparkles, Users, Send,
  Award, Languages, Menu, Github, Linkedin
} from "lucide-react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { profile, about, education, experience, skillGroups, languages, projects, certificates, achievements } from "./data/portfolioData";

function App() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [savedDraft, setSavedDraft] = useLocalStorage("samjana-contact-draft", null);

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const visibleProjects = projectFilter === "All" ? projects : projects.filter((p) => p.category === projectFilter);

  function updateContact(event) {
    const { name, value } = event.target;
    const next = { ...contact, [name]: value };
    setContact(next);
    setSavedDraft(next);
  }

  function submitContact(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${contact.name}`);
    const body = encodeURIComponent(`Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  function restoreDraft() {
    if (savedDraft) setContact(savedDraft);
  }

  return (
    <div className="site-shell" id="home">
      <Navbar />
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line" /> PERSONAL PORTFOLIO <span className="kicker-star">✳</span></div>
            <h1>Curious mind.<br /><span>Creative builder.</span><br />Future educator.</h1>
            <p className="hero-intro">Hello, I’m Samjana — an IT postgraduate exploring the intersection of software development, thoughtful design, and meaningful teaching.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#about" className="button button-outline">Get to know me <ArrowDown size={16} /></a>
            </div>
            <div className="hero-proof">
              <div className="proof-icon"><Code2 size={18} /></div>
              <div><strong>Learning by building</strong><span>Web development · Technology education</span></div>
            </div>
            <div className="hero-decoration hero-decoration-one" />
            <div className="hero-decoration hero-decoration-two" />
          </div>
          <div className="hero-card-area">
            <div className="floating-note note-one"><Sparkles size={16} /><span>Designed with purpose</span></div>
            <ProfileCard profile={profile} />
            <div className="floating-note note-two"><Heart size={16} /><span>Code · Create · Teach</span></div>
            <div className="hero-orbit" />
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {["FRONTEND DEVELOPMENT", "BACKEND DEVELOPMENT", "DATABASES", "TECHNOLOGY EDUCATION", "CONTINUOUS LEARNING", "FRONTEND DEVELOPMENT", "BACKEND DEVELOPMENT"].map((item, i) => (
              <span key={`${item}-${i}`}>{item}<b>✳</b></span>
            ))}
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Technology with a human touch." description="I’m interested in creating useful digital experiences and making technical knowledge easier to understand." />
          <div className="about-grid">
            <div className="about-main">
              {about.split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              <div className="values-row">
                <div><span className="value-icon"><Monitor size={20} /></span><strong>Build</strong><small>Useful, accessible web experiences</small></div>
                <div><span className="value-icon"><BookOpen size={20} /></span><strong>Teach</strong><small>Share knowledge with clarity</small></div>
                <div><span className="value-icon"><Sparkles size={20} /></span><strong>Grow</strong><small>Keep learning and improving</small></div>
              </div>
            </div>
            <div className="quote-card">
              <span className="quote-mark">“</span>
              <p>My ambition is to keep growing as a developer while helping others feel confident exploring technology.</p>
              <div className="quote-signature"><span className="signature-line" /> Samjana Bhandari D.</div>
              <div className="quote-flower">✳</div>
            </div>
          </div>
        </section>

        <section className="section section-tint" id="experience">
          <div className="container">
            <SectionHeading eyebrow="MY JOURNEY" title="Experience that shaped me." description="Professional experience, transferable skills, and a foundation for my next chapter." />
            <div className="experience-layout">
              <div className="experience-timeline">
                {experience.map((item) => (
                  <article className="experience-card" key={item.company}>
                    <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
                    <div className="experience-content">
                      <div className="experience-top"><span className="experience-date">{item.date}</span><span className="experience-label">Professional experience</span></div>
                      <h3>{item.role}</h3><p className="company-name">{item.company}</p>
                      <ul>{item.duties.map((duty) => <li key={duty}><CheckCircle2 size={16} />{duty}</li>)}</ul>
                    </div>
                  </article>
                ))}
              </div>
              <aside className="journey-note">
                <div className="journey-note-icon"><Users size={23} /></div>
                <p className="eyebrow">WHERE I’M HEADED</p>
                <h3>Developing ideas. Supporting learners.</h3>
                <p>I’m interested in developer opportunities and teaching roles where I can keep learning, contribute to real projects, and help students understand technology.</p>
                <a href="#contact" className="text-link">Let’s connect <ArrowRight size={16} /></a>
              </aside>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title="Skills in progress, built with practice." description="A growing toolkit for creating, connecting, and improving digital experiences." />
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-head"><span className="skill-icon">{i === 0 ? <Code2 /> : i === 1 ? <Monitor /> : i === 2 ? <BriefcaseBusiness /> : <Sparkles />}</span><span className="skill-index">0{i + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="languages-line"><Languages size={18} /><strong>Languages</strong>{languages.map((language) => <span key={language}>{language}</span>)}</div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="SELECTED WORK" title="Projects, ideas made real." description="A space for my web development practice, personal builds, and future full-stack projects." />
            <div className="project-filter" role="group" aria-label="Filter projects">
              {categories.map((category) => <button key={category} onClick={() => setProjectFilter(category)} className={projectFilter === category ? "filter-button active" : "filter-button"}>{category}</button>)}
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
            <p className="projects-hint"><Sparkles size={16} /> Update the sample project titles and links in <code>src/data/portfolioData.js</code> to show your real work.</p>
          </div>
        </section>

        <section className="section container" id="education">
          <SectionHeading eyebrow="ACADEMIC FOUNDATION" title="Learning is a lifelong practice." description="My academic background and a dedicated space for future milestones." />
          <div className="education-layout">
            <div className="education-list">
              {education.map((item, i) => (
                <article className="education-card" key={item.degree}>
                  <div className="education-icon"><GraduationCap size={22} /></div>
                  <div className="education-info"><span className="education-date">{item.date}</span><h3>{item.degree}</h3><p>{item.institution}</p><small>{item.location}</small></div>
                  <span className="education-number">0{i + 1}</span>
                </article>
              ))}
            </div>
            <div className="future-grid">
              <article className="future-card">
                <div className="future-card-icon"><Award size={22} /></div>
                <p className="eyebrow">COMING SOON</p><h3>Certificates</h3>
                <p>Add certificates, course completions, workshops, and professional learning milestones here.</p>
                <span className="future-empty">Your next achievement belongs here.</span>
              </article>
              <article className="future-card future-card-alt">
                <div className="future-card-icon"><Sparkles size={22} /></div>
                <p className="eyebrow">MILESTONES</p><h3>Achievements</h3>
                <p>Reserve this area for awards, presentations, teaching experience, and meaningful project outcomes.</p>
                <span className="future-empty">Space for future accomplishments.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">LET’S START A CONVERSATION</p>
              <h2>Good things begin<br /><span>with a hello.</span></h2>
              <p>I’m open to connecting about software development, learning opportunities, and technology education.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}<ArrowUpRight size={16} /></a>
              <p className="contact-location"><MapPin size={16} /> {profile.location}</p>
              <div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a></div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-top"><span className="form-icon"><Send size={19} /></span><div><h3>Send a message</h3><p>Your email app will open with your message ready to send.</p></div></div>
              {savedDraft && <button type="button" className="restore-draft" onClick={restoreDraft}>Restore saved draft</button>}
              <label htmlFor="name">Your name</label><input id="name" name="name" value={contact.name} onChange={updateContact} placeholder="Enter your name" required />
              <label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={contact.email} onChange={updateContact} placeholder="you@example.com" required />
              <label htmlFor="message">Message</label><textarea id="message" name="message" value={contact.message} onChange={updateContact} placeholder="What would you like to discuss?" rows="4" required />
              <button className="button button-primary submit-button" type="submit">Prepare email <ArrowUpRight size={17} /></button>
              <p className="form-privacy">Your draft is stored only in this browser using localStorage. No message is sent automatically.</p>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark"><Sparkles size={17} /></span><span>Samjana<span className="brand-dot">.</span></span></a><p>Made with curiosity, care, and a little water pink.</p><a href="#home" className="back-top">Back to top ↑</a></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Samjana Bhandari D.</span><span>Designed for growth · Built with React</span></div>
      </footer>
    </div>
  );
}

export default App;