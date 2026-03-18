function wpisz(liczba) {
    document.getElementById("ekranWynik").value = document.getElementById("ekranWynik").value + liczba;
}

function wyczysc() {
    document.getElementById("ekranWynik").value = "";
}

function oblicz() {
    try {
        let wynik = eval(document.getElementById("ekranWynik").value)
        document.getElementById("ekranWynik").value = wynik;
    } catch {
        document.getElementById("ekranWynik").value = "Błąd!";
    }
}
