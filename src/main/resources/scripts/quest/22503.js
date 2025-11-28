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
		qm.sendNext("不,不,不.我不要吃这个.吃这个咳嗽!");
	} else if (status == 1) {
		qm.sendNextPrev("#b嗯。。。所以你不吃素，也不吃肉。那 #t4032453# 你觉得怎么样?", 2);
	} else if (status == 2) {
		qm.sendAcceptDecline("这是什么... #t4032453# ? 我从来没见过, 拿来给朕尝尝吧!");
	} else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("你怎么能这样，要饿死我啊。我还只是个宝宝。这是不对的!");
		} else {
			qm.forceStartQuest();
			qm.sendNext("#b#b(试着给 #p1013000# 一些 #t4032453#. 你需要在农村狩猎一些 #o1210100#s . 十个应该就够了...)");
		}
	} else if (status == 4) {
                qm.dispose();
        }
}