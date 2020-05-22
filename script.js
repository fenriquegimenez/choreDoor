const doorImage1 = document.getElementById('door1')
const doorImage2 = document.getElementById('door2')
const doorImage3 = document.getElementById('door3')

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 1) {
   openDoor1 = botDoorPath;
   openDoor2 = beachDoorPath;
   openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 2) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if (choreDoor === 3) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

const isclicked = (door) => {
	if (door.src === closedDoorPath) {
	  return false
	} else {
	  return true
	}
}
const isBot = (door) => {
  if (door.src = botDoorPath) {
    return true;
  } else {
    return false;
  }
}  

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(door)) {
    doorImage1.src = botDoorPath;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(door)) {
    doorImage2.src = beachDoorPath;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(door)) {
      doorImage3.src = spaceDoorPath;
      playDoor(doorImage3);
    }
}
const startButton = document.getElementById('start')

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
} 
let playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot (door)) {
    gameOver();
  }
} 

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

let currentlyPlaying = true;