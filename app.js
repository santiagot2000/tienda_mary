// =====================================================
//  TIENDA LOS PECADOS DE MARY – The New School
//  Datos y lógica interactiva actualizada
// =====================================================

const CATEGORIES = [
  {
    id: 'mecato',
    name: '🍟 Mecato',
    emoji: '🍟',
    items: [
      { name: 'Arepitas',               price: 3500, desc: 'Deliciosas arepitas crujientes, el clásico mecato del colegio.' },
      { name: 'Arepitas con limón',     price: 3800, desc: 'Arepitas crujientes con un toque ácido y refrescante de limón.' },
      { name: 'Maizitos',               price: 3500, desc: 'Maizitos tostados y sazonados para picar en el recreo.' },
      { name: 'Papas chepes',           price: 3500, desc: 'Papas fritas tradicionales estilo chepes bien crujientes.' },
      { name: 'Papas chepes con limón', price: 3800, desc: 'Papas chepes con el toque perfecto de sal y limón.' },
      { name: 'Papas naturales',        price: 3500, desc: 'Papas fritas clásicas con sal marina.' },
      { name: 'Platanitos maduros',     price: 3500, desc: 'Platanitos maduros dulces y crujientes.' },
      { name: 'Platanitos verdes',      price: 3500, desc: 'Platanitos verdes con sal, crujientes y salados.' },
      { name: 'Rosquitas',              price: 3500, desc: 'Rosquitas tradicionales tostadas y deliciosas.' },
    ]
  },
  {
    id: 'galletas',
    name: '🍪 Galletas',
    emoji: '🍪',
    items: [
      { name: 'Artesanal de avena',        price: 3000, desc: 'Galleta casera de avena con textura suave y nutritiva.' },
      { name: 'Club Social integral',      price: 2500, desc: 'Galletas Club Social integrales para un snack ligero.' },
      { name: 'Club Social tradicional',   price: 2500, desc: 'Galletas Club Social clásicas saladas.' },
      { name: 'Tosh chocolate',            price: 2800, desc: 'Galleta Tosh saludable con trozos de chocolate.' },
      { name: 'Tosh fresa',               price: 2800, desc: 'Galleta Tosh con relleno de fresa natural.' },
      { name: 'Tosh miel',                price: 2500, desc: 'Galletas Tosh con delicioso toque de miel.' },
      { name: 'Tosh vainilla',            price: 2800, desc: 'Galleta Tosh crujiente sabor vainilla.' },
    ]
  },
  {
    id: 'snacks',
    name: '🧀 Snacks Salados',
    emoji: '🧀',
    items: [
      { name: 'Almojábana',           price: 4000, desc: 'Almojábana caliente tradicional con abundante queso costeño.' },
      { name: 'Arepa con queso',      price: 6000, desc: 'Arepa de maíz blanco asada rellena con queso derretido.' },
      { name: 'Arepa de chócolo',     price: 7000, desc: 'Arepa de maíz dulce con quesito fresco.' },
      { name: 'Palito de queso',      price: 4000, desc: 'Dedo de queso horneado con masa crocante.' },
      { name: 'Pandequeso',           price: 3500, desc: 'Pandequeso esponjoso y recién horneado.' },
      { name: 'Pandeyuca',            price: 4000, desc: 'Pandeyuca crocante por fuera y suave por dentro.' },
      { name: 'Sándwich de queso',    price: 8000, desc: 'Sándwich caliente con queso derretido en pan fresco.' },
      { name: 'Sándwich doble queso', price: 9000, desc: 'Sándwich especial con doble capa de queso mozzarella.' },
    ]
  },
  {
    id: 'pasteleria',
    name: '🥐 Pastelería',
    emoji: '🥐',
    items: [
      { name: 'Mini Pastel de pollo',  price: 2000, desc: 'Mini porción de hojaldre relleno con pollo desmechado.' },
      { name: 'Pastel de chocolate',   price: 6000, desc: 'Porción de pastel húmedo de chocolate con cobertura cremosa.' },
      { name: 'Pastel de pollo',       price: 6000, desc: 'Hojaldre relleno de pollo jugoso y bien sazonado.' },
      { name: 'Pastel de queso',       price: 6000, desc: 'Hojaldre dulce y salado con relleno de queso fundido.' },
      { name: 'Rollo de canela',       price: 6000, desc: 'Rollo esponjoso glaseado con canela aromática.' },
      { name: 'Blondie de vainilla',   price: 6000, desc: 'Cuadradito dulce de vainilla con trozos de chocolate blanco.' },
    ]
  },
  {
    id: 'cremhelado',
    name: '🍦 Crem Helado',
    emoji: '🍦',
    items: [
      { name: 'Artesanal Tres leches',    price: 5000, desc: 'Helado cremoso con el inconfundible sabor a tres leches.' },
      { name: 'Helado de Vaso',          price: 3800, desc: 'Vaso de helado Crem Helado tradicional surtido.' },
      { name: 'Paleta limón',            price: 4000, desc: 'Paleta de agua de limón natural refrescante.' },
      { name: 'Paleta naranja',          price: 4000, desc: 'Paleta de agua sabor naranja cítrica.' },
      { name: 'Platillo Arequipe',       price: 5000, desc: 'Sandwich de galleta y helado de arequipe.' },
      { name: 'Platillo Tres sabores',   price: 5000, desc: 'Platillo con capas de vainilla, chocolate y fresa.' },
      { name: 'Platillo vainilla-pasas', price: 5000, desc: 'Platillo clásico de vainilla con uvas pasas al ron.' },
      { name: 'Tosh fresa',             price: 5000, desc: 'Paleta Tosh de yogur y fresa baja en calorías.' },
      { name: 'Tosh pasión',            price: 5000, desc: 'Paleta Tosh con maracuyá y frutos amarillos.' },
    ]
  },
  {
    id: 'lacteos',
    name: '🥛 Lácteos',
    emoji: '🥛',
    items: [
      { name: 'Avena',          price: 4200, desc: 'Avena líquida fría o tibia, nutritiva y espesa.' },
      { name: 'Kumis',          price: 3800, desc: 'Kumis cremoso y refrescante en vaso.' },
      { name: 'Leche',          price: 3000, desc: 'Bolsa o botellita de leche fresca pasteurizada.' },
      { name: 'Yogurt en bolsa', price: 3000, desc: 'Yogurt de frutas en presentación personal.' },
      { name: 'Yogurt en vaso', price: 4500, desc: 'Vaso de yogurt espeso con trozos de fruta.' },
      { name: 'Yox',            price: 3500, desc: 'Bebida láctea fermentada con probióticos y vitaminas.' },
    ]
  },
  {
    id: 'premium',
    name: '⭐ Premium',
    emoji: '⭐',
    items: [
      { name: 'Fresas con crema',          price: 8000,  desc: 'Fresas frescas picadas con crema chantilly suave.' },
      { name: 'Fruta con helado',          price: 8500,  desc: 'Ensalada de frutas mixtas con una bola de helado.' },
      { name: 'Fruta con queso y helado',  price: 11000, desc: 'Copa premium con frutas, queso campesino rallado y helado.' },
      { name: 'Granola con fruta',         price: 8500,  desc: 'Tazón de granola crujiente con frutas frescas y miel.' },
      { name: 'Granola con fruta y helado',price: 11000, desc: 'Super copa de granola, frutas tropicales y helado.' },
      { name: 'Oblea con arequipe',        price: 3000,  desc: 'Oblea crujiente untada con abundante arequipe casero.' },
      { name: 'Oblea con arequipe y fruta',price: 7000,  desc: 'Oblea rellena con arequipe y fruta fresca en rodajas.' },
      { name: 'Oblea con arequipe y queso',price: 5000,  desc: 'Oblea tradicional con arequipe y queso rallado.' },
    ]
  },
  {
    id: 'bebidas',
    name: '🥤 Bebidas',
    emoji: '🥤',
    items: [
      { name: 'Agua en caja',          price: 4000,  desc: 'Agua pura de manantial en empaque ecológico tetra pak.' },
      { name: 'Agua en vaso',          price: 2000,  desc: 'Vaso de agua pura sellado.' },
      { name: 'Aguapanela',            price: 2500,  desc: 'Aguapanela caliente o fría con toque de limón.' },
      { name: 'Tinto',                 price: 2500,  desc: 'Café negro colombiano caliente recién colado.' },
      { name: 'Café con leche',        price: 4000,  desc: 'Café espresso mezclado con leche caliente espumada.' },
      { name: 'Café frappé',           price: 8000,  desc: 'Bebida fría de café granizado con chantilly.' },
      { name: 'Chocolate',             price: 3500,  desc: 'Chocolate caliente tradicional espumoso.' },
      { name: 'Chocolate en leche',    price: 4500,  desc: 'Chocolate caliente preparado 100% en leche.' },
      { name: 'Guandolo grande',       price: 4500,  desc: 'Aguapanela con limón bien fría en vaso grande.' },
      { name: 'Guandolo pequeño',      price: 3000,  desc: 'Aguapanela con limón bien fría en vaso mediano.' },
      { name: 'Jugo en agua',          price: 8000,  desc: 'Jugo natural de fruta en agua (mango, maracuyá, lulo, fresa).' },
      { name: 'Jugo en leche',         price: 10000, desc: 'Jugo natural de fruta en leche bien cremoso.' },
      { name: 'Milo caliente',         price: 4000,  desc: 'Vaso de Milo caliente bien achocolatado.' },
      { name: 'Milo frappé',           price: 8000,  desc: 'Milo granizado con hielo y crema chantilly.' },
      { name: 'Milo frío',             price: 4000,  desc: 'Milo frío refrescante en leche.' },
      { name: 'Limonada frappé pequeña', price: 4500, desc: 'Limonada granizada frappé refrescante en vaso pequeño.' },
      { name: 'Limonada frappé grande',  price: 6000, desc: 'Limonada granizada frappé refrescante en vaso grande.' },
      { name: 'Michelada',             price: 6000,  desc: 'Bebida con limón, sal y soda refrescante.' },
      { name: 'Michelada con fruta',   price: 8500,  desc: 'Michelada especial acompañada con trozos de mango verde.' },
      { name: 'Soda',                  price: 4000,  desc: 'Soda con gas bien helada.' },
    ]
  },
  {
    id: 'manis',
    name: '🥜 Maníes',
    emoji: '🥜',
    items: [
      { name: 'Maní arándanos', price: 4000, desc: 'Mezcla saludable de maní tostado y arándanos deshidratados.' },
      { name: 'Maní salado',    price: 3800, desc: 'Maní tostado y salado crocante.' },
    ]
  },
  {
    id: 'chocolatinas',
    name: '🍫 Chocolatinas',
    emoji: '🍫',
    items: [
      { name: 'Chocolatina Jet',   price: 2000, desc: 'La clásica chocolatina colombiana con lámina coleccionable.' },
      { name: 'Chocolatina Jumbo', price: 2000, desc: 'Chocolatina con maní crujiente.' },
      { name: 'Hershey',           price: 2000, desc: 'Barra de chocolate con leche Hershey.' },
      { name: 'Mini Chocoramo',    price: 2000, desc: 'Ponqué de vainilla cubierto de chocolate en formato mini.' },
    ]
  },
  {
    id: 'frutas',
    name: '🍉 Frutas',
    emoji: '🍉',
    items: [
      { name: 'Banano',        price: 1200, desc: 'Banano fresco dulce y nutritivo.' },
      { name: 'Fresa',         price: 5500, desc: 'Porción de fresas frescas lavadas y picadas.' },
      { name: 'Guayaba',       price: 4500, desc: 'Guayaba dulce en porción fresca.' },
      { name: 'Mango maduro',  price: 3500, desc: 'Vaso de mango maduro picado.' },
      { name: 'Mango verde',   price: 3500, desc: 'Vaso de mango verde con sal y limón opcional.' },
      { name: 'Manzana',       price: 4500, desc: 'Manzana roja o verde fresca entera.' },
      { name: 'Naranja',       price: 2000, desc: 'Naranja fresca en gajos.' },
      { name: 'Papaya',        price: 4000, desc: 'Porción de papaya dulce picada.' },
      { name: 'Piña',          price: 4000, desc: 'Porción de piña oro miel dulce.' },
      { name: 'Sandía',        price: 4000, desc: 'Tajada o porción de sandía fresca.' },
      { name: 'Uvas',          price: 7000, desc: 'Racimo o vaso de uvas sin semilla.' },
    ]
  },
  {
    id: 'helados',
    name: '🧊 Helados La Fresita',
    emoji: '🧊',
    items: [
      { name: 'Paleta mango biche', price: 5000, desc: 'Paleta artesanal de mango biche con sal y limón.' },
      { name: 'Paleta lulo',        price: 5000, desc: 'Paleta artesanal de lulo 100% natural.' },
      { name: 'Paleta coco',        price: 5000, desc: 'Paleta cremosa de coco natural con trocitos.' },
      { name: 'Paleta maracuyá',    price: 5000, desc: 'Paleta artesanal ácida y dulce de maracuyá.' },
      { name: 'Paleta arequipe',    price: 5000, desc: 'Paleta cremosa rellena de arequipe.' },
    ]
  },
  {
    id: 'cereales',
    name: '🥣 Cereales',
    emoji: '🥣',
    items: [
      { name: 'Choco Krispis (Leche)', price: 6500, desc: 'Cereal de arroz inflado con chocolate servido con leche fresca.' },
      { name: 'Froot Loops (Leche)',   price: 6500, desc: 'Cereal frutal de colores servido con leche fresca.' },
      { name: 'Granola (Lácteos)',     price: 7000, desc: 'Granola con avena y frutos secos servida con lácteos.' },
      { name: 'Zucaritas (Leche)',     price: 6500, desc: 'Hojuelas de maíz escarchadas con azúcar servidas con leche.' },
    ]
  },
  {
    id: 'extras',
    name: '➕ Extras',
    emoji: '➕',
    items: [
      { name: 'Leche en polvo', price: 2000, desc: 'Porción extra de leche en polvo para tus bebidas o frutas.' },
      { name: 'Limón',          price:  700, desc: 'Limón fresco para acompañar tus mecatos o bebidas.' },
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

// =====================================================
//  ESTADO Y PERSISTENCIA (localStorage)
// =====================================================
let currentCat = 'all';
let searchTerm = '';
let currentSort = 'default';

let cart = [];
try {
  const savedCart = localStorage.getItem('mary_cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
  cart = [];
}

let favorites = new Set();
try {
  const savedFavs = localStorage.getItem('mary_favorites');
  if (savedFavs) favorites = new Set(JSON.parse(savedFavs));
} catch (e) {
  favorites = new Set();
}

function saveCart() {
  localStorage.setItem('mary_cart', JSON.stringify(cart));
}

function saveFavorites() {
  localStorage.setItem('mary_favorites', JSON.stringify([...favorites]));
  updateFavoritesBadge();
}

function updateFavoritesBadge() {
  const favBadge = document.getElementById('favCount');
  if (favBadge) {
    favBadge.textContent = favorites.size;
  }
}

// =====================================================
//  SISTEMA DE NOTIFICACIONES FLOTANTES (TOASTS)
// =====================================================
function showToast(message, emoji = '✨') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${emoji}</span> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2200);
}

// =====================================================
//  SISTEMA DE SONIDOS SUTILES (WEB AUDIO API)
// =====================================================
let audioCtx = null;
let soundEnabled = true;

try {
  const savedSound = localStorage.getItem('mary_sound_enabled');
  if (savedSound !== null) soundEnabled = savedSound === 'true';
} catch (e) {
  soundEnabled = true;
}

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playPopSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.20, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {}
}

function playFavSound(isAdding = true) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    if (isAdding) {
      osc.frequency.setValueAtTime(523.25, now);       // C5
      osc.frequency.setValueAtTime(659.25, now + 0.05); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.10); // G5
    } else {
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.setValueAtTime(440.00, now + 0.08);
    }

    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.16);
  } catch (e) {}
}

function playTrashSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.14);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.14);
  } catch (e) {}
}

function playClearSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.18);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  } catch (e) {}
}

function updateSoundToggleUI() {
  const soundIcon = document.getElementById('soundIcon');
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundIcon) soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundBtn) {
    soundBtn.title = soundEnabled ? 'Sonidos activados (clic para silenciar)' : 'Sonidos silenciados (clic para activar)';
  }
}

const soundToggleBtn = document.getElementById('soundToggleBtn');
if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('mary_sound_enabled', soundEnabled ? 'true' : 'false');
    updateSoundToggleUI();
    if (soundEnabled) {
      playPopSound();
      showToast('Efectos de sonido activados', '🔊');
    } else {
      showToast('Sonidos silenciados', '🔇');
    }
  });
}

// =====================================================
//  LÓGICA DEL CARRITO
// =====================================================
function addToCart(name, price, qty = 1) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ name, price, qty });
  }
  saveCart();
  updateCartUI();

  // Sonido y feedback visual
  playPopSound();
  const cartBadge = document.getElementById('cartBadge');
  if (cartBadge) {
    cartBadge.classList.remove('cart-pulse');
    void cartBadge.offsetWidth;
    cartBadge.classList.add('cart-pulse');
  }

  showToast(`¡${qty > 1 ? qty + 'x ' : ''}${name} agregado al pedido!`, '🛒');
}

