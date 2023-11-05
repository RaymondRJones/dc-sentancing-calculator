
export const offense_and_criminal_score_to_months = {
    // Group 1 offenses
    "1st degree murder with armed": {
      "0 to 0.5": "360 - 720",
      "0.75 to 1.75": "360 - 720",
      "2 to 3.75": "360 - 720",
      "4 to 5.75": "360 - 720",
      "6+": "360+"
    },
    // Group 2 offenses (Only part of the data is shown for brevity)
    "2nd degree murder with armed": {
      // Assuming a typo in the score "1" should be "0 to 0.5" as in other examples
      "0 to 0.5": "144 - 288",
      // ... other scores and their ranges
    },
    "1st degree sex abuse": {
      "0 to 0.5": "156 - 300",
      // ... other scores and their ranges
    },
    // ... other offenses in Group 2
    // Group 3 offenses
    // ... offenses and their score ranges
    // Group 4 offenses
    "Aggravated assault with armed": {
      "0 to 0.5": "48 - 120",
      "0.75 to 1.75": "60 - 132",
      "2 to 3.75": "72 - 144",
      "4 to 5.75": "84 - 156",
      "6+": "96+"
    },
    // ... other offenses in Group 4
    // Group 5 offenses
    // ... offenses and their score ranges
    // Group 6 offenses
    "ADW": {
      "0 to 0.5": "18 - 60",
      // ... other scores and their ranges
    },
    // ... other offenses in Group 6
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
  
// This represents a simplified version of the master grid. You would fill in the complete data.
export const masterGrid = {
    "Armed Robbery": {
      severityGroup: "1",
      offenseGroup: "Most Common Offense"
      // Additional details as necessary
    },
    "Burglary 1o": {
      severityGroup: "5",
      offenseGroup: "Most Common Offense"
      // Additional details as necessary
    },
    // ... other offenses
  };
  
  // This represents the drug grid. Again, you would complete it with all necessary data.
  export const drugGrid = {
    "Distribution of Marijuana": {
      severityGroup: "2",
      drugGroup: "Most Common Drug Offense"
      // Additional details as necessary
    },
    // ... other drug offenses
  };
  
  // The criminal history score would be calculated based on rules in §2.2,
  // which you would need to implement as a function that takes a defendant's history
  // and returns a score. Here is a placeholder for such a function:
  export const calculateCriminalHistoryScore = (defendantHistory) => {
    // Implement the scoring logic as per §2.2
    let score = 0;
    // Example calculation - this will depend on your specific rules
    score += defendantHistory.priorFelonyConvictions ? 1 : 0;
    // ... other history factors
    return score;
  };
  
  // Severity groups could be a simple mapping or a more complex structure if needed
  export const severityGroups = {
    "1": { description: "Most Severe" },
    "2": { description: "Severe" },
    // ... other severity levels
  };
  