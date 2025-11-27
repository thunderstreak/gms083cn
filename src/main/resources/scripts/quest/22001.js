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
		qm.sendNext("哈哈。我笑得很开心。哈哈哈。不过废话说够了。喂#p1013102#，好吗？");
	} else if (status == 1) {
		qm.sendNextPrev("#b怎么啦？那是#p1013101#的工作！", 2);
	} else if (status == 2) {
		qm.sendAcceptDecline("你这个小顽童！我告诉过你叫我大哥！你知道#p1013102#有多恨我。如果我靠近他，他会咬我的。你喂他。他喜欢你。");
	} else if (status == 3) {
		if (mode == 0) {
			qm.sendNext("别再偷懒了。你想看到你弟弟被狗咬吗？快点!再跟我说话，然后接受任务！");
			qm.dispose();		
		} else {//accept
			qm.gainItem(4032447, true);
			qm.forceStartQuest();
			qm.sendNext("快点，向#b左转#k喂#b#p1013102##k。他整个上午都在叫着要吃东西。");
		}
	} else if (status == 4) {
		qm.sendNextPrev("喂完#p1013102#后再回来找我。");
	} else if (status == 5) {
                qm.dispose();
        }
}