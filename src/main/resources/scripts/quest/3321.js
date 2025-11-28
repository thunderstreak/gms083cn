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

importPackage(Packages.client);

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
            qm.sendNext("如你现在所知，我是德朗博士。我曾经是阿尔卡多社会中有影响力的炼金术士，由于我做实验失败导致的灾难，现在玛加提亚到处都是我酿的苦果。");
        } else if (status == 1) {
            qm.sendNextPrev("类疱疹是我的发明，最初是为了满足国内科学和军事的需要，但是他们的主要处理单元芯片上的一个严重的故障使他们变得不稳定和暴力，迅速引起了各地的动乱和破坏。因此，我被剥夺了阿尔卡多的炼金术士和研究员的身份，并且对我下发了逮捕令。");
        } else if (status == 2) {
            qm.sendAcceptDecline("即便如此，我也没有懈怠！我的创造物每天仍在四处游荡，造成破坏和伤亡，没有把他们赶出城市的希望！他们自我复制得太快，普通武器根本无法阻止他们。从那以后，我一直在不懈地研究一种方法，让他们一下子关闭，试图找到一种方法来阻止这种疯狂。你能理解我的处境吗？");
        } else if (status == 3) {
            qm.sendNext("感谢您理解我的观点。你一定见过帕文，因为你知道我在哪儿。他了解目前的情况。");
        } else if (status == 4) {
            qm.sendNext("哦，还有一个事情，我很担心我的妻子， #b#p2111004##k. 自从赫鲁兹事件发生后，我都没能和她好好说说话。。。拜托，如果可以的话，你能把#b银色吊坠#k从我#b家里#k找到,替我把它给她吗？我很遗憾没有马上把这个东西给她，那是她的生日。。。也许现在就给她，至少能让她睡个好觉。");
        } else if (status == 5) {
            qm.sendNext("#r一定要记住！#k 我把吊坠藏在家里的一个容器里#b在水管后面#k.管子必须转动#b整齐#k:上，下，中。然后，输入密码：#r我的爱人菲莉娅#k'.");
            qm.forceStartQuest();
        } else if (status == 6) {
            qm.dispose();
        }
    }
}