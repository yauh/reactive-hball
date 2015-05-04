if (Meteor.isClient) {
  Session.setDefault('answer', null)
  var shakeSensitivity = 30;
  Meteor.startup(function () {
    Meteor.disconnect();
    if (shake && typeof shake.startWatch === 'function') {
      shake.startWatch(onShake, shakeSensitivity);
    } else {
      alert('Shake not supported');
    }
  });

  // without debounce, every actual user shake will fire the callback twice right away
  onShake = _.debounce(function onShake() {
      console.log('device was shaken');
      $('#text').fadeOut('1200', function () {
        Session.set('answer', answers[
          Math.floor(Math.random() * answers.length)
        ]);
        $('#text').fadeIn();
      });
    },
    // fire the shake as soon as it occurs, but not again if less than 1200ms have passed
    1200, true);

  var answers = [
    'Are you kidding?',
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Definitely not.',
    'Don\'t count on it.',
    'Don\'t bet on it.',
    'Forget about it.',
    'Go for it!',
    'I have my doubts.',
    'It is certain.',
    'It is decidedly so.',
    'Looking good!',
    'Looks good to me!',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook good.',
    'Outlook not so good.',
    'Outlook so so.',
    'Probably.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'Who knows?',
    'Without a doubt.',
    'Yes - definitely.',
    'Yes, in due time.',
    'Yes.',
    'You may rely on it.',
    'You will have to wait.'
  ];

  Template.hball.helpers({
    answer: function () {
      return Session.get('answer');
    }
  });

  Template.hball.events({
    'click button': function () {
      console.log('shake button was clicked');
      $('#text').fadeOut('1200', function () {
        Session.set('answer', answers[
          Math.floor(Math.random() * answers.length)
        ]);
        $('#text').fadeIn();
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}