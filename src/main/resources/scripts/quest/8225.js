/* ===========================================================
			Ronan Lana
	NPC Name: 		Taggrin
	Description: 	Quest - The Right Path
=============================================================
Version 1.0 - Script Done.(10/7/2017)
=============================================================
*/

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("好的，那么回头见.");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("嘿，搭档。现在你加入了乌鸦爪队，我有一个任务要做。你现在起床了吗?");
	else if (status == 1){
		qm.sendOk("很好。为了在我们的队伍中证明你的勇气，你必须先接受一个小小的挑战：你必须能够在这里来去自如，知悉这些树林所蕴含的所有秘密。追踪幽灵森林的地图，然后跟我说。我会评估你是否有能力加入我们.");
		qm.forceStartQuest();
	} else if (status == 2) {
                qm.dispose();
        }
}
