import throttle from 'lodash/throttle'
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onUpdate = data => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

const time = localStorage.getItem("videoplayer-current-time");
if (time) {
    player.setCurrentTime(time)
}
player.on('timeupdate', throttle(onUpdate, 1000));
     
     








// function populateStorage() {
//   localStorage.setItem("videoplayer-current-time", "oficiant gay");
// }

// populateStorage();

// const playerTime = localStorage.getItem("videoplayer-current-time");
// console.log(playerTime);

// function remove() {
//     localStorage.removeItem("videoplayer-current-time")
// }

// remove()