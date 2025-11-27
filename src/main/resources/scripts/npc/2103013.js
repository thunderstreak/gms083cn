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
var status = 0;
var selected = -1;
var party = 0;

function start() {
        cm.sendOk("The PyramidPQ is currently unavailable.");
        cm.dispose();
}

/*function start() {
	status = -1;
	var text = "You should NOT talk to this NPC in this map.";
	if (cm.getMapId() == 926020001)
		text = "Stop! You've succesfully passed Nett's test. By Nett's grace, you will now be given the opportunity to enter Pharaoh Yeti's Tomb. Do you wish to enter it now?\r\n\r\n#b#L0# Yes, I will go now.#l\r\n#L1# No, I will go later.#l";
	else if (cm.getMapId() == 926010000)
		text = "I am Duarte.\r\n\r\n#b#L0# Ask about the Pyramid.#l\r\n#e#L1# Enter the Pyramid.#l#n\r\n\r\n#L2# Find a Party.#l\r\n\r\n#L3# Enter Pharaoh Yeti's Tomb.#l\r\n#L4# Ask about Pharaoh Yeti's treasures.#l\r\n#L5# Receive the <Protector of Pharaoh> Medal.#l";
	else 
		text = "Do you want to forfeit the challenge and leave?\r\n\r\n#b#L0# Leave#l";
		
	cm.sendSimple(text);
}
*/

