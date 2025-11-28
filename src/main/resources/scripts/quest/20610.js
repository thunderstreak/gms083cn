/*
 * Cygnus Skill -
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
    	qm.sendAcceptDecline("你一直在使用你的技能吗？我相信你的技能已经运用得炉火纯青了，这意味着。。。是时候学习新的技能了，对吧？");
    } else if (status == 1) {
	if (mode == 0) {
	    qm.sendOk("好吧，你现在有点飘了。你这样看起来很自满，这不是好事.");
	} else {
	    qm.forceStartQuest();
            qm.dispose();
	}
    } else if (status == 2) {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}