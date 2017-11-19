/*
   Author: Hualin Xiao

 
 */
var elements= [
{
	"atomic_number": 1,
	"symbol": "H",
	"mass": 1.00794,
	"name": "Hydrogen",
	"density": 0.000083748,
	"ionizationEnergy": 19.2
},
{
	"atomic_number": 2,
	"symbol": "He",
	"mass": 4.002602,
	"name": "Helium",
	"density": 0.000166322,
	"ionizationEnergy": 41.8
},
{
	"atomic_number": 3,
	"symbol": "Li",
	"mass": 6.941,
	"name": "Lithium",
	"density": 0.534,
	"ionizationEnergy": 40
},
{
	"atomic_number": 4,
	"symbol": "Be",
	"mass": 9.012182,
	"name": "Beryllium",
	"density": 1.848,
	"ionizationEnergy": 63.7
},
{
	"atomic_number": 5,
	"symbol": "B",
	"mass": 10.811,
	"name": "Boron",
	"density": 2.37,
	"ionizationEnergy": 76
},
{
	"atomic_number": 6,
	"symbol": "C",
	"mass": 12.0107,
	"name": "Carbon",
	"density": 2,
	"ionizationEnergy": 81
},
{
	"atomic_number": 7,
	"symbol": "N",
	"mass": 14.0067,
	"name": "Nitrogen",
	"density": 0.0011652,
	"ionizationEnergy": 82
},
{
	"atomic_number": 8,
	"symbol": "O",
	"mass": 15.9994,
	"name": "Oxygen",
	"density": 0.00133151,
	"ionizationEnergy": 95
},
{
	"atomic_number": 9,
	"symbol": "F",
	"mass": 18.9984032,
	"name": "Fluorine",
	"density": 0.00158029,
	"ionizationEnergy": 115
},
{
	"atomic_number": 10,
	"symbol": "Ne",
	"mass": 20.1797,
	"name": "Neon",
	"density": 0.000838505,
	"ionizationEnergy": 137
},
{
	"atomic_number": 11,
	"symbol": "Na",
	"mass": 22.98976928,
	"name": "Sodium",
	"density": 0.971,
	"ionizationEnergy": 149
},
{
	"atomic_number": 12,
	"symbol": "Mg",
	"mass": 24.305,
	"name": "Magnesium",
	"density": 1.74,
	"ionizationEnergy": 156
},
{
	"atomic_number": 13,
	"symbol": "Al",
	"mass": 26.9815386,
	"name": "Aluminum",
	"density": 2.699,
	"ionizationEnergy": 166
},
{
	"atomic_number": 14,
	"symbol": "Si",
	"mass": 28.0855,
	"name": "Silicon",
	"density": 2.33,
	"ionizationEnergy": 173
},
{
	"atomic_number": 15,
	"symbol": "P",
	"mass": 30.973762,
	"name": "Phosphorus",
	"density": 2.2,
	"ionizationEnergy": 173
},
{
	"atomic_number": 16,
	"symbol": "S",
	"mass": 32.065,
	"name": "Sulfur",
	"density": 2,
	"ionizationEnergy": 180
},
{
	"atomic_number": 17,
	"symbol": "Cl",
	"mass": 35.453,
	"name": "Chlorine",
	"density": 0.00299473,
	"ionizationEnergy": 174
},
{
	"atomic_number": 18,
	"symbol": "Ar",
	"mass": 39.948,
	"name": "Argon",
	"density": 0.00166201,
	"ionizationEnergy": 188
},
{
	"atomic_number": 19,
	"symbol": "K",
	"mass": 39.0983,
	"name": "Potassium",
	"density": 0.862,
	"ionizationEnergy": 190
},
{
	"atomic_number": 20,
	"symbol": "Ca",
	"mass": 40.078,
	"name": "Calcium",
	"density": 1.55,
	"ionizationEnergy": 191
},
{
	"atomic_number": 21,
	"symbol": "Sc",
	"mass": 44.955912,
	"name": "Scandium",
	"density": 2.989,
	"ionizationEnergy": 216
},
{
	"atomic_number": 22,
	"symbol": "Ti",
	"mass": 47.867,
	"name": "Titanium",
	"density": 4.54,
	"ionizationEnergy": 233
},
{
	"atomic_number": 23,
	"symbol": "V",
	"mass": 50.9415,
	"name": "Vanadium",
	"density": 6.11,
	"ionizationEnergy": 245
},
{
	"atomic_number": 24,
	"symbol": "Cr",
	"mass": 51.9961,
	"name": "Chromium",
	"density": 7.18,
	"ionizationEnergy": 257
},
{
	"atomic_number": 25,
	"symbol": "Mn",
	"mass": 54.938045,
	"name": "Manganese",
	"density": 7.44,
	"ionizationEnergy": 272
},
{
	"atomic_number": 26,
	"symbol": "Fe",
	"mass": 55.845,
	"name": "Iron",
	"density": 7.874,
	"ionizationEnergy": 286
},
{
	"atomic_number": 27,
	"symbol": "Co",
	"mass": 58.933195,
	"name": "Cobalt",
	"density": 8.9,
	"ionizationEnergy": 297
},
{
	"atomic_number": 28,
	"symbol": "Ni",
	"mass": 58.6934,
	"name": "Nickel",
	"density": 8.902,
	"ionizationEnergy": 311
},
{
	"atomic_number": 29,
	"symbol": "Cu",
	"mass": 63.546,
	"name": "Copper",
	"density": 8.96,
	"ionizationEnergy": 322
},
{
	"atomic_number": 30,
	"symbol": "Zn",
	"mass": 65.38,
	"name": "Zinc",
	"density": 7.133,
	"ionizationEnergy": 330
},
{
	"atomic_number": 31,
	"symbol": "Ga",
	"mass": 69.723,
	"name": "Gallium",
	"density": 5.904,
	"ionizationEnergy": 334
},
{
	"atomic_number": 32,
	"symbol": "Ge",
	"mass": 72.64,
	"name": "Germanium",
	"density": 5.323,
	"ionizationEnergy": 350
},
{
	"atomic_number": 33,
	"symbol": "As",
	"mass": 74.9216,
	"name": "Arsenic",
	"density": 5.73,
	"ionizationEnergy": 347
},
{
	"atomic_number": 34,
	"symbol": "Se",
	"mass": 78.96,
	"name": "Selenium",
	"density": 4.5,
	"ionizationEnergy": 348
},
{
	"atomic_number": 35,
	"symbol": "Br",
	"mass": 79.904,
	"name": "Bromine",
	"density": 0.0070721,
	"ionizationEnergy": 343
},
{
	"atomic_number": 36,
	"symbol": "Kr",
	"mass": 83.798,
	"name": "Krypton",
	"density": 0.00347832,
	"ionizationEnergy": 352
},
{
	"atomic_number": 37,
	"symbol": "Rb",
	"mass": 85.4678,
	"name": "Rubidium",
	"density": 1.532,
	"ionizationEnergy": 363
},
{
	"atomic_number": 38,
	"symbol": "Sr",
	"mass": 87.62,
	"name": "Strontium",
	"density": 2.54,
	"ionizationEnergy": 366
},
{
	"atomic_number": 39,
	"symbol": "Y",
	"mass": 88.90585,
	"name": "Yttrium",
	"density": 4.469,
	"ionizationEnergy": 379
},
{
	"atomic_number": 40,
	"symbol": "Zr",
	"mass": 91.224,
	"name": "Zirconium",
	"density": 6.506,
	"ionizationEnergy": 393
},
{
	"atomic_number": 41,
	"symbol": "Nb",
	"mass": 92.90638,
	"name": "Niobium",
	"density": 8.57,
	"ionizationEnergy": 417
},
{
	"atomic_number": 42,
	"symbol": "Mo",
	"mass": 95.96,
	"name": "Molybdenum",
	"density": 10.22,
	"ionizationEnergy": 424
},
{
	"atomic_number": 43,
	"symbol": "Tc",
	"mass": 98,
	"name": "Technetium",
	"density": 11.5,
	"ionizationEnergy": 428
},
{
	"atomic_number": 44,
	"symbol": "Ru",
	"mass": 101.07,
	"name": "Ruthenium",
	"density": 12.41,
	"ionizationEnergy": 441
},
{
	"atomic_number": 45,
	"symbol": "Rh",
	"mass": 102.9055,
	"name": "Rhodium",
	"density": 12.41,
	"ionizationEnergy": 449
},
{
	"atomic_number": 46,
	"symbol": "Pd",
	"mass": 106.42,
	"name": "Palladium",
	"density": 12.02,
	"ionizationEnergy": 470
},
{
	"atomic_number": 47,
	"symbol": "Ag",
	"mass": 107.8682,
	"name": "Silver",
	"density": 10.5,
	"ionizationEnergy": 470
},
{
	"atomic_number": 48,
	"symbol": "Cd",
	"mass": 112.411,
	"name": "Cadmium",
	"density": 8.65,
	"ionizationEnergy": 469
},
{
	"atomic_number": 49,
	"symbol": "In",
	"mass": 114.818,
	"name": "Indium",
	"density": 7.31,
	"ionizationEnergy": 488
},
{
	"atomic_number": 50,
	"symbol": "Sn",
	"mass": 118.71,
	"name": "Tin",
	"density": 7.31,
	"ionizationEnergy": 488
},
{
	"atomic_number": 51,
	"symbol": "Sb",
	"mass": 121.76,
	"name": "Antimony",
	"density": 6.691,
	"ionizationEnergy": 487
},
{
	"atomic_number": 52,
	"symbol": "Te",
	"mass": 127.6,
	"name": "Tellurium",
	"density": 6.24,
	"ionizationEnergy": 485
},
{
	"atomic_number": 53,
	"symbol": "I",
	"mass": 126.90447,
	"name": "Iodine",
	"density": 4.93,
	"ionizationEnergy": 491
},
{
	"atomic_number": 54,
	"symbol": "Xe",
	"mass": 131.293,
	"name": "Xenon",
	"density": 0.00548536,
	"ionizationEnergy": 482
},
{
	"atomic_number": 55,
	"symbol": "Cs",
	"mass": 132.9054519,
	"name": "Cesium",
	"density": 1.873,
	"ionizationEnergy": 488
},
{
	"atomic_number": 56,
	"symbol": "Ba",
	"mass": 137.327,
	"name": "Barium",
	"density": 3.5,
	"ionizationEnergy": 491
},
{
	"atomic_number": 57,
	"symbol": "La",
	"mass": 138.90547,
	"name": "Lanthanum",
	"density": 6.154,
	"ionizationEnergy": 501
},
{
	"atomic_number": 58,
	"symbol": "Ce",
	"mass": 140.116,
	"name": "Cerium",
	"density": 6.657,
	"ionizationEnergy": 523
},
{
	"atomic_number": 59,
	"symbol": "Pr",
	"mass": 140.90765,
	"name": "Praseodymium",
	"density": 6.71,
	"ionizationEnergy": 535
},
{
	"atomic_number": 60,
	"symbol": "Nd",
	"mass": 144.242,
	"name": "Neodymium",
	"density": 6.9,
	"ionizationEnergy": 546
},
{
	"atomic_number": 61,
	"symbol": "Pm",
	"mass": 145,
	"name": "Promethium",
	"density": 7.22,
	"ionizationEnergy": 560
},
{
	"atomic_number": 62,
	"symbol": "Sm",
	"mass": 150.36,
	"name": "Samarium",
	"density": 7.46,
	"ionizationEnergy": 574
},
{
	"atomic_number": 63,
	"symbol": "Eu",
	"mass": 151.964,
	"name": "Europium",
	"density": 5.243,
	"ionizationEnergy": 580
},
{
	"atomic_number": 64,
	"symbol": "Gd",
	"mass": 157.25,
	"name": "Gadolinium",
	"density": 7.9004,
	"ionizationEnergy": 591
},
{
	"atomic_number": 65,
	"symbol": "Tb",
	"mass": 158.92535,
	"name": "Terbium",
	"density": 8.229,
	"ionizationEnergy": 614
},
{
	"atomic_number": 66,
	"symbol": "Dy",
	"mass": 162.5,
	"name": "Dysprosium",
	"density": 8.55,
	"ionizationEnergy": 628
},
{
	"atomic_number": 67,
	"symbol": "Ho",
	"mass": 164.93032,
	"name": "Holmium",
	"density": 8.795,
	"ionizationEnergy": 650
},
{
	"atomic_number": 68,
	"symbol": "Er",
	"mass": 167.259,
	"name": "Erbium",
	"density": 9.066,
	"ionizationEnergy": 658
},
{
	"atomic_number": 69,
	"symbol": "Tm",
	"mass": 168.93421,
	"name": "Thulium",
	"density": 9.321,
	"ionizationEnergy": 674
},
{
	"atomic_number": 70,
	"symbol": "Yb",
	"mass": 173.054,
	"name": "Ytterbium",
	"density": 6.73,
	"ionizationEnergy": 684
},
{
	"atomic_number": 71,
	"symbol": "Lu",
	"mass": 174.9668,
	"name": "Lutetium",
	"density": 9.84,
	"ionizationEnergy": 694
},
{
	"atomic_number": 72,
	"symbol": "Hf",
	"mass": 178.49,
	"name": "Hafnium",
	"density": 13.31,
	"ionizationEnergy": 705
},
{
	"atomic_number": 73,
	"symbol": "Ta",
	"mass": 180.94788,
	"name": "Tantalum",
	"density": 16.654,
	"ionizationEnergy": 718
},
{
	"atomic_number": 74,
	"symbol": "W",
	"mass": 183.84,
	"name": "Tungsten",
	"density": 19.3,
	"ionizationEnergy": 727
},
{
	"atomic_number": 75,
	"symbol": "Re",
	"mass": 186.207,
	"name": "Rhenium",
	"density": 21.02,
	"ionizationEnergy": 736
},
{
	"atomic_number": 76,
	"symbol": "Os",
	"mass": 190.23,
	"name": "Osmium",
	"density": 22.57,
	"ionizationEnergy": 746
},
{
	"atomic_number": 77,
	"symbol": "Ir",
	"mass": 192.217,
	"name": "Iridium",
	"density": 22.42,
	"ionizationEnergy": 757
},
{
	"atomic_number": 78,
	"symbol": "Pt",
	"mass": 195.084,
	"name": "Platinum",
	"density": 21.45,
	"ionizationEnergy": 790
},
{
	"atomic_number": 79,
	"symbol": "Au",
	"mass": 196.966569,
	"name": "Gold",
	"density": 19.32,
	"ionizationEnergy": 790
},
{
	"atomic_number": 80,
	"symbol": "Hg",
	"mass": 200.59,
	"name": "Mercury",
	"density": 13.546,
	"ionizationEnergy": 800
},
{
	"atomic_number": 81,
	"symbol": "Tl",
	"mass": 204.3833,
	"name": "Thallium",
	"density": 11.72,
	"ionizationEnergy": 810
},
{
	"atomic_number": 82,
	"symbol": "Pb",
	"mass": 207.2,
	"name": "Lead",
	"density": 11.35,
	"ionizationEnergy": 823
},
{
	"atomic_number": 83,
	"symbol": "Bi",
	"mass": 208.9804,
	"name": "Bismuth",
	"density": 9.747,
	"ionizationEnergy": 823
},
{
	"atomic_number": 84,
	"symbol": "Po",
	"mass": 209,
	"name": "Polonium",
	"density": 9.32,
	"ionizationEnergy": 830
},
{
	"atomic_number": 85,
	"symbol": "At",
	"mass": 210,
	"name": "Astatine",
	"density": 9.32,
	"ionizationEnergy": 825
},
{
	"atomic_number": 86,
	"symbol": "Rn",
	"mass": 222,
	"name": "Radon",
	"density": 0.00900662,
	"ionizationEnergy": 794
},
{
	"atomic_number": 87,
	"symbol": "Fr",
	"mass": 223,
	"name": "Francium",
	"density": 1,
	"ionizationEnergy": 827
},
{
	"atomic_number": 88,
	"symbol": "Ra",
	"mass": 226,
	"name": "Radium",
	"density": 5,
	"ionizationEnergy": 826
},
{
	"atomic_number": 89,
	"symbol": "Ac",
	"mass": 227,
	"name": "Actinium",
	"density": 10.07,
	"ionizationEnergy": 841
},
{
	"atomic_number": 90,
	"symbol": "Th",
	"mass": 232.03806,
	"name": "Thorium",
	"density": 11.72,
	"ionizationEnergy": 847
},
{
	"atomic_number": 91,
	"symbol": "Pa",
	"mass": 231.03588,
	"name": "Protactinium",
	"density": 15.37,
	"ionizationEnergy": 878
},
{
	"atomic_number": 92,
	"symbol": "U",
	"mass": 238.02891,
	"name": "Uranium",
	"density": 18.95,
	"ionizationEnergy": 890
},
{
	"atomic_number": 93,
	"symbol": "Np",
	"mass": 237,
	"name": "Neptunium",
	"density": 20.25,
	"ionizationEnergy": 902
},
{
	"atomic_number": 94,
	"symbol": "Pu",
	"mass": 244,
	"name": "Plutonium",
	"density": 19.84,
	"ionizationEnergy": 921
},
{
	"atomic_number": 95,
	"symbol": "Am",
	"mass": 243,
	"name": "Americium",
	"density": 13.67,
	"ionizationEnergy": 934
},
{
	"atomic_number": 96,
	"symbol": "Cm",
	"mass": 247,
	"name": "Curium",
	"density": 13.51,
	"ionizationEnergy": 939
},
{
	"atomic_number": 97,
	"symbol": "Bk",
	"mass": 247,
	"name": "Berkelium",
	"density": 14,
	"ionizationEnergy": 952
},
{
	"atomic_number": 98,
	"symbol": "Cf",
	"mass": 251,
	"name": "Californium",
	"density": 10,
	"ionizationEnergy": 966
},
{
	"atomic_number": 99,
	"symbol": "Es",
	"mass": 252,
	"name": "Einsteinium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 100,
	"symbol": "Fm",
	"mass": 257,
	"name": "Fermium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 101,
	"symbol": "Md",
	"mass": 258,
	"name": "Mendelevium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 102,
	"symbol": "No",
	"mass": 259,
	"name": "Nobelium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 103,
	"symbol": "Lr",
	"mass": 262,
	"name": "Lawrencium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 104,
	"symbol": "Rf",
	"mass": 267,
	"name": "Rutherfordium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 105,
	"symbol": "Db",
	"mass": 268,
	"name": "Dubnium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 106,
	"symbol": "Sg",
	"mass": 271,
	"name": "Seaborgium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 107,
	"symbol": "Bh",
	"mass": 272,
	"name": "Bohrium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 108,
	"symbol": "Hs",
	"mass": 270,
	"name": "Hassium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 109,
	"symbol": "Mt",
	"mass": 276,
	"name": "Meitnerium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 110,
	"symbol": "Ds",
	"mass": 281,
	"name": "Darmstadtium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 111,
	"symbol": "Rg",
	"mass": 280,
	"name": "Roentgenium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 112,
	"symbol": "Cn",
	"mass": 285,
	"name": "Copernicium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 113,
	"symbol": "Uut",
	"mass": 284,
	"name": "Ununtrium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 114,
	"symbol": "Uuq",
	"mass": 289,
	"name": "Ununquadium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 115,
	"symbol": "Uup",
	"mass": 288,
	"name": "Ununpentium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 116,
	"symbol": "Uuh",
	"mass": 293,
	"name": "Ununhexium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 117,
	"symbol": "Uus",
	"mass": 294,
	"name": "Ununseptium",
	"density": "",
	"ionizationEnergy": ""
},
{
	"atomic_number": 118,
	"symbol": "Uuo",
	"mass": 294,
	"name": "Ununoctium",
	"density": "",
	"ionizationEnergy": ""
}
];









