var status = -1;

function start(mode, type, selection) {
	status++;
    if(mode == 0 && type == 0)
        status -= 2;
    else if (mode != 1) {
        //if (mode == 0)
            qm.sendNext("#b(你得考虑一下...)#k");
        qm.dispose();
        return;
    }
	
	if (status == 0) {
        qm.sendAcceptDecline("喂，训练进展如何？还在休息是吧，你有空过来#b里恩#k一趟，你那大斧子又开始不对劲了。它总闹腾，小脸发黑，你快回来带他去看医生吧。");
    } else if (status == 1) {
            qm.startQuest();
            qm.sendOk("我感觉它魔怔了，你快回来一趟吧。再不回来你那大斧子指不定发生点啥，#b行不，战狼？");
    } else if (status == 2) {
            qm.dispose();
    }
}