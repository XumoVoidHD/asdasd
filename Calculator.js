import React, { useState } from "react";


function Calculator () {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    let res

    switch(operator)
    {
      case "+":
        res = n1+n2;
        break;
      case "-":
        res = n1-n2;
        break;
      case "*":
        res = n1*n2;
        break;
      case "/":
        res = n1/n2;
        break;
    }
    setResult(res)
  }

  const showResult = () => {
    if (result !== null){
      return <p>Result: {result}</p>
    }
    else {
      return <p>No Result</p>
    }
  } 

  return (
    <div>
      <input type="number" value={num1}  onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
      <button onClick={() => calculate()} >=</button>
      {showResult()}
    </div>
  )
}

export default Calculator
// const Calculator = () => {
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");
//   const [operator, setOperator] = useState("+");
//   const [result, setResult] = useState(null);

//   const calculate = () => {
//     const n1 = parseFloat(num1);
//     const n2 = parseFloat(num2);
//     if (isNaN(n1) || isNaN(n2)) {
//       setResult("Invalid Input");
//       return;
//     }
    
//     let res;
//     switch (operator) {
//       case "+":
//         res = n1 + n2;
//         break;
//       case "-":
//         res = n1 - n2;
//         break;
//       case "*":
//         res = n1 * n2;
//         break;
//       case "/":
//         res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
//         break;
//       default:
//         res = "Invalid Operator";
//     }
//     setResult(res);
//   };

//   return (
//     <div>
//       <h2>React Calculator</h2>
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//         placeholder="Enter first number"
//       />
//       <select
//         value={operator}
//         onChange={(e) => setOperator(e.target.value)}
//       >
//         <option value="+">+</option>
//         <option value="-">-</option>
//         <option value="*">*</option>
//         <option value="/">/</option>
//       </select>
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//         placeholder="Enter second number"
//       />
//       <button onClick={calculate}>Calculate</button>
//       {result !== null && <p>Result: {result}</p>}
//     </div>
//   );
// };

// export default Calculator;

// import React, { useState } from "react";

// const Calculator = () => {
//     const [input, setInput] = useState("");
//     const [result, setResult] = useState("");

//     const handleChange = (event) => {
//         setInput(event.target.value);
//     };

//     const calculateResult = () => {
//         try {
//             setResult(eval(input));
//         } catch {
//             setResult("Error");
//         }
//     };

//     const clearInput = () => {
//         setInput("");
//         setResult("");
//     };

//     return (
//         <div>
//             <h2>React Calculator</h2>
//             <input type="text" value={input} onChange={handleChange} placeholder="Enter expression" />
//             <button onClick={calculateResult}>=</button>
//             <button onClick={clearInput}>C</button>
//             <h3>Result: {result}</h3>
//         </div>
//     );
// };

// export default Calculator;
