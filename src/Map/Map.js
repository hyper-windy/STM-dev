var Map = cc.Layer.extend({
    cellMatrix: null, // x is the first dimention and y is the second dimention
    startPosition: null,
    endPosition: null,
    listMonster: null,
    isMyMap: null,
    listBuff: null,

    ctor:function(isMyMap = true){
        this._super();
        this.setAnchorPoint(0.5,0.5);
        this.isMyMap = isMyMap;

        // If this is my map, set position for map, start position and end position
        if (this.isMyMap){
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
        };

        // Init list of monster in map
        this.listMonster = [];

        // Random buff cell
        this.listBuff = this.randomBuffCells();


    },

    randomBuffCells:function(){
        var temp = [];
        for (var i = 1; i <= 5; i++){
            for (var j = 1; j <= 3; j++){
                if (i == 1 && j == 3) continue;
                temp.push(this.cellMatrix[i][j]);
            }
        }
        temp = Helper.shuffle(temp);

        log(temp.indexOf([this.cellMatrix[1][1]]));
        
        listBuff = [];
        var numBuff = 0;
        var neighbours = [];
        for (var i = 0; i < temp.length; i++){
            // log(neighbours.indexOf([temp[i]]));
            if (!Helper.checkPointInList(temp[i], neighbours)){
                listBuff.push(temp[i]);
                point = temp[i].getPositionInMap();
                neighbours.concat(Helper.getFullNeibours(this.cellMatrix, point));
                numBuff++;
                if (numBuff == 3) break;
            }
        }
        return listBuff;
    },

    setBuffCells:function(flag = 0){
        if (flag == 0){
            this.listBuff[0].addBuff(BUFF.DAMAGE);
            this.listBuff[1].addBuff(BUFF.ATTACK_SPEED);
            this.listBuff[2].addBuff(BUFF.RANGE);
        }
        else{
            this.listBuff[1].addBuff(BUFF.DAMAGE);
            this.listBuff[0].addBuff(BUFF.ATTACK_SPEED);
            this.listBuff[2].addBuff(BUFF.RANGE);
        }
    }
    
});