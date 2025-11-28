var status = -1;
var canStart;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
                if(qm.haveItem(4032423, 1)) {
                        qm.forceStartQuest();
                        qm.dispose();
                        return;
                }
                
                canStart = qm.canHold(4032423, 1);
                if(!canStart) {
                        qm.sendNext("请确认你的背包里是否还有空位.");
                        return;
                }
            
		qm.sendNext("#b嗯，盒子里有一种药材。但看不出来是什么？把这个带给约翰看看吧。#k");
	} else if (status == 1) {
                if(canStart) {
                        qm.gainItem(4032423,1);
                        qm.forceStartQuest();
                }
                
		qm.dispose();
	}
}