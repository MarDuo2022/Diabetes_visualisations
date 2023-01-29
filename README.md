# Diabetes_visualisations Project

This project aims to visualise diabetes as death indicator and associated factors over time/across different states in the US. It uses data from the Centers for Disease Control and Prevention (CDC) and kaggle to create interactive maps and charts that allow for easy comparison and analysis of diabetes rates. Charts.js javascript library is used to visualise the bar chart showing yearly death counts for top causes of death in the US.

## Deployment of site
Landing page is deployed via https://marduo2022.github.io/Diabetes_visualisations/

Interact with this page by clicking the appropriate links to visit the Map and Chart pages. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have the following software installed on your machine:
- Python 3.x
- Jupyter Notebook
- Pandas, Numpy, Plotly, and other libraries used in the project (these will be listed in the `requirements.txt` file)

### Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/MarDuo2022/Diabetes_visualisations.git
```

2. Navigate to the project directory:
```
cd Diabetes_visualisations
```
3. Install the necessary dependencies:
```
pip install -r requirements.txt
```

### Usage

1. In the browser window that opens, navigate to the project directory and open the folder `code`.
- In this folder, create a file "password.py" containing the password for the local PostgreSQL database. This file name has been to 'gitignore' file so that it is not uploaded into GitHub repository.

2. Open the Jupyter Notebook: `Death_counts_Chronic_indicators_PostgreSQL.ipynb`.
In this jupyter notebook, the initial csv files are imported into pandas dataframes, and cleaned by dropping irrelevant columns.

4. Run the cells in the notebook to load the data into local PostgreSQL database and create cleaned csv files as output.

5. Final visualisations can be seen from the landing page `index.html` and linked sites, `charts.html` and `maps.html`.

## Hypotheses
Diabetes is among the top 10 causes of death in the US.
Distribution of diabetes is associated with factors such as distribution of fast food restaurants.

## Data sources
- Monthly_Counts_of_Deaths_by_Select_Causes__2014-2019.csv
- https://chronicdata.cdc.gov/Chronic-Disease-Indicators/- U-S-Chronic-Disease-Indicators-CDI-/g4ie-h725
- https://www.cdc.gov/obesity/data/prevalence-maps.html
- https://www.kaggle.com/datasets/khushishahh/fast-food-restaurants-across-us

## Built With
- Python 
- Jupyter Notebook
- Pandas
- Numpy
- Plotly
- etc

## Authors

* **Brianna O'Connor** - [https://github.com/Borruu/](link)
* **Solomon Dias**  - [https://github.com/Solo1492](link)
* **Marisa Duong** - [https://github.com/MarDuo2022](link)


## Description of repository structure
- `code` folder contains all coding at the back-end:
    - Database extraction into csv files and loading into PostgreSQL database is in the Jupyter notebook `Death_counts_Chronic_indicators_PostgreSQL.ipynb`.

    - Code for plotting charts is in plot.js inside 'js' folder.

    - Code for visualising maps is .............<SOLOMON to add>...........

- `data` folder contains csv files, including original csv files downloaded from data sources (such as the raw `1. Monthly_Counts_of_Deaths_by_Select_Causes__2014-2019.csv`) and the cleaned csv (such as the `Yearly_death_counts.csv`).

- `database` folder contains schema for diabetes PostgreSQL database, which is to be created locally.

- the landing page `index.html` is to be deployed directly from [https://marduo2022.github.io/Diabetes_visualisations/], and there are links on this page to go to the `charts.html` and `maps.html` pages.




