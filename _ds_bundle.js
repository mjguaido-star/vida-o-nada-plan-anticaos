/* @ds-bundle: {"format":3,"namespace":"VidaONadaDesignSystem_989a45","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"PillarCard","sourcePath":"components/surfaces/PillarCard.jsx"},{"name":"QuoteBlock","sourcePath":"components/surfaces/QuoteBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6d1e5e00763a","components/core/Button.jsx":"4e26b84b3176","components/core/Eyebrow.jsx":"03e1d8891643","components/core/Icon.jsx":"8aa6252f910e","components/forms/Field.jsx":"0fed8392a3e1","components/forms/Input.jsx":"e975009e4236","components/surfaces/Card.jsx":"d26073eb011c","components/surfaces/PillarCard.jsx":"18d925cff6de","components/surfaces/QuoteBlock.jsx":"56d69dd77017","ui_kits/plan-anticaos/app.jsx":"e1b8c5e5ce7c","ui_kits/plan-anticaos/sections.jsx":"63bb529b3853"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VidaONadaDesignSystem_989a45 = window.VidaONadaDesignSystem_989a45 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  variant = "amber",
  // "amber" | "outline" | "ink" | "cream-outline"
  size = "md",
  // "sm" | "md"
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "0.66rem",
      padding: "5px 11px"
    },
    md: {
      fontSize: "0.74rem",
      padding: "7px 15px"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    amber: {
      background: "var(--accent)",
      color: "var(--accent-on)",
      border: "1.5px solid transparent"
    },
    ink: {
      background: "var(--von-ink-black)",
      color: "var(--von-cream)",
      border: "1.5px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--von-ink)",
      border: "1.5px solid var(--border-strong)"
    },
    "cream-outline": {
      background: "transparent",
      color: "var(--von-cream)",
      border: "1.5px solid var(--border-dark-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-subtitle)",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontSize: s.fontSize,
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  // "primary" | "secondary" | "ghost" | "dark"
  size = "md",
  // "sm" | "md" | "lg"
  iconSrc,
  // optional icon PNG (use cream/ink/amber asset)
  iconRight = false,
  as = "button",
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "0.78rem",
      padding: "9px 18px",
      icon: 15,
      gap: 8
    },
    md: {
      fontSize: "0.95rem",
      padding: "13px 28px",
      icon: 18,
      gap: 10
    },
    lg: {
      fontSize: "1.1rem",
      padding: "17px 40px",
      icon: 22,
      gap: 12
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    fontFamily: "var(--font-condensed)",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    flexDirection: iconRight ? "row-reverse" : "row",
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-on)",
      boxShadow: "var(--shadow-cta)"
    },
    secondary: {
      background: "transparent",
      color: "var(--von-ink)",
      borderColor: "var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--von-ink)"
    },
    dark: {
      background: "var(--von-ink-black)",
      color: "var(--von-cream)"
    }
  };
  const Comp = as;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--accent-hover)"
    },
    secondary: {
      borderColor: "var(--von-ink)",
      background: "rgba(28,21,14,0.04)"
    },
    ghost: {
      background: "rgba(28,21,14,0.06)"
    },
    dark: {
      background: "var(--von-ink-black-2)"
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement(Comp, _extends({}, rest, {
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      transform: press && !disabled ? "scale(0.97)" : "scale(1)",
      ...style
    }
  }), iconSrc && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: s.icon,
      height: s.icon,
      objectFit: "contain",
      display: "block"
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  number,
  // optional "01" style index
  tone = "energia",
  // "energia" | "amber" | "cream" | "ink" | "muted"
  as = "div",
  style = {},
  ...rest
}) {
  const tones = {
    energia: "var(--von-energia)",
    amber: "var(--accent)",
    cream: "var(--von-cream-soft)",
    ink: "var(--von-ink)",
    muted: "var(--von-ink-soft)"
  };
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 12,
      fontFamily: "var(--font-subtitle)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: tones[tone] || tones.energia,
      ...style
    }
  }), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "1.9em",
      letterSpacing: "0.02em",
      lineHeight: 1,
      color: "var(--accent)"
    }
  }, number), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Brand line-icon renderer. Icons ship as pre-tinted PNGs in three tones.
// Default base path assumes assets/ sits at the project root; override `base`
// if your file lives deeper.
const VON_ICONS = ["caos", "direccion", "decision", "accion", "tiempo", "energia", "orden", "plan", "foco", "vida-o-nada", "rumbo", "hecho", "claridad", "flama", "enfoque", "calma", "proposito", "profundidad", "constancia"];
function Icon({
  name,
  // one of VON_ICONS
  tone = "ink",
  // "ink" | "amber" | "cream"
  size = 28,
  base = "assets/icons",
  style = {},
  alt,
  ...rest
}) {
  const src = `${base}/${tone}/${name}.png`;
  return /*#__PURE__*/React.createElement("img", _extends({}, rest, {
    src: src,
    alt: alt ?? name,
    style: {
      width: size,
      height: size,
      objectFit: "contain",
      display: "block",
      ...style
    }
  }));
}
Icon.names = VON_ICONS;
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  tone = "light",
  htmlFor,
  children,
  // the input control
  style = {},
  ...rest
}) {
  const light = tone === "light";
  const labelColor = light ? "var(--von-ink)" : "var(--von-cream)";
  const hintColor = light ? "var(--von-ink-soft)" : "var(--von-cream-soft)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.72rem",
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: labelColor
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.8rem",
      color: error ? "var(--status-stop)" : hintColor
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  tone = "light",
  // "light" | "dark"
  invalid = false,
  pill = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const light = tone === "light";
  const borderBase = light ? "var(--border-strong)" : "var(--border-dark-strong)";
  const border = invalid ? "var(--status-stop)" : focus ? "var(--accent)" : borderBase;
  return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1rem",
      color: light ? "var(--von-ink)" : "var(--von-cream)",
      background: light ? "var(--von-parchment)" : "var(--von-ink-black)",
      border: `1.5px solid ${border}`,
      borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
      padding: pill ? "14px 22px" : "13px 16px",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      boxShadow: focus ? "0 0 0 4px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = "light",
  // "light" | "dark" | "amber"
  pad = "lg",
  // "md" | "lg" | "xl"
  radius = "lg",
  // "md" | "lg" | "xl" | "2xl"
  bordered = false,
  elevated = true,
  grain = false,
  // film grain overlay (dark only)
  style = {},
  ...rest
}) {
  const pads = {
    md: "20px",
    lg: "28px",
    xl: "40px"
  };
  const radii = {
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)"
  };
  const tones = {
    light: {
      background: "var(--surface-card)",
      color: "var(--von-ink)",
      border: bordered ? "1px solid var(--border-soft)" : "1px solid transparent",
      boxShadow: elevated ? "var(--shadow-md)" : "none"
    },
    dark: {
      background: "var(--von-ink-black-2)",
      color: "var(--von-cream)",
      border: bordered ? "1px solid var(--border-dark)" : "1px solid transparent",
      boxShadow: elevated ? "var(--shadow-lg)" : "none"
    },
    amber: {
      background: "var(--accent)",
      color: "var(--accent-on)",
      border: "1px solid transparent",
      boxShadow: elevated ? "var(--shadow-cta)" : "none"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: radii[radius],
      padding: pads[pad],
      ...tones[tone],
      ...style
    }
  }), grain && tone === "dark" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: "var(--grain-url)",
      backgroundRepeat: "repeat",
      opacity: "var(--grain-opacity)",
      mixBlendMode: "overlay",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PillarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillarCard({
  number,
  // "01"
  icon,
  // brand icon name (rendered amber on dark)
  title,
  children,
  // description
  base = "assets/icons",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-dark)",
      background: "var(--von-ink-black-2)",
      padding: "26px 22px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 0,
      ...style
    }
  }), number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "1.6rem",
      letterSpacing: "0.02em",
      color: "var(--von-cream-soft)",
      lineHeight: 1
    }
  }, number), icon && /*#__PURE__*/React.createElement("img", {
    src: `${base}/amber/${icon}.png`,
    alt: "",
    "aria-hidden": "true",
    style: {
      width: 40,
      height: 40,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      fontSize: "1.4rem",
      lineHeight: 1.0,
      color: "var(--von-parchment-text)"
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "0.92rem",
      lineHeight: 1.5,
      color: "var(--von-cream-soft)"
    }
  }, children));
}
Object.assign(__ds_scope, { PillarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PillarCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/QuoteBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function QuoteBlock({
  children,
  cite,
  // optional attribution
  tone = "dark",
  // "dark" | "light"
  size = "lg",
  // "md" | "lg" | "xl"
  marks = true,
  // show big quotation marks
  style = {},
  ...rest
}) {
  const sizes = {
    md: "clamp(1.3rem, 2.6vw, 1.7rem)",
    lg: "clamp(1.7rem, 4vw, 2.6rem)",
    xl: "clamp(2.2rem, 6vw, 4rem)"
  };
  const color = tone === "dark" ? "var(--von-parchment-text)" : "var(--von-ink)";
  const citeColor = tone === "dark" ? "var(--von-cream-soft)" : "var(--von-ink-soft)";
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      position: "relative",
      ...style
    }
  }), marks && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "3.2em",
      lineHeight: 0.6,
      color: "var(--accent)",
      display: "block",
      height: "0.5em",
      marginBottom: "0.15em"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: sizes[size],
      lineHeight: 1.22,
      letterSpacing: "-0.01em",
      color,
      textWrap: "balance"
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.78rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: citeColor
    }
  }, cite));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plan-anticaos/app.jsx
