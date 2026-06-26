/* @ds-bundle: {"format":3,"namespace":"DriveMongoliaDesignSystem_93ede9","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FeatureTag","sourcePath":"components/core/FeatureTag.jsx"},{"name":"FilterTab","sourcePath":"components/core/FilterTab.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"LinkArrow","sourcePath":"components/core/LinkArrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"SpecGrid","sourcePath":"components/fleet/SpecGrid.jsx"},{"name":"TerrainCard","sourcePath":"components/fleet/TerrainCard.jsx"},{"name":"VehicleRow","sourcePath":"components/fleet/VehicleRow.jsx"}],"sourceHashes":{"components/core/Button.jsx":"f7b37e1a54f5","components/core/FeatureTag.jsx":"562f2a921f43","components/core/FilterTab.jsx":"63d48396e6d9","components/core/Kicker.jsx":"5bc5a305154c","components/core/LinkArrow.jsx":"decd22ebf5ee","components/core/Stat.jsx":"1810be6f11ce","components/fleet/SpecGrid.jsx":"d1bedd747290","components/fleet/TerrainCard.jsx":"4029b3aa924b","components/fleet/VehicleRow.jsx":"0c4a675de0bb","ui_kits/marketing/App.jsx":"000b91f1f825","ui_kits/marketing/Chrome.jsx":"8dc32b40a168","ui_kits/marketing/Fleet.jsx":"8ce70e093876","ui_kits/marketing/Sections.jsx":"adbdc916157f","ui_kits/marketing/data.js":"bc90903c6887","uploads/app.js":"3599fd649158","uploads/data.js":"9758c740bd4b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DriveMongoliaDesignSystem_93ede9 = window.DriveMongoliaDesignSystem_93ede9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Drive Mongolia primary action. Oswald, uppercase, sharp corners, rust fill.
 * Three looks: solid (on paper), outline + ghostlight (over photography).
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  href,
  icon,
  iconRight,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const pad = size === "lg" ? "18px 38px" : "15px 30px";
  const fontSize = size === "lg" ? "0.95rem" : "0.88rem";
  const looks = {
    solid: {
      background: "var(--rust)",
      color: "#fff",
      border: "1.5px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--on-dark)",
      border: "1.5px solid rgba(246,241,233,0.55)"
    },
    ghostlight: {
      background: "rgba(246,241,233,0.12)",
      color: "#fff",
      border: "1px solid rgba(246,241,233,0.32)",
      backdropFilter: "blur(4px)"
    },
    dark: {
      background: "var(--ink)",
      color: "var(--paper)",
      border: "1.5px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.09em",
    fontSize,
    padding: pad,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    lineHeight: 1,
    transition: "transform .2s ease, background .25s ease, color .25s ease, border-color .25s ease, box-shadow .25s ease",
    ...looks[variant],
    ...style
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: 18,
      height: 18
    }
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: base,
    disabled: disabled,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small hairline-outlined tag — used for "expedition-ready" feature pills
 * (snorkel, dual tanks, recovery kit…). Quiet, not filled.
 */
function FeatureTag({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontSize: "0.82rem",
      color: "var(--muted)",
      padding: "6px 13px",
      border: "1px solid var(--line-2)",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FeatureTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureTag.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter / tab chip used above the fleet list. Oswald uppercase; the active
 * chip flips to a solid ink fill.
 */
function FilterTab({
  children,
  active = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    role: "tab",
    "aria-selected": active,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      fontSize: "0.82rem",
      padding: "10px 20px",
      borderRadius: "var(--radius-xs)",
      border: active ? "1px solid var(--ink)" : "1px solid var(--line-2)",
      color: active ? "var(--paper)" : "var(--muted)",
      background: active ? "var(--ink)" : "transparent",
      cursor: "pointer",
      transition: "all .2s ease",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FilterTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterTab.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / section label. Oswald, heavily tracked uppercase, rust by default.
 * Use `tone="light"` over photography (brighter clay) or "dark" over ink.
 */
function Kicker({
  children,
  tone = "rust",
  as = "span",
  style = {},
  ...rest
}) {
  const color = tone === "light" ? "var(--kicker-on-dark)" : tone === "muted" ? "var(--muted-2)" : "var(--rust)";
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "0.78rem",
      letterSpacing: "0.26em",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underlined "→" text link. Oswald uppercase, rust, arrow nudges on hover.
 */
function LinkArrow({
  children,
  href = "#",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: hover ? "16px" : "10px",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: "0.86rem",
      color: "var(--rust)",
      paddingBottom: "4px",
      borderBottom: "2px solid var(--rust)",
      textDecoration: "none",
      transition: "gap .2s ease",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { LinkArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkArrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big Oswald number + caption, as in the hero stat row
 * ("45+ owned 4×4 vehicles"). `tone="dark"` for over-photo / ink surfaces.
 */
function Stat({
  value,
  label,
  tone = "dark",
  style = {},
  ...rest
}) {
  const valueColor = tone === "dark" ? "var(--on-dark)" : "var(--ink)";
  const labelColor = tone === "dark" ? "var(--on-dark-mut)" : "var(--muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(1.8rem, 3.4vw, 2.7rem)",
      lineHeight: 1,
      color: valueColor
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.82rem",
      letterSpacing: "0.02em",
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/fleet/SpecGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hairline 3-up spec grid used in the vehicle detail panel.
 * Pass an array of {k, v} pairs (Engine, Transmission, Drivetrain…).
 */
function SpecGrid({
  specs = [],
  columns = 3,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "1px",
      background: "var(--line)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      ...style
    }
  }, rest), specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--paper)",
      padding: "13px 15px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.72rem",
      color: "var(--muted-2)"
    }
  }, s.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "1rem",
      marginTop: "2px",
      color: "var(--ink)"
    }
  }, s.v))));
}
Object.assign(__ds_scope, { SpecGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fleet/SpecGrid.jsx", error: String((e && e.message) || e) }); }

// components/fleet/TerrainCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PLACEHOLDER = "linear-gradient(160deg, #b9a988, #8c7a59)";

/**
 * Tall 4:5 destination card with a photo, bottom scrim and a blurb that
 * fades up on hover. Used in the "Where you'll go" grid.
 */
function TerrainCard({
  name,
  blurb,
  img,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      aspectRatio: "4 / 5",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      color: "var(--on-dark)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: img ? `url('${img}') center/cover` : PLACEHOLDER,
      transform: hover ? "scale(1.08)" : "none",
      transition: "transform .8s cubic-bezier(.2,.7,.2,1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,12,8,0) 35%, rgba(16,12,8,.9) 100%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      padding: "22px 20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "1.3rem",
      lineHeight: 1.05
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.88rem",
      color: "var(--on-dark-mut)",
      marginTop: "8px",
      maxHeight: hover ? "80px" : 0,
      opacity: hover ? 1 : 0,
      overflow: "hidden",
      transition: "opacity .3s, max-height .3s"
    }
  }, blurb)));
}
Object.assign(__ds_scope, { TerrainCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fleet/TerrainCard.jsx", error: String((e && e.message) || e) }); }

// components/fleet/VehicleRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PLACEHOLDER = "linear-gradient(160deg, #e8ded0, #d6c9b2)";
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 6l6 6-6 6"
}));

