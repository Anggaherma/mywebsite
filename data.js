
function checkResult() {

    const birthyearInput = document.getElementById("birthYear");
    const tahunLahir = birthyearInput.value; // Convert the input value to an integer

    let generasi;

    if (tahunLahir >= 1946 && tahunLahir <= 1964) {
        generasi = "Baby Boomer"
    } else if (tahunLahir >= 1965 && tahunLahir <= 1980) {
        generasi = "Gen X"
    } else if (tahunLahir >= 1981 && tahunLahir <= 1996) {
        generasi = "Milenial"
    } else if (tahunLahir >= 1997 && tahunLahir <= 2012) {
        generasi = "Gen Z"
    } else {
        generasi = "Alpha"
    }

    const generationDiv = document.getElementById("generation");

    generationDiv.textContent = `Generasi Kamu: ${generasi}`;
    generationDiv.style.color = "#ff5722"

    setTimeout(() => {
        generationDiv.textContent = "";
        generationDiv.style.color = "";
    }, 4000);
}
