 Avg=function() {
   var table = document.getElementById("table");
   var rows = table.rows;
    var addme =0;
    var c=0;
   for (var i = 1; i < rows.length; i++) {
     var cells = rows[i].cells;
     var sum = 0;
		 var numbers = 0;
     for (var x = 2; x < (cells.length -1); x++) {
       var cell = cells[x];
        addme = parseInt(cell.innerHTML);
       if(!isNaN(addme)) {       
          sum += addme;
          numbers++;
       }
       
     }
     var average = sum / numbers;
     rows[i].cells[7].innerHTML = "<td>" + Math.round(average) + "</td>";
     
     
     if( average< 40){
     
     rows[i].cells[7].style.backgroundColor = "red";
      rows[i].cells[7].style.color="white";
     }
     
     else{
     
     rows[i].cells[7].style.backgroundColor = "white";
     rows[i].cells[7].style.color = "black";
     }
      rows[i].cells[7].innerHTML = "<td>" + Math.round(average) + "%"+ "</td>";
   }
 }

document.getElementById('Avg').onclick = Avg;


function submit(){

  var table = document.getElementById("table");
   var rows = table.rows;
    var addme =0;
    var c=0;
   for (var i = 1; i < rows.length; i++) {
     var cells = rows[i].cells;
     var sum = 0;
		 var numbers = 0;
     for (var x = 2; x < (cells.length -1); x++) {
       var cell = cells[x];
        addme = parseInt(cell.innerHTML);
       if(!isNaN(addme)) {       
          sum += addme;
          numbers++;
       }
       
     }
    
    // rows[i].cells[7].innerHTML = "<td>" + Math.round(average) + "</td>";
     
   
     if(rows[i].cells[2].innerHTML=='-'){
    // c++;
     rows[i].cells[2].style.backgroundColor="yellow";
     }
     
     if(rows[i].cells[3].innerHTML=='-'){
   //  c++;
     rows[i].cells[3].style.backgroundColor="yellow";
     }
     if(rows[i].cells[4].innerHTML=='-'){
    // c++;
     rows[i].cells[4].style.backgroundColor="yellow";
     }
     if(rows[i].cells[5].innerHTML=='-'){
    // c++;
     rows[i].cells[5].style.backgroundColor="yellow";
     }
     if(rows[i].cells[6].innerHTML=='-'){
    // c++;
     rows[i].cells[6].style.backgroundColor="yellow";
     }
     if(rows[i].cells[7].innerHTML=='-'){
    // c++;
     rows[i].cells[7].style.backgroundColor="yellow";
     }
    
}
}
document.getElementById('submit').onclick = submit;