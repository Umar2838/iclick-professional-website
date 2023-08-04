
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