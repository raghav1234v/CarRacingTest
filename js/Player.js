class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }
  getfinishedPlayer(){
 var carsAtEnd=database.ref('finishedPlayer').on("value",(data)=>{
   finishedPlayer=data.val();
 })
  

  }
  static updatefinishedPlayer(){
   database.ref('/').update({
     finishedPlayer :finishedPlayer+1 
   })
   this.rank=this.rank+1;
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
