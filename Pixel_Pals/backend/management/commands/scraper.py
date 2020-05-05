#!/usr/bin/env python3

# Source - https://www.scrapehero.com/tutorial-how-to-scrape-amazon-product-details-using-python-and-selectorlib/
# Above source uses a rougher version of this code

from django.core.management.base import BaseCommand

from selectorlib import Extractor
from django.db import models

from backend.models import GraphicsCard

import requests
import json
import argparse
import sys

class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        argparser = argparse.ArgumentParser()
        argparser.add_argument('url', help='Amazon Product Details URL')

        # Create an Extractor by reading from the YAML file
        e = Extractor.from_yaml_file('selectors.yml')

        # original user_agent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
        user_agent = 'Chrome/42.0.2311.134'
        headers = {'User-Agent': user_agent}

        # Download the page using requests
        args = argparser.parse_args()
        r = requests.get('https://www.amazon.com/Overclocked-Dual-Fan-DisplayPort-Graphics-DUAL-GTX1660S-O6G-EVO/dp/B07ZHWQ81N', headers=headers)
        # Pass the HTML of the page and create
        data = e.extract(r.text)

        print(data)
        for i in data:
            if i == 'Model_number':
                modelID = data[i]
                print(modelID)
            if i == 'Name':
                name = data[i]
                print(name)

        # Print the data to the terminal
        print(json.dumps(data, indent=True))
        GraphicsCard.objects.create(
            model_id='Show test',
            name='A card',
            manufacturer="N",
            gpu_speed="sonic",
            memory_type="long",
            memory_bandwidth="wide",
            bus_size='Average Discovery Park size',
            image_url='https://images-na.ssl-images-amazon.com/images/I/81ZGJzNb+EL._AC_SL1500_.jpg'
        )

        '''#print the data to a text file
        sys.stdout = open("test.txt", "w")
        #print the URL to text
        print(args)
        #print the actual data being collected to a the above .txt
        print (data)'''


