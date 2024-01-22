//song list
let All_song = [
   {
     name: "action-stylish-rock-dedication",
     path: "music/action-stylish-rock-dedication.mp3",
     img: "images/audio1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "baby-mandala-169039",
     path: "music/baby-mandala-169039.mp3",
     img: "images/audio2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "cute-creatures-150622",
     path: "music/cute-creatures-150622.mp3",
     img: "images/audio3.jpg",
     singer: "Audio Library"
   },
   {
     name: "drive-breakbeat",
     path: "music/drive-breakbeat.mp3",
     img: "images/audio4.jpg",
     singer: "imshahed"
   },
   {
     name: "drive-breakbeat-173062",
     path: "music/drive-breakbeat-173062.mp3",
     img: "images/audio5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "power-action-drive",
    path: "music/power-action-drive.mp3",
    img: "images/Avatar.jpg",
    singer: "Magic Free Release"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/