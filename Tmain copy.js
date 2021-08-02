
student_array = [];
    
function submit()
{
   
   var display_array =[];
   


    for (var j =1 ; j <=4; j++ ){
        var student_name = document.getElementById("student_"+j).value;
        student_array.push(student_name)
    }

    var length = student_array.length;


    for( var k = 0 ; k <length; k++){
        display_array.push("<h4> NAME :" + student_array[k] + "</h4>")
    }
     
    document.getElementById("display_name_with_commas").innerHTML= display_array;
    
    var remove_commas = display_array.join(" ")
    document.getElementById("display_name_without_comas").innerHTML= remove_commas

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="block";

   
}
  
function sorting(){
    student_array.sort()
    
    var display_sorted_array = []

    var length = student_array.length;


    for( var k = 0 ; k <length; k++){
        display_sorted_array.push("<h4> NAME :" + student_array[k] + "</h4>")
    }

    var remove_commas = display_sorted_array.join(" ")
    document.getElementById("display_name_without_comas").innerHTML= remove_commas




















     
}







