import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/data/portfolio";
import {
  contactCopy,
  contactFacts,
  education,
  focus,
  principles,
  profile,
  results,
  roles,
  skillGroups,
} from "@/data/resume";

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  if (!href) {
    return (
      <span className="footer-link" aria-hidden="true">
        {children}
      </span>
    );
  }

  return (
    <a
      className="footer-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function SectionHead({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="section-head">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="wrap hero-inner">
        <p className="eyebrow">
          <span>{profile.title}</span>
          <span>{profile.years}</span>
        </p>
        <h1>
          <span>{profile.givenName}</span>
          <em>{profile.familyName}</em>
        </h1>
        <div className="hero-bottom">
          <p className="lede">{profile.lede}</p>
          <aside className="dossier">
            <p className="kicker">Фокус</p>
            <ul>
              {focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <div className="hero-actions">
            <a className="link-arrow" href="#experience">
              Смотреть опыт <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Profile() {
  return (
    <section className="section" id="profile">
      <div className="wrap">
        <SectionHead
          kicker="Профиль"
          title="Коммерческая разработка с 2010 года"
        />
        <div className="profile-layout">
          <p className="summary">{profile.summary}</p>
          <ul className="principles">
            {principles.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <SectionHead kicker="Портфолио" title="Проекты" />
        <div className="projects">
          {projects.map((project, index) => {
            const body = (
              <>
                <div className="project-copy">
                  <div className="project-heading">
                    <p className="project-num">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-summary">{project.summary}</p>
                  <ul className="project-stack">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <ProjectGallery shots={project.shots} />
              </>
            );

            return (
              <article className="project" key={project.id}>
                {project.href ? (
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section className="section" id="results">
      <div className="wrap">
        <SectionHead
          kicker="Результаты"
          title="Измеримые изменения в продуктах"
        />
        <p className="section-note">
          Цифры из коммерческих проектов — только там, где оптимизация была
          посчитана.
        </p>
        <div className="result-grid">
          {results.map((item) => (
            <article key={item.title} className="result">
              <p className="result-figure">
                {item.figure}
                {item.unit ? <small>{item.unit}</small> : null}
              </p>
              <h3>{item.title}</h3>
              <p>{item.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <SectionHead
          kicker="Опыт"
          title="Пять этапов коммерческой практики"
        />
        <div className="roles">
          {roles.map((role, index) => (
            <article key={role.company} className="role">
              <div className="role-side">
                <p className="role-num">{String(index + 1).padStart(2, "0")}</p>
                <p className="role-period">
                  {role.period.split(" — ").map((part, partIndex, parts) => (
                    <span key={part}>
                      {part}
                      {partIndex < parts.length - 1 ? " —" : ""}
                    </span>
                  ))}
                </p>
              </div>
              <div className="role-body">
                <h3>{role.company}</h3>
                <p className="role-title">{role.title}</p>
                <p className="role-project">{role.project}</p>
                {role.metrics.length > 0 ? (
                  <ul className="role-metrics">
                    {role.metrics.map((metric) => (
                      <li key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <ul className="points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {role.stack.length > 0 ? (
                  <ul className="stack" aria-label="Технологии">
                    {role.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead
          kicker="Навыки"
          title="Стек, на котором держится практика"
        />
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <SectionHead
          kicker="Образование"
          title="Специалитет, 2010"
        />
        <article className="education">
          <p className="kicker">{education.short}</p>
          <h3>{education.school}</h3>
          <p className="education-level">
            {education.level}
            <span>{education.year}</span>
          </p>
          <p className="education-specialty">{education.specialty}</p>
        </article>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <p className="kicker">{contactCopy.kicker}</p>
        <h2>{contactCopy.title}</h2>
        <p className="contact-note">{contactCopy.note}</p>
        <dl className="contact-facts">
          {contactFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>
                {"href" in fact && fact.href ? (
                  <a href={fact.href} target="_blank" rel="noopener noreferrer">
                    {fact.value}
                  </a>
                ) : (
                  fact.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <ContactForm />
      </div>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-links">
            <FooterLink href={profile.phoneHref} label="Позвонить">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.2 3.8h2.1l1.1 3.1-1.8 1.1a12 12 0 0 0 5.4 5.4l1.1-1.8 3.1 1.1v2.1a1.8 1.8 0 0 1-2 1.8A14.2 14.2 0 0 1 6.4 5.8a1.8 1.8 0 0 1 1.8-2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </FooterLink>
            <FooterLink href={profile.telegramHref} label="Telegram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20.8 4.6 3.4 11.2l5.7 1.9 1.8 5.6 2.7-3.4 4.4 3.3 2.8-14z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.1 13.1 17.6 7.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </FooterLink>
            <FooterLink
              href={profile.mailHref}
              label={`Написать на ${profile.email}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 6.5h16v11H4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M4.5 7.2 12 13l7.5-5.8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </FooterLink>
            <FooterLink href={profile.githubHref} label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3.2a8.8 8.8 0 0 0-2.8 17.1c.44.08.6-.19.6-.42v-1.5c-2.45.53-2.97-1.18-2.97-1.18-.4-1.02-.98-1.29-.98-1.29-.8-.55.06-.54.06-.54.88.06 1.35.91 1.35.91.78 1.35 2.06.96 2.56.73.08-.57.31-.96.56-1.18-1.96-.22-4.02-.98-4.02-4.36 0-.96.34-1.75.9-2.37-.09-.22-.39-1.12.09-2.33 0 0 .74-.24 2.42.9a8.4 8.4 0 0 1 4.4 0c1.68-1.14 2.42-.9 2.42-.9.48 1.21.18 2.11.09 2.33.56.62.9 1.41.9 2.37 0 3.39-2.07 4.13-4.04 4.35.32.28.6.82.6 1.66v2.46c0 .23.16.51.61.42A8.8 8.8 0 0 0 12 3.2z"
                  fill="currentColor"
                />
              </svg>
            </FooterLink>
          </div>
          <div className="footer-bar">
            <p>
              © 2026 {profile.name} · {profile.title} (JavaScript / TypeScript /
              Python)
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
