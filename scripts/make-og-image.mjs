import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0b10"/>
      <stop offset="55%" stop-color="#14142b"/>
      <stop offset="100%" stop-color="#0a1a24"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c4b5fd"/>
      <stop offset="100%" stop-color="#67e8f9"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="1010" cy="120" r="300" fill="#7c3aed" opacity="0.22"/>
  <circle cx="1140" cy="560" r="220" fill="#06b6d4" opacity="0.16"/>
  <rect x="0" y="0" width="${W}" height="6" fill="url(#accent)"/>

  <text x="80" y="215" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26" font-weight="600" letter-spacing="5" fill="#a78bfa">DESARROLLADOR WEB Y SOFTWARE</text>

  <text x="80" y="305" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="62" font-weight="700" fill="#fafafa">Juan Antonio</text>
  <text x="80" y="378" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="62" font-weight="700" fill="#fafafa">Vidal L&#243;pez</text>

  <rect x="80" y="425" width="96" height="4" fill="url(#accent)"/>

  <text x="80" y="492" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="27" fill="#a1a1aa">Astro &#183; Flutter &#183; Laravel &#183; PHP &#183; MySQL &#183; Firebase</text>

  <text x="80" y="560" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="23" fill="#71717a">vidaljuan341@gmail.com</text>
</svg>`;

const photo = await sharp('src/assets/images/mi-foto.jpeg')
  .resize(420, 420, { fit: 'cover', position: 'top' })
  .webp({ quality: 90 })
  .toBuffer();

const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="420">
     <rect width="420" height="420" rx="24" fill="#000"/>
   </svg>`
);

await sharp(photo)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer()
  .then((rounded) =>
    sharp({ create: { width: W, height: H, channels: 4, background: '#0b0b10ff' } })
      .composite([{ input: Buffer.from(svg), top: 0, left: 0 }, { input: rounded, top: 105, left: 700 }])
      .jpeg({ quality: 88, chromaSubsampling: '4:4:4' })
      .toFile('public/og-image.jpg')
  )
  .then((info) => console.log('OG image written:', info.width + 'x' + info.height, Math.round(info.size / 1024) + ' KB'))
  .catch((e) => {
    console.error('FAILED:', e.message);
    process.exit(1);
  });
