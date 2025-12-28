import { products } from "./data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(p => p.id === id);
const box = document.getElementById("productDetail");

function formatIDR(n){
  return n.toLocaleString("id-ID");
}

if (!product) {
  box.innerHTML = "<p>Produk tidak ditemukan.</p>";
} else {
  box.innerHTML = `
    <div class="img">
      <img src="${product.img}" alt="${product.name}">
    </div>

    <div class="info">
      <h2>${product.name}</h2>
      <p class="desc">${product.desc}</p>

      <div class="price">Rp ${formatIDR(product.price)}</div>

      <button id="buyBtn" class="btn">Beli Sekarang</button>
    </div>
  `;

  document.getElementById("buyBtn").onclick = () => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");

    orders.push({
      id: Date.now(),
      product: product.name,
      price: product.price,
      time: new Date().toLocaleString()
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Order berhasil disimpan!");
    location.href = "orders.html";
  };
}