try { (() => {
/* Plan Anticaos — app shell. Composes the sections + waitlist state. */
function App() {
  const [joined, setJoined] = React.useState(false);
  const scrollToCierre = () => {
    const el = document.getElementById("cierre");
    if (el) window.scrollTo({
      top: el.offsetTop - 40,
      behavior: "smooth"
    });
  };
  const onSubmit = () => setJoined(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    onJoin: scrollToCierre
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onJoin: scrollToCierre
  }), /*#__PURE__*/React.createElement(Problema, null), /*#__PURE__*/React.createElement(Transformacion, null), /*#__PURE__*/React.createElement(Programa, null), /*#__PURE__*/React.createElement(Manifiesto, null), /*#__PURE__*/React.createElement(Precio, {
    onJoin: scrollToCierre
  }), /*#__PURE__*/React.createElement(Cierre, {
    joined: joined,
    onSubmit: onSubmit
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plan-anticaos/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plan-anticaos/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Plan Anticaos — landing sections. Built on the Vida o Nada DS. */
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
const ICONS = "../../assets/icons";
const LOGOS = "../../assets/logos";
const ILL = "../../assets/illustrations";

/* ---------- small helpers ---------- */
function Grain() {
  return /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    className: "reveal",
    style: {
      transitionDelay: delay + "ms",
      ...style
    }
  }, rest), children);
}

/* ======================================================== NAV */
function Nav({
  onJoin
}) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["El problema", "#problema"], ["El programa", "#programa"], ["Precio", "#precio"]];
  return /*#__PURE__*/React.createElement("header", {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: solid ? 64 : 80,
      transition: "height .3s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGOS + "/mg-monogram-light.png",
    alt: "",
    style: {
      height: 34,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "1.15rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--von-parchment-text)"
    }
  }, "Vida o Nada")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-links",
    style: {
      display: "flex",
      gap: 26
    }
  }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
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
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onJoin
  }, "Quiero entrar"))));
}

