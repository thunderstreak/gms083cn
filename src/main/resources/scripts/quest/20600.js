/*
 * Cygnus Skill - Training Never ends
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
    	qm.sendAcceptDecline("#h0#. 你达到100级后就一直在放松训练吗？虽然取得一定成就，但也不能就此止步。看看这些骑士指挥官。他们日夜训练，为可能遇到黑魔法师而做准备。");
    } else if (status == 1) {
	if (mode == 1) {
	    qm.forceStartQuest();
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}