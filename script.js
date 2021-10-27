let interval;
// let t1 = document.getElementById("trans1").value;
async function languagetranslater(){
    let t1 = document.getElementById("trans1").value; 
let opt = document.getElementById("languageSelect").value
let opt2 = document.getElementById("languageSelect2").value
    // console.log(t1)
    try{
    let res = await fetch("https://libretranslate.de/translate", {
	method: "POST",
	body: JSON.stringify({
		q: `${t1}`,
		source: `${opt}`,
		target: `${opt2}`
	}),
	headers: { "Content-Type": "application/json" }
});

let data = await res.json()
console.log(data)
translate_language(data)

    }
    catch(er){
        console.log(er)

    }

}

function debauncing(func,delay){
    if(interval){
        clearInterval(interval)
    }
interval = setTimeout(()=>{
    func()
},delay)
}
function translate_language({translatedText}){
    let translate_div = document.getElementById("translated")
    let p = document.createElement("p")
    p.setAttribute("class","")
    p.textContent = translatedText
    console.log(p)
    
    translate_div.append(p)
}
