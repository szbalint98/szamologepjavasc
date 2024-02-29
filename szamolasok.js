const gombelem=document.querySelector("#szamokgomb")
const operatorokelem=document.querySelector("#operatorok")
const kijelzoelem=document.querySelector("#kijelzoo")
let osszeg=0
let jel=0
const operatorlista=["+","-","*","/",".","=","C"]
export function gombokLetrehoz(){
    let txt=""
    for (let index = 1; index < 10; index++) {
        txt+=`<button id="gomb${index}">${index}</button>`;   
    }
    gombelem.innerHTML=txt;
    
}
export function operatorLetrehoz(){
    let txt=""
    for (let index = 1; index < 8; index++) {
        txt+=`<button id="operator${index}">${operatorlista[index-1]}</button>`;
        
           

    }
    operatorokelem.innerHTML=txt;
    for (let index = 1; index < 10; index++) {
        const buttonelem=document.querySelector(`#gomb${index}`);
        buttonelem.addEventListener('click', function(){

            gombClick(index)
        })
    }
    
        const osszeadelem=document.querySelector(`#operator${1}`);
        const kivonelem=document.querySelector(`#operator${2}`);
        const szorzas=document.querySelector(`#operator${3}`);
        const egyenloseg=document.querySelector(`#operator${6}`);
        
        
        
        osszeadelem.addEventListener('click', function(){
            
                osszeadClick();
            
           
        })
        kivonelem.addEventListener('click,' ,function(){
                kivonasClick();
        })
        szorzas.addEventListener('click',function(){
                szorozClick();
        })
        egyenloseg.addEventListener('click', function(){
            
            let masikszam=parseInt(kijelzoelem.innerHTML);
            console.log(jel)
            if (jel===1) {
                kijelzoelem.innerHTML=(osszeg+masikszam)
            }
             if(jel===2) {
                kijelzoelem.innerHTML=(osszeg-masikszam)
            }
            if(jel===3) {
                kijelzoelem.innerHTML=(osszeg*masikszam)
            }
            

        })
    
    
    

}
export function klikkek(){

    
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
    jel=1
    kijelzoelem.innerHTML=""
    
}
export function szorozClick(){
    let tartalom=kijelzoelem.innerHTML
    tartalom=parseInt(tartalom)
    console.log(tartalom)
    osszeg+=tartalom
    jel=3
    console.log(osszeg)
    kijelzoelem.innerHTML=""
    
}

export function kivonasClick(){
    let tartalom=kijelzoelem.innerHTML
    tartalom=parseInt(tartalom)
    osszeg+=tartalom
    console.log(osszeg)
    jel=2
    kijelzoelem.innerHTML=""    
}
export function szoroz(a,b){
    return a*b;
}
export function oszt(a,b){
    return a/b;
}
