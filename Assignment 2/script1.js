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
       
       if(isNaN){
             rows[i].cells[x].innnerHTML="-";
    
					 }
           
        if(!isNaN(addme)) {       
          sum += addme;
          sum+=0;
         
          }
          
          if( rows[i].cells[x].innnerHTML==='-'){
          
          sum+=0;
          c++;
          }
          numbers++;  
     }
     var average = sum / numbers;
      
     rows[i].cells[x].innerHTML = "<td>" + Math.round(average) + "</td>";
     
   /*  var cook=document.cookie;
     cook=average;
     documnet.cookie=average+";expires=Mon, 12 Mar 2018 21:59:00 UTC";
     rows[i].cells[x].style.textAlign="right";
    */ 
     if( average< 40){
   
     rows[i].cells[x].style.backgroundColor = "red";
     rows[i].cells[x].style.color="white";
     rows[i].cells[x].style.textAlign="right";
     }
     
     else{
     rows[i].cells[x].style.backgroundColor = "white";
     rows[i].cells[x].style = "black";
     rows[i].cells[x].style.textAlign="right";
     }
  
      rows[i].cells[x].innerHTML = "<td>" + Math.round(average) + "%"+ "</td>";
   }
 
}

document.getElementById('Avg').onclick = Avg;


Rows=function() {
   var table = document.getElementById("table");
var row = table.insertRow(table.rows.length);

for(var w=0;w<table.rows[0].cells.length;w++){
       var e= row.insertCell(w);
       e.innerHTML = "-";
      e.contentEditable="true";
   
			if(w>1){
         e.style.textAlign="right";
				}       
}
}
document.getElementById('Rows').onclick = Rows;

Col=function(){
    var table = document.getElementById("table");
    var position = table.rows[0].cells.length -1;
    var firstCell = table.rows[0].insertCell(position);
    
    firstCell.innerHTML = "Grade "+(table.rows[0].cells.length -3);
    firstCell.style.fontWeight="550";
    for(var i = 1; i < table.rows.length; i++){
        var cell = table.rows[i].insertCell(position);
  
        cell.innerHTML="-";
        cell.contentEditable = 'true';
       	cell.style.textAlign="right";
    }
    }
document.getElementById('Col').onclick = Col;

/*
 setCookie=function(path){
    var x = document.getElementById("table").rows.length;
    var y = document.getElementById("table").rows[0].cells.length;
    document.cookie = "table="+path;
    document.cookie = "rows=" + x;
    document.cookie = "col=" + y;
}


getCookie=function (){
    var cookies = document.cookie.split(";");

    //Contents of table
    var cook = cookies[0].substring(6);
    var arr = cook.split(",");

    var length = document.getElementById("table").rows.length * document.getElementById("table").rows[0].cells.length;

    var rows = (cookies[1].substring(6));
    var col = (cookies[2].substring(6));

    var x = document.getElementById("table").rows.length;
    var y = document.getElementById("table").rows[0].cells.length;

    var recordx = x, recordy =y;

    var index = 0;

   if(rows > x){
       for(var i = 0; i < rows-x; i++) {
           rows();
           recordx++;
       }
   }
  
   if(col > y){
       for(var i1 = 0; i1 < col-y; i1++) {
           col();
           recordy++;
       }
   }
 
    for(var i2 = 0; i2 < recordx; i2++){
        for(var j = 0; j < recordy; j++){
            document.getElementById("table").rows[i2].cells[j].innerHTML = arr[index++];
           
        }
    }
}
*/

getCSV=function (){
    var path = "";
    var cookiePath = "";
    var x = document.getElementById("table").rows.length;
    var y = document.getElementById("table").rows[0].cells.length;
    for(var i = 0; i < x; i++){
        for(var j = 0; j < y; j++){
            if(j === y-1){
                if(document.getElementById("table").rows[i].cells[j].innerHTML === "")
                    path = path + " ";
                else {
                    path = path + document.getElementById("table").rows[i].cells[j].innerHTML;
                    if(i === x-1)
                        cookiePath = cookiePath + document.getElementById("table").rows[i].cells[j].innerHTML;
                    else
                        cookiePath = cookiePath + document.getElementById("table").rows[i].cells[j].innerHTML + ",";
                }
            }
            else {
                if (document.getElementById("table").rows[i].cells[j].innerHTML === " ")
                    path = path + " ,";
                else {
                    path = path + document.getElementById("table").rows[i].cells[j].innerHTML + ",";
                    cookiePath = cookiePath + document.getElementById("table").rows[i].cells[j].innerHTML + ",";
                }
            }
        }
        if(i !== x-1)
            path = path + "\n";
    }
  
    setCookie(cookiePath);
}


