// var list = [
//   {desc: "doom 3", amount: "1", value: "255.00"},
//   {desc: "metal Gear Phanton", amount: "3", value: "60.00"},
//   {desc: "battlefield 1 (2016)", amount: "2", value: "300.00"}
// ];
var list = [];

function getTotal(list) {
  var total = 0;
  for(var key in list) {
    total += list[key].value * list[key].amount;
  }
  return total;
}

function setList(list) {
  table ='\
      <thead>\
        <tr>\
          <td>Description</td>\
          <td>Amount</td>\
          <td>Value</td>\
          <td>Actions</td>\
        </tr>\
      </thead>\
      <tbody>';

    for (var key in list) {
      table += '\
        <tr>\
          <td>' + formatDesc(list[key].desc) + '</td>\
          <td>' + formatAmount(list[key].amount) + '</td>\
          <td>' + formatValue(list[key].value) + '</td>\
          <td>\
            <button onclick="editProduct(' + key + ')" class="btn btn-default">Edit</button>\
            <button onclick="deleteProduct(' + key + ')" class="btn btn-danger">Delete</button>\
          </td>\
        </tr>';
    }
    table += '</tbody>';
    document.querySelector("#listTable").innerHTML = table;
    document.querySelector("#totalValue").innerHTML = "$ " + formatValue(getTotal(list));
    saveListStorage(list);
}

function editProduct(key) {
  var obj = list[key];
  document.querySelector("#desc").value = obj.desc;
  document.querySelector("#amount").value = obj.amount;
  document.querySelector("#value").value = obj.value;
  document.querySelector("#updateID").innerHTML = '<input id="idUpdate" type="hidden" value="' + key + '">';

  document.querySelector("#btnsUpdate").style.display = "inline-block";
  document.querySelector("#btnAdd").style.display = "none";
}

function resetForm() {
  document.querySelector("#desc").value = "";
  document.querySelector("#amount").value = "";
  document.querySelector("#value").value = "";
  document.querySelector("#updateID").innerHTML = "";

  document.querySelector("#btnsUpdate").style.display = "none";
  document.querySelector("#btnAdd").style.display = "inline-block";
}

function addProduct() {
  if (! validation()) {
    return ;
  }
  var desc = document.querySelector("#desc").value,
    amount = document.querySelector("#amount").value,
    value = document.querySelector("#value").value;
  list.unshift({"desc": desc, "amount": amount, "value": value});
  setList(list);
}

function updateProduct() {
  if (! validation()) {
    return ;
  }
  var id = document.querySelector("#idUpdate").value,
    desc = document.querySelector("#desc").value,
    amount = document.querySelector("#amount").value,
    value = document.querySelector("#value").value;
   list[id] = {'desc': desc, 'amount': amount, 'value': value};
   resetForm();
   setList(list);
}

function deleteProduct(id) {
  var obj = list[id];
  if (confirm("Delete the product " + obj.desc + "?")) {
    list.splice(id, 1);
    setList(list);
  }
}

function validation() {
  var desc = document.querySelector("#desc").value,
    amount = document.querySelector("#amount").value,
    value = document.querySelector("#value").value,
    errors = "";

  document.querySelector("#errors").style.display = "none";
  if (desc == "") {
    errors += '<p>Fill out description</p>';
  }

  if (amount === "") {
    errors += '<p>Fill out amount</p>';
  } else if (amount != parseInt(amount)) {
    errors += '<p>Fill a valid amount</p>';
  }

  if (value === "") {
    errors += '<p>Fill out value</p>';
  } else if (value != parseFloat(value)) {
    errors += '<p>Fill a valid value</p>';
  }

  if (errors == "") {
    return 1;
  } else {
    document.querySelector("#errors").innerHTML = errors;
    document.querySelector("#errors").style.display = "block";
    return 0;
  }
}

function formatAmount(amount){
  return parseInt(amount);
}

function formatDesc(desc){
  var str = desc.toLowerCase();
  str = str.charAt(0).toUpperCase()  + str.slice(1);
  return str;
}

function formatValue(amount) {
  var str = parseFloat(amount).toFixed(2) + "";
  str = str.replace(".", ",");
  return str;
}

function deleteList(){
  if(confirm('Delete this list?')) {
    list = [];
    setList(list);
  }
}

function saveListStorage(list){
  var jsonStr = JSON.stringify(list);
  localStorage.setItem("list", jsonStr);
}

function initListStorage(){
  var testList = localStorage.getItem("list");
  if (testList){
    list = JSON.parse(testList);
  }
  setList(list);
}

initListStorage();
