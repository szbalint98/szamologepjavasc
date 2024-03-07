const gombelem=document.querySelector("#szamokgomb")
const operatorokelem=document.querySelector("#operatorok")
const kijelzoelem=document.querySelector("#kijelzoo")
const kijelzo2Eelem=document.querySelector('#kilejzoo2')
let osszeg=0
let jel=0
const operatorlista=["+","-","*","/",".","=","C"]
export function gombokLetrehoz(){
    let txt=""
    for (let index = 0; index < 10; index++) {
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
    for (let index = 0; index < 10; index++) {
        const buttonelem=document.querySelector(`#gomb${index}`);
        buttonelem.addEventListener('click', function(){

            gombClick(index)
        })
    }
}
 export function muveletek() {
    
        const osszeadElem=document.querySelector(`#operator${1}`);
        const kivonElem=document.querySelector(`#operator${2}`);
        const szorzasElem=document.querySelector(`#operator${3}`);
        const egyenlosegElem=document.querySelector(`#operator${6}`);
        const osztelemElem=document.querySelector(`#operator${4}`);
        
        osszeadElem.addEventListener('click', osszeadClick,{  
        })
        kivonElem.addEventListener('click' ,kivonasClick,{       
        })
        szorzasElem.addEventListener('click',szorozClick,{     
        })
        osztelemElem.addEventListener('click',osztasClick,{   
    })
        egyenlosegElem.addEventListener('click', function(){
            
            let masikszam=parseInt(kijelzoelem.innerHTML);
            if  (jel===1) {
                kijelzoelem.innerHTML=osszead(osszeg,masikszam)
            }else if(jel===2){
                kijelzoelem.innerHTML=kivon(osszeg,masikszam)
            }else if(jel===3){
                kijelzoelem.innerHTML=szoroz(osszeg,masikszam)
            }else if(jel===4){
                kijelzoelem.innerHTML=oszt(osszeg,masikszam)
            }
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
    elsoszam();
    jel=1
}
export function szorozClick(){
    elsoszam();
    jel=3 
}

export function kivonasClick(){
    elsoszam()
    jel=2  
}
export function osztasClick(){
    elsoszam()
    jel=4 
}

export function osszead(a,b){
    return a+b;
}
export function kivon(a,b){
    return a-b;
}
export function oszt(a,b){
    return a/b;
}
export function szoroz(a,b){
    return a*b;
}
function elsoszam() {
    osszeg=0
    let tartalom=kijelzoelem.innerHTML
    tartalom=parseInt(tartalom)
    osszeg+=tartalom
    console.log(osszeg)
    kijelzoelem.innerHTML=""
    
}