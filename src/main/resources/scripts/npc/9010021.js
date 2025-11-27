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
/* 9010021 - Wolf Spirit Ryko
    @author Ronan
 */
 var status;

function start() {
    status = -1;
    if (!Packages.config.YamlConfig.config.server.USE_REBIRTH_SYSTEM) {
        cm.sendOk("... 我从遥远的地方来协助对抗#r黑魔法师#k. 现在我在找我的主人，你看见他了吗？");
        cm.dispose();
        return;
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("当你想转生的时候来找我。你目前总共有#r" + cm.getChar().getReborns() + " #k次转生。");
    } else if (status == 1) {
        cm.sendSimple("你今天想让我做什么: \r\n \r\n #L0##b我想转生#l \r\n #L1##b下次吧#k#l");
    } else if (status == 2) {
        if (selection == 0) {
            if (cm.getChar().getLevel() == 200) {
                cm.sendYesNo("你确定你想转生吗？");
            } else {
                cm.sendOk("你不是200级，当你达到200级时请回来。");
                cm.dispose();
            }
        } else if (selection == 1) {
            cm.sendOk("Ok Bye")
            cm.dispose();
        }
    } else if (status == 3 && type == 1) {
        cm.getChar().executeReborn();
        cm.sendOk("你现在已经转生了，总共有#r" + cm.getChar().getReborns() + "#k次转生");
        cm.dispose();
    }


}