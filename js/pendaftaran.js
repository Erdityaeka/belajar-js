const hasil_nama_depan = document.getElementById("hasil_nama_depan");
const hasil_nama_belakang = document.getElementById("hasil_nama_belakang");
const hasil_tempatlahir = document.getElementById("hasil_tempatlahir");
const hasil_tanggallahir = document.getElementById("hasil_tanggallahir");
const hasil_email = document.getElementById("hasil_email");
const hasil_nohp = document.getElementById("hasil_nohp");
const hasil_password = document.getElementById("hasil_password");
const hasil_confirmpasword = document.getElementById("hasil_confirmpasword");
const errorMessage = document.getElementById("error-message");

function proses_hasil() {
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
    errorMessage.textContent = "Semua field harus diisi";
    return;
  } else if (!/^\d+$/.test(nohp)) {
    errorMessage.textContent = "No HP harus berupa angka";
    return;
  } else {
    errorMessage.textContent = "";
  }

  // Validasi panjang input
  function validateLength(input, min, max) {
    if (input.length < min) {
      return `Password harus memiliki minimal ${min} karakter`;
    } else if (input.length > max) {
      return `Password harus memiliki maksimal ${max} karakter`;
    }
    return "";
  }

  let passwordErr = validateLength(password, 5, 15);
  if (passwordErr) {
    errorMessage.textContent = passwordErr;
    return;
  }
  if (password !== confirmpasword) {
    errorMessage.textContent = "Konfirmasi password tidak cocok";
    return;
  }

  // Validasi email
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      return "Format Email tidak valid";
    }
    return "";
  }

  let emailErr = validateEmail(email);
  if (emailErr) {
    errorMessage.textContent = emailErr;
    return;
  }

  // Validasi numerik
  function validateNumeric(input) {
    const numericPattern = /^\d+$/;
    if (!numericPattern.test(input)) {
      return "No HP harus berupa angka";
    }
    return "";
  }

  let numErr = validateNumeric(nohp);
  if (numErr) {
    errorMessage.textContent = numErr;
    return;
  }

  // Validasi tanggal
  function validateDate(tanggallahir) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(tanggallahir)) {
      return "Format tanggal tidak valid, gunakan format (YYYY-MM-DD)";
    }
    return "";
  }

  let dateErr = validateDate(tanggallahir);
  if (dateErr) {
    errorMessage.textContent = dateErr;
    return;
  }

  // Validasi huruf
  function validateAlpha(input, label) {
    const alphaPattern = /^[a-zA-Z\s]+$/;
    if (!alphaPattern.test(input)) {
      return `${label} harus berupa huruf`;
    }
    return "";
  }

  let namadepanErr = validateAlpha(namadepan, "Nama Depan");
  if (namadepanErr) {
    errorMessage.textContent = namadepanErr;
    return;
  }

  let namablkngErr = validateAlpha(namabelakang, "Nama Belakang");
  if (namablkngErr) {
    errorMessage.textContent = namablkngErr;
    return;
  }

  let tmptlhrErr = validateAlpha(tempatlahir, "Tempat Lahir");
  if (tmptlhrErr) {
    errorMessage.textContent = tmptlhrErr;
    return;
  }

  // Jika semua valid
  errorMessage.textContent = "";
  hasil_nama_depan.textContent = namadepan;
  hasil_nama_belakang.textContent = namabelakang;
  hasil_tempatlahir.textContent = tempatlahir;
  hasil_tanggallahir.textContent = tanggallahir;
  hasil_email.textContent = email;
  hasil_nohp.textContent = nohp;
  hasil_password.textContent = password;
  hasil_confirmpasword.textContent = confirmpasword;
}