/* ======================================================== HERO */
function Hero({
  onJoin
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: "var(--von-ink-black)",
      overflow: "hidden",
      paddingTop: 132,
      paddingBottom: "var(--section-pad-y)"
    }
  }, /*#__PURE__*/React.createElement(Grain, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "cream"
  }, "Programa grupal"), /*#__PURE__*/React.createElement(Badge, {
    variant: "cream-outline"
  }, "1\xAA edici\xF3n"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(3.2rem, 6.4vw, 6.2rem)",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      margin: "0 0 24px",
      color: "var(--von-parchment-text)"
    }
  }, "No te falta vida.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Te sobra ruido."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(1.15rem,1.7vw,1.5rem)",
      lineHeight: 1.4,
      color: "var(--von-cream)",
      maxWidth: "30ch",
      margin: "0 0 18px"
    }
  }, "Plan Anticaos: cuatro semanas para ordenar la cabeza y elegir un primer paso real.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 210
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.02rem",
      lineHeight: 1.6,
      color: "var(--von-cream-soft)",
      maxWidth: "44ch",
      margin: "0 0 34px"
    }
  }, "No es una agenda ni un curso de productividad. Es un sistema simple para entender qu\xE9 te pasa, dejar de vivir en bucle y bajar tus ideas a tierra.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 270
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconSrc: ICONS + "/ink/rumbo.png",
    iconRight: true,
    onClick: onJoin
  }, "Empieza ahora"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "#programa",
    style: {
      color: "var(--von-cream)"
    }
  }, "Ver el programa")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ILL + "/chaos-to-direction-light.png",
    alt: "Del caos a la direcci\xF3n",
    style: {
      width: "100%",
      maxWidth: 420,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.72rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--von-cream-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Caos mental"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--von-cream)"
    }
  }, "Direcci\xF3n clara")))));
}

