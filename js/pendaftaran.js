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

  if (namadepan === "" || namabelakang === "" || tempatlahir === "" || tanggallahir === "" || email === "" || nohp === "" || password === "" || confirmpasword === "") {
    errorMessage.textContent = "Semua file harus diisi";
    return;
  } else if (!/^\d+$/.test(nohp)){
    errorMessage.textContent = "nohp harus berupa angka";
    return;
   
  }else {
    errorMessage.textContent = "";
  }
}
