/* ===========================================================
			Ronan Lana
	NPC Name: 		John, Elpam
	Description: 	Quest - Lost in Translation
=============================================================
Version 1.0 - Script Done.(10/7/2017)
=============================================================
*/

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
            else {
                qm.sendOk("拜托，这个城市真的需要你!");
                qm.dispose();
                return;
            }
	}
	if (status == 0)
		qm.sendAcceptDecline("嗯，不行。我好像解密不了，该死。。。啊，是的，外人！他可能知道怎么解密这个。让埃尔帕姆读一下，也许他知道些什么.");
	else if (status == 1){
            if(qm.canHold(4032032, 1)) {
                qm.gainItem(4032032, 1);
                qm.sendOk("很好，这件事交给你了.");
                qm.forceStartQuest();
            } else {
                qm.sendOk("嘿。你的背包没有空位.");
            }
	} else if (status == 2){
            qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(type == 1 && mode == 0)
                status -= 2;
        else {
            qm.dispose();
            return;
        }
    }
    if (status == 0){
        if(qm.haveItem(4032032, 1)) {
            qm.sendOk("你好，本地人。你有需要翻译的信息吗？我们在范思哲的以精通多种外语而闻名，这个很可能我们能读懂。请稍等。。。");
            qm.gainItem(4032032, -1);
            qm.forceCompleteQuest();
        } else {
            qm.sendOk("恐怕你没有随身携带着那封信.");
        }
    } else if (status == 1) {
        qm.dispose();
    }
}
