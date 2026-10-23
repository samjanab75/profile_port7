import { useState } from "react";
import { MapPin, Mail, Github, Linkedin, ArrowUpRight, Download, Copy, Check } from "lucide-react";

export default function ProfileCard({ profile }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <aside className="profile-card">
      <div className="profile-card-top">
        <span className="availability"><span className="availability-dot" /> Open to opportunities</span>
        <div className="avatar-frame">
          <img src="/profile.jpg" alt="Profile placeholder" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }} />
          <div className="avatar-fallback"><span>SB</span><small>Add profile.jpg</small></div>
          <span className="avatar-spark">✦</span>
        </div>
        <h2>{profile.name}</h2>
        <p className="profile-role">IT Postgraduate</p>
        <p className="profile-blurb">Building thoughtful digital experiences and helping people learn technology.</p>
        <div className="profile-pills"><span>Developer</span><span>Educator</span></div>
      </div>
      <div className="profile-details">
        <p><MapPin size={16} /> {profile.location}</p>
        <button className="detail-button" onClick={copyEmail}><Mail size={16} /> {profile.email} {copied ? <Check className="detail-end" size={15} /> : <Copy className="detail-end" size={14} />}</button>
      </div>
      <div className="profile-links">
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
      </div>
      <a className="button button-primary profile-resume" href={profile.resume} download><Download size={17} /> Download resume</a>
      <p className="profile-note">Add your PDF as <code>public/resume.pdf</code>.</p>
    </aside>
  );
}