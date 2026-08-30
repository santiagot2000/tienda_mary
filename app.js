// =====================================================
//  TIENDA LOS PECADOS DE MARY – The New School
//  Datos y lógica interactiva
// =====================================================

const CATEGORIES = [
  {
    id: 'mecato',
    name: '🍟 Mecato',
    emoji: '🍟',
    items: [
      { name: 'Arepitas',               price: 3500 },
      { name: 'Arepitas con limón',     price: 3800 },
      { name: 'Maizitos',               price: 3500 },
      { name: 'Papas chepes',           price: 3500 },
      { name: 'Papas chepes con limón', price: 3800 },
      { name: 'Papas naturales',        price: 3500 },
      { name: 'Platanitos maduros',     price: 3500 },
      { name: 'Platanitos verdes',      price: 3500 },
      { name: 'Rosquitas',              price: 3500 },
    ]
  },
  {
    id: 'galletas',
    name: '🍪 Galletas',
    emoji: '🍪',
    items: [
      { name: 'Artesanal de avena',        price: 3000 },
      { name: 'Club Social integral',      price: 2500 },
      { name: 'Club Social tradicional',   price: 2500 },
      { name: 'Tosh chocolate',            price: 2800 },
      { name: 'Tosh fresa',               price: 2800 },
      { name: 'Tosh miel',                price: 2500 },
      { name: 'Tosh vainilla',            price: 2800 },
    ]
  },
  {
    id: 'snacks',
    name: '🧀 Snacks Salados',
    emoji: '🧀',
    items: [
      { name: 'Almojábana',           price: 4000 },
      { name: 'Arepa con queso',      price: 6000 },
      { name: 'Arepa de chócolo',     price: 7000 },
      { name: 'Palito de queso',      price: 4000 },
      { name: 'Pandequeso',           price: 3500 },
      { name: 'Pandeyuca',            price: 4000 },
      { name: 'Sándwich de queso',    price: 8000 },
      { name: 'Sándwich doble queso', price: 9000 },
    ]
  },
  {
    id: 'pasteleria',
    name: '🥐 Pastelería',
    emoji: '🥐',
    items: [
      { name: 'Mini Pastel de pollo',  price: 2000 },
      { name: 'Pastel de chocolate',   price: 6000 },
      { name: 'Pastel de pollo',       price: 6000 },
      { name: 'Pastel de queso',       price: 6000 },
      { name: 'Rollo de canela',       price: 6000 },
      { name: 'Blondie de vainilla',   price: 6000 },
    ]
  },
  {
    id: 'cremhelado',
    name: '🍦 Crem Helado',
    emoji: '🍦',
    items: [
      { name: 'Artesanal Tres leches',    price: 5000 },
      { name: 'Helado de Vaso',          price: 3800 },
      { name: 'Paleta limón',            price: 4000 },
      { name: 'Paleta naranja',          price: 4000 },
      { name: 'Platillo Arequipe',       price: 5000 },
      { name: 'Platillo Tres sabores',   price: 5000 },
      { name: 'Platillo vainilla-pasas', price: 5000 },
      { name: 'Tosh fresa',             price: 5000 },
      { name: 'Tosh pasión',            price: 5000 },
    ]
  },
  {
    id: 'lacteos',
    name: '🥛 Lácteos',
    emoji: '🥛',
    items: [
      { name: 'Avena',          price: 4200 },
      { name: 'Kumis',          price: 3800 },
      { name: 'Leche',          price: 3000 },
      { name: 'Yogurt en bolsa', price: 3000 },
      { name: 'Yogurt en vaso', price: 4500 },
      { name: 'Yox',            price: 3500 },
    ]
  },
  {
    id: 'premium',
    name: '⭐ Premium',
    emoji: '⭐',
    items: [
      { name: 'Fresas con crema',          price: 8000  },
      { name: 'Fruta con helado',          price: 8500  },
      { name: 'Fruta con queso y helado',  price: 11000 },
      { name: 'Granola con fruta',         price: 8500  },
      { name: 'Granola con fruta y helado',price: 11000 },
      { name: 'Oblea con arequipe',        price: 3000  },
      { name: 'Oblea con arequipe y fruta',price: 7000  },
      { name: 'Oblea con arequipe y queso',price: 5000  },
    ]
  },
  {
    id: 'bebidas',
    name: '🥤 Bebidas',
    emoji: '🥤',
    items: [
      { name: 'Agua en caja',          price: 4000  },
      { name: 'Agua en vaso',          price: 2000  },
      { name: 'Aguapanela',            price: 2500  },
      { name: 'Tinto',                 price: 2500  },
      { name: 'Café con leche',        price: 4000  },
      { name: 'Café frappé',           price: 8000  },
      { name: 'Chocolate',             price: 3500  },
      { name: 'Chocolate en leche',    price: 4500  },
      { name: 'Guandolo grande',       price: 4500  },
      { name: 'Guandolo pequeño',      price: 3000  },
      { name: 'Jugo en agua',          price: 8000  },
      { name: 'Jugo en leche',         price: 10000 },
      { name: 'Milo caliente',         price: 4000  },
      { name: 'Milo frappé',           price: 8000  },
      { name: 'Milo frío',             price: 4000  },
      { name: 'Limonada frappé pequeña', price: 4500  },
      { name: 'Limonada frappé grande',  price: 6000  },
      { name: 'Michelada',             price: 6000  },
      { name: 'Michelada con fruta',   price: 8500  },
      { name: 'Soda',                  price: 4000  },
    ]
  },
  {
    id: 'manis',
    name: '🥜 Maníes',
    emoji: '🥜',
    items: [
      { name: 'Maní arándanos', price: 4000 },
      { name: 'Maní salado',    price: 3800 },
    ]
  },
  {
    id: 'chocolatinas',
    name: '🍫 Chocolatinas',
    emoji: '🍫',
    items: [
      { name: 'Chocolatina Jet',   price: 2000 },
      { name: 'Chocolatina Jumbo', price: 2000 },
      { name: 'Hershey\'s',        price: 2000 },
      { name: 'Mini Chocoramo',    price: 2000 },
    ]
  },
  {
    id: 'frutas',
    name: '🍉 Frutas',
    emoji: '🍉',
    items: [
      { name: 'Banano',        price: 1200 },
      { name: 'Fresa',         price: 5500 },
      { name: 'Guayaba',       price: 4500 },
      { name: 'Mango maduro',  price: 3500 },
      { name: 'Mango verde',   price: 3500 },
      { name: 'Manzana',       price: 4500 },
      { name: 'Naranja',       price: 2000 },
      { name: 'Papaya',        price: 4000 },
      { name: 'Piña',          price: 4000 },
      { name: 'Sandía',        price: 4000 },
      { name: 'Uvas',          price: 7000 },
    ]
  },
  {
    id: 'helados',
    name: '🧊 Helados La Fresita',
    emoji: '🧊',
    items: [
      { name: 'Paleta mango biche', price: 5000 },
      { name: 'Paleta lulo',        price: 5000 },
      { name: 'Paleta coco',        price: 5000 },
      { name: 'Paleta maracuyá',    price: 5000 },
      { name: 'Paleta arequipe',    price: 5000 },
    ]
  },
  {
    id: 'cereales',
    name: '🥣 Cereales',
    emoji: '🥣',
    items: [
      { name: 'Choco Krispis (Leche)', price: 6500 },
      { name: 'Froot Loops (Leche)',   price: 6500 },
      { name: 'Granola (Lácteos)',     price: 7000 },
      { name: 'Zucaritas (Leche)',     price: 6500 },
    ]
  },
  {
    id: 'extras',
    name: '➕ Extras',
    emoji: '➕',
    items: [
      { name: 'Leche en polvo', price: 2000 },
      { name: 'Limón',          price:  700 },
    ]
  }
];

