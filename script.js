console.log("Hello World")

const dogImageDiv= document.getElementById('dogImage')
const dogButton= document.getElementById('dogButton') 
function getNewDog(){
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML=`<img src= '${json.message}' height=250 width=250/>`
  })
}

dogButton.onclick= () => getNewDog()


