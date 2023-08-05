

function showLoader() {
  document.getElementById("loader").style.display = "flex";
  document.getElementById("content").style.display="none"
}

// JavaScript to hide the loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display="block"
}

showLoader();

// Simulate an asynchronous task (e.g., fetching data from a server)
setTimeout(() => {
    // Task completed, hide the loader
    hideLoader();
}, 3000); 
// New Arrivals
let newArrivals=[
    {
        glassesImg:"./images/newarrrival1.jpeg",
        title:"Sunglass",
        price:"Rs 2,000",
       },
    {
    glassesImg:"./images/newarrival2.jpeg",
    title:"Sunglass",
    price:"Rs 1,500 ",
   },
   {
    glassesImg:"./images/newarrival3.jpeg",
    title:"Sunglass",
    price:"Rs 2,200 ",
   },
   {
    glassesImg:"./images/newarrival4.jpeg",
    title:"Sunglass",
    price:"Rs 2,500 ",
   },
   {
    glassesImg:"./images/newarrival5.jpeg",
    title:"Sunglass",
    price:"Rs 2,800 ",
   },
   {
    glassesImg:"./images/newarrival6.jpeg",
    title:"Sunglass",
    price:"Rs 3,500 ",
   },
   {
    glassesImg:"./images/newarrival.jpg",
    title:"Sunglass",
    price:"Rs 3,800 ",
   }, 
   {
    glassesImg:"./images/newarrival8.jpeg",
    title:"Sunglass",
    price:"Rs 3,500",
   }, 

] 

let cards = document.getElementById("card")


for(var i=0; i<newArrivals.length ; i++){

cards.innerHTML += `

<div class="card card-css" id="card" style="width: 16rem;">
      <img src="${newArrivals[i].glassesImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${newArrivals[i].title}</h5>
        <p class="card-text">Price: ${newArrivals[i].price}</p>
        
      </div>
      </div>
`


}



// Eye Glasses For Men

let EyeGlassesformen=[

    {
        glassesImg:"./images/eyeglass1.jpeg",
        title:"Eyeglass For Men",
        price:"Rs 2,000",
       },
    {
    glassesImg:"./images/eyeglass2.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 2200 ",
   },
   {
    glassesImg:"./images/eyeglass3.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 1200 ",
   },
   {
    glassesImg:"./images/eyeglass4.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 2,500 ",
   },
   {
    glassesImg:"./images/eyeglass5.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 1,500 ",
   },
   {
    glassesImg:"./images/eyeglass6.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 1,200 ",
   },
   {
    glassesImg:"./images/eyeglass7.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 2,500 ",
   }, 
   {
    glassesImg:"./images/eyeglass8.jpeg",
    title:"Eyeglass For Men",
    price:"Rs 2,000",
   }, 


]

let EyeGlassesformens = document.getElementById("EyeGlassesformen")


for(var i=0; i<EyeGlassesformen.length ; i++){

EyeGlassesformens.innerHTML += `

<div class="card eyeglass-card" id="card" style="width: 16rem;">
      <img src="${EyeGlassesformen[i].glassesImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${EyeGlassesformen[i].title}</h5>
        <p class="card-text">Price: ${EyeGlassesformen[i].price}</p>
        
      </div>
      </div>
`

}


// EyeGlass For women

let EyeGlassesforwomen=[
 
    {
        glassesImg:"./images/eyeglasswomen1.jpg",
        title:"Eyeglass For Women",
        price:"Rs 2,000",
       },
    {
    glassesImg:"./images/eyeglasswomen2.jpg",
    title:"Eyeglass For Women",
    price:"Rs 2200 ",
   },
   {
    glassesImg:"./images/eyeglasswomen3.jpg",
    title:"Eyeglass For Women",
    price:"Rs 1200 ",
   },
   {
    glassesImg:"./images/eyeglasswomen4.jpg",
    title:"Eyeglass For Women",
    price:"Rs 2,500 ",
   },
   {
    glassesImg:"./images/eyeglasswomen5.jpg",
    title:"Eyeglass For Women",
    price:"Rs 1,500 ",
   },
   {
    glassesImg:"./images/eyeglasswomen6.jpg",
    title:"Eyeglass For Women",
    price:"Rs 1,200 ",
   },
   {
    glassesImg:"./images/eyeglasswomen7.jpg",
    title:"Eyeglass For Women",
    price:"Rs 2,500 ",
   }, 
   {
    glassesImg:"./images/eyeglasswomen8.jpg",
    title:"Eyeglass For Women",
    price:"Rs 2,000",
   }, 

   
]

let EyeGlassesforwomens = document.getElementById("EyeGlassesforwomen")


for(var i=0; i<EyeGlassesforwomen.length ; i++){

EyeGlassesforwomens.innerHTML += `

<div class="card eyeglass-card" id="card" style="width: 16rem;">
      <img src="${EyeGlassesforwomen[i].glassesImg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${EyeGlassesforwomen[i].title}</h5>
        <p class="card-text">Price: ${EyeGlassesforwomen[i].price}</p>
        
      </div>
      </div>
`

}


