import os
import tweepy
import numpy as np
import pandas as pd
import json

#http://adilmoujahid.com/posts/2014/07/twitter-analytics/



def main():
	consumer_key = 	"J6D6tuyWt5UKWRupE5XSgJ4qx"

	consumer_secret = "fnhcM8Q8KPbNHof415sil8xZC0n6vlJ02O5Clep5cB0EZF9EwT"

	access_token = "4073971578-jKynaXTArrPPolgGgzxLoBHEQtv5exbbNR8DRzp"

	access_token_secret = "0sPHNPkn5iDwxj8a6EylVA8HsnHgEnz5KA18hgz4Su5h1"


	auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
	auth.set_access_token(access_token, access_token_secret)

	api = tweepy.API(auth, wait_on_rate_limit=True)

	#public_tweets = api.home_timeline()
	#for tweet in public_tweets:
		#print("worked")
		#print(tweet.text)
	count = 0

	for tweet in tweepy.Cursor(api.search,
                       q="#100DaysOfCode",
                       count=4,
                       result_type="recent",
                       include_entities=True,
                       lang="en").items():
		print("twitter text is: " + tweet.text + "\n")
		print("twitter name is is: " + tweet.user.name + "\n")
		print("twitter geo is is is: " + str(tweet.geo) + "\n")
		newObj = {}
		newObj["tweet"] = tweet.text
		newObj["username"] = tweet.user.name
		newObj["geo"] = tweet.geo
		with open("dataFile.json", "w+") as outfile:
                        json.dump(newObj, outfile)



if __name__ == '__main__':
	main()
