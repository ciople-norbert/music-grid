import {Grid} from './grid.js'
console.log('Hello');

const grid = new Grid({
    rootId: 'grid-container',
    noOfRows: 10,
    noOfCells: 10,
    rowClass: 'grid-row',
    cellClass: 'grid-cell'
});

grid.init();