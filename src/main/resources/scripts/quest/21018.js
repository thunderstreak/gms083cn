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
        qm.sendNext("嗯，整到这儿应该也差不多了。咱们去试试看这个岛上最厉害的生物， #r#o0100134##k 大约消灭 #r50只#k 就够了，不过。。。");
    } else if (status == 1) {
		qm.sendAcceptDecline("还是不要消灭太多 #r#o0100134##k, 它们好像是野生保护动物来着，那就#r5#k个怎么样？毕竟只是为了训练，不能破坏生态系统。");
	} else if (status == 2) {
		if (mode == 0 && type == 15) {
			qm.sendNext("嫌少吗？那你多杀点，但是别说是我说的。。。");
			qm.dispose();
		} else {
			qm.forceStartQuest();
			qm.sendNext("#r#o0100134##k在岛的较深处，沿着村子左边的路一直走，就能看到#b#m140010200##k，去那儿弄死#r5只#r#o0100134##k。");
		}
	} else if (status == 3) {
		qm.showInfo("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
		qm.dispose();
    }
}