
$('#bn1').click(function(){
    let flag =true;

    let name    = $('#first_name').val();
    let email   = $('#email_').val();
    let gender  = $('#gender').val();
    let subject = $('#subject').val();
    let comm    = $('#comments').val();

    //email pattern for email check
    let pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    // Name check
    if(name.length < 3){
     flag = false;
     $('#name_alert').show();
    }
    // Email check
    if(email.length < 10 && !pattern.test(email)){
       flag = false;
       $('#email_alert').show();
    }
    // gender check
    if(gender != 'Male' && gender != 'Female'){
        flag = false;
        $('#gender_alert').show();
    }
    // Check subject
    if(subject.length < 5){
        flag = false;
        $('#subject_alert').show();
    }
 
    // Check comm
    if(comm =='' || comm.length < 20){
        flag = false;
        $('#comments_alert_less').show();
    }
    if(comm.length > 150){
        flag = false;
        $('#comments_alert_more').show();
    }


    if(flag == true){
        alert('message sent :) ')
    }

});

function showform(){
    document.getElementById('formi').style.visibility = "visible";
      }


