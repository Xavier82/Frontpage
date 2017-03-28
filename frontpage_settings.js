<!-- Change the text for on/off switches -->
var txt_on = '<img src=icons/on.png>';
var txt_off = '<img src=icons/off.png>';
//var txt_on = 'Aan';
//var txt_off = 'Uit';
var txt_zonon = 'Dicht'; <!-- Dicht -->
var txt_zonoff = 'Open'; <!-- Open -->
var txt_zonstopped = 'Gestopt';
var txt_zonstop = '| |';
var txt_dim_plus = ' + ';
var txt_dim_min = ' - ';

<!-- Change the text displayed in PopUps -->
var txt_switch_protected = '\'Schakelaar is beveiligd\'';
var txt_switch_on = '\'Inschakelen\'';
var txt_switch_off = '\'Uitschakelen\'';
var txt_blind_up = '\'Rolluik omhoog\'';
var txt_blind_down = '\'Rolluik omlaag\'';
var txt_blind_stop = '\'Rolluik stoppen\'';

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
var idx_CPUmem = '20';
var idx_HDDmem = '21';
var idx_CPUusage = '24';
var idx_CPUtemp = '1100';
var idx_SunState = '25';
var idx_IsDonker = '25'; <!-- for day night css -->
var idx_FibaroWP = '1100';
var idx_Alarm = '1100';
var idx_Rainmeter = '25';
var idx_Temp1 = '1100';
var idx_Temp2 = '1100';
var idx_Temp3 = '1100';
var idx_Temp_buiten = '15';
var idx_Tempf = '1100';
var idx_Iphone5s = '1100';
var idx_Telefoon_m = '1100';
var idx_Voordeur = '1100'; //'1100';
var idx_Garagedeur = '1100'; //'1100';
var idx_WindRichting = '24';
var idx_WindSnelheid = '24';
var idx_BewegingF = '1100';
var idx_LuxF = '1100';
var idx_ZonV = '0';
var idx_ZonA = '0';
var idx_Barometer = '15';
var idx_Visibility = '18';
var idx_Usage1 = '13';
var idx_Usage2 = '14';
var idx_UsageTot1 = '1100';
var idx_UsageTot2 = '1100';
var idx_electricity_today = '13';
var idx_gas_today = '14';
var idx_verlichting_oprit = '10';
var idx_Sunrise = '0';
var idx_Rolluiken_1 = '1';
var idx_Rolluik_2 = '2';
var idx_Rolluik_3 = '3';
var idx_Rolluik_4 = '4';
var idx_Rolluik_5 = '5';
var idx_Rolluik_6 = '6';
var idx_Rolluik_7 = '7';
var idx_Rolluik_8 = '8';
var idx_Rolluik_9 = '9';
var idx_Versterker = '26';
var idx_Volume_up = '27';
var idx_Volume_down = '28';
var idx_FM_Channel_up = '30';
var idx_FM_Channel_down = '31';
var idx_Afval = '32';
var idx_Spots_Overkapping = '76'
var idx_Verlichting_overkapping = '77'

var IsNight = 'No';

