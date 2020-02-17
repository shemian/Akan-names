var work = function ()  {
    var get = document.getElementById("d").value;
    var dt = get.split("-");
    var d = new Date();
    d.setFullYear(parseInt(dt[0]));
    d.setMonth(parseInt(dt[1])-1);
    d.setDate(parseInt(dt[2]));
    var date = d.getDay();
    document.getElementById("demo").innerHTML = date;

    var male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwahu", "Yaw", "Kofi", "Kwame"];
    var female_names =["Akosua", "Adwoa", "Abenaa", "Akua",  "Yaa", "Afua", "Ama"];

    var akan_name = "";
    if(getGender() == "male"){
        akan_name = male_names[date];
    }else{
        akan_name = female_names[date];
    }
    document.getElementById("demo").innerHTML = akan_name;
    alert("Your akan name is " +akan_name)
    
}
 

function getGender() {
    var gender;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked === true) {
        // alert("Male");
        gender = "male";
    } else if (female.checked === true) {
        // alert("Female");
        gender = "Female";
    }
    return gender;
}