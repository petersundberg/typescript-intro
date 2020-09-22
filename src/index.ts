// 2 - Spelartröja med Interface
// Skriv sedan kod som skapar ett interface för en spelartröja (jersey) med egenskaperna: playerName, playerNumber, primaryColor, secondaryColor(optional), sponsorLogo(optional) och size.
// Prova därefter att hårdkoda in värden för en spelartröja.
// Hårdkoda sedan några pensionerade tröjnummer (mellan 1-99) i en array
// (retiredNumbers)
// Därefter skriver du en funktion som kollar om playerNumber är pensionerat (dvs återfinns i retiredNumbers och då inte kan användas till en ny tröja.)
// Om tid finns; skapa en klass som använder interfacet och gör samma saker.
//----------------------------------------------------------
// interface Jersey {
//         playerName: string;
//         playerNumber: number;
//         primaryColor: string;
//         secondaryColor?: string;
//         sponsorLogo?: string;
//         size: string;
//     }
//     let myJersey: Jersey = {
//         playerName: "Sundberg",
//         playerNumber: 5,
//         primaryColor: "green",
//         size: "xl",
//         sponsorLogo: "logoHere",
//     };
//     let retiredNumbers = [1, 5, 10, 95];
//     function isNumberRetired(jersey: Jersey): Boolean {
//         return retiredNumbers.includes(jersey.playerNumber);
//     }
//     console.log(isNumberRetired(myJersey));
//-----------------------------------------------------


//Skapa en class som gör samma saker:
interface Jersey {
    playerName: string;
    playerNumber: number;
    primaryColor: string;
    secondaryColor?: string;
    sponsorLogo?: string;
    size: Size;
}
interface isRetiredFunction {
    (jersey: Jersey): boolean;
}
enum Size {
    xa,
    s,
    m,
    l,
    xl,
    xxl,
}
class PlayerJersey implements Jersey {
    playerName: string;
    playerNumber: number;
    primaryColor: string;
    secondaryColor?: string;
    sponsorLogo?: string;
    size: Size;
    constructor(jersey: Jersey) {
        this.playerName = jersey.playerName;
        this.playerNumber = jersey.playerNumber;
        this.primaryColor = jersey.primaryColor;
        this.size = jersey.size;
        this.secondaryColor = jersey.secondaryColor;
        this.sponsorLogo = jersey.sponsorLogo;
    }
}
let myJersey: Jersey = {
    playerName: "Sundberg",
    playerNumber: 5,
    primaryColor: "green",
    size: 4,
    sponsorLogo: "logoHere",
};
let newJersey = new PlayerJersey(myJersey);
console.log(newJersey);
(window as any).newJersey = newJersey;
let retiredNumbers = [1, 5, 10, 95];
function isNumberRetired(jersey: Jersey): Boolean {
    return retiredNumbers.includes(jersey.playerNumber);
}
console.log(isNumberRetired(myJersey));

