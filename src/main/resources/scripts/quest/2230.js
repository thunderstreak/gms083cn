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
	Author : 		Generic
	NPC Name: 		Mar the Fairy
	Map(s): 		Everywhere
	Description: 		Quest - A Mysterious Small Egg
	Quest ID: 		2230
*/

var status = -1;
var canComplete;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0)
            qm.sendNext("我把这个小小的、宝贵的生命交到你手里……用你的生命守护它……");
        else if (status == 1)
            qm.sendYesNo("照顾另一个生命…这是你不可避免的任务……跟随引导你找到我的力量。");
        else if (status == 2) {
            qm.sendOk("把手放在口袋里。我想你的朋友已经找到你了。\r\n在高耸的树木之间，紫色的风铃花沐浴在阳光下……沿着通往未知的路，找到风铃花。我在这里等你。");
            qm.forceStartQuest();
            qm.gainItem(4032086, 1); // Mysterious Egg * 1
        } else if (status == 3) {
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            qm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0)
            qm.sendSimple("你好,旅行家…你终于来看我了。你履行职责了吗？ \r\n #b#L0#职责什么?你是谁？#l#k");
        else if (selection == 0 && status == 1) {
            qm.sendNext("你在口袋里找到一个蛋了吗？那个蛋是你的义务，你的责任。当你一个人的时候，生活会很艰难。 在这样的时刻，没有什么比有一个永远在你身边的朋友更好的了。你听说过#b宠物#k吗?\r\n人们养宠物是为了减轻负担、悲伤和孤独，因为知道在这件事上有人或有东西在你身边，真的会给你带来内心的平静。但任何事情都有后果，随之而来的是责任……");
        } else if (status == 2) {
            qm.sendNextPrev("养宠物需要承担很大的责任。记住，宠物也是一种生命形式，所以你需要喂养它，给它起名字，和它分享你的想法，最终形成一种纽带。这就是主人喜欢这些宠物的原因。");
        } else if (status == 3) {
            qm.sendNextPrev("我想把这些灌输给你，所以我送了你一个我很珍惜的孩子。你带来的蛋是 #b符文蜗牛#k，一种通过魔法力量诞生的生物。既然你把蛋带来的时候照顾得很好，蛋很快就会孵出来的。");
        } else if (status == 4) {
            qm.sendNextPrev("符文蜗牛是多种技能的宠物。它会捡起道具，给你喂食药剂，并做一些让你惊讶的事情。缺点是，因为符文蜗牛是从法力中诞生的，所以它的寿命非常短。一旦它变成了玩偶，就再也不能复活了。");
        } else if (status == 5) {
            qm.sendYesNo("现在你明白了吗？每个动作都有相应的后果，宠物也不例外。蜗牛的蛋很快就要孵出来了。");
        } else if (status == 6) {
            canComplete = qm.canHold(5000054, 1);
            if (!canComplete) {
                qm.sendNext("在您尝试接收宠物之前，请在您的背包现金栏中释放一个空间….");
                return;
            }
            
            qm.sendNext("这只蜗牛只能活#b5个小时#k。用爱来沐浴，你的爱最终会得到回报的。");
        } else if (status == 7) {
            if (canComplete) {
                qm.gainItem(4032086, -1); // Mysterious Egg * -1
                qm.forceCompleteQuest();
                qm.gainItem(5000054, 1, false, true, 5 * 60 * 60 * 1000);  // rune snail (5hrs), missing expiration time detected thanks to cljnilsson
            }
            
            qm.dispose();
        }
    }
}