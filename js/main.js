            /*1*/
expression1=(a=1,b=a,c=a+b)=> d=a+b+c;
console.log(expression1());


            /*2*/
expression2=(a=1,b=a,c=a*b)=> d=a+b+c;
console.log(expression2());


            /*3*/
expression3=(a=1,b=a,c=a*b+a*b)=> d=a+b+c;
console.log(expression3());

            /*4*/
expression4=(a=1,b=a,c=a*(b*a))=> d=a+b+c;
console.log(expression4());

            /*5*/
expression5=(a=1,b=a,c=a*(b+a))=> d=a+b+c;
console.log(expression5());

            /*6*/
expression6=(a=3,b=8,c=a+(b*a))=> d=a+b+c;
console.log(expression6());

            /*7*/
expression7=(a=10,b=5,c=a-b)=> d=a+b+c;
console.log(expression7());

            /*8*/
expression8=(a=10,b=5,c=a-b*a)=> d=a+b+c;
console.log(expression8());


            /*9*/
expression9=(a=10,b=5,c=(b*a)*a)=> d=a+b+c;
console.log(expression9());

            /*10*/
expression10=(a=10,b=5,c=(a-b)+b)=> d=a+b+c;
console.log(expression10());