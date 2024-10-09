// task_3/js/crud.d.ts

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the insertRow function
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
