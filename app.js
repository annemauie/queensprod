import { myinfo } from "./info.js"
import { myimage } from "./img.js"
import { mycard } from "./card.js"






const data = {
    title : " This is title : U can use title if tou want",
    para : "a beautiful butterfly tats.<br> butterfly tattoo is a nice meaning tattoo ,<br> anything about this project is butterfly",
    button : "Contact us",
    myImage: "../bttr.png"
}

const data2 = {
    title1 : "PROJECT COMPLETED",
    para1 : "a beautiful butterfly tats.<br> butterfly tattoo is a nice meaning tattoo ,<br> anything about this project is butterfly",
    para2 : "a beautiful butterfly tats.<br> butterfly tattoo is a nice meaning tattoo ,<br> anything about this project is butterfly",
    para3 : "a beautiful butterfly tats.<br> butterfly tattoo is a nice meaning tattoo ,<br> anything about this project is butterfly",
    button1 : "Learn more",
    button2 : "Learn more",
    button3 : "Learn more",
    myImage1 : "../tats1.webp",
    myImage2 : "../tats2.webp",
    myImage3 : "../tats3.jpg",

}

const { title ,  para, myImage, button } = data
let sectionOne = document.getElementById("sectionOne")

const { title1, myImage1, myImage2, myImage3, para1, para2,  para3, button1, button2, button3} = data2
let sectionTwo = document.getElementById("sectionTwo")


sectionOne.append(myinfo(title, para, button))
sectionOne.append(myimage(myImage))
sectionTwo.append(mycard(title1, myImage1, myImage2, myImage3, para1,para2,para3, button1, button2, button3))
