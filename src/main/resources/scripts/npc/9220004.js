/** 
Happy - Happy ville 
@author Ronan
**/ 
var status = -1;
function start() { 
        action(1, 0, 0); 
} 
function action(mode, type, selection) { 
	if (mode == -1) { 
		cm.dispose(); 
	} else {
                if (status == 0 && mode == 0) { 
			cm.sendOk("你想说的时候再跟我说。"); //这很可能不是原版脚本。看起来像个打boss的粗糙脚本，跳过了。
			cm.dispose(); 
		} 
                if (mode == 1) 
                        status++; 
                else 
                        status--; 
                 
                if (status == 0) { 
                        cm.sendSimple("#b<Raid Quest: Happyville>#k\r\n袭击不过是许多人联合起来尝试击败极其强大的生物。这次也不例外。每个人都可以参与击败出现的生物。 你会怎么做？\r\n#b\r\n#L0#刷雪人。\r\n#L1#产卵丢失的鲁道夫。\r\n#L2#没什么，就在放松。#k");
                } else if(status == 1) {
                        if(selection == 0) {
                                if(cm.getMap().getMonsters().size() > 1) {  //reactor as a monster? wtf
                                        cm.sendOk("消灭区域内的所有怪物，召唤雪人小孩。");
                                        cm.dispose();
                                        return;
                                }
                            
                                cm.getMap().spawnMonsterOnGroundBelow(9500317, 1700, 80);
                        } else if(selection == 1) {
                                if(cm.getMap().getMonsters().size() > 6) {  //reactor as a monster? wtf
                                        cm.sendOk("这地方现在太拥挤了。在再次尝试之前先消灭一些怪物。");
                                        cm.dispose();
                                        return;
                                }
                            
                                cm.getMap().spawnMonsterOnGroundBelow(9500320, 1700, 80);
                        } else {
                                cm.sendOk("好。");
                        }
                        
                        cm.dispose();
                }
        }
} 