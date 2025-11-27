function enter(pi) {
	if(pi.isQuestStarted(22010) || pi.getPlayer().getJob().getId() != 2001) {
		pi.playPortalSound(); pi.warp(100030310, 0);
	} else {
		pi.playerMessage(5, "没有理由不能进入繁茂的森林。");
	}
	return true;
}