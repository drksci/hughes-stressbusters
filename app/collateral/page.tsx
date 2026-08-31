import Link from "next/link";
import { HughesLogotype } from "../../components/hughes-logotype";
import "./collateral.css";

export default function Collateral() {
  return (
    <main>
      <header className="site-header shell">
        <Link className="wordmark" href="/"><HughesLogotype className="site-logo" /><span>STRESS BUSTERS</span></Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/deck">The Cards</Link>
          <Link className="active" href="/collateral">Publishing Kit <span className="arrow">↗</span></Link>
        </nav>
      </header>

      <section className="kit-hero">
        <div className="shell">
          <p className="eyebrow">A Hughes Publishing Kit — Edition 01</p>
          <h1>Ready to<br /><em>print, pitch,</em><br />and play.</h1>
          <p className="lede">Everything you need to take Stress Busters from screen to table — print spec, brand system, packaging, and the numbers.</p>
          <div className="kit-hero-actions">
            <Link className="button" href="/deck">Browse the 25 cards ↗</Link>
            <a className="text-link" href="#print-spec">Jump to print spec ↓</a>
          </div>
        </div>
      </section>

      <div className="rule-strip stat-strip">
        <div className="rule-grid shell">
          <span>25 cards</span>
          <span>70 × 120 mm</span>
          <span>350 gsm stock</span>
          <span>Edition 01</span>
        </div>
      </div>

      <section className="section shell game-intro">
        <div className="game-intro-left">
          <p className="eyebrow">01 / The Game</p>
          <h2>Match the panic.<br />Find the rescue.</h2>
          <p>Stress Busters is a matching card game about everyday disasters and the wildly impractical ways we deal with them. Fast to learn, satisfying to play, better after a long week.</p>
          <p>3–6 players · 20 minutes · Fits in a pocket.</p>
        </div>
        <div className="game-intro-right">
          <div className="play-steps">
            <div className="play-step">
              <span className="step-num">01</span>
              <div>
                <strong>Flip a Stress card</strong>
                <p>"The Reply-All Demon." "Calendar Hydra." You know these creatures personally.</p>
              </div>
            </div>
            <div className="play-step">
              <span className="step-num">02</span>
              <div>
                <strong>Play your Buster</strong>
                <p>Everyone plays their best rescue card. "Deep Breaths, Dummy." "Delete. Delete. Delete." The wilder the better.</p>
              </div>
            </div>
            <div className="play-step">
              <span className="step-num">03</span>
              <div>
                <strong>Pick a winner</strong>
                <p>The Stress-holder picks the most satisfying match. Most pairs wins. No correct answers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">02 / Hi-fi mockups</p>
          <p className="muted">Direction for a compact, tactile edition.</p>
        </div>
        <div className="mockup-stage">
          <div className="mockup-card mockup-stress">
            <HughesLogotype className="card-logo" />
            <h2>STRESS<br />BUSTERS!</h2>
            <img className="card-illustration" src="/stress-busters-illustration.png" alt="Line drawing of a human face beside a skull" />
            <div className="mockup-footer">ARE YOU AWAKE NOW?</div>
          </div>
          <div className="mockup-card mockup-buster">
            <div className="mockup-label">STRESS BUSTERS</div>
            <img className="card-two-illustration" src="/art-iscream.jpg" alt="I Scream card illustration" />
            <h2>I<br />SCREAM!</h2>
            <div className="mockup-footer">A MATCHING GAME FOR UNMATCHED DAYS</div>
          </div>
          <div className="mockup-card mockup-blank">
            <div className="mockup-label">STRESS BUSTERS</div>
            <div className="blank-lines"><span></span><span></span><span></span></div>
            <p>WRITE YOUR<br />OWN BUSTER</p>
            <div className="mockup-footer">70 × 120 MM / BLANK STOCK</div>
          </div>
        </div>
        <p className="mockup-caption">Cover · Game card · Blank stock — 70 × 120 mm · 350 gsm uncoated · Rounded corners</p>
      </section>

      <section id="print-spec" className="section shell split-section specs">
        <div>
          <p className="eyebrow">03 / Print spec</p>
          <h2>Simple materials.<br />Strong point of view.</h2>
          <p className="spec-note">Optimised for short-run prototype quantities. Confirmed for offset and digital print.</p>
        </div>
        <div className="spec-list">
          <div><span>Format</span><strong>70 × 120 mm · Playing card</strong></div>
          <div><span>Stock</span><strong>350 gsm uncoated · Natural white</strong></div>
          <div><span>Finish</span><strong>Black ink · blind deboss · 3 mm rounded corners</strong></div>
          <div><span>Set size</span><strong>25 cards · Tuck box included</strong></div>
          <div><span>Colours</span><strong>1-colour black inside · Cover: 4-colour process</strong></div>
          <div><span>Bleed</span><strong>3 mm all sides · Safe zone 5 mm</strong></div>
        </div>
      </section>

      <section className="section shell wireframe-section">
        <div className="section-heading">
          <p className="eyebrow">04 / Packaging</p>
          <p className="muted">One tuck box. No visual noise.</p>
        </div>
        <div className="box-wireframe">
          <div className="box-top">
            <HughesLogotype className="box-logo" />
            <span>SB—01</span>
          </div>
          <div className="box-center">
            <span>STRESS</span>
            <strong>BUSTERS</strong>
            <small>25 CARDS · TUCK BOX · EDITION 01</small>
          </div>
          <div className="box-side">70 × 120 MM · 350 GSM</div>
        </div>
      </section>

      <section className="section shell brand-section">
        <div className="section-heading">
          <p className="eyebrow">05 / Brand system</p>
          <p className="muted">Mark, type, and palette.</p>
        </div>
        <div className="brand-grid">
          <div className="brand-mark-cell">
            <HughesLogotype className="brand-mark-logo" />
            <p className="brand-label brand-mark-label">Hughesss — Primary mark</p>
          </div>
          <div className="brand-type-cell">
            <p className="brand-display-type">Stress Busters!</p>
            <p className="brand-label">Carter One · Display</p>
            <p className="brand-body-type">Body copy is system sans-serif — neutral, universal, zero print cost.</p>
            <p className="brand-label">System sans-serif · Body</p>
          </div>
          <div className="brand-palette-cell">
            <div className="swatches">
              <div className="swatch swatch-ink"><span>#080810</span><span>Void</span></div>
              <div className="swatch swatch-white"><span>#F0F0FF</span><span>Ghost</span></div>
              <div className="swatch swatch-red"><span>#B400FF</span><span>Purple</span></div>
              <div className="swatch swatch-blue"><span>#00E5FF</span><span>Cyan</span></div>
            </div>
            <p className="brand-label">Web palette</p>
          </div>
        </div>
      </section>

      <section className="section shell launch-financials">
        <div className="section-heading">
          <p className="eyebrow">06 / Launch numbers</p>
          <p className="muted">Prototype-run assumptions — verify before ordering.</p>
        </div>
        <div className="finance-grid">
          <div>
            <span>Prototype print</span>
            <strong>$167</strong>
            <p>Five 25-card decks, 70 × 120 mm, CMYK laminated stock and tuck boxes.</p>
          </div>
          <div>
            <span>Per-deck cost</span>
            <strong>$33</strong>
            <p>Unit cost before freight. Drops sharply at volume — check with your printer.</p>
          </div>
          <div>
            <span>Retail target</span>
            <strong>$55</strong>
            <p>Leaves healthy margin with $5 per deck to Friends of the Koala.</p>
          </div>
          <div>
            <span>Web ops</span>
            <strong>$0–20<small>/mo</small></strong>
            <p>Vercel Hobby free at launch. Upgrade when the shop needs it.</p>
          </div>
        </div>
        <div className="retail-note">
          <h2>$5 per deck<br />to the koalas.</h2>
          <p>Every deck sold puts $5 toward the rescue and care work of Friends of the Koala — doing genuinely good things in northern NSW.</p>
          <a className="text-link" href="https://friendsofthekoala.org/" target="_blank" rel="noreferrer">Friends of the Koala ↗</a>
        </div>
      </section>

      <section className="next-steps">
        <div className="shell">
          <p className="eyebrow">Ready to move</p>
          <h2>Three things<br />you can do today.</h2>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-icon">01</span>
              <h3>Order a prototype</h3>
              <p>Send the print spec to a local trade printer or use Moo, PrintingForLess, or Make Playing Cards for a first run of five decks.</p>
              <a className="text-link" href="#print-spec">See the spec ↓</a>
            </div>
            <div className="step-card">
              <span className="step-icon">02</span>
              <h3>Share this kit</h3>
              <p>This page has the game, the brand, the numbers, and the full story. Send it to a co-creator, a stockist, or anyone who should know.</p>
              <a className="text-link" href="https://client-huges-stressbusters.vercel.app/collateral" target="_blank" rel="noreferrer">Copy the link ↗</a>
            </div>
            <div className="step-card">
              <span className="step-icon">03</span>
              <h3>Take it further</h3>
              <p>A Kickstarter, a gift retailer pitch, a table at a local market. The brand is ready. The game is ready. You're the variable.</p>
              <Link className="text-link" href="/deck">See all 25 cards ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p><HughesLogotype className="footer-logo" /><span>STRESS BUSTERS</span></p>
        <Link href="/">Back to the game ↗</Link>
        <p className="muted">Publishing Kit / Edition 01</p>
      </footer>
    </main>
  );
}