/**
 * Schedule-style fleet row: media plate → name/specs → availability → price.
 * A 3px rust bar wipes in on the left edge on hover. Click opens detail.
 */
function VehicleRow({
  category,
  name,
  specs,
  price,
  priceUnit = "per day",
  img,
  available = true,
  availabilityLabel,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const label = availabilityLabel || (available ? "Available today" : "Fully booked");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "232px minmax(0, 1.6fr) minmax(0, 1fr) auto 26px",
      alignItems: "center",
      gap: "28px",
      width: "100%",
      textAlign: "left",
      padding: "18px 14px",
      borderBottom: "1px solid var(--line)",
      background: hover ? "rgba(188,94,28,0.06)" : "transparent",
      position: "relative",
      cursor: "pointer",
      transition: "background .22s ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "3px",
      background: "var(--rust)",
      transform: hover ? "scaleY(1)" : "scaleY(0)",
      transformOrigin: "center top",
      transition: "transform .25s ease"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 232,
      height: 122,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: PLACEHOLDER,
      flex: "none",
      display: "block"
    }
  }, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.06)" : "none",
      transition: "transform .5s cubic-bezier(.2,.7,.2,1)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      fontSize: "0.7rem",
      color: "var(--rust)"
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "1.5rem",
      lineHeight: 1,
      letterSpacing: "0.01em",
      color: "var(--ink)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.86rem",
      color: "var(--muted)"
    }
  }, specs)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontSize: "0.82rem",
      color: available ? "var(--ok)" : "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: available ? "var(--ok)" : "var(--muted-2)"
    }
  }), label), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-display)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 600,
      fontSize: "1.4rem",
      display: "block",
      lineHeight: 1,
      color: "var(--ink)"
    }
  }, "from ", price), /*#__PURE__*/React.createElement("small", {
    style: {
      fontSize: "0.68rem",
      color: "var(--muted-2)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, priceUnit)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      color: hover ? "var(--rust)" : "var(--muted-2)",
      transform: hover ? "translateX(4px)" : "none",
      transition: "transform .2s ease, color .2s ease"
    }
  }, /*#__PURE__*/React.createElement(Chevron, null)));
}
Object.assign(__ds_scope, { VehicleRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fleet/VehicleRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/App.jsx
try { (() => {
/* Drive Mongolia marketing kit — assembles the full click-through page. */

function TerrainSection() {
  const {
    Kicker,
    TerrainCard
  } = window.DriveMongoliaDesignSystem_93ede9;
  return /*#__PURE__*/React.createElement("section", {
    id: "terrain",
    style: {
      background: "var(--paper)",
      padding: "clamp(72px,9vw,120px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--wrap)",
      margin: "0 auto",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Where you'll go"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4vw,3.4rem)",
      lineHeight: 1.02,
      marginTop: 20
    }
  }, "One country, every kind of wild"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: "1.12rem",
      marginTop: 18,
      lineHeight: 1.6
    }
  }, "From the flaming cliffs of the Gobi to the glaciers of the Altai \u2014 we'll help you plot a route that matches your nerve.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 18
    }
  }, window.DM_TERRAINS.map(t => /*#__PURE__*/React.createElement(TerrainCard, {
    key: t.name,
    name: t.name,
    blurb: t.blurb,
    img: undefined,
    style: {
      background: window.DM_PHOTOS[t.scene]
    }
  })))));
}
function App() {
  const [solid, setSolid] = React.useState(false);
  const [vehicle, setVehicle] = React.useState(null);
  const scrollRef = React.useRef(null);
  const onScroll = e => setSolid(e.target.scrollTop > 560);
  React.useEffect(() => {
    document.body.style.overflow = vehicle ? "hidden" : "";
  }, [vehicle]);
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    onScroll: onScroll,
    style: {
      height: "100vh",
      overflowY: "auto",
      background: "var(--paper)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    solid: solid
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Band, {
    scene: "steppe",
    title: "The adventure of your<br/>life starts where the<br/>road ends."
  }), /*#__PURE__*/React.createElement(FleetSection, {
    onOpen: setVehicle
  }), /*#__PURE__*/React.createElement(TerrainSection, null), /*#__PURE__*/React.createElement(Band, {
    scene: "eagle",
    align: "left",
    kicker: "Land of the Eternal Blue Sky",
    title: "Out here, the only traffic<br/>is wild horses and eagles.",
    text: "Khentii to the Altai, the Gobi to Kh\xF6vsg\xF6l \u2014 we know every track, river crossing and hidden camp, and we'll make sure you find your way home."
  }), /*#__PURE__*/React.createElement(WhySection, null), /*#__PURE__*/React.createElement(StorySection, null), /*#__PURE__*/React.createElement(ContactSection, null), /*#__PURE__*/React.createElement(Footer, null), vehicle ? /*#__PURE__*/React.createElement(VehicleModal, {
    vehicle: vehicle,
    onClose: () => setVehicle(null)
  }) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Chrome.jsx
try { (() => {
/* Header + Footer chrome for the Drive Mongolia marketing kit. */

function Wordmark({
  dark
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 11,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-sm)",
      border: "2px solid currentColor",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.05rem",
      color: dark ? "var(--ink)" : "var(--on-dark)"
    }
  }, "DM"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      fontSize: "1.2rem",
      color: dark ? "var(--ink)" : "var(--on-dark)"
    }
  }, "Drive", /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? "var(--rust)" : "var(--rust-light)"
    }
  }, "Mongolia")));
}
function Header({
  solid
}) {
  const links = ["Fleet", "Where you'll go", "Why us", "Our story"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 70,
      background: solid ? "var(--paper)" : "transparent",
      boxShadow: solid ? "var(--shadow-header)" : "none",
      transition: "background .3s, box-shadow .3s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--wrap)",
      margin: "0 auto",
      padding: "0 28px",
      height: solid ? 70 : 84,
      display: "flex",
      alignItems: "center",
      gap: 28,
      transition: "height .3s"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    dark: solid
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#fleet",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      fontSize: "0.84rem",
      color: solid ? "var(--ink)" : "var(--on-dark)",
      opacity: 0.92,
      textDecoration: "none"
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.07em",
      fontSize: "0.84rem",
      color: solid ? "var(--rust)" : "var(--rust-light)",
      textDecoration: "none"
    }
  }, "Reserve")), /*#__PURE__*/React.createElement("a", {
    href: "tel:+97699118257",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "0.04em",
      fontSize: "0.92rem",
      color: solid ? "var(--ink)" : "var(--on-dark)",
      textDecoration: "none"
    }
  }, "+976 9911 8257")));
}
function Footer() {
  const social = ["facebook", "instagram", "whatsapp"];
  const cols = [{
    h: "Explore",
    items: ["The fleet", "Where you'll go", "Why us", "Our story"]
  }, {
    h: "Rentals",
    items: ["Self-drive 4×4", "Expedition vans", "Motorbikes & ATV", "Tailor-made tours"]
  }, {
    h: "Contact",
    items: ["+976 9911 8257", "info@drivemongolia.com", "Bayangol District, Ulaanbaatar"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-2)",
      color: "var(--on-dark)",
      padding: "70px 0 34px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--wrap)",
      margin: "0 auto",
      padding: "0 28px",
      display: "grid",
      gridTemplateColumns: "1.8fr 1fr 1fr 1.4fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      fontSize: "0.95rem",
      maxWidth: 320,
      marginBottom: 20,
      lineHeight: 1.6
    }
  }, "Adventure \xB7 Car rentals \xB7 Self-drive tours. Experience Mongolia like a Mongolian."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--radius-sm)",
      display: "grid",
      placeItems: "center",
      background: "rgba(246,241,233,.07)",
      border: "1px solid rgba(246,241,233,.14)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${s}.svg`,
    style: {
      width: 19,
      height: 19,
      filter: "invert(1)",
      opacity: 0.85
    },
    alt: s
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      fontSize: "0.78rem",
      color: "var(--kicker-on-dark)",
      marginBottom: 16
    }
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: "block",
      color: "var(--on-dark-mut)",
      fontSize: "0.94rem",
      marginBottom: 11,
      textDecoration: "none"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--wrap)",
      margin: "50px auto 0",
      padding: "24px 28px 0",
      borderTop: "1px solid rgba(246,241,233,.14)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10,
      color: "var(--on-dark-mut)",
      fontSize: "0.84rem"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Drive Mongolia. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Drive for the adventure of your life.")));
}
Object.assign(window, {
  Wordmark,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Fleet.jsx
try { (() => {
/* Fleet listing + vehicle detail modal for the marketing kit.
   Composes VehicleRow, FilterTab, SpecGrid, FeatureTag from the DS. */

function FleetSection({
  onOpen
}) {
  const {
    Kicker,
    FilterTab,
    VehicleRow
  } = window.DriveMongoliaDesignSystem_93ede9;
  const [filter, setFilter] = React.useState("all");
  const list = window.DM_VEHICLES.filter(v => filter === "all" || v.category === filter);
  return /*#__PURE__*/React.createElement("section", {
    id: "fleet",
    style: {
      background: "var(--paper-2)",
      padding: "clamp(72px,9vw,120px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--wrap)",
      margin: "0 auto",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "The Fleet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "clamp(2rem,4vw,3.4rem)",
      lineHeight: 1.02,
      marginTop: 20
    }
  }, "Choose your machine"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: "1.12rem",
      marginTop: 18,
      lineHeight: 1.6
    }
  }, "Every rig is company-owned and expedition-prepared. Tap any vehicle for full specs and a live 14-day availability calendar \u2014 then lock in your dates.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 34
    }
  }, window.DM_FILTERS.map(f => /*#__PURE__*/React.createElement(FilterTab, {
    key: f.id,
    active: filter === f.id,
    onClick: () => setFilter(f.id)
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-2)"
    }
  }, list.map(v => /*#__PURE__*/React.createElement(VehicleRow, {
    key: v.id,
    category: v.categoryLabel,
    name: v.name,
    specs: `${v.seats} · ${v.transmission} · ${v.fuel} · ${v.engine}`,
    price: `$${v.pricePerDay}`,
    available: v.available,
    availabilityLabel: v.availLabel,
    onClick: () => onOpen(v)
  })))));
}
function VehicleModal({
  vehicle,
  onClose
}) {
  const {
    SpecGrid,
    FeatureTag,
    Button
  } = window.DriveMongoliaDesignSystem_93ede9;
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!vehicle) return null;
  const v = vehicle;
  const specs = [{
    k: "Engine",
    v: v.engine
  }, {
    k: "Transmission",
    v: v.transmission
  }, {
    k: "Drivetrain",
    v: v.drivetrain
  }, {
    k: "Fuel",
    v: v.fuel
  }, {
    k: "Capacity",
    v: v.seats
  }, {
    k: "Ground clearance",
    v: v.clearance
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(12,9,6,.72)",
      backdropFilter: "blur(6px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: "min(940px, calc(100vw - 32px))",
      maxHeight: "min(92vh, 820px)",
      background: "var(--paper)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--shadow)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      zIndex: 6,
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: "rgba(16,12,8,.55)",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      fontSize: 20,
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16/9",
      maxHeight: "44vh",
      flex: "none",
      color: "var(--on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: window.DM_PHOTOS[v.scene]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,12,8,.1) 30%, rgba(16,12,8,.86) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      padding: "24px 28px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontSize: "0.74rem",
      color: "var(--kicker-on-dark)"
    }
  }, v.categoryLabel), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "clamp(1.6rem,3vw,2.3rem)",
      lineHeight: 1,
      marginTop: 4
    }
  }, v.name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      fontSize: "0.92rem",
      marginTop: 6,
      maxWidth: "44ch"
    }
  }, v.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontFamily: "var(--font-display)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700,
      fontSize: "1.9rem",
      display: "block",
      lineHeight: 1
    }
  }, "$", v.pricePerDay), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.74rem",
      color: "var(--on-dark-mut)"
    }
  }, "/ day")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 28px 30px",
      overflowY: "auto",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: modalLabel
  }, "Specifications"), /*#__PURE__*/React.createElement(SpecGrid, {
    specs: specs
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...modalLabel,
      marginTop: 26
    }
  }, "Expedition-ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, v.features.map(f => /*#__PURE__*/React.createElement(FeatureTag, {
    key: f
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      padding: 18,
      border: "1px solid var(--line-2)",
      borderRadius: "var(--radius-md)",
      background: "var(--paper-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.08rem"
    }
  }, v.available ? v.availLabel : "Fully booked this fortnight"), /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      color: "var(--muted)",
      fontSize: "0.86rem",
      marginTop: 2
    }
  }, "$", v.pricePerDay, " / day \xB7 self-drive from Ulaanbaatar")), /*#__PURE__*/React.createElement(Button, null, v.available ? "Reserve this date" : "Ask about dates")))));
}
const modalLabel = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  fontSize: "0.74rem",
  color: "var(--muted-2)",
  marginBottom: 14
};
Object.assign(window, {
  FleetSection,
  VehicleModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Fleet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
/* Hero, intro, full-bleed bands, why, story, contact for the marketing kit.
   Uses DS primitives: Kicker, Button, Stat, LinkArrow. */

const wrap = {
  maxWidth: "var(--wrap)",
  margin: "0 auto",
  padding: "0 28px"
};
function Hero() {
  const {
    Kicker,
    Button,
    Stat
  } = window.DriveMongoliaDesignSystem_93ede9;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 680,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      color: "var(--on-dark)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: window.DM_PHOTOS.hero
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-hero)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2,
      paddingTop: 140
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "light"
  }, "Est. 2006 \xB7 Ulaanbaatar, Mongolia"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "clamp(2.7rem,6vw,5rem)",
      lineHeight: 0.96,
      letterSpacing: "0.005em",
      marginTop: 18,
      textShadow: "0 2px 30px rgba(0,0,0,.35)"
    }
  }, "Experience Mongolia", /*#__PURE__*/React.createElement("br", null), "like a Mongolian"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "56ch",
      fontSize: "1.2rem",
      color: "var(--on-dark-mut)",
      marginTop: 24,
      lineHeight: 1.6
    }
  }, "Self-drive expeditions across the last great wilderness on earth. Choose your machine, check live availability, and drive for the adventure of your life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#fleet"
  }, "Explore the fleet"), /*#__PURE__*/React.createElement(Button, {
    href: "#contact",
    variant: "outline"
  }, "Plan your route"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2,
      display: "flex",
      gap: 56,
      padding: "44px 28px 40px"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "45+",
    label: "Owned 4\xD74 vehicles"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "64+",
    label: "Adventure motorbikes"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "19",
    label: "Years on the steppe"
  })));
}
function Intro() {
  const {
    Kicker,
    LinkArrow
  } = window.DriveMongoliaDesignSystem_93ede9;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--paper)",
      padding: "clamp(72px,9vw,120px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "clamp(36px,6vw,90px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "No roads. No fences. No limits."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "clamp(1.8rem,3.4vw,2.9rem)",
      lineHeight: 1.05,
      marginTop: 20
    }
  }, "Mongolia is not a place you visit. It's a place you ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--rust)",
      fontStyle: "normal"
    }
  }, "drive into."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: "1.1rem",
      marginBottom: 18,
      lineHeight: 1.7
    }
  }, "For nearly two decades we've handed travellers the keys to the wildest country on earth \u2014 and the freedom to cross it on their own terms. No tour bus, no fixed schedule. Just you, a fully-prepared machine, and a million square kilometres of steppe, desert and mountain."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: "1.1rem",
      marginBottom: 22,
      lineHeight: 1.7
    }
  }, "Drive Mongolia owns the largest fleet of SUVs and motorbikes equipped for the uncertain roads of Mongolia. Every vehicle is company-owned, fully insured, and obsessively maintained by our own mechanics."), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#fleet"
  }, "Meet the fleet"))));
}
function Band({
  scene,
  kicker,
  title,
  text,
  align = "center"
}) {
  const {
    Kicker
  } = window.DriveMongoliaDesignSystem_93ede9;
  const left = align === "left";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 460,
      display: "flex",
      alignItems: "center",
      color: "var(--on-dark)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: window.DM_PHOTOS[scene]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: left ? "linear-gradient(90deg, rgba(16,12,8,.82) 0%, rgba(16,12,8,.45) 45%, rgba(16,12,8,.08) 80%)" : "var(--scrim-band)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2,
      width: "100%",
      textAlign: left ? "left" : "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: left ? 680 : "none",
      margin: left ? 0 : "0 auto"
    }
  }, kicker ? /*#__PURE__*/React.createElement(Kicker, {
    tone: "light"
  }, kicker) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "clamp(1.9rem,4vw,3.4rem)",
      lineHeight: 1.02,
      marginTop: kicker ? 16 : 0,
      textShadow: "0 2px 30px rgba(0,0,0,.4)"
    },
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), text ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      fontSize: "1.12rem",
      marginTop: 22,
      maxWidth: "52ch",
      lineHeight: 1.6
    }
  }, text) : null)));
}
function WhySection() {
  const {
    Kicker,
    Button
  } = window.DriveMongoliaDesignSystem_93ede9;
  const items = [["01", "The largest owned fleet", "Every vehicle is ours — no brokers, no surprises. Fully insured by national insurers."], ["02", "Expedition-prepared", "Snorkels, dual tanks, recovery gear and roof tents — built for roads that aren't roads."], ["03", "24/7 roadside rescue", "English-speaking mechanics and a vehicle-replacement guarantee, anywhere in the country."], ["04", "Tailor-made routes", "GPS tracks, fuel and resupply strategy, accommodation bookings and border permits."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      background: "var(--ink)",
      color: "var(--on-dark)",
      padding: "clamp(72px,9vw,120px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: "clamp(40px,6vw,90px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, null, "Why Drive Mongolia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: "clamp(2rem,3.4vw,3rem)",
      lineHeight: 1.02,
      color: "var(--on-dark)",
      marginTop: 20
    }
  }, "The locals who never leave you stranded"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      fontSize: "1.12rem",
      marginTop: 20,
      marginBottom: 28,
      lineHeight: 1.6
    }
  }, "Tailor-made support from a team that has crossed this country in every season since 2006."), /*#__PURE__*/React.createElement(Button, {
    href: "#contact"
  }, "Start planning")), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it[0],
    style: {
      display: "flex",
      gap: 24,
      padding: "26px 0",
      borderTop: "1px solid rgba(246,241,233,.16)",
      borderBottom: i === items.length - 1 ? "1px solid rgba(246,241,233,.16)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.1rem",
      color: "var(--rust-light)",
      paddingTop: 4
    }
  }, it[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      fontSize: "1.4rem"
    }
  }, it[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      marginTop: 7,
      fontSize: "1.02rem",
      lineHeight: 1.6
    }
  }, it[2])))))));
}
function StorySection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      position: "relative",
      minHeight: 420,
      display: "flex",
      alignItems: "center",
      color: "var(--on-dark)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: window.DM_PHOTOS.nomad
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-band)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: "clamp(1.7rem,3.6vw,3rem)",
      lineHeight: 1.12,
      letterSpacing: "0.01em",
      maxWidth: "18ch",
      margin: "0 auto",
      textShadow: "0 2px 24px rgba(0,0,0,.4)"
    }
  }, "\"Stick to the road \u2014 don't make new road.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      marginTop: 22,
      fontSize: "1.05rem"
    }
  }, "Made by drivers and bikers, for drivers and bikers \u2014 since 2006.")));
}
function ContactSection() {
  const {
    Kicker,
    Button
  } = window.DriveMongoliaDesignSystem_93ede9;
  const methods = [["Call", "+976 9911 8257"], ["Email", "info@drivemongolia.com"], ["Find us", "Bayangol District, Ulaanbaatar 16051"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: "relative",
      color: "var(--on-dark)",
      overflow: "hidden",
      padding: "clamp(80px,10vw,130px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: window.DM_PHOTOS.mountains
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(16,12,8,.86), rgba(16,12,8,.74))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      zIndex: 2,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "light"
  }, "Ready when you are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      textTransform: "uppercase",
      fontSize: "clamp(2.3rem,5vw,4rem)",
      lineHeight: 1,
      marginTop: 16
    }
  }, "Reserve your adventure"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--on-dark-mut)",
      fontSize: "1.16rem",
      marginTop: 18,
      maxWidth: "50ch",
      lineHeight: 1.6
    }
  }, "Tell us where you want to go. We'll reply fast, in English, with a machine and a route to match."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      margin: "32px 0 40px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "#fleet",
    size: "lg"
  }, "Browse the fleet"), /*#__PURE__*/React.createElement(Button, {
    href: "#",
    variant: "ghostlight",
    size: "lg"
  }, "Chat on WhatsApp")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: "28px 0 0",
      margin: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: "14px 50px",
      borderTop: "1px solid rgba(246,241,233,.2)"
    }
  }, methods.map(m => /*#__PURE__*/React.createElement("li", {
    key: m[0],
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      fontSize: "0.7rem",
      color: "var(--kicker-on-dark)",
      marginBottom: 5
    }
  }, m[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.08rem",
      fontWeight: 500
    }
  }, m[1]))))));
}
Object.assign(window, {
  Hero,
  Intro,
  Band,
  WhySection,
  StorySection,
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/data.js
try { (() => {
/* Drive Mongolia — UI kit data (mirrors the source site's data.js).
   Photos are unavailable in this design system, so each scene carries an
   earthy gradient placeholder. Drop real .webp files into assets/img/ and
   swap `grad` for `img` to restore photography. */

window.DM_PHOTOS = {
  hero: "linear-gradient(155deg,#6f5c3c 0%,#3a2c1c 70%)",
  steppe: "linear-gradient(160deg,#9a8b55,#5b6b3a 60%,#2f3320)",
  eagle: "linear-gradient(120deg,#33414f,#10161c)",
  gobi: "linear-gradient(150deg,#caa46a,#8a5a2c 70%,#5a3417)",
  altai: "linear-gradient(160deg,#8a98a6,#3f4a57 70%,#222a32)",
  khovsgol: "linear-gradient(160deg,#5f7e86,#26414a 70%,#13262c)",
  dunes: "linear-gradient(160deg,#c8a86e,#9a7b41 60%,#6b5226)",
  nomad: "linear-gradient(150deg,#7a6647,#2c2418)",
  mountains: "linear-gradient(160deg,#7e7160,#3b342a)"
};
window.DM_VEHICLES = [{
  id: "lc76",
  name: "Toyota Land Cruiser 76",
  category: "4x4",
  categoryLabel: "Self-Drive 4×4",
  tagline: "The hardtop legend that goes where roads quit.",
  scene: "gobi",
  pricePerDay: 150,
  seats: "5 seats",
  transmission: "Manual",
  fuel: "Diesel",
  drivetrain: "Part-time 4WD + diff lock",
  engine: "4.2L 1HZ Diesel",
  clearance: "230 mm",
  available: true,
  availLabel: "Available today",
  features: ["Snorkel", "Dual fuel tanks", "Roof rack + rooftop tent", "Recovery kit", "Fridge box", "GPS + offline maps"]
}, {
  id: "lc105",
  name: "Toyota Land Cruiser 105",
  category: "4x4",
  categoryLabel: "Self-Drive 4×4",
  tagline: "Coil-sprung comfort for the long haul across the steppe.",
  scene: "steppe",
  pricePerDay: 170,
  seats: "7 seats",
  transmission: "Automatic",
  fuel: "Petrol",
  drivetrain: "Full-time 4WD",
  engine: "4.5L 1FZ Petrol",
  clearance: "210 mm",
  available: true,
  availLabel: "Free from Thu 27 Jun",
  features: ["Roof rack", "Dual battery", "Recovery kit", "Long-range tank", "GPS + offline maps", "Camping kit"]
}, {
  id: "uaz-van",
  name: "UAZ-452 Expedition Van",
  category: "van",
  categoryLabel: "Expedition Van",
  tagline: "The indestructible Russian 'Furgon' — a Mongolian icon.",
  scene: "nomad",
  pricePerDay: 120,
  seats: "6 seats",
  transmission: "Manual",
  fuel: "Petrol",
  drivetrain: "Selectable 4WD",
  engine: "2.7L 4WD",
  clearance: "205 mm",
  available: true,
  availLabel: "Available tomorrow",
  features: ["Bull bar + winch", "Roof rack", "Dual battery", "Recovery kit", "Spare wheels", "Tool kit"]
}, {
  id: "uaz-camper",
  name: "UAZ Overland Camper",
  category: "van",
  categoryLabel: "Camper Van",
  tagline: "Your bed, kitchen and 4×4 — all in one pop-top.",
  scene: "mountains",
  pricePerDay: 160,
  seats: "Sleeps 2",
  transmission: "Manual",
  fuel: "Petrol",
  drivetrain: "Selectable 4WD",
  engine: "2.7L 4WD",
  clearance: "205 mm",
  available: false,
  availLabel: "Fully booked",
  features: ["Pop-top sleeping tent", "Kitchenette + gas", "Fridge + water tank", "Solar + USB", "Full bedding", "Camp chairs & table"]
}, {
  id: "moto",
  name: "Adventure Dual-Sport",
  category: "moto",
  categoryLabel: "Motorbike",
  tagline: "Two wheels, no fences — the purest way to ride Mongolia.",
  scene: "dunes",
  pricePerDay: 70,
  seats: "1 rider",
  transmission: "Manual",
  fuel: "Petrol",
  drivetrain: "Chain drive",
  engine: "250–650cc",
  clearance: "280 mm",
  available: true,
  availLabel: "Available today",
  features: ["Panniers + top box", "Hand guards", "Skid plate", "Tank bag", "Helmet & riding gear", "Tool & tube kit"]
}, {
  id: "atv",
  name: "Yamaha Grizzly ATV",
  category: "moto",
  categoryLabel: "ATV / Quad",
  tagline: "Big-bore quad that floats over the roughest ground.",
  scene: "altai",
  pricePerDay: 90,
  seats: "1–2 riders",
  transmission: "Automatic (CVT)",
  fuel: "Petrol",
  drivetrain: "On-demand 4WD",
  engine: "686cc Single",
  clearance: "290 mm",
  available: true,
  availLabel: "Free from Sat 29 Jun",
  features: ["Winch", "Storage boxes", "Hand guards", "Helmet & gear", "Spare fuel can", "Recovery strap"]
}];
window.DM_FILTERS = [{
  id: "all",
  label: "All vehicles"
}, {
  id: "4x4",
  label: "Self-Drive 4×4"
}, {
  id: "van",
  label: "Expedition Vans"
}, {
  id: "moto",
  label: "Moto & ATV"
}];
window.DM_TERRAINS = [{
  name: "The Gobi Desert",
  scene: "gobi",
  blurb: "Flaming cliffs, singing dunes and dinosaur country in the far south."
}, {
  name: "Altai Tavan Bogd",
  scene: "altai",
  blurb: "Glaciers, eagle hunters and Mongolia's highest, wildest peaks."
}, {
  name: "Khövsgöl & the North",
  scene: "khovsgol",
  blurb: "Taiga forest, reindeer herders and the deep-blue 'Dark Lake'."
}, {
  name: "The Eternal Steppe",
  scene: "steppe",
  blurb: "Endless grassland, wild horses and skies that never end."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/data.js", error: String((e && e.message) || e) }); }

// uploads/app.js
try { (() => {
/* =========================================================================
   Drive Mongolia — interactions
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- small icons ---------- */
  const I = {
    seats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"/><path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3H3z"/><path d="M5 16v3M19 16v3"/></svg>`,
    gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="M6 8.4v7.2M18 8.4V12a3 3 0 0 1-3 3H6"/></svg>`,
    fuel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M4 21h12M5 12h10"/><path d="M15 9l3 3v5a2 2 0 0 0 2-2V8l-3-3"/></svg>`,
    drive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>`,
    engine: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h3V7h5v2h3l2 2h2v5h-2v3H6v-3H4v-5z"/><path d="M9 7V5h4v2"/></svg>`,
    clearance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v8M8 7l4 4 4-4"/><path d="M4 21h16M4 18h16" stroke-dasharray="1 3"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.3 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7s-3.7-3.2-3.8-3.4c-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.9c.2-.2.4-.3.6-.3h.4c.2 0 .4 0 .6.5l.7 1.8c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2 .9.7 1.4.9 1.7 1 .2.1.4 0 .5-.1l.7-.8c.2-.2.3-.2.6-.1l1.7.8c.2.1.4.2.5.3.1.2.1.7-.1 1.2z"/></svg>`
  };
  const $ = (s, c) => (c || document).querySelector(s);
  const el = h => {
    const t = document.createElement("template");
    t.innerHTML = h.trim();
    return t.content.firstElementChild;
  };
  const money = n => "$" + n;
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function rng(seed) {
    let t = seed + 0x6D2B79F5 >>> 0;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function buildSchedule(v) {
    const base = hashStr(v.id);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const out = [];
    for (let d = 0; d < 14; d++) {
      const date = new Date(today);
      date.setDate(today.getDate() + d);
      const r = rng(base + d * 2654435761);
      out.push({
        date,
        available: d === 0 ? r > v.bookedBias + 0.15 : r > v.bookedBias
      });
    }
    return out;
  }

  /* ---------- fleet grid ---------- */
  const grid = $("#fleetGrid");
  const filtersWrap = $("#fleetFilters");
  let activeFilter = "all";
  const CHEV = `<svg class="vrow__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`;
  function availability(v) {
    const sched = buildSchedule(v);
    const idx = sched.findIndex(d => d.available);
    if (idx < 0) return {
      cls: "no",
      label: "Fully booked"
    };
    if (idx === 0) return {
      cls: "ok",
      label: "Available today"
    };
    if (idx === 1) return {
      cls: "ok",
      label: "Available tomorrow"
    };
    const d = sched[idx].date;
    return {
      cls: "ok",
      label: `Free from ${DOW[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`
    };
  }
  function rowHTML(v) {
    const a = availability(v);
    return `
      <button class="vrow" data-id="${v.id}" data-category="${v.category}" role="listitem" aria-label="View ${v.name}">
        <span class="vrow__media"><img class="vrow__img" src="../img/side-${v.id}.png" alt="${v.name}" loading="lazy" onerror="this.onerror=null;this.classList.add('vrow__img--photo');this.src='${v.img}'"></span>
        <span class="vrow__main">
          <span class="vrow__cat">${v.categoryLabel}</span>
          <span class="vrow__name">${v.name}</span>
          <span class="vrow__specs">${v.seats} &middot; ${v.transmission} &middot; ${v.fuel} &middot; ${v.engine}</span>
        </span>
        <span class="vrow__avail vrow__avail--${a.cls}"><i class="dot dot--${a.cls}"></i>${a.label}</span>
        <span class="vrow__price"><b>from ${money(v.pricePerDay)}</b><small>per day</small></span>
        ${CHEV}
      </button>`;
  }
  function renderFilters() {
    FILTERS.forEach(f => filtersWrap.appendChild(el(`<button class="filter-btn${f.id === activeFilter ? " is-active" : ""}" data-filter="${f.id}" role="tab">${f.label}</button>`)));
  }
  function renderGrid() {
    grid.innerHTML = "";
    VEHICLES.filter(v => activeFilter === "all" || v.category === activeFilter).forEach(v => grid.appendChild(el(rowHTML(v))));
  }
  filtersWrap.addEventListener("click", e => {
    const b = e.target.closest(".filter-btn");
    if (!b) return;
    activeFilter = b.dataset.filter;
    filtersWrap.querySelectorAll(".filter-btn").forEach(x => x.classList.toggle("is-active", x === b));
    renderGrid();
  });
  grid.addEventListener("click", e => {
    const c = e.target.closest(".vrow");
    if (!c) return;
    const v = VEHICLES.find(x => x.id === c.dataset.id);
    if (v) openModal(v, c);
  });

  /* ---------- terrain grid ---------- */
  function renderTerrain() {
    const t = $("#terrainGrid");
    if (!t || typeof TERRAINS === "undefined") return;
    TERRAINS.forEach(d => t.appendChild(el(`
      <article class="terrain-card reveal">
        <span class="terrain-card__img" style="background-image:url('${d.img}')"></span>
        <span class="terrain-card__scrim"></span>
        <span class="terrain-card__body">
          <span class="terrain-card__name">${d.name}</span>
          <span class="terrain-card__blurb">${d.blurb}</span>
        </span>
      </article>`)));
  }

  /* ---------- modal ---------- */
  const modal = $("#vehicleModal");
  const modalBody = $("#modalBody");
  let lastFocused = null;
  let state = null;
  function spec(k, v) {
    return `<div class="spec"><div class="spec__k">${k}</div><div class="spec__v">${v}</div></div>`;
  }
  function modalHTML(v) {
    state = {
      v,
      sched: buildSchedule(v)
    };
    const specs = [spec("Engine", v.engine), spec("Transmission", v.transmission), spec("Drivetrain", v.drivetrain), spec("Fuel", v.fuel), spec("Capacity", v.seats), spec("Ground clearance", v.clearance)].join("");
    const features = v.features.map(f => `<span class="feature">${f}</span>`).join("");
    return `
      <div class="modal__hero">
        <div class="modal__hero-img" style="background-image:url('${v.img}')"></div>
        <div class="modal__hero-scrim"></div>
        <div class="modal__hero-body">
          <div>
            <div class="modal__cat">${v.categoryLabel}</div>
            <h2 class="modal__name" id="modalTitle">${v.name}</h2>
            <p class="modal__tag">${v.tagline}</p>
          </div>
          <div class="modal__price"><b>${money(v.pricePerDay)}</b><span>/ day</span></div>
        </div>
      </div>
      <div class="modal__scroll">
        <p class="modal__label">Specifications</p>
        <div class="specs">${specs}</div>
        <p class="modal__label">Expedition-ready</p>
        <div class="features">${features}</div>
        <p class="modal__label">Availability — next 14 days</p>
        <div class="sched">
          <div class="sched__head">
            <div class="sched__legend"><span><i class="dot dot--ok"></i> Available</span><span><i class="dot dot--no"></i> Booked</span></div>
          </div>
          <div class="sched__days" id="schedDays"></div>
          <div class="sched__summary" id="schedSummary"></div>
        </div>
      </div>`;
  }
  function renderDays() {
    const wrap = $("#schedDays");
    wrap.innerHTML = "";
    state.sched.forEach((d, i) => {
      wrap.appendChild(el(`
        <div class="day ${d.available ? "available" : "booked"}" data-i="${i}" ${d.available ? 'tabindex="0" role="button"' : ""}>
          <span class="day__dow">${DOW[d.date.getDay()]}</span>
          <span class="day__d">${d.date.getDate()}</span>
          <span class="day__m">${MON[d.date.getMonth()]}</span>
          <span class="day__s"></span>
        </div>`));
    });
    const first = state.sched.findIndex(d => d.available);
    selectDay(first >= 0 ? first : -1);
  }
  function selectDay(i) {
    state.sel = i;
    $("#schedDays").querySelectorAll(".day").forEach(p => p.classList.toggle("sel", Number(p.dataset.i) === i));
    const sum = $("#schedSummary");
    const v = state.v;
    if (i < 0) {
      sum.innerHTML = `<div><b>Fully booked this fortnight</b><small>Contact us — we'll find you another rig or new dates.</small></div>
        <a class="btn btn--solid" href="mailto:info@drivemongolia.com?subject=${encodeURIComponent("Availability: " + v.name)}">Ask about dates</a>`;
      return;
    }
    const d = state.sched[i];
    const dateStr = `${DOW[d.date.getDay()]}, ${d.date.getDate()} ${MON[d.date.getMonth()]}`;
    const body = `Hi Drive Mongolia,%0D%0A%0D%0AI'd like to reserve the ${v.name} (${money(v.pricePerDay)}/day).%0D%0AStart date: ${dateStr}%0D%0ANumber of days: %0D%0APickup: Ulaanbaatar%0D%0A%0D%0AThanks!`;
    const mailto = `mailto:info@drivemongolia.com?subject=${encodeURIComponent("Reservation: " + v.name)}&body=${body}`;
    sum.innerHTML = `<div><b>${dateStr} · Available</b><small>${money(v.pricePerDay)} / day · self-drive from Ulaanbaatar</small></div>
      <a class="btn btn--solid" href="${mailto}">Reserve this date</a>`;
  }
  modal.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) {
      closeModal();
      return;
    }
    const p = e.target.closest(".day.available");
    if (p) selectDay(Number(p.dataset.i));
  });
  modal.addEventListener("keydown", e => {
    const p = e.target.closest(".day.available");
    if (p && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      selectDay(Number(p.dataset.i));
    }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
  function openModal(v, trigger) {
    lastFocused = trigger || document.activeElement;
    modalBody.innerHTML = modalHTML(v);
    renderDays();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const c = modal.querySelector(".modal__close");
    if (c) c.focus();
  }
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    state = null;
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  /* ---------- chrome: header, nav, icons, counters, reveal ---------- */
  function paintIcons() {
    document.querySelectorAll("[data-icon]").forEach(n => {
      const k = n.getAttribute("data-icon");
      if (I[k]) n.innerHTML = I[k];
    });
  }
  const header = $(".header");
  const hero = $(".hero");
  function onScroll() {
    const threshold = hero ? hero.offsetHeight - 90 : 200;
    header.classList.toggle("solid", window.scrollY > threshold);
  }
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  const burger = $("#burger");
  const nav = $("#nav");
  burger.addEventListener("click", () => {
    const o = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(o));
  });
  nav.addEventListener("click", e => {
    if (e.target.closest("a")) {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
  function animateCounters() {
    document.querySelectorAll("[data-count]").forEach(n => {
      const target = Number(n.dataset.count);
      const suffix = n.dataset.suffix || "";
      const dur = 1500,
        start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        n.textContent = Math.round(target * e) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(start);
    });
  }
  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(i => i.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(ents => ents.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    }), {
      threshold: 0.12
    });
    items.forEach(i => io.observe(i));
  }
  function init() {
    renderFilters();
    renderGrid();
    renderTerrain();
    paintIcons();
    onScroll();
    animateCounters();
    setupReveal();
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);else init();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/app.js", error: String((e && e.message) || e) }); }

// uploads/data.js
try { (() => {
/* =========================================================================
   Drive Mongolia — Fleet data (photo-led, real vehicles)
   Plain global array (classic <script>, works on file://).
   ========================================================================= */

const VEHICLES = [{
  id: "lc76",
  name: "Toyota Land Cruiser 76",
  category: "4x4",
  categoryLabel: "Self-Drive 4×4",
  tagline: "The hardtop legend that goes where roads quit.",
  img: "../img/canyon.webp",
  pricePerDay: 150,
  seats: "5 seats",
  transmission: "Manual",
  fuel: "Diesel",
  drivetrain: "Part-time 4WD + diff lock",
  engine: "4.2L 1HZ Diesel",
  clearance: "230 mm",
  type: "Hardtop wagon",
  bookedBias: 0.25,
  features: ["Snorkel", "Dual fuel tanks", "Roof rack + rooftop tent", "Recovery kit", "Fridge box", "GPS + offline maps"]
}, {
  id: "lc105",
  name: "Toyota Land Cruiser 105",
  category: "4x4",
  categoryLabel: "Self-Drive 4×4",
  tagline: "Coil-sprung comfort for the long haul across the steppe.",
  img: "../img/landcruiser.webp",
  pricePerDay: 170,
  seats: "7 seats",
  transmission: "Automatic",
  fuel: "Petrol",
  drivetrain: "Full-time 4WD",
  engine: "4.5L 1FZ Petrol",
  clearance: "210 mm",
  type: "Station wagon",
  bookedBias: 0.30,
  features: ["Roof rack", "Dual battery", "Recovery kit", "Long-range tank", "GPS + offline maps", "Camping kit"]
}, {
  id: "uaz-van",
  name: "UAZ-452 Expedition Van",
  category: "van",
  categoryLabel: "Expedition Van",
  tagline: "The indestructible Russian 'Furgon' — a Mongolian icon.",
  img: "../img/offroad.webp",
  pricePerDay: 120,
  seats: "6 seats",
  transmission: "Manual",
  fuel: "Petrol",
  drivetrain: "Selectable 4WD",
  engine: "2.7L 4WD",
  clearance: "205 mm",
  type: "4×4 van",
  bookedBias: 0.35,
  features: ["Bull bar + winch", "Roof rack", "Dual battery", "Recovery kit", "Spare wheels", "Tool kit"]
}, {
  id: "uaz-camper",
  name: "UAZ Overland Camper",
  category: "van",
  categoryLabel: "Camper Van",
  tagline: "Your bed, kitchen and 4×4 — all in one pop-top.",
  img: "../img/van-camper.webp",
  pricePerDay: 160,
  seats: "Sleeps 2",
  transmission: "Manual",
  fuel: "Petrol",
  drivetrain: "Selectable 4WD",
  engine: "2.7L 4WD",
  clearance: "205 mm",
  type: "Pop-top camper",
  bookedBias: 0.40,
  features: ["Pop-top sleeping tent", "Kitchenette + gas", "Fridge + water tank", "Solar + USB", "Full bedding", "Camp chairs & table"]
}, {
  id: "moto",
  name: "Adventure Dual-Sport",
  category: "moto",
  categoryLabel: "Motorbike",
  tagline: "Two wheels, no fences — the purest way to ride Mongolia.",
  img: "../img/rally.webp",
  pricePerDay: 70,
  seats: "1 rider",
  transmission: "Manual",
  fuel: "Petrol",
  drivetrain: "Chain drive",
  engine: "250–650cc",
  clearance: "280 mm",
  type: "Dual-sport",
  bookedBias: 0.45,
  features: ["Panniers + top box", "Hand guards", "Skid plate", "Tank bag", "Helmet & riding gear", "Tool & tube kit"]
}, {
  id: "atv",
  name: "Yamaha Grizzly ATV",
  category: "moto",
  categoryLabel: "ATV / Quad",
  tagline: "Big-bore quad that floats over the roughest ground.",
  img: "../img/moto.webp",
  pricePerDay: 90,
  seats: "1–2 riders",
  transmission: "Automatic (CVT)",
  fuel: "Petrol",
  drivetrain: "On-demand 4WD",
  engine: "686cc Single",
  clearance: "290 mm",
  type: "4×4 ATV",
  bookedBias: 0.30,
  features: ["Winch", "Storage boxes", "Hand guards", "Helmet & gear", "Spare fuel can", "Recovery strap"]
}];
const FILTERS = [{
  id: "all",
  label: "All vehicles"
}, {
  id: "4x4",
  label: "Self-Drive 4×4"
}, {
  id: "van",
  label: "Expedition Vans"
}, {
  id: "moto",
  label: "Moto & ATV"
}];

/* Terrains for the "Where you'll go" section */
const TERRAINS = [{
  name: "The Gobi Desert",
  img: "../img/gobi.webp",
  blurb: "Flaming cliffs, singing dunes and dinosaur country in the far south."
}, {
  name: "Altai Tavan Bogd",
  img: "../img/mountains.webp",
  blurb: "Glaciers, eagle hunters and Mongolia's highest, wildest peaks."
}, {
  name: "Khövsgöl & the North",
  img: "../img/reindeer.webp",
  blurb: "Taiga forest, reindeer herders and the deep-blue 'Dark Lake'."
}, {
  name: "The Eternal Steppe",
  img: "../img/dunes.webp",
  blurb: "Endless grassland, wild horses and skies that never end."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FeatureTag = __ds_scope.FeatureTag;

__ds_ns.FilterTab = __ds_scope.FilterTab;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.LinkArrow = __ds_scope.LinkArrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.SpecGrid = __ds_scope.SpecGrid;

__ds_ns.TerrainCard = __ds_scope.TerrainCard;

__ds_ns.VehicleRow = __ds_scope.VehicleRow;

})();
