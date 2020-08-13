const getRecentEffectiveDateTitle = (allDates) => {
  let maxDtObj = new Date(allDates[0].effectiveDate),
    mostRecentContent = null;
  allDates.forEach((dt, index) => {
    if (new Date(dt.effectiveDate) > maxDtObj) {
      mostRecentContent = dt;
      maxDtObj = new Date(dt.effectiveDate);
    } else {
      mostRecentContent = allDates[index];
    }
  });
  return mostRecentContent && mostRecentContent.title;
};

const getRecentEffectiveDateBody = (allDates) => {
  let maxDtObj = new Date(allDates[0].effectiveDate),
    mostRecentContent = null;
  allDates.forEach((dt, index) => {
    if (new Date(dt.effectiveDate) > maxDtObj) {
      mostRecentContent = dt;
      maxDtObj = new Date(dt.effectiveDate);
    } else {
      mostRecentContent = allDates[index];
    }
  });
  return mostRecentContent && mostRecentContent.body;
};

export { getRecentEffectiveDateTitle, getRecentEffectiveDateBody };
