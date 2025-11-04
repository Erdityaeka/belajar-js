// Ambil elemen output
const hasil_nama = document.getElementById("hasil_nama");
const hasil_nim = document.getElementById("hasil_nim");
const hasil_jurusan = document.getElementById("hasil_jurusan");
const hasil_rata2 = document.getElementById("rata2");
const h_status = document.getElementById("h_status");
const h_grade = document.getElementById("grade");
const errorMessage = document.getElementById("error-message");

// Fungsi ambil nilai angka
function getValue(id) {
  return parseFloat(document.getElementById(id).value); // Ambil nilai input dan ubah menjadi float
}

function hitung_nilai() {
  // Ambil input teks
  const nama = document.getElementById("nama").value; // Ambil nilai nama
  const nim = document.getElementById("nim").value; // Ambil nilai NIM
  const jurusan = document.getElementById("jurusan").value; // Ambil nilai jurusan

  // Validasi tidak boleh kosong
  if (nama === "" || nim === "" || jurusan === "") {
    errorMessage.textContent = "Semua field harus diisi."; // Tampilkan error jika kosong
    return;
  } else if (!/^\d+$/.test(nim)) {
    errorMessage.textContent = "NIM harus berupa angka."; // Validasi NIM harus angka
    return;
  } else {
    errorMessage.textContent = ""; // Hapus pesan error jika valid
  }

  // Validasi karakter minimum/maksimum
  function validateLeght(input, min, max) {
    if (input.length < min) {
      return `input harus memiliki minimal ${min} karakter`; // Validasi panjang minimum
    } else if (input.length > max) {
      return `input harus memiliki maksimal ${max} karakter`; // Validasi panjang maksimum
    }
    return ""; // Jika valid, tidak ada error
  }
  const alamat = document.getElementById("alamat").value; // Ambil nilai alamat
  let alamatErr = validateLeght(alamat, 5, 15); // Validasi panjang alamat
  if (alamatErr) {
    errorMessage.textContent = alamatErr; // Tampilkan error alamat
    return;
  }

  // Validasi format email
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex email
    if (!emailPattern.test(email)) {
      return "Format Email tidak valid"; // Error jika email tidak valid
    }
    return "";
  }
  const email = document.getElementById("email").value; // Ambil nilai email
  let emailErr = validateEmail(email); // Validasi email
  if (emailErr) {
    errorMessage.textContent = emailErr; // Tampilkan error email
    return;
  }

  // Validasi input numeric
  function validateNumeric(input) {
    const numericPattern = /^\d+$/; // Regex angka
    if (!numericPattern.test(input)) {
      return "Input harus berupa angka"; // Error jika bukan angka
    }
    return "";
  }
  const phoneNumber = document.getElementById("telpon").value; // Ambil nomor telepon
  let numErr = validateNumeric(phoneNumber); // Validasi angka telepon
  if (numErr) {
    errorMessage.textContent = numErr; // Tampilkan error
    return;
  }

  // Validasi format nomor telepon
  function validatePhone(phone) {
    const phonePattern = /^\d{10,13}$/; // Regex telepon 10-13 digit
    if (!phonePattern.test(phone)) {
      return "Format Telepon tidak valid"; // Error jika format salah
    }
    return "";
  }
  const phone = document.getElementById("telpon").value; // Ambil telepon lagi
  let phoneErr = validatePhone(phone); // Validasi telepon
  if (phoneErr) {
    errorMessage.textContent = phoneErr; // Tampilkan error
    return;
  }

  // Validasi format tanggal
  function validateDate(date) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD
    if (!datePattern.test(date)) {
      return "Format Tanggal tidak valid gunakan format(YYYY-MM-DD)"; // Error jika salah
    }
    return "";
  }
  
  const birthDate = document.getElementById("birthDate").value; // Ambil tanggal lahir
  let dateErr = validateDate(birthDate); // Validasi tanggal
  if (dateErr) {
    errorMessage.textContent = dateErr; // Tampilkan error
    return;
  }

  // Validasi hanya huruf
  function validateAlpha(input) {
    const alphaPattern = /^[a-zA-Z\s]+$/; // Regex huruf
    if (!alphaPattern.test(input)) {
      return "Input harus berupa huruf"; // Error jika bukan huruf
    }
    return "";
  }
  let namaErr = validateAlpha(nama); // Validasi nama
  if (namaErr) {
    errorMessage.textContent = namaErr; // Tampilkan error nama
    return;
  }

  // Ambil input angka nilai
  const nilai_presensi = getValue("presensi"); // Ambil nilai presensi
  const nilai_tugas = getValue("tugas"); // Ambil nilai tugas
  const nilai_uts = getValue("uts"); // Ambil nilai UTS
  const nilai_uas = getValue("uas"); // Ambil nilai UAS

  // Menampilkan data teks tambahan
  document.getElementById("hasil_alamat").innerText = "Alamat: " + alamat; // Tampilkan alamat
  document.getElementById("hasil_email").innerText = "Email: " + email; // Tampilkan email
  document.getElementById("hasil_telpon").innerText = "Telepon: " + phone; // Tampilkan telepon
  document.getElementById("hasil_birthDate").innerText =
    "Tanggal Lahir: " + birthDate; // Tampilkan tanggal lahir

  // Menampilkan nilai akademik
  document.getElementById("hasil_presensi").innerText =
    "Presensi: " + nilai_presensi; // Tampilkan presensi
  document.getElementById("hasil_tugas").innerText = "Tugas: " + nilai_tugas; // Tampilkan tugas
  document.getElementById("hasil_uts").innerText = "UTS: " + nilai_uts; // Tampilkan UTS
  document.getElementById("hasil_uas").innerText = "UAS: " + nilai_uas; // Tampilkan UAS

  // Hitung rata-rata nilai
  const hasil_hitung =
    (nilai_presensi + nilai_tugas + nilai_uts + nilai_uas) / 4; // Rata-rata

  // Tampilkan data teks
  hasil_nama.innerText = "Nama: " + nama; // Tampilkan nama
  hasil_nim.innerText = "NIM: " + nim; // Tampilkan NIM
  hasil_jurusan.innerText = "Jurusan: " + jurusan; // Tampilkan jurusan

  // Tampilkan hasil nilai
  hasil_rata2.innerText = "Nilai rata-rata = " + hasil_hitung.toFixed(2); // Tampilkan rata-rata

  if (hasil_hitung >= 85 && hasil_hitung <= 100) {
    h_grade.innerText = "Grade = A"; // Grade A jika >=85
    h_status.innerText = "Kesimpulan = Lulus"; // Lulus
  } else {
    h_grade.innerText = "Grade = E"; // Grade E jika <85
    h_status.innerText = "Kesimpulan = Tidak Lulus"; // Tidak Lulus
  }

  // Validasi input tidak kosong
  function validateNotEmpty(input) {
    if (input.trim() === "") {
      return "Input tidak boleh kosong"; // Error jika kosong
    }
    return "";
  }
  let emptyErr = validateNotEmpty(nama); // Cek nama
  if (emptyErr) {
    errorMessage.textContent = emptyErr; // Tampilkan error
    return;
  }
}
