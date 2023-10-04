from bs4 import BeautifulSoup
from datetime import datetime
import os

xml_start = """<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

    <title>Eli Richmond's /Now Feed</title>
    <link href="http://bloge.li/now"/>
    <updated>2002-11-26T18:30:02Z</updated>
    <author>
    <name>Eli Richmond</name>
    </author>
    <id>bloge.li</id>
    <logo>https://bloge.li/static/xi.png</logo>
    <icon>https://bloge.li/static/xi.png</icon>

    """ 

def main():
    all_articles = FormatAllArticles()

    # Add all articles to xml_start
    xml_output = xml_start

    for article in all_articles:
        xml_output += article + "\n"

    xml_output += "</feed>"

    # Save to a file
    with open('../now.xml', 'w') as f:
        f.write(xml_output)


def HtmlArticleToXmlEntry(raw_html):

    # Parse the raw HTML using Beautiful Soup
    soup = BeautifulSoup(raw_html, 'html.parser')

    # Extract relevant data from the parsed HTML
    published = soup.find('small', id='date').text.strip().replace("updated ", "")
    content = str(soup.find('section', id='now'))

    # Format the 'updated' and 'published' dates to match the Atom feed format
    print(published)
    published_date = datetime.strptime(published, '%Y-%m-%d').strftime('%Y-%m-%dT00:00:00Z')

    # Generate the XML output
    xml_output = f'''
        <entry>
            <id>https://bloge.li/now</id>
            <link href="https://bloge.li/now"/>
            <title>What I'm doing now</title>
            <published>{published_date}</published>
            <content type="html">
                {content}
            </content>
        </entry>
    '''

    return xml_output

def FormatAllArticles():

    all_articles = []

    with open(f'../now.html', 'r') as f:
        raw_html = f.read()
        all_articles.append(HtmlArticleToXmlEntry(raw_html))

    return all_articles


if __name__ == '__main__':
    main()

