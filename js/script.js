document.getElementById("btnLuas").addEventListener("click", function () {
    cardLuas.style.display = "none";
    cardKeliling.style.display = "";
    
    kelilingForm.style.display = "none";
    luasForm.style.display = "block";
    footer.style.display = "none";

    document.getElementById("sisiA").value = '';
    document.getElementById("sisiB").value = '';
    document.getElementById("sisiC").value = '';

    resultLuas.style.display = "none";
    hasilHitunganLuas.textContent = "";
  });
  
  document.getElementById("btnKeliling").addEventListener("click", function () {
    cardLuas.style.display = "";
    cardKeliling.style.display = "none";
    
    luasForm.style.display = "none";
    kelilingForm.style.display = "block";
    footer.style.display = "none";

    document.getElementById("alas").value = '';
    document.getElementById("tinggi").value = '';

    resultKeliling.style.display = "none";
    hasilHitunganKeliling.textContent = "";
  });
  
/////////////////////////////////////////////////////////////////////////////////////////

  const luasSegitiga = document.getElementById("hitungLuas");
  luasSegitiga.addEventListener("click", function () {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    

    const errorMessage = document.getElementById('error-message-luas');
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        errorMessage.textContent = "Nilai yang anda masukkan tidak valid!";
        resultLuas.style.display = "none";
        return;
      }
    errorMessage.textContent = '';

    const dibagi2 = 0.5 * alas;
    const luas = dibagi2 * tinggi

    // let hasilHitungan =
    // 'L = 1/2 x a x t<br>' +
    // 'L = 1/2 x ' + alas +' x ' + tinggi +'<br>' +
    // 'L = ' + dibagi2 +' x ' + tinggi +'<br>' +
    // 'L = ' + luas;

    // document.getElementById("result").innerHTML = hasilHitungan;

    step1Luas.textContent = `L = 1/2 x a x t`;
    step2Luas.textContent = `L = 1/2 x ${alas} x ${tinggi}`;
    step3Luas.textContent = `L = ${dibagi2} x ${tinggi}`;
    hasilHitunganLuas.textContent = `${luas}`;
    resultLuas.style.display = "block";
  });
  
/////////////////////////////////////////////////////////////////////////////////////////

  const kelilingSegitiga = document.getElementById("hitungKeliling");
  kelilingSegitiga.addEventListener("click", function () {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);
    
    const errorMessageKel = document.getElementById('error-message-keliling');
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
        errorMessageKel.textContent = "Nilai yang anda masukkan tidak valid!";
        resultKeliling.style.display = "none";
        return;
      }
      errorMessageKel.textContent = '';
    
    const sisiAB = sisiA + sisiB;
    const keliling = sisiAB + sisiC;
    step1Keliling.textContent = `K = S1 + S2 + S3`;
    step2Keliling.textContent = `K = ${sisiA} + ${sisiB} + ${sisiC}`;
    step3Keliling.textContent = `K = ${sisiAB} + ${sisiC}`;
    hasilHitunganKeliling.textContent = `${keliling}`;
    resultKeliling.style.display = "block";
  });

/////////////////////////////////////////////////////////////////////////////////////////

function reset() {
    document.getElementById("alas").value = '';
    document.getElementById("tinggi").value = '';
    document.getElementById("sisiA").value = '';
    document.getElementById("sisiB").value = '';
    document.getElementById("sisiC").value = '';
    resultLuas.style.display = "none";
    resultKeliling.style.display = "none";
    const errorMessage = document.getElementById('error-message-luas');
        errorMessage.textContent = '';
    const errorMessageKel = document.getElementById('error-message-keliling');
        errorMessageKel.textContent = '';
}

// document.getElementById("resetLuas").addEventListener("click", function () {
//     document.getElementById('alas').value = '';
//     document.getElementById('tinggi').value = '';
//     result.style.display = "none";
//     hasilHitungan.textContent = "";
//   });


// document.getElementById("resetKeliling").addEventListener("click", function () {
//   document.getElementById('sisiA').value = '';
//   document.getElementById('sisiB').value = '';
//   document.getElementById('sisiC').value = '';
//   result.style.display = "none";
//   hasilHitungan.textContent = "";
// });