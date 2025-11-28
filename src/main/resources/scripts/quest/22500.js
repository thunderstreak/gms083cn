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
		qm.sendNext("终于出来了! *深呼吸* 啊,多么新鲜的空气.多么明媚的阳光!天好看!地好看, 还有一个快乐的小伙伴!哇啊啊啊!太不可思议了!这可比蛋壳里的世界好多了.而你... 就是我的有缘人吧?");
	} else if (status == 1) {
		qm.sendNextPrev("#b哇啊啊,这个蛋会说话!", 2);
	} else if (status == 2) {
		qm.sendNextPrev("不好意思吓到你了. 我太开心了所以有些失态, 应该怎么说呢... *咳咳* 重新来. 很高兴见到你. 我的监护人兼老大.");
	} else if (status == 3) {
		qm.sendNextPrev("#b额?什么意思?我什么时候成了你监护人了?签合同了吗?", 2);
	} else if (status == 4) {
		qm.sendNextPrev("你什么意思我什么意思？！你是不是想不认账?!你把我从蛋里吵醒了.你就是我的监护人了!你不仅要照顾我,疼爱我.以后还要送我去上大学!");
	} else if (status == 5) {
		qm.sendNextPrev("#b啊啊?一条龙?一条龙的监护人?!我不是龙的传人吗...怎么突然就变成龙的监护人了...?现在还能TD吗?", 2);
	} else if (status == 6) {
		qm.sendNextPrev("你休想! 我们之间已经达成了某种契约了! 我们在精神上是一体的... 而且协议一旦达成就无法反悔了...");
	} else if (status == 7) {
		qm.sendNextPrev("#b等等, 等等, 等等. 我们达成了契约...?精神还合体...?", 2);
	} else if (status == 8) {
		qm.sendNextPrev("对啊! 嘿嘿嘿...! 你这是什么表情? 快给我收回去!?");
	} else if (status == 9) {
		qm.sendNextPrev("#b不... 不是不是... 这一切发生得太突然了. 而且我也还没想好.", 2);
	} else if (status == 10) {
		qm.sendNextPrev("还没想好?! 这还用想什么?! 我这么可爱! 而且我还这么厉害!");
	} else if (status == 11) {
		qm.sendNextPrev("#b...#b(你怀疑地盯着它看.它像是一只小蜥蜴,样子这么可爱怎么可能会厉害...)#k", 2);
	} else if (status == 12) {
		qm.sendAcceptDecline("别以为我不知道你在想什么?!少废话了!快抱我!");
	} else if (status == 13) {
		if (mode == 0 && type == 15) {
			qm.sendNext("你竟然不相信我? 啊啊啊, 气死我了!");
			qm.dispose();
		} else {
			if (!qm.isQuestStarted(22500)) {
				qm.forceStartQuest();
			}
			qm.sendNext("命令我去干掉这个 #r#o1210100##ks!就现在!睁开所有眼看好了!");
		}
	} else if (status == 14) {
		qm.sendNextPrev("等等! 你分配好你的AP点数了吗?我的能力取决于你的#bINT和LUK#k数值!如果想要发挥好我的力量,你要先分配好AP点数和#穿戴好装备#k之后再使用技能!");
	} else if (status == 15) {
		qm.sendImage("UI/tutorial/evan/11/0");
		qm.dispose();
	}
}