// Partial application
// const createPara = (attr) => createElement('p', attr);
// const createDiv = (content) => createElement('div', {}, content)
const createPara = createElement.bind(null, 'p');
const createDiv = createElement.bind(null, 'div', {});

function create(words) {
   const container = document.getElementById('content');

   for (let word of words) {
      const p = createPara({ textContent: word });
      p.style.display = 'none';
      const div = createDiv(p);
      container.appendChild(div);

      div.addEventListener('click', show);

      // Closure
      function show() {
         p.style.display = p.style.display == "none" ? "block" : "none";
      }
   }
}

// Decorator function
function createElement(type, attr, content) {
   const element = document.createElement(type);

   if (attr) {
      Object.assign(element, attr);
   }

   if (content != undefined) {
      element.appendChild(content);
   }

   return element;
}