from bs4 import BeautifulSoup
from datetime import datetime
import os

xml_start = """<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">

    <title>Eli Richmond's Blog</title>
    <link href="http://bloge.li/articles"/>
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
    with open('../articles.xml', 'w') as f:
        f.write(xml_output)


def HtmlArticleToXmlEntry(raw_html):

    # Parse the raw HTML using Beautiful Soup
    soup = BeautifulSoup(raw_html, 'html.parser')

    # Extract relevant data from the parsed HTML
    title = soup.find('title').text
    link = soup.find('div', class_='blogparent').find('a')['href']
    updated = soup.find('small').text.strip()  # Remove leading/trailing whitespace
    author_name = soup.find('div', id='logo').find('a').text
    logo = soup.find('link', rel='icon')['href']
    icon = soup.find('link', rel='icon')['href']
    entry_id = soup.find('link', rel='icon')['href']
    entry_link = soup.find('link', rel='icon')['href']
    entry_title = soup.find('h2').text
    published = soup.find('small').text.strip()  # Remove leading/trailing whitespace
    content = str(soup.find('section', id='article'))

    # Format the 'updated' and 'published' dates to match the Atom feed format
    updated_date = datetime.strptime(updated, '%Y-%m-%d').strftime('%Y-%m-%dT%H:%M:%SZ')
    published_date = datetime.strptime(published, '%Y-%m-%d').strftime('%Y-%m-%dT00:00:00Z')

    # Replace the published date & title with ""
    content = content.replace(f'{published}', '')
    content = content.replace(f'{entry_title}', '')

    # Generate the XML output
    xml_output = f'''
        <entry>
            <id>https://bloge.li/articles/{published}</id>
            <link href="https://bloge.li/articles/{published}"/>
            <title>{entry_title}</title>
            <published>{published_date}</published>
            <content type="html">
                {content}
            </content>
        </entry>
    '''

    return xml_output

def FormatAllArticles():

    all_articles = []

    # Filter out all of my old articles
    filtered_articles = []
    for a in os.listdir('../articles'):
        if "2023" in a:
            filtered_articles.append(a)

    # Loop through every file in ../articles sorted by date
    for article in sorted(filtered_articles, key=lambda x: datetime.strptime(x.split('.')[0], '%Y-%m-%d'), reverse=True):
        if article[0] != ".":
            if article[0] == "2":
                # Grab the enitre html text from the article
                with open(f'../articles/{article}', 'r') as f:
                    print(article)
                    raw_html = f.read()
                    all_articles.append(HtmlArticleToXmlEntry(raw_html))

    return all_articles


if __name__ == '__main__':
    main()

