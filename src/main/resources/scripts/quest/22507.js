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
		qm.sendNext("我就知道!我们之间肯定是有某种联系的! 当你变强的时候,我也会跟着变强.而当我变强的同时也会增强你的力量! 这是我们的某种契约. 我就知道我选对了大佬!");
	} else if (status == 1) {
		qm.sendNextPrev("#b原来如此!那我们是怎么达成契约的?", 2);
	} else if (status == 2) {
		qm.sendNextPrev("我也不知道. 我真的想不起来了...我只是隐隐约约记得, 当时你在迷雾森林里看到我时很惊讶. 紧接着我对你呼喊...");
	} else if (status == 3) {
		qm.sendNextPrev("#b#b(等等! 这听起来像你曾经做过的一个梦... 难道你们曾经在梦中相遇? 有没有可能当时你看到的那条巨龙就是...#p1013000#?)", 2);
	} else if (status == 4) {
		qm.sendNextPrev("大佬, 你和我之间是有着命运的羁绊的. 我们命中注定相遇并彼此吸引. 所以当时才会有那种奇怪的感觉。");
	} else if (status == 5) {
		qm.sendNextPrev("#b奇怪的感觉?", 2);
	} else if (status == 6) {
		qm.sendNextPrev("你不记得了吗? 当时你看到我然后碰了我一下, 就是那一瞬间我们在精神上融为了一体.");
	} else if (status == 7) {
		qm.sendNextPrev("#b融为了...一体?", 2);
	} else if (status == 8) {
		qm.sendNextPrev("是的! 精神契约! 你和我有着不同的身体,但精神上却是一体的.这就是为什么我变强的同时你也会变强, 反过来也一样! 这很酷, 不是吗?");
	} else if (status == 9) {
		qm.sendNextPrev("#b我不懂你在说些什么, 但这听起来很哇噻.", 2);
	} else if (status == 10) {
		qm.sendNextPrev("这当然很哇噻了我的傻大哥! 从今以后就由我来罩着你! 我们现在就去冒险吧!");
	} else if (status == 11) {
		qm.sendNextPrev("#b但是这周围很平静,不像有怪物的样子.", 2);
	} else if (status == 12) {
		qm.sendNextPrev("啊?! 那可太没劲儿了! 以后我们要一起并肩作战, 勇闯天涯!");
	} else if (status == 13) {
		qm.sendNextPrev("#b但这并不是我预想中的人生. 我原本也只是个普普通通的农村小孩...", 2);
	} else if (status == 14) {
		qm.sendAcceptDecline("哈, 让我来告诉你吧. 你现在已经不是普普通通的农村小孩了，你是一名普普通通的农村龙神小孩,听起来很棒吧.在以后的征程里我会向你展示我的力量. 相信我, 我们将会度过不平凡的一生. 让我们一起并肩作战吧！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 810 exp");
	} else if (status == 15) {
		if (mode == 0) {
			qm.sendNext("呃，你开玩笑吧？告诉我你的手指滑了！点接受啊.");
		} else {
			if (!qm.isQuestCompleted(22507)) {
				qm.forceCompleteQuest();
				qm.gainExp(810);
			}
			qm.sendNext("呵呵，那好吧，走吧我们去打怪吧!");
		}
	} else if (status == 16) {
		qm.sendNextPrev("#b(你有点迷茫，但你接下来将和这条龙凑合过了.)", 2);
	} else if (status == 17) {	
		qm.sendPrev("#b#b(你还有一件事情要做. 去找你的爸爸谈谈.)");
	} else if (status == 18) {
                qm.dispose();
        }
}