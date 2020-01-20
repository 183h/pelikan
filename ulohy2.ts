// 1.2. Simple strings
// decipherThis(str: string): string

// Funkcia odšifruje každé slovo zvlášť v zašifrovej správe. Podmienky:

//     Prvé písmeno korešponduje kú kódu ASCII znaku (case sensitive)
//     Druhé písmeno treba zameniť s posledným písmenom
//     Posledné písmeno treba vymeniť s druhým písmenom
//     Pokiaľ má správa iba jedno písmeno, zostane nezmenená
//     Pokiaľ má správa iba dve písmená, je iba potrebné prekonvertovat kód ASCII znaku na písmeno
//     Žiadne prísne edge cases - správa je bez špeciálnych znakov atď.

const s1 = '72olle 103doo 100ya';
const s2 = '82yade 115te 103o x';

// Príklady
console.log(decipherThis(s1)); // vráti 'Hello good day'
console.log(decipherThis(s2)); // vráti 'Ready set go'

function decipherThis(str: String) {
    return str.replace(/[0-9]{1,3}/g, s => String.fromCharCode(parseInt(s)))
        .split(" ")
        .map(w => w.length <= 2 ? w : w[0] + w[w.length-1] + w.slice(2, w.length - 1) + w[1])
        .join(" ");
}