export const allItems=[{
    id:"100", title:"All Departments"
 },
 {
    id:"101", title:"Technics"
 },
 {
    id:"102", title:"Digital Music"
 },
 {
    id:"103", title:"Girl's Fashion"
 },
 {
    id:"104", title:"Men's Fashion"
 },
 {
   id:"105", title:"Baby"
},
{
   id:"106", title:"Books"
},
{
   id:"107", title:"Home & Kitchen"
},
{
   id:"108", title:"Luggage"
},
{
   id:"109", title:"Pet Supplies"
},
{
   id:"110", title:"Prime Video"
},
{
   id:"111", title:"Movies & TV"
},
{
   id:"112", title:"Electronics"
},
{
   id:"113", title:"Beauty & Personal Care"
},
{
   id:"114", title:"Kindle Store"
},
{
   id:"115", title:"Automotive"
}
 ]
 export interface ListItem {
   id: string;
   listData: string[];
 }
 
 export interface MiddleList {
   id: number;
   title: string;
   listItem: ListItem[];
 }
 
 export const middleList: MiddleList[] = [
   {
     id: 2221,
     title: "Get to Know Us",
     listItem: [
       {
         id: "001",
         listData: [
           "Careers",
           "Blog",
           "About Amazon",
           "Investor Relations",
           "Amazon Devices",
           "Amazon Science",
         ],
       },
     ],
   },
   {
      id: 2222,
      title: "Make Money With Us",
      listItem: [
        {
          id: "002",
          listData: [
            "Sell products on Amazon",
            "Sell apps on Amazon",
            "Sell on Amazon Business",
            "Become an Affiliate",
            "Advertise Your Products",

           
          ],
        },
      ],
    },
    
    {
      id: 2223,
      title: "Amazon Payment Products",
      listItem: [
        {
          id: "003",
          listData: [
            "Amazon Business Card",
            "Shop with Points",
            "Reload your Balance",
            "Amazon Currency Converter",
           
          ],
        },
      ],
    },
   {
     id: 2224,
     title: "Let Us to Help You",
     listItem: [
       {
         id: "004",
         listData: [
           "Amazon and COVID-19",
           "Your Account",
           "Your Orders",
           "Shipping Rates & Policies",
           "Returns & Replacements",
           "Amazon Assistant",
           "FAQ & Help",
         ],
       },
     ],
   },
      
 ];
 