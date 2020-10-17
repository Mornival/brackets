module.exports = function check(str, bracketsConfig) {
let brackets  = str.split('');
let le = [];
let ri = [];
let i = 0 ;
if(brackets.length % 2 !== 0)
{
  return false;
}
for(i = 0; i < bracketsConfig.length; i++)
{
  le.push(bracketsConfig[i][0]);
  ri.push(bracketsConfig[i][1]);
}
for(i = brackets.length - 1 ; i >= 0 ; i--)
{
  for(let j = 0; j < brackets.length; j++)
  {
    if(brackets[i] == le[j] && brackets[i + 1] == ri[j])
    {
      brackets.splice(i,2);
    }
  }
}
return (brackets.length === 0);
};
