let mahasiswa = [];

// Fungsi untuk menampilkan tabel
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

// Fungsi tambah data
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
    alert("Semua field harus diisi!");
  }
}

//  FUNGSI HAPUS DATA

function deleteData(index) {
  if (confirm("Yakin ingin menghapus?")) {
    mahasiswa.splice(index, 1);
    renderTable();
  }
}

//  FUNGSI EDIT DATA
let editIndex = -1;

function editData(index) {
  editIndex = index;
  const item = mahasiswa[index];

  document.getElementById("nim").value = item.nim;
  document.getElementById("nama").value = item.nama;
  document.getElementById("tempatlahir").value = item.tempatlahir;
  document.getElementById("alamat").value = item.alamat;
  editIndex = index;
  document.getElementById("btnUpdate").style.display = "inline-block";
}

function updateData() {
  const nim = document.getElementById("nim").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const tempatlahir = document.getElementById("tempatlahir").value.trim();
  const alamat = document.getElementById("alamat").value.trim();

  if (nim && nama && tempatlahir && alamat) {
    mahasiswa[editIndex] = { nim, nama, tempatlahir, alamat };
    resetForm();
    renderTable();
    document.getElementById("btnAdd").style.display = "none";
    editIndex = null;
  } else {
    alert("Semua field harus diisi!");
  }
}

// Fungsi reset form input
function resetForm() {
  document.getElementById("nim").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("tempatlahir").value = "";
  document.getElementById("alamat").value = "";
}

// Render awal (kosong)
renderTable();
