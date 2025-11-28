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
		qm.sendNext("哈哈。笑死了。哈哈哈。话说回来. 你去喂 #p1013102# 行吗?");
	} else if (status == 1) {
		qm.sendNextPrev("#b什么? 这是 #p1013101#的工作!", 2);
	} else if (status == 2) {
		qm.sendAcceptDecline("我靠啊!你还是我亲哥吗!你知道威震天 #p1013102# 很残忍的. 我去喂它会有危险.还是你去吧，毕竟你是我们家最帅的儿子之一.");
	} else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("别想了这里就我们两个.你也不想失去你风华正茂的弟弟吧?快点!点接受!");
			qm.dispose();		
		} else {//accept
			qm.gainItem(4032447, true);
			qm.forceStartQuest();
			qm.sendNext("去山头 #b左边#k 喂 #b#p1013102##k 吧.感觉它快饿坏了.");
		}
	} else if (status == 4) {
		qm.sendNextPrev("喂了 #p1013102# 回来找我噢.");
	} else if (status == 5) {
                qm.dispose();
        }
}