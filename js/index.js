myheader = document.getElementById("myheader")
allDisappear = document.getElementById("allDisappear")



myheader.onclick = disappear1

disappearValue = false

function disappear1(){
  console.log(disappearValue)  
  if(!disappearValue){
    myheader.style.right = "-45%"
    disappearValue = true
  } else {
    myheader.style.right = "0%"
    disappearValue = false
  }
}

allDisappear.onclick = allDisappear1

function allDisappear1(){
  if (!disappearValue) {
    console.log("yyy")

  }
}



// $("#disappear").click(
//   function(){
//     if(disappear.value !== true){
//       disappear.value = true
//       $("header").css("right","-45%")
//     } else {
//       disappear.value = false
//       $("header").css("right","0%")
//     }
//     console.log(disappear.value)
//   }
// )

