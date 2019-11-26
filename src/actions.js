export const increment = (score = 1) => ({
    type: 'INCREMENT',
    score
})

export const decrement = (score = -1) => ({
    type: 'DECREMENT',
    score
})

export const multiply = (score = 1) => ({
    type: 'MULTIPLY',
    score
})

export const devide = (score = 1) => ({
    type: 'DEVIDE',
    score
})