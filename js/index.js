// Iteration 1: Names and Input
let hacker1 = "Ece";
console.log("The driver's name is " + hacker1 + ".");
let hacker2 = "Llyod";
console.log("The navigator's name is " + hacker2 + ".");
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " +  hacker1.length + " characters.");
  }
  else if(hacker2.length > hacker1.length){
    console.log("The driver has the longest name, it has " +  hacker2.length + " characters.");
  }
  else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.");
  }
// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));

let navigator = ""
for (let i=hacker2.length-1; i>=0; i--) {
  navigator = navigator + hacker2[i];
}
console.log(navigator);

let hackersArray = [hacker2, hacker1];

  if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
    }
  else if(hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
  }
  else {
   console.log("What?! You both have the same name?");
  }  




//Bonus no:1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus justo, luctus ut vehicula ac, interdum non lacus. Aliquam at efficitur erat, quis mattis dolor. Sed tempus turpis at urna volutpat dignissim. Aliquam erat volutpat. Suspendisse non ante aliquam, blandit libero eu, porttitor tortor. Etiam ullamcorper, elit eu fermentum rutrum, arcu ante mattis ligula, sed facilisis sem ligula eu est. Nam at tortor gravida libero consequat vehicula. Fusce sit amet iaculis turpis. Maecenas aliquam velit vel lorem pretium, accumsan consequat sapien finibus. Mauris non eros vitae mauris ornare convallis. Fusce in scelerisque elit. Maecenas sit amet consequat erat, sit amet pharetra tellus. Sed egestas enim vel accumsan iaculis. Quisque vitae erat dictum, dictum lorem at, vestibulum arcu. Sed egestas mollis diam id auctor. Curabitur venenatis ligula suscipit pharetra efficitur. Sed porta odio in eros hendrerit malesuada. Mauris sed mi quis elit scelerisque cursus. Nunc molestie, magna sit amet finibus auctor, tortor orci bibendum tellus, id placerat sapien enim at nulla. Mauris placerat faucibus lacus et rutrum. Suspendisse aliquam felis ac varius vehicula. Nam feugiat imperdiet justo fringilla pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac cursus orci. Nullam accumsan ipsum a turpis pharetra, eu consectetur ipsum egestas. Nunc eget risus urna. Pellentesque luctus sollicitudin ligula, vel tincidunt massa pellentesque sit amet. Nam tristique egestas feugiat. Integer volutpat ullamcorper justo, et tempus nulla semper vitae. Integer aliquet tortor vel quam molestie dapibus."
console.log(loremIpsum.length);

function countEt(loremIpsum){
    let count = 0;
  
    for(let i =0; i<loremIpsum.length; i++) {
     const char1 = loremIpsum[i];
      const char2 = loremIpsum[i + 1];
      
      if (char1 === "e" && char2 === "t") {
        count++;
      }
    return count
    }
  }
  
  console.log(countEt(loremIpsum));
  