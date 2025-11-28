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
        qm.sendNext("怎么样？肋巴骨还疼不，不疼了咱们继续？", 8);
    } else if (status == 1) {
		qm.sendNextPrev("这次我们去 #b#m140020200##k 找 #r#o0100133##k 叙叙旧，打倒个 #r20#k 只就差不多了。", 8);
	} else if (status == 2) {
		qm.sendNextPrev("这咋越打还越多了呢？", 2);
	} else if (status == 3) {
		qm.sendNextPrev("咋地，20个对你还不够吗？你想打999个也不是不行。", 8);
	} else if (status == 4) {
		qm.sendNextPrev("哦，别，就20个吧。", 2);
	} else if (status == 5) {
		qm.sendAcceptDecline("哎呦哎呦，用不着这么谦虚。");
	} else if (status == 6) {
		if (mode == 0 && type == 15) {
			qm.sendNext("#b（你因为害怕而拒绝了，你这英雄不行啊！）#k", 2);
			qm.dispose();
		} else {
			if (!qm.isQuestStarted(21017)) {
				qm.forceStartQuest();
			}
			qm.sendNext("#b(再这么说下去，搞不好真得让我去消灭999这怪兽了，赶紧接任务得了。)#k", 2);
		}
	} else if (status == 7) {
		qm.sendNextPrev("那就拜托你消灭20只#o0100133#。", 8);
	} else if (status == 8) {
		qm.showInfo("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
		qm.dispose();
    }
}