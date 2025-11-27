importPackage(Packages.server.life);

function start(ms) {
        var pos = new java.awt.Point(467, 0);
	var mobId = 9400610;
        var mobName = "黑暗独角兽";

	var player = ms.getPlayer();
	var map = player.getMap();

	if(map.getMonsterById(mobId) != null){
		return;
	}

	map.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mobId), pos);
	player.message(mobName + "出现了！");
}