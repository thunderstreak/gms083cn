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
	Author : Generic
	NPC Name: 		Kiku
	Map(s): 		Empress' Road : Training Forest I
	Description: 		Quest - The Path of a Knight
	Quest ID : 		20000
*/

var status = -1;
var choice1;

function start(mode, type, selection) {
    if (mode < 1) {
        qm.dispose();
    } 
    else if (mode > 0)
        status++;
    if (status == 0)
        qm.sendSimple("你准备好执行任务了吗？如果你不能通过这个测试，那就无法成为真正的骑士。你确定你能做到吗？如果你害怕了现在可以退出，我不会告诉南哈特的。 \r\n #L0#让我想一想。。。.#l \r\n #L1#我不怕，我要当骑士！#l");
    else if (status == 1) {
        if (selection == 0) {
            qm.sendNext("如果不想放弃，那就别犹豫。向大家证明你的实力。");
            qm.dispose();
        } else if (selection == 1) {
            choice1 = selection;
            qm.sendSimple("我很高兴你没有临阵脱逃，但我还是得确认一下。。。你确定你想成为骑士团的一员吗？我想说的是，加入了冒险骑士团，意味着要担负起守卫皇后和保护枫叶世界的重担？她虽然是皇后，但她还是个孩子。你确定你能为她而战吗？我不会告诉南哈特的，你可以把你的真实感受告诉我。 \r\n #L2#只要是为了枫叶世界的和平，我愿意。#l \r\n #L3#只要能成为一名骑士，我会担负起这一切。 #l");
            qm.forceStartQuest();
            qm.forceCompleteQuest();
        }
    } else if (status == 2) {
        qm.dispose();
    }
}