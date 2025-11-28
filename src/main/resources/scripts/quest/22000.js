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
		qm.sendNext("你昨晚睡得好吗, 宝贝儿子?");
	} else if (status == 1) {
		qm.sendNextPrev("#b别问, 问就是不好.", 2);
	} else if (status == 2) {
		qm.sendNextPrev("嗯……我猜也是了,昨晚刮风又下雨的,能睡得好就怪了.");
	} else if (status == 3) {
		qm.sendNextPrev("#b不仅如此. 我还做了个很奇怪的梦.", 2);
	} else if (status == 4) {
		qm.sendNextPrev("奇怪的梦，梦见什么呢?");
	} else if (status == 5) {
		qm.sendNextPrev("#b如此这般...", 2);
	} else if (status == 6) {
		qm.sendNextPrev("#b(说明梦见在迷雾中遇到龙的事情.)", 2);
	} else if (status == 7) {
		qm.sendAcceptDecline("哈哈哈,一条龙?我看你像一条龙!你做了个有趣的梦，去跟 #p1013101# 分享一下，让他也开发开发智力.");
	} else if (status == 8) {
		if (mode == 0) {//decline
			qm.sendNext("嗯？不想告诉 #p1013101#吗? 真是，兄弟之间应该好好相处嘛.");//guess
			qm.dispose();//get the message xd
		} else {//accept
			qm.forceStartQuest();
			qm.sendNext("#b#p1013101##k 去 #b#m100030102##k 给威震天喂饭了。从家里出去就能见到他了.");
		}
	} else if (status == 9) {
		qm.sendImage("UI/tutorial/evan/1/0");
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
		qm.sendNext("哦，你醒啦？你是挨削了吗黑眼圈这么重？晚上没睡好吗？什么？做了奇怪的梦？什么梦啊？嗯？梦见遇到了龙？");
	} else if (status == 1) {
		qm.sendNextPrev("哈哈哈哈～龙？不得了。居然梦到了龙！你以为你是阿凡达？哈哈哈哈～ \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
	} else if (status == 2) {
		qm.forceCompleteQuest();
		qm.gainExp(20);
		qm.sendImage("UI/tutorial/evan/2/0");
		qm.dispose();
	}	
}
	