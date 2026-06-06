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
  return React.createElement(React.Fragment, null, React.createElement(Nav, {
    onJoin: scrollToCierre
  }), React.createElement("main", null, React.createElement(Hero, {
    onJoin: scrollToCierre
  }), React.createElement(Problema, null), React.createElement(Transformacion, null), React.createElement(Programa, null), React.createElement(Manifiesto, null), React.createElement(Cierre, {
    joined: joined,
    onSubmit: onSubmit
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));