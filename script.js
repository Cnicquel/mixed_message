let predictions = {
    result: ['win', 'lose', 'win', 'lose'],
    points: ['1', '5', '8', '15'],
    probability: ['20', '40', '60', '80']
  };
  let findMessage = () => {
    return Math.floor(Math.random() * 3)
  };
  let personalPrediction = [];
  
  for (let prop in predictions) {
    let option = findMessage(predictions[prop])
     switch(prop) {
      case 'result': 
      personalPrediction.push(`Your team will ${predictions[prop][option]}.`)
      break
      case 'points':
       personalPrediction.push(`By ${predictions[prop][option]} points.`)
       break
       case 'probability':
        personalPrediction.push(`And a probability of ${predictions[prop][option]} %.`)
        break
        default:
        personalPrediction.push('There is not enought info')
     }
  }
  
   function formatPrediction(prediction) {
      
      const formatted = personalPrediction.join('\n')
      console.log(formatted)
    }
    
    formatPrediction(personalPrediction);
    
  
