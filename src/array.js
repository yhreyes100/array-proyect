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