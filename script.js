var models = [
    {
        name :  'Fiat 2019',
        image: 'img/2019-fiat-500l.jpeg' ,
        link: 'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/19131506/2019-fiat-500l-960x540.jpg'
    },
    {
        name :  'Mazda 2021',
        image: 'img/mazda.jpeg' ,
        link: 'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/19131506/2019-fiat-500l-960x540.jpg'
    },
    {
        name :  'BMW 2020',
        image: 'img/mavi.jpeg' ,
        link: 'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/19131506/2019-fiat-500l-960x540.jpg' 
    },
    {
        name :  'Toyoto 2018',
        image: 'img/gold.jpeg',
        link: 'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/19131506/2019-fiat-500l-960x540.jpg'
    },
    {
        name :  'Nissan 2021',
        image: 'img/silverr.jpeg' ,
        link: 'https://staticb.yolcu360.com/blog/wp-content/uploads/2019/09/19131506/2019-fiat-500l-960x540.jpg'
    }
];

var index = 0;
var slaytCount = models.length;

var settings = {
    duration: '2000',
    random: false
}
var interval;
init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

function init(settings){
      var prev;

    interval=setInterval(function(){
       if(settings.random){
           do{index = Math.floor(Math.random()*slaytCount);}while(index == prev)
           prev == index;
           
       }else{
           if(slaytCount == index + 1){
               index = -1;
           }
           showSlide(index);
           console.log(index);
           index++;
       }
        showSlide(index);

    },settings.duration)
}
        

function showSlide(i){

     index = i;

     if(i<0){
         index = slaytCount - 1;
     }
     if(i>=slaytCount){
         index=0;
     }


    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}

