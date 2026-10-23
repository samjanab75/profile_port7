import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2,
  Code2, GraduationCap, Heart, Mail, MapPin, Monitor, Sparkles, Users, Send,
  Award, Languages, Github, Linkedin, Download, ExternalLink
} from "lucide-react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { profile, about, education, experience, skillGroups, languages, projects, certificates, achievements } from "./data/portfolioData";

function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <Link className="brand" to="/"><span className="brand-mark"><Sparkles size={17}/></span><span>Samjana<span className="brand-dot">.</span></span></Link>
    <p>Made with curiosity, care, and a little water pink.</p><Link to="/" className="back-top">Back to home ↑</Link>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Samjana Bhandari D.</span><span>Designed for growth · Built with React</span></div></footer>;
}
function Layout({ children }) {
  const location = useLocation();
  return <div className="site-shell"><Navbar/><main key={location.pathname} className="page-transition">{children}</main><Footer/></div>;
}
function Home() {
  return <>
    <section className="hero container">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="kicker-line"/> PERSONAL PORTFOLIO <span className="kicker-star">✳</span></div>
        <h1>Technology-minded.<br/><span>People-focused.</span><br/>Always learning.</h1>
        <p className="hero-intro">Hello, I’m Samjana — an IT postgraduate interested in building thoughtful web experiences and making technology easier to learn.</p>
        <div className="hero-actions"><Link to="/projects" className="button button-primary">Explore my work <ArrowUpRight size={17}/></Link><Link to="/about" className="button button-outline">About me <ArrowRight size={16}/></Link></div>
        <div className="hero-proof"><div className="proof-icon"><Code2 size={18}/></div><div><strong>Build · Learn · Teach</strong><span>Web development · Technology education</span></div></div>
      </div>
      <div className="hero-card-area"><div className="hero-orbit"/><ProfileCard profile={profile}/><div className="floating-note note-one"><Sparkles size={16}/><span>Thoughtful by design</span></div><div className="floating-note note-two"><Heart size={16}/><span>Code · Create · Teach</span></div></div>
    </section>
    <section className="ticker"><div className="ticker-track">{["FRONTEND DEVELOPMENT","BACKEND DEVELOPMENT","DATABASES","TECHNOLOGY EDUCATION","CONTINUOUS LEARNING","FRONTEND DEVELOPMENT"].map((x,i)=><span key={i}>{x}<b>✳</b></span>)}</div></section>
    <section className="section container"><SectionHeading eyebrow="EXPLORE MY PORTFOLIO" title="A little about my journey." description="Explore my background, growing technical toolkit, projects, and academic journey."/>
      <div className="home-feature-grid">
        {[{to:"/about",n:"01",title:"About me",desc:"My interests, values, and professional goals.",icon:<Heart/>},{to:"/experience",n:"02",title:"Experience",desc:"Transferable skills from billing and operations.",icon:<BriefcaseBusiness/>},{to:"/skills",n:"03",title:"Technical skills",desc:"Technologies and tools I’m learning and using.",icon:<Code2/>},{to:"/projects",n:"04",title:"Projects",desc:"Practical work, demos, and code repositories.",icon:<Monitor/>}].map(item=><Link to={item.to} className="home-feature" key={item.to}><div className="home-feature-top"><span className="feature-icon">{item.icon}</span><span>{item.n}</span></div><h3>{item.title}</h3><p>{item.desc}</p><span className="text-link">Explore page <ArrowRight size={15}/></span></Link>)}
      </div>
    </section>
    <section className="home-contact"><div className="container home-contact-inner"><div><p className="eyebrow">HAVE AN OPPORTUNITY?</p><h2>Let’s make a meaningful connection.</h2></div><Link to="/contact" className="button button-primary">Contact me <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
function About() {
  return <section className="section container page-content"><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Technology with a human touch." description="My interests, values, and the direction I want to grow in."/>
    <div className="about-grid"><div className="about-main">{about.split("\n\n").map((p,i)=><p key={i}>{p}</p>)}
      <div className="values-row"><div><span className="value-icon"><Monitor/></span><strong>Build</strong><small>Create useful, accessible web experiences.</small></div><div><span className="value-icon"><BookOpen/></span><strong>Teach</strong><small>Share knowledge with clarity.</small></div><div><span className="value-icon"><Sparkles/></span><strong>Grow</strong><small>Keep learning and improving.</small></div></div>
    </div><div className="quote-card"><span className="quote-mark">“</span><p>My ambition is to keep growing as a developer while helping others feel confident exploring technology.</p><div className="quote-signature"><span className="signature-line"/> Samjana Bhandari D.</div><div className="quote-flower">✳</div></div></div>
    <div className="page-next"><span>Next: professional experience</span><Link to="/experience" className="button button-outline">Experience <ArrowRight size={16}/></Link></div>
  </section>;
}
function Experience() {
  return <section className="section section-tint"><div className="container page-content"><SectionHeading eyebrow="MY JOURNEY" title="Experience that shaped me." description="Professional experience, transferable skills, and a foundation for my next chapter."/>
    <div className="experience-layout"><div className="experience-timeline">{experience.map(item=><article className="experience-card" key={item.company}><div className="timeline-marker"><BriefcaseBusiness size={18}/></div><div className="experience-content"><div className="experience-top"><span className="experience-date">{item.date}</span><span className="experience-label">Professional experience</span></div><h3>{item.role}</h3><p className="company-name">{item.company}</p><ul>{item.duties.map(d=><li key={d}><CheckCircle2 size={16}/>{d}</li>)}</ul></div></article>)}</div>
    <aside className="journey-note"><div className="journey-note-icon"><Users size={23}/></div><p className="eyebrow">WHERE I’M HEADED</p><h3>Developing ideas. Supporting learners.</h3><p>I’m interested in developer opportunities and teaching roles where I can keep learning, contribute to real projects, and help students understand technology.</p><Link to="/contact" className="text-link">Let’s connect <ArrowRight size={16}/></Link></aside></div>
    <div className="page-next"><span>Next: technical toolkit</span><Link to="/skills" className="button button-outline">View skills <ArrowRight size={16}/></Link></div>
  </div></section>;
}
function Skills() {
  return <section className="section container page-content"><SectionHeading eyebrow="MY TOOLKIT" title="Skills in progress, built with practice." description="A growing toolkit for creating, connecting, and improving digital experiences."/>
    <div className="skills-grid">{skillGroups.map((g,i)=><article className="skill-card" key={g.title}><div className="skill-card-head"><span className="skill-icon">{i===0?<Code2/>:i===1?<Monitor/>:i===2?<BriefcaseBusiness/>:<Sparkles/>}</span><span className="skill-index">0{i+1}</span></div><h3>{g.title}</h3><div className="skill-tags">{g.skills.map(s=><span key={s}>{s}</span>)}</div></article>)}</div>
    <div className="languages-line"><Languages size={18}/><strong>Languages</strong>{languages.map(l=><span key={l}>{l}</span>)}</div>
    <div className="page-next"><span>Next: selected work</span><Link to="/projects" className="button button-outline">View projects <ArrowRight size={16}/></Link></div>
  </section>;
}
function Projects() {
  const [filter,setFilter]=useState("All");
  const categories=useMemo(()=>["All",...new Set(projects.map(p=>p.category))],[]);
  const shown=filter==="All"?projects:projects.filter(p=>p.category===filter);
  return <section className="section projects-section"><div className="container page-content"><SectionHeading eyebrow="SELECTED WORK" title="Projects, ideas made real." description="A space for web development practice, personal builds, and future full-stack projects."/>
    <div className="project-filter">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={filter===c?"filter-button active":"filter-button"}>{c}</button>)}</div>
    <div className="projects-grid">{shown.map(p=><ProjectCard key={p.id} project={p}/>)}</div>
    <p className="projects-hint"><Sparkles size={16}/> Replace the sample project details with your real Vercel and GitHub links in <code>src/data/portfolioData.js</code>.</p>
    <div className="page-next"><span>Next: education and achievements</span><Link to="/education" className="button button-outline">Education <ArrowRight size={16}/></Link></div>
  </div></section>;
}
function Education() {
  return <section className="section container page-content"><SectionHeading eyebrow="ACADEMIC FOUNDATION" title="Learning is a lifelong practice." description="My academic background and dedicated space for future milestones."/>
    <div className="education-layout"><div className="education-list">{education.map((e,i)=><article className="education-card" key={e.degree}><div className="education-icon"><GraduationCap size={22}/></div><div className="education-info"><span className="education-date">{e.date}</span><h3>{e.degree}</h3><p>{e.institution}</p><small>{e.location}</small></div><span className="education-number">0{i+1}</span></article>)}</div>
      <div className="future-grid"><article className="future-card"><div className="future-card-icon"><Award size={22}/></div><p className="eyebrow">COMING SOON</p><h3>Certificates</h3><p>Add certificates, course completions, workshops, and professional learning milestones here.</p><span className="future-empty">{certificates.length?`${certificates.length} certificates added`:"Your next achievement belongs here."}</span></article>
      <article className="future-card future-card-alt"><div className="future-card-icon"><Sparkles size={22}/></div><p className="eyebrow">MILESTONES</p><h3>Achievements</h3><p>Reserve this area for awards, presentations, teaching experience, and project outcomes.</p><span className="future-empty">{achievements.length?`${achievements.length} achievements added`:"Space for future accomplishments."}</span></article></div></div>
    <div className="page-next"><span>Have a question or opportunity?</span><Link to="/contact" className="button button-primary">Contact me <ArrowRight size={16}/></Link></div>
  </section>;
}
function Contact() {
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [saved,setSaved]=useLocalStorage("samjana-contact-draft",null);
  function change(e){const next={...form,[e.target.name]:e.target.value};setForm(next);setSaved(next);}
  function submit(e){e.preventDefault();const subject=encodeURIComponent(`Portfolio enquiry from ${form.name}`);const body=encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`;}
  return <section className="section contact-section"><div className="container contact-layout page-content"><div className="contact-copy"><p className="eyebrow">LET’S START A CONVERSATION</p><h2>Good things begin<br/><span>with a hello.</span></h2><p>I’m open to connecting about software development, learning opportunities, and technology education.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18}/>{profile.email}<ArrowUpRight size={16}/></a><p className="contact-location"><MapPin size={16}/>{profile.location}</p><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a></div></div>
    <form className="contact-form" onSubmit={submit}><div className="form-top"><span className="form-icon"><Send size={19}/></span><div><h3>Send a message</h3><p>Your email app will open with the message ready to send.</p></div></div>{saved&&<button type="button" className="restore-draft" onClick={()=>setForm(saved)}>Restore saved draft</button>}
      <label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={change} placeholder="Enter your name" required/>
      <label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" required/>
      <label htmlFor="message">Message</label><textarea id="message" name="message" value={form.message} onChange={change} placeholder="What would you like to discuss?" rows="4" required/>
      <button className="button button-primary submit-button" type="submit">Prepare email <ArrowUpRight size={17}/></button><p className="form-privacy">Your draft is stored only in this browser. No message is sent automatically.</p>
    </form></div></section>;
}
function NotFound(){return <section className="section container page-content"><SectionHeading eyebrow="404" title="Page not found" description="That page doesn’t exist. Head back to the portfolio home page."/><Link className="button button-primary" to="/">Back home <ArrowRight size={16}/></Link></section>}
function RoutedApp(){
  return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/experience" element={<Experience/>}/><Route path="/skills" element={<Skills/>}/><Route path="/projects" element={<Projects/>}/><Route path="/education" element={<Education/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>;
}
export default function App(){return <BrowserRouter><RoutedApp/></BrowserRouter>;}
