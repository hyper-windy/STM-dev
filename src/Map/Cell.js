var Cell = cc.Sprite.extend({
    obstacle: null,
    buff: null, // 
    posInMap: null,

    ctor: function(point, zIndex) { //point is cc.Point object
        // Base
        this._super(res.cell_sprite);
        this.setAnchorPoint(0.5,0.5);

        // Caculate the position the fist cell begin
        var firstX = -Math.floor(GC.MAP.WIDTH/2)*GC.MAP.CELL.P_WIDTH;
        var firstY = -Math.floor(GC.MAP.HEIGHT/2)*GC.MAP.CELL.P_HEIGHT;

        
        this.setPosition(firstX + GC.MAP.CELL.P_WIDTH*point.x, firstY + GC.MAP.CELL.P_HEIGHT*point.y);
        this.zIndex = zIndex;

        this.posInMap = point;
    },

    addObstacle: function(obstacleObj){
        this.obstacle = obstacleObj;
    },

    addBuff:function()

    removeObstacle: function() {

    },

    setBuff: function(){

    },

});