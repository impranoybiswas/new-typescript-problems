interface IPattern {
  n: number;
  s: string;
}

function rightTriangle(value: IPattern) {
  let result = "";
  for (let i = 1; i <= value.n; i++) {
    result += value.s.repeat(i) + "\n";
  }

  return result;
}

function pyramid(value: IPattern) {
  let { n, s } = value;
  let result = "";

  for (let i = 1; i <= n; i++) {
    let padding = " ".repeat(n - i);
    let stars = s.repeat(2 * i - 1);
    result += padding + stars + padding + "\n";
  }

  return result;
}

function Rectangle(value: IPattern, h: number) {
  let { n, s } = value;
  let result = "";
  for (let i = 1; i <= h; i++) {
    result += s.repeat(n) + "\n";
  }
  return result;
}

function hollowRectangle(value: IPattern, h: number) {
  let { n, s } = value;
  let result = "";
  for (let i = 1; i <= h; i++) {
    if (i === 1 || i === h) {
      result += s.repeat(n) + "\n";
    } else {
      result += s + " ".repeat(n - 2) + s + "\n";
    }
  }
  return result;
}


export { rightTriangle, pyramid, Rectangle, hollowRectangle };
