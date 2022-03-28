var imgVar=document.getElementById("img");
var dataVar=document.getElementById("data");
function applefun()
{
    body.className="body";
    imgVar.innerHTML="<img src='Fruits/apple.png' alt='apple'>";
    dataVar.innerHTML='An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today.<br><br><a href="https://en.wikipedia.org/wiki/Apple">Read More</a>';
}
function dragon()
{
    body.className="bodypink";
    imgVar.innerHTML="<img src='Fruits/dragonFruits.png' alt='apple'>";
    dataVar.innerHTML='Pitaya fruit, pitahaya fruit, commonly known as the dragon fruit, is a fruit from Central America, South America, and Asia. It has a light sweet taste, an intense.<br><br><a href="https://en.wikipedia.org/wiki/Pitaya">Read More</a>';

}
function pineApple()
{
    body.className="bodyPine";
    imgVar.innerHTML="<img src='Fruits/pineApple.png' alt='apple'>";
    dataVar.innerHTML='The pineapple is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries..<br><br><a href="https://en.wikipedia.org/wiki/Pineapple">Read More</a>';
}
function mango()
{
    body.className="bodymango";
    imgVar.innerHTML="<img src='Fruits/mango.png' alt='apple'>";
    dataVar.innerHTML='A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India..<br><br><a href="https://en.wikipedia.org/wiki/Mango">Read More</a>';    
}
function watermelon()
{
    body.className="bodywater";
    imgVar.innerHTML="<img src='Fruits/watermelon.png' alt='apple'>";
    dataVar.innerHTML='Watermelon is a flowering plant species of the Cucurbitaceae family. A scrambling and trailing vine-like plant, it was originally domesticated in Africa. It is a highly cultivated fruit worldwide, with more than 1,000 varieties. Wild watermelon seeds have been found in the prehistoric Libyan site of Uan Muhuggiag..<br><br><a href="https://en.wikipedia.org/wiki/Watermelon">Read More</a>';
}
window.addEventListener("load",applefun,false);
var body=document.getElementById("body");
var apple=document.getElementById("apple");
var dragonVar=document.getElementById("dragonFruits");
var mangoVar=document.getElementById("mango");
var pineAppleVar=document.getElementById("pineApple");
var watermelonVar=document.getElementById("watermelon");
apple.addEventListener("click",applefun,false);
apple.addEventListener("mouseover",applefun,false);
dragonVar.addEventListener("click",dragon,false);
dragonVar.addEventListener("mouseover",dragon,false);
pineAppleVar.addEventListener("click",pineApple,false);
pineAppleVar.addEventListener("mouseover",pineApple,false);
mangoVar.addEventListener("click",mango,false);
mangoVar.addEventListener("mouseover",mango,false);
watermelonVar.addEventListener("click",watermelon,false);
watermelonVar.addEventListener("mouseover",watermelon,false);