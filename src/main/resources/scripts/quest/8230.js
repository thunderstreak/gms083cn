/* ===========================================================
			Ronan Lana
	NPC Name: 		Jack
	Description: 	Quest - Stemming the Tide
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
        else{
                qm.sendOk("好吧，那么。回头见.");
                qm.dispose();
                return;
        }
    }
    if (status == 0)
            qm.sendAcceptDecline("嘿，旅行者！我需要你的帮助。新叶城的居民们正面临一个巨大的威胁，如你所见。这些生物在外面不停地游荡。。。那可不好。你懂我意思吗?");
    else if (status == 1) {
            qm.sendOk("事情是这样的：扭曲的怪物们现在占领了红木要塞，他们已经计划了对新叶城发起大规模进攻，这可能会在未来几天发生。我们不能坐以待毙。但是，我需要在这里时刻监控他们的动向。需要麻烦你跑一趟：去找卢肯，他是红木过去的骑士，他现在在树林里徘徊，他知道该怎么做，让他告诉你吧。");
            qm.forceStartQuest();
    } else if (status == 2) {
            qm.dispose();
    }
}

function end(mode, type, selection) {
	status++;

	if(status == 0) {
		if(qm.haveItem(3992041)) {
			qm.sendOk("啊，你完成了我交给你的任务。干得好，现在那些家伙正焦头烂额. 现在，记住：#b必须用这把钥匙才能进入#k要塞内的内部密室。如果你想进去的话，请带着这个.");
			qm.forceCompleteQuest();
                } else if(qm.getQuestStatus(8223) == 2) {
                        qm.sendOk("你完成任务却丢了钥匙？太糟糕了，你需要这把钥匙才能进入里面的房间。跟鲁肯一起去看看你接下来该怎么做，我们需要你在禁闭室里.");
		} else {
			qm.sendOk("城里的人都指望着你。请快点.");
		}
	} else if (status == 1) {
                qm.dispose();
        }
}