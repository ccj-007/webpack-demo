// import _ from 'lodash'
import { cube } from './math.js'

export default function printMe () {
  console.log(_.join(['Another', 'module', 'loaded!'], ' '));
  console.log("Math reuslt", /*#__PURE__*/ cube(5));

  alert('I get called from print.js!2222');
}