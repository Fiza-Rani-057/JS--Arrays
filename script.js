//  Question 1 

document.write("<h1>" + "Question 1" + "<br>" + "</h1>");
var students = [];

document.write("Array");
//   Question 2 

document.write("<h1>" + "Question 2" + "<br>" + "</h1>");
var studentNames = new Array();

document.write("Array");

// Question 3

document.write("<h1>" + "Question 3" + "<br>" + "</h1>");
var Fruits = ["Apple", "Mango", "Banana", "Strawberry", "Cherry"];

document.write("Array");

//   Question 4 

document.write("<h1>" + "Question 4" + "<br>" + "</h1>");

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.write("Array");

//   Question 5 

document.write("<h1>" + "Question 5" + "<br>" + "</h1>");
var flags = [true, false, true, false];

document.write("Array");

//  Question 6 

document.write("<h1>" + "Question 6" + "<br>" + "</h1>");

var mix = [1, "Ali", true];

document.write("Array");

//   Question 7

document.write("<h1>" + "Question 7" + "<br>" + "</h1>");
document.write("<h1>" + "Qualifications" + "<br>" + "</h1>");

var degree = ["SSC", "HSC", "BCS", "BS", "B.COM", "M.Phil", "MS", "PhD"];

document.write(("1") + degree[0] + "<br>");
document.write(("2") + degree[1] + "<br>");
document.write(("3") + degree[2] + "<br>");
document.write(("4") + degree[3] + "<br>");
document.write(("5") + degree[4] + "<br>");
document.write(("6") + degree[5] + "<br>");
document.write(("7") + degree[6] + "<br>");
document.write(("8") + degree[7] + "<br>");


// Question 8 

document.write("<h1>" + "Question 8" + "<br>" + "</h1>");

 var std_name = ["Ali", "Saqib", "Sajid"];
 var score = [380 ,490 ,450];
 var total = [500 , 500 , 500];

 var percentage1 = (score[0]/total[0])*100;
 var percentage2 = (score[1]/total[1])*100;
 var percentage3 = (score[2]/total[2])*100;

 document.write("Score of "+ std_name[0] + "is: " + score[0] + ".Percentage"+
     percentage1 + "%<br>");
      document.write("Score of "+ std_name[1] + "is: " + score[1] + ".Percentage"+
     percentage2 + "%<br>");
      document.write("Score of "+ std_name[2] + "is: " + score[2] + ".Percentage"+
     percentage3 + "%");

    //  Question 9 

    document.write("<h1>" + "Question 9" + "<br>" + "</h1>");

    var colors = [" Blue", " Green " , " Yellow ", " Pink ", " Red "];
    document.write("Original Array colors: " + colors + "<br>");

     var addColor = prompt("Which color do you want to add at the biggining");
      colors.unshift(addColor);
      document.write("Updated Array: " + colors + "<br>");

    var color = prompt("Which color do you want to add at the end");
    colors.push(color);
    document.write("Updated Array: " + colors+ "<br>"  + "<br>");

   colors.unshift("Baby pink", "Navy blue");
     document.write("Updated Array:  " + colors + "<br>" + "<br>");

     colors.shift("Blue");
     document.write("Updated Array:  " + colors + "<br>" + "<br>");

     colors.pop("Red");
     document.write("Updated Array: " + colors + "<br>"+ "<br>");

     var addColorIndex = prompt("At which index you want to add a color");

     colors.splice(  addColorIndex ,0,"dark red");
     document.write("Updated Array: " + colors +"<br>"+ "<br>");

     var removeColor = prompt("At which index you want to remove the color");

     colors.splice(removeColor,1);
     document.write("Updated Array: " + colors);

    //  Question 10 

     document.write("<h1>" + "Question 10" + "<br>" + "</h1>");

     var students = [320, 230, 400, 120];

     document.write("Scores of students " + students + "<br>");
      students.sort();
     document.write("Ordered score of students " + students);

    //  Question 11 
    
    document.write("<h1>" + "Question 11" + "<br>" + "</h1>");

    var cities = ["Karachi", "Lahore", "Islamabad", "Faisalbad" , 
        "Quetta"];
    document.write("Cities List: " + cities + "<br>");

     var selectedCities = cities.slice(2,5);
    document.write("Selected Cities: " + selectedCities);

    // Question 12 

      document.write("<h1>" + "Question 12" + "<br>" + "</h1>");

      var arr = ["This",  "is", "my",  "cat."]; 
      var joinArray = arr.join(" ");
      document.write("Original Array: " + arr + "<br>");
      document.write("String Array: " + joinArray); 

    //   Question 13 

        document.write("<h1>" + "Question 13" + "<br>" + "</h1>");

    var devices = [];

    devices.push("Keyboard");
    devices.push("mouse");
    devices.push("Printer");
    devices.push("Monitor");

   document.write("Devices: " + devices + "<br><br>");

   document.write("Out: " + "<br>");
   document.write(devices.shift() + "<br>");

   document.write("Out: " + "<br>");
   document.write(devices.shift() + "<br>");

   document.write("Out: " + "<br>");
   document.write(devices.shift() + "<br>");

   document.write("Out: " + "<br>");
   document.write(devices.shift() + "<br>");

//    Question 14 
 
    document.write("<h1>" + "Question 14" + "<br>" + "</h1>");
 
    var devices = [];

    devices.push("Keyboard");
    devices.push("mouse");
    devices.push("Printer");
    devices.push("Monitor");

   document.write("Devices: " + devices + "<br><br>");

   document.write("Out: " + "<br>");
   document.write(devices.pop() + "<br>");

   document.write("Out: " + "<br>");
   document.write(devices.pop() + "<br>");

   document.write("Out: " + "<br>");
   document.write(devices.pop() + "<br>");

   document.write("Out: " + "<br>");
   document.write(devices.pop() + "<br>");

//    Question 15 

 document.write("<h1>" + "Question 15" + "<br>" + "</h1>");

 var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


 document.write("<select>");

 document.write("<option>" + phones[0] + "</option>");
 document.write("<option>" + phones[1] + "</option>");
 document.write("<option>" + phones[2] + "</option>");
 document.write("<option>" + phones[3] + "</option>");
 document.write("<option>" + phones[4] + "</option>");
 document.write("<option>" + phones[5] + "</option>");

  document.write("</select>"); 
