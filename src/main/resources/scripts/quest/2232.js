var status = -1;

function start(mode, type, selection) {
    var familyEntry = qm.getPlayer().getFamilyEntry();
    if (familyEntry != null && familyEntry.getJuniorCount() > 0) {
        qm.forceCompleteQuest();
        qm.gainExp(3000);
        qm.sendNext("好工作!");
    } else {
        qm.sendNext("我看到你还没有成功找到一位初级员工，好吗？");
    }
    qm.dispose();
}

function end(mode, type, selection) {
    var familyEntry = qm.getPlayer().getFamilyEntry();
    if (familyEntry != null && familyEntry.getJuniorCount() > 0) {  // script found thanks to kvmba
        qm.forceCompleteQuest();
        qm.gainExp(3000);
        qm.sendNext("好工作!");
    } else {
        qm.sendNext("我看到你还没有成功找到一位初级员工，好吗？");
    }
    qm.dispose();
}