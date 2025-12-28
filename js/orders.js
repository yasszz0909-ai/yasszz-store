const list = document.getElementById("orderList");
const orders = JSON.parse(localStorage.getItem("orders") || "[]");

function formatIDR(n){
  return n.toLocaleString("id-ID");
}

if (orders.length === 0) {
  list.innerHTML = "<p>Belum ada order.</p>";
} else {
  orders.reverse().forEach(o => {
    list.innerHTML += `
      <div class="order-item">
        <div>
          <strong>${o.product}</strong>
          <div class="time">${o.time}</div>
        </div>
        <div class="price">Rp ${formatIDR(o.price)}</div>
      </div>
    `;
  });
}
