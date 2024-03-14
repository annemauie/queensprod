 const myinfo = (title, para, button ) => {
    let div = document.createElement("div")
    div.className = "ClassA"
    div.innerHTML = `<h1>${title}</h1>
                    <p>${para}</p>
                    <button>${button}</button>
                    `

    return div

 }
 
 export { myinfo }
 