$(function(){
	var	names='<select name="target">';
	for(var i=0;i<elements.length;i++)
	{
		names+='<option value="'+(i+1)+'">'+(i+1)+'  '+elements[i].name+'</option>';
	}
	names+='</select>';
	$('#mat').html(names);



	$("#frm").submit(function(e) {
		e.preventDefault();
		var data=$('#frm').serializeArray();
		var charge=data[0].value;
		var E=data[1].value;
		var atomicNumber=data[2].value;
		var binsz=data[3].value;

		console.log(charge);
		console.log(E);
		if(E<=0||binsz<=0)
		{
			$('#result').html('Invalid input...');
		}
		else
		{
			$('#result').html('Computing...');
			var    distance=0;
			var res;
			var  totalSP=0;
			var nsteps=1;
			var  T=0;
			var SP;
			var m, A, q, ro, Z, A, I;

			Z=atomicNumber;
			if(charge==1)
			{
				m=938.27;
			}
			else if(charge==2)
			{
				m=3327.3;
			}

			A=elements[Z-1].mass;
			q=charge;
			ro=elements[Z-1].density;
			I=elements[Z-1].ionizationEnergy*1e-6;
			console.log(elements[Z-1]);

			var step=0.1/ro;

			var table="Distance(mm)  Energy (MeV)\n";

			var k = 0.307075;
			var g, b2,T, SP;
			var Dx=[];
			var Ey=[];
			while(E>0 &&nsteps< 2e7)
			{
				nsteps+=1;
				g = 1.0 + (E/m);
				b2 = 1.0 - (1/(g*g));
				T = (1.022*b2*g*g)/ (1 + 2*g*(0.511/m) + Math.pow(0.511/m,2) );
				SP = ((ro*k*q*q*Z)/(A*b2))*(0.5*Math.log( (1.022*b2*g*g*T) / (I*I) ) - b2);
				totalSP+= SP;
				//step=0.02/SP;
				E = E - SP*step;
				distance+= step;
				Dx.push(distance);
				Ey.push(E);

			}
			for(var i=0;i<Dx.length;i++)
			{

				console.log("DL:"+Dx.length);
				console.log("BINSZ:"+binsz);
				var sz=Dx.length;
				var n=Math.floor(sz/binsz);
				console.log("N:"+n);
				if(n==0)n=1;
				console.log(n);
				if(i%n==0||i>Dx.length-5)table+=" "+Number(10*Dx[i]).toFixed(2)+ "   "+Number(Ey[i]).toFixed(2)+"\n";
			}

			$('#result').html('<pre>'+table+'</pre>');

		}


	});







});



