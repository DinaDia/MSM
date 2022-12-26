

const TreatmentList = () => {


    
    const treatmentSection=[

        {
          id: "1", 
          name: "RECOGNISED ANTIDEPRESSANTS"
        },
        {
          id: "2",
          name: "RECOGNISED AUGMENTATION THERAPIES"
        },
        {
          id: "3",
          name: "ANTIPSYCHOTICS AND MOOD STABILISERS"      
        },
        {
          id: "4",
          name: "OTHER REPORTED TREATMENTS"      
        }
      ];      

      const treatmentClass=[

        {
          id: "1", 
          treatmentID: "1",
          name: "Selective Serotonin Reuptake Inhibitors"
        },
        {
          id: "2", 
          treatmentID: "1",
          name: "Tricyclic Antidepressants"    
        },
        {
          id: "3", 
          treatmentID: "1",
          name: "Monoamine Oxidase Inhibitors"    
        },
        {
          id: "4", 
          treatmentID: "1",
          name: "Tetracyclic Antidepressants"    
        },
        {
          id: "5", 
          treatmentID: "1",
          name: "Serotonin-Noradrenaline Reuptake Inhibitors"    
        },
        {
          id: "6", 
          treatmentID: "1",
          name: "Serotonin Modulators & Stimulators"    
        },
        {
          id: "7", 
          treatmentID: "1",
          name: "Noradrenaline Reuptake Inhibitors"    
        },
        {
          id: "8", 
          treatmentID: "1",
          name: "Noradrenaline & Dopamine Reuptake Inhibitors"    
        },
        {
          id: "9", 
          treatmentID: "1",
          name: "Melatonin Agonists"    
        },
        {
          id: "10", 
          treatmentID: "1",
          name: "Others"    
        },
        {
          id: "11", 
          treatmentID: "2",
          name: "First and Second Line Therapies"    
        },
        {
          id: "12", 
          treatmentID: "2",
          name: "Third Line Therapies"    
        },
        {
          id: "13", 
          treatmentID: "3",
          name: "Atypical Antipsychotics"    
        },
        {
         id: "14", 
         treatmentID: "3",
         name: "Typical Antipsychotics"    
       },
       {
         id: "15", 
          treatmentID: "3",
         name: "Anticonvulsants"    
        },
       {
          id: "16", 
          treatmentID: "4",
          name: "Treatments for depression and related mood disorders"    
        },
        {
          id: "17", 
          treatmentID: "4",
          name: "Physical treatments"    
        }
      
      ];

      const medicineName=[

        {
          id: "1",
          treatmentClassId: "1", 
          name: "Citalopram"
        },
        {
          id: "2",
          treatmentClassId: "1", 
          name: "Escitalopram"
        },
        {
          id: "3",
          treatmentClassId: "1", 
          name: "Fluoxetine"
        },
        {
          id: "4",
          treatmentClassId: "1", 
          name: "Fluvoxamine"
        },
               {
          id: "5",
          treatmentClassId: "1", 
          name: "Paroxetine"
        },
        {
          id: "6",
          treatmentClassId: "1", 
          name: "Sertraline"
        },
        {
          id: "7",
          treatmentClassId: "2", 
          name: "Amitriptyline"
        },
        {
          id: "8",
          treatmentClassId: "2", 
          name: "Amoxapine"
        },
        {
          id: "9",
          treatmentClassId: "2", 
          name: "Clomipramine"
        },
        {
          id: "10",
          treatmentClassId: "2", 
          name: "Desipramine"
        },
        {
          id: "11",
          treatmentClassId: "2", 
          name: "Dosulepin/Dothiepin"
        },
        {
          id: "12",
          treatmentClassId: "2", 
          name: "Doxepin"
        },
        {
          id: "13",
          treatmentClassId: "2", 
          name: "Imipramine"
        },
               {
          id: "14",
          treatmentClassId: "2", 
          name: "Lofepramine"
        },
        {
          id: "15",
          treatmentClassId: "2", 
          name: "Nortriptyline"
        },
        {
          id: "16",
          treatmentClassId: "2", 
          name: "Protriptyline"
        },
        {
          id: "17",
          treatmentClassId: "2", 
          name: "Tianeptine"
        },
        {
          id: "18",
          treatmentClassId: "2", 
          name: "Trimipramine"
        },
        {
          id: "19",
          treatmentClassId: "3", 
          name: "Isocarboxazid"
        },
        {
          id: "20",
          treatmentClassId: "3", 
          name: "Phenelzine"
        },
        {
          id: "21",
          treatmentClassId: "3", 
          name: "Tranylcypromine"
        },
        {
          id: "22",
          treatmentClassId: "3", 
          name: "Moclobemide"
        },
        {
          id: "23",
          treatmentClassId: "3", 
          name: "Selegeline"
        },
        {
          id: "24",
          treatmentClassId: "4", 
          name: "Maprotiline"
        },
        {
          id: "25",
          treatmentClassId: "4", 
          name: "Mianserin"
        },
        {
          id: "26",
          treatmentClassId: "4", 
          name: "Mirtazepine"
        },
        {
          id: "27",
          treatmentClassId: "4", 
          name: "Nefazadone"
        },
        {
          id: "28",
          treatmentClassId: "4", 
          name: "Trazodone"
        },
        {
          id: "29",
          treatmentClassId: "5", 
          name: "Desvenlafaxine"
        },
        {
          id: "30",
          treatmentClassId: "5", 
          name: "Duloxetine"
        },
        {
          id: "31",
          treatmentClassId: "5", 
          name: "Levomilnacipran"
        },
        {
          id: "32",
          treatmentClassId: "5", 
          name: "Milnacipran"
        },
        {
          id: "33",
          treatmentClassId: "5", 
          name: "Venlafaxine"
        },
        {
          id: "34",
          treatmentClassId: "6", 
          name: "Vilazodone"
        },
        {
          id: "35",
          treatmentClassId: "6", 
          name: "Vortioxetine"
        },
        {
          id: "36",
          treatmentClassId: "7", 
          name: "Reboxetine"
        },
        {
          id: "37",
          treatmentClassId: "7", 
          name: "Viloxazine"
        },
        {
          id: "38",
          treatmentClassId: "8", 
          name: "Bupropion"
        },
        {
          id: "39",
          treatmentClassId: "9", 
          name: "Agomelatine"
        },
        {
          id: "40",
          treatmentClassId: "10", 
          name: "Flupentixol"
        },
        {
          id: "41",
          treatmentClassId: "11", 
          name: "Aripiprazole"
        },
        {
          id: "42",
          treatmentClassId: "11", 
          name: "Olanzapine"
        },
        {
          id: "43",
          treatmentClassId: "11", 
          name: "Quetiapine"
        },
        {
          id: "44",
          treatmentClassId: "11", 
          name: "Risperidone"
        },
        {
          id: "45",
          treatmentClassId: "11", 
          name: "Lamotrigine"
        },
        {
          id: "46",
          treatmentClassId: "11", 
          name: "Lithium"
        },
        {
          id: "47",
          treatmentClassId: "11", 
          name: `Liothyronine; tri-iodothyronine (T3)`
        },
        {
          id: "48",
          treatmentClassId: "11", 
          name: "Buspirone"
        },
        {
          id: "49",
          treatmentClassId: "11", 
          name: "Ketamine"
        },
        {
          id: "50",
          treatmentClassId: "12", 
          name: "Amantadine"
        },
        {
          id: "51",
          treatmentClassId: "12", 
          name: "Cabergoline"
        },
        {
          id: "52",
          treatmentClassId: "12", 
          name: "Dostinex / Cabaser"
        },
        {
          id: "53",
          treatmentClassId: "12", 
          name: "d-cycloserine"
        },
        {
          id: "54",
          treatmentClassId: "12", 
          name: "Dexamethasone"
        },
        {
          id: "55",
          treatmentClassId: "12", 
          name: "Dexamphetamine"
        },
        {
          id: "56",
          treatmentClassId: "12", 
          name: "Hyoscine"
        },
        {
          id: "57",
          treatmentClassId: "12", 
          name: "Ketoconazole"
        },
        {
          id: "58",
          treatmentClassId: "12", 
          name: "Mecamylamine"
        },
        {
          id: "59",
          treatmentClassId: "12", 
          name: "Methylphenidate"
        },
        {
          id: "60",
          treatmentClassId: "12", 
          name: "Modafinil"
        },
        {
          id: "61",
          treatmentClassId: "12", 
          name: "Nemifitide"
        },
        {
          id: "62",
          treatmentClassId: "12", 
          name: "Oestrogen"
        },

        {
          id: "63",
          treatmentClassId: "12", 
          name: "Oestrogen"
        },
        {
          id: "64",
          treatmentClassId: "12", 
          name: "Omega 3 triglycerides"
        },
        {
          id: "65",
          treatmentClassId: "12", 
          name: "Pindolol"
        },
        {
          id: "66",
          treatmentClassId: "12", 
          name: "Pramipexole"
        },
        {
          id: "67",
          treatmentClassId: "12", 
          name: "Riluzole"
        },
        {
          id: "68",
          treatmentClassId: "12", 
          name: "S-adenosyl-L-methionine"
        },
        {
          id: "69",
          treatmentClassId: "12", 
          name: "Testosterone"
        },
        {
          id: "70",
          treatmentClassId: "12", 
          name: "Tryptophan"
        },
        {
          id: "71",
          treatmentClassId: "12", 
          name: "Zinc"
        },
        {
          id: "72",
          treatmentClassId: "12", 
          name: "Ziprasidone"
        },
        {
          id: "73",
          treatmentClassId: "13", 
          name: "Amisulpiride"
        },
        {
          id: "74",
          treatmentClassId: "13", 
          name: "Asenapine"
        },
        {
          id: "75",
          treatmentClassId: "13", 
          name: "Clozapine"
        },
        {
          id: "76",
          treatmentClassId: "13", 
          name: "Iloperidone"
        },
        {
          id: "77",
          treatmentClassId: "13", 
          name: "Lurasidone"
        },
        {
          id: "78",
          treatmentClassId: "13", 
          name: "Melperone"
        },
        {
          id: "79",
          treatmentClassId: "13", 
          name: "Paliperidone"
        },
        {
          id: "80",
          treatmentClassId: "13", 
          name: "Sertindole"
        },
        {
          id: "81",
          treatmentClassId: "13", 
          name: "Zotepine"
        },
        {
          id: "82",
          treatmentClassId: "14", 
          name: "Chlorpromazine"
        },
        {
          id: "83",
          treatmentClassId: "14", 
          name: "Fluphenazine"
        },
        {
          id: "84",
          treatmentClassId: "14", 
          name: "Haloperidol"
        },
        {
          id: "85",
          treatmentClassId: "14", 
          name: "Levomepromazine"
        },
        {
          id: "86",
          treatmentClassId: "14", 
          name: "Pericyazine"
        },
        {
          id: "87",
          treatmentClassId: "14", 
          name: "Perphenazine"
        },
        {
          id: "88",
          treatmentClassId: "14", 
          name: "Pimozide"
        },
        {
          id: "89",
          treatmentClassId: "14", 
          name: "Prochlorperazine"
        },
        {
          id: "90",
          treatmentClassId: "14", 
          name: "Promazine"
        },
        {
          id: "91",
          treatmentClassId: "14", 
          name: "Sulpiride"
        },
        {
          id: "92",
          treatmentClassId: "14", 
          name: "Thioridazine"
        },
        {
          id: "93",
          treatmentClassId: "14", 
          name: "Trifluoperazine"
        },
        {
          id: "94",
          treatmentClassId: "14", 
          name: "Zuclopenthixol"
        },
        {
          id: "95",
          treatmentClassId: "15", 
          name: "Carbamazepine"
        },
        {
          id: "96",
          treatmentClassId: "15", 
          name: "Gabapentin"
        },
        {
          id: "97",
          treatmentClassId: "15", 
          name: "Levetiracetam"
        },
        {
          id: "98",
          treatmentClassId: "15", 
          name: "Oxcarbazepine"
        },
        {
          id: "99",
          treatmentClassId: "15", 
          name: "Phenytoin"
        },
        {
          id: "100",
          treatmentClassId: "15", 
          name: "Pregabilin"
        },
        {
          id: "101",
          treatmentClassId: "15", 
          name: "Semisodium Valproate"
        },
        {
          id: "102",
          treatmentClassId: "15", 
          name: "Sodium Valproate"
        },
        {
          id: "103",
          treatmentClassId: "15", 
          name: "Tiagabine"
        },
        {
          id: "104",
          treatmentClassId: "15", 
          name: "Topiramate"
        },
        {
          id: "105",
          treatmentClassId: "15", 
          name: "Zonisamide"
        },
        {
          id: "106",
          treatmentClassId: "16", 
          name: "Allopurinol"
        },
        {
          id: "107",
          treatmentClassId: "16", 
          name: "Amineptine"
        },
        {
          id: "108",
          treatmentClassId: "16", 
          name: "Armodafinil"
        },
        {
          id: "109",
          treatmentClassId: "16", 
          name: "Atamoxetine"
        },
        {
          id: "110",
          treatmentClassId: "16", 
          name: "Blonanserin"
        },
        {
          id: "111",
          treatmentClassId: "16", 
          name: "Bromocriptine"
        },
        {
          id: "112",
          treatmentClassId: "16", 
          name: "Brexpiprazole"
        },
        {
          id: "113",
          treatmentClassId: "16", 
          name: "Buprenorphine"
        },
        {
          id: "114",
          treatmentClassId: "16", 
          name: "Cariprazine"
        },
        {
          id: "115",
          treatmentClassId: "16", 
          name: "Clonidine"
        },
        {
          id: "116",
          treatmentClassId: "16", 
          name: "Clotiapine"
        },
        {
          id: "117",
          treatmentClassId: "16", 
          name: "Dexmethylphenidate"
        },
        {
          id: "118",
          treatmentClassId: "16", 
          name: "Esketamine"
        },
        {
          id: "119",
          treatmentClassId: "16", 
          name: "Etoperidone"
        },
        {
          id: "120",
          treatmentClassId: "16", 
          name: "Hydroxyzine"
        },
        {
          id: "121",
          treatmentClassId: "16", 
          name: "Indalpine"
        },
        {
          id: "122",
          treatmentClassId: "16", 
          name: "Inositol"
        },
        {
          id: "123",
          treatmentClassId: "16", 
          name: "Ketanserin"
        },
        {
          id: "124",
          treatmentClassId: "16", 
          name: "Melatonin"
        },
        {
          id: "125",
          treatmentClassId: "16", 
          name: "Metyrapone"
        },
        {
          id: "126",
          treatmentClassId: "16", 
          name: "Mifepristone"
        },
        {
          id: "127",
          treatmentClassId: "16", 
          name: "Mosopramine"
        },
        {
          id: "128",
          treatmentClassId: "16", 
          name: "Nimodipine"
        },
        {
          id: "129",
          treatmentClassId: "16", 
          name: "Nomifensine"
        },
        {
          id: "130",
          treatmentClassId: "16", 
          name: "Orphenadrine"
        },
        {
          id: "131",
          treatmentClassId: "16", 
          name: "Pergolide"
        },
        {
          id: "132",
          treatmentClassId: "16", 
          name: "Perospirone"
        },
        {
          id: "133",
          treatmentClassId: "16", 
          name: "Pipradrol"
        },
        {
          id: "134",
          treatmentClassId: "16", 
          name: "Prazosin"
        },
        {
          id: "135",
          treatmentClassId: "16", 
          name: "Propranolol"
        },
        {
          id: "136",
          treatmentClassId: "16", 
          name: "Pyrovalerone"
        },
        {
          id: "137",
          treatmentClassId: "16", 
          name: "Rasagiline"
        },
        {
          id: "138",
          treatmentClassId: "16", 
          name: "Remoxipride"
        },
        {
          id: "139",
          treatmentClassId: "16", 
          name: "Ritanserin"
        },
        {
          id: "140",
          treatmentClassId: "16", 
          name: "Ropinirole"
        },
        {
          id: "141",
          treatmentClassId: "16", 
          name: "Rotigotine"
        },        
        {
          id: "141",
          treatmentClassId: "16", 
          name: "Seteperone"
        },
        {
          id: "142",
          treatmentClassId: "16", 
          name: "Setiptiline"
        },
        {
          id: "143",
          treatmentClassId: "16", 
          name: `St John’s Wort`
        },
        {
          id: "144",
          treatmentClassId: "16", 
          name: "Tamoxifen"
        },
        {
          id: "145",
          treatmentClassId: "16", 
          name: "Tandospirone"
        },
        {
          id: "146",
          treatmentClassId: "16", 
          name: "Teniloxazine"
        },
        {
          id: "147",
          treatmentClassId: "16", 
          name: "Thyroxine (T4)"
        },
        {
          id: "148",
          treatmentClassId: "16", 
          name: "Tofenacin"
        },
        {
          id: "149",
          treatmentClassId: "16", 
          name: "Yohimbine"
        },
        {
          id: "150",
          treatmentClassId: "16", 
          name: "Zimelidine"
        },
        {
          id: "151",
          treatmentClassId: "17", 
          name: "ECT"
        },
        {
          id: "152",
          treatmentClassId: "17", 
          name: "rTMS"
        },
        {
          id: "153",
          treatmentClassId: "17", 
          name: "VNS"
        },     
        {
          id: "154",
          treatmentClassId: "17", 
          name: "Bright Light"
        },   
        {
          id: "155",
          treatmentClassId: "17", 
          name: "tDCS"
        }
      ]; 

  return {treatmentSection, treatmentClass, medicineName}
}

export default TreatmentList