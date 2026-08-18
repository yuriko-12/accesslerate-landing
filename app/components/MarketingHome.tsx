/* Vinext currently breaks next/image at runtime; full-page anchors intentionally switch locale documents. */
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
type Locale = "en" | "es";
type SectionTitle = readonly [string, string];

const copy = {
  en: {
    lang: "en-US",
    nav: ["Expertise", "Approach", "Leadership", "Contact", "Schedule a conversation", "ES"],
    hero: {
      eyebrow: "OPERATOR-LED STRATEGY · HEALTHCARE · MEXICO & LATIN AMERICA",
      title: ["Strategy built", "to create"], accent: "momentum.",
      lead: "Healthcare strategy for growth, access, transformation and new business across Mexico and Latin America.",
      primary: "Start a conversation", secondary: "Explore our expertise",
      aside: "Senior guidance to shape the strategy—and activate the change required to deliver it.",
      areas: ["Business & Growth Strategy", "Market Access", "New Business & Partnerships", "Commercial Transformation", "Change Management"],
    },
    statement: { index: "01 / WHAT WE DO", title: ["Clarity to decide.", "Alignment to move."], body: "We help healthcare leaders make critical growth and access decisions—and mobilize the organization, operating model and capabilities required to execute them." },
    expertise: {
      index: "02 / EXPERTISE", kicker: "From strategic choice to organizational adoption.",
      services: [
        { title: ["Business &", "Growth Strategy"], body: "Turn market complexity into a focused growth agenda with explicit choices, priorities and economics.", items: ["Growth strategy", "Portfolio & opportunity assessment", "Go-to-market strategy"] },
        { title: ["Market Access &", "Reimbursement"], body: "Build an access path grounded in stakeholder value, evidence, affordability and local market realities.", items: ["Access & reimbursement strategy", "Value proposition", "Stakeholder engagement"] },
        { title: ["New Business &", "Partnerships"], body: "Identify, assess and activate partnerships and opportunities that can accelerate sustainable growth.", items: ["Opportunity scouting", "Partnering strategy", "Deal assessment & activation"] },
        { title: ["Commercial Model", "Transformation"], body: "Redesign the commercial model around today’s customer, access and competitive environment.", items: ["Operating model design", "Customer engagement", "Capabilities & governance"] },
        { title: ["Strategy Activation &", "Change Management"], body: "Convert direction into adoption through leadership alignment, stakeholder mobilization and measurable behavior change.", items: ["Change strategy", "Leadership & stakeholder alignment", "Adoption roadmap"] },
      ],
    },
    experience: {
      index: "03 / OPERATOR EXPERIENCE", title: ["Executive judgment.", "Earned in the market."],
      lead: "Accesslerate combines the objectivity of an external advisor with the practical judgment of a healthcare operator.",
      body: "Our perspective is shaped by 20+ years leading growth, market access, commercial transformation and organizational change across Pharma, Biotech, Consumer Health, MedTech and Diagnostics.",
      note: "Selected outcomes from Yuriko Tovar’s prior executive roles",
      outcomes: [["20+", "Years across healthcare"], ["+300%", "Patient-base growth"], ["30→90%", "Adherence improvement"], ["8→20%", "Market-share growth"], ["1 year", "Access milestone delivered early"]],
    },
    moments: {
      index: "04 / WHERE WE HELP", title: ["When the path forward", "is not obvious."],
      items: [["A market is shifting.", "Your commercial model no longer reflects the access, customer or competitive reality."], ["Growth has stalled.", "You need to uncover the right opportunity—and build a credible case for action."], ["A launch is at stake.", "Success depends on aligning access, commercial choices and the organization before resources are committed."], ["A transformation must land.", "The strategy is clear, but leadership alignment, ownership and adoption will determine the outcome."]],
      sectors: ["Pharma & Biotech", "Consumer Health", "MedTech & Diagnostics", "Health Services", "Investors & Innovators"],
    },
    approach: {
      index: "05 / OUR APPROACH", title: ["Strategy and change.", "Designed together."],
      steps: [["Frame", "Define the decision that matters, the real constraints and what success must look like."], ["Decode", "Distill market signals, stakeholder needs and organizational realities into sharp insight."], ["Design", "Build a focused path grounded in value, feasibility and competitive advantage."], ["Mobilize", "Align leaders, stakeholders, capabilities and governance around the strategic choice."], ["Activate", "Turn the roadmap into decisions, behaviors and measurable first moves."]],
      methods: "Change methods adapted to the context: Kotter · Prosci ADKAR · Agile",
    },
    leadership: {
      index: "06 / LEADERSHIP", title: ["Senior attention.", "From the first question."], eyebrow: "YURIKO TOVAR SANTOS · FOUNDER & MANAGING DIRECTOR",
      lead: "Healthcare strategist, business builder and transformation leader with 20+ years of executive experience in Mexico and Latin America.",
      body: "Yuriko has led regional and local mandates spanning strategy, market access, commercial operations, patient solutions and change. Her experience includes work across GSK, Bayer, Novartis, Johnson & Johnson, AbbVie, B. Braun and MSD. Every engagement benefits from her direct involvement and operator perspective.",
      link: "Connect on LinkedIn",
    },
    schedule: { index: "07 / START A CONVERSATION", title: ["Bring us the question", "that matters most."], body: "In a focused 30-minute conversation, we’ll explore the context, the stakes and whether Accesslerate is the right partner.", top: "30 MIN · INTRODUCTORY CONVERSATION", card: "Choose a time that works for you.", action: "Open Calendly" },
    contact: { index: "08 / STAY CONNECTED", title: ["Useful perspective.", "Without the noise."], body: "Occasional notes on healthcare strategy, access, growth and change—written for people making consequential decisions.", label: "Email address", placeholder: "name@company.com", subject: "New Accesslerate newsletter subscriber", direct: "Prefer to connect directly?", whatsapp: "Hello Yuriko, I would like to learn more about Accesslerate." },
    footer: ["Operator-led healthcare strategy across Mexico and Latin America.", "All rights reserved.", "Back to top"],
  },
  es: {
    lang: "es-MX",
    nav: ["Servicios", "Enfoque", "Liderazgo", "Contacto", "Agenda una conversación", "EN"],
    hero: {
      eyebrow: "ESTRATEGIA OPERATOR-LED · HEALTHCARE · MÉXICO Y LATINOAMÉRICA",
      title: ["Estrategia creada", "para generar"], accent: "impulso.",
      lead: "Estrategia healthcare para crecimiento, acceso, transformación y nuevos negocios en México y Latinoamérica.",
      primary: "Inicia una conversación", secondary: "Conoce nuestros servicios",
      aside: "Acompañamiento senior para definir la estrategia y activar el cambio necesario para llevarla a resultados.",
      areas: ["Estrategia de Negocio y Crecimiento", "Market Access", "Nuevos Negocios y Alianzas", "Transformación Comercial", "Gestión del Cambio"],
    },
    statement: { index: "01 / QUÉ HACEMOS", title: ["Claridad para decidir.", "Alineación para avanzar."], body: "Ayudamos a líderes de healthcare a tomar decisiones críticas de crecimiento y acceso, y a movilizar la organización, el modelo operativo y las capacidades necesarias para ejecutarlas." },
    expertise: {
      index: "02 / SERVICIOS", kicker: "De la decisión estratégica a la adopción organizacional.",
      services: [
        { title: ["Estrategia de Negocio", "y Crecimiento"], body: "Convertimos la complejidad del mercado en una agenda de crecimiento enfocada, con decisiones, prioridades y lógica económica claras.", items: ["Estrategia de crecimiento", "Evaluación de portafolio y oportunidades", "Estrategia go-to-market"] },
        { title: ["Market Access", "y Reembolso"], body: "Construimos rutas de acceso basadas en valor para stakeholders, evidencia, asequibilidad y realidades locales.", items: ["Estrategia de acceso y reembolso", "Propuesta de valor", "Relacionamiento con stakeholders"] },
        { title: ["Nuevos Negocios", "y Alianzas"], body: "Identificamos, evaluamos y activamos oportunidades y alianzas capaces de acelerar el crecimiento sostenible.", items: ["Búsqueda de oportunidades", "Estrategia de alianzas", "Evaluación y activación de deals"] },
        { title: ["Transformación del", "Modelo Comercial"], body: "Rediseñamos el modelo comercial para responder al entorno actual de clientes, acceso y competencia.", items: ["Diseño del modelo operativo", "Engagement con clientes", "Capacidades y gobernanza"] },
        { title: ["Activación Estratégica", "y Gestión del Cambio"], body: "Convertimos la dirección en adopción mediante alineación de líderes, movilización de stakeholders y cambios de comportamiento medibles.", items: ["Estrategia de cambio", "Alineación de líderes y stakeholders", "Roadmap de adopción"] },
      ],
    },
    experience: {
      index: "03 / EXPERIENCIA OPERATIVA", title: ["Criterio ejecutivo.", "Construido en el mercado."],
      lead: "Accesslerate combina la objetividad de un asesor externo con el criterio práctico de quien ha operado dentro de healthcare.",
      body: "Nuestra perspectiva se ha formado durante más de 20 años liderando crecimiento, market access, transformación comercial y cambio organizacional en Pharma, Biotech, Consumer Health, MedTech y Diagnóstico.",
      note: "Resultados seleccionados de roles ejecutivos previos de Yuriko Tovar",
      outcomes: [["20+", "Años en healthcare"], ["+300%", "Crecimiento de base de pacientes"], ["30→90%", "Mejora en adherencia"], ["8→20%", "Crecimiento de market share"], ["1 año", "Hito de acceso adelantado"]],
    },
    moments: {
      index: "04 / DÓNDE AYUDAMOS", title: ["Cuando el camino", "no es evidente."],
      items: [["El mercado está cambiando.", "El modelo comercial ya no refleja la realidad de acceso, clientes o competencia."], ["El crecimiento se estancó.", "Se necesita encontrar la oportunidad correcta y construir un caso sólido para actuar."], ["Un lanzamiento está en juego.", "El éxito exige alinear acceso, decisiones comerciales y organización antes de comprometer recursos."], ["La transformación debe aterrizar.", "La estrategia está clara, pero la alineación, la responsabilidad y la adopción definirán el resultado."]],
      sectors: ["Pharma y Biotech", "Consumer Health", "MedTech y Diagnóstico", "Servicios de Salud", "Inversionistas e Innovadores"],
    },
    approach: {
      index: "05 / NUESTRO ENFOQUE", title: ["Estrategia y cambio.", "Diseñados juntos."],
      steps: [["Enmarcar", "Definir la decisión crítica, las restricciones reales y cómo se verá el éxito."], ["Decodificar", "Convertir señales del mercado, necesidades de stakeholders y realidades internas en insights precisos."], ["Diseñar", "Construir una ruta enfocada, basada en valor, viabilidad y ventaja competitiva."], ["Movilizar", "Alinear líderes, stakeholders, capacidades y gobernanza alrededor de la decisión estratégica."], ["Activar", "Traducir el roadmap en decisiones, comportamientos y primeros movimientos medibles."]],
      methods: "Métodos de cambio adaptados al contexto: Kotter · Prosci ADKAR · Agile",
    },
    leadership: {
      index: "06 / LIDERAZGO", title: ["Atención senior.", "Desde la primera pregunta."], eyebrow: "YURIKO TOVAR SANTOS · FUNDADORA Y MANAGING DIRECTOR",
      lead: "Estratega de healthcare, desarrolladora de negocios y líder de transformación con más de 20 años de experiencia ejecutiva en México y Latinoamérica.",
      body: "Yuriko ha liderado responsabilidades regionales y locales en estrategia, market access, operaciones comerciales, soluciones para pacientes y gestión del cambio. Su experiencia incluye trabajo en GSK, Bayer, Novartis, Johnson & Johnson, AbbVie, B. Braun y MSD. Cada proyecto cuenta con su participación directa y perspectiva de operadora.",
      link: "Conecta en LinkedIn",
    },
    schedule: { index: "07 / INICIA UNA CONVERSACIÓN", title: ["Tráenos la pregunta", "que más importa."], body: "En una conversación enfocada de 30 minutos exploraremos el contexto, lo que está en juego y si Accesslerate es el socio adecuado.", top: "30 MIN · CONVERSACIÓN INICIAL", card: "Elige el horario que mejor te funcione.", action: "Abrir Calendly" },
    contact: { index: "08 / MANTENTE EN CONTACTO", title: ["Perspectiva útil.", "Sin ruido."], body: "Notas ocasionales sobre estrategia healthcare, acceso, crecimiento y cambio para quienes toman decisiones relevantes.", label: "Correo electrónico", placeholder: "nombre@empresa.com", subject: "Nuevo suscriptor de Accesslerate", direct: "¿Prefieres conectar directamente?", whatsapp: "Hola Yuriko, me gustaría conocer más sobre Accesslerate." },
    footer: ["Estrategia healthcare liderada por operadores en México y Latinoamérica.", "Todos los derechos reservados.", "Volver arriba"],
  },
} as const;

