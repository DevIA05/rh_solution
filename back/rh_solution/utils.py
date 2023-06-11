import csv
from .models import Person

def import_csv_data(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row, i in enumerate(reader), :
            person = Person(
                id = i,
                first_name=row['first_name'],
                last_name=row['last_name'],
                gender=row['gender'],
                phone_number=row['phone_number'],
                email=row['email'],
                email_personnal=row['email_personnal']
            )
            person.save()
