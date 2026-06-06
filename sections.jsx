/* Plan Anticaos — landing sections. Built on the Vida o Nada DS. */
const D = window.VidaONadaDesignSystem_989a45;
const { Button, Eyebrow, Badge, Icon, Card, PillarCard, QuoteBlock, Input, Field } = D;

const ICONS = "./assets/icons";
const LOGOS = "./assets/logos";
const ILL   = "./assets/illustrations";

/* ---------- small helpers ---------- */
function Grain() { return <div className="von-grain" />; }

function Reveal({ children, delay = 0, style = {}, as = "div", ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } });
    }, { threshold: 0.16 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = as;
  return <Comp ref={ref} className="reveal" style={{ transitionDelay: delay + "ms", ...style }} {...rest}>{children}</Comp>;
}

/* ======================================================== NAV */
function Nav({ onJoin }) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["El problema", "#problema"], ["El programa", "#programa"], ["Precio", "#precio"]];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background .3s var(--ease-out), border-color .3s var(--ease-out), padding .3s var(--ease-out)",
      background: solid ? "rgba(20,12,6,0.86)" : "transparent",
      backdropFilter: solid ? "blur(10px)" : "none",
      WebkitBackdropFilter: solid ? "blur(10px)" : "none",
      borderBottom: `1px solid ${solid ? "var(--border-dark)" : "transparent"}`,
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: solid ? 64 : 80, transition: "height .3s var(--ease-out)" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={LOGOS + "/mg-monogram-light.png"} alt="" style={{ height: 34, objectFit: "contain" }} />
          <span style={{ fontFamily: "var(--font-condensed)", fontSize: "1.15rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--von-parchment-text)" }}>Vida o Nada</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <div className="nav-links" style={{ display: "flex", gap: 26 }}>
            {links.map(([t, h]) => (
              <a key={h} href={h} style={{ fontFamily: "var(--font-subtitle)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--von-cream-soft)", textDecoration: "none" }}>{t}</a>
            ))}
          </div>
          <Button variant="primary" size="sm" onClick={onJoin}>Doy el paso</Button>
        </nav>
      </div>
    </header>
  );
}

/* ======================================================== HERO */
function Hero({ onJoin }) {
  return (
    <section id="top" style={{ background: "var(--von-ink-black)", overflow: "hidden", paddingTop: 132, paddingBottom: "var(--section-pad-y)" }}>
      <Grain />
      <div className="wrap" style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
        <div>
          <Reveal>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 26 }}>
              <Eyebrow tone="cream">Programa grupal</Eyebrow>
              <Badge variant="cream-outline">1ª edición</Badge>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="glitch" style={{
              fontFamily: "var(--font-condensed)", textTransform: "uppercase",
              fontSize: "clamp(3.2rem, 6.4vw, 6.2rem)", lineHeight: 0.9, letterSpacing: "-0.01em",
              margin: "0 0 24px", color: "var(--von-parchment-text)",
            }}>
              No te falta vida.<br /><span style={{ color: "var(--accent)" }}>Te sobra ruido.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.15rem,1.7vw,1.5rem)", lineHeight: 1.4, color: "var(--von-cream)", maxWidth: "30ch", margin: "0 0 18px" }}>
              Plan Anticaos: cuatro semanas para ordenar la cabeza y elegir un primer paso real.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <p style={{ fontSize: "1.02rem", lineHeight: 1.6, color: "var(--von-cream-soft)", maxWidth: "44ch", margin: "0 0 34px" }}>
              No es una agenda ni un curso de productividad. Es un sistema simple para entender qué te pasa, dejar de vivir en bucle y bajar tus ideas a tierra.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconSrc={ICONS + "/cream/rumbo.png"} iconRight onClick={onJoin}>Lo decido ahora</Button>
              <Button variant="ghost" size="lg" as="a" href="#programa" style={{ color: "var(--von-cream)" }}>Enséñame el plan</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
          <div className="crt" style={{ maxWidth: 460, width: "100%" }}>
            <img src={ILL + "/chaos-to-direction-light.png"} alt="Del caos a la dirección" />
          </div>
          <div style={{ display: "flex", gap: 26, fontFamily: "var(--font-subtitle)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--von-cream-soft)" }}>
            <span>Caos mental</span>
            <span style={{ color: "var(--accent)" }}>→</span>
            <span style={{ color: "var(--von-cream)" }}>Dirección clara</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================== PROBLEMA */
