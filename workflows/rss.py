from bs4 import BeautifulSoup
from datetime import datetime

# Raw HTML input
raw_html = """
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>AI angst | Eli Richmond</title>
        <meta name="keywords" content="Eli Richmond, Ai, artificial intelligence, web3, crytpo, decentralization, blog, article, projects"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="../static/xi.png">
        <link rel="stylesheet" href="../style2.css">
        <script src="../layout.js"></script>
    </head>

    <body id="home">

    <section id="masthead">
        <div id="logo"><a href="/">Eli Richmond</a></div>
    </section>
    
    <div id="content">
        <header>
            <div class="blogparent">
                <a href="/articles">
                    Articles:
                </a>
            </div>
        </header>
        <section id="article">
            <h2>
                AI angst
            </h2>
            <p>
                AI is everywhere, and it is scary.
                Even the godfathers of AI like Yoshua Bengio and Geoffrey Hinton have expressed their anxiety.
                So no, you are not alone.
                However, recently I have found <i>some</i> peace with the whole thing.
                Maybe my thoughts will bring you some solace as well.
            </p><p>
                First of all I need to split this AI anxiety into two categories.
            </p><p>
                #1 is a fear of AI being evil or being used for evil.
                Here we are referring to the immortal dictator that enslaves humans or the normal dictators that could turn the world into George Orwell's 1984 by using this tech.
            </p><p>
                #2 is a fear of lost purpose.
                Here I'm referring to some existential questions that we must seriously consider.
                What does it even mean to be human in world where AI is smarter than everyone?
                How do we come to grips with the idea that we aren't special anymore?
                What do we do with ourselves when we don't have to work anymore?
                What do we do with ourselves when we are useless in comparison to our AI counterparts?
            </p><p>
                So what do I think?
            </p>
                <h3>#1 Fear of evil</h3>
            <p>
                This doesn't not give me any angst whatsoever.
                Okay maybe a little, but no more than any other new technology.
                We have always had to remain vigilant that new tech doesn't skew towards evil.
                Each new thing brings its own unique challenges, but this is simply a matter of courage.
                Let's buck up, do the work, and go boldly forward.
                In fact, I'm more afraid of stagnation than the potential evils of AI.
            </p>    
                <h3>#2 Fear of lost purpose</h3>
            <p>
                I'm pretty sure we are just machines.
                I don't know this for a fact, and I'm not here to persuade anyone either.
                But the more these transformer language models - like chatGPT - advance, the more I feel like a simple biological machine without anything magical or special going on inside.
            </p><p> 
                If biological humans aren't all that special and we are both just machines, why be so anxious?
                They are just the next step up in machinery.
                AI isn't us, but we are the stepping stone that led to them.
                We would be arrogant and ignorant to assume we are the best possible version of ourselves.
                And I'm hopeful that they can be better than us.
                That is a good thing right?
                Being better?
                Why be so caught up with the idea that our specific configuration of flesh and bones must do the job?
            </p><p>
                ...
            </p><p>
                I do think it is a possibility that we could augment ourselves to remain useful.
                But here I'm considering the worse case scenario.
                Because if we can be at peace with the absolute worst case, anything less is manageable.
            </p><p>
                I'm sure my ideas on this topic will grow and change over time, but for now, this about covers it.
            </p><p>
                What are your thoughts?
                Is this helpful?
            </p>
            <small>
                2022-07-26
            </small>
        </section>

    </div>
    </body>
</html>"""

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

# Generate the XML output
xml_output = f'''<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>{title}</title>
    <link href="{link}"/>
    <updated>{updated_date}</updated>
    <author>
        <name>{author_name}</name>
    </author>
    <id>{entry_id}</id>
    <logo>{logo}</logo>
    <icon>{icon}</icon>
    <entry>
        <id>{entry_link}</id>
        <link href="{entry_link}"/>
        <title>{entry_title}</title>
        <published>{published_date}</published>
        <content type="html">
            {content}
        </content>
    </entry>
</feed>
'''

# Print the XML output
print(xml_output)

