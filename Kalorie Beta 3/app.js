var pkg={
  goal: "",
  bodytype:"",
  activity:""
}

var storepkg= localStorage.getItem("user");
if (storepkg){
  pkg=JSON.parse(storepkg);
}

var handler={
  set:function(obj,props,value){
    
  }
}

function Changegoal(goal){
  pkg.goal = goal;
  save();
  location.href="APP 4.html";
}



function save(){
localStorage.setItem("user",JSON.stringify(pkg));

}
console.log(pkg);

function ShowInfoUI(){
  document.querySelector("#description1").innerHTML = pkg.goal;
}





