const gombelem=document.querySelector("#szamokgomb")
const operatorokelem=document.querySelector("#operatorok")
const operatorlista=["+","-","*","/",".","=","C"]
export function gombokLetrehoz(){
    let txt=""
    for (let index = 1; index < 10; index++) {
        txt+=`<button>${index}</button>`;   
    }
    gombelem.innerHTML=txt;

}
export function operatorLetrehoz(){
    let txt=""
    for (let index = 1; index < 8; index++) {
        txt+=`<button>${operatorlista[index-1]}</button>`;   
    }
    operatorokelem.innerHTML=txt;

}
