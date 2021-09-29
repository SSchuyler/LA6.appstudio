
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let newMember = ""

btnMember.onclick=function(){
  newMember = inptName.value
  if (newMember == "Mary" || newMember == "Sam" || newMember == "Joey" || newMember == "Paul" || newMember == "Mike" || newMember == "Char" || newMember == "Jenny" || newMember == "Kennedy" || newMember == "Kaden" || newMember == "Kurt" || newMember == "Anne") {
    lblMember.value = (`${newMember}, you are already a member.`) }
  else {
    members[11] = newMember 
    lblMember.value = (`${newMember}, you have been added to the list!`)
}
}
