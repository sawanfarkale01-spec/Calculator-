
const round = (n, d=2) => Number((n).toFixed(d));

function calcPercentage(){
  const value = parseFloat(document.getElementById('p_value').value);
  const total = parseFloat(document.getElementById('p_total').value);
  if(isNaN(value) || isNaN(total) || total===0){return document.getElementById('p_out').textContent='—';}
  document.getElementById('p_out').textContent = round((value/total)*100) + '%';
}

function calcBMI(){
  const w = parseFloat(document.getElementById('b_weight').value);
  const hcm = parseFloat(document.getElementById('b_height').value);
  if(isNaN(w) || isNaN(hcm) || hcm===0){return document.getElementById('b_out').textContent='—';}
  const h = hcm/100;
  const bmi = w/(h*h);
  let cat = 'Normal';
  if(bmi<18.5) cat='Underweight';
  else if(bmi<25) cat='Normal';
  else if(bmi<30) cat='Overweight';
  else cat='Obese';
  document.getElementById('b_out').textContent = `${round(bmi)} (${cat})`;
}

function calcEMI(){
  const p = parseFloat(document.getElementById('e_principal').value);
  const r = parseFloat(document.getElementById('e_rate').value)/12/100;
  const n = parseInt(document.getElementById('e_months').value);
  if(isNaN(p)||isNaN(r)||isNaN(n)||r===0||n===0){return document.getElementById('e_out').textContent='—';}
  const emi = p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  document.getElementById('e_out').textContent = '₹ ' + round(emi,2);
}

function calcAge(){
  const dob = document.getElementById('a_dob').value;
  if(!dob){document.getElementById('a_out').textContent='—';return;}
  const d = new Date(dob);
  const now = new Date();
  let y = now.getFullYear()-d.getFullYear();
  let m = now.getMonth()-d.getMonth();
  let day = now.getDate()-d.getDate();
  if(day<0){ m--; day += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if(m<0){ y--; m += 12; }
  document.getElementById('a_out').textContent = `${y} years, ${m} months, ${day} days`;
}

function calcDiscount(){
  const price = parseFloat(document.getElementById('d_price').value);
  const pct = parseFloat(document.getElementById('d_pct').value);
  if(isNaN(price)||isNaN(pct)){return document.getElementById('d_out').textContent='—';}
  const off = price*pct/100;
  document.getElementById('d_out').textContent = `Save ₹${round(off)} → Final ₹${round(price-off)}`;
}

function calcGST(){
  const price = parseFloat(document.getElementById('g_price').value);
  const pct = parseFloat(document.getElementById('g_pct').value);
  if(isNaN(price)||isNaN(pct)){return document.getElementById('g_out').textContent='—';}
  const add = price + (price*pct/100);
  const remove = price/(1+pct/100);
  document.getElementById('g_out').innerHTML = `Add GST: ₹${round(add)}<br>Price Excluding GST (from inclusive): ₹${round(remove)}`;
}

function calcUnit(){
  const kind = document.getElementById('u_kind').value;
  const val = parseFloat(document.getElementById('u_val').value);
  if(isNaN(val)){document.getElementById('u_out').textContent='—';return;}
  let out='';
  if(kind==='length'){
    out = `${val} m = ${round(val*100)} cm | ${round(val*3.28084)} ft`;
  }else if(kind==='weight'){
    out = `${val} kg = ${round(val*1000)} g | ${round(val*2.20462)} lb`;
  }else{
    out = `${val} °C = ${round(val*9/5+32)} °F | ${round(val+273.15)} K`;
  }
  document.getElementById('u_out').textContent = out;
}

function calcCGPA(){
  const list = document.getElementById('c_list').value.trim();
  if(!list){document.getElementById('c_out').textContent='—';return;}
  const nums = list.split(/[,\s]+/).map(Number).filter(n=>!isNaN(n));
  if(nums.length===0){document.getElementById('c_out').textContent='—';return;}
  const cgpa = nums.reduce((a,b)=>a+b,0)/nums.length;
  const pct = cgpa*9.5;
  document.getElementById('c_out').textContent = `CGPA ${round(cgpa,2)} ≈ ${round(pct,2)}%`;
}
