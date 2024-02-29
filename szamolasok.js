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
    for (let index = 1; index < 7; index++) {
        let buttonelem=document.querySelector(`#operator${index}`);
        buttonelem.addEventListener('click', function(){

            operatorClick();
        })
    }
    
    

}

export function tisztit(){
    const torles=document.querySelector(`#operator${7}`)
    torles.addEventListener('click', function(){
        kijelzoelem.innerHTML=""
    })
}
export function gombClick(a){
    
    kijelzoelem.innerHTML+=a
}
export function operatorClick(){
    let tartalom=kijelzoelem.innerHTML
    console.log(tartalom)
    let osszeg=osszead(tartalom,6)
    kijelzoelem.innerHTML=""
    kijelzoelem.innerHTML+=osszeg
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
