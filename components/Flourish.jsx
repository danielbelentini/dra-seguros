/**
 * Pequeno traço curvo que ecoa o floreio sob "D.R.A." na logo.
 * Usado com moderação, uma vez por título de seção, como assinatura visual.
 */
export default function Flourish({ align = 'left', tone = 'maroon', className = '' }) {
  const color = tone === 'cream' ? '#F7EDE4' : '#6E1526';
  return (
    <svg
      className={`brand-flourish ${align === 'center' ? 'mx-auto' : ''} ${className}`}
      viewBox="0 0 84 14"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 3.5C16 11 30 11.5 42 7C54 2.5 68 3 83 8.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