function updateCartQty(name, delta, itemElement = null) {
  const item = cart.find(i => i.name === name);
  if (!item) return;

  if (item.qty + delta <= 0) {
    // Animación de borrado
    playTrashSound();
    
    // Buscar el elemento en el DOM si no vino por parámetro
    let targetEl = itemElement;
    if (!targetEl) {
      targetEl = document.querySelector(`[data-cart-item="${name}"]`);
    }

    if (targetEl) {
      targetEl.classList.add('removing');
      setTimeout(() => {
        cart = cart.filter(i => i.name !== name);
        saveCart();
        updateCartUI();
        showToast(`¡${name} eliminado!`, '🗑️');
      }, 350);
    } else {
      cart = cart.filter(i => i.name !== name);
      saveCart();
      updateCartUI();
      showToast(`¡${name} eliminado!`, '🗑️');
    }
  } else {
    item.qty += delta;
    playPopSound();
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  if (cart.length === 0) return;
  const items = document.querySelectorAll('.cart-item');
  playClearSound();

  if (items.length > 0) {
    items.forEach((el, idx) => {
      el.style.animationDelay = `${idx * 0.04}s`;
      el.classList.add('removing');
    });
    setTimeout(() => {
      cart = [];
      saveCart();
      updateCartUI();
      showToast('¡Carrito vaciado correctamente!', '🗑️');
    }, 380);
  } else {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('¡Carrito vaciado correctamente!', '🗑️');
  }
}

function updateCartUI() {
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotal');
  const cartTotalItems = document.getElementById('cartTotalItems');
  const cartCountHeader = document.getElementById('cartCountHeader');

  const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);

  if (cartBadge) cartBadge.textContent = totalQty;
  if (cartTotal) cartTotal.textContent = formatPrice(totalPrice);
  if (cartTotalItems) cartTotalItems.textContent = totalQty;
  if (cartCountHeader) cartCountHeader.textContent = `${totalQty} ${totalQty === 1 ? 'producto' : 'productos'}`;

  if (!cartItemsList) return;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<p class="empty-cart-msg">Tu pedido está vacío 🥑</p>';
    return;
  }

  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.setAttribute('data-cart-item', item.name);

    const info = document.createElement('div');
    info.className = 'cart-item-info';
    info.innerHTML = `
      <span class="cart-item-title">${item.name}</span>
      <span class="cart-item-price">${formatPrice(item.price * item.qty)} (${formatPrice(item.price)} c/u)</span>
    `;

    const controls = document.createElement('div');
    controls.className = 'cart-item-controls';

    const btnMinus = document.createElement('button');
    btnMinus.className = 'cart-qty-btn';
    btnMinus.textContent = '-';
    btnMinus.setAttribute('aria-label', `Disminuir ${item.name}`);
    btnMinus.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCartQty(item.name, -1, div);
    });

    const qtySpan = document.createElement('span');
    qtySpan.className = 'cart-item-qty';
    qtySpan.textContent = item.qty;

    const btnPlus = document.createElement('button');
    btnPlus.className = 'cart-qty-btn';
    btnPlus.textContent = '+';
    btnPlus.setAttribute('aria-label', `Aumentar ${item.name}`);
    btnPlus.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCartQty(item.name, 1, div);
    });

    controls.appendChild(btnMinus);
    controls.appendChild(qtySpan);
    controls.appendChild(btnPlus);

    div.appendChild(info);
    div.appendChild(controls);
    cartItemsList.appendChild(div);
  });
}

