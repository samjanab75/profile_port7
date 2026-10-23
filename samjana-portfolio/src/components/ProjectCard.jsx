import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const liveReady = Boolean(project.liveUrl);
  const githubReady = Boolean(project.githubUrl);

  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} preview`} className="project-image" />
        <span className="project-number">{String(project.id).padStart(2, "0")}</span>
      </div>
      <div className="project-body">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions">
          {liveReady
            ? <a className="button button-primary button-small" href={project.liveUrl} target="_blank" rel="noreferrer">Live website <ExternalLink size={15} /></a>
            : <span className="button button-muted button-small" title="Add your deployed Vercel URL in src/data/portfolioData.js">Add live URL</span>}
          {githubReady
            ? <a className="icon-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub repository"><Github size={19} /></a>
            : <span className="icon-link icon-link-disabled" title="Add your GitHub URL in src/data/portfolioData.js"><Github size={19} /></span>}
        </div>
      </div>
    </article>
  );
}