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
        qm.sendNext("好了，说明到这里就告一段落，咱们要进入下一阶段了。下一阶段是什么？刚才我已经说过了。就是不断的锻炼身体，直到你能干翻黑魔法师。");
    } else if (status == 1) {
        qm.sendNextPrev("虽然在几年前你确实挺牛的，但那也是过去的事情了。就算没有黑魔法师的诅咒，在冰块里封冻了那么久，蹦一下都费劲不是么？所以首先要做些热身运动。");
    } else if (status == 2) {
        qm.sendYesNo("都说内练一口气，外练筋骨皮！……这句话你也知道吧？当然要从#b 基本体力锻炼#k开始练起……啊，你先把气喘匀了，然后咱们开始基础体力锻炼。");
    } else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("你在犹豫什么？你是英雄！你得趁热打铁！来吧，我们开始吧！");
			qm.dispose();
		} else {
			qm.forceStartQuest();
			qm.sendNext("里恩岛的人口可能主要是企鹅，但即使是这个岛也有怪物。如果你去位于城镇右侧的#b#m140020000##k，你会发现#o0100131#s, 请击败#r10个#o0100131#s#k。我相信你能毫不费力地打败这里最慢的#o0100131#s", 1);
		}
	} else if (status == 4) {
		qm.showInfo("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
		qm.dispose();
    }
}