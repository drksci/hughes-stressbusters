import Link from "next/link";
import { HughesLogotype } from "../components/hughes-logotype";

export default function Home() {
  return <main className="labs-home">
    <header className="site-header shell"><Link className="wordmark" href="/"><HughesLogotype className="site-logo" /><span>STRESS BUSTERS</span></Link><nav aria-label="Primary navigation"><Link href="/deck">The deck</Link><Link href="/collateral">Collateral</Link></nav></header>
    <section className="labs-hero shell"><p className="eyebrow">Hughesss presents</p><h1>A small card game<br /><span>for big little stresses.</span></h1><p>Match the everyday nuisance with its wildly impractical rescue. Play it with friends, on a table, after a long week.</p><div className="labs-actions"><Link className="button" href="/deck">Meet the 25 cards <span>↗</span></Link><Link className="text-link" href="/collateral">See print edition ↗</Link></div></section>
    <section className="deck-preview shell" aria-label="Card previews"><article className="labs-card labs-card-cover"><span>HUGHESSS</span><h2>STRESS<br />BUSTERS!</h2><small>ARE YOU AWAKE NOW?</small></article><article className="labs-card labs-card-two"><span>BUSTER</span><h2>SIGNAL<br />SHAMAN</h2><small>02 / rescue</small></article><article className="labs-card labs-card-three"><span>STRESS</span><h2>REPLY-ALL<br />DEMON</h2><small>03 / challenge</small></article></section>
    <section className="koala-strip shell"><img src="/koalas-friends-of-the-koala.jpeg" alt="A koala and joey among eucalyptus leaves" /><div><p className="eyebrow">A little serious bit</p><h2>All proceeds go to Koalas.</h2><p>Every sale supports the rescue and care work of Friends of the Koala.</p><a className="text-link" href="https://friendsofthekoala.org/" target="_blank" rel="noreferrer">Friends of the Koala ↗</a></div></section>
    <footer className="footer shell"><p><HughesLogotype className="footer-logo" /><span>STRESS BUSTERS</span></p><Link href="/deck">Explore the deck ↗</Link><p className="muted">25 cards / 12 pairs / 1 wildcard</p></footer>
  </main>;
}
