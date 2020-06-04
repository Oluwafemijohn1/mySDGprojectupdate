const covid19ImpactEstimator = (data) => data;

const inputData = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    };


// var dateImpactConverter = (periodType)=> {
//     var duration = 3;  
  
//   if (periodType === months){
//     var numberOfDays = periodType*30;
//     var factor = numberOfDays/duration; 
//     periodInfection = inputData.reportedCases*10*(Math.pow(2, (Math.floor(factor)) ))  
//   return periodInfection;
//   } else if (periodType === weeks) {
//     var numberOfDays = periodType*7;
//     var factor = numberOfDays/duration; 
//     periodInfection = inputData.reportedCases*10*(Math.pow(2, (Math.floor(factor)) ))    
//   return periodInfection;
//   } else {
//     var factor = periodType/duration; 
//     periodInfection = inputData.reportedCases*10*(Math.pow(2, (Math.floor(factor)) ))
//   }
      
// };

var dateSevereImpactConverter = (periodType)=> {
    var duration = 3;  
  var factor = periodType/duration;   
       periodInfection = inputData.reportedCases*10*(Math.pow(2, (Math.floor(factor)) ))    
    return periodInfection;
};

var dateImpactConverter = (periodType)=> {
    var duration = 3;  
  var factor = periodType/duration;   
       periodInfection = inputData.reportedCases*50*(Math.pow(2, (Math.floor(factor)) ))    
    return periodInfection;
};



var severeCasesByRequestedTimeConverter = ()=> { 
    return output.impact.infectionsByRequestedTime*0.15
};

var severeCasesByRequestedTimeConverter = ()=> { 
    return output.severeImpact.infectionsByRequestedTime*0.15
};
var 
      
//var { output:{impact:{currentlyInfected:outputImpact1, infectionsByRequestedTime:outputImpact2 } }} = output;
//prompt(outputImpact1, outputImpact2)
 output = {
        data: {}, // the input data you got
        impact: {
            currentlyInfected: function() { return inputData.reportedCases*10},
            infectionsByRequestedTime: dateImpactConverter,
            severeCasesByRequestedTime: severeCasesByRequestedTimeConverter
        }, // your best case estimation
        severeImpact: {
            currentlyInfected: function() {return inputData.reportedCases()*50},
            infectionsByRequestedTime: dateSevereImpactConverter,
            severeCasesByRequestedTime: severeCasesByRequestedTimeConverter
        } // your severe case estimation
    };   
    alert("Hello dear")
//export default covid19ImpactEstimator;
