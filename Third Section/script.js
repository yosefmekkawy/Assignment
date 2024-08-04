function saveItem() {
  const arabicName = document.getElementById("arabicName").value;
  const englishName = document.getElementById("englishName").value;
  const arabicDesc = document.getElementById("arabicDesc").value;
  const englishDesc = document.getElementById("englishDesc").value;
  const imageUrl = document.getElementById("imageUrl").files[0];

  if (arabicName && englishName && arabicDesc && englishDesc && imageUrl) {
    // validation
    const reader = new FileReader();
    reader.onload = function (e) {
      const tableBody = document.getElementById("table-body");
      const newRow = document.createElement("tr");

      newRow.innerHTML = `
            <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">X</button></td>
            <td>${englishDesc}</td>
            <td>${arabicDesc}</td>
            <td>${englishName}</td>
            <td>${arabicName}</td>
            <td><img src="${e.target.result}" alt="${englishName}"></td>
          `;

      tableBody.appendChild(newRow);
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("addItemModal")
      );
      modal.hide();
      document.getElementById("addItemForm").reset();
    };
    reader.readAsDataURL(imageUrl);
  } else {
    // create alert
    const alertHtml = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          Please fill in all fields.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;

    // showing the alert
    document.getElementById("alert-container").innerHTML = alertHtml;
  }
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}
