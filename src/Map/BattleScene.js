// var MainScene = ccs.load(res.ui_battle_scene_json).node;

var BattleScene = cc.Scene.extend({
    battleUI: null,

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

        var enemy_map = new Map(false);
        var my_map = new Map(true);

        this.battleUI.addChild(enemy_map);
        this.battleUI.addChild(my_map);

        this.addChild(this.battleUI);

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