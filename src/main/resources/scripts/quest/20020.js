/*
	NPC Name: 		Nineheart
	Description: 		Quest - Cygnus movie Intro
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.sendOk("在你决定了你真正想转职的职业之后再跟我说。在你选择之前，你都不会错过或失去选择的权力，所以不要太紧张...");
        qm.dispose();
    } else {
        if(mode == 0 && type > 0 || selection == 1) {
            qm.sendOk("在你决定了你真正想做什么之后再跟我说。在你选择之前，你都不会错过或失去选择的权力，所以不要太紧张...");
            qm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            qm.sendNext("我看你已经达到10级了，你的努力没有白费，我想现在是时候让你正式转职，成为一名真正的骑士了。不过，在这之前，我想问你一件事。你决定要成为哪种骑士了吗?");
        } else if (status == 1) {
            qm.sendNextPrev("一旦做出选择之后就无法反悔。事实上，有五种不同类型的骑士，这取决于你选择你想走哪条路，为了让你更好地做出选择。所以。。。我可以向你展示你成为骑士后的样子.");
        } else if (status == 2) {
            qm.sendSimple("你怎么想？心里是否已经有答案了？如果你已经决定好要成为什么样的骑士，那么你就不必去看它了…\r\n\r\n#b#L0#让我看看我作为骑士领袖的样子.#l ..#b#L1#不，我没事.");
        } else if (status == 3) {
            qm.sendYesNo("你想现在亲自看看吗？很快就会有一个短片出来。为你即将见证的事情做好准备.");
        } else if (status == 4) {
            qm.forceStartQuest();
            qm.forceCompleteQuest();
            qm.warp(913040100, 0);
            qm.dispose();
        }
    }
}
