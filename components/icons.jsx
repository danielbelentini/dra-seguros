// Ícones em SVG puro — sem pacotes externos, leves e fáceis de recolorir via currentColor.

export function CarIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M6 28l3.2-9.6A4 4 0 0113 15.6h22a4 4 0 013.8 2.8L42 28" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="28" width="40" height="10" rx="2.5" />
      <circle cx="14" cy="38" r="3.2" />
      <circle cx="34" cy="38" r="3.2" />
      <path d="M9 23h30" strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M8 22L24 8l16 14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19v19a1.5 1.5 0 001.5 1.5h21A1.5 1.5 0 0036 38V19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 38.5V28a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v10.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path
        d="M24 6l14 5v10c0 10-6 17.5-14 21C16 38.5 10 31 10 21V11l14-5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 24l4.5 4.5L31 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 20.6l-1.4-1.3C5.6 14.9 2.4 12 2.4 8.4 2.4 5.5 4.7 3.2 7.6 3.2c1.6 0 3.2.8 4.4 2.1 1.2-1.3 2.8-2.1 4.4-2.1 2.9 0 5.2 2.3 5.2 5.2 0 3.6-3.2 6.5-8.2 10.9L12 20.6z" />
    </svg>
  );
}

export function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.55a9.9 9.9 0 004.9 1.3h.01c5.46 0 9.91-4.45 9.91-9.9C21.95 6.44 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.58-.36.77-.36h.55c.18 0 .42-.07.65.5.24.58.81 2.01.88 2.16.07.15.12.32.02.51-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.6 2 .8.7 1.53.98 1.83 1.11.29.13.47.11.64-.06.17-.17.71-.83.9-1.11.19-.29.38-.24.63-.14.26.1 1.63.77 1.91.91.29.14.48.21.55.33.07.12.07.7-.17 1.38z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.55-1.5h1.66V3.36C15.9 3.25 15 3.18 13.96 3.18c-2.4 0-4.05 1.47-4.05 4.16v2.44H7.2v3.2h2.7V21h3.6z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.6a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20z" />
    </svg>
  );
}

export const socialIcons = {
  instagram: InstagramIcon,
  whatsapp: WhatsappIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
};

export const serviceIcons = {
  car: CarIcon,
  home: HomeIcon,
  shield: ShieldIcon,
};
