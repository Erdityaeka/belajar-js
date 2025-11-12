let mahasiswa = [];

//Fungsi untuk menampilkan daata pada tabel/render tabel
function renderTable() {
  const tabelBody = document.getElementById("dataTabel");
  tabelBody.innerHTML = "";
  mahasiswa.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
         <td>${index + 1}</td>
         <td>${item.nim}</td>
         <td>${item.nama}</td>
         <td>${item.tempatlahir}</td>
         <td>${item.alamat}</td>
         <td>
          <button onclick="editData(${index})">Edit</button>
          <button onclick="deleteData(${index})">Hapus</button>
         </td>`;
    tabelBody.appendChild(row);
  });
}
//Membuat fungsi add data Mahasiswa
function addMhs() {
  const nim = document.getElementById("nim").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const tempatlahir = document.getElementById("tempatlahir").value.trim();
  const alamat = document.getElementById("alamat").value.trim();

  if (nim && nama && tempatlahir && alamat) {
    mahasiswa.push({ nim, nama, tempatlahir, alamat });
    resetForm();
    renderTable();
  } else {
    alert("Semua file harus diisi");
  }
}

//Membuat fungsi Reset Form

function resetForm() {
  document.getElementById("nim").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("tempatlahir").value = "";
  document.getElementById("alamat").value = "";
}

//Render tabel awal (kosong)
renderTable();