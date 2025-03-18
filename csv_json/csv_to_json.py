#!/usr/bin/env python3

import csv
import json
from collections import defaultdict


def nested_set(dic, keys, value):
    """
    Set a value in a nested dictionary given a list of keys.
    
    Args:
        dic (dict): The dictionary to modify
        keys (list): List of keys to traverse/create
        value: The value to set at the final key
    """
    for key in keys[:-1]:
        dic = dic.setdefault(key, {})
    # Convert numeric strings in effects section to actual numbers
    if keys[-1] in ['money', 'relationships', 'ego', 'skills']:
        try:
            value = int(value)
        except ValueError:
            pass
    dic[keys[-1]] = value


def csv_to_nested_json(csv_file_path, json_file_path):
    """
    Convert a CSV file to a nested JSON structure based on dot-separated column names.
    
    Args:
        csv_file_path (str): Path to the input CSV file
        json_file_path (str): Path to save the output JSON file
    """
    result = {}

    with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)

        for row in reader:
            question_id = row.pop('id')  # Extract the ID column
            if question_id not in result:
                result[question_id] = {}

            for column, value in row.items():
                if value:  # Skip empty values
                    keys = column.split('.')
                    nested_set(result[question_id], keys, value)

    # Write the JSON output
    with open(json_file_path, mode='w', encoding='utf-8') as json_file:
        json.dump(result, json_file, indent=4, ensure_ascii=False)


if __name__ == "__main__":
    # Example usage
    csv_file_path = 'tutorial.csv'  # Path to your input CSV file
    json_file_path = 'Tutorial.json'  # Path to your output JSON file
    csv_to_nested_json(csv_file_path, json_file_path) 