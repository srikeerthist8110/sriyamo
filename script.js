const products=[
 {name:'Floral Pink Kurti',price:899,icon:'🌸'},
 {name:'Sky Blue Kurti',price:799,icon:'💠'},
 {name:'Lime Breeze Dress',price:999,icon:'🌿'},
 {name:'Maroon Muse Kurti',price:899,icon:'🌹'}
];
const best=[
 {name:'Black Sleeveless Kurti',price:899,icon:'🖤'},
 {name:'Purple Kurti',price:899,icon:'💜'},
 {name:'White Printed Kurti',price:799,icon:'🤍'},
 {name:'Green Ethnic Kurti',price:999,icon:'💚'}
];
let cart=[];
function render(list,id){document.getElementById(id).innerHTML=list.map((p,i)=>`<article class="product"><button class="heart" onclick="toggleWish(this)">♡</button><div class="product-image">${p.icon}</div><h3>${p.name}</h3><p>₹${p.price}</p><button class="btn" style="margin-top:10px;padding:9px 15px;font-size:11px" onclick="addCart(${JSON.stringify(p).replace(/"/g,'&quot;')})">Add to cart →</button></article>`).join('')}
function addCart(p){cart.push(p);document.getElementById('cartCount').textContent=cart.length;showToast(`${p.name} added to cart ♡`)}
function toggleWish(el){el.textContent=el.textContent==='♡'?'♥':'♡';showToast(el.textContent==='♥'?'Added to wishlist ♡':'Removed from wishlist')}
function openSearch(){document.getElementById('searchModal').classList.add('open');document.getElementById('searchModal').setAttribute('aria-hidden','false');setTimeout(()=>document.getElementById('searchInput').focus(),100)}
function closeSearch(){document.getElementById('searchModal').classList.remove('open')}
function doSearch(){const q=document.getElementById('searchInput').value.trim();document.getElementById('searchResult').textContent=q?`Showing styles related to “${q}” — scroll down to explore our edits.`:'Type something to search.'}
function openCart(){const box=document.getElementById('cartItems');if(!cart.length)box.innerHTML='<p>Your cart is waiting for something pretty. ♡</p>';else box.innerHTML=cart.map((p,i)=>`<div class="cart-row"><span>${p.icon} ${p.name}</span><b>₹${p.price}</b></div>`).join('');document.getElementById('cartTotal').textContent='₹'+cart.reduce((s,p)=>s+p.price,0);document.getElementById('cartModal').classList.add('open')}
function closeCart(){document.getElementById('cartModal').classList.remove('open')}
function checkout(){if(!cart.length){showToast('Add a product first ♡');return}showToast('Checkout ready — UPI & 50% advance COD supported')}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2400)}
render(products,'productGrid');render(best,'bestGrid');
