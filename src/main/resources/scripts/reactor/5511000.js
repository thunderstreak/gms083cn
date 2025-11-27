/* @Author SharpAceX
* 5511000.js: Summons Targa.
*/

function summonBoss() {
        rm.spawnMonster(9420542,-527,637);
        rm.changeMusic("Bgm09/TimeAttack");
        rm.mapMessage(6, "小心!暴怒的塔格现身了！");
}

function act() {
	if (rm.getReactor().getMap().getMonsterById(9420542) == null) {
                rm.schedule("summonBoss", 3200);
	}
}