/* ======================================================== PROBLEMA */
function Problema() {
  const si = ["Vives en automático y el tiempo se te escapa.", "Tienes mil ideas y ninguna bajada a tierra.", "Por fuera todo parece bien; por dentro hay una voz: ‘esto no puede ser todo’.", "Quieres dejar de vivir en bucle."];
  const no = ["Buscas soluciones mágicas.", "Quieres motivación rápida sin aplicar nada.", "No quieres hacerte preguntas incómodas."];
  return /*#__PURE__*/React.createElement("section", {
    id: "problema",
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: "var(--section-pad-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "01",
    tone: "energia"
  }, "\xBFTe suena?")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2rem,4vw,3.4rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.015em",
      margin: "18px 0 8px",
      maxWidth: "18ch"
    }
  }, "No est\xE1s perdida. Est\xE1s saturada.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 130
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: "var(--von-ink-soft)",
      maxWidth: "52ch",
      margin: "0 0 48px"
    }
  }, "No necesitas otra se\xF1al ni otra libreta. Necesitas dejar de posponer tu vida \u2014 y un sistema honesto para empezar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    pad: "xl",
    bordered: true,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "",
    tone: "ink",
    style: {
      marginBottom: 18
    }
  }, "Para qui\xE9n es"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, si.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 13,
      alignItems: "flex-start",
      fontSize: "1rem",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + "/amber/hecho.png",
    alt: "",
    style: {
      width: 22,
      height: 22,
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, t)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    pad: "xl",
    grain: true,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "cream",
    style: {
      marginBottom: 18
    }
  }, "Para qui\xE9n no es"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, no.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 13,
      alignItems: "flex-start",
      fontSize: "1rem",
      lineHeight: 1.45,
      color: "var(--von-cream)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--von-cream-soft)",
      fontFamily: "var(--font-display)",
      fontSize: "1.3rem",
      lineHeight: 1,
      marginTop: -2
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, t)))))))));
}

