let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.net','.com','.us','.io','.gov'];

console.log("-------------------for-------------------------");
for(var i=0;i<pronoun.length;i++)
  for(var j=0;j<adj.length;j++)
    for(var k=0;k<noun.length;k++)
      for(var l=0;l<dom.length;l++)
          console.log(pronoun[i]+adj[j]+noun[k]+dom[l]);

console.log("-------------------forof-------------------------");
for(let ii of pronoun)
  for(let jj of adj)
    for(let kk of noun)
      for(let ll of dom)
          console.log(ii+jj+kk+ll);

console.log("-------------------forEach--------------------");

pronoun.forEach(element => {
    adj.forEach(element1 => {
        noun.forEach(element2 => {
            dom.forEach(element3 => {
                console.log(element+element1+element2+element3);
            });
        });
    });
});

console.log("-------------------while--------------------");

 i = 0;
while(i!=pronoun.length){
  j=0;
  while(j!=adj.length){
    k=0;
      while(k!=noun.length){
        l=0;
        while(l!=dom.length){
          console.log(pronoun[i]+adj[j]+noun[k]+dom[l]);
          l+=1;
        }
        k+=1;
      }
     j+=1; 
  }
  i+=1;
}
console.log("-------------------dowhile--------------------");
i=0;
do{
    j=0;
      do{
            k=0;
          do{
                l=0;
              do{
                console.log(pronoun[i]+adj[j]+noun[k]+dom[l]);
                l+=1;
              } while(l!=dom.length);
              k+=1;
            } while(k!=noun.length);
            j+=1;            
        }while(j!=adj.length);
    i+=1;    
}while(i!=pronoun.length);

console.log("-------------------NoLoop--------------------");

function recursion(i=0,j=0,k=0,l=0){
  if(i>=pronoun.length)return console.log("The End");
  else if(j>=adj.length){i++;j=0;}
  else if(k>=noun.length){j++;k=0;}
  else if(l>=dom.length){k++;l=0;}
  else{
    console.log(pronoun[i]+adj[j]+noun[k]+dom[l]);
    l++;
  }
  return recursion(i,j,k,l);
}
recursion();