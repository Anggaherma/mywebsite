// Function to get the birth year from the input field
function getBirthYear() {
    const birthyearInput = document.getElementById("birthYear");
    const birth = parseInt(birthyearInput.value); // Convert the input value to an integer

    const result = checkResult(birth) // Call checkResult with the birth year
    displayResult(result) // Display the result in the HTML
}

function checkResult(tahunLahir) {

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

    return generasi; // Return the generation name
}

function displayResult(generasi) {
    const generationDiv = document.getElementById("generation");
    generationDiv.textContent = `Generai Anda: ${generasi}`
    generationDiv.style.color = "#ff5722"
}

