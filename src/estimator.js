const covid19ImpactEstimator = (data) => {
  const input = data;
  const currentlyInfected = data.reportedCases * 10;
  return {
    data: input,
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
