week    = tonumber (os.date( "%V"))
dag      = tostring (os.date("%a"));
status   = tonumber (otherdevices_svalues['grijs'])
datum    = tostring (os.date( "%x"))
tijd 	= tostring (os.date( "%X"))

commandArray = {}
--print ('Dag=  '..dag)
--print ('Week=  '..week)
--print ('Datum=  '..datum)
--print ('Tijd=	   '..tijd)

if (dag=='Sat' or dag=='Sun') then
   weekend = true ; weekdag = flase
end 
if (dag=='Mon' or dag=='Tue' or dag=='Wed' or dag=='Thu'or dag=='Fri') then
   weekend = false ; weekdag = true 
end

--Bepalen alleen grijs      
if(week==1 or week==3 or week==5 or week==7 or week==9 or week==11 or week==13 or week==15 or week==19 or week==23 or week==25 or week==27 
or week==29 or week==31 or week==33 or week==35 or week==37 or week==39 or week==41 or week==43 or week==45 or week==47 or week==49 
or week==51) and ((dag=='Wed' and tijd>='20:00:00') or (dag=='Thu')) then
      grijs = true ; papier = false ; groenenplastic = false
end

--Bepalen alleen grijs op zaterdag uitzonderingen     
if(week==17 or week==21) and ((dag=='Fri' and tijd>='20:00:00') or (dag=='Sat')) then
      grijs = true ; papier = false ; groenenplastic = false
end

--Bepalen groen en plastic
if (week==2 or week==4 or week==6 or week==8 or week==10 or week==12 or week==14 or week==16 or week==18 or week==10 or week==22 or week==24 
or week==26 or week==28 or week==30 or week==32 or week==34 or week==36 or week==38 or week==40 or week==42 or week==44 or week==46 or week==48 
or week==50) and ((dag=='Wed' and tijd>='20:00:00') or (dag=='Thu')) then
      grijs = false ; papier = false ; groenenplastic = true
end

--Bepalen alleen Papier
if (week==1 or week==5 or week==10 or week==14 or week==19 or week==23 or week==27 or week==31 or week==35 or week==40 or week==44 
or week==48) and ((dag=='Fri' and tijd>='20:00:00') or (dag=='Sat')) then 
      grijs = false ; papier = true ; groenenplastic = false
end

if (not(grijs) and not(papier) and not(groenenplastic) and status~=0) then
      status=0
      commandArray ['UpdateDevice']= '32|0|' .. status      
end

if (grijs and status~=10)then      
      status=10
      commandArray ['UpdateDevice']= '32|0|' .. status  
end

if (groenenplastic and status~=20) then
      status=20
      commandArray ['UpdateDevice']= '32|0|' .. status  
end

if (papier and status~=30) then
      status=30
      commandArray ['UpdateDevice']= '32|0|' .. status  
end
   
return commandArray     