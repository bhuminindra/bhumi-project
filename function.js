let productArray = [];
let autoincrement = 1 ;
let editIndex = -1; // Menyimpan indeks produk yang sedang diedit

function saveForm() {
     const kodeProduk = document.getElementById("kodeProduk").value =
     "MD-0" + autoincrement++ ;
     const nameProduk = document.getElementById("nameProduk").value;
     const harga = document.getElementById("harga").value;
     const satuan = document.getElementById("satuan").value;
     const kategori = document.getElementById("kategori").value;
     const urlgambar = document.getElementById("urlgambar").value;
     const stok = document.getElementById("stok").value;


    if (editIndex === -1) {
        // Jika tidak dalam mode edit, tambahkan produk baru
        productArray.push({
            kodeProduk,
            nameProduk,
            harga,
            satuan,
            kategori,
            urlgambar,
            satuan,
            stok,
        });
    } else {
        // Jika dalam mode edit, update produk yang ada
        productArray[editIndex] = {
            kodeProduk: productArray[editIndex].kodeProduk, // Tetap
            nameProduk,
            harga,
            satuan,
            kategori,
            urlgambar,
            stok,
        };
        editIndex = -1; // Reset editIndex setelah edit
    }
    
renderTable();
clearForm(); // Menghapus form setelah simpan
autoincrement;
console.log("MD-0" + autoincrement);
}
function renderTable() {
    const tablebody = document
    .getElementById("productTable")
    .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";
    productArray.forEach((product, index) => {
        const row = tablebody.insertRow();
         const stokClass = product.stok < "5" ? "stokfalse" : "";
        row.innerHTML =  `<td>${index + 1}</td>
                          <td>${product.kodeProduk}</td>
                          <td>${product.nameProduk}</td>
                          <td>${ "Rp " + product.harga}</td>
                          <td>${product.satuan}</td>
                          <td>${product.kategori}</td>
                          <td><img src="${product.urlgambar}" style="width: 100px; height: 100px; align-item: center;"></td>
                          <td class="${stokClass}">${product.stok}</td>
                          <td class="action"><button onclick="deleteProduct(${index})" class="Button">Delete</button><button onclick="editProduct(${index})" class="edit">Edit</button></td>`;
                          
    });

}

function editProduct(index) {
    const product = productArray[index];
    document.getElementById("nameProduk").value = product.nameProduk;
    document.getElementById("harga").value = product.harga;
    document.getElementById("satuan").value = product.satuan;
    document.getElementById("kategori").value = product.kategori;
    document.getElementById("urlgambar").value = product.urlgambar;
    document.getElementById("stok").value = product.stok;

    editIndex = index; // Set editIndex ke produk yang sedang diedit
}

function deleteProduct(index) {
    productArray.splice(index, 1); // Menghapus produk dari array
    renderTable(); // Render ulang tabel setelah penghapusan
}

function clearForm() {
    document.getElementById("nameProduk").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("kategori").value = "makanan"; // Reset ke default
    document.getElementById("satuan").value = "pcs"; // Reset ke default
    document.getElementById("urlgambar").value = "";
    document.getElementById("stok").value = "";
}