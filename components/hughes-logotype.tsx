type HughesLogotypeProps = { className?: string };

export function HughesLogotype({ className = "" }: HughesLogotypeProps) {
  return (
    <svg className={className} viewBox="140 30 540 320" role="img" aria-label="Hughes">
      <g className="hughes-logo-group">
        <path className="hughes-spark spark-two" d="M 650 260 Q 653 270 663 273 Q 653 276 650 286 Q 647 276 637 273 Q 647 270 650 260 Z" />
        <path className="hughes-spark spark-three" d="M 610 50 Q 615 65 630 70 Q 615 75 610 90 Q 605 75 590 70 Q 605 65 610 50 Z" />
        <text x="400" y="200" className="hughes-text hughes-shadow">Hughes</text>
        <text x="400" y="200" className="hughes-text hughes-outline">Hughes</text>
        <text x="400" y="200" className="hughes-text hughes-fill">Hughes</text>
        <text x="400" y="200" className="hughes-text hughes-inner">Hughes</text>
      </g>
    </svg>
  );
}
