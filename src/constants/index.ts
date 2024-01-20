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
 export const footerBottomItem= [
  {id:1008,
  title:"Amazon Business",
  descr:"Everything Fot Your Business",
},
{id:1009,
  title:"Amazon Global",
  descr:"Experienced Pros appiness Guarantee",
},
{id:1010,
  title:"Amazon Ignite",
  descr:"Sell your original Digital Educational Resources",
},
{id:1011,
  title:"Amazon Web Services",
  descr:"Scalable Cloud Computing Services",
},
{id:1212,
  title:"Amazon Advertising",
  descr:"Find,attract,and egage customers",
},
{id:1013,
  title:"Amazon Music",
  descr:"Stream Millions of Songs",
},
{id:1014,
  title:"Amazon Drive",
  descr:"Cloud storage from Amazon",
},
{id:1015,
  title:"ACX",
  descr:"Audiobook Publishing Made Easy",
},
{id:1016,
  title:"Book Repository",
  descr:"Books with free delivery worldwide",
},
{id:1017,
  title:"Box Office Majo",
  descr:"Find Movie Box Office Data",
},
{id:1018,
  title:"Comixology",
  descr:"Thousands of Digital Comics",
},
{id:1019,
  title:"DPreview",
  descr:"Digital Photography",
},
{id:1120,
  title:"IMDb",
  descr:"Movies,TV & Celebrities",
},
{id:1034,
  title:"Amazon Business",
  descr:"Everything Fot Your Business",
},
{id:1039,
  title:"Amazon Global",
  descr:"Experienced Pros appiness Guarantee",
},
{id:1068,
  title:"Amazon Ignite",
  descr:"Sell your original Digital Educational Resources",
},
{id:1070,
  title:"Amazon Web Services",
  descr:"Scalable Cloud Computing Services",
},
{id:1012,
  title:"Amazon Advertising",
  descr:"Find,attract,and egage customers",
},
{id:1093,
  title:"Amazon Music",
  descr:"Stream Millions of Songs",
},
{id:1094,
  title:"Amazon Drive",
  descr:"Cloud storage from Amazon",
},
{id:1095,
  title:"ACX",
  descr:"Audiobook Publishing Made Easy",
},
{id:1096,
  title:"Book Repository",
  descr:"Books with free delivery worldwide",
},
{id:1097,
  title:"Box Office Majo",
  descr:"Find Movie Box Office Data",
},
{id:1098,
  title:"Comixology",
  descr:"Thousands of Digital Comics",
},
{id:1049,
  title:"DPreview",
  descr:"Digital Photography",
},
{id:1020,
  title:"IMDb",
  descr:"Movies,TV & Celebrities",
},

 ]