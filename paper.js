class Paper {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 2, options,3);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
     
    }
  };
  