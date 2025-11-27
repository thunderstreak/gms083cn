var status = -1;

function end(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendNext("哦，你带了#t4032451#？给我。那我就把保温箱给你。");
	} else if (status == 1) {
		qm.sendYesNo("好了，给你。我不知道你怎么用，但这是你的… \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 exp");
	} else if (status == 2) {
		if (mode == 0) {//decline
			qm.sendNext("嗯?这是奇怪的。培养箱没有安装好。再试一次。");
		} else {
			qm.gainItem(4032451, -1);
			qm.forceCompleteQuest();
			qm.gainExp(360);
			qm.sendImage("UI/tutorial/evan/9/0");
		}
	} else if (status == 3) {
                qm.dispose();
        }
}