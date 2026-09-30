/* ==========================================================================
   Little Hope — mapa interativo em camadas
   A imagem contém apenas a geografia. Rótulos, locais e ícones vêm dos dados.
   ========================================================================== */

const locations = [
  {
    id: 'town-hall',
    name: 'Prefeitura de Little Hope',
    shortName: 'Prefeitura',
    category: 'civic',
    icon: 'building',
    marker: '01',
    x: 46.2,
    y: 34.2,
    address: 'Praça dos Fundadores, 1',
    hours: 'Seg–Sex · 8h30–17h',
    phone: 'LH 4-0110',
    description: 'O coração administrativo de Little Hope atende aos moradores desde 1898.',
    detail: 'Visite a secretaria, consulte os avisos do conselho ou solicite o guia de arquitetura para passeio autônomo.',
    note: 'Reunião do conselho · terça-feira, às 19h'
  },
  {
    id: 'library',
    name: 'Biblioteca Pública de Little Hope',
    shortName: 'Biblioteca',
    category: 'culture',
    icon: 'book',
    marker: '02',
    x: 53.9,
    y: 40.5,
    address: 'Avenida Laurel, 92',
    hours: 'Seg–Sáb · 9h–18h',
    phone: 'LH 4-0197',
    description: 'Salas de leitura, jornais e a coleção histórica do Condado de Laurel.',
    detail: 'O arquivo do subsolo funciona mediante agendamento. Pedidos de fotografias devem ser encaminhados ao balcão de referência.',
    note: 'Novo leitor de microfilme disponível'
  },
  {
    id: 'starlight',
    name: 'Cinema de Little Hope',
    shortName: 'Cinema',
    category: 'culture',
    icon: 'film',
    marker: '03',
    x: 39.7,
    y: 43.1,
    address: 'Rua Principal, 116',
    hours: 'Bilheteria abre · 17h30',
    phone: 'LH 4-0338',
    description: 'O cinema de tela única da cidade foi restaurado para seu vigésimo quinto verão.',
    detail: 'Nesta semana: duas atrações para toda a família, desenhos aos sábados e um cinejornal do Condado de Laurel.',
    note: 'Matinê · sábado, às 13h15'
  },
  {
    id: 'juniper-diner',
    name: 'Little Hope Diner',
    shortName: 'Diner',
    category: 'food',
    icon: 'utensils',
    marker: '04',
    x: 44.1,
    y: 50.6,
    address: 'Rua Principal, 204',
    hours: 'Todos os dias · 6h–22h',
    phone: 'LH 4-0244',
    description: 'Café, torta e um lugar junto à janela da Rua Principal.',
    detail: 'Pergunte sobre o prato especial de quinta-feira e assine o antigo livro de visitas atrás do balcão.',
    note: 'Torta do dia · cereja azeda'
  },
  {
    id: 'union-station',
    name: 'Terminal Rodoviário de Little Hope',
    shortName: 'Terminal',
    category: 'transport',
    icon: 'bus',
    marker: '05',
    x: 80.4,
    y: 62.3,
    address: 'Avenida da Ferrovia, 8',
    hours: 'Sala de espera · 5h45–21h30',
    phone: 'LH 4-0700',
    description: 'Linhas regionais conectam Little Hope a Ashland e à capital do estado.',
    detail: 'Passagens, despacho de bagagens e serviço local de táxi estão disponíveis no salão principal.',
    note: 'Expresso sentido norte · no horário'
  },
  {
    id: 'hope-park',
    name: 'Parque Central de Little Hope',
    shortName: 'Parque Central',
    category: 'nature',
    icon: 'tree',
    marker: '06',
    x: 45.5,
    y: 65.7,
    address: 'Avenida Central do Parque',
    hours: 'Do nascer do sol às 22h',
    phone: 'Posto florestal · LH 4-0881',
    description: 'Trilhas, gramados para piquenique e áreas verdes no coração da cidade.',
    detail: 'O circuito principal é de baixa dificuldade. Mapas gratuitos estão disponíveis no quiosque da entrada leste.',
    note: 'Áreas de piquenique abertas até o anoitecer'
  },
  {
    id: 'mercy-hospital',
    name: 'Hospital Geral de Little Hope',
    shortName: 'Hospital',
    category: 'health',
    icon: 'cross',
    marker: '07',
    x: 55.4,
    y: 63.1,
    address: 'Avenida Laurel, 300',
    hours: 'Entrada de emergência · 24 horas',
    phone: 'LH 4-0911',
    description: 'Hospital comunitário que atende Little Hope e a região superior do Vale Laurel.',
    detail: 'Horários de visita: das 14h às 16h e das 19h às 20h30. Após as 18h, utilize a entrada oeste.',
    note: 'Campanha de doação de sangue · 24 de maio'
  },
  {
    id: 'saint-agnes',
    name: 'Igreja de Santa Maria',
    shortName: 'Santa Maria',
    category: 'community',
    icon: 'church',
    marker: '08',
    x: 42.1,
    y: 28.6,
    address: 'Rua Hawthorne, 12',
    hours: 'Santuário aberto · 8h–18h',
    phone: 'LH 4-0142',
    description: 'Igreja histórica e salão comunitário próximos ao centro antigo.',
    detail: 'Visitantes podem conhecer os vitrais e consultar o pequeno acervo histórico da paróquia.',
    note: 'Encontro da primavera · domingo, às 16h'
  }
];

