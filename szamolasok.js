const gombelem=document.querySelector("#szamokgomb")
const operatorokelem=document.querySelector("#operatorok")
const kijelzoelem=document.querySelector("#kijelzoo")
let osszeg=0
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
            
            
            kijelzoelem.innerHTML=osszeg+kijelzoelem.innerHTML

        })
        osszeadelem.addEventListener('click', function(){
            
                osszeadClick();
            
           
        })
    
    
    

}

export function tisztit(){
    const torles=document.querySelector(`#operator${7}`)
    torles.addEventListener('click', function(){
        kijelzoelem.innerHTML=""
        osszeg=0
    })
}
export function gombClick(a){
    
    kijelzoelem.innerHTML+=a
}
export function osszeadClick(){
    let tartalom=kijelzoelem.innerHTML
    tartalom=parseInt(tartalom)
    osszeg+=tartalom
    console.log(osszeg)
    kijelzoelem.innerHTML=""
    
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
