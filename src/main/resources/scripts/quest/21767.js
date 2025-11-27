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
                        qm.sendNext("请先在您的背包其他中腾出一个空位。");
                        return;
                }
            
		qm.sendNext("#b盒子里有一种药物。这是什么呢？你最好把这个拿给约翰，问他这是什么。#k");
	} else if (status == 1) {
                if(canStart) {
                        qm.gainItem(4032423,1);
                        qm.forceStartQuest();
                }
                
		qm.dispose();
	}
}