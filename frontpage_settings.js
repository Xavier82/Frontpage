<!-- Change the text for on/off switches -->
<!-- var txt_on = '<img src=icons/on.png>'; -->
<!-- var txt_off = '<img src=icons/off.png>'; -->
var txt_on = 'Aan';
var txt_off = 'Uit';
var txt_zonon = 'Uit'; <!-- Dicht -->
var txt_zonoff = 'In'; <!-- Open -->
var txt_zonstopped = 'Gestopt';
var txt_zonstop = '| |';
<!-- var txt_dim_plus = ' + '; -->
<!-- var txt_dim_min = ' - '; -->

<!-- Change the text displayed in PopUps -->
var txt_switch_protected = '\'Schakelaar is beveiligd\'';
var txt_switch_on = '\'Inschakelen\'';
var txt_switch_off = '\'Uitschakelen\'';
var txt_blind_up = '\'Zonnescherm uit\'';
var txt_blind_down = '\'Zonnescherm in\'';
var txt_blind_stop = '\'Zonnescherm stoppen\'';

<!-- Change the timeout of the PopUp -->
var switch_protected_timeout = '1500';
var switch_on_timeout = '1500';
var switch_off_timeout = '1500';
var camera_doorbell_timeout = '15400';

<!-- Value for ZWave dimmer when on-->
var idx_zdimmer = '58';
var z_dimmer = '';
var z_whichdimmer = '';
//var o_dimmer = '80'; //value 80 is for light in garden
//var o_whichdimmer = '';

<!-- Set values so colors can change -->
var temp_freeze = '0';
var temp_freeze_color = ';color:#0090ff;';
var humidity_max = '70';
var humidity_max_color = ';color:#0090ff;';
var CPUmem_max = '95';
var mem_max_color = ';color:red;';
var CPUusage_max = '50';
var cpu_max_color = ';color:red;';
var color_on = ';color:#1B9772;';
var color_off = ';color:#E24E2A;';
var show_sonos_volume = true; <!-- show Sonos volume in desc text -->

<!-- Change idx of special items -->
var idx_CPUmem = '1';
var idx_HDDmem = '3';
var idx_CPUusage = '5';
var idx_CPUtemp = '4';
var idx_SunState = '14';
var idx_IsDonker = '14'; <!-- for day night css -->
var idx_FibaroWP = '1100';
var idx_Alarm = '30';
var idx_Rainmeter = '25';
var idx_Temp1 = '59'; <!-- Temp op kamer van Mark -->
var idx_Temp2 = '1100';
var idx_Temp3 = '1100';
var idx_Temp_buiten = '23';
var idx_Tempf = '1100';
var idx_Iphone5s = '10';
var idx_Telefoon_m = '11';
var idx_Voordeur = '28'; //'207';
var idx_Garagedeur = '1100'; //'208';
var idx_WindRichting = '24';
var idx_WindSnelheid = '24';
var idx_BewegingF = '1100';
var idx_LuxF = '1100';
var idx_ZonV = '1100';
var idx_ZonA = '1100';
var idx_Barometer = '23';
var idx_Visibility = '26';
var idx_Usage1 = '16';
var idx_Usage2 = '17';
var idx_UsageTot1 = '1100';
var idx_UsageTot2 = '1100';
var idx_Pi = '15';
var idx_PC = '9';
var idx_TV = '40';
var idx_TV2 = '51';
var idx_Lamp1 = '60';
var idx_Lamp2 = '7';
var idx_Lamp3 = '8';
var idx_NaarBed = "29";
var idx_Internet = "31";
var idx_Elec_Deken = '1100';
var idx_Kerstboom = '';
var idx_lichtslang = '53';

var idx_water_meter = '1100';
var idx_doorbell = '1100';
var idx_electricity_today = '16';
var idx_gas_today = '17';
var idx_ram_usage = '1';
var idx_cpu_usage = '5';

var IsNight = 'No';

<!-- Text for vdesc -->
var desc_alarm_off = 'Alarm uit';
var desc_alarm_home = 'Alarm aan (thuis)';
var desc_alarm_away = 'Alarm aan (weg)';
var desc_sunrise = 'Zon op';
var desc_sunset = 'Zon onder';
var desc_showsunboth = ''; // used to show sunrise and sunset in vdesc
var txt_sunboth='';
var txt_sunset='Zon onder';
var txt_sunrise='Zon op';
var var_sunrise='';
var var_sunset='';
var desc_protected = '<img src=icons/lock-closed_w.png align=right style="margin:1.5px 3px 0px -10px">'; //shows lock picture if device is protected or when plusmin is 4

<!-- This triggers the camera PopUp when the doorbell is pressed -->
<!-- Text could be 'On', 'Group On' or 'Chime' -->
var doorbell_status = 'On';
var idx_doorbell = '200'; //dummy switch which goes on when doorbell rings, goes off after 10 seconds
var doorbell_cmd = "lightbox_open('camera1', 15400);"

// ############################################################################################################
// #### vvvvv   USER VALUES below vvvvv   #######
// ############################################################################################################

