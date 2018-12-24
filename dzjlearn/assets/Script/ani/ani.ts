
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    MoreGame: cc.Node = null;

    @property(cc.Node)
    onMoreGame: cc.Node = null;

    @property(cc.Node)
    offMoreGame: cc.Node = null;



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let self = this
        this.onMoreGame.on("touchstart", function () {
            self.addInHall()
        })


        this.offMoreGame.on("touchstart", function () {
            self.addOutHall()
        })
    }

    addInHall(){
        let tempX =  -cc.winSize.width / 2 +this.MoreGame.width / 2
        let moveIn = cc.moveTo(0.5, cc.v2(tempX, 0)).easing(cc.easeCubicActionOut());
        this.MoreGame.runAction(moveIn)
    }

    addOutHall(){
        let tempX = -cc.winSize.width / 2 - this.MoreGame.width / 2 
        let moveOut = cc.moveTo(0.5, cc.v2(tempX, 0)).easing(cc.easeCubicActionIn());
        //let moveOut = cc.moveTo(0.5, cc.v2(tempX, 0)).easing(cc.easeQuinticActionIn());
        this.MoreGame.runAction(moveOut)
    }

    // update (dt) {}
}
