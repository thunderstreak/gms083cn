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
	Author : Traitor
	NPC Name: 		Neinheart
	Map(s): 		Ereve
	Description: 		Quest - Time to Choose
	Quest ID : 		20100
*/

var status = -1;

function start(mode, type, selection) {
    if (mode > 0)
        status++;
    else {
        qm.dispose();
        return;
    }
    if (status == 0)
        qm.sendAcceptDecline("啊，你回来了。我看得出来你现在已经10级了。看来你对成为骑士的基本训练已经完成了，到了做决定的时候了。");
    else if (status == 1) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        
        qm.sendOk("现在往左看。骑士一共有五种职业分支供你选择。你只需要从中选择一个。他们五个都会详细告诉你各个骑士都是什么样的，你要自己做出选择。");
    } else if (status == 2) {
		// qm.warp(913040100, 0);
        qm.dispose();
    }
}