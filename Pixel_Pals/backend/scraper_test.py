from googlesearch import search
import json
import requests
import sys
import argparse
#import amazon_scraper

#cmd sample input "python scraper_url.py DUAL-GTX1660S-O6G-EVO amazon DUAL-GTX1660S-O6G-EVO newegg"
#after .py - arguments are keywords for google search, above example uses Manufact #, website keys

def scraper():
    print("Scraper test function")




#argument check
x = ""
y = " "
#TEST START
n = len(sys.argv) 
print("Total arguments passed:", n)
print("\nName of Python script:", sys.argv[0]) 
  
print("\nArguments passed:", end = " ") 
#TEST END


#creates the arguement ist 
for i in range(1, n): 
    x = x+y+sys.argv[i]  
    
#x is the argument input
print(x) 
 

argument = [] 
check = 0
 
# this is the google query utilizing the above arguments 
query = x
sys.stdout = open("url.txt", "w")  
for j in search(query, tld="co.in", num=1, stop=2, pause=2): #stop 2 because only two websites are being used in above args.
    argument.append(j)
    print(j)
#sys.stdout.close()

for i in range(0, 2):
    if  (argument[i].find("amazon") != -1):
        print(argument[i])
        #call scrape function passing url as argument
        scraper()
        #amazon_scraper.main(argument)
    elif  (argument[i].find("newegg") != -1):
        print(argument[i])
        #call scrape function passing url as argument
    else: 
        print(argument[i])
        print("Error caught")
        print(argument[i])
        #run error url handling
        
