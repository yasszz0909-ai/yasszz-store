const user = fakeAuth.getUser();
if (!user || user.role !== "admin") {
  alert("Akses ditolak");
  location.href = "../login.html";
}

/* ambil produk admin */
let adminProducts = JSON.parse(localStorage.getItem("admin_products")) || [];

const list = document.getElementById("adminProductList");

function render() {
  list.innerHTML = "";
  adminProducts.forEach((p, i) => {
    list.innerHTML += `
      <div class="admin-item">
        <div>
          <b>${p.name}</b><br>
          <small>Rp ${p.price.toLocaleString("id-ID")}</small>
        </div>
        <button onclick="del(${i})">Hapus</button>
      </div>
    `;
  });
}

render();

document.getElementById("productForm").onsubmit = e => {
  e.preventDefault();

  const product = {
    id: pid.value,
    name: pname.value,
    price: Number(pprice.value),
    img: pimg.value,
    desc: pdesc.value
  };

  adminProducts.push(product);
  localStorage.setItem("admin_products", JSON.stringify(adminProducts));

  render();
  e.target.reset();

  alert("Produk tersimpan & akan muncul di Home");
};

function del(i) {
  adminProducts.splice(i, 1);
  localStorage.setItem("admin_products", JSON.stringify(adminProducts));
  render();
}

function logout() {
  fakeAuth.logout();
  location.href = "../login.html";
}
// ===== EXPORT PRODUK KE JSON =====
document.getElementById("exportBtn").onclick = () => {
  const data = JSON.stringify(adminProducts, null, 2);

  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "products.json";
  a.click();

  URL.revokeObjectURL(url);
};
