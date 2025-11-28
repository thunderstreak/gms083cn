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
/*	
	Author : 		Generic
	NPC Name: 		Neinheart
	Map(s): 		Ereve: Empress' Road
	Description: 		Quest - Neinheart the Tactician
	Quest ID: 		20001
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0)
            qm.sendNext("你好, #h #. 我正式欢迎你加入骑士团。我叫南哈特·冯·鲁比斯汀，皇后的首席战术师。从现在起我们会经常接触，所以我建议你记住我的名字。哈哈。。。");
        else if (status == 1)
            qm.sendNextPrev("我知道你没有足够的时间弄清楚作为骑士你需要做什么。我会一个接一个地详细地告诉你。我会解释你在哪里，年轻的皇后是谁，我们的职责是什么。。。");
        else if (status == 2)
            qm.sendNextPrev("你身处在一个叫做埃雷夫的岛上，这是一个由皇后统治的陆地，漂浮在空中。是的，此时此刻正漂浮在空中。我们并不是非得要住在这里，但为了工作需要，我们现在像乘坐着一艘船，在枫叶世界里漂流...");
        else if (status == 3)
            qm.sendNextPrev("年轻的皇后的确是枫叶世界的统治者，也是这个世界唯一的统治者。什么？你从没听说过这样的事？啊，这是可以理解的。年轻的皇后虽然统治这个世界，但她不是一个传统意义上的统治者。她以埃雷夫为媒介，以观察员的身份监督着世界，而不是在陆地上亲力亲为...");
        else if (status == 4)
            qm.sendNextPrev("但时不时也会出现需要她去控制的情况。邪恶的黑魔法师在世界各处招兵买马。正是毁灭之王要威胁毁灭我们的世界，它正蠢蠢欲动.");
        else if (status == 5)
            qm.sendNextPrev("问题是，人们还不知道问题的严重性。距离上次抵抗黑魔法师已经过去很久了，人们已经习惯了世界的和平，不一定知道如果危机来临该怎么办。如果这种情况继续下去，我们的世界将很快面临严重的危险.");
        else if (status == 6)
            qm.sendNextPrev("因此，年轻的皇后决定在这场潜在的危机暴露出来之前挺身而出，控制住它。她决定建立一个骑士团，来抵抗黑魔法师。我相信你已经知道我们的职责.");
        else if (status == 7)
            qm.sendNextPrev("我们的职责很简单。我们需要让自己变得更强大；比我们现在的状态强大得多，这样当黑魔法师回来时，我们将与他战斗，并在他把整个世界置于严重危险之前彻底消灭他。这是我们的目标，我们的使命。");
        else if (status == 8)
            qm.sendAcceptDecline("这就是目前的情况. 明白了吗?");
        else if (status == 9) {
            if (qm.isQuestCompleted(20001)) {
                qm.gainExp(40);
                qm.gainItem(1052177, 1); // fancy noblesse robe
            }
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.sendNext("我很高兴你明白我所说的，但是。。。你知道吗？目前你的等级，还不足以面对黑法师。甚至，你还不能够战胜他的手下！你确定你准备好保护枫叶世界了吗?");
        } else if (status == 10)
            qm.sendNextPrev("也许你想加入骑士团，但是目前的你还不够。你还没有经过系统的训练。也许你可以混个文职做文书工作，但是...");
        else if (status == 11)
            qm.sendNextPrev("但话又说回来，没有人天生强壮。与其寻找一个超自然的天才骑士，还不如创造一个环境，培养和训练出强大的骑士，。现在，你必须在训练中成为一名合格的骑士，让自己变得更加强大，这样你以后会变得有用。");
        else if (status == 12)
            qm.sendPrev("从左边的入口一直走，然后朝前走 #b 训练林1 # . 在那里，你会找到骑士队的训练教练，基库。下次见到你，我希望你至少等级达到10级.");
    }
}