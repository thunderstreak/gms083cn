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
	Author : Biscuit
*/
var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
		if(type == 1 && mode == 0) {
			qm.dispose();
			return;
		}else{
			qm.dispose();
			return;
		}
	}
	
	if (status == 0) {
		qm.sendNext("哇，你已经到了50级了，为什么你还那样到处走？我的意思是，你已经达到50级了，但你仍然用自己的脚在走路。这不应该，也不科学。");
	} else if (status == 1) {
		qm.sendAcceptDecline("好吧，这取决于你，但这样做也有可能损害骑士团的尊严和荣誉，也影响你个人的效率。所以我再次给你介绍一个好东西，它叫“越野车”，你当然对这个感兴趣，对吧?");
	} else if (status == 2) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.sendOk("这里有一种骑士团才能享受到的特殊坐骑. 如果您感兴趣, 去问问 #b埃雷夫#k. 他会给你提供更多的信息.");
	} else if (status == 3) {
            qm.dispose();
        }
}