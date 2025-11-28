/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*	
	Author : kevintjuh93
*/
var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
	if(type == 1 && mode == 0) {
		qm.sendOk("哦，这样啊。英雄果然很忙啊....哭哭。要是改变主意了，随时可以来找我。");
		qm.dispose();
		return;
 	}else{
		qm.dispose();
		return;
	}
    }

    if (status == 0) 
	qm.sendNext("等等，和#p1201000#在一起的，难道……难道就是传说中的英雄？#p1201000#！别点头了，给我们介绍介绍呀！这位就是传说中的英雄吗？！长得不错嘛！ ")
    else if (status == 1) {
	qm.sendNextPrev("   #i4001171#");
    } else if (status == 2) {
	qm.sendNextPrev("……真对不起，太激动了，忍不住嗓门大了些。呜呜～真是令人激动……唉，眼泪都快出来了……#p1201000#这回可开心了。");
    } else if (status == 3) {
	qm.sendAcceptDecline("等一下...你的倚天剑呢，每个英雄都有特殊的武器的。哦，你一定是在和黑法师的战斗中把武器干飞了。");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOk("我的兄弟 #bPuir #k就在街上，他很仰慕你！想认识你，但我很忙，你能过去和Puir打个招呼吗？求你了...");
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(type == 1 && mode == 0) {
	    qm.sendNext("*555..555* 你是嫌这把剑太寒碜吗？...");
	    qm.dispose();
        }else{
            qm.dispose();
            return;
        }  
	}		
    if (status == 0) {
	    qm.sendNext("等等，和#p1201000#在一起的，难道……难道就是传说中的英雄？#p1201000#！别点头了，给我们介绍介绍呀！这位就是传说中的英雄吗？！长得不错嘛！");
    } else if (status == 1) {
        qm.sendNextPrev("#i4001171#");
    } else if (status == 2) { 
	    qm.sendNextPrev("……真对不起，太激动了，忍不住嗓门大了些。呜呜～真是令人激动……唉，眼泪都快出来了……#p1201000#这回可乐坏了。");
    } else if (status == 3) { 
	    qm.sendNextPrev("等一下...你的倚天剑呢，每个英雄都有特殊的武器的。哦，你一定是在和黑法师的战斗中把武器干飞了。");
    } else if (status == 4) {  
	    qm.sendYesNo("虽然寒碜了点，不过#b先拿这把剑用着吧#k，这把宝剑削泥如铁，算是送给英雄的礼物。英雄不能没有切尔西，更不能没有大宝剑，对吧！？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v1302000# 1 #t1302000#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
    } else if (status == 5) {
        if(qm.isQuestCompleted(21011)) {
            qm.dropMessage(1,"未知错误");
        }
        if(qm.canHold(1302000)){
            qm.gainItem(1302000, 1);
            qm.gainExp(35);
            qm.forceCompleteQuest();
            qm.sendNext("#b(这把剑也太破了！……而且拿起剑的感觉也很陌生，以前的我是用剑的吗？我怎么记得我有一把利维坦之斧？而且也没有头发才对……)", 3);
        }else {
            qm.dropMessage(1,"你的背包已经满了");
        }
    } else if (status == 6) {
        qm.guideHint(16);
        qm.dispose();
    }
}