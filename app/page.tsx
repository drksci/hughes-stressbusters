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

      {/* Hero */}
      <section className="labs-hero shell">
        <p className="eyebrow">Hughesss · Edition 01</p>
        <h1>Stress Busters.<br /><em>No correct answers.</em></h1>
        <p>Match the everyday disaster with its wildly impractical rescue. 25 cards. Play it with friends, on a table, after a long week.</p>
        <div className="labs-actions">
          <Link className="button" href="/deck">Browse the 25 cards ↗</Link>
          <Link className="text-link" href="/collateral">Publishing Kit →</Link>
        </div>
      </section>

      {/* Card mockup hero */}
      <section className="hero-cards shell">
        <div className="mockup-stage">

          {/* Cover card */}
          <div className="mockup-card mockup-stress">
            <HughesLogotype className="card-logo" />
            <h2>STRESS<br />BUSTERS!</h2>
            <img className="card-illustration" src="/stress-busters-illustration.png" alt="Stress Busters cover illustration" />
            <div className="mockup-footer">ARE YOU AWAKE NOW?</div>
          </div>

          {/* Buster card */}
          <div className="mockup-card mockup-buster">
            <div className="mockup-label">STRESS BUSTERS</div>
            <img className="card-two-illustration" src="/art-iscream.jpg" alt="I Scream card illustration" />
            <h2>I<br />SCREAM!</h2>
            <div className="mockup-footer">A MATCHING GAME FOR UNMATCHED DAYS</div>
          </div>

          {/* Stress card */}
          <div className="mockup-card mockup-challenge">
            <div className="mockup-label">STRESS</div>
            <img className="card-stress-illustration" src="/art-stress.jpg" alt="Calendar Hydra stress card illustration" />
            <h2>Calendar<br />Hydra</h2>
            <div className="mockup-footer">CHALLENGE · 21</div>
          </div>

        </div>
      </section>

      {/* Koala */}
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
