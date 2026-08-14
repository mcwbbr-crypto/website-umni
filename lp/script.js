const header = document.querySelector('.site-header');

function syncHeaderOnScroll() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 32);
}

syncHeaderOnScroll();
window.addEventListener('scroll', syncHeaderOnScroll, { passive: true });


const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

// Modal de qualificação
const quoteModal = document.querySelector('#quote-modal');
const qualificationForm = document.querySelector('#qualification-form');
const steps = [...document.querySelectorAll('.qualification-step')];
const progressBar = document.querySelector('.modal-progress span');
const stepLabel = document.querySelector('.modal-step-label');
let currentStep = 1;
let leadSubmissionInProgress = false;

function updateQualificationStep(step) {
  currentStep = Math.min(Math.max(step, 1), steps.length);
  steps.forEach(el => el.classList.toggle('is-active', Number(el.dataset.step) === currentStep));
  if (progressBar) progressBar.style.width = `${(currentStep / steps.length) * 100}%`;
  if (stepLabel) stepLabel.textContent = `Etapa ${currentStep} de ${steps.length}`;
}

function trackEvent(name, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}

// Conversão Google Ads: "Solicitar cotação"
function reportGoogleAdsConversion(url) {
  let redirected = false;

  const goToWhatsApp = () => {
    if (redirected) return;
    redirected = true;
    window.location.href = url;
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16765389428/QImGCNX2s-EcEPSUrro-',
      'value': 1.0,
      'currency': 'BRL',
      'event_callback': goToWhatsApp
    });

    // Fallback para não deixar o usuário preso caso o callback do Google não retorne.
    setTimeout(goToWhatsApp, 2000);
  } else {
    // Se a tag do Google não carregar, o WhatsApp continua funcionando.
    goToWhatsApp();
  }
}

function openQuoteModal() {
  trackEvent('quote_start', { source: 'site_cta' });
  if (!quoteModal) return;
  quoteModal.classList.add('is-open');
  quoteModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  updateQualificationStep(1);
  setTimeout(() => quoteModal.querySelector('input, select, button')?.focus(), 50);
}

function closeQuoteModal() {
  if (!quoteModal) return;
  quoteModal.classList.remove('is-open');
  quoteModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.js-open-quote-modal').forEach(btn => btn.addEventListener('click', openQuoteModal));
document.querySelectorAll('[data-close-modal]').forEach(btn => btn.addEventListener('click', closeQuoteModal));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && quoteModal?.classList.contains('is-open')) closeQuoteModal();
});

function validateCurrentStep() {
  const active = document.querySelector(`.qualification-step[data-step="${currentStep}"]`);
  if (!active) return false;
  const fields = [...active.querySelectorAll('input, select')];
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }
  return true;
}

document.querySelectorAll('.js-next-step').forEach(btn => btn.addEventListener('click', () => {
  if (!validateCurrentStep()) return;
  updateQualificationStep(currentStep + 1);
}));

document.querySelectorAll('.js-prev-step').forEach(btn => btn.addEventListener('click', () => {
  updateQualificationStep(currentStep - 1);
}));

qualificationForm?.addEventListener('submit', e => {
  e.preventDefault();

  if (leadSubmissionInProgress) return;

  if (!qualificationForm.checkValidity()) {
    qualificationForm.reportValidity();
    return;
  }

  leadSubmissionInProgress = true;

  const data = Object.fromEntries(new FormData(qualificationForm).entries());

  // Pontuação simples para priorização comercial.
  let score = 0;
  if (data.perfil === 'Empresa') score += 2;
  if (['500 kg a 1 tonelada','1 a 5 toneladas','Mais de 5 toneladas'].includes(data.quantidade)) score += 3;
  else if (data.quantidade === '200 a 500 kg') score += 2;
  else score += 1;
  if (data.prazo === 'O quanto antes') score += 2;
  else if (data.prazo === 'Nos próximos 7 dias') score += 1;
  if (data.coleta === 'Sim, preciso de retirada') score += 1;

  const classificacao = score >= 7 ? 'Lead prioritário' : score >= 4 ? 'Lead qualificado' : 'Lead em avaliação';

  const summary = qualificationForm.querySelector('.lead-summary');
  if (summary) {
    summary.innerHTML = `
      <strong>${classificacao}</strong><br>
      ${data.perfil} · ${data.material} · ${data.quantidade}<br>
      ${data.cidade} · ${data.prazo}
    `;
  }

  steps.forEach(el => el.classList.remove('is-active'));
  const success = qualificationForm.querySelector('.qualification-success');
  if (success) success.hidden = false;
  if (progressBar) progressBar.style.width = '100%';
  if (stepLabel) stepLabel.textContent = 'Concluído';

  // Monta a mensagem já qualificada e abre o WhatsApp da BR Metais.
  const whatsappNumber = '554136040031';
  const query = new URLSearchParams(window.location.search);
  const attribution = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']
    .map(key => query.get(key) ? `${key}: ${query.get(key)}` : null)
    .filter(Boolean);

  const message = [
    'Olá! Quero solicitar uma cotação de sucata na BR Metais.',
    '',
    '*DADOS DA COTAÇÃO*',
    `Nome: ${data.nome}`,
    `Perfil: ${data.perfil}`,
    `Cidade / região: ${data.cidade}`,
    `Material: ${data.material}`,
    `Quantidade aproximada: ${data.quantidade}`,
    `Coleta: ${data.coleta}`,
    `Prazo para negociar: ${data.prazo}`,
    `WhatsApp informado: ${data.telefone}`,
    '',
    `Classificação: ${classificacao}`,
    ...(attribution.length ? ['', '*ORIGEM DO ACESSO*', ...attribution] : [])
  ].join('\n');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  console.log('Lead qualificado:', { ...data, score, classificacao });

  // Mostra brevemente a confirmação, registra o lead e dispara a conversão do Google Ads.
  setTimeout(() => {
    trackEvent('whatsapp_qualified_lead', {
      material: data.material,
      quantidade: data.quantidade,
      perfil: data.perfil
    });

    reportGoogleAdsConversion(whatsappUrl);
  }, 650);
});


// Botão voltar ao topo
const backToTop = document.querySelector('#back-to-top');

function syncBackToTop() {
  if (!backToTop) return;
  backToTop.classList.toggle('is-visible', window.scrollY > 500);
}

syncBackToTop();
window.addEventListener('scroll', syncBackToTop, { passive: true });

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
