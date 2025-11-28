var status = -1;

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
		qm.sendNext("很高兴见到你, #h0#. 所以…是你帮卡特回来的。我看到你刚到的时候受伤了…你现在还好吗？你一定是个有情有义的人。怪不得卡特对你这么好。我叫凯琳。我是诺特勒斯号的船长，也是海盗的老师。");
	} else if (status == 1) {
		qm.sendNextPrev("卡特告诉你他想让你成为#b大副#k,对吧?我同意他的意见，但我担心你志不在此。也许如果你对海盗有更多的了解之后，你会更感兴趣。让我告诉你一些关于我们的事。");
	} else if (status == 2) {
		qm.sendNextPrev("我把海盗们召集到一起，齐心协力对付黑魔法师，这个威胁到冒险岛世界的大恶魔。而且拯救世界比抢劫和掠夺更有利可图！");
	} else if (status == 3) {
		qm.sendNextPrev("如果你成为一名海盗，你就可以帮助调查黑魔法师的阴谋，并协助保卫冒险岛世界。请记住，我不会让你做任何事……我是你的职业教练，在你的职业生涯中给你指点方向。");
	} else if (status == 4) {
		qm.sendNextPrev("而且，我相信你会帮助我们对抗黑魔法师。你的眼睛里闪烁着英雄的光芒。不是吗？");
	} else if (status == 5) {
		qm.sendAcceptDecline("所以，一切由你决定。你想加入海盗队吗？如果你成为火炮手，我会很高兴的。");
	} else if (status == 6) {
		if (mode == 0 && qm.isQuestCompleted(2570)) {//decline
			qm.sendNext("哦。所以…你还没有想好是吗？我明白…没关系的。。。");
			qm.dispose();
		} else {
			if (!qm.isQuestCompleted(2570)) {
				qm.gainItem(1532000);
				qm.gainItem(1002610);
				qm.gainItem(1052095);
				qm.changeJobById(501);
				qm.forceCompleteQuest();
				qm.forceCompleteQuest(29900);
				qm.teachSkill(109, 1, 1, -1);
				qm.teachSkill(110, 0, -1, -1);//? blessing
				qm.teachSkill(111, 1, 1, -1);
				qm.showItemGain(1532000, 1002610, 1052095);
			}
			qm.sendNext("好吧，你现在真的是我们中的一员了。打开你的技能窗口，看看你的新海盗技能。我也给了你一些额外的SP，这样你可以继续试一下新技能。通过训练升级可以获得更多的技能，所以我建议你有一个训练计划。");
		}
	} else if (status == 7) {
		qm.sendNextPrev("单凭技术并不能使你成为一个伟大的海盗。你需要按照需求合理分配你的技能点！如果你希望成为一名火炮手，那么请把能力值加到力量上，这样你就可以拥有你的重炮了。如果你不放心，可以使用#b自动分配#k。");
	} else if (status == 8) {
		qm.sendNextPrev("哦，我也给了你一个小礼物。我在你的装备等物品背包上增加了一些位置，所以你应该有足够的空间存放战利品！");
	} else if (status == 9) {
		qm.sendNextPrev("现在，你需要记住最后一件事。最重要的是，好好活着。如果你在战斗中死去，你会失去一些经验，我相信你不会想要这样的结果，对吧？");
	} else if (status == 10) {
		qm.sendNextPrev("好吧，就这样！我教了你所有你需要知道的东西。我也给了你一些像样的武器，好好利用吧。现在去周围击败周围的黑魔法师的奴仆，加油！");
		qm.forceStartQuest(2945, "1");
	} else if (status == 11) {
		qm.dispose();//let them go back :P
	}
}