import { useEffect, useMemo, useState } from "react";
import {
  currentAwards,
  currentEducation,
  currentPublications,
  earlyAwards,
  earlyEducation,
  earlyExperience,
  earlyGrants,
  earlyPublications,
  profile,
  reviewerService,
  siteMeta
} from "./content/portfolio.js";

const baseUrl = import.meta.env.BASE_URL;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const earlyLife = useMemo(() => /\/early-life\/?$/.test(window.location.pathname), []);
  const sections = earlyLife
    ? ["education", "publications", "experience", "grants", "awards"]
    : ["about", "publications", "education", "awards", "service"];

  useEffect(() => {
    document.title = earlyLife ? `Early Life | ${profile.name}` : siteMeta.title;
  }, [earlyLife]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href={baseUrl} aria-label={`${profile.name} home`}>
          <img src={`${baseUrl}images/athena-mark.svg`} width="30" height="30" alt="" aria-hidden="true" />
          <span>{profile.name}</span>
        </a>

        <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href={baseUrl} onClick={() => setMenuOpen(false)}>Home</a>
          {sections.map((section) => (
            <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>
              {sectionLabel(section)}
            </a>
          ))}
          {!earlyLife ? (
            <a href={`${baseUrl}early-life/`} onClick={() => setMenuOpen(false)}>Early Life</a>
          ) : null}
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
          {earlyLife ? <EarlyLifePage /> : <HomePage />}
        </main>
      </div>

      <footer className="site-footer">
        <div className="section footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="footer-links">
            <a href={baseUrl}>Home</a>
            <a href={`${baseUrl}early-life/`}>Early Life</a>
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
      <ContentSection id="about" title="About">
        <div className="intro-copy">
          {profile.about.map((paragraph, index) => <p key={index}>{renderRichText(paragraph)}</p>)}
          <div className="action-links">
            <a href={profile.resume} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-file-pdf" aria-hidden="true" /> Resume
            </a>
          </div>
        </div>
      </ContentSection>
      <ContentSection id="publications" title="Publications">
        <PublicationGroups publications={currentPublications} />
      </ContentSection>
      <ContentSection id="education" title="Education">
        <Timeline items={currentEducation} />
      </ContentSection>
      <ContentSection id="awards" title="Awards">
        <ItemList items={currentAwards} />
      </ContentSection>
      <ContentSection id="service" title="Reviewer Experience">
        <GroupedItems groups={reviewerService} />
      </ContentSection>
    </>
  );
}

function EarlyLifePage() {
  return (
    <>
      <section className="section page-introduction">
        <p className="eyebrow">Background</p>
        <h1>Early Life</h1>
        <p>I consider myself extremely fortunate to have had the chance to study at some of the most prestigious institutions in Bangladesh at every level.</p>
      </section>
      <ContentSection id="education" title="Education">
        <Timeline items={earlyEducation} />
      </ContentSection>
      <ContentSection id="publications" title="Undergraduate Publications">
        <PublicationGroups publications={earlyPublications} />
      </ContentSection>
      <ContentSection id="experience" title="Experience">
        <Timeline items={earlyExperience} />
      </ContentSection>
      <ContentSection id="grants" title="Scholarships and Grants">
        <Timeline items={earlyGrants} />
      </ContentSection>
      <ContentSection id="awards" title="Awards">
        <GroupedItems groups={earlyAwards} />
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
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
            <i className={link.icon} aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="sidebar-block">
        <h2>Research Focus</h2>
        <div className="focus-row">
          {profile.focus.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}

function ContentSection({ id, title, children }) {
  return (
    <section className={`section${id === "about" ? " about-section" : ""}`} id={id}>
      <div className="section-title">
        <h2><span className="title-icon" aria-hidden="true"><i className={sectionIcon(id)} /></span>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PublicationGroups({ publications }) {
  const groups = [...new Set(publications.map((publication) => publication.group))];
  return groups.map((group) => (
    <section className="publication-group" key={group}>
      <h3><span className="title-icon title-icon-compact" aria-hidden="true"><i className="fa-solid fa-book-open" /></span>{group}</h3>
      <div className="highlight-list">
        {publications.filter((publication) => publication.group === group).map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
        ))}
      </div>
    </section>
  ));
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
          <a href={publication.href} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> View publication</a>
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
            {item.detail ? <p>{renderRichText(item.detail)}</p> : null}
          </div>
          <time>{item.period}</time>
        </article>
      ))}
    </div>
  );
}

function ItemList({ items }) {
  return <div className="honor-list">{items.map((item) => <div className="honor-row" key={item.text}><span>{item.text}</span><time>{item.year}</time></div>)}</div>;
}

function GroupedItems({ groups }) {
  return (
    <div className="service-groups">
      {groups.map((group) => (
        <section className="service-group" key={group.category}>
          <h3><span className="title-icon" aria-hidden="true"><i className="fa-solid fa-award" /></span>{group.category}</h3>
          <div className="service-chip-grid">
            {group.items.map((item) => <span className="service-chip" key={item}>{item}</span>)}
          </div>
        </section>
      ))}
    </div>
  );
}

function renderRichText(value) {
  if (!Array.isArray(value)) return value;
  return value.map((part, index) => typeof part === "string" ? part : (
    <a key={index} href={part.href} target={part.href?.startsWith("http") ? "_blank" : undefined} rel={part.href?.startsWith("http") ? "noreferrer" : undefined}>{part.text}</a>
  ));
}

function highlightName(authors) {
  return authors.split(profile.name).map((part, index, parts) => (
    <span key={index}>{part}{index < parts.length - 1 ? <strong>{profile.name}</strong> : null}</span>
  ));
}

function sectionLabel(section) {
  return section === "service" ? "Reviewing" : section.replace(/(^|-)\w/g, (value) => value.toUpperCase());
}

function sectionIcon(section) {
  return {
    about: "fa-solid fa-user",
    publications: "fa-solid fa-book-open",
    education: "fa-solid fa-graduation-cap",
    experience: "fa-solid fa-briefcase",
    grants: "fa-solid fa-hand-holding-dollar",
    awards: "fa-solid fa-trophy",
    service: "fa-solid fa-clipboard-check"
  }[section] ?? "fa-solid fa-circle";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default App;