/* ======================================================== TRANSFORMACIÓN */
function Transformacion() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--von-ink-black)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: "var(--section-pad-y)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Grain, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "02",
    tone: "cream",
    style: {
      justifyContent: "center"
    }
  }, "La transformaci\xF3n")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 28,
      alignItems: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-dark)",
      borderRadius: "var(--radius-xl)",
      padding: "34px 32px",
      background: "rgba(232,200,144,0.03)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "1.4rem",
      color: "var(--von-cream-soft)",
      letterSpacing: "0.04em"
    }
  }, "DE"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "clamp(1.4rem,2.4vw,2rem)",
      lineHeight: 1.25,
      color: "var(--von-cream)",
      margin: "10px 0 0"
    }
  }, "\u2018No s\xE9 qu\xE9 hacer con mi vida.\u2019"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + "/amber/direccion.png",
    alt: "hacia",
    style: {
      width: 54,
      height: 54
    }
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 240
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      padding: "34px 32px",
      background: "var(--accent)",
      color: "var(--accent-on)",
      boxShadow: "var(--shadow-cta)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "1.4rem",
      letterSpacing: "0.04em",
      opacity: 0.8
    }
  }, "A"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: "clamp(1.4rem,2.4vw,2rem)",
      lineHeight: 1.25,
      margin: "10px 0 0"
    }
  }, "\u2018Vale, ya s\xE9 por d\xF3nde empezar.\u2019"))))));
}

/* ======================================================== PROGRAMA (4 semanas) */
function Programa() {
  const weeks = [["01", "caos", "Caos interno", "Entender tu mente antes de cambiar nada. Le pones nombre al ruido."], ["02", "direccion", "Dirección", "Definir lo que importa de verdad y soltar lo que no."], ["03", "decision", "Vida en automático", "Identificar los patrones que te mantienen estancada."], ["04", "accion", "Acción real", "Eliges un primer paso concreto y lo das. Sin esperar a estar lista."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "programa",
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: "var(--section-pad-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 20,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "03",
    tone: "energia"
  }, "El programa \xB7 4 semanas")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      fontSize: "clamp(2.4rem,5vw,4rem)",
      lineHeight: 0.92,
      letterSpacing: "-0.01em",
      margin: "16px 0 0"
    }
  }, "Del ruido al ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--von-energia)"
    }
  }, "primer paso")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "var(--von-ink-soft)",
      maxWidth: "34ch",
      margin: 0
    }
  }, "Cada semana, un movimiento. Verdad, orden y movimiento \u2014 en grupo, sin juicio."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, weeks.map(([n, ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(PillarCard, {
    base: ICONS,
    number: "Semana " + n,
    icon: ic,
    title: t,
    style: {
      height: "100%"
    }
  }, d))))));
}

/* ======================================================== MANIFIESTO */
function Manifiesto() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--von-ink-black)",
      paddingTop: "calc(var(--section-pad-y) * 1.1)",
      paddingBottom: "calc(var(--section-pad-y) * 1.1)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Grain, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(QuoteBlock, {
    size: "xl",
    tone: "dark",
    cite: "\u2014 El mensaje central de Vida o Nada",
    style: {
      display: "inline-block",
      textAlign: "center"
    }
  }, "Tienes una vida. No la vivas como si tuvieras dos."))));
}

