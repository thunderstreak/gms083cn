/*
	NPC Name: 		Kia
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
	    qm.sendNext("嗯，遇到困难了？是因为你不知道如何打破盒子吗？如果你接受我的请求，我会告诉你。如果你改变主意了就告诉我。");
	    qm.dispose();
	    return;
	}
        status--;
    }
    if (status == 0) {
    	qm.sendNext("#b(*当当*)#k");
    } else if (status == 1) {
    	qm.sendNextPrev("嘿！你吓到我了！. 我没注意到你来了. 你是 #p1102006# 说的那位骑士吧. 欢迎! 我是 #p1102007#, 我的兴趣是制作 #b椅子#k. 我正在考虑做一个送给你当见面礼。");
    } else if (status == 2) {
    	qm.sendNextPrev("但是，我现在还做不了，因为我没有足够的材料。你能找到我需要的材料？在这附近，你会发现很多箱子，打破之后可以拿到里面的物品。你能不能给我带回 一个 #t4032267# 和一个  #t4032268# 在那些箱子里面。");
    } else if (status == 3) {
    	qm.sendNextPrev("你知道怎么从箱子里拿东西吗？你所要做的就是像攻击怪物一样打破盒子。但是 #只使用常规的攻击来打破盒子#K。");
    } else if (status == 4) {
    	qm.sendAcceptDecline("请帮我搜集 1个 #b#t4032267##k 和 1个 #b#t4032268##k . 然后我就会做一个最棒的椅子给你， 我在这里等你！");
    } else if (status == 5) {
        qm.forceStartQuest();
        qm.guideHint(9);
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
    	qm.sendNext("让我们来看看。啊，就是这两个！确实是一个#t 4032267#和一个#t 4032268#！稍等，我马上给你做个椅子。");
    } else if (status == 1) {
    	qm.sendPrev("来这是给你的 #t3010060#. 怎么样?? 漂亮吧呵呵^^ 你可以 #b把椅子放到快捷键上面并使用它让HP恢复更快。#k. 椅子在 #b装饰栏里面#k 打开你的道具栏, 确认是不是收到椅子了 #b#p1102008##k. 好了，请按照箭头指示走你会看到另一个人。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010060# 1 #t3010060# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 经验值");
    } else if (status == 2) {
        qm.gainItem(4032267, -1);
        qm.gainItem(4032268, -1);
        qm.gainItem(3010060, 1);
        qm.forceCompleteQuest();
        qm.forceCompleteQuest(20000);
        qm.forceCompleteQuest(20001);
        qm.forceCompleteQuest(20002);
        qm.forceCompleteQuest(20015);
        qm.gainExp(95);
        qm.guideHint(10);
        qm.dispose();
    }
}