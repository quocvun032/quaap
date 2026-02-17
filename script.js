function check(){
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let remember = document.getElementById("remember").checked;

  if(user === "ap chubby" && pass === "29072025" && remember){

    window.location.href = "gift.html";
  }
  if(user !== "ap chubby" || pass !== "29072025"){
    alert("NON NỚT 😏");
    return;
  }

  if(!remember){
    alert("honggg đủuuuuu 😭");
    return;
  }
}