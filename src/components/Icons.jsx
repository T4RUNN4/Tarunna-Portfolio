const strokeProps = {
  fill: "currentColor",
  stroke: "#ffffff",
  strokeWidth: 3,
  strokeLinejoin: "round",
  paintOrder: "stroke",
  className:
    "overflow-visible [filter:drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))] h-5 w-5 shrink-0",
  "aria-hidden": true,
};

export function LogoMark({ className = "h-7 w-7" }) {
  return (
    <img
      src="/logo.svg?v=5"
      alt=""
      className={`${className} overflow-visible filter-[drop-shadow(1px_1.5px_0_rgba(25,21,16,0.28))]`}
      aria-hidden="true"
    />
  );
}

export function NavIcon({ name }) {
  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" {...strokeProps}>
        <path d="M12 2l2.9 6.26 6.85.72-5.1 4.62 1.44 6.7L12 17.6l-6.09 3.7 1.44-6.7-5.1-4.62 6.85-.72z" />
      </svg>
    );
  }
  if (name === "person") {
    return (
      <svg viewBox="0 0 24 24" {...strokeProps}>
        <path d="M12 3a3.6 3.6 0 100 7.2A3.6 3.6 0 0012 3zM4.8 20a7.2 7.2 0 0114.4 0z" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg viewBox="0 0 24 24" {...strokeProps}>
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 2l10 10-10 10L2 12z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 22" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M2 3h20v16H2V3zm2 2v.5l8 5.5 8-5.5V5H4zm16 12V9.2l-8 5.5-8-5.5V17h16z" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden>
      <path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
    </svg>
  );
}
