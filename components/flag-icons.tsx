// SVG Flag components from reference code (adapted for project)

export const FlagES = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#c60b1e" d="M0 0h640v480H0z" />
    <path fill="#ffc400" d="M0 120h640v240H0z" />
  </svg>
);

export const FlagUS = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#bd3d44" d="M0 0h640v480H0z" />
    <path
      stroke="#fff"
      strokeWidth="37"
      d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
    />
    <path fill="#192f5d" d="M0 0h364.8v258.5H0z" />
    <g fill="#fff">
      <g id="us-d">
        <g id="us-c">
          <g id="us-b">
            <g id="us-a">
              <path d="M30 17l3.2 9.8H44L35.8 33l3.2 9.8-8.2-6-8.2 6 3.2-9.8-8.2-6.2h10.8z" />
            </g>
            <use href="#us-a" x="60" />
          </g>
          <use href="#us-b" x="120" />
        </g>
        <use href="#us-c" x="60" y="35" />
      </g>
      <use href="#us-d" y="70" />
      <use href="#us-d" y="140" />
      <use href="#us-a" x="300" y="35" />
      <use href="#us-a" x="300" y="105" />
    </g>
  </svg>
);

export const FlagJP = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#fff" d="M0 0h640v480H0z" />
    <circle fill="#bc002d" cx="320" cy="240" r="144" />
  </svg>
);

// Indonesia Flag (Created to match style as it was missing in reference)
export const FlagID = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#ce1126" d="M0 0h640v240H0z" />
    <path fill="#fff" d="M0 240h640v240H0z" />
    {/* Subtle border for white background visibility */}
    <path
      fill="none"
      stroke="#000"
      strokeOpacity="0.1"
      strokeWidth="1"
      d="M0 0h640v480H0z"
    />
  </svg>
);

// Exports for compatibility
export const IconES = FlagES;
export const IconUS = FlagUS;
export const IconJP = FlagJP;
export const IconID = FlagID;
