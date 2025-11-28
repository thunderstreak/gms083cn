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
importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
	status++;
    if (mode != 1) {
		if(type == 15 && mode == 0) {
			qm.sendNext("哦，没关系。这没什么大不了的，只是一种药水。好吧,如果你改变主意了就告诉我.");
			qm.dispose();
			return;
		}
		//status -= 2;
	}

    if (status == 0) {
	qm.sendNext("咦？ 这个岛上的什么人？喔，您认识 #p1201000#吗？ #p1201000#到这里有什么事情...啊，这位是不是#p1201000#大人认识的人呢？什么？你说这位是英雄吗？");
    } else if (status == 1) {
	qm.sendNextPrev("     #i4001170#");//gms like
    } else if (status == 2) {
	qm.sendNextPrev("这位正是 #p1201000#家族等待了数百年的英雄！哇喔喔！难怪看起来就不像是泛泛之辈...");
    } else if (status == 3) { 
	qm.sendAcceptDecline("但是，英雄因为黑魔法师的诅咒而在巨冰里沉睡了很久，所以，现在英雄好像有点肌无力的样子。#b这是用大力丸泡制的药水，赶紧喝喝看#k");//nexon probably forgot to remove the '.' before '#k', lol
    } else if (status == 4) {
       	if (qm.getPlayer().getHp() >= 50) {
            	qm.getPlayer().updateHp(25);
        } 
	if (!qm.isQuestStarted(21010) && !qm.isQuestCompleted(21010)) {
        	qm.gainItem(2000022, 1);
			qm.forceStartQuest();
	}
	qm.sendNext("战神，快喝吧。喝完我们再谈.", 9);
    } else if (status == 5) {
	qm.sendNextPrev("#b(我怎么喝药水？我不记得了..)", 3);
    } else if (status == 6) {	
	qm.guideHint(14);
        qm.dispose();
    }	
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(type == 1 && mode == 0)
            qm.dispose();
        else{
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        if (qm.c.getPlayer().getHp() < 50) {
            qm.sendNext("你是不是不能喝.");
            qm.dispose();
        } else {
            qm.sendNext("我们一直在冰洞里挖啊挖啊挖，希望能找到英雄。但我从没想到今天真的看到了，预言是真的! 你说得对, #p1201000#! 现在，一个传奇英雄回来了，这下黑魔法师要扑街了！");
    	}
    } else if (status == 1) {
        qm.sendOk("对不起我耽搁你太久了，我有点太高兴了。我相信其他企鹅也会像我一样的，虽然我知道会占用你的时间，但我还是希望你能去镇上#b和其他企鹅谈谈#k？他们会很荣幸的.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 5 #t2000022#\r\n#i2000023# 5 #t2000023#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
    } else if (status == 2) {
        if(qm.isQuestStarted(21010) && !qm.isQuestCompleted(21010)) {
            qm.gainExp(16);
            qm.gainItem(2000022, 3);
            qm.gainItem(2000023, 3);
            qm.forceCompleteQuest();
        }
        
        qm.sendNext("哦，刚刚那一声吓我一激灵的是你吧！你升级了，得到了一些技能点数。每次都能获得3个技能点。按下 #bK 键 #k去查看技能窗口", 9);
    } else if (status == 3) {
	qm.sendNextPrev("#b(所有人都对我很好，但我什么都不记得了。我真的是英雄吗？我应该检查一下我的技能。但是我怎么检查呢?)", 3);
    } else if (status == 4) {
	qm.guideHint(15);
	qm.dispose();
    }
}

