function enter(pi) {
    if (pi.hasItem(4032120) || pi.hasItem(4032121) || pi.hasItem(4032122) || pi.hasItem(4032123) || pi.hasItem(4032124)) {
        pi.playerMessage(5, "你已经有资格证明了。");
        return false;
    }
    if (pi.isQuestStarted(20601) || pi.isQuestStarted(20602) || pi.isQuestStarted(20603) || pi.isQuestStarted(20604) || pi.isQuestStarted(20605)) {    	
        if (pi.getPlayerCount(913010200) == 0) {
            var map = pi.getMap(913010200);
            map.killAllMonsters();  
            pi.playPortalSound(); pi.warp(913010200, 0);
            pi.spawnMonster(9300289, 0, 0);
            return true;
        } else {
            pi.playerMessage(5, "有人已经在试图打败Boss了。最好晚点再来。");
            return false;
        }
    } else {
    	pi.playerMessage(5, "进入3号大厅的唯一方法是你正在训练100级技能。");
        return false;
    }
}