$(document).ready(function() {
        $.roomplan=0;	// define roomplan in Domoticz and create items below.
        $.domoticzurl="http://10.0.0.200:8084";
		//format: idx, value, label, description, lastseen(1 when lastseen is wanted, 2 is only time), plusmin button or protected (0 for empty, 1 for buttons, 2 for volume of Sonos, 4 for protected, 5 for zwave dimmer, 6 for protected when on), [override css], [alarm value]
        $.PageArray = [

	['0','Desc',		'cell1',	'Woonkamer','1','0'], //Desc means show the sub cells
	['15','Temp',		'cell1a',	'','1','0'], //Lastseen only from cell_a possible
	['15','Humidity',	'cell1b',	'','1','0'],
	['0','Desc',		'cell2',	'Buitenklimaat','1','0'],
	['23','Temp',		'cell2a',	'temp','1','0'],
	['23','Humidity',	'cell2b',	'Humidity','1','0'],
	['23','ForecastStr',	'cell3',	'Weersvoorspelling','0','0'],
	['0','Desc',		'cell4',	'Energieverbruik [kwh]','0','0'],
	['16','Usage',		'cell4a',	'huidig','0','0'],
	['16','CounterToday',	'cell4b',	'Vandaag','0','0'],
	['0','Desc',		'cell5',	'Gasverbruik [m3]','0','0'],
	['17','CounterToday',	'cell5a',	'Vandaag','0','0'],
	['17','Data',		'cell5b',	'Totaal','0','0'],
	['46','SetPoint',	'cell6',	'verwarming','0','1'],
	['60','Status',		'cell7',	'Lamp voor','0','0'],
	['7','Status',		'cell8',	'Lamp Achter','0','0'],
	['8','Status',		'cell9',	'Lamp TV','0','0'],
	['40','Status',		'cell10',	'TV Meubel','0','0'],
//	['46','SetPoint',	'cell10',	'verwarming','0','1'],
	['29','Status',		'cell10',	'Naar Bed','0','0'], //6 is protected when on

	['18','Level',		'cell11',	'Iemand thuis','1','4'],
	['10','Status',		'cell12',	'Telefoon Hans','1','4'],
	['11','Status',		'cell13',	'Telefoon Linda','1','4'],
	['15','Status',		'cell14',	'Kodi','0','0'], //Level using for ZWave dimmer, vplusmin = 5 to start with level from z_dimmer
	//['103','Level',	'cell15',	'Achtertuin','1','1'],
	['51','Status',		'cell15',	'TV Slaapkamer','0','0'], //6 is protected when on
	['28','Status',		'cell16',	'Voordeur','1','4'],
	['0','Status',		'cell17',	'','1','0'],
	['53','Status',		'cell18',	'Lichtslang','0','0'],
	['1100','Status',	'cell19',	'','0','0'],
	['29','Status',		'cell20',	'Naar Bed','0','0'],

	['14','Status',		'cell21',	'Zon','0','0'],
	['0','Tijd',		'cell22',	'Tijd','0','0'],
	['30','Data',		'cell23',	'Alarm','0','0'],
	
	['0','Temp',		'cell25',	'Temperatuur buiten (C)','0','0'],
	
	['0','SunBoth',		'cell26',	'Dummy cel voor bepaling zon op en zon onder','0','0'],

	['14','Status',		'cell00',	'IsDonker','0','0'],

	['0','Desc',		'cell2_1',	'Kamer Mark','0','0'],
	['59','Temp',		'cell2_1a',	'Temp','1','0'],
	['59','Humidity',	'cell2_1b',	'Humidity','1','0'],
	['0','Desc',		'cell2_2',	'Kamer Emma','0','0'],
	['0','Temp',		'cell2_2a',	'Temp','1','0'],
	['0','Humidity',	'cell2_2b',	'Humidity','1','0'],
	//['49','ForecastStr',	'cell2_3',	'','0','0'],
	['1100','Status',	'cell2_3',	'','0','0'],
	['0','Desc',		'cell2_4',	'Slaapkamer','0','0'],
	['0','Temp',		'cell2_4a',	'Temp','1','0'],
	['0','Humidity',	'cell2_4b',	'Humidity','0','0'],
	['0','Desc',		'cell2_5',	'Badkamer','1','0'],
	['0','Temp',		'cell2_5a',	'Temp','1','0'],
	['0','Humidity',	'cell2_5b',	'Humidity','1','0'],

	['1100','Level',	'cell2_6',	'','1','5'],
	['1100','Status',	'cell2_7',	'','1','0'],
	//['145','Data',	'cell2_8',	'','1','4'],
	['1100','Data',		'cell2_8',	'','1','6'],
	['1100','Status',	'cell2_9',	'','1','0'],
	['1100','Status',	'cell2_10',	'','1','0'],

	['1100','Status',	'cell2_11',	'','1','0'],
	['1100','Status',	'cell2_12',	'','1','0'],
	['1100','Status',	'cell2_13',	'','1','0'],
	['1100','Status',	'cell2_14',	'','1','4'],
	['1100','Status',	'cell2_15',	'','1','4'],

	['1100','Data',		'cell2_16',	'','1','0'],
	['1100','Status',	'cell2_17',	'','1','0'],
	['1100','Status',	'cell2_18',	'','1','4'],
	['1100','Status',	'cell2_19',	'','1','0'],
	['1100','Data',		'cell2_20',	'','1','0'],

	['1100','Data',		'cell2_21',	'','1','0'], //CounterToday, Usage
	['0','Tijd',		'cell2_22',	'','0','0'],
	['1100','Data',		'cell2_23',	'','1','0'],
	['1100','','cell2_25',	'','0','0'],
	];
	$.PageArray_Scenes = [
	
	['5','Status',		'cell9',	'Lampen kamer','1','0'],
	//['7','Status',		'cell13',	'Lamp achtertuin','1','0'],

	];

// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################

RefreshData();
});


