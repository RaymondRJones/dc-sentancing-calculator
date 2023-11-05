
export const group_and_criminal_score_to_months = {
    "Group 1": {
      "0 to 0.5": "360 - 720",
      "0.75 to 1.75": "360 - 720",
      "2 to 3.75": "360 - 720",
      "4 to 5.75": "360 - 720",
      "6+": "360+"
    },
    "Group 2": {
      "0 to 0.5": "144 - 288",
      "0.75 to 1.75": "156 - 300",
      "2 to 3.75": "168 - 312",
      "4 to 5.75": "180 - 324",
      "6+": "192+"
    },
    "Group 3": {
      "0 to 0.5": "90 - 180",
      "0.75 to 1.75": "102 - 192",
      "2 to 3.75": "114 - 204",
      "4 to 5.75": "126 - 216",
      "6+": "138+"
    },
    "Group 4": {
      "0 to 0.5": "48 - 120",
      "0.75 to 1.75": "60 - 132",
      "2 to 3.75": "72 - 144",
      "4 to 5.75": "84 - 156",
      "6+": "96+"
    },
    "Group 5": {
      "0 to 0.5": "36 - 84",
      "0.75 to 1.75": "48 - 96",
      "2 to 3.75": "60 - 108",
      "4 to 5.75": "72 - 120",
      "6+": "84+"
    },
    "Group 6": {
      "0 to 0.5": "18 - 60",
      "0.75 to 1.75": "24 - 66",
      "2 to 3.75": "30 - 72",
      "4 to 5.75": "36 - 78",
      "6+": "42+"
    },
    "Group 7": {
      "0 to 0.5": "12 - 36",
      "0.75 to 1.75": "18 - 42",
      "2 to 3.75": "24 - 48",
      "4 to 5.75": "30 - 54",
      "6+": "36+"
    },
    "Group 8": {
      "0 to 0.5": "6 - 24",
      "0.75 to 1.75": "10 - 28",
      "2 to 3.75": "14 - 32",
      "4 to 5.75": "18 - 36",
      "6+": "22+"
    },
    "Group 9": {
      "0 to 0.5": "1 - 12",
      "0.75 to 1.75": "3 - 16",
      "2 to 3.75": "5 - 20",
      "4 to 5.75": "7 - 24",
      "6+": "9+"
    }
  };
  export const groupToHistoryScore = {
    "Group 1": 3,
    "Group 2": 3,
    "Group 3": 3,
    "Group 4": 3,
    "Group 5": 3,
    "Group 6": 2,
    "Group 7": 2,
    "Group 8": 1,
    "Group 9": 1
  };
  
  export const offenseToSeverityGroup = {
    // Group 1 Offenses
    'Murder 1º w/a': 1,
    'Murder 1 º': 1,
    'Murder of a law enforcement officer 1º': 1,
  
    // Group 2 Offenses
    'Murder 2º w/a': 2,
    'Murder 2º': 2,
    'Sexual abuse 1º': 2,
    'Child sexual abuse 1º w/a': 2,
    'Sexual abuse 1ºw/a': 2,
  
    // Group 3 Offenses
    'AWIK w/a': 3,
    'Burglary 1º w/a': 3,
    'Carjacking w/a': 3,
    'Child sexual abuse 1º': 3,
    'Kidnapping w/a': 3,
    'Voluntary manslaughter w/a': 3,
  
    // Group 4 Offenses
    'Aggravated assault w/a': 4,
    'Voluntary manslaughter': 4,
  
    // Group 5 Offenses
    'Armed robbery': 5,
    'Current APO w/a (30-year statutory maximum)': 5,
    'AWI commit any offense w/a': 5,
    'AWI commit robbery w/a': 5,
    'AWIK': 5,
    'Burglary 1º': 5,
    'Carjacking': 5,
    'Involuntary Manslaughter w/a': 5,
    'Involuntary Manslaughter': 5,
    'Kidnapping': 5,
    'Malicious disfigurement w/a': 5,
    'Mayhem w/a': 5,
    'Obstruction of justice': 5,
    'PFCOV': 5,
    'Child sexual abuse 2º w/a': 5,
    'Sexual abuse 2º w/a': 5,
    'Sexual abuse 2º': 5,
    'AWI commit 1º child sexual abuse w/a': 5,
    'AWI commit 2º child sexual abuse w/a': 5,
    'AWI commit 1º sexual abuse w/a': 5,
    'AWI commit 2º sexual abuse w/a': 5,
    'Child sexual abuse, attempt 1º w/a': 5,
    'Child sexual abuse, attempt 2º w/a': 5,
    'Sexual abuse, attempt 1º w/a': 5,
    'Sexual abuse, attempt 2º w/a': 5,
  
    // Group 6 Offenses
    'Aggravated assault': 6,
    'Arson': 6,
    'Former APO with a dangerous weapon*': 6,
    'ADW': 6,
    'AWI commit robbery': 6,
    'Attempt robbery w/a': 6,
    'Burglary 2º w/a': 6,
    'Cruelty to children 1º': 6,
    'Malicious disfigurement': 6,
    'Mayhem': 6,
    'Robbery': 6,
    'AWI commit 1º child sexual abuse': 6,
    'AWI commit 2º child sexual abuse': 6,
    'AWI commit 1º sexual abuse': 6,
    'AWI commit 2º sexual abuse': 6,
    'Child sexual abuse, attempt 1º': 6,
    'Child sexual abuse 2º': 6,
    'Sexual abuse, attempt 1º': 6,
  
    // Group 7 Offenses
    'AWI commit mayhem': 7,
    'Current APO (10-year statutory maximum)': 7,
    'Burglary 2º': 7,
    'Negligent homicide': 7,
    'Felon in possession of firearm (prior COV not conspiracy)†': 7,
    'Sexual abuse, attempt 2º': 7,
    'Sexual abuse of a patient 1º': 7,
    'Sexual abuse of a ward 1º': 7,
    'Sexual abuse 3º': 7,
    'UUV (during or to facilitate a crime of violence)': 7,
  
    // Group 8 Offenses
    'AWI commit any offense': 8,
    'Aggravated assault, attempt': 8,
    'Assault with Significant Injury': 8,
    'Burglary, attempt': 8,
    'CPWL/CDW': 8,
    'Cruelty to children 2º': 8,
    'DP (f)': 8,
    'Extortion': 8,
    'UPF (felon in possession of a firearm)': 8,
    'Introducing contraband into penal institution: Class A Materials': 8,
    'Kidnapping, attempt': 8,
    'Perjury': 8,
    'Robbery, attempt': 8,
    'Theft 1º': 8,
    'Threats': 8,
    'Trafficking in stolen property': 8,
    'UUV': 8,
    'Child sexual abuse, attempt 2º': 8,
    'Enticing a child': 8,
    'Sexual abuse of a patient, attempt 1º': 8,
    'Sexual abuse of a ward, attempt 1º': 8,
    'Sexual abuse, attempt 3º': 8,
    'Sexual abuse 4º': 8,
    'Sexual abuse of a patient 2º': 8,
    'Sexual abuse of a ward 2º': 8,
    'Unlawful possession of a firearm': 8,
  
    // Group 9 Offenses
    'Bad check': 9,
    'Bail reform act (BRA)': 9,
    'Blackmail': 9,
    'Credit card fraud': 9,
    'Escape': 9,
    'False personation of a police officer': 9,
    'Forgery': 9,
    'Fraud 1º': 9,
    'Fraud 2º': 9,
    'Impersonating a public official': 9,
    'Introducing contraband into penal institution: Class B Materials': 9,
    'PPW -- second + offense': 9,
    'RSP': 9,
    'Breaking and Entering (vending machine)': 9,
    'Uttering': 9,
    'Enticing a child. attempt': 9,
    'Sexual abuse 4º, attempt': 9,
    'Sexual abuse of a patient 2º, attempt': 9,
    'Sexual abuse of a ward 2º, attempt': 9,
    'Theft 2 º, if two or more Theft conviction': 9
  };
  
