// ! addTwenty hat einen Parameter vom Typ number und gibt nichts zurück, daher ist der Rückgabewert void (= Nichts)
export function addTwenty(zahl: number) {
    const result = zahl + 20

}


console.log(addTwenty(20));

const addTwentyVariable = addTwenty(20)
console.log(addTwentyVariable);
addTwenty(100)
// ! addTwenty(false); -> nicht erlaubt, da boolean statt number übergeben wird
// ! addTwenty('RandomText'); -> nicht erlaubt, da string statt number übergeben wird
// addTwenty(false)
// addTwenty("testi")

export function addThirty(zahl: number): number {
    const result: number = zahl + 30
    return result
    console.log("bahaka");
}

const addThirtyVariable = addThirty(100)
console.log(addThirtyVariable);
console.log(addThirty);

const neuVariableVomAddThirtyVariable = addThirtyVariable + 100

console.log(neuVariableVomAddThirtyVariable);


// ! wir können beliebig viele Parameter übergeben -> mehr als 4 sind aus Clean-Code-Sicht nicht gut
export function einAddierenFunction(zahl1: number, zahl2: number, zahl3: number): number {
    const result = zahl1 + zahl2 + zahl3
    return result
}


const addierenVariableVonderFunctionEinAddierenFunction = einAddierenFunction(100, 60, 55)
console.log(addierenVariableVonderFunctionEinAddierenFunction);


const teilenDenWert = addierenVariableVonderFunctionEinAddierenFunction / 10
console.log(teilenDenWert);


// * wir können natürlich auch Parameter mit verschiedenen Datentypen übergeben
// ! message soll die Nachricht sein, die vor dem Ergebnis ausgegeben wird
export function printFourtyMitString(zahl: number, message: string): number {
    const result = zahl + 40
    console.log(message + result);
    return result
}


printFourtyMitString(200, "Das Ergebnis is ")

const resultVariable = printFourtyMitString(40, "Das Ergebnis is ")
const summe = resultVariable + 1000
console.log({ summe });


// ! Der Rückgabewert ist hier vom Typ string -> es muss in allen Fällen etwas mit return zurückgegeben werden
export function getOnlineMessage(isOnline: boolean): string {
    return isOnline ? "User is Online" : "User is offline"
}

const gespeicherteVariable = getOnlineMessage(true)
console.log({ gespeicherteVariable });
console.log(typeof gespeicherteVariable);

const summe2 = gespeicherteVariable + 100
console.log(summe2);



// ! Aufgabe =>

// => globle scope
const ichbinEinGlobalVariabl: string = "ich bin ein global Variable"

export function calculateTax(percentage: number, isMarried: boolean) {
    // => scope => local scope
    const ichBinEinLokalVariable: string = "ich bin lokal Variable"
    console.log("ich bin in der function", ichbinEinGlobalVariabl);
    const myTax: number = 2000;
    let resultMarried = 0
    if (isMarried) {
        resultMarried = percentage * 50 * myTax
        // console.log("resultMarriedgeheieratet", resultMarried);
        return resultMarried
    } else {
        resultMarried = percentage * 80 * myTax
        // console.log("resultMarriedNichtgeheiratet", resultMarried);
        return resultMarried
    }
}

// console.log("ich bin ausserhalb der function", ichBinEinLokalVariable);

// calculateTax(19, true)
const resultFunction = calculateTax(10, false)

console.log(resultFunction);


// ! wiederholung =>


// ! buttonElement ist wie lichtschalter
const buttonElement3 = document.getElementById("ein-button")
const paragraph = document.getElementById("paragraph") ?? new HTMLElement()

export function printText(event: MouseEvent) {
    event.preventDefault()
    paragraph.textContent = "Guten Morgen"
}

// => Elvis Operator
buttonElement3?.addEventListener("click", printText)


// ! eine function die uns eine Zahl zurückgibt

export function addition(zahl1: number, zahl2: number): number {
    return zahl1 + zahl2
}

const additionVariable = addition(10, 10)
const summe3 = additionVariable * 200
console.log(summe3);


const eineZahl: number = 20
console.log(eineZahl.toString());

export function printName(userName: string): string {
    return `Hallo ${userName}`
}


const user1 = printName("christian")
console.log(user1);


