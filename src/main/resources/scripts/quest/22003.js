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
		qm.sendAcceptDecline("你#b爸爸#k今早去农场的时候忘记带午餐盒了。 亲爱的，你能#b送这个午餐盒#k到你爸爸的#b#m100030300##k住处吗？");
	} else if (status == 1) {
		if (mode == 0 && type == 15) {//decline
			qm.sendNext("好孩子听妈妈的话。埃文，做个好孩子，再跟我说话。");
			qm.dispose();
		} else {
			if (!qm.isQuestStarted(22003)) {
				if (!qm.haveItem(4032448)) {
					qm.gainItem(4032448, true);
				}
				qm.forceStartQuest();
			}
			qm.sendNext("Heehee, 我的埃文真是个好孩子！ #b走出房子后向左转#k。快去找你爸爸。我敢肯定他饿坏了。");
		}
	} else if (status == 2) {
		qm.sendNextPrev("如果你把午餐盒弄丢了就来找我。我再给他做午餐。");
	} else if (status == 3) {
		qm.sendImage("UI/tutorial/evan/5/0");
		qm.dispose();
	}
}