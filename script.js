
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('MyProgressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songItem'));
let timeduration=document.getElementById('timeduration');

let songs=[
{songName:"Warriyo - Mortals [NCS Release]",filepath:"songs/1.mp3" , coverpath: 'covers/1.jpg'},
{songName:"Cielo - Huma-Huma [NCS Release]", filePath: "songs/2.mp3",filepath:"songs/2.mp3" , coverpath: 'covers/2.jpg'},
{songName:"DEAF KEV-Invincible [NCS Release]",filepath:"songs/3.mp3" , coverpath: 'covers/3.jpg'},
{songName:"Different Heaven  -My Heart",filepath:"songs/4.mp3" , coverpath: 'covers/4.jpg'},
{songName:"Janji-Heroes-Tonight-feat",filepath:"songs/5.mp3" , coverpath: 'covers/5.jpg'},
{songName:"Rabba - Salam-e-Ishq",filepath:"songs/6.mp3" , coverpath: 'covers/6.jpg'},
{songName:"Sakhiyaan - Salam-e-Ishq",filepath:"songs/7.mp3" , coverpath: 'covers/7.jpg'},
{songName:"Bhula Dena - Salam-e-Ishq",filepath:"songs/8.mp3" , coverpath: 'covers/8.jpg'},
{songName:"Tumhari Kasam - Salam-e-Ishq",filepath:"songs/9.mp3" , coverpath: 'covers/9.jpg'},
{songName:"Na Jaana - Salam-e-Ishq",filepath:"songs/10.mp3" , coverpath: 'covers/10.jpg'}
]

//to play,pause the osngs
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');  //far fa-3x 
        masterplay.classList.add('fa-circle-pause');  //fa-regular 
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause'); //fa-regular 
        masterplay.classList.add('fa-play-circle'); //far fa-3x 
        gif.style.opacity = 0;
    }
});


audioElement.addEventListener('timeupdate',()=>{
    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
});

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName; 
    // const audio = new Audio(songs[i].filepath);
    //  element.getElementsById("timeduration")[0].innerText=audio[i].duration;
})



const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // makeallplays();
        
        // songindex=parseInt(e.target.id);
        // mastersongname.innerText=songs[songindex].songName;
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-circle-pause');
        // audioElement.src=`songs/${songindex+1}.mp3`;
        // console.log(audioElement.src);
        // audioElement.currentTime=0;
        // audioElement.play();
        // masterplay.classList.remove('fa-play-circle');
        // masterplay.classList.add('fa-circle-pause');
        // gif.style.opacity = 1;
        audioprogress=0;
        
        
        if(audioElement.paused || audioElement.currentTime <= 0)
            {
                makeallplays();
                songindex=parseInt(e.target.id);
                mastersongname.innerText=songs[songindex].songName;
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-circle-pause');
                audioElement.src=`songs/${songindex+1}.mp3`;
                if(audioprogress>0)
                {
                    audioElement.currentTime=(audioprogress*audioElement.duration)/100;
                    
                }
                else
                {
                    audioElement.currentTime=0;
                    
                }
                audioElement.play();
                console.log(`Current Time: ${audioElement.currentTime}, Duration: ${audioElement.duration}`);

                audioprogress=(audioElement.currentTime/audioElement.duration)*100;
                // if(audioElement.currentTime > 0)
                // {
                //     console.log(audioElement.currentTime);
                //     audioElement.currentTime;
                // }
                // else{
                // audioElement.currentTime=0;
                // }
                
                e.target.classList.remove('fa-play-circle');  //far fa-3x 
                e.target.classList.add('fa-circle-pause');  //fa-regular 
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-circle-pause');
                gif.style.opacity = 1;
            }
            else
            {
                // makeallplays();
                // songindex=parseInt(e.target.id);
                // mastersongname.innerText=songs[songindex].songName;
                // e.target.classList.remove('fa-play-circle');
                // e.target.classList.add('fa-circle-pause');
                // audioElement.src=`songs/${songindex+1}.mp3`;
                // audioElement.currentTime=0;
                audioElement.pause();
                e.target.classList.remove('fa-circle-pause'); //fa-regular 
                e.target.classList.add('fa-play-circle'); //far fa-3x 
                gif.style.opacity = 0;
                masterplay.classList.remove('fa-circle-pause');
                masterplay.classList.add('fa-play-circle');
            }
        

    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9)
    {
        songindex=0;
    }
    else
    {
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    console.log(audioElement.src);
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<-0)
    {
        songindex=0;
    }
    else
    {
        songindex -=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    console.log(audioElement.src);
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-circle-pause');

})