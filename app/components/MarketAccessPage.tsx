/* Vinext currently breaks next/image at runtime; full-page anchors intentionally switch locale documents. */
/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
type Locale = "en" | "es";

const copy = {
  en: {
    lang: "en-US",
    home: "/",
    counterpart: "/es/servicios/market-access",
    switchLabel: "ES",
    nav: ["Capabilities", "Approach", "FAQ", "Schedule a conversation"],
    breadcrumb: ["Home", "Expertise", "Market Access"],
    eyebrow: "MARKET ACCESS STRATEGY · MEXICO & LATIN AMERICA",
    title: "Access is not a final step.",
    accent: "It is a strategic choice.",
    lead: "We connect value, evidence, stakeholders, commercial choices and organizational activation to build credible access paths across Mexico and Latin America.",
    primary: "Discuss your access challenge",
    secondary: "Explore our capabilities",
    asideTitle: "Designed for consequential moments",
    aside: ["Preparing a launch", "Unlocking a stalled asset", "Expanding a portfolio", "Transforming the access model"],
    challengeIndex: "01 / THE CHALLENGE",
    challengeTitle: "A technically sound access plan can still fail in the organization.",
    challengeBody: "Market access creates value when evidence, stakeholder needs, affordability, commercial priorities and execution are designed as one system—not as disconnected workstreams.",
    capabilities: {
      index: "02 / WHERE WE HELP", title: "From access ambition to an executable path.", lead: "Focused support at the decisions where strategic coherence matters most.",
      items: [
        ["Access & Reimbursement Strategy", "Define the access ambition, priority pathways and strategic choices that balance patient value, system realities and business objectives."],
        ["Value Proposition & Evidence Translation", "Turn clinical, economic and real-world evidence into a differentiated value story built for the stakeholders who shape access."],
        ["Stakeholder & Institutional Strategy", "Map influence, needs and decision dynamics across public and private systems to prioritize purposeful engagement."],
        ["Launch & Portfolio Access Planning", "Integrate access early into launch, lifecycle and portfolio choices so critical dependencies are addressed before they become barriers."],
        ["Access Operating Model & Change Management", "Align roles, governance, capabilities and behaviors so the organization can execute the strategy—not simply approve it."],
      ],
    },
    moments: { index: "03 / CRITICAL MOMENTS", title: "When access becomes a business-critical decision.", items: [["A launch is approaching.", "You need one integrated access, evidence and stakeholder agenda before major commitments are locked."], ["An asset is not moving.", "The technical plan exists, but the real barrier—or the organizational response to it—remains unclear."], ["The portfolio is expanding.", "You need to compare access potential, sequence investments and focus resources across markets or indications."], ["The access model must evolve.", "New system, customer or competitive realities require different capabilities, governance and ways of working."]] },
    approach: { index: "04 / OUR APPROACH", title: "Strategy and change. Designed together.", steps: [["Frame", "Clarify the decision, ambition, constraints and definition of access success."], ["Map", "Decode the system, stakeholders, evidence, economics and organizational readiness."], ["Design", "Build the strategic path, value narrative and prioritized access choices."], ["Mobilize", "Align leaders, functions, governance and capabilities around the chosen path."], ["Activate", "Translate strategy into owners, first moves, adoption measures and learning loops."]], note: "Change methods adapted to context: Kotter · Prosci ADKAR · Agile" },
    deliverables: { index: "05 / TANGIBLE OUTPUTS", title: "Useful in the room. Actionable after it.", lead: "Every engagement is shaped around the decision at hand. Typical outputs include:", items: ["Access landscape and barrier map", "Stakeholder and influence map", "Differentiated value proposition", "Prioritized access roadmap", "Governance, roles and decision rights", "Change and adoption plan"] },
    difference: { index: "06 / WHY ACCESSLERATE", title: "Operator judgment. External clarity.", body: "Accesslerate brings the objectivity of an external advisor and the practical judgment of a healthcare operator. The work is led directly by Yuriko Tovar, drawing on 20+ years across market access, growth, commercial transformation and organizational change in Mexico and Latin America.", proofLabel: "Selected operator experience", proof: [["20+", "Years across healthcare"], ["1 year", "Access milestone delivered early"], ["5", "Healthcare sectors"]], note: "Results shown reflect Yuriko Tovar’s prior executive roles." },
    faq: { index: "07 / FREQUENTLY ASKED QUESTIONS", title: "Questions healthcare leaders ask us.", items: [["What does Market Access consulting include?", "It can include access and reimbursement strategy, value proposition, evidence translation, stakeholder mapping, launch planning, operating-model design and change activation. The scope is built around the decision—not a fixed methodology."], ["When should Market Access strategy begin?", "Ideally before launch assumptions and investments are locked. Early integration makes it possible to shape evidence, value, stakeholder and commercial choices together. We also help when an existing asset or model needs to be reset."], ["Do you work across public and private health systems?", "Yes. We shape the engagement to the relevant public, social-security, institutional and private pathways in Mexico and across Latin America."], ["Can you support MedTech, diagnostics and other healthcare businesses?", "Yes. Our perspective spans Pharma, Biotech, Consumer Health, MedTech, Diagnostics and Health Services, with the access model adapted to each category."], ["How does Change Management fit into Market Access?", "A strategy only creates value when leaders and teams adopt new priorities, roles and behaviors. We design alignment, governance, capability building and adoption into the access roadmap from the start."]] },
    conversation: { index: "08 / START A CONVERSATION", title: "Bring us the access question that matters most.", body: "In a focused 30-minute conversation, we will explore the context, what is at stake and whether Accesslerate is the right partner.", action: "Schedule on Calendly", email: "Or email Yuriko directly", whatsapp: "Hello Yuriko, I would like to discuss a Market Access challenge with Accesslerate." },
    footer: ["Operator-led healthcare strategy across Mexico and Latin America.", "Back to Accesslerate", "All rights reserved."],
  },
  es: {
    lang: "es-MX",
    home: "/es",
    counterpart: "/services/market-access",
    switchLabel: "EN",
    nav: ["Capacidades", "Enfoque", "Preguntas", "Agenda una conversación"],
    breadcrumb: ["Inicio", "Servicios", "Market Access"],
    eyebrow: "ESTRATEGIA DE MARKET ACCESS · MÉXICO Y LATINOAMÉRICA",
    title: "El acceso no es el último paso.",
    accent: "Es una decisión estratégica.",
    lead: "Integramos valor, evidencia, stakeholders, decisiones comerciales y activación organizacional para construir rutas de acceso creíbles en México y Latinoamérica.",
    primary: "Conversemos sobre tu reto de acceso",
    secondary: "Conoce nuestras capacidades",
    asideTitle: "Diseñado para momentos decisivos",
    aside: ["Preparar un lanzamiento", "Destrabar un activo", "Expandir un portafolio", "Transformar el modelo de acceso"],
    challengeIndex: "01 / EL RETO",
    challengeTitle: "Un plan de acceso técnicamente sólido también puede fallar dentro de la organización.",
    challengeBody: "Market Access genera valor cuando la evidencia, las necesidades de stakeholders, la asequibilidad, las prioridades comerciales y la ejecución se diseñan como un solo sistema, no como frentes aislados.",
    capabilities: {
      index: "02 / DÓNDE AYUDAMOS", title: "De la ambición de acceso a una ruta ejecutable.", lead: "Apoyo enfocado en las decisiones donde la coherencia estratégica más importa.",
      items: [
        ["Estrategia de Acceso y Reembolso", "Definimos la ambición de acceso, las rutas prioritarias y las decisiones que equilibran valor para el paciente, realidades del sistema y objetivos del negocio."],
        ["Propuesta de Valor y Traducción de Evidencia", "Convertimos evidencia clínica, económica y de vida real en una historia de valor diferenciada para quienes determinan el acceso."],
        ["Estrategia de Stakeholders e Instituciones", "Mapeamos influencia, necesidades y dinámicas de decisión en sistemas públicos y privados para priorizar un relacionamiento con propósito."],
        ["Planeación de Acceso para Lanzamientos y Portafolio", "Integramos acceso desde etapas tempranas en decisiones de lanzamiento, ciclo de vida y portafolio para anticipar dependencias críticas."],
        ["Modelo Operativo de Acceso y Gestión del Cambio", "Alineamos roles, gobernanza, capacidades y comportamientos para que la organización ejecute la estrategia, no solo la apruebe."],
      ],
    },
    moments: { index: "03 / MOMENTOS CRÍTICOS", title: "Cuando el acceso se convierte en una decisión crítica de negocio.", items: [["Se acerca un lanzamiento.", "Necesitas una sola agenda integrada de acceso, evidencia y stakeholders antes de fijar compromisos relevantes."], ["Un activo no avanza.", "Existe un plan técnico, pero la barrera real—o la respuesta organizacional—sigue sin estar clara."], ["El portafolio está creciendo.", "Necesitas comparar el potencial de acceso, secuenciar inversiones y enfocar recursos entre mercados o indicaciones."], ["El modelo de acceso debe evolucionar.", "Nuevas realidades del sistema, los clientes o la competencia exigen otras capacidades, gobernanza y formas de trabajo."]] },
    approach: { index: "04 / NUESTRO ENFOQUE", title: "Estrategia y cambio. Diseñados juntos.", steps: [["Enmarcar", "Aclarar la decisión, la ambición, las restricciones y cómo se verá el éxito de acceso."], ["Mapear", "Decodificar sistema, stakeholders, evidencia, economía y preparación organizacional."], ["Diseñar", "Construir la ruta estratégica, la narrativa de valor y las prioridades de acceso."], ["Movilizar", "Alinear líderes, funciones, gobernanza y capacidades alrededor de la ruta elegida."], ["Activar", "Traducir la estrategia en responsables, primeros movimientos, métricas de adopción y aprendizaje."]], note: "Métodos de cambio adaptados al contexto: Kotter · Prosci ADKAR · Agile" },
    deliverables: { index: "05 / ENTREGABLES TANGIBLES", title: "Útiles en la conversación. Accionables después de ella.", lead: "Cada proyecto se diseña alrededor de la decisión. Los entregables típicos incluyen:", items: ["Mapa de entorno y barreras de acceso", "Mapa de stakeholders e influencia", "Propuesta de valor diferenciada", "Roadmap priorizado de acceso", "Gobernanza, roles y decisiones", "Plan de cambio y adopción"] },
    difference: { index: "06 / POR QUÉ ACCESSLERATE", title: "Criterio de operadora. Claridad externa.", body: "Accesslerate combina la objetividad de un asesor externo con el criterio práctico de quien ha operado dentro de healthcare. El trabajo es liderado directamente por Yuriko Tovar y se nutre de más de 20 años en market access, crecimiento, transformación comercial y cambio organizacional en México y Latinoamérica.", proofLabel: "Experiencia operativa seleccionada", proof: [["20+", "Años en healthcare"], ["1 año", "Hito de acceso adelantado"], ["5", "Sectores de healthcare"]], note: "Los resultados mostrados corresponden a roles ejecutivos previos de Yuriko Tovar." },
    faq: { index: "07 / PREGUNTAS FRECUENTES", title: "Lo que nos preguntan los líderes de healthcare.", items: [["¿Qué incluye una consultoría de Market Access?", "Puede incluir estrategia de acceso y reembolso, propuesta de valor, traducción de evidencia, mapeo de stakeholders, planeación de lanzamientos, diseño del modelo operativo y activación del cambio. El alcance se construye alrededor de la decisión, no de una metodología fija."], ["¿Cuándo debe iniciar la estrategia de Market Access?", "Idealmente antes de fijar supuestos e inversiones de lanzamiento. La integración temprana permite diseñar evidencia, valor, stakeholders y decisiones comerciales en conjunto. También ayudamos a replantear un activo o modelo existente."], ["¿Trabajan con sistemas de salud públicos y privados?", "Sí. Diseñamos el proyecto según las rutas públicas, de seguridad social, institucionales y privadas relevantes en México y Latinoamérica."], ["¿Pueden apoyar a MedTech, diagnóstico y otros negocios de healthcare?", "Sí. Nuestra perspectiva abarca Pharma, Biotech, Consumer Health, MedTech, Diagnóstico y Servicios de Salud, adaptando el modelo de acceso a cada categoría."], ["¿Cómo se integra Gestión del Cambio en Market Access?", "Una estrategia solo crea valor cuando líderes y equipos adoptan nuevas prioridades, roles y comportamientos. Integramos alineación, gobernanza, desarrollo de capacidades y adopción desde el diseño del roadmap de acceso."]] },
    conversation: { index: "08 / INICIA UNA CONVERSACIÓN", title: "Tráenos la pregunta de acceso que más importa.", body: "En una conversación enfocada de 30 minutos exploraremos el contexto, lo que está en juego y si Accesslerate es el socio adecuado.", action: "Agendar en Calendly", email: "O escribe directamente a Yuriko", whatsapp: "Hola Yuriko, me gustaría conversar sobre un reto de Market Access con Accesslerate." },
    footer: ["Estrategia healthcare liderada por operadores en México y Latinoamérica.", "Volver a Accesslerate", "Todos los derechos reservados."],
  },
} as const;

