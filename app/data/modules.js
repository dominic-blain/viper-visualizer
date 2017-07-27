let MODULES = [
	{
		"content": [
			{
				"element": "h1",
				"content": [
					{
						"content": "Shift Click: l'extension Chrome qui a changé notre vie"
					}
				],
				"properties": [
					{
						"name": "fontSize",
						"syncWith": "font-size-title",
						"unit": "px"
					},
					{
						"name": "fontFamily",
						"syncWith": "font-main"
					}
				]
			}
		],
		"attr": {
			"className": "module-title"
		},
		"properties": [
			{
				"name": "maxWidth",
				"syncWith": "width-site",
				"unit": "px"
			},
			{
				"name": "marginBottom",
				"syncWith": "margin-normal",
				"unit": "px"
			}
		]
	},
	{
		"content": [
			{
				"element": "p",
				"content": "On perd du temps. À chaque jour. À chaque heure. Voici l'extension chrome qui nous évite de se tapper Google Dev Tools à chaque maudite fois que l'image n'est pas accessible au clique-droit.",
				"properties": [
					{
						"name": "fontSize",
						"syncWith": "font-size-important",
						"unit": "px"
					},
					{
						"name": "fontFamily",
						"syncWith": "font-alt"
					}
				]
			}
		],
		"attr": {
			"className": "module-intro"
		},
		"properties": [
			{
				"name": "maxWidth",
				"syncWith": "width-body",
				"unit": "px"
			},
			{
				"name": "marginBottom",
				"syncWith": "margin-normal",
				"unit": "px"
			},
			{
				"name": "marginTop",
				"syncWith": "margin-normal",
				"unit": "px"
			}
		]
	},
	{
		"content": [
			{
				"element": "img",
				"attr": {
					"src": "https://s-media-cache-ak0.pinimg.com/564x/52/17/87/52178786c4d7ec07115ab0f80fb93b96.jpg"
				}
			}
		],
		"attr": {
			"className": "module-body-image"
		},
		"properties": [
			{
				"name": "maxWidth",
				"syncWith": "width-body",
				"unit": "px"
			},
			{
				"name": "marginBottom",
				"syncWith": "margin-normal",
				"unit": "px"
			},
			{
				"name": "marginTop",
				"syncWith": "margin-normal",
				"unit": "px"
			}
		]
	},
	{
		"content": [
			{
				"element": "h2",
				"content": "On s'entend, ici on ne parle pas de problèmes de vie ou de mort",
				"properties": [
					{
						"name": "fontSize",
						"syncWith": "font-size-intertitle",
						"unit": "px"
					},
					{
						"name": "fontFamily",
						"syncWith": "font-main"
					}
				]
			}, {
				"element": "p",
				"content": "On parle d'une succession de petits irritants pas complètement handicapants, mais assuérment emmerdants. C'était un peu comme marche avec un caillou dans les bottonis, ça marche pareil, mais ça pourrait définitivement aller plus vite.",
				"properties": [
					{
						"name": "fontSize",
						"syncWith": "font-size-body",
						"unit": "px"
					},
					{
						"name": "fontFamily",
						"syncWith": "font-alt"
					}
				]
			}, {
				"element": "p",
				"content": "C'est en discutant que nous avons compris que l'ensemble des membres de notre équipe partageait les mêmes opinions sur l'extraction et le partage d'images. Nous nous sommes alors cencentrés sur la recherche active de l'outil parfait : une solution simple, sans interface, qui permettrait d'extraire et de partager une image de façon rapide et efficace",
				"properties": [
					{
						"name": "fontSize",
						"syncWith": "font-size-body",
						"unit": "px"
					},
					{
						"name": "fontFamily",
						"syncWith": "font-alt"
					}
				]
			}
		],
		"attr": {
			"className": "module-text"
		},
		"properties": [
			{
				"name": "maxWidth",
				"syncWith": "width-body",
				"unit": "px"
			},
			{
				"name": "marginBottom",
				"syncWith": "margin-normal",
				"unit": "px"
			},
			{
				"name": "marginTop",
				"syncWith": "margin-normal",
				"unit": "px"
			}
		]
	},
	{
		"content": [
			{
				"element": "div",
				"content": [
					{
						"element": "div",
						"content": [
							{
								"element": "img",
								"attr": {
									"src": "https://s-media-cache-ak0.pinimg.com/564x/52/17/87/52178786c4d7ec07115ab0f80fb93b96.jpg"
								}
							}
						],
						"properties": [
							{
								"name": "paddingLeft",
								"syncWith": "gutter-normal",
								"unit": "px"
							},
							{
								"name": "paddingTop",
								"syncWith": "gutter-normal",
								"unit": "px"
							}
						]
					},
					{
						"element": "div",
						"content": [
							{
								"element": "img",
								"attr": {
									"src": "https://s-media-cache-ak0.pinimg.com/564x/52/17/87/52178786c4d7ec07115ab0f80fb93b96.jpg"
								}
							}
						],
						"properties": [
							{
								"name": "paddingLeft",
								"syncWith": "gutter-normal",
								"unit": "px"
							},
							{
								"name": "paddingTop",
								"syncWith": "gutter-normal",
								"unit": "px"
							}
						]
					}
				],
				"attr": {
					"className": "grid"
				},
				"properties": [
					{
						"name": "marginLeft",
						"syncWith": "gutter-normal",
						"unit": "px",
						"modifier": "-1"
					},
					{
						"name": "marginTop",
						"syncWith": "gutter-normal",
						"unit": "px",
						"modifier": "-1"
					}
				]
			}
		],
		"attr": {
			"className": "module-image-2-col"
		},
		"properties": [
			{
				"name": "maxWidth",
				"syncWith": "width-oversize",
				"unit": "px"
			},
			{
				"name": "marginBottom",
				"syncWith": "margin-normal",
				"unit": "px"
			},
			{
				"name": "marginTop",
				"syncWith": "margin-normal",
				"unit": "px"
			}
		]
	}
];

export default MODULES;
