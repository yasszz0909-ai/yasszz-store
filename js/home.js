import { products as defaultProducts } from "./data.js";

const list = document.getElementById("productList");

function formatIDR(n){
  return n.toLocaleString("id-ID");
}

async function loadProducts(){
  let products = [...defaultProducts];

  try {
    const res = await fetch("products.json");
    if (res.ok) {
      const jsonProducts = await res.json();
      products = [...products, ...jsonProducts];
    }
  } catch (e) {
    console.log("products.json belum ada");
  }

  render(products);
}

function render(products){
  list.innerHTML = "";

  products.forEach(p=>{
    list.innerHTML += `
      <div class="product-card"
        onclick="location.href='product.html?id=${p.id}'">
        <div class="img">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <h3>${p.name}</h3>
        <div class="desc">${p.desc || ""}</div>
        <div class="footer">
          <div class="price">Rp ${formatIDR(p.price)}</div>
          <button class="btn-small"
            onclick="event.stopPropagation();
            location.href='product.html?id=${p.id}'">
            Detail
          </button>
        </div>
      </div>
    `;
  });
}

loadProducts();
