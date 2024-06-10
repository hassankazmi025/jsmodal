// const listContainer = document.getElementById("list-container");
// const inputBox = document.getElementById("input-box");

refreshDocs();

function showModal() {
  let popupForm = document.getElementById("popupForm");
  let popupButton = document.getElementById("popupButton");

  if (popupForm.style.display === "none") {
    // Show
    popupForm.style.display = "block";
    // Hide
    popupButton.style.display = "none";
  } else {
    popupForm.style.display = "none";
  }
}

function hidePopup() {
  let popupForm = document.getElementById("popupForm");
  let popupButton = document.getElementById("popupButton");

  const name = document.getElementById("input-name").value;
  const task = document.getElementById("input-task").value;
  const startDate = document.getElementById("input-sdate").value;
  const endDate = document.getElementById("input-edate").value;
  const description = document.getElementById("input-description").value;

  /**
   * 1) push to array
   * 2) error pop up
   */

  if (!name || !task || !startDate || !endDate || !description) {
    return alert("You Must Fill Every Single Field");
  }
  console.log("Hello");
  /** Pushing Data To Array */
  const docs = JSON.parse(localStorage.getItem("docs")) || [];
  console.log("docs", docs);

  docs.push({
    name,
    task,
    startDate,
    endDate,
    description,
  });

  localStorage.setItem("docs", JSON.stringify(docs));

  // Hide form
  popupForm.style.display = "none";

  // Show button
  popupButton.style.display = "block";

  refreshDocs();
}

function refreshDocs() {
  let outputTbl = document.getElementById("docs-table");
  const docs = JSON.parse(localStorage.getItem("docs"));
  docs.forEach((e) => {
    let output = document.createElement("tr");

    output.innerHTML += "<td>" + e.name + "</td>";
    output.innerHTML += "<td>" + e.task + "</td>";
    output.innerHTML += "<td>" + e.startDate + "</td>";
    output.innerHTML += "<td>" + e.endDate + "</td>";
    output.innerHTML += "<td>" + e.description + "</td>";

    outputTbl.appendChild(output);
  });
}

// let editButton = document.createElement("button");
// editButton.innerText = "Edit";
// editButton.addEventListener("click", function () {
//   editRow(index);
// });

// let deleteButton = document.createElement("button");
// deleteButton.innerText = "Delete";
// deleteButton.addEventListener("click", function () {
//   deleteRow(index);
// });

// let buttonCell = document.createElement("td");
// buttonCell.appendChild(editButton);
// buttonCell.appendChild(deleteButton);

// output.appendChild(buttonCell);

// function formSubmit() {
// if (inputBox.value === " ") {
//   alert("Enter Data");
// } else {
//   let li = document.createElement("li");
//   li.innerHTML = inputBox.value;
//   listContainer.appendChild("li");
// let span = document.createElement("span");
// span.innerHTML = "\u00d7";
// li.appendChild(span);
// }
// inputBox.value = "";
// saveData();
// }

// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );

// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

/**
 * [{name: <>,name: <>,name: <>,name: <>,name: <>,name: <>,}]
 *
 *
 *
 *
 */