// =====================================================
//  FAVORITOS
// =====================================================
function toggleFavorite(name) {
  if (favorites.has(name)) {
    favorites.delete(name);
    playFavSound(false);
    showToast(`Eliminado de favoritos`, '💔');
  } else {
    favorites.add(name);
    playFavSound(true);
    showToast(`¡Agregado a favoritos!`, '⭐');
  }
  saveFavorites();
  render();
}

// =====================================================
//  MODAL DE DETALLE DE PRODUCTO
// =====================================================
const productModal = document.getElementById('productModal');
const productModalCloseBtn = document.getElementById('productModalCloseBtn');
const detailEmoji = document.getElementById('detailEmoji');
const detailCategory = document.getElementById('detailCategory');
const detailTitle = document.getElementById('detailTitle');
const detailPriceUnit = document.getElementById('detailPriceUnit');
const detailDescription = document.getElementById('detailDescription');
const detailQtyInput = document.getElementById('detailQtyInput');
const detailBtnMinus = document.getElementById('detailBtnMinus');
const detailBtnPlus = document.getElementById('detailBtnPlus');
const detailSubtotalPrice = document.getElementById('detailSubtotalPrice');
const detailAddToCartBtn = document.getElementById('detailAddToCartBtn');
const detailBtnPrice = document.getElementById('detailBtnPrice');

