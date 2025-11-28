var status = -1;

function start(mode, type, selection) {
	status++;
    if(mode == 0 && type == 0)
        status -= 2;
    else if (mode != 1) {
        //if (mode == 0)
            qm.sendNext("#b(你需要考虑一下。。。)#k");
        qm.dispose();
        return;
    }
	
    if (status == 0) {
            qm.sendNext("训练进行得如何？ 嗯... 70级...还不算什么，但是和我们初次见面相比，您确实取得了一些进步。 继续训练，我相信有一天您将能够重振男儿雄风。");
    } else if (status == 1) {
            qm.sendAcceptDecline("但在那之前，我需要你再来一下。#你那大斧子又在嗷嗷叫了，好像有什么事要告诉你。#基特也许能唤醒你隐藏的力量，所以请马上来。");
    } else if (status == 2) {
            qm.forceStartQuest();
            qm.sendOk("不管怎么说，我认为这个武器不简单。。。这武器不停地说话，一会说中文，一会说洋文，然后。。。啊，我觉得要不去挂个号。");
    } else if (status == 3) {
            qm.dispose();
    }
}