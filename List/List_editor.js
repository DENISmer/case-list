    function addAnother(event) {
        event.preventDefault();
        console.log('addAnother');

        const label = document.getElementById("label");
        const ol = document.getElementById("rounded");

        const children = ol.children.length + 1;
        const li = document.createElement("li");
        
        li.innerHTML =`<input type="checkbox" id="chbx" class="list-element">
        <span>${label.value}</span>
        <button onclick="drop()">x</button>`;

        li.setAttribute("id","element" + children);
        ol.appendChild(li);

        label.value = "";
    }
    function drop(ev){
        const Ievent = ev || event;
        Ievent.target.parentElement.remove();
    }

    function drop_filter(){
        // evented.preventDefault();
        let checkboxes = document.querySelectorAll('input:checked')
        if (checkboxes.length === 0){
            alert('NO CASES SELECTED');
        }
        for(let i = 0;i < checkboxes.length;i++){
            checkboxes[i].parentElement.remove();
        }
        //checkboxes.removeChild(checkboxes.parentElement)
    }
    function filter(){
        let checkboxes = document.querySelectorAll('input:checked')
        if (checkboxes.length === 0){
            alert('NO CASES SELECTED');
        }
        for(let i = 0;i < checkboxes.length;i++){
            checkboxes[i].parentElement.style.visibility = 'hidden';
        }
    }
    function unfilter(){
        let checkboxes = document.querySelectorAll('input:checked')
        if (checkboxes.length === 0){
            alert('NO CASES SELECTED');
        }
        for(let i = 0;i < checkboxes.length;i++){
            checkboxes[i].parentElement.style.visibility = 'visible';
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("rty").addEventListener("submit", addAnother)
    })