// Emojis por producto (búsqueda por palabras clave)
function getEmoji(name) {
  const n = name.toLowerCase();
  if (n.includes('arepa'))         return '🫓';
  if (n.includes('maizito'))       return '🌽';
  if (n.includes('papa'))          return '🍟';
  if (n.includes('platan'))        return '🍌';
  if (n.includes('rosquita'))      return '🍩';
  if (n.includes('galleta') || n.includes('tosh') || n.includes('club social') || n.includes('avena')) return '🍪';
  if (n.includes('almojábana') || n.includes('pandequeso') || n.includes('pandeyuca') || n.includes('palito de queso')) return '🧀';
  if (n.includes('sándwich') || n.includes('sandwich')) return '🥪';
  if (n.includes('pastel de pollo') || n.includes('mini pastel')) return '🥧';
  if (n.includes('pastel de chocolate') || n.includes('blondie')) return '🍫';
  if (n.includes('pastel de queso')) return '🧁';
  if (n.includes('rollo de canela')) return '🥐';
  if (n.includes('helado de vaso') || n.includes('tres leches') || n.includes('platillo')) return '🍨';
  if (n.includes('paleta') && !n.includes('fresita') && !n.includes('mango biche') && !n.includes('lulo') && !n.includes('coco') && !n.includes('maracuyá') && !n.includes('arequipe')) return '🍡';
  if (n.includes('paleta mango') || n.includes('paleta lulo') || n.includes('paleta coco') || n.includes('paleta maracuyá') || n.includes('paleta arequipe')) return '🍧';
  if (n.includes('avena') || n.includes('kumis') || n.includes('leche') || n.includes('yox')) return '🥛';
  if (n.includes('yogurt')) return '🍶';
  if (n.includes('fresas con crema')) return '🍓';
  if (n.includes('fruta con helado') || n.includes('fruta con queso')) return '🍨';
  if (n.includes('granola con fruta')) return '🥗';
  if (n.includes('oblea')) return '🥞';
  if (n.includes('agua'))            return '💧';
  if (n.includes('aguapanela'))      return '🍵';
  if (n.includes('tinto'))           return '☕';
  if (n.includes('café'))            return '☕';
  if (n.includes('chocolate'))       return '🍫';
  if (n.includes('guandolo'))        return '🧃';
  if (n.includes('jugo'))            return '🥤';
  if (n.includes('milo'))            return '🥤';
  if (n.includes('limonada'))        return '🍋';
  if (n.includes('michelada'))       return '🍹';
  if (n.includes('soda'))            return '🫧';
  if (n.includes('maní'))            return '🥜';
  if (n.includes('chocolatina') || n.includes('hershey') || n.includes('chocoramo')) return '🍫';
  if (n.includes('banano'))          return '🍌';
  if (n.includes('fresa'))           return '🍓';
  if (n.includes('guayaba'))         return '🍈';
  if (n.includes('mango'))           return '🥭';
  if (n.includes('manzana'))         return '🍎';
  if (n.includes('naranja'))         return '🍊';
  if (n.includes('papaya'))          return '🍑';
  if (n.includes('piña'))            return '🍍';
  if (n.includes('sandía'))          return '🍉';
  if (n.includes('uvas'))            return '🍇';
  if (n.includes('cereal') || n.includes('krispis') || n.includes('loops') || n.includes('zucaritas') || n.includes('granola')) return '🥣';
  if (n.includes('limón'))           return '🍋';
  if (n.includes('leche en polvo'))  return '🥛';
  return '🛍️';
}

