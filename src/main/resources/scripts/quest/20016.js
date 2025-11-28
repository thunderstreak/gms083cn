/*
	NPC Name: 		Nineheart
	Description: 		Quest - Do you know the black Magician?
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
	if (status == 8) {
	    qm.sendNext("哦，你还有什么问题吗？我会跟你解释的。");
	    qm.dispose();
	    return;
	}
        status--;
    }
    if (status == 0) {
    	qm.sendNext("嗨, #h0#. 来迎来到 #p1101000# 骑士团. 我的名字是 #p1101002# 是皇后的首席战术家。哈哈！");
    } else if (status == 1) {
    	qm.sendNextPrev("我知道你有很多的问题，因为一切都发生得太快。我会解释这一切，包括你要做些什么。");
    } else if (status == 2) {
    	qm.sendNextPrev("这个岛叫做耶雷弗。多亏了皇后的魔法，这座岛像小船一样漂浮在空中，并且在枫叶世界里巡逻。不过，我们现在停下来了。");
    } else if (status == 3) {
    	qm.sendNextPrev("T这位年轻的女皇是枫叶世界的统治者。什么？这是你第一次听说她？啊，是的。嗯，她是枫叶世界的统治者，但她不是传统意义上的统治者。她从远处观察，观察世界上的芸芸众生。");
    } else if (status == 4) {
    	qm.sendNextPrev("但在最近，我们隐约感觉到黑法师有复活的迹象。这让我们十分担忧，害怕悲剧再次发生！");
    } else if (status == 5) {
    	qm.sendNextPrev("但那是很久以前的事了，今天的人们习惯了和平的生活。已经忘了要居安思危，也忘记了危难来临的时候该怎么抵抗。如果我们不做点什么，黑暗魔法师将再次统治枫叶世界！");
    } else if (status == 6) {
    	qm.sendNextPrev("这就是为什么年轻的皇后下定决心要组建一个勇敢的骑士团，来抵抗黑法师。你知道你需要做什么，对吗？我相信你已经有心理准备了，因为你想报名成为一名骑士。");
    } else if (status == 7) {
    	qm.sendNextPrev("我们必须变得更强，这样我们就能击败黑法师。如果他复活了，我们的首要目标是防止他破坏枫叶世界，而你要在其中出一份力。");
    } else if (status == 8) {
    	qm.sendAcceptDecline("我的解释到此结束。你明白了吗？ \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 exp");
    } else if (status == 9) {
        if (!qm.isQuestStarted(20016)) {
            qm.forceStartQuest();
            qm.gainExp(380);
        }
        qm.sendNext("我很高兴你清楚目前的状况了，但你现在还不够强，甚至连黑法师的手下也打不过，更别说面对黑法师本人了。这样是无法保护枫叶世界的。");
    } else if (status == 10) {
    	qm.sendNextPrev("虽然你已经成为骑士的一员，但你还没有经过系统的训练。所以你还不是一个真正的骑士，按照你目前的水平，也许只能做做文职什么的。");
    } else if (status == 11) {
    	qm.sendNextPrev("但从一开始就没人是个强壮的骑士，我们选拔出有勇气的人，经过严格的训练，将其培养成一个强壮的骑士。所以，你应该先受训，不断提升自己。");
    } else if (status == 12) {
    	qm.forceCompleteQuest();
        qm.sendPrev("走左边的入口到达训练森林。在那里你会看到#p1102000#，他是你的培训老师，将教你如何变得更强。我可不想看到你漫无目的的四处游荡直到你到达LV。10，你听到了吗？");
    } else if (status == 13) {
        qm.dispose();
    }
}

function end(mode, type, selection) {
}