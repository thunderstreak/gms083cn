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
		qm.sendAcceptDecline("蜥蜴难道不会像奶牛一样享受#b#t4032452##k吗? 附近有很多#b干草堆#k，所以试着喂它。");
	} else if (status == 1) {
		if (mode == 0) {
			qm.sendNext("不试试你永远不会知道。那只蜥蜴大得足以登上枫树的《信不信由你》它可能吃干草。");
		} else {
			qm.forceStartQuest();
			qm.sendImage("UI/tutorial/evan/12/0");
		}
                qm.dispose();
        }
}
