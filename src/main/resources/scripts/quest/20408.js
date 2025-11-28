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

function start(mode, type, selection) { // missing script for questid found thanks to Lost(tm)
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
            qm.sendNext("#h0#... 谢谢，谢谢你的出色工作。如果不是你，我。。。我会落入黑巫婆的诅咒。非常感谢你.");
        } else if (status == 1) {
            qm.sendNextPrev("这么长时间了，从你做了这么多事情来看，你的的确确付出了无数心血来修炼和提升自己，为骑士团做出很大的贡献.");
        } else if (status == 2) {
            qm.sendAcceptDecline("为了勉励你的努力和成就。。。我想授予你一个新的头衔，为你加冕荣誉。比如。。。这个?");
        } else if (status == 3) {
            if (!qm.canHold(1142069, 1)) {
                qm.sendOk("请确认你的背包有足够空间.");
                qm.dispose();
                return;
            }

            qm.gainItem(1142069, 1);
            if (qm.getJobId() % 10 == 1) {
                qm.changeJobById(qm.getJobId() + 1);
            }

            qm.forceStartQuest();
            qm.forceCompleteQuest();

            qm.sendOk("#h0#. 为了骑士团能更好地对抗黑魔法师，从现在起，我将任命你为骑士团的新首席骑士，请运用好你的才智与力量来保护枫叶世界。");
        } else if (status == 4) {
            qm.dispose();
        }
    }
}
