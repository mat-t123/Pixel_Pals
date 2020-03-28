#Source - https://www.scrapehero.com/tutorial-how-to-scrape-amazon-product-details-using-python-and-selectorlib/
#Above source uses a rougher version of this code
from selectorlib import Extractor
import requests 
import json 
import argparse
import sys

"""
# sorts input file into array or list for argument use later
urls = []


fname = "url.txt"
count = 0
with open(fname, 'r') as f:
    for line in f:
        count += 1
        urls.append(line)
print(count)
print(urls[0])
"""    

"""
f = open('url.txt','r') 

for line in f:
    for i in range(1, n):
        print(line, end='') 
"""

#Old argument parse before text file was created, this works using simple arguments(URLs) in the cmd line
#argparser = argparse.ArgumentParser()
#print("argparser")
#print(argparser)
#argparser.add_argument('url', help='Amazon Product Details URL')


# Create an Extractor by reading from the YAML file
e = Extractor.from_yaml_file('newegg_selectors.txt')
#print(e)
#print("e")

user_agent = 'Chrome/42.0.2311.134'
headers = {'User-Agent': user_agent}

# Download the page using requests
#args = argparser.parse_args()
args = 'https://www.newegg.com/asus-geforce-gtx-1660-super-dual-gtx1660s-o6g-evo/p/N82E16814126352'
#print(args)
#print("args")
r = requests.get(args, headers=headers)
# Pass the HTML of the page and create 
data = e.extract(r.text)

# Print the data to the terminal
print(json.dumps(data, indent=True))
#File_object.write(data)


#print the data to a text file 
sys.stdout = open("newegg_scrape.txt", "w")
#print the URL to text
print(args)
#print the actual data being collected to a the above .txt
print (data)

