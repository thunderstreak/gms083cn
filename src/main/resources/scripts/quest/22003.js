var status = -1;

function start(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendAcceptDecline("你 #b爸爸#k 他早上去农场的时候忘记带午餐盒了.你帮忙把 #b午餐盒#k 带过去 #b#m100030300##k 给他吧！");
	} else if (status == 1) {
		if (mode == 0 && type == 15) {//decline
			qm.sendNext("好孩子要听妈妈的话. 三明治不是白白给你吃的,你最好再问我一次然后点接受.");
			qm.dispose();
		} else {
			if (!qm.isQuestStarted(22003)) {
				if (!qm.haveItem(4032448)) {
					qm.gainItem(4032448, true);
				}
				qm.forceStartQuest();
			}
			qm.sendNext("嗯嗯, 真是我的好孩子! 快拿着这个 #b午餐盒#k 去给你爸爸吧.我在这都能听到他肚子叫的声音.");
		}
	} else if (status == 2) {
		qm.sendNextPrev("如果你不小心弄丢了饭盒，请回来找我。我再给他做份午饭.");
	} else if (status == 3) {
		qm.sendImage("UI/tutorial/evan/5/0");
		qm.dispose();
	}
}