let currentDetailProduct = null;
let currentDetailQty = 1;

function openProductDetailModal(item, categoryName) {
  currentDetailProduct = item;
  currentDetailQty = 1;

  if (detailEmoji) detailEmoji.textContent = getEmoji(item.name);
  if (detailCategory) detailCategory.textContent = categoryName || 'Producto';
  if (detailTitle) detailTitle.textContent = item.name;
  if (detailPriceUnit) detailPriceUnit.textContent = `${formatPrice(item.price)} por unidad`;
  if (detailDescription) detailDescription.textContent = item.desc || 'Delicioso producto disponible en la Tienda Los Pecados de Mary para disfrutar en tus descansos.';

  updateDetailSubtotal();

  if (productModal) {
    productModal.classList.remove('hidden');
  }
}

function updateDetailSubtotal() {
  if (!currentDetailProduct) return;
  if (detailQtyInput) detailQtyInput.value = currentDetailQty;
  const subtotal = currentDetailProduct.price * currentDetailQty;
  if (detailSubtotalPrice) detailSubtotalPrice.textContent = formatPrice(subtotal);
  if (detailBtnPrice) detailBtnPrice.textContent = formatPrice(subtotal);
}

function closeProductDetailModal() {
  if (productModal) {
    productModal.classList.add('hidden');
  }
}

if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductDetailModal);

if (detailBtnMinus) {
  detailBtnMinus.addEventListener('click', () => {
    if (currentDetailQty > 1) {
      currentDetailQty--;
      updateDetailSubtotal();
    }
  });
}

if (detailBtnPlus) {
  detailBtnPlus.addEventListener('click', () => {
    if (currentDetailQty < 99) {
      currentDetailQty++;
      updateDetailSubtotal();
    }
  });
}

document.querySelectorAll('.quick-qty-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const add = parseInt(btn.dataset.qty, 10) || 1;
    currentDetailQty = Math.min(99, currentDetailQty + add);
    updateDetailSubtotal();
  });
});

if (detailAddToCartBtn) {
  detailAddToCartBtn.addEventListener('click', () => {
    if (currentDetailProduct) {
      addToCart(currentDetailProduct.name, currentDetailProduct.price, currentDetailQty);
      closeProductDetailModal();
    }
  });
}

if (productModal) {
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductDetailModal();
  });
}

