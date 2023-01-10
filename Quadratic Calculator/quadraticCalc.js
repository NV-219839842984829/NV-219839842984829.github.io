let elAValue = document.getElementById("a-value");
let elBValue = document.getElementById("b-value");
let elCValue = document.getElementById("c-value");
let elCalcQuad = document.getElementById("calc-quad");
let elRoot1 = document.getElementById("root-1");
let elRoot2 = document.getElementById("root-2");



elCalcQuad.onclick = function(){
    let aValue = elAValue.value
    let bValue = elBValue.value
    let cValue = elCValue.value
        let det = bValue**2 - 4 * aValue * cValue
        if (det < 0){
            let absoluteDet = Math.abs(det)
            let root1 = "("+-bValue+"+"+absoluteDet+"i)/"+2*aValue;
            let root2 = "("+-bValue+"-"+absoluteDet+"i)/"+2*aValue;
                elRoot1.value = root1
                elRoot2.value = root2
        } else {
            let root1 = (-bValue + Math.sqrt(det)) / ( 2 * aValue)
            let root2 = (-bValue - Math.sqrt(det)) / ( 2 * aValue)
                elRoot1.value = root1
                elRoot2.value = root2
        }  
}