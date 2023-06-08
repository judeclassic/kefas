export const  SportBetNorms = (params: any) => {
    const matches: any[] = [];

    const game = params.data
    game.forEach((element: any) => {
        let match: any = {};
        const matchDetails = element.events;
            
        matchDetails.forEach((element : any)=>{
            let result;
            const timeRecord = element.playedSeconds.split(":");
            const time = Number(timeRecord[0]);
            if(time>=40 && time <= 60){
                element.markets.forEach((market: any)=>{
                    if(market.name=="Handicap"){
                        let text = market.desc;
                        const myArray = text.split("=");
                    //  console.log(myArray)
                        const myArray1 = myArray[0].split(" ");
                        const myArray2 = myArray1[myArray1.length-1].split(":");
                        const home = Number(myArray2[0]);
                        const away = Number(myArray2[1]);
                        const average = Math.abs(home-away);
                        if (average>=3) {
                            match={
                                home:element.homeTeamName,
                                away:element.awayTeamName,
                            }
                            matches.push(match);
                        }
                    }
                })
	        }	
		})
				
	});
    return matches;
}