function enter(pi) {	
    if (pi.isQuestStarted(21201) || pi.isQuestStarted(21302)) { //aran first job
    	pi.playPortalSound();
    	pi.warp(140030000, 1);
    	return true;
    } else {
        pi.playerMessage(5, "好像有什么东西挡住了这个传送门！");
        return false;
    }

}