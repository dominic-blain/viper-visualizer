const MODULES_SCHEMA = {
	"ModuleMarkdown": {
		"name": "ModuleMarkdown",
		"label": "Module Markdown",
		"optionsDefaults": [
			"normal",
			"normal",
			"normal",
			"normal",
			"center"
		],
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment"
		],
		"items": {
			"max": 1,
			"repeatable": false,
			"acceptedTypes": ["ItemMarkdown"]
		}
	},
	"ModuleImage": {
		"name": "ModuleImage",
		"label": "Module Image",
		"optionsDefaults": [
			"normal",
			"normal",
			"normal",
			"normal",
			"center"
		],
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment"
		],
		"items": {
			"max": 1,
			"repeatable": false,
			"acceptedTypes": ["ItemImage"]
		}
	},
	"ModuleGrid": {
		"name": "ModuleGrid",
		"label": "Module Grid",
		"optionsDefaults": [
			"normal",
			"normal",
			"normal",
			"normal",
			"center",
			"3",
			"normal",
			"normal"
		],
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment",
			"column-count",
			"vertical-gutter",
			"horizontal-gutter"
		],
		"items": {
			"max": -1,
			"repeatable": true,
			"acceptedTypes": [
				"ItemImage",
				"ItemMarkdown"
			],
			"options": [
				"column-span"
			]
		}
	}
};

export default MODULES_SCHEMA;