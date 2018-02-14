const MODULES = {
	"ModuleMarkdown": {
		"repeatable": false,
		"items": ["ItemMarkdown"],
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment"
		]
	},
	"ModuleImage": {
		"repeatable": false,
		"items": ["ItemImage"],
		"options": [
			"width",
			"security-padding",
			"space-before",
			"space-after",
			"alignment"
		]
	},
	"ModuleGrid": {
		"repeatable": true,
		"items": [
			"ItemImage",
			"ItemMarkdown"
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
		"itemOptions": [
			"column-span"
		]
	}
};

export default MODULES;