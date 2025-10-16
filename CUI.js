// do you really need reactjs?
// no , you don't beacause you have CUI NOW

const allowed_names = [
  "div",
  "h1",
  "h2",
  "h3",
  "p",
  "input",
  "button",
  "img",
  "br",
  "hr",
];
function CUI(name, ...args) {
  if (!allowed_names.includes(name)) {
    throw new Error("only allowed names");
  }
  const element = document.createElement(name);

  for (const arg of args) {
    if (typeof arg === "string" || typeof arg === "number") {
      element.appendChild(document.createTextNode(arg.toString()));
    } else if (arg instanceof Node) {
      element.appendChild(arg);
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      for (const [k, v] of Object.entries(arg)) {
        if (k === "style" && typeof v === "object") {
          for (const [prop, vals] of Object.entries(v)) {
            element.style[prop] = vals;
          }
        } else {
          element.setAttribute(k, v);
        }
      }
    }
  }
  return element;
}

function renderHEADER(name, ...children) {
  return CUI(name, ...children);
}

function renderDIV(...children) {
  return CUI("div", ...children);
}
function renderPARA(n, ...children) {
  return CUI("p", ...children);
}

function renderBTN(...children) {
  return CUI("button", ...children);
}
function renderINPUT(...children) {
  return CUI("input", ...children);
}

function renderIMG(...children) {
  return CUI("img", ...children);
}
function renderHR(...children) {
  return CUI("hr", ...children);
}

document.addEventListener("DOMContentLoaded", () => {
  const UI = renderDIV(
    {
      id: "container",
      style: {
        backgroundColor: "rgba(175, 193, 211, 0.2)",
        padding: "20px",
        fontFamily: "Arial, Consolas",
        margin: "40px auto",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      },
    },
    renderHEADER(
      "h1",
      {
        style: {
          color: "#333",
          marginBottom: "10px",
        },
      },
      "Example of a Page Rendered Using CUI"
    ),
    renderHR({ style: { width: "solid black 5px" } }),
    renderPARA(
      {
        style: {
          fontFamily: "Consolas, monospace",
          fontSize: "20px",
          color: "#070707ff",
        },
      },
      "All of this page content is rendered using the CUI framework."
    ),
    renderHR({ style: { width: "solid black 5px" } }),
    renderHEADER(
      "h2",
      {
        style: { marginTop: "30px", color: "#444" },
      },
      "Now we render an image example"
    ),
    renderHR({ style: { width: "solid black 5px" } }),
    renderIMG({
      src: "Meme-Face-PNG-File.png",
      alt: "Example Image",
      style: {
        width: "150px",
        height: "150px",
        borderRadius: "12px",
        border: "2px solid #333",
        padding: "10px",
        display: "block",
        marginTop: "10px",
      },
    }),
    renderHR({ style: { width: "solid black 5px" } }),
    renderHEADER(
      "h3",
      {
        style: { marginTop: "30px", color: "#444" },
      },
      "A Button Example"
    ),
    renderHR({ style: { width: "solid black 5px" } }),
    renderINPUT({
      id: "text-input",
      type: "text",
      placeholder: "Enter your name",
      required: true,
    }),
    renderBTN(
      {
        id: "clickme",
        style: {
          padding: "10px 16px",
          fontSize: "16px",
          borderRadius: "5px",

          marginTop: "10px",
        },
      },
      "CLICK ME"
    )
  );

  document.body.appendChild(UI);
});
