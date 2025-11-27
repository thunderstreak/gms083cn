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
/*	
	Author : 		Ronan
	NPC Name: 		Find the Crumpled Piece of Paper Again
	Map(s): 		Hut in the Swamp
	Description: 		Quest - The Run-down Huts in the Swamp
	Quest ID: 		2215
*/

var status = -1;
var canComplete;

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
            var hourDay = qm.getHourOfDay();
            if(!(hourDay >= 17 && hourDay < 20)) {
                qm.sendNext("(嗯，我在垃圾桶里找，但是找不到JM说的#t4031894，也许还不是时候…)");
                canComplete = false;
                return;
            }
            
            if(qm.getMeso() < 2000) {
                qm.sendNext("(哦，我还没有合计的费用数额。)");
                canComplete = false;
                return;
            }
            
            if(!qm.canHold(4031894, 1)) {
                qm.sendNext("(嗯，我现在不能用#t4031894#，我需要一个可用的背包其他插槽。)");
                canComplete = false;
                return;
            }
            
            canComplete = true;
            qm.sendNext("(好吧，现在我把费用存进去，然后拿报纸……就是这样，是的，就这样。)");
        } else if (status == 1) {
            if (canComplete) {
                qm.gainMeso(-2000);
                qm.forceCompleteQuest();
                qm.gainItem(4031894, 1);
            }
            
            qm.dispose();
        }
    }
}