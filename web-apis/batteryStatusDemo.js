

function logBatteryStatus() {
	navigator.getBattery().then((battery) => {
		
		/* Show battery percentage */
		let batteryPercentWrap = document.getElementById("batteryPercentWrap");
		batteryPercentWrap.innerHTML = "Battery percentage is: " + (battery.level * 100) + "%<br/>";

		/* Show if battery is charging */
		if(battery.charging === true) {
			batteryPercentWrap.innerHTML += "Charger is connected";
		} else {
			batteryPercentWrap.innerHTML += "Charger is disconnected";
		}
	});
}


export default {
	"logBatteryStatus": logBatteryStatus
};