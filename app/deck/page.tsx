import Link from "next/link";
import { HughesLogotype } from "../../components/hughes-logotype";

const cards: [string, string][] = [
  ["STRESS", "The Internet Imp"],
  ["BUSTER", "The Signal Shaman"],
  ["STRESS", "The Reply-All Demon"],
  ["BUSTER", "The Swift Un-sender"],
  ["STRESS", "The Endless Inbox"],
  ["BUSTER", "Email Exterminator"],
  ["STRESS", "The Imposter"],
  ["BUSTER", "Cheerleading Chimpanzee"],
  ["STRESS", "Handshake Hawk"],
  ["BUSTER", "Social Skill Snail"],
  ["STRESS", "Pests of Procrastination"],
  ["BUSTER", "Ant Ambassador"],
  ["STRESS", "Lost Key Kraken"],
  ["BUSTER", "Lost & Found Falcon"],
  ["STRESS", "The Over-thinker"],
  ["BUSTER", "Thought-Tamer"],
  ["STRESS", "Bill-Zapper"],
  ["BUSTER", "Bill-Zapper, Actually Helpful"],
  ["STRESS", "Traffic Turtle"],
  ["BUSTER", "Oratory Owl"],
  ["STRESS", "Battery Goblin"],
  ["BUSTER", "Power Bank Panda"],
  ["STRESS", "Calendar Hydra"],
  ["BUSTER", "Boundary Badger"],
  ["WILD", "Are You Awake Now?"],
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

      <section className="deck-grid shell" aria-label="All 25 cards">
        {cards.map(([kind, title], index) => (
          <article className={`deck-tile tile-${kind.toLowerCase()} art-${index}`} key={title}>
            <div>
              <span>{kind}</span>
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
