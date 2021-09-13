import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";


const App = () => {

  const defaultText =
  `This is why multiple lines work.
# title
## subtitle
**bold text**
[Sample Wikipedia Link](https://en.wikipedia.org/wiki/Markup_language)
On inline code \`<p>sample code</p>\`
***huh***
Block Code!
\`\`\`
const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
\`\`\`
1. Here's a good
2. way to show
3. a list
> Block quote.. what are these used for?
![Mayan Code](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/The_Paris_Codex_06.tif/lossy-page1-283px-The_Paris_Codex_06.tif.jpg)
`;

  const [text, setText] = useState(defaultText);

  marked.setOptions({
    breaks: true });


  const previewText = marked(text);
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "editor-box" }, /*#__PURE__*/
    React.createElement("h3", null, "Editor"), /*#__PURE__*/
    React.createElement("textarea", { id: "editor", onChange: () => setText(event.target.value) }, defaultText)), /*#__PURE__*/

    React.createElement("div", { className: "preview-box" }, /*#__PURE__*/
    React.createElement("h1", { border: "solid" }, "Previewer"), /*#__PURE__*/
    React.createElement("p", { id: "preview", dangerouslySetInnerHTML: { __html: marked(text) } }))));



};

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById('root'));