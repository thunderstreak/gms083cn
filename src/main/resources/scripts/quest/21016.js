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
        qm.sendAcceptDecline("我们准备开始训练了？你先检查你兜儿里的药水准备好没有啊。");
    } else if (status == 1) {
		if (mode == 0) {
			qm.sendNext("你还没有准备好猎杀 #o0100132# 是不? 那你准备好了叫我。");
			qm.dispose();
		} else {
			qm.forceStartQuest();
			qm.sendNext("这次咱们去找 #r#o0100132##k 干架，它们比 #o0100131# 稍微强大一些。前往 #b#m140020100##k 去干个 #r15#k 只吧。", 1);
		}
	} else if (status == 2) {
		qm.showInfo("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
		qm.dispose();
    }
}