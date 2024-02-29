const gombelem=document.querySelector("#szamokgomb")
const operatorokelem=document.querySelector("#operatorok")
const kijelzoelem=document.querySelector("#kijelzoo")
let jel=0
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
        const buttonelem=document.querySelector(`#gomb${index}`);
        buttonelem.addEventListener('click', function(){

            gombClick(index)
        })
    }
    
        const osszeadelem=document.querySelector(`#operator${1}`);
        const egyenloseg=document.querySelector(`#operator${6}`);
        egyenloseg.addEventListener('click', function(){
            let masodikszamok=osszeadClick(jel);
            let eredmeny=osszead(parseInt(elsoszamok),parseInt(masodikszamok))
            kijelzoelem.innerHTML=eredmeny;

        })
        osszeadelem.addEventListener('click', function(){

           let elsoszamok=osszeadClick();
        })
    
    
    

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
export function osszeadClick(jel){
    let tartalom=kijelzoelem.innerHTML
    jel+=1
    kijelzoelem.innerHTML=""
    return tartalom
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
