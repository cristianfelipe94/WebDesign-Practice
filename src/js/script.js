(function () {
    const taskListDom = document.getElementById('js-list-container');
    const taskInputBarDom = document.getElementById('js-task-name-input');
    const taskAddBtnDom = document.getElementById('js-add-task-btn');
    const taskContainerDom = document.getElementById('js-task-main-container');

    let listItem;
    let listItemID;
    let i = 0;

    const elementsListArray = [];

    function addingElements() {
        listItem = document.createElement('li');
        listItemID = document.createElement('span');
        listItem.innerHTML = elementsListArray[i];
        listItemID.innerHTML = i;
        listItem.setAttribute('class', 'task-list-item');
        listItemID.setAttribute('class', 'task-list-item-Id');
        listItem.appendChild(listItemID);
        taskListDom.appendChild(listItem);
        i++;
    }

    taskAddBtnDom.addEventListener('click', function(){
        console.log('added Element');
        elementsListArray.push(taskInputBarDom.value);
        addingElements();
        taskInputBarDom.value = '';
    });

}());
