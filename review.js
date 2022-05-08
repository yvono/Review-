document.title = 'Reviews';
//list of reviews
let revues = [['assets/background.jpg' ,'Yvono Ti', 'Web developper', "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ut qui reiciendis voluptatibus"], 
['assets/background1.png' ,'Takam', 'designer', "Dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis voluptatibus"], 
['assets/background2.jpg' ,'Yvanov', 'Teacher', "Exercitationem ut qui reiciendis voluptatibus"]];
//selecting the items
let buttonLeft = document.getElementById('button-left');
let buttonRight = document.getElementById('button-right');
let randomBtn = document.getElementById("random-btn");
let image = document.querySelector('.profile');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let index = 0;
setReview(index);
function setReview(id){
    image.setAttribute('src', revues[id][0]); //or image.src= revues[id][0];
    author.textContent= revues[id][1];
    job.textContent = revues[id][2];
    info.textContent = revues[id][3];
};

buttonLeft.addEventListener('click', function(){
    index--;
    if(index < 0){
        index = revues.length -1;
    }
    setReview(index);
});
buttonRight.addEventListener('click', function(){
    index++;
    if(index > revues.length -1){
        index = 0;
    }
    setReview(index);
});
randomBtn.addEventListener('click', function setRandomNumber(){
    let randomNumber = Math.floor(Math.random()* revues.length);
    if(randomNumber == index){
        setRandomNumber();
    }
    else{
        index = randomNumber;
        setReview(randomNumber);
    } 
});

