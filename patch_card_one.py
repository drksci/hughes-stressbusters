with open('/Users/blake/Projects/hughes-stressbusters/app/card-one.css', 'r') as f:
    c_css = f.read()

c_css = c_css.replace(
    '.mockup-buster .mockup-label{position:relative;z-index:1;padding:14px 14px 0;color:#888;font:10px var(--mono);letter-spacing:.08em}',
    '.mockup-buster .mockup-label{position:relative;z-index:1;padding:14px 14px 0;color:#888;font:900 10px var(--mono);letter-spacing:.08em}'
)
c_css = c_css.replace(
    '.mockup-buster .mockup-footer{color:#999;position:relative;z-index:1;padding:0 14px 14px;font:8px var(--mono);margin-top:12px}',
    '.mockup-buster .mockup-footer{color:#999;position:relative;z-index:1;padding:0 14px 14px;font:900 8px var(--mono);margin-top:10px}'
)

with open('/Users/blake/Projects/hughes-stressbusters/app/card-one.css', 'w') as f:
    f.write(c_css)

print("done")
