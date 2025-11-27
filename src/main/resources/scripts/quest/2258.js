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
            qm.sendAcceptDecline("#r猫鼬#k像野火一样传播谣言…通过勒索我和我的出租车服务，他们日复一日地抢走我的客户……嘿，别把这事告诉任何人，如果你帮我清理掉挡道的猫鼬，我就告诉你#r蘑菇城堡#k的事。你说呢？");
        } else if (status == 1) {
            qm.sendNext("很好，你有#r5分钟时间#k在这段时间内杀死#b40只猫鼬#k。祝你好运！");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
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
            qm.sendNext("你做到了！．．． 嘿，这里的#r猫鼬#k可能会听到我们的谈话。我现在不打算谈论这个。");
        } else if (status == 1) {
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}