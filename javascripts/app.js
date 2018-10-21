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
// O is rover robot and X are obstacles
var grid = [ 
    ['O','','X','','','','','','','X'],
    ['','','','','','','X','','',''],
    ['','X','','','','','','','',''],
    ['','','','','','X','','','',''],
    ['','X','','','','','','','',''],
    ['','','','','X','','','','',''],
    ['','','','','','','','','',''],
    ['','X','','X','','','','X','',''],
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
    console.log("moveForward was called");
    // 1 Previous coordinates are where is exactlly the robot now
    var prev_x = coor_x; 
    var prev_y = coor_y; 
    // 2 Calculate new coordinates
    // When moving forward  direction does not change
    if(dir === "N") {
        coor_y --;
    }else if(dir === "E"){
        coor_x ++;
    }else if(dir === "S"){
        coor_y ++;
    }else if(dir === "W"){
        coor_x --;
    }
    //3. 4. Call gridRoveMove function to asign coordinates and move the rove in the grid
    gridRoverMove(coor_x,coor_y,prev_x,prev_y);
}
var moveBackward =  function (rover){
    console.log("moveBackward was called");
    // 1 Previous coordinates are where is exactlly the robot now
    var prev_x = coor_x; 
    var prev_y = coor_y; 
    // 2 Calculate new coordinates
    // When moving backward  direction does not change but coordinate are oposite than forward
    if(dir === "N") {
        coor_y ++;
    }else if(dir === "E"){
        coor_x --;
    }else if(dir === "S"){
        coor_y --;
    }else if(dir === "W"){
        coor_x ++;
    }
    //3. 4. Call gridRoveMove function to asign coordinates and move the rove in the grid
    gridRoverMove(coor_x,coor_y,prev_x,prev_y);
}
var actualDirection = function(new_dir){
    console.log("After the movement rove is face to "+ new_dir);
};
var actualPosition = function(new_x,new_y){
    console.log(`After the movement rove has coordinate X ${new_x} and coordinate Y ${new_y}`);
};
// ======================
// Function to move the Rover around the grid in the console
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
                case "B":
                    moveBackward(rover);
                    break;
                default: 
                    break;
            }
        }     
    }
    console.log(`Rover has been in all this coordinates (0,0)${rover.traveLog}`);   
}

var gridRoverMove = function(new_x,new_y,prev_x,prev_y){
//3. Asign new coordinates to rove robot 
    if ((new_x >=0 && new_x<= 9) && (new_y >=0 && new_y<= 9)) {
        if(grid[new_y][new_x]!== 'X' && grid[prev_y][prev_x] == 'O'){
        // New coordinates where move rover's robot
        rover.x = new_x;
        rover.y = new_y;
        rover.traveLog.push(`(${new_x},${new_y})`);
        actualPosition(new_x,new_y);
        //4.  Move rover's robot grid
        // grid rows-> y coordinate  and grid column-> x coordinate
        grid[new_y][new_x] = grid[prev_y][prev_x];
        grid[prev_y][prev_x] = '';
        console.log(grid.join('\n'));
        }else{
            console.log("Oh Oh Obstacle in the way!! Try a new one!");
            coor_x = prev_x;
            coor_y = prev_y;
        }
    } else {
        console.log(`Rover ran off of the grid!!`);
        //If next coordinates calculated are out of grid we save the previous position
        coor_x = prev_x;
        coor_y = prev_y;
    }  
}
