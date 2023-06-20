import csv
from rh_solution.models import Person
#import os
#print(os.getcwd())

def import_csv_data(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for i, row in enumerate(reader):
            person = Person(
                id=i,
                first_name=row['first_name'],
                last_name=row['last_name'],
                gender=row['gender'],
                phone_number=row['phone_number'],
                email=row['email'],
                email_personnal=row['email_personnal']
            )
            person.save()
import_csv_data("../data/data.csv")