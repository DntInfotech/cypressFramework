const xlsx=require("xlsx");
const fs=require("fs");
//Task1 Read data from Excel and convert it into jason file
//Step1: READ EXCEL FILE
//const wb=xlsx.readFile('D:/payload/Book2.xlsx',{cellDates:true})
const wb=xlsx.readFile('D:/payload/Book2.xlsx',{dateNF:'dd/mm/yyyy'})

//Step2 Read sheet from workbook

//console.log(wb.SheetNames);
const ws=wb.Sheets["Product"]
//STEP 3 CONVERT EXCEL DATA TO JASON
const data=xlsx.utils.sheet_to_json(ws,{raw:false});
console.log(data)
//step 4 convert jason data to jason file
fs.writeFileSync("./datajason.jason",JSON.stringify(data,null,2))