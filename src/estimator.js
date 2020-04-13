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
  infectionsByRequestedTime = currentlyInfected * 1024;

  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;

  return {
    data: input,
    impact: impact,
    severeImpact: severeImpact
  };
};

exports.covid19ImpactEstimator = covid19ImpactEstimator;
