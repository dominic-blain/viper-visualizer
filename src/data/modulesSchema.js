const MODULES_SCHEMA = {
	"ModuleMarkdown": {
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