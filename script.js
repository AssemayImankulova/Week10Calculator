
window.addEventListener('load', function () {
    var signs = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '*', '.', 'c', '√', 'x²', 'x³', 'π', '='
    ];
    var calc = document.getElementById('calc');
    var textArea = document.getElementById('inputVal');
    signs.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });
      function onButtonClick(event) {
        if (event.target.innerHTML === 'c') {
            textArea.innerHTML = '0';
        }
          else if (event.target.innerHTML === '=') {
            for(let i = 0; i < textArea.innerHTML.length; i++) {
              if(textArea.innerHTML[i] == '√') {
                textArea.innerHTML = Math.sqrt(textArea.innerHTML[i + 1]);
              }
                  textArea.innerHTML = eval(textArea.innerHTML);
            }
      else if (event.target.innerHTML == 'x²') {
          textArea.innerHTML = Math.pow(textArea.innerHTML[textArea.innerHTML.length - 1], 2);
        }
else if (event.target.innerHTML == 'x³') {
          textArea.innerHTML = Math.pow(textArea.innerHTML[textArea.innerHTML.length - 1], 3);
        }
   else if (event.target.innerHTML == '*') {
          textArea.innerHTML += event.target.innerHTML;
          textArea.innerHTML = eval(textArea.innerHTML);
        }            
else if (event.target.innerHTML == 'π') {
          if(textArea.innerHTML == '0') {
            textArea.innerHTML = '';
            textArea.innerHTML += Math.PI;
          }
          else {
            textArea.innerHTML *= Math.PI;
          }
       }
        else if (textArea.innerHTML === '0') {
            textArea.innerHTML = event.target.innerHTML;
        }
        else {
            textArea.innerHTML += event.target.innerHTML;
        }
