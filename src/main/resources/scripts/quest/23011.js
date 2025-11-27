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
		qm.sendYesNo("所以你终于决定成为一名战斗法师了，是吗？你还是可以改变主意的。停止我们的对话，放弃这个任务，和另一个职业教练谈谈。那么，你确定你想成为一名战斗法师？我没有兴趣教你，除非你百分之百确定……");
	} else if (status == 1) {
		if (mode == 0) {
			qm.sendNext("做决定前仔细考虑一下。");
		} else {
			if (!qm.isQuestCompleted(23011)) {
				qm.gainItem(1382100);
				qm.gainItem(1142242);
				qm.forceCompleteQuest();
				qm.changeJobById(3200);
				qm.showItemGain(1382100, 1142242);
			}
			qm.sendNext("好吧,好吧。欢迎加入抵抗组织，孩子。从现在开始，你将扮演一个战斗法师的角色，一个凶猛的魔术师，随时准备带领你的队伍进入战斗。");
		}
	} else if (status == 2) {
		qm.sendNextPrev("但别到处散布你是战斗法师的消息，好吗？没必要引诱黑翼追杀你。从现在起，我就是你的老师。如果有人问起，就说你只是以普通学生的身份来看我，而不是抵抗组织的成员。我会时不时地给你上一些特别的课。你最好别在课堂上睡着，听见了吗？");
	} else if (status == 3) {
		qm.dispose();
	}
}