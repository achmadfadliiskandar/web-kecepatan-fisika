function hitung() {
    var kecepatan = parseInt(document.getElementById('kecepatan').value)
    var waktu = parseInt(document.getElementById('waktu').value)

    var kecepatanbaru = Number(kecepatan)
    var waktubaru = Number(waktu)

    if(isNaN(kecepatan)||isNaN(waktu)){
        alert('isi dengan angka ya jangan huruf dan simbol')
    }
    else{
    var hasil = kecepatanbaru/waktubaru
    document.getElementById("hasil").value = hasil
    alert('rumus percepatan adalah v/t atau v dibagi t')
    }
}

function jumlah(){
    var percepatan = parseInt(document.getElementById('percepatan').value)
    var time = parseInt(document.getElementById('time').value)

    var percepatanbaru = Number(percepatan)
    var timebaru = Number(time)

    if(isNaN(percepatan)||isNaN(time)){
        alert('isi dengan angka jangan simbol dan huruf')
    }
    else{
    var hasilkan = percepatanbaru*timebaru
    document.getElementById("hasilkan").value = hasilkan
    alert('rumus kecepatan adalah a*t atau a dikali t')
    }
}

function hasilin(){
    var kecepatansatu = document.getElementById('kecepatansatu').value
    var percepatansatu = document.getElementById('percepatansatu').value

    var kecepatansatubaru = Number(kecepatansatu)
    var percepatansatubaru = Number(percepatansatu)


    if(isNaN(kecepatansatu)|| isNaN(percepatansatu)){
        alert('isi dengan angka jangan simbol dan huruf')
    }
    else{
    var hasilnya = kecepatansatubaru/percepatansatubaru
    document.getElementById("hasilnya").value = hasilnya
    alert('rumus waktu adalah v/a atau v dibagi a')
    }
}
function informasi(){
    alert('a = adalah Percepatan v = adalah Kecepatan t = adalah Waktu')
    alert('terima kasih')
}
function hapuspercepatan(){
    document.getElementById('kecepatan').value = ""
    document.getElementById('waktu').value = ""
    document.getElementById('hasil').value = ""
}
function hapuskecepatan(){
    document.getElementById('percepatan').value = ""
    document.getElementById('time').value = ""
    document.getElementById('hasilkan').value = ""
}
function hapuswaktu(){
    document.getElementById('kecepatansatu').value = ""
    document.getElementById('percepatansatu').value = ""
    document.getElementById('hasilnya').value = ""
}