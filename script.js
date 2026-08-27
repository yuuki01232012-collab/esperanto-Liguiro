const toLiguiro = {
  "a": "ᚨ",
  "b": "ᛒ",
  "c": "ᚲ",
  "ĉ": "ᚲ^",
  "d": "ᛞ",
  "e": "ᛊ",
  "f": "ᚠ",
  "g": "ᚷ",
  "ĝ": "ᚷ^",
  "h": "ᚺ",
  "ĥ": "ᚺ^",
  "i": "ᛁ",
  "j": "ᚼ",
  "ĵ": "ᚼ^",
  "k": "K",
  "l": "L",
  "m": "ᛗ",
  "n": "ᚾ",
  "o": "ᛟ",
  "p": "ᛈ",
  "q": "ᚦ",
  "r": "ᚱ",
  "s": "ᛋ",
  "ŝ": "ᛋ^",
  "t": "ᛏ",
  "u": "ᚢ",
  "ŭ": "ᚢ^",
  "v": "V",
  "w": "ᚹ",
  "x": "ᛝ",
  "y": "ᛃ",
  "z": "Z",

  "A": "ᚨ",
  "B": "ᛒ",
  "C": "ᚲ",
  "Ĉ": "ᚲ^",
  "D": "ᛞ",
  "E": "ᛊ",
  "F": "ᚠ",
  "G": "ᚷ",
  "Ĝ": "ᚷ^",
  "H": "ᚺ",
  "Ĥ": "ᚺ^",
  "I": "ᛁ",
  "J": "ᚼ",
  "Ĵ": "ᚼ^",
  "K": "K",
  "L": "L",
  "M": "ᛗ",
  "N": "ᚾ",
  "O": "ᛟ",
  "P": "ᛈ",
  "Q": "ᚦ",
  "R": "ᚱ",
  "S": "ᛋ",
  "Ŝ": "ᛋ^",
  "T": "ᛏ",
  "U": "ᚢ",
  "Ŭ": "ᚢ^",
  "V": "V",
  "W": "ᚹ",
  "X": "ᛝ",
  "Y": "ᛃ",
  "Z": "Z"
};


const toEsperanto = {
  "ᚲ^": "Ĉ",
  "ᚷ^": "Ĝ",
  "ᚺ^": "Ĥ",
  "ᚼ^": "Ĵ",
  "ᛋ^": "Ŝ",
  "ᚢ^": "Ŭ",

  "ᚨ": "A",
  "ᛒ": "B",
  "ᚲ": "C",
  "ᛞ": "D",
  "ᛊ": "E",
  "ᚠ": "F",
  "ᚷ": "G",
  "ᚺ": "H",
  "ᛁ": "I",
  "ᚼ": "J",
  "K": "K",
  "L": "L",
  "ᛗ": "M",
  "ᚾ": "N",
  "ᛟ": "O",
  "ᛈ": "P",
  "ᚦ": "Q",
  "ᚱ": "R",
  "ᛋ": "S",
  "ᛏ": "T",
  "ᚢ": "U",
  "V": "V",
  "ᚹ": "W",
  "ᛝ": "X",
  "ᛃ": "Y",
  "Z": "Z"
};


function convertToLiguiro() {
  const input = document.getElementById("esperanto").value;
  let result = "";

  for (const character of input) {
    result += toLiguiro[character] || character;
  }

  document.getElementById("result").textContent =
    "変換結果：" + result;
}


function convertToEsperanto() {
  const input = document.getElementById("liguiro").value;
  let result = "";
  let i = 0;

  while (i < input.length) {
    const two = input.substring(i, i + 2);

    if (toEsperanto[two]) {
      result += toEsperanto[two];
      i += 2;
      continue;
    }

    const one = input[i];

    result += toEsperanto[one] || one;
    i++;
  }

  document.getElementById("liguiroResult").textContent =
    "変換結果：" + result;
    }
