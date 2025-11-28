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
importPackage(Packages.client);
importPackage(Packages.config);

status = -1;

function start(mode, type, selection) {
    status++;
    if(mode == 0 && type == 0)
        status -= 2;
    else if (mode != 1) {
        if (mode == 0)
            qm.sendNext("#b(你需要考虑一下...)#k");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.sendYesNo("#b(你确定你就是拥有 #p1201001# 的英雄吗? 肯定是的，快去紧紧抓住 #p1201001# 吧，它会回应你的！)#k");
    } else if (status == 1) {
        if (qm.getPlayer().getJob().getId() == 2000) {
            if(!qm.canHold(1142129)) {
                    qm.sendOk("你的 #b背包#k 已经满了，需要至少1个空位来完成任务。");
                    qm.dispose();
                    return;
            }
            qm.gainItem(1142129, true);
            
            qm.changeJobById(2100);
            qm.resetStats();
            
            if (Packages.config.CommonConfig.config.server.useFullAranSkillSet) {
                qm.teachSkill(21000000, 0, 10, -1);   //combo ability
                qm.teachSkill(21001003, 0, 20, -1);   //polearm booster
            }
            
            qm.completeQuest();

            //qm.getPlayer().changeSkillLevel(SkillFactory.getSkill(20009000), 0, -1);
            //qm.getPlayer().changeSkillLevel(SkillFactory.getSkill(20009000), 1, 0);
            //qm.showInfo("You have acquired the Pig's Weakness skill.");
            qm.sendNextPrev("#b(你开始回忆起一些事情...)#k", 3);
        }
    } else if (status == 2) {
        //qm.warp(914090100, 0);
        qm.dispose();
    }
}

function end(mode, type, selection) {
}