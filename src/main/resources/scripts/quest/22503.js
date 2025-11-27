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
		qm.sendNext("不，不，不。这不是我需要的。我需要更有营养的东西，师傅！");
	} else if (status == 1) {
		qm.sendNextPrev("#b嗯……所以你不是食草动物。你可能是食肉动物。毕竟你是龙。 有些#t4032453#听起来怎么样?", 2);
	} else if (status == 2) {
		qm.sendAcceptDecline("什么是……#t4032453#？没听说过，但如果好吃，我接受！给我吃点好吃的。除了植物什么都可以！");
	} else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("你怎么能这样饿死我。我只是个婴儿。这是错误的！");
		} else {
			qm.forceStartQuest();
			qm.sendNext("#b#b(试着给#p1013000#或者一些#t4032453#. 你必须在农场里猎杀一些#o1210100#。十个应该够了……)");
		}
	} else if (status == 4) {
                qm.dispose();
        }
}