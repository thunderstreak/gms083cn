/*
	NPC Name: 		Kinu
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
	    qm.sendNext("普通攻击是基本技能，很容易使用。但是合理使用技能来狩猎也很重要的。");
	    qm.dispose();
	    return;
	}
        status--;
    }
    if (status == 0) {
    	qm.sendNext("我一直在等你, #h0#. 我的名字是 #p1102006# 我在我兄弟那里听说过你。所以，你已经学会了如何使用普通攻击了？\r\n 好了接下来你会了解 #b如何使用技能#k,你会发现这对你很有帮助！");
    } else if (status == 1) {
    	qm.sendNextPrev("当你每次升级会获得技能点数，这意味这你可以分配一些AP点数！请按 #bK 键#k 看看你的技能. 合理分配技能点。#b将技能拉到快捷键上更方便使用。#k.");
    } else if (status == 2) {
    	qm.sendAcceptDecline("时间过得真快，忘了让你练习了...在这张地图有很多的 #o100121# 。你需要打倒 #r3只 #o100121##k 使用你的 #b攻击#b 技能然后给我 1 #b#t4000483##k 作为证明，OK？ 我会在这里等你的。");
    } else if (status == 3) {
    	qm.forceStartQuest();
    	qm.guideHint(8);
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
    	qm.sendNext("你已经成功地打败了 #o100121# 并给我带来了 一个 #t4000483#. 效率很高! #b看来你合理分配了 3 个技能点数，每当你升级的时候,你会获得更多技能点数，接下来请照着箭头走去找我的兄弟 #b#p1102007##k, 他将告诉你下一步怎么做。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 40 经验值");
    } else if (status == 1) {
        qm.gainItem(4000483, -1);
        qm.forceCompleteQuest();
        qm.gainExp(40);
        qm.dispose();
    }
}