// Sunglasses form men



let SunGlassesformen=[
 
  {
      glassesImg:"./images/sunglass1.jpg",
      title:"Sunglass For Men",
      price:"Rs 2,000",
     },
  {
  glassesImg:"./images/sunglass2.jpg",
  title:"Sunglass For Men",
  price:"Rs 2200 ",
 },
 {
  glassesImg:"./images/sunglass3.jpg",
  title:"Sunglass For Men",
  price:"Rs 1200 ",
 },
 {
  glassesImg:"./images/sunglass4.jpg",
  title:"Sunglass For Men",
  price:"Rs 2,500 ",
 },
 {
  glassesImg:"./images/sunglass5.jpg",
  title:"Sunglass For Men",
  price:"Rs 1,500 ",
 },
 {
  glassesImg:"./images/sunglass6.jpg",
  title:"Sunglass For Men",
  price:"Rs 1,200 ",
 },
 {
  glassesImg:"./images/sunglass7.jpg",
  title:"Sunglass For Men",
  price:"Rs 2,500 ",
 }, 
 {
  glassesImg:"./images/sunglass8.jpg",
  title:"Sunglass For Men",
  price:"Rs 2,000",
 }, 

 
]

let SunGlassesformens = document.getElementById("SunGlassesformen")


for(var i=0; i<SunGlassesformen.length ; i++){

SunGlassesformens.innerHTML += `

<div class="card eyeglass-card" id="card" style="width: 16rem;">
    <img src="${SunGlassesformen[i].glassesImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${SunGlassesformen[i].title}</h5>
      <p class="card-text">Price: ${SunGlassesformen[i].price}</p>
      
    </div>
    </div>
`

}


// Sunglasses For Women

let SunGlassesforwomen=[
 
  {
      glassesImg:"./images/sunglasswomen1.jpeg",
      title:"Sunglass For Women",
      price:"Rs 2,000",
     },
  {
  glassesImg:"./images/sunglasswomen2.jpeg",
  title:"Sunglass For Women",
  price:"Rs 2200 ",
 },
 {
  glassesImg:"./images/sunglasswomen3.jpeg",
  title:"Sunglass For Women",
  price:"Rs 1200 ",
 },
 {
  glassesImg:"./images/sunglasswomen4.jpeg",
  title:"Sunglass For Women",
  price:"Rs 2,500 ",
 },
 {
  glassesImg:"./images/sunglasswomen5.jpeg",
  title:"Sunglass For Women",
  price:"Rs 1,500 ",
 },
 {
  glassesImg:"./images/sunglasswomen6.jpeg",
  title:"Sunglass For Women",
  price:"Rs 1,200 ",
 },
 {
  glassesImg:"./images/sunglasswomen7.jpeg",
  title:"Sunglass For Women",
  price:"Rs 2,500 ",
 }, 
 {
  glassesImg:"./images/sunglasswomen8.jpeg",
  title:"Sunglass For Women",
  price:"Rs 2,000",
 }, 

 
]

let SunGlassesforwomens = document.getElementById("SunGlassesforwomen")


for(var i=0; i<SunGlassesforwomen.length ; i++){

SunGlassesforwomens.innerHTML += `

<div class="card card-css" id="card" style="width: 16rem;">
    <img src="${SunGlassesforwomen[i].glassesImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${SunGlassesforwomen[i].title}</h5>
      <p class="card-text">Price: ${SunGlassesforwomen[i].price}</p>
      
    </div>
    </div>
`

}


// Sunglasses For Women

let contactlense=[
 
  {
      glassesImg:"./images/impactlens.jpeg",
      title:"Impact Solution With Kit",
      price:"Rs 400",
     },
  {
  glassesImg:"./images/activesolutions.jpeg",
  title:"Active Solution",
  price:"Rs 300 ",
 },
 {
  glassesImg:"./images/baushandlomb.jpeg",
  title:"Bosh+Lomb Ultra",
  price:"Rs 5,300 ",
 },
 {
  glassesImg:"./images/softlens.jpeg",
  title:"Bosh+Lomb SoftLen 59",
  price:"Rs 3,300 ",
 },
 {
  glassesImg:"./images/freshlook.jpeg",
  title:"FreshLook Lenses",
  price:"Rs 1,500 ",
 },
 {
  glassesImg:"./images/bella.jpeg",
  title:"Bella Elite Lenses",
  price:"Rs 5,200 ",
 },
 {
  glassesImg:"./images/avaira.jpeg",
  title:"Avaira Vitality",
  price:"Rs 3,500 ",
 }, 
 {
  glassesImg:"./images/dahab.jpeg",
  title:"Dahab Contact Lenses",
  price:"Rs 2,000",
 }, 

 
]

let contactlenses = document.getElementById("contactlense")


for(var i=0; i<contactlense.length ; i++){

contactlenses.innerHTML += `

<div class="card lense-card" id="card" style="width: 16rem;">
    <img src="${contactlense[i].glassesImg}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${contactlense[i].title}</h5>
      <p class="card-text">Price: ${contactlense[i].price}</p>
      
    </div>
    </div>
`

}