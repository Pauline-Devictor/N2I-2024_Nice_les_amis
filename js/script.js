monogatari.assets ('scenes', {
	'xi_coal': 'xi_coal.png',
});

monogatari.script ({
	'English':{
		'Start': [
			{
				'Input': {
					'Text': "What's your name?",
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
		'Spread': [{
			'Text':'You have chosen to reveal the truth to the world. Your courage, however, may come at a cost...',
			'Do' : 'jump Scene2'
		}
		],
		'Coward': [
			'You prefer to stay at home and watch Netflix. The planet has burned. You have lost.',
			'end'
		],
		'Scene2':[

		],
		'other': [
			'Whouuuuhouu',
			'end'
		]
	}

});