/* ===========================================================
			Ronan Lana
	NPC Name: 		Lita Lawless
	Description: 	Quest - Bounty Hunter - Rags to Riches
=============================================================
Version 1.0 - Script Done.(11/7/2017)
=============================================================
*/

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(type == 1 && mode == 0)
                status -= 2;
        else{
                qm.sendOk("好吧，那么。回头见.");
                qm.dispose();
                return;
        }
    }
    if (status == 0) {
            var target = "是长辈";
            qm.sendAcceptDecline("嘿，旅行者！我需要你的帮助。新叶城的市民们受到了新的威胁。我现在正在招募人手，这次的目标是 #r" + target + "#k.你要加入吗?");
    }
    else if (status == 1) {
            var reqs = "#r30 #t4032011##k";
            qm.sendOk("很好。请尽快抓住 #r" + reqs + "#k,NLC委员会在等着.");
            qm.forceStartQuest();
    } else if (status == 2) {
            qm.dispose();
    }
}