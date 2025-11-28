/*
        NPC Name:               Nineheart
        Description:            Quest - Are you sure you can leave?
*/

var status = -1;

function start(mode, type, selection) {
    if(mode == -1 || mode == 0 && type > 0) {
        qm.dispose();
        return;
    }
    
    if (mode == 1) {
        status++;
    } else {
        if (status == 1) {
            qm.sendNext("你没有意识到你还不够强大。。。假如我现在要派你去维多利亚岛的话。。。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendNext("你终于在训练中成为了一名骑士，我有个事情想交代你，但你看起来还是缺点火候。你确定你能胜任去维多利亚岛的任务吗?");
    } else if (status == 1) {
        qm.sendAcceptDecline("去不去维多利亚岛由你决定，但你是骑士团的一员，如果任务失败了会败坏骑士团的名声。作为这个岛上的首席战术家，我不能让这种事发生，所以，我要你继续训练直到时机成熟.");
    } else if (status == 2) {
        qm.forceCompleteQuest();
        qm.sendNext("#p1102000#, 你的训练教练，将帮助你训练成为一个有用的骑士。一旦你达到13级，我会给你分配一两个任务。所以在那之前，请继续训练.");
    } else if (status == 3) {
        qm.sendPrev("哦，如果你和 #p1101001# 交谈, 她会给你一些祝福。对你的旅途一定有帮助.");
    } else if (status == 4) {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}