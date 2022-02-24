import csv
import os
dir = os.path.dirname(__file__)
filename = os.path.join(dir, 'raw_NCEE_terms.tsv')
print(filename)

paired_terms_and_derivatives = []
with open(filename, 'r', encoding="utf-8") as file:
    reader = csv.reader(file, delimiter='\t')
    for row in reader:
        for i in range(1,len(row)):
            if(row[i] != ""):
                paired_terms_and_derivatives.append([row[0],row[i]])
print(paired_terms_and_derivatives)