const mapLabels = [
  { text: 'North Hills', x: 43, y: 13 },
  { text: 'West End', x: 24, y: 26 },
  { text: 'Old Town', x: 39, y: 32 },
  { text: 'Downtown\nLittle Hope', x: 47, y: 46 },
  { text: 'East Side', x: 71, y: 36 },
  { text: 'South Little Hope', x: 43, y: 71 },
  { text: 'Industrial District', x: 80, y: 57 },
  { text: 'Countryside', x: 89, y: 23 },
  { text: 'Pinecrest Lake', x: 54, y: 9, size: 'small' },
  { text: 'Willow Creek Reservoir', x: 82, y: 84, size: 'small' }
];

const categoryLabels = {
  civic: 'Cívico',
  culture: 'Cultura',
  food: 'Gastronomia',
  nature: 'Natureza',
  health: 'Saúde',
  transport: 'Transporte',
  community: 'Comunidade'
};

const icons = {
  building: '<path d="M3 10h18M5 10V7l7-4 7 4v3M6 10v8m4-8v8m4-8v8m4-8v8M3 21h18"/>',
  book: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Zm16 0A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/>',
  film: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14m10-14v14M3 9h4m10 0h4M3 15h4m10 0h4"/>',
  utensils: '<path d="M6 3v8m-3-8v5a3 3 0 0 0 6 0V3M6 11v10m8-18v18m0-18c4 2 5 7 0 10"/>',
  bus: '<rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M8 7h8M7 19v2m10-2v2"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/>',
  tree: '<path d="M12 22v-7m-5 7h10M12 3 6 11h3l-4 6h14l-4-6h3L12 3Z"/>',
  cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/>',
  church: '<path d="M12 2v4m-2-2h4M5 22V10l7-4 7 4v12M9 22v-6h6v6M3 22h18"/>'
};

const header = document.getElementById('site-header');
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('primary-nav');
const markerHost = document.getElementById('map-markers');
const labelHost = document.getElementById('map-labels');
const viewport = document.getElementById('map-viewport');
const canvas = document.getElementById('map-canvas');

let selectedId = 'town-hall';
let activeCategory = 'all';
let zoom = 1;
let panX = 0;
let panY = 0;
let dragging = false;
let dragStart = null;

