//switch  example


let day_week = "Sunday";

switch (day_week) {
    case "monday":
        {
            document.write("Today is monday");
            break;
        }
    case "tuesday":
        {
            document.write("Today is tuesday");
            break;
        }
    case "wednesday":
        {
            document.write("Today is wednesday");
            break;
        }
    case "thursday":
        {
            document.write("Today is thursday");
            break;
        }
    case "friday":
        {
            document.write("Today is friday");
            break;
        }
    case "Saturday":
        {
            document.write("Today is saturday");
            break;
        }
    case "Sunday":
        {
            document.write("Today is Sunday");
            break;
        }
        default:
            {
                document.write("Invalid Day of the week!");
                break;
            }
}


//example#2 if else

let sisters= "Hajra";

if(sisters==="Hajra")
{
    document.write("She is Hajra");
}
else if(sisters==="Lyba")
{
    document.write("She is Lyba");
}
else if(sisters==="Amna")
{
    document.write("She is Amna");
}
else if(sisters==="Fatima")
{
    document.write("She is Fatima");
}
else
{
    document.write("Invalid sister");
}


//example #3 

let fries= "Mayo_fries";

if(fries==="Mayo_fries")
{
    document.write("Yumm..Mayo fries  my favourite");
}
else if(fries==="French_fries")
{
    document.write("French Fries are tasty too");
}
else if(fries==="Curly_fries")
{
    document.write("Curly fries are delicious");
}
else if(fries==="Loaded_fries")
{
    document.write("Loaded fries are appetite friendly");
}
else if(fries==="Pizza_fries")
{
    document.write("Pizza fries remind me of pizza");
}
else if(fries==="Wafle_fries")
{
    document.write("Wafle fries are crispy");
}
else{
    document.write("This type of fries are not available");
}


//example # 4

let pizza_choice;
pizza_choice= "BBQ-Chicken";


if(pizza_choice==="Cheese")
{
    document.write("Cheese Pizza");
}
else if(pizza_choice==="Veg")
{
    document.write("Vegeterian");
}
else if(pizza_choice==="Mushroom")
{
    document.write("Mushroom Pizza");
}
else if(pizza_choice==="BBQ-Chicken")
{
    document.write("BBQ-Chicken Pizza");
}
else if(pizza_choice==="pepperoni")
{
    document.write("Pepperoni Pizza");
}
else
{
    document.write("Not available");
}