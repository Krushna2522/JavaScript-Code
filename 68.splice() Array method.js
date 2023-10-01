//Splice metho is used to perform the insertion and deletion of elements from the array
const myArray=['item1','item2','item3','item4','item5','item6','item7','itme8','item9'];
console.log(myArray);
//We have to insert 'item11' and 'item13' at index 5
myArray.splice(5,0,'item11','item13');//(insert index,Number of element to delete,Elements to add)
console.log(myArray);
//We want to delete 3 elements from index 3 and 2 items
myArray.splice(2,3,'item21','item23');
console.log(myArray);