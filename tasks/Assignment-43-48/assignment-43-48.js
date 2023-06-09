//ASSIGNMENT 43-48: // EVENTS:

//Question /01:

function showAlert() {
    alert("You clicked the link!");
  }

  //Question / 02:

  function showAlert(message) {
    alert(message);
  }

  //Question / 03:

function deleteRow(rowId) {
var row = document.getElementById(rowId);
row.parentNode.removeChild(row);
}

//Question / 04:

var img=document.getElementById('original-image')
function imageChange(){
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nRKg1mETLAGGh9yjUqru9i33Y7NcjS8NgFKIHYsduUOivdFhGsnrb2_KjEyd50eYGNk&usqp=CAU'
}

function restoreImage(){
     img.src='https://5.imimg.com/data5/FY/JU/MY-40369435/diary-milk-chocolate-90-gm-500x500.jpg'

}

//Question / 05:

let counter = 0;

function increaseCounter() {
counter++;
displayCounter();
}

function decreaseCounter() {
   if (counter > 0) {
       counter--;
       displayCounter();
      }
}

function displayCounter() {
document.getElementById('counterValue').textContent = counter;
    }