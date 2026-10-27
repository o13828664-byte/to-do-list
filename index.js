function allInputs() {
  let mainInput = document.getElementById("firistInput");
  let mainButton = document.getElementById("firistButton");
  let ullist = document.getElementById("listUl");
  let inputValue = mainInput.value;
  if (inputValue.trim() == "") {
    alert("please fill the input");
    return;
  }
  let liList = document.createElement("li");
  liList.classList.add("li-model");
  let spanlist = document.createElement("span");
  spanlist.classList.add("span-model");
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");
  let sup = document.createElement("button");
  sup.classList.add("button-sup");
  let del = document.createElement("button");
  del.classList.add("button-del");
  spanlist.textContent = inputValue;
  btnDiv.appendChild(sup);
  sup.textContent = "انهاء";
  del.textContent = "حذف";
  btnDiv.appendChild(del);
  liList.appendChild(btnDiv);
  liList.appendChild(spanlist);
  ullist.appendChild(liList);
  sup.addEventListener("click", function () {
    spanlist.style.textDecoration = "line-through"
  });
  del.addEventListener("click", function () {
    liList.remove()
  })
  mainInput.value = "";
  // console.log(liList)
}
