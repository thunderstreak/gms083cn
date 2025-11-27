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
            qm.sendNext("Aran, I've discovered some disturbing news... You said you've come from the eastern forest section, right? We traced and studied the magic being used to support the portal over there. It turns out that's of a #rtemporal#k-type. The garments you're using... They were never seen around before. That must mean, #ryou must have come from the future#k.");
        } else if (status == 1) {
            qm.sendNext("现在说说这个问题：印石似乎在你的时间线里不见了……这是一个强大的神器，阻止#r黑魔法师#k的军队围攻我们的世界。 如果那块石头消失了，就再没有什么能阻止他了。由于这是非常重要的事情，从未来找到#r自我#k吧。 I'm actually a #rfairy#k with a great life expectancy, I must be alive even on your timeline. Got it, #rfetch the me from the future#k!");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}
