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
		qm.sendNext("啊。这是行不通的。我还需要别的东西。没有植物。没有肉。什么，你不知道？但你是大师，而且你也比我大。你一定知道什么对我有好处！");
	} else if (status == 1) {
		qm.sendNextPrev("#b但我没有。这跟年龄没什么关系…", 2);
	} else if (status == 2) {
		qm.sendAcceptDecline("既然你年纪大了，你在这个世界上肯定也更有经验了。你知道的比我多也说得通。哦,很好。我去问比你年纪还大的人，师傅！");
	} else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("我一个人想找到答案是没有用的。我最好找一个#b比师父更年长更聪明#k的人！");
		} else {
			qm.forceStartQuest();
			qm.sendNext("#b#b(你已经问过爸爸一次了，但你没有更好的主意。是时候再问他一次了！)");
		}
	} else if (status == 4) {
                qm.dispose();
        }
}