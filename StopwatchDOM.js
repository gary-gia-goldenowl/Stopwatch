document.addEventListener("DOMContentLoaded", function(){       //DOM must load first 
    document.getElementById("start").addEventListener("click",function(){
        stopwatch.Start();
    });
    document.getElementById("reset").addEventListener("click",function(){
        stopwatch.Reset();
    });
    });
