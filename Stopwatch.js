class Stopwatch{
    constructor(){
        this.time = 0;
        this.isRunning = false;
        this.isResetRun=false;
    }
    
    Start(){
        if(this.isRunning == false){
            this.isRunning = true;
            this.Timerun();
            document.getElementById("start").innerHTML = "Pause";
            document.getElementById("reset").innerHTML = "Stop"
        }
        else{
            this.isRunning = false;
            document.getElementById("start").innerHTML = "Resume"
        }
        if( this.isResetRun == true)
        {
            this.isResetRun = false;
            this.isRunning = true;
            this.time=-1
            document.getElementById("Watch").innerHTML="00:00:00"
            
        }
    }

    Reset(){
        this.isResetRun = true;
        if(this.isRunning==true){
            this.isRunning = false
            document.getElementById("start").innerHTML = "Start";
            document.getElementById("reset").innerHTML = "Reset";
        }
        else{
            this.isRunning=false;
            this.time=-1;
            document.getElementById("Watch").innerHTML = "00:00:00"
            document.getElementById("start").innerHTML = "Start";
            document.getElementById("reset").innerHTML = "Reset";
        }
    }
    
    Timerun(){
        var self = this;
        if(self.isRunning==true){
            setTimeout(function(){
                self.time++;
                var minute = Math.floor(self.time/10/60);
                var second = Math.floor(self.time/10%60);
                var milisec = self.time%10; 
                if(minute<10){
                    minute = "0" + minute
                }
                if(second<10){
                    second = "0" + second
                }
                if(milisec<10){
                    milisec = "0" + milisec
                }
                document.getElementById("Watch").innerHTML = minute + ":" + second + ":" + milisec ;
                self.Timerun();
            },100);
        }
    }
    
}

