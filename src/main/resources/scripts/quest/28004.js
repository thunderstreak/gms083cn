/*
    This file is part of the HeavenMS MapleStory Server
    Copyleft (L) 2016 - 2019 RonanLana

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

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if(mode == 0 && type > 0) {
            qm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            if(qm.getPlayer().getLevel() > 50) {
                qm.forceCompleteQuest();
                qm.dispose();
                return;
            }
            
            qm.sendNext("好吧... 这是一个打败史克鲁奇和粉碎他奸计的计划. 请在我将你传送过去后的地图上释放灵魂之力中的魔力. 为此你需要组建一个队伍并将你的队员带来这里!");
        } else if (status == 1) {
            qm.sendAcceptDecline("你想离开了吗?");
        } else if (status == 2) {
            var level = qm.getPlayer().getLevel();
            
            qm.warp(level <= 30 ? 889100000 : (level <= 40 ? 889100010 : 889100020));
            qm.dispose();
        }
    }
}
