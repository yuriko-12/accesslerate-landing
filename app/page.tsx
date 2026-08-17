import "./site.css";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand brand-logo" href="#top" aria-label="Accesslerate, inicio"><img src="/accesslerate-logo-transparent.png" width="792" height="361" alt="Accesslerate" /></a>
        <div className="nav-links"><a href="#servicios">Expertise</a><a href="#enfoque">Approach</a><a href="#contacto">Contact</a></div>
        <a className="nav-cta" href="#agenda">Schedule a conversation <span aria-hidden="true">↗</span></a>
      </nav>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">STRATEGIC ADVISORY · HEALTHCARE</p>
          <h1>Complexity<br />Shapes <em>Advantage.</em></h1>
          <p className="lead">Strategic advisory for organizations competing where complexity defines outcomes.</p>
          <div className="hero-actions"><a className="button primary" href="#agenda">Start a conversation <span aria-hidden="true">→</span></a><a className="text-link" href="#servicios">Explore our expertise <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-aside" aria-label="Áreas de especialidad">
          <p>Turning healthcare complexity into clear strategic direction.</p>
          <div className="orbit" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div>
          <ul><li>Commercial Strategy</li><li>Market Access</li><li>Business Development</li></ul>
        </div>
      </section>

      <section className="statement dark-section"><div className="shell statement-grid"><p className="section-index">01 / WHAT WE DO</p><div><h2>Clarity to decide.<br /><em>Direction to move.</em></h2><p className="statement-copy">We partner with leaders navigating high-stakes healthcare decisions—bringing market intelligence, strategic rigor and hands-on execution to the moments that shape growth.</p></div></div></section>

      <section className="services shell section-pad" id="servicios"><header className="section-head"><p className="section-index">02 / EXPERTISE</p><p className="kicker">Focused advisory across the commercial lifecycle.</p></header><div className="service-list">
        <article className="service-card"><span className="number">01</span><div><h3>Commercial<br />Strategy</h3><p>Translate market dynamics into a differentiated commercial path, with priorities your organization can execute.</p><ul><li>Go-to-market strategy</li><li>Portfolio &amp; opportunity assessment</li><li>Commercial model design</li></ul></div><span className="card-arrow" aria-hidden="true">↗</span></article>
        <article className="service-card"><span className="number">02</span><div><h3>Market<br />Access</h3><p>Navigate access complexity with strategies grounded in stakeholder value, evidence and local market realities.</p><ul><li>Access &amp; reimbursement strategy</li><li>Value proposition development</li><li>Stakeholder engagement</li></ul></div><span className="card-arrow" aria-hidden="true">↗</span></article>
        <article className="service-card"><span className="number">03</span><div><h3>Business<br />Development</h3><p>Identify, evaluate and activate the partnerships and opportunities that can accelerate sustainable growth.</p><ul><li>Opportunity scouting</li><li>Partnering strategy</li><li>Deal assessment &amp; activation</li></ul></div><span className="card-arrow" aria-hidden="true">↗</span></article>
      </div></section>

      <section className="experience paper-section" id="experiencia"><div className="shell experience-grid"><div><p className="section-index">03 / EXPERIENCE</p><h2>Senior perspective.<br /><em>Built in the market.</em></h2></div><div className="experience-copy"><p className="large-copy">Accesslerate brings executive-level thinking shaped by direct experience across healthcare markets, functions and growth challenges.</p><p>We understand the trade-offs behind the strategy—because we have worked inside them. Our counsel combines the objectivity of an external advisor with the practical judgment of an operator.</p><div className="credentials" aria-label="Credenciales destacadas"><div><strong>20+</strong><span>Years across healthcare strategy</span></div><div><strong>LATAM</strong><span>Regional &amp; local market perspective</span></div><div><strong>C‑LEVEL</strong><span>Senior, direct engagement</span></div></div></div></div></section>

      <section className="problems dark-section"><div className="shell section-pad"><header className="section-head light"><p className="section-index">04 / WHERE WE HELP</p><h2>When the path forward<br />is not <em>obvious.</em></h2></header><div className="problem-grid"><article><span>A</span><h3>A market is shifting.</h3><p>Your existing commercial model no longer reflects the access, customer or competitive reality.</p></article><article><span>B</span><h3>Growth has stalled.</h3><p>You need to uncover the right opportunity—and build a credible case for action.</p></article><article><span>C</span><h3>A launch is at stake.</h3><p>Success depends on aligning access and commercial choices before resources are committed.</p></article><article><span>D</span><h3>A partnership could change the trajectory.</h3><p>You need clarity on strategic fit, value and the route to activation.</p></article></div><p className="client-types">Pharma &amp; Biotech <i>/</i> MedTech <i>/</i> Health Services <i>/</i> Investors &amp; Innovators</p></div></section>

      <section className="approach shell section-pad" id="enfoque"><header className="section-head"><p className="section-index">05 / OUR APPROACH</p><h2>Rigorous thinking.<br /><em>Practical momentum.</em></h2></header><div className="steps"><article><span>01</span><h3>Frame</h3><p>Define the decision that matters, the real constraints and what success must look like.</p></article><article><span>02</span><h3>Decode</h3><p>Distill market signals, stakeholder needs and internal realities into sharp strategic insight.</p></article><article><span>03</span><h3>Design</h3><p>Build a focused path forward, grounded in value, feasibility and competitive advantage.</p></article><article><span>04</span><h3>Activate</h3><p>Translate direction into decisions, engagement and the first moves that create momentum.</p></article></div></section>

      <section className="schedule" id="agenda"><div className="shell schedule-grid"><div><p className="section-index">06 / START A CONVERSATION</p><h2>Bring us the question<br />that matters <em>most.</em></h2><p>In a focused 30-minute conversation, we’ll explore the context, the stakes and whether Accesslerate is the right partner.</p></div><div className="calendar-card"><p>30 MIN · INTRODUCTORY CONVERSATION</p><div className="calendar-icon" aria-hidden="true"><span>A</span></div><h3>Choose a time that works for you.</h3><a className="button primary wide" href="https://calendly.com/yuriko-accesslerate/30min" target="_blank" rel="noreferrer">Open Calendly <span aria-hidden="true">↗</span></a></div></div></section>

      <section className="contact dark-section" id="contacto"><div className="shell contact-grid"><div><p className="section-index">07 / STAY CONNECTED</p><h2>Useful perspective.<br /><em>Without the noise.</em></h2><p>Occasional notes on healthcare strategy, access and growth—written for people making consequential decisions.</p><form className="newsletter" action="https://formspree.io/f/mrpzyvpr" method="POST"><input type="hidden" name="_subject" value="New Accesslerate newsletter subscriber" /><label htmlFor="email">Email address</label><div><input id="email" name="email" type="email" placeholder="name@company.com" autoComplete="email" required /><button type="submit" aria-label="Subscribe to newsletter">→</button></div></form></div><div className="direct-contact"><p>Prefer to connect directly?</p><a href="mailto:yuriko@accesslerate.com">yuriko@accesslerate.com <span>↗</span></a><a href="https://www.linkedin.com/in/yurikotovar" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div></section>

      <footer><div className="shell footer-grid"><div><a className="brand brand-logo footer-brand" href="#top" aria-label="Accesslerate, inicio"><img src="/accesslerate-logo-footer.png" width="792" height="361" alt="Accesslerate" /></a><p>Complexity Shapes Advantage.</p></div><div><p>Strategic advisory for organizations competing<br />where complexity defines outcomes.</p></div><div><a href="#servicios">Expertise</a><a href="#enfoque">Approach</a><a href="#agenda">Schedule</a></div></div><div className="shell legal"><span>© {new Date().getFullYear()} Accesslerate. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
