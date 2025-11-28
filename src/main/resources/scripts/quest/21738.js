/*
    This file is part of the HeavenMS MapleStory Server
    Copyleft (L) 2016 - 2018 RonanLana

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
        
        if (status == 0) {  // thanks ZERO傑洛 for noticing this quest shouldn't need a pw -- GMS-like string data thanks to skycombat
            qm.sendNext("这是什么？我通常不欢迎不速之客，但你有一种神秘的气质，让我很好奇你要说什么。", 9);
        } else if (status == 1) {
            qm.sendNext("(你告诉她有关巨型捕食魔的事。)", 3);
        } else if (status == 2) {
            qm.sendNext("巨型盆栽死神？这绝对是个大问题，但我觉得还不足以真正影响奥比斯。等等，你刚才说巨型盆栽死神在哪里？", 9);
        } else if (status == 3) {
            qm.sendNext("被忽视的散步小径。", 3);
        } else if (status == 4) {
            qm.sendNext("...被忽视的小径？如果巨型盆栽怪在那里，就有人正在试图进入封印花园！但为什么呢？更重要的是，究竟是谁？", 9);
        } else if (status == 5) {
            qm.sendNext("封闭的花园？", 3);
        } else if (status == 6) {
            qm.sendAcceptDecline("我不能告诉你关于封印花园的事情。如果你想知道，我必须先看看你是否配得上这些信息。你介意让我看看你的命运吗？", 9);
        } else if (status == 7) {
            qm.sendOk("好了，现在让我们来看一下你的命运。等我一下。");
        } else if (status == 8) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}
