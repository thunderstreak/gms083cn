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
		qm.sendNext("你睡得好吗，埃文？");
	} else if (status == 1) {
		qm.sendNextPrev("#b是的，你呢，妈妈？", 2);
	} else if (status == 2) {
		qm.sendNextPrev("我也是，但你看起来很累。你确定你睡得好吗？昨晚的雷声和闪电让你睡不着吗？");
	} else if (status == 3) {
		qm.sendNextPrev("#b哦,不。不是那个，妈妈。我昨晚做了一个奇怪的梦。", 2);
	} else if (status == 4) {
		qm.sendNextPrev("一个奇怪的梦？什么样的奇怪的梦？");
	} else if (status == 5) {
		qm.sendNextPrev("#b嗯…", 2);
	} else if (status == 6) {
		qm.sendNextPrev("#b(你解释说你在梦中遇到了一条龙。)", 2);
	} else if (status == 7) {
		qm.sendAcceptDecline("哈哈哈，龙？这是难以置信的。 我很高兴他没有把你整个吞下去！你应该告诉#p1013101#你的梦。我相信他会喜欢的。");
	} else if (status == 8) {
		if (mode == 0) {//decline
			qm.sendNext("嗯?你不想告诉#p1013101#吗？ 你得对你弟弟好点，亲爱的。");//guess
			qm.dispose();//get the message xd
		} else {//accept
			qm.forceStartQuest();
			qm.sendNext("#b#p1013101##k去#b#m100030102##k喂斗牛犬。它就在外面");
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
		qm.sendNext("嘿,埃文。你了?你的黑眼圈是怎么回事？没睡好？嗯?一个奇怪的梦？是关于什么的？哇?关于龙的梦？");
	} else if (status == 1) {
		qm.sendNextPrev("Muahahahahaha，龙？你是认真的吗？我不知道怎么解梦，但这听起来是个不错的梦！你在梦里也看到狗了吗？哈哈哈! \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
	} else if (status == 2) {
		qm.forceCompleteQuest();
		qm.gainExp(20);
		qm.sendImage("UI/tutorial/evan/2/0");
		qm.dispose();
	}	
}
	