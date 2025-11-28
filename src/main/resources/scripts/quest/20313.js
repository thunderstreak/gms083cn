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
/* Author: 		ThreeStep
	NPC Name: 		Irena (1101005)
	Description: 	Wind Archer 3rd job advancement
	Quest: 			Shinsoo's Teardrop
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (status == 1 && mode == 0) {
            qm.sendNext("我猜你还没准备好.");
            qm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("你所带回来的宝石是神兽的眼泪，它拥有非常强大的力量。如果被黑磨法师给得手了，那我们全部都可能要倒大楣了...");
        } else if (status == 1) {
            qm.sendYesNo("女皇为了报答你的努力，将任命你为皇家骑士团的上级骑士，你准备好了嘛?");
        } else if (status == 2) {
            nPSP = (qm.getPlayer().getLevel() - 70) * 3;
            if (qm.getPlayer().getRemainingSp() > nPSP) {
                qm.sendNext("请在二转技能上分配完所有SP点数。");
            } else {
                if (!qm.canHold(1142068)) {
                    qm.sendNext("现在授予你高级骑士勋章。从这一刻起，你应随身携带勋章并时刻牢记自己的使命.");
                } else {
                    qm.completeQuest();
                    qm.gainItem(1142068, 1);
                    qm.getPlayer().changeJob(Packages.client.MapleJob.WINDARCHER3);
                    qm.sendOk("请先把道具栏空出一些空间哦.");
                }
            }
        } else if (status == 3) {
            qm.dispose();
        }
    }
}