function enter(pi) {
    if (pi.getMap().getReactorByName("jnr3_out1").getState() == 1) {
	pi.playPortalSound(); pi.warp(926110201, 0);
        return true;
    } else {
	pi.playerMessage(5, "仓库门尚未开启。");
        return false;
    }
}