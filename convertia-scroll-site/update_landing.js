const fs = require('fs');
const filePath = 'c:\\\\Users\\\\USER\\\\OneDrive\\\\Escritorio\\\\ConvertiaX\\\\convertia-scroll-site\\\\index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Rename Title
content = content.replace('Lo que nos define', 'Que nos diferencia');

// 2. CSS Additions
const cssToAdd = `
/* ===== WHATSAPP FLOAT ===== */
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 14px rgba(37, 211, 102, 0.4);
}
.whatsapp-float svg {
  width: 35px;
  height: 35px;
  fill: currentColor;
}
@media (max-width: 768px) {
  .whatsapp-float {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
  }
  .whatsapp-float svg {
    width: 28px;
    height: 28px;
  }
}

/* ===== TESTIMONIALS ===== */
#testimonials {
  position: relative;
  z-index: 1;
  padding: 100px 32px;
}
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
}
.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--accent-rgb), 0.2);
}
.testimonial-stars {
  color: #ffb400;
  font-size: 1.2rem;
  margin-bottom: 16px;
  letter-spacing: 2px;
}
.testimonial-quote {
  font-size: 1rem;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 24px;
  flex: 1;
  line-height: 1.6;
}
.testimonial-author {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--accent);
}
.testimonial-role {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .testimonials-grid { grid-template-columns: 1fr; }
  #testimonials { padding: 60px 20px; }
  .testimonial-card { padding: 32px 24px; }
}

/* Add custom list styling for packages */
.package-features li {
  align-items: flex-start;
}
.package-features li strong {
  color: var(--text-primary);
  font-weight: 600;
}
`;

content = content.replace('</style>', cssToAdd + '\n</style>');

// 3. New Packages HTML
const newPackagesHTML = `
<!-- Packages -->
<section id="packages">
  <div class="features-header reveal">
    <p class="section-tag">Paquetes</p>
    <h2 class="section-title">Elige tu nivel de crecimiento</h2>
  </div>
  <div class="packages-grid" style="grid-template-columns: repeat(3, 1fr); max-width: 1300px;">
    <div class="package-card reveal">
      <p class="package-level">Nivel Entrada</p>
      <h3>Accelerator 360°</h3>
      <p class="package-desc">Establece la base de conversión y captura la demanda existente.</p>
      <ul class="package-features">
        <li><span><strong>Inmersión Estratégica:</strong> Sesión de consultoría (30 min) para diagnóstico de portafolio y KPIs.</span></li>
        <li><span><strong>Perfilación de ICP:</strong> Definición técnica del Buyer Persona por comportamiento e intención.</span></li>
        <li><span><strong>Landing Page de Alta Conversión:</strong> Desarrollo web orientado a respuesta directa (Imán de Leads).</span></li>
        <li><span><strong>Ecosistema Meta Ads:</strong> Configuración de 1 campaña en Facebook e Instagram para conversión.</span></li>
        <li><span><strong>Creativos & Copywriting:</strong> Piezas optimizadas con textos basados en gatillos mentales (AIDA).</span></li>
        <li><span><strong>Gobernanza Digital:</strong> Configuración en Business Manager y blindaje publicitario.</span></li>
        <li><span><strong>Segmentación Avanzada:</strong> Audiencias Lookalikes, Intereses y Retargeting.</span></li>
        <li><span><strong>Optimización (30 días):</strong> Ajuste diario para maximizar el ROAS.</span></li>
        <li><span><strong>Reporting Analítico:</strong> Métricas clave (CPA, CCTR, CVR) y mejoras.</span></li>
      </ul>
      <a href="#cta" class="btn-secondary plan-btn-center">Conocer Más</a>
    </div>
    <div class="package-card featured reveal">
      <p class="package-level">Nivel Crecimiento</p>
      <h3>Performance Elite</h3>
      <p class="package-desc">Domina el sector y genera un flujo constante de leads calificados.</p>
      <ul class="package-features">
        <li><span><strong>Inmersión Estratégica:</strong> Consultoría de 30 min para mapear objetivos y KPIs.</span></li>
        <li><span><strong>Ingeniería de ICP:</strong> Modelado técnico basado en señales de intención.</span></li>
        <li><span><strong>Landing Page Ultra-rápida:</strong> Arquitectura optimizada para la captura de leads.</span></li>
        <li><span><strong>Nexus AI Chatbot:</strong> Agente inteligente para automatización y captura prospectada.</span></li>
        <li><span><strong>Ecosistema de Rastreo:</strong> Instalación de Pixel y API de Conversiones.</span></li>
        <li><span><strong>Video High-End:</strong> Producción de 5 piezas audiovisuales premium directas.</span></li>
        <li><span><strong>Gestión de Meta Ads:</strong> 2 campañas enfocadas en volumen de leads calificados.</span></li>
        <li><span><strong>Framework AIDA:</strong> Copywriting y diseño con gatillos mentales.</span></li>
        <li><span><strong>Gobernanza y Blindaje:</strong> Setup para garantizar seguridad de la data.</span></li>
        <li><span><strong>Sistematización de WhatsApp:</strong> Automatización del canal de cierre.</span></li>
        <li><span><strong>Optimización y Retargeting:</strong> Ajuste diario para potenciar el ROAS.</span></li>
        <li><span><strong>Reporte Inteligencia:</strong> Informe quincenal de CPA, CVR y escalamiento.</span></li>
      </ul>
      <a href="#cta" class="btn-primary plan-btn-center">Elegir Este Plan</a>
    </div>
    <div class="package-card reveal">
      <p class="package-level">Nivel Expansión</p>
      <h3>Dominance System</h3>
      <p class="package-desc">Lidera el mercado y desplaza a la competencia. Máquina de generación de demanda imparable.</p>
      <ul class="package-features">
        <li><span><strong>Inmersión y Debate (40 min):</strong> Alineamiento de objetivos y validación de rentabilidad mediante KPIs.</span></li>
        <li><span><strong>Ingeniería de ICP:</strong> Modelado técnico del cliente ideal por intención.</span></li>
        <li><span><strong>Hub de Conversión:</strong> Landing ultra-rápida diseñada bajo psicología de ventas.</span></li>
        <li><span><strong>Nexus AI CRM & Leads:</strong> Sistema CRM que optimiza prospección y aumenta ventas.</span></li>
        <li><span><strong>Ecosistema de Rastreo:</strong> Instalación avanzada de Pixel y API.</span></li>
        <li><span><strong>Contenido Audiovisual:</strong> Pre-producción y día de rodaje de 10 videos de impacto.</span></li>
        <li><span><strong>Gestión de Meta Ads:</strong> 3 campañas enfocadas en leads calificados.</span></li>
        <li><span><strong>Storytelling AIDA:</strong> Narrativa y visuales premium guiando hacia el cierre.</span></li>
        <li><span><strong>Gobernanza y Blindaje:</strong> Seguridad y propiedad total de la data.</span></li>
        <li><span><strong>Sistematización WhatsApp:</strong> Automatización total del canal de cierre.</span></li>
        <li><span><strong>Optimización y Retargeting:</strong> Ajuste diario de audiencias y pujas.</span></li>
        <li><span><strong>Reporte Inteligencia:</strong> Informe quincenal táctico de escalamiento.</span></li>
      </ul>
      <a href="#cta" class="btn-secondary plan-btn-center">Conocer Más</a>
    </div>
  </div>
</section>
`;

