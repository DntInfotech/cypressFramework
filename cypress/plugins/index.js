//const sqlServer = require('cypress-sql-server');
const dbconfig=require('../../cypress.config.js')

const{ initPlugin }=require("cypress-plugin-snapshots/plugin");
const xlsx=require("xlsx");
const fs=require("fs");


module.exports = (on, config) => {
  console.log("in plugin");
 initPlugin(on,config);
  on('task', {
genrateJSONsromExcel:genrateJSONsromExcel

  });
  return config; 
}

//Excel to json
function genrateJSONsromExcel(agrs){

  //Task1 Read data from Excel and convert it into jason file
//Step1: READ EXCEL FILE
//const wb=xlsx.readFile('D:/payload/Book2.xlsx',{cellDates:true})
const wb=xlsx.readFile(agrs.execlpath,{dateNF:'dd/mm/yyyy'})

//Step2 Read sheet from workbook

//console.log(wb.SheetNames);
const ws=wb.Sheets[agrs.sheetname]
//STEP 3 CONVERT EXCEL DATA TO JASON
return xlsx.utils.sheet_to_json(ws,{raw:false});


}
