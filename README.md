# Workshop-2-task
Workshop 2 task

## Plan for this project
In the camera, the video shows a person's footmarks.

## Changes made during coding
Changed the canvas to ground colour.
* Using draw function to create the frame, focus point, the REC sign and the battery (frame).

Added the setTimeout fuction in order to make the battery has different level (colour: green, orange, red and empty)
- Giving each level function a time to start.
* For the empty level, I made the camera shut down in one second after the battery becomes 0%.
  - Made function cameraTurnOff using the clear function and the erase function - the canvas completely becomes blank

### Problems met
* The experiment: 
I tried to make the REC red dot flashing each second. 
What I did is using setTimeout function for the dot with a time of 1000 milliseconds (red colour). And 2000 milliseconds for a ground colour dot to cover the previous one. 
Then I created a variable x (let x = 0), copy the setTimeout function both in the red dot and the ground colour dot functions. In the functions, I changed the time form 1000 and 2000 to 1000 + x and 2000 + x. Added the line 'x = x + 1000'. Therefore the time will all increase by 1000 milliseconds and have an effect of the red dot flashing.

* The problem:
I noticed that, as the dot flashing, the flashing speed also decelerated. I figured out this method cannot really achieve what I expected. So I changed the plan of making a flashing red dot to just a red dot.

I experimented with setTimeout function for footmark - footmark is not able to stop creating. 

I changed the setTimeout function to setInterval. - the footmark function can be stopped at a certain point. 
- However, the xPos and yPos that were originally in the setimeout function do not work this time.
- As a solution, I made two variables x and y, made x = random(0, width) and y = random(0, height) - The x and y can be used in this function normally, also the two parts of the footmark shape are able to share the same randomised x and y position. 

### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-2-task/
