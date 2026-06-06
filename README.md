# Plan Anticaos — Landing page (VIDA O NADA)

Cinematic landing page for **Plan Anticaos**, the 4-week group program.
Built from the *Vida o Nada* design system handoff — **visual style untouched**.

## Run locally
Static site, no build step. From this folder:

```bash
python3 -m http.server 8731
# open http://localhost:8731
```

## Structure (self-contained)
- `index.html` — shell: loads `styles.css`, the DS bundle, React + Babel, then the sections.
- `sections.jsx` — every section (Nav, Hero, Problema, Transformación, Programa, Manifiesto, Precio, Cierre).
- `app.jsx` — composition + waitlist state.
- `styles.css` + `tokens/` — design tokens (colors, type, spacing, fonts).
- `_ds_bundle.js` — compiled design-system components (`window.VidaONadaDesignSystem_989a45`).
- `assets/` — fonts, icons (ink/amber/cream), logos, illustrations.

## Page flow — Caos → Dirección → Acción
1. **Hero** — "No te falta vida. Te sobra ruido."
2. **Problema** (Caos) — "No estás perdida. Estás saturada." + para quién es / no es.
3. **Transformación** (Dirección) — "No sé qué hacer" → "Ya sé por dónde empezar".
4. **Programa** (Dirección→Acción) — las 4 semanas.
5. **Manifiesto** — "Tienes una vida. No la vivas como si tuvieras dos."
6. **Precio** — 247€ / 297€ / 397€.
7. **Cierre** (Acción) — "¿Vas a vivir tu vida o vas a seguir posponiéndola?" + captura de email.

## ⚠️ Before launch — TODO
- **`[PLACEHOLDER]` Waitlist backend.** The email form in `Cierre` (app.jsx → `onSubmit`)
  currently only fakes success (sets `joined = true`). Wire it to a real provider
  (Kit/ConvertKit, Formspree, etc.) before going live so emails are actually captured.
- **Precio / plazas / fechas** come straight from the design (247€/297€/397€,
  "1ª edición", "plazas limitadas"). Confirm they're correct before publishing.

## Deploy
Pure static — deployable as-is to Vercel/Netlify/any static host.
For Vercel: from this folder, `vercel deploy` (or connect the repo). No build command needed.
