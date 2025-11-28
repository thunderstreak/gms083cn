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
            qm.sendNext("啊额... 雪人 #b#t4032339##k 刚刚被抢劫了! 悲剧啊, 雪人好不容易才弄到手的施华洛世奇红宝石,千辛万苦却为他人做嫁。。。", 9);
        } else if (status == 1) {
            qm.sendNext("额，我刚好路过，听到你在吱哇乱叫。我外号三重战狼之正义的化身，告诉我小偷去哪了?", 3);
        } else if (status == 2) {
            qm.sendNext("哇，战狼大官人。。。你可得帮帮我，小偷刚从西边的门前走过，把#i4032339##k 拿回来，雪人的幸福就靠你了！", 9);
        } else if (status == 3) {
            qm.sendNext("《任何邪恶终将被绳之以法!》", 3);
        } else if (status == 4) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}