// Extract old packages and delete it
const pkgStart = content.indexOf('<!-- Packages -->');
let pkgEnd = content.indexOf('</section>', pkgStart);
if (pkgEnd !== -1) {
    pkgEnd += '</section>'.length;
    content = content.substring(0, pkgStart) + content.substring(pkgEnd);
}

// Locate where to insert new packages (Right after <!-- Features / Values --> section)
const featuresStart = content.indexOf('<!-- Features / Values -->');
let featuresEnd = content.indexOf('</section>', featuresStart);
if (featuresEnd !== -1) {
    featuresEnd += '</section>'.length;
    content = content.substring(0, featuresEnd) + '\\n\\n' + newPackagesHTML + content.substring(featuresEnd);
}

// 4. Testimonials HTML
const testimonialsHTML = `
<!-- Testimonials -->
<section id="testimonials">
  <div class="features-header reveal">
    <p class="section-tag">Casos de Éxito</p>
    <h2 class="section-title">Lo que dicen nuestros clientes</h2>
  </div>
  <div class="testimonials-grid">
    <div class="testimonial-card reveal">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-quote">"Su sistema nos ayudó a duplicar nuestros leads calificados en solo un trimestre. El equipo es increíble y su conocimiento sobre optimización de campañas no tiene igual."</p>
      <div class="testimonial-author">Carlos Ramírez</div>
      <div class="testimonial-role">CEO, TechGroup</div>
    </div>
    <div class="testimonial-card reveal delay-1">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-quote">"Convertia ha transformado por completo nuestra estrategia digital. Desde que implementamos su framework, nuestras ventas han crecido exponencialmente."</p>
      <div class="testimonial-author">María Fernández</div>
      <div class="testimonial-role">Directora de Marketing, Innova</div>
    </div>
    <div class="testimonial-card reveal delay-2">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-quote">"Son mucho más que una agencia, son aliados estratégicos. No solo nos entregaron resultados tangibles, sino que nos ayudaron a rediseñar cómo atraemos clientes."</p>
      <div class="testimonial-author">Juan Pablo Torres</div>
      <div class="testimonial-role">Fundador, Alfa Ventures</div>
    </div>
  </div>
</section>
\n`;

// Insert Testimonials before Clients
const clientsStart = content.indexOf('<!-- Clients -->');
if (clientsStart !== -1) {
    content = content.substring(0, clientsStart) + testimonialsHTML + content.substring(clientsStart);
}

// 5. WhatsApp Float HTML
const whatsappHTML = `
<!-- WhatsApp Float -->
<a href="https://api.whatsapp.com/send?phone=573138858348" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat en WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
</a>
</body>`;

content = content.replace('</body>', whatsappHTML);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated index.html');
