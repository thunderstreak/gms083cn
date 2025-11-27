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
		qm.sendNext("我就知道！我就知道我们是有联系的，主人！当你变得更强，我也会变得更强。当我变得更强壮时，你可以使用我的力量！这是我们的约定。我就知道我选了一个好师傅！");
	} else if (status == 1) {
		qm.sendNextPrev("#b我明白了。我们到底是怎么达成这个协议的？", 2);
	} else if (status == 2) {
		qm.sendNextPrev("我不知道。我只是个鸡蛋。我真的不记得了……虽然我隐约记得你，主人，在雾蒙蒙的森林里向我走来。我记得你见到我时的惊讶。我在呼唤你作为回应。");
	} else if (status == 3) {
		qm.sendNextPrev("#b#b(等等!这听起来就像你做过的一个梦……你们俩是在梦中相遇的吗？有没有可能你在梦中看到的巨龙是……#p1013000#?)", 2);
	} else if (status == 4) {
		qm.sendNextPrev("师父，你我是一体的。我第一眼看到你就知道了。所以我才想和你达成协议。没有其他人。当然，你得付我定的价钱。");
	} else if (status == 5) {
		qm.sendNextPrev("#b我付出了代价？", 2);
	} else if (status == 6) {
		qm.sendNextPrev("你不记得了吗？当你认出我并抚摸我的时候？这是我设定的一个条件。当你碰到我的蛋的那一刻，你和我的灵魂就合二为一了。");
	} else if (status == 7) {
		qm.sendNextPrev("#b心意相通吗？", 2);
	} else if (status == 8) {
		qm.sendNextPrev("是的!灵魂契约！你和我有不同的身体，但我们共享一个灵魂。这就是为什么我越强你就越强，反之亦然！棒极了,对吗?至少我是这么认为的。");
	} else if (status == 9) {
		qm.sendNextPrev("#b我完全不知道你在说什么，但听起来好像是一件大事。", 2);
	} else if (status == 10) {
		qm.sendNextPrev("当然这是件大事了，傻师父！你再也不用担心怪物了。现在有我来保护你！尽管来考验我吧。实际上，我们现在就去吧！");
	} else if (status == 11) {
		qm.sendNextPrev("#b但这里很宁静。周围没有危险的怪物。", 2);
	} else if (status == 12) {
		qm.sendNextPrev("什么？！那一点也不好玩！主人，你不喜欢冒险吗？为了人民而与怪物战斗，打败邪恶，拯救无辜，这些事情你都不喜欢吗？");
	} else if (status == 13) {
		qm.sendNextPrev("#b这不在我的五年计划里。我开玩笑的，不过说真的，我是农民的孩子……", 2);
	} else if (status == 14) {
		qm.sendAcceptDecline("唉，好吧，让我跟你说吧。一个龙之主是不可能过平静生活的。我会有很多机会证明我的技能。相信我，我们的生活将会是一次巨大的冒险。答应我，你会一直陪着我，好吗？\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 810 exp");
	} else if (status == 15) {
		if (mode == 0) {
			qm.sendNext("呃，你在开玩笑吧？告诉我你是手滑了！快去接受这个任务吧。");
		} else {
			if (!qm.isQuestCompleted(22507)) {
				qm.forceCompleteQuest();
				qm.gainExp(810);
			}
			qm.sendNext("呵呵，好吧，主人。我们开始吧！");
		}
	} else if (status == 16) {
		qm.sendNextPrev("#b(你有点困惑，但你现在正在和龙先生一起旅行。也许你们会像他说的那样一起冒险。)", 2);
	} else if (status == 17) {	
		qm.sendPrev("#b#b(你还有事要办。你爸爸要和你谈谈，现在就去找他。)");
	} else if (status == 18) {
                qm.dispose();
        }
}