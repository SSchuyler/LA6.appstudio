function addTwo(num1,num2) {
  let answer = num1 + num2
  return answer
}

btnMultiply.onclick=function(){
  num1 = inptNum1.value
  num2 = inptNum2.value
  
  lblMath.value = (num1 * num2)
}

btnAdd.onclick=function(){
 
  let num1 = Number(inptNum1.value)
  let num2 = Number(inptNum2.value)
  
  lblMath.value = addTwo(num1,num2)

}

Button1.onclick=function(){
  inptNum1.value = " "
  inptNum2.value = " "
  lblMath.value = " "
}


