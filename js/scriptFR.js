monogatari.assets ('scenes', {
    'xi_coal': 'xi_coal.png',
    'climate_activists': 'climate_activists.png',
    'emir_banknotes': 'emir_banknotes.png',
    'steampunk_polluted': 'steampunk_polluted.png',
    'burning_earth': 'burning_earth.png',
    'whistleblower': 'whistleblower.png',
    'riot': 'riot.png',
    'trial': 'trial.png',
    'disaster': 'disaster.png',
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
            'play music intro with loop ',

            'COP city, 2023...',
            'show background xi_coal',
            'Il y a bien longtemps, dans une galaxie pas si lointaine, une ombre insidieuse s\'étendait sur une planète autrefois prospère. Les dirigeants politiques corrompus et les industriels sans scrupules, unis par leur soif insatiable de pouvoir et de profit, avaient jeté leur sinistre emprise sur la destinée de cette planète.',
            'Pendant des décennies, ces industriels sans scrupules avaient exploité les ressources naturelles sans relâche, émettant d\'énormes quantités de carbone dans l\'atmosphère, plongeant la planète dans un chaos écologique. Les dirigeants politiques, complices de cette entreprise dévastatrice, tournaient un regard aveugle sur les avertissements des scientifiques et des défenseurs de l\'environnement, préférant sacrifier l\'avenir au nom de la cupidité présente.',
            'show background emir_banknotes',
            'Les cieux se trouvaient obscurcis par les fumées toxiques des usines, et la terre était étreinte par un étau de pollution. Les habitants de cette planète jadis luxuriante luttaient pour leur survie, tandis que les puissants se prélassaient dans leurs tours d\'ivoire, ignorant les cris désespérés de la nature.',
            'show background climate_activists',
            'Mais au milieu de cette obscurité, une lueur d\'espoir commençait à émerger. Des rebelles de l\'environnement se levaient, déterminés à renverser le règne destructeur de ces méchants industriels et dirigeants politiques. La bataille pour restaurer l\'équilibre écologique et sauver la planète était sur le point de commencer, et la force de la nature elle-même se ralliait à ceux qui résistaient à l\'ombre grandissante.',
            'L\'avenir de cette planète était en suspens, et le destin de millions reposait sur la capacité des héros à vaincre les forces du côté obscur de l\'industrialisation et de la politique. La galaxie observait avec une inquiétude croissante, se demandant si la lumière de la raison et de la responsabilité écologique pouvait triompher de l\'obscurité cupide qui menaçait d\'engloutir cette planète autrefois éclatante.',
            "Vous êtes un descendant de Arno, bien que cela soit peu important vu que l'ordre des assassins a été dissout il y a un siècle. Aujourd'hui, c'est vendredi. Comme tous les vendredis vous allez au travail. Vous travaillez chez Industria Corp.",
            '{{player.name}}, vous découvrez des preuves de la pollution massive causée par Industria Corp. Vous devez maintenant prendre une décision cruciale : rester silencieux ou dévoiler la vérité au grand jour.',
            {'Choice': {
                    'Dévoiler la vérité': {
                        'Text': 'Dévoiler la vérité',
                        'Do': 'jump Spread',
                    },
                    'Rester silencieux': {
                        'Text': 'Rester silencieux',
                        'Do': 'jump Coward',
                    }
                }}
        ],
        'Spread': [
            'Vous avez décidé de révéler la vérité au grand jour. Votre courage risque cependant de vous coûter cher...',

            'jump Scene2'
        ],
        'Coward': [
            'stop music',
            'show background burning_earth',
            'play music defeat with loop ',

            'Vous préférez rester chez vous et regarder Netflix. La planète a brûlé. Vous avez perdu.',
            'end'
        ],
        'Scene2':[
            'stop music',
            'show background whistleblower',
            'play music manifs with loop ',

            'La révélation des preuves crée une opposition croissante entre les écologistes, et Industria Corp, qui lutte pour maintenir son projet en dépit de la mauvaise publicité.',
            'De son côté {{player.name}} a été invité par de nombreuses chaines télévisées pour parler de ses découvertes et a eu la chance de rencontrer un "mentor"' +  "de l'écologie pour l'accompagner en public.",
            'Ce mentor,' + "c'est Jean-Marc JanKenobi, un personnage bien connu de la région PACA dans laquelle se situe la ville de COPcity. Néanmoins, la révélation de ces documents confidentiels comprométants n'a pas été sans conséquences, Alex a aussi été trainé en justice par Industria Corp",
            'Poursuivi en justice, votre procès ne va pas se produire avant quelques mois, heureusement que la justice du pays est parfois longue à ' + "s'appliquer ! Votre mentor vous recommande de profiter de ce temps pour organiser des manifestations et sensibiliser les habitants de la ville aux gestes qu'ils peuvent faire pour protéger l'environnement.",
            'show background xi_coal',
            "Avant d'avoir pu accepter ou non de suivre le conseil de votre mentor, vous êtes appelé par votre ancien patron, il vous propose d'annuler la poursuite et de vous promouvoir si vous acceptez d'avouer en public que les documents étaient faux. En revanche, si jamais vous refusiez, il serait prêt à tout pour annihiler toute menace visant son entreprise",
            '{{player.name}}, vous faites face à des choix difficiles : organiser des manifestations pacifiques, sensibiliser davantage l\'opinion publique ou accepter de rejoindre votre ancien patron et mentir à la société en déclarant que les documents étaient faux.',
            {'Choice': {
                    "Sensibiliser l'opinion publique": {
                        'Text': "Sensibiliser l'opinion publique",
                        'Do': 'jump Scene3GoodSide',
                    },
                    'Rejoindre le côté de votre ancien patron': {
                        'Text': 'Rejoindre le côté de votre ancien patron',
                        'Do': 'jump Scene3BadSide',
                    }
                }}
        ],
        'Scene3GoodSide':[
            'stop music',
            'show background climate_activists',
            'play music Television with loop ',

            'Regardez toutes ces pubs ! Toutes veulent nous inciter à toujours consommer plus ! A manger plus de viandes ! A exploiter plus de populations vulnérables et sous payées ! Tout cela pour quoi ? Pour gagner de' + " l'argent sur notre dos tout en polluant notre pauvre planète ! Quel est le sens d'avoir accès à tous ces objets si nous fonçons vers notre autodestruction ?",
            "Ainsi vous exprimez-vous devant les caméras qui passent devant une de vos manifestations.",
            'show background riot',
            "2 mois se sont écoulés depuis le début de vos manifestations avec Jean-Marc JanKenobi. Et bien que vous ayez refusé l'offre de votre ancien patron, vous n'avez pas eu de nouvelles depuis, qui sait ce qu'il peut être en train de préparer ?",
            "Un matin, en vous préparant comme à votre habitude à aller militer pour le climat et pour votre cause, vous découvrez avec horreur de nombreuses notifications sur votre téléphone.",
            "Vous ne comprenez pas ce qu'il se passe et vous voyez un nombre incalculable d'appels manqués sur votre téléphone. Tandis que vous essayez de comprendre ce qu'il se passe, vous entendez quelqu'un qui sonne à votre porte, c'est votre mentor.",
            "Enfin ! Vous ne vous rendez pas compte de ce qu'il se passe dehors, tout l'internet s'embrase ! ",
            "Mais que se passe-t-il ?",
            'show background trial',
            "Industria Corp contre attaque. Ils ont fait de nombreux posts sur les réseaux sociaux pour te diffamer, ils ont réussi à réunir de nombreuses fausses preuves sur des crimes que tu aurais soit-disant commis. Tu es accusé tout d'abord de harcèlement, de racisme, de vol à multiple reprise, le tout au sein de l'entreprise. Tout se répandant à une vitesse folle car personne ne pense à vérifier les informations ! ",
            "Bien évidement de nombreuses personnes continuent de te soutenir mais toutes celles qui n'étaient pas au courant de la première affaire se tourne contre toi ! Il faut réagir !",
            "Tu pourras faire une conférence de presse en démontrant les impacts de notre mode de vie, ce qui serait une solution pacifique ou au contraire opter pour une solution offensive et contre attaquer sur les réseaux .",
            {'Choice': {
                    "Faire une conférence de presse": {
                        'Text': "Faire une conférence de presse",
                        'Do': 'jump Scene4GoodSideTelevision',
                    },
                    'Contre attaquer Industria Corp. sur les réseaux sociaux': {
                        'Text': 'Contre attaquer Industria Corp. sur les réseaux sociaux avec de faux documents',
                        'Do': 'jump Scene4BadSideSocialMedias',
                    }
                }}
        ],
        'Scene3BadSide':[
            'stop music',
            'show background xi_coal',
            'play music defeat with loop ',

            "Vous dénoncez une entreprise tout ça pour juste céder à la première menace ? A quoi bon ? Vous avez des personnes pour vous soutenir vous et l'environnement ! N'abandonnez pas pour si peu il y a encore tant de choses que vous pouvez accomplir !",
            "end"

        ],
        'Scene4GoodSideTelevision':[
            'stop music',
            'show background happy',
            'play music end with loop ',

            "Je sais que de nombreuses personnes sont hostiles vis à vis de ma personne à cause des récents messages sur les réseaux de mon ex-employeur. Tous ces posts sont frauduleux ! Les preuves ont été crées et les images sont générées par des IA ! N'avez-vous pas remarqué que mes mains sont mals dessinées ? Que certaines formes ne sont pas cohérentes ? En regardant les détails de la plupart de ces documents il est possible de vérifier qu'ils sont faux !",
            "Concernant toutes ces fake-news sur l'environnement, en cherchant parmis les revues scientifiques et les médias officiels, il est aussi assez aisé de démontrer que tous les propos de Industria Corp. sont mensongers !",
            "Laissez moi maintenant vous décrire de réelles façon que vous pouvez chacun indivuellement effectuer pour réduire votre impact environnemental !",
            "Tout d'abord, les 3 R : Réduire, Réutiliser, Recycler, cherchez à réduire la quantité de déchets que vous utilisez, réutilisez tout ce que vous pouvez et enfin, recycler tout ce qui reste ! Ce sont des petits gestes à la portée de tous !",
            "Ensuite un autre classique est d'économiser l'énergie. Vous n'utilisez plus une lumière ? Eteignez la ! Cela fera aussi grandement du bien à vos factures en hiver !",
            "Une méthode moins connue de réduire son impact environnemental est de diminuer sa consommation de viande, en effet, nos chères amies les bêtes sont de grandes productrices de CO2 tout au long de leur vie, ainsi qu'au passage à l'abattoir et à la transformation de la viande !",
            "Si vous avez de l'argent à investir, vous pouvez en profiter pour investir dans des projets durables (et non pas chez des pétroliers)",
            "Un dernier geste, serait de partager tous ces conseils à vos amis, votre famille et vos collègues !",
            "~~~Félicitations vous avez atteint la bonne fin du jeu ! ~~~",
            "end"
        ],
        'Scene4BadSideSocialMedias':[
            'stop music',
            'show background hatred',
            'play music defeat with loop ',

            "Salut tout le monde, je suis {{player.name}}. Je tenais à vous parler de quelque chose de grave. Industria Corp., cette entreprise malveillante, continue de détruire notre planète en polluant massivement. Ils se cachent derrière des mensonges et des manipulations, et il est temps de les exposer pour ce qu'ils sont réellement.",
            'show background disaster',
            "Voici des preuves choquantes de leur négligence. Ils ont détruit des écosystèmes, mis en danger des espèces en voie de disparition, tout au nom du profit. Partagez ces informations autant que possible. Ensemble, nous pouvons faire entendre notre voix et forcer Industria Corp. à rendre des comptes.",
            "Mais vous vous demandez si tous ces mensonges étaient nécessaires ? Après tout vous avez dénoncé dans vos nombreux discours les mensonges qui pouvaient circuler vis à vis de l'environnement sur les médias, donc quel sens cela peut avoir si vous y contribuez aussi ?",
            'end'
        ],
    }
});