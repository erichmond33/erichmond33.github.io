from bs4 import BeautifulSoup
from datetime import datetime
import os

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
            <id>{entry_link}</id>
            <link href="{entry_link}"/>
            <title>{entry_title}</title>
            <published>{published_date}</published>
            <content type="html">
                {content}
            </content>
        </entry>
    '''

    # Print the XML output
    print(xml_output)

# Loop through every file in ../articles
for article in os.listdir('../articles'):
    if article[0] != ".":
        # Grab the enitre html text from the article
        with open(f'../articles/{article}', 'r') as f:
            print(article)
            raw_html = f.read()

            print(HtmlArticleToXmlEntry(raw_html))


