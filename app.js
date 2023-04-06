
let form = document.getElementById('ali');
let arr = [];
let arrName = [];
if(sessionStorage.data != null){
    arr=JSON.parse(sessionStorage.data);
  }
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let userName = e.target.username.value;
    let passWord = e.target.password.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
   
    let user = { userName0:userName ,  passWord0: passWord , email0:email , phone0:phone}
    // console.log(user);
    
    if (namevalidation(userName) && validatePassword(passWord) && emailvalidation(email) && phonevalidation(phone)){
        arr.push(user.userName0);
        arr.push(user);
        sessionStorage.setItem("data",JSON.stringify(arr));
        //  
}
    
   
}
    );
    function namevalidation(userName){
        if (userName.includes(" ")){
            alert("Please enter");
            return false
        }
        else if(arr.includes(userName)){

            alert("Username already exists. welcome "+userName);
            return false;
        }
        console.log(arr)
        return true;
    }
    function validatePassword(passWord){
                const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
                if (!passwordRegex.test(passWord)) {
                       alert("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character");
                       return false;
                     }
            return true;
        } 
        function emailvalidation(email){
            if (!/\S+@\S+\.\S+/.test(email)) // search for at least non-whitespace characters
     {
        alert("E-mail must be in a valid format such as example@gmail.com");
        return false;
    }
        return true;

        }
        function phonevalidation(phone){
            // Validate phone number to be " 10 digits starts with 07 "
        if (!/^07[0-9]{8}$/.test(phone))
        {
        alert("Phone number must be 10 digits starting with 07");
        return false;
   }
        return true;
        }
