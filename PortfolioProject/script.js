const icotopNode = document.querySelector('#icotop');
const mainNode = document.querySelector('main');
const imageHomeNode = document.querySelector('#imageHome');
const titleHomeNode = document.querySelector("#titleHome");
mainNode.style.display = "none";
imageHomeNode.classList.add('imageHome1');



icotopNode.addEventListener('click', function(){
    if(getComputedStyle(mainNode).display != 'none'){
        mainNode.style.display = "none";
        imageHomeNode.classList.add('imageHomeDisplay');
        imageHomeNode.classList.remove('imageHomeDisparition');
       
        
    } else {
        mainNode.style.display = "block";
        imageHomeNode.classList.add('imageHomeDisparition');
        imageHomeNode.classList.remove('imageHomeDisplay');
    }
})

let sendNode = document.querySelector('#send');
let bodyMailNode = document.querySelector('#bodyMail');
let expMailNode = document.querySelector('#expMail')

sendNode.addEventListener('click', function(e) {
   
    let corps = bodyMailNode.value;
    let url = "mailto:d.sebbah@yahoo.fr";
    url += "?subject=Nice to meet";
    url += "&body=" + corps;
  
    window.location = url;

    document.querySelector('#expMail').value='';
    document.querySelector('#bodyMail').value='';
  });