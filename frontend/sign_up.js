function sub(){
    var p1 = document.getElementById('pw').value;
    var p2 = document.getElementById('pw_2').value;
    if(p1 != p2){
        alert("비밀번호가 일치하지 않습니다");
        return false;
    } else{
        alert("비밀번호가 일치합니다")
        return true;
    }
}