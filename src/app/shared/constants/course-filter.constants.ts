export const INITIAL_COURSES_FILTER = {
  payment: {
    paid: false,
    free: false,
  },
  price: { from: 0, to: 200000 },
  schools: {
    skillbox: false,
    geekbrains: false,
    IMBA: false,
    loftSchool: false,
    convertMonster: false,
  },
  difficultyLevel: {
    beginner: false,
    intermediate: false,
    expert: false,
    children: false,
  },
  durationMonths: { from: 1, to: 12 },
  additionalOpportunities: {
    internshipAvailable: false,
    certificateAvailable: false,
  },
};
