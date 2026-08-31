import re

with open('/Users/blake/Projects/hughes-stressbusters/app/globals.css', 'r') as f:
    g_css = f.read()

# Make labels and footers heavier and tightly fitted
g_css = g_css.replace(
    '.mockup-label{font:10px var(--mono);letter-spacing:.1em;color:#999}',
    '.mockup-label{font:900 10px var(--mono);letter-spacing:.1em;color:#999}'
)
g_css = g_css.replace(
    '.mockup-footer{font:8px var(--mono);margin-top:16px;line-height:1.4;letter-spacing:.05em}',
    '.mockup-footer{font:900 8px var(--mono);margin-top:12px;line-height:1.4;letter-spacing:.05em}'
)
g_css = g_css.replace(
    '.mockup-card h2{font-size:clamp(22px,3vw,44px);margin-top:auto;letter-spacing:-.07em;line-height:.9}',
    '.mockup-card h2{font-size:clamp(22px,3vw,44px);margin-top:auto;letter-spacing:-.07em;line-height:.9;font-weight:900}'
)

with open('/Users/blake/Projects/hughes-stressbusters/app/globals.css', 'w') as f:
    f.write(g_css)


with open('/Users/blake/Projects/hughes-stressbusters/app/deck.css', 'r') as f:
    d_css = f.read()

d_css = d_css.replace(
    'font:700 9px var(--mono);',
    'font:900 9px var(--mono);'
)
d_css = d_css.replace(
    '.deck-tile h2{\n  font-size:clamp(12px,1.5vw,20px);\n  line-height:.95;\n  margin:10px 0 0;\n  letter-spacing:-.04em;\n  flex-shrink:0;\n}',
    '.deck-tile h2{\n  font-size:clamp(12px,1.5vw,20px);\n  line-height:.95;\n  margin:10px 0 0;\n  letter-spacing:-.04em;\n  flex-shrink:0;\n  font-weight:900;\n}'
)

with open('/Users/blake/Projects/hughes-stressbusters/app/deck.css', 'w') as f:
    f.write(d_css)

print("done")
