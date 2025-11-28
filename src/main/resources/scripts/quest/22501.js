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
		qm.sendNext("哟,老大. 相信你也见识过我的本事了吧, 现在轮到你了.去给我弄点吃的来!我肚子好饿,正所谓食不饱,力不足,才美不外见.我挨饿了也会影响到你.");
	} else if (status == 1) {
		qm.sendNextPrev("额, 我还是不懂发生了什么,不过既然我是你的老大,就不能眼睁睁看你挨饿,对吧?来让我把眼睛闭上...", 2);
	} else if (status == 2) {
		qm.sendNextPrev("我靠啊, 我可是你的得力助手和龙宝宝... 你是我的老大你要对我负责,快想办法给我弄点吃的!");
	} else if (status == 3) {
		qm.sendAcceptDecline("这才是我的好老大. 我还在长身体要吃点好的!");
	} else if (status == 4) {
		if (mode == 0) {
			qm.sendNext("*叹气* 为所有爱执着的痛,为所有爱执着的伤,我已分不清爱与恨是否就这样!");
		} else {
			qm.forceStartQuest();
			qm.sendOk("#b#b(#p1013000# 化骨龙看起来真的饿了.想办法给它弄点吃的吧.可以问问爸爸有没有什么建议.)");
		}
	} else if (status == 5) {
                qm.dispose();
        }
}