function action(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode < 0 || (type == 4 && mode == 0)) {
		cm.dispose();
		return;
	} else status++;
	
	if (cm.getMapId() == 926010000) {
		if (status == 0) {
			if (selection > -1) selected = selection;
			if (selection == 0 || selected == 0) {
				cm.sendNext("这是内特的金字塔，他是混乱和复仇之神。很长一段时间，它被深埋在沙漠里，但内特命令它从地面上升起。如果你不怕混乱和可能的死亡，你可以挑战法老雪人，他睡在金字塔里。无论结果如何，选择权在你。");
			} else if (selection == 1) {
				cm.sendSimple("你们这些不惧怕内特之怒的傻瓜，现在是时候选择你们的命运了！ \r\n\r\n#b#L0# 独自进入。#l\r\n#L1# 与2人或以上的团队一起进入。#l");
			} else if (selection == 2) {
				cm.openUI(0x16);
				cm.showInfoText("使用组队搜索（热键O）窗口搜索一个聚会，随时随地加入！");
				cm.dispose();
			} else if (selection == 3) {
				cm.sendSimple("你带来了什么珍宝？\r\n\r\n#L0##i4001322# #t4001322##l\r\n#L1##i4001323# #t4001323##l\r\n#L2##i4001324# #t4001324##l\r\n#L3##i4001325# #t4001325##l");
			} else if (selection == 4) {
				cm.sendNext("在法老雪人的坟墓里， 你可以通过证明自己有能力击败#b小雪人法老#k来获得一个#e#b#t2022613##k#n, 法老的复制品。那个盒子里有一个非常特别的宝藏。. 它是 #e#b#t1132012##k#n.\r\n#i1132012:# #t1132012#\r\n\r\n 如果你能挺过地狱模式， 你会收到 #e#b#t1132013##k#n.\r\n\r\n#i1132013:# #t1132013#\r\n\r\n, 当然，内特不会允许这种事发生的。");
			} else if (selection == 5) {
				var progress = cm.getQuestProgressInt(29932);
				if (progress >= 50000)
					cm.dispose();
				else
					cm.sendNext("");
					
			}
		} else if (status == 1) {
			if (selected == 0) {
				cm.sendNextPrev("一旦你进入金字塔，你将面对奈特的愤怒。既然你看起来不太帅，我就给你一些建议和规则。记住他们。.#b\r\n\r\n1. 请注意，您的 #e#rAct 感知#b#n 不会减小。维持你的感知等级的唯一方法就是不停地与怪物战斗。\r\n2. 那些没有能力的人将付出高昂的代价。 小心不要造成任何#r失误#b.\r\n3. 小心带有 #v04032424# 标记的小法老雪人。犯了攻击他的错误，你会后悔的.\r\n4. 明智地使用给你的杀戮成就的技能。");
			} else if (selected == 1) {
				party = selection;
				cm.sendSimple("你们这些不惧怕死亡残酷的人，做个决定吧！\r\n#L0##i3994115##l#L1##i3994116##l#L2##i3994117##l#L3##i3994118##l");
			} else if (selected == 3) {
				if (selection == 0) {
					if (cm.haveItem(4001322)) {
						return;
					}
				} else if (selection == 1) {
				    if (cm.haveItem(4001323)) {
						return;
					}
				} else if (selection == 2) {
					if (cm.haveItem(4001324)) {
						return;
					}
				} else if (selection == 3) {
					if (cm.haveItem(4001325)) {
						return;
					}
				}
				cm.sendOk("你需要一块宝石才能进入法老雪人的坟墓。你确定你有吗？");
				cm.dispose();
			} else if (selected == 5) {
			} else {
				cm.dispose();
			}
		} else if (status == 2) {
			if (selected == 0) {
				cm.sendNextPrev("能抵挡尼特之怒的，必得尊荣；抵挡不住的，必得灭亡。这是我能给你的所有建议。剩下的就看你的了。");
			} else if (selected == 1) {
				var mode = "EASY";
				//Finish this
				var pqparty = cm.getPlayer().getParty();
				if (party == 1) {
					if (pqparty == null) {
						cm.sendOk("创建一个组队。");//BE NICE
						cm.dispose();
						return;		
					} else {
						if (pqparty.getMembers().size() < 2) {
							cm.sendOk("需要多队员…");
							cm.dispose();
							return;								
						} else {
							var i = 0;
							for (var a = 0; a < pq.getMembers().size(); a++) {
								var pqchar = pq.getMembers().get(a);
								if (i > 1) break;
								if (pqchar != null && pqchar.getMapId() == 926010000) i++;
							}
							if (i < 2) {
								cm.sendOk("确保地图上有2个或更多的团队成员。");
								cm.dispose();
								return;								
							}
						}
					}					
				}
				
				if (cm.getPlayer().getLevel() < 40) {
					cm.sendOk("你必须是Lv. 40+才能进入这个副本。");
					cm.dispose();
					return;
				}
				if (selection < 3 && cm.getPlayer().getLevel() > 60) {
					cm.sendOk("只有lv60以上的玩家可以使用地狱模式。");
					cm.dispose();
					return;
				} 
				if (selection == 1) mode = "NORMAL";
				else if (selection == 2) mode = "HARD";
				else if (selection == 3) mode = "HELL";
	
				if (!cm.createPyramid(mode, party == 1)) {
					cm.sendOk("此模式下所有房间已满，请稍后再试或换另一个频道 ):");
				}
				cm.dispose();
			}
		} else if (status == 3) {
			cm.dispose();
		}
	} else if (cm.getMapId() == 926020001) {
		if (status == 0) {
			if (selection == 0) 
				cm.dispose();//:(
			else if (selection == 1) 
				cm.sendNext("我会给你法老雪人的宝石。你将能够进入法老雪人的坟墓随时与此宝石。检查你的背包其他窗口是否至少有一个空槽。");
			
		} else if (status == 1) {
			var itemid = 4001325;
			if (cm.getPlayer().getLevel() >= 60) itemid = 4001325;
			if (cm.canHold(itemid)) {
				cm.gainItem(itemid);
				cm.warp(926010000);
			} else 
				cm.showInfoText("你必须在背包其他窗口中至少有一个空槽才能获得奖励。");
			
			cm.dispose();
		}
	} else {
			cm.warp(926010000);
			cm.getPlayer().setPartyQuest(null);
			cm.dispose();
	}
}/*Do you want to forfeit the challenge and leave?

Your allotted time has passed. Do you want to leave now?



*/