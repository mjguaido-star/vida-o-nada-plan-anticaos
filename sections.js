function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const D = window.VidaONadaDesignSystem_989a45;
const {
  Button,
  Eyebrow,
  Badge,
  Icon,
  Card,
  PillarCard,
  QuoteBlock,
  Input,
  Field
} = D;
const ICONS = "./assets/icons";
const LOGOS = "./assets/logos";
const ILL = "./assets/illustrations";
function Grain() {
  return React.createElement("div", {
    className: "von-grain"
  });
}
function Reveal({
  children,
  delay = 0,
  style = {},
  as = "div",
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, {
      threshold: 0.16
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = as;
  return React.createElement(Comp, _extends({
    ref: ref,
    className: "reveal",
    style: {
      transitionDelay: delay + "ms",
      ...style
    }
  }, rest), children);
}
function Nav({
  onJoin
}) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["El caos", "#problema"], ["El plan", "#programa"], ["Empezar", "#cierre"]];
  return React.createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: "background .3s var(--ease-out), border-color .3s var(--ease-out), padding .3s var(--ease-out)",
      background: solid ? "rgba(20,12,6,0.86)" : "transparent",
      backdropFilter: solid ? "blur(10px)" : "none",
      WebkitBackdropFilter: solid ? "blur(10px)" : "none",
      borderBottom: `1px solid ${solid ? "var(--border-dark)" : "transparent"}`
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: solid ? 64 : 80,
      transition: "height .3s var(--ease-out)"
    }
  }, React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none"
    }
  }, React.createElement("img", {
    src: LOGOS + "/mg-monogram-light.png",
    alt: "",
    style: {
      height: 34,
      objectFit: "contain"
    }
  }), React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "1.15rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--von-parchment-text)"
    }
  }, "Vida o Nada")), React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, React.createElement("div", {
    className: "nav-links",
    style: {
      display: "flex",
      gap: 26
    }
  }, links.map(([t, h]) => React.createElement("a", {
    key: h,
    href: h,
    style: {
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.8rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--von-cream-soft)",
      textDecoration: "none"
    }
  }, t))), React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onJoin
  }, "Empieza ahora"))));
}
function Hero({
  onJoin
}) {
  return React.createElement("section", {
    id: "top",
    style: {
      background: "var(--von-ink-black)",
      overflow: "hidden",
      paddingTop: 132,
      paddingBottom: "var(--section-pad-y)"
    }
  }, React.createElement(Grain, null), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, React.createElement("div", null, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 26
    }
  }, React.createElement(Eyebrow, {
    tone: "cream"
  }, "Plan Anticaos"), React.createElement(Badge, {
    variant: "cream-outline"
  }, "by Marian G Paris"))), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("h1", {
    className: "glitch",
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(2.6rem, 5.2vw, 5rem)",
      lineHeight: 0.92,
      letterSpacing: "-0.01em",
      margin: "0 0 24px",
      color: "var(--von-parchment-text)"
    }
  }, "Tienes una vida.", React.createElement("br", null), React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "No la vivas como si tuvieras dos."))), React.createElement(Reveal, {
    delay: 160
  }, React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(1.25rem,1.9vw,1.7rem)",
      lineHeight: 1.4,
      color: "var(--von-cream)",
      maxWidth: "32ch",
      margin: "0 0 34px"
    }
  }, "Sabes lo que quieres\u2026 pero no lo est\xE1s haciendo.")), React.createElement(Reveal, {
    delay: 240
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconSrc: ICONS + "/cream/rumbo.png",
    iconRight: true,
    onClick: onJoin
  }, "Empieza ahora"), React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "#programa",
    style: {
      color: "var(--von-cream)"
    }
  }, "Ver el plan")))), React.createElement(Reveal, {
    delay: 200,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, React.createElement("div", {
    className: "watch-real",
    style: {
      maxWidth: 460,
      width: "100%"
    }
  }, React.createElement("img", {
    src: "./assets/reloj-real.jpg",
    alt: "Reloj de bolsillo \u2014 el tiempo"
  }), React.createElement("div", {
    className: "watch-hand",
    role: "img",
    "aria-label": "Del caos a la direcci\xF3n \u2014 la flecha de oro"
  })), React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.72rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--von-cream-soft)"
    }
  }, React.createElement("span", null, "Caos mental"), React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u2192"), React.createElement("span", {
    style: {
      color: "var(--von-cream)"
    }
  }, "Direcci\xF3n clara")))));
}
function Problema() {
  return React.createElement("section", {
    id: "problema",
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: "var(--section-pad-y)"
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 920
    }
  }, React.createElement(Reveal, null, React.createElement(Eyebrow, {
    number: "01",
    tone: "energia"
  }, "El caos")), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2rem,4.2vw,3.4rem)",
      lineHeight: 1.08,
      letterSpacing: "-0.015em",
      margin: "18px 0 28px",
      maxWidth: "22ch"
    }
  }, "Tienes mil ideas. Mil ganas de cambiar cosas. Pero sigues en el mismo punto.")), React.createElement(Reveal, {
    delay: 140
  }, React.createElement("p", {
    style: {
      fontSize: "1.2rem",
      lineHeight: 1.6,
      color: "var(--von-ink-soft)",
      margin: "0 0 30px"
    }
  }, "No es falta de tiempo.", React.createElement("br", null), "No es falta de capacidad.")), React.createElement(Reveal, {
    delay: 200
  }, React.createElement("p", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(2.2rem,5vw,4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "var(--accent)",
      margin: 0
    }
  }, "Es que no est\xE1s eligiendo."))));
}
function Transformacion() {
  return React.createElement("section", {
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "calc(var(--section-pad-y) * 0.9)",
      paddingBottom: "calc(var(--section-pad-y) * 0.9)",
      overflow: "hidden"
    }
  }, React.createElement(Grain, null), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      maxWidth: 900
    }
  }, React.createElement(Reveal, null, React.createElement("p", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(2.4rem,6vw,5rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "var(--von-ink)",
      margin: 0
    }
  }, "No es motivaci\xF3n.", React.createElement("br", null), React.createElement("span", {
    style: {
      color: "var(--teal)"
    }
  }, "Es un sistema.")))));
}
function Programa() {
  const pillars = [["01", "caos", "Caos interno", "Entender tu mente antes de cambiar nada."], ["02", "direccion", "Dirección", "Definir lo que importa y soltar lo que no."], ["03", "accion", "Acción real", "Hacer, aunque no sea perfecto."]];
  return React.createElement("section", {
    id: "programa",
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: "var(--section-pad-y)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 720,
      margin: "0 auto 48px"
    }
  }, React.createElement(Reveal, null, React.createElement(Eyebrow, {
    number: "02",
    tone: "energia",
    style: {
      justifyContent: "center"
    }
  }, "La soluci\xF3n")), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("h2", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(2.8rem,6.5vw,5.4rem)",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      margin: "16px 0 14px"
    }
  }, "Plan Anticaos")), React.createElement(Reveal, {
    delay: 130
  }, React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(1.2rem,2vw,1.6rem)",
      lineHeight: 1.4,
      color: "var(--von-ink-soft)",
      margin: 0
    }
  }, "Para dejar de dar vueltas y empezar a hacer."))), React.createElement("div", {
    className: "pillar-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, pillars.map(([n, ic, t, d], i) => React.createElement(Reveal, {
    key: n,
    delay: i * 100
  }, React.createElement(PillarCard, {
    base: ICONS,
    number: n,
    icon: ic,
    title: t,
    style: {
      height: "100%"
    }
  }, d))))));
}
function Manifiesto() {
  return React.createElement("section", {
    id: "resultado",
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "calc(var(--section-pad-y) * 1.05)",
      paddingBottom: "calc(var(--section-pad-y) * 1.05)",
      overflow: "hidden"
    }
  }, React.createElement(Grain, null), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      maxWidth: 900
    }
  }, React.createElement(Reveal, null, React.createElement(Eyebrow, {
    number: "03",
    tone: "energia",
    style: {
      justifyContent: "center"
    }
  }, "El resultado")), React.createElement(Reveal, {
    delay: 80
  }, React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2rem,4.4vw,3.4rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.015em",
      color: "var(--von-ink)",
      margin: "20px 0 22px"
    }
  }, "Dejas de pensar tanto.", React.createElement("br", null), React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Empiezas a moverte."))), React.createElement(Reveal, {
    delay: 150
  }, React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(1.15rem,1.9vw,1.5rem)",
      lineHeight: 1.5,
      color: "var(--von-ink-soft)",
      maxWidth: "46ch",
      margin: "0 auto"
    }
  }, "Y por primera vez en mucho tiempo, sientes que est\xE1s haciendo algo de verdad."))));
}
function Cierre({
  joined,
  onSubmit
}) {
  const [email, setEmail] = React.useState("");
  const [err, setErr] = React.useState("");
  const submit = e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setErr("Revisa tu email.");
      return;
    }
    setErr("");
    onSubmit(email);
  };
  return React.createElement("section", {
    id: "cierre",
    style: {
      background: "var(--von-ink-black)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: 0,
      overflow: "hidden"
    }
  }, React.createElement(Grain, null), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, React.createElement(Reveal, null, React.createElement("h2", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(2.2rem,5.4vw,4.4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.01em",
      color: "var(--von-parchment-text)",
      margin: "0 0 18px"
    }
  }, "Esto no va de entenderlo.", React.createElement("br", null), React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Va de hacerlo."))), React.createElement(Reveal, {
    delay: 90
  }, React.createElement("p", {
    style: {
      fontSize: "1.05rem",
      lineHeight: 1.6,
      color: "var(--von-cream-soft)",
      margin: "0 0 30px"
    }
  }, "D\xE9jame tu email y te cuento c\xF3mo empezar. Sin vueltas, sin spam.")), React.createElement(Reveal, {
    delay: 150
  }, joined ? React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "rgba(232,200,144,0.06)",
      border: "1px solid var(--border-dark)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 26px"
    }
  }, React.createElement("img", {
    src: ICONS + "/amber/hecho.png",
    alt: "",
    style: {
      width: 22,
      height: 22
    }
  }), React.createElement("span", {
    style: {
      fontFamily: "var(--font-subtitle)",
      letterSpacing: "0.04em",
      color: "var(--von-cream)"
    }
  }, "Est\xE1s dentro. Te escribo pronto.")) : React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: 540,
      margin: "0 auto"
    }
  }, React.createElement("div", {
    style: {
      flex: "1 1 280px",
      textAlign: "left"
    }
  }, React.createElement(Input, {
    tone: "dark",
    pill: true,
    placeholder: "Tu email",
    value: email,
    onChange: e => setEmail(e.target.value),
    invalid: !!err,
    "aria-label": "Tu email"
  }), err && React.createElement("span", {
    style: {
      display: "block",
      marginTop: 7,
      fontSize: "0.82rem",
      color: "var(--status-stop)"
    }
  }, err)), React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "button",
    type: "submit"
  }, "Empieza ahora")))), React.createElement("footer", {
    style: {
      marginTop: "var(--section-pad-y)",
      borderTop: "1px solid var(--border-dark)",
      padding: "40px 0 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 22
    }
  }, React.createElement("img", {
    src: LOGOS + "/marian-g-paris-logo-light.png",
    alt: "Marian G Paris",
    style: {
      height: 64,
      objectFit: "contain"
    }
  }), React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, React.createElement("p", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontSize: "1.1rem",
      color: "var(--von-parchment-text)",
      margin: "0 0 6px"
    }
  }, "Menos ruido. M\xE1s direcci\xF3n. M\xE1s vida."), React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.82rem",
      letterSpacing: "0.1em",
      color: "var(--von-cream-soft)",
      textDecoration: "none"
    }
  }, "@mariangparis")))));
}
Object.assign(window, {
  Nav,
  Hero,
  Problema,
  Transformacion,
  Programa,
  Manifiesto,
  Cierre
});