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
	if(type == 2 && mode == 0) {
		qm.sendOk("嗯……说不定这方法能够让你恢复记忆～不论怎样，还是值得一试的。");
		qm.dispose();
		return;
 	}else{
		qm.dispose();
		return;
	}  
	}
    if (status == 0) 
	qm.sendNext("英雄！你好！啊？你还在装不知道自己是英雄吗？前面3个人都喊那么大声了，你还能听不见吗？整个村都知道你醒了。")
    else if (status == 1) {
	qm.sendNextPrev("嗯，试试那把剑怎么样？能不能让你想起点什么？不如打一些怪物？");
    } else if (status == 2) {
	qm.sendAcceptDecline("啊，我很抱歉。看到你我有点太高兴了，高兴得有点忘乎所以了。喔，深呼吸。深呼吸。好吧，我现在感觉好多了。但我可以请你帮个忙吗？求你了");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNext("对了，这附近有许多#r#o9300383##k，请干掉 #r3只#k试试，说不定你就能想起点什么来。");
    } else if (status == 4) { 
	qm.sendNextPrev("啊，该不会连技能使用方法都忘光了吧？ #b将技能放入快捷栏就可以使用#k。不只是技能，连消耗道具也可以放进去，请多加利用。") ;
    } else if (status == 5) { 
	qm.guideHint(17); 
	qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(type == 1 && mode == 0) {
            qm.sendNext("什么？你不能喝？");
            qm.dispose();
            return;
        } else {
            qm.dispose();
            return;
        }  
    }
    if (status == 0){
	    qm.sendOk("嗯...看你的表情还很迷糊...那就该喝药了，喝了就好了。来，干了他!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2000022# 10 #t2000022#\r\n#v2000023# 10 #t2000023#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
    } else if (status == 1) {
         if(qm.isQuestCompleted(21012)){
            qm.dropMessage(1,"未知错误");
         } else if(qm.canHold(2000022) && qm.canHold(2000023)){
            qm.forceCompleteQuest();
            qm.gainExp(57);
            qm.gainItem(2000022, 10);
            qm.gainItem(2000023, 10);
	        qm.sendOk("#b(我感觉这个村子里的人怪怪的...我到底是战神还是大怨种...)", 3);
	    } else {
            qm.dropMessage(1,"背包满了");  
	        qm.dispose();
        }
    } else if (status == 2) {
        qm.dispose();
    }
}