window.addEventListener('load', solution);

function solution() {
  const employee = document.getElementById("employee");
  const category = document.getElementById("category");
  const urgency = document.getElementById("urgency");
  const assignedTeam = document.getElementById("team");
  const description = document.getElementById('description');

  const colPreview = document.getElementsByClassName("preview-list")[0];
  const colPending = document.getElementsByClassName("pending-list")[0];
  const colResolved = document.getElementsByClassName("resolved-list")[0];

  document.getElementById('add-btn').addEventListener("click", addProblem);

  function createElement(type, value, className) {
    const element = document.createElement(type);
    element.textContent = value;
    if (className){
        element.classList.add(className);
    }
    return element;
  }

  function addProblem(ev) {
    ev.preventDefault();
    let problem = document.createElement('li');
    problem.classList.add("problem-content");
    const article = document.createElement('article');
    //article.classList.add("problem-content")
    article.appendChild(createElement('p', `From: ${employee.value}`));
    article.appendChild(createElement('p', `Category: ${category.value}`));
    article.appendChild(createElement('p', `Urgency: ${urgency.value}`));
    article.appendChild(createElement('p', `Assigned to: ${assignedTeam.value}`));
    article.appendChild(createElement('p', `Description: ${description.value}`));

    employee.value = '';
    category.value = '';
    urgency.value = '';
    assignedTeam.value = '';
    description.value = '';
    document.getElementById('add-btn').disabled = true;
    
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('flex');

    const btnEdit = createElement('button', 'Edit', 'white');
    const btnContinue = createElement('button', 'Continue', 'white');
    const btnResolved = createElement('button', 'Resolved', 'white');
    const btnClear = createElement('button', 'Clear', 'white');

    btnEdit.addEventListener('click', editHandler);
    btnContinue.addEventListener('click', continueHandler);
    btnResolved.addEventListener('click', resolvedHandler);
    btnClear.addEventListener('click', clearHandler);

    btnWrapper.appendChild(btnEdit);
    btnWrapper.appendChild(btnContinue);

    article.appendChild(btnWrapper);
    //problem.appendChild(article);
    colPreview.appendChild(article);

    function editHandler(){
        //employee.value = document.querySelectorAll("li.problem-content")[0].children[0].children[0].textContent.split(': ')[1];
        employee.value = document.querySelectorAll("ul.preview-list article")[0].children[0].textContent.split(": ")[1];
        category.value = document.querySelectorAll("ul.preview-list article")[0].children[1].textContent.split(': ')[1];
        urgency.value = document.querySelectorAll("ul.preview-list article")[0].children[2].textContent.split(': ')[1];
        assignedTeam.value = document.querySelectorAll("ul.preview-list article")[0].children[3].textContent.split(': ')[1];
        description.value = document.querySelectorAll("ul.preview-list article")[0].children[4].textContent.split(': ')[1];
        document.getElementById('add-btn').disabled = false;
        article.remove();
    }

    function continueHandler() {
        btnEdit.remove();
        btnContinue.remove();
        btnWrapper.appendChild(btnResolved);
        colPending.appendChild(article);
    }

    function resolvedHandler() {
        btnResolved.remove();
        btnWrapper.appendChild(btnClear);
        colResolved.appendChild(article);
    }

    function clearHandler() {
        article.remove();
    }
  }

}


//const [_,colPreview,colPending,colResolved] = Array.from(document.querySelectorAll("section")).map(s => s.children[1]);

  //const element = document.createElement('li');
  
  //".preview-list" 
  //element.value = 

// const selectElement = document.getElementById('menu');
// const textElement = document.getElementById('newItemText');
// const valueElement = document.getElementById('newItemValue');

// const option = document.createElement('option');
// option.value = valueElement.value;
// option.text =textElement.value;

// selectElement.appendChild(option);

// textElement.value = '';
// valueElement.value = '';
    
// const buttons = Array.from(document.querySelectorAll('button'));
    // const textAreas = Array.from(document.querySelectorAll('textarea'))
// 
    // buttons[0].addEventListener('click', encode);
    // buttons[1].addEventListener('click', decode);
// 
    // function encode() {
        // const text = textAreas[0].value;
        // let encodedText = '';
        // for (let i = 0; i < text.length; i++) {
            // encodedText += String.fromCharCode(text.charCodeAt(i) + 1);
        // }
// 
        // textAreas[1].value = encodedText;
        // textAreas[0].value = '';
    // }
// 
    // function decode() {
        // const text = textAreas[1].value;
        // let decodedText = '';
        // for (let i = 0; i < text.length; i++) {
            // decodedText += String.fromCharCode(text.charCodeAt(i) - 1);
        // }
// 
        // textAreas[1].value = decodedText;
    // }