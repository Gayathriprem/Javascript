
    function validate()
    {

        var fathersName=document.getElementById["RegForm"]["Fathers Name"].value;
        var fatherRegExp=/^([a-z][A-Z])$/;
        var date =document.getElementById["RegForm"]["date"].value;
        var mobileNo=document.getElementById["RegForm"]["mobileNo"].value;
        var noRegExp=/^([7-9][0-9]{9})$/;
        var Email=document.getElementById["RegForm"]["Email"].value;
        var city=document.getElementById["RegForm"]["city"].value;
        var cityRegExp=/^([a-z][A-Z])$/;
        var zipcode=document.getElementById["RegForm"]["city"].value;

        if(fatherRegExp.test(fathersName)){
            document.getElementById["RegForm"]["Fathers Name"].innerHTML="valid";
            document.getElementById["RegForm"]["Fathers Name"].style.color="green";
            document.getElementById["RegForm"]["Fathers Name"].style.visibility="visible";
           
            return true;
        }
        else{
            document.getElementById["RegForm"]["Fathers Name"].innerHTML="Special charecters and numbers are not allowed";
            document.getElementById["RegForm"]["Fathers Name"].style.color="red";
            document.getElementById["RegForm"]["Fathers Name"].style.visibility="hidden";
            return false;

        }
        
    }

    // function validate(){
    //     var noRegExp=/^([7-9][0-9]{9})$/;
    //     var mobileNo=document.getElementById["RegForm"]["mobileNo"].value;

    //     if(noRegExp.test(mobileNo)){
    //         document.getElementById["RegForm"]["mobileNo"].innerHTML="valid";
    //         document.getElementById["RegForm"]["mobileNo"].style.color="green";
    //         document.getElementById["RegForm"]["mobileNo"].style.visibility="visible";
    //         return False;
    //     }
    //     else{
    //         document.getElementById["RegForm"]["mobileNo"].innerHTML="Invalid";
    //         document.getElementById["RegForm"]["mobileNo"].style.color="red";
    //         document.getElementById["RegForm"]["mobileNo"].style.visibility="hidden";
    //         return true;

    //     }
    // }
    