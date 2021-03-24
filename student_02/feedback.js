//Validate user input name
function validator(){
    var fName = document.getElementById("fName").value;
    var errorMessage= document.getElementById("errorMessage");
    //to display the error message regarding this
    var text; 

    //validate the user entering name by name length
    if(fName.length<4){ 
        text="Your First Name must include at least 3 letters";
        errorMessage.innerHTML = text;
        document.getElementById("errorMessage").style.background = "#FD4343";
        document.getElementById("errorMessage").style.width = "30%";
        return(false);
        
        }else if(fName.length>=3){
            text="";
            errorMessage.innerHTML =text;
            document.getElementById("errorMessage").style.background='none';
            return(false);
        }
    return(false);
}

//validating the user inserting mail
function mailValidator(){
    var email = document.getElementById("email").value;
    var errorMessage=document.getElementById("errorMessage");
    var text;

    var mailValidation = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    //check the mail validity that user entered
    if(mailValidation.test(email)=== false){
        text="You entered invalid mail address.Please enter valid mail.";
        errorMessage.innerHTML = text;
        document.getElementById("errorMessage").style.background="#FD4343";
        document.getElementById("errorMessage").style.width = "30%";
        return(false);

    }else if(mailValidation.test(email)===true){
        text="";
        errorMessage.innerHTML = text;
        document.getElementById("errorMessage").style.background = 'none';
        return(false);
    }
    return(false);
} 


//Button Submit Validations
function validate(){
    //getting form input values from the user
    var fName= document.getElementById("fName").value;
    var email= document.getElementById("email").value;

    //get ratings
    var rateExcellent = document.getElementById("star5").checked;
    var rateVeryGood = document.getElementById("star4").checked;
    var rateGood = document.getElementById("star3").checked;
    var ratePoor = document.getElementById("star2").checked;
    var rateWorst = document.getElementById("star1").checked;

    //checking and get the star rating  values
    var ratedValue;
    if(document.getElementById('star1').checked){
        ratedValue=document.getElementById('star1').value;
    }else if(document.getElementById('star2').checked){
        ratedValue=document.getElementById('star2').value;
    }else if(document.getElementById('star3').checked){
        ratedValue=document.getElementById('star3').value;
    }else if(document.getElementById('star4').checked){
        ratedValue=document.getElementById('star4').value;
    }else if(document.getElementById('star5').checked){
        ratedValue=document.getElementById('star5').value;
    }

    var errorMessage = document.getElementById("errorMessage");
    var text;
    var mailValidator=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


    //print error message clicked submit button when all input areas are empty
    if(fName.length <4 && mailValidator.test(email)===false && (rateExcellent===0 && rateVeryGood===0 && rateGood===0 && ratePoor===0 && rateWorst===0)){
        text="Please fill the form before click submit button.";
        errorMessage.innerHTML =text;
        document.getElementById("errorMessage").style.background = "#FD4343";
        document.getElementById("errorMessage").style.width = "30%";
        return(false);
    
    }else if(rateExcellent===0 && rateVeryGood===0 && rateGood===0 && ratePoor===0 && rateWorst===0){
        text = "Don't you like to rate our page.Kindly invite you to rate our page.";
        errorMessage.innerHTML =text;
        document.getElementById("errorMessage").style.background = "#FD4343";
        document.getElementById("errorMessage").style.width = "30%";
        return(false);
    
    }else if(fName.length<4){
        text="Name must have more than three letters.Please give a valid name.";
        errorMessage.innerHTML =text;
        document.getElementById("errorMessage").style.background = "#FD4343";
        document.getElementById("errorMessage").style.width = "30%";
        return(false);

    //Message that given by the website to user
     
    }else{
        text="";
        errorMessage.innerHTML = text;
        document.getElementById("errorMessage").style.background = 'none';
        if(subject.length===0){
            alert("Dear " +fName+". Thank you so much for your feedback.");

        }
        //check user entered rating values.
        document.getElementById("fName").value = "";
        document.getElementById("LName").value= "";
        document.getElementById("email").value= "";

        var rateS = document.getElementById("rate");
            for(var i=0; i<rateS.length; i++)
                rateS[i].checked = false;
                 return(false);
    }

   return(false); 

}
//when user entered values correctly remove the error message generate area
function start(){
    text="";
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = text;
    document.getElementById("errorMessage").style.background = 'none';
    return(false);
}