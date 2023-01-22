-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Monthly_death_counts" (
    "Jurisdiction" varchar NOT NULL,
    "Year" int   NOT NULL,
    "Month" int   NOT NULL,
    "All_Cause" int   NOT NULL,
    "Natural_Cause" int   NOT NULL,
    "Septicemia" int   NOT NULL,
    "Malignant_Neoplasms" int   NOT NULL,
    "Diabetes_Mellitus" int   NOT NULL,
    "Alzheimer_Disease" int   NOT NULL,
    "Influenza_and_Pneumonia" int   NOT NULL,
    "Chronic_Lower_Respiratory_Diseases" int   NOT NULL,
    "Other_Diseases_of_Respiratory_System" int   NOT NULL,
    "Nephritis_NephroticSyndrome_Nephrosis" int   NOT NULL,
    "Symptoms_Signs_andAbnormalClinical_andLabFindings_NotElsewhereClassified" int   NOT NULL,
    "Diseases_of_Heart" int   NOT NULL,
    "Cerebrovascular_Diseases" int   NOT NULL,
    "Accidents_UnintentionalInjuries" int   NOT NULL,
    "Motor_Vehicle_Accidents" int   NOT NULL,
    "IntentionalSelf_harm_Suicides" int   NOT NULL,
    "Assault_Homicide" int   NOT NULL,
    "Drug_Overdose" int   NOT NULL
);

