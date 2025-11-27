/**
 *
 * @author Arnah, Ronan
 */

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.forceCompleteQuest();

    var medalname = qm.getMedalName();
    qm.message("<" + medalname + "> 没有编码。");
    qm.earnTitle("<" + medalname + "> 已被授予。");
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();

    var medalname = qm.getMedalName();
    qm.message("<" + medalname + "> 没有编码");
    qm.earnTitle("<" + medalname + "> 已被授予。");
    qm.dispose();
}