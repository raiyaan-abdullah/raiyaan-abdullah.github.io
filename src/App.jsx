import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  awards,
  education,
  experience,
  profile,
  publications,
  service,
  siteMeta
} from "./content/portfolio.js";
import { fallbackTitleIcon, sectionIconMap } from "./icons.js";

const baseUrl = import.meta.env.BASE_URL;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const sections = ["publications", "education", "experience", "awards", "service"];

  useEffect(() => {
    document.title = siteMeta.title;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href={baseUrl} aria-label={`${profile.name} home`}>
          <span>{profile.name}</span>
        </a>

        <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href={baseUrl} onClick={() => setMenuOpen(false)}>Home</a>
          {sections.map((section) => (
            <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>
              {sectionLabel(section)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-button"
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={() => setTheme((value) => value === "dark" ? "light" : "dark")}
          >
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"} aria-hidden="true" />
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="page-shell">
        <aside className="profile-sidebar" aria-label="Profile">
          <SidebarProfile />
        </aside>
        <main className="content-main" id="main-content">
          <HomePage />
        </main>
      </div>

      <footer className="site-footer">
        <div className="section footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="footer-links">
            <a href={baseUrl}>Home</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="section about-section" aria-label="Introduction">
        <div className="intro-copy">
          {profile.about.map((paragraph, index) => <p key={index}>{renderRichText(paragraph)}</p>)}
        </div>
      </section>
      <ContentSection id="publications" title="Key Publications">
        <PublicationList publications={publications} />
        <p className="publication-more">
          <a href={profile.links.find((link) => link.label === "Google Scholar")?.href} target="_blank" rel="noreferrer">
            <i className="ai ai-google-scholar" aria-hidden="true" />
            Click to view my Google Scholar to see the full list of publications
          </a>
        </p>
      </ContentSection>
      <ContentSection id="education" title="Education">
        <Timeline items={education} />
      </ContentSection>
      <ContentSection id="experience" title="Experience">
        <Timeline items={experience} />
      </ContentSection>
      <ContentSection id="awards" title="Awards">
        <Timeline items={awards} />
      </ContentSection>
      <ContentSection id="service" title="Service">
        <Service data={service} />
      </ContentSection>
    </>
  );
}

function SidebarProfile() {
  return (
    <div className="sidebar-card">
      <div className="sidebar-avatar-frame">
        <img className="sidebar-avatar" src={`${baseUrl}${profile.avatar}`} width="192" height="192" alt={profile.name} />
      </div>
      <div className="sidebar-identity">
        <h1>{profile.name}</h1>
        <span>{profile.role}</span>
        <span>{profile.organization}</span>
      </div>
      <div className="sidebar-meta">
        <span><i className="fa-solid fa-location-dot" aria-hidden="true" />{profile.location}</span>
        <a href={`mailto:${profile.email}`}><i className="fa-solid fa-envelope" aria-hidden="true" />{profile.email}</a>
      </div>
      <div className="profile-links">
        {profile.links.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}>
            <i className={link.icon} aria-hidden="true" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContentSection({ id, title, children }) {
  return (
    <section className={`section${id === "about" ? " about-section" : ""}`} id={id}>
      <div className="section-title">
        <h2><span className="title-icon" aria-hidden="true"><Icon className="semantic-icon" icon={sectionIconMap[title] ?? fallbackTitleIcon} /></span>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PublicationList({ publications }) {
  return (
    <div className="highlight-list">
      {publications.map((publication) => (
        <PublicationCard key={publication.title} publication={publication} />
      ))}
    </div>
  );
}

function PublicationCard({ publication }) {
  return (
    <article className="featured-paper">
      <div className={`paper-figure${publication.image ? "" : " paper-figure-fallback"}`}>
        {publication.image ? (
          <img src={`${baseUrl}${publication.image}`} alt={`${publication.title} project visual`} loading="lazy" />
        ) : (
          <span>{publication.venue}</span>
        )}
      </div>
      <div className="featured-paper-copy">
        <span className="paper-venue-line"><i className="fa-solid fa-building-columns" aria-hidden="true" />{publication.venue}<time>{publication.year}</time></span>
        <h4>{publication.title}</h4>
        <p className="authors">{highlightName(publication.authors)}</p>
        {publication.summary ? <p>{publication.summary}</p> : null}
        <div className="action-links">
          <a href={publication.publicationHref} target="_blank" rel="noreferrer"><i className="fa-solid fa-file-lines" aria-hidden="true" /> View publication</a>
          {publication.projectHref ? <a href={publication.projectHref} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> View project page</a> : null}
        </div>
      </div>
    </article>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.title}-${item.period}`}>
          <div className="timeline-main">
            <strong>{item.title}</strong>
            {item.place ? item.href ? <a className="timeline-place" href={item.href} target="_blank" rel="noreferrer">{item.place}</a> : <span className="timeline-place">{item.place}</span> : null}
            {item.location ? <span className="timeline-location">{item.location}</span> : null}
            {item.detail ? <p>{renderRichText(item.detail)}</p> : null}
            {item.details ? <ul className="timeline-details">{item.details.map((detail) => <li key={detail}>{renderRichText(detail)}</li>)}</ul> : null}
          </div>
          {item.period ? <time>{item.period}</time> : null}
        </article>
      ))}
    </div>
  );
}

function Service({ data }) {
  return (
    <div className="service-content">
      <div className="reviewer-block">
        <h3>Reviewer</h3>
        <p>Served as a reviewer for:</p>
        <div className="service-chip-grid">
          {data.reviewer.map((item) => <span className="service-chip reviewer-badge" key={item}>{item}</span>)}
        </div>
      </div>
      <Timeline items={[data.mentorship]} />
    </div>
  );
}

function renderRichText(value) {
  if (!Array.isArray(value)) return value;
  return value.map((part, index) => {
    if (typeof part === "string") return part;
    if (part.bold || part.strong) return <strong key={index}>{part.text}</strong>;
    if (part.href) {
      const external = part.href.startsWith("http");
      return <a key={index} href={part.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{part.text}</a>;
    }
    return <span key={index}>{part.text}</span>;
  });
}

function highlightName(authors) {
  return authors.split(profile.name).map((part, index, parts) => (
    <span key={index}>{part}{index < parts.length - 1 ? <strong>{profile.name}</strong> : null}</span>
  ));
}

function sectionLabel(section) {
  return section.replace(/(^|-)\w/g, (value) => value.toUpperCase());
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default App;
