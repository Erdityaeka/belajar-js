const hasil_nama_depan = document.getElementById("hasil_nama_depan");
const hasil_nama_belakang = document.getElementById("hasil_nama_belakang");
const hasil_tempatlahir = document.getElementById("hasil_tempatlahir");
const hasil_tanggallahir = document.getElementById("hasil_tanggallahir");
const hasil_email = document.getElementById("hasil_email");
const hasil_nohp = document.getElementById("hasil_nohp");
const hasil_password = document.getElementById("hasil_password");
const hasil_confirmpasword = document.getElementById("hasil_confirmpasword");

function showError(id, msg) {
  document.getElementById(`err-${id}`).textContent = msg;
}

function clearAllErrors() {
  document.querySelectorAll("small").forEach(el => el.textContent = "");
}

function proses_hasil() {
  clearAllErrors();

  const namadepan = document.getElementById("namadepan").value;
  const namabelakang = document.getElementById("namabelakang").value;
  const tempatlahir = document.getElementById("tempatlahir").value;
  const tanggallahir = document.getElementById("tanggallahir").value;
  const email = document.getElementById("email").value;
  const nohp = document.getElementById("nohp").value;
  const password = document.getElementById("password").value;
  const confirmpasword = document.getElementById("confirmpasword").value;

  // Validasi input kosong
  if (
    namadepan === "" ||
    namabelakang === "" ||
    tempatlahir === "" ||
    email === "" ||
    nohp === "" ||
    password === "" ||
    confirmpasword === ""
  ) {
    if (namadepan === "") showError("namadepan", "Nama Depan wajib diisi");
    if (namabelakang === "") showError("namabelakang", "Nama Belakang wajib diisi");
    if (tempatlahir === "") showError("tempatlahir", "Tempat lahir wajib diisi");
    if (tanggallahir === "") showError("tanggallahir", "Tanggal lahir wajib diisi");
    if (email === "") showError("email", "Email wajib diisi");
    if (nohp === "") showError("nohp", "No HP wajib diisi");
    if (password === "") showError("password", "Password wajib diisi");
    if (confirmpasword === "") showError("confirmpasword", "Konfirmasi wajib diisi");
    return;
  }

  // Validasi email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    showError("email", "Format Email tidak valid");
    return;
  }

  // Validasi nohp
  if (!/^\d+$/.test(nohp)) {
    showError("nohp", "No HP harus berupa angka");
    return;
  }

  // Validasi panjang password
  if (password.length < 5 || password.length > 15) {
    showError("password", "Password harus 5–15 karakter");
    return;
  }

  // Validasi konfirmasi password
  if (password !== confirmpasword) {
    showError("confirmpasword", "Konfirmasi password tidak cocok");
    return;
  }

  // Validasi huruf
  const alphaPattern = /^[a-zA-Z\s]+$/;
  if (!alphaPattern.test(namadepan)) {
    showError("namadepan", "Nama Depan harus berupa huruf");
    return;
  }
  if (!alphaPattern.test(namabelakang)) {
    showError("namabelakang", "Nama Belakang harus berupa huruf");
    return;
  }
  if (!alphaPattern.test(tempatlahir)) {
    showError("tempatlahir", "Tempat Lahir harus berupa huruf");
    return;
  }

  // Jika semua valid
  hasil_nama_depan.textContent = "Nama Depan: " + namadepan;
  hasil_nama_belakang.textContent = "Nama Belakang: " + namabelakang;
  hasil_tempatlahir.textContent = "Tempat Lahir: " + tempatlahir;
  hasil_tanggallahir.textContent = "Tanggal Lahir: " + tanggallahir;
  hasil_email.textContent = "Email: " + email;
  hasil_nohp.textContent = "No HP: " + nohp;
  hasil_password.textContent = "Password: " + password;
  hasil_confirmpasword.textContent = "Konfirmasi Password: " + confirmpasword;

  alert("Data berhasil diproses ✅");
}
