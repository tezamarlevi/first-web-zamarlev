const nama = "Teza Marlevi";
let usia = 10;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia >= 10 && usia < 18) {
        generasi = "Generasi Remaja";
    }
    else if (usia >= 18 && usia < 30) {
        generasi = "Generasi Dewasa";
    }
    else if (usia >= 30) {
        generasi = "Generasi Tua";
    }
    else if (usia >= 2 && usia < 10) {
        generasi = "Generasi Anak-anak";
    }
    else {
        generasi = "Generasi bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();



