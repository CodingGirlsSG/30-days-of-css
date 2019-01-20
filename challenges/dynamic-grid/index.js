// utils
const getColor = palette =>
  // if there's a palette, pick one from the palette
  palette
    ? palette[Math.floor(Math.random() * palette.length)]
    : // otherwise pick a random one
      "#" +
      [1, 2, 3, 4, 5, 6]
        .map(_ => "0123456789abcdef"[Math.floor(Math.random() * 16)])
        .join("");

const weaken = (color, percentage) => {
  const colorString = color.startsWith("#") ? color.slice(1) : color;
  const [red, green, blue] = [0, 2, 4].map(pos =>
    parseInt(colorString.slice(pos, pos + 2), 16)
  );
  return (
    "#" +
    [red, green, blue]
      .map(thickness => Math.floor(thickness * percentage).toString(16))
      .join("")
  );
};

const getText = (text, length) => {
  const texts = text.split(" ");
  const start = Math.floor(Math.random() * texts.length);
  return texts.slice(start, start + length).join(" ");
};

// constants
const TEXT =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
const PALETTE = ["#4379fc", "#000000", "#fd3661", "#3e00c0"];
const CARD_COUNT = 12;

// generate cards with random colors
for (let i = 0; i < CARD_COUNT; i++) {
  // creates card
  const card = document.createElement("div");
  card.classList.add("card");
  // card style
  const color = getColor(PALETTE);
  const bg = `background-image: linear-gradient(-45deg, ${weaken(
    color,
    0.7
  )} 0, ${color} 80%)`;

  // text
  const textNode = document.createElement("h1");
  textNode.innerHTML = getText(TEXT, Math.floor(Math.random() * 5 + 3));
  card.appendChild(textNode);

  // button
  const buttonNode = document.createElement("button");
  buttonNode.innerHTML = getText(TEXT, 2);
  card.appendChild(buttonNode);

  card.style = `color: ${color}; ${bg}`;
  document.querySelectorAll(".grid")[0].appendChild(card);
}
