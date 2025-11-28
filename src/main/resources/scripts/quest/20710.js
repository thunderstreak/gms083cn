/*
	Author: DietStory v1.02 dev team
	NPC: Matthias
	Quest: Hidden Inside the Trash Can
*/


var status = -1;

function start(mode, type, selection){
	if(mode == -1){
		qm.dispose();
		return;
	}
	else if(mode == 0 && status == 0){
		qm.sendOk("什么？你拒绝了任务吗？好吧，那好吧。那我就直接报告给 #p1101002# 了.");
		qm.dispose();
		return;
	}
	else if(mode == 0){
		status--;
	}
	else{
		status++;
	}


	if(status == 0){
		qm.sendAcceptDecline("我对你并不是有很大信心，但既然你是骑士团的一员。。。而且现在也缺少人手。。。好吧，我向你解释这次任务的目的.");
	}
	else if(status == 1){
		qm.forceStartQuest();
		qm.dispose();
	}
}