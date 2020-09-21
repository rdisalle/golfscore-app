import React from 'react';

const GolfContext = React.createContext({
    courses: [],
    scores: [],
    deleteCourse: () => {},
    deleteScore: () => {},
    addCourse: () => {},
    addScore: () => {},
    updateCourse: () => {},
    updateScore: () => {},
});

export default GolfContext; 