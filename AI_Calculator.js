/* make a calculator with 2 input fields and 1 result field. It is possible to add, subtract, divide and multiply the 2 input fields togehter and the results ends up in the result field */
var calculator = document.createElement('div');
calculator.innerHTML = '<input type="text" id="input1" value="0" /> <input type="text" id="input2" value="0" /> <input type="text" id="result" value="0" /> <button id="add">+</button> <button id="subtract">-</button> <button id="multiply">*</button> <button id="divide">/</button>';
document.body.appendChild(calculator);
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var result = document.getElementById('result');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
add.addEventListener('click', function() {
  result.value = parseInt(input1.value) + parseInt(input2.value);
});
subtract.addEventListener('click', function() {
  result.value = parseInt(input1.value) - parseInt(input2.value);
});
multiply.addEventListener('click', function() {
  result.value = parseInt(input1.value) * parseInt(input2.value);
});
divide.addEventListener('click', function() {
  result.value = parseInt(input1.value) / parseInt(input2.value);
});