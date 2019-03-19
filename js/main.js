document.querySelector("html").classList.add('js');

$('.input-file').change(function(e){
  var reader = new FileReader();
  reader.readAsArrayBuffer(e.target.files[0]);
  /*.split for splitting filename at dot */
  var name = (e.target.files[0].name).split(".")[0];
  reader.onload = function(e) {
    var data = new Uint8Array(reader.result);
    var wb = XLSX.read(data,{type:'array'});
    var htmlstr = XLSX.writeFile(wb, name + ".csv");
  }
});

$('.input-file2').change(function(e){
  var reader = new FileReader();
  reader.readAsArrayBuffer(e.target.files[0]);
  var name = (e.target.files[0].name).split(".")[0];
  reader.onload = function(e) {
    var data = new Uint8Array(reader.result);
    var wb = XLSX.read(data,{type:'array'});
    var htmlstr = XLSX.writeFile(wb, name + ".xlsx");

  }
});
