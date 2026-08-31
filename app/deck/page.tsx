import Link from "next/link";
import { HughesLogotype } from "../../components/hughes-logotype";

const cards = [
  ["Stress", "The Internet Imp"], ["Buster", "Signal Shaman"], ["Stress", "Reply-All Demon"], ["Buster", "Swift Un-sender"], ["Stress", "Endless Inbox"],
  ["Buster", "Email Exterminator"], ["Stress", "The Imposter"], ["Buster", "Cheerleading Chimpanzee"], ["Stress", "Handshake Hawk"], ["Buster", "Social Skill Snail"],
  ["Stress", "Pests of Procrastination"], ["Buster", "Ant Ambassador"], ["Stress", "Lost Key Kraken"], ["Buster", "Lost & Found Falcon"], ["Stress", "The Over-thinker"],
  ["Buster", "Thought-Tamer"], ["Stress", "Bill-Zapper"], ["Buster", "Bill-Zapper"], ["Stress", "Traffic Turtle"], ["Buster", "Oratory Owl"],
  ["Stress", "Battery Goblin"], ["Buster", "Power Bank Panda"], ["Stress", "Calendar Hydra"], ["Buster", "Boundary Badger"], ["Wildcard", "Are You Awake Now?"],
];

export default function DeckPage() {
  return <main className="deck-page"><header className="site-header shell"><Link className="wordmark" href="/"><HughesLogotype className="site-logo" /><span>STRESS BUSTERS</span></Link><nav aria-label="Primary navigation"><Link href="/">Home</Link><Link href="/collateral">Collateral</Link></nav></header><section className="deck-intro shell"><p className="eyebrow">Edition 01 / 25 cards</p><h1>Find your<br /><span>counterpart.</span></h1><p>12 problems. 12 busters. One wildcard. No correct strategy.</p></section><section className="deck-grid shell">{cards.map(([kind,title],index)=><article className={`deck-tile art-${index%15}`} key={title+index}><div><span>{kind}</span><small>{String(index+1).padStart(2,"0")}</small></div><h2>{title}</h2></article>)}</section><footer className="footer shell"><p><HughesLogotype className="footer-logo" /><span>STRESS BUSTERS</span></p><Link href="/collateral">Print edition ↗</Link><p className="muted">All proceeds go to Koalas.</p></footer></main>;
}
