var Cell = cc.Sprite.extend({
    obstacle: null,
    buffSprite: null, // Pointer to buff sprite
    buffType: null, // Type of buff
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

    getPositionInMap:function(){
        return this.posInMap;
    },

    addObstacle: function(obstacleObj){
        this.obstacle = obstacleObj;
    },

    removeObstacle: function() {

    },

    addBuff:function(buffType){
        this.buffType = buffType;
        switch(this.buffType){
            case BUFF.DAMAGE:
                this.buffSprite = new cc.Sprite(res.cell_buff_damage);
                break;
            case BUFF.ATTACK_SPEED:
                this.buffSprite = new cc.Sprite(res.cell_buff_speed);
                break;
            case BUFF.RANGE:
                this.buffSprite = new cc.Sprite(res.cell_buff_rage);
                break;
        };
        this.buffSprite.setAnchorPoint(0,0);
        this.buffSprite.setPosition(0,0);
        this.addChild(this.buffSprite);
    },

    removeBuff:function(){
        this.removeChild(this.buffSprite);
        this.buffType = null;
    },

});