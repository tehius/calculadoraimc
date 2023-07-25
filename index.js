function calculoImc() {
    let name = $("#input_name")[0].value;
    let age = $("#input_age")[0].valueAsNumber;
    let weight = $("#input_weight")[0].valueAsNumber;
    let height = $("#input_height")[0].valueAsNumber;
    
    imc = weight / Math.sqrt(height);
    let result = `${name} tem ${age} anos, pesa ${weight}kg, tem ${height}m e seu IMC é de ${Math.round(imc)}`;
    console.log(result);
    $("#lbl_result")[0].innerHTML=result;
}
