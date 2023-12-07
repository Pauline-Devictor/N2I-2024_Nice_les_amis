monogatari.assets ('scenes', {
    'xi_coal': 'xi_coal.png',
    'climate_activists': 'climate_activists.png',
    'emir_banknotes': 'emir_banknotes.png',
    'steampunk_polluted': 'steampunk_polluted.png',
});

monogatari.script ({
    'Français':{
        'Start': [
            {
                'Input': {
                    'Text': 'Quel est votre nom ?',
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
                    'Warning': 'Veuillez entrer votre nom !'
                }
            },
            'show background steampunk_polluted',
            'COP city, 2023...',
            'show background xi_coal',
            'Il y a bien longtemps, dans une galaxie pas si lointaine, une ombre insidieuse s\'étendait sur une planète autrefois prospère. Les dirigeants politiques corrompus et les industriels sans scrupules, unis par leur soif insatiable de pouvoir et de profit, avaient jeté leur sinistre emprise sur la destinée de cette planète.',
            'Pendant des décennies, ces industriels sans scrupules avaient exploité les ressources naturelles sans relâche, émettant d\'énormes quantités de carbone dans l\'atmosphère, plongeant la planète dans un chaos écologique. Les dirigeants politiques, complices de cette entreprise dévastatrice, tournaient un regard aveugle sur les avertissements des scientifiques et des défenseurs de l\'environnement, préférant sacrifier l\'avenir au nom de la cupidité présente.',
            'show background emir_banknotes',
            'Les cieux se trouvaient obscurcis par les fumées toxiques des usines, et la terre était étreinte par un étau de pollution. Les habitants de cette planète jadis luxuriante luttaient pour leur survie, tandis que les puissants se prélassaient dans leurs tours d\'ivoire, ignorant les cris désespérés de la nature.',
            'show background climate_activists',
            'Mais au milieu de cette obscurité, une lueur d\'espoir commençait à émerger. Des rebelles de l\'environnement se levaient, déterminés à renverser le règne destructeur de ces méchants industriels et dirigeants politiques. La bataille pour restaurer l\'équilibre écologique et sauver la planète était sur le point de commencer, et la force de la nature elle-même se ralliait à ceux qui résistaient à l\'ombre grandissante.',
            'L\'avenir de cette planète était en suspens, et le destin de millions reposait sur la capacité des héros à vaincre les forces du côté obscur de l\'industrialisation et de la politique. La galaxie observait avec une inquiétude croissante, se demandant si la lumière de la raison et de la responsabilité écologique pouvait triompher de l\'obscurité cupide qui menaçait d\'engloutir cette planète autrefois éclatante.',
            '{{player.name}}, vous découvrez des preuves de la pollution massive causée par Industria Corp. Vous devez maintenant prendre une décision cruciale : rester silencieux ou dévoiler la vérité au grand jour.',
        ],
        'other': [
            'Whouuuuhouu',
            'end'
        ]
    }
});