
const body= document.body;
const imageT=document.getElementById("imageT");
let arrimg= [    
    'https://wpstudents.towson.edu/asharm15/files/2022/12/swiss3.jpg',
    'https://thumbs.dreamstime.com/b/july-stavanger-norway-vintage-elderly-ship-build-name-skudenes-passing-harbor-passenger-sialing-under-flag-416284298.jpg?w=768',
    'https://www.lonestartravelguide.com/wp-content/uploads/2020/06/shutterstock_1870505905-1024x683.jpg',
    'https://th.bing.com/th/id/R.31fb3d296ba3a9919e000aeca1f65479?rik=2c6ckMoqHvwTWQ&pid=ImgRaw&r=0'
];

const button1=document.createElement("button");
button1.id="button1";
button1.innerText="Previous";
body.append(button1);

const button2=document.createElement("button");
button2.id="button2";
button2.innerText="Next";
body.append(button2);


let index=0;

button2.addEventListener('click',nextClicked);

function nextClicked()
{
    index++;
    if (index >= arrimg.length) {
        index = 0;
    
    }
    imageT.src = arrimg[index];
    imageT.width = 500;   
    imageT.height =500; 
}


button1.addEventListener('click',previousClicked);

function previousClicked()
{
    index--;
    if (index < 0) {
        index = arrimg.length - 1;
    }
    imageT.src = arrimg[index];
    imageT.width = 300;   
    imageT.height =300;  
}

setInterval(function() {
    nextClicked();
}, 3000);