/* ======================================================== PRECIO */
function Precio({
  onJoin
}) {
  const tiers = [{
    name: "1ª edición",
    price: "247€",
    tag: "Lanzamiento",
    feats: ["4 semanas en grupo", "Sesiones en directo", "Plan Anticaos completo", "Comunidad honesta"],
    featured: false
  }, {
    name: "Estándar",
    price: "297€",
    tag: "Precio habitual",
    feats: ["Todo lo de la 1ª edición", "Acceso a ediciones futuras", "Recursos descargables"],
    featured: true
  }, {
    name: "VIP",
    price: "397€",
    tag: "1 a 1",
    feats: ["Todo lo de Estándar", "Sesión individual con Marian", "Seguimiento personal 14 días"],
    featured: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "precio",
    style: {
      background: "var(--von-parchment)",
      color: "var(--von-ink)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: "var(--section-pad-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    number: "04",
    tone: "energia",
    style: {
      justifyContent: "center"
    }
  }, "\xDAnete a la 1\xAA edici\xF3n")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2rem,4vw,3.2rem)",
      letterSpacing: "-0.015em",
      margin: "16px 0 42px"
    }
  }, "Un precio de salida. Plazas limitadas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18,
      alignItems: "stretch"
    }
  }, tiers.map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.name,
    delay: i * 90,
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      borderRadius: "var(--radius-xl)",
      padding: "30px 26px 28px",
      background: t.featured ? "var(--von-ink-black)" : "var(--surface-card)",
      color: t.featured ? "var(--von-cream)" : "var(--von-ink)",
      border: t.featured ? "1px solid var(--border-dark)" : "1px solid var(--border-soft)",
      boxShadow: t.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
      position: "relative",
      overflow: "hidden",
      transform: t.featured ? "translateY(-10px)" : "none"
    }
  }, t.featured && /*#__PURE__*/React.createElement(Grain, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subtitle)",
      fontSize: "0.74rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: t.featured ? "var(--von-cream-soft)" : "var(--von-ink-soft)"
    }
  }, t.name), /*#__PURE__*/React.createElement(Badge, {
    variant: t.featured ? "amber" : "outline",
    size: "sm"
  }, t.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontSize: "3.4rem",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      marginBottom: 22,
      color: t.featured ? "var(--von-parchment-text)" : "var(--von-ink)"
    }
  }, t.price), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "0 0 26px",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 11,
      flex: 1
    }
  }, t.feats.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontSize: "0.94rem",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + (t.featured ? "/cream/hecho.png" : "/amber/hecho.png"),
    alt: "",
    style: {
      width: 18,
      height: 18,
      marginTop: 2,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement(Button, {
    variant: t.featured ? "primary" : "secondary",
    style: t.featured ? {} : {},
    onClick: onJoin
  }, "Quiero esta opci\xF3n"))))))));
}

/* ======================================================== CIERRE + waitlist + footer */
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
  return /*#__PURE__*/React.createElement("section", {
    id: "cierre",
    style: {
      background: "var(--von-ink-black)",
      paddingTop: "var(--section-pad-y)",
      paddingBottom: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Grain, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 760,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: "clamp(1.8rem,3.6vw,3rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      color: "var(--von-parchment-text)",
      margin: "0 0 14px"
    }
  }, "\xBFVas a vivir tu vida o vas a seguir posponi\xE9ndola?")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.05rem",
      lineHeight: 1.6,
      color: "var(--von-cream-soft)",
      margin: "0 0 30px"
    }
  }, "Deja tu email y te aviso cuando abran las plazas de la 1\xAA edici\xF3n. Sin spam. Solo direcci\xF3n.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, joined ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "rgba(232,200,144,0.06)",
      border: "1px solid var(--border-dark)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 26px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + "/amber/hecho.png",
    alt: "",
    style: {
      width: 22,
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-subtitle)",
      letterSpacing: "0.04em",
      color: "var(--von-cream)"
    }
  }, "Est\xE1s dentro. Te escribo pronto.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: 540,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 280px",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    tone: "dark",
    pill: true,
    placeholder: "Tu email",
    value: email,
    onChange: e => setEmail(e.target.value),
    invalid: !!err,
    "aria-label": "Tu email"
  }), err && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 7,
      fontSize: "0.82rem",
      color: "var(--status-stop)"
    }
  }, err)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "button",
    type: "submit"
  }, "Av\xEDsame")))), /*#__PURE__*/React.createElement("footer", {
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
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGOS + "/marian-g-paris-logo-light.png",
    alt: "Marian G Paris",
    style: {
      height: 64,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-condensed)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontSize: "1.1rem",
      color: "var(--von-parchment-text)",
      margin: "0 0 6px"
    }
  }, "Menos ruido. M\xE1s direcci\xF3n. M\xE1s vida."), /*#__PURE__*/React.createElement("a", {
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
  Precio,
  Cierre
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plan-anticaos/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PillarCard = __ds_scope.PillarCard;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

})();
