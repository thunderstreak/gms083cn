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
		qm.sendAcceptDecline("很奇怪。小鸡们表现得很滑稽。他们过去孵化的方式更多 #t4032451#s. 你认为狐狸和它有关系吗？如果是的话，我们最好快点做点什么.");
	} else if (status == 1) {
		if (mode == 0) {//decline
			qm.sendNext("我滴个妈呀... 你害怕 #o9300385#es? 别告诉任何人你和我有关系。太丢人了.");
			qm.dispose();
		} else {
			qm.forceStartQuest();
			qm.sendNext("真的吗? 让我们去打败那些狐狸. 继续前进，先击败 #r10 #o9300385#es#k 在 #b#m100030103##k 里. 我会跟着你，照顾好你留下的东西。现在，快去 #m100030103#!");
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
		qm.sendNext("你已经打败 #o9300385#es 了吗?");
	} else if (status == 1) {
		qm.sendNextPrev("#b杀死留下的狐狸的时候有发生什么事吗?", 2);
	} else if (status == 2) {
		qm.sendNextPrev("噢, 哈? 这个吗...我没有印象了 ... 我不想你被 #o9300385# 吃掉之类的. 所以我就没有管他们.");
	} else if (status == 3) {
		qm.sendNextPrev("#b你确定你不是因为害怕狐狸所以躲起来了?", 2);
	} else if (status == 4) {
		qm.sendNextPrev("什么? 不可能的! 我才不怕呢!");
	} else if (status == 5) {
		qm.sendNextPrev("#b小心啊! #o9300385# 就在你身后!", 2);
	} else if (status == 6) {
		qm.sendNextPrev("哇啊啊啊啊啊啊!");
	} else if (status == 7) {
		qm.sendNextPrev("#b...", 2);	
	} else if (status == 8) {
		qm.sendNextPrev("...");	
	} else if (status == 9) {
		qm.sendNextPrev("你这个淘气鬼!我可是你哥哥，你不能这样捉弄我!我可是妈妈最勇敢的儿子...!");
	} else if (status == 10) {
		qm.sendNextPrev("#b(真的是最勇敢的吗...)", 2);
	} else if (status == 11) {
		qm.sendNextPrev("哼! 不管怎样, 我还是很感谢你处理了 #o9300385#es. 作为回报, 这个东西给你吧. 是在很久之前有一个冒险家交给我的. 现在是你的了. \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1372043# 1 #t1372043# \r\n#i2022621# 25 #t2022621# \r\n#i2022622# 25 #t2022622#s \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 exp");
	} else if (status == 12) {
		if (!qm.isQuestCompleted(22008)) {
			qm.gainItem(1372043, true);
			qm.gainItem(2022621, 25, true);
			qm.gainItem(2022622, 25, true);
			qm.forceCompleteQuest();
			qm.gainExp(910);
		}
		qm.sendNextPrev("#b这是一根魔法师使用的武器. 一根魔杖#k. 你可能用不上它, 但它拿在手上还是挺好看的. 哈哈哈哈哈.");
	} else if (status == 13) {
		qm.sendPrev("不管怎样, 狐狸数量还是在日复一日地增加, 我们最好调查清楚,弄清真相.");
	} else if (status == 14) {
                qm.dispose();
        }
}