function formatPrice(price) {
  return '$ ' + price.toLocaleString('es-CO');
}

// Quita tildes y pasa a minúscula para búsqueda sin acento
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// ---- Estado ----
let currentCat = 'all';
let searchTerm  = '';

// ---- Render ----
function render() {
  const grid  = document.getElementById('productGrid');
  const noRes = document.getElementById('noResults');
  grid.innerHTML = '';

  const q = normalizar(searchTerm.trim());

  // Filtra categorías
  const filtered = CATEGORIES
    .map(cat => {
      // Si hay categoría activa (no "all"), solo esa
      if (currentCat !== 'all' && cat.id !== currentCat) return null;
      // Filtra items por búsqueda sin tilde ni mayúsculas
      const items = cat.items.filter(item =>
        q === '' || normalizar(item.name).includes(q)
      );
      if (items.length === 0) return null;
      return { ...cat, items };
    })
    .filter(Boolean);

  if (filtered.length === 0) {
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  filtered.forEach(cat => {
    // Encabezado de categoría
    const heading = document.createElement('div');
    heading.className = 'cat-heading';
    heading.innerHTML = `
      <span class="cat-heading-text">${cat.name}</span>
      <div class="cat-heading-line"></div>
    `;
    grid.appendChild(heading);

    // Cards
    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <span class="card-emoji">${getEmoji(item.name)}</span>
        <span class="card-name">${item.name}</span>
        <span class="card-price">${formatPrice(item.price)}</span>
      `;
      grid.appendChild(card);
    });
  });
}

// ---- Eventos ----
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  });
});

document.getElementById('searchInput').addEventListener('input', e => {
  searchTerm = e.target.value;
  // Si hay búsqueda, resetear categoría a "all" para buscar en todo
  if (searchTerm.trim() !== '') {
    currentCat = 'all';
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-cat="all"]').classList.add('active');
  }
  render();
});

// ---- Init ----
render();

// ---- Flechas de navegación de categorías ----
const catNav     = document.getElementById('catNav');
const arrowLeft  = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const SCROLL_AMOUNT = 180;

arrowLeft.addEventListener('click', () => {
  catNav.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
});

arrowRight.addEventListener('click', () => {
  catNav.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
});

// Mostrar/ocultar flechas según posición del scroll
function updateArrows() {
  const atStart = catNav.scrollLeft <= 4;
  const atEnd   = catNav.scrollLeft + catNav.clientWidth >= catNav.scrollWidth - 4;
  arrowLeft.style.opacity  = atStart ? '0.35' : '1';
  arrowLeft.style.pointerEvents = atStart ? 'none' : 'auto';
  arrowRight.style.opacity = atEnd   ? '0.35' : '1';
  arrowRight.style.pointerEvents = atEnd ? 'none' : 'auto';
}

catNav.addEventListener('scroll', updateArrows);
updateArrows();

// ---- Botón subir arriba ----
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
