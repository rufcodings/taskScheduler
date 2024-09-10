let button = document.querySelector("#button");

button.addEventListener("click", (e) => {
    let task = document.getElementById("task").value;
    let select = document.querySelector("#priority option").value;
    let date = document.getElementById("date").value;

    const selectedDate = new Date(date);
    const currentDate = new Date();

    if(selectedDate <= currentDate){
        alert(`Please choose the upcoming date`);
    }

    else if(task.trim() === "" || date === ""){
        alert(`Please Enter the Task and Date`);
    }

    else{
    let div = document.createElement("div");
    div.innerHTML = `<pre><span>Name:${task}</span>    <span>Priority:${select}</span>    <span>Deadline:${date}</span>    </pre>`;
    console.log(div);

    div.style.fontSize = "25px";
    div.style.border = "2px solid black";
    div.style.borderRadius = "10px";
    div.style.margin = "20px 50px";
    div.style.padding = "10px"
    div.style.textAlign = "center";
    div.style.display = "flex";
    div.style.justifyContent = "center";

    let btn = document.createElement("button");
    // btn.classList.add("btn");
    btn.innerText = "Complete";
    btn.style.padding = "8px";
    btn.style.borderRadius = "10px"

    div.appendChild(btn);
    
    btn.onclick = () => {
        btn.innerText = "Completed";
        btn.style.backgroundColor = "green";
        btn.style.color = "white"

        btn.onclick = () => {
            btn.innerText = "Complete";
            btn.style.backgroundColor = "red";

            btn.onclick = () => {
                btn.innerText = "Completed";
                btn.style.backgroundColor = "green";
            }         
        }
    };

    let newDiv = document.querySelector("#inputs");
    newDiv.after(div);
}
});