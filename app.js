// const username = document.getElementById("name")
// const btnGreat = document.querySelector("#btnGreat")

// btnGreat.addEventListener("click", great)

// function great (){
//     alert("El piton de "+username.value)
// }

const username = document.getElementById("nombre")
const note1 = document.getElementById("nota1")
const note2 = document.getElementById("nota2")
const note3 = document.getElementById("nota3")
const btnCalculate = document.querySelector("#btnCalcular")
const btnPredict = document.querySelector("#btnPredict")
const result = document.getElementById("resultado")
const information = document.getElementById("informacion")

btnCalcular.addEventListener("click", calculate)
btnPredict.addEventListener("click", predictNote)

function calculate (event){

    event.preventDefault()

    let noteT1 = Number(note1.value*0.30)
    let noteT2 = Number(note2.value*0.30)
    let noteT3 = Number(note3.value*0.40)
    let noteT = (noteT1+noteT2+noteT3).toFixed(2)

    if(noteT1>=0 && noteT1<=5 && noteT2>=0 && noteT2<=5 && noteT3>=0 && noteT3<=5){
        result.style.color = "red"
        result.textContent = `SR/SRA/SRE ${username.value} su nota definitiva es: ${noteT}`
        analyze(noteT)
    }else{
        result.textContent = "datos no validos 0-5"
    }
}
function analyze(noteT){
    if(noteT < 3.5){
        information.style.color = "black"
        information.textContent = `SR/SRA/SRE ${username.value} perdio la materia`
    }else if(noteT >= 3.5 && noteT <= 4.5){
        information.style.color = "orange"
        information.textContent = `SR/SRA/SRE ${username.value} gano la materia`
    }else if(noteT >= 4.5){
        information.style.color = "green"
        information.textContent = `SR/SRA/SRE ${username.value} fue sobresaliente en la materia`
    }
}

function predictNote(){
    let noteT1 = Number(note1.value*0.30)
    let noteT2 = Number(note2.value*0.30)
    let noteT3 = Number((3.5-(noteT1+noteT2))/0.4).toFixed(2)
    if (noteT3 <= 5){
      result.textContent = ""
      note3.value = `${noteT3}`
    }else{
      result.textContent = "ya ni como ganarla papi"
    }
}
  




