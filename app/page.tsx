import Link from "next/link";
import { HughesLogotype } from "../components/hughes-logotype";

export default function Home() {
  return (
    <main className="labs-home">
      <header className="site-header shell">
        <Link className="wordmark" href="/"><HughesLogotype className="site-logo" /><span>STRESS BUSTERS</span></Link>
        <nav aria-label="Primary navigation">
          <Link href="/deck">The Cards</Link>
          <Link href="/collateral">Publishing Kit</Link>
          <Link className="button" href="/deck">Play ↗</Link>
        </nav>
      </header>

      <section className="labs-hero shell">
        <p className="eyebrow">Hughesss · Edition 01</p>
        <h1>Stress Busters.<br /><em>25 cards.</em><br /><strong>No correct answers.</strong></h1>
        <p>Match the everyday disaster with its wildly impractical rescue. Play it with friends, on a table, after a long week. Someone will win. It won't help.</p>
        <div className="labs-actions">
          <Link className="button" href="/deck">Browse the 25 cards ↗</Link>
          <Link className="text-link" href="/collateral">Publishing Kit →</Link>
        </div>
      </section>

      <section className="deck-preview" aria-label="Card previews">
        <article className="labs-card labs-card-cover">
          <span>WILDCARD</span>
          <h2>ARE YOU<br />AWAKE NOW?</h2>
          <small>STRESS BUSTERS · EDITION 01</small>
        </article>
        <article className="labs-card labs-card-two">
          <span>BUSTER</span>
          <h2>Brain Off.<br />Vibes On.</h2>
          <small>RESCUE · 07</small>
        </article>
        <article className="labs-card labs-card-three">
          <span>STRESS</span>
          <h2>The Calendar<br />Hydra</h2>
          <small>CHALLENGE · 11</small>
        </article>
      </section>

      <section className="koala-strip shell">
        <img src="/koalas-friends-of-the-koala.jpeg" alt="A koala and joey among eucalyptus leaves" />
        <div>
          <p className="eyebrow">A little serious bit</p>
          <h2>$5 per deck goes to koalas.</h2>
          <p>Every sale puts $5 toward the rescue and care work of Friends of the Koala — a real charity doing real things in northern NSW.</p>
          <a className="text-link" href="https://friendsofthekoala.org/" target="_blank" rel="noreferrer">Friends of the Koala ↗</a>
        </div>
      </section>

      <footer className="footer shell">
        <p><HughesLogotype className="footer-logo" /><span>STRESS BUSTERS</span></p>
        <Link href="/deck">Explore all 25 cards ↗</Link>
        <p className="muted">25 cards · 12 pairs · 1 wildcard</p>
      </footer>
    </main>
  );
}
