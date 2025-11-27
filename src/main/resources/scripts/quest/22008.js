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
		qm.sendAcceptDecline("这是奇怪的。鸡的行为很滑稽。他们曾经孵化出更多的#t4032451#s。 你认为这和狐狸有关系吗？如果是这样，我们最好快点做点什么。");
	} else if (status == 1) {
		if (mode == 0) {//decline
			qm.sendNext("哦什么…你害怕#o9300385#es吗？别告诉任何人你和我是亲戚。这是可耻的。");
			qm.dispose();
		} else {
			qm.forceStartQuest();
			qm.sendNext("对吧?让我们去打败那些狐狸。继续前进，先在#b#m100030103##k中击败 #r10 #o9300385#es#k。我会跟着你，处理好剩下的东西。现在，快过来#m100030103#!");
		}
	} else if (status == 2) {
		qm.sendImage("UI/tutorial/evan/10/0");
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
		qm.sendNext("你打败了吗？#o9300385#es吗？?");
	} else if (status == 1) {
		qm.sendNextPrev("#b你不是说要杀掉剩下的狐狸吗？", 2);
	} else if (status == 2) {
		qm.sendNextPrev("哦,那?哈哈。我确实在追他们，但我想确保他们能追上你。我可不想让你被#o9300385#什么的吃掉。所以我就随他们去吧。");
	} else if (status == 3) {
		qm.sendNextPrev("#b你确定你躲起来不是因为你害怕狐狸？", 2);
	} else if (status == 4) {
		qm.sendNextPrev("怎么啦？没门!我什么都不怕！");
	} else if (status == 5) {
		qm.sendNextPrev("#b小心!你后面有个#o9300385# !", 2);
	} else if (status == 6) {
		qm.sendNextPrev("Eeeek! Mommy!");	
	} else if (status == 7) {
		qm.sendNextPrev("#b...", 2);	
	} else if (status == 8) {
		qm.sendNextPrev("...");	
	} else if (status == 9) {
		qm.sendNextPrev("你这个小顽童！我是你哥哥。别惹我！你弟弟心脏不好，你知道的。别那样让我吃惊！");
	} else if (status == 10) {
		qm.sendNextPrev("#b(这就是我不想叫你大哥的原因……)", 2);
	} else if (status == 11) {
		qm.sendNextPrev("嗯!不管怎样，我很高兴你能打败#o9300385#es。作为奖励，我要给你一个很久以前一个冒险家给我的东西。给你。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1372043# 1 #t1372043# \r\n#i2022621# 25 #t2022621# \r\n#i2022622# 25 #t2022622#s \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 exp");
	} else if (status == 12) {
		if (!qm.isQuestCompleted(22008)) {
			qm.gainItem(1372043, true);
			qm.gainItem(2022621, 25, true);
			qm.gainItem(2022622, 25, true);
			qm.forceCompleteQuest();
			qm.gainExp(910);
		}
		qm.sendNextPrev("#b这是魔术师使用的武器。这是一根魔杖#k. 你可能并不真的需要它，但如果你随身携带它，它会让你看起来很重要。 Hahahahaha.");
	} else if (status == 13) {
		qm.sendPrev("不管怎样，狐狸队增加了，对吧？这有多奇怪？为什么他们一天天长大？我们真的应该调查一下，找出真相。");
	} else if (status == 14) {
                qm.dispose();
        }
}