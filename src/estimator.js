const covid19ImpactEstimator = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    population,
    totalHospitalBeds
  } = data;

  const impact = {};
  const severeImpact = {};
  const input = data;

  //challenge one
  severeImpact.currentlyInfected = reportedCases * 50;
  impact.currentlyInfected = reportedCases * 10;

  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;

  //Challenge two
  impact.severeCasesByRequestedTime = impact.infectionsByRequestedTime * 0.15;
  severeImpact.severeCasesByRequestedTime =
    severeImpact.infectionsByRequestedTime * 0.15;
  const bedsOccupied = totalHospitalBeds * 0.65;
  const totalBeds = totalHospitalBeds * 0.95;
  const availableBeds = totalBeds - bedsOccupied;

  impact.hospitalBedsByRequestedTime =
    impact.severeCasesByRequestedTime * availableBeds;
  severeImpact.hospitalBedsByRequestedTime =
    severeImpact.severeCasesByRequestedTime * availableBeds;
  return {
    data: input,
    impact: impact,
    severeImpact: severeImpact
  };
};

exports.covid19ImpactEstimator = covid19ImpactEstimator;
