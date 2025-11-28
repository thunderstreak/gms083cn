importPackage(Packages.client);

var item;
var stance;
var status = -1;
var item;

function end(mode, type, selection) {
	if(mode == 0) {
		qm.dispose();
		return;
	}
        status++;

	if(status == 0) {
		qm.sendNext("怎么了？你是说你已经拿走了150个#o4230120#k吗?还有这些。。。是的，这些真的是120个#t4000122#k.我不知道你是怎么做到的，但你处理得很好。好吧，这里。。。这对我来说是一件很重要的东西，但请拿着。");
	} else if(status == 1) {
	    if(qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
		qm.sendOk("请确认是否有足够的装备栏来领取奖励。");
		qm.dispose();
		return;
	    }

            var talkStr = "你喜欢这手套吗？我已经保存了一段时间，我本来想自己用的，但显然你更需要它。请好好利用它。此外，我从这个部门得到了很多东西，我不再需要它了。";
            stance = qm.getPlayer().getJobStyle();
            
            if(stance == Packages.client.MapleJob.WARRIOR) item = 1082024;
            else if(stance == Packages.client.MapleJob.MAGICIAN) item = 1082063;
            else if(stance == Packages.client.MapleJob.弓箭手 || stance == Packages.client.MapleJob.CROSS弓箭手) item = 1082072;
            else if(stance == Packages.client.MapleJob.THIEF) item = 1082076;
            else if(stance == Packages.client.MapleJob.BRAWLER || stance == Packages.client.MapleJob.GUNSLINGER) item = 1082195;
            else item = 1082149;
            
            qm.sendNext(talkStr);
	} else if(status == 2) {
            qm.completeQuest();
            qm.gainItem(item, 1);
            qm.gainItem(4000122, -120);
            qm.gainExp(6100);
            qm.sendOk("非常感谢你完成了任务。我已经把你的成功故事告诉了其他人，他们对你似乎很满意。希望你能继续和我们合作。再见~");
        } else if (status == 3) {
            qm.dispose();
        }
}