<!-- Text for vdesc -->
var desc_alarm_off = 'Alarm uit';
var desc_alarm_home = 'Alarm aan (thuis)';
var desc_alarm_away = 'Alarm aan (weg)';
var desc_sunrise = 'Zon op';
var desc_sunset = 'Zon onder';
var desc_showsunboth = ''; // used to show sunrise and sunset in vdesc
var txt_sunboth='';
var txt_Sunset='Zon onder';
var txt_sunrise='Zon op';
var var_Sunrise='';
var var_Sunset='';
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
        $.domoticzurl="http://DOMOTICZ IP:8084";
		//format: idx, value, label, description, lastseen(1 when lastseen is wanted, 2 is only time), plusmin button or protected (0 for empty, 1 for buttons, 2 for volume of Sonos, 4 for protected, 5 for zwave dimmer, 6 for protected when on), [override css], [alarm value]
        $.PageArray = [

	['0','Desc',		'cell1',	'Buitentemperatuur','1','0'], //Desc means show the sub cells
	['15','Temp',		'cell1a',	'','1','0'], //Lastseen only from cell_a possible
	['15','Humidity',	'cell1b',	'','1','0'],
	['0','Desc',		'cell2',	'NAS','1','0'],
	['24','Status',	'cell2a',	'','1','0'],
	['20','Status',	'cell2b',	'','1','0'],
	['21','Status',	'cell2c',	'','1','0'],
	['15','ForecastStr',	'cell3',	'Weersvoorspelling','0','0'],
	['0','Desc',		'cell4',	'Gasverbruik [m3]','0','0'],
	['14','CounterToday',		'cell4a',	'','0','0'],
	['14','Data',	'cell4b',	'','0','0'],
	['0','Desc',		'cell5',	'Energieverbruik [kwh]','0','0'],
	['13','Usage',	'cell5a',	'','0','0'],
	['13','CounterToday',		'cell5b',	'','0','0'],
	['13','Counter',		'cell5c',	'','0','0'],
	['10','Status',		'cell6',	'Spots oprit','1','0'],
	['76','Data',		'cell7',	'Spots overkapping','1','0'],
	['77','Data',		'cell8',	'Verlichting overkapping','1','0'],
	//['1100','Status',		'cell9',	'','1','0'],
	//['1100','Data',	'cell10',	'','0','0'],
	['6','Status',		'cell11',	'Rolluiken groep','1','0'],
	['9','Data',		'cell12',	'Rolluik voor','1','0'],
	['8','Data',		'cell13',	'Rolluik achter','1','0'],
	['7','Data',		'cell14',	'Rolluik 1','1','0'],
	['6','Status',		'cell15',	'Rolluiken 2','1','0'],
	//['1100','Data',		'cell16',	'','1','0'],
	//['1100','Data',		'cell17',	'','1','0'],
	//['1100','Data',		'cell18',	'','1','0'],
	//['1100','Data',		'cell19',	'','1','0'],
	['32','Level',		'cell20',	'Afval','0','0'],

	['25','Status',		'cell21',	'Zon','0','0'],
	['1','Tijd',		'cell22',	'Tijd','0','0'],
	//['1100','Data',		'cell23',	'Alarm','0','0'],
	
	['0','Temp',		'cell25',	'Temperatuur buiten (C)','0','0'],
	
	['0','SunBoth',		'cell26',	'Dummy cel voor bepaling zon op en zon onder','0','0'],

	['25','Status',		'cell00',	'IsDonker','0','0'],

	//['1100','Desc',		'cell2_1',	'','1','0'],
	//['1100','Temp',		'cell2_1a',	'','1' ,'0'],
	//['1100','Humidity',	'cell2_1b',	'','1','0'],
	//['1100','Desc',		'cell2_2',	'','0','0'],
	//['1100','Data',		'cell2_2a',	'','0','0'],
	//['1100','Data',		'cell2_2b',	'','0','0'],
	//['1100','Data',		'cell2_2c',	'','0','0'],
	//['1100','ForecastStr',	'cell2_3',	'','0','0'],
	//['1100','Desc',		'cell2_4',	'','0','0'],
	//['1100','CounterToday',		'cell2_4a',	'','0','0'],
	//['1100','Data',		'cell2_4b',	'','0','0'],
	//['1100','Desc',		'cell2_5',	'','0','0'],
	//['1100','Usage',		'cell2_5a',	'','0','0'],
	//['1100','CounterToday',	'cell2_5b',	'','0','0'],
	//['1100','Counter',		'cell2_5c',	'','0','0'],
	//['1100','Level',	'cell2_6',	'','1','5'],
	//['1100','Status',	'cell2_7',	'','1','0'],
	//['145','Data',	'cell2_8',	'','1','4'],
	//['1100','Data',	'cell2_8',	'','1','6'],
	//['1100','Status',	'cell2_9',	'','1','0'],
	//['1100','Status',	'cell2_10',	'','1','0'],
	//['1100','Status',	'cell2_11',	'','1','0'],
	//['1100','Status',	'cell2_12',	'','1','0'],
	//['1100','Status',	'cell2_13',	'','1','0'],
	//['1100','Status',	'cell2_14',	'','1','4'],
	//['1100','Status',	'cell2_15',	'','1','4'],
	['0','Desc',	'cell2_16',		'Radio','0','0'],
	['26','Data',	'cell2_16a',	'','0','0'],
	//['1100,'Data',	'cell2_16b',	'','1','1'],
	['28','Data',	'cell2_16c',	'','0','0'],
	['27','Data',	'cell2_16d',	'','0','0'],
	['31','Data',	'cell2_16e',	'','0','0'],
	['30','Data',	'cell2_16f',	'','0','0'],
	//['1100','Desc',	'cell2_17',		'','0','0'],
	//['1100','Status',	'cell2_18',	'','1','0'],
	//['1100','Status',	'cell2_19',	'','1','0'],
	//['1100','Data',	'cell2_20',	'','1','0'],

	['25','Status',		'cell2_21',	'Zon','0','0'],
	['1','Tijd',		'cell2_22',	'Tijd','0','0'],
	['1100','Data',		'cell2_23',	'Alarm','0','0'],

	['0','Temp',		'cell2_25',	'Temperatuur buiten (C)','0','0'],
	
	['0','SunBoth',		'cell26',	'Dummy cel voor bepaling zon op en zon onder','0','0'],

	['25','Status',		'cell00',	'IsDonker','0','0'],
	];
	$.PageArray_Scenes = [
	
	//['1','Status',		'cell16',	'Rolluiken slaapkamer','1','0'],
	//['7','Status',		'cell13',	'Lamp achtertuin','1','0'],

	];

// ############################################################################################################
// #### ^^^^^   USER VALUES above ^^^^^   #######
// ############################################################################################################

RefreshData();
});


