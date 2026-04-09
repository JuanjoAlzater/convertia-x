const fs = require('fs');
const filePath = 'c:\\\\Users\\\\USER\\\\OneDrive\\\\Escritorio\\\\ConvertiaX\\\\convertia-scroll-site\\\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add CSS
const cssToAdd = `
/* ===== FOOTER BOTTOM ===== */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 20px;
}
@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
  }
}
.footer-copy {
  margin: 0;
}
.footer-social {
  display: flex;
  gap: 16px;
}
.footer-social a {
  color: var(--text-secondary);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.footer-social a svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}
.footer-social a:hover {
  border-color: rgba(var(--accent-rgb), 0.3);
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.05);
  transform: translateY(-2px);
}
`;

content = content.replace('</style>', cssToAdd + '\n</style>');

// 2. Wrap footer area with social icons
const footerCopyHtml = '<p class="footer-copy">&copy; 2026 Convertia. Todos los derechos reservados.</p>';

const newFooterHtml = `
    <div class="footer-bottom">
      <p class="footer-copy">&copy; 2026 Convertia. Todos los derechos reservados.</p>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
        <a href="#" aria-label="LinkedIn">
          <svg viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89l1.3 40.8h1.8c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
        </a>
        <a href="#" aria-label="X (Twitter)">
          <svg viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L273.6 181.5 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        </a>
      </div>
    </div>`;

content = content.replace(footerCopyHtml, newFooterHtml);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated index.html with footer socials');
