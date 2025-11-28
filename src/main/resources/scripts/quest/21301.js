var status = -1;

function end(mode, type, selection) {
	status++;
    if(mode == 0 && type == 0)
        status -= 2;
    else if (mode != 1) {
        //if (mode == 0)
            qm.sendNext("#b(您需要考虑一下...)#k");
        qm.dispose();
        return;
    }
	
	if (status == 0) {
        qm.sendNext("Yo,waddup,ma homies~你杀死了 #o9001013# 了？哈哈哈...Koo,ah。听着，现在给我看看那块红玉，我必须把它放在身上，然后……等等，你怎么了？别告诉我...你没带回来!");
    } else if (status == 1) {
		qm.sendNextPrev("什么？！您真的没有带回《红玉》吗？为什么？你把这事给忘了？啊...发生什么事了…？");
	} else if (status == 2) {
		qm.sendNextPrev("Sh*t，Sh*t，我太难受了。我要走了，见鬼，不！\r\Dang...Fu*k!" );
	} else if (status == 3) {
		qm.sendNextPrev("就算你现在回去找，小偷也早就溜了，你还是重新弄一个吧。你以前做过，所以你知道怎么弄，对吧？快去。。。");
	} else if (status == 4) {
		qm.sendNextPrev("\r\n\r\n\r\n你完蛋了!!你做的!");
	} else if (status == 5) {
		qm.sendNextPrev("..Sh*t...把那该死的东西给我！!!");
	} else if (status == 6) {
		qm.completeQuest();
                qm.sendNextPrev("#b(Maha快开始要吃人了，我还是快点溜吧。也许利琳能做点什么.)", 2);
	} else if (status == 7) {
            qm.dispose();
        }
}