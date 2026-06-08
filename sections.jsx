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
  const links = [["El caos", "#problema"], ["El plan", "#programa"], ["Empezar", "#cierre"]];
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
          <Button variant="primary" size="sm" onClick={onJoin}>Empieza ahora</Button>
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
              <Eyebrow tone="cream">Plan Anticaos</Eyebrow>
              <Badge variant="cream-outline">by Marian G Paris</Badge>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="glitch" style={{
              fontFamily: "var(--font-condensed)", textTransform: "uppercase",
              fontSize: "clamp(2.6rem, 5.2vw, 5rem)", lineHeight: 0.92, letterSpacing: "-0.01em",
              margin: "0 0 24px", color: "var(--von-parchment-text)",
            }}>
              Tienes una vida.<br /><span style={{ color: "var(--accent)" }}>No la vivas como si tuvieras dos.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "clamp(1.2rem,1.7vw,1.5rem)", lineHeight: 1.45, color: "var(--von-cream)", maxWidth: "34ch", margin: "0 0 14px" }}>
              Sabes perfectamente lo que quieres.<br />Y aun así no lo estás haciendo.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(1.6rem,2.6vw,2.2rem)", letterSpacing: "0.01em", lineHeight: 1, color: "var(--accent)", margin: "0 0 34px" }}>
              Y lo sabes.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" iconSrc={ICONS + "/cream/rumbo.png"} iconRight onClick={onJoin}>Empieza ahora. De verdad.</Button>
              <Button variant="ghost" size="lg" as="a" href="#programa" style={{ color: "var(--von-cream)" }}>Quiero verlo</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
          <div className="lens-stage">
            <div className="lens">
              <img className="lens-photo" src="./assets/objetivo.jpg" alt="Objetivo de cámara" />
              <div className="lens-flash" />
            </div>
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

/* ======================================================== PROBLEMA (CAOS) */
function Problema() {
  return (
    <section id="problema" style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}>
      <div className="wrap" style={{ maxWidth: 920 }}>
        <Reveal><Eyebrow number="01" tone="energia">El caos</Eyebrow></Reveal>
        <Reveal delay={80}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4.4vw,3.5rem)", lineHeight: 1.06, letterSpacing: "-0.015em", margin: "18px 0 28px", maxWidth: "22ch" }}>
            Empiezas cosas.<br />Las dejas.<br />Vuelves a empezar otras.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.55, color: "var(--von-ink)", margin: "0 0 26px", fontWeight: 600 }}>
            Y al final del día, sigues en el mismo sitio.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--von-ink-soft)", margin: "0 0 30px" }}>
            No es falta de tiempo.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.2rem,5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--accent)", margin: 0 }}>
            Es que no estás eligiendo.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1.3rem", lineHeight: 1.5, color: "var(--von-ink)", margin: "26px 0 0" }}>
            Y te estás cansando de ti.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================== TRANSICIÓN */
function Transformacion() {
  return (
    <section style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "calc(var(--section-pad-y) * 0.9)", paddingBottom: "calc(var(--section-pad-y) * 0.9)", overflow: "hidden" }}>
      <Grain />
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900 }}>
        <Reveal>
          <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--von-ink)", margin: 0 }}>
            No necesitas más ganas.<br /><span style={{ color: "var(--accent)" }}>Necesitas dejar de perder el tiempo.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================== SOLUCIÓN — PLAN ANTICAOS */
function Programa() {
  const pillars = [
    ["01", "caos", "Caos interno", "Dejar de sabotearte sin darte cuenta."],
    ["02", "direccion", "Dirección", "Decidir de una vez qué importa."],
    ["03", "accion", "Acción real", "Hacer, aunque no te apetezca."],
  ];
  return (
    <section id="programa" style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <Reveal><Eyebrow number="02" tone="energia" style={{ justifyContent: "center" }}>La solución</Eyebrow></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.8rem,6.5vw,5.4rem)", lineHeight: 0.9, letterSpacing: "-0.01em", margin: "16px 0 14px" }}>
              Plan Anticaos
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "clamp(1.1rem,1.6vw,1.35rem)", lineHeight: 1.5, color: "var(--von-ink)", margin: 0 }}>
              Un sistema para salir del bucle en el que llevas demasiado tiempo.
            </p>
          </Reveal>
        </div>
        <div className="pillar-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {pillars.map(([n, ic, t, d], i) => (
            <Reveal key={n} delay={i * 100}><PillarCard base={ICONS} number={n} icon={ic} title={t} style={{ height: "100%" }}>{d}</PillarCard></Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <p className="hidden-line">Si has llegado hasta aquí, ya sabes que esto va contigo.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================== RESULTADO */
