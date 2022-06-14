var Map = cc.Layer.extend({
    cellMatrix: null, // x is the first dimention and y is the second dimention
    startPosition: null,
    endPosition: null,
    listMonster: null,

    ctor:function(isMyMap = true){
        this._super();
        this.setAnchorPoint(0.5,0.5);

        // If this is my map, set position for map, start position and end position
        if (isMyMap){
            this.setNormalizedPosition(0.5,0.333);

            //init start and end position
            this.startPosition = cc.p(1, 4);
            this.endPosition = cc.p(6, 0);
        }
        else{
            this.setNormalizedPosition(0.5,0.76);

            //init start and end position
            this.startPosition = cc.p(5, 0);
            this.endPosition = cc.p(0, 4);
        }
        

        // Tnit cell for matrix
        // This matrix has the (0,0) cell at buttom-left corner and (6,6) cell at top-right corner
        // Horizontal (x) is the first dimension and Vertical (y) is the second dimension
        this.cellMatrix = [];
        var idx = 5;
        for(var i = 0; i < GC.MAP.WIDTH; i++){
            var temp = [];
            idx = 5
            for(var j = 0; j < GC.MAP.HEIGHT; j++){
                var cell = new Cell(cc.p(i, j), idx);
                this.addChild(cell);
                temp.push(cell);
                idx--;
            }
            this.cellMatrix.push(temp);
        }

        //init list of monster in map
        this.listMonster = [];




    },

    
});