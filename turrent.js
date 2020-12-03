class turrent{
  
	constructor(){
      this.image=loadImage("Iron.png");
	}
	
	display(){
		push()
		stroke(230, 255, 0);
		fill(230, 255, 0);
		image(this.image,turPosX, turPosY, 30);
		this.image.scale=0.5;
        
		pop();
	}
	
	move(){
			if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && turPosX > 5) {
    			turPosX -= 2;
	  		}
  			if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && turPosX < width-5) {
    			turPosX += 2;
  			}
  			if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && turPosY > 5) {
    			turPosY -= 2;
  			}
  			if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && turPosY < height-5) {
    			turPosY += 2;
  			}
		}
	
	hitScan(){
		for (var i = 0; i < targetBalloons.length; i++){
			var collideOrNot = collideCircleCircle(turPosX, turPosY, 30, targetBalloons[i].myX(), targetBalloons[i].myY(), targetBalloons[i].myR())
			if (collideOrNot){
				return true;
			}
		}
		return false;
	}
}