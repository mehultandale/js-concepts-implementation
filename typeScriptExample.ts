


type employee = {
	name: string,
	eid: number
}

type citizen = {
	cit_id: number
}

type person = employee & citizen;



function showPersonDetails(p1: person) {
	console.log(p1.name);
}



let p1 = {
	name: "John Doe",
	eid: 1,
	cit_id: 2
};

showPersonDetails(p1);