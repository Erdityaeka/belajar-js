// Ambil elemen output
const hasil_nama = document.getElementById("hasil_nama");
const hasil_nim = document.getElementById("hasil_nim");
const hasil_jurusan = document.getElementById("hasil_jurusan");
const hasil_rata2 = document.getElementById("rata2");
const h_status = document.getElementById("h_status");
const h_grade = document.getElementById("grade");

// Fungsi ambil nilai angka
function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}

function hitung_nilai() {
  // Ambil input teks
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const jurusan = document.getElementById("jurusan").value;

  // Ambil input angka
  const nilai_presensi = getValue("presensi");
  const nilai_tugas = getValue("tugas");
  const nilai_uts = getValue("uts");
  const nilai_uas = getValue("uas");

  const hasil_hitung =
    (nilai_presensi + nilai_tugas + nilai_uts + nilai_uas) / 4;

  // Tampilkan data teks
  hasil_nama.innerText = "Nama: " + nama;
  hasil_nim.innerText = "NIM: " + nim;
  hasil_jurusan.innerText = "Jurusan: " + jurusan;

  // Tampilkan hasil nilai
  hasil_rata2.innerText = "Nilai rata-rata = " + hasil_hitung.toFixed(2);

  if (hasil_hitung >= 85 && hasil_hitung <= 100) {
    h_grade.innerText = "Grade = A";
    h_status.innerText = "Kesimpulan = Lulus";
  } else {
    h_grade.innerText = "Grade = E";
    h_status.innerText = "Kesimpulan = Tidak Lulus";
  }
}
