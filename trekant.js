function setup() {

}

function butCalculate_onclick() {
	if (CheckForValidInput(frmTriangle.sideA.value,frmTriangle.sideB.value,frmTriangle.sideC.value,frmTriangle.angleA.value,frmTriangle.angleB.value))
	{
		if (SolveForAngles(frmTriangle.sideA.value,frmTriangle.sideB.value,frmTriangle.sideC.value,frmTriangle.angleA.value,frmTriangle.angleB.value)){
			SolveForSides(frmTriangle.sideA.value,frmTriangle.sideB.value,frmTriangle.sideC.value,frmTriangle.angleA.value,frmTriangle.angleB.value)
		}
	}
}	
function CheckForValidInput(sideA,sideB,sideC,angleA,angleB){
	// check to see if both angles were input and they don't add up to 90
	if (angleA>0 && angleB>0){
		var sum = parseFloat(angleA) + parseFloat(angleB)
		if (sum != 90){
			alert ("You input two angles that do not add up to 90 degrees. Please input only one angle or two angles that add up to 90 degrees")
			return false
		}
	}
	// check to see if three sides were input and it is not a real triangle
	if (sideA>0 && sideB>0 && sideC>0){
		sideA=parseFloat(sideA)
		sideB=parseFloat(sideB)
		sideC=parseFloat(sideC)
		if (sideC != Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2))){
			alert("You input three sides, but they do not make a right triangle")
			return false
		}
	}
	
return true
}
function RadiansToDegrees(valRad){
	return (360/(2*Math.PI)*valRad)
}
function DegreesToRadians(valDeg){
	return ((2*Math.PI)/360*valDeg)
}
function SolveForAngles (sideA,sideB,sideC,angleA,angleB){
	if (angleA>0) {
		angleB = 90 - angleA;
	}
	else if (angleB>0) {
		angleA = 90 - angleB;
	}
	else if (sideA>0 && sideB>0){
		angleA = RadiansToDegrees(Math.atan (sideA/sideB))
		angleB = RadiansToDegrees(Math.atan (sideB/sideA))
	}
	else if (sideA>0 && sideC>0){
			angleA = RadiansToDegrees(Math.asin (sideA/sideC))
			angleB = RadiansToDegrees(Math.acos (sideA/sideC))
	}
	else if (sideB>0 && sideC>0){
			angleA = RadiansToDegrees(Math.acos (sideB/sideC))
			angleB = RadiansToDegrees(Math.asin (sideB/sideC))
	}
	if (angleA>0 && angleB>0){
		frmTriangle.angleA.value=angleA
		frmTriangle.angleB.value=angleB
		return true
	}
	else {
		alert ("Not enough information, you must input at least 1 side and an angle or 2 sides")
		return false
	}	
}
	
function SolveForSides (sideA,sideB,sideC,angleA,angleB)	{
	if (sideA>0){
		sideB = sideA / Math.tan(DegreesToRadians(angleA))
		sideC = sideA / Math.sin(DegreesToRadians(angleA))
	}
	else if (sideB>0){
		sideA = sideB / Math.tan(DegreesToRadians(angleB))
		sideC = sideB / Math.sin(DegreesToRadians(angleB))
	}
	
	else if (sideC>0){
		sideA = sideC * Math.sin(DegreesToRadians(angleA))
		sideB = sideC * Math.cos(DegreesToRadians(angleA))
	}
	if (sideA>0 && sideB>0 && sideC>0){
		frmTriangle.sideA.value=sideA
		frmTriangle.sideB.value=sideB
		frmTriangle.sideC.value=sideC
	}
	else {
		alert ("Not enough information, you must input at least 1 side and an angle or 2 sides")
	}	
	
}