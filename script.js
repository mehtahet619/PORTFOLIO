let text = document.getElementById("text");
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mount1 = document.getElementById("mount1");
let mount2 = document.getElementById("mount2");
let mount3 = document.getElementById("mount3");




window.addEventListener('scroll', function(){
    // console.log('scrolling');
    let scrollValue = window.scrollY;
    // console.log(scrollValue);



    text.style.marginTop = scrollValue *2.5 + 'px';
    moon.style.width = 100 - scrollValue /5 + '%';
    moon.style.transform = 'rotate(' + scrollValue /5 + 'deg)';

    mount1.style.marginLeft = scrollValue*-1 + 'px';
    mount2.style.marginTop = scrollValue*1 + 'px';
    mount3.style.marginLeft = scrollValue*1 + 'px';

})

var typed = new Typed(".auto-type", {
    strings: ["Het Mehta","a Youtuber", "a Programmer", "a Developer"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
});

function downloadCV() {
    var link = document.createElement("a");
    link.href = "./CV_HET_MEHTA.pdf";
    link.download = "CV_HET_MEHTA.pdf";
    link.click();
}