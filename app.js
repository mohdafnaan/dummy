/* 
1. $match = used to filter document based on a condition,
      -> selects only the documents that meet the given condition 

      eg :  {
  $match: { status: "active" }
}
this gives the documents whos status are active


2. $unwind =  

{
  orderId: 1,
  items: ["Burger", "Fries", "Coke"]
}

{$unwind : "$items"}

{ orderId: 1, items: "Burger" }
{ orderId: 1, items: "Fries" }
{ orderId: 1, items: "Coke" }


Breaking an array into seperate documents.


3. $group =  combines similar dcuments into group and perform calculations on them 

*/

// object;
{
    items : [
        {   
            category : "fast food", 
            price : 120
        },
        {
            category : "fast food",
            price : 80
        },
        {
            category : "beverages",
            price : 50
        }
    ]
}

// unwind -
 
/*
{items : {category : "fast food", price : 120}}            
{items : {category : "fast food", price : 80}}            
{items : {category : "beverages", price : 50}}            
*/


// $group -

{
    _id : "$items.category",       // id is the key of the where the category of items are to placed
    total : {$sum : "$items.price"} // total is the key where the total of the every same category are placed by using $sum operator
}

// final output -


[
    {_id : "fastfood",total : 200},
    {_id : "beverages",total : 50},
    
]