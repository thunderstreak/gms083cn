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
		qm.sendNext("额. 这个不行!不是这种,既不能是蔬菜,也不能是肉类.你到底行不行啊? 你是怎么做老大的, 你应该能猜到我应该吃什么才对!");
	} else if (status == 1) {
		qm.sendNextPrev("#b但我确实不知道. 而且我是第一次当老大...", 2);
	} else if (status == 2) {
		qm.sendAcceptDecline("老大的意思就是长得老岁数大, 吃过的盐比我多. 既然你不知道,那我们就去找一个比你更老更大的人来问好了!");
	} else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("一会半会也想不出办法.不妨去找一个#b更年长的人#k问问看吧!");
		} else {
			qm.forceStartQuest();
			qm.sendNext("#b#b(你已经问过爸爸一次了, 但现在没有更好的办法. 再去请教他一次吧!)");
		}
	} else if (status == 4) {
                qm.dispose();
        }
}