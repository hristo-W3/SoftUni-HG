function solve() {
  let input = document.getElementById('text').value.toLowerCase().split(" "); //.join('')
  let currentCase = document.getElementById('naming-convention').value;
  
  let res = "";
  switch(currentCase){
    case "Camel Case": 
      res += input.shift();
      for (const each of input) {
        res += each[0].toUpperCase() + each.slice(1);
      }
      break;
    case "Pascal Case": 
      for (const each of input) {
        res += each[0].toUpperCase() + each.slice(1);
      }
      break;
    default: 
      res = 'Error!';
      break;
  }
  document.getElementById('result').textContent = res;
}