export default function MarketAccessPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const pageUrl = locale === "en" ? "https://www.accesslerate.com/services/market-access" : "https://www.accesslerate.com/es/servicios/market-access";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${pageUrl}#service`, name: locale === "en" ? "Market Access Consulting" : "Consultoría de Market Access", serviceType: "Market Access Strategy", url: pageUrl, description: c.lead, areaServed: [{ "@type": "Country", name: "Mexico" }, { "@type": "Place", name: "Latin America" }], provider: { "@type": "ProfessionalService", "@id": "https://www.accesslerate.com/#organization", name: "Accesslerate", url: "https://www.accesslerate.com/" }, audience: { "@type": "BusinessAudience", audienceType: "Pharma, Biotech, MedTech, Diagnostics, Consumer Health and Health Services leaders" } },
      { "@type": "BreadcrumbList", itemListElement: c.breadcrumb.map((name, index) => ({ "@type": "ListItem", position: index + 1, name, item: index === 0 ? `https://www.accesslerate.com${c.home === "/" ? "/" : c.home}` : index === 2 ? pageUrl : undefined })) },
      { "@type": "FAQPage", mainEntity: c.faq.items.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return <main className="service-page" lang={c.lang}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <nav className="nav shell" aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>
      <a className="brand brand-logo" href={c.home} aria-label="Accesslerate, home"><img src="/accesslerate-logo-transparent.png" width="792" height="361" alt="Accesslerate" fetchPriority="high" /></a>
      <div className="nav-links"><a href="#capabilities">{c.nav[0]}</a><a href="#approach">{c.nav[1]}</a><a href="#faq">{c.nav[2]}</a></div>
      <a className="language-switch" href={c.counterpart} hrefLang={locale === "en" ? "es" : "en"}>{c.switchLabel}</a>
      <a className="nav-cta" href="#conversation">{c.nav[3]} <span className="icon-arrow icon-ne" aria-hidden="true" /></a>
    </nav>

    <div className="shell service-breadcrumb" aria-label={locale === "en" ? "Breadcrumb" : "Migas de pan"}>
      <a href={c.home}>{c.breadcrumb[0]}</a><span>/</span><span>{c.breadcrumb[1]}</span><span>/</span><strong>{c.breadcrumb[2]}</strong>
    </div>

    <section className="shell service-hero" id="top">
      <div className="service-hero-copy">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1>{c.title}<br /><em>{c.accent}</em></h1>
        <p className="lead">{c.lead}</p>
        <div className="hero-actions"><a className="button primary" href="#conversation">{c.primary} <span className="icon-arrow" aria-hidden="true" /></a><a className="text-link" href="#capabilities">{c.secondary} <span className="icon-arrow icon-down" aria-hidden="true" /></a></div>
      </div>
      <aside className="service-hero-aside"><p>{c.asideTitle}</p><ol>{c.aside.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></aside>
    </section>

    <section className="dark-section service-challenge"><div className="shell service-challenge-grid"><p className="section-index">{c.challengeIndex}</p><div><h2>{c.challengeTitle}</h2><p>{c.challengeBody}</p></div></div></section>

    <section className="shell service-capabilities section-pad" id="capabilities"><header className="service-section-head"><div><p className="section-index">{c.capabilities.index}</p><h2>{c.capabilities.title}</h2></div><p>{c.capabilities.lead}</p></header><div className="capability-list">{c.capabilities.items.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <section className="paper-section service-moments"><div className="shell section-pad"><header className="service-section-head"><div><p className="section-index">{c.moments.index}</p><h2>{c.moments.title}</h2></div></header><div className="service-moments-grid">{c.moments.items.map(([title, body], index) => <article key={title}><span>{String.fromCharCode(65 + index)}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="dark-section service-approach" id="approach"><div className="shell section-pad"><header className="service-section-head light"><div><p className="section-index">{c.approach.index}</p><h2>{c.approach.title}</h2></div></header><div className="service-steps">{c.approach.steps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div><p className="service-method">{c.approach.note}</p></div></section>

    <section className="shell service-deliverables section-pad"><div><p className="section-index">{c.deliverables.index}</p><h2>{c.deliverables.title}</h2><p className="service-large-copy">{c.deliverables.lead}</p></div><ol>{c.deliverables.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></section>

    <section className="service-difference paper-section"><div className="shell section-pad"><div className="service-difference-grid"><div><p className="section-index">{c.difference.index}</p><h2>{c.difference.title}</h2></div><p className="service-large-copy">{c.difference.body}</p></div><p className="proof-note">{c.difference.proofLabel}</p><div className="service-proof">{c.difference.proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><p className="service-proof-note">{c.difference.note}</p></div></section>

    <section className="shell service-faq section-pad" id="faq"><header className="service-section-head"><div><p className="section-index">{c.faq.index}</p><h2>{c.faq.title}</h2></div></header><div className="faq-list">{c.faq.items.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i aria-hidden="true">+</i></summary><p>{answer}</p></details>)}</div></section>

    <section className="schedule service-conversation" id="conversation"><div className="shell service-conversation-grid"><div><p className="section-index">{c.conversation.index}</p><h2>{c.conversation.title}</h2><p>{c.conversation.body}</p></div><div className="service-contact-card"><a className="button primary wide" href="https://calendly.com/yuriko-accesslerate/30min" target="_blank" rel="noreferrer">{c.conversation.action} <span className="icon-arrow icon-ne" aria-hidden="true" /></a><p>{c.conversation.email}</p><a href="mailto:yuriko@accesslerate.com">yuriko@accesslerate.com <span className="icon-arrow icon-ne" aria-hidden="true" /></a><a href={`https://wa.me/525549679335?text=${encodeURIComponent(c.conversation.whatsapp)}`} target="_blank" rel="noreferrer">WhatsApp <span className="icon-arrow icon-ne" aria-hidden="true" /></a></div></div></section>

    <footer><div className="shell footer-grid"><div><a className="brand brand-logo footer-brand" href={c.home}><img src="/accesslerate-logo-footer.png" width="792" height="361" alt="Accesslerate" loading="lazy" /></a><p>Complexity Shapes Advantage.</p></div><div><p>{c.footer[0]}</p><div className="footer-language"><a href="/" hrefLang="en">English</a><span>/</span><a href="/es" hrefLang="es">Español</a></div></div><div><a href={c.home}>{c.footer[1]}</a><a href="#capabilities">{c.nav[0]}</a><a href="#approach">{c.nav[1]}</a><a href="#conversation">{c.nav[3]}</a></div></div><div className="shell legal"><span>© {new Date().getFullYear()} Accesslerate. {c.footer[2]}</span><a href="#top">{locale === "en" ? "Back to top" : "Volver arriba"} <span className="icon-arrow icon-up" aria-hidden="true" /></a></div></footer>
  </main>;
}
