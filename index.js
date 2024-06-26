// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
    // console.log(`This Saturday, I want to ${activity}!`);
}
// saturdayFun();
//function without a name is anaymous function
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};
//mondayWork();
function wrapAdjective(flair = '*') {
	let adj = 'special';
	function withFlair(adj) {
		return `You are ${flair}${adj}${flair}!`
	}
	return withFlair;
}
// wrapAdjective("%")("a dedicated programmer");
