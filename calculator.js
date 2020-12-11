exports.CAL = function (n1,n2,operations) {
if(operations=='+')
return Number(n1)+Number(n2);
if(operations=='-')
return n1-n2;
if(operations=='*')
return n1*n2;
if(operations=='/')
return n1/n2;
};