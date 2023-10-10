let todoList = [
    {
        item: 'Buy Milk',
       dueDate: '08/09/2023'
},
{
    item:'Buy Food',
   dueDate:'02/10/2023'
},
{
    item:'Go super marcket',
    dueDate:'10/15/2023'
}

];

display()

function addTodo(){
    let inputElement=document.querySelector("#inputTodo");
    let inputDate=document.querySelector("#todoDate");
    // inputElement= inputElement.touppercase();
    let todoItem=inputElement.value;
    let todoDate=inputDate.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value='';
    inputDate.value='';
    display();
}

function display(){
    let containerElement=document.querySelector('.todoContainer');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+= `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        display();">Delete</button> 
        `;
    }
    containerElement.innerHTML=newHtml;
}