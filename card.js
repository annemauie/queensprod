const mycard = (title1, myImage1, myImage2, myImage3, para1,para2,para3, button1, button2, button3) => {
    let div = document.createElement("div")
    div.className = "class1"
    div.innerHTML = `<div class = "style2">
                    <h1>${title1}</h1>

                    <img src ="./images/${myImage1}"></img>
                    <p>${para1}</p>
                    <button>${button1}</button>

                    <img src ="./images/${myImage2}"></img>
                    <p>${para2}</p>
                    <button>${button2}</button>

                    <img src ="./images/${myImage3}"></img>
                    <p>${para3}</p>
                    <button>${button3}</button>  

                    </div>`
    return div
}

export {mycard}