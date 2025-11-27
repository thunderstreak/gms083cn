var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("嘿!你能帮我个忙吗？ #p20000#最近似乎有点奇怪……");
	} else if (status == 1) {
		qm.sendNext("他以前总是愁眉苦脸地抱怨他的关节炎，直到最近，但他突然变得开心和微笑！！");
	} else if (status == 2) {
		qm.sendNext("我有一种感觉，那木盒后面有一个秘密。你能偷偷看一下#p20000#旁边的木箱吗？");
	} else if (status == 3) {
		qm.sendNext("你知道#p20000#在哪里，对吧？他在右边。一直往前走，直到你看到维金在哪里，然后向下经过悬挂着的鲨鱼和章鱼，你就会看到约翰。盒子应该就在他旁边。");
	} else if (status == 4) {
                qm.forceStartQuest();
		qm.dispose();
        }
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.gainExp(200);
	qm.dispose();
}