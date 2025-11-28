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
	Quest: Carson's Fundamentals of Alchemy
 */

var status = -1;

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
            qm.sendNext("我要教你炼金术的基本原理。");
        } else if (status == 1) {
            qm.sendNextPrev("虽然科学有助于从更深层的角度来看待物体的构成，但光靠科学是远远不够的。");
        } else if (status == 2) {
            qm.sendNextPrev("事实上，要能够以‘元素’层面来构成为一个整体，应该怎么做？以铁匠的粗犷方式来操作显然不够纯粹。");
        } else if (status == 3) {
            qm.sendNextPrev("炼金术可以用于这个任务。干净利落，#r通过各种元素的拆解重组，几乎没有任何缺点#k, 如果操作得当，甚至可以在没有废料的情况下完成整个过程。掌握它需要一段时间，但一旦学成将受用终身。");
        } else if (status == 4) {
            qm.sendNextPrev("记住这句格言#b物质交换#k,炼金术基本原理中，元素是流动的,它只能从一种形式转化成另一种形式，任何物品都不能从无到有。理解？");
        } else if (status == 5) {
            qm.gainMeso(-10000);
            
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}