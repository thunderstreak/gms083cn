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
		qm.sendNext("在过去的几天里，农场里的#o1210100#s表现得很奇怪。他们一直无缘无故地生气和易怒。 我很担心，所以今天一大早就来了农场，果然，看起来这些#o1210100#s中的一些已经越过了栅栏。");
	} else if (status == 1) {
		qm.sendAcceptDecline("在我去找之前#o1210100#s, 我应该修理坏了的篱笆。幸运的是，它没有损坏得太严重。 我只需要一些#t4032498#es来修复它。 你能给我带来#b3#k #b#t4032498#es#k吗, Evan?");
	} else if (status == 2) {
		if (mode == 0) {//decline
			qm.sendNext("Hm, #p1013101# 我会毫不犹豫地这么做的。");
			qm.dispose();
		} else {
			qm.forceStartQuest();
			qm.sendNext("Oh, that's very nice of you. You'll be able to find #b#t4032498#es#k from the nearby #r#o0130100#s#k. 他们不是太强大，但使用你的技能和物品，当你发现自己处于危险之中。");
		}
	} else if (status == 3) {
		qm.sendImage("UI/tutorial/evan/6/0");
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendNext("你都带来了#t4032498#es吗? 那是我的孩子！我该给你什么作为报答呢？让我们看看…哦,对了! \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010097# 1 #t3010097# \r\n#i2022621# 15 #t2022621#s \r\n#i2022622# 15 #t2022622#s \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 exp");
	} else if (status == 1) {
		if (!qm.isQuestCompleted(22004)) {
			qm.gainItem(3010097, true);
			qm.forceCompleteQuest();
			qm.gainExp(210);
		}
		qm.sendNextPrev("在这里。我用修完栅栏后剩下的木板做了这把新椅子。它可能看起来不多，但它很坚固。我肯定它会派上用场的。");
	} else if (status == 2) {
		qm.sendImage("UI/tutorial/evan/7/0");
		qm.dispose();
	}
}