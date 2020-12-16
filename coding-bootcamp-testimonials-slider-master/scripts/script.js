function testUpdate() {

    var testContainer1 = document.getElementById('testDiv1');
    var testContainer2 = document.getElementById('testDiv2');

    if (testContainer1.classList.contains("visible")) {
        testContainer1.className = "testimonial-container invisible";
        testContainer2.className = "testimonial-container visible";
        document.getElementById("image-auth1").className = "invisible";
        document.getElementById("image-auth2").className = "visible";
    } else if (testContainer1.classList.contains("invisible")){
        testContainer1.className = "testimonial-container visible";
        testContainer2.className = "testimonial-container invisible";
        document.getElementById("image-auth1").className = "visible";
        document.getElementById("image-auth2").className = "invisible";
    }
    
}

prevButton.addEventListener("click", testUpdate);
nextButton.addEventListener("click", testUpdate);

