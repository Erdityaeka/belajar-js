function tampileksternal() {
  alert("helo eksternal");
}

function opr() {
  let a = 10;
  let b = 5;
  let c = a + b;
  let pe = a > b;
  // tampilkan di HTML
  document.getElementById("nilaia").innerText ="a = " + a;
  document.getElementById("nilaib").innerText ="b = "+ b;
  document.getElementById("output").innerText = "hasil = " + c;
  document.getElementById("output2").innerText = "hasil2 = " + pe;
}
// let nilai = 79;
// if (nilai >= 75) {
//   alert("lulus");
//   console.log("lulus");
// } else {
//   alert("tidak lulus");
//   console.log("tidak lulus");
// }

//fuction
function tampilpesan() {
  alert("hello wordd");
  
}
function ceknilai() {
  let nilai = 79;
  if (nilai >= 75) {
    alert("lulus");
    console.log("lulus");
  } else {
    alert("tidak lulus");
    console.log("tidak lulus");
  }
}

function sapa(nama) {
  return "Halo " + nama;
}
console.log(sapa("Erditya"));

let sapaa = function (nama) {
  return "Halo, " + nama + "!";
};
console.log(sapaa("Erditya"));

//Perulangan for
for (let i = 1; i <= 10; i++) {
  console.log("perulangan angka- " + i);
}
//Perulangan while
let i = 0;
while (i < 10) {
  console.log("perulangan nilai  " + i);
  i++;
}

//mengambil elemen dari halaman
let paragraf = document.getElementById("paragraf1");
let tombol = document.querySelector(".tombol");

//Menambahkan event listener untuk tombol
tombol.addEventListener("click", function () {
  paragraf.innerText = "Teks paragraf ini telah berubah setelah tombol di klik";
  paragraf.style.color = "blue";
});
