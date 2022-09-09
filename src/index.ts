import _ from "lodash";
import "./style.css";
import ome from "./ome.png";
import printMe from "./print.js";

export function component() {
	const element = document.createElement("div");
	const btn = document.createElement("button");

	element.innerHTML = _.join(["Hello", "webpack"], " ");
	element.classList.add("hello");

	/** image */
	const image = new Image();
	image.src = ome;
	element.appendChild(image);

	/** diffentance output */
	btn.innerHTML = "click me and check the console !";
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());

/**动态导入只会在执行到当前代码才会去开始导入 */
// function getComponent () {
//   return import('lodash')
//     .then(({ default: _ }) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
