
		var pkt = 5;
	
		function plus()
		{
			pkt++;
			punkty.innerHTML = "Punkty: " + pkt;
			
			var blok = parseInt(jeden.value);
			var blok2 = parseInt(dwa.value);
			var blok3 = parseInt(trzy.value);
			var blok4 = parseInt(cztery.value);
			var blok5 = parseInt(piec.value);
			var blok6 = parseInt(szesc.value);
			var blok7 = parseInt(siedem.value);
			
			if(blok==0)
			{
				btnplus.disabled=true;
			}
			if(blok2==0)
			{
				btnplus2.disabled=true;
			}
			if(blok3==0)
			{
				btnplus3.disabled=true;
			}
			if(blok4==0)
			{
				btnplus4.disabled=true;
			}
			if(blok5==0)
			{
				btnplus5.disabled=true;
			}
			if(blok6==0)
			{
				btnplus6.disabled=true;
			}
			
			if(blok7==0)
			{
				btnplus7.disabled=true;
			}
			
			btnminus.disabled=false;
			btnminus2.disabled=false;
			btnminus3.disabled=false;
			btnminus4.disabled=false;
			btnminus5.disabled=false;
			btnminus6.disabled=false;
			btnminus7.disabled=false;
			
		}
		
		function minus()
		{
			pkt--;
			punkty.innerHTML = "Punkty: " + pkt;
			
			if(pkt==0)
			{
				btnminus.disabled=true;
				btnminus2.disabled=true;
				btnminus3.disabled=true;
				btnminus4.disabled=true;
				btnminus5.disabled=true;
				btnminus6.disabled=true;
				btnminus7.disabled=true;
			}
			
			var blok = parseInt(jeden.value);
			var blok2 = parseInt(dwa.value);
			var blok3 = parseInt(trzy.value);
			var blok4 = parseInt(cztery.value);
			var blok5 = parseInt(piec.value);
			var blok6 = parseInt(szesc.value);
			var blok7 = parseInt(siedem.value);
			
			if(blok==1)
			{
				btnplus.disabled=false;
			}
			if(blok2==1)
			{
				btnplus2.disabled=false;
			}
			if(blok3==1)
			{
				btnplus3.disabled=false;
			}
			if(blok4==1)
			{
				btnplus4.disabled=false;
			}
			if(blok5==1)
			{
				btnplus5.disabled=false;
			}
			if(blok6==1)
			{
				btnplus6.disabled=false;
			}
			if(blok7==1)
			{
				btnplus7.disabled=false;
			}
		}
		
		function stats()
		{
			var str = parseInt(jeden.value);
			var per = parseInt(dwa.value);
			var endu = parseInt(trzy.value);
			var chari = parseInt(cztery.value);
			var inte = parseInt(piec.value);
			var agil = parseInt(szesc.value);
			var luck = parseInt(siedem.value);
			
			if(pkt!=0)
			{
				punkty.innerHTML = "Musisz wykorzystać wszyskie punkty <br> Punkty: " + pkt;
			}
			
			else
			{
				punkty.innerHTML = "Stats: <br>Strength: " + str + "<br>Perception: " + per + "<br>Endurance: " + endu + "<br>Charisma: " + chari + "<br>Intelligence: " + inte + 
				"<br>Agility: " + agil + "<br>Luck: " + luck;
			}
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
