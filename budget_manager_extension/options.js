
    chrome.storage.sync.get('limit',function(budget){
        document.getElementById("limit").innerHTML=budget.limit;
    });

    document.getElementById('saveLimit').onclick=function(){
        var limit = document.getElementById('limit').value;
        if (limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();
            });
        }
    }