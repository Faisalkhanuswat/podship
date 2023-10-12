$(document).ready(()=>{
    let bgArray = ['./Assets/1.\ Hero\ Image.jpg', './Assets/2.\ Hero\ Image.jpg',
'./Assets/3.\ Hero\ Image.jpg']


    let i = 0;
    setInterval(()=>{
        $('#home-hero > .bg-img').css('background-image', `url('${bgArray[i]}')`)
        i = (i + 1) % bgArray.length;
    }, 6000);
})