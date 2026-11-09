import { ProjectGallery } from "@/components/project-gallery";
import { projects } from "@/data/portfolio";
import {
  education,
  focus,
  principles,
  profile,
  results,
  roles,
  skillGroups,
} from "@/data/resume";

function SectionHead({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="section-head">
      <p className="kicker">
        {index} — {kicker}
      </p>
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
          index="01"
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
        <SectionHead index="02" kicker="Портфолио" title="Проекты" />
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
          index="03"
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
          index="04"
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
          index="05"
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
          index="06"
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
        <p className="kicker">07 — Контакт</p>
        <h2>Написать напрямую</h2>
        <a
          className="contact-mail"
          href={profile.mailHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.email}
        </a>
        <p className="contact-note">
          {profile.title}. Веб-приложения, корпоративные системы, API и
          производительность.
        </p>
      </div>
      <footer className="footer">
        <div className="wrap footer-bar">
          <p>{profile.name}</p>
          <p>{profile.title}</p>
          <p>© 2026</p>
        </div>
      </footer>
    </section>
  );
}
