const fileinput = document.querySelector(".file-input"),
filterOptions = document.querySelectorAll(".filter button"),
filterName = document.querySelector(".filter-info .name"),
filterValue = document.querySelector(".slider .value"),
filterSlider = document.querySelector(".slider input"),
rotateOptions = document.querySelectorAll(".rotate button"),
previewImg = document.querySelector(".preview-image img"),
resetFilterBtn = document.querySelector(".reset-filter"),
chooseImgBtn = document.querySelector(".choose-image"),
saveImgBtn = document.querySelector(".save-image");

let brightness = 100 , saturation =100 , inversion=0 , grayscale =0;
let rotate = 0 , flipHorizontal = 1 ,flipVertical = 1;

const applyFilters = () =>{
     previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
}



const loadImage=()=>{
    let file = fileinput.files[0];//getting user selected file
    if(!file) return; //return if user hasn't selected file
    previewImg.src = URL.createObjectURL(file); //passing file url as preview img src
    previewImg.addEventListener("load",()=>{
        resetFilterBtn.click(); // return if user hasn't selected file
        document.querySelector(".container").classList.remove("disable");
    });
}

filterOptions.forEach(Option =>{
    Option.addEventListener("click",()=>{ //adding click event listener to all filter
      document.querySelector(".filter .active").classList.remove("active");
      Option.classList.add("active");
      filterName.innerText = Option.innerText;
    
      if(Option.id === "brightness"){
        filterSlider.max ="200";
        filterSlider.value = brightness;
        filterValue.innerText = `${brightness}%`
      } else  if(Option.id === "saturation"){
        filterSlider.max ="200";
        filterSlider.value = saturation;
        filterValue.innerText = `${saturation}%`
      }else  if(Option.id === "inversion"){
        filterSlider.max ="100";
        filterSlider.value = inversion;
        filterValue.innerText = `${inversion}%`
      }else {
        filterSlider.max ="100";
        filterSlider.value = grayscale;
        filterValue.innerText = `${grayscale}%`
      }


    });
    
})

const updateFilter = () =>{
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if(selectedFilter.id === "brightness"){
        brightness = filterSlider.value;
    }else if(selectedFilter.id === "saturation"){
        saturation = filterSlider.value;
    }else if(selectedFilter.id === "inversion"){
        inversion = filterSlider.value;
    }else{
        grayscale = filterSlider.value;
    }
    
    applyFilters();
}

rotateOptions.forEach(option => {
    option.addEventListener("click" , () => {
        if(option.id === "left"){
            rotate -=90; //if clicked btn is left rotate , decrement rotate value by -90
        } else if(option.id === "right"){
            rotate +=90; //if clicked btn is right rotate , increment rotate value by +90
         } else if(option.id === "horizontal"){
            // if fliphorizontal vlaue is 1 , set this value to -1 else set 1
              flipHorizontal = flipHorizontal === 1 ? -1 : 1;
         }  else{
        // //      //if flipvertical value is 1 , set this value to -1 else 1
              flipVertical = flipVertical === 1 ? -1 : 1;
          }
        applyFilters();
    })
})

const resetFilter = () => {
    brightness = 100 ; saturation =100 ; inversion=0 ; grayscale =0;
 rotate = 0 ; flipHorizontal = 1 ;flipVertical = 1;
 filterOptions[0].click();//clicking brightess btn ,so the brightness selecte by defualt
 applyFilters();
}

const saveImg = () => {
    const canvas = document.createElement("canvas"); // creating canvas element
    const ctx = canvas.getContext("2d");//canvas.getContext return a drawing contex on the canvas
    canvas.width = previewImg.naturalWidth; //setting canvas width to actual image width
    canvas.height = previewImg.naturalHeight; //setting canvas height to actual image height
    
    //aplying user selected filters to canvas filter
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2,canvas.height / 2) //translating canvas from center
    if(rotate !== 0){ //if rotate value isn't 0 , rotate the canvas
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.scale(flipHorizontal,flipVertical); //flip canvas , horizontally /vertically
    ctx.drawImage(previewImg , -canvas.width / 2, -canvas.height / 2, canvas.width , canvas.height);
   

    const link = document.createElement("a"); //creating <a> element
    link.download = "image.jpg"; // passing <a> tag download value to "image.jpg"
    link.href = canvas.toDataURL(); //passing <a> tag href value to canvas data url
    link.click(); //clicking <a> tag so the image download
}


fileinput.addEventListener('change',loadImage);
filterSlider.addEventListener("input",updateFilter);
resetFilterBtn.addEventListener("click",resetFilter);
saveImgBtn.addEventListener("click",saveImg);
chooseImgBtn.addEventListener('click',()=>fileinput.click());

