// =====================================
// KADRI
// Main JavaScript
// =====================================


// ----------------------------
// Welcome Message
// ----------------------------

console.log("Welcome to KADRI.");


// ----------------------------
// Hamburger Menu
// ----------------------------

const menuButton = document.getElementById("menu-button");

if(menuButton){

    menuButton.addEventListener("click", function(){

        alert("Hamburger menu coming soon!");

    });

}


// ----------------------------
// Account Button
// ----------------------------

const accountButton = document.getElementById("account-button");

if(accountButton){

    accountButton.addEventListener("click", function(){

        alert("Account page coming soon!");

    });

}


// ----------------------------
// Search Bar
// ----------------------------

const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup", function(){

        console.log("Searching for:", search.value);

    });

}


// ----------------------------
// Fade-in Animation
// ----------------------------

const sections = document.querySelectorAll(".category, .product");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

sections.forEach(function(section){

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "0.7s";

    observer.observe(section);

});


// ----------------------------
// Smooth Scroll
// ----------------------------

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


// ----------------------------
// Back To Top Button
// ----------------------------

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);


topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";


window.addEventListener("scroll", function(){

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function(){

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
