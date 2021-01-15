var stopwatch = new Stopwatch();

document.addEventListener("DOMContentLoaded", function(){     
    
    document.getElementById("start").addEventListener("click",function(){
        stopwatch.Start();
    });
    
    document.getElementById("reset").addEventListener("click",function(){
        stopwatch.Reset();
    });
    
});
