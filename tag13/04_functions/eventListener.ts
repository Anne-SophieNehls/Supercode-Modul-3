// ** addEventListener



let counter: number = 0
const counterElement = document.getElementById("counter")
const buttonElement = document.getElementById("button-count")
// ! => an der Stelle kann mit einem Ausrufenzeichen geschrieben werden


console.log(counterElement);
console.log(buttonElement);



function handleCountButtonClicked(event: MouseEvent) {
    // ! das hilft uns, dass die Seite nicht neu geladen wird
    event.preventDefault()
    // counter = counter + 1
    counter++
    console.log(counter);
    if (counterElement) {
        // ! counter ist eine Zahl und darf nicht zugewiesen werden, weil counterElemenet nur string von uns erwartet, also sollte in einen String umgewwandlet werden
        counterElement.textContent = counter.toString()
    }
}
// ! hier sollte überprüft werden ob die Elementen gefunden wurden
if (counterElement && buttonElement) {
    buttonElement.addEventListener("click", handleCountButtonClicked)
} else {
    console.error("counterElement und ButtonElement wurden nicht gefunden!!!")
}

// ! Alternative v2 Nullish Coalescing Operator



let counter2: number = 0

// const counterElement2 = document.getElementById("counter") ?? new HTMLElement()
// ! diese zwei Fragenzeichen sind die kurzschreibweise als ternary Operator
const counterElement2 = document.getElementById("counter") ?? new HTMLElement()
// ! die Erste Fragezeichen überprüft ob das Element gibt, falls nein, dann die zweite fragenzeichen erzuegt uns ein HTML Element
// document.createElement("h2")
// document.body.appendChild(counterElement2)
const buttonElement2 = document.getElementById("button-count")


function handleCountButtonClicked2(event: MouseEvent) {
    event.preventDefault()
    counter++
    console.log(counter);
    counterElement2.textContent = counter.toString()
}

buttonElement2?.addEventListener("click", handleCountButtonClicked2)




const bgButtonElement = document.getElementById("change_bg")


// ! das zweite Argument von unserem addEventListener ist eine callback function und kann entweder ausgelagrt werden und im nachhinhein verwendet werden oder direkt als argumenet übergeben werden

// ! eine einzelne Fragezeichen wird als Elvis Operator gennant
bgButtonElement?.addEventListener("click", function (event: MouseEvent) {
    event.preventDefault()
    document.body.style.backgroundColor = "yellow"
})