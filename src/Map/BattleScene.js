// var MainScene = ccs.load(res.ui_battle_scene_json).node;

var BattleScene = cc.Scene.extend({
    battleUI: null,
    enemyMap: null,
    myMap: null,

    ctor:function(){
        this._super();

        // Load battle scene
        this.battleUI = ccs.load(res.ui_battle_scene_json).node;

        // Set attribute for child of battle scene
        this.battleUI.getChildByName("enemy_house").zIndex = 100;
        this.battleUI.getChildByName("my_house").zIndex = 100;

        this.battleUI.getChildByName("enemy_monster_gate").zIndex = 100;
        this.battleUI.getChildByName("my_monster_gate").zIndex = 100;

        this.battleUI.getChildByName("my_card_deck").zIndex = 100;

        var spineRiverFlow = new sp.SkeletonAnimation(res.river_spine_json, res.river_spine_atlas);
        spineRiverFlow.setAnimation(0, 'animation', true);
        spineRiverFlow.setAnchorPoint(0, 0);
        spineRiverFlow.setNormalizedPosition(0.5, 0.477);
        this.battleUI.addChild(spineRiverFlow);

        this.enemyMap = new Map(false);
        this.myMap = new Map(true);

        this.enemyMap.setBuffCells(0);
        if(this.checkEqualListBuff()){
            this.myMap.setBuffCells(1);
        }
        else{
            this.myMap.setBuffCells(0);
        }

        this.battleUI.addChild(this.enemyMap);
        this.battleUI.addChild(this.myMap);

        this.addChild(this.battleUI);

    },

    checkEqualListBuff:function(){
        var myListBuff = this.myMap.listBuff;
        var enemyListBuff = this.enemyMap.listBuff;
        for(var i = 0; i < myListBuff.length; i++){
            if (!Helper.equalPoint(myListBuff[i], enemyListBuff[i])) return false;
        }
        return true;
    }
});

// var MainScene = cc.Scene.extend({
//     matchingLayerUI: null,

//     ctor:function(){
//         this._super();

//         this.matchingLayerUI = ccs.load(res.ui_matching_json);
//         this.addChild(this.matchingLayerUI.node);
//     }
// })