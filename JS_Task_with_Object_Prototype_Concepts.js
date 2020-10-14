
    
    /*
        22. 
        Musical Notes Allowed to be stored in a Tune Array :-  Sa, Re, Ga, Ma, Pa, Dha, Ni, Sa'
        Raga Bhupali has 5 notes. Sa, Re, Ga, Pa, Dha, Sa'. 
        Araoha :- Sa, Re, Ga, Pa, Dha, Sa'. ( Ascent)
        Avaroha :- Sa', Dha, Pa, Ga, Re, Sa. ( Descent )
        Vadi Swar :- Ga
        Samvadi Swar :- Dha
        User must check the Tune array, which comprises of atleast 10 notes. 
        If the notes stored in the array are not permitted in the Raga, the program gives error. 
        The program will tell if Tune array has  Vadi or Samvadi swar.
        It will also tell the frequency of each swar present in the Tune array.

        */

    function raagaBhopalicheck(...Tune)
    {
           
        for(let i of this.raagBhopali)
        {
            for(var j =0;j<Tune.length; j++)
            { 
                if (Tune[j] == i )
                { 
                    this.Bhopali.push(i);
                }
                
            }
        }
        for(var i=0; i<this.Bhopali.length; i++)
        {
            if(this.ResultBhopali.indexOf(this.Bhopali[i])==-1)
            {
                this.ResultBhopali.push(this.Bhopali[i]);
            }
        }
            if( this.ResultBhopali.length == 6)
            {
                console.log("Raaga Bhopali notes are found " + "[ " +this.ResultBhopali+"]");
            }
            else
            {
            console.log("Notes are not found as per required in Line as per Raaga Bhopali")
            }
        
            for (i=0;i<Tune.length;i++)
            {
                if (Tune[i] == "Ga")
                {
                    this.vadicount ++;
                }
                else if (Tune[i] == "Dha")
                {
                    this.samvadicount++;
                }
                
            }
            if (this.vadicount > 0)
            {
                console.log("Tunes has Vadi Swar" + " " +this.vadicount);
            }
            if (this.samvadicount > 0)
            {
                console.log("Tunes has Samvadi Swar" + " " +this.samvadicount);
            }

    }       

    function raagaAraohacheck(...Tune)
    {
    
        for(let i of this.raagAraoha)
        {
            for(var j =0;j<Tune.length; j++)
            { 
                if (Tune[j] == i )
                { 
                    this.Araoha.push(i);
                }
                
            }
        }
        console.log(this.Araoha);
            for(var i=0; i<this.Araoha.length; i++)
        {
            if(this.ResultAraoha.indexOf(this.Araoha[i])==-1)
            {
                this.ResultAraoha.push(this.Araoha[i]);
            }
        }
            if( this.ResultAraoha.length == 6)
            {
            console.log("Raaga Araoha notes are found " + "[ " +this.ResultAraoha+"]");
            }
            else
            {
            console.log("Notes are not found as per required in Line as per Raaga Araoha")
            }

            for (i=0;i<Tune.length;i++)
            {
                if (Tune[i] == "Ga")
                {
                    this.vadicount ++;
                }
                else if (Tune[i] == "Dha")
                {
                    this.samvadicount++;
                }
                
            }
            if (this.vadicount > 0)
            {
                console.log("Tunes has Vadi Swar");
            }
            if (this.samvadicount > 0)
            {
                console.log("Tunes has Samvadi Swar");
            }

    } 
    
   
    function Raaga ()
    {
        this.raagBhopali = ["Sa", "Re","Ga", "Pa", "Dha", "Sa'"];
        this.raagAraoha = ["Sa", "Re", "Ga", "Pa", "Dha", "Sa'"];
        this.raagAvaroha =["Sa'","Dha","Pa","Ga","Re","Sa"];
        this.Araoha = [];
        this.Bhopali = [];
        this.ResultBhopali=[];
        this.ResultAraoha=[];
        this.ResultAvaroha=[];
        this.vadicount = 0;
        this.samvadicount =0;
    }

Raaga.prototype.raagaBhopalicheck = raagaBhopalicheck;
Raaga.prototype.raagaAraohacheck = raagaAraohacheck;


var Tune1 = new Raaga();

Tune1.raagaBhopalicheck("Sa", "Na", "Re", "Ja", "Pa","Pa", "Dha", "Sa'","Dha","Ga");
Tune1.raagaAraohacheck("Sa", "Na", "Re", "Ja", "Pa","Pa", "Dha", "Sa'","Dha","Ga");

