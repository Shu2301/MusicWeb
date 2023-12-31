const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Habit<br> 
        <div class="subtitle">Tove Lo</div>`,
        poster: "assets/img/pic_music/1.jpg"     
    },
    {
        id: 2,
        songName: `LIMBO<br> 
        <div class="subtitle">Keshi</div>`,
        poster: "assets/img/pic_music/2.jpg"     
    },
    {
        id: 3,
        songName: `Somewhere only we know<br> 
        <div class="subtitle">Gustixa</div>`,
        poster: "assets/img/pic_music/3.jpg"     
    },
    {
        id: 4,
        songName: `Cool for the Summer<br> 
        <div class="subtitle">Demi Lovato</div>`,
        poster: "assets/img/pic_music/4.jpg"     
    },
    {
        id: 5,
        songName: `Autronaut In The Ocean<br> 
        <div class="subtitle">Masked Wolf</div>`,
        poster: "assets/img/pic_music/5.jpg"     
    },
    {
        id: 6,
        songName: `Everything Suck<br> 
        <div class="subtitle">Vaultboy</div>`,
        poster: "assets/img/pic_music/6.jpg"     
    },
    {
        id: 7,
        songName: `Lovefool<br> 
        <div class="subtitle">Creamy</div>`,
        poster: "assets/img/pic_music/7.jpg"     
    },
    {
        id: 8,
        songName: `Animal<br> 
        <div class="subtitle">Maroon 5</div>`,
        poster: "assets/img/pic_music/8.jpg"     
    },
    {
        id: 9,
        songName: `On My Way<br> 
        <div class="subtitle">Alan Walker</div>`,
        poster: "assets/img/pic_music/9.jpg"     
    },
    {
        id: 10,
        songName: `Left and Right<br> 
        <div class="subtitle">Charlie Puth</div>`,
        poster: "assets/img/pic_music/10.jpg"     
    },
    {
        id: 11,
        songName: `Unstoppable<br> 
        <div class="subtitle">Sia</div>`,
        poster: "assets/img/pic_music/11.jpg"     
    },
    {
        id: 12,
        songName: `Up & Down<br> 
        <div class="subtitle">The Chainsmokers</div>`,
        poster: "assets/img/pic_music/12.jpg"     
    },
    {
        id: 13,
        songName: `Daylight<br> 
        <div class="subtitle">David Kushner</div>`,
        poster: "assets/img/pic_music/13.jpg"     
    },
    {
        id: 14,
        songName: `Tokyo Drift<br> 
        <div class="subtitle">Xavier Wulf</div>`,
        poster: "assets/img/pic_music/14.jpg"     
    },
    {
        id: 15,
        songName: `Waiting for love<br> 
        <div class="subtitle">Avicii</div>`,
        poster: "assets/img/pic_music/15.jpg"     
    },
    {
        id: 16,
        songName: `Telescope<br> 
        <div class="subtitle">Telescope</div>`,
        poster: "assets/img/pic_music/16.jpg"     
    },
    {
        id: 17,
        songName: `Hit in the clouds<br> 
        <div class="subtitle">Hayd</div>`,
        poster: "assets/img/pic_music/17.jpg"     
    },
    {
        id: 18,
        songName: `Pyscho,Pt.2<br> 
        <div class="subtitle">Russ</div>`,
        poster: "assets/img/pic_music/18.jpg"     
    },
    {
        id: 19,
        songName: `Boom Clap<br> 
        <div class="subtitle">Charli XCX</div>`,
        poster: "assets/img/pic_music/19.jpg"     
    },
    {
        id: 20,
        songName: `Nothin' On Me<br> 
        <div class="subtitle">Leah Marie Perez</div>`,
        poster: "assets/img/pic_music/20.jpg"     
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    }) 
} 

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0';
    }) 
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id; 
        //   connsole.log(index);
        music.src = `assets/audio/${index}.mp3 `;
        poster_master_play.src = `assets/img/pic_music/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/assets/audio/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `assets/audio/${index}.mp3 `;
        poster_master_play.src = `assets/img/pic_music/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        })

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
        music.src = `assets/audio/${index}.mp3 `;
        poster_master_play.src = `assets/img/pic_music/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
})

let menu_list_active_button = document.getElementById('menu_list_active_button');
let menu_side = document.getElementsByClassName('menu_side')[0];

menu_list_active_button.addEventListener('click', () => {
    menu_side.style.transform = "unset";
    menu_list_active_button.style.opacity = 0;
})

let song_side = document.getElementsByClassName('song_side')[0];

song_side.addEventListener('click', () => {
    // menu_side.style.transform = "translateX(-100%)";
    menu_list_active_button.style.opacity = 1;
})

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
        music.src = `assets/audio/${index}.mp3 `;
        poster_master_play.src = `assets/img/pic_music/${index}.jpg`; 
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/assets/audio/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `assets/audio/${index}.mp3 `;
    poster_master_play.src = `assets/img/pic_music/${index}.jpg`; 
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/assets/audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `assets/audio/${index}.mp3 `;
    poster_master_play.src = `assets/img/pic_music/${index}.jpg`; 
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/assets/audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();            
            break;
        case 'next':
            next_music();            
            break;
        case 'random':
            random_music();            
            break;
    }
})