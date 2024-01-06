from urllib.request import urlopen
import json
from bs4 import BeautifulSoup

try:
	with open("titles.json") as fp:
		titles = json.load(fp)
except:
	titles = dict()

with open("./public/links.txt") as fp:
	for line in fp:
		url = line.rstrip()
		if url not in titles:
			try:
				html_page = urlopen(url)
				soup = BeautifulSoup(html_page, "html.parser")
				title = soup.title.string

				if isinstance(title, str):
					title = title.strip()
					title = title.replace("\n", " ")
					if title != "":
						titles[url] = title
			except:
				pass

with open("titles.json", "w") as fp:
	json.dump(titles, fp, indent="\t")
