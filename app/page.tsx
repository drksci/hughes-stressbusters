import Link from "next/link";

const pairs = [
  ["01", "The pitch", "The MD intercepts a hideous TV proposal and sends it to marketing with one note: we need more publicity."],
  ["02", "Channel Vinnie", "Your friend's cat refuses to do anything he does not want to do. You know the feeling."],
  ["03", "Take five", "Lock the office door. Do a headstand. Reset the room. The correct response is rarely the obvious one."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <Link className="wordmark" href="/">HUGHES / STRESS BUSTERS</Link>
        <nav aria-label="Primary navigation">
          <Link href="#how-it-works">How it works</Link>
          <Link href="/collateral">Collateral <span className="arrow">↗</span></Link>
        </nav>
      </header>

      <section className="hero shell">
        <p className="eyebrow">A card game for highly specific emergencies</p>
        <h1>Turn the pressure<br /><span>into play.</span></h1>
        <div className="hero-foot">
          <p className="lede">Stress Busters is a small, satisfying, unstrategic game about matching the moment with the right way out.</p>
          <div className="hero-actions"><Link className="button" href="#how-it-works">See the rules <span>↓</span></Link><span className="edition">Edition 01<br />Hughes / Brisbane</span></div>
        </div>
      </section>

      <section className="rule-strip" aria-label="Game summary"><div className="shell rule-grid"><span>10 cards</span><span>5 pairs</span><span>1 joker</span><span>0 bad ideas</span></div></section>

      <section id="how-it-works" className="section shell split-section">
        <div><p className="eyebrow">01 / The premise</p><h2>Every problem<br />has a counterpart.</h2></div>
        <div className="section-copy"><p>Draw a situation. Find its stress buster. Pick up, throw out, and keep moving until all five pairs are down.</p><p>The game is intentionally low stakes: a brunch-table ritual for the particular chaos of work, friends, and the things nobody put in the brief.</p><Link className="text-link" href="/collateral">Explore the physical edition <span>↗</span></Link></div>
      </section>

      <section className="section shell pair-section"><div className="section-heading"><p className="eyebrow">02 / A few situations</p><p className="muted">The cards are blank until the trouble arrives.</p></div><div className="pair-grid">{pairs.map(([number, title, body]) => <article className="pair-card" key={number}><div className="card-top"><span>{number}</span><span>STRESS CARD</span></div><h3>{title}</h3><p>{body}</p><div className="card-mark">H / SB</div></article>)}</div></section>

      <footer className="footer shell"><p>HUGHES [BRAND] / STRESS BUSTERS</p><Link href="/collateral">View collateral ↗</Link><p className="muted">Made for the moment after “I have an idea.”</p></footer>
    </main>
  );
}
