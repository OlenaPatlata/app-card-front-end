
export const getBalanceArr = (arrCard = [], arrCash) => {
  const balanceArr = [];
  const defaultArrCash = [{
    "amount": 0,
    "ccy": "UAN"
  }];
  if (arrCash.length > 0) {
    arrCash?.map(obj => {
      const arrCashString = JSON.stringify(obj);
      const cloneArrCash = JSON.parse(arrCashString);
      balanceArr.push(cloneArrCash);
      return balanceArr;
      });
  };
  if (arrCash.length === 0) {
    defaultArrCash?.map(obj => {
      const arrCashString = JSON.stringify(obj);
      const cloneArrCash = JSON.parse(arrCashString);
      balanceArr.push(cloneArrCash);
      return balanceArr;
      });
  }
  
    arrCard?.map(elem => {
      const index = balanceArr?.findIndex(part => elem.ccy === part.ccy);
      if (index < 0) {
      balanceArr?.push({ amount: elem.amount, ccy: elem.ccy });
      }
      if (index >= 0) {

        balanceArr[index].amount = balanceArr[index].amount + elem.amount; 
      }
        return balanceArr;
    });
    return balanceArr;
  };