const onLogin = () => {
    var userName = document.getElementById("username").value;   
    var passWord = document.getElementById("password").value;
    var checkMail = /@gmail\.com$/.test(userName);
    var validation = "";
    if ( userName == "D18CQKD01@gmail.com" && passWord == "N18DCDT032_N18DCDT058"){
        validation  = "";
        window.location = "home.html";
        return false;
    }else{
        validation = "Vui lòng kiểm tra lại Tài khoản hoặc Mật khẩu ";
    }
    if(userName == "" && passWord == ""){
        validation = "Vui lòng nhập thông tin đầy đủ!";
    }
    if(userName && !checkMail){
        validation = "Vui lòng kiểm tra lại Email";
    }
    console.log(checkMail)
    document.getElementById("valid").innerHTML = validation;
}