// =====================================================
//  RENDERIZADO DE PRODUCTOS Y ORDENAMIENTO
// =====================================================
function render() {
  const grid = document.getElementById('productGrid');
  const noRes = document.getElementById('noResults');
  const noResultsMsg = document.getElementById('noResultsMsg');
  const productsCount = document.getElementById('productsCount');

  grid.innerHTML = '';
  const q = normalizar(searchTerm.trim());

  let totalItemsCount = 0;

  // Filtrado de categorías e items
  const filtered = CATEGORIES
    .map(cat => {
      // Si la categoría activa es 'favorites', solo incluir favoritos
      if (currentCat === 'favorites') {
        const favItems = cat.items.filter(item => favorites.has(item.name) && (q === '' || normalizar(item.name).includes(q)));
        if (favItems.length === 0) return null;
        return { ...cat, items: favItems };
      }

      // Si hay categoría activa (no "all"), solo esa
      if (currentCat !== 'all' && cat.id !== currentCat) return null;

      // Filtra items por búsqueda sin tildes ni mayúsculas
      const items = cat.items.filter(item =>
        q === '' || normalizar(item.name).includes(q)
      );

      if (items.length === 0) return null;
      return { ...cat, items };
    })
    .filter(Boolean);

  // Ordenamiento de items dentro de cada categoría
  filtered.forEach(cat => {
    if (currentSort === 'price-asc') {
      cat.items.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      cat.items.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
      cat.items.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    }
    totalItemsCount += cat.items.length;
  });

  // Actualizar contador
  if (productsCount) {
    productsCount.textContent = `Mostrando ${totalItemsCount} ${totalItemsCount === 1 ? 'producto' : 'productos'}`;
  }

  // Sin resultados
  if (filtered.length === 0) {
    noRes.classList.remove('hidden');
    if (currentCat === 'favorites' && favorites.size === 0) {
      noResultsMsg.innerHTML = 'Aún no tienes productos favoritos.<br>Toca el corazón ⭐ en los productos para guardarlos aquí.';
    } else {
      noResultsMsg.innerHTML = 'No encontramos ese producto.<br>¡Intenta con otra palabra!';
    }
    return;
  }
  noRes.classList.add('hidden');

  filtered.forEach(cat => {
    // Encabezado de categoría
    const heading = document.createElement('div');
    heading.className = 'cat-heading';
    heading.innerHTML = `
      <span class="cat-heading-text">${currentCat === 'favorites' ? '⭐ ' + cat.name : cat.name}</span>
      <div class="cat-heading-line"></div>
    `;
    grid.appendChild(heading);

    let cardIndex = 0;
    // Cards
    cat.items.forEach(item => {
      const isFav = favorites.has(item.name);
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${Math.min(cardIndex * 0.035, 0.45)}s`;
      cardIndex++;

      card.innerHTML = `
        <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" aria-label="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}" title="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
          ${isFav ? '❤️' : '🤍'}
        </button>
        <span class="card-emoji">${getEmoji(item.name)}</span>
        <span class="card-name">${item.name}</span>
        <span class="card-price">${formatPrice(item.price)}</span>
        <button class="add-btn">➕ Agregar</button>
      `;

      // Clic en la tarjeta abre el detalle
      card.addEventListener('click', (e) => {
        // Evitar que abra el modal si tocó el botón de fav o el botón de agregar
        if (e.target.closest('.card-fav-btn') || e.target.closest('.add-btn')) return;
        openProductDetailModal(item, cat.name);
      });

      // Evento de favorito
      card.querySelector('.card-fav-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(item.name);
      });

      // Evento de agregar directo
      card.querySelector('.add-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(item.name, item.price, 1);
      });

      grid.appendChild(card);
    });
  });
}

// =====================================================
//  MODAL DEL CARRITO Y CONTROLES
// =====================================================
const cartModal = document.getElementById('cartModal');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const continueShoppingBtn = document.getElementById('continueShoppingBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

function openCartModal() {
  if (cartModal) cartModal.classList.remove('hidden');
}

function closeCartModal() {
  if (cartModal) cartModal.classList.add('hidden');
}

if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartModal);
if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartModal);
if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCartModal);

if (clearCartBtn) {
  clearCartBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('El pedido ya está vacío', 'ℹ️');
      return;
    }
    clearCart();
  });
}

if (cartModal) {
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      closeCartModal();
    }
  });
}

// Cierre con la tecla ESC para ambos modales
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (productModal && !productModal.classList.contains('hidden')) {
      closeProductDetailModal();
    } else if (cartModal && !cartModal.classList.contains('hidden')) {
      closeCartModal();
    }
  }
});

// =====================================================
//  EVENTOS DE NAVEGACIÓN, BÚSQUEDA Y ORDEN
// =====================================================
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  });
});

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchTerm = e.target.value;
    
    // Auto-scroll hacia arriba si el usuario está scrolleado abajo
    if (window.scrollY > 160) {
      const mainEl = document.getElementById('productsMain');
      if (mainEl) {
        const topOffset = mainEl.offsetTop - 140;
        window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Si hay búsqueda y no estamos en favoritos, resetear a "all"
    if (searchTerm.trim() !== '' && currentCat !== 'favorites') {
      currentCat = 'all';
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      const allBtn = document.querySelector('[data-cat="all"]');
      if (allBtn) allBtn.classList.add('active');
    }
    render();
  });
}

const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
  });
}

// =====================================================
//  INDICADOR EN TIEMPO REAL DE DESCANSOS (ESTADO DE LA TIENDA)
// =====================================================
function updateStoreStatus() {
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  if (!statusDot || !statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 5 = Viernes, 6 = Sábado
  const hours = now.getHours();
  const mins = now.getMinutes();
  const currentMinutes = hours * 60 + mins;

  // Fin de semana
  if (day === 0 || day === 6) {
    statusDot.className = 'status-indicator-dot break-closed';
    statusText.textContent = 'Tienda en receso · Horario escolar: Lunes a Viernes desde las 9:00 AM';
    return;
  }

  // Definición de descansos según día
  let breaks = [];
  const isFriday = (day === 5);

  if (!isFriday) {
    // Lunes a Jueves
    breaks = [
      { name: 'Preescolar (Descanso 1)', start: 10 * 30, end: 10 * 30 + 40, timeStr: '10:30 - 11:10 AM' },
      { name: 'Primaria (Descanso 1)', start: 9 * 50, end: 9 * 50 + 40, timeStr: '9:50 - 10:30 AM' },
      { name: 'Preescolar (Descanso 2)', start: 13 * 10, end: 13 * 10 + 40, timeStr: '1:10 - 1:50 PM' },
      { name: 'Primaria (Descanso 2)', start: 12 * 30, end: 12 * 30 + 40, timeStr: '12:30 - 1:10 PM' },
    ];
  } else {
    // Viernes
    breaks = [
      { name: 'Preescolar (Descanso 1)', start: 10 * 30, end: 10 * 30 + 40, timeStr: '10:30 - 11:10 AM' },
      { name: 'Primaria (Descanso 1)', start: 9 * 10, end: 9 * 10 + 40, timeStr: '9:10 - 10:30 AM' },
      { name: 'Preescolar (Descanso 2)', start: 12 * 30, end: 12 * 30 + 40, timeStr: '12:30 - 1:10 PM' },
      { name: 'Primaria (Descanso 2)', start: 11 * 50, end: 11 * 50 + 40, timeStr: '11:50 - 12:30 PM' },
    ];
  }

  // Verificar si actualmente estamos en un descanso
  const activeBreak = breaks.find(b => currentMinutes >= b.start && currentMinutes < b.end);

  if (activeBreak) {
    statusDot.className = 'status-indicator-dot break-active';
    statusText.innerHTML = `🟢 <strong>¡Descanso en curso!</strong> ${activeBreak.name} (${activeBreak.timeStr}) · Tienda abierta`;
    return;
  }

  // Verificar próximo descanso
  const upcomingBreak = breaks.find(b => b.start > currentMinutes);

  if (upcomingBreak) {
    const diff = upcomingBreak.start - currentMinutes;
    if (diff <= 45) {
      statusDot.className = 'status-indicator-dot break-soon';
      statusText.innerHTML = `🟡 <strong>Próximo descanso en ${diff} min:</strong> ${upcomingBreak.name} (${upcomingBreak.timeStr})`;
    } else {
      statusDot.className = 'status-indicator-dot break-soon';
      statusText.innerHTML = `📚 Jornada académica · Próximo descanso: <strong>${upcomingBreak.name}</strong> a las ${upcomingBreak.timeStr.split('-')[0].trim()}`;
    }
    return;
  }

  // Si ya pasaron todos los descansos del día
  statusDot.className = 'status-indicator-dot break-closed';
  statusText.textContent = 'Jornada escolar finalizada · Tienda abierta en próximos descansos escolares';
}

// =====================================================
//  MODO OSCURO (DARK MODE)
// =====================================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }
}

const savedTheme = localStorage.getItem('mary_theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
applyTheme(initialDark);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDarkNow = !document.body.classList.contains('dark-theme');
    applyTheme(isDarkNow);
    localStorage.setItem('mary_theme', isDarkNow ? 'dark' : 'light');
    showToast(isDarkNow ? 'Modo oscuro activado' : 'Modo claro activado', isDarkNow ? '🌙' : '☀️');
  });
}

// =====================================================
//  FLECHAS DE CATEGORÍAS, SCROLL Y AUTO-SCROLL (BANNER)
// =====================================================
const catNavWrap = document.querySelector('.cat-nav-wrap');
const catNav     = document.getElementById('catNav');
const arrowLeft  = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');
const SCROLL_AMOUNT = 180;

let isUserInteractingWithCats = false;
let userInteractionTimeout = null;

function pauseCatAutoScroll(duration = 2600) {
  isUserInteractingWithCats = true;
  if (userInteractionTimeout) clearTimeout(userInteractionTimeout);
  userInteractionTimeout = setTimeout(() => {
    isUserInteractingWithCats = false;
  }, duration);
}

if (arrowLeft && catNav) {
  arrowLeft.addEventListener('click', () => {
    pauseCatAutoScroll(3500);
    catNav.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  });
}

if (arrowRight && catNav) {
  arrowRight.addEventListener('click', () => {
    pauseCatAutoScroll(3500);
    catNav.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  });
}

function updateArrows() {
  if (!catNav || !arrowLeft || !arrowRight) return;
  const atStart = catNav.scrollLeft <= 4;
  const atEnd   = catNav.scrollLeft + catNav.clientWidth >= catNav.scrollWidth - 6;
  arrowLeft.style.opacity  = atStart ? '0.35' : '1';
  arrowLeft.style.pointerEvents = atStart ? 'none' : 'auto';
  arrowRight.style.opacity = atEnd   ? '0.35' : '1';
  arrowRight.style.pointerEvents = atEnd ? 'none' : 'auto';
}

if (catNav) {
  catNav.addEventListener('scroll', () => {
    updateArrows();
  });
  updateArrows();
}

// Pausa cuando el usuario pasa el mouse, toca o enfoca
if (catNavWrap) {
  catNavWrap.addEventListener('mouseenter', () => {
    isUserInteractingWithCats = true;
  });

  catNavWrap.addEventListener('mouseleave', () => {
    pauseCatAutoScroll(1200);
  });

  catNavWrap.addEventListener('touchstart', () => {
    isUserInteractingWithCats = true;
  }, { passive: true });

  catNavWrap.addEventListener('touchend', () => {
    pauseCatAutoScroll(1500);
  });
}

// Pausa al hacer clic en un botón de categoría
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    pauseCatAutoScroll(2500);
  });
});

// Desplazamiento continuo y ultra fluido (60 FPS) estilo banner marquee
let tickerSpeed = 0.85; // Velocidad de avance continuo fluido

function runCategoryTicker() {
  if (!isUserInteractingWithCats && catNav) {
    const maxScroll = catNav.scrollWidth - catNav.clientWidth;
    if (maxScroll > 10) {
      if (catNav.scrollLeft >= maxScroll - 3) {
        catNav.scrollLeft = 0;
      } else {
        catNav.scrollLeft += tickerSpeed;
      }
    }
  }
  requestAnimationFrame(runCategoryTicker);
}

// Iniciar ticker continuo
requestAnimationFrame(runCategoryTicker);


// =====================================================
//  BOTÓN VOLVER ARRIBA
// =====================================================
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (!btnTop) return;
  if (window.scrollY > 280) {
    btnTop.classList.add('visible');
  } else {
    btnTop.classList.remove('visible');
  }
});

if (btnTop) {
  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =====================================================
//  EFECTO DE CONFETI ANIMADO (CANVAS NATIVO)
// =====================================================
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const colors = ['#f5c500', '#ffd740', '#1a2e5a', '#22397a', '#e8455a', '#10b981', '#ffffff'];
  const particles = [];
  const particleCount = 85;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: width * 0.5 + (Math.random() - 0.5) * (width * 0.6),
      y: height * 0.35 + (Math.random() - 0.5) * (height * 0.3),
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * -10 - 3,
      gravity: 0.28,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    });
  }

  let animationFrameId;
  let startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, width, height);

    let activeParticles = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.vx *= 0.99; // resistencia suave del aire

      if (elapsed > 1800) {
        p.opacity = Math.max(0, p.opacity - 0.02);
      }

      if (p.opacity > 0 && p.y < height + 40) {
        activeParticles++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    });

    if (activeParticles > 0 && elapsed < 4000) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrameId);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate);
}

// =====================================================
//  INICIALIZACIÓN
// =====================================================
updateSoundToggleUI();
updateFavoritesBadge();
updateCartUI();
render();
updateStoreStatus();
setInterval(updateStoreStatus, 30000); // Actualiza estado cada 30 segundos

// Disparo de Confeti de bienvenida en la primera visita
try {
  if (!sessionStorage.getItem('mary_confetti_welcomed')) {
    sessionStorage.setItem('mary_confetti_welcomed', 'true');
    setTimeout(() => {
      launchConfetti();
      showToast('¡Bienvenido a la Tienda Los Pecados de Mary! 🎊', '🎈');
    }, 450);
  }
} catch (e) {
  // Fallback si sessionStorage está restringido
  setTimeout(() => launchConfetti(), 450);
}

// Efecto interactivo: Tocar el logo lanza confeti
const logoArea = document.querySelector('.logo-area');
if (logoArea) {
  logoArea.style.cursor = 'pointer';
  logoArea.title = '¡Toca el logo para celebrar!';
  logoArea.addEventListener('click', () => {
    launchConfetti();
    showToast('¡Los Pecados de Mary · The New School! 💛', '🎊');
  });
}

