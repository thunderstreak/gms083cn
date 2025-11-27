var status = -1;

function start(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	if (status == 0) {
		qm.sendNext("哟,主人。既然我已经向你展示了我的能力，现在轮到你了。证明给我看……你能找到食物！我饿死了。你现在可以用我的能力了，所以你得照顾好我。");
	} else if (status == 1) {
		qm.sendNextPrev("我还是不明白是怎么回事，但我不能让你这样可怜的小东西饿死，对吧？你是说食物？你想吃什么？", 2);
	} else if (status == 2) {
		qm.sendNextPrev("嗨，我几分钟前刚出生。我怎么知道我吃什么？我只知道我是龙……我是你的龙。你是我的主人。你一定要对我好！");
	} else if (status == 3) {
		qm.sendAcceptDecline("我想我们应该一起学习。但是我饿了。主人，我要吃的。记住，我是个婴儿！我马上就要哭了！");
	} else if (status == 4) {
		if (mode == 0) {
			qm.sendNext("*gasp* 你怎么能拒绝喂养你的龙？这是虐待儿童！ ");
		} else {
			qm.forceStartQuest();
			qm.sendOk("#b#b(#p1013000# 幼龙看起来非常饥饿。你必须喂他。也许你爸爸可以给你一些建议，告诉你龙吃什么。)");
		}
	} else if (status == 5) {
                qm.dispose();
        }
}