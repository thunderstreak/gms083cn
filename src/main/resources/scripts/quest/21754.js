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
            if(!qm.canHold(4032328, 1)) {
                qm.sendNext("嗯，我需要你为我要给你的一封信，背包其他栏空出一个空间。");
                qm.dispose();
                return;
            }
            
            qm.sendNext("给，拿着这个。送到#r#p1002104##k，它包含了保护这个世界的相关事项。请遵从这一要求。");
        } else if (status == 1) {
            qm.forceStartQuest();
            
            qm.gainItem(4032328, 1);
            qm.dispose();
        }
    }
}