function iconSvg(iconName) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[iconName] || icons.building}</svg>`;
}

function updateHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 28);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

function renderLabels() {
  labelHost.innerHTML = '';

  mapLabels.forEach((label) => {
    const element = document.createElement('p');
    element.className = `map-label${label.size === 'small' ? ' map-label-small' : ''}`;
    element.style.left = `${label.x}%`;
    element.style.top = `${label.y}%`;
    element.innerHTML = label.text.replace('\n', '<br>');
    labelHost.appendChild(element);
  });
}

function selectLocation(id) {
  selectedId = id;
  const place = locations.find((item) => item.id === id);

  if (!place) return;

  document.getElementById('place-photo').className = `place-photo place-photo-${place.id}`;
  document.getElementById('place-category').textContent = categoryLabels[place.category];
  document.getElementById('place-number').textContent = `Referência no mapa ${place.marker}`;
  document.getElementById('place-name').textContent = place.name;
  document.getElementById('place-description').textContent = place.description;
  document.getElementById('place-address').textContent = place.address;
  document.getElementById('place-hours').textContent = place.hours;
  document.getElementById('place-phone').textContent = place.phone;
  document.getElementById('place-detail').textContent = place.detail;
  document.getElementById('place-note').textContent = place.note;

  renderMarkers();
}

function renderMarkers() {
  markerHost.innerHTML = '';

  locations
    .filter((place) => activeCategory === 'all' || place.category === activeCategory)
    .forEach((place) => {
      const button = document.createElement('button');
      const selected = selectedId === place.id;

      button.type = 'button';
      button.className = `map-marker${selected ? ' selected' : ''}`;
      button.dataset.category = place.category;
      button.style.left = `${place.x}%`;
      button.style.top = `${place.y}%`;
      button.setAttribute('aria-label', `Ver ${place.name}`);
      button.setAttribute('aria-pressed', String(selected));
      button.innerHTML = `
        <span class="marker-icon" aria-hidden="true">${iconSvg(place.icon)}</span>
        <strong class="marker-label">${place.shortName}</strong>
      `;

      button.addEventListener('click', () => selectLocation(place.id));
      markerHost.appendChild(button);
    });
}

document.querySelectorAll('.map-filter button').forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;

    document.querySelectorAll('.map-filter button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    renderMarkers();
  });
});

function clampPan() {
  const maxX = viewport.clientWidth * (zoom - 1) / 2;
  const maxY = viewport.clientHeight * (zoom - 1) / 2;

  panX = Math.max(-maxX, Math.min(maxX, panX));
  panY = Math.max(-maxY, Math.min(maxY, panY));
}

function updateMap() {
  clampPan();
  canvas.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoom})`;
}

function setZoom(value) {
  zoom = Math.max(1, Math.min(2.15, Number(value.toFixed(2))));
  updateMap();
}

function resetMap() {
  zoom = 1;
  panX = 0;
  panY = 0;
  updateMap();
}

document.getElementById('zoom-in').addEventListener('click', () => setZoom(zoom + 0.12));
document.getElementById('zoom-out').addEventListener('click', () => setZoom(zoom - 0.12));
document.getElementById('reset-map').addEventListener('click', resetMap);

viewport.addEventListener('wheel', (event) => {
  event.preventDefault();
  setZoom(zoom + (event.deltaY < 0 ? 0.1 : -0.1));
}, { passive: false });

viewport.addEventListener('pointerdown', (event) => {
  if (event.target.closest('button')) return;

  viewport.setPointerCapture(event.pointerId);
  dragging = true;
  viewport.classList.add('is-dragging');
  dragStart = {
    x: event.clientX,
    y: event.clientY,
    panX,
    panY
  };
});

viewport.addEventListener('pointermove', (event) => {
  if (!dragging) return;

  panX = dragStart.panX + event.clientX - dragStart.x;
  panY = dragStart.panY + event.clientY - dragStart.y;
  updateMap();
});

['pointerup', 'pointercancel'].forEach((type) => {
  viewport.addEventListener(type, () => {
    dragging = false;
    viewport.classList.remove('is-dragging');
  });
});

viewport.addEventListener('keydown', (event) => {
  const movement = 28;

  if (event.key === '+' || event.key === '=') setZoom(zoom + 0.12);
  else if (event.key === '-') setZoom(zoom - 0.12);
  else if (event.key === '0') resetMap();
  else if (event.key === 'ArrowLeft') panX += movement;
  else if (event.key === 'ArrowRight') panX -= movement;
  else if (event.key === 'ArrowUp') panY += movement;
  else if (event.key === 'ArrowDown') panY -= movement;
  else return;

  event.preventDefault();
  updateMap();
});

window.addEventListener('resize', updateMap);

/*
 * Ferramenta de desenvolvimento para encontrar x/y.
 * Abra little-hope.html?coords=1 e clique no mapa.
 */
const coordinateMode = new URLSearchParams(window.location.search).has('coords');

if (coordinateMode) {
  const readout = document.createElement('output');
  readout.className = 'coordinate-readout';
  readout.textContent = 'Clique no mapa para obter x/y';
  viewport.appendChild(readout);

  canvas.addEventListener('click', (event) => {
    if (event.target.closest('.map-marker')) return;

    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const coordinates = `x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`;

    readout.textContent = coordinates;
    console.log({ x: Number(x.toFixed(1)), y: Number(y.toFixed(1)) });
  });
}

renderLabels();
renderMarkers();
selectLocation(selectedId);
