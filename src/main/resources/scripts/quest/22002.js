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
		qm.sendNext("你喂了#p1013102#吗？你现在应该吃点早餐了，埃文。今天的早餐是#t2022620#。我把它带来了。嘻嘻。如果你不同意喂我#p1013102#，我就要自己吃了。");
	} else if (status == 1) {
		qm.sendAcceptDecline("这里，我给你这个#b三明治#k, 所以#b吃完饭后去跟妈妈说吧#k。她说她有事要告诉你。");
	} else if (status == 2) {
		if (mode == 0) {//decline
			qm.sendNext("哦，什么？你不打算吃早餐吗？早餐是一日中最重要的一餐！如果你改变主意，跟我说一声。如果不吃，我就自己吃了。");
			qm.dispose();
		} else {
			qm.gainItem(2022620, true);
			qm.forceStartQuest();
			qm.sendNext("#b(妈妈有什么要说的吗？吃你的#t2022620#，然后回到房子里。)#k");
		}
	} else if (status == 3) {
		qm.sendImage("UI/tutorial/evan/3/0");
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
		qm.sendNext("埃文，你吃早餐了吗？那你能帮我个忙吗？  \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1003028# 1 #t1003028#  \r\n#i2022621# 5 #t2022621#s \r\n#i2022622# 5 #t2022622# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
	} else if (status == 1) {
		qm.forceCompleteQuest();
                qm.gainItem(1003028, 1, true);
		qm.gainItem(2022621, 5, true);
		qm.gainItem(2022622, 5, true);
		qm.gainExp(60);
		qm.sendImage("UI/tutorial/evan/4/0");
		qm.dispose();
	}
}