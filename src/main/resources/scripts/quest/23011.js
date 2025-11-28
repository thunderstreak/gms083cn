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
		qm.sendYesNo("所以你确定要成为一名战斗法师吗?现在反悔还来得及...想清楚了再找我...");
	} else if (status == 1) {
		if (mode == 0) {
			qm.sendNext("听从你的内心.");
		} else {
			if (!qm.isQuestCompleted(23011)) {
				qm.gainItem(1382100);
				qm.gainItem(1142242);
				qm.forceCompleteQuest();
				qm.changeJobById(3200);
				qm.showItemGain(1382100, 1142242);
			}
			qm.sendNext("好吧，好吧。欢迎加入反抗军,孩子.从现在起你是一名战斗法师了,请牢记你的使命和担当.");
		}
	} else if (status == 2) {
		qm.sendNextPrev("请一定保持低调, 不要暴露自己的身份好吗? 没有必要惊动黑翼来追杀你. 从现在起我是你的老师,我将倾囊相授请你务必要谨记于心.最好不要在课堂上睡着，听到了吗？");
	} else if (status == 3) {
		qm.dispose();
	}
}