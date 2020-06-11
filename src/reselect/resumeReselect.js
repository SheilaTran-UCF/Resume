import { createSelector } from 'reselect';


const rootResume = state => state.resume;

export const loadingResume = createSelector(
    rootResume,
    item =>item.loading
);

export const introductionReselect = createSelector(
    rootResume,
    item =>item.dataResume.introduction
);

export const skillReselect = createSelector(
    rootResume,
    item =>item.dataResume.skills
);

export const educationReselect = createSelector(
    rootResume,
    item =>item.dataResume.education
);

export const experienceReselect = createSelector(
    rootResume,
    item =>item.dataResume.experience
);

export const interestReselect = createSelector(
    rootResume,
    item => item.dataResume.interest
);

export const contactReselect = createSelector(
    rootResume,
    item => item.dataResume.contact
);