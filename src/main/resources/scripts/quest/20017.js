/*
	NPC Name: 		Cygnus
	Description: 		Quest - Encounter with the Young Queen
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
	    qm.sendNext("嗯，没什么好担心的。对你来说，这个事情并不难。鼓起勇气，准备好了就告诉我.");
	    qm.dispose();
	    return;
	}
        status--;
    }
    if (status == 0) {
    	qm.sendNext("喔? #p1101002# 派你来的, 呵呵？你一定是最近加入骑士团的新手。欢迎，很高兴见到你！我是 #p1102000#. 我是你的培训老师，培训所有像你这样的预备骑士。");
    } else if (status == 1) {
    	qm.sendNextPrev("我们叫皮约斯。你已经看到了 #p1101001# 她一直在皇后身边，不是吗? 小精灵和 #p1101001#, 但我们属于不同的类型. 当然，你没见过我们，因为我们只住在埃雷夫。你很快就会习惯这里的。");
    } else if (status == 2) {
    	qm.sendNextPrev("哦，对了，可能你也注意到了，埃雷夫上是没有怪物的。但别担心，我们使用魔法创造了一些生物，供你们训练用.");
    } else if (status == 3) {
    	qm.sendAcceptDecline("你好像准备好了！看来你可以寻找更高级的怪物。现在需要你去猎杀 #b15个 #r#o100122#s ，在 #m130010100##k#k 可以找到， 通过左边的路口可以到达 #b 训练林2 #k.");
    } else if (status == 4) {
		qm.guideHint(12);
		qm.forceStartQuest(20020);
		qm.forceCompleteQuest(20100);
		qm.forceStartQuest();
		qm.dispose();
    }
}

function end(mode, type, selection) {
}