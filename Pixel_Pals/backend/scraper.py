# Source - https://www.scrapehero.com/tutorial-how-to-scrape-amazon-product-details-using-python-and-selectorlib/
# Above source uses a rougher version of this code

from selectorlib import Extractor
import requests 
import json 
import argparse
import sys




argparser = argparse.ArgumentParser()
argparser.add_argument('url', help='Amazon Product Details URL')

# Create an Extractor by reading from the YAML file
e = Extractor.from_yaml_file('selectors.txt')

# original user_agent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
user_agent = 'Chrome/42.0.2311.134'
headers = {'User-Agent': user_agent}

# Download the page using requests
args = argparser.parse_args()
r = requests.get(args.url, headers=headers)
# Pass the HTML of the page and create 
data = e.extract(r.text)

# Print the data to the terminal
print(r.string)
print(json.dumps(data, indent=True))
#File_object.write(data)


#print the data to a text file 
sys.stdout = open("test.txt", "w")
#print the URL to text
print(args)
#print the actual data being collected to a the above .txt
print (data)