function Manifiesto() {
  return (
    <section id="resultado" style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "calc(var(--section-pad-y) * 1.05)", paddingBottom: "calc(var(--section-pad-y) * 1.05)", overflow: "hidden" }}>
      <Grain />
      <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900 }}>
        <Reveal><Eyebrow number="03" tone="energia" style={{ justifyContent: "center" }}>El resultado</Eyebrow></Reveal>
        <Reveal delay={80}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: 1.2, letterSpacing: "-0.015em", color: "var(--von-ink)", margin: "20px 0 22px" }}>
            Dejas de pensar tanto.<br /><span style={{ color: "var(--accent)" }}>Empiezas a moverte.</span>
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "clamp(1.05rem,1.6vw,1.3rem)", lineHeight: 1.55, color: "var(--von-ink)", maxWidth: "48ch", margin: "0 auto" }}>
            Y por primera vez en mucho tiempo, sientes que estás haciendo algo de verdad.
          </p>
        </Reveal>
        <Reveal delay={210}>
          <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(1.5rem,3vw,2.4rem)", lineHeight: 1.05, letterSpacing: "-0.005em", color: "var(--accent)", margin: "30px 0 0" }}>
            Y dejas de sentir que estás perdiendo el tiempo.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <p style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.2rem,5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--von-ink)", margin: "14px 0 0" }}>
            Y eso cambia todo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================================================== DECISIÓN (te toca elegir) */
function Decision({ onJoin }) {
  const [choice, setChoice] = React.useState("ask");
  const big = { fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.2rem,5.4vw,4.2rem)", lineHeight: 1.02, letterSpacing: "-0.01em", margin: 0, color: "var(--von-ink)" };
  return (
    <section style={{ background: "var(--von-parchment)", color: "var(--von-ink)", paddingTop: "var(--section-pad-y)", paddingBottom: "var(--section-pad-y)", textAlign: "center", overflow: "hidden" }}>
      <div className="wrap" style={{ maxWidth: 820 }}>
        {choice === "ask" && (
          <div className="decision-step" key="ask">
            <p style={big}>Sé honesta:</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: "clamp(36px,5vw,56px)" }}>
              <button type="button" className="decision-btn" onClick={() => setChoice("go")}>Voy a hacer algo</button>
              <button type="button" className="decision-btn" onClick={() => setChoice("stay")}>Voy a seguir igual</button>
            </div>
          </div>
        )}
        {choice === "stay" && (
          <div className="decision-step" key="stay">
            <p style={big}>Perfecto.</p>
            <p style={{ ...big, color: "var(--accent)", marginTop: 12 }}>Entonces deja de engañarte.</p>
          </div>
        )}
        {choice === "go" && (
          <div className="decision-step" key="go">
            <p style={big}>Entonces empieza de verdad.</p>
            <div style={{ marginTop: "clamp(36px,5vw,56px)" }}>
              <Button variant="primary" size="lg" iconSrc={ICONS + "/cream/rumbo.png"} iconRight onClick={onJoin}>Empieza ahora</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ======================================================== CIERRE (CTA FINAL) + footer */
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
            <h2 style={{ fontFamily: "var(--font-condensed)", textTransform: "uppercase", fontSize: "clamp(2.2rem,5.4vw,4.4rem)", lineHeight: 0.95, letterSpacing: "-0.01em", color: "var(--von-parchment-text)", margin: "0 0 18px" }}>
              Esto no va de entenderlo.<br /><span style={{ color: "var(--accent)" }}>Va de hacerlo.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "var(--von-cream)", margin: "0 0 30px", fontWeight: 600 }}>
              Si sabes que no puedes seguir así, empieza.
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
                <Button variant="primary" size="lg" as="button" type="submit">Empieza ahora</Button>
              </form>
            )}
          </Reveal>
          {!joined && (
            <Reveal delay={210}>
              <p style={{ fontFamily: "var(--font-subtitle)", fontSize: "0.86rem", letterSpacing: "0.04em", color: "var(--von-cream-soft)", margin: "16px 0 0" }}>
                No necesitas más información. Necesitas empezar.
              </p>
            </Reveal>
          )}
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

/* ======================================================== MOMENTO INCÓMODO (la pausa) */
function MomentoIncomodo() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("visible");   // dispara SOLO al entrar en pantalla
          io.disconnect();
        }
      });
    }, { threshold: 0.25, rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="pause-section">
      <p className="pause-line-1">Puedes cerrar esta página.</p>
      <p className="pause-line-2">Y seguir igual.</p>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Problema, MomentoIncomodo, Transformacion, Programa, Manifiesto, Decision, Cierre });
