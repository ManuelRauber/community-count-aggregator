'use strict';

const FacebookReporter = require('./reporters/facebook'),
    MeetupReporter = require('./reporters/meetup'),
    TwitterReporter = require('./reporters/twitter'),
    InstagramReporter = require('./reporters/instagram'),
    FlickrReporter = require('./reporters/flickr'),
    YoutubeReporter = require('./reporters/youtube'),
    SlackReporter = require('./reporters/slack');

function CommunityCountAggregator() {
    const reports = [
        new FacebookReporter('Hackerstolz', 'https://www.facebook.com/hackerstolz'),
        new FacebookReporter('Hackschool', 'https://www.facebook.com/hackerschule'),
        new FacebookReporter('Gründerbar', 'https://www.facebook.com/gruenderbar.de'),
        new TwitterReporter('Hackerstolz', 'https://mobile.twitter.com/hackerstolz'),
        new TwitterReporter('Gründerbar', 'https://mobile.twitter.com/gruenderbar'),
        new InstagramReporter('Hackerstolz', 'https://www.instagram.com/hackerstolz/'),
        new YoutubeReporter('Hackerstolz', 'https://www.youtube.com/channel/UCr_8g-nYnWR0GojfAvLsS1g'),
        new FlickrReporter('Hackerstolz', 'https://www.flickr.com/photos/hackerstolz/'),
        new SlackReporter('Hackerstolz Community', 'http://community.hackerstolz.de/'),
        new MeetupReporter('Mannheim', 'http://www.meetup.com/Hackschool-Mannheim/'),
        new MeetupReporter('Karlsruhe', 'http://www.meetup.com/Hackschool-KA/'),
        new MeetupReporter('Berlin', 'http://www.meetup.com/Hackschool-Berlin/'),
        new MeetupReporter('Women', 'http://www.meetup.com/HackerstolzWomen/'),
    ];

    this.report = () => {
        const promises = reports.map(report => report.report());

        Promise.all(promises)
            .then(results => {
                results.forEach(result => console.log(`${result.name}: ${result.count}`));
            }, error => console.log(error));
    };
}

const aggregator = new CommunityCountAggregator();
aggregator.report();
