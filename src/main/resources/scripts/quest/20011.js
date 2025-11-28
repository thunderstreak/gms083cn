/*
	NPC Name: 		Kisan
	Description: 		Quest - Cygnus tutorial helper
*/

var status = -1;

function start(mode, type, selection) {
    if(mode == -1 || mode == 0 && type > 0) {
        qm.dispose();
        return;
    }
    
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你不想？它并不难，而且你还能得到奖励！好吧，好好想想，如果你改变主意了就告诉我。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
    	qm.sendNext("打猎有许多种方法，最基本的方法是用你的 #b普通攻击#k. 所有你需要装备好武器，因为这只是一个简单的物理运动。");
    } else if (status == 1) {
    	qm.sendNextPrev("请按 #bCtrl#k 使用你的普通攻击. 通常下 Ctrl 位于 #b键盘的左下角#k, 你试一下按 Ctrl 尝试攻击！");
    } else if (status == 2) {
    	qm.sendAcceptDecline("怎么样，好使吧？我们来实战一下，你可以找到最弱的 #r#o100120##k 来试一下。尝试狩猎 #r1只#k 后回来领取奖励。.");
    } else if (status == 3) {
		qm.forceStartQuest();
		qm.guideHint(4);
		qm.dispose();
    }
}

function end(mode, type, selection) {
    if(mode == -1 || mode == 0 && type > 0) {
        qm.dispose();
        return;
    }
    
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
    	qm.sendNext("啊，看来你成功地猎到了 #o100120#. P很简单，对吧？普通攻击只是最基本的攻击方式。不过，别担心。#p1102006# 会教会你如何使用更强大的技能。等等，你走之前让我给你个奖励。");
    } else if (status == 1) {
    	qm.sendPrev("这个装备是给贵族用的。比你现在穿的酷多了，不是吗？跟着你左边的箭去见我弟弟 #b#p1102006##k. 记得试一下我给你的装备？ \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1002869# #t1002869# - 1 \r\n#i1052177# #t1052177# - 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30 exp");
    } else if (status == 2) {
        qm.gainItem(1002869, 1);
        qm.gainItem(1052177, 1);
        qm.forceCompleteQuest();
        qm.gainExp(30);
        qm.guideHint(6);
        qm.dispose();
    }
}