const spendAmount=document.getElementById("spendAmount");
chrome.storage.sync.get(["total","limit"],function(amount)
{
document.getElementById("total").innerHTML=amount.total;
document.getElementById("limit").innerHTML=amount.limit;
})
spendAmount.onclick = function(){
    chrome.storage.sync.get('total',
    function(budget)
    {
        var newTotal=0;
        if(budget.total){
            newTotal +=parseInt(budget.total);
        }
        amount=document.getElementById("amount").value;
        if(amount)
        {
            newTotal+=parseInt(amount);
        }
        chrome.storage.sync.set({"total":newTotal});
        document.getElementById("total").innerHTML=newTotal;
    });
};