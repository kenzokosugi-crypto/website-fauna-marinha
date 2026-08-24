window.onload = function() {
        window.scrollTo(
            (document.documentElement.scrollWidth - window.innerWidth) / 2,
            0)
    }

function abrirsumario() {
    const sumario = document.getElementById("sumario");

    if (sumario.style.display === "none" || sumario.style.display === "") {
        sumario.style.display = "block";
    } else {
        sumario.style.display = "none";
    }
}
