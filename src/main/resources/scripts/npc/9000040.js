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
/* Dalair
	Medal NPC.

        NPC Equipment Merger:
        * @author Ronan Lana
 */

importPackage(Packages.client.processor.action);
importPackage(Packages.config);

var status;
var mergeFee = 50000;
var name;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if(status == 0) {
            if (!Packages.config.YamlConfig.config.server.USE_ENABLE_CUSTOM_NPC_SCRIPT) {
                cm.sendOk("勋章排名系统目前不可用......");
                cm.dispose();
                return;
            }

            var levelLimit = !cm.getPlayer().isCygnus() ? 160 : 110;
            var selStr = "勋章排名系统目前不可用......因此，我正在提供#b装备融合#k服务！";//？？？这是在做什么，跳过了
            
            if (!YamlConfig.config.server.USE_STARTER_MERGE && (cm.getPlayer().getLevel() < levelLimit || MakerProcessor.getMakerSkillLevel(cm.getPlayer()) < 3)) {
                selStr += "但是, 你必须有 #rMaker level 3#k 和至少 #rlevel 110#k (Cygnus Knight), #rlevel 160#k （其他类）和 #r" + cm.numberWithCommas(mergeFee) + " 金币#k 使用该服务。";
                cm.sendOk(selStr);
                cm.dispose();
            } else if (cm.getMeso() < mergeFee) {
                selStr += "对不起，这项服务需要 #r" + cm.numberWithCommas(mergeFee) + " 金币#k, 很遗憾，您现在似乎没有……请稍后再来。";
                cm.sendOk(selStr);
                cm.dispose();
            } else {
                selStr += "费用 #r" + cm.numberWithCommas(mergeFee) + "#k 金币, 将背包中不必要的装备与当前装备合并，以提升装备属性，属性提升取决于用于合并的物品属性！";
                cm.sendNext(selStr);
            }
        } else if(status == 1) {
            // #rWARNING#b: Make sure you have your items ready to merge at the slots #rAFTER#b the item you have selected to merge.#k Any items #bunder#k the item selected will be merged thoroughly.\r\n\r\nNote that equipments receiving bonuses from merge are going to become #rUntradeable#k thereon, and equipments that already received the merge bonus #rcannot be used for merge#k.\r\n\r\n
            selStr = "#rWARNING#b: 确保你的物品在你选择要合并的物品后的槽处准备好合并。#k 以下#b任何项目#k选中的项目将被完全合并.\r\n\r\n请注意，从合并中获得奖励的装备将成为#r不可交易#k，并且已经获得合并奖励的装备不能用于合并#k.\r\n\r\n";
            cm.sendGetText(selStr);
        } else if(status == 2) {
            name = cm.getText();
            
            if (cm.getPlayer().mergeAllItemsFromName(name)) {
                cm.gainMeso(-mergeFee);
                cm.sendOk("合并完成!感谢您使用该服务，并享受您的新设备状态。");
            } else {
                cm.sendOk("在你的#b装备栏#k没有找到#b'" + name + "'#k这个装备!");
            }
            
            cm.dispose();
        }
    }
}
