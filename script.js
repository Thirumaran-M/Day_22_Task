async function foo(){
	let res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
	let res1 = await res.json();

	
	var div = document.createElement("div");
	div.className="container";
	var row = document.createElement("div");
	row.className="row";
	bar(res1);
	function bar(text){
		console.log(text);
//		for(var i = 0; i<text.length;i++){
			var col = document.createElement("div");
			col.className="col-lg-12";
			col.innerHTML += `<div class="card" style="width: 18rem;text-align:center">
            <h5 class="card-header">TamilNadu:</h5>
				<div class="card-body">
				<p class="card-text">Confirmed: ${text.TN.total.confirmed}</p>
				<p class="card-text">Deceased: ${text.TN.total.deceased}</p>
				<p class="card-text">Recovered: ${text.TN.total.recovered}</p>
				<p class="card-text">Tested: ${text.TN.total.tested}</p>
                
				<p class="card-text">Vaccinated1: ${text.TN.total.vaccinated1}</p>
				<p class="card-text">Vaccinated2: ${text.TN.total.vaccinated2}</p>
					 </div>
					 </div>`;
			row.append(col);
			div.append(row);
			document.body.append(div);
//		}
	}
}

foo();