
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
    'Murder first degree with armed': 1,
    'Murder first degree': 1,
    'Murder of a law enforcement officer first degree': 1,

    // Group 2 Offenses
    'Murder second degree with armed': 2,
    'Murder second degree': 2,
    'Sexual abuse first degree': 2,
    'Child sexual abuse first degree with armed': 2,
    'Sexual abuse first degree with armed': 2,

    // Group 3 Offenses
    'Assault with intent to kill with armed': 3,
    'Burglary first degree with armed': 3,
    'Carjacking with armed': 3,
    'Child sexual abuse first degree': 3,
    'Kidnapping with armed': 3,
    'Voluntary manslaughter with armed': 3,

    // Group 4 Offenses
    'Aggravated assault with armed': 4,
    'Voluntary manslaughter': 4,
  
    // Group 5 Offenses
    'Armed robbery': 5,
    'Assault on police officer with armed (30-year statutory maximum)': 5,
    'Assault with intent to commit any offense with armed': 5,
    'Assault with intent to commit robbery with armed': 5,
    'Assault with intent to kill': 5,
    'Burglary first degree': 5,
    'Carjacking': 5,
    'Involuntary manslaughter with armed': 5,
    'Involuntary manslaughter': 5,
    'Kidnapping': 5,
    'Malicious disfigurement with armed': 5,
    'Mayhem with armed': 5,
    'Obstruction of justice': 5,
    'Possession of a firearm during a crime of violence': 5,
    'Child sexual abuse second degree with armed': 5,
    'Sexual abuse second degree with armed': 5,
    'Sexual abuse second degree': 5,
    'Assault with intent to commit first degree child sexual abuse with armed': 5,
    'Assault with intent to commit second degree child sexual abuse with armed': 5,
    'Assault with intent to commit first degree sexual abuse with armed': 5,
    'Assault with intent to commit second degree sexual abuse with armed': 5,
    'Attempted child sexual abuse first degree with armed': 5,
    'Attempted child sexual abuse second degree with armed': 5,
    'Attempted sexual abuse first degree with armed': 5,
    'Attempted sexual abuse second degree with armed': 5,

    // Group 6 Offenses
    'Aggravated assault': 6,
    'Arson': 6,
    'Former assault on police officer with a dangerous weapon': 6,
    'Assault with a dangerous weapon': 6,
    'Assault with intent to commit robbery': 6,
    'Attempted robbery with armed': 6,
    'Burglary second degree with armed': 6,
    'Cruelty to children first degree': 6,
    'Malicious disfigurement': 6,
    'Mayhem': 6,
    'Robbery': 6,
    'Assault with intent to commit first degree child sexual abuse': 6,
    'Assault with intent to commit second degree child sexual abuse': 6,
    'Assault with intent to commit first degree sexual abuse': 6,
    'Assault with intent to commit second degree sexual abuse': 6,
    'Attempted child sexual abuse first degree': 6,
    'Child sexual abuse second degree': 6,
    'Attempted sexual abuse first degree': 6,

    // Group 7 Offenses
    'Assault with intent to commit mayhem': 7,
    'Current assault on police officer (10-year statutory maximum)': 7,
    'Burglary second degree': 7,
    'Negligent homicide': 7,
    'Felon in possession of firearm (prior crime of violence, not conspiracy)': 7,
    'Attempted sexual abuse second degree': 7,
    'Sexual abuse of a patient first degree': 7,
    'Sexual abuse of a ward first degree': 7,
    'Sexual abuse third degree': 7,
    'Unauthorized Use of a Vehicle (during or to facilitate a crime of violence)': 7,

    // Group 8 Offenses
    'Assault with intent to commit any offense': 8,
    'Attempted aggravated assault': 8,
    'Assault with Significant Bodily Injury': 8,
    'Attempted burglary': 8,
    'Carrying a Pistol Without License/Carrying a Dangerous Weapon': 8,
    'Cruelty to children second degree': 8,
    'Destruction of Property (felony)': 8,
    'Extortion': 8,
    'Unlawful Possession of a Firearm (felon in possession)': 8,
    'Introducing Class A contraband into a penal institution': 8,
    'Attempted kidnapping': 8,
    'Perjury': 8,
    'Attempted robbery': 8,
    'Theft first degree': 8,
    'Threats to do bodily harm': 8,
    'Trafficking in stolen property': 8,
    'Unauthorized Use of a Vehicle': 8,
    'Attempted child sexual abuse second degree': 8,
    'Enticing a child': 8,
    'Attempted sexual abuse of a patient first degree': 8,
    'Attempted sexual abuse of a ward first degree': 8,
    'Attempted sexual abuse third degree': 8,
    'Sexual abuse fourth degree': 8,
    'Sexual abuse of a patient second degree': 8,
    'Sexual abuse of a ward second degree': 8,
    'Unlawful possession of a firearm': 8,

    // Group 9 Offenses
    'Issuing a bad check': 9,
    'Violation of Bail Reform Act': 9,
    'Blackmail': 9,
    'Credit card fraud': 9,
    'Escape from custody': 9,
    'False personation of a police officer': 9,
    'Forgery': 9,
    'Fraud first degree': 9,
    'Fraud second degree': 9,
    'Impersonating a public official': 9,
    'Introducing Class B contraband into a penal institution': 9,
    'Possession of Prohibited Weapon -- second or more offense': 9,
    'Receiving Stolen Property': 9,
    'Breaking and Entering a vending machine': 9,
    'Uttering (passing forged documents)': 9,
    'Attempted enticing of a child': 9,
    'Attempted sexual abuse fourth degree': 9,
    'Attempted sexual abuse of a patient second degree': 9,
    'Attempted sexual abuse of a ward second degree': 9,
    'Theft second degree (if two or more theft convictions)': 9,

  };
  
