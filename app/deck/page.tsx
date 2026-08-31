import Link from "next/link";
import { HughesLogotype } from "../../components/hughes-logotype";

const cards: [string, string, string][] = [
  ["STRESS",  "The Reply-All Demon",       "01"],
  ["BUSTER",  "The Glorious Unsend",        "02"],
  ["STRESS",  "The Infinite Inbox",         "03"],
  ["BUSTER",  "Delete. Delete. Delete.",    "04"],
  ["STRESS",  "Imposter Syndrome",          "05"],
  ["BUSTER",  "Fake It Harder",             "06"],
  ["STRESS",  "The Sweaty Handshake",       "07"],
  ["BUSTER",  "The Power Nod",              "08"],
  ["STRESS",  "Procrastination Spiral",     "09"],
  ["BUSTER",  "The Five-Minute Lie",        "10"],
  ["STRESS",  "Lost Key Kraken",            "11"],
  ["BUSTER",  "Panic Mode Activated",       "12"],
  ["STRESS",  "The Overthink",              "13"],
  ["BUSTER",  "Brain Off. Vibes On.",       "14"],
  ["STRESS",  "The Bill Collector",         "15"],
  ["BUSTER",  "Not Today, Debt",            "16"],
  ["STRESS",  "Traffic Purgatory",          "17"],
  ["BUSTER",  "Deep Breaths, Dummy",        "18"],
  ["STRESS",  "Battery Goblin",             "19"],
  ["BUSTER",  "Someone Else's Charger",     "20"],
  ["STRESS",  "Calendar Hydra",             "21"],
  ["BUSTER",  "Cancel Everything",          "22"],
  ["STRESS",  "The Group Chat Mob",         "23"],
  ["BUSTER",  "Silent Exit",                "24"],
  ["WILD",    "Are You Awake Now?",         "★"],
];

export default function DeckPage() {
  return (
    <main className="deck-page">
      <header className="site-header shell">
        <Link className="wordmark" href="/"><HughesLogotype className="site-logo" /><span>STRESS BUSTERS</span></Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/collateral">Publishing Kit</Link>
          <Link className="button" href="/collateral">Get the Kit ↗</Link>
        </nav>
      </header>

      <section className="deck-intro shell">
        <p className="eyebrow">Edition 01 · 25 cards</p>
        <h1>Find your<br /><em>counterpart.</em></h1>
        <p>12 stresses. 12 rescues. One wildcard. No correct strategy — just the satisfying thud of a perfect match.</p>
      </section>

      <section className="deck-grid" aria-label="All 25 cards">
        {cards.map(([kind, title, num]) => (
          <article
            className={`deck-tile tile-${kind.toLowerCase()}`}
            key={title}
          >
            <div>
              <span>{kind}</span>
              <small>{num}</small>
            </div>
            <h2>{title}</h2>
          </article>
        ))}
      </section>

      <footer className="footer shell">
        <p><HughesLogotype className="footer-logo" /><span>STRESS BUSTERS</span></p>
        <Link href="/collateral">Publishing Kit ↗</Link>
        <p className="muted">All proceeds go to koalas.</p>
      </footer>
    </main>
  );
}
