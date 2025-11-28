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

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1){
        if (mode == 0 && type == 1)
            qm.sendNext("出门在外没有一把神器能行吗?");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.sendNext("嗯..年轻人，你鬼鬼祟祟地在干什么?");
    } else if(status == 1) {
        qm.sendNextPrev("老头，我想要最强的武器！", 2);
    } else if(status == 2) {
        qm.sendNextPrev("最强的武器? 你现在的武器不好使吗...？");
    } else if(status == 3) {
        qm.sendNextPrev("我听说你是天下第一铁匠!我想请你为我打造一把武器!", 2);
    } else if(status == 4) {
        qm.sendAcceptDecline("我老了，已经造不动了，但是…我还有一把很久以前亲自打造的剑。但我不能给你，因为那把剑过于锋利，甚至会伤到它的主人。你还想要吗?");
    } else if(status == 5) {
        qm.sendOk("好吧，我会给你一个测试，如果你能通过，这把剑就是你的了。前往#b 训练中心 #k 并接受那里 #r伤痕累累的熊#k 的任务。 带回#b30张票.#k");
    } else if(status == 6) {
        qm.startQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1){
        if (mode == 0 && type == 1)
            qm.sendNext("这把神器削铁如泥，你就说你要不要吧。");
        qm.dispose();
        return;
    }
    if (status == 0) {
        if(qm.haveItem(4032311, 30))
            qm.sendNext("你带来了 #t4032311#?你敢于接受这一危险武器，你的勇气令我印象深刻，#p1201001# 是你的了。  ");
        else{
            qm.sendNext("选择 30个 #t4032311#.");
            qm.dispose();
        }
    }else if (status == 1)
        qm.sendNextPrev("#b(过了许久, #p1203000# 小心翼翼的递给了你 #p1201001# )");
    else if (status == 2)
        qm.sendYesNo("给，这是 #p1201002#,收好它");
    else if (status == 3){
        //qm.showVideo("Polearm");
        qm.completeQuest();
        qm.removeAll(4032311);
        qm.dispose();
    }
}