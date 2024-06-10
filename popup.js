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

  //push data in array
  //also get data through

  const name = document.getElementById("input-name").value;
  const task = document.getElementById("input-task").value;
  const startDate = document.getElementById("input-sdate").value;
  const endDate = document.getElementById("input-edate").value;
  const description = document.getElementById("input-description").value;

  if (!name || !task || !startDate || !endDate || !description) {
    return alert("You Must Fill Every Single Field");
  }

  let docs = JSON.parse(localStorage.getItem("docs"));
  // let docs = localStorage.getItem("docs") || [];

  docs.push({
    name,
    task,
    startDate,
    endDate,
    description,
  });

  localStorage.setItem("docs", JSON.stringify(docs));
  // localStorage.setItem("docs", docs);

  // Hide form
  popupForm.style.display = "none";

  // Show button
  popupButton.style.display = "block";

  refreshDocs();
}

function refreshDocs() {
  let outputTbl = document.getElementById("docs-table");
  // const docs = localStorage.getItem("docs");
  const docs = JSON.parse(localStorage.getItem("docs"));

  // Create the table header
  const tableHeader = `
    <tr>
      <th>Name</th>
      <th>Task</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Description</th>
      </tr>`;
  // <th>Action</th>

  // Create the table rows
  const tableRows = docs.map(
    (e, index) =>
      `
      <tr>
        <td>${e.name}</td>
        <td>${e.task}</td>
        <td>${e.startDate}</td>
        <td>${e.endDate}</td>
        <td>${e.description}</td>
        <td>
          <button onclick="deleteRow(${index})">Delete</button>
        </td>
      </tr>`
  );

  // Set the HTML content of the table
  outputTbl.innerHTML = tableHeader + tableRows.join("");
}

function deleteRow(index) {
  let docs = JSON.parse(localStorage.getItem("docs"));

  // Remove the element at the specified index
  docs.splice(index, 1);

  // Update local storage
  localStorage.setItem("docs", JSON.stringify(docs));

  // Refresh the table display
  refreshDocs();
}
