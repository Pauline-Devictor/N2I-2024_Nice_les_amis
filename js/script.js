monogatari.assets ('scenes', {
	'xi_coal': 'xi_coal.png',
	'climate_activists': 'climate_activists.png',
	'emir_banknotes': 'emir_banknotes.png',
	'steampunk_polluted': 'steampunk_polluted.png',
	'burning_earth': 'burning_earth.png',
	'whistleblower': 'whistleblower.png',
	'riot': 'riot.png',
	'trial': 'trial.png',
	'happy': 'PlanetIsSafe.png',
	'hatred': 'Hatred_charlie.png',
});
monogatari.assets ('music', {
	'intro': 'Introduction.mp3',
	'manifs': 'Manifs.mp3',
	'defeat': 'Defaite.mp3',
	"end": "fin.mp3",
	"Television": "Television.mp3",
});

monogatari.script ({
	'English':{
		'Start': [
			{
				'Input': {
					'Text': "What's your name",
					'Validation': function (input) {
						return input.trim ().length > 0;
					},
					'Save': function (input) {
						this.storage ({
							player: {
								name: input
							}
						});
						return true;
					},
					'Revert': function () {
						this.storage ({
							player: {
								name: ''
							}
						});
					},
					'Warning': 'Please enter a name !'
				}
			},
			'show background steampunk_polluted',
			'play music intro with loop ',

			'COP city, 2023...',
			'show background xi_coal',
			'Long ago, in a not-so-distant galaxy, a insidious shadow was spreading over a once prosperous planet. Corrupt political leaders and unscrupulous industrialists, united by their insatiable thirst for power and profit, had cast their sinister grip over the fate of this planet.',
			'For decades, these unscrupulous industrialists had ruthlessly exploited natural resources, emitting enormous amounts of carbon into the atmosphere, plunging the planet into ecological chaos. Political leaders, complicit in this devastating enterprise, turned a blind eye to the warnings of scientists and environmental advocates, choosing to sacrifice the future in the name of present greed.',
			'show background emir_banknotes',
			'The skies were darkened by the toxic fumes from factories, and the land was gripped by a vice of pollution. The inhabitants of this once lush planet struggled for their survival, while the powerful luxuriated in their ivory towers, ignoring the desperate cries of nature.',
			'show background climate_activists',
			'But amidst this darkness, a glimmer of hope began to emerge. Environmental rebels were rising, determined to overthrow the destructive reign of these villainous industrialists and political leaders. The battle to restore ecological balance and save the planet was about to begin, and the force of nature itself was aligning with those resisting the growing shadow.',
			"The future of this planet hung in the balance, and the destiny of millions rested on the heroes' ability to defeat the forces of the dark side of industrialization and politics. The galaxy watched with increasing concern, wondering if the light of reason and ecological responsibility could triumph over the greedy darkness threatening to engulf this once vibrant planet.",
			'{{player.name}}, you discover evidence of the massive pollution caused by Industria Corp. You must now make a crucial decision: remain silent or unveil the truth to the world.',
			{'Choice': {
					'Reveal the truth.': {
						'Text': 'Reveal the truth.',
						'Do': 'jump Spread'
					},
					'Stay silent': {
						'Text': 'Stay silent',
						'Do': 'jump Coward'
					}
				}}
		],
		'Spread': [
			'You have chosen to reveal the truth to the world. Your courage, however, may come at a cost...',
			'jump Scene2'
		],
		'Coward': [
			'stop music',
			'show background burning_earth',
			'play music defeat with loop ',
			'You prefer to stay at home and watch Netflix. The planet has burned. You have lost.',
			'end'
		],
		'Scene2':[
			'stop music',
			'show background whistleblower',
			'play music manifs with loop ',

			"The disclosure of evidence is creating a growing opposition between environmentalists and Industria Corp, which is struggling to maintain its project despite the negative publicity.",
			"Meanwhile, {{player.name}} has been invited by numerous television channels to discuss their findings and has had the opportunity to meet an ecology mentor to accompany them in public.",
			"This mentor, Jean-Marc JanKenobi, is a well-known figure in the PACA region where the city of COPcity is located. However, the revelation of these compromising confidential documents has not been without consequences; Alex has also been taken to court by Industria Corp.",
			"Pursued in court, your trial is not going to happen for a few months; fortunately, the justice system in the country sometimes takes a while to apply! Your mentor recommends that you take advantage of this time to organize protests and raise awareness among the city's residents about actions they can take to protect the environment.",
			'show background xi_coal',
			"Before being able to accept or decline following your mentor's advice, you are called by your former boss. He proposes to drop the lawsuit and promote you if you agree to publicly confess that the documents were fake. However, if you were to refuse, he would be willing to do anything to annihilate any threat to his company.",
			"{{player.name}}, you are facing tough choices: organizing peaceful protests, raising public awareness further, or accepting to join your former boss and lying to society by declaring that the documents were fake.",
			{'Choice': {
					"Raise public awareness.": {
						'Text': "Raise public awareness.",
						'Do': 'jump Scene3GoodSide',
					},
					"Join your former boss's side.": {
						'Text': "Join your former boss's side.",
						'Do': 'jump Scene3BadSide',
					}
				}}
		],
		'Scene3GoodSide':[
			'stop music',
			'show background climate_activists',
			'play music Television with loop ',

			"Look at all these ads! They all want to encourage us to consume more and more! To eat more meat! To exploit more vulnerable and underpaid populations! All of this for what? To make money at our expense while polluting our poor planet! What's the point of having access to all these objects if we are rushing towards our own self-destruction?",
			"So you express yourself in front of the cameras during one of your protests.",
			'show background riot',
			"Two months have passed since the start of your protests with Jean-Marc JanKenobi. And although you declined your former boss's offer, you haven't heard anything since. Who knows what he might be preparing?",
			"One morning, as you prepare as usual to advocate for the climate and your cause, you discover with horror numerous notifications on your phone.",
			"You don't understand what's happening, and you see an incalculable number of missed calls on your phone. While you try to figure out what's going on, you hear someone ringing your doorbell—it's your mentor.",
			"At last! You are not aware of what is happening outside; the entire internet is ablaze!",
			"But what is happening?",
			'show background trial',
			"Industria Corp is counterattacking. They have made numerous posts on social media to defame you, managing to gather many false pieces of evidence of crimes you supposedly committed. You are accused of harassment, racism, and multiple thefts, all within the company. It's spreading like wildfire because nobody thinks to verify the information!",
			"Of course, many people continue to support you, but those who were not aware of the initial case are now turning against you! It's time to react!",
			"You could hold a press conference to demonstrate the impacts of our lifestyle, which would be a peaceful solution. Alternatively, you could choose an offensive approach and counterattack on social media.",
			{'Choice': {
					"Hold a press conference": {
						'Text': "Hold a press conference",
						'Do': 'jump Scene4GoodSideTelevision',
					},
					'Counterattack Industria Corp. on social media': {
						'Text': 'Counterattack Industria Corp. on social media',
						'Do': 'jump Scene4BadSideSocialMedias',
					}
				}}
		],
		'Scene3BadSide':[
			'stop music',
			'show background xi_coal',
			'play music defeat with loop ',

			"You expose a company, all just to give in to the first threat? What's the point? You have people to support you and the environment! Don't give up so easily; there are still so many things you can accomplish!",
			"end"

		],
		'Scene4GoodSideTelevision':[
			'stop music',
			'show background happy',
			'play music end with loop ',

			"I know that many people are hostile towards me because of the recent posts on my ex-employer's social media. All those posts are fraudulent! The evidence has been fabricated, and the images are generated by AIs! Haven't you noticed that my hands are poorly drawn? That certain shapes are inconsistent? By examining the details of most of these documents, it is possible to verify that they are fake!",
			"Regarding all these fake news about the environment, by searching through scientific journals and official media, it is also quite easy to demonstrate that all the statements from Industria Corp. are lies!",
			"Let me now describe real ways that each of you can individually undertake to reduce your environmental impact!",
			"First of all, the 3 Rs: Reduce, Reuse, Recycle. Try to reduce the amount of waste you use, reuse everything you can, and finally, recycle everything that remains! These are small actions that everyone can take!",
			"Next, another classic is to save energy. If you're not using a light, turn it off! It will also greatly benefit your winter bills!",
			"A less known method to reduce one's environmental impact is to decrease meat consumption. Indeed, our dear animal friends are significant producers of CO2 throughout their lives, as well as during the journey to the slaughterhouse and the meat processing!",
			"If you have money to invest, you can take the opportunity to invest in sustainable projects (and not with oil companies).",
			"One last gesture would be to share all these tips with your friends, family, and colleagues!",
			"~~~Congratulations, you have reached the successful conclusion of the game! ~~~",
			"end"
		],
		'Scene4BadSideSocialMedias':[
			'stop music',
			'show background hatred',
			'play music defeat with loop ',
			
			"Hello everyone, I'm {{player.name}}. I wanted to talk to you about something serious. Industria Corp., this malicious company, continues to destroy our planet through massive pollution. They hide behind lies and manipulations, and it's time to expose them for what they truly are.",
			"Here is shocking evidence of their negligence. They have destroyed ecosystems, endangered endangered species, all in the name of profit. Share this information as much as possible. Together, we can make our voices heard and hold Industria Corp. accountable.",
			"However, you wonder if all these lies were necessary. After all, in your numerous speeches, you denounced the lies that could circulate regarding the environment in the media, so what sense does it make if you contribute to them as well?",			'end'
		],
	}
});