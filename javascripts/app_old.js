// Rover Object Goes Here
var rover = {
    direction : "N" ,/* N,S,E,W */
    x: 0,
    y: 0,
    traveLog: []
}
var dir = rover.direction;
var coor_x = rover.x;
var coor_y = rover.y;

// Draw a grid in console 10 x 10 
var grid = [ 
    ['O','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','','']
  ];
  console.log(grid.join('\n') + '\n\n');
// ======================
var turnLeft =  function (rover){
  console.log("turnLeft was called!");
  if (dir === "N") {
     dir = "W";
  }else if(dir === "W"){
     dir = "S";
  }else if(dir === "S"){
     dir = "E";
  }else if(dir === "E"){
      dir = "N";
  }
  rover.direction = dir;
  actualDirection(dir);
}

var turnRight = function (rover){
    console.log("turnRight was called!");
    if (dir === "N") {
        dir = "E"
    }else if(dir === "E"){
    dir = "S";
    }else if(dir === "S"){
    dir = "W";
    }else if(dir === "W"){
        dir = "N";
    }
    rover.direction = dir;
    actualDirection(dir);
}
var moveForward =  function (rover){
    debugger
    // 1 Previous coordinates where is exactlly the robot now
    var prev_x = coor_x; 
    var prev_y = coor_y; 
    console.log("moveForward was called");
    // 2 Calculate new coordinates
        if(dir === "N") {
            coor_y --;
        }else if(dir === "E"){
            coor_x ++;
        }else if(dir === "S"){
            coor_y ++;
        }else if(dir === "W"){
            coor_x --;
        }

        // gridRoveMove(nx,ny,px,py);
    //3. Asign new coordinates to rove robot
        if ((coor_x >=0 && coor_x<= 9) && (coor_y >=0 && coor_y<= 9)) {
            // rover direction will be the same as before when moving forward
            // New coordinates where move rover's robot
            rover.x = coor_x;
            rover.y = coor_y;
            rover.traveLog.push(`(${coor_x},${coor_y})`);
            actualPosition(coor_x,coor_y);
    //4.  Move rover's robot grid
           // grid rows-> y coordinate  and grid column-> x coordinate
            grid[coor_y][coor_x] = grid[prev_y][prev_x];
            grid[prev_y][prev_x] = '';
            console.log(grid.join('\n'));

        } else {
            console.log(`Rover ran off of the grid!!`);
            //If next coordinates calculated are out of grid we save the previous position
            coor_x = prev_x;
            coor_y = prev_y;
        }  
}
var moveBackward =  function (rover){
    console.log("moveBackward was called");
        if(dir === "N") {
            coor_y ++;
        }else if(dir === "E"){
            coor_x --;
        }else if(dir === "S"){
            coor_y --;
        }else if(dir === "W"){
            coor_x ++;
        }
        if ((coor_x <= 9) && (coor_y <= 9)) {
            rover.x = coor_x;
            rover.y = coor_y;
            rover.traveLog.push(`(${coor_x},${coor_y})`);
            actualPosition(coor_x,coor_y);
            // rover direction will be the same as before when moving forward
        } else {
                console.log(`Rover ran off of the grid, out of boundaries is not valid!!`);
        }
}
var actualDirection = function(new_dir){
    console.log("After the movement rove is face to "+ new_dir);
};
var actualPosition = function(new_x,new_y){
    console.log(`After the movement rove has coordinate X ${new_x} and coordinate Y ${new_y}`);
};
// ======================
var moveRover = function(movements){
    
    for (var i = 0; i < movements.length; i++) { 
        // Validate the movements fot the rover
        if(movements[i] === "F"|| movements[i] === "B" || movements[i] === "R" || movements[i] === "L")
        {
            switch (movements[i]) {
                case "L":
                    turnLeft(rover);
                    break;
                case "R":
                    turnRight(rover);
                    break;
                case "F":
                    moveForward(rover);
                    break;
                default:
                    break;
            }
        }     
    }
    console.log(`Rover has been in all this coordinates (0,0)${rover.traveLog}`);   
}


