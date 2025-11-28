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
		qm.sendNext("给我拿着，好使的！");
		qm.dispose();
		return;
 	}else{
		qm.dispose();
		return;
	}
    }

    if (status == 0) 
	qm.sendSimple("啊，英、英雄大人……我一直都很想见你。 \r\n#b#L0#(这只企鹅不太对劲...)#l");
    else if (status == 1) {
	qm.sendAcceptDecline("我有一件大宝贝想送英雄大人……今天终于见到了你了，不知英雄能否赏脸收下我这份薄礼？");
	} else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNext("我想制作一份礼物送给英雄，制作礼物的材料放在这附近的箱子里了。劳烦英雄大人找到这个箱子，把#b#t4032309##k和#b#t4032310##k带来给我。然后我就能立刻把礼物做好。", 9);
    } else if (status == 3) { 
	qm.guideHint(18); 
	qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(type == 1 && mode == 0) {
			qm.sendNext("你是来找茬的吧？");
            qm.dispose();
            return;
        }else{
            qm.dispose();
            return;
        }
    }
    if (status == 0)
	qm.sendYesNo("啊，你把所有的部件都带来了。给我几秒钟把它们组装起来..嗯。..我有个竹子...还有个椅...啊！！竹 子 椅！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v3010062# 1 #t3010062#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
    else if (status == 1) {   
        if(qm.isQuestCompleted(21013)) {
            qm.dropMessage(1,"未知错误");
		}	
            qm.forceCompleteQuest();		
            qm.gainExp(95);
			qm.gainItem(4032309, -1);
			qm.gainItem(4032310, -1);
            qm.gainItem(3010062, 1);
	    qm.sendNext("好了，椅子做好了！嘿嘿！就算是英雄肯定也会有需要歇歇的时候，或者排队的时候，所以我一直想送你一把椅子。", 9);
    } else if (status == 2) { 
	qm.sendNext("我想就算是英雄也不能永远活力充沛，肯定也有疲劳、困倦的时候。我这把椅子有很多小木刺非常的扎人，可以提醒英雄不能懈怠要时刻保持清醒。", 9);
    } else if (status == 3) { 
	qm.guideHint(19);
	qm.dispose();
    }
}