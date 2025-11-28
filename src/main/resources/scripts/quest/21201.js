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
    if (mode == -1) {
        qm.sendNext("至少你尝试过了...");
        qm.dispose();
    } else {
        if(mode == 0 && type > 0) {
            qm.sendNext("bang bang");
            qm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0)
            qm.sendNext("当初你说要打败黑法师，让我成为O G 矛。在那之后又抛弃了我数百年，现在却说不记得我了?!你以为我会放过你吗?I'm Gonna ki*l You!"); //Giant Polearm
        else if (status == 1)
            qm.sendNextPrev("我确实告诉 #p1203000# ，如果我能证明自己的价值，就给我做一个长矛。", 2);
        else if (status == 2)
            qm.sendNextPrev("我帮你搞定了黑法师，你就不该对我多一点爱与尊重吗?像我这样的稀世武器 #p1201001# Save Your Ass。你却扔下我几百年?");
        else if (status == 3)
            qm.sendNextPrev("我可没求过你", 2);
        else if (status == 4)
            qm.sendNextPrev("什么? 你没求过我? #p1203000# 告诉我当时你跪下来，流着泪向我乞求...战神，My dog!你好好想一想,Ok?");
        else if (status == 5)
            qm.sendNextPrev("欸！？等等...你是天地间最吊的武器，你是吊矛！！", 2);
        else if (status == 6)
            qm.sendNextPrev("对对！Finally！！太好了...！Wait...我知道了，黑法师的诅咒对你影响太大了，导致你现在不举……而且脑子也不好使了，不过你还记得我!说明记忆开始慢慢恢复了，Koo!");
        else if (status == 7)
            qm.sendAcceptDecline("My man，就算是失去了记忆，但是既然你能认出我来了，那就还是我的Homie。我们可以进行艰苦的训练，恢复你的男儿本色。Family Ares's here!");
        else if (status == 8) {
            if(!qm.isQuestCompleted(21201)) {
                if(!qm.canHold(1142130)) {
                    qm.sendOk("你的#b背包#k满了。至少需要一个空位来完成这个任务。");   // thanks MedicOP for finding an issue here
                    return;
                }

                qm.gainItem(1142130, true);
                qm.changeJobById(2110);
                
                if (Packages.config.CommonConfig.config.server.useFullAranSkillSet) {
                    qm.teachSkill(21100000, 0, 20, -1);   //polearm mastery
                    qm.teachSkill(21100002, 0, 30, -1);   //final charge
                    qm.teachSkill(21100004, 0, 20, -1);   //combo smash
                    qm.teachSkill(21100005, 0, 20, -1);   //combo drain
                }

                qm.completeQuest();
            }

            qm.sendNext("恢复需要过程，一步一步升级。Keep Real，重振雄风！");
        } else if (status == 9) {
            qm.dispose();
        }
    }
}