function Problema() {
  const si = [
    "Vives en automático y el tiempo se te escapa.",
    "Tienes mil ideas y ninguna bajada a tierra.",
    "Por fuera todo parece bien; por dentro hay una voz: ‘esto no puede ser todo’.",
    "Quieres dejar de vivir en bucle.",
  ];
  const no = [
    "Buscas soluciones mágicas.",
    "Quieres motivación rápida sin aplicar nada.",
    "No quieres hacerte preguntas incómodas.",
  ];
  return (
    <section id="problema" style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}>
      <div className="wrap">
        <Reveal><Eyebrow number="01" tone="energia">¿Te suena?</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4vw,3.4rem)", lineHeight: 1.05, letterSpacing: "-0.015em", margin: "18px 0 8px", maxWidth: "18ch" }}>
            No estás perdida. Estás saturada.
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, color: "var(--von-ink-soft)", maxWidth: "52ch", margin: "0 0 48px" }}>
            No necesitas otra señal ni otra libreta. Necesitas dejar de posponer tu vida — y un sistema honesto para empezar.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          <Reveal delay={120}>
            <Card tone="light" pad="xl" bordered style={{ height: "100%" }}>
              <Eyebrow number="" tone="ink" style={{ marginBottom: 18 }}>Para quién es</Eyebrow>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {si.map((t, i) => (
                  <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start", fontSize: "1rem", lineHeight: 1.45 }}>
                    <img src={ICONS + "/amber/hecho.png"} alt="" style={{ width: 22, height: 22, marginTop: 1, flexShrink: 0 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card tone="dark" pad="xl" grain style={{ height: "100%" }}>
              <Eyebrow tone="cream" style={{ marginBottom: 18 }}>Para quién no es</Eyebrow>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {no.map((t, i) => (
                  <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start", fontSize: "1rem", lineHeight: 1.45, color: "var(--von-cream)" }}>
                    <span style={{ color: "var(--von-cream-soft)", fontFamily: "var(--font-display)", fontSize: "1.3rem", lineHeight: 1, marginTop: -2 }}>✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================================================== TRANSFORMACIÓN */
function Transformacion() {
  return (
    <section style={{ background: "var(--von-ink-black)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)", overflow: "hidden" }}>
      <Grain />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <Reveal style={{ textAlign: "center" }}><Eyebrow number="02" tone="cream" style={{ justifyContent: "center" }}>La transformación</Eyebrow></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 28, alignItems: "center", marginTop: 40 }}>
          <Reveal delay={80}>
            <div style={{ border: "1px solid var(--border-dark)", borderRadius: "var(--radius-xl)", padding: "34px 32px", background: "rgba(232,200,144,0.03)" }}>
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "1.4rem", color: "var(--von-cream-soft)", letterSpacing: "0.04em" }}>DE</span>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.25, color: "var(--von-cream)", margin: "10px 0 0" }}>‘No sé qué hacer con mi vida.’</p>
            </div>
          </Reveal>
          <Reveal delay={160} style={{ display: "flex", justifyContent: "center" }}>
            <img src={ICONS + "/amber/direccion.png"} alt="hacia" style={{ width: 54, height: 54 }} />
          </Reveal>
          <Reveal delay={240}>
            <div style={{ borderRadius: "var(--radius-xl)", padding: "34px 32px", background: "var(--accent)", color: "var(--accent-on)", boxShadow: "var(--shadow-cta)" }}>
              <span style={{ fontFamily: "var(--font-condensed)", fontSize: "1.4rem", letterSpacing: "0.04em", opacity: 0.8 }}>A</span>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.25, margin: "10px 0 0" }}>‘Vale, ya sé por dónde empezar.’</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ======================================================== PROGRAMA (4 semanas) */
function Programa() {
  const weeks = [
    ["01", "caos", "Caos interno", "Entender tu mente antes de cambiar nada. Le pones nombre al ruido."],
    ["02", "direccion", "Dirección", "Definir lo que importa de verdad y soltar lo que no."],
    ["03", "decision", "Vida en automático", "Identificar los patrones que te mantienen estancada."],
    ["04", "accion", "Acción real", "Eliges un primer paso concreto y lo das. Sin esperar a estar lista."],
  ];
  return (
    <section id="programa" style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 44 }}>
          <div>
            <Reveal><Eyebrow number="03" tone="energia">El programa · 4 semanas</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.4rem,5vw,4rem)", lineHeight: 0.92, letterSpacing: "-0.01em", margin: "16px 0 0" }}>
                Del ruido al <span style={{ color: "var(--von-energia)" }}>primer paso</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "var(--von-ink-soft)", maxWidth: "34ch", margin: 0 }}>
              Cada semana, un movimiento. Verdad, orden y movimiento — en grupo, sin juicio.
            </p>
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {weeks.map(([n, ic, t, d], i) => (
            <Reveal key={n} delay={i * 90}><PillarCard base={ICONS} number={"Semana " + n} icon={ic} title={t} style={{ height: "100%" }}>{d}</PillarCard></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================== MANIFIESTO */
function Manifiesto() {
  return (
    <section style={{ background: "var(--von-ink-black)", paddingTop: "calc(var(--section-pad-y) * 1.1)", paddingBottom: "calc(var(--section-pad-y) * 1.1)", overflow: "hidden" }}>
      <Grain />
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 1000 }}>
        <Reveal>
          <QuoteBlock size="xl" tone="dark" cite="— El mensaje central de Vida o Nada" style={{ display: "inline-block", textAlign: "center" }}>
            Tienes una vida. No la vivas como si tuvieras dos.
          </QuoteBlock>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================== PRECIO */
function Precio({ onJoin }) {
  const tiers = [
    { name: "1ª edición", price: "247€", tag: "Lanzamiento", feats: ["4 semanas en grupo", "Sesiones en directo", "Plan Anticaos completo", "Comunidad honesta"], featured: false, cta: "Esta es la mía" },
    { name: "Estándar", price: "297€", tag: "Precio habitual", feats: ["Todo lo de la 1ª edición", "Acceso a ediciones futuras", "Recursos descargables"], featured: true, cta: "Esta es mi decisión" },
    { name: "VIP", price: "397€", tag: "1 a 1", feats: ["Todo lo de Estándar", "Sesión individual con Marian", "Seguimiento personal 14 días"], featured: false, cta: "Voy con todo" },
  ];
  return (
    <section id="precio" style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}>
      <div className="wrap">
        <Reveal style={{ textAlign: "center" }}><Eyebrow number="04" tone="energia" style={{ justifyContent: "center" }}>Únete a la 1ª edición</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{ textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.015em", margin: "16px 0 42px" }}>
            Un precio de salida. Plazas limitadas.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, alignItems: "stretch" }}>
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} style={{ display: "flex" }}>
              <div style={{
                flex: 1, display: "flex", flexDirection: "column",
                borderRadius: "var(--radius-xl)", padding: "30px 26px 28px",
                background: t.featured ? "var(--von-ink-black)" : "var(--surface-card)",
                color: t.featured ? "var(--von-cream)" : "var(--von-ink)",
                border: t.featured ? "1px solid var(--border-dark)" : "1px solid var(--border-soft)",
                boxShadow: t.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
                position: "relative", overflow: "hidden",
                transform: t.featured ? "translateY(-10px)" : "none",
              }}>
                {t.featured && <Grain />}
                <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                    <span style={{ fontFamily: "var(--font-subtitle)", fontSize: "0.74rem", letterSpacing: "0.16em", textTransform: "uppercase", color: t.featured ? "var(--von-cream-soft)" : "var(--von-ink-soft)" }}>{t.name}</span>
                    <Badge variant={t.featured ? "amber" : "outline"} size="sm">{t.tag}</Badge>
                  </div>
                  <div style={{ fontFamily: "var(--font-condensed)", fontSize: "3.4rem", lineHeight: 0.9, letterSpacing: "-0.01em", marginBottom: 22, color: t.featured ? "var(--von-parchment-text)" : "var(--von-ink)" }}>{t.price}</div>
                  <ul style={{ listStyle: "none", margin: "0 0 26px", padding: 0, display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
                    {t.feats.map((f, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.94rem", lineHeight: 1.4 }}>
                        <img src={ICONS + (t.featured ? "/cream/hecho.png" : "/amber/hecho.png")} alt="" style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={t.featured ? "primary" : "secondary"} style={t.featured ? {} : {}} onClick={onJoin}>{t.cta}</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================================================== CIERRE + waitlist + footer */
function Cierre({ joined, onSubmit }) {
  const [email, setEmail] = React.useState("");
  const [err, setErr] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setErr("Revisa tu email."); return; }
    setErr(""); onSubmit(email);
  };
  return (
    <section id="cierre" style={{ background: "var(--von-ink-black)", paddingTop: "var(--section-pad-y)", paddingBottom: 0, overflow: "hidden" }}>
      <Grain />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 600, fontSize: "clamp(1.8rem,3.6vw,3rem)", lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--von-parchment-text)", margin: "0 0 14px" }}>
              ¿Vas a vivir tu vida o vas a seguir posponiéndola?
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "var(--von-cream-soft)", margin: "0 0 30px" }}>
              Deja tu email y te aviso cuando abran las plazas de la 1ª edición. Sin spam. Solo dirección.
            </p>
          </Reveal>
          <Reveal delay={150}>
            {joined ? (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(232,200,144,0.06)", border: "1px solid var(--border-dark)", borderRadius: "var(--radius-pill)", padding: "14px 26px" }}>
                <img src={ICONS + "/amber/hecho.png"} alt="" style={{ width: 22, height: 22 }} />
                <span style={{ fontFamily: "var(--font-subtitle)", letterSpacing: "0.04em", color: "var(--von-cream)" }}>Estás dentro. Te escribo pronto.</span>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", maxWidth: 540, margin: "0 auto" }}>
                <div style={{ flex: "1 1 280px", textAlign: "left" }}>
                  <Input tone="dark" pill placeholder="Tu email" value={email}
                    onChange={(e) => setEmail(e.target.value)} invalid={!!err} aria-label="Tu email" />
                  {err && <span style={{ display: "block", marginTop: 7, fontSize: "0.82rem", color: "var(--status-stop)" }}>{err}</span>}
                </div>
                <Button variant="primary" size="lg" as="button" type="submit">Cuenta conmigo</Button>
              </form>
            )}
          </Reveal>
        </div>

        <footer style={{ marginTop: "var(--section-pad-y)", borderTop: "1px solid var(--border-dark)", padding: "40px 0 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 22 }}>
          <img src={LOGOS + "/marian-g-paris-logo-light.png"} alt="Marian G Paris" style={{ height: 64, objectFit: "contain" }} />
          <div style={{ textAlign: "right" }}>
            <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "1.1rem", color: "var(--von-parchment-text)", margin: "0 0 6px" }}>Menos ruido. Más dirección. Más vida.</p>
            <a href="#top" style={{ fontFamily: "var(--font-subtitle)", fontSize: "0.82rem", letterSpacing: "0.1em", color: "var(--von-cream-soft)", textDecoration: "none" }}>@mariangparis</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Problema, Transformacion, Programa, Manifiesto, Precio, Cierre });
