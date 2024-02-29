const gombelem=document.querySelector("#szamokgomb")
const operatorokelem=document.querySelector("#operatorok")
const kijelzoelem=document.querySelector("#kijelzoo")

const operatorlista=["+","-","*","/",".","=","C"]
export function gombokLetrehoz(){
    let txt=""
    for (let index = 1; index < 10; index++) {
        txt+=`<button id="gomb${index}" onclick="gombClick(${index})">${index}</button>`;   
    }
    gombelem.innerHTML=txt;
    
}
export function operatorLetrehoz(){
    let txt=""
    for (let index = 1; index < 8; index++) {
        txt+=`<button id="operator${index}" onclick="operatorClick(${index})">${operatorlista[index-1]}</button>`;
        
           

    }
    operatorokelem.innerHTML=txt;
    for (let index = 1; index < 10; index++) {
        let buttonelem=document.querySelector(`#gomb${index}`);
        buttonelem.addEventListener('click', function(){

            gombClick(index)
        })
    }
    const torles=document.querySelector(`#operator${7}`)
    torles.addEventListener('click', function(){
        kijelzoelem.innerHTML=""
    })
    

}

let a=1
export function gombClick(a){
    console.log("ramkattintottak")
    kijelzoelem.innerHTML+=a
}
export function operatorClick(){
    
}
export function osszead(a,b){
    return a+b;
}
export function kivon(a,b){
    return a-b;
}
export function szoroz(a,b){
    return a*b;
}
export function oszt(a,b){
    return a/b;
}
