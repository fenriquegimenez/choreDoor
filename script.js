const doorImage1 = document.getElementById('door1')
const doorImage2 = document.getElementById('door2')
const doorImage3 = document.getElementById('door3')

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'

const numClosedDoors = 3
const openDoor1;
const openDoor2;
const openDoor3;
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

randomChoreDoorGenerator();


