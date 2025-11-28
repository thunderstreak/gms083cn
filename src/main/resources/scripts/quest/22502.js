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
		qm.sendAcceptDecline("蜥蜴不会像奶牛一样喜欢 #b#t4032452##k 这个吧? 这附近有很多 #b干草堆#k , 试着投喂一下看看.");
	} else if (status == 1) {
		if (mode == 0) {
			qm.sendNext("嗯, 不试一下不知道. 虽然那只蜥蜴虽然大到能上冒险达人秀了. 但它也可能只吃草...");
		} else {
			qm.forceStartQuest();
			qm.sendImage("UI/tutorial/evan/12/0");
		}
                qm.dispose();
        }
}
