// Area Calculation function
function areaCalculation(name, val1, val2) {
    if (name == "Triangle" || name == "Rhombus" || name == "Pentagon") return 0.5 * val1 * val2;
    else if (name == "Rectangle" || name == "Parallelogram") return val1 * val2;
    else if (name == "Ellipse") return 3.14 * val1 * val2;
}

let serial = 0;
function displayData(name, area) {
    let tableHead = document.querySelector("thead");
    let tableRow = document.createElement("tr");

    tableRow.innerHTML = `
    <td>${++serial}</td>
    <td>${name}</td>
    <td>${area}</td>
    <td><button>Convert to m<sup>2</sup></button></td>
    `;

    tableHead.appendChild(tableRow);
}


// input value requirement
let button = document.querySelectorAll("button").forEach((e) => {
    e.addEventListener("click", () => {
        let title = e.parentNode.parentNode.firstElementChild.innerText;
        let firstNum = e.parentNode.previousElementSibling.querySelectorAll("input")[0].value;
        let secondNum = e.parentNode.previousElementSibling.querySelectorAll("input")[1].value;

        if(firstNum == "" || secondNum == "") return alert("Value is required.");
        else if(firstNum < 0 || secondNum < 0) return alert("Negative value is ignored.");
        else if(isNaN(firstNum) == true || isNaN(secondNum) == true) return alert("Number value is required.");

        let area = areaCalculation(title, firstNum, secondNum);
        if (area % 2 == 1) area = area.toFixed(2);

        displayData(title, area);
    });
});


// random color generate
document.querySelectorAll(".card").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        elem.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
});