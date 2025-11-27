importPackage(Packages.server.life);

function start(ms) {
        var pos = new java.awt.Point(251, -841);
	var mobId = 9400613;
        var mobName = "沃勒福";

	var player = ms.getPlayer();
	var map = player.getMap();

	if(map.getMonsterById(mobId) != null){
		return;
	}

	map.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mobId), pos);
	player.message(mobName + "出现了！");
}