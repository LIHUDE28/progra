
let words: string [] = [
"COMPUTADOTA",
"AGUACATE",
"COLA"
];

export function getRamdomWord() {

    const ramdomIndex = Math.floor(Math.random() * words.length);
    console.log(ramdomIndex);
    return words[ramdomIndex];
}