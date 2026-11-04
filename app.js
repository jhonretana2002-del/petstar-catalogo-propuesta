const $ = s => document.querySelector(s);
const money = n => '₡' + Math.round(n).toLocaleString('es-CR');
const weight = n => Number(n).toLocaleString('es-CR');
const clean = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
let category = 'todos', query = '', brand = 'todos', cart = [], formats = {}, amounts = {}, toastTimer;

function art(p) {
  if (!p.image) return `<div class="placeholder"><div><b>${p.brand === 'Por confirmar' ? 'Hámsters' : p.brand}</b><span>${p.brand === 'Por confirmar' ? 'Marca e imagen por confirmar' : 'Fotografía por incorporar'}</span></div></div>`;
  const source = p.image.startsWith('data:') ? p.image : 'assets/' + p.image;
  return `<svg viewBox="0 ${p.crop[0]} 720 ${p.crop[1]}" role="img" aria-label="${p.brand} ${p.name}, foto aportada por el cliente"><image href="${source}" width="720" height="1560"/></svg>`;
}
function mode(p) { return formats[p.id] || 'pack'; }
function amount(p) { return amounts[p.id] ?? (mode(p) === 'bulk' ? p.minimum : 1); }
function unitPrice(p) { return mode(p) === 'bulk' ? p.bulk : p.packPrice; }
function validAmount(p, n) {
  return Number.isFinite(n) && n > 0 && n <= 999 && (mode(p) === 'pack' ? Number.isInteger(n) : n >= p.minimum && Math.abs(n / p.step - Math.round(n / p.step)) < .00001);
}
function showToast(msg) {
  clearTimeout(toastTimer);
  $('#toast').textContent = msg;
  toastTimer = setTimeout(() => $('#toast').textContent = '', 3300);
}
function jumpToCatalog() { $('#catalogo').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
function render() {
  const selected = PRODUCTS.filter(p => (category === 'todos' || p.category === category) && (brand === 'todos' || p.brand === brand) && clean(p.brand + ' ' + p.name + ' ' + p.desc).includes(clean(query)));
  $('#resultCount').textContent = selected.length + (selected.length === 1 ? ' producto en la muestra' : ' productos en la muestra');
  document.querySelectorAll('button[data-category]').forEach(b => {
    const active = b.dataset.category === category;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  $('#products').innerHTML = selected.length ? selected.map(p => {
    const bulk = mode(p) === 'bulk', n = amount(p), valid = validAmount(p, n);
    return `<article class="product" data-id="${p.id}">
      <div class="product-art"><span class="tag">${p.image ? 'Visto en PetStar · 2025' : 'Ficha por completar'}</span>${art(p)}</div>
      <div class="product-body"><p class="product-brand">${p.brand}</p><h3>${p.name}</h3><p class="desc">${p.desc}</p>
      <div class="formats" aria-label="Presentación para ${p.brand} ${p.name}"><button data-mode="bulk" aria-pressed="${bulk}" class="${bulk ? 'active' : ''}">A granel</button><button data-mode="pack" aria-pressed="${!bulk}" class="${!bulk ? 'active' : ''}">Empaque ${weight(p.packWeight)} kg</button></div>
      <div class="price-row"><span class="price">${money(unitPrice(p))} <span class="unit">/ ${bulk ? 'kg' : 'empaque'}</span></span></div>
      <div class="qtyrow"><label for="qty-${p.id}">${bulk ? 'Cantidad en kg' : 'N.º de empaques'}</label><input id="qty-${p.id}" type="number" inputmode="decimal" min="${bulk ? p.minimum : 1}" max="999" step="${bulk ? p.step : 1}" value="${n}" aria-label="Cantidad de ${p.brand} ${p.name}"></div>
      <p class="subtotal">Subtotal demo: <strong data-subtotal>${valid ? money(unitPrice(p) * n) : 'Revisá la cantidad'}</strong></p>
      <button class="btn" data-add aria-label="Agregar ${p.brand} ${p.name} al pedido">A mi tacita <span aria-hidden="true">+</span></button><button class="details-link" data-details="${p.id}">Conocer el producto ↗</button></div></article>`;
  }).join('') : `<div class="empty"><h3>Ese favorito no aparece en la muestra.</h3><p>Probá otra marca o volvé al catálogo completo.</p><button class="btn" id="resetFilters">Ver todos los productos</button></div>`;
}
function resetFilters() {
  category = 'todos'; query = ''; brand = 'todos';
  $('#search').value = ''; $('#headerSearch').value = ''; $('#brandFilter').value = 'todos'; render();
}
function refreshCart() {
  let sum = 0;
  $('#cartCount').textContent = cart.length;
  $('#cartLines').innerHTML = cart.length ? cart.map((l, i) => {
    sum += l.total;
    return `<div class="cartline"><div><strong>${l.brand} · ${l.name}</strong><small>${l.label} · ${money(l.price)} / ${l.mode === 'bulk' ? 'kg' : 'empaque'}</small><button class="remove" data-remove="${i}">Quitar ${l.name}</button></div><strong>${money(l.total)}</strong></div>`;
  }).join('') : '<p class="lead">Tu tacita está vacía. Agregá un alimento para probar cómo sería tu pedido.</p>';
  $('#cartTotal').textContent = money(sum);
  $('#prepareOrder').disabled = !cart.length;
  $('#clearCart').disabled = !cart.length;
  $('#orderSummary').hidden = true;
}
function addProduct(p, value) {
  if (!validAmount(p, value)) {
    showToast(mode(p) === 'bulk' ? `Elegí al menos ${weight(p.minimum)} kg, en pasos de ${weight(p.step)} kg.` : 'Elegí una cantidad entera de empaques entre 1 y 999.');
    return;
  }
  const m = mode(p), price = unitPrice(p), existing = cart.find(l => l.id === p.id && l.mode === m);
  if (existing) {
    existing.qty += value;
    existing.total = Math.round(existing.qty * price);
    existing.label = m === 'bulk' ? weight(existing.qty) + ' kg a granel' : existing.qty + ' × empaque de ' + weight(p.packWeight) + ' kg';
  } else cart.push({ id: p.id, brand: p.brand, name: p.name, mode: m, qty: value, price, total: Math.round(value * price), label: m === 'bulk' ? weight(value) + ' kg a granel' : value + ' × empaque de ' + weight(p.packWeight) + ' kg' });
  refreshCart(); showToast(p.brand + ' ya está en tu tacita de ejemplo.');
}
function showDetails(id) {
  const p = PRODUCTS.find(p => p.id === id);
  const categoryNames = { perros: 'Perros', gatos: 'Gatos', hamsters: 'Hámsters' };
  $('#productDetail').innerHTML = `<div class="detail-art">${art(p)}</div><div class="detail-content"><p class="product-brand">${p.brand} · ${categoryNames[p.category]}</p><h2 id="productTitle">${p.name}</h2><p>${p.desc}</p><div class="detail-meta"><div>A granel · demo<strong>${money(p.bulk)} / kg</strong></div><div>Empaque · demo<strong>${money(p.packPrice)}</strong></div><div>Empaque de referencia<strong>${weight(p.packWeight)} kg${p.weightVerified ? '' : ' · ejemplo'}</strong></div><div>Mínimo a granel · demo<strong>${weight(p.minimum)} kg</strong></div></div><p class="fine">${p.image ? 'Imagen recibida del cliente, de una publicación de PetStar en 2025.' : 'Ficha de referencia pendiente de fotografía y validación por la tienda.'} Precios ficticios. Modalidades de venta y existencias por confirmar.</p><button class="btn" data-find-product="${p.id}">Elegir presentación ↗</button></div>`;
  $('#productDialog').showModal();
}
function selectExactProduct(id) {
  const p = PRODUCTS.find(p => p.id === id);
  category = 'todos'; brand = p.brand; query = p.name;
  $('#search').value = query; $('#headerSearch').value = ''; $('#brandFilter').value = brand;
  if ($('#productDialog').open) $('#productDialog').close();
  render(); jumpToCatalog();
}
function renderFeatured() {
  $('#featuredTrack').innerHTML = PRODUCTS.filter(p => p.image).map(p => `<article class="featured-card"><div class="featured-art">${art(p)}</div><p class="product-brand">${p.brand}</p><h3>${p.name}</h3><button data-details="${p.id}" aria-label="Conocer ${p.brand} ${p.name}">Conocé este producto <span aria-hidden="true">↗</span></button></article>`).join('');
}
document.addEventListener('click', e => {
  const categoryButton = e.target.closest('[data-category]');
  if (categoryButton) {
    category = categoryButton.dataset.category;
    if (categoryButton.tagName === 'A') { brand = 'todos'; query = ''; $('#search').value = ''; $('#brandFilter').value = 'todos'; }
    render(); return;
  }
  const brandButton = e.target.closest('[data-brand]');
  if (brandButton) { brand = brandButton.dataset.brand; category = 'todos'; query = ''; $('#brandFilter').value = brand; $('#search').value = ''; render(); jumpToCatalog(); return; }
  const detailButton = e.target.closest('[data-details]');
  if (detailButton) { showDetails(detailButton.dataset.details); return; }
  const findButton = e.target.closest('[data-find-product]');
  if (findButton) { selectExactProduct(findButton.dataset.findProduct); return; }
  if (e.target.closest('[data-close-product]')) { $('#productDialog').close(); return; }
  if (e.target.closest('#resetFilters')) { resetFilters(); return; }
  const article = e.target.closest('.product');
  if (article) {
    const p = PRODUCTS.find(p => p.id === article.dataset.id), formatButton = e.target.closest('[data-mode]');
    if (formatButton) { formats[p.id] = formatButton.dataset.mode; amounts[p.id] = formatButton.dataset.mode === 'bulk' ? p.minimum : 1; render(); return; }
    if (e.target.closest('[data-add]')) { addProduct(p, Number(article.querySelector('input').value)); return; }
  }
  const removeButton = e.target.closest('[data-remove]');
  if (removeButton) { cart.splice(Number(removeButton.dataset.remove), 1); refreshCart(); }
  if (e.target.closest('[data-close]')) $('#cartDialog').close();
});
$('#products').addEventListener('input', e => {
  if (!e.target.matches('input')) return;
  const article = e.target.closest('.product'), p = PRODUCTS.find(p => p.id === article.dataset.id), n = Number(e.target.value);
  amounts[p.id] = n;
  article.querySelector('[data-subtotal]').textContent = validAmount(p, n) ? money(unitPrice(p) * n) : 'Revisá la cantidad';
});
$('#search').addEventListener('input', e => { query = e.target.value; render(); });
$('#clearSearch').onclick = () => { query = ''; $('#search').value = ''; render(); $('#search').focus(); };
$('#headerSearchForm').onsubmit = e => { e.preventDefault(); query = $('#headerSearch').value; category = 'todos'; brand = 'todos'; $('#search').value = query; $('#brandFilter').value = 'todos'; render(); jumpToCatalog(); };
$('#brandFilter').innerHTML += [...new Set(PRODUCTS.map(p => p.brand))].sort().map(b => `<option>${b}</option>`).join('');
$('#brandFilter').onchange = e => { brand = e.target.value; render(); };
$('#featuredPrev').onclick = () => $('#featuredTrack').scrollBy({ left: -$('#featuredTrack').clientWidth * .85, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
$('#featuredNext').onclick = () => $('#featuredTrack').scrollBy({ left: $('#featuredTrack').clientWidth * .85, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
$('#openCart').onclick = () => { refreshCart(); $('#cartDialog').showModal(); };
$('#clearCart').onclick = () => { cart = []; refreshCart(); };
$('#prepareOrder').onclick = () => {
  $('#orderSummary').hidden = false; $('#copyFeedback').textContent = '';
  $('#orderText').value = 'DEMO DE PROPUESTA PETSTAR - NO ES UN PEDIDO REAL\n\nHola, PetStar. Así se vería una consulta desde el catálogo:\n\n' + cart.map(l => '- ' + l.brand + ' ' + l.name + ' | ' + l.label + ' | ' + money(l.total)).join('\n') + '\n\nSubtotal ilustrativo: ' + money(cart.reduce((s, l) => s + l.total, 0)) + '\nPrecios ficticios. Entrega no incluida.\n\nEn la tienda final se consultaría disponibilidad, precio vigente, entrega y forma de pago antes de confirmar la compra.';
};
$('#copyOrder').onclick = async () => {
  try { await navigator.clipboard.writeText($('#orderText').value); $('#copyFeedback').textContent = 'Mensaje copiado. Esta demostración no envía pedidos.'; }
  catch { $('#orderText').focus(); $('#orderText').select(); $('#copyFeedback').textContent = 'Seleccioná y copiá el texto con la opción Copiar de tu dispositivo.'; }
};
render(); renderFeatured(); refreshCart();
