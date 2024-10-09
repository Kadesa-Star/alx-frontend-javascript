// task_3/js/main.ts

// Triple slash directive for the ambient declaration
/// <reference path="./crud.d.ts" />

// Import types and the CRUD functions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert a row and get the new RowID
const newRowID: RowID = CRUD.insertRow(row); // Example output: 125

// Create an updated RowElement with age
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Update the row
CRUD.updateRow(newRowID, updatedRow); // Example output: Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete the row
CRUD.deleteRow(newRowID); // Example output: Delete row id 125
