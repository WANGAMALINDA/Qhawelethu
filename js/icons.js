// Minimal recreation of the lucide-react icons used across the site.
// Each function returns an inline SVG string. `size` in px, `color` any CSS color.

function iconSvg(paths, size = 16, color = "currentColor", strokeWidth = 2, extraAttrs = "") {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" ${extraAttrs}>${paths}</svg>`;
}

const Icons = {
  arrowRight: (size = 16, color = "currentColor") =>
    iconSvg(`<path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>`, size, color),

  phone: (size = 16, color = "currentColor") =>
    iconSvg(`<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`, size, color),

  mail: (size = 16, color = "currentColor") =>
    iconSvg(`<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`, size, color),

  mapPin: (size = 16, color = "currentColor") =>
    iconSvg(`<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>`, size, color),

  messageCircle: (size = 16, color = "currentColor") =>
    iconSvg(`<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.16.088 9 9 0 1 0-4.838-4.715"/>`, size, color),

  star: (size = 12, color = "var(--ochre)") =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>`,

  menu: (size = 18, color = "currentColor") =>
    iconSvg(`<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>`, size, color),

  x: (size = 18, color = "currentColor") =>
    iconSvg(`<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`, size, color),

  sparkles: (size = 13, color = "currentColor") =>
    iconSvg(`<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>`, size, color),

  chevronLeft: (size = 14, color = "currentColor") =>
    iconSvg(`<path d="m15 18-6-6 6-6"/>`, size, color),

  chevronRight: (size = 14, color = "currentColor") =>
    iconSvg(`<path d="m9 18 6-6-6-6"/>`, size, color),

  shieldCheck: (size = 18, color = "currentColor") =>
    iconSvg(`<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>`, size, color),

  lock: (size = 15, color = "currentColor") =>
    iconSvg(`<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`, size, color),

  fileCheck2: (size = 18, color = "currentColor") =>
    iconSvg(`<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/>`, size, color),

  phoneCall: (size = 20, color = "currentColor") =>
    iconSvg(`<path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`, size, color),

  send: (size = 14, color = "currentColor") =>
    iconSvg(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>`, size, color),

  bookOpen: (size = 19, color = "currentColor") =>
    iconSvg(`<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>`, size, color),

  clipboardList: (size = 19, color = "currentColor") =>
    iconSvg(`<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>`, size, color),

  video: (size = 19, color = "currentColor") =>
    iconSvg(`<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>`, size, color),

  link2: (size = 19, color = "currentColor") =>
    iconSvg(`<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>`, size, color),

  download: (size = 16, color = "currentColor") =>
    iconSvg(`<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>`, size, color),

  play: (size = 16, color = "currentColor", fill = "none") =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>`,
};

function ringsSvg(className, stroke = "var(--moss)", opacity = 0.18) {
  const radii = [40, 76, 112, 148, 184];
  const circles = radii
    .map((r, i) => `<circle cx="200" cy="200" r="${r}" fill="none" stroke="${stroke}" stroke-width="${i === 0 ? 2 : 1}" opacity="${(opacity - i * 0.02).toFixed(2)}"/>`)
    .join("");
  return `<svg viewBox="0 0 400 400" class="qw-rings ${className}" aria-hidden="true">${circles}</svg>`;
}
