function search() {
    document.getElementById("searchiconhide").style.cursor="pointer";
    document.getElementById("searchiconhide").style.display="block";
    
}

function hide() {
    document.getElementById("searchiconhide").style.cursor="pointer";
    document.getElementById("searchiconhide").style.display="none";
    
}


function openPersonArea() {
    document.getElementById("personiconhide").style.cursor="pointer";
    document.getElementById("personiconhide").style.display="flex";
    
}

function hidePersonArea() {
    document.getElementById("personiconhide").style.cursor="pointer";
    document.getElementById("personiconhide").style.display="none";
    
}



    // const navigacia = ["home" , "home decor", "fashion", "beauty","food", "travel", "gift guides"];
    // const links = ["index.html" ,"homedecor.html", "fashion.html", "beauty.html ", "food.html", "travel.html", "gift guides.html"];
   
    




    // let navigaciasigrdze = navigacia.length;


    const navigacia = ["home", "home decor", "fashion", "beauty","Blog", "gallery"];
    const links = ["index.html" ,"homedecor.html", "fashion.html", "beauty.html ", "Blog.html", "gallery.html"];
   

   
      navigacia.forEach((item,i) => {
      let li=document.createElement("li");
  
      let a=document.createElement("a");
      a.innerText=navigacia[i];
      a.setAttribute("href",links[i]);
      a.innerText=navigacia[i];
      
      li.appendChild(a);
      
      
      let ul=document.getElementById("navigaciaUl");
      
      ul.appendChild(li);
      
      
    });
   


    const sidenavigacia=document.getElementById("sidenav");
    




    // let navigaciasigrdze = navigacia.length;


    const navigacias = ["home", "home decor", "fashion", "beauty","food", "travel", "gift guides"];
    const linkss = ["index.html" ,"homedecor.html", "fashion.html", "beauty.html ", "food.html", "travel.html", "gift guides.html"];
    console.log(navigacia);

   
      navigacia.forEach((item,i) => {
      let lis=document.createElement("li");
      // let p=document.createElement("p");
      // p.innerHTML=navigacia[i];
      let as=document.createElement("a");
      as.innerText=navigacias[i];
      as.setAttribute("href",linkss[i]);
      as.innerText=navigacias[i];
      
      lis.appendChild(as);
     
      let ulside=document.getElementById("sidenavigaciaUl");
      ulside.appendChild(lis);
      
    });
   


















    
    

    // document.getElementById("navwraper").appendChild(navigaciaUl);
  

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
 


    // let navigaciatext = '<ul>';
    // for(let i=0; i<navigaciasigrdze; i++ ){
    //     navigaciatext += '<li><a href="'+ links[i] + '">' + navigacia[i] + "</a></li>";
    //     // console.log(navtext);
    // }
    // navigaciatext += "</ul>";
    // document.getElementById("navigacia").innerHTML = navigaciatext;







    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000);
      
    }

    // let slideIndex = 0;
    // showSlides();
    
    // function showSlides() {
    //   let i;
    //   let slides = document.getElementsByClassName("mySlides");
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   slideIndex++;
    //   if (slideIndex > slides.length) {slideIndex = 1}
    //   slides[slideIndex-1].style.display = "block";
    //   setTimeout(showSlides, 2000); // Change image every 2 seconds
    // }












// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display="block";
//   dots[slideIndex-1].className += " active";
// }



// chatbox

function openForm() {
  document.getElementById("chat-popup").style.display = "block";
  document.getElementById("chatbox").style.display = "none";
  
}

function closeForm() {
  document.getElementById("chat-popup").style.display = "none";
  document.getElementById("chatbox").style.display = "block";
}







