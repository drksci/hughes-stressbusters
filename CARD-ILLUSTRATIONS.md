# Stress Busters — Card Illustration Brief

All illustrations should share a consistent visual language:
**Style:** Bold, flat, graphic. Think vintage risograph meets editorial cartoon.
**Palette:** Vibrant full colour. Each card type has a dominant colour key (see below).
**Format:** Square crop, 800×800px minimum, saved as `.jpg` or `.png`.
**Feel:** Fun, slightly absurd, warm humour — like a very good greeting card crossed with a Penguin Classic cover.

---

## Where to save files

All illustration files go in `/public/` at the project root.

```
/public/
  stress-busters-illustration.png  ← KEEP (cover card, existing)
  art-iscream.jpg                  ← KEEP (I Scream card, existing)
  art-stress.jpg                   ← KEEP (general stress tile, existing)
  cards/
    stress-reply-all.jpg
    stress-inbox.jpg
    stress-imposter.jpg
    stress-handshake.jpg
    stress-procrastination.jpg
    stress-lost-key.jpg
    stress-overthink.jpg
    stress-bill.jpg
    stress-traffic.jpg
    stress-battery.jpg
    stress-calendar.jpg
    stress-groupchat.jpg
    buster-unsend.jpg
    buster-delete.jpg
    buster-fake-it.jpg
    buster-power-nod.jpg
    buster-five-min.jpg
    buster-panic-search.jpg
    buster-brain-off.jpg
    buster-not-today.jpg
    buster-breathe.jpg
    buster-charger.jpg
    buster-cancel.jpg
    buster-silent-exit.jpg
    wild-awake.jpg
```

---

## How to wire up

### Deck page tiles (`app/deck/page.tsx`)

Each card in the `cards` array maps to a tile. To use per-card art, add an image src and update the tile to use it:

```tsx
// In deck/page.tsx, update the cards array to include art:
const cards: [string, string, string, string][] = [
  ["STRESS", "The Reply-All Demon",    "01", "/cards/stress-reply-all.jpg"],
  ["BUSTER", "The Glorious Unsend",    "02", "/cards/buster-unsend.jpg"],
  // ...
];

// In the JSX, add background style:
<article
  className={`deck-tile tile-${kind.toLowerCase()}`}
  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05) 0%, rgba(0,0,0,.75) 100%), url('${art}')` }}
