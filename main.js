//const { contains } = require("jquery");


function add(){
    var newline = parseInt($('#totalval').val())+1;
    var newinput="<div id='new"+newline+"'>"+"<input type='number' name='phone1' maxlength='10' minlength='10' placeholder='entermobilenumber'>"+ "<button   onclick='remove()' ><span class='glyphicon glyphicon-trash'></span></button>"+"</div>";

    $('#newrow').append(newinput);
    $('#totalval').val(newline);
  }
  function remove(){
    var lastlinno = $('#totalval').val();
    if(lastlinno>1){
      $('#new'+lastlinno).remove();
      $('#totalval').val(lastlinno-1);
    }
  }
 function savevalues(){
  //console.log(val);
  var tbody = "<tr>";
  tbody +="<td>";
      tbody += "<input type='checkbox' name='brand'>";
      tbody += "</td>";
  var msg = document.getElementById("formElem");
  //msg.submit();
 // var allInputs = form.elements;
  var values = []; 
    for (var i = 0; i < msg.length; i++) {
    

      
        var input = msg[i];
        var url ={};
        url = input.name +':'+input.value;
        
    var inname= input.name;
        values.push(url);
        var name1 ='';
                for (var j = 0; j < values.length; j++) {
        if (values[j].includes(name)) {
         // result1 = Object.keys(values[j]).map(key => ({type: key, value: values[j][key]}));
           name1 = name.concat(values[i].inname) ;
           tbody +="<td>";
           tbody += name1;
           tbody+= "</td>";
        }
      }
        tbody +="<td>";
        tbody += url;
        tbody+= "</td>";
    }
    document.getElementById("tablbody").innerHTML = tbody;
    //let formData = new FormData([form]);
   // var form = document.querySelector("form");
   // console.log(form.elements[1].type);
  
  //form.addEventListener("submit", function(event) {
    //console.log("Saving value", form.elements.value.value);
    //event.preventDefault();
  //});
   }