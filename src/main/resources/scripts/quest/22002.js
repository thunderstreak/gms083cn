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
		qm.sendNext("你喂过 #p1013102# 了吗? 你自己也要吃一点早餐的. 今天的早餐是 #t2022620#. 看起来就很好吃.");
	} else if (status == 1) {
		qm.sendAcceptDecline("给你,这是我做的 #b三明治#k,你#b吃完之后去找一下妈妈#k. 她有话要跟你说.");
	} else if (status == 2) {
		if (mode == 0) {//decline
			qm.sendNext("噢, 不吃吗? 早餐是很重要的,不吃早餐容易胆结石和低血糖，而且对胃也不好! 而且它看起来就很好吃.");
			qm.dispose();
		} else {
			qm.gainItem(2022620, true);
			qm.forceStartQuest();
			qm.sendNext("#b(妈妈找你有事.你吃完 #t2022620# 之后去屋子里找她吧.)#k");
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
		qm.sendNext("乖孩子你是不是吃完早餐了? 吃完那就得来干点活了。  \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1003028# 1 #t1003028#  \r\n#i2022621# 5 #t2022621#s \r\n#i2022622# 5 #t2022622# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 60 exp");
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