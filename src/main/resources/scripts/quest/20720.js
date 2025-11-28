/*
	QUEST: Before the Mission in Perion Begins
	NPC: Neinheart
*/

var status = -1;

function start(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		qm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;

	if(status == 0){
		qm.sendAcceptDecline("到目前为止情况如何？现在这个等级的话，你可以考虑一下在 #m103000000# 参加组队任务。作为骑士团的一员，升级是很重要的。这个信息可能会对你有帮助.");
	}
	else if(status == 1){
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection){}