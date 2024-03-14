const myimage = (myImage) => {
    let div = document.createElement("div")
    div.className="pic"
    div.innerHTML = `<div class = "pro">
    <img src ="./images/${myImage}"></img></div>`


    return div
}

export {myimage}