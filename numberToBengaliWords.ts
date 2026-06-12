const avroToBijoyMap: Record<string, string> = {
  "ক": "K",
  "খ": "L",
  "গ": "M",
  "ঘ": "N",
  "ঙ": "O",
  "চ": "P",
  "ছ": "Q",
  "জ": "R",
  "ঝ": "S",
  "ঞ": "T",
  "ট": "U",
  "ঠ": "V",
  "ড": "W",
  "ঢ": "X",
  "ণ": "Y",
  "ত": "Z",
  "থ": "_",
  "দ": "`",
  "ধ": "a",
  "ন": "b",
  "প": "c",
  "ফ": "d",
  "ব": "e",
  "ভ": "f",
  "ম": "g",
  "য": "h",
  "র": "i",
  "ল": "j",
  "শ": "k",
  "ষ": "l",
  "স": "m",
  "হ": "n",
  "া": "v",
  "ি": "w",
  "ী": "x",
  "ু": "y",
  "ূ": "~",
  "ে": "‡",
  "ৈ": "‰",
  "ো": "†v",
  "ৌ": "†Š",
};

export function avroToBijoy(text: string): string {
  let result = text;

  Object.entries(avroToBijoyMap).forEach(([unicode, bijoy]) => {
    result = result.split(unicode).join(bijoy);
  });

  return result;
}

console.log(avroToBijoy("বাংলা"));