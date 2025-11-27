/*
Dragon nest
*/

function sendToHeaven() {
    rm.spawnNpc(2081008);
    rm.startQuest(100203);
    rm.mapMessage(6, "在一闪一闪的光中，蛋成熟了，裂开了，于是诞生了一条容光焕发的小龙。");
}

function touch() {
    if(rm.haveItem(4001094) && rm.getReactor().getState() == 0) {
        rm.hitReactor();
        rm.gainItem(4001094, -1);
    }
}

function untouch() {}

function act() {
    sendToHeaven();     // thanks Conrad for pointing out the GMS-like way of Nine Spirit's Nest
}