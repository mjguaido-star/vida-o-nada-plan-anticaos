/* Plan Anticaos — app shell. Composes the sections + waitlist state. */
function App() {
  const [joined, setJoined] = React.useState(false);

  const scrollToCierre = () => {
    const el = document.getElementById("cierre");
    if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: "smooth" });
  };
  const onSubmit = () => setJoined(true);

  return (
    <React.Fragment>
      <Nav onJoin={scrollToCierre} />
      <main>
        <Hero onJoin={scrollToCierre} />
        <Problema />
        <Transformacion />
        <Programa />
        <Manifiesto />
        <Precio onJoin={scrollToCierre} />
        <Cierre joined={joined} onSubmit={onSubmit} />
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
