//  Create a signup form and display form data in your web
// page on submission 

function signup(){
    var name1=document.getElementById('name').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value

var show=document.getElementById('show')

show.innerHTML = '<h3> Form Data: </h3> <p><strong>Name: </strong>' + name1 + '</p> <p><strong>Email: </strong>' + email + '</p><p><strong>Password: </strong>' + password + '</p>';
document.getElementById("signupForm").reset()


}


// q2.Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

function showFullDetails() {
    var fullDetails = document.getElementById("fullDetails")
    var button = document.querySelector("button")
  
    if (fullDetails.style.display === "none") {
      fullDetails.style.display = "block"
      button.textContent = "Read less"
    } else {
      fullDetails.style.display = "none"
      button.textContent = "Read more"
    }
  }



function deleteStudent(row) {
    var table = document.getElementById("studentTable")
    table.deleteRow(row.rowIndex)
  }
  
  function addStudent(e) {
    e.preventDefault()
    var studentForm = document.getElementById("studentForm")
    var studentName = document.getElementById("sname").value
    var studentAge = document.getElementById("age").value
  
    var table = document.getElementById("studentTable")
  
    var row = table.insertRow()
  
    var nameCell = row.insertCell()
    var ageCell = row.insertCell()
    var actionCell = row.insertCell()
  
    nameCell.innerText = studentName
    ageCell.innerText = studentAge
  
    var editButton = document.createElement("button")
    editButton.innerHTML = "Edit"
  
    editButton.addEventListener("click", function () {
      editRow(row)
    });
  
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "Delete"
  
    deleteButton.addEventListener("click", function () {
      deleteStudent(this.parentNode.parentNode)
    });
   
    
    actionCell.appendChild(editButton)
    actionCell.appendChild(deleteButton)
  
    studentForm.reset()
  }
  function editRow(row) {
    var studentName = row.cells[0].innerText
    var studentAge = row.cells[1].innerText
  
    var editForm = document.getElementById("editForm")
    var editStudentForm = document.getElementById("editStudentForm")
  
    var nameInput = editStudentForm.querySelector("#editName")
    var ageInput = editStudentForm.querySelector("#editAge")
    
    nameInput.value = studentName
    ageInput.value = studentAge
  
    editForm.style.display = "block"
  
  
    editStudentForm.addEventListener("submit", function(e) {
      e.preventDefault()
  
      var updatedName = nameInput.value
      var updatedAge = ageInput.value
  
      row.cells[0].innerText = updatedName
      row.cells[1].innerText = updatedAge
  
      editForm.style.display = "none"
    })
  }
  
  function cancelEdit() {
   document.getElementById("editForm").style.display = "none"
  }