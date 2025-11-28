importPackage(Packages.server.life);

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
        qm.sendNext("你在看什么？为什么我看起来像这样？Sh*t,man.这才是真实的的我.");
    } else if (status == 1) {
		qm.sendNextPrev("当你被困在冰里几百年的时候，我也被冻住了。过了很长时间，黑暗的种子就种在了我的心里.");
	} else if (status == 2) {
		qm.sendNextPrev("但自从你醒来，我以为黑暗已经消失了。我以为事情会回到原来的样子。但我错了。。。现在好像复发了！");
	} else if (status == 3) {
		qm.sendAcceptDecline("拜托，战神。别让我发疯只有你能控制我。所以,请请不惜一切代价#r别让我发疯#k!");
	} else if (status == 4) {
		var em = qm.getEventManager("MahaBattle");
                if (!em.startInstance(qm.getPlayer())) {
                    qm.sendOk("地图上有人，请稍后再来.");
                } else {
                    qm.startQuest();
                }
                
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
    if(mode == 0 && type == 0)
        status -= 2;
    else if (mode != 1) {
        //if (mode == 0)
            qm.sendNext("#b(你需要考虑一下……)#k");
        qm.dispose();
        return;
    }
	
	if (status == 0) {
		qm.sendNext("谢谢你，战神。如果不是你，我已经疯了，谁知道会发生什么。Jesus,谢谢你!");
	} else if(status == 1) {
		qm.sendYesNo("不管怎样，现在的你也和以前不一样，如果你能控制住愤怒的我，说明你也已经准备好处理更多的技能了.");
	} else if(status == 2) {
		if(!qm.isQuestCompleted(21401)) {
			if(!qm.canHold(1142132)) {
				qm.sendOk("Hey，你的#b装备栏#k已满. 请留出多余的空间来获取物品.");
				qm.dispose();
				return;
			}
                        if (!qm.canHold(2280003, 1)) {
                                qm.sendOk("你的#b物品栏#k已满. 请留出多余的空间来获取物品.");
				qm.dispose();
				return;
                        }
			
			qm.gainItem(1142132, true);
                        qm.gainItem(2280003, 1);
			qm.changeJobById(2112);
			
			qm.completeQuest();
		}
		qm.sendNext("你的技能已经恢复，这些技能已经沉睡了很长时间，换句话说你已经算重振雄风了，不过也不要忘记锻炼,Fo sho.");
	} else if(status == 3) {
                qm.dispose();
        }
}

function spawnMob(x, y, id, map) {
	if(map.getMonsterById(id) != null)
		return;
		
	var mob = MapleLifeFactory.getMonster(id);
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(x, y));
}