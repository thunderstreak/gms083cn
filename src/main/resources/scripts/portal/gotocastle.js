function enter(pi) {
    if (pi.isQuestCompleted(2324)) {
        pi.playPortalSound(); pi.warp(106020501,0);
        return true;
    } else {
        pi.playerMessage(5, "前面的小路长满了蔓生的藤刺，只有刺清除器才能清除这些刺……");
        return false;
    }
}