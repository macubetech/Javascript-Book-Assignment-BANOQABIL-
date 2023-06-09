 //ASSIGNMENT 49-52: // EVENTS

 //Question / 01:

 function displayFormData(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var formData = {
      Name: name,
      Email: email,
      Password: password
    };

    var formDataString = JSON.stringify(formData);

    document.getElementById('formOutput').textContent = formDataString;
  }

  //Question / 02:

  function showFullDetails(itemId) {
    var item = document.getElementById(itemId);
    var partialDetails = item.querySelector('.partial-details');
    var fullDetails = item.querySelector('.full-details');

    partialDetails.style.display = 'none';
    fullDetails.style.display = 'block';
  }

  //Question / 03:

  var table = document.getElementById('student-table');
        var studentForm = document.getElementById('student-form');
        var hiddenForm = document.getElementById('hidden-form');
        var hiddenRowIndex = document.getElementById('hidden-row-index');

        // Function to delete a row
        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }

        // Function to edit a row
        function editRow(button) {
            var row = button.parentNode.parentNode;
            var cells = row.getElementsByTagName('td');
            hiddenRowIndex.value = row.rowIndex;
            document.getElementById('hidden-index-input').value = cells[0].innerHTML;
            document.getElementById('hidden-name-input').value = cells[1].innerHTML;
            document.getElementById('hidden-class-input').value = cells[2].innerHTML;
            hiddenForm.style.display = 'block';
        }

        // Function to update a row
        function updateRow(event) {
            event.preventDefault();
            var rowIndex = hiddenRowIndex.value;
            var row = table.rows[rowIndex];
            var cells = row.getElementsByTagName('td');
            cells[0].innerHTML = document.getElementById('hidden-index-input').value;
            cells[1].innerHTML = document.getElementById('hidden-name-input').value;
            cells[2].innerHTML = document.getElementById('hidden-class-input').value;
            hiddenForm.style.display = 'none';
        }

        