>
```

### Collateral page mockups (`app/collateral/page.tsx`)

Update the `<img>` src attributes in the mockup-stage section:
```tsx
<img className="card-two-illustration" src="/cards/buster-unsend.jpg" alt="..." />
```

### Home page hero cards (`app/page.tsx`)

Update the card mock image sources in the hero-cards section.

---

## Illustration Prompts

Use these prompts verbatim with an image generation tool (Midjourney, DALL-E 3, Gemini, Adobe Firefly, etc.)

**Global style prefix to add to every prompt:**
> Flat graphic illustration, bold outlines, vibrant risograph-style colour palette, warm and funny, slightly absurd humour, editorial cartoon meets Penguin Classics cover art. No text. Square format.

---

### STRESS CARDS (dominant colour: warm red-orange or electric yellow)

**stress-reply-all.jpg**
> A harried office worker drowning in an avalanche of paper emails, all stamped REPLY ALL, cascading from the ceiling. Expression of pure dread. Warm red palette.

**stress-inbox.jpg**
> An enormous overflowing email inbox rendered as a physical mailbox bursting at the seams, letters spilling everywhere, tiny person buried underneath. Electric yellow palette.

**stress-imposter.jpg**
> A person at a podium in a business suit, but their shadow reveals they're a small child in a cardboard box costume. Spotlight on the incongruity. Warm orange.

**stress-handshake.jpg**
> Two hands going in for a handshake. One is normal. The other is visibly sweating in dramatic streams. Both parties look equally horrified. Warm coral palette.

**stress-procrastination.jpg**
> A person sitting on a spiral staircase that goes nowhere, procrastinating, surrounded by clocks melting like Dalí, to-do lists floating away like balloons. Orange-yellow.

**stress-lost-key.jpg**
> A giant cartoonish kraken made entirely of tangled key rings and lost items, emerging from under a couch cushion. Playful and absurd. Warm red-purple.

**stress-overthink.jpg**
> A brain with hundreds of tiny thought bubbles nested inside other thought bubbles, ad infinitum, the person beneath looking very small and tired. Cool purple-orange.

**stress-bill.jpg**
> A Victorian-era debt collector in top hat knocking on a door, but the house is just a tent. Stacks of bills surround everything. Warm sepia-red.

**stress-traffic.jpg**
> An infinite highway stretching in all directions, completely gridlocked, one driver doing a primal scream, steam coming from the cars. Electric orange.

**stress-battery.jpg**
> A little goblin with a phone plugged into its back, glowing with stolen charge, while a person nearby has a 1% battery life icon as their face. Warm yellow-green.

**stress-calendar.jpg**
> A nine-headed hydra, each head is a different calendar with "MEETING" stamped across it. Slaying one head reveals two more calendars. Bright warm red.

**stress-groupchat.jpg**
> A mob of tiny people inside a phone, all talking at once with speech bubbles overlapping into pure noise. The phone is visibly vibrating in distress. Warm coral.

---

### BUSTER CARDS (dominant colour: fresh green, sky blue, or lavender)

**buster-unsend.jpg**
> A heroic figure dramatically snatching an email out of mid-air, mid-flight, before it reaches the recipient. Cape billowing, triumphant expression. Fresh sky blue.

**buster-delete.jpg**
> A satisfying giant DELETE key being pressed by a determined hand, with a cascade of clutter dissolving into confetti. Clean lavender-green palette.

**buster-fake-it.jpg**
> A person in a superhero pose, but they're clearly wearing a paper mask with a confident face drawn on it. Everyone nearby is impressed. Warm lavender.

**buster-power-nod.jpg**
> A figure doing the most commanding slow nod, radiating an aura of pure authority despite clearly having no idea what's going on. Blue-green.

**buster-five-min.jpg**
> A stopwatch with "5 MINS" on it, and behind it a person who has actually done an entire project in that time, looking pleasantly shocked. Fresh green.

**buster-panic-search.jpg**
> A frantic person patting down all their pockets simultaneously, finding keys, cards, a sandwich, and a lost pet — everything except what they need. Sky blue.

**buster-brain-off.jpg**
> A brain with an actual off-switch being flipped, the person below it immediately blissed out with a serene expression. Soft lavender.

**buster-not-today.jpg**
> A bill collector at the door, but the door has a "NOT TODAY" sign and the resident is behind it, perfectly unbothered, having a cup of tea. Warm mint green.

**buster-breathe.jpg**
> A person doing an exaggerated deep breath, chest puffed out, surrounded by expanding concentric rings of calm. A single bead of sweat flies off. Sky blue-green.

**buster-charger.jpg**
> A person "borrowing" a phone charger from someone else's bag, looking both guilty and completely relieved. The phone charging with a heavenly glow. Warm yellow-green.

**buster-cancel.jpg**
> A calendar being crossed out with enormous satisfying red Xs, the person doing it looking more joyful with each strike. Confetti everywhere. Red-green contrast.

**buster-silent-exit.jpg**
> A group chat with 47 members, and one person gracefully moonwalking out of frame, completely undetected. Soft purple-blue.

---

### WILDCARD

**wild-awake.jpg**
> A person bolt-upright in bed at 3am, eyes wide open, surrounded by every stress from the game floating as cartoon ghosts. But they're smiling, slightly unhinged. Vivid purple and electric yellow.

---

## Cover card (existing — keep)

`/public/stress-busters-illustration.png` — already wired up. No change needed.

## Quick-generation tip

If generating in batches, use the global style prefix + each individual prompt.
For Midjourney: `/imagine [global style prefix], [card-specific prompt] --ar 1:1 --style raw --v 6`
For DALL-E 3: paste the full combined prompt directly.
For Gemini: use the generate_image tool with the combined prompt and `AspectRatio: "1:1"`.
