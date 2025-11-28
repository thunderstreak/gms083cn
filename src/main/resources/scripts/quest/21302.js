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

var status = -1;

function end(mode, type, selection) {
    status++;
    if (mode != 1){
        if (mode == 0 && type == 1)
            qm.sendNext("嘿！至少你试过了!");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.sendNext("（要不要再组织一下去冰里重新挖一个战神呢...？）\r\n啊，怎么样了。。。My Dog，玉的事情搞定了吗？"); //Giant Polearm
    } else if (status == 1) {
        qm.sendNextPrev("Finally！好！现在我重新安上红玉了，让我来唤醒你更多的能力。自从我们上次见面以来，你的水平提高了不少，所以我相信这次还能有提升的空间!");
    } else if (status == 2) {
        if(!qm.isQuestCompleted(21302)) {
            if(!qm.canHold(1142131)) {
                qm.sendOk("哇，您的 #b装备#k 背包满了。我需要至少1个空位.");
                qm.dispose();
                return;
            }
            
            if(qm.haveItem(4032312, 1)) {
                qm.gainItem(4032312, -1);
            }
            
            qm.gainItem(1142131, true);
            qm.changeJobById(2111);
            
            if (Packages.config.CommonConfig.config.server.useFullAranSkillSet) {
                qm.teachSkill(21110002, 0, 20, -1);   //full swing
            }

            qm.completeQuest();
        }
        
        qm.sendNext("来吧，继续训练，这样就能解锁你自己的全部能力，Later Homie!");
    } else if (status == 3) {
        qm.dispose();
    }
}