function Title({ lines }: { lines: SectionTitle }) {
  return <>{lines[0]}<br /><em>{lines[1]}</em></>;
}

export default function MarketingHome({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const switchHref = locale === "en" ? "/es" : "/";
  const serviceHrefs = locale === "en" ? [
    "/services/business-growth-strategy",
    "/services/market-access",
    "/services/new-business-partnerships",
    "/services/commercial-transformation",
    "/services/change-management",
  ] : [
    "/es/servicios/estrategia-negocio-crecimiento",
    "/es/servicios/market-access",
    "/es/servicios/nuevos-negocios-alianzas",
    "/es/servicios/transformacion-comercial",
    "/es/servicios/gestion-del-cambio",
  ];
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Accesslerate", url: locale === "en" ? "https://www.accesslerate.com/" : "https://www.accesslerate.com/es", description: c.hero.lead, email: "yuriko@accesslerate.com", areaServed: ["Mexico", "Latin America"], founder: { "@type": "Person", name: "Yuriko Tovar Santos", jobTitle: "Founder & Managing Director", sameAs: "https://www.linkedin.com/in/yurikotovar" }, sameAs: ["https://www.linkedin.com/in/yurikotovar"], knowsAbout: ["Healthcare Strategy", "Market Access", "Business Development", "Commercial Transformation", "Change Management"] };

  return <main lang={c.lang}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <nav className="nav shell" aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>
      <a className="brand brand-logo" href="#top" aria-label="Accesslerate, home"><img src="/accesslerate-logo-transparent.png" width="792" height="361" alt="Accesslerate" fetchPriority="high" /></a>
      <div className="nav-links"><a href="#servicios">{c.nav[0]}</a><a href="#enfoque">{c.nav[1]}</a><a href="#liderazgo">{c.nav[2]}</a><a href="#contacto">{c.nav[3]}</a></div>
      <a className="language-switch" href={switchHref} hrefLang={locale === "en" ? "es" : "en"}>{c.nav[5]}</a>
      <a className="nav-cta" href="#agenda">{c.nav[4]} <span className="icon-arrow icon-ne" aria-hidden="true" /></a>
    </nav>

    <section className="hero shell" id="top"><div className="hero-copy"><p className="eyebrow">{c.hero.eyebrow}</p><h1>{c.hero.title[0]}<br />{c.hero.title[1]} <em>{c.hero.accent}</em></h1><p className="lead">{c.hero.lead}</p><div className="hero-actions"><a className="button primary" href="#agenda">{c.hero.primary} <span className="icon-arrow" aria-hidden="true" /></a><a className="text-link" href="#servicios">{c.hero.secondary} <span className="icon-arrow icon-down" aria-hidden="true" /></a></div></div><div className="hero-aside"><p>{c.hero.aside}</p><div className="orbit" aria-hidden="true"><span>01</span><span>03</span><span>05</span></div><ul>{c.hero.areas.map((area) => <li key={area}>{area}</li>)}</ul></div></section>

    <section className="statement dark-section"><div className="shell statement-grid"><p className="section-index">{c.statement.index}</p><div><h2><Title lines={c.statement.title} /></h2><p className="statement-copy">{c.statement.body}</p></div></div></section>

    <section className="services shell section-pad" id="servicios"><header className="section-head"><p className="section-index">{c.expertise.index}</p><p className="kicker">{c.expertise.kicker}</p></header><div className="service-list">{c.expertise.services.map((service, index) => {
      const content = <><span className="number">{String(index + 1).padStart(2, "0")}</span><div><h3>{service.title[0]}<br />{service.title[1]}</h3><p>{service.body}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div><span className="card-arrow icon-arrow icon-ne" aria-hidden="true" /></>;
      const href = serviceHrefs[index];
      return <a className="service-card service-card-link" href={href} key={service.title[0]} aria-label={`${service.title[0]} ${service.title[1]}`}>{content}</a>;
    })}</div></section>

    <section className="experience paper-section" id="experiencia"><div className="shell experience-grid"><div><p className="section-index">{c.experience.index}</p><h2><Title lines={c.experience.title} /></h2></div><div className="experience-copy"><p className="large-copy">{c.experience.lead}</p><p>{c.experience.body}</p></div></div><div className="shell proof-wrap"><p className="proof-note">{c.experience.note}</p><div className="proof-grid">{c.experience.outcomes.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

    <section className="problems dark-section"><div className="shell section-pad"><header className="section-head light"><p className="section-index">{c.moments.index}</p><h2><Title lines={c.moments.title} /></h2></header><div className="problem-grid">{c.moments.items.map(([title, body], index) => <article key={title}><span>{String.fromCharCode(65 + index)}</span><h3>{title}</h3><p>{body}</p></article>)}</div><p className="client-types">{c.moments.sectors.map((sector, index) => <span key={sector}>{index > 0 && <i>/</i>}{sector}</span>)}</p></div></section>

    <section className="approach shell section-pad" id="enfoque"><header className="section-head"><p className="section-index">{c.approach.index}</p><h2><Title lines={c.approach.title} /></h2></header><div className="steps five-steps">{c.approach.steps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div><p className="method-line">{c.approach.methods}</p></section>

    <section className="leadership paper-section" id="liderazgo"><div className="shell leadership-grid"><div className="leader-mark" aria-hidden="true"><span>YT</span><small>20+</small></div><div><p className="section-index">{c.leadership.index}</p><h2><Title lines={c.leadership.title} /></h2></div><div className="leader-copy"><p className="leader-eyebrow">{c.leadership.eyebrow}</p><p className="large-copy">{c.leadership.lead}</p><p>{c.leadership.body}</p><a className="text-link leader-link" href="https://www.linkedin.com/in/yurikotovar" target="_blank" rel="noreferrer">{c.leadership.link} <span className="icon-arrow icon-ne" aria-hidden="true" /></a></div></div></section>

    <section className="schedule" id="agenda"><div className="shell schedule-grid"><div><p className="section-index">{c.schedule.index}</p><h2><Title lines={c.schedule.title} /></h2><p>{c.schedule.body}</p></div><div className="calendar-card"><p>{c.schedule.top}</p><div className="calendar-icon" aria-hidden="true"><span>A</span></div><h3>{c.schedule.card}</h3><a className="button primary wide" href="https://calendly.com/yuriko-accesslerate/30min" target="_blank" rel="noreferrer">{c.schedule.action} <span className="icon-arrow icon-ne" aria-hidden="true" /></a></div></div></section>

    <section className="contact dark-section" id="contacto"><div className="shell contact-grid"><div><p className="section-index">{c.contact.index}</p><h2><Title lines={c.contact.title} /></h2><p>{c.contact.body}</p><form className="newsletter" action="https://formspree.io/f/mrpzyvpr" method="POST"><input type="hidden" name="_subject" value={c.contact.subject} /><label htmlFor={`email-${locale}`}>{c.contact.label}</label><div><input id={`email-${locale}`} name="email" type="email" placeholder={c.contact.placeholder} autoComplete="email" required /><button type="submit" aria-label={locale === "en" ? "Subscribe" : "Suscribirse"}><span className="icon-arrow" aria-hidden="true" /></button></div></form></div><div className="direct-contact"><p>{c.contact.direct}</p><a href="mailto:yuriko@accesslerate.com">yuriko@accesslerate.com <span className="icon-arrow icon-ne" aria-hidden="true" /></a><a href={`https://wa.me/525549679335?text=${encodeURIComponent(c.contact.whatsapp)}`} target="_blank" rel="noreferrer">WhatsApp <span className="icon-arrow icon-ne" aria-hidden="true" /></a><a href="https://www.linkedin.com/in/yurikotovar" target="_blank" rel="noreferrer">LinkedIn <span className="icon-arrow icon-ne" aria-hidden="true" /></a></div></div></section>

    <footer><div className="shell footer-grid"><div><a className="brand brand-logo footer-brand" href="#top"><img src="/accesslerate-logo-footer.png" width="792" height="361" alt="Accesslerate" loading="lazy" /></a><p>Complexity Shapes Advantage.</p></div><div><p>{c.footer[0]}</p><div className="footer-language"><a href="/" hrefLang="en">English</a><span>/</span><a href="/es" hrefLang="es">Español</a></div></div><div><a href="#servicios">{c.nav[0]}</a><a href="#enfoque">{c.nav[1]}</a><a href="#liderazgo">{c.nav[2]}</a><a href="#agenda">{c.nav[4]}</a></div></div><div className="shell legal"><span>© {new Date().getFullYear()} Accesslerate. {c.footer[1]}</span><a href="#top">{c.footer[2]} <span className="icon-arrow icon-up" aria-hidden="true" /></a></div></footer>
  </main>;
}
