
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
    circlesAll: cc.Node = null;

    @property(cc.Label)
    countTime: cc.Label = null;

    @property(cc.Prefab)
    circleP: cc.Prefab = null;

    control :number = 0
    tempValue :number = -20
    circle_ProgTimes :number = 0.5

    callcircle: any
    timeTotal:number = 0
    // LIFE-CYCLE CALLBACKS:

     onLoad () {}

    start () {
        let  control = 0;
        let  tempValue = -20;
        this.callcircle = function () {
            if (control < 4) {
                let circle_pre = cc.instantiate(this.circleP);
                circle_pre.position = (cc.v2(tempValue, 0));
                tempValue = tempValue + 20;
                this.circlesAll.addChild(circle_pre);
                control++;
            } else {
                tempValue = -20;
                control = 0;
                this.circlesAll.removeAllChildren();
            }
        }
        this.schedule(this.callcircle, this.circle_ProgTimes);

    }


 	//时间格式转化
     secondChangeToMinute (time):string{
        let secondTime: any =Math.floor(time / 60);
		if (secondTime < 10) {
			secondTime = "0" + secondTime + "";
		} else {
			secondTime = secondTime + "";
		}
        let minuteTime:any = Math.floor(time % 60);
		if (minuteTime < 10) {
			minuteTime = "0" + minuteTime + "";
		} else {
			minuteTime = minuteTime + "";
        }
        
        let millisecondTime :any = time * 100 - Math.floor(time * 100)
        console.log("millisecondTime",Math.floor(millisecondTime * 100));
        millisecondTime = Math.floor(millisecondTime * 100)
		if (millisecondTime < 10) {
			millisecondTime = "0" + millisecondTime + "";
		} else {
			millisecondTime = millisecondTime + "";
		}
		let game_over_time = secondTime + ":" + minuteTime + ":" + millisecondTime;
		return game_over_time;
	}

     update (dt) {
         this.timeTotal = this.timeTotal + dt
         let times = this.secondChangeToMinute(this.timeTotal)
         this.countTime.string = times
     }
}
