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
		qm.sendNext("我终于来了！*吸入*啊，这一定是我呼吸的空气。那，那一定是太阳！还有那棵树！那是一株植物！那是一朵花！Woohahahaha !这太不可思议了！这比我被困在蛋里时想象的世界要好得多。和你……你是我的主人吗？嗯，我对你的印象不一样。");
	} else if (status == 1) {
		qm.sendNextPrev("#b哇，它会说话！", 2);
	} else if (status == 2) {
		qm.sendNextPrev("我的主人很奇怪。既然协议已经达成，我想我现在也无能为力了。嗯，很高兴见到你。我们会经常见面的。");
	} else if (status == 3) {
		qm.sendNextPrev("#b是吗?你是什么意思？我们会经常见面吗？什么协议?", 2);
	} else if (status == 4) {
		qm.sendNextPrev("你什么意思，我什么意思！你把我从蛋里叫醒了。你是我的主人！所以你当然有责任照顾我，训练我，帮助我成为一条强壮的龙。很明显!");
	} else if (status == 5) {
		qm.sendNextPrev("#bWhaaat吗?龙吗?你是龙？！我不明白……为什么我是你的主人？你在说什么？", 2);
	} else if (status == 6) {
		qm.sendNextPrev("你在说什么？你的灵魂和我的灵魂达成了协议！我们现在差不多是同一个人了。真的需要我解释吗？结果，你成了我的师父。我们受契约约束。你不能改变主意……这个协定是不能破坏的。");
	} else if (status == 7) {
		qm.sendNextPrev("#b等等，等等，等等。让我把事情搞清楚。你是说我别无选择，只能帮你？", 2);
	} else if (status == 8) {
		qm.sendNextPrev("Yuuup !Heeeey…!你的脸怎么了？你……不想做我的师傅吗？");
	} else if (status == 9) {
		qm.sendNextPrev("#bNo... 并不是……我只是不知道我是否准备好养宠物了。", 2);
	} else if (status == 10) {
		qm.sendNextPrev("p-p-pet ? !你刚才说我是宠物吗！怎么敢……为什么，我是龙！世界上最强大的存在！");
	} else if (status == 11) {
		qm.sendNextPrev("#b...#b(你怀疑地盯着他。他看起来像只蜥蜴。一个小得可怜的孩子。)#k", 2);
	} else if (status == 12) {
		qm.sendAcceptDecline("你为什么那样看着我！只是看!看看我能用我的力量做些什么。准备好了吗?");
	} else if (status == 13) {
		if (mode == 0 && type == 15) {
			qm.sendNext("你不相信我？你快把我逼疯了！");
			qm.dispose();
		} else {
			if (!qm.isQuestStarted(22500)) {
				qm.forceStartQuest();
			}
			qm.sendNext("命令我杀了他们#r#o1210100##k! 现在就做！我会让你看看龙能多快打败#o1210100#! Goooo, charge!");
		}
	} else if (status == 14) {
		qm.sendNextPrev("等一下！你分发AP了吗？ 我深受我主人的#b智力和幸运值#k的影响！如果你真的想看看我能做什么，在你使用技能之前分发你的#bAP和装备你的魔法装备#k！!");
	} else if (status == 15) {
		qm.sendImage("UI/tutorial/evan/11/0");
		qm.dispose();
	}
}