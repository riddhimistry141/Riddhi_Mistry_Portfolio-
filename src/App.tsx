import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Send,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  label: string;
  situation: string;
  action: string;
  result: string;
  tags: string[];
  links: { label: string; href: string }[];
};

const techGroups = [
  { label: 'Languages', icon: Code2, items: ['JavaScript ES6+', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'EJS'] },
  { label: 'Frontend & frameworks', icon: Sparkles, items: ['React.js', 'Tailwind CSS', 'Bootstrap', 'AngularJS', 'shadcn/ui'] },
  { label: 'Backend & data', icon: Database, items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Prisma ORM', 'SQL', 'Appwrite'] },
  { label: 'AI, data & tools', icon: Terminal, items: ['Jupyter Notebooks', 'Power BI', 'Excel', 'Prompt Engineering', 'Generative AI', 'ChatGPT', 'Google Gemini'] },
];

const projects: Project[] = [
  {
    number: '01',
    title: 'HireHub',
    label: 'Job & recruitment management system',
    situation: 'Developed a job and recruitment management system with secure, role-based workflows for complex hiring tracks.',
    action: 'Built dedicated frontend and backend codebases using React.js, Node.js, Express.js, MongoDB, and Prisma ORM, with REST APIs for users, companies, jobs, applications, and interviews.',
    result: 'Delivered protected dashboards for Admin, Recruiter, and User roles plus job publishing, slot tracking, applicant management, and application status updates.',
    tags: ['React', 'Node.js', 'MongoDB', 'Prisma'],
    links: [
      { label: 'Frontend Repo', href: 'https://github.com/riddhimistry141/HireHub-Frontend' },
      { label: 'Backend Repo', href: 'https://github.com/riddhimistry141/HireHub-Backend' },
      { label:'Live Demo', href: 'https://hirehub-frontend-nine.vercel.app/'}
    ],
  },
  {
    number: '02',
    title: 'TechFlow',
    label: 'Task management application',
    situation: 'Engineered a responsive task management system optimized for rapid, organized workflows.',
    action: 'Implemented TypeScript, React, Tailwind CSS, React Router, Swagger Task APIs, localStorage authentication, and optional profile image upload.',
    result: 'Created protected routes, task creation/editing/deletion/status management, reusable loading states, and persistent task data.',
    tags: ['TypeScript', 'React', 'Tailwind', 'Swagger'],
    links: [{ label: 'View Code', href: 'https://github.com/riddhimistry141/TechFlow_Application_React' },
            { label: 'Live Demo', href: 'https://tech-flow-application-react.vercel.app/'}
    ],
  },
  {
    number: '03',
    title: 'Big Bites',
    label: 'Food storefront & ordering flow',
    situation: 'Created a dynamic online food storefront with restaurant menus and consumer-focused ordering workflows.',
    action: 'Crafted a server-side application using EJS, HTML, CSS, Express.js, and MongoDB with Razorpay test payment integration.',
    result: 'Built shopping cart logic, restaurant browsing, item ordering, payment handling, and a complete order placement flow.',
    tags: ['EJS', 'Express.js', 'MongoDB', 'Razorpay'],
    links: [{ label: 'View Code', href: 'https://github.com/riddhimistry141/Food-Store-bigbites' },
      {label: 'Live Demo', href: 'https://food-store-bigbites.vercel.app/'}],
  },
];

const specialistProjects = [
  { title: 'Urban flood prediction system', detail: 'AICTE internship · Python + Jupyter', repo: 'FLOOD_PREDICTION_GUJARATE_URBAN-AREA', accent: 'mint' },
  { title: 'Smart plant watering system', detail: 'IoT automation · Hardware', repo: 'smart-plant-watering-system-', accent: 'blue' },
  { title: 'Ecommerce sales analytics', detail: 'Interactive reporting · Power BI', repo: 'Ecommerce-Sales-Dashboard-using', accent: 'orange' },
  { title: 'Intelligent classifiers', detail: 'Fake news + financial fraud detection', repo: 'Fake-New-Detection- / Fraud-Detection-in-Financial-Transactions', accent: 'pink' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:riddhimistry141@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Riddhi Mistry home">
          <span className="brand-mark">RM</span>
          <span className="brand-name">Riddhi Mistry<span>.</span></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#stack" onClick={closeMenu}>Stack</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Available for new opportunities <span className="eyebrow-line" /></div>
            <h1 id="hero-title">Engineering <em>scalable</em> web ecosystems<span className="heading-period">.</span></h1>
            <p className="hero-intro">Hi, I&apos;m <strong>Riddhi Mistry</strong> — a Computer Science Engineer building full-stack products, dynamic frontend experiences, and data-driven solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/riddhi-mistry-832202289" target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a>
            </div>
            <div className="hero-footnote"><span>Currently focused on</span><span className="footnote-rule" /><strong>Full-stack & AI systems</strong></div>
          </div>

          <div className="hero-bento">
            <div className="portrait-card bento-card">
              <div className="card-topline"><span>01 / profile</span><span className="live-chip"><span /> online</span></div>
              <div className="portrait-frame"><img src="/images/profile.png" alt="Portrait of Riddhi Mistry" /></div>
              <div className="portrait-caption"><div><span className="mini-label">Based in</span><strong>Gandeva, Navsari, IN</strong></div><div className="portrait-code">&lt;/&gt;</div></div>
            </div>
            <div className="metric-card bento-card metric-mint"><span className="metric-icon"><Zap size={17} /></span><strong>Full-stack<br />web dev</strong><span className="metric-index">02</span></div>
            <div className="metric-card bento-card metric-blue"><span className="metric-icon"><Network size={17} /></span><strong>MERN +<br />TypeScript</strong><span className="metric-index">03</span></div>
            <div className="metric-card bento-card metric-dark"><div className="orbital"><span /><span /><span /></div><strong>AI & data<br />solutions</strong><span className="metric-index">04</span></div>
            <div className="availability-card bento-card"><span className="mini-label">Open to</span><strong>Building what&apos;s next.</strong><ArrowUpRight size={19} /></div>
          </div>
        </section>

        <section className="ticker" aria-label="Skills marquee"><div className="ticker-track"><span>BUILD WITH INTENT</span><i /> <span>SHIP WITH CLARITY</span><i /> <span>LEARN OUT LOUD</span><i /> <span>BUILD WITH INTENT</span><i /> <span>SHIP WITH CLARITY</span><i /></div></section>

        <section className="content-section section-wrap" id="stack" aria-labelledby="stack-title">
          <div className="section-heading"><div><span className="section-kicker">01 — capabilities</span><h2 id="stack-title">The stack behind<br /><em>the craft.</em></h2></div><p>Tools are only useful when they disappear into the experience. These are the technologies I reach for to make products feel clear, fast, and dependable.</p></div>
          <div className="stack-grid">{techGroups.map(({ label, icon: Icon, items }, index) => <article className={`stack-card stack-card-${index + 1}`} key={label}><div className="stack-card-head"><Icon size={19} /><span>0{index + 1}</span></div><h3>{label}</h3><div className="tag-list">{items.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="content-section projects-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><span className="section-kicker">02 — selected work</span><h2 id="work-title">Ideas made<br /><em>tangible.</em></h2></div><p>A selection of systems and experiences where product thinking meets thoughtful engineering. Every project starts with a real problem.</p></div>
          <div className="projects-list">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-title-row"><div><span className="project-label">{project.label}</span><h3>{project.title}</h3></div><div className="project-links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ExternalLink size={14} /></a>)}</div></div><div className="star-grid"><div><span className="star-label">S / T</span><p>{project.situation}</p></div><div><span className="star-label">A</span><p>{project.action}</p></div><div><span className="star-label">R</span><p>{project.result}</p></div></div><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section className="specialist-section section-wrap" aria-labelledby="specialist-title"><div className="section-heading compact"><div><span className="section-kicker">03 — beyond the browser</span><h2 id="specialist-title">Curiosity has<br /><em>range.</em></h2></div><p>From predicting floods to interpreting sales data, I like following a question wherever the solution leads.</p></div><div className="specialist-grid">{specialistProjects.map((project, index) => <a className={`specialist-card ${project.accent}`} href={`https://github.com/riddhimistry141/${project.repo}`} target="_blank" rel="noreferrer" key={project.title}><span className="specialist-index">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.detail}</p></div><ArrowUpRight size={19} /></a>)}</div></section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title"><div className="section-heading compact"><div><span className="section-kicker">04 — experience</span><h2 id="experience-title">Growing through<br /><em>the work.</em></h2></div></div><div className="timeline"><article className="timeline-item"><div className="timeline-date">Jun 2026 — Sep 2026</div><div className="timeline-marker"><span /></div><div className="timeline-content"><span className="role-type">Internship · Full-stack development</span><h3>Web Development / Full-Stack Developer</h3><p className="company">Wappzo Infotech Pvt. Ltd. · Navsari</p><p>Developed HireHub with React.js, Node.js, Express.js, MongoDB, and Prisma ORM. Implemented role-based authentication and protected workflows for Admin, Recruiter, and User roles, REST APIs, job publishing, slot tracking, applicant management, and application status updates.</p></div></article><article className="timeline-item"><div className="timeline-date">Jan 2026 — May 2026</div><div className="timeline-marker"><span /></div><div className="timeline-content"><span className="role-type">Internship · Frontend development</span><h3>Frontend Developer — AngularJS</h3><p className="company">Pixeta App Lab · Navsari</p><p>Developed and enhanced exam scheduling modules, integrated dynamic UI features including dropdown filtering and event handling, connected REST APIs, and debugged responsive frontend behavior.</p></div></article></div></section>

        <section className="education-section section-wrap" aria-labelledby="education-title"><div className="section-heading compact"><div><span className="section-kicker">05 — education</span><h2 id="education-title">Grounded in<br /><em>the fundamentals.</em></h2></div><p>A strong computer science foundation shaped by practical building, curiosity, and a habit of learning through real projects.</p></div><div className="education-grid"><article className="education-card education-primary"><span className="education-year">2026</span><div><span className="role-type">Bachelor&apos;s degree</span><h3>B.E in Computer Science &amp; Engineering</h3><p>R.N.G. Patel Institute of Technology · GTU<br />Bardoli, Surat, Gujarat</p></div><strong className="education-score">CGPA 8.68 / 10</strong></article><article className="education-card"><span className="education-year">2022</span><div><span className="role-type">Higher secondary education</span><h3>Senior Secondary (XII)</h3><p>Sanskar Samruddhi School of Excellence<br />Navsari, Gujarat</p></div></article><article className="education-card"><span className="education-year">2019</span><div><span className="role-type">Secondary education</span><h3>Secondary (X)</h3><p>Lesania Secondary School<br />Gauteng, South Africa</p></div></article></div></section><section className="credentials-section section-wrap" aria-labelledby="credentials-title"><div className="credentials-heading"><span className="section-kicker">06 — continuous learning</span><h2 id="credentials-title">Proof of <em>practice.</em></h2></div><div className="cert-grid">{['Google AI Essentials · Coursera', 'Google Prompting Essentials · Coursera', 'Power BI for Beginners · Simplilearn', 'Python Data Analysis · Edunet Foundation', 'Front-end Developer · Simplilearn'].map((cert, index) => <div className="cert-item" key={cert}><span>0{index + 1}</span><strong>{cert}</strong><Check size={16} /></div>)}</div></section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title"><div className="contact-copy"><span className="section-kicker">07 — say hello</span><h2 id="contact-title">Have a good<br /><em>idea?</em></h2><p>Whether you&apos;re building from scratch or making something better, I&apos;d love to hear what you&apos;re working on.</p><div className="social-links"><a href="https://github.com/riddhimistry141" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="https://www.linkedin.com/in/riddhi-mistry-832202289" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:riddhimistry141@gmail.com" aria-label="Email"><Mail size={19} /></a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required name="name" type="text" placeholder="Jane Smith" /></label><label>Email address<input required name="email" type="email" placeholder="jane@company.com" /></label><label>What&apos;s on your mind?<textarea required name="message" rows={4} placeholder="Tell me a little about the project..." /></label><button className="button button-primary submit-button" type="submit">{submitted ? <>Message ready <Check size={17} /></> : <>Send a message <Send size={16} /></>}</button>{submitted && <p className="form-success">Thanks — your message is ready to send. I&apos;ll be in touch at the email address you provided.</p>}</form></section>
      </main>

      <footer className="footer section-wrap"><span>© 2026 Riddhi Mistry</span><span>Designed & engineered with intent</span><a href="#top">Back to top <ChevronDown size={15} className="back-to-top" /></a></footer>
    </div>
  );
}

export default App;
